/**
 * Which repository files form the framework payload.
 *
 * The same list feeds two readers: `scripts/build-payload.ts`, which packs
 * the files into `generated/payload.gz` for the compiled binary, and the
 * development fallback in `payload.ts`, which reads them straight from the
 * repository when the binary runs with `bun run`.
 */
import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

/** Root documents copied to `.inboundfy/framework/`. */
export const FRAMEWORK_FILES = [
  "BRAINSTORM.md",
  "CONTEXTO.md",
  "ESCRITA.md",
  "ESTRATEGIA.md",
  "ESTRUTURAS-PERSUASIVAS.md",
  "LIMPEZA-MATERIAL-BRUTO.md",
  "METODOLOGIA.md",
  "SKILL-AUTORIA.md",
  "SKILLS.md",
  "TRADUCAO.md",
] as const;

/** Directories packed whole. */
const TREES = ["skills", "context", "templates", "brand"] as const;

/** Documentation for people; the binary docs (`cli.md` etc.) ride along. */
const DOC_TREES = ["docs/user", "docs/method"] as const;
const DOC_FILES = ["docs/README.md"] as const;

/** Only the current ebook goes in; versioned copies stay in the release. */
const EBOOK_FILES = ["ebook/README.md", "ebook/VERSION", "ebook/ebook-inboundfy.pdf", "ebook/ebook-inboundfy.epub"] as const;

function walk(root: string, directory: string): string[] {
  const output: string[] = [];
  for (const entry of readdirSync(join(root, directory), { withFileTypes: true })) {
    const rel = `${directory}/${entry.name}`;
    if (entry.isSymbolicLink()) throw new Error(`Symbolic links are not allowed in the payload: ${rel}`);
    if (entry.isDirectory()) output.push(...walk(root, rel));
    else if (entry.isFile()) output.push(rel);
  }
  return output;
}

/** Repository-relative paths of every payload file, sorted. */
export function listPayloadSources(root: string): string[] {
  const files: string[] = [...FRAMEWORK_FILES, ...DOC_FILES];
  for (const tree of [...TREES, ...DOC_TREES]) files.push(...walk(root, tree));
  for (const file of EBOOK_FILES) {
    try {
      if (statSync(join(root, file)).isFile()) files.push(file);
    } catch {
      // The ebook may be absent in a fresh checkout before `bun run ebook`.
    }
  }
  return [...new Set(files.map((file) => relative(root, join(root, file)).split(sep).join("/")))].sort();
}
