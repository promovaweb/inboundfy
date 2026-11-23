import { BoxRenderable, TextRenderable, StyledText, fg } from "@opentui/core";
import { ARCHIVE_STATUSES, listArchive, showArchive, type ArchiveDetail } from "../../core/archive.ts";
import { bar } from "../../cli/charts.ts";
import { button, dim, heading, scrollPanel, spacer } from "../components.ts";
import { emptyView, projectList, projectScreen } from "../project.ts";
import { column, projectPage, splitView, statusColor, summary } from "../project-layout.ts";
import type { ScreenAction, ScreenContext } from "../screen.ts";

function detailPanel(ctx: ScreenContext, detail: ArchiveDetail, back?: () => void) {
  const { renderer, theme, icons } = ctx;
  const { record, stages, audits } = detail;
  const card = scrollPanel(renderer, theme, { title: "Archive · " + record.id, active: !!back });
  card.add(heading(renderer, theme, record.title));
  card.add(new TextRenderable(renderer, { content: record.status, fg: statusColor(ctx, record.status) }));
  function progress(label: string, steps: ArchiveDetail["stages"]) {
    const done = steps.filter(step => step.done).length;
    const percent = steps.length ? Math.round(100 * done / steps.length) : 0;
    if (back) card.add(spacer(renderer, ctx.space.gapY));
    card.add(heading(renderer, theme, label));
    card.add(new TextRenderable(renderer, {
      content: bar(done, steps.length, 12) + "  " + done + "/" + steps.length + "  " + percent + "%", fg: theme.accent,
    }));
  }
  progress("Stages", stages);
  for (const step of stages) {
    card.add(new TextRenderable(renderer, {
      content: (step.done ? icons.ok : "·") + "  " + step.label,
      fg: step.done ? theme.ok : theme.textDim,
    }));
  }
  progress("Anti-slop audits", audits);
  card.add(new TextRenderable(renderer, { content: new StyledText(audits.map(audit =>
    fg(audit.done ? theme.ok : theme.textDim)(audit.stage + " " + (audit.done ? icons.ok : "·") + " "))) }));
  card.add(spacer(renderer, ctx.space.gapY));
  card.add(dim(renderer, theme, "Channels  " + (record.channels.join(", ") || "—")));
  card.add(dim(renderer, theme, "Folder    " + record.directory));
  if (back) card.add(button(renderer, theme, { key: "Esc", label: "back", onPress: back }));
  return card;
}

export function createArchiveScreen() {
  const list = projectList();
  const filters = ["All", ...ARCHIVE_STATUSES];
  let filter = 0;
  let id: string | undefined;
  let previewRequest = 0;
  let sideCard: ReturnType<typeof detailPanel> | undefined;
  function back(ctx: ScreenContext) {
    id = undefined;
    ctx.refresh();
  }
  async function chooseFilter(ctx: ScreenContext) {
    const next = await ctx.choose({ title: "Archive status", items: filters, initial: filter });
    if (next === undefined) return;
    filter = next;
    id = undefined;
    ctx.refresh();
  }
  return projectScreen({
    id: "archive", title: "Archive", description: "Source material, stages and anti-slop audits", icon: "state",
    get actions(): ScreenAction[] {
      const actions = [...list.actions];
      if (id) actions.push({ keys: ["escape"], label: "Esc", description: "back", icon: "close", run: back });
      actions.push({ keys: ["f"], description: "filter", icon: "list", run: chooseFilter });
      return actions;
    },
    onKey(name) {
      if (!sideCard?.body.focused || (name !== "up" && name !== "down")) return false;
      sideCard.body.scrollBy(name === "up" ? -1 : 1);
      return true;
    },
    reset() { previewRequest++; sideCard = undefined; list.reset(); },
    async load(root, stats) {
      const data = id ? { detail: await showArchive(root, id) } : { rows: await listArchive(root, { status: ARCHIVE_STATUSES[filter - 1] }) };
      return { ...data, root, counts: stats.archive.byStatus };
    },
    render(ctx, data) {
      const top = summary(ctx, ARCHIVE_STATUSES.map(state => [state, data.counts[state], statusColor(ctx, state)]));
      if (data.detail) {
        const card = detailPanel(ctx, data.detail, () => back(ctx));
        list.scrollDetail(card.body);
        ctx.status(data.detail.record.id + " · " + data.detail.record.status);
        return projectPage(ctx, top, card);
      }
      const rows = data.rows!;
      ctx.status(rows.length + " archive items · " + filters[filter]);
      if (!rows.length) return projectPage(ctx, top, emptyView(ctx, "No archive items", filter ? "Press f to change the status filter." : "Add source material with inboundfy archive add."));
      const side = ctx.layout() === "wide" ? new BoxRenderable(ctx.renderer, { minHeight: 0 }) : undefined;
      async function preview(index: number) {
        if (!side) return;
        const request = ++previewRequest;
        sideCard = undefined;
        for (const child of side.getChildren()) child.destroyRecursively();
        const loading = dim(ctx.renderer, ctx.theme, "Loading " + rows[index]!.id + "…");
        side.add(loading);
        try {
          const detail = await showArchive(data.root, rows[index]!.id);
          if (request !== previewRequest || side.isDestroyed) return;
          loading.destroyRecursively();
          sideCard = detailPanel(ctx, detail);
          side.add(sideCard);
        } catch (error) {
          if (request !== previewRequest || side.isDestroyed) return;
          loading.content = String(error) + " · Press r to retry.";
          loading.fg = ctx.theme.error;
        }
      }
      const { theme } = ctx;
      const channelsWidth = ctx.layout() === "compact" ? 7 : 10;
      const items = rows.map(r => new StyledText([
        column(r.id, 4, theme.textStrong), column(r.status, 10, statusColor(ctx, r.status)),
        column(r.createdAt.slice(0, 10), 10, theme.textDim), column(r.channels.join(", ") || "—", channelsWidth, theme.textDim),
        fg(theme.text)(r.title),
      ]));
      const card = list.render(ctx, "Archive · " + filters[filter], items, index => {
        id = rows[index]!.id;
        ctx.refresh();
      }, side ? preview : undefined);
      card.body.add(dim(ctx.renderer, theme, "  ID   STATUS     DATE       " + "CHANNEL".padEnd(channelsWidth + 1) + "TITLE"), 0);
      card.maxHeight = rows.length + ctx.space.cardPadY * 2 + 4;
      return projectPage(ctx, top, side ? splitView(ctx, card, side) : card);
    },
  });
}
