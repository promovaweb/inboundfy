---
name: inboundfy-validador-instagram
description: >
  Valida legenda, carrossel ou roteiro curto produzido por
  inboundfy-especialista-instagram contra brief, todos os contextos, escrita,
  proibições, progressão, CTA e contrato do formato.
---

# Inboundfy Validador Instagram

Valida o asset e devolve correções à `inboundfy-especialista-instagram`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Asset candidato, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira formato, gancho, progressão, CTA, hashtags, duração e estrutura
   declarada.
4. Reprovando, envie o relatório à `inboundfy-especialista-instagram` e
   valide novamente o asset inteiro.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas quando formato e sequência cumprem brief e referência.

## Idempotência

Atualize o relatório por rodada; não altere o asset.
