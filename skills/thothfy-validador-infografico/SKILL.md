---
name: thothfy-validador-infografico
description: >
  Valida copy de infográfico produzida por thothfy-especialista-infografico
  contra brief, fontes, todos os contextos, proibições, dados, legenda,
  acessibilidade e contrato do canal.
---

# Thothfy Validador Infográfico

Valida a copy e devolve correções à `thothfy-especialista-infografico`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/produtos.md`, `context/servicos.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Copy candidata, brief, dados e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Confira cada número, bloco, fonte, legenda, FAB e alt text.
4. Reprovando, envie o relatório à `thothfy-especialista-infografico` e
   valide novamente o arquivo inteiro.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas com dados rastreáveis, alt text útil e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere a copy.
