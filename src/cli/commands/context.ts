/**
 * `context` (scan, check, ready) and `project sync`.
 *
 * `context check` reports the minimum fields that release the production
 * skills; `context ready --yes` records that the setup interview finished,
 * and refuses while a required field is still empty.
 */
import { manifest } from "../../app/manifest.ts";
import { ExitCode } from "../../app/exit-codes.ts";
import { error } from "../../app/errors.ts";
import { validateMinimumContext } from "../../core/context.ts";
import { markContextReady, refreshContextSources } from "../../core/installer.ts";
import { ensureChannelDirectories, readSelectedChannels } from "../../core/project.ts";
import { color } from "../format.ts";
import { projectRoot } from "../project.ts";
import type { Command } from "../registry.ts";

const bin = manifest.bin;

const scan: Command = {
  name: "scan",
  description: "Refresh .inboundfy/fontes-candidatas.json with the local Markdown sources (upper-case files and brand/).",
  exitCodes: [ExitCode.NOT_INSTALLED],
  examples: [`${bin} context scan`],
  run: async (ctx) => {
    const sources = await refreshContextSources(await projectRoot(ctx));
    return { data: { sources }, text: `${sources} source(s) recorded in .inboundfy/fontes-candidatas.json.` };
  },
};

const check: Command = {
  name: "check",
  description: "Check the minimum context (company, voice, personas, strategy) without changing files.",
  examples: [`${bin} context check`, `${bin} context check --json`],
  exitCodes: [ExitCode.INTEGRITY],
  run: async (ctx) => {
    const readiness = await validateMinimumContext(await projectRoot(ctx));
    return {
      data: readiness,
      text: () => readiness.items.map((item) => `${item.ready ? color.ok("✓") : color.error("✗")} ${item.file}: ${item.label}`).join("\n"),
      code: readiness.ready ? ExitCode.SUCCESS : ExitCode.INTEGRITY,
    };
  },
};

const ready: Command = {
  name: "ready",
  description: "Mark the inboundfy-setup interview as done; requires --yes and a complete minimum context.",
  options: [{ name: "--yes", aliases: ["-y"], description: "Confirm after inboundfy-setup filled and reviewed the minimum context." }],
  exitCodes: [ExitCode.NOT_INSTALLED, ExitCode.CONFLICT],
  examples: [`${bin} context ready --yes`],
  run: async (ctx) => {
    if (ctx.options.yes !== true) throw error.usage("Use --yes only after inboundfy-setup filled and reviewed the minimum context.");
    const state = await markContextReady(await projectRoot(ctx));
    return { data: { setupStatus: state.setupStatus }, text: "Initial setup marked as done." };
  },
};

export const contextCommand: Command = {
  name: "context",
  description: "Discover local sources and track the initial context setup.",
  subcommands: [scan, check, ready],
};

export const projectCommand: Command = {
  name: "project",
  description: "Maintain the data layout of the project.",
  subcommands: [
    {
      name: "sync",
      description: "Create canais/<channel>/ for every channel checked in .inboundfy/estrategia.md.",
      examples: [`${bin} project sync`],
      run: async (ctx) => {
        const root = await projectRoot(ctx);
        const channels = await readSelectedChannels(root);
        await ensureChannelDirectories(root, channels);
        return { data: { channels, directories: channels.map((c) => `canais/${c}`) }, text: `Channels ready: ${channels.join(", ") || "none"}.` };
      },
    },
  ],
};
