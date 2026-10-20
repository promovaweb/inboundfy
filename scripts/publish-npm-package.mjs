/**
 * Publica o tarball uma única vez e aceita autenticação OIDC do npm.
 * Somente E404 permite iniciar uma publicação após falha de consulta.
 */

import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const registry = "https://registry.npmjs.org";

/**
 * Consulta uma versão exata no registry público.
 * Falhas de rede, autenticação e respostas inválidas interrompem o processo.
 * A função aceita um executor substituível para testes sem publicar pacotes.
 */
export function isPublished(reference, version, root, run = execFileSync) {
  let result;
  try {
    result = run(
      commandNpm(),
      ["view", reference, "version", "--json", `--registry=${registry}`],
      { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    ).trim();
  } catch (error) {
    let code;
    try {
      code = JSON.parse(String(error.stdout)).error?.code;
    } catch {
      // Saída sem JSON não comprova que a versão está ausente.
    }
    if (code === "E404") return false;
    throw new Error(`Não foi possível consultar ${reference} no npm.`, { cause: error });
  }
  // O npm também retorna uma lista para a consulta de uma versão exata.
  const parsed = JSON.parse(result);
  const versions = Array.isArray(parsed) ? parsed : [parsed];
  if (versions.length !== 1 || versions[0] !== version) {
    throw new Error(`O npm retornou uma versão diferente de ${version}.`);
  }
  return true;
}

function commandNpm() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

/** Publica somente após consultar o registry e confirma a versão disponível. */
export function publishPackage(packageJson, tarball, root, run = execFileSync) {
  const reference = `${packageJson.name}@${packageJson.version}`;
  if (isPublished(reference, packageJson.version, root, run)) return false;
  run(commandNpm(), ["publish", tarball, "--access", "public", `--registry=${registry}`], {
    cwd: root,
    stdio: "inherit",
  });
  if (!isPublished(reference, packageJson.version, root, run)) {
    throw new Error(`${reference} ainda não está disponível no registry público. Consulte antes de repetir a publicação.`);
  }
  return true;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
  const tarball = resolve(process.argv[2] ??
    join(root, "release-assets", `promovaweb-inboundfy-${packageJson.version}.tgz`));
  const published = publishPackage(packageJson, tarball, root);
  process.stdout.write(`${packageJson.name}@${packageJson.version}: ${published ? "publicado" : "já disponível"} no npm.\n`);
}
