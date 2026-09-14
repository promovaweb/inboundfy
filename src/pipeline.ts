/** Atualiza o estado de uma peça e seus metadados de publicação. */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CliError } from "./errors.js";
import { readIndex, INDEX_PATHS, writeIndex } from "./project-structure.js";
import { resolvePortable, writeAtomic } from "./io.js";
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

export interface UpdateContentStatusOptions {
  status: ContentRecord["status"];
  url?: string;
  publishedAt?: string;
}

export async function updateContentStatus(
  projectRoot: string,
  id: string,
  options: UpdateContentStatusOptions,
): Promise<ContentRecord> {
  if (!PIPELINE_STATES.includes(options.status)) {
    throw new CliError(`Estado não suportado: ${options.status}`);
  }
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const position = index.items.findIndex((item) => item.id === normalizeId(id));
  if (position < 0) throw new CliError(`Peça não encontrada: ${id}`);
  const current = index.items[position];
  if (!current) throw new CliError(`Peça não encontrada: ${id}`);
  if (options.status === "publicado" && (!options.url || !options.publishedAt)) {
    throw new CliError("Uma peça publicada precisa de URL e data de publicação.");
  }

  const updated: ContentRecord = {
    ...current,
    status: options.status,
    ...(options.url ? { url: options.url } : {}),
    ...(options.publishedAt ? { publishedAt: options.publishedAt } : {}),
  };
  const filePath = resolvePortable(
    projectRoot,
    join(current.directory, "README.md"),
  );
  const source = await readFile(filePath, "utf8");
  const next = replaceFrontmatter(source, updated);
  await writeAtomic(projectRoot, filePath, next);
  const items = [...index.items];
  items[position] = updated;
  await writeIndex(projectRoot, INDEX_PATHS.conteudos, items);
  await syncCalendarStatus(projectRoot, updated);
  return updated;
}

function replaceFrontmatter(source: string, record: ContentRecord): string {
  const replace = (name: string, value: string): string =>
    source.replace(new RegExp(`^${name}:.*$`, "mu"), `${name}: ${value}`);
  let output = replace("estado", record.status);
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

function normalizeId(value: string): string {
  return value.replace(/^0+(?=\d)/u, "").padStart(4, "0");
}
