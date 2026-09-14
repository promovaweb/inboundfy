---
name: inboundfy-validador-blog-imagem
description: >
  Valida capa e thumbnail produzidas por inboundfy-especialista-blog-imagem
  contra artigo, brief, todos os contextos, origem fotográfica, licença,
  crédito, dimensões e contrato visual antes da entrega.
---

# Inboundfy Validador Blog Imagem

Valida a imagem e devolve correções à `inboundfy-especialista-blog-imagem`.

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

Capa, thumbnail, artigo, brief e registro de licença.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente relação com o artigo, fonte real, cortes,
   dimensões, licença e crédito.
4. Reprovando, envie o relatório à `inboundfy-especialista-blog-imagem` e
   revalide todos os arquivos após a correção.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas fotografia real licenciada, coerente e sem achado aberto.

## Idempotência

Atualize o relatório por rodada; não substitua a imagem.
