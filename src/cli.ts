#!/usr/bin/env node

/**
 * Entrada pública do CLI que instala e mantém o framework Inboundfy.
 */

import { Command, Option } from "commander";
import { resolveProjectRoot } from "./io.js";
import {
  executeInstallation,
  markContextReady,
  refreshContextSources,
} from "./installer.js";
import { runDoctor } from "./doctor.js";
import { printDoctor, printOperation } from "./output.js";
import { CliError } from "./errors.js";
import { readPackageVersion } from "./payload.js";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { addAcervo, listAcervo, processAcervo } from "./acervo.js";
import { createContent } from "./content.js";
import { addToCalendar, listCalendar } from "./calendar.js";
import { PIPELINE_STATES, updateContentStatus } from "./pipeline.js";
import { ensureChannelDirectories, readSelectedChannels } from "./project-structure.js";
import type { AgentKind, ChannelId, OperationMode } from "./types.js";

interface GlobalOptions {
  project: string;
  json?: boolean;
}

const version = await readPackageVersion();
const program = new Command()
  .name("inboundfy")
  .description("Instala, atualiza e verifica o framework Inboundfy.")
  .version(version, "-V, --version", "exibe a versão")
  .option("--project <pasta>", "raiz do projeto", process.cwd())
  .option("--json", "imprime saída estruturada em JSON");

configureMutationCommand(
  program.command("install").description("instala o Inboundfy no projeto"),
  "install",
  true,
);
configureMutationCommand(
  program.command("update").description("aplica a versão deste CLI ao projeto"),
  "update",
);
configureMutationCommand(
  program.command("repair").description("restaura arquivos gerenciados divergentes"),
  "repair",
);

program
  .command("doctor")
  .description("executa um diagnóstico completo sem alterar arquivos")
  .option("--strict", "trata avisos como falha")
  .action(async function (this: Command, options: { strict?: boolean }) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const report = await runDoctor(root);
    printDoctor(report, { json: Boolean(globals.json) });
    if (!report.healthy || (options.strict && report.summary.warnings > 0)) {
      process.exitCode = 1;
    }
  });

program
  .command("status")
  .description("mostra versão e resumo da integridade")
  .action(async function (this: Command) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    printDoctor(await runDoctor(root), {
      json: Boolean(globals.json),
      summaryOnly: true,
    });
  });

const agent = program.command("agent").description("gerencia skills de agentes");
configureMutationCommand(
  agent.command("install").description("instala ou atualiza somente as skills"),
  "agent-install",
  true,
);

const context = program
  .command("context")
  .description("mantém a descoberta e o estado do preenchimento inicial");

context
  .command("scan")
  .description("atualiza o inventário técnico das fontes locais")
  .action(async function (this: Command) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const count = await refreshContextSources(root);
    if (globals.json) {
      process.stdout.write(`${JSON.stringify({ sources: count }, null, 2)}\n`);
    } else {
      process.stdout.write(`${count} fonte(s) registrada(s).\n`);
    }
  });

const project = program
  .command("project")
  .description("mantém a estrutura de dados do projeto consumidor");

project
  .command("sync")
  .description("cria as pastas dos canais marcados na estratégia")
  .action(async function (this: Command) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const channels = await readSelectedChannels(root);
    await ensureChannelDirectories(root, channels);
    const result = { channels, directories: channels.map((channel) => `canais/${channel}`) };
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `Canais preparados: ${channels.join(", ") || "nenhum"}.\n`);
  });

const acervo = program
  .command("acervo")
  .description("recebe e organiza materiais brutos do projeto");

acervo
  .command("add <titulo>")
  .description("cria um item numerado preservando o material bruto")
  .option("--file <arquivo>", "arquivo local que contém o material")
  .option("--text <texto>", "material informado diretamente")
  .option("--source <origem>", "URL ou descrição da origem")
  .action(async function (this: Command, title: string, options: { file?: string; text?: string; source?: string }) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const raw = options.file
      ? await readFile(resolve(root, options.file), "utf8")
      : options.text ?? (!process.stdin.isTTY ? await readStdin() : "");
    if (!raw) throw new CliError("Informe --file, --text ou envie o material pela entrada padrão.");
    const result = await addAcervo(root, { title, raw, ...(options.source ? { source: options.source } : {}) });
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `Acervo ${result.id} criado em ${result.directory}.\n`);
  });

acervo
  .command("process <id>")
  .description("gera a versão processada e atualiza o índice")
  .action(async function (this: Command, id: string) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await processAcervo(root, id);
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `Acervo ${result.id} processado.\n`);
  });

acervo
  .command("list")
  .description("lista os itens registrados no índice do acervo")
  .action(async function (this: Command) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await listAcervo(root);
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `${result.map((item) => `${item.id}  ${item.status.padEnd(12)} ${item.title}`).join("\n") || "Acervo vazio."}\n`);
  });

const content = program
  .command("content")
  .description("cria saídas finais organizadas por canal");

content
  .command("create <canal> <titulo>")
  .description("cria a pasta final do canal com README e frontmatter")
  .addOption(new Option("--persona <id>", "persona vinculada").default([]))
  .addOption(new Option("--acervo <id>", "acervo utilizado").default([]))
  .action(async function (this: Command, channel: string, title: string, options: { persona: string | string[]; acervo: string | string[] }) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await createContent(root, {
      channel: channel as ChannelId,
      title,
      personas: asList(options.persona),
      acervo: asList(options.acervo),
    });
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `Peça ${result.id} criada em ${result.directory}.\n`);
  });

content
  .command("status <id> <estado>")
  .description("atualiza o estado da peça e seus metadados de publicação")
  .addOption(new Option("--url <url>", "URL da publicação"))
  .addOption(new Option("--published-at <data>", "data de publicação no formato ISO"))
  .action(async function (
    this: Command,
    id: string,
    status: string,
    options: { url?: string; publishedAt?: string },
  ) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await updateContentStatus(root, id, {
      status: status as (typeof PIPELINE_STATES)[number],
      ...(options.url ? { url: options.url } : {}),
      ...(options.publishedAt ? { publishedAt: options.publishedAt } : {}),
    });
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `Peça ${result.id} agora está em ${result.status}.\n`);
  });

const calendar = program
  .command("calendario")
  .description("registra peças no calendário editorial mensal");

calendar
  .command("add <data> <peca>")
  .description("adiciona uma peça a calendario/AAAA-MM.md")
  .action(async function (this: Command, date: string, contentId: string) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await addToCalendar(root, date, contentId);
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `Peça ${result.contentId} adicionada a ${result.path}.\n`);
  });

calendar
  .command("list [mes]")
  .description("lista o calendário completo ou um mês no formato AAAA-MM")
  .action(async function (this: Command, month?: string) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await listCalendar(root, month);
    process.stdout.write(globals.json ? `${JSON.stringify(result, null, 2)}\n` : `${result.map((item) => `${item.date}  ${item.contentId}  ${item.channel}  ${item.status}`).join("\n") || "Calendário vazio."}\n`);
  });

context
  .command("ready")
  .description("marca como concluída a entrevista da skill inboundfy-setup")
  .option("--yes", "confirma sem pergunta interativa")
  .action(async function (this: Command, options: { yes?: boolean }) {
    if (!options.yes) {
      throw new CliError(
        "Use --yes somente depois que inboundfy-setup preencher e conferir as informações mínimas.",
      );
    }
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    await markContextReady(root);
    process.stdout.write("Preenchimento inicial marcado como concluído.\n");
  });

localizeHelp(program);

try {
  await program.parseAsync(process.argv);
} catch (error) {
  const globals = program.opts<GlobalOptions>();
  const message = error instanceof Error ? error.message : String(error);
  if (globals.json) {
    process.stdout.write(
      `${JSON.stringify(
        {
          error: {
            message,
            code: error instanceof CliError ? error.exitCode : 1,
          },
        },
        null,
        2,
      )}\n`,
    );
  } else {
    process.stderr.write(`Erro: ${message}\n`);
  }
  process.exitCode = error instanceof CliError ? error.exitCode : 1;
}

/**
 * Traduz os elementos fixos da ajuda do Commander para Português do Brasil.
 */
function localizeHelp(command: Command): void {
  const headings: Record<string, string> = {
    "Usage:": "Uso:",
    "Arguments:": "Argumentos:",
    "Options:": "Opções:",
    "Global Options:": "Opções globais:",
    "Commands:": "Comandos:",
  };
  command
    .helpOption("-h, --help", "exibe a ajuda")
    .helpCommand("help [comando]", "exibe a ajuda de um comando")
    .configureHelp({
      styleTitle: (title) => headings[title] ?? title,
      styleUsage: (usage) =>
        usage
          .replaceAll("[options]", "[opções]")
          .replaceAll("[command]", "[comando]"),
      subcommandTerm: (subcommand) =>
        subcommand
          .name()
          .concat(
            subcommand.options.length > 0 ? " [opções]" : "",
            subcommand.registeredArguments.length > 0
              ? ` ${subcommand.registeredArguments
                  .map((argument) => argument.name())
                  .join(" ")}`
              : "",
          ),
    });
  for (const child of command.commands) {
    localizeHelp(child);
  }
}

function configureMutationCommand(
  command: Command,
  mode: OperationMode,
  withAgentOptions = false,
): void {
  command
    .option("--dry-run", "mostra alterações sem escrever")
    .option("--yes", "aceita os padrões em execução não interativa")
    .option("--force", "preserva divergências em migrações e continua");
  if (withAgentOptions) {
    command
      .addOption(
        new Option("--agent <agente>", "agente que receberá as skills").choices([
          "codex",
          "claude",
          "agents",
        ]),
      )
      .option("--skills-dir <pasta>", "diretório de skills relativo ao projeto")
      .addOption(
        new Option(
          "--instruction-file <arquivo>",
          "arquivo que receberá o bloco delimitado",
        ).choices(["AGENTS.md", "CLAUDE.md", "none"]),
      );
  }
  command.action(async function (
    this: Command,
    options: {
      dryRun?: boolean;
      yes?: boolean;
      force?: boolean;
      agent?: AgentKind;
      skillsDir?: string;
      instructionFile?: "AGENTS.md" | "CLAUDE.md" | "none";
    },
  ) {
    const globals = this.optsWithGlobals() as GlobalOptions;
    const root = await resolveProjectRoot(globals.project);
    const result = await executeInstallation({
      projectRoot: root,
      mode,
      ...(options.dryRun !== undefined ? { dryRun: options.dryRun } : {}),
      ...(options.yes !== undefined ? { yes: options.yes } : {}),
      ...(options.force !== undefined ? { force: options.force } : {}),
      ...(options.agent ? { agent: options.agent } : {}),
      ...(options.skillsDir ? { skillsDirectory: options.skillsDir } : {}),
      ...(options.instructionFile
        ? { instructionFile: options.instructionFile }
        : {}),
    });
    printOperation(result, Boolean(globals.json));
  });
}

async function readStdin(): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
  }
  return Buffer.concat(chunks).toString("utf8");
}

function asList(value: string | string[] | undefined): string[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}
