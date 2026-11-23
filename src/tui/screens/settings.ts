/**
 * Settings tab: schema-driven preferences with a selection table and details.
 * Wide and medium layouts put details on the right; compact stacks them below.
 * Enter/e edits, x/Delete restores the default, r reloads, and Up/k or Down/j
 * changes selection. Enum values use choose, booleans toggle, and other types
 * use a validated prompt. Watches settings.json for changes made outside the TUI.
 */
import { BoxRenderable, TextRenderable } from "@opentui/core";
import {
  SETTINGS_SCHEMA,
  convertValue,
  flatten,
  getPath,
  readSettings,
  removePath,
  setPath,
  writeSettings,
  definitionOf,
} from "../../config/settings.ts";
import { paths } from "../../config/paths.ts";
import { table, panel, scrollPanel, stateView } from "../components.ts";
import type { Screen, ScreenContext } from "../screen.ts";

/** Creates an independent settings table and editor. */
export function createSettingsScreen(): Screen {
  let grid: ReturnType<typeof table> | undefined;
  let rows: Record<string, string>[] = [];
  let current = "";

  /** Rebuilds the table and explains when a saved preference takes effect. */
  function saved(ctx: ScreenContext, key: string): void {
    ctx.refresh();
    const message = key.startsWith("tui.")
      ? "Applies the next time the TUI opens"
      : "Settings saved";
    ctx.notify(message, "ok");
  }

  /** Edits the selected key using the dialog appropriate to its schema type. */
  async function edit(ctx: ScreenContext): Promise<void> {
    const key = current;
    if (!key) return;

    try {
      const settings = readSettings();
      const def = definitionOf(key);
      const previous = getPath(settings, key);
      let value: unknown;

      if (def?.type === "boolean") {
        value = !previous;
      } else if (def?.type === "enum" && def.values) {
        const index = await ctx.choose({
          title: key,
          items: def.values,
          initial: def.values.indexOf(String(previous)),
        });
        if (index === undefined) return;
        value = def.values[index];
      } else {
        /** Returns a schema error so the shell keeps the editor open. */
        function validate(input: string): string | undefined {
          try {
            convertValue(key, input);
          } catch (error) {
            return error instanceof Error ? error.message : "Invalid value";
          }
        }

        const text = await ctx.prompt({
          title: `Edit ${key}`,
          label: "Value",
          initial: String(previous ?? ""),
          validate,
        });
        if (text === undefined) return;
        value = convertValue(key, text);
      }

      setPath(settings, key, value);
      writeSettings(settings);
      saved(ctx, key);
    } catch (error) {
      ctx.notify(
        error instanceof Error ? error.message : "Could not save settings",
        "error",
      );
    }
  }

  /** Removes the override only after the user confirms restoring its default. */
  async function reset(ctx: ScreenContext): Promise<void> {
    const key = current;
    if (!key) return;

    try {
      const confirmed = await ctx.confirm({
        title: "Reset setting",
        message: `Restore ${key} to its default?`,
      });
      if (!confirmed) return;

      const settings = readSettings();
      removePath(settings, key);
      writeSettings(settings);
      saved(ctx, key);
    } catch (error) {
      ctx.notify(
        error instanceof Error ? error.message : "Could not reset setting",
        "error",
      );
    }
  }

  return {
    id: "settings",
    title: "Settings",
    icon: "settings",
    description: "Inspect and edit preferences",
    watch: () => [paths.settings()],
    actions: [
      {
        keys: ["return", "enter", "e"],
        label: "Enter/e",
        description: "edit",
        icon: "settings",
        run: edit,
      },
      {
        keys: ["x", "delete"],
        description: "reset to default",
        icon: "settings",
        run: reset,
      },
      {
        keys: ["r"],
        description: "reload",
        icon: "refresh",
        run: (ctx) => ctx.refresh(),
      },
      {
        keys: ["up", "k"],
        description: "previous setting",
        icon: "select",
        hidden: true,
        run: () => grid?.move(-1),
      },
      {
        keys: ["down", "j"],
        description: "next setting",
        icon: "select",
        hidden: true,
        run: () => grid?.move(1),
      },
    ],
    mount(ctx) {
      const { renderer, theme, icons } = ctx;
      try {
        rows = flatten(readSettings()).map(([key, value]) => ({
          key,
          value: String(value),
          default: String(definitionOf(key)?.default ?? "—"),
        }));
        const root = new BoxRenderable(renderer, {
          flexDirection: ctx.layout() === "compact" ? "column" : "row",
          gap: ctx.layout() === "compact" ? ctx.space.gapY : ctx.space.gapX,
          height: Math.min(renderer.height - (ctx.layout() === "compact" ? 4 : 8), ctx.layout() === "compact" ? 17 : rows.length + 6),
          flexGrow: 0,
          minHeight: 0,
        });
        const details = scrollPanel(renderer, theme, {
          title: "Setting details",
          width: ctx.layout() === "compact" ? "100%" : ctx.layout() === "medium" ? "34%" : "40%",
          height: ctx.layout() === "compact" ? 6 : undefined,
          flexGrow: 0,
        });
        const text = new TextRenderable(renderer, {
          fg: theme.text,
          wrapMode: "word",
        });
        details.add(text);

        /** Keeps details and shell status aligned with the displayed row. */
        function show(index: number): void {
          current = rows[index]?.key ?? "";
          const def = SETTINGS_SCHEMA.find((entry) => entry.key === current);
          text.content = `${current}\n\n${def?.description ?? "Custom setting"}\nType: ${def?.type ?? "string"}${def?.type === "enum" ? `\nAccepted: ${def.values?.join(", ")}` : ""}`;
          ctx.status(`${rows.length} settings · ${current}`);
        }

        function activate(): void {
          void edit(ctx);
        }

        grid = table(renderer, theme, {
          columns: [
            { key: "key", title: "Key", width: Math.max(...rows.map((row) => Bun.stringWidth(row.key!))) },
            { key: "value", title: "Value" },
            { key: "default", title: "Default" },
          ],
          rows,
          onSelect: show,
          onActivate: activate,
        });
        const collection = panel(renderer, theme, { title: "Settings", flexGrow: 1, active: true });
        collection.add(grid.box);
        root.add(collection);
        root.add(details);
        grid.select(
          Math.max(
            0,
            rows.findIndex((row) => row.key === current),
          ),
        );
        return root;
      } catch (error) {
        grid = undefined;
        current = "";
        ctx.status("Settings unavailable");
        ctx.notify(error instanceof Error ? error.message : "Read failed", "error");
        return stateView(renderer, theme, icons, {
          kind: "error",
          title: "Unable to load settings",
          message: error instanceof Error ? error.message : "Read failed",
          action: { key: "r", label: "reload", onPress: ctx.refresh },
        });
      }
    },
  };
}

/** Default settings tab registered by the shell. */
export const settingsScreen = createSettingsScreen();
