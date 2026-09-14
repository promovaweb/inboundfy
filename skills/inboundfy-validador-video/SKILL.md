---
name: inboundfy-validador-video
description: >
  Valida roteiro de vídeo produzido por inboundfy-especialista-video contra
  brief, todos os contextos, escrita, proibições, autoria, fala, estrutura e
  contrato do canal antes da entrega.
---

# Inboundfy Validador Vídeo

Valida o roteiro e devolve correções à `inboundfy-especialista-video`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/pessoas.md`, `context/publico.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Roteiro candidato, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira gancho, fala, competência do apresentador, cenas, apoio visual,
   CTA, duração e estrutura declarada.
4. Reprovando, envie o relatório à `inboundfy-especialista-video` e revalide
   o roteiro inteiro.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas quando o roteiro soa falado e não extrapola o escopo.

## Idempotência

Atualize o relatório por rodada; não altere o roteiro.
