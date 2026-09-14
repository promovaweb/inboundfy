/** Operações do acervo do projeto consumidor. */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CliError } from "./errors.js";
import { exists, resolvePortable, writeAtomic } from "./io.js";
import {
  INDEX_PATHS,
  PROJECT_DIRECTORIES,
  readIndex,
  writeIndex,
} from "./project-structure.js";
import type { AcervoRecord } from "./types.js";

export interface AddAcervoOptions {
  title: string;
  raw: string;
  source?: string;
  createdAt?: string;
}

export async function addAcervo(
  projectRoot: string,
  options: AddAcervoOptions,
): Promise<AcervoRecord> {
  const title = options.title.trim();
  if (!title) throw new CliError("O acervo precisa de um título.");
  if (!options.raw.trim()) throw new CliError("O material bruto não pode estar vazio.");

  const index = await readIndex<AcervoRecord>(projectRoot, INDEX_PATHS.acervo);
  const number = nextNumber(index.items.map((item) => item.id));
  const id = String(number).padStart(4, "0");
  const createdAt = options.createdAt ?? new Date().toISOString();
  const date = createdAt.slice(0, 10);
  const slug = slugify(title);
  const directory = `${PROJECT_DIRECTORIES.acervo}/${id}-${date}-${slug}`;
  const record: AcervoRecord = {
    id,
    slug,
    title,
    directory,
    createdAt,
    status: "recebido",
    ...(options.source ? { source: options.source } : {}),
    channels: [],
  };

  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "bruto.md")),
    options.raw,
  );
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "README.md")),
    renderReadme(record),
  );
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "processado.md")),
    renderPending("Material processado", "inboundfy-processar-acervo"),
  );
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "faq.md")),
    renderPending("FAQ extraído", "inboundfy-extrair-faq"),
  );
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "base-editorial.md")),
    renderPending("Base editorial", "inboundfy-base-editorial"),
  );
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "pesquisa.md")),
    renderPending("Pesquisa externa", "inboundfy-pesquisa"),
  );
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(directory, "estrategia.md")),
    renderPending("Possibilidades de distribuição", "inboundfy-estrategia-acervo"),
  );
  await writeIndex(projectRoot, INDEX_PATHS.acervo, [...index.items, record]);
  return record;
}

export async function processAcervo(
  projectRoot: string,
  id: string,
): Promise<AcervoRecord> {
  const index = await readIndex<AcervoRecord>(projectRoot, INDEX_PATHS.acervo);
  const position = index.items.findIndex((item) => item.id === normalizeId(id));
  if (position < 0) throw new CliError(`Acervo não encontrado: ${id}`);
  const current = index.items[position];
  if (!current) throw new CliError(`Acervo não encontrado: ${id}`);
  const rawPath = resolvePortable(projectRoot, join(current.directory, "bruto.md"));
  if (!(await exists(rawPath))) throw new CliError(`Material bruto ausente: ${current.directory}/bruto.md`);
  const raw = await readFile(rawPath, "utf8");
  await writeAtomic(
    projectRoot,
    resolvePortable(projectRoot, join(current.directory, "processado.md")),
    renderProcessed(current, normalizeRaw(raw)),
  );
  const updated: AcervoRecord = { ...current, status: "processado" };
  const items = [...index.items];
  items[position] = updated;
  await writeIndex(projectRoot, INDEX_PATHS.acervo, items);
  return updated;
}

export async function listAcervo(projectRoot: string): Promise<AcervoRecord[]> {
  const index = await readIndex<AcervoRecord>(projectRoot, INDEX_PATHS.acervo);
  return [...index.items].sort((left, right) => left.id.localeCompare(right.id));
}

function renderReadme(record: AcervoRecord): string {
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
de preencher o arquivo correspondente.
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

function renderProcessed(record: AcervoRecord, content: string): string {
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
  return value.replace(/^\uFEFF/u, "").replaceAll("\r\n", "\n").replaceAll("\r", "\n").replace(/[\u0000\u0008]/gu, "").replace(/[ \t]+$/gm, "").trimEnd() + "\n";
}

function normalizeId(value: string): string {
  return value.replace(/^0+(?=\d)/u, "").padStart(4, "0");
}

function nextNumber(ids: string[]): number {
  return Math.max(0, ...ids.map((id) => Number.parseInt(id, 10)).filter(Number.isFinite)) + 1;
}

function slugify(value: string): string {
  const normalized = value.normalize("NFD").replace(/[\u0300-\u036f]/gu, "");
  return normalized.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 72) || "sem-titulo";
}
