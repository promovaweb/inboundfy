---
name: inboundfy-validador-infografico
description: >
  Valida copy de infográfico produzida por inboundfy-especialista-infografico
  contra brief, fontes, todos os contextos, proibições, dados, legenda,
  acessibilidade e contrato do canal.
---

# Inboundfy Validador Infográfico

Valida a copy e devolve correções à `inboundfy-especialista-infografico`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/produtos.md`, `context/servicos.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Copy candidata, brief, dados e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira cada número, bloco, fonte, legenda, FAB e alt text.
4. Reprovando, envie o relatório à `inboundfy-especialista-infografico` e
   valide novamente o arquivo inteiro.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com dados rastreáveis, alt text útil e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere a copy.
