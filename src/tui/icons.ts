/**
 * TUI icons.
 *
 * Three sets with the same names, chosen by `tui.icons` in settings.json:
 *
 * - `nerd`: Nerd Font glyphs. Ghostty, Kitty and WezTerm ship them as a
 *   fallback font; Omarchy configures a Nerd Font in its terminals.
 * - `unicode`: single-cell symbols found in common monospace fonts.
 * - `ascii`: plain characters for the Linux console and minimal fonts.
 *
 * `auto` (default) picks `nerd` on terminals known to draw Nerd Font glyphs,
 * `ascii` on the Linux console and `unicode` elsewhere. Screens read icons
 * from `ctx.icons` and never hard-code a glyph, so changing the setting
 * changes every surface at once.
 */
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { readSettings, getPath } from "../config/settings.ts";

/** Names accepted by `tui.icons`. */
export type IconMode = "auto" | "nerd" | "unicode" | "ascii";

/** Modes accepted by `tui.icons`, the first one is the default. */
export const ICON_MODES: readonly IconMode[] = ["auto", "nerd", "unicode", "ascii"];

/** Icon roles. Names follow what the icon means, not how it looks. */
export type IconName =
  | "overview"
  | "about"
  | "settings"
  | "keyboard"
  | "help"
  | "quit"
  | "tabs"
  | "terminal"
  | "state"
  | "vault"
  | "agent"
  | "list"
  | "select"
  | "refresh"
  | "copy"
  | "link"
  | "user"
  | "docs"
  | "code"
  | "ok"
  | "warn"
  | "error"
  | "close";

export type IconSet = Readonly<Record<IconName, string>>;

/** Glyph sets. Every glyph takes one cell; `ascii` may leave a role empty. */
export const iconSets: Readonly<Record<Exclude<IconMode, "auto">, IconSet>> = {
  nerd: {
    overview: "", // nf-fa-home
    about: "", // nf-fa-info_circle
    settings: "", // nf-fa-cog
    keyboard: "", // nf-fa-keyboard_o
    help: "", // nf-fa-question_circle
    quit: "", // nf-fa-power_off
    tabs: "", // nf-fa-exchange
    terminal: "", // nf-fa-terminal
    state: "", // nf-fa-database
    vault: "", // nf-fa-lock
    agent: "", // nf-fa-plug
    list: "", // nf-fa-list
    select: "", // nf-fa-chevron_right
    refresh: "", // nf-fa-refresh
    copy: "", // nf-fa-copy
    link: "", // nf-fa-globe
    user: "", // nf-fa-user
    docs: "", // nf-fa-book
    code: "", // nf-fa-code
    ok: "", // nf-fa-check
    warn: "", // nf-fa-exclamation_triangle
    error: "", // nf-fa-times
    close: "", // nf-fa-times
  },
  unicode: {
    overview: "⌂",
    about: "ℹ",
    settings: "⚙",
    keyboard: "⌨",
    help: "?",
    quit: "✕",
    tabs: "⇄",
    terminal: "❯",
    state: "◉",
    vault: "◈",
    agent: "⇌",
    list: "≡",
    select: "▸",
    refresh: "↻",
    copy: "❐",
    link: "↗",
    user: "●",
    docs: "≡",
    code: "λ",
    ok: "✓",
    warn: "!",
    error: "✗",
    close: "✕",
  },
  ascii: {
    overview: "",
    about: "",
    settings: "",
    keyboard: "",
    help: "?",
    quit: "x",
    tabs: "",
    terminal: ">",
    state: "",
    vault: "",
    agent: "",
    list: "",
    select: ">",
    refresh: "",
    copy: "",
    link: "",
    user: "",
    docs: "",
    code: "",
    ok: "+",
    warn: "!",
    error: "x",
    close: "x",
  },
};

/** Environment read by `detectIconSet`; injectable for tests. */
export interface IconEnvironment {
  env: Record<string, string | undefined>;
  /** Home directory, used to find an Omarchy install. */
  home?: string;
  /** File check, used to find an Omarchy install. */
  exists?: (path: string) => boolean;
}

/**
 * Chooses the set for `auto`. Terminals that bundle Nerd Font symbols and
 * Omarchy installs get `nerd`; the Linux console and `dumb` get `ascii`.
 */
export function detectIconSet({ env, home = homedir(), exists = existsSync }: IconEnvironment): Exclude<IconMode, "auto"> {
  const term = env.TERM ?? "";
  const program = (env.TERM_PROGRAM ?? "").toLowerCase();
  if (term === "linux" || term === "dumb") return "ascii";
  if (
    program === "ghostty" ||
    program === "wezterm" ||
    term === "xterm-ghostty" ||
    term === "xterm-kitty" ||
    term === "wezterm" ||
    env.GHOSTTY_RESOURCES_DIR ||
    env.KITTY_WINDOW_ID ||
    env.WEZTERM_PANE ||
    env.OMARCHY_PATH ||
    exists(join(home, ".local", "share", "omarchy"))
  ) {
    return "nerd";
  }
  return "unicode";
}

/** Reads `tui.icons`. Any failure or unknown value gives `auto`. */
export function iconMode(): IconMode {
  try {
    const value = getPath(readSettings(), "tui.icons");
    if (typeof value === "string" && (ICON_MODES as readonly string[]).includes(value)) return value as IconMode;
  } catch {
    // Without readable settings, detect from the environment.
  }
  return "auto";
}

/** Returns the icon set for the configured mode. */
export function currentIcons(environment: IconEnvironment = { env: process.env }): IconSet {
  const mode = iconMode();
  return iconSets[mode === "auto" ? detectIconSet(environment) : mode];
}

/** Prefixes `text` with the icon and a space; an empty icon adds nothing. */
export function withIcon(icons: IconSet, name: IconName, text: string): string {
  const icon = icons[name];
  return icon ? `${icon} ${text}` : text;
}
