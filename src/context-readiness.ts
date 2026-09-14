/**
 * Confere o preenchimento mínimo que libera as skills de produção.
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isRegularFile } from "./io.js";

export interface ContextReadiness {
  ready: boolean;
  missing: string[];
}

/** Valida campos concretos sem exigir o preenchimento de todos os templates. */
export async function validateMinimumContext(
  projectRoot: string,
): Promise<ContextReadiness> {
  const directory = join(projectRoot, ".inboundfy");
  const missing: string[] = [];
  const company = await read(join(directory, "inbound.md"));
  if (
    !company ||
    !filledField(company, "Nome da empresa") ||
    !filledField(company, "Descrição curta") ||
    !filledField(company, "Site principal")
  ) {
    missing.push("inbound.md: empresa, descrição e site");
  }

  const voice = await read(join(directory, "voz.md"));
  if (
    !voice ||
    !filledField(voice, "Três a cinco adjetivos") ||
    !filledField(voice, "Pessoa verbal") ||
    !filledField(voice, "Idioma e variante") ||
    hasPlaceholder(voice)
  ) {
    missing.push("voz.md: identidade, pessoa verbal, idioma e exemplos");
  }

  const personas = await read(join(directory, "personas.md"));
  if (!personas || !hasCompletedPersona(personas)) {
    missing.push("personas.md: ao menos uma persona completa");
  }

  const channels = await read(join(directory, "estrategia.md"));
  if (
    !channels ||
    !/^- \[[xX]\] (Blog|Email|LinkedIn|Instagram|Substack|YouTube)\s*$/mu.test(channels) ||
    !filledField(channels, "Objetivo de negócio")
  ) {
    missing.push("estrategia.md: ao menos um canal e objetivo de negócio");
  }
  return { ready: missing.length === 0, missing };
}

async function read(path: string): Promise<string | null> {
  return (await isRegularFile(path)) ? readFile(path, "utf8") : null;
}

function filledField(content: string, label: string): boolean {
  const escaped = escapeRegex(label);
  const match = content.match(new RegExp(`\\*\\*${escaped}:\\*\\*\\s*(.+)`, "iu"));
  return Boolean(match?.[1] && !hasPlaceholder(match[1]));
}

function hasCompletedPersona(content: string): boolean {
  const heading = content.match(/^##\s+Persona\s+\d+:\s*(.+)$/imu)?.[1]?.trim();
  return Boolean(
    heading &&
      !hasPlaceholder(heading) &&
      ["Quem é", "Contexto de compra", "Problema que tenta resolver", "Resultado que procura"]
        .every((field) => filledField(content, field)),
  );
}

function hasPlaceholder(value: string): boolean {
  return (
    /\{[^}]+\}/u.test(value) ||
    /\b(?:TODO|PENDENTE|PREENCHER)\b/iu.test(value)
  );
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
