import { BoxRenderable, StyledText, fg } from "@opentui/core";
import { PIPELINE_STATES } from "../../core/pipeline.ts";
import { listContent, showContent } from "../../core/content.ts";
import type { ContentRecord } from "../../core/types.ts";
import { button, dim, heading, keyValueTable, listPanel, scrollPanel } from "../components.ts";
import { emptyView, projectList, projectScreen } from "../project.ts";
import { column, projectPage, splitView, statusColor, summary } from "../project-layout.ts";
import type { ScreenAction, ScreenContext } from "../screen.ts";

function pieceRow(ctx: ScreenContext, row: ContentRecord) {
  return new StyledText([
    column(row.id, 4, ctx.theme.textStrong), column(row.status, 9, statusColor(ctx, row.status)),
    column(row.createdAt.slice(0, 10), 10, ctx.theme.textDim), fg(ctx.theme.text)(row.title),
  ]);
}

export function createChannelsScreen() {
  const list = projectList();
  let channel: string | undefined;
  let id: string | undefined;
  let sideList: ReturnType<typeof listPanel> | undefined;
  function back(ctx: ScreenContext) {
    if (id) id = undefined;
    else channel = undefined;
    ctx.refresh();
  }
  return projectScreen({
    id: "channels", title: "Channels", icon: "tabs", description: "Channel pipeline and editorial pieces",
    get actions(): ScreenAction[] {
      if (!channel) return list.actions;
      return [...list.actions, { keys: ["escape"], label: "Esc", description: "back", icon: "close", run: back }];
    },
    onKey(name) {
      if (!sideList?.box.body.focused) return false;
      if (name === "up" || name === "down") sideList.move(name === "up" ? -1 : 1);
      else if (name === "return" || name === "enter") sideList.select(sideList.selected());
      else return false;
      return true;
    },
    reset() { sideList = undefined; list.reset(); },
    async load(root, stats) {
      const pieces = id ? [] : await listContent(root, { channel });
      return { content: stats.content, pieces, piece: id ? await showContent(root, id) : undefined };
    },
    render(ctx, { content, pieces, piece }) {
      const { renderer, theme } = ctx;
      const active = content.channels.filter(row => row.selected).length;
      const top = summary(ctx, [[ctx.layout() === "compact" ? "Active" : "Active channels", active, theme.accent], ["Pieces", content.total, theme.textStrong],
        ["Published", content.published, theme.ok], ["In review", content.byStatus.revisao, theme.warn]]);
      function openPiece(row: ContentRecord) {
        channel = row.channel;
        id = row.id;
        ctx.refresh();
      }
      if (piece) {
        ctx.status(piece.channel + " · " + piece.id);
        const card = scrollPanel(renderer, theme, { title: piece.channel + " · " + piece.id, active: true });
        card.add(heading(renderer, theme, piece.title));
        card.add(keyValueTable(renderer, theme, [
          ["Status", piece.status, statusColor(ctx, piece.status)], ["Created", piece.createdAt.slice(0, 10)],
          ["Personas", piece.personas.join(", ")], ["Archive", piece.acervo.join(", ") || "—"], ["Folder", piece.directory],
          ["Published", piece.publishedAt ?? "—"], ["URL", piece.url ?? "—"],
        ]));
        card.add(button(renderer, theme, { key: "Esc", label: "back", onPress: () => back(ctx) }));
        list.scrollDetail(card.body);
        return projectPage(ctx, top, card);
      }
      const piecesHeader = () => dim(renderer, theme, "  ID   STATUS    DATE       TITLE");
      if (channel) {
        ctx.status(channel + " · " + pieces.length + " pieces");
        if (!pieces.length) return projectPage(ctx, top, emptyView(ctx, "No pieces in " + channel, "Press Esc to return to channels."));
        const card = list.render(ctx, channel + " · pieces", pieces.map(row => pieceRow(ctx, row)), i => openPiece(pieces[i]!));
        card.body.add(piecesHeader(), 0);
        card.maxHeight = pieces.length + ctx.space.cardPadY * 2 + 4;
        return projectPage(ctx, top, card);
      }
      const rows = content.channels;
      const side = ctx.layout() === "wide" ? new BoxRenderable(renderer, { minHeight: 0 }) : undefined;
      function preview(index: number) {
        if (!side) return;
        for (const child of side.getChildren()) child.destroyRecursively();
        const selected = rows[index]!.channel;
        const matches = pieces.filter(row => row.channel === selected);
        sideList = listPanel(renderer, theme, { title: selected + " · pieces", items: matches.map(row => pieceRow(ctx, row)), onSelect: i => openPiece(matches[i]!) });
        const card = sideList.box;
        card.maxHeight = Math.max(2, matches.length + 1) + ctx.space.cardPadY * 2 + 3;
        if (matches.length) card.body.add(piecesHeader(), 0);
        else card.add(dim(renderer, theme, "No pieces in " + selected));
        side.add(card);
      }
      const peak = Math.max(1, ...rows.map(row => row.total));
      const widths = PIPELINE_STATES.map(state => Math.max(1, ...rows.map(row => String(row.byStatus[state]).length)));
      const totalWidth = Math.max(3, String(peak).length);
      const publishedWidth = Math.max(3, ...rows.map(row => String(row.published).length));
      const items = rows.map(row => {
        const ink = row.selected ? theme.text : theme.textDim;
        const stateInk = (state: typeof PIPELINE_STATES[number]) => row.selected ? statusColor(ctx, state) : ink;
        // Cumulative rounding keeps the six segments within the same volume scale.
        let cumulative = 0;
        let used = 0;
        const segments = PIPELINE_STATES.map(state => {
          cumulative += row.byStatus[state];
          const next = Math.round(6 * cumulative / peak);
          const segment = fg(stateInk(state))("█".repeat(next - used));
          used = next;
          return segment;
        });
        const counts = PIPELINE_STATES.map((state, i) => column(String(row.byStatus[state]), widths[i]!, stateInk(state)));
        return new StyledText([column(row.channel, 9, ink), ...segments, fg(theme.textDim)("░".repeat(6 - used) + " "),
          ...counts, column(String(row.total), totalWidth, ink), column(String(row.published), publishedWidth, ink),
          fg(ink)(row.lastPublishedAt?.slice(0, 10) ?? "—")]);
      });
      ctx.status(active + " active channels");
      const card = list.render(ctx, "Channels · pipeline", items, index => {
        channel = rows[index]!.channel;
        ctx.refresh();
      }, side ? preview : undefined);
      const stages = ["D", "R", "A", "S", "P", "X"].map((label, i) => label.padEnd(widths[i]! + 1)).join("");
      card.body.add(dim(renderer, theme, "  CHANNEL   VOLUME " + stages + "ALL".padEnd(totalWidth + 1) + "PUB".padEnd(publishedWidth + 1) + "LAST DATE"), 0);
      card.maxHeight = rows.length + ctx.space.cardPadY * 2 + 4;
      return projectPage(ctx, top, side ? splitView(ctx, card, side, "52%") : card);
    },
  });
}
