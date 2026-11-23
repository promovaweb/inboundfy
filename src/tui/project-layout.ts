import { BoxRenderable, TextRenderable, TextAttributes, fg, type ColorInput, type Renderable } from "@opentui/core";
import { fitText, panel } from "./components.ts";
import type { ScreenContext } from "./screen.ts";
import type { ArchiveStatus, ContentStatus } from "../core/types.ts";

export function statusColor(ctx: ScreenContext, state: ArchiveStatus | ContentStatus) {
  const roles = {
    recebido: "accent", processando: "warn", processado: "ok", arquivado: "textDim",
    rascunho: "text", revisao: "warn", aprovado: "ok", agendado: "accentSecondary", publicado: "ok",
  } as const;
  return ctx.theme[roles[state]];
}

/** Fixed terminal-cell columns leave the final field the remaining width. */
export function column(text: string, width: number, color: ColorInput) {
  const fitted = fitText(text, width);
  return fg(color)(fitted + " ".repeat(width - Bun.stringWidth(fitted) + 1));
}

export function summary(ctx: ScreenContext, metrics: [string, number, ColorInput][]) {
  const strip = new BoxRenderable(ctx.renderer, { flexDirection: "row", gap: ctx.space.cardPadX, flexShrink: 0 });
  for (const [label, value, color] of metrics) {
    const card = panel(ctx.renderer, ctx.theme, { title: label, flexGrow: 1, height: 4 });
    card.body.paddingTop = 0;
    card.body.paddingBottom = 0;
    card.add(new TextRenderable(ctx.renderer, { content: String(value), fg: color, attributes: TextAttributes.BOLD }));
    strip.add(card);
  }
  return strip;
}

export function projectPage(ctx: ScreenContext, top: Renderable, content: Renderable) {
  const page = new BoxRenderable(ctx.renderer, { flexGrow: 1, minHeight: 0, gap: ctx.space.gapY });
  page.add(top);
  page.add(content);
  return page;
}

export function splitView(ctx: ScreenContext, left: Renderable, right: Renderable, leftWidth: `${number}%` = "56%") {
  const row = new BoxRenderable(ctx.renderer, { flexGrow: 1, minHeight: 0, flexDirection: "row", gap: ctx.space.cardPadX });
  left.width = leftWidth;
  left.flexShrink = 0;
  left.flexGrow = 0;
  right.flexGrow = 1;
  right.minWidth = 0;
  right.flexBasis = 0;
  row.add(left);
  row.add(right);
  return row;
}
