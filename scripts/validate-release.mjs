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
const releaseManifest = await readJson(".release-please-manifest.json");
const releaseConfig = await readJson("release-please-config.json");
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
  releaseManifest["."],
  "O manifesto do Release Please diverge.",
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
  releaseConfig.packages?.["."]?.["release-type"],
  "node",
  "O Release Please precisa usar o tipo node.",
);
if (!releaseConfig.packages?.["."]?.["extra-files"]?.some(
  (item) => item.path === "ebook/VERSION",
)) {
  throw new Error("O Release Please não atualiza ebook/VERSION.");
}

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
  "googleapis/release-please-action@v5",
  "npm run npm:validate-package",
  "npm run publish:npm",
  "id-token: write",
  "npm run release:sync",
]) {
  if (!workflow.includes(expected)) {
    throw new Error(`O workflow de release não contém: ${expected}.`);
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
