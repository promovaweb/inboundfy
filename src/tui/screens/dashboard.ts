import { ASCIIFontRenderable, BoxRenderable, ScrollBoxRenderable, TextRenderable } from "@opentui/core";
import { bar, monthLabel, sparkline } from "../../cli/charts.ts";
import type { ProjectStats } from "../../core/stats.ts";
import { dim, heading, panel } from "../components.ts";
import { projectScreen } from "../project.ts";
import type { ScreenContext } from "../screen.ts";

function dashboard(ctx: ScreenContext, stats: ProjectStats) {
  const { renderer, theme, space } = ctx;
  const { archive, content, calendar, project } = stats;
  const columns = { compact: 1, medium: 2, wide: 3 }[ctx.layout()];
  const page = new ScrollBoxRenderable(renderer, {
    flexGrow: 1, minHeight: 0, scrollX: false, scrollY: true,
    contentOptions: { flexDirection: "column", gap: space.gapY },
    scrollbarOptions: { trackOptions: { backgroundColor: theme.border, foregroundColor: theme.accent } },
  });
  const metrics = [
    ["Archive", archive.total, theme.accent], ["Pieces", content.total, theme.accent],
    ["Published", content.published, theme.ok], ["In progress", content.inProgress, theme.textStrong],
    ["Scheduled", content.byStatus.agendado, theme.textStrong], ["Overdue", calendar.overdue.length, calendar.overdue.length ? theme.error : theme.textDim],
  ] as const;
  const metricsPerRow = ctx.layout() === "compact" ? 3 : 6;
  for (let i = 0; i < metrics.length; i += metricsPerRow) {
    const row = new BoxRenderable(renderer, { flexDirection: "row", gap: space.gapY || 1, flexShrink: 0 });
    for (const [title, value, color] of metrics.slice(i, i + metricsPerRow)) {
      const card = panel(renderer, theme, { title, flexGrow: 1 });
      card.body.paddingLeft = ctx.layout() === "medium" ? 1 : space.cardPadX;
      card.body.paddingRight = card.body.paddingLeft;
      card.body.paddingTop = 0;
      card.body.paddingBottom = 0;
      if (String(value).length <= (ctx.layout() === "medium" ? 2 : 3)) card.add(new ASCIIFontRenderable(renderer, { text: String(value), font: "tiny", color }));
      else card.add(new TextRenderable(renderer, { content: String(value), fg: color }));
      row.add(card);
    }
    page.add(row);
  }
  function section(title: string, icon: "list" | "tabs" | "state" | "docs" | "ok") {
    return panel(renderer, theme, { title, icon: { icons: ctx.icons, name: icon }, flexGrow: 0 });
  }
  function line(card: ReturnType<typeof section>, text: string, color = theme.text) {
    card.add(new TextRenderable(renderer, { content: text, fg: color, flexShrink: 0 }));
  }
  const pipeline = section("Pipeline", "list");
  const stages = ["rascunho", "revisao", "aprovado", "agendado", "publicado"] as const;
  const peak = Math.max(...stages.map(s => content.byStatus[s]));
  for (const stage of stages) {
    const count = content.byStatus[stage];
    line(pipeline, stage.padEnd(10) + bar(count, peak, 9) + "  " + count, stage === "publicado" ? theme.ok : theme.accent);
  }

  const channels = section("Channels", "tabs");
  channels.add(dim(renderer, theme, "Volume   total/pub   last"));
  const max = Math.max(...content.channels.map(c => c.total));
  for (const c of content.channels) {
    line(channels, c.channel.padEnd(10) + bar(c.total, max, 3) + " " + c.total + "/" + c.published + " " +
      (c.lastPublishedAt?.slice(0, 10) ?? "—"), c.selected ? theme.text : theme.textDim);
  }

  const trend = section("Last six months", "state");
  const months = archive.intakeByMonth;
  line(trend, months.map(m => monthLabel(m.month)).join(" "), theme.textDim);
  for (const [label, points] of [["Archive intake", months], ["Publications", content.publishedByMonth]] as const) {
    trend.add(heading(renderer, theme, label));
    line(trend, [...sparkline(points.map(p => p.count))].map(s => s.padEnd(4)).join("").trimEnd(), theme.accent);
  }

  const progress = section("Archive progress", "docs");
  for (const [label, p] of [["Stages", archive.stageProgress], ["Anti-slop audits", archive.auditProgress]] as const) {
    line(progress, label + "  " + p.done + "/" + p.total);
    line(progress, bar(p.percent, 100, 12) + "  " + p.percent + "%", theme.accent);
  }
  const agenda = section("Calendar", "list");
  for (const [label, entries] of [["Upcoming", calendar.upcoming], ["Overdue", calendar.overdue]] as const) {
    agenda.add(heading(renderer, theme, label + " · " + entries.length));
    if (!entries.length) agenda.add(dim(renderer, theme, "No entries"));
    for (const e of entries) line(agenda, e.date + "  " + e.title, label === "Overdue" ? theme.error : theme.text);
  }
  const context = section("Project context", "ok");
  for (const item of project.readiness.items) line(context, (item.ready ? ctx.icons.ok : ctx.icons.error) + "  " + item.id, item.ready ? theme.ok : theme.textDim);
  line(context, "Installed  " + project.frameworkVersion);
  line(context, "Binary     " + project.binaryVersion);

  const grid = new BoxRenderable(renderer, { flexDirection: "row", gap: space.cardPadX, alignItems: "flex-start", flexShrink: 0 });
  const stacks = Array.from({ length: columns }, () => {
    const stack = new BoxRenderable(renderer, { flexGrow: 1, flexBasis: 0, minWidth: 0, gap: space.gapY });
    grid.add(stack);
    return stack;
  });
  [pipeline, channels, trend, progress, agenda, context].forEach((card, i) => stacks[i % columns]!.add(card));
  page.add(grid);
  ctx.status(archive.total + " archive · " + content.total + " pieces");
  return page;
}

export function createDashboardScreen() {
  let page: ScrollBoxRenderable | undefined;
  return projectScreen({
    id: "dashboard", title: "Dashboard", icon: "overview", description: "Archive, pipeline and editorial calendar",
    actions: [
      { keys: ["up"], label: "↑", description: "scroll up", hidden: true, icon: "list", run: () => page?.scrollBy(-1) },
      { keys: ["down"], label: "↓", description: "scroll down", hidden: true, icon: "list", run: () => page?.scrollBy(1) },
    ],
    reset: () => { page = undefined; },
    load: (_root, stats) => stats,
    render: (ctx, stats) => page = dashboard(ctx, stats),
  });
}
