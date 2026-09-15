/** Extrai a classificação interna das páginas do manual para o manifesto. */

import { readFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** Lê a tabela de classificação sem incluir seus dados no texto publicado. */
export async function classificationFrom(path) {
  const lines = (await readFile(path, "utf8")).split(/\r?\n/);
  const start = lines.indexOf("## Classificação");
  if (start < 0) return {};
  const rows = {};
  for (const line of lines.slice(start + 1)) {
    const stripped = line.trim();
    if (!stripped) { if (Object.keys(rows).length) break; else continue; }
    if (!stripped.startsWith("|")) { if (Object.keys(rows).length) break; else continue; }
    const cells = stripped.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
    if (cells.length !== 2) continue;
    const [field, value] = cells;
    if (field.toLocaleLowerCase("pt-BR") === "campo" || [...field].every((character) => "-:".includes(character))) continue;
    rows[field.toLocaleLowerCase("pt-BR")] = value;
  }
  return rows;
}

function argumentos(argv) {
  if (argv[0] !== "--root" || !argv[1] || argv.length < 3) throw new Error("Uso: node extract-document-metadata.mjs --root ROOT PAGE...");
  return { root: resolve(argv[1]), pages: argv.slice(2) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const { root, pages } = argumentos(process.argv.slice(2));
    const extracted = {};
    for (const page of pages) {
      const metadata = await classificationFrom(page);
      if (Object.keys(metadata).length) extracted[relative(root, resolve(page)).split("\\").join("/")] = metadata;
    }
    console.log(JSON.stringify(extracted, null, 2));
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    process.exitCode = 1;
  }
}
