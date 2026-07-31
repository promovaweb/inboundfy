/**
 * Instala o tarball em isolamento e executa o fluxo público do binário.
 */

import { execFileSync } from "node:child_process";
import {
  access,
  mkdtemp,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await readFile(join(root, "package.json"), "utf8"),
);
const tarball = resolve(
  process.argv[2] ??
    join(root, `${packageJson.name.replace("@", "").replace("/", "-")}-${packageJson.version}.tgz`),
);
await access(tarball);

const sandbox = await mkdtemp(join(tmpdir(), "thothfy-npm-package-"));
try {
  execFileSync(commandNpm(), ["init", "-y"], {
    cwd: sandbox,
    stdio: "ignore",
  });
  execFileSync(commandNpm(), ["install", tarball, "--ignore-scripts"], {
    cwd: sandbox,
    stdio: "inherit",
  });
  const bin = join(
    sandbox,
    "node_modules",
    ".bin",
    process.platform === "win32" ? "thothfy.cmd" : "thothfy",
  );
  const version = execFileSync(bin, ["--version"], {
    cwd: sandbox,
    encoding: "utf8",
  }).trim();
  if (version !== packageJson.version) {
    throw new Error(`O binário respondeu ${version}; esperado ${packageJson.version}.`);
  }
  const help = execFileSync(bin, ["--help"], {
    cwd: sandbox,
    encoding: "utf8",
  });
  for (const expected of ["Uso:", "Opções:", "Comandos:", "doctor", "context"]) {
    if (!help.includes(expected)) {
      throw new Error(`A ajuda pública não contém: ${expected}.`);
    }
  }

  const consumer = join(sandbox, "consumer");
  await import("node:fs/promises").then(({ mkdir }) => mkdir(consumer));
  await writeFile(join(consumer, "PRODUCT.md"), "# Produto de teste\n");
  execFileSync(
    bin,
    [
      "--project",
      consumer,
      "init",
      "--agent",
      "codex",
      "--instruction-file",
      "AGENTS.md",
      "--yes",
    ],
    { cwd: consumer, stdio: "ignore" },
  );
  execFileSync(bin, ["--project", consumer, "doctor"], {
    cwd: consumer,
    stdio: "ignore",
  });
  await access(join(consumer, ".thothfy", "install.json"));
  await access(join(consumer, ".thothfy", "brand", "logo", "icon.svg"));
  await access(join(consumer, ".codex", "skills", "thothfy-setup", "SKILL.md"));
  process.stdout.write(
    `${basename(tarball)} instalou e diagnosticou um projeto isolado.\n`,
  );
} finally {
  await rm(sandbox, { recursive: true, force: true });
}

function commandNpm() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}
