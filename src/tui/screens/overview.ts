/**
 * Overview tab: the environment at a glance.
 *
 * Shows runtime, platform, settings and vault state, and the
 * first suggested actions. It is the default initial tab and the natural
 * place for derived projects to show their own indicators.
 *
 * Wide and medium use proportional columns and content-sized row limits.
 * Compact retains the same cards with smaller padding and gaps.
 * Watches settings.json, credentials.json and master.key for external updates.
 *
 * Actions: `r` reloads the panels from disk; `c` copies the MCP client
 * configuration to the clipboard (OSC 52). Both also run from the key bar
 * and from the buttons in the "Next steps" panel.
 */
import { BoxRenderable, ScrollBoxRenderable } from "@opentui/core";
import { manifest } from "../../app/manifest.ts";
import { paths, exists } from "../../config/paths.ts";
import { vaultStatus } from "../../config/credentials.ts";
import {
  scrollPanel,
  panel,
  thinScrollbar,
  heading,
  list,
  dim,
  keyValueTable,
  button,
} from "../components.ts";
import { controlSpacing } from "../spacing.ts";
import { glyphs } from "../theme.ts";
import type { Screen, ScreenAction, ScreenContext } from "../screen.ts";

/** MCP client configuration suggested to agents. */
export function mcpClientConfig(): string {
  return `{ "command": "${manifest.bin}", "args": ["mcp"] }`;
}

/** Copies the public MCP command configuration through OSC 52. */
function copyMcpConfig(ctx: ScreenContext): void {
  let copied = false;
  try {
    copied = ctx.renderer.copyToClipboardOSC52(mcpClientConfig());
  } catch (error) {
    ctx.notify(
      error instanceof Error
        ? `OSC 52: ${error.message}`
        : "Clipboard unavailable (OSC 52)",
      "error",
    );
    return;
  }
  if (copied) ctx.notify("MCP config copied", "ok");
  else ctx.notify("This terminal does not accept clipboard writes (OSC 52)", "warn");
}

/** Refreshes data from disk and reports completion as a toast. */
function reload(ctx: ScreenContext): void {
  ctx.refresh();
  ctx.notify("Reloaded", "ok");
}

const actions: ScreenAction[] = [
  { keys: ["r"], description: "reload", icon: "refresh", run: reload },
  { keys: ["c"], description: "copy MCP config", icon: "copy", run: copyMcpConfig },
];

export const overviewScreen: Screen = {
  id: "overview",
  title: "Overview",
  icon: "overview",
  description: "Environment, configuration and vault at a glance",
  actions,
  watch: () => [paths.settings(), paths.credentials(), paths.masterKey()],
  mount(ctx) {
    const { renderer, theme } = ctx;
    const space = ctx.space;
    const compact = ctx.layout() === "compact";
    const rootBox = new BoxRenderable(renderer, { flexDirection: "column", flexGrow: 1, gap: space.gapY, minHeight: 0 });
    const topRow = new BoxRenderable(renderer, { flexDirection: "row", gap: space.gapX, height: compact ? 6 : 8, flexShrink: 0 });
    const environment = scrollPanel(renderer, theme, { title: "Environment", flexGrow: 1, active: true });
    environment.add(keyValueTable(renderer, theme, [
      ["Binary", `${manifest.bin} v${manifest.version}`],
      ["Runtime", `Bun ${Bun.version}`],
      ["Platform", `${process.platform}-${process.arch}`],
    ]));
    topRow.add(environment);
    const vault = vaultStatus();
    const hasSettings = exists(paths.settings());
    ctx.status(`${vault.count} credential${vault.count === 1 ? "" : "s"} · ${hasSettings ? "saved" : "defaults"}`);
    const state = scrollPanel(renderer, theme, { title: "State", flexGrow: 1 });
    state.add(keyValueTable(renderer, theme, [
      ["Settings", hasSettings ? `${glyphs.ok} saved` : `${glyphs.bullet} defaults`, hasSettings ? theme.ok : theme.textDim],
      ["Vault", vault.exists ? `${glyphs.ok} ${vault.count} credential${vault.count === 1 ? "" : "s"}` : `${glyphs.bullet} empty`, vault.exists ? theme.ok : theme.textDim],
      ["Master key", vault.masterKeySource === "none" ? "not created" : vault.masterKeySource],
    ]));
    topRow.add(state);
    rootBox.add(topRow);
    const next = panel(renderer, theme, { title: "Next steps", height: compact ? 7 : 11, flexGrow: 0 });
    next.flexShrink = 1;
    const reading = new ScrollBoxRenderable(renderer, {
      flexGrow: 1, minHeight: 0, scrollY: true, scrollX: false,
      contentOptions: { flexDirection: "column" },
      scrollbarOptions: { trackOptions: { backgroundColor: theme.border, foregroundColor: theme.textDim } },
    });
    const columns = new BoxRenderable(renderer, { flexDirection: compact ? "column" : "row", gap: compact ? space.gapY : space.gapX, flexShrink: 0 });
    const terminal = new BoxRenderable(renderer, { flexDirection: "column", flexGrow: compact ? 0 : 1, flexBasis: compact ? "auto" : 0, minWidth: 0 });
    if (!compact && renderer.height >= 28) terminal.add(heading(renderer, theme, "IN THE TERMINAL"));
    terminal.add(list(renderer, theme, [
      `${manifest.bin} --help`,
      `${manifest.bin} credentials set <name>`,
      `${manifest.bin} --skill`,
    ], glyphs.arrow));
    columns.add(terminal);
    if (!compact) {
      const agents = new BoxRenderable(renderer, { flexDirection: "column", flexGrow: 1, flexBasis: 0, minWidth: 0 });
      if (renderer.height >= 28) agents.add(heading(renderer, theme, "FOR AGENTS"));
      agents.add(dim(renderer, theme, `{ "command": "${manifest.bin}",
  "args": ["mcp"] }`));
      columns.add(agents);
    }
    reading.add(columns);
    next.add(reading);
    const controls = new BoxRenderable(renderer, { flexDirection: "row", gap: compact ? controlSpacing.gap : space.gapX, flexShrink: 0, height: 1, marginTop: renderer.height >= 28 ? space.gapY : 0 });
    controls.add(button(renderer, theme, { key: "c", label: "copy MCP config", onPress: () => copyMcpConfig(ctx) }));
    controls.add(button(renderer, theme, { key: "r", label: "reload", onPress: () => reload(ctx) }));
    next.add(controls);
    thinScrollbar(renderer, reading, theme, next.body);
    rootBox.add(next);
    return rootBox;
  },
};
