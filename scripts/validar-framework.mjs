/**
 * Confere o contrato operacional do framework Inboundfy.
 *
 * O comando valida skills, referências, interfaces, templates, catálogo e a
 * identidade do pacote sem alterar arquivos do repositório.
 */

import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS = join(ROOT, "skills");
const REQUIRED_SECTIONS = [
  "## Contexto exigido",
  "## Entrada esperada",
  "## Fluxo",
  "## Saída",
  "## Validação",
  "## Idempotência",
];
const SHARED_REFERENCES = [
  "01-preflight-e-fontes.md",
  "02-contrato-de-artefato.md",
  "03-interacao-e-handoff.md",
  "04-validacao-e-retomada.md",
  "05-contexto-editorial.md",
];
const REFERENCE_SECTIONS = [
  "## Template",
  "## Exemplo",
  "## Checklist",
  "## Erros comuns",
];
const CORE_SKILLS = new Set([
  "inboundfy",
  "inboundfy-setup",
  "inboundfy-acervo",
  "inboundfy-extrair-faq",
  "inboundfy-processar-acervo",
  "inboundfy-pesquisa-acervo",
  "inboundfy-base-editorial",
  "inboundfy-contexto-oferta",
  "inboundfy-contexto-operacao",
  "inboundfy-personas",
  "inboundfy-voz",
  "inboundfy-planejamento",
  "inboundfy-pipeline",
  "inboundfy-catalogo",
  "inboundfy-producao",
  "inboundfy-anti-slop",
  "inboundfy-anti-slop-codigo",
  "inboundfy-aprendizado",
  "inboundfy-contexto-institucional",
  "inboundfy-copy-redacao",
  "inboundfy-copy-edicao",
  "inboundfy-copy-editor",
  "inboundfy-copy-oferta",
  "inboundfy-copy-persuasao",
  "inboundfy-copy-posicionamento",
  "inboundfy-seo",
  "inboundfy-geo",
  "inboundfy-estrategia",
  "inboundfy-pesquisa-cliente",
  "inboundfy-concorrentes",
  "inboundfy-growth-cro",
  "inboundfy-metricas",
  "inboundfy-atribuicao",
  "inboundfy-experimentacao",
  "inboundfy-growth-lancamento",
  "inboundfy-growth-lead-magnet",
  "inboundfy-growth-criativos-anuncios",
  "inboundfy-growth-anuncios",
  "inboundfy-aso",
  "inboundfy-growth-retencao",
  "inboundfy-growth-parcerias",
  "inboundfy-growth-comunidade",
  "inboundfy-growth-distribuicao",
  "inboundfy-growth-email-frio",
  "inboundfy-growth-eventos",
  "inboundfy-growth-ferramentas-gratuitas",
  "inboundfy-growth-influenciadores",
  "inboundfy-conselho-marketing",
  "inboundfy-growth-loops",
  "inboundfy-growth-onboarding",
  "inboundfy-growth-paywall",
  "inboundfy-growth-popups",
  "inboundfy-growth-pricing",
  "inboundfy-seo-programatico",
  "inboundfy-growth-prospeccao",
  "inboundfy-growth-relacoes-publicas",
  "inboundfy-growth-referencias",
  "inboundfy-growth-revops",
  "inboundfy-enablement-vendas",
  "inboundfy-dados-estruturados",
  "inboundfy-auditoria-seo",
  "inboundfy-arquitetura-site",
  "inboundfy-growth-sms",
  "inboundfy-growth-signup",
  "inboundfy-growth-social",
]);
const PROJECT_TEMPLATES = new Set([
  "estrategia.md",
  "pipeline.md",
  "README.md",
]);
const CONTEXT_TEMPLATES = new Set([
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
]);
const OLD_NAME = "tho" + "thfy";
const FORBIDDEN_IDENTITIES = [OLD_NAME, `.${OLD_NAME}`, `@promovaweb/${OLD_NAME}`, "tho" + "tify"];
const MASTER_REFERENCES = [
  "inboundfy-processar-acervo",
  "inboundfy-extrair-faq",
  "inboundfy-pesquisa-acervo",
  "inboundfy-base-editorial",
  "references/estrategia-do-acervo.md",
  "inboundfy-planejamento",
  "inboundfy-producao",
  "inboundfy-anti-slop",
  "inboundfy-pipeline",
  "inboundfy-catalogo",
  ".inboundfy/context/empresa.md",
  ".inboundfy/context/marca-voz.md",
  ".inboundfy/context/publico.md",
  ".inboundfy/context/proibicoes.md",
  ".inboundfy/context/glossario.md",
  ".inboundfy/context/aprendizado.md",
  ".inboundfy/context/links.md",
];
const TEXT_SUFFIXES = new Set([".md", ".json", ".mjs", ".ts", ".cjs", ".txt", ".yaml", ".yml", ".svg"]);

/** Extrai os dois campos usados pelo frontmatter simples das skills. */
function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const lines = match[1].split("\n");
  const nameLine = lines.find((line) => line.startsWith("name:"));
  if (!nameLine) return null;
  const name = nameLine.slice("name:".length).trim().replace(/^"|"$/g, "");
  const descriptionIndex = lines.findIndex((line) => line.startsWith("description:"));
  if (descriptionIndex < 0) return null;
  const value = lines[descriptionIndex].slice("description:".length).trim();
  if (![">", "|", ">-", "|-", ">+", "|+"].includes(value)) {
    return { name, description: value.replace(/^"|"$/g, "") };
  }
  const descriptionParts = [];
  for (const line of lines.slice(descriptionIndex + 1)) {
    if (line && !line.startsWith(" ") && !line.startsWith("\t")) break;
    if (line.trim()) descriptionParts.push(line.trim());
  }
  const description = descriptionParts.join(" ");
  return { name, description };
}

/** Lista skills sem tratar a pasta de referências compartilhadas como skill. */
async function skillDirectories() {
  const entries = await readdir(SKILLS, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("inboundfy"))
    .map((entry) => join(SKILLS, entry.name))
    .sort();
}

async function fileText(path) {
  return readFile(path, "utf8");
}

/** Valida uma pasta de skill e devolve achados com caminho legível. */
async function validateSkill(directory) {
  const errors = [];
  const name = directory.split("/").pop();
  const skillPath = join(directory, "SKILL.md");
  const referencePath = join(directory, "REFERENCIA.md");
  let text;
  let referenceText = "";
  try {
    text = await fileText(skillPath);
  } catch {
    return [`${name}: SKILL.md ausente`];
  }
  try {
    referenceText = await fileText(referencePath);
  } catch {
    errors.push(`${name}: REFERENCIA.md ausente`);
  }
  const metadata = frontmatter(text);
  if (!metadata) {
    errors.push(`${name}: frontmatter inválido`);
  } else {
    if (metadata.name !== name) errors.push(`${name}: frontmatter name aponta para ${metadata.name}`);
    if (metadata.description.length < 90) errors.push(`${name}: descrição curta demais`);
  }
  if (referenceText && !text.includes("REFERENCIA.md")) errors.push(`${name}: fluxo não aponta para REFERENCIA.md`);
  for (const heading of REQUIRED_SECTIONS) {
    if (!text.includes(heading)) errors.push(`${name}: seção ausente: ${heading}`);
  }
  if (!text.includes("## Arquitetura de execução")) errors.push(`${name}: arquitetura compartilhada ausente`);
  for (const referenceName of SHARED_REFERENCES) {
    if (!text.includes(referenceName) && !referenceText.includes(referenceName)) {
      errors.push(`${name}: referência compartilhada ausente: ${referenceName}`);
    }
  }
  for (const heading of REFERENCE_SECTIONS) {
    if (referenceText && !new RegExp(`^${escapeRegExp(heading)}(?:\\b|\\s)`, "im").test(referenceText)) {
      errors.push(`${name}: referência sem seção: ${heading}`);
    }
  }
  const interfacePath = join(directory, "agents", "openai.yaml");
  try {
    const interfaceText = await fileText(interfacePath);
    for (const field of ["display_name:", "short_description:", "default_prompt:"]) {
      if (!interfaceText.includes(field)) errors.push(`${name}: interface sem ${field}`);
    }
    if (!interfaceText.includes(`$${name}`)) errors.push(`${name}: prompt não chama o ID da skill`);
  } catch {
    errors.push(`${name}: agents/openai.yaml ausente`);
  }
  if (CORE_SKILLS.has(name) && name !== "inboundfy-setup") {
    for (const expected of [".inboundfy/context/empresa.md", ".inboundfy/framework/", "inboundfy-setup"]) {
      if (!text.includes(expected)) errors.push(`${name}: referência ausente: ${expected}`);
    }
  }
  if (name === "inboundfy-acervo") {
    for (const expected of MASTER_REFERENCES) {
      if (!text.includes(expected)) errors.push(`inboundfy-acervo: etapa ausente: ${expected}`);
    }
  }
  return errors;
}

/** Confere existência e pareamento de todas as skills de produção. */
async function validateSkills() {
  const errors = [];
  const directories = await skillDirectories();
  const names = new Set(directories.map((directory) => directory.split("/").pop()));
  for (const name of [...CORE_SKILLS].filter((item) => !names.has(item)).sort()) {
    errors.push(`skill essencial ausente: ${name}`);
  }
  for (const directory of directories) errors.push(...await validateSkill(directory));
  const producers = new Set(directories.filter((directory) => directory.includes("/inboundfy-especialista-")).map((directory) => directory.split("/inboundfy-especialista-").pop()));
  const validators = new Set(directories.filter((directory) => directory.includes("/inboundfy-validador-")).map((directory) => directory.split("/inboundfy-validador-").pop()));
  for (const suffix of [...producers].filter((item) => !validators.has(item)).sort()) errors.push(`validador ausente para o canal: ${suffix}`);
  for (const suffix of [...validators].filter((item) => !producers.has(item)).sort()) errors.push(`produtora ausente para o canal: ${suffix}`);
  return errors;
}

/** Confere templates, referências compartilhadas e catálogo estruturado. */
async function validateProjectContract() {
  const errors = [];
  const packageData = JSON.parse(await fileText(join(ROOT, "package.json")));
  if (packageData.name !== "@promovaweb/inboundfy") errors.push("package.json: name não é @promovaweb/inboundfy");
  if (packageData.bin?.inboundfy !== "bin/inboundfy.cjs") errors.push("package.json: binário inboundfy ausente");
  for (const name of PROJECT_TEMPLATES) {
    try { await fileText(join(ROOT, "templates", "project", name)); } catch { errors.push(`template ausente: templates/project/${name}`); }
  }
  for (const name of CONTEXT_TEMPLATES) {
    try { await fileText(join(ROOT, "context", name)); } catch { errors.push(`template de contexto ausente: context/${name}`); }
  }
  for (const referenceName of SHARED_REFERENCES) {
    try { await fileText(join(SKILLS, "_shared", referenceName)); } catch { errors.push(`referência compartilhada ausente: skills/_shared/${referenceName}`); }
  }
  let catalog;
  try { catalog = JSON.parse(await fileText(join(SKILLS, "catalogo.json"))); } catch { errors.push("catálogo estruturado ausente ou inválido: skills/catalogo.json"); return errors; }
  const directories = await skillDirectories();
  const actualNames = new Set(directories.map((directory) => directory.split("/").pop()));
  const catalogNames = new Set((catalog.skills ?? []).filter((item) => item && typeof item === "object").map((item) => item.id));
  if (catalog.quantidade !== actualNames.size || catalogNames.size !== actualNames.size || [...catalogNames].some((name) => !actualNames.has(name))) errors.push("skills/catalogo.json: skills divergentes do diretório");
  for (const item of catalog.skills ?? []) {
    if (!item || typeof item !== "object") { errors.push("skills/catalogo.json: item não é objeto"); continue; }
    for (const field of ["skill", "referencia", "interface", "grupo", "perfil"]) if (!(field in item)) errors.push(`skills/catalogo.json: campo ausente em ${item.id}`);
    if (!item.perfil || Object.keys(item.perfil).sort().join(",") !== "entrada,handoff,saida,validacao") errors.push(`skills/catalogo.json: perfil incompleto em ${item.id}`);
  }
  return errors;
}

/** Percorre arquivos de texto sem atravessar o metadado do Git. */
async function walkFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walkFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

async function validateIdentity() {
  const errors = [];
  for (const path of await walkFiles(ROOT)) {
    if (!TEXT_SUFFIXES.has(path.slice(path.lastIndexOf(".")).toLowerCase())) continue;
    const text = (await fileText(path)).toLocaleLowerCase("en-US");
    if (FORBIDDEN_IDENTITIES.some((identity) => text.includes(identity))) errors.push(`identidade antiga em ${relative(ROOT, path)}`);
    if (FORBIDDEN_IDENTITIES.some((identity) => path.toLocaleLowerCase("en-US").includes(identity))) errors.push(`nome antigo no caminho: ${relative(ROOT, path)}`);
  }
  return errors;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Executa as três partes do contrato e devolve os achados sem imprimir. */
export async function validateFramework() {
  return [
    ...(await validateSkills()),
    ...(await validateProjectContract()),
    ...(await validateIdentity()),
  ];
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const errors = await validateFramework();
  if (errors.length) {
    console.error(errors.map((error) => `ERRO: ${error}`).join("\n"));
    process.exitCode = 1;
  } else {
    console.log("Framework Inboundfy válido: skills, contrato do consumidor e identidade conferidos.");
  }
}
