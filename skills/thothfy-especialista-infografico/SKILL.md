---
name: thothfy-especialista-infografico
description: >
  Escreve a copy final de infográfico a partir de um brief aprovado (fase 5
  do pipeline) — título, blocos visuais, legenda e alt text, curta e
  factual, sem prosa longa.
---

# Thothfy Infografico Redator

Skill de canal para o texto de infográfico. Produz o texto que a skill de
imagem (`thothfy-especialista-infografico-imagem`) vai compor visualmente.

## Escopo

Cobre apenas o texto: título, blocos, legenda e alt text. A composição
visual é `thothfy-especialista-infografico-imagem`.

## Contexto exigido

- `context/marca-voz.md`: tom, mesmo em formato curto.
- `context/proibicoes.md`: vetos, especialmente contra dado fabricado ou
  estatística sem fonte.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto
  com cara de IA, aplicado na legenda de acompanhamento.
- `context/produtos.md`, `context/servicos.md` ou dado de pesquisa do pacote,
  quando o infográfico apresentar dado numérico.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): apenas
  para a técnica FAB, ver seção abaixo.

## Estrutura persuasiva

Infográfico é factual e telegráfico por natureza — não força blocos de
AIDA, PAS ou PASTOR. Quando o brief for um infográfico comparativo ou de
apresentação de produto (ex.: "por que usar X"), aplique **FAB** por bloco
visual: cada bloco nomeia uma característica, o texto mínimo do bloco indica
a vantagem, e a legenda de acompanhamento (que passa por `thothfy-base-editor`)
fecha no benefício real para quem lê — sem transformar o bloco visual em
parágrafo longo.

## Entrada esperada

Um brief com o dado ou tese central a visualizar, número de blocos desejado
e fonte do dado.

## Fluxo

1. Leia o brief e confirme a fonte de cada dado numérico — nunca crie dado
   ou estatística sem origem rastreável.
2. Escreva um título curto que resuma a tese central em uma linha.
3. Escreva cada bloco com texto mínimo necessário para ser lido rapidamente
   dentro da peça visual — frases curtas aqui são uma decisão de canal, não
   uma violação de `ESCRITA.md`. Use o template de bloco visual de
   `REFERENCIA.md`.
4. Escreva a legenda de acompanhamento (para uso em post que compartilha o
   infográfico) e o alt text descritivo da imagem.
5. Rode `thothfy-base-editor` na legenda (o texto de prosa contínua do
   conjunto — ele cruza `context/proibicoes.md` e
   `context/estruturas-proibidas.md`),
   não nos blocos curtos do infográfico, que são intencionalmente
   telegráficos.
6. Salve com frontmatter incluindo `titulo`, `fonte-dos-dados` e `brief`
   quando fizer parte de um pacote.
7. Encaminhe para `thothfy-especialista-infografico-imagem` e depois para
   `thothfy-planejamento-06-auditoria`.

## Saída

Arquivo Markdown com título, blocos, legenda e alt text, salvo no caminho de
`context/canais.md` para o canal infográfico.

## Validação

- Todo dado numérico tem fonte rastreável registrada.
- Legenda passou pela auditoria de `thothfy-base-editor`.
- Alt text descreve a imagem de forma útil para leitor de tela.

## Idempotência

Editar a copy já existente altera apenas o bloco indicado.
