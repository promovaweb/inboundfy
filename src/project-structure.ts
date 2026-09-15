/**
 * Contrato de separação entre o framework e um projeto que o utiliza.
 */

import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { exists, resolvePortable, writeAtomic } from "./io.js";
import type { ChannelId, ContentRecord, ProjectIndex, AcervoRecord } from "./types.js";

export const CONFIG_DIRECTORY = ".inboundfy";
export const FRAMEWORK_DIRECTORY = ".inboundfy/framework";
export const PROJECT_DIRECTORIES = {
  acervo: "acervo",
  canais: "canais",
  calendario: "calendario",
} as const;

export const CHANNELS: readonly ChannelId[] = [
  "blog",
  "email",
  "linkedin",
  "instagram",
  "substack",
  "youtube",
];

export const INDEX_PATHS = {
  acervo: ".inboundfy/indices/acervo.json",
  conteudos: ".inboundfy/indices/conteudos.json",
  calendario: ".inboundfy/indices/calendario.json",
} as const;

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

export async function ensureProjectStructure(
  projectRoot: string,
  options: { dryRun?: boolean } = {},
): Promise<void> {
  if (options.dryRun) return;
  await mkdir(resolvePortable(projectRoot, CONFIG_DIRECTORY), { recursive: true });
  await mkdir(resolvePortable(projectRoot, `${CONFIG_DIRECTORY}/indices`), {
    recursive: true,
  });
  for (const directory of Object.values(PROJECT_DIRECTORIES)) {
    await mkdir(resolvePortable(projectRoot, directory), { recursive: true });
  }
  await ensureIndex<AcervoRecord>(projectRoot, INDEX_PATHS.acervo);
  await ensureIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  await ensureIndex<Record<string, unknown>>(projectRoot, INDEX_PATHS.calendario);
}

export async function ensureChannelDirectories(
  projectRoot: string,
  channels: readonly ChannelId[],
  options: { dryRun?: boolean } = {},
): Promise<void> {
  if (options.dryRun) return;
  for (const channel of channels) {
    if (!CHANNELS.includes(channel)) continue;
    await mkdir(resolvePortable(projectRoot, join(PROJECT_DIRECTORIES.canais, channel)), {
      recursive: true,
    });
  }
}

export async function readSelectedChannels(projectRoot: string): Promise<ChannelId[]> {
  const path = resolvePortable(projectRoot, ".inboundfy/estrategia.md");
  if (!(await exists(path))) return [];
  const content = await readFile(path, "utf8");
  return CHANNELS.filter((channel) =>
    new RegExp(`^- \\[[xX]\\] ${channelLabel(channel)}\\s*$`, "mu").test(content),
  );
}

export async function readIndex<T>(
  projectRoot: string,
  relativePath: string,
): Promise<ProjectIndex<T>> {
  const path = resolvePortable(projectRoot, relativePath);
  if (!(await exists(path))) {
    return { schemaVersion: 1, generatedAt: new Date().toISOString(), items: [] };
  }
  const { readJson } = await import("./io.js");
  const value = await readJson<Partial<ProjectIndex<T>>>(path);
  if (value.schemaVersion !== 1 || !Array.isArray(value.items)) {
    throw new Error(`Índice inválido: ${relativePath}`);
  }
  return {
    schemaVersion: 1,
    generatedAt: typeof value.generatedAt === "string" ? value.generatedAt : new Date().toISOString(),
    items: value.items,
  };
}

export async function writeIndex<T>(
  projectRoot: string,
  relativePath: string,
  items: T[],
): Promise<void> {
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, relativePath),
    `${JSON.stringify({ schemaVersion: 1, generatedAt: new Date().toISOString(), items }, null, 2)}\n`,
  );
}

async function ensureIndex<T>(projectRoot: string, relativePath: string): Promise<void> {
  const path = resolvePortable(projectRoot, relativePath);
  if (await exists(path)) return;
  await writeIndex<T>(projectRoot, relativePath, []);
}

function channelLabel(channel: ChannelId): string {
  if (channel === "email") return "Email";
  if (channel === "linkedin") return "LinkedIn";
  return channel.charAt(0).toUpperCase() + channel.slice(1);
}
