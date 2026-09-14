---
name: inboundfy-validador-changelog
description: >
  Valida changelog produzido por inboundfy-especialista-changelog contra
  release, brief, todos os contextos, escrita, proibições, precisão técnica
  e contrato do canal antes da entrega.
---

# Inboundfy Validador Changelog

Valida a entrada e devolve correções à `inboundfy-especialista-changelog`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/produtos.md`,
`context/glossario.md`, `context/marca-voz.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Entrada candidata, release ou brief e provas técnicas.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Compare mudança, impacto, público, ação necessária, tipo e grafia com as
   provas técnicas e o contexto.
4. Reprovando, envie o relatório à `inboundfy-especialista-changelog` e
   revalide o arquivo inteiro após a correção.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas sem jargão interno, imprecisão factual ou achado aberto.

## Idempotência

Atualize o relatório por rodada; não altere a entrada.
