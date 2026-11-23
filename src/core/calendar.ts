/**
 * Monthly editorial calendar of the consumer project.
 *
 * Each entry lives in two places kept in sync: a line in
 * `calendario/AAAA-MM.md` (read by people) and a record in
 * `.inboundfy/indices/calendario.json` (read by the binary and the skills).
 */
import { readFile } from "node:fs/promises";
import { error } from "../app/errors.ts";
import { exists, normalizeId, resolvePortable, writeAtomic } from "./io.ts";
import { INDEX_PATHS, PROJECT_DIRECTORIES, readIndex, writeIndex } from "./project.ts";
import type { CalendarRecord, ContentRecord } from "./types.ts";

/** Validates a civil date in `YYYY-MM-DD`. */
export function assertDate(value: string, what = "date"): void {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) throw error.usage(`The ${what} must use the YYYY-MM-DD format.`, { value });
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) throw error.usage(`The ${what} is not a valid calendar date: ${value}.`, { value });
}

/** Schedules a piece on a date; idempotent for the same piece and date. */
export async function addToCalendar(projectRoot: string, date: string, contentId: string): Promise<CalendarRecord> {
  assertDate(date);
  const contentIndex = await readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos);
  const content = contentIndex.items.find((item) => item.id === normalizeId(contentId));
  if (!content) throw error.notFound(`Content piece not found: ${contentId}`, { id: contentId });
  const calendarIndex = await readIndex<CalendarRecord>(projectRoot, INDEX_PATHS.calendario);
  const existing = calendarIndex.items.find((item) => item.contentId === content.id && item.date === date);
  if (existing) return existing;

  const month = date.slice(0, 7);
  const path = `${PROJECT_DIRECTORIES.calendario}/${month}.md`;
  const calendarPath = resolvePortable(projectRoot, path);
  const current = (await exists(calendarPath)) ? await readFile(calendarPath, "utf8") : `# Calendário ${month}\n\n`;
  const line = `- [ ] **${content.id}** ${content.title} · ${content.channel} · personas: ${content.personas.join(", ")} · [peça](../${content.directory}/README.md) · estado: ${content.status}`;
  await writeAtomic(projectRoot, calendarPath, appendDateEntry(current, date, line));

  const record: CalendarRecord = { id: `${month}-${content.id}`, date, contentId: content.id, channel: content.channel, path, status: content.status };
  await writeIndex(projectRoot, INDEX_PATHS.calendario, [...calendarIndex.items, record]);
  return record;
}

/** Entries of every month or of one `YYYY-MM`, sorted by date. */
export async function listCalendar(projectRoot: string, month?: string): Promise<CalendarRecord[]> {
  if (month && !/^\d{4}-\d{2}$/u.test(month)) throw error.usage("The month must use the YYYY-MM format.", { month });
  const index = await readIndex<CalendarRecord>(projectRoot, INDEX_PATHS.calendario);
  return index.items.filter((item) => !month || item.date.startsWith(month)).sort((a, b) => a.date.localeCompare(b.date) || a.contentId.localeCompare(b.contentId));
}

/** Propagates a piece status to the monthly files and the calendar index. */
export async function syncCalendarStatus(projectRoot: string, content: ContentRecord): Promise<void> {
  const index = await readIndex<CalendarRecord>(projectRoot, INDEX_PATHS.calendario);
  const matching = index.items.filter((item) => item.contentId === content.id);
  if (!matching.length) return;
  for (const path of new Set(matching.map((item) => item.path))) {
    const calendarPath = resolvePortable(projectRoot, path);
    if (!(await exists(calendarPath))) continue;
    const source = await readFile(calendarPath, "utf8");
    const next = source
      .split("\n")
      .map((line) => (line.includes(`**${content.id}**`) ? line.replace(/estado: [^\n]+$/u, `estado: ${content.status}`) : line))
      .join("\n");
    if (next !== source) await writeAtomic(projectRoot, calendarPath, next);
  }
  await writeIndex(
    projectRoot,
    INDEX_PATHS.calendario,
    index.items.map((item) => (item.contentId === content.id ? { ...item, status: content.status } : item)),
  );
}

function appendDateEntry(current: string, date: string, line: string): string {
  const heading = `## ${date}`;
  if (!current.includes(`${heading}\n`)) return `${current.trimEnd()}\n\n${heading}\n\n${line}\n`;
  // Insert right after the last line of that date's section.
  const lines = current.trimEnd().split("\n");
  const start = lines.indexOf(heading);
  let end = start + 1;
  while (end < lines.length && !lines[end]!.startsWith("## ")) end++;
  while (end > start + 1 && lines[end - 1]!.trim() === "") end--;
  lines.splice(end, 0, line);
  return `${lines.join("\n")}\n`;
}
