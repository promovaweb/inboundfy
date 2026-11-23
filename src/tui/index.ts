/**
 * TUI shell.
 *
 * Screen layout:
 *
 *   ▌ Title  v1.0                                      platform
 *    1 ⌂ Overview   2 ⚙ Settings   3 ◈ Credentials   …   (click or number)
 *   ━━━━━━━━━━━━━
 *   active screen (or "terminal too small" below 60×16)
 *   status text   screen actions, help, quit (click runs)   ^K commands
 *
 * Every command has a key, a mouse path and a palette entry. Keys: ←/→,
 * [ ] and 1..9 switch tabs; Tab / Shift+Tab move the focus between the
 * focusable panels of the screen; Ctrl+K or : opens the command palette;
 * ? opens the help; q, Esc or Ctrl+C quit (Esc closes a modal first). Mouse:
 * click a tab, a bar item, a palette or help row, a button or a list row;
 * the wheel over the tabs switches tabs. Modals (palette, help, dialogs)
 * and toasts live in `overlays.ts`.
 *
 * The shell recomposes the active screen when the width class changes
 * (`ctx.layout()`), refreshes screens whose `watch()` files change on disk,
 * pauses screens while the terminal window is in the background, sets the
 * window title and hands the terminal back on every exit path.
 */
import { watch as watchFile, existsSync, type FSWatcher } from "node:fs";
import { basename, dirname } from "node:path";
import {
  BoxRenderable,
  TextRenderable,
  TextAttributes,
  createCliRenderer,
  type CliRenderer,
  type KeyEvent,
  type PasteEvent,
  type Renderable,
} from "@opentui/core";
import { manifest } from "../app/manifest.ts";
import { readSettings, getPath } from "../config/settings.ts";
import { glyphs, currentTheme, resolveTheme, type Theme } from "./theme.ts";
import { currentIcons, withIcon, type IconSet } from "./icons.ts";
import { clickable } from "./pointer.ts";
import { Overlays, type HelpSection, type PaletteEntry } from "./overlays.ts";
import { screens } from "./screens/index.ts";
import { spacing, controlSpacing } from "./spacing.ts";
import { fitText } from "./components.ts";
import type { Layout, ScreenAction, ScreenContext, Screen } from "./screen.ts";

export interface TuiOptions {
  initialTab?: string;
  /** Icon set; defaults to `tui.icons` and terminal detection. */
  icons?: IconSet;
  /** Short animations; defaults to `tui.motion`. */
  motion?: boolean;
}

/** Smallest terminal the shell lays screens out in. */
export const MIN_WIDTH = 60;
export const MIN_HEIGHT = 16;

/** Width class for a terminal width. */
export function layoutFor(width: number): Layout {
  if (width >= 120) return "wide";
  if (width >= 80) return "medium";
  return "compact";
}

function setting(key: string): unknown {
  try {
    return getPath(readSettings(), key);
  } catch {
    return undefined;
  }
}

function defaultInitialTab(): string {
  const value = setting("tui.initialTab");
  return typeof value === "string" ? value : (screens[0]?.id ?? "overview");
}

/** Reads `tui.mouse`. Any failure keeps the mouse on. */
export function mouseEnabled(): boolean {
  return setting("tui.mouse") !== false;
}

/** Reads `tui.motion`. Any failure keeps animations on. */
export function motionEnabled(): boolean {
  return setting("tui.motion") !== false;
}

/** Label of an action key: explicit label or the first key name. */
function keyLabel(action: ScreenAction): string {
  return action.label ?? action.keys[0] ?? "";
}

/** True when the focused renderable edits text and must receive letters. */
function editsText(node: Renderable | null): boolean {
  const name = node?.constructor?.name ?? "";
  return name === "InputRenderable" || name === "TextareaRenderable";
}

/** Focusable descendants of `root`, in tree order. */
function focusables(root: Renderable): Renderable[] {
  const found: Renderable[] = [];
  const visit = (node: Renderable) => {
    if (!node.visible) return;
    if (node.focusable) found.push(node);
    for (const child of node.getChildren()) visit(child);
  };
  visit(root);
  return found;
}

/**
 * Opens the TUI on a real terminal and returns only when the user quits.
 * With the `terminal` theme, the palette query runs before mounting so the
 * first frame already uses the slots chosen for the terminal colors.
 */
export async function startTui(options: TuiOptions = {}): Promise<void> {
  const renderer = await createCliRenderer({
    exitOnCtrlC: true,
    backgroundColor: currentTheme().background,
    targetFps: 30,
    useMouse: mouseEnabled(),
    useKittyKeyboard: {},
  });
  const theme = await resolveTheme(renderer);
  await mountTui(renderer, options, theme);
}

/**
 * Mounts the interface on an existing renderer and returns when it is
 * destroyed. Separated from `startTui` so tests can use the renderer from
 * `@opentui/core/testing` and capture frames without a real terminal.
 */
export async function mountTui(renderer: CliRenderer, options: TuiOptions = {}, theme: Theme = currentTheme()): Promise<void> {
  const initialSpace = spacing(layoutFor(renderer.width));
  const icons = options.icons ?? currentIcons();
  const motion = options.motion ?? motionEnabled();
  const overlays = new Overlays(renderer, theme, icons, motion);
  const closed = new Promise<void>((resolve) => renderer.once("destroy", () => resolve()));
  const quit = () => {
    if (!renderer.isDestroyed) renderer.destroy();
  };

  const app = new BoxRenderable(renderer, {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: theme.background,
  });

  // Header: brand, version, platform (the platform hides in compact).
  const header = new BoxRenderable(renderer, { height: 1, flexDirection: "row", paddingLeft: initialSpace.pageX, paddingRight: initialSpace.pageX, gap: controlSpacing.gap });
  const brand = new BoxRenderable(renderer, { flexDirection: "row", flexShrink: 0 });
  brand.add(new TextRenderable(renderer, { content: `${glyphs.block} `, fg: theme.accent, selectable: false }));
  brand.add(new TextRenderable(renderer, { content: manifest.title, fg: theme.textStrong, attributes: TextAttributes.BOLD }));
  brand.add(new TextRenderable(renderer, { content: `  v${manifest.version}`, fg: theme.textDim }));
  header.add(brand);
  header.add(new BoxRenderable(renderer, { flexGrow: 1 }));
  const platform = new TextRenderable(renderer, {
    content: `${process.platform}-${process.arch} · Bun ${Bun.version}`,
    fg: theme.textDim,
    flexShrink: 0,
    wrapMode: "none",
  });
  header.add(platform);
  app.add(header);

  // Tab bar: one clickable item per screen, numbered for the 1..9 keys.
  const tabBar = new BoxRenderable(renderer, {
    height: 1,
    flexDirection: "row",
    paddingLeft: initialSpace.pageX,
    gap: initialSpace.tabGap,
    onMouseScroll: (event) => {
      const direction = event.scroll?.direction;
      if (direction === "up" || direction === "left") step(-1);
      else if (direction === "down" || direction === "right") step(1);
    },
  });
  let hovered = -1;
  const tabItems = screens.map((screen, index) => {
    const label = new TextRenderable(renderer, { content: "", fg: theme.textDim, wrapMode: "none", selectable: false });
    const item = new BoxRenderable(renderer, { flexDirection: "column", flexShrink: 0 });
    const indicator = new TextRenderable(renderer, { content: "", height: 1, fg: theme.accent, selectable: false, wrapMode: "none" });
    item.add(label);
    item.add(indicator);
    clickable(renderer, item, {
      onClick: () => show(index),
      onHover: (inside) => {
        hovered = inside ? index : hovered === index ? -1 : hovered;
        paintTabs();
      },
    });
    tabBar.add(item);
    return { item, label, indicator, screen, index };
  });
  const headerGap = new BoxRenderable(renderer, { height: initialSpace.pageY, flexShrink: 0 });
  app.add(headerGap);
  app.add(tabBar);

  const tabGap = new BoxRenderable(renderer, { height: initialSpace.pageY, flexShrink: 0 });
  app.add(tabGap);

  const content = new BoxRenderable(renderer, { flexGrow: 1, flexDirection: "column", paddingLeft: initialSpace.pageX, paddingRight: initialSpace.pageX, minHeight: 0 });
  app.add(content);
  const tooSmall = new BoxRenderable(renderer, { flexGrow: 1, alignItems: "center", justifyContent: "center", flexDirection: "column" });
  const tooSmallText = new TextRenderable(renderer, { content: "", fg: theme.warn, selectable: false });
  tooSmall.add(tooSmallText);
  tooSmall.add(new TextRenderable(renderer, { content: "Enlarge the window or press q to quit.", fg: theme.textDim, selectable: false }));

  const contentGap = new BoxRenderable(renderer, { height: initialSpace.pageY, flexShrink: 0 });
  app.add(contentGap);

  // Status bar: screen status, clickable actions, palette hint.
  const bar = new BoxRenderable(renderer, { height: 1, flexDirection: "row", paddingLeft: initialSpace.pageX, paddingRight: initialSpace.pageX, gap: controlSpacing.gap });
  const statusText = new TextRenderable(renderer, { content: "", fg: theme.textDim, wrapMode: "none", flexShrink: 1, minWidth: 0, selectable: false });
  let barItems = new BoxRenderable(renderer, { flexDirection: "row", gap: controlSpacing.gap, flexGrow: 1, flexShrink: 1, minWidth: 0 });
  const paletteHint = new BoxRenderable(renderer, { flexDirection: "row", flexShrink: 0, width: 12 });
  paletteHint.add(new TextRenderable(renderer, { content: "^K", fg: theme.accent, attributes: TextAttributes.BOLD, selectable: false }));
  const paletteLabel = new TextRenderable(renderer, { content: " commands", fg: theme.textDim, selectable: false });
  paletteHint.add(paletteLabel);
  clickable(renderer, paletteHint, {
    onClick: () => openPalette(),
    onHover: (inside) => { paletteLabel.fg = inside ? theme.text : theme.textDim; },
  });
  statusText.visible = false;
  bar.add(statusText);
  /** Status text as the screen set it; the bar shows it whole or cut with an ellipsis. */
  let fullStatus = "";
  /** Gives status all cells left after the global hints, before screen actions. */
  const fitStatus = () => {
    const globals = globalActions.reduce((sum, action) => sum + actionWidth(action), 0)
      + Math.max(0, globalActions.length - 1) * 2;
    // Outer padding, palette, and the gaps around the action area and status.
    const max = Math.max(0, renderer.width - spacing(currentLayout).pageX * 2 - paletteHint.width - 4 - globals);
    const shown = fitText(fullStatus, max);
    statusText.width = Bun.stringWidth(shown);
    statusText.flexShrink = 0;
    statusText.content = shown;
    statusText.visible = shown.length > 0;
  };
  bar.add(barItems);
  bar.add(paletteHint);
  app.add(bar);
  renderer.root.add(app);

  const mounted = new Map<string, Renderable>();
  const stale = new Set<string>();
  const screenStatuses = new Map<string, string>();
  let activeIndex = -1;
  let currentLayout: Layout = layoutFor(renderer.width);
  let small = false;
  const active = (): Screen | undefined => screens[activeIndex];

  const context: ScreenContext = {
    renderer,
    theme,
    icons,
    motion,
    layout: () => currentLayout,
    get space() { return spacing(currentLayout); },
    goTo: (id) => {
      const index = screens.findIndex((s) => s.id === id);
      if (index >= 0) show(index);
    },
    refresh: () => remount(),
    notify: (message, tone = "info") => overlays.toast(message, tone),
    status: (text) => {
      if (active()) screenStatuses.set(active()!.id, text);
      fullStatus = text;
      fitStatus();
      if (activeIndex >= 0) refreshBar();
    },
    confirm: (opts) => overlays.confirm(opts),
    prompt: (opts) => overlays.prompt(opts),
    choose: (opts) => overlays.choose(opts),
    quit,
  };

  /** Runs an action, reporting a thrown or rejected error as a toast. */
  const runAction = (action: ScreenAction) => {
    try {
      const result = action.run(context);
      if (result instanceof Promise) result.catch((error) => context.notify(error instanceof Error ? error.message : String(error), "error"));
    } catch (error) {
      context.notify(error instanceof Error ? error.message : String(error), "error");
    }
  };

  /** Global commands, shown after the screen actions. */
  const globalActions: ScreenAction[] = [
    { keys: ["?"], description: "help", icon: "help", run: () => openHelp() },
    { keys: ["q", "escape"], description: "quit", icon: "quit", run: () => quit() },
  ];

  /** Actions of the active screen, legacy key hints included as display-only entries. */
  const screenActions = (): ScreenAction[] => {
    const screen = active();
    if (!screen) return [];
    const hints: ScreenAction[] = (screen.keys ?? []).map((hint) => ({ keys: [], label: hint.key, description: hint.action, run: () => undefined }));
    return [...(screen.actions ?? []), ...hints];
  };

  const setTitle = () => {
    try {
      renderer.setTerminalTitle(`${manifest.title}${active() ? ` · ${active()!.title}` : ""}`);
    } catch {
      // Window titles are optional.
    }
  };

  const paintTabs = () => {
    for (const { item, label, indicator, screen, index } of tabItems) {
      const selected = index === activeIndex;
      const number = index < 9 ? `${index + 1} ` : "";
      // Compact terminals show the title only on the active tab.
      const title = currentLayout === "compact" && !selected ? (icons[screen.icon ?? "list"] || screen.title.slice(0, 3)) : withIcon(icons, screen.icon ?? "list", screen.title);
      const text = `${number}${title}`;
      label.content = text;
      indicator.content = selected ? "━".repeat(Bun.stringWidth(text)) : "";
      label.fg = selected ? theme.accent : index === hovered ? theme.text : theme.textDim;
      label.attributes = selected ? TextAttributes.BOLD : TextAttributes.NONE;
      item.backgroundColor = theme.background;
    }
  };

  const barItem = (action: ScreenAction) => {
    const item = new BoxRenderable(renderer, { flexDirection: "row", flexShrink: 0, width: Bun.stringWidth(keyLabel(action)) + Bun.stringWidth(action.description) + 1 });
    const text = new TextRenderable(renderer, { content: ` ${action.description}`, fg: theme.textDim, selectable: false });
    item.add(new TextRenderable(renderer, { content: keyLabel(action), fg: theme.accent, attributes: TextAttributes.BOLD, selectable: false }));
    item.add(text);
    clickable(renderer, item, {
      onClick: () => runAction(action),
      onHover: (inside) => { text.fg = inside ? theme.text : theme.textDim; },
    });
    return item;
  };

  /** Measures a hint exactly as barItem renders its key and description. */
  const actionWidth = (action: ScreenAction) => Bun.stringWidth(keyLabel(action)) + Bun.stringWidth(action.description) + 1;

  const refreshBar = () => {
    fitStatus();
    barItems.destroyRecursively();
    bar.remove(paletteHint);
    barItems = new BoxRenderable(renderer, { flexDirection: "row", gap: controlSpacing.gap, flexGrow: 1, flexShrink: 1, minWidth: 0 });
    // Compact terminals keep only the global commands; the palette lists the rest.
    const own = currentLayout === "compact" ? [] : screenActions().filter((action) => !action.hidden);
    const statusWidth = statusText.visible ? statusText.width + 2 : 0;
    const paletteWidth = paletteHint.width;
    const globalWidth = globalActions.reduce((sum, action) => sum + actionWidth(action), 0) + Math.max(0, globalActions.length - 1) * 2;
    let budget = renderer.width - spacing(currentLayout).pageX * 2 - paletteWidth - 4 - statusWidth - globalWidth;
    for (const action of own) {
      const width = actionWidth(action) + 2;
      if (width > budget) continue;
      barItems.add(barItem(action));
      budget -= width;
    }
    for (const action of globalActions) barItems.add(barItem(action));
    bar.add(barItems);
    bar.add(paletteHint);
    platform.visible = currentLayout !== "compact";
  };

  /** Detaches the content of the active screen, blurring a focused child. */
  const detach = (node: Renderable) => {
    const focused = renderer.currentFocusedRenderable;
    for (let parent: Renderable | null = focused; parent; parent = parent.parent) {
      if (parent === node) {
        focused?.blur();
        break;
      }
    }
    content.remove(node);
  };

  /** Rebuilds the active screen (onLeave, mount, onEnter). */
  const remount = () => {
    const screen = active();
    if (!screen) return;
    screen.onLeave?.(context);
    const previous = mounted.get(screen.id);
    if (previous) {
      detach(previous);
      previous.destroyRecursively();
    }
    stale.delete(screen.id);
    const node = screen.mount(context);
    mounted.set(screen.id, node);
    if (!small) content.add(node);
    screen.onEnter?.(context);
    refreshBar();
  };

  const show = (index: number) => {
    const screen = screens[index];
    if (!screen || index === activeIndex) return;
    const previous = active();
    if (previous) {
      previous.onLeave?.(context);
      const node = mounted.get(previous.id);
      if (node && !small) detach(node);
    }
    activeIndex = index;
    context.status(screenStatuses.get(screen.id) ?? "");
    let node = mounted.get(screen.id);
    if (node && stale.has(screen.id)) {
      node.destroyRecursively();
      node = undefined;
      stale.delete(screen.id);
    }
    if (!node) {
      node = screen.mount(context);
      mounted.set(screen.id, node);
    }
    if (!small) content.add(node);
    screen.onEnter?.(context);
    paintTabs();
    refreshBar();
    setTitle();
    restartWatchers();
  };

  const step = (delta: number) => {
    if (!screens.length) return;
    show((activeIndex + delta + screens.length) % screens.length);
  };

  /** Moves the focus to the next (or previous) focusable panel of the screen. */
  const cycleFocus = (delta: number) => {
    const node = active() && mounted.get(active()!.id);
    if (!node || small) return;
    const list = focusables(node);
    if (!list.length) return;
    const current = list.findIndex((item) => item === renderer.currentFocusedRenderable);
    const nextIndex = current < 0 ? (delta > 0 ? 0 : list.length - 1) : (current + delta + list.length) % list.length;
    list[nextIndex]!.focus();
  };

  const openPalette = () => {
    const entries: PaletteEntry[] = [];
    const screen = active();
    if (screen) {
      for (const action of screenActions().filter((a) => a.keys.length)) {
        entries.push({ label: `${screen.title}: ${action.description}`, hint: keyLabel(action), icon: action.icon, run: () => runAction(action) });
      }
    }
    screens.forEach((target, index) => {
      if (index !== activeIndex) entries.push({ label: `Go to ${target.title}`, hint: index < 9 ? String(index + 1) : undefined, icon: target.icon, run: () => show(index) });
    });
    screens.forEach((target, index) => {
      if (index === activeIndex) return;
      for (const action of target.actions ?? []) {
        entries.push({
          label: `${target.title}: ${action.description}`,
          icon: action.icon,
          run: () => {
            show(index);
            runAction(action);
          },
        });
      }
    });
    entries.push({ label: "Reload this screen", icon: "refresh", run: () => remount() });
    entries.push({ label: "Help: keys and mouse", hint: "?", icon: "help", run: () => openHelp() });
    entries.push({ label: "Quit", hint: "q", icon: "quit", run: () => quit() });
    overlays.palette(entries);
  };

  const openHelp = () => {
    const screen = active();
    const sections: HelpSection[] = [];
    const own = screenActions();
    if (screen && own.length) {
      sections.push({
        title: withIcon(icons, screen.icon ?? "list", screen.title),
        rows: own.map((action) => ({ key: keyLabel(action), description: action.description, icon: action.icon, run: action.keys.length ? () => runAction(action) : undefined })),
      });
    }
    sections.push({
      title: "Global",
      rows: [
        { key: "Ctrl+K  :", description: "command palette", icon: "keyboard", run: () => openPalette() },
        { key: "←  →  [  ]", description: "previous / next tab", icon: "tabs", run: () => step(1) },
        { key: `1 … ${Math.min(9, screens.length)}`, description: "go to the tab with that number" },
        { key: "Tab  Shift+Tab", description: "next / previous panel" },
        { key: "Esc", description: "close a dialog; quit when none is open", icon: "close" },
        { key: "q  Ctrl+C", description: "quit", icon: "quit", run: () => quit() },
      ],
    });
    sections.push({
      title: "Mouse",
      rows: [
        { key: "click", description: "tab, bar item, button, row, dialog button" },
        { key: "wheel", description: "scroll a list; over the tabs, switch tab" },
        { key: "Shift+drag", description: "select text in most terminals" },
      ],
    });
    overlays.help(sections);
  };

  // Layout: recompose on width class change; replace the screen when too small.
  const applySize = () => {
    const space = spacing(layoutFor(renderer.width));
    for (const box of [header, tabBar, content, bar]) {
      box.paddingLeft = space.pageX;
      box.paddingRight = space.pageX;
    }
    header.marginTop = space.pageY;
    header.flexShrink = 0;
    tabBar.height = 2;
    tabBar.gap = space.tabGap;
    bar.flexShrink = 0;
    for (const gap of [headerGap, tabGap, contentGap]) gap.height = space.pageY;
    const wasSmall = small;
    const nextSmall = renderer.width < MIN_WIDTH || renderer.height < MIN_HEIGHT;
    const nextLayout = layoutFor(renderer.width);
    const node = active() && mounted.get(active()!.id);
    if (nextSmall !== small) {
      small = nextSmall;
      if (small) {
        if (node) detach(node);
        content.add(tooSmall);
      } else {
        content.remove(tooSmall);
        if (node) content.add(node);
      }
    }
    tooSmallText.content = withIcon(icons, "warn", `Terminal too small: ${renderer.width}×${renderer.height}, needs ${MIN_WIDTH}×${MIN_HEIGHT}.`);
    if (nextLayout !== currentLayout) {
      currentLayout = nextLayout;
      for (const screen of screens) if (screen !== active() && mounted.has(screen.id)) stale.add(screen.id);
      if (small && active()) stale.add(active()!.id);
      else remount();
      paintTabs();
      refreshBar();
    } else if (wasSmall && !small && active() && stale.has(active()!.id)) {
      remount();
    }
    fitStatus();
    refreshBar();
  };
  const onResize = () => applySize();
  renderer.on("resize", onResize);

  // Files watched by the active screen: refresh on change (debounced).
  let watchers: FSWatcher[] = [];
  let watchTimer: ReturnType<typeof setTimeout> | undefined;
  const stopWatchers = () => {
    for (const watcher of watchers) watcher.close();
    watchers = [];
    clearTimeout(watchTimer);
  };
  const restartWatchers = () => {
    stopWatchers();
    const files = active()?.watch?.() ?? [];
    const byDir = new Map<string, Set<string>>();
    for (const file of files) {
      let target = file;
      let dir = dirname(target);
      while (!existsSync(dir) && dirname(dir) !== dir) {
        target = dir;
        dir = dirname(dir);
      }
      if (!byDir.has(dir)) byDir.set(dir, new Set());
      byDir.get(dir)!.add(basename(target));
    }
    for (const [dir, names] of byDir) {
      try {
        watchers.push(
          watchFile(dir, (_event, name) => {
            if (name && !names.has(String(name))) return;
            clearTimeout(watchTimer);
            const update = () => {
              if (renderer.isDestroyed) return;
              if (overlays.isOpen) {
                watchTimer = setTimeout(update, 100);
                return;
              }
              restartWatchers();
              remount();
              context.notify("Updated from disk", "info");
            };
            watchTimer = setTimeout(update, 250);
          }),
        );
      } catch {
        // An ancestor can disappear between resolving its path and watching it.
      }
    }
  };

  // Terminal window focus: pause and resume the active screen.
  const onBlur = () => active()?.onPause?.(context);
  const onFocus = () => active()?.onResume?.(context);
  renderer.on("blur", onBlur);
  renderer.on("focus", onFocus);

  const onKey = (key: KeyEvent) => {
    const name = key.name;
    if (key.ctrl && name === "c") {
      key.preventDefault();
      return quit();
    }
    if (overlays.handleKey(key)) return;
    if (key.ctrl && name === "k") {
      key.preventDefault();
      return openPalette();
    }
    // A text field keeps letters, digits and arrows; Esc leaves it, Tab moves on.
    if (editsText(renderer.currentFocusedRenderable)) {
      if (name === "escape") {
        key.preventDefault();
        renderer.currentFocusedRenderable?.blur();
      } else if (name === "tab") {
        key.preventDefault();
        cycleFocus(key.shift ? -1 : 1);
      }
      return;
    }
    if (key.ctrl || key.meta) return;
    if (small) {
      if (name === "q" || name === "escape") quit();
      return;
    }
    const consume = (run: () => void) => {
      key.preventDefault();
      run();
    };
    if (name === ":") return consume(openPalette);
    if (active()?.onKey?.(name, context)) return consume(() => undefined);
    const own = active()?.actions?.find((action) => action.keys.includes(name));
    if (own) return consume(() => runAction(own));
    if (name === "tab") return consume(() => cycleFocus(key.shift ? -1 : 1));
    if (name === "left" || name === "[") return consume(() => step(-1));
    if (name === "right" || name === "]") return consume(() => step(1));
    if (/^[1-9]$/.test(name)) {
      const index = Number(name) - 1;
      return consume(() => {
        if (index < screens.length) show(index);
      });
    }
    const global = globalActions.find((action) => action.keys.includes(name));
    if (global) consume(() => runAction(global));
  };
  const onPaste = (event: PasteEvent) => {
    overlays.handlePaste(event);
  };
  renderer.keyInput.on("keypress", onKey);
  renderer.keyInput.on("paste", onPaste);
  renderer.once("destroy", () => {
    renderer.keyInput.off("keypress", onKey);
    renderer.keyInput.off("paste", onPaste);
    renderer.off("resize", onResize);
    renderer.off("blur", onBlur);
    renderer.off("focus", onFocus);
    stopWatchers();
    overlays.destroy();
    active()?.onLeave?.(context);
    // Hidden tabs are detached from the root, so the renderer cannot own their cleanup.
    for (const node of mounted.values()) node.destroyRecursively();
    mounted.clear();
    tooSmall.destroyRecursively();
  });

  applySize();
  const initial = options.initialTab ?? defaultInitialTab();
  show(Math.max(0, screens.findIndex((s) => s.id === initial)));

  await closed;
}
