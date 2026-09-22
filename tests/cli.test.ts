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
import { addAcervo, processAcervo } from "../src/acervo.js";
import { createContent } from "../src/content.js";
import { addToCalendar } from "../src/calendar.js";
import { getContentDigest, updateContentStatus } from "../src/pipeline.js";

const temporaryProjects: string[] = [];

afterEach(async () => {
  for (const path of temporaryProjects.splice(0)) {
    await rm(path, { recursive: true, force: true });
  }
});

describe("CLI do Inboundfy", () => {
  test("dry-run apresenta o plano sem criar .inboundfy", async () => {
    const project = await createProject();
    const result = await executeInstallation({
      projectRoot: project,
      mode: "install",
      dryRun: true,
      yes: true,
      agent: "codex",
      instructionFile: "AGENTS.md",
    });

    expect(result.dryRun).toBe(true);
    expect(result.actions.some((item) => item.path === ".inboundfy/framework/VERSAO.md")).toBe(
      true,
    );
    await expect(stat(join(project, ".inboundfy"))).rejects.toMatchObject({
      code: "ENOENT",
    });
  });

  test("install instala o framework e doctor acusa somente o setup pendente", async () => {
    const project = await createProject();
    await writeFile(join(project, "PRODUCT.md"), "# Produto\n");
    await mkdir(join(project, "brand"));
    await writeFile(join(project, "brand", "manual.md"), "# Marca\n");

    await install(project);
    const report = await runDoctor(project);
    const candidates = JSON.parse(
      await readFile(
        join(project, ".inboundfy", "fontes-candidatas.json"),
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
      await readFile(join(project, ".inboundfy", "context", "empresa.md"), "utf8"),
    ).toContain("{nome legal completo}");
    expect(
      await readFile(
        join(project, ".inboundfy", "framework", "brand", "logo", "icon.svg"),
        "utf8",
      ),
    ).toContain('<rect width="512" height="512" rx="112"');
    expect(await readFile(join(project, "AGENTS.md"), "utf8")).toContain(
      "<!-- inboundfy:inicio -->",
    );
  });

  test("mantém toda a configuração e o contexto dentro de .inboundfy", async () => {
    const project = await createProject();
    await install(project);

    const configNames = [
      "README.md",
      "estrategia.md",
      "pipeline.md",
      "fontes-projeto.md",
      "fontes-candidatas.json",
    ];
    for (const name of configNames) {
      await expect(stat(join(project, ".inboundfy", name))).resolves.toBeTruthy();
      await expect(stat(join(project, name))).rejects.toMatchObject({ code: "ENOENT" });
    }
    for (const name of [
      "empresa.md",
      "pessoas.md",
      "produtos.md",
      "servicos.md",
      "ofertas.md",
      "marca-voz.md",
      "publico.md",
      "concorrentes.md",
      "enderecos.md",
      "links.md",
      "canais.md",
      "ferramentas.md",
      "campanhas.md",
      "glossario.md",
      "proibicoes.md",
      "estruturas-proibidas.md",
      "aprendizado.md",
    ]) {
      await expect(stat(join(project, ".inboundfy", "context", name))).resolves.toBeTruthy();
      await expect(stat(join(project, "context", name))).rejects.toMatchObject({ code: "ENOENT" });
    }
    for (const name of ["acervo.json", "conteudos.json", "calendario.json"]) {
      await expect(stat(join(project, ".inboundfy", "indices", name))).resolves.toBeTruthy();
    }
  });

  test("repair restaura gerenciados e preserva arquivos do usuário", async () => {
    const project = await createProject();
    await install(project);
    const managed = join(project, ".inboundfy", "framework", "BRAINSTORM.md");
    const userFile = join(project, ".inboundfy", "context", "empresa.md");
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
          path: ".inboundfy/framework/BRAINSTORM.md",
        }),
        expect.objectContaining({
          action: "preserve",
          path: ".inboundfy/context/empresa.md",
        }),
      ]),
    );
    const migrationFiles = await listFiles(
      join(project, ".inboundfy", "migracoes"),
    );
    expect(
      migrationFiles.some((path) => path.endsWith(".inboundfy/framework/BRAINSTORM.md")),
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

  test("context ready exige empresa, voz, persona e canal preenchidos", async () => {
    const project = await createProject();
    await install(project);
    await expect(markContextReady(project)).rejects.toThrow(
      "O preenchimento mínimo ainda está incompleto",
    );
    const context = join(project, ".inboundfy");
    await writeFile(
      join(context, "context", "empresa.md"),
      `# Inboundfy\n\n- **Nome da empresa:** Acme Ltda.\n- **Descrição curta:** Sistemas de atendimento para agências.\n- **Site principal:** https://acme.example\n`,
    );
    await writeFile(
      join(context, "context", "marca-voz.md"),
      `# Voz\n\n- **Três a cinco adjetivos:** direta, técnica e próxima\n- **Pessoa verbal:** primeira pessoa\n- **Idioma e variante:** pt-BR\n\n## Exemplo aprovado\n\n> Abra o relatório e confira qual conversa ainda não recebeu resposta.\n`,
    );
    await writeFile(
      join(context, "context", "publico.md"),
      `# Personas\n\n## Persona 01: Gestora de agência\n\n- **Quem é:** lidera uma agência pequena.\n- **Contexto de compra:** procura organizar o atendimento.\n- **Problema que tenta resolver:** perde conversas importantes.\n- **Resultado que procura:** responder com clareza e rapidez.\n`,
    );
    await writeFile(
      join(context, "estrategia.md"),
      `# Estratégia\n\n- **Objetivo de negócio:** gerar demonstrações qualificadas.\n\n## Canais ativos\n\n- [x] Blog\n`,
    );

    await markContextReady(project);
    const report = await runDoctor(project);
    expect(report.summary.warnings).toBe(0);
    expect(report.healthy).toBe(true);
  });

  test("a instalação recusa .inboundfy apontando para fora por symlink", async () => {
    const project = await createProject();
    const outside = await createProject();
    await symlink(outside, join(project, ".inboundfy"));
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
        mode: "install",
        yes: true,
        agent: "codex",
        skillsDirectory: "apoio/../../fora",
        instructionFile: "AGENTS.md",
      }),
    ).rejects.toThrow("Diretório de skills inválido");
  });

  test("context scan atualiza as fontes sem alterar fontes-projeto.md", async () => {
    const project = await createProject();
    await install(project);
    const classified = join(project, ".inboundfy", "fontes-projeto.md");
    await writeFile(classified, "# Classificação feita pela skill\n");
    await writeFile(join(project, "REGRAS.md"), "# Regras locais\n");

    const count = await refreshContextSources(project);

    expect(count).toBe(2);
    expect(await readFile(classified, "utf8")).toBe(
      "# Classificação feita pela skill\n",
    );
  });

  test("fluxo do acervo cria bruto, processado, índices e saída ligada ao calendário", async () => {
    const project = await createProject();
    await install(project);
    await selectChannel(project, "Blog");
    const raw = "\uFEFFUma anotação sobre como responder clientes.  \r\n\nLinha dois\0\n";
    const acervo = await addAcervo(project, {
      title: "Aula sobre atendimento",
      raw,
      source: "nota interna",
    });
    await processAcervo(project, acervo.id);
    const content = await createContent(project, {
      channel: "blog",
      title: "Como responder com contexto",
      personas: ["persona-01"],
      acervo: [acervo.id],
    });
    const calendar = await addToCalendar(project, "2026-09-20", content.id);
    expect(acervo.directory).toMatch(/^acervo\/0001-/u);
    expect(content.directory).toMatch(/^canais\/blog\/0001-/u);
    for (const [index, file] of [
      "00-entrada.md",
      "01-processado.md",
      "02-base-editorial.md",
      "03-estrategia-brief.md",
      "04-rascunho.md",
      "05-peca.md",
      "06-pacote.md",
    ].entries()) {
      const audit = await readFile(
        join(project, acervo.directory, "auditorias", "anti-slop", file),
        "utf8",
      );
      expect(audit).toContain(`etapa: A${index}`);
      expect(audit).toContain("estado: pendente");
    }
    expect(content.baseEditorial).toEqual([
      `${acervo.directory}/base-editorial.md`,
    ]);
    expect(calendar.path).toBe("calendario/2026-09.md");
    expect(await readFile(join(project, acervo.directory, "bruto.md"))).toEqual(
      Buffer.from(raw),
    );
    expect(await readFile(join(project, content.directory, "README.md"), "utf8")).toContain("bases_editoriais:");
    expect(await readFile(join(project, content.directory, "README.md"), "utf8")).toContain("persona-01");
    expect(await readFile(join(project, "calendario", "2026-09.md"), "utf8")).toContain("0001");
    expect(await readFile(join(project, "calendario", "2026-09.md"), "utf8")).toContain("personas: persona-01");
  });

  test("pipeline exige revisão, relatório ligado à peça e metadados de publicação", async () => {
    const project = await createProject();
    await install(project);
    await selectChannel(project, "LinkedIn");
    const content = await createContent(project, {
      channel: "linkedin",
      title: "Nota de produto",
      personas: ["persona-01"],
      acervo: [],
    });

    await expect(
      updateContentStatus(project, content.id, { status: "aprovado" }),
    ).rejects.toThrow("Transição inválida");
    await updateContentStatus(project, content.id, { status: "revisao" });
    await expect(
      updateContentStatus(project, content.id, { status: "aprovado" }),
    ).rejects.toThrow("--audit-report");
    await expect(
      updateContentStatus(project, content.id, { status: "publicado" }),
    ).rejects.toThrow("Transição inválida");

    const digest = await getContentDigest(project, content.id);
    const reportPath = "06-auditoria/assets/0001-nota-de-produto.md";
    await mkdir(join(project, "06-auditoria", "assets"), { recursive: true });
    const report = (
      sha256: string,
      verdict = "aprovado",
      reportId = content.id,
      reportAsset = digest.asset,
    ) =>
      `# Validação\n\n- **ID da peça:** \`${reportId}\`\n- **Asset:** \`${reportAsset}\`\n- **SHA-256 da peça:** \`${sha256}\`\n- **Veredito:** ${verdict}\n`;
    const rejectedReports = [
      [report("0".repeat(64)), "não corresponde"],
      [report(digest.sha256, "aprovado", "9999"), "identificar a peça"],
      [report(digest.sha256, "aprovado", content.id, "canais/blog/outro/README.md"), "apontar para"],
      [report("z".repeat(64)), "SHA-256 completo"],
      [report(digest.sha256, "reprovado"), "Veredito"],
    ] as const;
    for (const [invalidReport, reason] of rejectedReports) {
      await writeFile(join(project, reportPath), invalidReport);
      await expect(
        updateContentStatus(project, content.id, {
          status: "aprovado",
          auditReport: reportPath,
        }),
      ).rejects.toThrow(reason);
    }

    await writeFile(join(project, reportPath), report(digest.sha256));
    const approved = await updateContentStatus(project, content.id, {
      status: "aprovado",
      auditReport: reportPath,
    });
    expect(approved.auditReport).toBe(reportPath);
    expect(approved.approvedAssetSha256).toBe(digest.sha256);
    expect(await readFile(join(project, content.directory, "README.md"), "utf8")).toContain(
      `relatorio_validacao: "${reportPath}"`,
    );

    await addToCalendar(project, "2026-09-20", content.id);
    await updateContentStatus(project, content.id, { status: "agendado" });
    const assetPath = join(project, content.directory, "README.md");
    const changedAsset = (await readFile(assetPath, "utf8")).replace(
      "PREENCHER. A skill produtora do canal deve redigir a peça aqui.",
      "Texto alterado depois da validação.",
    );
    await writeFile(assetPath, changedAsset);
    await expect(
      updateContentStatus(project, content.id, {
        status: "publicado",
        url: "https://example.test/nota",
        publishedAt: "2026-09-20",
      }),
    ).rejects.toThrow("mudou depois da validação");

    await updateContentStatus(project, content.id, { status: "revisao" });
    const revisedDigest = await getContentDigest(project, content.id);
    await writeFile(join(project, reportPath), report(revisedDigest.sha256));
    await updateContentStatus(project, content.id, {
      status: "aprovado",
      auditReport: reportPath,
    });
    await expect(
      updateContentStatus(project, content.id, { status: "publicado" }),
    ).rejects.toThrow("URL HTTP(S)");
    await expect(
      updateContentStatus(project, content.id, {
        status: "publicado",
        url: "endereço sem protocolo",
        publishedAt: "2026-09-20",
      }),
    ).rejects.toThrow("HTTP ou HTTPS válido");
    await expect(
      updateContentStatus(project, content.id, {
        status: "publicado",
        url: "ftp://example.test/nota",
        publishedAt: "2026-09-20",
      }),
    ).rejects.toThrow("usar HTTP ou HTTPS");
    await expect(
      updateContentStatus(project, content.id, {
        status: "publicado",
        url: "https://example.test/nota",
        publishedAt: "2026-09-31",
      }),
    ).rejects.toThrow("data válida");
    const published = await updateContentStatus(project, content.id, {
      status: "publicado",
      url: "https://example.test/nota",
      publishedAt: "2026-09-20",
    });

    expect(published.status).toBe("publicado");
    expect(await readFile(assetPath, "utf8")).toContain("estado: publicado");
    expect(await readFile(join(project, "calendario", "2026-09.md"), "utf8")).toContain(
      "estado: publicado",
    );
  });

  test("content recusa canal fora da estratégia", async () => {
    const project = await createProject();
    await install(project);
    await selectChannel(project, "Blog");

    await expect(
      createContent(project, {
        channel: "linkedin",
        title: "Peça não autorizada",
        personas: ["persona-01"],
        acervo: [],
      }),
    ).rejects.toThrow("não está selecionado");
  });
});

async function createProject(): Promise<string> {
  const path = await mkdtemp(join(tmpdir(), "inboundfy-cli-test-"));
  temporaryProjects.push(path);
  return path;
}

async function install(projectRoot: string) {
  return executeInstallation({
    projectRoot,
    mode: "install",
    yes: true,
    agent: "codex",
    instructionFile: "AGENTS.md",
  });
}

async function selectChannel(projectRoot: string, channel: string): Promise<void> {
  await writeFile(
    join(projectRoot, ".inboundfy", "estrategia.md"),
    `# Estratégia\n\n- **Objetivo de negócio:** validar o fluxo.\n\n## Canais ativos\n\n- [x] ${channel}\n`,
  );
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
