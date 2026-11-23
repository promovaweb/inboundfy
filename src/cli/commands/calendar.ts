/**
 * `calendar`: monthly editorial calendar (`calendario/AAAA-MM.md`).
 */
import { manifest } from "../../app/manifest.ts";
import { ExitCode } from "../../app/exit-codes.ts";
import { addToCalendar, listCalendar } from "../../core/calendar.ts";
import { pad, projectRoot } from "../project.ts";
import type { Command } from "../registry.ts";

const bin = manifest.bin;

export const calendarCommand: Command = {
  name: "calendar",
  description: "Schedule pieces in the monthly editorial calendar.",
  subcommands: [
    {
      name: "add",
      description: "Add a piece to calendario/YYYY-MM.md on a date (idempotent).",
      arguments: [
        { name: "date", description: "Date in YYYY-MM-DD.", required: true },
        { name: "id", description: "Content piece id.", required: true },
      ],
      exitCodes: [ExitCode.NOT_FOUND],
      examples: [`${bin} calendar add 2026-12-01 12`],
      run: async (ctx) => {
        const record = await addToCalendar(await projectRoot(ctx), ctx.args[0] as string, ctx.args[1] as string);
        return { data: record, text: `Piece ${record.contentId} scheduled on ${record.date} in ${record.path}.` };
      },
    },
    {
      name: "list",
      aliases: ["ls"],
      description: "List the whole calendar or one month.",
      arguments: [{ name: "month", description: "Month in YYYY-MM." }],
      examples: [`${bin} calendar list`, `${bin} calendar list 2026-12 --json`],
      run: async (ctx) => {
        const items = await listCalendar(await projectRoot(ctx), ctx.args[0]);
        return { data: items, text: () => (items.length ? items.map((i) => `${i.date}  ${i.contentId}  ${pad(i.channel, 10)} ${i.status}`).join("\n") : "Calendar is empty.") };
      },
    },
  ],
};
