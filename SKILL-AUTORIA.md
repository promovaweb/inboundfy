# SKILL-AUTORIA.md — Contrato de Skill do Thothfy

Toda skill em `skills/` segue esta estrutura. Use este arquivo ao criar uma
skill nova ou ao revisar uma existente.

## Os cinco grupos

Toda skill pertence a exatamente um destes grupos, identificado pelo próprio
nome do diretório. Os cinco grupos respondem a quatro perguntas diferentes:
apoio mecânico, dado de negócio, estratégia de agência (o quê e por quê, sem
material ainda), fluxo de um pacote já iniciado (como, passo a passo) e
item avulso (produção de uma peça específica de um canal). Ver `ESTRATEGIA.md`
e `METODOLOGIA.md` para a relação entre os grupos 3, 4 e 5 na prática.

1. **`thothfy-base-*`** — capacidades fundamentais reutilizadas por qualquer
   skill de canal: escrita/auditoria de parágrafo, formatação, SEO, motor de
   imagem. Não citam canal nem fase do pipeline. Não escrevem peça final
   sozinhas — são chamadas por quem escreve.
2. **`thothfy-contexto-*`** (mais `thothfy-setup`) — preenchem e mantêm os
   arquivos de `context/` e o próprio ambiente instalado (`.thothfy/`). Não
   produzem artefato de conteúdo nem decidem estratégia — apenas guardam o
   que já foi decidido pelos grupos 3 e 4.
3. **`thothfy-estrategia-*`** — planejamento estratégico de agência, anterior
   a qualquer material bruto ou pacote de conteúdo: kickoff de campanha,
   pesquisa de mercado, plano de campanha multicanal e calendário editorial
   recorrente. Decidem o quê, por quê e quando em nível de campanha ou de
   agenda — nunca escrevem copy final nem entram no passo a passo de uma
   peça específica. Ver `ESTRATEGIA.md`.
4. **`thothfy-planejamento-<NN>-<nome>`** — as fases sequenciais de
   `METODOLOGIA.md`, da 00 à 06, que processam um pacote de conteúdo já
   iniciado a partir de material bruto (ou de um item alocado pelo grupo 3).
   O número no nome é a própria ordem de execução; não é decorativo. Não
   escrevem copy final — preparam, roteiam ou auditam o que a skill
   especialista produz.
5. **`thothfy-especialista-<canal>[-imagem]`** — recebem um brief pronto (de
   `thothfy-planejamento-04-briefing` ou de um item avulso apontado
   diretamente pelo grupo 3) e produzem o artefato final de um canal
   específico. Não decidem estratégia.

Existe ainda uma skill fora dos cinco grupos, por natureza: `thothfy-iniciar`,
a skill mestra que aciona toda a sequência de `thothfy-planejamento-<NN>-*` e
os especialistas necessários automaticamente — ver
`skills/thothfy-iniciar/SKILL.md`. `thothfy-iniciar` parte de um pacote com
material bruto já definido; não substitui o grupo 3 quando a campanha ainda
não tem material nenhum.

## Nome

- Grupo base: `thothfy-base-<capacidade>` (ex.: `thothfy-base-editor`).
- Grupo contexto: `thothfy-contexto-<arquivo-que-mantém>` (ex.:
  `thothfy-contexto-produtos`); `thothfy-setup` é a exceção de nome sem
  prefixo de arquivo, por ser onboarding geral.
- Grupo estratégia: `thothfy-estrategia-<nome>` (ex.:
  `thothfy-estrategia-campanha`). Sem número — as skills deste grupo não
  formam uma sequência fixa de fases; `ESTRATEGIA.md` descreve a ordem
  típica de uso.
- Grupo planejamento: `thothfy-planejamento-<NN>-<nome-da-fase>`, com `NN`
  de dois dígitos, na mesma ordem de `METODOLOGIA.md` (`00` a `06`). Nunca
  reordene ou pule número ao adicionar uma fase nova — insira uma fase
  intermediária como `03a` apenas em último caso, documentando a exceção em
  `METODOLOGIA.md`.
- Grupo especialista: `thothfy-especialista-<canal>` para o texto do canal e
  `thothfy-especialista-<canal>-imagem` para a imagem do mesmo canal, quando
  existir. Use o mesmo `<canal>` nos dois nomes para deixar o par óbvio.

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
   imagem, estrutura de linha, contagem de caracteres).

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
2. **Contexto exigido.** Lista dos arquivos de `context/` que a skill lê
   antes de produzir qualquer coisa, e o que fazer quando um deles estiver
   incompleto (parar e acionar a skill de manutenção correspondente, listada
   em `CONTEXTO.md`).
3. **Entrada esperada.** O que o usuário fornece para ativar a skill: brief,
   material bruto, slug, arquivo existente.
4. **Fluxo.** Passo a passo verificável, incluindo em que ponto a skill lê
   `ESCRITA.md` (para redação) ou a validação própria do canal.
5. **Saída.** Onde o artefato final é salvo, em que formato, e o campo
   `brief` obrigatório em Markdown final quando fizer parte de um pacote
   (ver `METODOLOGIA.md`).
6. **Validação.** Critério objetivo de pronto: o que reprova o artefato e o
   que a skill deve fazer diante da reprovação (corrigir, devolver para
   briefing, ou perguntar ao usuário).
7. **Idempotência.** O que a skill nunca sobrescreve sem pedido explícito
   (ex.: imagem já gerada, arquivo de contexto já preenchido).

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
- Skills do grupo `thothfy-estrategia-*` não escrevem copy final e não abrem
  pacote de pipeline sozinhas — elas produzem brief de campanha, pesquisa,
  plano ou calendário, e apontam para `thothfy-planejamento-00-triagem` ou
  para `thothfy-especialista-*` quando o pacote ou a peça precisa nascer.
- Skills do grupo `thothfy-planejamento-<NN>-*` não escrevem copy final — elas
  orquestram e preparam material para a skill especialista escrever.
- Skills do grupo `thothfy-especialista-*` não decidem estratégia — elas
  recebem um brief já aprovado e produzem o artefato dentro dele.
- Skills do grupo `thothfy-base-*` não conhecem canal nem fase — são
  utilitário puro, chamado por quem precisar.

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
2. A skill declara todo `context/` de que depende.
3. O fluxo é verificável passo a passo, sem etapa vaga como "escreva bem".
4. A saída tem local e formato definidos.
5. Existe critério objetivo de validação, não apenas "revise antes de
   publicar".
6. `REFERENCIA.md` existe, tem pelo menos um template ou exemplo completo, e
   é citado em algum passo do `Fluxo`.
