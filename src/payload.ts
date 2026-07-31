/**
 * Descobre e descreve os arquivos imutáveis distribuídos pelo pacote npm.
 */

import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import type { ManagedFile } from "./types.js";
import { CliError } from "./errors.js";

export const PACKAGE_ROOT = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
);

const FRAMEWORK_FILES = [
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

export interface PayloadFile {
  sourcePath: string;
  sourceRelative: string;
  targetRelative: string;
  content: Buffer;
  sha256: string;
  category: ManagedFile["category"];
}

/** Calcula SHA-256 com a mesma representação usada nos manifestos. */
export function sha256(content: Uint8Array | string): string {
  return createHash("sha256").update(content).digest("hex");
}

/** Lê a versão canônica do framework no `package.json`. */
export async function readPackageVersion(): Promise<string> {
  const packageJson = JSON.parse(
    await readFile(join(PACKAGE_ROOT, "package.json"), "utf8"),
  ) as { name?: string; version?: string };
  if (
    packageJson.name !== "@promovaweb/thothfy" ||
    !packageJson.version?.match(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/)
  ) {
    throw new CliError("O package.json do Thothfy possui nome ou versão inválida.");
  }
  return packageJson.version;
}

/** Monta metodologia, documentação, ebook, identidade e templates. */
export async function collectFrameworkPayload(): Promise<PayloadFile[]> {
  const payload: PayloadFile[] = [];
  for (const name of FRAMEWORK_FILES) {
    payload.push(await payloadFile(name, `.thothfy/${name}`, "framework"));
  }
  await appendTree(payload, "docs", ".thothfy/docs", "documentation");
  await appendTree(payload, "ebook", ".thothfy/ebook", "ebook");
  await appendTree(payload, "brand", ".thothfy/brand", "documentation");
  for (const name of ["brainstorm.md", "fontes-projeto.md"]) {
    payload.push(
      await payloadFile(
        `templates/${name}`,
        `.thothfy/templates/${name}`,
        "template",
      ),
    );
  }
  for (const source of await walkRegularFiles(join(PACKAGE_ROOT, "context"))) {
    if (source.endsWith(`${sep}README.md`)) continue;
    const rel = relative(join(PACKAGE_ROOT, "context"), source);
    payload.push(
      await payloadFile(
        `context/${portable(rel)}`,
        `.thothfy/templates/context/${portable(rel)}`,
        "template",
      ),
    );
  }
  return payload.sort((left, right) =>
    left.targetRelative.localeCompare(right.targetRelative),
  );
}

/** Monta todas as skills publicadas e aponta para o diretório selecionado. */
export async function collectSkillsPayload(
  skillsDirectory: string,
): Promise<PayloadFile[]> {
  const root = join(PACKAGE_ROOT, "skills");
  const directories = (await readdir(root, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("thothfy-"))
    .sort((left, right) => left.name.localeCompare(right.name));
  const payload: PayloadFile[] = [];
  for (const directory of directories) {
    for (const source of await walkRegularFiles(join(root, directory.name))) {
      const rel = relative(root, source);
      payload.push(
        await payloadFile(
          `skills/${portable(rel)}`,
          `${skillsDirectory}/${portable(rel)}`,
          "skill",
        ),
      );
    }
  }
  return payload;
}

/** Lista os templates de contexto que devem existir no espaço do usuário. */
export async function collectContextTemplates(): Promise<PayloadFile[]> {
  const sourceRoot = join(PACKAGE_ROOT, "context");
  const payload: PayloadFile[] = [];
  for (const source of await walkRegularFiles(sourceRoot)) {
    if (source.endsWith(`${sep}README.md`)) continue;
    const rel = portable(relative(sourceRoot, source));
    payload.push(
      await payloadFile(`context/${rel}`, `.thothfy/context/${rel}`, "template"),
    );
  }
  return payload;
}

async function appendTree(
  output: PayloadFile[],
  sourceDirectory: string,
  targetDirectory: string,
  category: ManagedFile["category"],
): Promise<void> {
  const root = join(PACKAGE_ROOT, sourceDirectory);
  for (const source of await walkRegularFiles(root)) {
    const rel = portable(relative(root, source));
    output.push(
      await payloadFile(
        `${sourceDirectory}/${rel}`,
        `${targetDirectory}/${rel}`,
        category,
      ),
    );
  }
}

async function payloadFile(
  sourceRelative: string,
  targetRelative: string,
  category: ManagedFile["category"],
): Promise<PayloadFile> {
  const sourcePath = resolve(PACKAGE_ROOT, ...sourceRelative.split("/"));
  const content = await readFile(sourcePath);
  return {
    sourcePath,
    sourceRelative,
    targetRelative,
    content,
    sha256: sha256(content),
    category,
  };
}

async function walkRegularFiles(root: string): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isSymbolicLink()) {
      throw new CliError(`O pacote contém um link simbólico não permitido: ${path}`);
    }
    if (entry.isDirectory()) {
      result.push(...(await walkRegularFiles(path)));
    } else if (entry.isFile()) {
      result.push(path);
    }
  }
  return result.sort();
}

function portable(path: string): string {
  return path.split(sep).join("/");
}
