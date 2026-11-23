/**
 * Layout of a consumer project and access to its indices.
 *
 * The framework lives in `.inboundfy/framework/`; the project data lives in
 * `.inboundfy/`, `.inboundfy/context/`, `acervo/`, `canais/` and
 * `calendario/`. The three JSON indices in `.inboundfy/indices/` are the
 * single source of truth read by the CLI, the TUI and the MCP server.
 */
import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import { error } from "../app/errors.ts";
import { exists, readJson, resolvePortable, writeAtomic } from "./io.ts";
import type { ArchiveRecord, ChannelId, ContentRecord, ProjectIndex } from "./types.ts";

export const CONFIG_DIRECTORY = ".inboundfy";
export const FRAMEWORK_DIRECTORY = ".inboundfy/framework";
export const PROJECT_DIRECTORIES = { acervo: "acervo", canais: "canais", calendario: "calendario" } as const;

/** Channels supported by the framework, in display order. */
export const CHANNELS: readonly ChannelId[] = ["blog", "email", "linkedin", "instagram", "substack", "youtube"];

export const INDEX_PATHS = {
  acervo: ".inboundfy/indices/acervo.json",
  conteudos: ".inboundfy/indices/conteudos.json",
  calendario: ".inboundfy/indices/calendario.json",
} as const;

/** Context files the setup skill fills, in reading order. */
export const PROJECT_CONFIG_FILES = [
  ".inboundfy/context/empresa.md",
  ".inboundfy/estrategia.md",
  ".inboundfy/context/marca-voz.md",
  ".inboundfy/context/publico.md",
  ".inboundfy/context/proibicoes.md",
  ".inboundfy/context/glossario.md",
  ".inboundfy/context/links.md",
  ".inboundfy/pipeline.md",
  ".inboundfy/context/aprendizado.md",
] as const;

/** Label used for a channel in `.inboundfy/estrategia.md` checkboxes. */
export function channelLabel(channel: ChannelId): string {
  if (channel === "email") return "Email";
  if (channel === "linkedin") return "LinkedIn";
  if (channel === "youtube") return "YouTube";
  return channel.charAt(0).toUpperCase() + channel.slice(1);
}

/** Parses a channel id or throws USAGE with the accepted values. */
export function parseChannel(value: string): ChannelId {
  const channel = value.trim().toLowerCase() as ChannelId;
  if (!CHANNELS.includes(channel)) throw error.usage(`Unsupported channel: ${value}. Use one of: ${CHANNELS.join(", ")}.`, { channel: value });
  return channel;
}

/** Creates `.inboundfy/`, the data directories and empty indices. */
export async function ensureProjectStructure(projectRoot: string, options: { dryRun?: boolean } = {}): Promise<void> {
  if (options.dryRun) return;
  await mkdir(resolvePortable(projectRoot, `${CONFIG_DIRECTORY}/indices`), { recursive: true });
  for (const directory of Object.values(PROJECT_DIRECTORIES)) {
    await mkdir(resolvePortable(projectRoot, directory), { recursive: true });
  }
  for (const path of Object.values(INDEX_PATHS)) {
    if (!(await exists(resolvePortable(projectRoot, path)))) await writeIndex(projectRoot, path, []);
  }
}

/** Creates `canais/<channel>/` for each supported channel given. */
export async function ensureChannelDirectories(projectRoot: string, channels: readonly ChannelId[], options: { dryRun?: boolean } = {}): Promise<void> {
  if (options.dryRun) return;
  for (const channel of channels) {
    if (!CHANNELS.includes(channel)) continue;
    await mkdir(resolvePortable(projectRoot, join(PROJECT_DIRECTORIES.canais, channel)), { recursive: true });
  }
}

/** Channels checked (`- [x] Blog`) in `.inboundfy/estrategia.md`. */
export async function readSelectedChannels(projectRoot: string): Promise<ChannelId[]> {
  const path = resolvePortable(projectRoot, ".inboundfy/estrategia.md");
  if (!(await exists(path))) return [];
  const content = await readFile(path, "utf8");
  return CHANNELS.filter((channel) => new RegExp(`^- \\[[xX]\\] ${channelLabel(channel)}\\s*$`, "mu").test(content));
}

const indexSchema = z.object({ schemaVersion: z.literal(1), generatedAt: z.string().optional(), items: z.array(z.unknown()) });

/** Reads an index; a missing file is an empty index. */
export async function readIndex<T>(projectRoot: string, relativePath: string): Promise<ProjectIndex<T>> {
  const path = resolvePortable(projectRoot, relativePath);
  if (!(await exists(path))) return { schemaVersion: 1, generatedAt: new Date().toISOString(), items: [] };
  const parsed = indexSchema.safeParse(await readJson<unknown>(path));
  if (!parsed.success) throw error.conflict(`Invalid index: ${relativePath}. Expected { schemaVersion: 1, items: [] }.`, { path: relativePath });
  return { schemaVersion: 1, generatedAt: parsed.data.generatedAt ?? new Date().toISOString(), items: parsed.data.items as T[] };
}

/** Rewrites an index atomically with a fresh `generatedAt`. */
export async function writeIndex<T>(projectRoot: string, relativePath: string, items: T[]): Promise<void> {
  await writeAtomic(projectRoot, resolvePortable(projectRoot, relativePath), `${JSON.stringify({ schemaVersion: 1, generatedAt: new Date().toISOString(), items }, null, 2)}\n`);
}

/** Reads the archive and content indices together. */
export async function readArchiveAndContent(projectRoot: string): Promise<{ archive: ArchiveRecord[]; content: ContentRecord[] }> {
  const [archive, content] = await Promise.all([
    readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo),
    readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos),
  ]);
  return { archive: archive.items, content: content.items };
}
