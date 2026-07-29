---
name: thothfy-planejamento-03-oportunidades
description: >
  Fase 3 do pipeline (METODOLOGIA.md). Cruza os ativos extraídos com os
  canais ativos em context/canais.md e decide quais peças valem a pena, em
  que ordem e com qual prioridade. Não escreve brief nem copy final.
---

# Thothfy Planejamento

Quarta skill do pipeline. Transforma o repertório de `02-pesquisa-e-ativos/ativos.md`
em uma lista de oportunidades de conteúdo por canal, priorizadas.

## Escopo

Decide o quê e em que ordem, não o como — o brief formal por peça é
`thothfy-planejamento-04-briefing`.

## Contexto exigido

- `context/canais.md`: canais ativos e suas skills de redação/imagem.
- `context/publico.md`: para priorizar oportunidades que atendem persona com
  dor mais urgente ou objeção mais recorrente.

## Entrada esperada

`02-pesquisa-e-ativos/ativos.md` do pacote em andamento.

## Fluxo

1. Leia `02-pesquisa-e-ativos/ativos.md` e `context/canais.md`.
2. Para cada canal ativo, avalie se o repertório de ativos sustenta uma peça
   nesse canal — não force peça em canal sem ativo suficiente.
3. Liste as oportunidades identificadas, cada uma com: canal, ângulo,
   ativo(s) de apoio usados, e uma prioridade (alta, média, baixa) justificada
   pela matriz de priorização de `REFERENCIA.md`.
4. Sinalize oportunidades que dependem de dado ainda não confirmado em
   `context/` (ex.: menção a produto sem entrada em `context/produtos.md`).
5. Salve o plano em `03-planejamento/plano-de-oportunidades.md`, seguindo o
   template de `REFERENCIA.md`.
6. Apresente o plano ao usuário para aprovação antes de acionar
   `thothfy-planejamento-04-briefing` — não gere brief de oportunidade não aprovada.

## Saída

`03-planejamento/plano-de-oportunidades.md`, dentro do diretório do pacote.

## Validação

- Toda oportunidade lista o(s) ativo(s) de apoio usados.
- Nenhuma oportunidade foi criada para canal sem ativo suficiente.
- Prioridade tem justificativa, não é apenas uma ordem arbitrária.

## Idempotência

Rodar novamente sobre o mesmo pacote atualiza o plano incorporando novos
ativos, sem descartar oportunidades já aprovadas pelo usuário.
