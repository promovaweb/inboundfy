/**
 * Refuses a release when the binary, the npm wrapper, the ebook and the
 * changelog disagree on the version.
 *
 * Usage: `bun run release:check [vX.Y.Z]`. With a tag, it must match the
 * version. Exits with 1 and lists every divergence.
 */
import { existsSync, readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const npm = JSON.parse(readFileSync("npm/package.json", "utf8"));
const version: string = pkg.version;
const tag = process.argv[2];
const errors: string[] = [];

if (!/^\d+\.\d+\.\d+$/.test(version)) errors.push(`package.json version is not stable SemVer: ${version}`);
if (npm.version !== version) errors.push(`npm/package.json is ${npm.version}; expected ${version}`);
if (npm.name !== "@promovaweb/inboundfy") errors.push("npm/package.json must be @promovaweb/inboundfy");
if (readFileSync("ebook/VERSION", "utf8").trim() !== version) errors.push("ebook/VERSION differs from package.json");
for (const ext of ["pdf", "epub"]) {
  const file = `ebook/Inboundfy-Guia-do-Usuario-v${version}.${ext}`;
  if (!existsSync(file)) errors.push(`${file} is missing (run: bun run release:sync)`);
}
if (!new RegExp(`^## \\[${version.replaceAll(".", "\\.")}\\]`, "m").test(readFileSync("CHANGELOG.md", "utf8"))) errors.push(`CHANGELOG.md has no entry for ${version}`);
if (tag && tag !== `v${version}`) errors.push(`tag ${tag} differs from v${version}`);
if (/npm publish/.test(readFileSync(".github/workflows/release.yml", "utf8"))) errors.push("release.yml must not publish to npm");

if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  process.exit(1);
}
console.log(`✓ release ${version} consistent`);
