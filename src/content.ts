/** Criação e atualização da saída final por canal. */

import { join } from "node:path";
import { CliError } from "./errors.js";
import { resolvePortable, writeAtomic } from "./io.js";
import {
  CHANNELS,
  INDEX_PATHS,
  PROJECT_DIRECTORIES,
  readIndex,
  readSelectedChannels,
  ensureChannelDirectories,
  writeIndex,
} from "./project-structure.js";
import type { ChannelId, ContentRecord } from "./types.js";
import type { AcervoRecord } from "./types.js";

export interface CreateContentOptions {
  channel: ChannelId;
  title: string;
  personas: string[];
  acervo: string[];
  createdAt?: string;
}

export async function createContent(
  projectRoot: string,
  options: CreateContentOptions,
): Promise<ContentRecord> {
  if (!CHANNELS.includes(options.channel)) throw new CliError(`Canal não suportado: ${options.channel}`);
  if (!options.title.trim()) throw new CliError("A peça precisa de um título.");
  if (!options.personas.length) throw new CliError("A peça precisa de ao menos uma persona.");
  const selectedChannels = await readSelectedChannels(projectRoot);
  if (!selectedChannels.includes(options.channel)) {
    throw new CliError(`O canal ${options.channel} não está selecionado em .inboundfy/estrategia.md.`);
  }
  const createdAt = options.createdAt ?? new Date().toISOString();
  const date = createdAt.slice(0, 10);
  const index = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const acervoIndex = await readIndex<AcervoRecord>(projectRoot, INDEX_PATHS.acervo);
  const acervoIds = options.acervo.map(normalizeId);
  const acervoItems = acervoIds.map((id) => acervoIndex.items.find((item) => item.id === id));
  if (acervoItems.some((item) => !item)) {
    throw new CliError("Toda referência de acervo precisa apontar para um ID existente.");
  }
  const id = String(nextNumber(index.items.map((item) => item.id))).padStart(4, "0");
  const slug = slugify(options.title);
  const directory = `${PROJECT_DIRECTORIES.canais}/${options.channel}/${id}-${date}-${slug}`;
  await ensureChannelDirectories(projectRoot, [options.channel]);
  const record: ContentRecord = {
    id,
    channel: options.channel,
    title: options.title.trim(),
    slug,
    directory,
    createdAt,
    status: "rascunho",
    personas: options.personas,
    acervo: acervoIds,
    baseEditorial: acervoItems.filter(Boolean).map((item) => `${item?.directory}/base-editorial.md`),
  };
  await writeAtomic(projectRoot, resolvePortable(projectRoot, join(directory, "README.md")), renderContent(record, options.title));
  await writeIndex(projectRoot, INDEX_PATHS.conteudos, [...index.items, record]);
  if (acervoIds.length) {
    const acervoIdSet = new Set(acervoIds);
    await writeIndex(
      projectRoot,
      INDEX_PATHS.acervo,
      acervoIndex.items.map((item) =>
        acervoIdSet.has(item.id) && !item.channels.includes(options.channel)
          ? { ...item, channels: [...item.channels, options.channel] }
          : item,
      ),
    );
  }
  return record;
}

function renderContent(record: ContentRecord, title: string): string {
  return `---
id: ${record.id}
canal: ${record.channel}
titulo: "${title.replaceAll('"', '\\"')}"
estado: ${record.status}
criado_em: ${record.createdAt}
personas:
${record.personas.length ? record.personas.map((persona) => `  - ${persona}`).join("\n") : "  - PREENCHER"}
acervo:
${record.acervo.length ? record.acervo.map((item) => `  - ${item}`).join("\n") : "  - não informado"}
bases_editoriais:
${record.baseEditorial.length ? record.baseEditorial.map((item) => `  - ${item}`).join("\n") : "  - não informado"}
---

# ${title}

## Conteúdo

PREENCHER. A skill produtora do canal deve redigir a peça aqui.

## Revisão

- [ ] Voz conferida em \`.inboundfy/voz.md\`
- [ ] Persona conferida em \`.inboundfy/personas.md\`
- [ ] Proibições conferidas em \`.inboundfy/proibicoes.md\`
- [ ] Acervo e base editorial vinculados
- [ ] Validador do canal executado
`;
}

function nextNumber(ids: string[]): number {
  return Math.max(0, ...ids.map((id) => Number.parseInt(id, 10)).filter(Number.isFinite)) + 1;
}

function slugify(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 72) || "sem-titulo";
}

function normalizeId(value: string): string {
  return value.replace(/^0+(?=\d)/u, "").padStart(4, "0");
}
