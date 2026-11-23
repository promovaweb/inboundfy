/** Shared TUI fixtures isolate settings, renderers and frame-derived coordinates. */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTestRenderer, type TestRendererSetup, type TestRendererOptions } from "@opentui/core/testing";
import { HOME_VARIABLE, MASTER_KEY_VARIABLE } from "../src/config/paths.ts";
import { mountTui } from "../src/tui/index.ts";
import { iconSets } from "../src/tui/icons.ts";
import { themes } from "../src/tui/theme.ts";

/** Runs a shell fixture and always closes native resources and restores environment. */
export async function withTui(run: (setup: TestRendererSetup) => Promise<void>, initialTab = "overview", options: TestRendererOptions = {}): Promise<void> {
  const dir = mkdtempSync(join(tmpdir(), "termfy-input-"));
  const previous = new Map([HOME_VARIABLE, MASTER_KEY_VARIABLE].map((key) => [key, process.env[key]]));
  process.env[HOME_VARIABLE] = dir;
  delete process.env[MASTER_KEY_VARIABLE];
  let setup: TestRendererSetup | undefined;
  let closed: Promise<void> | undefined;
  try {
    setup = await createTestRenderer({ width: 160, height: 36, ...options });
    closed = mountTui(setup.renderer, { initialTab, icons: iconSets.unicode, motion: false }, themes.night);
    await setup.renderOnce();
    await run(setup);
  } finally {
    try {
      if (setup && !setup.renderer.isDestroyed) setup.renderer.destroy();
      await closed;
    } finally {
      for (const [key, value] of previous) {
        if (value === undefined) delete process.env[key]; else process.env[key] = value;
      }
      rmSync(dir, { recursive: true, force: true });
    }
  }
}

/** Locates text in terminal cells, optionally taking the last matching row. */
export function framePoint(setup: TestRendererSetup, text: string, last = false): [number, number] {
  const rows = setup.captureCharFrame().split("\n");
  const candidates = rows.flatMap((row, y) => {
    const index = row.indexOf(text);
    return index < 0 ? [] : [[Bun.stringWidth(row.slice(0, index)), y] as [number, number]];
  });
  const point = last ? candidates.at(-1) : candidates[0];
  if (!point) throw new Error(`Missing frame text: ${text}`);
  return point;
}
