/**
 * Gera SHA256SUMS determinístico para os ativos de uma GitHub Release.
 */

import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

const directory = resolve(process.argv[2] ?? "release-assets");
const files = (await readdir(directory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name !== "SHA256SUMS")
  .map((entry) => entry.name)
  .sort();
const lines = [];
for (const name of files) {
  const content = await readFile(resolve(directory, name));
  lines.push(`${createHash("sha256").update(content).digest("hex")}  ${basename(name)}`);
}
await writeFile(resolve(directory, "SHA256SUMS"), `${lines.join("\n")}\n`);
process.stdout.write(`SHA256SUMS gerado para ${files.length} arquivo(s).\n`);
