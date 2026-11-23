/**
 * Safe file primitives used by every Inboundfy mutation.
 *
 * Writes are atomic (temporary file in the same directory, then rename),
 * never follow symbolic links and never leave the authorized project root.
 * A lock file in `.inboundfy/` serializes concurrent operations.
 */
import { access, chmod, lstat, mkdir, open, readFile, realpath, rename, rm, stat, unlink, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";
import { randomUUID } from "node:crypto";
import { error } from "../app/errors.ts";

/** Returns `true` when the path exists. */
export async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/** Resolves the project root by real path and refuses dangerous targets. */
export async function resolveProjectRoot(input: string): Promise<string> {
  const absolute = resolve(input);
  let root: string;
  try {
    root = await realpath(absolute);
  } catch {
    throw error.notFound(`Project directory does not exist: ${absolute}`, { path: absolute });
  }
  if (root === resolve(sep)) throw error.usage("The file system root cannot be a project.");
  const info = await stat(root);
  if (!info.isDirectory()) throw error.usage(`Project path is not a directory: ${root}`, { path: root });
  return root;
}

/** Ensures the target stays inside the authorized root. */
export function assertInside(root: string, target: string): void {
  const resolved = resolve(target);
  const rel = relative(root, resolved);
  if (rel === ".." || rel.startsWith(`..${sep}`) || isAbsolute(rel)) {
    throw error.permission(`Target leaves the project root: ${resolved}`, { path: resolved });
  }
}

/**
 * Refuses symbolic components so a write cannot reach another directory
 * after the lexical validation.
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
      if (info.isSymbolicLink()) throw error.permission(`Refusing to write through a symbolic link: ${cursor}`, { path: cursor });
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") return;
      throw e;
    }
  }
}

/** Writes in the same directory and swaps the file only after the write. */
export async function writeAtomic(root: string, target: string, content: string | Uint8Array, mode?: number): Promise<void> {
  await assertNoSymlink(root, target);
  await mkdir(dirname(target), { recursive: true });
  const temp = resolve(dirname(target), `.${randomUUID()}-${process.pid}.inboundfy.tmp`);
  assertInside(root, temp);
  try {
    await writeFile(temp, content);
    if (mode !== undefined) await chmod(temp, mode);
    await rename(temp, target);
  } finally {
    await rm(temp, { force: true });
  }
}

/** Reads JSON and names the file when the content is invalid. */
export async function readJson<T>(path: string): Promise<T> {
  try {
    return JSON.parse(await readFile(path, "utf8")) as T;
  } catch {
    throw error.conflict(`Cannot read JSON file ${path}.`, { path });
  }
}

/** Creates an exclusive lock and returns the function that removes it. */
export async function acquireLock(root: string): Promise<() => Promise<void>> {
  const directory = resolve(root, ".inboundfy");
  await assertNoSymlink(root, directory);
  await mkdir(directory, { recursive: true });
  const path = resolve(directory, ".cli.lock");
  let handle;
  try {
    handle = await open(path, "wx");
    await handle.writeFile(`${JSON.stringify({ pid: process.pid, createdAt: new Date().toISOString() })}\n`);
  } catch {
    throw error.conflict(`Another Inboundfy operation is running or left a lock at ${path}. Remove it if no operation is active.`, { path });
  }
  await handle.close();
  return async () => {
    try {
      await unlink(path);
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code !== "ENOENT") throw e;
    }
  };
}

/** Converts an internal path to the portable form used in manifests. */
export function relativePortable(root: string, target: string): string {
  assertInside(root, target);
  return relative(root, target).split(sep).join("/");
}

/** Resolves a portable manifest path inside the project. */
export function resolvePortable(root: string, path: string): string {
  const parts = path.split("/");
  if (!path || path.startsWith("/") || path.includes("\\") || parts.some((part) => !part || part === "." || part === "..")) {
    throw error.usage(`Internal path is not portable and relative: ${path}`, { path });
  }
  const target = resolve(root, ...parts);
  assertInside(root, target);
  return target;
}

/** Returns `true` only for a regular file that is not a symbolic link. */
export async function isRegularFile(path: string): Promise<boolean> {
  try {
    const info = await lstat(path);
    return info.isFile() && !info.isSymbolicLink();
  } catch {
    return false;
  }
}

/** Normalizes a numeric id to four digits (`7` → `0007`). */
export function normalizeId(value: string): string {
  return value.trim().replace(/^0+(?=\d)/u, "").padStart(4, "0");
}

/** Next sequential number after the highest numeric id. */
export function nextNumber(ids: readonly string[]): number {
  return Math.max(0, ...ids.map((id) => Number.parseInt(id, 10)).filter(Number.isFinite)) + 1;
}

/** ASCII slug limited to 72 characters; `sem-titulo` when nothing is left. */
export function slugify(value: string): string {
  return (
    value
      .normalize("NFD")
      .replace(/[̀-ͯ]/gu, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 72) || "sem-titulo"
  );
}
