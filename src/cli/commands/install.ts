/**
 * `install`, `update`, `repair` and `agent install`.
 *
 * All four run the same installer with a different mode. `--dry-run` prints
 * the plan without writing. The text output lists only the actions that
 * change something; `--json` returns every action and the new state.
 */
import { manifest } from "../../app/manifest.ts";
import { ExitCode } from "../../app/exit-codes.ts";
import { executeInstallation } from "../../core/installer.ts";
import type { AgentKind, OperationMode, OperationResult } from "../../core/types.ts";
import { color } from "../format.ts";
import { projectRoot, stringOption } from "../project.ts";
import type { Command, OptionDefinition } from "../registry.ts";

const commonOptions: OptionDefinition[] = [
  { name: "--dry-run", description: "Show the planned changes without writing." },
  { name: "--yes", aliases: ["-y"], description: "Accept the defaults without questions (also the behavior off a TTY)." },
  { name: "--force", description: "Back up files that do not belong to a known installation and continue." },
];

const agentOptions: OptionDefinition[] = [
  { name: "--agent", argument: { name: "agent", values: ["codex", "claude", "agents"] }, description: "Agent that receives the skills (.codex/skills, .claude/skills or .agents/skills)." },
  { name: "--skills-dir", argument: { name: "dir" }, description: "Skills directory relative to the project, overriding --agent." },
  { name: "--instruction-file", argument: { name: "file", values: ["AGENTS.md", "CLAUDE.md", "none"] }, description: "File that receives the delimited Inboundfy block." },
];

/** Text rendering shared with the TUI log. */
export function renderOperation(result: OperationResult): string {
  const label = result.dryRun ? "Dry run" : "Done";
  const lines = [`${color.strong(label)}: ${result.mode} of Inboundfy ${result.version}.`];
  const relevant = result.actions.filter((a) => a.action !== "unchanged");
  if (!relevant.length) lines.push("No changes needed.");
  for (const a of relevant) lines.push(`${a.action.padEnd(13)} ${a.path}${a.detail ? color.dim(` (${a.detail})`) : ""}`);
  const unchanged = result.actions.length - relevant.length;
  if (unchanged) lines.push(color.dim(`${unchanged} file(s) unchanged.`));
  return lines.join("\n");
}

function operation(name: string, mode: OperationMode, description: string, withAgent: boolean, examples: string[]): Command {
  return {
    name,
    description,
    options: [...commonOptions, ...(withAgent ? agentOptions : [])],
    exitCodes: [ExitCode.NOT_INSTALLED, ExitCode.CONFLICT, ExitCode.PERMISSION],
    examples,
    run: async (ctx) => {
      const root = await projectRoot(ctx);
      const result = await executeInstallation({
        projectRoot: root,
        mode,
        dryRun: ctx.options["dry-run"] === true,
        yes: ctx.options.yes === true || ctx.json,
        force: ctx.options.force === true,
        ...(stringOption(ctx.options.agent) ? { agent: stringOption(ctx.options.agent) as AgentKind } : {}),
        ...(stringOption(ctx.options["skills-dir"]) ? { skillsDirectory: stringOption(ctx.options["skills-dir"]) } : {}),
        ...(stringOption(ctx.options["instruction-file"]) ? { instructionFile: stringOption(ctx.options["instruction-file"]) as "AGENTS.md" | "CLAUDE.md" | "none" } : {}),
      });
      return { data: result, text: () => renderOperation(result) };
    },
  };
}

const bin = manifest.bin;

export const installCommand = operation("install", "install", "Install the framework, the skills and the project data folders.", true, [
  `${bin} install`,
  `${bin} install --agent claude --yes`,
  `${bin} install --dry-run --json`,
]);

export const updateCommand = operation("update", "update", "Apply the framework version shipped by this binary to the project.", false, [`${bin} update`, `${bin} update --dry-run`]);

export const repairCommand = operation("repair", "repair", "Restore managed files that are missing or changed, backing up the changed ones.", false, [`${bin} repair`]);

export const agentCommand: Command = {
  name: "agent",
  description: "Manage the agent skills of the project.",
  subcommands: [operation("install", "agent-install", "Install or update only the skills.", true, [`${bin} agent install --agent codex`])],
};
