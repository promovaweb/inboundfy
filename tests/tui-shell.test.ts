/** Full-shell coverage of modal interaction, layout, focus, file watching and cleanup. */
import { expect, spyOn, test } from "bun:test";
import { BoxRenderable, InputRenderable, TextRenderable, PasteEvent } from "@opentui/core";
import type { TestRendererSetup } from "@opentui/core/testing";
import { screens } from "../src/tui/screens/index.ts";
import type { Screen, ScreenContext } from "../src/tui/screen.ts";
import { join } from "node:path";
import { HOME_VARIABLE } from "../src/config/paths.ts";
import { TOAST_MS } from "../src/tui/overlays.ts";
import { writeSettings, defaultSettings, setPath } from "../src/config/settings.ts";
import { setCredential } from "../src/config/credentials.ts";
import { framePoint, withTui } from "./tui-fixture.ts";

/** Closes an overlay through the real parser's delayed lone Escape. */
async function escape(setup: TestRendererSetup): Promise<void> {
  setup.mockInput.pressEscape();
  await Bun.sleep(45);
  if (!setup.renderer.isDestroyed) await setup.renderOnce();
}

/** Mounts a test screen in the real registry and restores it after the test. */
async function fixture(run: (setup: TestRendererSetup, ctx: ScreenContext, state: { calls: number; mounts: number }) => Promise<void>, extra: Partial<Screen> = {}): Promise<void> {
  let context: ScreenContext;
  const state = { calls: 0, mounts: 0 };
  const screen: Screen = {
    id: "shell-fixture", title: "Fixture", description: "Shell integration fixture",
    actions: [
      { keys: ["z"], description: "count", run: () => { state.calls++; } },
      { keys: ["b"], description: "throw error", run: () => { throw new Error("Action failed visibly"); } },
      { keys: ["v"], description: "reject error", run: async () => { throw new Error("Async action failed"); } },
    ],
    mount: (ctx) => {
      context = ctx;
      state.mounts++;
      ctx.status("Fixture ready");
      const box = new BoxRenderable(ctx.renderer, { flexGrow: 1 });
      box.add(new TextRenderable(ctx.renderer, { content: `Mounted ${state.mounts}`, fg: ctx.theme.text }));
      return box;
    },
    ...extra,
  };
  const mount = screen.mount;
  screen.mount = (ctx) => { context = ctx; return mount(ctx); };
  const registry = screens as Screen[];
  registry.push(screen);
  try { await withTui(async (setup) => run(setup, context!, state), screen.id); }
  finally { registry.splice(registry.indexOf(screen), 1); }
}

test("palette opens by Ctrl+K and colon, filters, executes by Enter/click and navigates across tabs", async () => {
  await fixture(async (setup, _ctx, state) => {
    setup.mockInput.pressKey("k", { ctrl: true }); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Commands");
    await setup.mockInput.typeText("Fixture: count"); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("1 command(s)");
    setup.mockInput.pressEnter(); await setup.renderOnce(); expect(state.calls).toBe(1);
    setup.mockInput.pressKey(":"); await setup.renderOnce();
    await setup.mockInput.typeText("Fixture: count"); await setup.renderOnce();
    await setup.mockMouse.click(...framePoint(setup, "Fixture: count", true)); await setup.renderOnce(); expect(state.calls).toBe(2);
    setup.mockInput.pressKey(":"); await setup.renderOnce(); await escape(setup);
    expect(setup.captureCharFrame()).not.toContain("command(s)"); expect(setup.renderer.isDestroyed).toBe(false);
    setup.mockInput.pressKey(":"); await setup.mockInput.typeText("Go to Docs"); await setup.renderOnce();
    setup.mockInput.pressEnter(); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("TOPICS");
    setup.mockInput.pressKey(":"); await setup.mockInput.typeText("Fixture: count"); await setup.renderOnce();
    setup.mockInput.pressEnter(); await setup.renderOnce(); expect(state.calls).toBe(3); expect(setup.captureCharFrame()).toContain("Mounted 1");
  });
});

test("help is modal, its clickable action executes and Escape closes without quitting", async () => {
  await fixture(async (setup, _ctx, state) => {
    setup.mockInput.pressKey("?"); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Keys");
    await setup.mockMouse.click(...framePoint(setup, "count")); await setup.renderOnce();
    expect(state.calls).toBe(1); expect(setup.captureCharFrame()).not.toContain("Keys");
    setup.mockInput.pressKey("?"); await setup.renderOnce(); await escape(setup);
    expect(setup.renderer.isDestroyed).toBe(false); expect(setup.captureCharFrame()).not.toContain("Keys");
    setup.mockInput.pressKey("?"); setup.mockInput.pressKey("q"); await setup.renderOnce(); expect(setup.renderer.isDestroyed).toBe(false);
  });
});

test("confirm answers y/n/Escape/Enter, respects danger focus and buttons/backdrop", async () => {
  await fixture(async (setup, ctx) => {
    for (const [key, result] of [["y", true], ["n", false], ["RETURN", true]] as const) {
      const answer = ctx.confirm({ title: "Confirm operation", message: "Proceed?" }); await setup.renderOnce();
      setup.mockInput.pressKey(key); expect(await answer).toBe(result);
    }
    let answer = ctx.confirm({ title: "Danger", message: "Delete?", danger: true });
    setup.mockInput.pressEnter(); expect(await answer).toBe(false);
    answer = ctx.confirm({ title: "Danger", message: "Delete?", danger: true });
    setup.mockInput.pressArrow("left"); setup.mockInput.pressEnter(); expect(await answer).toBe(true);
    answer = ctx.confirm({ title: "Confirm operation", message: "Proceed?" }); await escape(setup); expect(await answer).toBe(false);
    for (const [label, result] of [["Confirm", true], ["Cancel", false]] as const) {
      answer = ctx.confirm({ title: "Operation", message: "Proceed?" }); await setup.renderOnce();
      await setup.mockMouse.click(...framePoint(setup, ` ${label} `)); expect(await answer).toBe(result);
    }
    answer = ctx.confirm({ title: "Operation", message: "Proceed?" }); await setup.renderOnce();
    await setup.mockMouse.click(0, 0); expect(await answer).toBe(false);
    expect(setup.renderer.isDestroyed).toBe(false);
  });
});

test("prompt edits, pastes, validates, cancels and keeps secret values out of frames", async () => {
  await fixture(async (setup, ctx) => {
    let resolved = false;
    const answer = ctx.prompt({ title: "Edit value", label: "Value", validate: (value) => value === "accepted" ? undefined : "Please enter accepted" }).then((value) => { resolved = true; return value; });
    await setup.mockInput.typeText("bad"); setup.mockInput.pressEnter(); await setup.renderOnce();
    expect(resolved).toBe(false); expect(setup.captureCharFrame()).toContain("Please enter accepted");
    setup.mockInput.pressKey("u", { ctrl: true }); await setup.mockInput.typeText("accepteX"); setup.mockInput.pressBackspace();
    const pasted = new PasteEvent(new TextEncoder().encode("d")); setup.renderer.keyInput.emit("paste", pasted);
    expect(pasted.defaultPrevented).toBe(true); setup.mockInput.pressEnter(); expect(await answer).toBe("accepted");
    const secret = ctx.prompt({ title: "Secret", label: "Token", secret: true });
    await setup.mockInput.typeText("never-render-this"); await setup.renderOnce();
    expect(setup.captureCharFrame()).not.toContain("never-render-this"); expect(setup.captureCharFrame()).toContain("••••");
    setup.mockInput.pressEnter(); expect(await secret).toBe("never-render-this");
    const canceled = ctx.prompt({ title: "Cancel edit", label: "Value" }); await escape(setup); expect(await canceled).toBeUndefined();
    const multiline = ctx.prompt({ title: "Paste", label: "Value" });
    setup.renderer.keyInput.emit("paste", new PasteEvent(new TextEncoder().encode("a\nb\rc")));
    setup.mockInput.pressEnter(); expect(await multiline).toBe("a b c");
  });
});

test("choose supports arrows, j/k, Enter, row click, wheel and Escape", async () => {
  await fixture(async (setup, ctx) => {
    const options = { title: "Pick item", items: ["Alpha option", "Beta option", "Gamma option"] };
    let answer = ctx.choose(options); setup.mockInput.pressArrow("down"); setup.mockInput.pressKey("j"); setup.mockInput.pressKey("k"); setup.mockInput.pressEnter(); expect(await answer).toBe(1);
    answer = ctx.choose(options); await setup.renderOnce(); await setup.mockMouse.click(...framePoint(setup, "Gamma option")); expect(await answer).toBe(2);
    answer = ctx.choose(options); await setup.renderOnce(); await setup.mockMouse.scroll(...framePoint(setup, "Alpha option"), "down"); setup.mockInput.pressEnter(); expect(await answer).toBe(1);
    answer = ctx.choose({ ...options, initial: 2 }); setup.mockInput.pressArrow("up"); setup.mockInput.pressEnter(); expect(await answer).toBe(1);
    answer = ctx.choose(options); await escape(setup); expect(await answer).toBeUndefined();
    answer = ctx.choose({ title: "Empty", items: [] }); setup.mockInput.pressEnter(); await escape(setup); expect(await answer).toBeUndefined();
  });
});

test("toasts stack at three, dismiss on click and expire using TOAST_MS", async () => {
  const original = globalThis.setTimeout;
  const clock = spyOn(globalThis, "setTimeout").mockImplementation(((handler: (...args: unknown[]) => void, delay?: number, ...args: unknown[]) => original(handler, delay === TOAST_MS ? 200 : delay, ...args)) as typeof setTimeout);
  try {
    await fixture(async (setup, ctx) => {
      for (let i = 1; i <= 4; i++) ctx.notify(`Toast number ${i}`);
      await setup.renderOnce(); let frame = setup.captureCharFrame();
      expect(frame).not.toContain("Toast number 1");
      for (const i of [2, 3, 4]) expect(frame).toContain(`Toast number ${i}`);
      await setup.mockMouse.click(...framePoint(setup, "Toast number 3")); await setup.renderOnce();
      expect(setup.captureCharFrame()).not.toContain("Toast number 3");
      expect(clock.mock.calls.some((call) => call[1] === TOAST_MS)).toBe(true);
      await Bun.sleep(220); await setup.renderOnce(); expect(setup.captureCharFrame()).not.toContain("Toast number");
    });
  } finally { clock.mockRestore(); }
});

for (const [width, height] of [[60, 16], [80, 24], [120, 32]]) {
  test(`layout at ${width}x${height} preserves the complete global key bar`, async () => {
    await withTui(async (setup) => {
      const bar = setup.captureCharFrame().trimEnd().split("\n").at(-1)!;
      expect(bar).toContain("help"); expect(bar).toContain("quit"); expect(bar).toContain("commands");
      expect(Bun.stringWidth(bar)).toBeLessThanOrEqual(width!);
    }, "settings", { width, height });
  });
}

test("small-terminal state and resize remount the screen at each layout boundary", async () => {
  await fixture(async (setup, _ctx, state) => {
    setup.resize(80, 24); await setup.renderOnce(); expect(state.mounts).toBe(2);
    setup.resize(60, 16); await setup.renderOnce(); expect(state.mounts).toBe(3);
    setup.resize(59, 15); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("Terminal too small");
    setup.resize(120, 10); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("Terminal too small");
    setup.resize(120, 32); await setup.renderOnce(); expect(state.mounts).toBe(4);
    expect(setup.captureCharFrame()).toContain("Mounted 4");
  });
});

test("Settings and Credentials focus cycles with Tab and leaves tab navigation available", async () => {
  await withTui(async (setup) => {
    setCredential("service.token", "private");
    for (const key of ["2", "3"]) {
      setup.mockInput.pressKey(key); await setup.renderOnce();
      setup.mockInput.pressTab(); const focused = setup.renderer.currentFocusedRenderable;
      expect(focused).not.toBeNull(); expect(focused?.constructor.name).toBe("ScrollBoxRenderable");
      setup.mockInput.pressTab();
      const details = setup.renderer.currentFocusedRenderable;
      expect(details).not.toBeNull();
      expect(details?.constructor.name).toBe("ScrollBoxRenderable");
      expect(details).not.toBe(focused);
      setup.mockInput.pressTab();
      expect(setup.renderer.currentFocusedRenderable).toBe(focused);
      setup.mockInput.pressTab({ shift: true });
      expect(setup.renderer.currentFocusedRenderable).toBe(details);
    }
    setup.mockInput.pressKey("1"); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("ENVIRONMENT"); expect(setup.renderer.currentFocusedRenderable === null).toBe(true);
  });
});

test("watch refreshes settings from disk, including updates received while a modal is open", async () => {
  await withTui(async (setup) => {
    const settings = defaultSettings(); setPath(settings, "output.colors", false); writeSettings(settings);
    await Bun.sleep(320); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Updated from disk");
    expect(setup.captureCharFrame()).toContain("false");
    setup.mockInput.pressKey("?"); await setup.renderOnce();
    setPath(settings, "custom.marker", "disk-update-marker"); writeSettings(settings);
    await Bun.sleep(320); await escape(setup); await Bun.sleep(320); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("disk-update-marker");
  }, "settings");
});

test("throwing and rejected screen actions become error toasts", async () => {
  await fixture(async (setup) => {
    setup.mockInput.pressKey("b"); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("Action failed visibly");
    setup.mockInput.pressKey("v"); await Promise.resolve(); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("Async action failed");
  });
});

test("focused editable text receives action letters and digits without running shell commands", async () => {
  let input: InputRenderable;
  await fixture(async (setup, _ctx, state) => {
    input.focus(); await setup.mockInput.typeText("zq1?["); await setup.renderOnce();
    expect(state.calls).toBe(0); expect(input.value).toBe("zq1?["); expect(setup.renderer.isDestroyed).toBe(false);
    expect(setup.captureCharFrame()).not.toContain("Keys");
    await escape(setup); expect(input.focused).toBe(false);
    setup.mockInput.pressKey("z"); expect(state.calls).toBe(1);
  }, { mount: (ctx) => {
    input = new InputRenderable(ctx.renderer, { width: 30 });
    const box = new BoxRenderable(ctx.renderer, { flexGrow: 1 }); box.add(input); return box;
  } });
});

test("shutdown cancels pending dialogs and removes shell listeners and timers", async () => {
  await fixture(async (setup, ctx) => {
    const pending = ctx.confirm({ title: "Pending", message: "Wait" });
    ctx.notify("Temporary toast"); setup.renderer.destroy();
    expect(await pending).toBe(false);
    expect(setup.renderer.listenerCount("resize")).toBe(0);
    expect(setup.renderer.listenerCount("blur")).toBe(0);
    expect(setup.renderer.listenerCount("focus")).toBe(0);
  });
});

test("Tab includes a focusable root and Shift+Tab starts at the last actual panel", async () => {
  let first: InputRenderable;
  let second: InputRenderable;
  await fixture(async (setup) => {
    setup.mockInput.pressTab({ shift: true }); expect(second.focused).toBe(true);
    setup.mockInput.pressTab({ shift: true }); expect(first.focused).toBe(true);
    setup.mockInput.pressTab(); expect(second.focused).toBe(true);
  }, { mount: (ctx) => {
    const root = new BoxRenderable(ctx.renderer, {});
    first = new InputRenderable(ctx.renderer, { width: 20 });
    second = new InputRenderable(ctx.renderer, { width: 20 });
    root.add(first); root.add(second); return root;
  } });
  await fixture(async (setup) => {
    setup.mockInput.pressTab(); expect(setup.renderer.currentFocusedRenderable?.focused).toBe(true);
  }, { mount: (ctx) => new InputRenderable(ctx.renderer, { width: 20 }) });
});

test("cached tabs restore status and modal paste cannot reach a focused editor", async () => {
  await withTui(async (setup) => {
    setup.mockInput.pressKey("5"); setup.mockInput.pressKey("1"); await setup.renderOnce();
    const bar = setup.captureCharFrame().trimEnd().split("\n").at(-1)!;
    expect(bar).toContain("credentials · defaults");
  });
  let input: InputRenderable;
  await fixture(async (setup, ctx) => {
    input.focus(); const pending = ctx.confirm({ title: "Protect editor", message: "Paste stays in the modal" });
    const paste = new PasteEvent(new TextEncoder().encode("hidden modification"));
    setup.renderer.keyInput.emit("paste", paste);
    expect(paste.defaultPrevented).toBe(true); expect(input.value).toBe("");
    setup.mockInput.pressKey("n"); expect(await pending).toBe(false);
    expect(input.focused).toBe(true);
  }, { mount: (ctx) => {
    input = new InputRenderable(ctx.renderer, { width: 25 }); return input;
  } });
});

test("watch discovers a HOME directory created after mounting and closes on shutdown", async () => {
  await withTui(async (setup) => {
    const original = process.env[HOME_VARIABLE]!;
    const nested = join(original, "created-later", "data"); process.env[HOME_VARIABLE] = nested;
    // Switching away and back remounts Settings at another width and registers
    // its watches against the nearest existing ancestor of the future HOME.
    setup.mockInput.pressKey("1"); setup.mockInput.pressKey("2");
    const settings = defaultSettings(); setPath(settings, "custom.marker", "first-write-marker"); writeSettings(settings);
    await Bun.sleep(350); await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("first-write-marker");
    setup.renderer.destroy(); setPath(settings, "custom.marker", "after-shutdown"); writeSettings(settings);
    await Bun.sleep(300); expect(setup.renderer.isDestroyed).toBe(true);
    process.env[HOME_VARIABLE] = original;
  }, "settings");
});

test("prompt validation exceptions keep the modal usable and replacement/destroy resolve promises", async () => {
  await fixture(async (setup, ctx) => {
    const first = ctx.prompt({ title: "Validation", label: "Value", validate: () => { throw new Error("Do not expose raw input"); } });
    setup.mockInput.pressEnter(); await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Unable to validate this value");
    const replacement = ctx.choose({ title: "Replacement", items: ["One"] }); expect(await first).toBeUndefined();
    setup.renderer.destroy(); expect(await replacement).toBeUndefined();
    expect(await ctx.confirm({ title: "After shutdown", message: "Nothing to mount" })).toBe(false);
    expect(await ctx.prompt({ title: "After shutdown", label: "Value" })).toBeUndefined();
    expect(await ctx.choose({ title: "After shutdown", items: [] })).toBeUndefined();
  });
});
