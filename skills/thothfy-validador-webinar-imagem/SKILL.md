---
name: thothfy-validador-webinar-imagem
description: >
  Valida thumbnail produzida por thothfy-especialista-webinar-imagem contra
  copy, brief, todos os contextos, título, data, apresentador, identidade,
  legibilidade e dimensões antes da entrega.
---

# Thothfy Validador Webinar Imagem

Valida a thumbnail e devolve correções à
`thothfy-especialista-webinar-imagem`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/pessoas.md`, `context/glossario.md`, `context/marca-voz.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

## Entrada esperada

Thumbnail, copy aprovada, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Inspecione visualmente título, data, apresentador, hierarquia, miniatura,
   grafia, identidade e dimensões.
4. Reprovando, envie o relatório à
   `thothfy-especialista-webinar-imagem` e revalide a thumbnail.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas com todas as informações confirmadas e legíveis.

## Idempotência

Atualize o relatório por rodada; não regenere a thumbnail.
