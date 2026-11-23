import { controlSpacing } from "./spacing.ts";
/**
 * Modal layer of the TUI: dialogs, command palette, help and toasts.
 *
 * One modal is open at a time. While it is open it receives every key
 * (the shell asks `handleKey` first) and a transparent backdrop covers the
 * screen: a click outside the modal cancels it. Every modal works by
 * keyboard and by mouse:
 *
 * - confirm: Enter runs the focused button, y/n answer, ←/→/Tab move between
 *   buttons, Esc cancels; buttons are clickable.
 * - prompt: a one-line editor (typing, paste, Backspace, Ctrl+U), Enter
 *   submits through `validate`, Esc cancels. `secret` renders bullets, the
 *   value never reaches the frame.
 * - choose and palette: ↑/↓, j/k (choose), PgUp/PgDn, Home/End, Enter, Esc;
 *   rows are clickable and the wheel scrolls. The palette filters by the
 *   typed text (subsequence match on the label).
 * - help: rows with a command are clickable; Esc or ? closes it.
 *
 * Toasts stack at the bottom right, close after a few seconds or on click,
 * and never take keyboard input. With `motion`, modals and toasts slide in
 * over three short frames.
 */
import {
  BoxRenderable,
  TextRenderable,
  TextAttributes,
  type CliRenderer,
  type KeyEvent,
  type PasteEvent,
} from "@opentui/core";
import type { Theme } from "./theme.ts";
import { withIcon, type IconName, type IconSet } from "./icons.ts";
import { clickable } from "./pointer.ts";
import type { ChooseOptions, ConfirmOptions, NotifyTone, PromptOptions } from "./screen.ts";

/** One runnable entry of the command palette. */
export interface PaletteEntry {
  /** Text searched and shown ("Settings: edit"). */
  label: string;
  /** Key hint shown at the right ("e"). */
  hint?: string;
  icon?: IconName;
  run: () => void;
}

/** One row of the help box; `run` makes it clickable. */
export interface HelpRow {
  key: string;
  description: string;
  icon?: IconName;
  run?: () => void;
}

export interface HelpSection {
  title: string;
  rows: readonly HelpRow[];
}

/** Milliseconds a toast stays on screen. */
export const TOAST_MS = 4000;
/** Toasts kept at once; older ones close first. */
const MAX_TOASTS = 3;

interface ActiveModal {
  backdrop: BoxRenderable;
  onKey: (key: KeyEvent) => void;
  onPaste?: (text: string) => void;
  cancel: () => void;
}

/** Case-insensitive subsequence match used by the palette. */
export function matches(query: string, label: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const text = label.toLowerCase();
  let at = 0;
  for (const char of q) {
    if (char === " ") continue;
    at = text.indexOf(char, at);
    if (at < 0) return false;
    at += 1;
  }
  return true;
}

export class Overlays {
  private destroyed = false;
  private modal: ActiveModal | undefined;
  private toasts: Array<{ box: BoxRenderable; timer: ReturnType<typeof setTimeout> }> = [];
  private toastLayer: BoxRenderable | undefined;
  private timers = new Set<ReturnType<typeof setTimeout>>();

  constructor(
    private readonly renderer: CliRenderer,
    private readonly theme: Theme,
    private readonly icons: IconSet,
    private readonly motion: boolean,
  ) {}

  /** True while a modal (dialog, palette or help) is open. */
  get isOpen(): boolean {
    return this.modal !== undefined;
  }

  /** Gives the key to the open modal. Returns true when a modal consumed it. */
  handleKey(key: KeyEvent): boolean {
    if (!this.modal) return false;
    key.preventDefault();
    this.modal.onKey(key);
    return true;
  }

  /** Gives pasted text to the open modal. Returns true when consumed. */
  handlePaste(event: PasteEvent): boolean {
    if (!this.modal) return false;
    event.preventDefault();
    this.modal.onPaste?.(new TextDecoder().decode(event.bytes).replace(/[\r\n]+/g, " "));
    return true;
  }

  /** Closes the open modal as a cancel. */
  close(): void {
    this.modal?.cancel();
  }

  /** Cancels the modal, clears toasts and timers. Called when the TUI closes. */
  destroy(): void {
    this.destroyed = true;
    this.close();
    for (const toast of this.toasts) clearTimeout(toast.timer);
    this.toasts = [];
    this.toastLayer?.destroyRecursively();
    this.toastLayer = undefined;
    for (const timer of this.timers) clearTimeout(timer);
    this.timers.clear();
  }

  // ---------------------------------------------------------------- modals

  /** Runs `apply(step)` for steps 2, 1, 0 a few ms apart; immediately at 0 without motion. */
  private animate(apply: (step: number) => void): void {
    if (!this.motion) {
      apply(0);
      return;
    }
    [2, 1, 0].forEach((step, i) => {
      const timer = setTimeout(() => {
        this.timers.delete(timer);
        if (!this.renderer.isDestroyed) apply(step);
      }, i * 30);
      this.timers.add(timer);
    });
  }

  /**
   * Opens a centered modal of `width` columns. `build` fills the body and
   * returns the key handler. `cancel` runs on Esc-equivalents and backdrop clicks.
   */
  private open(options: {
    title: string;
    icon?: IconName;
    width: number;
    height: number;
    build: (body: BoxRenderable, close: () => void) => Omit<ActiveModal, "backdrop" | "cancel">;
    cancel: () => void;
  }): void {
    if (this.destroyed || this.renderer.isDestroyed) {
      options.cancel();
      return;
    }
    this.close();
    const width = Math.min(options.width, Math.max(20, this.renderer.width - 4));
    const height = Math.min(options.height, Math.max(5, this.renderer.height - 2));
    const left = Math.max(0, Math.floor((this.renderer.width - width) / 2));
    const top = Math.max(0, Math.floor((this.renderer.height - height) / 3));
    const backdrop = new BoxRenderable(this.renderer, { position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 20 });
    const body = new BoxRenderable(this.renderer, {
      position: "absolute",
      left,
      top,
      width,
      maxHeight: height,
      flexDirection: "column",
      borderStyle: "rounded",
      borderColor: this.theme.borderActive,
      backgroundColor: this.theme.surfaceHigh,
      title: ` ${withIcon(this.icons, options.icon ?? "list", options.title)} `,
      titleColor: this.theme.accent,
      paddingLeft: controlSpacing.modalX,
      paddingRight: controlSpacing.modalX,
      paddingTop: controlSpacing.modalY,
      paddingBottom: controlSpacing.modalY,
      zIndex: 21,
    });
    // Clicks inside the modal must not reach the backdrop.
    body.onMouseDown = (event) => event.stopPropagation();
    let closed = false;
    const close = () => {
      if (closed) return;
      closed = true;
      if (this.modal?.backdrop === backdrop) this.modal = undefined;
      backdrop.destroyRecursively();
    };
    let handlers: Omit<ActiveModal, "backdrop" | "cancel">;
    try {
      handlers = options.build(body, close);
    } catch (error) {
      close();
      throw error;
    }
    const cancel = () => {
      if (closed) return;
      close();
      options.cancel();
    };
    backdrop.onMouseDown = (event) => {
      if (event.button !== 0) return;
      cancel();
    };
    backdrop.add(body);
    this.renderer.root.add(backdrop);
    this.modal = { backdrop, cancel, ...handlers };
    this.animate((step) => {
      if (!body.isDestroyed) body.top = top + step;
    });
  }

  /** A footer line of clickable `[key] label` buttons. */
  private buttons(
    parent: BoxRenderable,
    items: Array<{ key: string; label: string; danger?: boolean; run: () => void }>,
    focused: () => number,
  ): () => void {
    const row = new BoxRenderable(this.renderer, { flexDirection: "row", gap: controlSpacing.gap, height: 1, marginTop: controlSpacing.modalY });
    const texts = items.map((item, index) => {
      const box = new BoxRenderable(this.renderer, { flexDirection: "row", flexShrink: 0 });
      const keyText = new TextRenderable(this.renderer, { content: `[${item.key}]`, fg: item.danger ? this.theme.error : this.theme.accent, attributes: TextAttributes.BOLD, selectable: false });
      const label = new TextRenderable(this.renderer, { content: ` ${item.label} `, fg: this.theme.text, selectable: false });
      box.add(keyText);
      box.add(label);
      clickable(this.renderer, box, { onClick: item.run, onHover: (inside) => { label.fg = inside ? this.theme.accent : index === focused() ? this.theme.accent : this.theme.text; } });
      row.add(box);
      return label;
    });
    parent.add(row);
    const paint = () =>
      texts.forEach((label, index) => {
        const on = index === focused();
        label.fg = on ? this.theme.accent : this.theme.text;
        label.attributes = on ? TextAttributes.BOLD | TextAttributes.UNDERLINE : TextAttributes.NONE;
      });
    paint();
    return paint;
  }

  /** Opens a yes/no dialog. */
  confirm(options: ConfirmOptions): Promise<boolean> {
    return new Promise((resolve) => {
      let focus = options.danger ? 1 : 0;
      this.open({
        title: options.title,
        icon: options.danger ? "warn" : "help",
        width: Math.max(44, Math.min(72, Bun.stringWidth(options.message) + 8)),
        height: 12,
        cancel: () => resolve(false),
        build: (body, close) => {
          body.add(new TextRenderable(this.renderer, { content: options.message, fg: this.theme.text, wrapMode: "word" }));
          const answer = (value: boolean) => {
            close();
            resolve(value);
          };
          const paint = this.buttons(
            body,
            [
              { key: "y", label: options.confirmLabel ?? "Confirm", danger: options.danger, run: () => answer(true) },
              { key: "Esc", label: "Cancel", run: () => answer(false) },
            ],
            () => focus,
          );
          return {
            onKey: (key) => {
              if (key.name === "y") return answer(true);
              if (key.name === "n" || key.name === "escape") return answer(false);
              if (key.name === "return" || key.name === "enter") return answer(focus === 0);
              if (key.name === "left" || key.name === "right" || key.name === "tab" || key.name === "h" || key.name === "l") {
                focus = focus === 0 ? 1 : 0;
                paint();
              }
            },
          };
        },
      });
    });
  }

  /** Opens a one-line text dialog. */
  prompt(options: PromptOptions): Promise<string | undefined> {
    return new Promise((resolve) => {
      let value = options.initial ?? "";
      this.open({
        title: options.title,
        icon: options.secret ? "vault" : "settings",
        width: 60,
        height: 10,
        cancel: () => resolve(undefined),
        build: (body, close) => {
          body.add(new TextRenderable(this.renderer, { content: options.label, fg: this.theme.textDim }));
          const field = new BoxRenderable(this.renderer, { height: 1, flexDirection: "row", backgroundColor: this.theme.background });
          const text = new TextRenderable(this.renderer, { content: "", fg: this.theme.text, wrapMode: "none", selectable: false });
          field.add(text);
          body.add(field);
          const error = new TextRenderable(this.renderer, { content: "", fg: this.theme.error, wrapMode: "word" });
          body.add(error);
          const render = () => {
            const shown = options.secret ? "•".repeat(value.length) : value;
            text.content = shown ? `${shown}▏` : `▏${options.placeholder ?? ""}`;
            text.fg = shown ? this.theme.text : this.theme.textDim;
          };
          const submit = () => {
            let message: string | undefined;
            try {
              message = options.validate?.(value);
            } catch {
              message = "Unable to validate this value";
            }
            if (message) {
              error.content = withIcon(this.icons, "error", message);
              return;
            }
            close();
            resolve(value);
          };
          const cancel = () => {
            close();
            resolve(undefined);
          };
          this.buttons(body, [{ key: "Enter", label: "OK", run: submit }, { key: "Esc", label: "Cancel", run: cancel }], () => 0);
          render();
          return {
            onKey: (key) => {
              if (key.name === "escape") return cancel();
              if (key.name === "return" || key.name === "enter") return submit();
              if (key.name === "backspace") value = Array.from(value).slice(0, -1).join("");
              else if (key.ctrl && key.name === "u") value = "";
              else if (!key.ctrl && !key.meta && key.sequence && key.sequence.length === 1 && key.sequence >= " ") value += key.sequence;
              else return;
              error.content = "";
              render();
            },
            onPaste: (pasted) => {
              value += pasted;
              error.content = "";
              render();
            },
          };
        },
      });
    });
  }

  /**
   * Builds a scrollable, clickable list inside `body` and returns the
   * navigation handlers. Shared by `choose` and the palette.
   */
  private list(
    body: BoxRenderable,
    visible: number,
    activate: (index: number) => void,
  ): { setItems: (items: Array<{ text: string; hint?: string }>, keepIndex?: boolean) => void; key: (key: KeyEvent, letters: boolean) => boolean; selected: () => number } {
    const rowsBox = new BoxRenderable(this.renderer, { flexDirection: "column", height: visible, flexShrink: 0 });
    body.add(rowsBox);
    let items: Array<{ text: string; hint?: string }> = [];
    let index = 0;
    let offset = 0;
    let hovered = -1;
    const rows = Array.from({ length: visible }, (_, slot) => {
      const row = new BoxRenderable(this.renderer, { flexDirection: "row", height: 1 });
      const text = new TextRenderable(this.renderer, { content: "", fg: this.theme.text, wrapMode: "none", flexGrow: 1, flexShrink: 1, minWidth: 0, selectable: false });
      const hint = new TextRenderable(this.renderer, { content: "", fg: this.theme.textDim, wrapMode: "none", flexShrink: 0, selectable: false });
      row.add(text);
      row.add(hint);
      clickable(this.renderer, row, {
        onClick: () => {
          const target = offset + slot;
          if (target < items.length) activate(target);
        },
        onHover: (inside) => {
          hovered = inside ? offset + slot : -1;
          paint();
        },
      });
      row.onMouseScroll = (event) => {
        const direction = event.scroll?.direction;
        if (direction === "up") move(-1);
        else if (direction === "down") move(1);
      };
      rowsBox.add(row);
      return { row, text, hint };
    });
    const paint = () => {
      if (index < offset) offset = index;
      if (index >= offset + visible) offset = index - visible + 1;
      rows.forEach(({ row, text, hint }, slot) => {
        const item = items[offset + slot];
        const on = offset + slot === index;
        text.content = item ? `${on ? "›" : " "} ${item.text}` : "";
        hint.content = item?.hint ? ` ${item.hint}` : "";
        text.fg = on ? this.theme.accent : offset + slot === hovered ? this.theme.textStrong : this.theme.text;
        row.backgroundColor = on && item ? this.theme.background : this.theme.surfaceHigh;
      });
    };
    const move = (delta: number) => {
      if (!items.length) return;
      index = Math.max(0, Math.min(items.length - 1, index + delta));
      paint();
    };
    return {
      setItems: (next, keepIndex) => {
        items = next;
        if (!keepIndex) {
          index = 0;
          offset = 0;
        }
        index = Math.min(index, Math.max(0, items.length - 1));
        paint();
      },
      selected: () => (items.length ? index : -1),
      key: (key, letters) => {
        switch (key.name) {
          case "up": move(-1); return true;
          case "down": move(1); return true;
          case "pageup": move(-visible); return true;
          case "pagedown": move(visible); return true;
          case "home": move(-items.length); return true;
          case "end": move(items.length); return true;
          case "k": if (letters) { move(-1); return true; } return false;
          case "j": if (letters) { move(1); return true; } return false;
          case "return":
          case "enter":
            if (items.length) activate(index);
            return true;
          default: return false;
        }
      },
    };
  }

  /** Opens a single-choice dialog. */
  choose(options: ChooseOptions): Promise<number | undefined> {
    return new Promise((resolve) => {
      const visible = Math.max(1, Math.min(options.items.length, this.renderer.height - 10, 12));
      this.open({
        title: options.title,
        icon: "list",
        width: Math.max(36, Math.min(70, Math.max(...options.items.map((item) => item.length)) + 8)),
        height: visible + 6,
        cancel: () => resolve(undefined),
        build: (body, close) => {
          const pick = (index: number) => {
            close();
            resolve(index);
          };
          const list = this.list(body, visible, pick);
          list.setItems(options.items.map((text) => ({ text })));
          for (let i = 0; i < (options.initial ?? 0); i++) list.key({ name: "down" } as KeyEvent, false);
          body.add(new TextRenderable(this.renderer, { content: "↑↓ move · Enter choose · Esc cancel", fg: this.theme.textDim, wrapMode: "none", selectable: false }));
          return {
            onKey: (key) => {
              if (key.name === "escape") {
                close();
                resolve(undefined);
                return;
              }
              list.key(key, true);
            },
          };
        },
      });
    });
  }

  /** Opens the command palette over `entries`. */
  palette(entries: readonly PaletteEntry[]): void {
    let query = "";
    const visible = Math.max(3, Math.min(12, this.renderer.height - 10));
    this.open({
      title: "Commands",
      icon: "keyboard",
      width: 64,
      height: visible + 6,
      cancel: () => undefined,
      build: (body, close) => {
        const field = new TextRenderable(this.renderer, { content: "", fg: this.theme.text, wrapMode: "none", selectable: false });
        body.add(field);
        let filtered = [...entries];
        const run = (index: number) => {
          const entry = filtered[index];
          if (!entry) return;
          close();
          entry.run();
        };
        const list = this.list(body, visible, run);
        const empty = new TextRenderable(this.renderer, { content: "", fg: this.theme.textDim, selectable: false });
        body.add(empty);
        const update = () => {
          field.content = `${this.icons.select || ">"} ${query}▏`;
          filtered = entries.filter((entry) => matches(query, entry.label));
          list.setItems(filtered.map((entry) => ({ text: withIcon(this.icons, entry.icon ?? "select", entry.label), hint: entry.hint })));
          empty.content = filtered.length ? `${filtered.length} command(s) · Enter run · Esc close` : "No command matches";
        };
        update();
        return {
          onKey: (key) => {
            if (key.name === "escape") return close();
            if (list.key(key, false)) return;
            if (key.name === "backspace") query = Array.from(query).slice(0, -1).join("");
            else if (key.ctrl && key.name === "u") query = "";
            else if (!key.ctrl && !key.meta && key.sequence && key.sequence.length === 1 && key.sequence >= " ") query += key.sequence;
            else return;
            update();
          },
          onPaste: (pasted) => {
            query += pasted;
            update();
          },
        };
      },
    });
  }

  /** Opens the help box. */
  help(sections: readonly HelpSection[]): void {
    const lines = sections.reduce((sum, section) => sum + section.rows.length + 1, 0);
    this.open({
      title: "Keys",
      icon: "keyboard",
      width: 62,
      height: lines + 4,
      cancel: () => undefined,
      build: (body, close) => {
        for (const section of sections) {
          body.add(new TextRenderable(this.renderer, { content: section.title, fg: this.theme.textDim, attributes: TextAttributes.BOLD, selectable: false }));
          for (const row of section.rows) {
            const line = new BoxRenderable(this.renderer, { flexDirection: "row", height: 1 });
            line.add(new TextRenderable(this.renderer, { content: row.key.padEnd(18), fg: this.theme.accent, flexShrink: 0, selectable: false }));
            const text = new TextRenderable(this.renderer, { content: row.icon ? withIcon(this.icons, row.icon, row.description) : row.description, fg: this.theme.text, wrapMode: "none", selectable: false });
            line.add(text);
            const run = row.run;
            if (run) {
              clickable(this.renderer, line, {
                onClick: () => {
                  close();
                  run();
                },
                onHover: (inside) => { text.fg = inside ? this.theme.accent : this.theme.text; },
              });
            }
            body.add(line);
          }
        }
        return {
          onKey: (key) => {
            if (key.name === "escape" || key.name === "?" || key.name === "q") close();
          },
        };
      },
    });
  }

  // ---------------------------------------------------------------- toasts

  /** Shows a toast at the bottom right. */
  toast(message: string, tone: NotifyTone = "info"): void {
    if (this.destroyed || this.renderer.isDestroyed) return;
    if (!this.toastLayer) {
      this.toastLayer = new BoxRenderable(this.renderer, { position: "absolute", right: 1, bottom: 2, flexDirection: "column", alignItems: "flex-end", gap: 0, zIndex: 30 });
      this.renderer.root.add(this.toastLayer);
    }
    const color = tone === "ok" ? this.theme.ok : tone === "warn" ? this.theme.warn : tone === "error" ? this.theme.error : this.theme.accent;
    const icon: IconName = tone === "ok" ? "ok" : tone === "warn" ? "warn" : tone === "error" ? "error" : "about";
    const width = Math.min(Math.max(24, Bun.stringWidth(withIcon(this.icons, icon, message)) + 8), Math.max(24, this.renderer.width - 4));
    const box = new BoxRenderable(this.renderer, {
      width,
      borderStyle: "rounded",
      borderColor: color,
      backgroundColor: this.theme.surfaceHigh,
      paddingLeft: controlSpacing.modalX,
      paddingRight: controlSpacing.modalX,
      paddingTop: controlSpacing.modalY,
      paddingBottom: controlSpacing.modalY,
    });
    box.add(new TextRenderable(this.renderer, { content: withIcon(this.icons, icon, message), fg: this.theme.text, wrapMode: "word", selectable: false }));
    const dismiss = () => {
      const at = this.toasts.findIndex((toast) => toast.box === box);
      if (at < 0) return;
      clearTimeout(this.toasts[at]!.timer);
      this.toasts.splice(at, 1);
      box.destroyRecursively();
    };
    clickable(this.renderer, box, { onClick: dismiss });
    const timer = setTimeout(dismiss, TOAST_MS);
    this.toasts.push({ box, timer });
    this.toastLayer.add(box);
    while (this.toasts.length > MAX_TOASTS) {
      const oldest = this.toasts[0]!;
      clearTimeout(oldest.timer);
      this.toasts.shift();
      oldest.box.destroyRecursively();
    }
    const layer = this.toastLayer;
    this.animate((step) => {
      layer.right = 1 - step * 2;
    });
  }
}
