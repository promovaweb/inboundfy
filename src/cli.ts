#!/usr/bin/env node

/**
 * Entrada pública do CLI que instala e mantém o framework Thothfy.
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
import type { AgentKind, OperationMode } from "./types.js";

interface GlobalOptions {
  project: string;
  json?: boolean;
}

const version = await readPackageVersion();
const program = new Command()
  .name("thothfy")
  .description("Instala, atualiza e verifica o framework Thothfy.")
  .version(version, "-V, --version", "exibe a versão")
  .option("--project <pasta>", "raiz do projeto", process.cwd())
  .option("--json", "imprime saída estruturada em JSON");

configureMutationCommand(
  program.command("init").description("instala o Thothfy no projeto"),
  "init",
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

context
  .command("ready")
  .description("marca como concluída a entrevista da skill thothfy-setup")
  .option("--yes", "confirma sem pergunta interativa")
  .action(async function (this: Command, options: { yes?: boolean }) {
    if (!options.yes) {
      throw new CliError(
        "Use --yes somente depois que thothfy-setup preencher e conferir as informações mínimas.",
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
