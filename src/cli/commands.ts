/**
 * Root of the command registry.
 *
 * Imports each command from `commands/` and builds the tree. The order
 * defines the display order in `--help` and in the OpenCLI description:
 * project setup first, then the daily data commands, then the commands
 * inherited from the Termfy starter kit.
 */
import { manifest } from "../app/manifest.ts";
import { aboutCommand } from "./commands/about.ts";
import { agentCommand, installCommand, repairCommand, updateCommand } from "./commands/install.ts";
import { archiveCommand } from "./commands/archive.ts";
import { calendarCommand } from "./commands/calendar.ts";
import { configCommand } from "./commands/config.ts";
import { contentCommand } from "./commands/content.ts";
import { contextCommand, projectCommand } from "./commands/context.ts";
import { credentialsCommand } from "./commands/credentials.ts";
import { doctorCommand, statusCommand } from "./commands/doctor.ts";
import { mcpCommand } from "./commands/mcp.ts";
import { createSkillCommand } from "./commands/skill.ts";
import { statsCommand } from "./commands/stats.ts";
import { tuiCommand } from "./commands/tui.ts";
import { createCompletionCommand } from "./commands/completion.ts";
import { PROJECT_OPTION } from "./project.ts";
import type { Command } from "./registry.ts";

export const root: Command = {
  name: manifest.bin,
  description: manifest.description,
  options: [PROJECT_OPTION],
  subcommands: [
    tuiCommand,
    installCommand,
    updateCommand,
    repairCommand,
    agentCommand,
    doctorCommand,
    statusCommand,
    statsCommand,
    contextCommand,
    projectCommand,
    archiveCommand,
    contentCommand,
    calendarCommand,
    mcpCommand,
    aboutCommand,
    configCommand,
    credentialsCommand,
    createSkillCommand(() => root),
    createCompletionCommand(() => root),
  ],
  examples: [
    `${manifest.bin}`,
    `${manifest.bin} install --agent claude`,
    `${manifest.bin} stats`,
    `${manifest.bin} archive add "Webinar notes" --file notes.md`,
    `${manifest.bin} content create blog "Title" --persona founder --archive 1`,
    `${manifest.bin} mcp`,
    `${manifest.bin} --skill`,
  ],
};
