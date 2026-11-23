/** Verifies terminal detection, single-cell icon sets and settings fallbacks. */
import { expect, test } from "bun:test";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { HOME_VARIABLE, MASTER_KEY_VARIABLE } from "../src/config/paths.ts";
import { currentIcons, detectIconSet, iconMode, iconSets, withIcon } from "../src/tui/icons.ts";

for (const env of [
  { TERM_PROGRAM: "Ghostty" }, { TERM: "xterm-ghostty" },
  { TERM: "xterm-kitty" }, { KITTY_WINDOW_ID: "1" },
  { TERM_PROGRAM: "WezTerm" }, { TERM: "wezterm" }, { WEZTERM_PANE: "0" },
  { GHOSTTY_RESOURCES_DIR: "/ghostty" }, { OMARCHY_PATH: "/omarchy" },
]) {
  test(`detects Nerd Fonts from ${JSON.stringify(env)}`, () => {
    expect(detectIconSet({ env, exists: () => false })).toBe("nerd");
  });
}
test("detects Omarchy in the injected home", () => {
  const checked: string[] = [];
  expect(detectIconSet({ env: {}, home: "/fixture", exists: (path) => {
    checked.push(path);
    return path === "/fixture/.local/share/omarchy";
  } })).toBe("nerd");
  expect(checked).toEqual(["/fixture/.local/share/omarchy"]);
});
for (const term of ["linux", "dumb"]) {
  test(`${term} uses ASCII even with Nerd Font hints`, () => {
    expect(detectIconSet({ env: { TERM: term, TERM_PROGRAM: "Ghostty", OMARCHY_PATH: "/omarchy" }, exists: () => true })).toBe("ascii");
  });
}
test("unknown terminals use Unicode", () => {
  expect(detectIconSet({ env: { TERM: "xterm-256color" }, exists: () => false })).toBe("unicode");
  expect(detectIconSet({ env: {}, exists: () => false })).toBe("unicode");
});
test("sets have identical roles and glyphs fit in one cell", () => {
  for (const icons of Object.values(iconSets)) {
    expect(Object.keys(icons).sort()).toEqual(Object.keys(iconSets.unicode).sort());
    for (const glyph of Object.values(icons)) expect(Bun.stringWidth(glyph)).toBeLessThanOrEqual(1);
  }
  expect(withIcon(iconSets.ascii, "overview", "Overview")).toBe("Overview");
  expect(withIcon(iconSets.unicode, "overview", "Overview")).toBe("⌂ Overview");
});
test("iconMode defaults invalid settings to auto and honors explicit sets", () => {
  const dir = mkdtempSync(join(tmpdir(), "termfy-icons-"));
  const previous = new Map([HOME_VARIABLE, MASTER_KEY_VARIABLE].map((key) => [key, process.env[key]]));
  process.env[HOME_VARIABLE] = dir;
  delete process.env[MASTER_KEY_VARIABLE];
  try {
    expect(iconMode()).toBe("auto");
    for (const mode of ["invalid", 42, "nerd", "unicode", "ascii", "auto"] as const) {
      writeFileSync(join(dir, "settings.json"), JSON.stringify({ tui: { icons: mode } }));
      expect(iconMode()).toBe(typeof mode === "string" && mode !== "invalid" ? mode : "auto");
      if (mode === "ascii") expect(currentIcons()).toBe(iconSets.ascii);
    }
    writeFileSync(join(dir, "settings.json"), "{");
    expect(iconMode()).toBe("auto");
  } finally {
    for (const [key, value] of previous) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
    rmSync(dir, { recursive: true, force: true });
  }
});
