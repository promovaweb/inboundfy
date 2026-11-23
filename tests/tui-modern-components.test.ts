/** Unit coverage for sortable tables, visual states and component cleanup. */
import { expect, test } from "bun:test";
import { createTestRenderer } from "@opentui/core/testing";
import { table, stateView, spinner, progressBar, link } from "../src/tui/components.ts";
import { themes } from "../src/tui/theme.ts";
import { iconSets } from "../src/tui/icons.ts";

test("table sorts headers by mouse and selects and activates by keyboard and mouse", async () => {
  const setup = await createTestRenderer({ width: 50, height: 10 });
  try {
    let activated = -1;
    const rows = [{ name: "Zulu" }, { name: "Alpha" }, { name: "Beta" }];
    const grid = table(setup.renderer, themes.night, { columns: [{ key: "name", title: "Name" }], rows, onActivate: (i) => { activated = i; } });
    setup.renderer.root.add(grid.box); await setup.renderOnce();
    await setup.mockMouse.click(2, 0); await setup.renderOnce();
    expect(rows.map((row) => row.name)).toEqual(["Alpha", "Beta", "Zulu"]);
    expect(setup.captureCharFrame()).toContain("▲");
    await setup.mockMouse.click(2, 0); await setup.renderOnce();
    expect(rows[0]?.name).toBe("Zulu"); expect(setup.captureCharFrame()).toContain("▼");
    await setup.mockMouse.click(2, 2); await setup.renderOnce(); expect(grid.selected()).toBe(1); expect(activated).toBe(-1);
    await setup.mockMouse.click(2, 2); expect(activated).toBe(1);
    grid.box.focus(); setup.mockInput.pressKey("j"); await setup.renderOnce(); expect(grid.selected()).toBe(2);
    setup.mockInput.pressKey("RETURN"); expect(activated).toBe(2);
    setup.mockInput.pressKey("HOME"); expect(grid.selected()).toBe(0);
    setup.mockInput.pressKey("END"); expect(grid.selected()).toBe(2);
    grid.setRows([]); grid.move(1); expect(grid.selected()).toBe(-1);
    await setup.renderOnce(); expect(setup.captureCharFrame()).toContain("No items");
  } finally { setup.renderer.destroy(); }
});

test("state, progress, hyperlink URL and stopped spinner render", async () => {
  const setup = await createTestRenderer({ width: 60, height: 15 });
  try {
    const spin = spinner(setup.renderer, themes.night, { label: "Loading", ascii: true });
    const progress = progressBar(setup.renderer, themes.night, { label: "Download", value: -2, width: 5 });
    setup.renderer.root.add(spin.box); setup.renderer.root.add(progress.box);
    const url = "https://example.com/docs"; const anchor = link(setup.renderer, themes.night, { url }); setup.renderer.root.add(anchor);
    setup.renderer.root.add(stateView(setup.renderer, themes.night, iconSets.ascii, { kind: "empty", title: "Nothing here" }));
    spin.start(); await Bun.sleep(95); spin.stop(); const stopped = spin.box.content;
    await Bun.sleep(95); expect(spin.box.content).toEqual(stopped);
    progress.set(3, "Done"); spin.setLabel("Idle"); await setup.renderOnce();
    const frame = setup.captureCharFrame(); expect(frame).toContain("100%"); expect(frame).toContain(url); expect(frame).toContain("Nothing here");
    expect(JSON.stringify(anchor.content)).toContain(url);
    spin.start(); setup.renderer.destroy(); await Bun.sleep(95); expect(setup.renderer.isDestroyed).toBe(true);
  } finally { setup.renderer.destroy(); }
});
