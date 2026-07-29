---
name: thothfy-especialista-newsletter
description: >
  Escreve newsletter longa e editorial (por e-mail ou publicação própria) a
  partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz
  de context/marca-voz.md.
---

# Thothfy Newsletter Redator

Skill de canal para newsletter longa — mais próxima de artigo editorial do
que de e-mail promocional curto.

## Escopo

Cobre newsletter editorial longa, seja distribuída por e-mail ou publicada
como artigo próprio. E-mail curto avulso ou de nutrição é
`thothfy-especialista-email`.

## Contexto exigido

- `context/marca-voz.md`: tom, pessoa gramatical, exemplos de voz.
- `context/publico.md`: persona e nível técnico esperado.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md`, `context/servicos.md` e `context/ferramentas.md`:
  quando a edição mencionar algo da empresa ou de terceiro.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): apenas
  para o técnica FAB, ver seção abaixo.

## Estrutura persuasiva

Newsletter editorial normalmente não segue AIDA, PAS ou PASTOR inteiros — o
valor do canal é a leitura contínua, não a conversão imediata. A exceção é
quando o brief marcar uma edição de lançamento ou oferta especial: nesse
caso, trate a edição como `thothfy-especialista-email` trataria um PASTOR, mas
preservando o tom editorial e o tamanho maior do canal.

Sempre que a edição apresentar um produto, serviço ou ferramenta dentro do
texto corrido, aplique **FAB**: nomeie a característica (do `context/`
correspondente), explique a vantagem prática e feche no benefício real para
quem lê — nunca liste a característica e siga em frente sem completar a
tradução.

## Entrada esperada

Um brief com: tema da edição, ângulo, ativos de apoio (de
`thothfy-planejamento-02-pesquisa` quando existir pacote), objetivo e CTA.

## Fluxo

1. Leia o brief, `ESCRITA.md` e os arquivos de contexto exigidos.
2. Escreva assunto e pré-header quando a distribuição for por e-mail.
3. Escreva o corpo em prosa longa e contínua, com abertura reconhecível,
   desenvolvimento de uma ou poucas ideias centrais, exemplo interpretado e
   fechamento sem enfeite — seguindo `ESCRITA.md` integralmente, já que este
   canal tem menos restrição de tamanho que e-mail curto ou rede social. Use
   a estrutura de edição por tipo de `REFERENCIA.md`.
4. Insira menção a produto, serviço ou ferramenta apenas com base no
   `context/` correspondente.
5. Feche com CTA único.
6. Rode `thothfy-base-editor` — ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md` — e corrija parágrafos abaixo de 90%.
7. Salve com frontmatter incluindo `assunto` (quando por e-mail), `titulo`,
   `description` e `brief` quando fizer parte de um pacote.
8. Encaminhe para `thothfy-planejamento-06-auditoria`.

## Saída

Arquivo Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal newsletter.

## Validação

- Corpo em prosa contínua, sem fragmentação artificial.
- Nenhum parágrafo abaixo de 90% na auditoria de `thothfy-base-editor`.
- Toda menção institucional confere com `context/`.

## Idempotência

Editar uma edição já existente altera apenas o que o pedido atual indicar.
