/**
 * Project tools: the archive, the channel pieces, the calendar, the context
 * and the statistics of an Inboundfy project.
 *
 * Every tool accepts an optional `project` path; without it the server uses
 * `INBOUNDFY_PROJECT` or its own working directory. Reads are annotated
 * `readOnlyHint`; writes go through the same core functions as the CLI, so
 * the lock, the atomic writes and the pipeline rules apply unchanged.
 * Expected failures return `isError` with `{ code, name, message }`.
 */
import { z } from "zod";
import { AppError } from "../../app/errors.ts";
import { manifest } from "../../app/manifest.ts";
import { addArchive, ARCHIVE_STATUSES, listArchive, processArchive, setArchiveStatus, showArchive } from "../../core/archive.ts";
import { addToCalendar, listCalendar } from "../../core/calendar.ts";
import { createContent, listContent, showContent } from "../../core/content.ts";
import { validateMinimumContext } from "../../core/context.ts";
import { runProjectDoctor } from "../../core/doctor.ts";
import { refreshContextSources } from "../../core/installer.ts";
import { resolveProjectRoot } from "../../core/io.ts";
import { getContentDigest, PIPELINE_STATES, updateContentStatus } from "../../core/pipeline.ts";
import { CHANNELS } from "../../core/project.ts";
import { collectStats } from "../../core/stats.ts";
import type { Registrar } from "../server.ts";

const projectArg = { project: z.string().optional().describe(`Project root. Default: ${manifest.envPrefix}_PROJECT or the server working directory.`) };

/** Resolves the project root of a tool call. */
export function toolProject(project?: string): Promise<string> {
  return resolveProjectRoot(project ?? process.env[`${manifest.envPrefix}_PROJECT`] ?? process.cwd());
}

type Shape = Record<string, z.ZodType>;

/** Wraps a handler: JSON text + structured content, AppError as isError. */
function respond(run: () => Promise<Record<string, unknown>>) {
  return run().then(
    (data) => ({ content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }], structuredContent: data }),
    (e: unknown) => {
      const err = e instanceof AppError ? e.toJSON() : { code: 1, name: "GENERIC_ERROR", message: e instanceof Error ? e.message : String(e) };
      return { content: [{ type: "text" as const, text: JSON.stringify({ error: err }, null, 2) }], structuredContent: { error: err }, isError: true };
    },
  );
}

export function registerProjectTools({ server, catalog }: Registrar): void {
  const tool = <S extends Shape>(name: string, title: string, description: string, shape: S, readOnly: boolean, handler: (args: z.infer<z.ZodObject<S>> & { project?: string }) => Promise<Record<string, unknown>>) => {
    catalog.tools.push({ name, description });
    server.registerTool(
      name,
      { title, description, inputSchema: { ...shape, ...projectArg }, annotations: readOnly ? { readOnlyHint: true } : { readOnlyHint: false, destructiveHint: false, idempotentHint: false } },
      // The SDK infers the argument type from the schema; the cast keeps one generic helper for every tool.
      (async (args: z.infer<z.ZodObject<S>> & { project?: string }) => respond(() => handler(args))) as never,
    );
  };

  tool("project_stats", "Project statistics", "Numbers of the archive (by status, intake per month, stage and anti-slop progress), the channels (pieces by status, published, last publication) and the calendar (upcoming, overdue).", {
    months: z.number().int().min(1).max(24).optional().describe("Months in each time series (default 6)."),
    fast: z.boolean().optional().describe("Skip reading archive files; progress stays at 0."),
  }, true, async ({ project, months, fast }) => ({ ...(await collectStats(await toolProject(project), { ...(months ? { months } : {}), skipProgress: fast === true })) }));

  tool("project_doctor", "Project diagnostics", "Checks install state, manifest hashes, instruction block, data folders and context templates without writing.", {}, true, async ({ project }) => ({ ...(await runProjectDoctor(await toolProject(project))) }));

  tool("context_check", "Context readiness", "Reports which minimum context fields (company, voice, personas, strategy) are filled.", {}, true, async ({ project }) => ({ ...(await validateMinimumContext(await toolProject(project))) }));

  tool("context_scan", "Scan context sources", "Refreshes .inboundfy/fontes-candidatas.json with the upper-case Markdown files and brand/ of the project.", {}, false, async ({ project }) => ({ sources: await refreshContextSources(await toolProject(project)) }));

  tool("archive_list", "List archive items", "Archive items sorted by id, optionally filtered by status or channel.", {
    status: z.enum(ARCHIVE_STATUSES as [string, ...string[]]).optional(),
    channel: z.enum(CHANNELS as [string, ...string[]]).optional(),
  }, true, async ({ project, status, channel }) => ({ items: await listArchive(await toolProject(project), { ...(status ? { status } : {}), ...(channel ? { channel } : {}) }) }));

  tool("archive_show", "Show an archive item", "One archive item with the progress of its stage files and anti-slop audits A0 to A6.", { id: z.string().describe("Item id (7 or 0007).") }, true, async ({ project, id }) => ({ ...(await showArchive(await toolProject(project), id)) }));

  tool("archive_add", "Add an archive item", "Registers a numbered item in acervo/ and preserves the raw text in bruto.md without edits.", {
    title: z.string().min(1).describe("Item title."),
    text: z.string().min(1).describe("Raw material, preserved verbatim."),
    source: z.string().optional().describe("URL or description of the origin."),
  }, false, async ({ project, title, text, source }) => ({ ...(await addArchive(await toolProject(project), { title, raw: text, ...(source ? { source } : {}) })) }));

  tool("archive_process", "Process an archive item", "Writes processado.md from the normalized raw material and marks the item processado.", { id: z.string() }, false, async ({ project, id }) => ({ ...(await processArchive(await toolProject(project), id)) }));

  tool("archive_set_status", "Set archive status", "Sets the status of an archive item (recebido, processando, processado, arquivado).", {
    id: z.string(),
    status: z.enum(ARCHIVE_STATUSES as [string, ...string[]]),
  }, false, async ({ project, id, status }) => ({ ...(await setArchiveStatus(await toolProject(project), id, status)) }));

  tool("content_list", "List channel pieces", "Channel pieces sorted by id, optionally filtered by channel or pipeline status.", {
    channel: z.enum(CHANNELS as [string, ...string[]]).optional(),
    status: z.enum(PIPELINE_STATES as [string, ...string[]]).optional(),
  }, true, async ({ project, channel, status }) => ({ items: await listContent(await toolProject(project), { ...(channel ? { channel } : {}), ...(status ? { status } : {}) }) }));

  tool("content_show", "Show a channel piece", "One piece with personas, archive links, validation report and publication data.", { id: z.string() }, true, async ({ project, id }) => ({ ...(await showContent(await toolProject(project), id)) }));

  tool("content_create", "Create a channel piece", "Creates canais/<channel>/NNNN-date-slug/README.md as rascunho, linked to personas and archive items. The channel must be checked in .inboundfy/estrategia.md.", {
    channel: z.enum(CHANNELS as [string, ...string[]]),
    title: z.string().min(1),
    personas: z.array(z.string().min(1)).min(1).describe("Personas the piece serves."),
    archive: z.array(z.string()).optional().describe("Archive item ids used as sources."),
  }, false, async ({ project, channel, title, personas, archive }) => ({ ...(await createContent(await toolProject(project), { channel, title, personas, archive: archive ?? [] })) }));

  tool("content_set_status", "Move a piece in the pipeline", "Moves a piece: rascunho → revisao → aprovado (needs auditReport from revisao) → agendado → publicado (needs url and publishedAt), or arquivado. Updates README, indices and calendar.", {
    id: z.string(),
    status: z.enum(PIPELINE_STATES as [string, ...string[]]),
    auditReport: z.string().optional().describe("Project-relative path of the approved validation report."),
    url: z.string().optional().describe("Publication URL (HTTP or HTTPS)."),
    publishedAt: z.string().optional().describe("Publication date YYYY-MM-DD."),
  }, false, async ({ project, id, status, auditReport, url, publishedAt }) => ({
    ...(await updateContentStatus(await toolProject(project), id, { status, ...(auditReport ? { auditReport } : {}), ...(url ? { url } : {}), ...(publishedAt ? { publishedAt } : {}) })),
  }));

  tool("content_digest", "Digest of a piece", "SHA-256 of the piece README (ignoring pipeline fields) that the validation report must quote.", { id: z.string() }, true, async ({ project, id }) => ({ ...(await getContentDigest(await toolProject(project), id)) }));

  tool("calendar_list", "List the calendar", "Calendar entries of every month or of one YYYY-MM, sorted by date.", { month: z.string().optional().describe("Month YYYY-MM.") }, true, async ({ project, month }) => ({ items: await listCalendar(await toolProject(project), month) }));

  tool("calendar_add", "Schedule a piece", "Adds a piece to calendario/YYYY-MM.md on a date; idempotent for the same piece and date.", {
    date: z.string().describe("Date YYYY-MM-DD."),
    contentId: z.string().describe("Content piece id."),
  }, false, async ({ project, date, contentId }) => ({ ...(await addToCalendar(await toolProject(project), date, contentId)) }));
}
