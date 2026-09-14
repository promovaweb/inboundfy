/**
 * Publica o tarball uma única vez e aceita autenticação OIDC do npm.
 */

import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await readFile(join(root, "package.json"), "utf8"),
);
const tarball = resolve(
  process.argv[2] ??
    join(
      root,
      "release-assets",
      `promovaweb-inboundfy-${packageJson.version}.tgz`,
    ),
);
const reference = `${packageJson.name}@${packageJson.version}`;

if (isPublished(reference)) {
  process.stdout.write(`${reference} já existe no npm; publicação ignorada.\n`);
  process.exit(0);
}
execFileSync(commandNpm(), ["publish", tarball, "--access", "public"], {
  cwd: root,
  stdio: "inherit",
});
process.stdout.write(`${reference} publicado no npm.\n`);

function isPublished(reference) {
  try {
    const result = execFileSync(
      commandNpm(),
      ["view", reference, "version", "--json"],
      { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    return JSON.parse(result) === packageJson.version;
  } catch {
    return false;
  }
}

function commandNpm() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}
