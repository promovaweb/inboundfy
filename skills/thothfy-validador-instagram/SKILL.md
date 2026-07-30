---
name: thothfy-validador-instagram
description: >
  Valida legenda, carrossel ou roteiro curto produzido por
  thothfy-especialista-instagram contra brief, todos os contextos, escrita,
  proibições, progressão, CTA e contrato do formato.
---

# Thothfy Validador Instagram

Valida o asset e devolve correções à `thothfy-especialista-instagram`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Asset candidato, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Confira formato, gancho, progressão, CTA, hashtags, duração e estrutura
   declarada.
4. Reprovando, envie o relatório à `thothfy-especialista-instagram` e
   valide novamente o asset inteiro.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas quando formato e sequência cumprem brief e referência.

## Idempotência

Atualize o relatório por rodada; não altere o asset.
