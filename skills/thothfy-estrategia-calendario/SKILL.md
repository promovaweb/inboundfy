---
name: thothfy-estrategia-calendario
description: >
  Quarta skill do grupo estratégico. Mantém o calendário editorial recorrente
  entre campanhas — cadência orgânica por canal fora de campanha específica —
  e distribui no tempo os pacotes de conteúdo de campanhas ativas. Não decide
  fase nem tema de campanha (thothfy-estrategia-campanha); decide quando cada
  pacote entra em produção.
---

# Thothfy Estratégia — Calendário Editorial

Quarta etapa do grupo estratégico e a única contínua: onde
`thothfy-estrategia-campanha` decide fase e tema de uma campanha específica,
esta skill decide a agenda real — que semana, que canal, que pacote entra em
produção, somando cadência orgânica (sem campanha) e pacotes de campanhas
ativas.

## Escopo

Decide sequência no tempo, não estratégia de campanha nem brief de peça.
Consome o plano de `thothfy-estrategia-campanha` como entrada, nunca o
substitui.

## Contexto exigido

- `context/canais.md`, para cadência técnica de cada canal e diretório de
  trabalho do pipeline.
- `context/campanhas.md`, para listar todas as campanhas ativas e seus
  pacotes de conteúdo pendentes.

## Entrada esperada

Um período a planejar (semana, mês, trimestre), a lista de campanhas ativas
em `context/campanhas.md` e, quando houver, `01-plano/plano-de-campanha.md`
de cada campanha ativa.

## Fluxo

1. Leia `context/campanhas.md` e o plano de cada campanha ativa.
2. Liste a cadência orgânica de cada canal ativo em `context/canais.md`
   (conteúdo recorrente que não pertence a nenhuma campanha específica).
3. Distribua no período pedido: pacotes de campanha ativa (respeitando a
   fase em que estão) e cadência orgânica, sem exceder a cadência técnica
   declarada por canal.
4. Ao alocar um pacote, decida a rota: se já existe material bruto, aponte
   para `thothfy-planejamento-00-triagem`; se é peça avulsa e rápida sem
   pacote completo, aponte direto para `thothfy-especialista-<canal>`.
5. Sinalize conflito de capacidade — mais pacotes do que a cadência do canal
   suporta no período — e negocie prioridade com o usuário antes de fechar
   o calendário.
6. Salve o calendário em `calendario/<periodo>.md`, seguindo o template de
   `REFERENCIA.md`.

## Saída

`calendario/<periodo>.md` (ex.: `calendario/2026-08.md`), no diretório de
trabalho definido em `context/canais.md`.

## Validação

- Nenhum canal recebe mais peças no período do que sua cadência técnica
  suporta.
- Todo item do calendário aponta a rota certa (pipeline completo ou
  especialista direto) e a campanha de origem, quando houver.
- Conflito de capacidade foi resolvido com o usuário, não decidido
  silenciosamente pela skill.

## Idempotência

Recalcular o mesmo período atualiza a distribuição incorporando novidade de
campanha ou cadência, preservando item já marcado como produzido ou em
produção.
