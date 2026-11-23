/** Tests list selection, activation, boundaries and scrolling by rendered frames. */
import { expect, test } from "bun:test";
import { createTestRenderer } from "@opentui/core/testing";
import { listPanel } from "../src/tui/components.ts";
import { themes } from "../src/tui/theme.ts";

test("selection follows movement, scrolls into view and activates on Enter", async () => {
  const setup = await createTestRenderer({ width: 40, height: 8 });
  let activated = -1;
  try {
    const list = listPanel(setup.renderer, themes.night, {
      title: "Choices", items: Array.from({ length: 20 }, (_, i) => `Item ${i}`), onSelect: (i) => { activated = i; },
    });
    list.box.height = 8;
    setup.renderer.root.add(list.box);
    await setup.renderOnce();
    expect(setup.captureCharFrame()).toContain("> Item 0");
    list.move(12); await setup.renderOnce();
    expect(list.selected()).toBe(12);
    expect(setup.captureCharFrame()).toContain("> Item 12");
    expect(activated).toBe(-1);
    list.box.focus();
    setup.mockInput.pressKey("j"); await setup.renderOnce();
    expect(list.selected()).toBe(13);
    setup.mockInput.pressKey("k"); await setup.renderOnce();
    expect(list.selected()).toBe(12);
    setup.mockInput.pressKey("RETURN"); await setup.renderOnce();
    expect(activated).toBe(12);
    list.move(100); expect(list.selected()).toBe(19);
    list.move(-100); expect(list.selected()).toBe(0);
  } finally { setup.renderer.destroy(); }
});
test("empty lists do not activate or move", async () => {
  const setup = await createTestRenderer({ width: 30, height: 6 });
  try {
    const list = listPanel(setup.renderer, themes.day, { title: "Empty", items: [], onSelect: () => { throw new Error("Unexpected activation"); } });
    setup.renderer.root.add(list.box);
    list.select(0); list.move(1);
    expect(list.selected()).toBe(-1);
    await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("EMPTY");
  } finally { setup.renderer.destroy(); }
});

test("example table actions update detail, status and reset using a context stub", async () => {
  const { createExampleScreen } = await import("../template/screen/example.ts");
  const { createScreenContext } = await import("./tui-context.ts");
  const setup = await createTestRenderer({ width: 100, height: 24 });
  try {
    const fixture = createScreenContext(setup.renderer);
    const screen = createExampleScreen();
    setup.renderer.root.add(screen.mount(fixture.ctx));
    const run = async (key: string) => { await screen.actions?.find((action) => action.keys.includes(key))?.run(fixture.ctx); await setup.renderOnce(); };
    await run("j"); expect(setup.captureCharFrame()).toContain("Second item");
    await run("return"); expect(fixture.statuses.at(-1)).toBe("Selected item 2");
    await run("r"); await run("return"); expect(fixture.statuses.at(-1)).toBe("Selected item 1");
    expect(screen.watch?.()).toEqual([]);
  } finally { setup.renderer.destroy(); }
});
