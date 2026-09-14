---
name: inboundfy-validador-youtube
description: Revisa uma peça YouTube contra o acervo, base editorial, voz, persona, proibições, fontes, metadados e contrato do canal.
---

# Validador YouTube

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), o README da peça, `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md`
e os arquivos vinculados.

## Entrada esperada

Uma pasta de peça YouTube com frontmatter e roteiro.

## Fluxo

Confira título, abertura, roteiro, descrição, CTA, fontes, voz, persona, links e
estado. Registre ajustes e devolva à produtora quando houver falha.

## Saída

Relatório com estado `aprovado` ou `revisao` e ações para a próxima rodada.

## Validação

Reprove fonte ausente, persona ausente, termo vetado, promessa sem suporte ou
frontmatter incompleto.

## Idempotência

Atualize o relatório existente sem duplicar apontamentos.
