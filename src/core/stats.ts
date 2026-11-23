/**
 * Statistics of the archive, the channels and the calendar.
 *
 * Computed on demand from the three JSON indices and the archive files; no
 * cache is written. The same `ProjectStats` object feeds `inboundfy stats`,
 * the Dashboard screens of the TUI and the MCP tool `project_stats`, so the
 * numbers agree in the three modes.
 */
import { describeArchive, ARCHIVE_STATUSES } from "./archive.ts";
import { validateMinimumContext, type ReadinessItem } from "./context.ts";
import { exists } from "./io.ts";
import { loadInstallState } from "./installer.ts";
import { countShippedSkills, frameworkVersion } from "./payload.ts";
import { CHANNELS, INDEX_PATHS, readIndex, readSelectedChannels } from "./project.ts";
import { PIPELINE_STATES } from "./pipeline.ts";
import { join } from "node:path";
import type { ArchiveRecord, ArchiveStatus, CalendarRecord, ChannelId, ContentRecord, ContentStatus } from "./types.ts";

/** One month in a time series (`YYYY-MM`). */
export interface MonthPoint {
  month: string;
  count: number;
}

/** Numbers of one channel. */
export interface ChannelStats {
  channel: ChannelId;
  selected: boolean;
  total: number;
  byStatus: Record<ContentStatus, number>;
  published: number;
  inProgress: number;
  lastPublishedAt: string | null;
  archiveItemsUsed: number;
}

/** Full snapshot of a project. */
export interface ProjectStats {
  generatedAt: string;
  today: string;
  project: {
    root: string;
    installed: boolean;
    frameworkVersion: string | null;
    binaryVersion: string;
    setupStatus: "pending-context" | "ready" | null;
    agent: string | null;
    skillsDirectory: string | null;
    shippedSkills: number;
    readiness: { ready: boolean; items: ReadinessItem[] };
    selectedChannels: ChannelId[];
  };
  archive: {
    total: number;
    byStatus: Record<ArchiveStatus, number>;
    withChannels: number;
    unused: number;
    reusedAcrossChannels: number;
    averagePiecesPerItem: number;
    stageProgress: { done: number; total: number; percent: number };
    auditProgress: { done: number; total: number; percent: number };
    intakeByMonth: MonthPoint[];
    recent: Array<Pick<ArchiveRecord, "id" | "title" | "status" | "createdAt" | "channels">>;
  };
  content: {
    total: number;
    byStatus: Record<ContentStatus, number>;
    published: number;
    inProgress: number;
    publishedLast30Days: number;
    publishedByMonth: MonthPoint[];
    createdByMonth: MonthPoint[];
    channels: ChannelStats[];
    recent: Array<Pick<ContentRecord, "id" | "title" | "channel" | "status" | "createdAt">>;
  };
  calendar: {
    total: number;
    thisMonth: number;
    upcoming: Array<CalendarRecord & { title: string }>;
    overdue: Array<CalendarRecord & { title: string }>;
  };
}

const IN_PROGRESS: readonly ContentStatus[] = ["rascunho", "revisao", "aprovado", "agendado"];

function zero<T extends string>(keys: readonly T[]): Record<T, number> {
  return Object.fromEntries(keys.map((k) => [k, 0])) as Record<T, number>;
}

/** Last `count` months ending at `today`, oldest first. */
export function lastMonths(today: string, count: number): string[] {
  const [y, m] = today.split("-").map(Number) as [number, number];
  const months: string[] = [];
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(Date.UTC(y, m - 1 - i, 1));
    months.push(d.toISOString().slice(0, 7));
  }
  return months;
}

function series(months: string[], dates: Array<string | undefined>): MonthPoint[] {
  const counts = new Map(months.map((month) => [month, 0]));
  for (const date of dates) {
    const month = date?.slice(0, 7);
    if (month && counts.has(month)) counts.set(month, (counts.get(month) ?? 0) + 1);
  }
  return months.map((month) => ({ month, count: counts.get(month) ?? 0 }));
}

const percent = (done: number, total: number) => (total === 0 ? 0 : Math.round((done / total) * 100));

/** Options for `collectStats`. */
export interface StatsOptions {
  /** Months in each time series (default 6, 1 to 24). */
  months?: number;
  /** Reference date `YYYY-MM-DD` (default: today, local time). */
  today?: string;
  /** Rows in the recent and upcoming lists (default 5). */
  limit?: number;
  /** Skip reading archive files for stage progress (faster on large archives). */
  skipProgress?: boolean;
}

function localToday(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Computes every number of the project in one pass. */
export async function collectStats(projectRoot: string, options: StatsOptions = {}): Promise<ProjectStats> {
  const today = options.today ?? localToday();
  const monthsCount = Math.min(24, Math.max(1, options.months ?? 6));
  const limit = Math.max(1, options.limit ?? 5);
  const months = lastMonths(today, monthsCount);

  const state = (await exists(join(projectRoot, ".inboundfy", "install.json"))) ? await loadInstallState(projectRoot).catch(() => null) : null;
  const [archiveIndex, contentIndex, calendarIndex, selected, readiness, shippedSkills] = await Promise.all([
    readIndex<ArchiveRecord>(projectRoot, INDEX_PATHS.acervo),
    readIndex<ContentRecord>(projectRoot, INDEX_PATHS.conteudos),
    readIndex<CalendarRecord>(projectRoot, INDEX_PATHS.calendario),
    readSelectedChannels(projectRoot),
    validateMinimumContext(projectRoot),
    countShippedSkills(),
  ]);
  const archive = archiveIndex.items;
  const content = contentIndex.items;
  const calendar = calendarIndex.items;

  const archiveByStatus = zero(ARCHIVE_STATUSES);
  for (const item of archive) if (item.status in archiveByStatus) archiveByStatus[item.status]++;
  const contentByStatus = zero(PIPELINE_STATES);
  for (const item of content) if (item.status in contentByStatus) contentByStatus[item.status]++;

  const piecesPerArchive = new Map<string, Set<ChannelId>>();
  for (const piece of content) for (const id of piece.acervo) piecesPerArchive.set(id, (piecesPerArchive.get(id) ?? new Set()).add(piece.channel));
  const channelsOf = (item: ArchiveRecord) => new Set([...item.channels, ...(piecesPerArchive.get(item.id) ?? [])]);
  const withChannels = archive.filter((item) => channelsOf(item).size > 0).length;
  const reused = archive.filter((item) => channelsOf(item).size > 1).length;
  const linkedPieces = content.reduce((sum, piece) => sum + piece.acervo.length, 0);

  let stageDone = 0;
  let stageTotal = 0;
  let auditDone = 0;
  let auditTotal = 0;
  if (!options.skipProgress) {
    for (const item of archive) {
      const detail = await describeArchive(projectRoot, item).catch(() => null);
      if (!detail) continue;
      stageDone += detail.stages.filter((s) => s.done).length;
      stageTotal += detail.stages.length;
      auditDone += detail.audits.filter((s) => s.done).length;
      auditTotal += detail.audits.length;
    }
  }

  const thirtyDaysAgo = new Date(`${today}T00:00:00.000Z`);
  thirtyDaysAgo.setUTCDate(thirtyDaysAgo.getUTCDate() - 30);
  const since = thirtyDaysAgo.toISOString().slice(0, 10);

  const channels: ChannelStats[] = CHANNELS.map((channel) => {
    const pieces = content.filter((piece) => piece.channel === channel);
    const byStatus = zero(PIPELINE_STATES);
    for (const piece of pieces) if (piece.status in byStatus) byStatus[piece.status]++;
    const publishedDates = pieces.map((p) => p.publishedAt).filter((d): d is string => Boolean(d)).sort();
    return {
      channel,
      selected: selected.includes(channel),
      total: pieces.length,
      byStatus,
      published: byStatus.publicado,
      inProgress: IN_PROGRESS.reduce((sum, s) => sum + byStatus[s], 0),
      lastPublishedAt: publishedDates.at(-1) ?? null,
      archiveItemsUsed: new Set(pieces.flatMap((p) => p.acervo)).size,
    };
  });

  const titleOf = new Map(content.map((piece) => [piece.id, piece.title]));
  const open = (entry: CalendarRecord) => entry.status !== "publicado" && entry.status !== "arquivado";
  const withTitle = (entry: CalendarRecord) => ({ ...entry, title: titleOf.get(entry.contentId) ?? "" });
  const byDate = [...calendar].sort((a, b) => a.date.localeCompare(b.date));

  return {
    generatedAt: new Date().toISOString(),
    today,
    project: {
      root: projectRoot,
      installed: Boolean(state),
      frameworkVersion: state?.frameworkVersion ?? null,
      binaryVersion: frameworkVersion(),
      setupStatus: state?.setupStatus ?? null,
      agent: state?.agent ?? null,
      skillsDirectory: state?.skillsDirectory ?? null,
      shippedSkills,
      readiness: { ready: readiness.ready, items: readiness.items },
      selectedChannels: selected,
    },
    archive: {
      total: archive.length,
      byStatus: archiveByStatus,
      withChannels,
      unused: archive.length - withChannels,
      reusedAcrossChannels: reused,
      averagePiecesPerItem: archive.length ? Math.round((linkedPieces / archive.length) * 10) / 10 : 0,
      stageProgress: { done: stageDone, total: stageTotal, percent: percent(stageDone, stageTotal) },
      auditProgress: { done: auditDone, total: auditTotal, percent: percent(auditDone, auditTotal) },
      intakeByMonth: series(months, archive.map((item) => item.createdAt)),
      recent: [...archive]
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, limit)
        .map(({ id, title, status, createdAt, channels }) => ({ id, title, status, createdAt, channels })),
    },
    content: {
      total: content.length,
      byStatus: contentByStatus,
      published: contentByStatus.publicado,
      inProgress: IN_PROGRESS.reduce((sum, s) => sum + contentByStatus[s], 0),
      publishedLast30Days: content.filter((p) => p.publishedAt && p.publishedAt >= since && p.publishedAt <= today).length,
      publishedByMonth: series(months, content.map((p) => p.publishedAt)),
      createdByMonth: series(months, content.map((p) => p.createdAt)),
      channels,
      recent: [...content]
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, limit)
        .map(({ id, title, channel, status, createdAt }) => ({ id, title, channel, status, createdAt })),
    },
    calendar: {
      total: calendar.length,
      thisMonth: calendar.filter((entry) => entry.date.startsWith(today.slice(0, 7))).length,
      upcoming: byDate.filter((entry) => entry.date >= today && open(entry)).slice(0, limit).map(withTitle),
      overdue: byDate.filter((entry) => entry.date < today && open(entry)).map(withTitle),
    },
  };
}
