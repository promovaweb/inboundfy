---
name: inboundfy-validador-ebook-imagem
description: >
  Valida capa e OpenGraph produzidos por inboundfy-especialista-ebook-imagem
  contra ebook, brief, todos os contextos, identidade, grafia, legibilidade,
  consistência e dimensões antes da entrega.
---

# Inboundfy Validador Ebook Imagem

Valida os visuais e devolve correções à
`inboundfy-especialista-ebook-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/glossario.md`, `context/marca-voz.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

## Entrada esperada

Capa, OpenGraph, ebook, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente título, hierarquia, miniatura, identidade,
   consistência entre formatos e dimensões.
4. Reprovando, envie o relatório à `inboundfy-especialista-ebook-imagem` e
   revalide o conjunto.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com capa e OpenGraph coerentes e sem achado.

## Idempotência

Atualize o relatório por rodada; não regenere os visuais.
