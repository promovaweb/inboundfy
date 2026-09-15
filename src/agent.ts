/**
 * Detecta o agente local e mantém somente o bloco de instruções do Inboundfy.
 */

import { select } from "@inquirer/prompts";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { AgentKind } from "./types.js";
import { exists } from "./io.js";
import { CliError } from "./errors.js";

const AGENT_DIRECTORIES: Record<AgentKind, string> = {
  codex: ".codex/skills",
  claude: ".claude/skills",
  agents: ".agents/skills",
};

export interface AgentSelection {
  agent: AgentKind;
  skillsDirectory: string;
}

/** Seleciona uma convenção existente ou pergunta quando houver ambiguidade. */
export async function resolveAgent(options: {
  projectRoot: string;
  agent?: AgentKind;
  skillsDirectory?: string;
  yes?: boolean;
}): Promise<AgentSelection> {
  if (options.skillsDirectory) {
    return {
      agent: options.agent ?? "codex",
      skillsDirectory: normalizeDirectory(options.skillsDirectory),
    };
  }
  if (options.agent) {
    return {
      agent: options.agent,
      skillsDirectory: AGENT_DIRECTORIES[options.agent],
    };
  }
  const found: AgentKind[] = [];
  for (const agent of Object.keys(AGENT_DIRECTORIES) as AgentKind[]) {
    if (await exists(join(options.projectRoot, AGENT_DIRECTORIES[agent]))) {
      found.push(agent);
    }
  }
  if (found.length === 1) {
    const agent = found[0];
    if (!agent) throw new CliError("Falha interna ao detectar o agente.");
    return { agent, skillsDirectory: AGENT_DIRECTORIES[agent] };
  }
  if (options.yes || !process.stdin.isTTY) {
    return { agent: "codex", skillsDirectory: AGENT_DIRECTORIES.codex };
  }
  const agent = await select<AgentKind>({
    message: "Qual agente vai usar as skills do Inboundfy?",
    choices: [
      { name: "Codex (.codex/skills)", value: "codex" },
      { name: "Claude Code (.claude/skills)", value: "claude" },
      { name: "Agents (.agents/skills)", value: "agents" },
    ],
  });
  return { agent, skillsDirectory: AGENT_DIRECTORIES[agent] };
}

/** Escolhe o arquivo de instruções sem substituir conteúdo já existente. */
export async function resolveInstructionFile(options: {
  projectRoot: string;
  requested?: "AGENTS.md" | "CLAUDE.md" | "none";
  yes?: boolean;
}): Promise<"AGENTS.md" | "CLAUDE.md" | null> {
  if (options.requested) {
    return options.requested === "none" ? null : options.requested;
  }
  const agents = await exists(join(options.projectRoot, "AGENTS.md"));
  const claude = await exists(join(options.projectRoot, "CLAUDE.md"));
  if (agents && !claude) return "AGENTS.md";
  if (claude && !agents) return "CLAUDE.md";
  if (agents && claude) return "AGENTS.md";
  if (options.yes || !process.stdin.isTTY) return "AGENTS.md";
  return select({
    message: "Onde o Inboundfy deve registrar suas instruções?",
    choices: [
      { name: "AGENTS.md", value: "AGENTS.md" as const },
      { name: "CLAUDE.md", value: "CLAUDE.md" as const },
      { name: "Não alterar um arquivo de instruções", value: null },
    ],
  });
}

export const INSTRUCTION_START = "<!-- inboundfy:inicio -->";
export const INSTRUCTION_END = "<!-- inboundfy:fim -->";

/** Gera o bloco cujo conteúdo pode ser reconciliado sem tocar no restante. */
export function instructionBlock(): string {
  return `${INSTRUCTION_START}
## Inboundfy

Este projeto usa o Inboundfy para produzir e validar materiais de inbound
marketing baseado em IA. Consulte \`.inboundfy/context/empresa.md\`,
\`.inboundfy/estrategia.md\`, \`.inboundfy/context/marca-voz.md\`,
\`.inboundfy/context/publico.md\`, \`.inboundfy/context/links.md\`,
\`.inboundfy/context/proibicoes.md\` e \`.inboundfy/context/aprendizado.md\`
antes de produzir.
As regras do framework ficam em \`.inboundfy/framework/\`; os dados do projeto
ficam em \`.inboundfy/\`, \`.inboundfy/context/\`, \`acervo/\`, \`canais/\` e
\`calendario/\`.

Execute \`npx @promovaweb/inboundfy@latest doctor\` quando a instalação parecer
incompleta. A skill \`inboundfy-setup\` conduz o preenchimento das informações
do negócio depois que o CLI instala ou repara os arquivos.
${INSTRUCTION_END}`;
}

/** Insere ou substitui somente a seção delimitada. */
export function mergeInstructionBlock(current: string): string {
  const block = instructionBlock();
  const start = current.indexOf(INSTRUCTION_START);
  const end = current.indexOf(INSTRUCTION_END);
  if (start >= 0 && end >= start) {
    return `${current.slice(0, start)}${block}${current.slice(
      end + INSTRUCTION_END.length,
    )}`;
  }
  const separator = current.length === 0 || current.endsWith("\n\n") ? "" : "\n\n";
  return `${current}${separator}${block}\n`;
}

/** Confere se o arquivo contém exatamente um bloco completo. */
export async function hasInstructionBlock(path: string): Promise<boolean> {
  try {
    const content = await readFile(path, "utf8");
    return (
      content.split(INSTRUCTION_START).length === 2 &&
      content.split(INSTRUCTION_END).length === 2 &&
      content.includes(instructionBlock())
    );
  } catch {
    return false;
  }
}

function normalizeDirectory(path: string): string {
  if (/^(?:[A-Za-z]:[\\/]|[\\/])/.test(path)) {
    throw new CliError(`Diretório de skills inválido: ${path}`);
  }
  const normalized = path.replaceAll("\\", "/").replace(/^\.\//, "");
  const parts = normalized.split("/");
  if (
    !normalized ||
    parts.some((part) => !part || part === "." || part === "..")
  ) {
    throw new CliError(`Diretório de skills inválido: ${path}`);
  }
  return normalized;
}
