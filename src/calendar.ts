/** Registra peças no calendário mensal do projeto consumidor. */

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
import type { CalendarRecord, ContentRecord } from "./types.js";

export async function addToCalendar(
  projectRoot: string,
  date: string,
  contentId: string,
): Promise<CalendarRecord> {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(date)) {
    throw new CliError("A data precisa usar o formato AAAA-MM-DD.");
  }
  const contentIndex = await readIndex<ContentRecord>(
    projectRoot,
    INDEX_PATHS.conteudos,
  );
  const content = contentIndex.items.find((item) => item.id === normalizeId(contentId));
  if (!content) throw new CliError(`Peça não encontrada: ${contentId}`);

  const calendarIndex = await readIndex<CalendarRecord>(
    projectRoot,
    INDEX_PATHS.calendario,
  );
  const existing = calendarIndex.items.find(
    (item) => item.contentId === content.id && item.date === date,
  );
  if (existing) return existing;

  const month = date.slice(0, 7);
  const path = `${PROJECT_DIRECTORIES.calendario}/${month}.md`;
  const calendarPath = resolvePortable(projectRoot, path);
  const current = (await exists(calendarPath))
    ? await readFile(calendarPath, "utf8")
    : `# Calendário ${month}\n\n`;
  const personas = content.personas.join(", ");
  const line = `- [ ] **${content.id}** ${content.title} · ${content.channel} · personas: ${personas} · [peça](../${content.directory}/README.md) · estado: ${content.status}`;
  const next = appendDateEntry(current, date, line);
  await writeAtomic(projectRoot, calendarPath, next);

  const record: CalendarRecord = {
    id: `${month}-${content.id}`,
    date,
    contentId: content.id,
    channel: content.channel,
    path,
    status: content.status,
  };
  await writeIndex(projectRoot, INDEX_PATHS.calendario, [
    ...calendarIndex.items,
    record,
  ]);
  return record;
}

export async function listCalendar(
  projectRoot: string,
  month?: string,
): Promise<CalendarRecord[]> {
  const index = await readIndex<CalendarRecord>(
    projectRoot,
    INDEX_PATHS.calendario,
  );
  return index.items.filter((item) => !month || item.date.startsWith(month));
}

export async function syncCalendarStatus(
  projectRoot: string,
  content: ContentRecord,
): Promise<void> {
  const index = await readIndex<CalendarRecord>(
    projectRoot,
    INDEX_PATHS.calendario,
  );
  const matching = index.items.filter((item) => item.contentId === content.id);
  if (!matching.length) return;

  const paths = new Set(matching.map((item) => item.path));
  for (const path of paths) {
    const calendarPath = resolvePortable(projectRoot, path);
    if (!(await exists(calendarPath))) continue;
    const source = await readFile(calendarPath, "utf8");
    const next = source
      .split("\n")
      .map((line) =>
        line.includes(`**${content.id}**`)
          ? line.replace(/estado: [^\n]+$/u, `estado: ${content.status}`)
          : line,
      )
      .join("\n");
    if (next !== source) await writeAtomic(projectRoot, calendarPath, next);
  }

  await writeIndex(
    projectRoot,
    INDEX_PATHS.calendario,
    index.items.map((item) =>
      item.contentId === content.id ? { ...item, status: content.status } : item,
    ),
  );
}

function appendDateEntry(current: string, date: string, line: string): string {
  const heading = `## ${date}`;
  if (current.includes(`${heading}\n`)) {
    return `${current.trimEnd()}\n${line}\n`;
  }
  return `${current.trimEnd()}\n\n${heading}\n\n${line}\n`;
}

function normalizeId(value: string): string {
  return value.replace(/^0+(?=\d)/u, "").padStart(4, "0");
}
