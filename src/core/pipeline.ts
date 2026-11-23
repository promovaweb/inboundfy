/**
 * Pipeline states of channel pieces and approval tied to a reviewed version.
 *
 * Approving a piece in `revisao` requires a validation report whose fields
 * (`ID da peça`, `Asset`, `SHA-256 da peça`, `Veredito: aprovado`) match the
 * current file. The digest ignores only the mutable pipeline fields of the
 * frontmatter, so editing the text after approval forces a new review.
 */
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { error } from "../app/errors.ts";
import { syncCalendarStatus } from "./calendar.ts";
import { assertDate } from "./calendar.ts";
import { assertNoSymlink, normalizeId, resolvePortable, writeAtomic } from "./io.ts";
import { INDEX_PATHS, readIndex, writeIndex } from "./project.ts";
import type { ContentRecord, ContentStatus } from "./types.ts";

/** Pipeline states in order. */
export const PIPELINE_STATES: readonly ContentStatus[] = ["rascunho", "revisao", "aprovado", "agendado", "publicado", "arquivado"];

/** States that may follow each state without skipping a required review. */
export const CONTENT_TRANSITIONS: Record<ContentStatus, readonly ContentStatus[]> = {
  rascunho: ["revisao", "arquivado"],
  revisao: ["rascunho", "aprovado", "arquivado"],
  aprovado: ["revisao", "agendado", "publicado", "arquivado"],
  agendado: ["revisao", "aprovado", "publicado", "arquivado"],
  publicado: ["arquivado"],
  arquivado: [],
};

/** Input for `updateContentStatus`. */
export interface UpdateContentStatusOptions {
  status: string;
  auditReport?: string;
  url?: string;
  publishedAt?: string;
}

/** Digest of a piece used to bind the validation report. */
export interface ContentDigest {
  id: string;
  asset: string;
  sha256: string;
}

async function findPiece(projectRoot: string, id: string) {
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const position = index.items.findIndex((item) => item.id === normalizeId(id));
  const record = index.items[position];
  if (position < 0 || !record) throw error.notFound(`Content piece not found: ${id}`, { id });
  return { index, position, record };
}

/** Digest of the piece README that ignores only mutable pipeline metadata. */
export async function getContentDigest(projectRoot: string, id: string): Promise<ContentDigest> {
  const { record } = await findPiece(projectRoot, id);
  const asset = `${record.directory}/README.md`;
  const filePath = resolvePortable(projectRoot, asset);
  await assertNoSymlink(projectRoot, filePath);
  return { id: record.id, asset, sha256: hashContent(await readFile(filePath, "utf8")) };
}

/** Moves a piece to another state, updating README, indices and calendar. */
export async function updateContentStatus(projectRoot: string, id: string, options: UpdateContentStatusOptions): Promise<ContentRecord> {
  if (!PIPELINE_STATES.includes(options.status as ContentStatus)) throw error.usage(`Unsupported status: ${options.status}. Use one of: ${PIPELINE_STATES.join(", ")}.`, { status: options.status });
  const status = options.status as ContentStatus;
  if (options.auditReport && status !== "aprovado") throw error.usage("--audit-report is only accepted when approving a piece.");

  const { index, position, record: current } = await findPiece(projectRoot, id);
  if (current.status !== status && !CONTENT_TRANSITIONS[current.status].includes(status)) {
    throw error.conflict(`Invalid transition: ${current.status} → ${status}. Allowed: ${CONTENT_TRANSITIONS[current.status].join(", ") || "none"}.`, {
      from: current.status,
      to: status,
      allowed: CONTENT_TRANSITIONS[current.status],
    });
  }
  const publicationUrl = options.url ? normalizePublicationUrl(options.url) : undefined;
  if (options.publishedAt) assertDate(options.publishedAt, "publication date");
  if (status === "publicado" && (!publicationUrl || !options.publishedAt)) throw error.usage("A published piece needs --url (HTTP or HTTPS) and --published-at (YYYY-MM-DD).");

  const asset = `${current.directory}/README.md`;
  const filePath = resolvePortable(projectRoot, asset);
  await assertNoSymlink(projectRoot, filePath);
  const source = await readFile(filePath, "utf8");
  const digest = hashContent(source);
  let auditReport = current.auditReport;
  let approvedAssetSha256 = current.approvedAssetSha256;

  if (status === "aprovado" && options.auditReport) {
    await validateAuditReport(projectRoot, options.auditReport, current, asset, digest);
    auditReport = options.auditReport;
    approvedAssetSha256 = digest;
  } else if (status === "aprovado" && current.status === "revisao") {
    throw error.usage("Approval requires --audit-report with verdict, id, path and SHA-256 matching the piece. Get the digest with: inboundfy content digest " + current.id);
  } else if (["aprovado", "agendado", "publicado"].includes(status)) {
    await validateStoredApproval(projectRoot, current, asset, digest);
  }

  const updated: ContentRecord = { ...current, status, ...(publicationUrl ? { url: publicationUrl } : {}), ...(options.publishedAt ? { publishedAt: options.publishedAt } : {}) };
  if (status === "revisao" || status === "rascunho") {
    delete updated.auditReport;
    delete updated.approvedAssetSha256;
  } else {
    if (auditReport) updated.auditReport = auditReport;
    if (approvedAssetSha256) updated.approvedAssetSha256 = approvedAssetSha256;
  }
  await writeAtomic(projectRoot, filePath, replaceFrontmatter(source, updated));
  const items = [...index.items];
  items[position] = updated;
  await writeIndex(projectRoot, INDEX_PATHS.conteudos, items);
  await syncCalendarStatus(projectRoot, updated);
  return updated;
}

function normalizePublicationUrl(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw error.usage("The URL must be a valid HTTP or HTTPS address.", { url: value });
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") throw error.usage("The URL must use HTTP or HTTPS.", { url: value });
  return url.toString();
}

async function validateAuditReport(projectRoot: string, reportPath: string, record: ContentRecord, asset: string, digest: string): Promise<void> {
  const absolute = resolvePortable(projectRoot, reportPath);
  await assertNoSymlink(projectRoot, absolute);
  let report: string;
  try {
    report = await readFile(absolute, "utf8");
  } catch {
    throw error.notFound(`Validation report not found: ${reportPath}`, { path: reportPath });
  }
  const reportId = reportField(report, "ID da peça");
  const reportAsset = reportField(report, "Asset");
  const reportDigest = reportField(report, "SHA-256 da peça")?.toLowerCase();
  const verdict = reportField(report, "Veredito")?.toLocaleLowerCase("pt-BR");
  if (reportId !== record.id) throw error.conflict(`The report must identify piece ${record.id} (field "ID da peça").`);
  if (reportAsset !== asset) throw error.conflict(`The report must point to ${asset} (field "Asset").`);
  if (!reportDigest || !/^[a-f0-9]{64}$/u.test(reportDigest)) throw error.conflict('The report must record the full SHA-256 of the piece (field "SHA-256 da peça").');
  if (reportDigest !== digest) throw error.conflict("The report SHA-256 does not match the current file of the piece.");
  if (verdict !== "aprovado") throw error.conflict('The report must declare "**Veredito:** aprovado".');
}

async function validateStoredApproval(projectRoot: string, record: ContentRecord, asset: string, digest: string): Promise<void> {
  if (!record.auditReport || !record.approvedAssetSha256) throw error.conflict("The piece has no linked validation. Move it back to revisao and approve with --audit-report.");
  if (record.approvedAssetSha256 !== digest) throw error.conflict("The file changed after validation. Move the piece back to revisao and produce a new report.");
  await validateAuditReport(projectRoot, record.auditReport, record, asset, digest);
}

function reportField(report: string, name: string): string | undefined {
  const prefix = `- **${name}:**`;
  const value = report
    .split(/\r?\n/u)
    .find((line) => line.startsWith(prefix))
    ?.slice(prefix.length)
    .trim();
  return value ? value.replace(/^`([^`]*)`$/u, "$1") : undefined;
}

function hashContent(source: string): string {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/u.exec(source);
  let stable = source;
  if (frontmatter?.[0] && frontmatter[1] !== undefined) {
    const fields = frontmatter[1].split(/\r?\n/u).filter((line) => !/^(?:estado|relatorio_validacao|sha256_aprovado|url|publicado_em):/u.test(line));
    stable = `---\n${fields.join("\n")}\n---\n${source.slice(frontmatter[0].length)}`;
  }
  return createHash("sha256").update(stable).digest("hex");
}

function replaceFrontmatter(source: string, record: ContentRecord): string {
  let output = source.replace(/^estado:.*$/mu, `estado: ${record.status}`);
  output = record.auditReport ? ensureField(output, "relatorio_validacao", record.auditReport) : removeField(output, "relatorio_validacao");
  output = record.approvedAssetSha256 ? ensureField(output, "sha256_aprovado", record.approvedAssetSha256) : removeField(output, "sha256_aprovado");
  if (record.url) output = ensureField(output, "url", record.url);
  if (record.publishedAt) output = ensureField(output, "publicado_em", record.publishedAt);
  return output;
}

function ensureField(source: string, name: string, value: string): string {
  const line = `${name}: "${value.replaceAll('"', '\\"')}"`;
  if (new RegExp(`^${name}:`, "mu").test(source)) return source.replace(new RegExp(`^${name}:.*$`, "mu"), line);
  return source.replace(/^---\n/u, `---\n${line}\n`);
}

function removeField(source: string, name: string): string {
  return source.replace(new RegExp(`^${name}:.*(?:\\r?\\n|$)`, "mu"), "");
}
