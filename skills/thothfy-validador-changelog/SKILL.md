---
name: thothfy-validador-changelog
description: >
  Valida changelog produzido por thothfy-especialista-changelog contra
  release, brief, todos os contextos, escrita, proibições, precisão técnica
  e contrato do canal antes da entrega.
---

# Thothfy Validador Changelog

Valida a entrada e devolve correções à `thothfy-especialista-changelog`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/produtos.md`,
`context/glossario.md`, `context/marca-voz.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Entrada candidata, release ou brief e evidências técnicas.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md` e os contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Compare mudança, impacto, público, ação necessária, tipo e grafia com as
   evidências técnicas e o contexto.
4. Reprovando, envie o relatório à `thothfy-especialista-changelog` e
   revalide o arquivo inteiro após a correção.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas sem jargão interno, imprecisão factual ou achado aberto.

## Idempotência

Atualize o relatório por rodada; não altere a entrada.
