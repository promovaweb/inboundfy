---
name: thothfy-planejamento-02-pesquisa
description: >
  Fase 2 do pipeline (METODOLOGIA.md). Extrai da base limpa e do context/ os
  ativos reutilizáveis — teses, exemplos, dados, dores, objeções, perguntas
  frequentes, citações e entidades — para alimentar qualquer peça futura do
  pacote. Não escreve copy final.
---

# Thothfy Pesquisa

Terceira skill do pipeline. Lê `01-saneamento/base-limpa.md` e o `context/`
disponível para produzir um repertório de ativos que `thothfy-planejamento-03-oportunidades` e
`thothfy-planejamento-04-briefing` vão usar depois.

## Escopo

Extrai e organiza ativos reutilizáveis. Não decide quais peças produzir
(`thothfy-planejamento-03-oportunidades`) nem escreve brief (`thothfy-planejamento-04-briefing`).

## Contexto exigido

- `context/produtos.md` e/ou `context/servicos.md`: para reconhecer menção a
  algo que a empresa oferece.
- `context/publico.md`: para conectar dor e objeção extraídas do material com
  a persona correspondente.
- `context/ferramentas.md`: para identificar ferramentas de terceiro citadas.

## Entrada esperada

`01-saneamento/base-limpa.md` do pacote em andamento.

## Fluxo

1. Leia `01-saneamento/base-limpa.md` por completo.
2. Extraia teses defendidas no material, com a frase ou trecho exato que as
   sustenta.
3. Extraia exemplos concretos, dados e números citados, sempre com a
   referência de onde apareceram no material.
4. Extraia dores e objeções mencionadas, e associe a uma persona de
   `context/publico.md` quando possível.
5. Extraia perguntas frequentes implícitas ou explícitas no material.
6. Extraia entidades citadas — produtos, serviços, pessoas, ferramentas — e
   confirme cada uma contra o `context/` correspondente; sinalize entidade
   não cadastrada em vez de descrevê-la por conta própria.
7. Salve tudo em `02-pesquisa-e-ativos/ativos.md`, organizado por tipo de
   ativo (teses, exemplos, dores, objeções, FAQ, entidades), seguindo o
   template de `REFERENCIA.md`.

## Saída

`02-pesquisa-e-ativos/ativos.md`, dentro do diretório do pacote.

## Validação

- Todo ativo extraído tem referência rastreável ao trecho de origem na base
  limpa.
- Toda entidade citada foi checada contra `context/`; entidades não
  cadastradas estão sinalizadas, não inventadas.
- Nenhum ativo é uma reescrita com voz editorial — ainda é material bruto de
  repertório, não copy.

## Idempotência

Rodar novamente sobre o mesmo pacote atualiza `ativos.md` incorporando novos
ativos, sem descartar os já extraídos.
