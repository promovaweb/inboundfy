/** Checks keyboard navigation, action dispatch and shell resource ownership. */
import { expect, test } from "bun:test";
import { BoxRenderable } from "@opentui/core";
import { screens } from "../src/tui/screens/index.ts";
import type { Screen } from "../src/tui/screen.ts";
import { withTui } from "./tui-fixture.ts";

test("numbered tabs include icons and declared actions appear in the bar", async () => {
  await withTui(async (setup) => {
    const frame = setup.captureCharFrame();
    expect(frame).toContain("1 ⌂ Overview");
    expect(frame).toContain("5 ℹ About");
    const bar = frame.trimEnd().split("\n").at(-1)!;
    expect(bar).toContain("reload");
    expect(bar).toContain("copy MCP config");
  });
});
test("Tab keeps the active tab and brackets switch through the new tab order", async () => {
  await withTui(async (setup) => {
    setup.mockInput.pressTab({ shift: true });
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("ENVIRONMENT");
    setup.mockInput.pressKey("[");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("CREDITS");
    setup.mockInput.pressKey("]");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("ENVIRONMENT");
    setup.mockInput.pressKey("]");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("SETTING DETAILS");
  });
});
test("Escape closes help before quitting and reload reports success", async () => {
  await withTui(async (setup) => {
    setup.mockInput.pressKey("?");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Keys");
    setup.mockInput.pressEscape();
    // A lone Escape waits for the input parser to rule out an escape sequence.
    await Bun.sleep(50);
    await setup.renderOnce();
    expect(setup.renderer.isDestroyed).toBe(false);
    expect(setup.captureCharFrame()).not.toContain("Keys");
    setup.mockInput.pressKey("r");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Reloaded");
    expect(setup.captureCharFrame()).toContain("ENVIRONMENT");
    setup.mockInput.pressEscape();
    // A lone Escape waits for the input parser to rule out an escape sequence.
    await Bun.sleep(50);
    expect(setup.renderer.isDestroyed).toBe(true);
  });
});
test("Ctrl+C quits instead of invoking the screen c action", async () => {
  await withTui(async (setup) => {
    setup.mockInput.pressCtrlC();
    expect(setup.renderer.isDestroyed).toBe(true);
  });
});
test("refresh and shutdown destroy replaced and cached nodes and leave the active screen", async () => {
  const nodes: BoxRenderable[] = [];
  let enters = 0;
  let leaves = 0;
  const fixture: Screen = {
    id: "lifecycle", title: "Lifecycle", description: "Resource ownership fixture",
    actions: [{ keys: ["r"], description: "rebuild", run: (ctx) => ctx.refresh() }],
    mount: ({ renderer }) => {
      const node = new BoxRenderable(renderer, {});
      nodes.push(node);
      return node;
    },
    onEnter: () => { enters++; }, onLeave: () => { leaves++; },
  };
  const registry = screens as Screen[];
  registry.push(fixture);
  try {
    await withTui(async (setup) => {
      setup.mockInput.pressKey("r");
      await setup.renderOnce();
      expect(nodes).toHaveLength(2);
      expect(nodes[0]!.isDestroyed).toBe(true);
      expect(enters).toBe(2);
      expect(leaves).toBe(1);
      setup.mockInput.pressKey("1");
      await setup.renderOnce();
      expect(nodes[1]!.isDestroyed).toBe(false);
      setup.mockInput.pressKey(String(registry.indexOf(fixture) + 1));
      setup.mockInput.pressKey("q");
      expect(nodes.every((node) => node.isDestroyed)).toBe(true);
      expect(leaves).toBe(3);
    }, "lifecycle");
  } finally { registry.splice(registry.indexOf(fixture), 1); }
});

test("focused lists handle declared actions once and hidden lists stop receiving keys", async () => {
  const { listPanel } = await import("../src/tui/components.ts");
  let items: ReturnType<typeof listPanel>;
  const fixture: Screen = {
    id: "focus", title: "Focus", description: "Focused list fixture",
    actions: [{ keys: ["j"], description: "down", run: () => items.move(1) }],
    mount: ({ renderer, theme }) => {
      items = listPanel(renderer, theme, { title: "Focus choices", items: ["Alpha", "Beta", "Gamma"] });
      return items.box;
    },
    onEnter: () => items.box.focus(),
  };
  const registry = screens as Screen[];
  registry.push(fixture);
  try {
    await withTui(async (setup) => {
      setup.mockInput.pressKey("j");
      await setup.renderOnce();
      expect(items.selected()).toBe(1);
      setup.mockInput.pressKey("1");
      await setup.renderOnce();
      expect(items.box.focused).toBe(false);
      setup.mockInput.pressKey("j");
      expect(items.selected()).toBe(1);
    }, "focus");
  } finally { registry.splice(registry.indexOf(fixture), 1); }
});

test("closing help destroys its detached render tree", async () => {
  await withTui(async (setup) => {
    setup.mockInput.pressKey("?");
    await setup.renderOnce();
    const help = setup.renderer.root.getChildren().at(-1)!;
    const children = help.getChildren();
    setup.mockInput.pressKey("?");
    await setup.renderOnce();
    expect(help.isDestroyed).toBe(true);
    expect(children.every((child) => child.isDestroyed)).toBe(true);
  });
});

test("switching tabs destroys the obsolete key bar items", async () => {
  await withTui(async (setup) => {
    const app = setup.renderer.root.getChildren()[0]!;
    const bar = app.getChildren().at(-1)!;
    const actions = bar.getChildren()[1]!;
    const items = actions.getChildren();
    setup.mockInput.pressKey("5");
    await setup.renderOnce();
    expect(actions.isDestroyed).toBe(true);
    expect(items.every((item) => item.isDestroyed)).toBe(true);
    expect(setup.captureCharFrame()).toContain("copy link");
  });
});
