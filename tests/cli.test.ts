/**
 * Testes de integração do instalador em projetos temporários reais.
 */

import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  stat,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { afterEach, describe, expect, test } from "vitest";
import {
  executeInstallation,
  markContextReady,
  refreshContextSources,
} from "../src/installer.js";
import { runDoctor } from "../src/doctor.js";

const temporaryProjects: string[] = [];

afterEach(async () => {
  for (const path of temporaryProjects.splice(0)) {
    await rm(path, { recursive: true, force: true });
  }
});

describe("CLI do Thothfy", () => {
  test("dry-run apresenta o plano sem criar .thothfy", async () => {
    const project = await createProject();
    const result = await executeInstallation({
      projectRoot: project,
      mode: "init",
      dryRun: true,
      yes: true,
      agent: "codex",
      instructionFile: "AGENTS.md",
    });

    expect(result.dryRun).toBe(true);
    expect(result.actions.some((item) => item.path === ".thothfy/VERSAO.md")).toBe(
      true,
    );
    await expect(stat(join(project, ".thothfy"))).rejects.toMatchObject({
      code: "ENOENT",
    });
  });

  test("init instala o framework e doctor acusa somente o setup pendente", async () => {
    const project = await createProject();
    await writeFile(join(project, "PRODUCT.md"), "# Produto\n");
    await mkdir(join(project, "brand"));
    await writeFile(join(project, "brand", "manual.md"), "# Marca\n");

    await install(project);
    const report = await runDoctor(project);
    const candidates = JSON.parse(
      await readFile(
        join(project, ".thothfy", "fontes-candidatas.json"),
        "utf8",
      ),
    ) as { sources: Array<{ path: string }> };

    expect(report.healthy).toBe(true);
    expect(report.summary.errors).toBe(0);
    expect(report.summary.warnings).toBe(1);
    expect(new Set(candidates.sources.map((item) => item.path))).toEqual(
      new Set(["PRODUCT.md", "brand/manual.md"]),
    );
    expect(
      await readFile(join(project, ".thothfy", "context", "empresa.md"), "utf8"),
    ).toContain("{nome legal completo}");
    expect(
      await readFile(
        join(project, ".thothfy", "brand", "logo", "icon.svg"),
        "utf8",
      ),
    ).toContain('<rect width="512" height="512" rx="112"');
    expect(await readFile(join(project, "AGENTS.md"), "utf8")).toContain(
      "<!-- thothfy:inicio -->",
    );
  });

  test("repair restaura gerenciados e preserva arquivos do usuário", async () => {
    const project = await createProject();
    await install(project);
    const managed = join(project, ".thothfy", "BRAINSTORM.md");
    const userFile = join(project, ".thothfy", "context", "empresa.md");
    await writeFile(managed, "customização local\n");
    await writeFile(userFile, "# Empresa\n\nInformação preservada.\n");

    const result = await executeInstallation({
      projectRoot: project,
      mode: "repair",
      yes: true,
    });

    expect(await readFile(managed, "utf8")).toContain("# BRAINSTORM.md");
    expect(await readFile(userFile, "utf8")).toContain("Informação preservada");
    expect(result.actions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          action: "backup",
          path: ".thothfy/BRAINSTORM.md",
        }),
        expect.objectContaining({
          action: "preserve",
          path: ".thothfy/context/empresa.md",
        }),
      ]),
    );
    const migrationFiles = await listFiles(
      join(project, ".thothfy", "migracoes"),
    );
    expect(
      migrationFiles.some((path) => path.endsWith(".thothfy/BRAINSTORM.md")),
    ).toBe(true);
  });

  test("doctor não altera nenhum arquivo do projeto", async () => {
    const project = await createProject();
    await install(project);
    const before = await fileSnapshot(project);
    await runDoctor(project);
    const after = await fileSnapshot(project);
    expect(after).toEqual(before);
  });

  test("context ready exige empresa, voz, oferta e canal preenchidos", async () => {
    const project = await createProject();
    await install(project);
    await expect(markContextReady(project)).rejects.toThrow(
      "O preenchimento mínimo ainda está incompleto",
    );
    const context = join(project, ".thothfy", "context");
    await writeFile(
      join(context, "empresa.md"),
      `# Empresa

## Identidade

- **Nome oficial:** Acme Ltda.

## Missão e o que a empresa faz

A empresa mantém sistemas de atendimento para pequenas agências.

## Modelo de negócio

O serviço funciona por assinatura mensal.
`,
    );
    await writeFile(
      join(context, "marca-voz.md"),
      `# Marca e Voz

## Tom

- **Em três adjetivos:** direta, técnica e próxima
- **Idioma padrão de produção:** Português do Brasil

## Exemplos de bom texto

> Abra o relatório e confira qual conversa ainda não recebeu resposta.
`,
    );
    await writeFile(
      join(context, "produtos.md"),
      `# Produtos

## Atendimento Acme

- **O que é, em uma frase:** uma aplicação para organizar conversas.
`,
    );
    await writeFile(
      join(context, "canais.md"),
      `# Canais

- **Caminho onde os pacotes são criados:** content/
- **Caminho onde os brainstorms são criados:** brainstorms/

## Blog

- **Ativo?** sim
`,
    );

    await markContextReady(project);
    const report = await runDoctor(project);
    expect(report.summary.warnings).toBe(0);
    expect(report.healthy).toBe(true);
  });

  test("a instalação recusa .thothfy apontando para fora por symlink", async () => {
    const project = await createProject();
    const outside = await createProject();
    await symlink(outside, join(project, ".thothfy"));
    await expect(install(project)).rejects.toThrow(
      "O CLI não grava por link simbólico",
    );
    expect(await readdir(outside)).toEqual([]);
  });

  test("a instalação recusa travessia no diretório personalizado de skills", async () => {
    const project = await createProject();
    await expect(
      executeInstallation({
        projectRoot: project,
        mode: "init",
        yes: true,
        agent: "codex",
        skillsDirectory: "apoio/../../fora",
        instructionFile: "AGENTS.md",
      }),
    ).rejects.toThrow("Diretório de skills inválido");
  });

  test("context scan atualiza as fontes sem alterar FONTES-PROJETO.md", async () => {
    const project = await createProject();
    await install(project);
    const classified = join(project, ".thothfy", "FONTES-PROJETO.md");
    await writeFile(classified, "# Classificação feita pela skill\n");
    await writeFile(join(project, "REGRAS.md"), "# Regras locais\n");

    const count = await refreshContextSources(project);

    expect(count).toBe(2);
    expect(await readFile(classified, "utf8")).toBe(
      "# Classificação feita pela skill\n",
    );
  });
});

async function createProject(): Promise<string> {
  const path = await mkdtemp(join(tmpdir(), "thothfy-cli-test-"));
  temporaryProjects.push(path);
  return path;
}

async function install(projectRoot: string) {
  return executeInstallation({
    projectRoot,
    mode: "init",
    yes: true,
    agent: "codex",
    instructionFile: "AGENTS.md",
  });
}

async function listFiles(root: string, base = root): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) result.push(...(await listFiles(path, base)));
    if (entry.isFile()) result.push(relative(base, path));
  }
  return result;
}

async function fileSnapshot(root: string): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  await snapshotDirectory(root, root, result);
  return result;
}

async function snapshotDirectory(
  root: string,
  directory: string,
  output: Record<string, string>,
): Promise<void> {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await snapshotDirectory(root, path, output);
    } else if (entry.isFile()) {
      const info = await stat(path);
      output[relative(root, path)] = `${info.size}:${info.mtimeMs}`;
    }
  }
}
