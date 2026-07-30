---
name: thothfy-validador-webinar
description: >
  Valida página ou convite produzido por thothfy-especialista-webinar
  contra brief, todos os contextos, escrita, proibições, apresentador,
  oferta, agenda e estrutura persuasiva antes da entrega.
---

# Thothfy Validador Webinar

Valida a copy e devolve correções à `thothfy-especialista-webinar`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

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
2. Acione `thothfy-base-validador`.
3. Confira título, data, apresentador, agenda, oferta, CTA, PASTOR/AIDA e
   testemunhos.
4. Reprovando, envie o relatório à `thothfy-especialista-webinar` e
   revalide a copy inteira.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas com agenda verificável, oferta vigente e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere a copy.
