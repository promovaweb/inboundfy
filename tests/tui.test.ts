/** Mounts the TUI on the OpenTUI test renderer and checks tabs by frame. */
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTestRenderer, type TestRendererSetup } from "@opentui/core/testing";
import { HOME_VARIABLE, MASTER_KEY_VARIABLE } from "../src/config/paths.ts";
import { manifest } from "../src/app/manifest.ts";
import { mountTui } from "../src/tui/index.ts";

let dir: string;
let setup: TestRendererSetup;
let closed: Promise<void>;
const previous = new Map([HOME_VARIABLE, MASTER_KEY_VARIABLE].map((key) => [key, process.env[key]]));

beforeAll(async () => {
  dir = mkdtempSync(join(tmpdir(), "termfy-tui-"));
  process.env[HOME_VARIABLE] = dir;
  delete process.env[MASTER_KEY_VARIABLE];
  setup = await createTestRenderer({ width: 120, height: 32 });
  closed = mountTui(setup.renderer, { motion: false });
  await setup.renderOnce();
});

afterAll(async () => {
  try {
    if (setup && !setup.renderer.isDestroyed) setup.renderer.destroy();
    await closed;
  } finally {
    rmSync(dir, { recursive: true, force: true });
    for (const [key, value] of previous) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
});

describe("tui", () => {
  test("opens on the Overview tab with header, panels and key bar", async () => {
    const frame = setup.captureCharFrame();
    expect(frame).toContain(manifest.title);
    expect(frame).toContain(`v${manifest.version}`);
    expect(frame).toContain("Overview");
    expect(frame).toContain("About");
    expect(frame).toContain("ENVIRONMENT");
    expect(frame).toContain("STATE");
    expect(frame).toContain("quit");
  });

  test("key 5 goes to About and ? opens the help", async () => {
    setup.mockInput.pressKey("5");
    await setup.renderOnce();
    let frame = setup.captureCharFrame();
    expect(frame).toContain("CREDITS");
    expect(frame).toContain("OpenTUI");
    setup.mockInput.pressKey("?");
    await setup.renderOnce();
    frame = setup.captureCharFrame();
    expect(frame).toContain("Keys");
    setup.mockInput.pressKey("?");
    await setup.renderOnce();
  });

  test("q destroys the renderer", async () => {
    setup.mockInput.pressKey("q");
    await closed;
    expect(setup.renderer.isDestroyed).toBe(true);
  });
});
