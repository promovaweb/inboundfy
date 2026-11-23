/**
 * Prompts: conversation templates that help the agent operate Inboundfy.
 *
 * `operate` is the generic guidance inherited from the starter kit;
 * `ingest_material`, `produce_piece` and `editorial_review` follow the
 * master cycle of the framework (archive → editorial base → piece →
 * validation → calendar) using the project tools and the skills.
 */
import { z } from "zod";
import { manifest } from "../app/manifest.ts";
import type { Registrar } from "./server.ts";

const text = (value: string) => ({ messages: [{ role: "user" as const, content: { type: "text" as const, text: value } }] });

export function registerPrompts({ server, catalog }: Registrar): void {
  catalog.prompts.push({ name: "operate", description: "Guides the agent to read the documentation and run a task through the tools or the CLI." });
  server.registerPrompt(
    "operate",
    {
      title: `Operate ${manifest.title}`,
      description: "Builds an instruction for the agent to read the embedded documentation and complete a task.",
      argsSchema: { task: z.string().describe("What the user wants to do with the binary.") },
    },
    ({ task }) =>
      text(
        `You will operate "${manifest.bin}" (v${manifest.version}). First call the "skill" tool with topic "cli" or "mcp" to learn the commands, tools and exit codes. ` +
          `Prefer the MCP tools (project_stats, archive_*, content_*, calendar_*); when you use the CLI, always pass --json and handle the exit code ` +
          `(0 success, 2 usage, 6 not found, 10 not installed, 11 integrity, 12 conflict).\n\nTask: ${task}`,
      ),
  );

  catalog.prompts.push({ name: "ingest_material", description: "Registers raw material in the archive and runs the archive skills in order." });
  server.registerPrompt(
    "ingest_material",
    {
      title: "Ingest material into the archive",
      description: "Registers a transcript, note or article with archive_add and walks the archive stages with the Inboundfy skills.",
      argsSchema: { title: z.string().describe("Title of the material."), source: z.string().optional().describe("URL or description of the origin.") },
    },
    ({ title, source }) =>
      text(
        `Register the material the user pastes next as an archive item titled "${title}"${source ? ` with source "${source}"` : ""} using the archive_add tool (text verbatim, no edits). ` +
          `Then follow the archive cycle with the skills inboundfy-processar-acervo, inboundfy-extrair-faq, inboundfy-pesquisa-acervo, inboundfy-base-editorial and inboundfy-acervo, ` +
          `running inboundfy-anti-slop at each milestone. After each stage call archive_show to confirm the file left the pending state, and finish by listing the channel possibilities in estrategia.md.`,
      ),
  );

  catalog.prompts.push({ name: "produce_piece", description: "Turns an archive item into a channel piece and moves it to review." });
  server.registerPrompt(
    "produce_piece",
    {
      title: "Produce a channel piece",
      description: "Creates a piece from archive items with content_create, writes it with the channel skill and prepares the validation.",
      argsSchema: {
        channel: z.string().describe("Channel: blog, email, linkedin, instagram, substack or youtube."),
        archive: z.string().describe("Archive item ids, comma-separated."),
        persona: z.string().describe("Persona the piece serves."),
      },
    },
    ({ channel, archive, persona }) =>
      text(
        `Read archive items ${archive} with archive_show and their base-editorial.md. Confirm direction with the user (three options, recommended first) before writing. ` +
          `Create the piece with content_create (channel ${channel}, persona ${persona}, archive ${archive}), write it with the inboundfy-especialista-${channel} skill, ` +
          `run inboundfy-anti-slop and inboundfy-validador-${channel}, then move it to revisao with content_set_status. Approval needs the report path and content_digest.`,
      ),
  );

  catalog.prompts.push({ name: "editorial_review", description: "Reads the project statistics and proposes the next editorial actions." });
  server.registerPrompt(
    "editorial_review",
    {
      title: "Editorial review",
      description: "Calls project_stats and turns the numbers into a short list of next actions.",
      argsSchema: { months: z.string().optional().describe("Months of history to consider (default 6).") },
    },
    ({ months }) =>
      text(
        `Call project_stats${months ? ` with months ${months}` : ""}. Report in Portuguese: archive items never used by a channel, pieces stuck in rascunho or revisao, ` +
          `overdue calendar entries, channels checked in the strategy without recent publications and the context items still missing. ` +
          `End with at most five next actions, each naming the tool or skill to run.`,
      ),
  );
}
