/** Visual regressions for bounded panels, complete key hints and responsive screens. */
import { expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTestRenderer } from "@opentui/core/testing";
import { BoxRenderable, ScrollBoxRenderable, TextRenderable, MarkdownRenderable, type Renderable } from "@opentui/core";
import { HOME_VARIABLE, MASTER_KEY_VARIABLE } from "../src/config/paths.ts";
import { setCredential } from "../src/config/credentials.ts";
import { mountTui } from "../src/tui/index.ts";
import { iconSets } from "../src/tui/icons.ts";
import { terminalTheme } from "../src/tui/theme.ts";
import { normalizeMarkdown } from "../src/tui/screens/docs.ts";

const sizes = [[60, 16], [64, 20], [80, 24], [100, 30], [130, 32], [200, 60]] as const;
const tabs = ["overview", "settings", "credentials", "docs", "about"];

/** Finds actual scroll viewports so assertions include their native visibility. */
function scrollPanels(node: Renderable): ScrollBoxRenderable[] {
  return [
    ...(node instanceof ScrollBoxRenderable ? [node] : []),
    ...node.getChildren().flatMap(scrollPanels),
  ];
}
for (const [width, height] of sizes) {
  for (const tab of tabs) {
    test(`${tab} fits ${width}×${height} with a populated vault`, async () => {
      const directory = mkdtempSync(join(tmpdir(), "termfy-layout-"));
      const previousHome = process.env[HOME_VARIABLE];
      const previousKey = process.env[MASTER_KEY_VARIABLE];
      process.env[HOME_VARIABLE] = directory;
      delete process.env[MASTER_KEY_VARIABLE];
      const setup = await createTestRenderer({ width, height });
      let closed: Promise<void> | undefined;
      try {
        setCredential("github.token", "visual-test-secret");
        closed = mountTui(setup.renderer, { initialTab: tab, icons: iconSets.unicode, motion: false }, terminalTheme());
        if (tab === "docs") {
          for (let attempt = 0; attempt < 50; attempt++) {
            await setup.renderOnce();
            if (setup.captureCharFrame().includes("Convenções")) break;
            await Bun.sleep(10);
          }
          expect(setup.captureCharFrame()).toContain("Convenções");
        }
        await setup.renderOnce();
        await setup.renderOnce();
        const frame = setup.captureCharFrame();
        const lines = frame.trimEnd().split("\n");
        const bar = lines.at(-1)!;
        expect(bar).toContain("help");
        expect(bar).toContain("quit");
        expect(bar).toContain("commands");
        const barNode = setup.renderer.root.getChildren()[0]!.getChildren().at(-1)! as BoxRenderable;
        expect(barNode.backgroundColor.a).toBe(0);
        const assertPlainKeys = (node: Renderable): void => {
          if (node instanceof TextRenderable) expect(node.bg.a).toBe(0);
          node.getChildren().forEach(assertPlainKeys);
        };
        assertPlainKeys(barNode);
        expect(bar).not.toMatch(/\bq\s+q\b/);
        for (const line of lines) {
          expect(Bun.stringWidth(line)).toBeLessThanOrEqual(width);
          for (const border of line.matchAll(/╰[^╯]*╯/g)) expect(border[0]).toMatch(/^[╰╯─]+$/);
        }
        expect(frame).not.toContain("visual-test-secret");
        // The active tab alone owns a full-width indicator, without a background block.
        expect(lines[width >= 80 ? 4 : 2]!.trim()).toMatch(/^━+$/);
        if (width >= 80) {
          expect(lines[5]!.trim()).toBe("");
          expect(lines.at(-2)!.trim()).toBe("");
          const visit = (node: Renderable): void => {
            if (node instanceof BoxRenderable && node.constructor.name === "Card") {
              const [caption, body] = node.getChildren();
              expect(caption!.y).toBe(body!.y - 1);
              const title = lines[caption!.y]!.slice(caption!.x, caption!.x + caption!.width).trim();
              expect(title).toBe(title.toUpperCase());
              if (body!.height > 4) {
                for (let y = body!.y + 1; y < body!.y + body!.height - 1; y++) {
                  expect(lines[y]!.slice(body!.x + 1, body!.x + 3)).toBe("  ");
                }
              }
            }
            node.getChildren().forEach(visit);
          };
          visit(setup.renderer.root);
        }
        if (tab === "overview" || tab === "credentials") {
          expect(frame).toContain("1 credential");
          expect(frame).not.toContain("1 credentials");
        }
        if (tab === "settings") {
          expect(frame).toContain("output.colors");
          expect(frame).not.toContain("Accepted: boolean");
        }
        if (tab === "credentials") {
          expect(frame).toContain("github.token");
          if (width >= 80) expect(frame).toContain("credentials.json");
        }
        if (tab === "docs") expect(frame).toContain("cli");
        if (tab === "about") {
          const panels = scrollPanels(setup.renderer.root);
          if (width < 80) {
            expect(panels).toHaveLength(1);
            expect(panels.filter(panel => panel.verticalScrollBar.visible).length).toBeLessThanOrEqual(1);
            let sections = frame;
            const panel = panels[0]!;
            for (let attempt = 0; attempt < 20; attempt++) {
              const previous = panel.scrollTop;
              panel.scrollBy(3);
              await setup.renderOnce();
              sections += setup.captureCharFrame();
              if (panel.scrollTop === previous) break;
            }
            for (const title of ["Binary", "Project", "Credits"]) expect(sections).toContain(title);
            expect(sections).not.toContain("Standards");
          } else {
            expect(frame).toContain("CREDITS");
            expect(frame).toContain("BINARY");
            expect(frame).toContain("PROJECT");
            expect(frame).not.toContain("BINARY / PROJECT");
            expect(frame).not.toMatch(/[█▀▄]/);
            if (width < 120) {
              expect(panels).toHaveLength(3);
              expect(frame).not.toContain("STANDARDS");
              if (height >= 30) expect(panels.filter(panel => panel.verticalScrollBar.visible)).toHaveLength(0);
            } else expect(frame).toContain("STANDARDS");
          }
        }
        if (tab === "overview" && width === 80 && height === 24) {
          expect(bar).toContain("1 credential · defaults");
          expect(bar).not.toContain("…");
          // Assert buttons in the content area, independently of status hints.
          const content = lines.slice(3, -1).join("\n");
          expect(content).toMatch(/\[c\] copy MCP config/);
          expect(content).toMatch(/\[r\] reload/);
          const reading = scrollPanels(setup.renderer.root).find(panel => panel.verticalScrollBar.visible)!;
          expect(reading).toBeDefined();
          expect(content).toContain("termfy --help");
          reading.scrollTo(Infinity);
          await setup.renderOnce();
          expect(setup.captureCharFrame()).toContain("termfy --skill");
        }
        if (tab === "overview" && width >= 80 && height >= 30) {
          for (const text of ["IN THE TERMINAL", "FOR AGENTS", "termfy credentials set <name>", "termfy --skill", '"args": ["mcp"]']) expect(frame).toContain(text);
        }
        if (tab === "docs") {
          const checkDocument = (node: Renderable): void => {
            if (node instanceof MarkdownRenderable) expect(node.content).not.toMatch(/^# CLI\b/);
            node.getChildren().forEach(checkDocument);
          };
          checkDocument(setup.renderer.root);
          if (width === 80) expect(frame).toMatch(/│\s{4,}\[options\]\./);
        }
        if (tab === "overview" && width === 200) {
          const borders = lines.filter(line => /^\s*╰/.test(line));
          expect(borders).toHaveLength(2);
          expect(lines.findIndex(line => line === borders[1])).toBeLessThan(30);
          const first = borders[0]!.trim();
          const split = first.indexOf("╯") + 1;
          expect(split / Bun.stringWidth(first)).toBeGreaterThan(0.4);
          expect(split / Bun.stringWidth(first)).toBeLessThan(0.65);
        }
      } finally {
        setup.renderer.destroy();
        await closed;
        if (previousHome === undefined) delete process.env[HOME_VARIABLE];
        else process.env[HOME_VARIABLE] = previousHome;
        if (previousKey === undefined) delete process.env[MASTER_KEY_VARIABLE];
        else process.env[MASTER_KEY_VARIABLE] = previousKey;
        rmSync(directory, { recursive: true, force: true });
      }
    });
  }
}

test("Markdown joins prose and list continuations without changing literal blocks", () => {
  const source = "A paragraph\ncontinued.\n\n- First item\n  continued.\n- Second item\n\n# Heading\n\n| A | B |\n| - | - |\n\n```ts\nconst value = 1;\n  literal();\n```\n\n    indented\n    code";
  expect(normalizeMarkdown(source)).toBe("A paragraph continued.\n\n- First item continued.\n- Second item\n\n# Heading\n\n| A | B |\n| - | - |\n\n```ts\nconst value = 1;\n  literal();\n```\n\n    indented\n    code");
});
