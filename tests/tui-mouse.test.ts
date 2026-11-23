/** Exercises mouse routes through real OpenTUI hit testing and captured frames. */
import { expect, test } from "bun:test";
import { createTestRenderer } from "@opentui/core/testing";
import { button, listPanel, panel } from "../src/tui/components.ts";
import { themes } from "../src/tui/theme.ts";
import { framePoint, withTui } from "./tui-fixture.ts";

test("clicking tab 5 opens About and the tab wheel moves in both directions", async () => {
  await withTui(async (setup) => {
    await setup.mockMouse.click(...framePoint(setup, "5 ℹ About"), 2);
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("ENVIRONMENT");
    await setup.mockMouse.click(...framePoint(setup, "5 ℹ About"));
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("CREDITS");
    await setup.mockMouse.scroll(...framePoint(setup, "5 ℹ About"), "down");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("ENVIRONMENT");
    await setup.mockMouse.scroll(...framePoint(setup, "1 ⌂ Overview"), "down");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("SETTING DETAILS");
  });
});
test("clicking quit in the key bar destroys the renderer", async () => {
  await withTui(async (setup) => {
    await setup.mockMouse.click(...framePoint(setup, "quit", true));
    expect(setup.renderer.isDestroyed).toBe(true);
  });
});
test("a key bar screen action copies MCP config and reports its result", async () => {
  await withTui(async (setup) => {
    await setup.mockMouse.click(...framePoint(setup, "copy MCP config", true));
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toMatch(/copied|OSC 52/);
  });
});
test("clicking a help action runs it and closes the help", async () => {
  await withTui(async (setup) => {
    setup.mockInput.pressKey("?");
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Keys");
    await setup.mockMouse.click(...framePoint(setup, "↻ reload"));
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("Reloaded");
    expect(setup.captureCharFrame()).not.toContain("Keys");
  });
});
test("list row clicks select and activate while right clicks and wheel do not activate", async () => {
  const setup = await createTestRenderer({ width: 50, height: 10 });
  const calls: number[] = [];
  try {
    const list = listPanel(setup.renderer, themes.night, { title: "Choices", items: ["First choice", "Second choice", "Third choice"], onSelect: (index) => calls.push(index) });
    list.box.height = 10;
    setup.renderer.root.add(list.box);
    await setup.renderOnce();
    await setup.mockMouse.click(...framePoint(setup, "Second choice"), 2);
    await setup.mockMouse.scroll(...framePoint(setup, "Second choice"), "down");
    expect(calls).toEqual([]);
    await setup.mockMouse.click(...framePoint(setup, "Second choice"));
    await setup.renderOnce();
    expect(list.selected()).toBe(1);
    expect(calls).toEqual([1]);
    expect(setup.captureCharFrame()).toContain("> Second choice");
  } finally { setup.renderer.destroy(); }
});
test("a nested button runs once and stops propagation to its panel", async () => {
  const setup = await createTestRenderer({ width: 50, height: 8 });
  let presses = 0;
  let parentPresses = 0;
  try {
    const container = panel(setup.renderer, themes.night, { title: "Actions", height: 8 });
    container.onMouseDown = () => { parentPresses++; };
    container.add(button(setup.renderer, themes.night, { key: "x", label: "Do action", onPress: () => { presses++; } }));
    setup.renderer.root.add(container);
    await setup.renderOnce();
    await setup.mockMouse.click(...framePoint(setup, "Do action"));
    expect(presses).toBe(1);
    expect(parentPresses).toBe(0);
    await setup.mockMouse.click(...framePoint(setup, "Do action"), 2);
    await setup.mockMouse.scroll(...framePoint(setup, "Do action"), "down");
    expect(presses).toBe(1);
  } finally { setup.renderer.destroy(); }
});

test("About clipboard errors become a status message", async () => {
  await withTui(async (setup) => {
    await setup.mockMouse.click(...framePoint(setup, "copy link", true));
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toMatch(/Copied|OSC 52/);
  }, "about");
});
test("tabs after the ninth remain reachable by click and wheel", async () => {
  const { screens } = await import("../src/tui/screens/index.ts");
  const { BoxRenderable } = await import("@opentui/core");
  const registry = screens as import("../src/tui/screen.ts").Screen[];
  const originalLength = registry.length;
  for (let index = originalLength; index < 10; index++) {
    registry.push({
      id: `extra-${index}`, title: `Extra${index + 1}`, description: "Additional tab fixture",
      mount: ({ renderer, notify }) => {
        notify(`Opened Extra${index + 1}`);
        return new BoxRenderable(renderer, {});
      },
    });
  }
  try {
    await withTui(async (setup) => {
      await setup.mockMouse.click(...framePoint(setup, "Extra10"));
      await setup.renderOnce();
      expect(setup.captureCharFrame()).toContain("Opened Extra10");
      await setup.mockMouse.scroll(...framePoint(setup, "Extra10"), "up");
      await setup.renderOnce();
      expect(setup.captureCharFrame()).toContain("Opened Extra9");
      setup.mockInput.pressKey("1");
      await setup.renderOnce();
      expect(setup.captureCharFrame()).toContain("ENVIRONMENT");
      setup.mockInput.pressKey("9");
      await setup.renderOnce();
      expect(setup.captureCharFrame()).not.toContain("ENVIRONMENT");
    });
  } finally { registry.splice(originalLength); }
});
