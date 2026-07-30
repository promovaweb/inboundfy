# SKILL-AUTORIA.md — Contrato de Skill do Thothfy

Toda skill em `skills/` segue esta estrutura. Use este arquivo ao criar uma
skill nova ou ao revisar uma existente.

## Os sete grupos

Toda skill funcional pertence a exatamente um destes grupos, identificado
pelo nome do diretório. Eles cobrem apoio mecânico, dados do negócio,
desenvolvimento de ideia, estratégia de campanha, pipeline de produção e
especialidade de canal. Ver `BRAINSTORM.md`, `ESTRATEGIA.md` e
`METODOLOGIA.md`.

1. **`thothfy-base-*`** — capacidades fundamentais reutilizadas por qualquer
   skill de canal: escrita/auditoria de parágrafo, formatação, SEO, motor de
   imagem. Não citam canal nem fase do pipeline. Não escrevem peça final
   sozinhas — são chamadas pelas skills responsáveis pela redação.
2. **`thothfy-contexto-*`** (mais `thothfy-setup`) — preenchem e mantêm os
   arquivos de `context/` e o próprio ambiente instalado (`.thothfy/`). Não
   produzem artefato de conteúdo nem decidem estratégia — apenas guardam o
   que já foi estabelecido pelos fluxos seguintes.
3. **`thothfy-brainstorm-<NN>-<nome>`** — desenvolvimento sequencial de uma
   ideia, da triagem à validação, nas fases 00 a 04 de `BRAINSTORM.md`. Não
   escreve peça final. `thothfy-brainstorm`, sem número, é a wrapper deste
   grupo.
4. **`thothfy-estrategia-<NN>-<nome>`** — planejamento estratégico de agência, anterior
   a qualquer material bruto ou pacote de conteúdo: kickoff de campanha,
   pesquisa de mercado, plano de campanha multicanal e calendário editorial
   recorrente. A sequência 00 a 03 registra a abertura da campanha; uma fase
   pode ser reaberta depois. Ver `ESTRATEGIA.md`.
5. **`thothfy-planejamento-<NN>-<nome>`** — as fases sequenciais de
   `METODOLOGIA.md`, da 00 à 06, que processam um pacote de conteúdo já
   iniciado a partir de material bruto ou de um item alocado pelo grupo 4.
   O número no nome é a própria ordem de execução; não é decorativo. Não
   escrevem copy final — preparam, roteiam ou auditam o que a skill
   especialista produz.
6. **`thothfy-especialista-<canal>[-imagem]`** — recebem um brief pronto (de
   `thothfy-planejamento-04-briefing` ou de um item avulso apontado
   diretamente pelo grupo 4) e produzem o artefato final de um canal
   específico. Não decidem estratégia.
7. **`thothfy-validador-<canal>[-imagem]`** — validam exatamente o asset da
   especialista de mesmo sufixo. Aplicam `thothfy-base-validador`, todos os
   contextos, as fontes locais e a referência do canal; se reprovarem,
   devolvem um relatório acionável à produtora pareada até nova aprovação.

`thothfy-setup`, `thothfy-brainstorm` e `thothfy-iniciar` são pontos de
entrada: instalação, desenvolvimento de ideia e produção. As wrappers devem
acionar skills existentes, registrar escolhas automáticas e evitar perguntas
sobre preferências reversíveis.

## Nome

- Grupo base: `thothfy-base-<capacidade>` (ex.: `thothfy-base-editor`).
- Grupo contexto: `thothfy-contexto-<arquivo-que-mantém>` (ex.:
  `thothfy-contexto-produtos`); `thothfy-setup` é a exceção de nome sem
  prefixo de arquivo, por ser onboarding geral.
- Grupo brainstorm: `thothfy-brainstorm-<NN>-<nome-da-fase>`, com `NN` de
  `00` a `04`, conforme `BRAINSTORM.md`.
- Grupo estratégia: `thothfy-estrategia-<NN>-<nome-da-fase>`, com `NN` de
  `00` a `03`, conforme `ESTRATEGIA.md`.
- Grupo planejamento: `thothfy-planejamento-<NN>-<nome-da-fase>`, com `NN`
  de dois dígitos, na mesma ordem de `METODOLOGIA.md` (`00` a `06`). Nunca
  reordene ou pule número ao adicionar uma fase nova — insira uma fase
  intermediária como `03a` apenas em último caso, documentando a exceção em
  `METODOLOGIA.md`.
- Grupo especialista: `thothfy-especialista-<canal>` para o texto do canal e
  `thothfy-especialista-<canal>-imagem` para a imagem do mesmo canal, quando
  existir. Use o mesmo `<canal>` nos dois nomes para deixar o par óbvio.
- Grupo validador: `thothfy-validador-<canal>` e
  `thothfy-validador-<canal>-imagem`, espelhando exatamente o sufixo da
  produtora correspondente.

Nomes são sempre em português, curtos e comuns — sem sigla que exija
explicação adicional.

## Diretório

```text
skills/thothfy-<nome>/
├── SKILL.md
├── REFERENCIA.md    (obrigatório — ver seção própria abaixo)
└── scripts/          (opcional, apoio mecânico não substitui julgamento)
```

## `REFERENCIA.md` — material de apoio obrigatório

`SKILL.md` define o contrato (o que a skill faz, contexto exigido, fluxo,
validação). `REFERENCIA.md` é onde a skill vira referência de verdade: o
material que faz a diferença entre uma execução genérica e uma execução
brilhante. Todo `REFERENCIA.md` inclui, no que for aplicável ao tipo de
skill:

1. **Templates prontos** do artefato ou arquivo que a skill produz ou
   mantém, com placeholders claros — não apenas descrição em prosa de como
   deveria ser.
2. **Exemplo completo preenchido**, com dado fictício e claramente marcado
   como ilustrativo, mostrando o resultado esperado de ponta a ponta.
3. **Checklist objetivo** de qualidade — itens binários (presente/ausente,
   sim/não) que qualquer execução da skill deve satisfazer antes de
   considerar o trabalho pronto.
4. **Erros comuns e como evitá-los** — armadilhas específicas do que essa
   skill produz (não repita o genérico já coberto por `ESCRITA.md`).
5. **Fórmulas, estruturas ou vocabulário de apoio** quando o tipo de
   artefato tiver convenção própria (ganchos, aberturas, proporção de
   imagem, estrutura de linha, limite de caracteres).

`SKILL.md` referencia `REFERENCIA.md` explicitamente no passo do `Fluxo` em
que ele deve ser consultado — nunca deixe o material de apoio órfão, sem
menção no fluxo. `REFERENCIA.md` nunca substitui `ESCRITA.md`,
`ESTRUTURAS-PERSUASIVAS.md` ou `CONTEXTO.md`; ele é específico da skill,
enquanto aqueles são regra transversal do framework.

## Frontmatter obrigatório

```yaml
---
name: thothfy-<nome>
description: >
  Uma frase objetiva do que a skill faz e quando ativá-la. Deve dizer o
  artefato que produz ou a manutenção que executa, e citar o(s) arquivo(s)
  de context/ que exige.
---
```

## Estrutura do corpo do `SKILL.md`

1. **Título e uma linha de escopo.** O que a skill faz e o que ela
   explicitamente não faz (link para a skill certa quando aplicável).
2. **Verificação do setup.** Toda skill, exceto `thothfy-setup`, confere
   `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Quando um
   deles não existir, apresenta o alerta canônico abaixo e encerra sem criar
   nem alterar artefatos.
3. **Contexto exigido.** Lista dos arquivos de `context/` que a skill lê
   antes de produzir qualquer coisa, e o que fazer quando um deles estiver
   incompleto (parar e acionar a skill de manutenção correspondente, listada
   em `CONTEXTO.md`).
4. **Entrada esperada.** O que o usuário fornece para ativar a skill: brief,
   material bruto, slug, arquivo existente.
5. **Fluxo.** Passo a passo verificável, incluindo o ponto no qual a skill lê
   `ESCRITA.md` (para redação) ou a validação própria do canal.
6. **Saída.** Onde o artefato final é salvo, qual formato usa e o campo
   `brief` obrigatório em Markdown final quando fizer parte de um pacote
   (ver `METODOLOGIA.md`).
7. **Validação.** Condições objetivas de aprovação: o que reprova o artefato
   e como a skill responde à reprovação (corrigir, devolver para briefing ou
   perguntar ao usuário).
8. **Idempotência.** O que a skill nunca sobrescreve sem pedido explícito
   (ex.: imagem já gerada, arquivo de contexto já preenchido).

O alerta canônico é:

> O setup do Thothfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `thothfy-setup` para preparar os arquivos de apoio.

Os dois arquivos confirmam que o setup preparou o ambiente e pesquisou as
fontes locais. A presença das skills no diretório do agente não comprova essa
preparação.

## Regras transversais

- Nenhuma skill cita nome de empresa, produto, pessoa, preço ou promessa
  comercial fora de exemplo genérico claramente marcado como ilustrativo.
- Toda skill de redação ou revisão de texto lê `ESCRITA.md` e aciona
  `thothfy-base-editor` antes de aprovar qualquer parágrafo.
  `thothfy-base-editor` sempre cruza `context/proibicoes.md` (vetos de
  negócio) com `context/estruturas-proibidas.md` (padrões genéricos de
  texto com cara de IA) na mesma auditoria.
- Toda skill de geração de imagem declara o motor ou fonte usada (busca de
  foto real vs. geração sintética) e por que essa é a fonte certa para o
  artefato — ver `thothfy-base-imagem` como referência.
- Toda skill que cria ou altera um arquivo de `context/` segue o formato
  descrito em `CONTEXTO.md` e nunca apaga seção inteira, só atualiza conteúdo.
- Somente `thothfy-setup` cria, move, restaura ou reconcilia arquivos de
  apoio, metodologia, templates, estrutura de `context/`, diretórios de saída
  e o bloco do Thothfy em `AGENTS.md`/`CLAUDE.md`. Outra skill que encontrar
  instalação parcial deve acionar o setup, sem improvisar caminhos.
- `thothfy-contexto-*` altera o conteúdo de `.thothfy/context/`, mas não move
  nem reinstala esses arquivos. O setup restaura arquivo ausente como
  template e preserva todo arquivo existente.
- Toda skill lê `.thothfy/FONTES-PROJETO.md` depois do preflight e carrega os
  Markdown marcados como relevantes para sua tarefa. Ela não copia, altera ou
  atribui autoridade automática às fontes descobertas.
- Skills do grupo `thothfy-brainstorm-<NN>-*` preservam a ideia, separam
  fatos de hipóteses e validam a prosa contra os dois arquivos de proibições.
- Skills do grupo `thothfy-estrategia-<NN>-*` não escrevem copy final e não abrem
  pacote de pipeline sozinhas — elas produzem brief de campanha, pesquisa,
  plano ou calendário, e apontam para `thothfy-planejamento-00-triagem` ou
  para `thothfy-especialista-*` quando o pacote ou a peça precisa ser criado.
- Skills do grupo `thothfy-planejamento-<NN>-*` não escrevem copy final — elas
  orquestram e preparam material para a skill especialista escrever.
- Skills do grupo `thothfy-especialista-*` não decidem estratégia — elas
  recebem um brief já aprovado, produzem o artefato dentro dele e o enviam à
  validadora pareada antes de declará-lo pronto.
- Skills do grupo `thothfy-validador-*` não corrigem o asset: registram
  evidência, regra violada e correção verificável, então devolvem à
  `thothfy-especialista-*` de mesmo sufixo. A nova versão volta à validadora
  até aprovação ou bloqueio factual apresentado ao usuário.
- Toda validadora aplica `context/proibicoes.md` e
  `context/estruturas-proibidas.md` como hard gates. Qualquer ocorrência
  literal, semântica ou estrutural reprova o asset, sem compensação por nota,
  SEO, estética ou outro critério aprovado. Depois da correção, os dois
  passes são repetidos sobre o asset inteiro.
- Toda validadora procura `brand/`. Quando a pasta existir, lê seus Markdown
  e inspeciona logos, tokens, cores, tipografia e aplicações relevantes. Uma
  divergência de marca reprova o asset ou bloqueia a decisão quando houver
  conflito entre fontes.
- Skills do grupo `thothfy-base-*` não conhecem canal nem fase — são
  utilitários puros, chamados pelas skills que precisam deles.

## Caminhos de arquivo

Toda skill referencia caminhos relativos ao projeto que adota o Thothfy, nunca
caminho absoluto local. Use `context/<arquivo>.md`, `skills/<nome>/SKILL.md`
e o diretório de pacote definido pelo usuário em `context/canais.md`.

## `.thothfy/` no projeto do usuário e resolução de caminho

Quando o Thothfy é instalado por `thothfy-setup` em um projeto consumidor,
ele cria uma pasta `.thothfy/` na raiz desse projeto — ver estrutura completa
em `INSTALACAO.md`. O diretório `context/` deste repositório é o template de
origem, não o dado ao vivo de um projeto já instalado.

Por isso, toda referência a `context/<arquivo>.md` dentro do corpo de uma
skill (`Contexto exigido`, `Fluxo`, exemplos) é relativa ao projeto onde a
skill está rodando, e resolve para `.thothfy/context/<arquivo>.md` depois da
instalação. As skills não repetem o prefixo `.thothfy/` em cada menção para
manter o texto legível; a resolução é a mesma em qualquer skill do
catálogo. Só os arquivos que descrevem o próprio processo de instalação
(`thothfy-setup`, `INSTALACAO.md`) distinguem explicitamente o `context/`
de origem (neste repositório) do `.thothfy/context/` de destino (no projeto
do usuário).

## Validação de uma skill nova

Antes de considerar uma skill pronta:

1. O nome do diretório e o frontmatter `name` seguem a convenção do grupo a
   que a skill pertence.
2. A skill, quando não for o setup, confere `.thothfy/VERSAO.md` e
   `.thothfy/FONTES-PROJETO.md`, apresenta o alerta canônico quando necessário
   e lê as fontes relevantes.
3. A skill declara todo `context/` de que depende.
4. O fluxo é verificável passo a passo, sem etapa vaga como "escreva bem".
5. A saída tem local e formato definidos.
6. Existem condições objetivas de validação, não apenas "revise antes de
   publicar".
7. `REFERENCIA.md` existe, tem pelo menos um template ou exemplo completo, e
   é citado em algum passo do `Fluxo`.

Depois da revisão manual, execute:

```bash
python3 scripts/validar-framework.py
```

O comando confirma nomes, frontmatter, seções, referências, dependências de
`context/` e continuidade numérica dos três fluxos.
