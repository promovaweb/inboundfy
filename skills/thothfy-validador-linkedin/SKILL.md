---
name: thothfy-validador-linkedin
description: >
  Valida post ou artigo produzido por thothfy-especialista-linkedin contra
  brief, todos os contextos, escrita, proibições, autoria, formato nativo e
  contrato do canal antes da entrega.
---

# Thothfy Validador LinkedIn

Valida o asset e devolve correções à `thothfy-especialista-linkedin`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/pessoas.md`, `context/publico.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Post ou artigo candidato, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Confira primeira linha, autoria, competência, Markdown indevido,
   estrutura persuasiva e CTA.
4. Reprovando, envie o relatório à `thothfy-especialista-linkedin` e
   revalide o asset inteiro.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas sem sintaxe indevida, autoria incompatível ou achado aberto.

## Idempotência

Atualize o relatório por rodada; não altere o asset.
