---
name: inboundfy-validador-linkedin-imagem
description: >
  Valida imagem de post ou capa produzida por
  inboundfy-especialista-linkedin-imagem contra texto, brief, todos os
  contextos, identidade, grafia, legibilidade e proporção antes da entrega.
---

# Inboundfy Validador LinkedIn Imagem

Valida o visual e devolve correções à
`inboundfy-especialista-linkedin-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/marca-voz.md`, `context/glossario.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

## Entrada esperada

Imagem, texto aprovado, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente coerência com o texto, legibilidade em feed,
   quantidade de texto, grafia, identidade e proporção.
4. Reprovando, envie o relatório à
   `inboundfy-especialista-linkedin-imagem` e revalide a peça.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com formato correto e nenhum achado visual ou factual.

## Idempotência

Atualize o relatório por rodada; não regenere a imagem.
