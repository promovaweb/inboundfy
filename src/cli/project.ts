/**
 * Helpers shared by the project commands.
 *
 * Every project command accepts `--project <dir>` (also `-C`), falling back
 * to `INBOUNDFY_PROJECT` and then to the current directory.
 */
import { manifest } from "../app/manifest.ts";
import { resolveProjectRoot } from "../core/io.ts";
import type { Context, OptionDefinition } from "./registry.ts";

/** Recursive option declared on the root command. */
export const PROJECT_OPTION: OptionDefinition = {
  name: "--project",
  aliases: ["-C"],
  argument: { name: "dir" },
  description: `Project root (default: ${manifest.envPrefix}_PROJECT or the current directory).`,
  recursive: true,
};

/** Resolves the project root of a command. */
export function projectRoot(ctx: Pick<Context, "options">): Promise<string> {
  const option = typeof ctx.options.project === "string" ? ctx.options.project : undefined;
  return resolveProjectRoot(option ?? process.env[`${manifest.envPrefix}_PROJECT`] ?? process.cwd());
}

/** Splits a comma-separated option into trimmed, non-empty values. */
export function listOption(value: string | boolean | undefined): string[] {
  if (typeof value !== "string") return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

/** String value of an option, or undefined. */
export function stringOption(value: string | boolean | undefined): string | undefined {
  return typeof value === "string" ? value : undefined;
}

/** Fixed-width cell for text tables. */
export function pad(value: string, width: number): string {
  return value.length >= width ? `${value.slice(0, Math.max(0, width - 1))}…` : value.padEnd(width);
}
