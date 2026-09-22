/** Testes executáveis do contrato de validação de assets do Inboundfy. */

import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { describe, expect, test } from "vitest";
import { inventariar } from "../skills/inboundfy-setup/scripts/inventariar-fontes-projeto.mjs";
import { checkFiles, writeFiles } from "../scripts/gerenciar-skills.mjs";
import { validateFramework } from "../scripts/validar-framework.mjs";
import { collectSkillsPayload } from "../src/payload.js";
import { PIPELINE_STATES } from "../src/pipeline.js";

const RAIZ = resolve(import.meta.dirname, "..");
const EXEMPLO = join(RAIZ, "examples", "validacao-assets");
const PROIBICOES_FIXTURE = [
  "No cenário atual",
  "É importante ressaltar",
  "robusta e inovadora",
  "Não é apenas",
  "Em suma",
];
const SEQUENCIAS_ESPERADAS = [
  "skills/inboundfy-brainstorm/references/etapas/00-triagem.md",
  "skills/inboundfy-brainstorm/references/etapas/01-entrevista.md",
  "skills/inboundfy-brainstorm/references/etapas/02-pesquisa.md",
  "skills/inboundfy-brainstorm/references/etapas/03-sintese.md",
  "skills/inboundfy-brainstorm/references/etapas/04-validacao.md",
  "skills/inboundfy-estrategia/references/etapas/00-briefing-cliente.md",
  "skills/inboundfy-estrategia/references/etapas/01-pesquisa-mercado.md",
  "skills/inboundfy-estrategia/references/etapas/02-campanha.md",
  "skills/inboundfy-estrategia/references/etapas/03-calendario.md",
  "skills/inboundfy-planejamento/references/etapas/00-triagem.md",
  "skills/inboundfy-planejamento/references/etapas/01-saneamento.md",
  "skills/inboundfy-planejamento/references/etapas/02-pesquisa.md",
  "skills/inboundfy-planejamento/references/etapas/03-oportunidades.md",
  "skills/inboundfy-planejamento/references/etapas/04-briefing.md",
  "skills/inboundfy-planejamento/references/etapas/05-producao.md",
  "skills/inboundfy-planejamento/references/etapas/06-auditoria.md",
] as const;

describe("validação de assets", () => {
  test("framework completo e pareado", async () => {
    await expect(validateFramework()).resolves.toEqual([]);
  });

  test("arquitetura comum tem catálogo, interfaces e perfis", async () => {
    expect(await checkFiles()).toEqual([]);
    const catalogo = JSON.parse(await readFile(join(RAIZ, "skills", "catalogo.json"), "utf8"));
    const diretorios = new Set((await readdir(join(RAIZ, "skills"), { withFileTypes: true })).filter((item) => item.isDirectory() && item.name.startsWith("inboundfy")).map((item) => item.name));
    expect(catalogo.quantidade).toBe(114);
    expect(new Set(catalogo.skills.map((item: { id: string }) => item.id))).toEqual(diretorios);
    expect(catalogo.referencias_compartilhadas).toHaveLength(5);
    for (const item of catalogo.skills) {
      const pasta = join(RAIZ, "skills", item.id);
      expect(await readFile(join(pasta, "SKILL.md"), "utf8")).toBeTruthy();
      expect(await readFile(join(pasta, "REFERENCIA.md"), "utf8")).toBeTruthy();
      expect(await readFile(join(pasta, "agents", "openai.yaml"), "utf8")).toContain(`$${item.id}`);
      expect(Object.keys(item.perfil).sort()).toEqual(["entrada", "handoff", "saida", "validacao"]);
    }
  });

  test("payload de skills inclui a orquestradora", async () => {
    const payload = await collectSkillsPayload(".agents/skills");
    const targets = payload.map((item) => item.targetRelative);
    expect(targets).toContain(
      ".agents/skills/inboundfy/SKILL.md",
    );
    const shared = [
      "01-preflight-e-fontes.md",
      "02-contrato-de-artefato.md",
      "03-interacao-e-handoff.md",
      "04-validacao-e-retomada.md",
      "05-contexto-editorial.md",
    ];
    for (const file of shared) {
      expect(targets).toContain(`.agents/skills/_shared/${file}`);
    }
    const acervo = await readFile(
      join(RAIZ, "skills", "inboundfy-acervo", "SKILL.md"),
      "utf8",
    );
    for (const file of shared) {
      expect(targets).toContain(`.agents/skills/_shared/${file}`);
      expect(acervo).toContain(`../_shared/${file}`);
    }
  });

  test("$inboundfy é a entrada principal e iniciar só encaminha", async () => {
    const principal = await readFile(
      join(RAIZ, "skills", "inboundfy", "SKILL.md"),
      "utf8",
    );
    const alias = await readFile(
      join(RAIZ, "skills", "inboundfy-iniciar", "SKILL.md"),
      "utf8",
    );
    for (const fluxo of [
      "inboundfy-brainstorm",
      "inboundfy-estrategia",
      "inboundfy-acervo",
      "inboundfy-setup",
      "inboundfy-aprendizado",
      "inboundfy-anti-slop",
    ]) {
      expect(principal).toContain(fluxo);
    }
    expect(principal).toContain("entrada padrão");
    expect(principal).toContain("operação isolada");
    expect(alias).toContain("compatibilidade");
    expect(alias).toContain("pedido original");
    expect(alias).toContain("`$inboundfy`");
    expect(alias).toContain("nenhuma gravação local");
  });

  test("script de enriquecimento é idempotente", () => {
    return expect(writeFiles()).resolves.toMatchObject({ count: 114 });
  });

  test("acervo é a skill mestre do fluxo", async () => {
    const skill = await readFile(join(RAIZ, "skills", "inboundfy-acervo", "SKILL.md"), "utf8");
    for (const etapa of [
      "inboundfy-processar-acervo", "inboundfy-extrair-faq", "inboundfy-pesquisa-acervo",
      "inboundfy-base-editorial", "references/estrategia-do-acervo.md", "inboundfy-producao",
      "inboundfy-anti-slop", "inboundfy-pipeline", "inboundfy-catalogo", ".inboundfy/context/marca-voz.md",
      ".inboundfy/context/publico.md", ".inboundfy/context/proibicoes.md", ".inboundfy/context/glossario.md",
      ".inboundfy/context/aprendizado.md",
    ]) expect(skill).toContain(etapa);
  });

  test("anti-slop possui ciclos distribuídos pelo pipeline", async () => {
    const etapas = await readFile(join(RAIZ, "skills", "inboundfy-anti-slop", "ETAPAS.md"), "utf8");
    for (const etapa of ["A0", "A1", "A2", "A3", "A4", "A5", "A6"]) {
      expect(etapas).toContain(`| ${etapa} |`);
    }
    const acervo = await readFile(join(RAIZ, "skills", "inboundfy-acervo", "SKILL.md"), "utf8");
    const producao = await readFile(join(RAIZ, "skills", "inboundfy-producao", "SKILL.md"), "utf8");
    const validador = await readFile(join(RAIZ, "skills", "inboundfy-base-validador", "SKILL.md"), "utf8");
    for (const etapa of ["A0", "A1", "A2", "A3", "A4", "A5", "A6"]) {
      expect(acervo).toMatch(new RegExp(`marco\\s+${etapa}`));
    }
    expect(producao).toMatch(/marco\s+A4/);
    expect(producao).toMatch(/marco\s+A5/);
    expect(validador).toMatch(/marco\s+A5/);
  });

  test("brand minúscula entra no inventário", async () => {
    const caminhos = new Set((await inventariar(EXEMPLO)).map((item) => item.caminho));
    expect(caminhos).toContain("brand/manual-da-marca.md");
    expect(caminhos).not.toContain("brief.md");
  });

  test("inventário registra brand", () => {
    return expect(inventariar(EXEMPLO)).resolves.toEqual(expect.arrayContaining([
      expect.objectContaining({ caminho: "brand/manual-da-marca.md" }),
    ]));
  });

  test("candidato exercita proibições reais", async () => {
    const candidato = await readFile(join(EXEMPLO, "01-candidato-reprovado.md"), "utf8");
    const relatorio = await readFile(join(EXEMPLO, "02-relatorio-reprovacao.md"), "utf8");
    for (const trecho of PROIBICOES_FIXTURE) {
      expect(candidato).toContain(trecho);
      expect(relatorio).toContain(`\`${trecho}\``);
    }
    expect(relatorio).toContain("**Veredito:** reprovado");
    expect(relatorio).toContain("inboundfy-especialista-linkedin");
  });

  test("correção remove ocorrências e aprova hard gate", async () => {
    const corrigido = await readFile(join(EXEMPLO, "03-asset-corrigido.md"), "utf8");
    const aprovacao = await readFile(join(EXEMPLO, "04-relatorio-aprovacao.md"), "utf8");
    for (const trecho of PROIBICOES_FIXTURE) expect(corrigido).not.toContain(trecho);
    expect(aprovacao).toContain("**Veredito:** aprovado");
    expect(aprovacao).toContain("**Ocorrências remanescentes:** zero");
    expect(aprovacao).toContain("brand/manual-da-marca.md");
  });

  test("evidência da execução está registrada", async () => {
    const evidencia = await readFile(join(EXEMPLO, "05-evidencia-testes.md"), "utf8");
    expect(evidencia).toContain("2026-07-30");
    expect(evidencia).toContain("Ran 32 tests");
    expect(evidencia).toContain("Framework Inboundfy válido: 114 skills");
  });

  test("sequências ficam em referências internas", async () => {
    for (const caminho of SEQUENCIAS_ESPERADAS) {
      await expect(stat(join(RAIZ, caminho))).resolves.toBeTruthy();
    }
    const nomes = (await readdir(join(RAIZ, "skills"), { withFileTypes: true }))
      .filter((item) => item.isDirectory()).map((item) => item.name);
    expect(nomes.some((nome) => /inboundfy-(brainstorm|estrategia|planejamento)-\d\d-/.test(nome))).toBe(false);
  });

  test("documentação completa e instalada pelo setup", async () => {
    const user = (await readdir(join(RAIZ, "docs", "user"))).filter((name) => /^\d\d-.*\.md$/.test(name)).sort();
    const method = (await readdir(join(RAIZ, "docs", "method"))).filter((name) => /^\d\d-.*\.md$/.test(name)).sort();
    expect(user).toHaveLength(11);
    expect(method).toHaveLength(11);
    expect(user[0]).toMatch(/^00-/);
    expect(user.at(-1)).toMatch(/^10-/);
    expect(method[0]).toMatch(/^00-/);
    expect(method.at(-1)).toMatch(/^10-/);
    expect(await readFile(join(RAIZ, "skills", "inboundfy-setup", "SKILL.md"), "utf8")).toContain(".inboundfy/framework/docs/");
    expect(await readFile(join(RAIZ, "INSTALACAO.md"), "utf8")).toContain(".inboundfy/framework/ebook/");
    expect((await readdir(join(RAIZ, "examples", "primeiro-projeto"))).filter((name) => name.endsWith(".md")).sort()).toEqual(["01-entrada.md", "02-relatorio-setup.md", "03-pedido.md", "04-resultado.md", "README.md"]);
  });

  test("referência do CLI acompanha comandos, opções e exemplos públicos", async () => {
    const manual = await readFile(
      join(RAIZ, "docs", "method", "10-referencia-cli.md"),
      "utf8",
    );
    const cli = await readFile(join(RAIZ, "src", "cli.ts"), "utf8");
    const digest = manual.split("## `content digest <id>`")[1]?.split("\n## ")[0] ?? "";
    const status = manual.split("## `content status <id> <estado>`")[1] ?? "";
    const examples = (section: string) =>
      [...section.matchAll(/```bash\s*\n([\s\S]*?)\n```/gu)]
        .flatMap((match) => match[1]?.split(/\r?\n/u) ?? [])
        .filter((line) => /^inboundfy\s/u.test(line));

    expect(cli).toContain('.command("digest <id>")');
    expect(cli).toContain('.command("status <id> <estado>")');
    expect(digest).toContain("`<id>`");
    expect(status).toContain("`<estado>`");
    expect(examples(digest).length).toBeGreaterThanOrEqual(5);
    expect(examples(status).length).toBeGreaterThanOrEqual(5);
    for (const option of [
      "--project <pasta>",
      "--json",
      "--audit-report <arquivo>",
      "--url <url>",
      "--published-at <data>",
    ]) {
      expect(cli).toContain(option);
      expect(manual).toContain(`\`${option}\``);
    }
    for (const field of ["ID", "asset", "sha256"]) {
      expect(manual).toContain(field);
    }
    for (const statusName of PIPELINE_STATES) {
      expect(status).toContain(`\`${statusName}\``);
    }
  });

  test("ebook ordena todos os capítulos", async () => {
    const ordem = (await readFile(join(RAIZ, "docs", "user", "reading-order.txt"), "utf8")).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const encontrados = new Set((await readdir(join(RAIZ, "docs", "user"))).filter((name) => name.endsWith(".md")).map((name) => `docs/user/${name}`));
    expect(new Set(ordem).size).toBe(ordem.length);
    expect(new Set(ordem)).toEqual(encontrados);
    expect(ordem[0]).toBe("docs/user/README.md");
    expect(ordem.at(-1)).toBe("docs/user/10-solucao-de-problemas.md");
  });

  test("ebook publicado está sincronizado", async () => {
    const manifesto = JSON.parse(await readFile(join(RAIZ, "ebook", "build.json"), "utf8"));
    const pacote = JSON.parse(await readFile(join(RAIZ, "package.json"), "utf8"));
    expect(manifesto.version).toBe(pacote.version);
    expect(Object.keys(manifesto.document_metadata)).toHaveLength(12);
    expect(manifesto.sources).toContain(".ebook/build-ebook.mjs");
    await expect(stat(join(RAIZ, "ebook", "ebook-inboundfy.pdf"))).resolves.toBeTruthy();
    await expect(stat(join(RAIZ, "ebook", "ebook-inboundfy.epub"))).resolves.toBeTruthy();
  });

  test("ebook remove classificação interna", async () => {
    const versao = (await readFile(join(RAIZ, "ebook", "VERSION"), "utf8")).match(/^\d+\.\d+\.\d+$/m)?.[0];
    expect(versao).toBeTruthy();
    const stem = `Inboundfy-Guia-do-Usuario-v${versao}`;
    const html = await readFile(join(RAIZ, ".ebook", "build", `${stem}.html`), "utf8");
    expect(html).not.toContain("Classificação");
    expect((await readFile(join(RAIZ, "ebook", `${stem}.epub`))).length).toBeGreaterThan(0);
  });

  test("email reprova preço e CTA concorrente", async () => {
    const caso = join(EXEMPLO, "casos", "email-oferta");
    const candidato = await readFile(join(caso, "01-candidato-reprovado.md"), "utf8");
    const relatorio = await readFile(join(caso, "02-relatorio-reprovacao.md"), "utf8");
    const corrigido = await readFile(join(caso, "03-asset-corrigido.md"), "utf8");
    const aprovacao = await readFile(join(caso, "04-relatorio-aprovacao.md"), "utf8");
    expect(candidato).toContain("R$ 99");
    expect(relatorio).toContain("R$ 79");
    expect(candidato.match(/https:\/\/example\.test\//g)).toHaveLength(2);
    expect(corrigido).toContain("R$ 79");
    expect(corrigido).not.toContain("R$ 99");
    expect(corrigido.match(/https:\/\/example\.test\//g)).toHaveLength(1);
    expect(aprovacao).toContain("**Veredito:** aprovado");
  });

  test("blog reprova molde semântico repetido", async () => {
    const caso = join(EXEMPLO, "casos", "blog-estrutura-semantica");
    const candidato = await readFile(join(caso, "01-candidato-reprovado.md"), "utf8");
    const relatorio = await readFile(join(caso, "02-relatorio-reprovacao.md"), "utf8");
    const corrigido = await readFile(join(caso, "03-asset-corrigido.md"), "utf8");
    expect(candidato.match(/## O que é/g)).toHaveLength(3);
    expect(candidato.match(/Por exemplo/g)).toHaveLength(3);
    expect(relatorio).toContain("Molde definição-exemplo-benefício");
    expect(corrigido).not.toContain("## O que é");
    expect(corrigido).not.toContain("Por exemplo");
  });

  test("imagem reprova dimensão, gradiente e paleta", async () => {
    const caso = join(EXEMPLO, "casos", "instagram-imagem-brand");
    const candidato = await readFile(join(caso, "01-candidato-reprovado.svg"), "utf8");
    const corrigido = await readFile(join(caso, "03-asset-corrigido.svg"), "utf8");
    expect(candidato.match(/<svg\b[^>]*\bheight="([^"]+)"/i)?.[1]).toBe("1080");
    expect(candidato).toContain("linearGradient");
    expect(candidato).toContain("#FF00FF");
    expect(corrigido.match(/<svg\b[^>]*\bheight="([^"]+)"/i)?.[1]).toBe("1350");
    expect(corrigido).not.toContain("linearGradient");
    expect(corrigido).not.toContain("#FF00FF");
    expect(corrigido).toContain("#173F35");
    expect(corrigido).toContain("#E7EFE9");
  });

  test("não há scripts legados no pacote", async () => {
    async function files(directory: string): Promise<string[]> {
      const result: string[] = [];
      for (const entry of await readdir(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name);
        if (entry.isDirectory() && entry.name !== ".git" && entry.name !== "node_modules") result.push(...await files(path));
        else if (entry.isFile()) result.push(path);
      }
      return result;
    }
    const forbiddenSuffixes = [".p" + "y", ".s" + "h"];
    const forbidden = (await files(RAIZ)).filter((path) => forbiddenSuffixes.includes(path.slice(path.lastIndexOf("."))));
    expect(forbidden.map((path) => relative(RAIZ, path))).toEqual([]);
  });
});
