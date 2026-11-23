/**
 * Detects the local agent convention and keeps only the Inboundfy block in
 * the instruction file (`AGENTS.md` or `CLAUDE.md`).
 *
 * Questions are asked only on an interactive terminal without `--yes`;
 * otherwise the defaults apply (Codex directory, `AGENTS.md`).
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { error } from "../app/errors.ts";
import { exists } from "./io.ts";
import type { AgentKind } from "./types.ts";

export const AGENT_DIRECTORIES: Record<AgentKind, string> = {
  codex: ".codex/skills",
  claude: ".claude/skills",
  agents: ".agents/skills",
};

/** Agent and skills directory chosen for an installation. */
export interface AgentSelection {
  agent: AgentKind;
  skillsDirectory: string;
}

function choose<T>(question: string, choices: Array<{ label: string; value: T }>, fallback: T): T {
  process.stderr.write(`${question}\n`);
  choices.forEach((choice, i) => process.stderr.write(`  ${i + 1}) ${choice.label}\n`));
  const answer = prompt("Choice [1]:");
  const index = answer && /^\d+$/.test(answer.trim()) ? Number(answer.trim()) - 1 : 0;
  return choices[index]?.value ?? fallback;
}

/** Picks an existing convention or asks when ambiguous. */
export async function resolveAgent(options: { projectRoot: string; agent?: AgentKind; skillsDirectory?: string; yes?: boolean }): Promise<AgentSelection> {
  if (options.skillsDirectory) return { agent: options.agent ?? "codex", skillsDirectory: normalizeDirectory(options.skillsDirectory) };
  if (options.agent) return { agent: options.agent, skillsDirectory: AGENT_DIRECTORIES[options.agent] };
  const found: AgentKind[] = [];
  for (const agent of Object.keys(AGENT_DIRECTORIES) as AgentKind[]) {
    if (await exists(join(options.projectRoot, AGENT_DIRECTORIES[agent]))) found.push(agent);
  }
  if (found.length === 1 && found[0]) return { agent: found[0], skillsDirectory: AGENT_DIRECTORIES[found[0]] };
  if (options.yes || !process.stdin.isTTY) return { agent: "codex", skillsDirectory: AGENT_DIRECTORIES.codex };
  const agent = choose<AgentKind>(
    "Which agent will use the Inboundfy skills?",
    [
      { label: "Codex (.codex/skills)", value: "codex" },
      { label: "Claude Code (.claude/skills)", value: "claude" },
      { label: "Agents (.agents/skills)", value: "agents" },
    ],
    "codex",
  );
  return { agent, skillsDirectory: AGENT_DIRECTORIES[agent] };
}

/** Chooses the instruction file without replacing existing content. */
export async function resolveInstructionFile(options: { projectRoot: string; requested?: "AGENTS.md" | "CLAUDE.md" | "none"; yes?: boolean }): Promise<"AGENTS.md" | "CLAUDE.md" | null> {
  if (options.requested) return options.requested === "none" ? null : options.requested;
  const agents = await exists(join(options.projectRoot, "AGENTS.md"));
  const claude = await exists(join(options.projectRoot, "CLAUDE.md"));
  if (agents) return "AGENTS.md";
  if (claude) return "CLAUDE.md";
  if (options.yes || !process.stdin.isTTY) return "AGENTS.md";
  return choose<"AGENTS.md" | "CLAUDE.md" | null>(
    "Where should Inboundfy write its instructions?",
    [
      { label: "AGENTS.md", value: "AGENTS.md" },
      { label: "CLAUDE.md", value: "CLAUDE.md" },
      { label: "Do not change an instruction file", value: null },
    ],
    "AGENTS.md",
  );
}

export const INSTRUCTION_START = "<!-- inboundfy:inicio -->";
export const INSTRUCTION_END = "<!-- inboundfy:fim -->";

/**
 * Block reconciled without touching the rest of the file. The text is
 * Portuguese because it is read by the agent working in the consumer
 * project, whose working language is Brazilian Portuguese.
 */
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

O binário \`inboundfy\` mantém a instalação e os índices: \`inboundfy doctor\`
confere a integridade, \`inboundfy stats\` resume acervo, canais e calendário e
\`inboundfy mcp\` expõe as mesmas operações como tools MCP. A skill
\`inboundfy-setup\` conduz o preenchimento das informações do negócio depois
que o binário instala ou repara os arquivos.
${INSTRUCTION_END}`;
}

/** Inserts or replaces only the delimited section. */
export function mergeInstructionBlock(current: string): string {
  const block = instructionBlock();
  const start = current.indexOf(INSTRUCTION_START);
  const end = current.indexOf(INSTRUCTION_END);
  if (start >= 0 && end >= start) return `${current.slice(0, start)}${block}${current.slice(end + INSTRUCTION_END.length)}`;
  const separator = current.length === 0 || current.endsWith("\n\n") ? "" : current.endsWith("\n") ? "\n" : "\n\n";
  return `${current}${separator}${block}\n`;
}

/** Whether the file holds exactly one complete, current block. */
export async function hasInstructionBlock(path: string): Promise<boolean> {
  try {
    const content = await readFile(path, "utf8");
    return content.split(INSTRUCTION_START).length === 2 && content.split(INSTRUCTION_END).length === 2 && content.includes(instructionBlock());
  } catch {
    return false;
  }
}

function normalizeDirectory(path: string): string {
  if (/^(?:[A-Za-z]:[\\/]|[\\/])/.test(path)) throw error.usage(`Invalid skills directory: ${path}`, { path });
  const normalized = path.replaceAll("\\", "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!normalized || normalized.split("/").some((part) => !part || part === "." || part === "..")) {
    throw error.usage(`Invalid skills directory: ${path}`, { path });
  }
  return normalized;
}
