/** Screen tests with isolated data files and configurable modal responses. */
import { afterAll, beforeEach, expect, test } from "bun:test";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTestRenderer } from "@opentui/core/testing";
import { HOME_VARIABLE, MASTER_KEY_VARIABLE, paths } from "../src/config/paths.ts";
import { getPath, readSettings, writeSettings, defaultSettings, setPath } from "../src/config/settings.ts";
import { getCredential, listCredentials } from "../src/config/credentials.ts";
import { createSettingsScreen } from "../src/tui/screens/settings.ts";
import { createCredentialsScreen } from "../src/tui/screens/credentials.ts";
import { createDocsScreen } from "../src/tui/screens/docs.ts";
import { overviewScreen } from "../src/tui/screens/overview.ts";
import { aboutScreen } from "../src/tui/screens/about.ts";
import { createScreenContext } from "./tui-context.ts";
import type { Screen, ScreenContext, Layout } from "../src/tui/screen.ts";

const previousHome = process.env[HOME_VARIABLE]; const previousKey = process.env[MASTER_KEY_VARIABLE];
const directory = mkdtempSync(join(tmpdir(), "termfy-screens-"));
beforeEach(() => { process.env[HOME_VARIABLE] = directory; delete process.env[MASTER_KEY_VARIABLE]; rmSync(directory, { recursive: true, force: true }); });
afterAll(() => {
  if (previousHome === undefined) delete process.env[HOME_VARIABLE]; else process.env[HOME_VARIABLE] = previousHome;
  if (previousKey === undefined) delete process.env[MASTER_KEY_VARIABLE]; else process.env[MASTER_KEY_VARIABLE] = previousKey;
  rmSync(directory, { recursive: true, force: true });
});
async function action(screen: Screen, key: string, ctx: ScreenContext) { await screen.actions?.find((entry) => entry.keys.includes(key))?.run(ctx); }

test("settings edits enum and boolean, validates input, confirms reset and persists under HOME", async () => {
  const setup = await createTestRenderer({ width: 110, height: 30 });
  try {
    const fixture = createScreenContext(setup.renderer); const screen = createSettingsScreen();
    const settings = defaultSettings(); setPath(settings, "custom.title", "Before"); writeSettings(settings);
    setup.renderer.root.add(screen.mount(fixture.ctx)); await setup.renderOnce();
    // Sorted keys: custom.title, output.colors, output.format, ...
    fixture.answers.prompt = async (options) => { expect(options.validate?.("After")).toBeUndefined(); return "After"; };
    await action(screen, "e", fixture.ctx); expect(getPath(readSettings(), "custom.title")).toBe("After");
    await action(screen, "j", fixture.ctx); await action(screen, "e", fixture.ctx); expect(getPath(readSettings(), "output.colors")).toBe(false);
    await action(screen, "j", fixture.ctx); fixture.answers.choose = async () => 1;
    await action(screen, "e", fixture.ctx); expect(getPath(readSettings(), "output.format")).toBe("json");
    fixture.answers.confirm = async () => false; await action(screen, "x", fixture.ctx); expect(getPath(readSettings(), "output.format")).toBe("json");
    fixture.answers.confirm = async () => true; await action(screen, "x", fixture.ctx); expect(getPath(readSettings(), "output.format")).toBe("text");
    expect(paths.settings()).toStartWith(directory);
  } finally { setup.renderer.destroy(); }
});

test("credentials prompts secretly, never renders values, and confirms removal", async () => {
  const setup = await createTestRenderer({ width: 110, height: 30 });
  try {
    const fixture = createScreenContext(setup.renderer); const screen = createCredentialsScreen();
    let node = screen.mount(fixture.ctx); setup.renderer.root.add(node); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("No credentials");
    fixture.answers.prompt = async (options) => {
      if (!options.secret) { expect(options.validate?.("bad name")).toBeDefined(); return "service.token"; }
      expect(options.secret).toBe(true); return "super-private-secret-value";
    };
    await action(screen, "a", fixture.ctx); expect(getCredential("service.token")).toBe("super-private-secret-value");
    setup.renderer.root.remove(node); node.destroyRecursively(); node = screen.mount(fixture.ctx); setup.renderer.root.add(node); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("service.token"); expect(setup.captureCharFrame()).not.toContain("super-private"); expect(setup.captureCharFrame()).not.toContain("****");
    fixture.answers.confirm = async () => false; await action(screen, "d", fixture.ctx); expect(listCredentials()).toHaveLength(1);
    fixture.answers.confirm = async (options) => { expect(options.danger).toBe(true); return true; };
    await action(screen, "d", fixture.ctx); expect(listCredentials()).toHaveLength(0);
  } finally { setup.renderer.destroy(); }
});

test("vault corruption has an actionable error state", async () => {
  writeSettings(defaultSettings()); writeFileSync(paths.credentials(), "broken");
  const setup = await createTestRenderer({ width: 80, height: 24 });
  try { const fixture = createScreenContext(setup.renderer); setup.renderer.root.add(createCredentialsScreen().mount(fixture.ctx)); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("Unable to open vault"); }
  finally { setup.renderer.destroy(); }
});

for (const [layout, width] of [["compact", 64], ["medium", 100], ["wide", 160]] as Array<[Layout, number]>) {
  test(`${layout} screens render and docs loads its topic`, async () => {
    const setup = await createTestRenderer({ width, height: 40 });
    try {
      const fixture = createScreenContext(setup.renderer, layout);
      for (const screen of [overviewScreen, createSettingsScreen(), createCredentialsScreen(), aboutScreen]) {
        const node = screen.mount(fixture.ctx); setup.renderer.root.add(node); await setup.renderOnce(); expect(setup.captureCharFrame().trim().length).toBeGreaterThan(0);
        setup.renderer.root.remove(node); node.destroyRecursively();
      }
      const docs = createDocsScreen(); setup.renderer.root.add(docs.mount(fixture.ctx));
      await setup.waitForFrame((frame) => frame.includes("CLI"));
      expect(fixture.statuses.at(-1)).toBe("docs: cli");
      fixture.answers.choose = async () => 1; await action(docs, "t", fixture.ctx); await setup.renderOnce();
      expect(fixture.statuses.at(-1)).toBe("docs: tui");
      for (let attempt = 0; attempt < 40 && !setup.captureCharFrame().includes("TUI"); attempt++) { await Bun.sleep(25); await setup.renderOnce(); }
      expect(setup.captureCharFrame()).toContain("TUI");
      docs.onLeave?.(fixture.ctx);
    } finally { setup.renderer.destroy(); }
  });
}
