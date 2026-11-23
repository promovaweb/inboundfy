/**
 * Visual components shared by the screens.
 *
 * `panel` creates a rounded card with a separate uppercase caption, optionally with
 * an icon. `keyValueRow` builds "label  value" with a dimmed label. `list`
 * stacks items with a marker. `button` and `listPanel` are clickable and
 * show hover; each one runs the same function as its keyboard shortcut.
 * Components inherit the screen's layout constraints in wide, medium and
 * compact mode; they do not choose breakpoints or watch files themselves.
 * Lists handle Up/k, Down/j and Enter. Tables also handle Home/End and
 * PageUp/PageDown; header clicks sort, row clicks select and a second click
 * activates. Buttons display their screen action key, and links copy on click.
 * Everything receives the theme so screens never hard-code colors.
 */
import {
  ScrollBoxRenderable,
  parseColor,
  BoxRenderable,
  TextRenderable,
  TextAttributes,
  type CliRenderer,
  type ColorInput,
  type KeyEvent,
  LinearScrollAccel,
  StyledText,
  link as styledLink,
} from "@opentui/core";
import { spacingFor, controlSpacing } from "./spacing.ts";
import { clickable } from "./pointer.ts";
import { glyphs, type Theme } from "./theme.ts";
import {
  withIcon,
  currentIcons,
  iconSets,
  type IconName,
  type IconSet,
} from "./icons.ts";

/** Optional icon for a panel title: the set and the role. */
export interface TitleIcon {
  icons: IconSet;
  name: IconName;
}

/** A card keeps its caption outside the bordered content area. */
class Card<T extends BoxRenderable> extends BoxRenderable {
  /** The bordered box or scroll viewport that owns the card content. */
  readonly body: T;

  constructor(renderer: CliRenderer, theme: Theme, options: PanelOptions, body: T) {
    super(renderer, {
      flexDirection: "column", minWidth: 0, minHeight: 0,
      flexGrow: options.flexGrow ?? 1,
      flexBasis: options.width === undefined && options.flexGrow ? 0 : "auto",
      width: options.width, height: options.height, overflow: "hidden",
    });
    this.body = body;
    const title = options.icon ? withIcon(options.icon.icons, options.icon.name, options.title.toUpperCase()) : options.title.toUpperCase();
    super.add(new TextRenderable(renderer, { content: title, fg: theme.textDim, attributes: TextAttributes.BOLD, height: 1, flexShrink: 0, wrapMode: "none" }));
    super.add(body);
  }

  /** Adds a decoration after the card body without entering its scroll content. */
  addDecoration(node: BoxRenderable): void { super.add(node); }

  /** Focuses the native viewport so keyboard scrolling remains available. */
  override focus(): void { this.body.focus(); }

  /** Adds screen content inside the border, below the separate caption. */
  override add(child: Parameters<BoxRenderable["add"]>[0], index?: number): number {
    return this.body.add(child, index);
  }
}

/** Layout and identity of a titled card. */
interface PanelOptions {
  title: string;
  icon?: TitleIcon;
  flexGrow?: number;
  width?: number | "auto" | `${number}%`;
  height?: number | "auto" | `${number}%`;
  active?: boolean;
}

/** Creates a card with an uppercase caption and padded rounded border. */
export function panel(renderer: CliRenderer, theme: Theme, options: PanelOptions): Card<BoxRenderable> {
  const space = spacingFor(renderer.width);
  const body = new BoxRenderable(renderer, {
    flexDirection: "column", flexGrow: 1, minHeight: 0, minWidth: 0,
    borderStyle: "rounded", focusedBorderColor: theme.borderActive, borderColor: options.active ? theme.borderActive : theme.border,
    backgroundColor: theme.surface,
    paddingLeft: space.cardPadX, paddingRight: space.cardPadX,
    paddingTop: space.cardPadY, paddingBottom: space.cardPadY,
  });
  return new Card(renderer, theme, options, body);
}

/** Paints a narrow track and thumb while preserving native scrollbar input. */
export function thinScrollbar(renderer: CliRenderer, box: ScrollBoxRenderable, theme: Theme, host: BoxRenderable): void {
  box.verticalScrollBar.resetVisibilityControl();
  const track = parseColor(theme.border);
  const thumbColor = parseColor(theme.textDim);
  const background = parseColor(theme.surface);
  const overlay = new BoxRenderable(renderer, { position: "absolute", right: host instanceof Card ? 1 : spacingFor(renderer.width).cardPadX + 1, top: 0, width: 1, height: "100%", zIndex: 1 });
  overlay.onMouse = (event) => { box.processMouseEvent(event); event.stopPropagation(); };
  overlay.renderAfter = (buffer) => {
    const bar = box.verticalScrollBar;
    if (!bar.visible || bar.scrollSize <= bar.viewportSize || bar.height <= 0) return;
    const thumb = Math.max(1, Math.floor(bar.height * bar.viewportSize / bar.scrollSize));
    const offset = Math.round((bar.height - thumb) * bar.scrollPosition / Math.max(1, bar.scrollSize - bar.viewportSize));
    for (let y = 0; y < bar.height; y++) {
      const selected = y >= offset && y < offset + thumb;
      buffer.drawText(selected ? "┃" : "│", bar.x, bar.y + y, selected ? thumbColor : track, background);
    }
  };
  if (host instanceof Card) host.addDecoration(overlay);
  else host.add(overlay);
}

/** Creates a captioned card with a keyboard- and wheel-scrollable body. */
export function scrollPanel(renderer: CliRenderer, theme: Theme, options: PanelOptions): Card<ScrollBoxRenderable> {
  const space = spacingFor(renderer.width);
  const body = new ScrollBoxRenderable(renderer, {
    flexGrow: 1, minWidth: 0, minHeight: 0,
    borderStyle: "rounded", focusedBorderColor: theme.borderActive, borderColor: options.active ? theme.borderActive : theme.border,
    backgroundColor: theme.surface,
    paddingLeft: space.cardPadX, paddingRight: space.cardPadX,
    paddingTop: space.cardPadY, paddingBottom: space.cardPadY,
    scrollY: true, scrollX: false, scrollAcceleration: new LinearScrollAccel(),
    scrollbarOptions: { trackOptions: { backgroundColor: theme.border, foregroundColor: theme.textDim } },
    contentOptions: { flexDirection: "column" },
  });
  const card = new Card(renderer, theme, options, body);
  thinScrollbar(renderer, body, theme, card);
  return card;
}

/** Fits terminal cells with an ellipsis, optionally preserving the path suffix. */
export function fitText(text: string, width: number, middle = false): string {
  if (width <= 0) return "";
  if (Bun.stringWidth(text) <= width) return text;
  const chars = Array.from(text);
  const suffix: string[] = [];
  if (middle) {
    while (chars.length && Bun.stringWidth(suffix.join("")) < Math.floor((width - 1) * 0.75)) {
      suffix.unshift(chars.pop()!);
    }
  }
  while (chars.length && Bun.stringWidth(chars.join("") + suffix.join("")) > width - 1) chars.pop();
  return `${chars.join("")}…${suffix.join("")}`;
}

/** Creates one aligned key/value row. */
export function keyValueRow(
  renderer: CliRenderer,
  theme: Theme,
  key: string,
  value: string,
  keyWidth: number,
  valueColor?: ColorInput,
): BoxRenderable {
  const row = new BoxRenderable(renderer, { flexDirection: "row", height: 1 });
  row.add(
    new TextRenderable(renderer, {
      content: key.padEnd(keyWidth),
      fg: theme.textDim,
      selectable: false,
      flexShrink: 0,
    }),
  );
  row.add(new TextRenderable(renderer, { content: " ".repeat(spacingFor(renderer.width).labelGap), flexShrink: 0 }));
  row.add(
    new TextRenderable(renderer, {
      content: value,
      fg: valueColor ?? theme.text,
      wrapMode: "none",
      flexShrink: 1,
      minWidth: 0,
    }),
  );
  return row;
}

/** Creates aligned key/value rows. */
export function keyValueTable(
  renderer: CliRenderer,
  theme: Theme,
  pairs: Array<[string, string, ColorInput?]>,
): BoxRenderable {
  const box = new BoxRenderable(renderer, { flexDirection: "column", flexShrink: 0 });
  const width = Math.max(...pairs.map(([k]) => k.length));
  for (const [k, v, c] of pairs) box.add(keyValueRow(renderer, theme, k, v, width, c));
  return box;
}

/** Creates a strong heading. */
export function heading(
  renderer: CliRenderer,
  theme: Theme,
  text: string,
): TextRenderable {
  return new TextRenderable(renderer, {
    content: text,
    fg: theme.textStrong,
    attributes: TextAttributes.BOLD,
  });
}

/** Creates secondary text. */
export function dim(renderer: CliRenderer, theme: Theme, text: string): TextRenderable {
  return new TextRenderable(renderer, { content: text, fg: theme.textDim });
}

/** Creates a static bulleted list. */
export function list(
  renderer: CliRenderer,
  theme: Theme,
  items: string[],
  marker = glyphs.bullet,
): BoxRenderable {
  const box = new BoxRenderable(renderer, { flexDirection: "column" });
  for (const item of items) {
    const row = new BoxRenderable(renderer, { flexDirection: "row" });
    row.add(new TextRenderable(renderer, { content: `${marker} `, fg: theme.accent }));
    row.add(new TextRenderable(renderer, { content: item, fg: theme.text }));
    box.add(row);
  }
  return box;
}

/**
 * Creates a one-line clickable button: `[key] label`. A left click runs
 * `onPress`; the screen also lists the same function in `actions` with
 * `key`, so the button and the shortcut stay the same command.
 */
export function button(
  renderer: CliRenderer,
  theme: Theme,
  options: {
    key: string;
    label: string;
    icon?: TitleIcon;
    onPress: () => void;
  },
): BoxRenderable {
  const label = options.icon
    ? withIcon(options.icon.icons, options.icon.name, options.label)
    : options.label;
  const text = new TextRenderable(renderer, {
    content: ` ${label}`,
    fg: theme.text,
    selectable: false,
  });
  const box = new BoxRenderable(renderer, {
    flexDirection: "row",
    height: 1,
    flexShrink: 0,
  });
  box.add(
    new TextRenderable(renderer, {
      content: `[${options.key}]`,
      fg: theme.accent,
      attributes: TextAttributes.BOLD,
      selectable: false,
    }),
  );
  box.add(text);

  function updateHover(inside: boolean): void {
    text.fg = inside ? theme.accent : theme.text;
  }

  clickable(renderer, box, {
    onClick: options.onPress,
    onHover: updateHover,
  });
  return box;
}

/** Creates vertical spacing. */
export function spacer(renderer: CliRenderer, height = 1): BoxRenderable {
  return new BoxRenderable(renderer, { height });
}

/**
 * Creates a scrollable selection list. move changes the highlight silently;
 * select highlights and activates an item. Empty lists return selected() = -1.
 * Screens may forward keys to box.handleKeyPress or call move/select in onKey.
 * Mouse: a click on a row selects it, hover marks the row under the pointer
 * and the wheel scrolls the list.
 */
export function listPanel(
  renderer: CliRenderer,
  theme: Theme,
  options: {
    title: string;
    items: string[];
    onSelect?: (index: number) => void;
  },
) {
  const card = scrollPanel(renderer, theme, { title: options.title, active: true });
  const box = card.body;
  let index = options.items.length ? 0 : -1;
  let hovered = -1;
  /** Builds one row with mouse selection and hover routed through shared state. */
  function createRow(item: string, i: number): TextRenderable {
    const row = new TextRenderable(renderer, {
      content: item,
      height: 1,
      flexShrink: 0,
      wrapMode: "none",
      fg: theme.text,
      selectable: false,
    });
    function updateHover(inside: boolean): void {
      hovered = inside ? i : -1;
      paint();
    }

    clickable(renderer, row, {
      onClick: () => select(i),
      onHover: updateHover,
    });
    box.add(row);
    return row;
  }

  const rows = options.items.map(createRow);

  /** Repaints selection and hover without activating an item. */
  function paint(): void {
    for (const [i, row] of rows.entries()) {
      row.content = `${i === index ? ">" : " "} ${options.items[i]}`;
      row.fg = i === index ? theme.accent : i === hovered ? theme.textStrong : theme.text;
      row.bg = i === index ? theme.surfaceHigh : theme.surface;
    }
  }

  /** Clamps the selection and keeps it inside the scroll viewport. */
  function highlight(next: number): void {
    if (!rows.length || !Number.isFinite(next)) return;
    index = Math.max(0, Math.min(rows.length - 1, Math.trunc(next)));
    paint();
    box.scrollChildIntoView(rows[index]!);
  }

  /** Selects a display index and reports it without activating the row. */
  function select(next: number): void {
    if (!rows.length || !Number.isFinite(next)) return;
    highlight(next);
    options.onSelect?.(index);
  }

  function move(delta: number): void {
    highlight(index + delta);
  }

  function handleKeyPress(key: KeyEvent): boolean {
    if (key.name === "up" || key.name === "k") {
      move(-1);
      return true;
    }
    if (key.name === "down" || key.name === "j") {
      move(1);
      return true;
    }
    if (key.name === "return" || key.name === "enter") {
      select(index);
      return true;
    }
    return false;
  }

  box.handleKeyPress = handleKeyPress;
  highlight(index);
  card.handleKeyPress = handleKeyPress;
  return { box: card, select, selected: () => index, move };
}

/** A sortable table column, measured in terminal cells. */
export interface TableColumn {
  key: string;
  title: string;
  width?: number;
  align?: "left" | "right" | "center";
}

/** Builds a sortable, scrollable table with selection and activation. */
export function table(
  renderer: CliRenderer,
  theme: Theme,
  options: {
    columns: TableColumn[];
    rows: Record<string, string>[];
    empty?: string;
    onSelect?: (index: number) => void;
    onActivate?: (index: number) => void;
  },
) {
  const box = new BoxRenderable(renderer, {
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 0,
  });
  const header = new BoxRenderable(renderer, {
    flexDirection: "row",
    height: 1,
    flexShrink: 0,
    paddingLeft: 2,
  });
  const body = new ScrollBoxRenderable(renderer, {
    flexGrow: 1,
    minHeight: 0,
    scrollY: true,
    scrollX: false,
    scrollAcceleration: new LinearScrollAccel(),
    scrollbarOptions: { trackOptions: { backgroundColor: theme.border, foregroundColor: theme.textDim } },
  });
  box.add(header);
  box.add(body);
  let rows = [...options.rows];
  let index = rows.length ? 0 : -1;
  let lastClicked = -1;
  let sortKey = "";
  let descending = false;
  let rowNodes: BoxRenderable[] = [];
  const headers: TextRenderable[] = [];
  /** Creates a cell whose width is assigned from the shared column measurements. */
  function cell(text: string, column: TableColumn): TextRenderable {
    return new TextRenderable(renderer, {
      content: text,
      width: 1,
      flexShrink: 0,
      height: 1,
      wrapMode: "none",
      selectable: false,
      fg: theme.text,
    });
  }
  /** Measures once per column and applies identical widths to headers and rows. */
  function layoutColumns(): void {
    const available = Math.max(0, Math.min(header.width, body.viewport.width || header.width));
    const widths = options.columns.map((column) => column.width ?? Math.max(
      Bun.stringWidth(column.title) + 2,
      ...rows.map((row) => Bun.stringWidth(row[column.key] ?? "")),
    ));
    const gap = controlSpacing.gap;
    const budget = Math.max(0, available - 2 - gap * (widths.length - 1));
    while (widths.reduce((sum, width) => sum + width, 0) > budget) {
      const candidates = widths.map((width, i) => options.columns[i]!.width === undefined ? width : 0);
      const largest = Math.max(...candidates) > 1 ? candidates.indexOf(Math.max(...candidates)) : widths.indexOf(Math.max(...widths));
      widths[largest] = Math.max(0, widths[largest]! - 1);
    }
    /** Aligns a clipped string without depending on intrinsic text layout. */
    function place(node: TextRenderable, text: string, i: number): void {
      const column = options.columns[i]!;
      const width = widths[i]!;
      const clipped = fitText(text, width);
      const padding = Math.max(0, width - Bun.stringWidth(clipped));
      const left = column.align === "right" ? padding : column.align === "center" ? Math.floor(padding / 2) : 0;
      node.width = width + (i < widths.length - 1 ? gap : 0);
      node.content = " ".repeat(left) + clipped + " ".repeat(padding - left);
    }
    headers.forEach((node, i) => {
      const column = options.columns[i]!;
      place(node, column.title.toUpperCase() + (column.key === sortKey ? (descending ? " ▼" : " ▲") : ""), i);
    });
    rowNodes.forEach((node, row) => node.getChildren().forEach((child, i) => {
      if (i > 0) place(child as TextRenderable, rows[row]?.[options.columns[i - 1]!.key] ?? "", i - 1);
    }));
  }
  header.onSizeChange = layoutColumns;
  body.onSizeChange = layoutColumns;
  /** Applies the selected-row colors to every cell in the table. */
  function paint(): void {
    for (const [i, node] of rowNodes.entries()) {
      (node.getChildren()[0] as TextRenderable).content = i === index ? "› " : "  ";
      node.backgroundColor = theme.surface;
      for (const child of node.getChildren()) {
        (child as TextRenderable).fg = i === index ? theme.accent : theme.text;
        (child as TextRenderable).attributes = i === index ? TextAttributes.BOLD : TextAttributes.NONE;
      }
    }
  }
  /** Reports a clamped display index without activating the selected row. */
  function select(next: number): void {
    if (!rows.length || !Number.isFinite(next)) return;
    index = Math.max(0, Math.min(rows.length - 1, Math.trunc(next)));
    paint();
    body.scrollChildIntoView(rowNodes[index]!);
    options.onSelect?.(index);
  }
  /** Replaces table rows after sorting or data replacement, retaining selection. */
  function rebuild(): void {
    for (const node of body.getChildren()) {
      body.remove(node);
      node.destroyRecursively();
    }
    function createRow(row: Record<string, string>, i: number): BoxRenderable {
      const node = new BoxRenderable(renderer, {
        flexDirection: "row",
        height: 1,
        flexShrink: 0,
      });
      node.add(new TextRenderable(renderer, { content: "  ", width: 2, height: 1, flexShrink: 0 }));
      for (const column of options.columns) node.add(cell(row[column.key] ?? "", column));
      /** A second click on the same selected row activates it. */
      function clickRow(): void {
        const activate = lastClicked === i && index === i;
        select(i);
        lastClicked = i;
        if (activate) options.onActivate?.(i);
      }

      function updateHover(inside: boolean): void {
        node.backgroundColor = inside || index === i ? theme.surfaceHigh : theme.surface;
      }

      clickable(renderer, node, {
        onClick: clickRow,
        onHover: updateHover,
      });
      body.add(node);
      return node;
    }

    rowNodes = rows.map(createRow);
    if (!rows.length) body.add(dim(renderer, theme, options.empty ?? "No items"));
    paint();
    layoutColumns();
  }
  /** Toggles sort direction and preserves selection by row identity. */
  function sortBy(key: string): void {
    const selectedRow = rows[index];
    lastClicked = -1;
    descending = sortKey === key ? !descending : false;
    sortKey = key;
    rows.sort(
      (a, b) => (a[key] ?? "").localeCompare(b[key] ?? "") * (descending ? -1 : 1),
    );
    // Keep the caller's array in display order so callback indices stay meaningful.
    options.rows.splice(0, options.rows.length, ...rows);
    index = selectedRow ? rows.indexOf(selectedRow) : -1;
    for (const [i, node] of headers.entries()) {
      const col = options.columns[i]!;
      node.content = `${col.title}${col.key === key ? (descending ? " ▼" : " ▲") : ""}`;
    }
    rebuild();
    if (index >= 0) options.onSelect?.(index);
  }
  for (const column of options.columns) {
    const node = cell(column.title, column);
    node.fg = theme.textDim;
    node.attributes = TextAttributes.BOLD;
    clickable(renderer, node, {
      onClick: () => sortBy(column.key),
      onHover: (inside) => {
        node.fg = inside ? theme.accent : theme.textDim;
      },
    });
    headers.push(node);
    header.add(node);
  }
  function move(delta: number): void {
    select(index + delta);
  }

  function handleKeyPress(key: KeyEvent): boolean {
    switch (key.name) {
      case "up":
      case "k":
        move(-1);
        return true;
      case "down":
      case "j":
        move(1);
        return true;
      case "home":
        select(0);
        return true;
      case "end":
        select(rows.length - 1);
        return true;
      case "pageup":
        move(-Math.max(1, body.height - 1));
        return true;
      case "pagedown":
        move(Math.max(1, body.height - 1));
        return true;
      case "return":
      case "enter":
        if (index >= 0) options.onActivate?.(index);
        return true;
      default:
        return false;
    }
  }

  body.handleKeyPress = handleKeyPress;
  box.handleKeyPress = (key) => body.handleKeyPress(key);
  rebuild();
  return {
    box,
    move,
    select,
    selected: () => index,
    sortBy,
    /** Replaces data without retaining a stale double-click activation. */
    setRows(next: Record<string, string>[]) {
      lastClicked = -1;
      rows = [...next];
      options.rows = next;
      index = rows.length ? Math.max(0, Math.min(index, rows.length - 1)) : -1;
      rebuild();
    },
  };
}

/** Builds a centered loading, empty or error message with an optional action. */
export function stateView(
  renderer: CliRenderer,
  theme: Theme,
  icons: IconSet,
  options: {
    kind: "loading" | "empty" | "error";
    title: string;
    message?: string;
    action?: { key: string; label: string; onPress: () => void };
  },
): BoxRenderable {
  const box = new BoxRenderable(renderer, {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  });
  const icon =
    icons[
      options.kind === "error" ? "error" : options.kind === "loading" ? "refresh" : "list"
    ];
  box.add(
    new TextRenderable(renderer, {
      content: `${icon} ${options.title}`,
      fg: options.kind === "error" ? theme.error : theme.textStrong,
    }),
  );
  if (options.message) box.add(dim(renderer, theme, options.message));
  if (options.action) box.add(button(renderer, theme, options.action));
  return box;
}

/** Creates an explicitly started spinner and releases its timer on destruction. */
export function spinner(
  renderer: CliRenderer,
  theme: Theme,
  options: { label: string; ascii?: boolean },
) {
  const frames =
    (options.ascii ?? currentIcons() === iconSets.ascii)
      ? ["|", "/", "-", "\\"]
      : ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let label = options.label;
  let frame = 0;
  let timer: ReturnType<typeof setInterval> | undefined;
  const box = new TextRenderable(renderer, {
    content: `${frames[0]} ${label}`,
    fg: theme.accent,
    height: 1,
  });
  function paint(): void {
    box.content = `${frames[frame]} ${label}`;
  }
  function stop(): void {
    if (timer) clearInterval(timer);
    timer = undefined;
  }
  /** Releases the interval on node or renderer destruction. */
  function cleanup(): void {
    stop();
    renderer.off("destroy", cleanup);
  }
  function advanceFrame(): void {
    frame = (frame + 1) % frames.length;
    paint();
  }

  renderer.once("destroy", cleanup);
  box.once("destroyed", cleanup);
  return {
    box,
    start() {
      if (!timer && !box.isDestroyed && !renderer.isDestroyed)
        timer = setInterval(advanceFrame, 80);
    },
    stop,
    setLabel(text: string) {
      label = text;
      paint();
    },
  };
}

/** Creates a clamped progress indicator. */
export function progressBar(
  renderer: CliRenderer,
  theme: Theme,
  options: { label: string; value: number; width?: number },
) {
  let label = options.label;
  const box = new TextRenderable(renderer, { fg: theme.accent, height: 1 });
  /** Clamps progress to the supported range before drawing filled cells. */
  function set(value: number, text?: string): void {
    if (text !== undefined) label = text;
    const clamped = Number.isNaN(value) ? 0 : Math.max(0, Math.min(1, value));
    const width = Math.max(1, Math.floor(options.width ?? 20));
    const filled = Math.round(clamped * width);
    box.content = `${label} [${"█".repeat(filled)}${"░".repeat(width - filled)}] ${Math.round(clamped * 100)}%`;
  }

  set(options.value);
  return { box, set };
}

/** Creates an OSC 8 hyperlink; a plain click copies its URL through OSC 52. */
export function link(
  renderer: CliRenderer,
  theme: Theme,
  options: {
    url: string;
    text?: string;
    notify?: (message: string, tone?: "ok" | "warn") => void;
  },
): TextRenderable {
  const box = new TextRenderable(renderer, {
    content: new StyledText([styledLink(options.url)(options.text ?? options.url)]),
    fg: theme.accentSecondary,
    attributes: TextAttributes.UNDERLINE,
  });
  /** Copies the public URL through the terminal's optional clipboard protocol. */
  function copyUrl(): void {
    let copied = false;
    try {
      copied = renderer.copyToClipboardOSC52(options.url);
    } catch (error) {
      options.notify?.(
        error instanceof Error ? error.message : "Clipboard unavailable",
        "warn",
      );
      return;
    }
    options.notify?.(
      copied ? "URL copied" : "Clipboard unavailable",
      copied ? "ok" : "warn",
    );
  }

  function updateHover(inside: boolean): void {
    box.fg = inside ? theme.accent : theme.accentSecondary;
  }

  clickable(renderer, box, {
    onClick: copyUrl,
    onHover: updateHover,
  });
  return box;
}
