/**
 * Mouse behavior shared by every clickable element of the TUI.
 *
 * `clickable` wires a renderable for the mouse: a left click runs the
 * handler and stops propagation (a button inside a clickable panel runs
 * once), hover calls `onHover(true|false)` and asks the terminal for the
 * hand pointer (OSC 22) while the pointer is over it. Right click and wheel
 * never run the handler. Terminals without pointer shapes ignore the
 * request, so the call is safe everywhere.
 */
import type { CliRenderer, MouseEvent, Renderable } from "@opentui/core";

export interface ClickableOptions {
  /** Runs on a left click. */
  onClick: (event: MouseEvent) => void;
  /** Runs when the pointer enters (`true`) or leaves (`false`). */
  onHover?: (inside: boolean) => void;
}

/** Sets the pointer shape, ignoring terminals or test renderers that reject it. */
function pointer(renderer: CliRenderer, style: "pointer" | "default"): void {
  try {
    renderer.setMousePointer(style);
  } catch {
    // Pointer shapes are optional.
  }
}

/** Makes `node` clickable with hover feedback and the hand pointer. Returns `node`. */
export function clickable<T extends Renderable>(renderer: CliRenderer, node: T, options: ClickableOptions): T {
  node.onMouseDown = (event: MouseEvent) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    options.onClick(event);
  };
  node.onMouseOver = () => {
    pointer(renderer, "pointer");
    options.onHover?.(true);
  };
  node.onMouseOut = () => {
    pointer(renderer, "default");
    options.onHover?.(false);
  };
  return node;
}
