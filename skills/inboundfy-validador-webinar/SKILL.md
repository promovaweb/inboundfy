---
name: inboundfy-validador-webinar
description: >
  Valida página ou convite produzido por inboundfy-especialista-webinar
  contra brief, todos os contextos, escrita, proibições, apresentador,
  oferta, agenda e estrutura persuasiva antes da entrega.
---

# Inboundfy Validador Webinar

Valida a copy e devolve correções à `inboundfy-especialista-webinar`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/pessoas.md`, `context/publico.md`, `context/produtos.md`,
`context/servicos.md`, `context/ofertas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Copy candidata, brief, agenda e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira título, data, apresentador, agenda, oferta, CTA, PASTOR/AIDA e
   testemunhos.
4. Reprovando, envie o relatório à `inboundfy-especialista-webinar` e
   revalide a copy inteira.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com agenda verificável, oferta vigente e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere a copy.
