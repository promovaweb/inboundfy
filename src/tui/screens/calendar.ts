import { BoxRenderable, TextRenderable, TextAttributes, type ColorInput } from "@opentui/core";
import { listCalendar } from "../../core/calendar.ts";
import { listContent } from "../../core/content.ts";
import type { CalendarRecord } from "../../core/types.ts";
import { dim, heading, panel, scrollPanel, spacer } from "../components.ts";
import { projectScreen } from "../project.ts";
import { statusColor } from "../project-layout.ts";
import type { ScreenContext } from "../screen.ts";

function monthGrid(ctx: ScreenContext, month: string, today: string, entries: CalendarRecord[]) {
  const counts = new Map<string, number>();
  for (const entry of entries) counts.set(entry.date, (counts.get(entry.date) ?? 0) + 1);
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const first = new Date(month + "-01T00:00:00Z");
  const offset = (first.getUTCDay() + 6) % 7;
  const last = new Date(first);
  last.setUTCMonth(last.getUTCMonth() + 1, 0);
  const days = last.getUTCDate();
  const weeks = Math.ceil((offset + days) / 7);
  const grid = ctx.layout() === "wide"
    ? panel(ctx.renderer, ctx.theme, { title: month, flexGrow: 0 })
    : new BoxRenderable(ctx.renderer, { flexShrink: 0, marginBottom: ctx.space.gapY });
  for (let week = -1; week < weeks; week++) {
    const row = new BoxRenderable(ctx.renderer, { flexDirection: "row", height: 1, flexShrink: 0 });
    for (const [i, label] of weekdays.entries()) {
      const day = week * 7 + i - offset + 1;
      const date = month + "-" + String(day).padStart(2, "0");
      const scheduled = counts.has(date);
      const current = today === date;
      const number = String(day).padStart(2);
      let content = "";
      if (week < 0) content = label;
      else if (day > 0 && day <= days) content = number + (scheduled ? ctx.icons.scheduledDay : " ");
      row.add(new TextRenderable(ctx.renderer, {
        content, flexGrow: 1, flexBasis: 0, height: 1, wrapMode: "none",
        fg: current ? ctx.theme.keyText : scheduled ? ctx.theme.accent : week < 0 ? ctx.theme.textDim : ctx.theme.text,
        bg: current ? ctx.theme.keyBackground : ctx.theme.surface, attributes: current ? TextAttributes.BOLD : TextAttributes.NONE,
      }));
    }
    grid.add(row);
  }
  return grid;
}

function entryRow(ctx: ScreenContext, values: string[], ink: ColorInput, stateInk: ColorInput) {
  const row = new BoxRenderable(ctx.renderer, { flexDirection: "row", gap: 1, height: 1, flexShrink: 0 });
  const widths = [10, 9, 4, undefined, 9];
  for (const [i, content] of values.entries()) {
    const width = widths[i];
    row.add(new TextRenderable(ctx.renderer, {
      content, width, flexGrow: width ? 0 : 1, minWidth: 0, flexShrink: width ? 0 : 1,
      height: 1, wrapMode: "none", truncate: true, fg: i === 4 ? stateInk : ink,
    }));
  }
  return row;
}

export function createCalendarScreen() {
  let month = "";
  let agenda: ReturnType<typeof scrollPanel> | undefined;
  function shift(ctx: ScreenContext, delta: number) {
    if (!month) return;
    const date = new Date(month + "-01T00:00:00Z");
    date.setUTCMonth(date.getUTCMonth() + delta);
    month = date.toISOString().slice(0, 7);
    ctx.refresh();
  }
  return projectScreen({
    id: "calendar", title: "Calendar", icon: "list", description: "Monthly schedule, upcoming and overdue entries",
    actions: [
      { keys: ["["], description: "prev month", icon: "list", run: ctx => shift(ctx, -1) },
      { keys: ["]"], description: "next month", icon: "list", run: ctx => shift(ctx, 1) },
      { keys: ["up"], label: "↑", description: "scroll up", hidden: true, icon: "list", run: () => agenda?.body.scrollBy(-1) },
      { keys: ["down"], label: "↓", description: "scroll down", hidden: true, icon: "list", run: () => agenda?.body.scrollBy(1) },
    ],
    reset: () => { agenda = undefined; },
    async load(root, stats) {
      month ||= stats.today.slice(0, 7);
      const [entries, pieces] = await Promise.all([listCalendar(root, month), listContent(root)]);
      const titles = new Map(pieces.map(p => [p.id, p.title]));
      return { entries: entries.map(e => ({ ...e, title: titles.get(e.contentId) ?? "" })), calendar: stats.calendar, today: stats.today };
    },
    render(ctx, { entries, calendar, today }) {
      ctx.status(month + " · " + entries.length + " entries");
      agenda = scrollPanel(ctx.renderer, ctx.theme, { title: "Editorial calendar · " + month, active: true });
      const wide = ctx.layout() === "wide";
      const grid = ctx.layout() === "compact" ? undefined : monthGrid(ctx, month, today, entries);
      if (grid && !wide) agenda.add(grid);
      for (const [label, rows] of [["This month", entries], ["Overdue", calendar.overdue], ["Upcoming", calendar.upcoming]] as const) {
        agenda.add(heading(ctx.renderer, ctx.theme, label + " · " + rows.length));
        if (!rows.length) agenda.add(dim(ctx.renderer, ctx.theme, "No entries"));
        else agenda.add(entryRow(ctx, ["DATE", "CHANNEL", "ID", "TITLE", "STATUS"], ctx.theme.textDim, ctx.theme.textDim));
        for (const row of rows) {
          const late = row.date < today && row.status !== "publicado" && row.status !== "arquivado";
          const ink = late ? ctx.theme.error : ctx.theme.text;
          agenda.add(entryRow(ctx, [row.date, row.channel, row.contentId, row.title, row.status], ink, late ? ink : statusColor(ctx, row.status)));
        }
        agenda.add(spacer(ctx.renderer, ctx.space.gapY));
      }
      if (!wide || !grid) return agenda;
      const layout = new BoxRenderable(ctx.renderer, { flexDirection: "row", gap: ctx.space.cardPadX, flexGrow: 1, minHeight: 0 });
      grid.width = "34%";
      grid.flexShrink = 0;
      grid.alignSelf = "flex-start";
      layout.add(grid);
      agenda.flexBasis = 0;
      layout.add(agenda);
      return layout;
    },
  });
}
