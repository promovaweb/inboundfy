/**
 * Archive (`acervo/`) of the consumer project.
 *
 * Each item gets a numbered directory `acervo/NNNN-AAAA-MM-DD-slug/` with the
 * raw material preserved in `bruto.md`, pending files for each stage of the
 * master cycle and the anti-slop audit records A0 to A6. The generated files
 * are Portuguese because the skills fill them in the project language.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { error } from "../app/errors.ts";
import { exists, nextNumber, normalizeId, resolvePortable, slugify, writeAtomic } from "./io.ts";
import { INDEX_PATHS, PROJECT_DIRECTORIES, readIndex, writeIndex } from "./project.ts";
import type { ArchiveRecord, ArchiveStatus } from "./types.ts";

/** Archive statuses in lifecycle order. */
export const ARCHIVE_STATUSES: readonly ArchiveStatus[] = ["recebido", "processando", "processado", "arquivado"];

/** Anti-slop milestones recorded for every archive item. */
export const ANTI_SLOP_AUDITS = [
  { file: "00-entrada.md", stage: "A0", title: "Entrada", input: "bruto.md" },
  { file: "01-processado.md", stage: "A1", title: "Processado", input: "processado.md" },
  { file: "02-base-editorial.md", stage: "A2", title: "Base editorial", input: "base-editorial.md, faq.md e pesquisa.md" },
  { file: "03-estrategia-brief.md", stage: "A3", title: "Estratégia e brief", input: "estrategia.md e brief da peça" },
  { file: "04-rascunho.md", stage: "A4", title: "Rascunho", input: "outline e abertura" },
  { file: "05-peca.md", stage: "A5", title: "Peça", input: "peça completa" },
  { file: "06-pacote.md", stage: "A6", title: "Pacote", input: "peças relacionadas" },
] as const;

/** Stage files created pending for each item, with the skill that fills them. */
export const ARCHIVE_STAGE_FILES = [
  { file: "processado.md", title: "Material processado", skill: "inboundfy-processar-acervo" },
  { file: "faq.md", title: "FAQ extraído", skill: "inboundfy-extrair-faq" },
  { file: "base-editorial.md", title: "Base editorial", skill: "inboundfy-base-editorial" },
  { file: "pesquisa.md", title: "Pesquisa externa", skill: "inboundfy-pesquisa-acervo" },
  { file: "estrategia.md", title: "Possibilidades de distribuição", skill: "inboundfy-acervo" },
] as const;

/** Input for `addArchive`. */
export interface AddArchiveOptions {
  title: string;
  raw: string;
  source?: string;
  createdAt?: string;
}

/** Registers a new item and preserves the raw material without edits. */
export async function addArchive(projectRoot: string, options: AddArchiveOptions): Promise<ArchiveRecord> {
  const title = options.title.trim();
  if (!title) throw error.usage("An archive item needs a title.");
  if (!options.raw.trim()) throw error.usage("The raw material cannot be empty.");
  const index = await readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo);
  const id = String(nextNumber(index.items.map((item) => item.id))).padStart(4, "0");
  const createdAt = options.createdAt ?? new Date().toISOString();
  const slug = slugify(title);
  const directory = `${PROJECT_DIRECTORIES.acervo}/${id}-${createdAt.slice(0, 10)}-${slug}`;
  const record: ArchiveRecord = { id, slug, title, directory, createdAt, status: "recebido", ...(options.source ? { source: options.source } : {}), channels: [] };
  const write = (path: string, content: string) => writeAtomic(projectRoot, resolvePortable(projectRoot, join(directory, path)), content);
  await write("bruto.md", options.raw);
  await write("README.md", renderReadme(record));
  for (const stage of ARCHIVE_STAGE_FILES) await write(stage.file, renderPending(stage.title, stage.skill));
  for (const audit of ANTI_SLOP_AUDITS) await write(`auditorias/anti-slop/${audit.file}`, renderAntiSlopPending(record, audit));
  await writeIndex(projectRoot, INDEX_PATHS.acervo, [...index.items, record]);
  return record;
}

/** Writes `processado.md` from the normalized raw material. */
export async function processArchive(projectRoot: string, id: string): Promise<ArchiveRecord> {
  const index = await readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo);
  const position = index.items.findIndex((item) => item.id === normalizeId(id));
  const current = index.items[position];
  if (position < 0 || !current) throw error.notFound(`Archive item not found: ${id}`, { id });
  const rawPath = resolvePortable(projectRoot, join(current.directory, "bruto.md"));
  if (!(await exists(rawPath))) throw error.notFound(`Raw material missing: ${current.directory}/bruto.md`, { path: `${current.directory}/bruto.md` });
  const raw = await readFile(rawPath, "utf8");
  await writeAtomic(projectRoot, resolvePortable(projectRoot, join(current.directory, "processado.md")), renderProcessed(current, normalizeRaw(raw)));
  const updated: ArchiveRecord = { ...current, status: "processado" };
  const items = [...index.items];
  items[position] = updated;
  await writeIndex(projectRoot, INDEX_PATHS.acervo, items);
  return updated;
}

/** Sets the status of an item (e.g. `arquivado`) without touching its files. */
export async function setArchiveStatus(projectRoot: string, id: string, status: string): Promise<ArchiveRecord> {
  if (!ARCHIVE_STATUSES.includes(status as ArchiveStatus)) throw error.usage(`Unsupported archive status: ${status}. Use one of: ${ARCHIVE_STATUSES.join(", ")}.`, { status });
  const index = await readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo);
  const position = index.items.findIndex((item) => item.id === normalizeId(id));
  const current = index.items[position];
  if (position < 0 || !current) throw error.notFound(`Archive item not found: ${id}`, { id });
  const updated: ArchiveRecord = { ...current, status: status as ArchiveStatus };
  const items = [...index.items];
  items[position] = updated;
  await writeIndex(projectRoot, INDEX_PATHS.acervo, items);
  return updated;
}

/** Items sorted by id, optionally filtered by status or channel. */
export async function listArchive(projectRoot: string, filter: { status?: string; channel?: string } = {}): Promise<ArchiveRecord[]> {
  const index = await readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo);
  return [...index.items]
    .filter((item) => !filter.status || item.status === filter.status)
    .filter((item) => !filter.channel || item.channels.includes(filter.channel as ArchiveRecord["channels"][number]))
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Progress of one stage file or audit of an archive item. */
export interface StageProgress {
  file: string;
  label: string;
  done: boolean;
}

/** Detail of an archive item with the progress of its stages and audits. */
export interface ArchiveDetail {
  record: ArchiveRecord;
  stages: StageProgress[];
  audits: Array<StageProgress & { stage: string }>;
  progress: { done: number; total: number };
}

/** Reads an item and how far its files are from pending. */
export async function showArchive(projectRoot: string, id: string): Promise<ArchiveDetail> {
  const index = await readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo);
  const record = index.items.find((item) => item.id === normalizeId(id));
  if (!record) throw error.notFound(`Archive item not found: ${id}`, { id });
  return describeArchive(projectRoot, record);
}

/** Computes stage and audit progress for a record. */
export async function describeArchive(projectRoot: string, record: ArchiveRecord): Promise<ArchiveDetail> {
  const stages: StageProgress[] = [];
  for (const stage of ARCHIVE_STAGE_FILES) stages.push({ file: stage.file, label: stage.title, done: await isFilled(projectRoot, join(record.directory, stage.file)) });
  const audits: ArchiveDetail["audits"] = [];
  for (const audit of ANTI_SLOP_AUDITS) {
    audits.push({ file: `auditorias/anti-slop/${audit.file}`, label: audit.title, stage: audit.stage, done: await isAuditDone(projectRoot, join(record.directory, "auditorias", "anti-slop", audit.file)) });
  }
  const all = [...stages, ...audits];
  return { record, stages, audits, progress: { done: all.filter((s) => s.done).length, total: all.length } };
}

async function isFilled(projectRoot: string, relative: string): Promise<boolean> {
  const path = resolvePortable(projectRoot, relative.split("\\").join("/"));
  if (!(await exists(path))) return false;
  const content = await readFile(path, "utf8");
  return !/^Estado: pendente de execução/mu.test(content);
}

async function isAuditDone(projectRoot: string, relative: string): Promise<boolean> {
  const path = resolvePortable(projectRoot, relative.split("\\").join("/"));
  if (!(await exists(path))) return false;
  const content = await readFile(path, "utf8");
  return !/^estado:\s*pendente\s*$/mu.test(content);
}

function renderReadme(record: ArchiveRecord): string {
  return `# Acervo ${record.id}: ${record.title}

- **ID:** \`${record.id}\`
- **Criado em:** ${record.createdAt}
- **Estado:** ${record.status}
- **Origem declarada:** ${record.source ?? "não informada"}

## Arquivos

| Arquivo | Função |
| --- | --- |
| [bruto.md](bruto.md) | Material recebido, preservado sem reescrita. |
| [processado.md](processado.md) | Versão saneada pelas regras e pela voz. |
| [faq.md](faq.md) | Perguntas e respostas extraídas do material. |
| [base-editorial.md](base-editorial.md) | Metadados, núcleo, atores, frases e usos. |
| [pesquisa.md](pesquisa.md) | Fontes externas consultadas e relação com o material. |
| [estrategia.md](estrategia.md) | Possibilidades de canais e reaproveitamentos. |

Os registros dos marcos anti-slop A0 a A6 ficam em
\`auditorias/anti-slop/\`. Cada arquivo começa pendente e recebe a análise da
skill correspondente durante o fluxo.

## Checklist do ciclo mestre

- [ ] Entrada registrada e bruto preservado.
- [ ] Processado alinhado à voz, ao dicionário e às proibições.
- [ ] FAQ extraída do bruto e do processado.
- [ ] Pesquisa web e fontes locais registradas.
- [ ] Base editorial completa ou com pendências declaradas.
- [ ] Possibilidades mapeadas para os canais ativos.
- [ ] Canal, persona, formato e direção confirmados.
- [ ] Peça produzida na pasta do canal, quando solicitada.
- [ ] Anti-slop e validadora do canal executados.
- [ ] Estado do pipeline e calendário atualizados.
- [ ] Índices de acervo, conteúdos e calendário reconciliados.

O ciclo pode ser retomado por este ID. Cada fase deve marcar sua etapa depois
de preencher o arquivo correspondente. \`inboundfy archive show ${record.id}\`
mostra o andamento.
`;
}

function renderPending(title: string, skill: string): string {
  return `# ${title}

Estado: pendente de execução da skill \`${skill}\`.

Este arquivo pertence ao projeto consumidor. O framework fornece a estrutura;
o agente deve preencher o conteúdo a partir do material, das fontes e das
configurações em \`.inboundfy/\`.
`;
}

function renderAntiSlopPending(record: ArchiveRecord, audit: (typeof ANTI_SLOP_AUDITS)[number]): string {
  return `---
id: ${record.id}
tipo: auditoria-anti-slop
etapa: ${audit.stage}
estado: pendente
entrada: "${audit.input}"
---

# Auditoria anti-slop ${audit.stage}: ${audit.title}

- **Estado:** pendente
- **Entrada prevista:** \`${audit.input}\`
- **Skill:** \`inboundfy-anti-slop\`
- **Próxima ação:** executar o ciclo ${audit.stage} quando a entrada estiver disponível.

Este registro foi criado pelo binário para manter a sequência visível. A skill
deve substituir este conteúdo pela análise do ciclo e pela ação necessária.
`;
}

function renderProcessed(record: ArchiveRecord, content: string): string {
  return `---
id: ${record.id}
tipo: acervo-processado
estado: processado
origem: bruto.md
---

# ${record.title}

${content.trim()}
`;
}

function normalizeRaw(value: string): string {
  return (
    value
      .replace(/^\uFEFF/u, "")
      .replaceAll("\r\n", "\n")
      .replaceAll("\r", "\n")
      .replace(/[\u0000\u0008]/gu, "")
      .replace(/[ \t]+$/gm, "")
      .trimEnd() + "\n"
  );
}
