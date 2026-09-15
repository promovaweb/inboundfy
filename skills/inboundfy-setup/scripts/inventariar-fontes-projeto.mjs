/**
 * Localiza Markdown de contexto, incluindo toda fonte dentro de brand/.
 *
 * A função exportada é usada pelo setup e pelos testes. O CLI apenas lê a
 * raiz indicada e imprime um JSON determinístico, sem alterar o projeto.
 */

import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { basename, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DIRETORIOS_IGNORADOS = new Set([
  ".agents", ".claude", ".codex", ".git", ".inboundfy", ".venv",
  "build", "coverage", "dist", "node_modules", "vendor",
]);

/** Aceita nomes Markdown em maiúsculas, números e separadores. */
export function nomeEmMaiusculas(caminho) {
  const stem = basename(caminho, extname(caminho));
  return extname(caminho).toLowerCase() === ".md"
    && /\p{L}/u.test(stem)
    && stem === stem.toLocaleUpperCase("pt-BR")
    && [...stem].every((character) => /[\p{L}\p{N}_-]/u.test(character));
}

function fonteDescoberta(caminho, raiz) {
  const partes = relative(raiz, caminho).split("/");
  const dentroDeBrand = partes[0] === "brand";
  return nomeEmMaiusculas(caminho) || (dentroDeBrand && extname(caminho).toLowerCase() === ".md");
}

/** Resume estrutura e identidade do arquivo sem expor seu corpo. */
export async function extrairMetadados(caminho, raiz) {
  const conteudo = await readFile(caminho, "utf8");
  const headings = conteudo.split(/\r?\n/)
    .filter((linha) => linha.startsWith("#"))
    .map((linha) => linha.replace(/^#+/, "").trim());
  return {
    caminho: relative(raiz, caminho).split("\\").join("/"),
    titulo: headings[0] ?? "",
    headings,
    sha256: createHash("sha256").update(conteudo, "utf8").digest("hex"),
  };
}

/** Percorre o projeto sem seguir áreas geradas, dependências ou submódulos. */
export async function inventariar(raiz, exclusoes = new Set()) {
  const encontrados = [];
  async function percorrer(atual) {
    const entries = await readdir(atual, { withFileTypes: true });
    for (const entry of entries) {
      const caminho = join(atual, entry.name);
      const relativo = relative(raiz, caminho).split("\\").join("/");
      if (entry.isSymbolicLink() || DIRETORIOS_IGNORADOS.has(entry.name) || exclusoes.has(relativo)) continue;
      if (entry.isDirectory()) {
        try { await readdir(join(caminho, ".git")); continue; } catch (error) { if (error.code !== "ENOENT") throw error; }
        await percorrer(caminho);
      } else if (entry.isFile() && fonteDescoberta(caminho, raiz)) {
        encontrados.push(await extrairMetadados(caminho, raiz));
      }
    }
  }
  await percorrer(raiz);
  return encontrados.sort((a, b) => a.caminho.localeCompare(b.caminho));
}

function argumentos(argv) {
  const [raiz, ...resto] = argv;
  const exclusoes = new Set();
  for (let index = 0; index < resto.length; index += 1) {
    if (resto[index] !== "--excluir" || !resto[index + 1]) throw new Error("Uso: node inventariar-fontes-projeto.mjs RAIZ [--excluir CAMINHO]");
    exclusoes.add(resto[index + 1]);
    index += 1;
  }
  if (!raiz) throw new Error("Uso: node inventariar-fontes-projeto.mjs RAIZ [--excluir CAMINHO]");
  return { raiz: resolve(raiz), exclusoes };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const { raiz, exclusoes } = argumentos(process.argv.slice(2));
    const entries = await readdir(raiz, { withFileTypes: true });
    if (!entries) throw new Error(`Raiz de projeto inexistente: ${raiz}`);
    console.log(JSON.stringify(await inventariar(raiz, exclusoes), null, 2));
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    process.exitCode = 1;
  }
}
