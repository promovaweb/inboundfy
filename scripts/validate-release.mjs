/**
 * Impede release quando CLI, framework, ebook e automação divergem.
 */

import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tag =
  process.argv[2] ??
  (process.env.GITHUB_REF_TYPE === "tag"
    ? process.env.GITHUB_REF_NAME
    : undefined);
const packageJson = await readJson("package.json");
const packageLock = await readJson("package-lock.json");
const changelog = await readFile(join(root, "CHANGELOG.md"), "utf8");
const ebookVersion = extractEbookVersion(
  await readFile(join(root, "ebook", "VERSION"), "utf8"),
);
const workflow = await readFile(
  join(root, ".github", "workflows", "release.yml"),
  "utf8",
);

assertSemver(packageJson.version, "package.json");
equal(packageJson.private, undefined, "O pacote público não pode usar private.");
equal(packageJson.version, packageLock.version, "package-lock.json divergente.");
equal(
  packageJson.version,
  packageLock.packages?.[""]?.version,
  "A versão raiz do lockfile diverge.",
);
equal(
  packageJson.version,
  ebookVersion,
  "A edição do ebook diverge da versão do framework.",
);
equal(
  packageJson.bin?.inboundfy,
  "bin/inboundfy.cjs",
  "O bin público do npm está incorreto.",
);
equal(
  packageJson.publishConfig?.access,
  "public",
  "O pacote precisa ser público no npm.",
);
equal(
  packageJson.license,
  "AGPL-3.0-only",
  "O pacote precisa declarar a licença AGPL-3.0-only.",
);
equal(
  packageLock.packages?.[""]?.license,
  "AGPL-3.0-only",
  "A licença raiz do lockfile diverge.",
);

const escaped = packageJson.version.replaceAll(".", String.raw`\.`);
if (!new RegExp(`^## (?:\\[)?${escaped}(?:\\])?\\b`, "m").test(changelog)) {
  throw new Error(`CHANGELOG.md não possui a versão ${packageJson.version}.`);
}
for (const extension of ["pdf", "epub"]) {
  await access(
    join(
      root,
      "ebook",
      `Inboundfy-Guia-do-Usuario-v${packageJson.version}.${extension}`,
    ),
  );
}
for (const path of [
  "bin/inboundfy.cjs",
  "dist/cli.js",
  "scripts/sync-release-version.mjs",
  "scripts/validate-npm-package.mjs",
  "scripts/publish-npm-package.mjs",
  "scripts/generate-checksums.mjs",
  "LICENSE",
]) {
  await access(join(root, path));
}
for (const expected of [
  "npm run npm:validate-package",
  "scripts/generate-checksums.mjs",
  "gh release create",
  "gh release upload",
]) {
  if (!workflow.includes(expected)) {
    throw new Error(`O workflow de release não contém: ${expected}.`);
  }
}
// A publicação no npm é feita só pela máquina local (RELEASING.md).
for (const forbidden of ["npm publish", "publish:npm", "NPM_TOKEN", "NODE_AUTH_TOKEN", "registry-url"]) {
  if (workflow.includes(forbidden)) {
    throw new Error(`O workflow de release não pode publicar no npm: ${forbidden}.`);
  }
}
if (tag) {
  if (!/^v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(tag)) {
    throw new Error(`Tag inválida: ${tag}.`);
  }
  equal(tag.slice(1), packageJson.version, "A tag diverge do package.json.");
}

process.stdout.write(`Release válida: v${packageJson.version}.\n`);

async function readJson(relative) {
  return JSON.parse(await readFile(join(root, relative), "utf8"));
}

function extractEbookVersion(content) {
  return content.match(/^\d+\.\d+\.\d+$/m)?.[0] ?? null;
}

function assertSemver(value, source) {
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(value ?? "")) {
    throw new Error(`SemVer inválido em ${source}: ${String(value)}.`);
  }
}

function equal(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message} Recebido ${String(actual)}.`);
  }
}
