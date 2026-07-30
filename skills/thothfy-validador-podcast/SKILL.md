---
name: thothfy-validador-podcast
description: >
  Valida pauta e shownotes produzidos por thothfy-especialista-podcast
  contra brief, todos os contextos, escrita, proibições, participantes,
  links e contrato do canal antes da entrega.
---

# Thothfy Validador Podcast

Valida o asset e devolve correções à `thothfy-especialista-podcast`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/pessoas.md`,
`context/marca-voz.md`, `context/publico.md`, `context/ferramentas.md`,
`context/produtos.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Pauta e shownotes candidatos, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md` e os contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Confira participantes, competência, blocos, perguntas, shownotes e links.
4. Reprovando, envie o relatório à `thothfy-especialista-podcast` e
   revalide o asset inteiro.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas com participantes e links confirmados e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere a pauta.
