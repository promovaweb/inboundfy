import { resolve } from "node:path";
import { BoxRenderable, type Renderable, type StyledText, type ScrollBoxRenderable } from "@opentui/core";
import { collectStats, type ProjectStats } from "../core/stats.ts";
import { INDEX_PATHS } from "../core/project.ts";
import { listPanel, spinner, stateView } from "./components.ts";
import type { Screen, ScreenAction, ScreenContext } from "./screen.ts";

export function tuiProjectRoot(): string {
  return resolve(process.env.INBOUNDFY_PROJECT ?? process.cwd());
}

export function emptyView(ctx: ScreenContext, title: string, message: string) {
  return stateView(ctx.renderer, ctx.theme, ctx.icons, {
    kind: "empty", title, message, action: { key: "r", label: "reload", onPress: ctx.refresh },
  });
}

/** Read afresh on entry. A replaced or hidden view never receives a late result. */
export function projectScreen<T>(options: Pick<Screen, "id" | "title" | "description" | "icon" | "actions" | "onKey"> & {
  load: (root: string, stats: ProjectStats) => Promise<T> | T;
  render: (ctx: ScreenContext, data: T) => Renderable;
  reset?: () => void;
}): Screen {
  let root: BoxRenderable;
  let loading: ReturnType<typeof spinner> | undefined;
  let generation = 0;
  function clear() {
    for (const child of root.getChildren()) child.destroyRecursively();
  }
  async function enter(ctx: ScreenContext) {
    const request = ++generation;
    const path = tuiProjectRoot();
    options.reset?.();
    clear();
    ctx.status("Loading…");
    loading = spinner(ctx.renderer, ctx.theme, { label: "Loading " + options.title.toLowerCase() });
    root.add(loading.box);
    if (ctx.motion) loading.start();
    try {
      const stats = await collectStats(path, { skipProgress: options.id !== "dashboard" });
      if (request !== generation) return;
      if (!stats.project.installed) {
        clear();
        root.add(emptyView(ctx, "Project not installed", "Run inboundfy install in the project directory."));
        ctx.status("No installation");
        return;
      }
      const data = await options.load(path, stats);
      if (request !== generation) return;
      clear();
      root.add(options.render(ctx, data));
    } catch (err) {
      if (request !== generation) return;
      clear();
      root.add(stateView(ctx.renderer, ctx.theme, ctx.icons, {
        kind: "error", title: "Could not load " + options.title.toLowerCase(),
        message: err instanceof Error ? err.message : String(err),
        action: { key: "r", label: "retry", onPress: ctx.refresh },
      }));
      ctx.status("Read error");
    } finally {
      if (request === generation) loading = undefined;
    }
  }
  return {
    ...options,
    get actions(): ScreenAction[] {
      return [...(options.actions ?? []), { keys: ["r"], description: "reload", icon: "refresh", run: ctx => ctx.refresh() }];
    },
    watch: () => [...Object.values(INDEX_PATHS), ".inboundfy/estrategia.md", ".inboundfy/install.json"].map(file => resolve(tuiProjectRoot(), file)),
    mount(ctx) {
      root = new BoxRenderable(ctx.renderer, { flexGrow: 1, minHeight: 0 });
      return root;
    },
    onEnter: ctx => { void enter(ctx); },
    onPause: () => loading?.stop(),
    onResume: ctx => { if (ctx.motion) loading?.start(); },
    onLeave() { generation++; loading?.stop(); loading = undefined; options.reset?.(); },
  };
}

/** Keyboard and row clicks share listPanel's selection and activation. */
export function projectList() {
  let list: ReturnType<typeof listPanel> | undefined;
  let detail: ScrollBoxRenderable | undefined;
  const selections = new Map<string, number>();
  let title = "";
  function move(delta: number) {
    if (list) list.move(delta);
    else detail?.scrollBy(delta);
  }
  const actions: ScreenAction[] = [
    { keys: ["up"], label: "↑", description: "previous", hidden: true, icon: "list", run: () => move(-1) },
    { keys: ["down"], label: "↓", description: "next", hidden: true, icon: "list", run: () => move(1) },
    { keys: ["return", "enter"], label: "Enter", description: "open", icon: "select", run: () => list?.select(list.selected()) },
  ];
  return {
    get actions() { return detail ? actions.slice(0, 2) : actions; },
    reset() {
      if (list) selections.set(title, list.selected());
      list = undefined;
      detail = undefined;
    },
    scrollDetail(view: ScrollBoxRenderable) { detail = view; },
    render(ctx: ScreenContext, caption: string, items: (string | StyledText)[], open: (index: number) => void, preview?: (index: number) => void) {
      title = caption;
      let initialized = false;
      list = listPanel(ctx.renderer, ctx.theme, { title, items, onSelect: open, onHighlight: i => { if (initialized) preview?.(i); } });
      list.box.maxHeight = items.length + ctx.space.cardPadY * 2 + 3;
      list.move(selections.get(title) ?? 0);
      initialized = true;
      if (list.selected() >= 0) preview?.(list.selected());
      return list.box;
    },
  };
}
