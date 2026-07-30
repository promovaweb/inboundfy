---
name: thothfy-validador-newsletter
description: >
  Valida newsletter produzida por thothfy-especialista-newsletter contra
  brief, fontes, todos os contextos, escrita, proibições, fluidez editorial,
  menções institucionais e contrato do canal.
---

# Thothfy Validador Newsletter

Valida a edição e devolve correções à `thothfy-especialista-newsletter`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/produtos.md`, `context/servicos.md`,
`context/ferramentas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Newsletter candidata, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Confira prosa contínua, progressão editorial, menções, FAB, CTA e
   frontmatter.
4. Reprovando, envie o relatório à `thothfy-especialista-newsletter` e
   revalide a edição inteira.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas sem fragmentação artificial, afirmação sem fonte ou achado.

## Idempotência

Atualize o relatório por rodada; não altere a edição.
