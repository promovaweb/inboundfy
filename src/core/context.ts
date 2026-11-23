/**
 * Project context: discovery of local sources and minimum readiness.
 *
 * `scanContextSources` lists upper-case Markdown files and the Markdown in
 * `brand/` without writing anything. `validateMinimumContext` checks the
 * concrete fields that release the production skills. The field labels it
 * looks for are the Portuguese labels of the context templates.
 */
import { readdir, readFile } from "node:fs/promises";
import { basename, extname, join, relative, sep } from "node:path";
import { isRegularFile } from "./io.ts";
import { sha256 } from "./payload.ts";
import type { ContextSourceCandidate } from "./types.ts";

const DEFAULT_IGNORED = new Set([".agents", ".claude", ".codex", ".git", ".inboundfy", ".venv", "build", "coverage", "dist", "node_modules", "vendor"]);

/** Read-only scan that skips submodules and symbolic links. */
export async function scanContextSources(projectRoot: string, excludedPaths: string[] = ["brainstorms", "content"]): Promise<ContextSourceCandidate[]> {
  const candidates: ContextSourceCandidate[] = [];
  await visit(projectRoot, projectRoot, new Set(excludedPaths.map(normalizePortable)), candidates);
  return candidates.sort((a, b) => a.path.localeCompare(b.path));
}

async function visit(projectRoot: string, directory: string, excluded: Set<string>, output: ContextSourceCandidate[]): Promise<void> {
  const relDirectory = normalizePortable(relative(projectRoot, directory));
  if (relDirectory && excluded.has(relDirectory)) return;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) continue;
    const path = join(directory, entry.name);
    const rel = normalizePortable(relative(projectRoot, path));
    if (entry.isDirectory()) {
      if (DEFAULT_IGNORED.has(entry.name) || excluded.has(rel)) continue;
      if (await isGitSubmodule(path)) continue;
      await visit(projectRoot, path, excluded, output);
      continue;
    }
    if (!entry.isFile() || extname(entry.name).toLowerCase() !== ".md") continue;
    const inBrand = rel === "brand" || rel.startsWith("brand/");
    if (!inBrand && !isUppercaseMarkdown(entry.name)) continue;
    const content = await readFile(path, "utf8");
    output.push({
      path: rel,
      title: extractTitle(content) ?? basename(entry.name, extname(entry.name)),
      headings: [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map((m) => m[1]?.trim() ?? ""),
      sha256: sha256(content),
      origin: inBrand ? "brand" : "uppercase-markdown",
    });
  }
}

async function isGitSubmodule(directory: string): Promise<boolean> {
  try {
    return (await readFile(join(directory, ".git"), "utf8")).trimStart().startsWith("gitdir:");
  } catch {
    return false;
  }
}

function isUppercaseMarkdown(filename: string): boolean {
  const letters = [...basename(filename, extname(filename))].filter((char) => /\p{L}/u.test(char));
  return letters.length > 0 && letters.every((char) => char === char.toUpperCase());
}

function extractTitle(content: string): string | null {
  const match = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? null;
}

function normalizePortable(path: string): string {
  return path.split(sep).filter(Boolean).join("/");
}

/** One readiness requirement and whether it is met. */
export interface ReadinessItem {
  id: "company" | "voice" | "personas" | "strategy";
  file: string;
  label: string;
  ready: boolean;
}

/** Result of the minimum context check. */
export interface ContextReadiness {
  ready: boolean;
  missing: string[];
  items: ReadinessItem[];
}

/** Validates concrete fields without demanding every template. */
export async function validateMinimumContext(projectRoot: string): Promise<ContextReadiness> {
  const directory = join(projectRoot, ".inboundfy", "context");
  const company = await read(join(directory, "empresa.md"));
  const voice = await read(join(directory, "marca-voz.md"));
  const personas = await read(join(directory, "publico.md"));
  const strategy = await read(join(projectRoot, ".inboundfy", "estrategia.md"));
  const items: ReadinessItem[] = [
    {
      id: "company",
      file: "context/empresa.md",
      label: "company name, short description and main site",
      ready: Boolean(company && ["Nome da empresa", "Descrição curta", "Site principal"].every((f) => filledField(company, f))),
    },
    {
      id: "voice",
      file: "context/marca-voz.md",
      label: "identity, grammatical person, language and examples",
      ready: Boolean(voice && ["Três a cinco adjetivos", "Pessoa verbal", "Idioma e variante"].every((f) => filledField(voice, f)) && !hasPlaceholder(voice)),
    },
    { id: "personas", file: "context/publico.md", label: "at least one complete persona", ready: Boolean(personas && hasCompletedPersona(personas)) },
    {
      id: "strategy",
      file: "estrategia.md",
      label: "at least one channel and the business goal",
      ready: Boolean(strategy && /^- \[[xX]\] (Blog|Email|LinkedIn|Instagram|Substack|YouTube)\s*$/mu.test(strategy) && filledField(strategy, "Objetivo de negócio")),
    },
  ];
  const missing = items.filter((item) => !item.ready).map((item) => `${item.file}: ${item.label}`);
  return { ready: missing.length === 0, missing, items };
}

async function read(path: string): Promise<string | null> {
  return (await isRegularFile(path)) ? readFile(path, "utf8") : null;
}

function filledField(content: string, label: string): boolean {
  const match = content.match(new RegExp(`\\*\\*${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\*\\*\\s*(.+)`, "iu"));
  return Boolean(match?.[1] && !hasPlaceholder(match[1]));
}

function hasCompletedPersona(content: string): boolean {
  const heading = content.match(/^##\s+Persona\s+\d+:\s*(.+)$/imu)?.[1]?.trim();
  return Boolean(heading && !hasPlaceholder(heading) && ["Quem é", "Contexto de compra", "Problema que tenta resolver", "Resultado que procura"].every((f) => filledField(content, f)));
}

function hasPlaceholder(value: string): boolean {
  return /\{[^}]+\}/u.test(value) || /\b(?:TODO|PENDENTE|PREENCHER)\b/iu.test(value);
}
