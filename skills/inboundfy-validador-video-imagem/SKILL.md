---
name: inboundfy-validador-video-imagem
description: >
  Valida thumbnail produzida por inboundfy-especialista-video-imagem contra
  roteiro, brief, todos os contextos, promessa, grafia, foco, contraste,
  legibilidade e dimensões antes da entrega.
---

# Inboundfy Validador Vídeo Imagem

Valida a thumbnail e devolve correções à
`inboundfy-especialista-video-imagem`.

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

Thumbnail, roteiro, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente promessa, foco, contraste, texto, miniatura,
   grafia, identidade e dimensões.
4. Reprovando, envie o relatório à `inboundfy-especialista-video-imagem` e
   revalide a thumbnail.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas quando a thumbnail promete o que o roteiro entrega.

## Idempotência

Atualize o relatório por rodada; não regenere a thumbnail.
