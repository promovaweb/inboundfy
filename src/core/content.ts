/**
 * Channel pieces (`canais/<channel>/NNNN-AAAA-MM-DD-slug/README.md`).
 *
 * A piece is created as `rascunho`, linked to personas and archive items,
 * and recorded in `.inboundfy/indices/conteudos.json`. The archive items it
 * uses gain the channel in their `channels` list.
 */
import { join } from "node:path";
import { error } from "../app/errors.ts";
import { nextNumber, normalizeId, resolvePortable, slugify, writeAtomic } from "./io.ts";
import { ensureChannelDirectories, INDEX_PATHS, PROJECT_DIRECTORIES, parseChannel, readIndex, readSelectedChannels, writeIndex } from "./project.ts";
import type { ArchiveRecord, ContentRecord } from "./types.ts";

/** Input for `createContent`. */
export interface CreateContentOptions {
  channel: string;
  title: string;
  personas: string[];
  archive: string[];
  createdAt?: string;
}

/** Creates the piece directory with README and frontmatter. */
export async function createContent(projectRoot: string, options: CreateContentOptions): Promise<ContentRecord> {
  const channel = parseChannel(options.channel);
  const title = options.title.trim();
  if (!title) throw error.usage("A content piece needs a title.");
  if (!options.personas.length) throw error.usage("A content piece needs at least one persona (--persona).");
  const selected = await readSelectedChannels(projectRoot);
  if (!selected.includes(channel)) {
    throw error.conflict(`Channel ${channel} is not checked in .inboundfy/estrategia.md. Checked: ${selected.join(", ") || "none"}.`, { channel, selected });
  }
  const createdAt = options.createdAt ?? new Date().toISOString();
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const archiveIndex = await readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo);
  const archiveIds = options.archive.map(normalizeId);
  const archiveItems = archiveIds.map((id) => archiveIndex.items.find((item) => item.id === id));
  const missing = archiveIds.filter((_, i) => !archiveItems[i]);
  if (missing.length) throw error.notFound(`Archive items not found: ${missing.join(", ")}`, { missing });

  const id = String(nextNumber(index.items.map((item) => item.id))).padStart(4, "0");
  const slug = slugify(title);
  const directory = `${PROJECT_DIRECTORIES.canais}/${channel}/${id}-${createdAt.slice(0, 10)}-${slug}`;
  await ensureChannelDirectories(projectRoot, [channel]);
  const record: ContentRecord = {
    id,
    channel,
    title,
    slug,
    directory,
    createdAt,
    status: "rascunho",
    personas: options.personas,
    acervo: archiveIds,
    baseEditorial: archiveItems.map((item) => `${item?.directory}/base-editorial.md`),
  };
  await writeAtomic(projectRoot, resolvePortable(projectRoot, join(directory, "README.md")), renderContent(record));
  await writeIndex(projectRoot, INDEX_PATHS.conteudos, [...index.items, record]);
  if (archiveIds.length) {
    const ids = new Set(archiveIds);
    await writeIndex(
      projectRoot,
      INDEX_PATHS.acervo,
      archiveIndex.items.map((item) => (ids.has(item.id) && !item.channels.includes(channel) ? { ...item, channels: [...item.channels, channel] } : item)),
    );
  }
  return record;
}

/** Pieces sorted by id, optionally filtered by channel or status. */
export async function listContent(projectRoot: string, filter: { channel?: string; status?: string } = {}): Promise<ContentRecord[]> {
  const channel = filter.channel ? parseChannel(filter.channel) : undefined;
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  return [...index.items]
    .filter((item) => !channel || item.channel === channel)
    .filter((item) => !filter.status || item.status === filter.status)
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** One piece by id. */
export async function showContent(projectRoot: string, id: string): Promise<ContentRecord> {
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const record = index.items.find((item) => item.id === normalizeId(id));
  if (!record) throw error.notFound(`Content piece not found: ${id}`, { id });
  return record;
}

function renderContent(record: ContentRecord): string {
  const list = (items: string[], empty: string) => (items.length ? items.map((item) => `  - ${item}`).join("\n") : `  - ${empty}`);
  return `---
id: ${record.id}
canal: ${record.channel}
titulo: "${record.title.replaceAll('"', '\\"')}"
estado: ${record.status}
criado_em: ${record.createdAt}
personas:
${list(record.personas, "PREENCHER")}
acervo:
${list(record.acervo, "não informado")}
bases_editoriais:
${list(record.baseEditorial, "não informado")}
---

# ${record.title}

## Conteúdo

PREENCHER. A skill produtora do canal deve redigir a peça aqui.

## Revisão

- [ ] Voz conferida em \`.inboundfy/context/marca-voz.md\`
- [ ] Persona conferida em \`.inboundfy/context/publico.md\`
- [ ] Proibições conferidas em \`.inboundfy/context/proibicoes.md\`
- [ ] Aprendizado aplicável conferido em \`.inboundfy/context/aprendizado.md\`
- [ ] Acervo e base editorial vinculados
- [ ] Validador do canal executado
`;
}
