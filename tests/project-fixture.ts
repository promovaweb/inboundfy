/**
 * Shared fixture for project tests: a temporary consumer project with
 * Inboundfy installed and helpers to fill the context and select channels.
 */
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { executeInstallation } from "../src/core/installer.ts";

/** Creates an empty temporary project directory. */
export function tempProject(prefix = "inboundfy-"): string {
  return mkdtempSync(join(tmpdir(), prefix));
}

/** Removes a temporary project. */
export function removeProject(dir: string): void {
  rmSync(dir, { recursive: true, force: true });
}

/** Installs Inboundfy without questions. */
export async function install(dir: string) {
  return executeInstallation({ projectRoot: dir, mode: "install", yes: true, agent: "claude", instructionFile: "AGENTS.md" });
}

/** Checks a channel in .inboundfy/estrategia.md. */
export function selectChannel(dir: string, label: string): void {
  const path = join(dir, ".inboundfy", "estrategia.md");
  const content = readFileSync(path, "utf8");
  const next = content.replace(new RegExp(`^- \\[ \\] ${label}\\s*$`, "mu"), `- [x] ${label}`);
  writeFileSync(path, next.includes(`- [x] ${label}`) ? next : `${content}\n- [x] ${label}\n`);
}

/** Fills the minimum context so `context ready` passes. */
export function fillContext(dir: string): void {
  const context = join(dir, ".inboundfy", "context");
  writeFileSync(join(context, "empresa.md"), "# Empresa\n\n- **Nome da empresa:** Acme Ltda.\n- **Descrição curta:** Sistemas de atendimento.\n- **Site principal:** https://acme.example\n");
  writeFileSync(
    join(context, "marca-voz.md"),
    "# Voz\n\n- **Três a cinco adjetivos:** direta, técnica e próxima\n- **Pessoa verbal:** primeira pessoa\n- **Idioma e variante:** pt-BR\n\n> Abra o relatório e confira a conversa.\n",
  );
  writeFileSync(
    join(context, "publico.md"),
    "# Personas\n\n## Persona 01: Gestora de agência\n\n- **Quem é:** lidera uma agência pequena.\n- **Contexto de compra:** organizar o atendimento.\n- **Problema que tenta resolver:** perde conversas.\n- **Resultado que procura:** responder rápido.\n",
  );
  writeFileSync(join(dir, ".inboundfy", "estrategia.md"), "# Estratégia\n\n- **Objetivo de negócio:** gerar demonstrações.\n\n## Canais ativos\n\n- [x] Blog\n- [ ] LinkedIn\n");
}

/** Runs the CLI as a subprocess and parses the JSON envelope. */
export function cli(dir: string, args: string[], stdin?: string) {
  const proc = Bun.spawnSync([process.execPath, "run", "src/main.ts", "-C", dir, ...args, "--json"], {
    env: { ...process.env, NO_COLOR: "1" },
    stdin: stdin === undefined ? "ignore" : Buffer.from(stdin),
  });
  const out = proc.stdout.toString();
  return { code: proc.exitCode, json: out.trim() ? (JSON.parse(out) as { ok: boolean; data?: any; error?: any }) : null };
}
