/**
 * Inventaria Markdown em maiúsculas e referências Markdown da pasta brand.
 */

import { readdir, readFile } from "node:fs/promises";
import { basename, extname, join, relative, sep } from "node:path";
import { sha256 } from "./payload.js";
import type { ContextSourceCandidate } from "./types.js";

const DEFAULT_IGNORED = new Set([
  ".agents",
  ".claude",
  ".codex",
  ".git",
  ".inboundfy",
  ".venv",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "vendor",
]);

/**
 * Faz uma leitura sem escrita e não atravessa submódulos nem links simbólicos.
 */
export async function scanContextSources(
  projectRoot: string,
  excludedPaths: string[] = ["brainstorms", "content"],
): Promise<ContextSourceCandidate[]> {
  const candidates: ContextSourceCandidate[] = [];
  const excluded = new Set(excludedPaths.map(normalizePortable));
  await visit(projectRoot, projectRoot, excluded, candidates);
  return candidates.sort((left, right) => left.path.localeCompare(right.path));
}

async function visit(
  projectRoot: string,
  directory: string,
  excluded: Set<string>,
  output: ContextSourceCandidate[],
): Promise<void> {
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
      headings: extractHeadings(content),
      sha256: sha256(content),
      origin: inBrand ? "brand" : "uppercase-markdown",
    });
  }
}

async function isGitSubmodule(directory: string): Promise<boolean> {
  try {
    const git = await readFile(join(directory, ".git"), "utf8");
    return git.trimStart().startsWith("gitdir:");
  } catch {
    return false;
  }
}

function isUppercaseMarkdown(filename: string): boolean {
  const stem = basename(filename, extname(filename));
  const letters = [...stem].filter((char) => /\p{L}/u.test(char));
  return letters.length > 0 && letters.every((char) => char === char.toUpperCase());
}

function extractTitle(content: string): string | null {
  const withoutFrontmatter = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  const match = withoutFrontmatter.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? null;
}

function extractHeadings(content: string): string[] {
  return [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map(
    (match) => match[1]?.trim() ?? "",
  );
}

function normalizePortable(path: string): string {
  return path.split(sep).filter(Boolean).join("/");
}
