/**
 * Plain-text charts for the CLI and the TUI: horizontal bars, sparklines
 * and percentages. Pure functions over numbers; colors are applied by the
 * caller.
 */

const SPARK = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"] as const;

/** Sparkline of the values, one block per value. */
export function sparkline(values: readonly number[]): string {
  const max = Math.max(0, ...values);
  if (max === 0) return values.map(() => SPARK[0]).join("");
  return values.map((v) => SPARK[Math.min(SPARK.length - 1, Math.round((v / max) * (SPARK.length - 1)))]).join("");
}

/** Horizontal bar of `width` cells proportional to `value / max`. */
export function bar(value: number, max: number, width: number): string {
  if (width <= 0) return "";
  const filled = max <= 0 ? 0 : Math.round((value / max) * width);
  return "█".repeat(Math.min(width, filled)) + "░".repeat(Math.max(0, width - filled));
}

/** Progress bar with eighth-block precision. */
export function progress(percent: number, width: number): string {
  const clamped = Math.min(100, Math.max(0, percent));
  const cells = (clamped / 100) * width;
  const full = Math.floor(cells);
  const partial = ["", "▏", "▎", "▍", "▌", "▋", "▊", "▉"][Math.round((cells - full) * 7)] ?? "";
  const body = "█".repeat(full) + partial;
  return body + " ".repeat(Math.max(0, width - [...body].length));
}

/** Short month label (`2026-11` → `Nov`). */
export function monthLabel(month: string): string {
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return names[Number(month.slice(5, 7)) - 1] ?? month;
}
