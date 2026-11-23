/**
 * Framework payload: the immutable files the installer copies to a project.
 *
 * In the compiled binary the files come from the embedded gzip bundle; with
 * `bun run` they are read from the repository through the same source list.
 * Each `collect*` function maps payload sources to their target path in the
 * consumer project.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { gunzipSync } from "node:zlib";
import { manifest } from "../app/manifest.ts";
import { FRAMEWORK_FILES, listPayloadSources } from "./payload-sources.ts";
import type { ManagedFile } from "./types.ts";

/** One file ready to be written into a project. */
export interface PayloadFile {
  sourceRelative: string;
  targetRelative: string;
  content: Buffer;
  sha256: string;
  category: ManagedFile["category"];
}

/** SHA-256 in the representation used by manifests. */
export function sha256(content: Uint8Array | string): string {
  return createHash("sha256").update(content).digest("hex");
}

/** Repository root when running from source. */
export const REPOSITORY_ROOT = resolve(import.meta.dir, "..", "..");

/** `true` inside an executable produced by `bun build --compile`. */
export function isCompiled(): boolean {
  return import.meta.dir.includes("$bunfs") || import.meta.dir.includes("~BUN");
}

let cache: Map<string, Buffer> | undefined;

/** Loads every payload source once, from the bundle or from disk. */
export async function loadPayload(): Promise<Map<string, Buffer>> {
  if (cache) return cache;
  const files = new Map<string, Buffer>();
  if (isCompiled()) {
    const { default: bundlePath } = await import("./payload-embed.ts");
    const data = JSON.parse(gunzipSync(Buffer.from(await Bun.file(bundlePath).arrayBuffer())).toString("utf8")) as {
      files: Array<{ path: string; base64: string }>;
    };
    for (const file of data.files) files.set(file.path, Buffer.from(file.base64, "base64"));
  } else {
    for (const path of listPayloadSources(REPOSITORY_ROOT)) files.set(path, readFileSync(join(REPOSITORY_ROOT, path)));
  }
  cache = files;
  return files;
}

/** Framework version shipped by this binary. */
export function frameworkVersion(): string {
  return manifest.version;
}

function file(sources: Map<string, Buffer>, source: string, target: string, category: ManagedFile["category"]): PayloadFile {
  const content = sources.get(source);
  if (!content) throw new Error(`Payload source missing: ${source}`);
  return { sourceRelative: source, targetRelative: target, content, sha256: sha256(content), category };
}

function under(sources: Map<string, Buffer>, prefix: string): string[] {
  return [...sources.keys()].filter((path) => path.startsWith(`${prefix}/`)).sort();
}

/** Framework files only, kept apart from the consumer data. */
export async function collectFrameworkPayload(): Promise<PayloadFile[]> {
  const sources = await loadPayload();
  const payload: PayloadFile[] = [];
  for (const name of FRAMEWORK_FILES) payload.push(file(sources, name, `.inboundfy/framework/${name}`, "framework"));
  for (const path of [...under(sources, "docs"), "docs/README.md"].filter((p) => sources.has(p))) {
    payload.push(file(sources, path, `.inboundfy/framework/${path}`, "documentation"));
  }
  for (const path of under(sources, "ebook")) payload.push(file(sources, path, `.inboundfy/framework/${path}`, "ebook"));
  for (const path of under(sources, "brand")) payload.push(file(sources, path, `.inboundfy/framework/${path}`, "documentation"));
  for (const name of ["brainstorm.md", "fontes-projeto.md"]) {
    payload.push(file(sources, `templates/${name}`, `.inboundfy/framework/templates/${name}`, "template"));
  }
  for (const path of under(sources, "context")) {
    if (path.endsWith("/README.md")) continue;
    payload.push(file(sources, path, `.inboundfy/framework/${path}`, "template"));
  }
  const unique = new Map(payload.map((item) => [item.targetRelative, item]));
  return [...unique.values()].sort((a, b) => a.targetRelative.localeCompare(b.targetRelative));
}

/** Templates that receive project-specific data and are never overwritten. */
export async function collectProjectTemplates(): Promise<PayloadFile[]> {
  const sources = await loadPayload();
  return [
    ...["estrategia.md", "pipeline.md", "README.md"].map((name) => file(sources, `templates/project/${name}`, `.inboundfy/${name}`, "template")),
    file(sources, "templates/acervo-readme.md", "acervo/README.md", "template"),
    file(sources, "templates/canais-readme.md", "canais/README.md", "template"),
    file(sources, "templates/calendario-readme.md", "calendario/README.md", "template"),
  ];
}

/** Every published skill, pointed at the selected skills directory. */
export async function collectSkillsPayload(skillsDirectory: string): Promise<PayloadFile[]> {
  const sources = await loadPayload();
  return under(sources, "skills")
    .filter((path) => {
      const top = path.split("/")[1] ?? "";
      return top === "_shared" || top === "inboundfy" || top.startsWith("inboundfy-");
    })
    .map((path) => file(sources, path, `${skillsDirectory}/${path.slice("skills/".length)}`, "skill"));
}

/** Context templates that must exist in the user space. */
export async function collectContextTemplates(): Promise<PayloadFile[]> {
  const sources = await loadPayload();
  return under(sources, "context")
    .filter((path) => !path.endsWith("/README.md"))
    .map((path) => file(sources, path, `.inboundfy/${path}`, "template"));
}

/** Number of skills shipped (directories `inboundfy` and `inboundfy-*`). */
export async function countShippedSkills(): Promise<number> {
  const sources = await loadPayload();
  const names = new Set(
    under(sources, "skills")
      .map((path) => path.split("/")[1] ?? "")
      .filter((name) => name === "inboundfy" || name.startsWith("inboundfy-")),
  );
  return names.size;
}
