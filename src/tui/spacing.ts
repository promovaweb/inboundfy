/** Shared terminal-cell spacing for the shell, cards and screen layouts. */
import type { Layout } from "./screen.ts";

const roomy = { pageX: 3, pageY: 1, cardPadX: 2, cardPadY: 1, gapX: 4, gapY: 1, tabGap: 4, labelGap: 3 } as const;
const compact = { pageX: 1, pageY: 0, cardPadX: 1, cardPadY: 0, gapX: 1, gapY: 0, tabGap: 2, labelGap: 2 } as const;

/** Returns the spacing tokens for the current terminal width class. */
export function spacing(layout: Layout) {
  return layout === "compact" ? compact : roomy;
}

/** Resolves component spacing from a renderer's current width. */
export function spacingFor(width: number) {
  return spacing(width < 80 ? "compact" : width < 120 ? "medium" : "wide");
}

/** Fixed spacing for inline controls and modal content. */
export const controlSpacing = { gap: 2, modalX: 2, modalY: 1 } as const;
