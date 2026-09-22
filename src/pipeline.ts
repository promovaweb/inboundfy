/** Mantém estados de conteúdo e exige relatórios ligados à versão revisada. */

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CliError } from "./errors.js";
import {
  assertNoSymlink,
  resolvePortable,
  writeAtomic,
} from "./io.js";
import {
  INDEX_PATHS,
  readIndex,
  writeIndex,
} from "./project-structure.js";
import type { ContentRecord } from "./types.js";
import { syncCalendarStatus } from "./calendar.js";

export const PIPELINE_STATES: readonly ContentRecord["status"][] = [
  "rascunho",
  "revisao",
  "aprovado",
  "agendado",
  "publicado",
  "arquivado",
];

/** Estados que podem seguir cada estado sem saltar uma revisão necessária. */
export const CONTENT_TRANSITIONS: Record<
  ContentRecord["status"],
  readonly ContentRecord["status"][]
> = {
  rascunho: ["revisao", "arquivado"],
  revisao: ["rascunho", "aprovado", "arquivado"],
  aprovado: ["revisao", "agendado", "publicado", "arquivado"],
  agendado: ["revisao", "aprovado", "publicado", "arquivado"],
  publicado: ["arquivado"],
  arquivado: [],
};

export interface UpdateContentStatusOptions {
  status: ContentRecord["status"];
  auditReport?: string;
  url?: string;
  publishedAt?: string;
}

export interface ContentDigest {
  id: string;
  asset: string;
  sha256: string;
}

/** Calcula uma impressão do arquivo que ignora apenas metadados mutáveis do pipeline. */
export async function getContentDigest(
  projectRoot: string,
  id: string,
): Promise<ContentDigest> {
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const record = index.items.find((item) => item.id === normalizeId(id));
  if (!record) throw new CliError(`Peça não encontrada: ${id}`);
  const asset = `${record.directory}/README.md`;
  const filePath = resolvePortable(projectRoot, asset);
  await assertNoSymlink(projectRoot, filePath);
  const source = await readFile(filePath, "utf8");
  return {
    id: record.id,
    asset,
    sha256: hashContent(source),
  };
}

/** Atualiza o estado, o README da peça, os índices e o calendário mensal. */
export async function updateContentStatus(
  projectRoot: string,
  id: string,
  options: UpdateContentStatusOptions,
): Promise<ContentRecord> {
  if (!PIPELINE_STATES.includes(options.status)) {
    throw new CliError(`Estado não suportado: ${options.status}`);
  }
  if (options.auditReport && options.status !== "aprovado") {
    throw new CliError("--audit-report só pode ser usado ao aprovar uma peça.");
  }

  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const position = index.items.findIndex((item) => item.id === normalizeId(id));
  if (position < 0) throw new CliError(`Peça não encontrada: ${id}`);
  const current = index.items[position];
  if (!current) throw new CliError(`Peça não encontrada: ${id}`);
  assertTransition(current.status, options.status);

  const publicationUrl = options.url
    ? normalizePublicationUrl(options.url)
    : undefined;
  if (options.publishedAt) validatePublicationDate(options.publishedAt);
  if (options.status === "publicado" && (!publicationUrl || !options.publishedAt)) {
    throw new CliError(
      "Uma peça publicada precisa de URL HTTP(S) e data válida no formato AAAA-MM-DD.",
    );
  }

  const asset = `${current.directory}/README.md`;
  const filePath = resolvePortable(projectRoot, asset);
  await assertNoSymlink(projectRoot, filePath);
  const source = await readFile(filePath, "utf8");
  const currentDigest = hashContent(source);

  let auditReport = current.auditReport;
  let approvedAssetSha256 = current.approvedAssetSha256;

  if (options.status === "aprovado" && options.auditReport) {
    await validateAuditReport(
      projectRoot,
      options.auditReport,
      current,
      asset,
      currentDigest,
    );
    auditReport = options.auditReport;
    approvedAssetSha256 = currentDigest;
  } else if (options.status === "aprovado" && current.status === "revisao") {
    throw new CliError(
      "A aprovação exige --audit-report com veredito, ID, caminho e SHA-256 correspondentes à peça.",
    );
  } else if (["aprovado", "agendado", "publicado"].includes(options.status)) {
    await validateStoredApproval(
      projectRoot,
      current,
      asset,
      currentDigest,
    );
  }

  const updated: ContentRecord = {
    ...current,
    status: options.status,
    ...(publicationUrl ? { url: publicationUrl } : {}),
    ...(options.publishedAt ? { publishedAt: options.publishedAt } : {}),
  };

  if (options.status === "revisao" || options.status === "rascunho") {
    delete updated.auditReport;
    delete updated.approvedAssetSha256;
  } else {
    if (auditReport) updated.auditReport = auditReport;
    if (approvedAssetSha256) updated.approvedAssetSha256 = approvedAssetSha256;
  }

  const next = replaceFrontmatter(source, updated);
  await writeAtomic(projectRoot, filePath, next);
  const items = [...index.items];
  items[position] = updated;
  await writeIndex(projectRoot, INDEX_PATHS.conteudos, items);
  await syncCalendarStatus(projectRoot, updated);
  return updated;
}

function assertTransition(
  current: ContentRecord["status"],
  next: ContentRecord["status"],
): void {
  if (current === next || CONTENT_TRANSITIONS[current].includes(next)) return;
  const allowed = CONTENT_TRANSITIONS[current];
  throw new CliError(
    `Transição inválida: ${current} → ${next}. Estados permitidos: ${allowed.join(", ") || "nenhum"}.`,
  );
}

/** Aceita somente endereços absolutos web e os normaliza antes do frontmatter. */
function normalizePublicationUrl(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new CliError("A URL informada precisa ser um endereço HTTP ou HTTPS válido.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new CliError("A URL informada precisa usar HTTP ou HTTPS.");
  }
  return url.toString();
}

/** Confere formato e existência da data civil antes de registrar publicação. */
function validatePublicationDate(value: string): void {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) {
    throw new CliError("A data de publicação precisa usar o formato AAAA-MM-DD.");
  }
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new CliError("A data de publicação precisa ser uma data válida no formato AAAA-MM-DD.");
  }
}

async function validateAuditReport(
  projectRoot: string,
  reportPath: string,
  record: ContentRecord,
  asset: string,
  digest: string,
): Promise<void> {
  const absoluteReportPath = resolvePortable(projectRoot, reportPath);
  await assertNoSymlink(projectRoot, absoluteReportPath);
  const report = await readFile(absoluteReportPath, "utf8");
  const id = reportField(report, "ID da peça");
  const reportAsset = reportField(report, "Asset");
  const reportDigest = reportField(report, "SHA-256 da peça")?.toLowerCase();
  const verdict = reportField(report, "Veredito")?.toLocaleLowerCase("pt-BR");

  if (id !== record.id) {
    throw new CliError(`O relatório precisa identificar a peça ${record.id}.`);
  }
  if (reportAsset !== asset) {
    throw new CliError(`O relatório precisa apontar para ${asset}.`);
  }
  if (!reportDigest || !/^[a-f0-9]{64}$/u.test(reportDigest)) {
    throw new CliError("O relatório precisa registrar o SHA-256 completo da peça.");
  }
  if (reportDigest !== digest) {
    throw new CliError("O SHA-256 do relatório não corresponde ao arquivo atual da peça.");
  }
  if (verdict !== "aprovado") {
    throw new CliError("O relatório precisa declarar **Veredito:** aprovado.");
  }
}

async function validateStoredApproval(
  projectRoot: string,
  record: ContentRecord,
  asset: string,
  currentDigest: string,
): Promise<void> {
  if (!record.auditReport || !record.approvedAssetSha256) {
    throw new CliError(
      "A peça não tem uma validação vinculada. Retorne a peça para revisao e aprove com --audit-report.",
    );
  }
  if (record.approvedAssetSha256 !== currentDigest) {
    throw new CliError(
      "O arquivo mudou depois da validação. Retorne a peça para revisao e gere um novo relatório.",
    );
  }
  await validateAuditReport(
    projectRoot,
    record.auditReport,
    record,
    asset,
    currentDigest,
  );
}

function reportField(report: string, name: string): string | undefined {
  const prefix = `- **${name}:**`;
  const line = report.split(/\r?\n/u).find((item) => item.startsWith(prefix));
  const value = line?.slice(prefix.length).trim();
  if (!value) return undefined;
  return value.replace(/^`([^`]*)`$/u, "$1");
}

function hashContent(source: string): string {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/u.exec(source);
  let stableSource = source;
  if (frontmatter?.[0] && frontmatter[1] !== undefined) {
    const stableFields = frontmatter[1]
      .split(/\r?\n/u)
      .filter(
        (line) =>
          !/^(?:estado|relatorio_validacao|sha256_aprovado|url|publicado_em):/u.test(
            line,
          ),
      );
    const remainder = source.slice(frontmatter[0].length);
    stableSource = `---\n${stableFields.join("\n")}\n---\n${remainder}`;
  }
  return createHash("sha256").update(stableSource).digest("hex");
}

function replaceFrontmatter(source: string, record: ContentRecord): string {
  const replace = (name: string, value: string): string =>
    source.replace(new RegExp(`^${name}:.*$`, "mu"), `${name}: ${value}`);
  let output = replace("estado", record.status);
  output = record.auditReport
    ? ensureFrontmatterField(output, "relatorio_validacao", record.auditReport)
    : removeFrontmatterField(output, "relatorio_validacao");
  output = record.approvedAssetSha256
    ? ensureFrontmatterField(output, "sha256_aprovado", record.approvedAssetSha256)
    : removeFrontmatterField(output, "sha256_aprovado");
  if (record.url) output = ensureFrontmatterField(output, "url", record.url);
  if (record.publishedAt) {
    output = ensureFrontmatterField(output, "publicado_em", record.publishedAt);
  }
  return output;
}

function ensureFrontmatterField(source: string, name: string, value: string): string {
  const line = `${name}: "${value.replaceAll('"', '\\"')}"`;
  if (new RegExp(`^${name}:`, "mu").test(source)) {
    return source.replace(new RegExp(`^${name}:.*$`, "mu"), line);
  }
  return source.replace(/^---\n/u, `---\n${line}\n`);
}

function removeFrontmatterField(source: string, name: string): string {
  return source.replace(new RegExp(`^${name}:.*(?:\\r?\\n|$)`, "mu"), "");
}

function normalizeId(value: string): string {
  return value.replace(/^0+(?=\d)/u, "").padStart(4, "0");
}
