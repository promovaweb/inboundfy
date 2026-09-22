/**
 * Instala o tarball em isolamento e executa o fluxo público do binário.
 */

import { execFileSync } from "node:child_process";
import {
  access,
  mkdtemp,
  mkdir,
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

const sandbox = await mkdtemp(join(tmpdir(), "inboundfy-npm-package-"));
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
    process.platform === "win32" ? "inboundfy.cmd" : "inboundfy",
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
  const contentHelp = execFileSync(bin, ["content", "--help"], {
    cwd: sandbox,
    encoding: "utf8",
  });
  if (!contentHelp.includes("digest") || !contentHelp.includes("status")) {
    throw new Error("A ajuda de content não apresenta digest e status.");
  }
  const statusHelp = execFileSync(bin, ["content", "status", "--help"], {
    cwd: sandbox,
    encoding: "utf8",
  });
  for (const option of ["--audit-report", "--url", "--published-at"]) {
    if (!statusHelp.includes(option)) {
      throw new Error(`A ajuda de content status não apresenta ${option}.`);
    }
  }

  const consumer = join(sandbox, "consumer");
  await mkdir(consumer);
  const runCli = (args) =>
    execFileSync(bin, args, {
      cwd: consumer,
      encoding: "utf8",
    });
  const expectCliError = (args, expectedText) => {
    try {
      runCli(args);
    } catch (error) {
      const output = `${error.stdout ?? ""}${error.stderr ?? ""}`;
      if (!output.includes(expectedText)) {
        throw new Error(`A recusa não explicou “${expectedText}”: ${output}`);
      }
      return;
    }
    throw new Error(`O CLI aceitou uma operação que deveria recusar: ${args.join(" ")}`);
  };
  await writeFile(join(consumer, "PRODUCT.md"), "# Produto de teste\n");
  execFileSync(
    bin,
    [
      "--project",
      consumer,
      "install",
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
  await access(join(consumer, ".inboundfy", "install.json"));
  await access(
    join(consumer, ".inboundfy", "framework", "brand", "logo", "icon.svg"),
  );
  await access(
    join(
      consumer,
      ".inboundfy",
      "framework",
      "docs",
      "method",
      "10-referencia-cli.md",
    ),
  );
  await access(join(consumer, ".codex", "skills", "inboundfy-setup", "SKILL.md"));
  const entrySkill = await readFile(
    join(consumer, ".codex", "skills", "inboundfy", "SKILL.md"),
    "utf8",
  );
  if (!entrySkill.includes("entrada padrão") || !entrySkill.includes("inboundfy-acervo")) {
    throw new Error("A skill orquestradora não foi instalada como entrada principal.");
  }

  const sharedReferences = [
    "01-preflight-e-fontes.md",
    "02-contrato-de-artefato.md",
    "03-interacao-e-handoff.md",
    "04-validacao-e-retomada.md",
    "05-contexto-editorial.md",
  ];
  const sharedDirectory = join(consumer, ".codex", "skills", "_shared");
  const acervoSkill = await readFile(
    join(consumer, ".codex", "skills", "inboundfy-acervo", "SKILL.md"),
    "utf8",
  );
  for (const reference of sharedReferences) {
    await access(join(sharedDirectory, reference));
    if (!acervoSkill.includes(`../_shared/${reference}`)) {
      throw new Error(`inboundfy-acervo não aponta para ${reference}.`);
    }
  }

  await runCli([
    "--project",
    consumer,
    "acervo",
    "add",
    "Material de teste",
    "--text",
    "Uma anotação sobre atendimento ao cliente.",
  ]);
  await runCli(["--project", consumer, "acervo", "process", "0001"]);
  await writeFile(
    join(consumer, ".inboundfy", "estrategia.md"),
    "# Estratégia\n\n- [x] Blog\n",
  );
  const created = JSON.parse(
    await runCli([
      "--project",
      consumer,
      "--json",
      "content",
      "create",
      "blog",
      "Como responder clientes",
      "--persona",
      "persona-01",
      "--acervo",
      "0001",
    ]),
  );
  await runCli([
    "--project",
    consumer,
    "calendario",
    "add",
    "2026-09-20",
    created.id,
  ]);

  const statusArgs = ["--project", consumer, "content", "status", created.id];
  expectCliError([...statusArgs, "aprovado"], "Transição inválida");
  await runCli([...statusArgs, "revisao"]);
  expectCliError([...statusArgs, "aprovado"], "--audit-report");

  const digestArgs = ["--project", consumer, "--json", "content", "digest", created.id];
  const firstDigest = JSON.parse(await runCli(digestArgs));
  const reportPath = `06-auditoria/assets/${created.id}-validacao.md`;
  const reportFile = join(consumer, reportPath);
  await mkdir(join(consumer, "06-auditoria", "assets"), { recursive: true });
  const renderReport = (sha256) =>
    `# Validação da peça\n\n- **ID da peça:** \`${created.id}\`\n- **Asset:** \`${firstDigest.asset}\`\n- **SHA-256 da peça:** \`${sha256}\`\n- **Veredito:** aprovado\n`;
  await writeFile(reportFile, renderReport("0".repeat(64)));
  expectCliError(
    [...statusArgs, "aprovado", "--audit-report", reportPath],
    "não corresponde",
  );
  await writeFile(reportFile, renderReport(firstDigest.sha256));
  await runCli([...statusArgs, "aprovado", "--audit-report", reportPath]);
  await runCli([...statusArgs, "agendado"]);

  const contentFile = join(consumer, created.directory, "README.md");
  const revisedContent = (await readFile(contentFile, "utf8")).replace(
    "PREENCHER. A skill produtora do canal deve redigir a peça aqui.",
    "Texto alterado depois da validação.",
  );
  await writeFile(contentFile, revisedContent);
  expectCliError(
    [
      ...statusArgs,
      "publicado",
      "--url",
      "https://example.test/atendimento",
      "--published-at",
      "2026-09-20",
    ],
    "mudou depois da validação",
  );

  await runCli([...statusArgs, "revisao"]);
  const finalDigest = JSON.parse(await runCli(digestArgs));
  await writeFile(reportFile, renderReport(finalDigest.sha256));
  await runCli([...statusArgs, "aprovado", "--audit-report", reportPath]);
  expectCliError([...statusArgs, "publicado"], "URL HTTP(S)");
  expectCliError(
    [
      ...statusArgs,
      "publicado",
      "--url",
      "endereço sem protocolo",
      "--published-at",
      "2026-09-20",
    ],
    "HTTP ou HTTPS válido",
  );
  expectCliError(
    [
      ...statusArgs,
      "publicado",
      "--url",
      "ftp://example.test/atendimento",
      "--published-at",
      "2026-09-20",
    ],
    "usar HTTP ou HTTPS",
  );
  expectCliError(
    [
      ...statusArgs,
      "publicado",
      "--url",
      "https://example.test/atendimento",
      "--published-at",
      "2026-09-31",
    ],
    "data válida",
  );
  await runCli([
    ...statusArgs,
    "publicado",
    "--url",
    "https://example.test/atendimento",
    "--published-at",
    "2026-09-20",
  ]);

  const contentIndex = JSON.parse(
    await readFile(join(consumer, ".inboundfy", "indices", "conteudos.json"), "utf8"),
  );
  if (contentIndex.items[0]?.status !== "publicado") {
    throw new Error("O fluxo instalado não sincronizou o estado publicado no índice.");
  }
  if (contentIndex.items[0]?.auditReport !== reportPath) {
    throw new Error("O índice não preservou o caminho do relatório de validação.");
  }
  process.stdout.write(
    `${basename(tarball)} instalou e completou o fluxo de acervo, validação, publicação e calendário em isolamento.\n`,
  );
} finally {
  await rm(sandbox, { recursive: true, force: true });
}

function commandNpm() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}
