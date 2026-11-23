/**
 * Contract of a TUI screen (tab).
 *
 * Each screen lives in `screens/<id>.ts`, exports a `Screen` object (or a
 * factory when it keeps state) and is registered in `screens/index.ts`. The
 * screen receives the renderer, the theme and the icons on mount and returns
 * the root renderable of its content.
 *
 * Every interaction has a keyboard shortcut and a mouse path. A screen
 * declares its commands in `actions`: the shell runs each one by key, shows
 * it in the key bar, in the help box and in the command palette (Ctrl+K),
 * and runs it on a click. Clickable elements inside the content (list rows,
 * buttons, table rows) call the same function an action calls.
 *
 * The shell owns layout and modals. Screens read `ctx.layout()` to compose
 * for the current width, ask questions with `ctx.confirm`, `ctx.prompt` and
 * `ctx.choose`, report with `ctx.notify` and `ctx.status`, and list files in
 * `watch` to be refreshed when another process changes them. The stub in
 * `template/screen/` shows the skeleton.
 */
import type { CliRenderer, Renderable } from "@opentui/core";
import type { Theme } from "./theme.ts";
import type { IconName, IconSet } from "./icons.ts";

/** Tone of a message shown by `notify`. */
export type NotifyTone = "info" | "ok" | "warn" | "error";

/**
 * Width class of the terminal: `wide` from 120 columns, `medium` from 80,
 * `compact` below 80. Below 60×16 the shell shows a "terminal too small"
 * message instead of the screen.
 */
export type Layout = "wide" | "medium" | "compact";

/** Options of a yes/no dialog. */
export interface ConfirmOptions {
  title: string;
  message: string;
  /** Label of the confirm button. Defaults to "Confirm". */
  confirmLabel?: string;
  /** Paints the confirm button with the error color (delete, clear, rotate). */
  danger?: boolean;
}

/** Options of a one-line text dialog. */
export interface PromptOptions {
  title: string;
  label: string;
  initial?: string;
  placeholder?: string;
  /** Hides the typed text (bullets in the frame, value never rendered). */
  secret?: boolean;
  /** Returns an error message to keep the dialog open, or undefined to accept. */
  validate?: (value: string) => string | undefined;
}

/** Options of a single-choice dialog. */
export interface ChooseOptions {
  title: string;
  items: readonly string[];
  /** Index highlighted when the dialog opens. */
  initial?: number;
}

export interface ScreenContext {
  renderer: CliRenderer;
  theme: Theme;
  icons: IconSet;
  /** Current width class; the shell remounts the screen when it changes. */
  layout: () => Layout;
  /** Current layout spacing in terminal cells. */
  readonly space: ReturnType<typeof import("./spacing.ts").spacing>;
  /** True when `tui.motion` allows short animations. */
  motion: boolean;
  /** Switches the active tab by id. */
  goTo: (id: string) => void;
  /** Rebuilds the active screen from scratch (onLeave, mount, onEnter). */
  refresh: () => void;
  /** Shows a toast at the bottom right for a few seconds; toasts stack. */
  notify: (message: string, tone?: NotifyTone) => void;
  /** Sets the context text at the left of the status bar ("3 items", "saved 12:04"). */
  status: (text: string) => void;
  /** Opens a yes/no dialog. Resolves true on confirm, false on cancel or Esc. */
  confirm: (options: ConfirmOptions) => Promise<boolean>;
  /** Opens a text dialog. Resolves the value, or undefined on Esc. */
  prompt: (options: PromptOptions) => Promise<string | undefined>;
  /** Opens a choice dialog. Resolves the chosen index, or undefined on Esc. */
  choose: (options: ChooseOptions) => Promise<number | undefined>;
  /** Closes the TUI. */
  quit: () => void;
}

/** A command reachable by keyboard, mouse and the command palette. */
export interface ScreenAction {
  /** Key names that run the action, as `KeyEvent.name` (`"r"`, `"return"`, `"delete"`). */
  keys: readonly string[];
  /** Key label in the bar and in the help. Defaults to the first key. */
  label?: string;
  /** Short verb shown next to the key and searched by the palette ("refresh"). */
  description: string;
  /** Icon shown in the help box and in the palette. */
  icon?: IconName;
  /** Keeps the action out of the key bar (still in help, palette and keys). */
  hidden?: boolean;
  /** Runs the action. */
  run: (ctx: ScreenContext) => void | Promise<void>;
}

/** Key hint without behavior, kept for screens written before `actions`. */
export interface KeyHint {
  key: string;
  action: string;
}

export interface Screen {
  /** Stable identifier, used by `tui.initialTab` and `--tab`. */
  id: string;
  /** Short tab title. */
  title: string;
  /** Icon shown in the tab. */
  icon?: IconName;
  /** Line describing the tab, shown in the help box and in the palette. */
  description: string;
  /** Commands of the screen: key bar, help, palette, keys and clicks. */
  actions?: readonly ScreenAction[];
  /** Hints for keys handled in `onKey`. Prefer `actions` in new screens. */
  keys?: readonly KeyHint[];
  /** Files whose change refreshes the screen (absolute paths). */
  watch?: () => readonly string[];
  /** Builds the content. Called on first display, on `refresh` and on layout change. */
  mount: (ctx: ScreenContext) => Renderable;
  /** Called when the tab is shown. */
  onEnter?: (ctx: ScreenContext) => void;
  /** Called when the tab is hidden or the TUI closes. */
  onLeave?: (ctx: ScreenContext) => void;
  /** Called when the terminal window loses focus; stop timers here. */
  onPause?: (ctx: ScreenContext) => void;
  /** Called when the terminal window gets focus back. */
  onResume?: (ctx: ScreenContext) => void;
  /** Keys handled by the screen itself, before `actions`. Returns `true` when consumed. */
  onKey?: (name: string, ctx: ScreenContext) => boolean;
}
