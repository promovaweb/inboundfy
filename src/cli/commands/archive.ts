/**
 * `archive`: raw materials of the project (`acervo/`).
 *
 * `add` registers a numbered item from `--file`, `--text` or stdin;
 * `process` writes the normalized `processado.md`; `list`, `show` and
 * `status` read and adjust the index. Ids accept `7` or `0007`.
 */
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { manifest } from "../../app/manifest.ts";
import { ExitCode } from "../../app/exit-codes.ts";
import { error } from "../../app/errors.ts";
import { addArchive, ARCHIVE_STATUSES, listArchive, processArchive, setArchiveStatus, showArchive } from "../../core/archive.ts";
import { CHANNELS } from "../../core/project.ts";
import { color } from "../format.ts";
import { readStdin } from "../input.ts";
import { pad, projectRoot, stringOption } from "../project.ts";
import type { Command } from "../registry.ts";

const bin = manifest.bin;
const idArgument = { name: "id", description: "Archive item id (7 or 0007).", required: true };

const add: Command = {
  name: "add",
  description: "Register a numbered archive item, preserving the raw material in bruto.md.",
  arguments: [{ name: "title", description: "Item title, used in the folder slug.", required: true }],
  options: [
    { name: "--file", argument: { name: "path" }, description: "Local file with the material (relative to the project)." },
    { name: "--text", argument: { name: "text" }, description: "Material given inline." },
    { name: "--source", argument: { name: "source" }, description: "URL or description of the origin." },
  ],
  exitCodes: [ExitCode.NOT_FOUND],
  examples: [`${bin} archive add "Webinar transcript" --file notes/webinar.md --source https://example.com`, `cat idea.md | ${bin} archive add "Idea"`],
  run: async (ctx) => {
    const root = await projectRoot(ctx);
    const file = stringOption(ctx.options.file);
    let raw = stringOption(ctx.options.text) ?? "";
    if (file) {
      try {
        raw = await readFile(resolve(root, file), "utf8");
      } catch {
        throw error.notFound(`File not found: ${file}`, { path: file });
      }
    } else if (!raw && !process.stdin.isTTY) raw = await readStdin();
    if (!raw.trim()) throw error.usage("Provide --file, --text or send the material on stdin.");
    const source = stringOption(ctx.options.source);
    const record = await addArchive(root, { title: ctx.args[0] as string, raw, ...(source ? { source } : {}) });
    return { data: record, text: `Archive item ${record.id} created at ${record.directory}.` };
  },
};

const processCmd: Command = {
  name: "process",
  description: "Write processado.md from the normalized raw material and mark the item processado.",
  arguments: [idArgument],
  exitCodes: [ExitCode.NOT_FOUND],
  examples: [`${bin} archive process 7`],
  run: async (ctx) => {
    const record = await processArchive(await projectRoot(ctx), ctx.args[0] as string);
    return { data: record, text: `Archive item ${record.id} processed.` };
  },
};

const list: Command = {
  name: "list",
  aliases: ["ls"],
  description: "List archive items, optionally filtered by status or channel.",
  options: [
    { name: "--status", argument: { name: "status", values: ARCHIVE_STATUSES }, description: "Only items in this status." },
    { name: "--channel", argument: { name: "channel", values: CHANNELS }, description: "Only items already used by this channel." },
  ],
  examples: [`${bin} archive list`, `${bin} archive list --status recebido --json`],
  run: async (ctx) => {
    const items = await listArchive(await projectRoot(ctx), { status: stringOption(ctx.options.status), channel: stringOption(ctx.options.channel) });
    return {
      data: items,
      text: () =>
        items.length
          ? items.map((i) => `${i.id}  ${pad(i.status, 12)} ${pad(i.createdAt.slice(0, 10), 11)} ${pad(i.channels.join(",") || "-", 18)} ${i.title}`).join("\n")
          : "Archive is empty.",
    };
  },
};

const show: Command = {
  name: "show",
  description: "Show one item with the progress of its stage files and anti-slop audits.",
  arguments: [idArgument],
  exitCodes: [ExitCode.NOT_FOUND],
  examples: [`${bin} archive show 7`],
  run: async (ctx) => {
    const detail = await showArchive(await projectRoot(ctx), ctx.args[0] as string);
    const mark = (done: boolean) => (done ? color.ok("✓") : color.dim("·"));
    return {
      data: detail,
      text: () =>
        [
          `${color.strong(`${detail.record.id} · ${detail.record.title}`)}`,
          `Status: ${detail.record.status} · Created: ${detail.record.createdAt.slice(0, 10)} · Channels: ${detail.record.channels.join(", ") || "none"}`,
          `Folder: ${detail.record.directory}`,
          "",
          `Stages (${detail.stages.filter((s) => s.done).length}/${detail.stages.length})`,
          ...detail.stages.map((s) => `  ${mark(s.done)} ${s.file}  ${color.dim(s.label)}`),
          `Anti-slop audits (${detail.audits.filter((s) => s.done).length}/${detail.audits.length})`,
          ...detail.audits.map((s) => `  ${mark(s.done)} ${s.stage} ${s.label}`),
        ].join("\n"),
    };
  },
};

const status: Command = {
  name: "status",
  description: "Set the status of an archive item without touching its files.",
  arguments: [idArgument, { name: "status", description: "New status.", required: true, values: ARCHIVE_STATUSES }],
  exitCodes: [ExitCode.NOT_FOUND],
  examples: [`${bin} archive status 7 arquivado`],
  run: async (ctx) => {
    const record = await setArchiveStatus(await projectRoot(ctx), ctx.args[0] as string, ctx.args[1] as string);
    return { data: record, text: `Archive item ${record.id} is now ${record.status}.` };
  },
};

export const archiveCommand: Command = {
  name: "archive",
  description: "Receive and organize raw materials in acervo/.",
  subcommands: [add, processCmd, list, show, status],
};
