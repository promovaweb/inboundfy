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
  const directory = join(projectRoot, ".thothfy", "context");
  const missing: string[] = [];
  const company = await read(join(directory, "empresa.md"));
  if (
    !company ||
    !filledField(company, "Nome oficial") ||
    !filledSection(company, "Missão e o que a empresa faz") ||
    !filledSection(company, "Modelo de negócio")
  ) {
    missing.push("empresa.md: nome, missão e modelo de negócio");
  }

  const voice = await read(join(directory, "marca-voz.md"));
  if (
    !voice ||
    !filledField(voice, "Em três adjetivos") ||
    !filledField(voice, "Idioma padrão de produção") ||
    !/> (?!\{)[^\n]{12,}/.test(voice)
  ) {
    missing.push("marca-voz.md: tom, idioma e exemplo de bom texto");
  }

  const product = await read(join(directory, "produtos.md"));
  const service = await read(join(directory, "servicos.md"));
  if (!hasNamedEntry(product, "O que é, em uma frase") && !hasNamedEntry(service, "O que é entregue")) {
    missing.push("produtos.md ou servicos.md: ao menos um item nomeado");
  }

  const channels = await read(join(directory, "canais.md"));
  if (
    !channels ||
    !filledField(channels, "Caminho onde os pacotes são criados") ||
    !filledField(channels, "Caminho onde os brainstorms são criados") ||
    !/\*\*Ativo\?\*\*\s*:?\s*sim\b/iu.test(channels)
  ) {
    missing.push("canais.md: caminhos e ao menos um canal ativo");
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

function filledSection(content: string, title: string): boolean {
  const escaped = escapeRegex(title);
  const match = content.match(
    new RegExp(
      `^##\\s+${escaped}\\s*$([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`,
      "imu",
    ),
  );
  if (!match?.[1]) return false;
  const body = match[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();
  return body.length >= 12 && !hasPlaceholder(body);
}

function hasNamedEntry(content: string | null, field: string): boolean {
  if (!content) return false;
  const heading = content.match(/^##\s+(.+)$/m)?.[1]?.trim();
  return Boolean(
    heading &&
      !hasPlaceholder(heading) &&
      filledField(content, field),
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
