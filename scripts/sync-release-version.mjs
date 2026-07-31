/**
 * Alinha os arquivos públicos à versão canônica do `package.json`.
 */

import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await readFile(join(root, "package.json"), "utf8"),
);
const version = packageJson.version;

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  throw new Error(`A versão estável esperada é inválida: ${String(version)}.`);
}

await writeFile(
  join(root, "ebook", "VERSION"),
  `# x-release-please-start-version\n${version}\n# x-release-please-end\n`,
);

for (const relative of ["ebook/README.md", "docs/user/README.md"]) {
  const path = join(root, relative);
  const current = await readFile(path, "utf8");
  const updated = current.replaceAll(
    /Thothfy-Guia-do-Usuario-v\d+\.\d+\.\d+\.(pdf|epub)/g,
    `Thothfy-Guia-do-Usuario-v${version}.$1`,
  );
  await writeFile(path, updated);
}

process.stdout.write(`Versão ${version} aplicada ao framework e ao ebook.\n`);
