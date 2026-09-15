/** Remove edições antigas do ebook sem atingir outros arquivos. */

import { readdir, unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ARTIFACT_PATTERN = /^Inboundfy-Guia-do-Usuario-v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)\.(pdf|epub)$/;

/** Mantém as edições SemVer mais recentes e protege a versão vigente. */
export async function pruneEditions({ ebookRoot, keep = 5, protectVersion } = {}) {
  const entries = await readdir(ebookRoot, { withFileTypes: true });
  if (keep < 1) throw new Error("--keep deve ser maior que zero.");
  const artifactsByVersion = new Map();
  for (const entry of entries) {
    const match = entry.name.match(ARTIFACT_PATTERN);
    if (!match || !entry.isFile()) continue;
    const version = match.slice(1, 4).map(Number);
    const key = version.join(".");
    if (!artifactsByVersion.has(key)) artifactsByVersion.set(key, { version, files: [] });
    artifactsByVersion.get(key).files.push(entry.name);
  }
  const versions = [...artifactsByVersion.values()].sort((a, b) => {
    for (let index = 0; index < 3; index += 1) if (a.version[index] !== b.version[index]) return b.version[index] - a.version[index];
    return 0;
  });
  const removedVersions = versions.slice(keep);
  if (protectVersion && removedVersions.some((item) => item.version.join(".") === protectVersion)) {
    throw new Error("a edição vigente não está entre as versões mais recentes.");
  }
  let removedFiles = 0;
  for (const item of removedVersions) for (const file of item.files) { await unlink(resolve(ebookRoot, file)); removedFiles += 1; }
  return { kept: Math.min(versions.length, keep), removedVersions: removedVersions.length, removedFiles };
}

function argumentos(argv) {
  const values = { ebookRoot: null, keep: 5, protectVersion: undefined };
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (flag === "--ebook-root") values.ebookRoot = resolve(argv[++index] ?? "");
    else if (flag === "--keep") values.keep = Number(argv[++index]);
    else if (flag === "--protect-version") values.protectVersion = argv[++index];
    else throw new Error("Uso: node prune-editions.mjs --ebook-root ROOT [--keep N] [--protect-version VERSION]");
  }
  if (!values.ebookRoot) throw new Error("--ebook-root é obrigatório.");
  return values;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const values = argumentos(process.argv.slice(2));
    const result = await pruneEditions(values);
    console.log(`Retenção do ebook: ${result.kept} edição(ões) mantida(s), ${result.removedVersions} removida(s) (${result.removedFiles} arquivo(s)).`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    process.exitCode = 1;
  }
}
