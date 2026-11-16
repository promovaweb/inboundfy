/**
 * Aplica e confere a arquitetura comum das skills do Inboundfy.
 *
 * O modo de escrita preserva o material específico já existente, acrescenta
 * os blocos ausentes e recompõe o catálogo estruturado da biblioteca.
 */

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS = join(ROOT, "skills");
const SHARED = [
  "01-preflight-e-fontes.md",
  "02-contrato-de-artefato.md",
  "03-interacao-e-handoff.md",
  "04-validacao-e-retomada.md",
  "05-contexto-editorial.md",
];
/**
 * Títulos do antigo esqueleto gerado por script. Cada skill traz conteúdo
 * próprio do tema; a presença de um desses títulos indica texto genérico.
 */
const SKELETON_MARKERS = [
  "## Especificação operacional",
  "### Exemplo específico ilustrativo",
  "## Exemplo operacional completo",
  "## Checklist ampliado",
  "## Erros comuns adicionais",
];
const REFERENCE_HEADINGS = [
  "## Template",
  "## Exemplo",
  "## Checklist",
  "## Erros comuns",
];

const GROUP_GUIDANCE = {
  orquestrador:
    "Coordene as etapas sem duplicar trabalho. Mantenha a ordem, as escolhas, os IDs, as pendências e o relatório final visíveis.",
  entrada:
    "Prepare ou encaminhe a execução. Preserve respostas existentes e não crie conteúdo antes de o contexto mínimo estar pronto.",
  acervo:
    "Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.",
  base:
    "Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.",
  contexto:
    "Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.",
  brainstorm:
    "Transforme ideia em direção trabalhável. Separe fatos, hipóteses, tese, recorte, perguntas e oportunidades antes de encaminhar o pacote.",
  "estratégia":
    "Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.",
  planejamento:
    "Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.",
  copy:
    "Escreva ou revise a mensagem solicitada. Relacione promessa, prova, persona, voz, canal e ação sem inventar dados.",
  growth:
    "Aplique a capacidade de crescimento ao contexto informado. Relacione aquisição, ativação, retenção, distribuição, oferta e medida.",
  especialista:
    "Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.",
  validador:
    "Leia o asset inteiro contra brief, fontes, contexto e formato. Relate local, regra, fonte e ação; devolva à produtora sem editar o original.",
  qualidade:
    "Faça uma revisão específica de qualidade. Separe achado literal, semântico e estrutural e só libere após nova leitura integral.",
  capacidade:
    "Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.",
  area:
    "Receba o pedido da área, faça o diagnóstico mínimo e encaminhe para uma única skill da área por vez. Não execute o trabalho da skill encaminhada.",
};

const GROUP_PROFILES = {
  orquestrador: {
    entrada: "pedido do usuário, estado do projeto e IDs relacionados",
    saida: "pacote coordenado ou próxima ação explícita",
    validacao: "ordem das etapas, fontes, escolhas, estados e pendências",
    handoff: "skill de entrada, acervo ou planejamento indicada pelo pedido",
  },
  entrada: {
    entrada: "respostas do setup, arquivos existentes e caminho do projeto",
    saida: "sentinelas, contexto inicial e relatório de preparação",
    validacao: "arquivos presentes, respostas preservadas e caminhos canônicos",
    handoff: "orquestrador ou skill de contexto apontada pelo estado",
  },
  acervo: {
    entrada: "texto bruto, ID do item e fontes locais ou externas",
    saida: "bruto preservado, processado, FAQ, pesquisa e base editorial",
    validacao: "origem preservada, regras aplicadas, perguntas separadas e relações registradas",
    handoff: "estratégia do acervo, planejamento ou produção indicada pelo usuário",
  },
  base: {
    entrada: "artefato, regra de transformação e contexto mínimo",
    saida: "resultado reutilizável com formato, fontes e pendências",
    validacao: "função executada, formato íntegro e origem ligada ao resultado",
    handoff: "skill chamadora, com o caminho do resultado e a próxima ação",
  },
  contexto: {
    entrada: "resposta do usuário ou arquivo canônico do domínio",
    saida: "arquivo de contexto atualizado e registro da alteração",
    validacao: "seções preservadas, fatos separados de preferências e fonte registrada",
    handoff: "setup, orquestrador ou outra skill que dependa desse contexto",
  },
  brainstorm: {
    entrada: "ideia, material inicial, perguntas e fontes disponíveis",
    saida: "pacote de ideia com tese, recorte, perguntas e oportunidades",
    validacao: "fatos separados de hipóteses, fontes ligadas e proibições aplicadas",
    handoff: "fase seguinte do brainstorm ou planejamento de conteúdo",
  },
  "estratégia": {
    entrada: "objetivo, público, oferta, canais, prazo e recursos",
    saida: "brief, pesquisa, plano de campanha ou calendário",
    validacao: "objetivo ligado a público, canal, período, mensagem e medida",
    handoff: "planejamento, especialista ou calendário descrito no plano",
  },
  planejamento: {
    entrada: "material aprovado, canais, personas e direção editorial",
    saida: "oportunidade, brief, roteamento ou auditoria do pacote",
    validacao: "entrada ligada ao ID, campos do brief completos e próxima etapa nomeada",
    handoff: "especialista de canal, validadora ou orquestrador",
  },
  copy: {
    entrada: "brief, acervo, persona, voz e canal",
    saida: "copy pronta para revisão ou uso pela skill de canal",
    validacao: "mensagem, voz, persona, dicionário, proibições e próxima ação",
    handoff: "especialista de canal, validadora ou planejamento",
  },
  growth: {
    entrada: "objetivo, público, oferta, canal e contexto operacional",
    saida: "plano, recomendação ou artefato de crescimento",
    validacao: "objetivo ligado a público, ação, canal, medida e fonte",
    handoff: "estratégia, planejamento, copy ou orquestrador",
  },
  especialista: {
    entrada: "brief aprovado, acervo, persona, voz e template do canal",
    saida: "asset final do canal em pasta própria com README",
    validacao: "formato do canal, contexto editorial, fontes e revisão pareada",
    handoff: "validadora do mesmo sufixo, seguida do pipeline",
  },
  validador: {
    entrada: "asset, brief, fontes, contexto e regras do canal",
    saida: "relatório aprovado ou relatório de correção com localização dos achados",
    validacao: "leitura integral, regras literais, semânticas, estruturais e visuais",
    handoff: "especialista pareada ou pipeline após aprovação",
  },
  qualidade: {
    entrada: "texto técnico ou público, fonte, voz e regras aplicáveis",
    saida: "relatório de qualidade ou versão revisada preservando o original",
    validacao: "clareza, naturalidade, contexto, proibições e dicionário",
    handoff: "produtora, validadora ou solicitante conforme o estado",
  },
  capacidade: {
    entrada: "objetivo, artefato, contexto, canal e estado informados",
    saida: "análise, plano ou registro consumível pela skill seguinte",
    validacao: "dados presentes, fontes ligadas, alcance respeitado e próxima ação",
    handoff: "skill indicada pelo tipo do resultado ou pedido de dado ausente",
  },
  area: {
    entrada: "pedido em linguagem natural ligado à área e estado do projeto",
    saida: "diagnóstico curto, rota escolhida e pacote de entrada para a skill da área",
    validacao: "setup pronto, objetivo identificado, skill única escolhida e dados ausentes pedidos",
    handoff: "skill da área indicada pela tabela de roteamento",
  },
};

/** Lista os diretórios de skills sem tratar `_shared` como skill. */
async function skillDirectories() {
  const entries = await readdir(SKILLS, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("inboundfy"))
    .map((entry) => join(SKILLS, entry.name))
    .sort();
}

/** Extrai nome e descrição do frontmatter simples usado pela biblioteca. */
function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error("frontmatter ausente");
  const lines = match[1].split("\n");
  const nameLine = lines.find((line) => line.startsWith("name:"));
  if (!nameLine) throw new Error("name ausente");
  const name = nameLine.slice(nameLine.indexOf(":") + 1).trim().replace(/^"|"$/g, "");
  const descriptionLines = [];
  let reading = false;
  for (const line of lines) {
    if (line.startsWith("description:")) {
      const value = line.slice(line.indexOf(":") + 1).trim();
      reading = [">", "|", ">-", "|-", ">+", "|+"].includes(value);
      if (!reading) descriptionLines.push(value.replace(/^"|"$/g, ""));
      continue;
    }
    if (reading) {
      if (line && !line.startsWith(" ") && !line.startsWith("\t")) reading = false;
      else descriptionLines.push(line.trim());
    }
  }
  return { name, description: descriptionLines.filter(Boolean).join(" ") };
}

/** Classifica o ID para que o catálogo tenha um grupo estável. */
function groupFor(name) {
  if (name === "inboundfy") return "orquestrador";
  if (name === "inboundfy-acervo") return "acervo";
  if (name === "inboundfy-aprendizado") return "contexto";
  if (["inboundfy-iniciar", "inboundfy-setup"].includes(name)) return "entrada";
  if (["inboundfy-processar-acervo", "inboundfy-pesquisa-acervo", "inboundfy-extrair-faq"].includes(name)) return "acervo";
  if (name === "inboundfy-brainstorm") return "brainstorm";
  if (name === "inboundfy-estrategia") return "estratégia";
  if (name === "inboundfy-planejamento") return "planejamento";
  const prefixes = [
    ["inboundfy-especialista-", "especialista"],
    ["inboundfy-validador-", "validador"],
    ["inboundfy-copy-", "copy"],
    ["inboundfy-growth-", "growth"],
    ["inboundfy-contexto-", "contexto"],
    ["inboundfy-brainstorm-", "brainstorm"],
    ["inboundfy-estrategia-", "estratégia"],
    ["inboundfy-planejamento-", "planejamento"],
    ["inboundfy-base-", "base"],
    ["inboundfy-area-", "area"],
  ];
  const found = prefixes.find(([prefix]) => name.startsWith(prefix));
  if (found) return found[1];
  if (name.startsWith("inboundfy-anti-slop")) return "qualidade";
  return "capacidade";
}

function labelFor(name) {
  return name === "inboundfy" ? "orquestrador" : name.replace(/^inboundfy-/, "").replaceAll("-", " ");
}

function architectureBlock(name) {
  const setupNote = name === "inboundfy-setup"
    ? "Como skill de setup, ela prepara as sentinelas e as fontes do projeto; as demais skills confirmam essas sentinelas antes de escrever."
    : "Ela confirma as sentinelas antes de criar ou alterar qualquer artefato.";
  return `## Arquitetura de execução\n\n${setupNote} O trabalho segue o contrato compartilhado e usa a referência\nespecífica desta pasta.\n\n- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.\n- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.\n- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.\n- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.\n- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.\n\nConsulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o\nartefato. O grupo desta skill é **${groupFor(name)}**.\n`;
}

function groupBlock(name) {
  const group = groupFor(name);
  const profile = GROUP_PROFILES[group];
  return `## Responsabilidade do grupo\n\n${GROUP_GUIDANCE[group]}\n\nAntes do handoff, confirme os campos próprios deste grupo:\n\n- **grupo:** ${group}\n- **entrada:** ${profile.entrada};\n- **transformação:** ação principal descrita no fluxo;\n- **saída:** ${profile.saida};\n- **handoff:** ${profile.handoff}.\n`;
}

/** Bloco mínimo de arquitetura para uma referência que ainda não o tem. */
function referenceBlock(name) {
  const group = groupFor(name);
  return `\n\n## Arquitetura aplicada\n\nEsta referência usa o contrato comum para a skill **${name}**, do grupo\n**${group}**. Leia os detalhes compartilhados conforme a etapa atual:\n\n- [preflight e fontes](../_shared/01-preflight-e-fontes.md);\n- [artefato e relações](../_shared/02-contrato-de-artefato.md);\n- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);\n- [validação e retomada](../_shared/04-validacao-e-retomada.md);\n- [contexto editorial](../_shared/05-contexto-editorial.md).\n\n## Guia específico do grupo\n\n${GROUP_GUIDANCE[group]}\n`;
}

function agentsYaml(name) {
  const label = labelFor(name);
  const display = label.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
  let short = `Executa ${label} no Inboundfy`;
  if (short.length < 25) short += " com contexto";
  return `interface:\n  display_name: "Inboundfy ${display}"\n  short_description: "${short}"\n  default_prompt: "Use $${name} para executar ${label} com as fontes do projeto."\n`;
}

/** Atualiza a biblioteca e recompõe o catálogo JSON. */
export async function writeFiles() {
  let changed = 0;
  let createdAgents = 0;
  const entries = [];
  for (const directory of await skillDirectories()) {
    const skillText = await readFile(join(directory, "SKILL.md"), "utf8");
    const { name, description } = frontmatter(skillText);
    let updatedSkill = skillText;
    if (!updatedSkill.includes("## Arquitetura de execução")) {
      const marker = "## Contexto exigido";
      updatedSkill = updatedSkill.includes(marker)
        ? updatedSkill.replace(marker, `${architectureBlock(name)}\n${marker}`)
        : `${updatedSkill.trimEnd()}\n\n${architectureBlock(name)}`;
    }
    if (!updatedSkill.includes("## Responsabilidade do grupo")) {
      const marker = "## Idempotência";
      updatedSkill = updatedSkill.includes(marker)
        ? updatedSkill.replace(marker, `${groupBlock(name)}\n${marker}`)
        : `${updatedSkill.trimEnd()}\n\n${groupBlock(name)}`;
    }
    if (updatedSkill !== skillText) {
      await writeFile(join(directory, "SKILL.md"), updatedSkill);
      changed += 1;
    }

    const referencePath = join(directory, "REFERENCIA.md");
    let referenceText = await readFile(referencePath, "utf8");
    if (!referenceText.includes("## Arquitetura aplicada")) {
      referenceText = `${referenceText.trimEnd()}${referenceBlock(name)}`;
      changed += 1;
    } else if (!referenceText.includes("## Guia específico do grupo")) {
      referenceText = `${referenceText.trimEnd()}\n\n## Guia específico do grupo\n\n${GROUP_GUIDANCE[groupFor(name)]}\n`;
      changed += 1;
    }
    const original = await readFile(referencePath, "utf8");
    if (referenceText !== original) await writeFile(referencePath, referenceText);

    const agentPath = join(directory, "agents", "openai.yaml");
    try {
      await readFile(agentPath, "utf8");
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      await mkdir(dirname(agentPath), { recursive: true });
      await writeFile(agentPath, agentsYaml(name));
      createdAgents += 1;
    }
    entries.push({
      id: name,
      grupo: groupFor(name),
      descricao: description,
      skill: `skills/${name}/SKILL.md`,
      referencia: `skills/${name}/REFERENCIA.md`,
      interface: `skills/${name}/agents/openai.yaml`,
      perfil: GROUP_PROFILES[groupFor(name)],
      referencias_compartilhadas: SHARED.map((file) => `skills/_shared/${file}`),
    });
  }
  const catalog = {
    versao_contrato: 2,
    quantidade: entries.length,
    referencias_compartilhadas: SHARED.map((file) => `skills/_shared/${file}`),
    skills: entries,
  };
  await writeFile(join(SKILLS, "catalogo.json"), `${JSON.stringify(catalog, null, 2)}\n`);
  return { changed, createdAgents, count: entries.length };
}

/** Confere o contrato sem alterar arquivos. */
export async function checkFiles() {
  const errors = [];
  const directories = await skillDirectories();
  for (const directory of directories) {
    const name = directory.split("/").pop();
    let skillText;
    let referenceText;
    try {
      skillText = await readFile(join(directory, "SKILL.md"), "utf8");
      referenceText = await readFile(join(directory, "REFERENCIA.md"), "utf8");
    } catch {
      errors.push(`${name}: SKILL.md ou REFERENCIA.md ausente`);
      continue;
    }
    if (!skillText.includes("## Arquitetura de execução")) errors.push(`${name}: arquitetura ausente no SKILL.md`);
    for (const file of SHARED) {
      if (!skillText.includes(file) && !referenceText.includes(file)) errors.push(`${name}: referência compartilhada ausente: ${file}`);
    }
    for (const heading of REFERENCE_HEADINGS) {
      if (!new RegExp(`^${escapeRegExp(heading)}(?:\\b|\\s)`, "im").test(referenceText)) errors.push(`${name}: seção de referência ausente: ${heading}`);
    }
    for (const marker of SKELETON_MARKERS) {
      if (skillText.includes(marker) || referenceText.includes(marker)) errors.push(`${name}: sobra do esqueleto genérico: ${marker}`);
    }
    // A descrição decide quando o agente aciona a skill: resultado + situações de uso.
    const { description } = frontmatter(skillText);
    if (!description.includes("Use quando ")) errors.push(`${name}: descrição sem a frase "Use quando"`);
    const agentPath = join(directory, "agents", "openai.yaml");
    try {
      const interfaceText = await readFile(agentPath, "utf8");
      for (const field of ["display_name:", "short_description:", "default_prompt:"]) {
        if (!interfaceText.includes(field)) errors.push(`${name}: interface sem ${field}`);
      }
      if (!/display_name: "Inboundfy: [^"]+"/.test(interfaceText)) errors.push(`${name}: display_name fora do padrão "Inboundfy: Nome"`);
      if (!interfaceText.includes(`$${name}`)) errors.push(`${name}: prompt não chama o ID da skill`);
    } catch {
      errors.push(`${name}: agents/openai.yaml ausente`);
    }
  }
  try {
    const catalog = JSON.parse(await readFile(join(SKILLS, "catalogo.json"), "utf8"));
    if (catalog.versao_contrato !== 2) errors.push("skills/catalogo.json: versão de contrato inválida");
    if (catalog.quantidade !== directories.length) errors.push("skills/catalogo.json: quantidade divergente");
    const ids = new Set(catalog.skills.map((item) => item.id));
    const actual = new Set(directories.map((directory) => directory.split("/").pop()));
    if (ids.size !== actual.size || [...ids].some((id) => !actual.has(id))) errors.push("skills/catalogo.json: IDs divergentes");
    const expectedShared = SHARED.map((file) => `skills/_shared/${file}`);
    if (JSON.stringify(catalog.referencias_compartilhadas) !== JSON.stringify(expectedShared)) errors.push("skills/catalogo.json: referências compartilhadas divergentes");
    for (const item of catalog.skills) {
      if (!item.perfil || Object.keys(item.perfil).sort().join(",") !== ["entrada", "handoff", "saida", "validacao"].join(",")) errors.push(`skills/catalogo.json: perfil ausente ou incompleto em ${item.id}`);
    }
  } catch {
    errors.push("skills/catalogo.json ausente ou inválido");
  }
  return errors;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const mode = process.argv.slice(2);
  if (mode.length !== 1 || !["--write", "--check"].includes(mode[0])) {
    console.error("Uso: node scripts/gerenciar-skills.mjs --write|--check");
    process.exitCode = 1;
  } else if (mode[0] === "--write") {
    const result = await writeFiles();
    console.log(`Skills processadas: ${result.count}; arquivos ampliados: ${result.changed}; interfaces criadas: ${result.createdAgents}.`);
  } else {
    const errors = await checkFiles();
    if (errors.length) {
      console.error(errors.map((error) => `ERRO: ${error}`).join("\n"));
      process.exitCode = 1;
    } else {
      console.log(`Arquitetura das skills válida: ${(await skillDirectories()).length} skills conferidas.`);
    }
  }
}
