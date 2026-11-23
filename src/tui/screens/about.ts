/**
 * About tab: binary identity, version, paths and credits.
 * Uses the same data as the `about` command, so the two surfaces never tell
 * different stories.
 *
 * Medium and wide stack Binary and Project beside Credits. Wide also shows
 * Standards. Compact uses one scroll viewport for identity, project and credits. Identity and credits
 * come from the binary manifest, so no files are watched.
 *
 * Action: `c` copies the repository URL (or the site when there is no
 * repository) to the clipboard through OSC 52, by key, key bar or button.
 */
import { BoxRenderable, TextRenderable, StyledText, link as hyperlink } from "@opentui/core";
import { aboutData } from "../../cli/commands/about.ts";
import {
  spacer,
  fitText,
  keyValueRow,
  list,
  scrollPanel,
  dim,
  keyValueTable,
  heading,
  button,
  link,
} from "../components.ts";
import type { Screen, ScreenContext } from "../screen.ts";

/** Copies the repository URL, falling back to the project site. */
function copyLink(ctx: ScreenContext): void {
  const d = aboutData();
  const url = d.repository || d.site;
  if (!url) {
    ctx.notify("No repository or site in package.json", "warn");
    return;
  }
  let copied = false;
  try {
    copied = ctx.renderer.copyToClipboardOSC52(url);
  } catch (error) {
    ctx.notify(
      error instanceof Error
        ? `OSC 52: ${error.message}`
        : "Clipboard unavailable (OSC 52)",
      "error",
    );
    return;
  }
  if (copied) ctx.notify(`Copied ${url}`, "ok");
  else ctx.notify("This terminal does not accept clipboard writes (OSC 52)", "warn");
}

export const aboutScreen: Screen = {
  id: "about",
  title: "About",
  icon: "about",
  description: "Binary, version, license and credits",
  actions: [{ keys: ["c"], description: "copy link", icon: "copy", run: copyLink }],
  mount(ctx) {
    const { renderer, theme } = ctx;
    const d = aboutData();
    ctx.status(`${d.title} v${d.version}`);
    const layout = ctx.layout();
    const compact = layout === "compact";
    const space = ctx.space;
    const root = new BoxRenderable(renderer, { flexDirection: "row", flexGrow: 1, minHeight: 0, gap: space.gapX });
    const shared = compact ? scrollPanel(renderer, theme, { title: "About", active: true }) : undefined;
    const left = new BoxRenderable(renderer, { flexDirection: "column", flexGrow: 1, flexBasis: 0, minWidth: 0, minHeight: 0, gap: space.gapY });
    const right = new BoxRenderable(renderer, { flexDirection: "column", flexGrow: 1, flexBasis: 0, minWidth: 0, minHeight: 0, gap: space.gapY });
    if (shared) root.add(shared);
    else { root.add(left); root.add(right); }

    /** Reuses a single compact viewport and otherwise creates a bounded card. */
    function section(title: string, height: number, column: BoxRenderable) {
      if (shared) {
        if (shared.body.getChildren().length) shared.add(spacer(renderer, space.gapY));
        shared.add(heading(renderer, theme, title));
        return shared;
      }
      const card = scrollPanel(renderer, theme, { title, height, flexGrow: 0, active: title === "Binary" });
      card.flexShrink = 1;
      column.add(card);
      return card;
    }

    const binary = section("Binary", 11, left);
    binary.add(heading(renderer, theme, `${d.title}  v${d.version}`));
    /** Clips paths to the row's actual cell budget, preserving their suffix. */
    function pathRow(label: string, path: string) {
      const row = keyValueRow(renderer, theme, label, path, 10);
      const value = row.getChildren()[2] as TextRenderable;
      row.onSizeChange = () => {
        value.content = fitText(path, Math.max(0, row.width - 10 - space.labelGap), true);
      };
      return row;
    }
    binary.add(pathRow("Executable", d.executable));
    for (const [label, value] of [["Runtime", d.runtime], ["Platform", d.platform], ["PID", String(d.pid)]]) {
      binary.add(keyValueRow(renderer, theme, label!, value!, 10));
    }
    binary.add(pathRow("Data", d.dataDir));

    const project = section("Project", 10, left);
    project.add(keyValueTable(renderer, theme, [["Author".padEnd(10), d.author || "-"], ["License".padEnd(10), d.license]]));
    /** Label plus an OSC 8 link, cut in the middle with "…" to fit the card. */
    function urlRow(label: string, url: string): BoxRenderable {
      const row = new BoxRenderable(renderer, { flexDirection: "row", height: 1, flexShrink: 0, gap: space.labelGap });
      row.add(new TextRenderable(renderer, { content: label.padEnd(10), fg: theme.textDim, flexShrink: 0, wrapMode: "none" }));
      const target = link(renderer, theme, { url, notify: ctx.notify });
      target.flexShrink = 1;
      target.minWidth = 0;
      target.wrapMode = "none";
      row.add(target);
      row.onSizeChange = () => {
        const available = Math.max(0, row.width - 10 - space.labelGap);
        target.content = new StyledText([hyperlink(url)(fitText(url, available, true))]);
      };
      return row;
    }
    if (d.site) project.add(urlRow("Site", d.site));
    if (d.repository) project.add(urlRow("Repository", d.repository));
    project.add(button(renderer, theme, { key: "c", label: "copy link", onPress: () => copyLink(ctx) }));

    const creditWidth = Math.max(1, Math.floor((renderer.width - space.pageX * 2 - space.gapX) / 2) - 2 - space.cardPadX * 2);
    const creditLines = d.credits.reduce((total, credit) => total + 1 + Math.ceil(Bun.stringWidth(credit.role) / creditWidth), 0);
    const credits = section("Credits", 5 + creditLines + (layout === "wide" ? Math.max(0, d.credits.length - 1) : 0), right);
    d.credits.forEach((credit, index) => {
      if (index && layout === "wide") credits.add(spacer(renderer, space.gapY));
      const row = new BoxRenderable(renderer, { flexDirection: "row", height: 1, flexShrink: 0, gap: space.labelGap });
      const name = new TextRenderable(renderer, { content: credit.name, fg: theme.textStrong, flexShrink: 0, wrapMode: "none" });
      row.add(name);
      const url = link(renderer, theme, { url: credit.url, notify: ctx.notify });
      url.flexShrink = 1;
      url.minWidth = 0;
      url.wrapMode = "none";
      row.add(url);
      row.onSizeChange = () => {
        const available = Math.max(0, row.width - Bun.stringWidth(credit.name) - space.labelGap);
        url.content = new StyledText([hyperlink(credit.url)(fitText(credit.url, available, true))]);
      };
      credits.add(row);
      const role = dim(renderer, theme, credit.role);
      role.wrapMode = "word";
      role.flexShrink = 0;
      credits.add(role);
    });
    if (layout === "wide") {
      const standards = section("Standards", 13, right);
      standards.add(heading(renderer, theme, "Interface"));
      standards.add(list(renderer, theme, ["OpenCLI 0.1 for the CLI description", "MCP 2025-11-25 over stdio", "Fixed exit codes (0 success)"]));
      standards.add(spacer(renderer, space.gapY));
      standards.add(heading(renderer, theme, "Data"));
      standards.add(list(renderer, theme, ["settings.json in plain text", "credentials.json with AES-256-GCM", "master.key with mode 0600"]));
    }
    return root;
  },
};
