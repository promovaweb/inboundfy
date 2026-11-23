/**
 * `content`: channel pieces in `canais/<channel>/` and their pipeline.
 *
 * `create` opens a piece as `rascunho`; `status` moves it through
 * rascunho → revisao → aprovado → agendado → publicado (or arquivado);
 * `digest` prints the SHA-256 that the validation report must quote.
 */
import { manifest } from "../../app/manifest.ts";
import { ExitCode } from "../../app/exit-codes.ts";
import { createContent, listContent, showContent } from "../../core/content.ts";
import { getContentDigest, PIPELINE_STATES, updateContentStatus } from "../../core/pipeline.ts";
import { CHANNELS } from "../../core/project.ts";
import { color } from "../format.ts";
import { listOption, pad, projectRoot, stringOption } from "../project.ts";
import type { Command } from "../registry.ts";

const bin = manifest.bin;
const idArgument = { name: "id", description: "Content piece id (12 or 0012).", required: true };

const create: Command = {
  name: "create",
  description: "Create a piece folder with README and frontmatter in canais/<channel>/.",
  arguments: [
    { name: "channel", description: "Channel checked in .inboundfy/estrategia.md.", required: true, values: CHANNELS },
    { name: "title", description: "Piece title.", required: true },
  ],
  options: [
    { name: "--persona", argument: { name: "id" }, repeatable: true, description: "Persona the piece serves; repeat or separate with commas. At least one." },
    { name: "--archive", argument: { name: "id" }, repeatable: true, description: "Archive item used as source; repeat or separate with commas." },
  ],
  exitCodes: [ExitCode.NOT_FOUND, ExitCode.CONFLICT],
  examples: [`${bin} content create blog "Why inbound beats ads" --persona founder --archive 7`],
  run: async (ctx) => {
    const record = await createContent(await projectRoot(ctx), {
      channel: ctx.args[0] as string,
      title: ctx.args[1] as string,
      personas: listOption(ctx.options.persona),
      archive: listOption(ctx.options.archive),
    });
    return { data: record, text: `Content piece ${record.id} created at ${record.directory}.` };
  },
};

const list: Command = {
  name: "list",
  aliases: ["ls"],
  description: "List content pieces, optionally filtered by channel or status.",
  options: [
    { name: "--channel", argument: { name: "channel", values: CHANNELS }, description: "Only pieces of this channel." },
    { name: "--status", argument: { name: "status", values: PIPELINE_STATES }, description: "Only pieces in this status." },
  ],
  examples: [`${bin} content list --channel blog`, `${bin} content list --status revisao --json`],
  run: async (ctx) => {
    const items = await listContent(await projectRoot(ctx), { channel: stringOption(ctx.options.channel), status: stringOption(ctx.options.status) });
    return {
      data: items,
      text: () => (items.length ? items.map((i) => `${i.id}  ${pad(i.channel, 10)} ${pad(i.status, 10)} ${pad(i.createdAt.slice(0, 10), 11)} ${i.title}`).join("\n") : "No content pieces."),
    };
  },
};

const show: Command = {
  name: "show",
  description: "Show one piece with its personas, archive links and publication data.",
  arguments: [idArgument],
  exitCodes: [ExitCode.NOT_FOUND],
  examples: [`${bin} content show 12`],
  run: async (ctx) => {
    const p = await showContent(await projectRoot(ctx), ctx.args[0] as string);
    return {
      data: p,
      text: () =>
        [
          color.strong(`${p.id} · ${p.title}`),
          `Channel: ${p.channel} · Status: ${p.status} · Created: ${p.createdAt.slice(0, 10)}`,
          `Personas: ${p.personas.join(", ") || "-"} · Archive: ${p.acervo.join(", ") || "-"}`,
          `Folder: ${p.directory}`,
          ...(p.auditReport ? [`Validation report: ${p.auditReport}`] : []),
          ...(p.url ? [`Published: ${p.publishedAt ?? "?"} · ${p.url}`] : []),
        ].join("\n"),
    };
  },
};

const status: Command = {
  name: "status",
  description: "Move a piece to another pipeline status, updating README, indices and calendar.",
  longDescription:
    "Allowed moves: rascunho → revisao|arquivado; revisao → rascunho|aprovado|arquivado; aprovado → revisao|agendado|publicado|arquivado; agendado → revisao|aprovado|publicado|arquivado; publicado → arquivado. Approving from revisao needs --audit-report; publicado needs --url and --published-at.",
  arguments: [idArgument, { name: "status", description: "New status.", required: true, values: PIPELINE_STATES }],
  options: [
    { name: "--audit-report", argument: { name: "path" }, description: "Approved validation report bound to the piece (required to approve from revisao)." },
    { name: "--url", argument: { name: "url" }, description: "Publication URL (HTTP or HTTPS)." },
    { name: "--published-at", argument: { name: "date" }, description: "Publication date in YYYY-MM-DD." },
  ],
  exitCodes: [ExitCode.NOT_FOUND, ExitCode.CONFLICT],
  examples: [`${bin} content status 12 revisao`, `${bin} content status 12 aprovado --audit-report canais/blog/0012-.../validacao.md`, `${bin} content status 12 publicado --url https://example.com/post --published-at 2026-11-23`],
  run: async (ctx) => {
    const audit = stringOption(ctx.options["audit-report"]);
    const url = stringOption(ctx.options.url);
    const publishedAt = stringOption(ctx.options["published-at"]);
    const record = await updateContentStatus(await projectRoot(ctx), ctx.args[0] as string, {
      status: ctx.args[1] as string,
      ...(audit ? { auditReport: audit } : {}),
      ...(url ? { url } : {}),
      ...(publishedAt ? { publishedAt } : {}),
    });
    return { data: record, text: `Content piece ${record.id} is now ${record.status}.` };
  },
};

const digest: Command = {
  name: "digest",
  description: "Print the SHA-256 of the piece that the validation report must quote.",
  arguments: [idArgument],
  exitCodes: [ExitCode.NOT_FOUND],
  examples: [`${bin} content digest 12`],
  run: async (ctx) => {
    const result = await getContentDigest(await projectRoot(ctx), ctx.args[0] as string);
    return { data: result, text: `Piece ${result.id}: ${result.asset}\nSHA-256: ${result.sha256}` };
  },
};

export const contentCommand: Command = {
  name: "content",
  description: "Create and move channel pieces through the editorial pipeline.",
  subcommands: [create, list, show, status, digest],
};
