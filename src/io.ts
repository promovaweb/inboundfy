/**
 * Primitivas seguras de arquivo usadas por todas as mutações do CLI.
 */

import {
  access,
  chmod,
  lstat,
  mkdir,
  open,
  readFile,
  realpath,
  rename,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";
import { randomUUID } from "node:crypto";
import { CliError } from "./errors.js";

/** Retorna `true` quando o caminho existe sem seguir uma ausência. */
export async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/** Resolve a raiz por caminho real e recusa alvos amplos perigosos. */
export async function resolveProjectRoot(input: string): Promise<string> {
  const absolute = resolve(input);
  let root: string;
  try {
    root = await realpath(absolute);
  } catch (error) {
    throw new CliError(`O projeto não existe: ${absolute}`, 1, {
      cause: error,
    });
  }
  const parsedRoot = resolve(sep);
  if (root === parsedRoot) {
    throw new CliError("A raiz do sistema de arquivos não pode ser um projeto.");
  }
  const info = await stat(root);
  if (!info.isDirectory()) {
    throw new CliError(`O caminho do projeto não é um diretório: ${root}`);
  }
  return root;
}

/** Confirma que o destino continua dentro da raiz autorizada. */
export function assertInside(root: string, target: string): void {
  const resolved = resolve(target);
  const rel = relative(root, resolved);
  if (rel === ".." || rel.startsWith(`..${sep}`) || isAbsolute(rel)) {
    throw new CliError(`O destino sai da raiz autorizada: ${resolved}`);
  }
}

/**
 * Recusa componentes simbólicos para impedir que uma escrita alcance outro
 * diretório depois da validação lexical.
 */
export async function assertNoSymlink(root: string, target: string): Promise<void> {
  assertInside(root, target);
  const rel = relative(root, resolve(target));
  if (!rel) return;
  let cursor = root;
  for (const part of rel.split(sep)) {
    cursor = resolve(cursor, part);
    try {
      const info = await lstat(cursor);
      if (info.isSymbolicLink()) {
        throw new CliError(`O CLI não grava por link simbólico: ${cursor}`);
      }
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        error.code === "ENOENT"
      ) {
        return;
      }
      throw error;
    }
  }
}

/** Grava no mesmo diretório e troca o arquivo somente depois do `write`. */
export async function writeAtomic(
  root: string,
  target: string,
  content: string | Uint8Array,
  mode?: number,
): Promise<void> {
  await assertNoSymlink(root, target);
  await mkdir(dirname(target), { recursive: true });
  const temp = resolve(
    dirname(target),
    `.${randomUUID()}-${process.pid}.thothfy.tmp`,
  );
  assertInside(root, temp);
  try {
    await writeFile(temp, content);
    if (mode !== undefined) await chmod(temp, mode);
    await rename(temp, target);
  } finally {
    await rm(temp, { force: true });
  }
}

/** Lê JSON e apresenta o arquivo responsável quando o conteúdo for inválido. */
export async function readJson<T>(path: string): Promise<T> {
  try {
    return JSON.parse(await readFile(path, "utf8")) as T;
  } catch (error) {
    throw new CliError(`Não foi possível ler o JSON ${path}.`, 1, {
      cause: error,
    });
  }
}

/** Cria uma trava exclusiva e devolve a função que a remove. */
export async function acquireLock(root: string): Promise<() => Promise<void>> {
  const directory = resolve(root, ".thothfy");
  await assertNoSymlink(root, directory);
  await mkdir(directory, { recursive: true });
  const path = resolve(directory, ".cli.lock");
  let handle;
  try {
    handle = await open(path, "wx");
    await handle.writeFile(
      `${JSON.stringify({ pid: process.pid, createdAt: new Date().toISOString() })}\n`,
    );
  } catch (error) {
    throw new CliError(
      `Outra operação do Thothfy está ativa ou deixou uma trava em ${path}.`,
      1,
      { cause: error },
    );
  }
  await handle.close();
  return async () => {
    try {
      await unlink(path);
    } catch (error) {
      if (
        !(error instanceof Error && "code" in error && error.code === "ENOENT")
      ) {
        throw error;
      }
    }
  };
}

/** Converte um caminho interno em representação portátil para manifestos. */
export function relativePortable(root: string, target: string): string {
  assertInside(root, target);
  return relative(root, target).split(sep).join("/");
}

/** Resolve caminho portátil do manifesto dentro do projeto. */
export function resolvePortable(root: string, path: string): string {
  const parts = path.split("/");
  if (
    !path ||
    path.startsWith("/") ||
    path.includes("\\") ||
    parts.some((part) => !part || part === "." || part === "..")
  ) {
    throw new CliError(`O caminho interno não é portátil e relativo: ${path}`);
  }
  const target = resolve(root, ...path.split("/"));
  assertInside(root, target);
  return target;
}

/** Retorna `true` apenas para arquivo regular e não para link simbólico. */
export async function isRegularFile(path: string): Promise<boolean> {
  try {
    const info = await lstat(path);
    return info.isFile() && !info.isSymbolicLink();
  } catch {
    return false;
  }
}
