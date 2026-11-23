/**
 * Alinha os arquivos públicos à versão canônica do `package.json`:
 * `npm/package.json`, `ebook/VERSION` e os links da edição do ebook.
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

const npmPath = join(root, "npm", "package.json");
const npmPackage = JSON.parse(await readFile(npmPath, "utf8"));
npmPackage.version = version;
await writeFile(npmPath, `${JSON.stringify(npmPackage, null, 2)}\n`);

await writeFile(
  join(root, "ebook", "VERSION"),
  `${version}\n`,
);

for (const relative of ["ebook/README.md", "docs/user/README.md"]) {
  const path = join(root, relative);
  const current = await readFile(path, "utf8");
  const updated = current.replaceAll(
    /Inboundfy-Guia-do-Usuario-v\d+\.\d+\.\d+\.(pdf|epub)/g,
    `Inboundfy-Guia-do-Usuario-v${version}.$1`,
  );
  await writeFile(path, updated);
}

process.stdout.write(`Versão ${version} aplicada ao binário, ao pacote npm e ao ebook.\n`);
