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
};

const GROUP_REFERENCE_PATHS = {
  orquestrador: ["README.md", "METODOLOGIA.md", "ESTRATEGIA.md"],
  entrada: ["INSTALACAO.md", "CONTEXTO.md", "docs/method/01-setup-e-runtime.md"],
  acervo: [
    "METODOLOGIA.md",
    "LIMPEZA-MATERIAL-BRUTO.md",
    "TRADUCAO.md",
    "docs/method/05-artefatos-e-estados.md",
  ],
  base: ["ESCRITA.md", "CONTEXTO.md", "SKILL-AUTORIA.md"],
  contexto: ["CONTEXTO.md", "docs/method/02-contexto-fontes-e-precedencia.md"],
  brainstorm: ["BRAINSTORM.md", "ESCRITA.md", "docs/method/05-artefatos-e-estados.md"],
  "estratégia": ["ESTRATEGIA.md", "CONTEXTO.md", "docs/method/05-artefatos-e-estados.md"],
  planejamento: ["METODOLOGIA.md", "ESTRUTURAS-PERSUASIVAS.md", "docs/method/06-contrato-de-skill.md"],
  copy: ["ESCRITA.md", "CONTEXTO.md", "SKILL-AUTORIA.md"],
  growth: ["ESTRATEGIA.md", "CONTEXTO.md", "docs/method/05-artefatos-e-estados.md"],
  especialista: ["ESCRITA.md", "ESTRUTURAS-PERSUASIVAS.md", "CONTEXTO.md"],
  validador: ["ESCRITA.md", "CONTEXTO.md", "docs/method/07-validacao-e-testes.md"],
  qualidade: ["ESCRITA.md", "LIMPEZA-MATERIAL-BRUTO.md", "docs/method/07-validacao-e-testes.md"],
  capacidade: ["README.md", "CONTEXTO.md", "SKILL-AUTORIA.md"],
};

const GROUP_FIELDS = {
  orquestrador: ["pedido", "estado do projeto", "IDs", "etapas", "próxima skill"],
  entrada: ["respostas", "arquivos existentes", "sentinelas", "contexto", "relatório"],
  acervo: ["bruto", "processado", "FAQ", "pesquisa", "base editorial"],
  base: ["entrada", "regra", "resultado", "fontes", "retorno"],
  contexto: ["arquivo canônico", "fatos", "preferências", "fonte", "alteração"],
  brainstorm: ["ideia", "fatos", "hipóteses", "tese", "próximo passo"],
  "estratégia": ["objetivo", "público", "canal", "período", "medida"],
  planejamento: ["ID", "pacote", "persona", "brief", "roteamento"],
  copy: ["objetivo", "mensagem", "persona", "canal", "revisão"],
  growth: ["objetivo", "público", "canal", "oferta", "próxima ação"],
  especialista: ["canal", "persona", "objetivo", "formato", "validadora"],
  validador: ["asset", "brief", "fontes", "achados", "estado"],
  qualidade: ["texto", "voz", "dicionário", "proibições", "retorno"],
  capacidade: ["objetivo", "entrada", "contexto", "resultado", "próxima ação"],
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
  const name = nameLine.split(":", 2)[1].trim().replace(/^"|"$/g, "");
  const descriptionLines = [];
  let reading = false;
  for (const line of lines) {
    if (line.startsWith("description:")) {
      const value = line.split(":", 2)[1].trim();
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
  ];
  const found = prefixes.find(([prefix]) => name.startsWith(prefix));
  if (found) return found[1];
  if (name.startsWith("inboundfy-anti-slop")) return "qualidade";
  return "capacidade";
}

function labelFor(name) {
  return name === "inboundfy" ? "orquestrador" : name.replace(/^inboundfy-/, "").replaceAll("-", " ");
}

function exampleInputFor(name, group) {
  if (group === "entrada") return ".inboundfy/fontes-projeto.md";
  if (group === "acervo") return "acervo/0042-2026-09-14-material/bruto.md";
  if (group === "contexto") {
    const contextNames = {
      "inboundfy-contexto-institucional": "empresa.md",
      "inboundfy-contexto-oferta": "produtos.md",
      "inboundfy-contexto-operacao": "canais.md",
    };
    const contextName = contextNames[name] ?? `${name.replace("inboundfy-contexto-", "").replace("marca", "marca-voz")}.md`;
    return `.inboundfy/context/${contextName}`;
  }
  if (group === "brainstorm") return "brainstorms/2026-09-14-ideia/ideia.md";
  if (group === "estratégia") return "estrategia/2026-09-campanha/brief.md";
  if (group === "planejamento") return "acervo/0042-2026-09-14-material/base-editorial.md";
  if (group === "especialista") return `briefs/0042-2026-09-14-${name.replace("inboundfy-especialista-", "")}/brief.md`;
  if (group === "validador") return `canais/${name.replace("inboundfy-validador-", "")}/0042-2026-09-14-peca/README.md`;
  if (group === "qualidade") return "canais/blog/0042-2026-09-14-peca/artigo.md";
  if (group === "base") return "acervo/0042-2026-09-14-material/processado.md";
  if (group === "capacidade") return ".inboundfy/context/empresa.md";
  if (group === "copy") return "acervo/0042-2026-09-14-material/base-editorial.md";
  if (group === "growth") return ".inboundfy/estrategia.md";
  return ".inboundfy/fontes-projeto.md";
}

function sanitizeSkillText(text) {
  const replacements = [
    ["em que", "onde"], ["Em que", "Onde"],
    ["evidências", "comprovações"], ["Evidências", "Comprovações"],
    ["evidência", "comprovação"], ["Evidência", "Comprovação"],
    ["decisões", "escolhas"], ["Decisões", "Escolhas"],
    ["decisão", "escolha"], ["Decisão", "Escolha"],
    ["critérios", "regras"], ["Critérios", "Regras"],
    ["critério", "regra"], ["Critério", "Regra"],
    ["riscos", "impactos"], ["Riscos", "Impactos"],
    ["risco", "impacto"], ["Risco", "Impacto"],
    ["inventário", "registro"], ["Inventário", "Registro"],
    ["atrito", "esforço"], ["Atrito", "Esforço"],
    ["bloqueios", "impedimentos"], ["Bloqueios", "Impedimentos"],
    ["bloqueio", "impedimento"], ["Bloqueio", "Impedimento"],
    ["bloquear", "interromper"], ["Bloquear", "Interromper"],
  ];
  return replacements.reduce((value, [oldValue, newValue]) => value.replaceAll(oldValue, newValue), text);
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

function referenceBlock(name) {
  const label = labelFor(name);
  const group = groupFor(name);
  const profile = GROUP_PROFILES[group];
  const sourceFile = group === "contexto" ? `context/${label.replace("contexto ", "")}.md` : "context/empresa.md";
  return `\n\n## Arquitetura aplicada\n\nEsta referência usa o contrato comum para a skill **${name}**, do grupo\n**${group}**. Leia os detalhes compartilhados conforme a etapa atual:\n\n- [preflight e fontes](../_shared/01-preflight-e-fontes.md);\n- [artefato e relações](../_shared/02-contrato-de-artefato.md);\n- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);\n- [validação e retomada](../_shared/04-validacao-e-retomada.md);\n- [contexto editorial](../_shared/05-contexto-editorial.md).\n\n## Contrato específico\n\n- **Função:** executar a capacidade de ${label} dentro do fluxo do Inboundfy.\n- **Entrada mínima:** ${profile.entrada}.\n- **Saída mínima:** ${profile.saida}.\n- **Relação:** o resultado aponta para a entrada e para a skill seguinte.\n- **Preservação:** o original e as versões aprovadas permanecem disponíveis.\n\n## Guia específico do grupo\n\n${GROUP_GUIDANCE[group]}\n\nUse o campo **grupo** no registro para facilitar busca, relação e manutenção.\n\n## Template de operação\n\n\`\`\`markdown\n---\nid: {{id}}\nskill: ${name}\nestado: rascunho\nentrada: {{caminho ou ID}}\nfontes:\n  - {{caminho}}\nproxima_skill: {{nome ou "pendente de confirmação"}}\n---\n\n# Registro de ${label}\n\n## Resultado\n\n{{Conteúdo específico da etapa.}}\n\n## Pendências\n\n- {{pergunta ou "nenhuma"}}\n\n## Próxima ação\n\n{{verbo + objeto + caminho do arquivo seguinte}}\n\`\`\`\n\n## Exemplo operacional completo\n\n### Entrada ilustrativa\n\n\`\`\`yaml\nid: 0042\nskill: ${name}\ngrupo: ${group}\nentrada: {{caminho ou ID ligado ao pedido}}\ncontexto:\n  persona: persona-01\n  voz: .inboundfy/context/marca-voz.md\n  dicionario: .inboundfy/context/glossario.md\n  proibicoes: .inboundfy/context/proibicoes.md\n\`\`\`\n\n### Saída ilustrativa\n\n\`\`\`markdown\n---\nid: 0042\nskill: ${name}\nestado: aprovado\nentrada: {{caminho ou ID ligado ao pedido}}\nfontes:\n  - .inboundfy/${sourceFile}\nproxima_skill: {{skill seguinte ou "pendente de confirmação"}}\n---\n\n# Registro de ${label}\n\n## Resultado\n\nA etapa foi executada com a fonte indicada, mantendo as perguntas abertas\nseparadas do material confirmado.\n\n## Próxima ação\n\n{{verbo + objeto + caminho do arquivo seguinte}}\n\`\`\`\n\n## Checklist ampliado\n\n- [ ] O ID, o grupo e o objetivo aparecem no registro.\n- [ ] A entrada foi lida sem substituir o original.\n- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.\n- [ ] Fontes, perguntas abertas e relações estão registradas.\n- [ ] O resultado segue para a skill correta ou pede a informação que falta.\n- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.\n\n## Erros comuns adicionais\n\n- Executar **${name}** sem o arquivo de entrada ligado ao ID.\n- Declarar a etapa concluída sem preencher o campo de próxima ação.\n- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.\n- Reescrever um arquivo aprovado sem registrar a nova solicitação.\n`;
}

function specificReferenceBlock(name, description) {
  const group = groupFor(name);
  const fields = GROUP_FIELDS[group].map((field) => `- **${field}:** preencher com dado ligado ao pedido.`).join("\n");
  const paths = GROUP_REFERENCE_PATHS[group].map((path) => `- \`${path}\``).join("\n");
  const safeDescription = sanitizeSkillText(description);
  const exampleInput = exampleInputFor(name, group);
  return `\n\n## Especificação operacional\n\n### Quando usar\n\nUse **${name}** para executar esta função: ${safeDescription}\n\nO grupo **${group}** trabalha com estes campos mínimos:\n\n${fields}\n\n### Exemplo específico ilustrativo\n\nEntrada:\n\n\`\`\`yaml\nid: 0042\nskill: ${name}\ngrupo: ${group}\npedido: executar a função desta skill sobre o material selecionado\nentrada: ${exampleInput}\n\`\`\`\n\nSaída:\n\n\`\`\`yaml\nid: 0042\nskill: ${name}\nestado: pronto-para-handoff\nresultado: arquivo ou relatório salvo no caminho definido pelo fluxo\nfontes:\n  - ${exampleInput}\nproxima_skill: nome-da-proxima-skill\n\`\`\`\n\nO exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos\nvalores reais, sem apagar o material original.\n\n### Perguntas de conferência\n\n1. A entrada pertence ao grupo **${group}** e tem um ID localizável?\n2. O resultado registra todos os campos mínimos desta skill?\n3. O contexto aplicável foi lido antes da transformação?\n4. A saída aponta para a fonte, para o estado e para a próxima ação?\n5. Uma nova rodada preserva a versão anterior e registra o novo pedido?\n\n### Referências de execução\n\nLeia, na ordem necessária:\n\n${paths}\n\nDepois consulte as referências compartilhadas e o arquivo específico desta\npasta. Se houver conflito entre fontes, registre a origem de cada informação e\nencaminhe a pergunta para a skill responsável pelo domínio.\n`;
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
    const prefix = referenceText.split("## Especificação operacional", 1)[0].trimEnd();
    const updatedReference = `${prefix}${specificReferenceBlock(name, description)}`;
    if (updatedReference !== referenceText) changed += 1;
    await writeFile(referencePath, updatedReference);

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
    if (!referenceText.includes("## Especificação operacional")) errors.push(`${name}: especificação operacional ausente`);
    const agentPath = join(directory, "agents", "openai.yaml");
    try {
      const interfaceText = await readFile(agentPath, "utf8");
      for (const field of ["display_name:", "short_description:", "default_prompt:"]) {
        if (!interfaceText.includes(field)) errors.push(`${name}: interface sem ${field}`);
      }
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
