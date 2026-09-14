---
name: inboundfy-validador-podcast
description: >
  Valida pauta e shownotes produzidos por inboundfy-especialista-podcast
  contra brief, todos os contextos, escrita, proibições, participantes,
  links e contrato do canal antes da entrega.
---

# Inboundfy Validador Podcast

Valida o asset e devolve correções à `inboundfy-especialista-podcast`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/pessoas.md`,
`context/marca-voz.md`, `context/publico.md`, `context/ferramentas.md`,
`context/produtos.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Pauta e shownotes candidatos, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira participantes, competência, blocos, perguntas, shownotes e links.
4. Reprovando, envie o relatório à `inboundfy-especialista-podcast` e
   revalide o asset inteiro.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com participantes e links confirmados e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere a pauta.
