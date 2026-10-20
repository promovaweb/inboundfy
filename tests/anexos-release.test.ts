/** Executa o trecho Bash de upload com um GitHub simulado, sem acesso remoto. */
import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { expect, test } from "vitest";

const raiz = resolve(import.meta.dirname, "..");

test.each(["ausente", "idêntico", "diferente"])("anexo %s durante recuperação", async (caso) => {
  const pasta = await mkdtemp(join(tmpdir(), "inboundfy-anexos-"));
  try {
    await mkdir(join(pasta, "release-assets"));
    await mkdir(join(pasta, "bin"));
    await writeFile(join(pasta, "release-assets", "pacote.tgz"), "conteúdo validado");
    // O simulador recusa opções desconhecidas e registra somente uploads.
    await writeFile(join(pasta, "bin", "gh"), `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const caso = process.env.CASO_ANEXO;
if (args[0] !== "release" || args[2] !== "v0.5.2") process.exit(2);
if (args[1] === "view" && args.slice(3).join(" ") === "--json assets") {
  process.stdout.write(JSON.stringify({assets: caso === "ausente" ? [] : [{name: "pacote.tgz"}]}));
} else if (args[1] === "download" && args[3] === "--pattern" && args[5] === "--dir") {
  fs.writeFileSync(path.join(args[6], args[4]), caso === "idêntico" ? "conteúdo validado" : "outro conteúdo");
} else if (args[1] === "upload" && args.length === 4) {
  fs.appendFileSync(path.join(process.env.RUNNER_TEMP, "uploads"), args[3] + "\\n");
} else process.exit(2);
`, { mode: 0o755 });
    const workflow = await readFile(join(raiz, ".github/workflows/release.yml"), "utf8");
    const trecho = workflow.match(/- name: Anexar arquivos à GitHub Release\n        run: \|\n([\s\S]*?)\n      - name:/)?.[1];
    expect(trecho).toBeTruthy();
    const executar = () => execFileSync("bash", ["-e", "-o", "pipefail", "-c",
      trecho!.split("\n").map((linha) => linha.slice(10)).join("\n"),
    ], {
      cwd: pasta,
      env: { ...process.env, PATH: `${join(pasta, "bin")}:${process.env.PATH}`,
        RUNNER_TEMP: pasta, TMPDIR: pasta, RELEASE_TAG: "v0.5.2", CASO_ANEXO: caso },
      stdio: "pipe",
    });
    if (caso === "diferente") expect(executar).toThrow();
    else executar();
    const uploads = await readFile(join(pasta, "uploads"), "utf8").catch(() => "");
    expect(uploads).toBe(caso === "ausente" ? "release-assets/pacote.tgz\n" : "");
  } finally {
    await rm(pasta, { recursive: true, force: true });
  }
});
