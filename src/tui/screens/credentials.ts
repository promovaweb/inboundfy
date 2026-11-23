/**
 * Credentials tab: credential names and vault metadata, never secret values.
 * Wide and medium show names beside vault details; compact hides the details.
 * a adds a credential, Enter/e replaces its value, d/Delete removes after
 * confirmation, r reloads, and Up/k or Down/j changes selection. Secret values
 * stay inside the prompt and vault service. Watches credentials.json and
 * master.key so changes outside the TUI refresh the screen.
 */
import { BoxRenderable } from "@opentui/core";
import {
  listCredentials,
  removeCredential,
  setCredential,
  validateName,
  vaultStatus,
} from "../../config/credentials.ts";
import { paths } from "../../config/paths.ts";
import { table, panel, scrollPanel, dim, fitText, keyValueTable, stateView } from "../components.ts";
import type { Screen, ScreenContext } from "../screen.ts";

/** Creates an independent credential management screen. */
export function createCredentialsScreen(): Screen {
  let grid: ReturnType<typeof table> | undefined;
  let rows: Record<string, string>[] = [];
  let current = "";

  /** Validates a public credential name before requesting its secret value. */
  function validateCredentialName(value: string): string | undefined {
    try {
      validateName(value);
    } catch (error) {
      return error instanceof Error ? error.message : "Invalid name";
    }
  }

  /** Requests a secret and passes it directly to persistence, never presentation. */
  async function save(ctx: ScreenContext, adding: boolean): Promise<void> {
    try {
      let name = current;
      if (adding) {
        const input = await ctx.prompt({
          title: "Add credential",
          label: "Name",
          validate: validateCredentialName,
        });
        if (input === undefined) return;
        name = validateName(input);
      }
      if (!name) return;

      const value = await ctx.prompt({
        title: `Set ${name}`,
        label: "Secret value",
        secret: true,
        validate: (input) =>
          input.length ? undefined : "The credential value cannot be empty",
      });
      if (value === undefined) return;

      setCredential(name, value);
      ctx.refresh();
      ctx.notify("Credential saved", "ok");
    } catch (error) {
      ctx.notify(
        error instanceof Error
          ? error.message
          : "Could not save credential. Check the vault and master key.",
        "error",
      );
    }
  }

  /** Deletes only the selected name and only after a danger confirmation. */
  async function remove(ctx: ScreenContext): Promise<void> {
    const name = current;
    if (!name) return;

    try {
      const confirmed = await ctx.confirm({
        title: "Remove credential",
        message: `Remove ${name}?`,
        danger: true,
      });
      if (!confirmed) return;

      removeCredential(name);
      ctx.refresh();
      ctx.notify("Credential removed", "ok");
    } catch (error) {
      ctx.notify(
        error instanceof Error
          ? error.message
          : "Could not remove credential. Check the vault and master key.",
        "error",
      );
    }
  }

  return {
    id: "credentials",
    title: "Credentials",
    icon: "vault",
    description: "Manage encrypted credential names",
    watch: () => [paths.credentials(), paths.masterKey()],
    actions: [
      { keys: ["a"], description: "add", icon: "vault", run: (ctx) => save(ctx, true) },
      {
        keys: ["return", "enter", "e"],
        label: "Enter/e",
        description: "replace value",
        icon: "settings",
        run: (ctx) => save(ctx, false),
      },
      { keys: ["d", "delete"], description: "remove", icon: "error", run: remove },
      {
        keys: ["r"],
        description: "reload",
        icon: "refresh",
        run: (ctx) => ctx.refresh(),
      },
      {
        keys: ["up", "k"],
        description: "previous credential",
        icon: "select",
        hidden: true,
        run: () => grid?.move(-1),
      },
      {
        keys: ["down", "j"],
        description: "next credential",
        icon: "select",
        hidden: true,
        run: () => grid?.move(1),
      },
    ],
    mount(ctx) {
      const { renderer, theme, icons } = ctx;

      function add(): void {
        void save(ctx, true);
      }

      function replace(): void {
        void save(ctx, false);
      }

      function select(index: number): void {
        current = rows[index]?.name ?? "";
      }

      try {
        rows = listCredentials().map((name) => ({ name }));
        const vault = vaultStatus();
        current = rows.find((row) => row.name === current)?.name ?? rows[0]?.name ?? "";
        ctx.status(`${rows.length} credential${rows.length === 1 ? "" : "s"} · master key: ${vault.masterKeySource}`);

        const root = new BoxRenderable(renderer, {
          flexDirection: ctx.layout() === "compact" ? "column" : "row",
          gap: ctx.layout() === "compact" ? ctx.space.gapY : ctx.space.gapX,
          height: Math.min(renderer.height - (ctx.layout() === "compact" ? 4 : 8), Math.max(8 + ctx.space.cardPadY * 2, rows.length + 4 + ctx.space.cardPadY * 2)),
          flexGrow: 0,
          minHeight: 0,
        });
        if (rows.length) {
          grid = table(renderer, theme, {
            columns: [{ key: "name", title: "Name" }],
            rows,
            onSelect: select,
            onActivate: replace,
          });
          grid.select(rows.findIndex((row) => row.name === current));
          const collection = panel(renderer, theme, { title: "Credentials", flexGrow: 1, active: true });
          collection.add(grid.box);
          root.add(collection);
        } else {
          grid = undefined;
          root.add(
            stateView(renderer, theme, icons, {
              kind: "empty",
              title: "No credentials",
              message: "Add a secret to the encrypted vault",
              action: { key: "a", label: "add", onPress: add },
            }),
          );
        }

        if (ctx.layout() !== "compact") {
          const detail = scrollPanel(renderer, theme, {
            title: "Vault",
            flexGrow: 0,
            width: "45%",
          });
          detail.add(
            keyValueTable(renderer, theme, [
              ["Master key", vault.masterKeySource],
              ["Count", String(vault.count)],
            ]),
          );
          detail.add(dim(renderer, theme, "File"));
          const file = dim(renderer, theme, fitText(vault.file, Math.floor((renderer.width - ctx.space.pageX * 2 - ctx.space.gapX) * 0.45) - 2 - ctx.space.cardPadX * 2, true));
          file.width = "100%";
          file.height = 1;
          file.wrapMode = "none";
          detail.onSizeChange = () => {
            file.content = fitText(vault.file, Math.max(0, detail.width - 2 - ctx.space.cardPadX * 2), true);
          };
          detail.add(file);
          root.add(detail);
        }
        return root;
      } catch (error) {
        current = "";
        grid = undefined;
        ctx.status("Vault unavailable");
        ctx.notify(
          error instanceof Error ? error.message : "Could not open vault",
          "error",
        );
        return stateView(renderer, theme, icons, {
          kind: "error",
          title: "Unable to open vault",
          message: "Check credentials.json and the master key.",
          action: { key: "r", label: "reload", onPress: ctx.refresh },
        });
      }
    },
  };
}

/** Default credential tab registered by the shell. */
export const credentialsScreen = createCredentialsScreen();
