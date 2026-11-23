/**
 * Example screen using a selectable table and a detail panel.
 *
 * Copy this file to src/tui/screens/<id>.ts, adjust its imports and register
 * the factory in screens/index.ts. Keep selection inside the factory so
 * separate application instances do not share renderables or mutable state.
 *
 * Actions provide the keyboard and command-palette routes. Table clicks and
 * Enter call the same activation function. The shell owns dialogs, status
 * messages and file watching; the screen only declares its data sources.
 */
import { BoxRenderable, TextRenderable } from "@opentui/core";
import { table, panel, stateView } from "../../src/tui/components.ts";
import type { Screen, ScreenContext } from "../../src/tui/screen.ts";

/** Creates an isolated list/detail screen, optionally with supplied entries. */
export function createExampleScreen(entries: string[] = ["First item", "Second item", "Third item"]): Screen {
  let grid: ReturnType<typeof table> | undefined;

  // Both mouse activation and the Enter action use this function.
  const activate = (ctx: ScreenContext, index: number): void => {
    if (index >= 0) ctx.status(`Selected item ${index + 1}`);
  };

  return {
    id: "example",
    title: "Example",
    icon: "list",
    description: "Select and open an item",

    // Replace this with absolute data paths when adapting the example.
    // The shell refreshes the screen after those files change.
    watch: () => [],

    actions: [
      { keys: ["up", "k"], description: "up", hidden: true, run: () => grid?.move(-1) },
      { keys: ["down", "j"], description: "down", hidden: true, run: () => grid?.move(1) },
      {
        keys: ["return", "enter"],
        label: "Enter",
        description: "select",
        run: (ctx) => activate(ctx, grid?.selected() ?? -1),
      },
      { keys: ["r"], description: "reset", run: () => grid?.select(0) },
    ],

    mount(ctx) {
      const { renderer, theme, icons } = ctx;
      ctx.status(`${entries.length} items`);

      // Clear the previous instance before handling an empty reload.
      grid = undefined;
      if (!entries.length) {
        return stateView(renderer, theme, icons, {
          kind: "empty",
          title: "No items",
          action: { key: "r", label: "reload", onPress: ctx.refresh },
        });
      }

      // Stack the detail panel below the table in a compact terminal.
      const root = new BoxRenderable(renderer, {
        flexDirection: ctx.layout() === "compact" ? "column" : "row",
        flexGrow: 1,
        minHeight: 0,
      });
      const detail = panel(renderer, theme, {
        title: "Details",
        width: ctx.layout() === "compact" ? "100%" : "40%",
      });
      const text = new TextRenderable(renderer, {
        content: entries[0],
        fg: theme.text,
      });
      detail.add(text);

      // Callbacks receive display indices. Sorting reorders this rows array
      // too, so detail text always corresponds to the selected visible row.
      const rows = entries.map((name) => ({ name }));
      grid = table(renderer, theme, {
        columns: [{ key: "name", title: "Items" }],
        rows,
        onSelect: (index) => {
          text.content = rows[index]?.name ?? "";
        },
        onActivate: (index) => activate(ctx, index),
      });
      root.add(grid.box);
      root.add(detail);
      return root;
    },
  };
}
