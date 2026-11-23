/**
 * `stats`: numbers of the archive, the channels and the calendar.
 *
 * Reads the indices and the archive files; writes nothing. `--section`
 * limits the text output (the JSON always carries the full snapshot).
 */
import { manifest } from "../../app/manifest.ts";
import { collectStats, type ProjectStats } from "../../core/stats.ts";
import { bar, monthLabel, progress, sparkline } from "../charts.ts";
import { color } from "../format.ts";
import { pad, projectRoot, stringOption } from "../project.ts";
import type { Command } from "../registry.ts";

const SECTIONS = ["overview", "archive", "channels", "calendar"] as const;

function heading(title: string): string {
  return color.strong(color.code(title));
}

function overview(s: ProjectStats): string[] {
  const p = s.project;
  const ready = p.readiness.items.filter((i) => i.ready).length;
  return [
    heading("Project"),
    `  ${p.installed ? color.ok("●") : color.error("●")} ${p.installed ? `Inboundfy ${p.frameworkVersion}` : "not installed"} · binary ${p.binaryVersion} · ${p.shippedSkills} skills`,
    `  Setup: ${p.setupStatus ?? "-"} · context ${ready}/${p.readiness.items.length} · channels: ${p.selectedChannels.join(", ") || "none"}`,
    "",
    heading("Totals"),
    `  Archive ${color.strong(String(s.archive.total))}   Pieces ${color.strong(String(s.content.total))}   Published ${color.strong(String(s.content.published))}   In progress ${color.strong(String(s.content.inProgress))}   Scheduled ${color.strong(String(s.calendar.upcoming.length))}`,
    `  Published in the last 30 days: ${s.content.publishedLast30Days} · Overdue in the calendar: ${s.calendar.overdue.length ? color.error(String(s.calendar.overdue.length)) : "0"}`,
  ];
}

function archive(s: ProjectStats): string[] {
  const a = s.archive;
  const max = Math.max(1, ...Object.values(a.byStatus));
  const months = a.intakeByMonth;
  return [
    heading("Archive"),
    ...Object.entries(a.byStatus).map(([status, n]) => `  ${pad(status, 12)} ${color.code(bar(n, max, 24))} ${n}`),
    `  Used by a channel: ${a.withChannels}/${a.total} · reused in 2+ channels: ${a.reusedAcrossChannels} · pieces per item: ${a.averagePiecesPerItem}`,
    `  Stage files  ${progress(a.stageProgress.percent, 20)} ${a.stageProgress.percent}%   Anti-slop  ${progress(a.auditProgress.percent, 20)} ${a.auditProgress.percent}%`,
    `  Intake ${color.code(sparkline(months.map((m) => m.count)))}  ${months.map((m) => `${monthLabel(m.month)} ${m.count}`).join(" · ")}`,
  ];
}

function channels(s: ProjectStats): string[] {
  const max = Math.max(1, ...s.content.channels.map((c) => c.total));
  return [
    heading("Channels"),
    `  ${pad("channel", 10)} ${pad("", 18)} ${pad("total", 6)} ${pad("draft", 6)} ${pad("review", 7)} ${pad("ready", 6)} ${pad("pub.", 5)} last published`,
    ...s.content.channels.map((c) => {
      const ready = c.byStatus.aprovado + c.byStatus.agendado;
      const name = c.selected ? c.channel : color.dim(c.channel);
      return `  ${name}${" ".repeat(Math.max(1, 11 - c.channel.length))}${color.code(bar(c.total, max, 18))} ${pad(String(c.total), 6)} ${pad(String(c.byStatus.rascunho), 6)} ${pad(String(c.byStatus.revisao), 7)} ${pad(String(ready), 6)} ${pad(String(c.published), 5)} ${c.lastPublishedAt ?? "-"}`;
    }),
    `  Published ${color.code(sparkline(s.content.publishedByMonth.map((m) => m.count)))}  Created ${color.code(sparkline(s.content.createdByMonth.map((m) => m.count)))}  (${s.content.publishedByMonth.map((m) => monthLabel(m.month)).join(" ")})`,
  ];
}

function calendar(s: ProjectStats): string[] {
  const c = s.calendar;
  return [
    heading("Calendar"),
    `  ${c.total} entries · ${c.thisMonth} this month · ${c.upcoming.length} upcoming · ${c.overdue.length} overdue`,
    ...c.upcoming.map((e) => `  ${e.date}  ${e.contentId}  ${pad(e.channel, 10)} ${pad(e.status, 10)} ${e.title}`),
    ...c.overdue.map((e) => color.error(`  ${e.date}  ${e.contentId}  ${pad(e.channel, 10)} ${pad(e.status, 10)} ${e.title} (overdue)`)),
  ];
}

export const statsCommand: Command = {
  name: "stats",
  description: "Show statistics of the archive, the channels and the calendar, computed from the indices.",
  options: [
    { name: "--months", argument: { name: "n" }, description: "Months in each time series, 1 to 24.", default: "6" },
    { name: "--section", argument: { name: "section", values: SECTIONS }, description: "Print only one section of the text output." },
    { name: "--fast", description: "Skip reading the archive files (stage and audit progress stay at 0)." },
  ],
  examples: [`${manifest.bin} stats`, `${manifest.bin} stats --section channels`, `${manifest.bin} stats --months 12 --json`],
  run: async (ctx) => {
    const months = Number.parseInt(stringOption(ctx.options.months) ?? "6", 10);
    const s = await collectStats(await projectRoot(ctx), { months: Number.isFinite(months) ? months : 6, skipProgress: ctx.options.fast === true });
    const section = stringOption(ctx.options.section);
    const parts: Record<(typeof SECTIONS)[number], () => string[]> = { overview: () => overview(s), archive: () => archive(s), channels: () => channels(s), calendar: () => calendar(s) };
    return {
      data: s,
      text: () =>
        (section ? parts[section as (typeof SECTIONS)[number]]() : SECTIONS.flatMap((name, i) => [...(i ? [""] : []), ...parts[name]()])).join("\n"),
    };
  },
};
