---
name: inboundfy-validador-substack
description: Revisa uma peça Substack contra o acervo, base editorial, voz, persona, proibições, fontes, links e o contrato do canal.
---

# Validador Substack

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), o README da peça, `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md`
e os arquivos vinculados.

## Entrada esperada

Uma pasta de peça Substack com frontmatter e conteúdo.

## Fluxo

Confirme fontes, voz, persona, links, estrutura longa, CTA e estado. Registre
cada ajuste necessário no relatório da peça e devolva à produtora.

## Saída

Relatório de revisão com estado `aprovado` ou `revisao` e ações claras.

## Validação

Reprove referência ausente, persona ausente, link quebrado, termo vetado ou
frontmatter incompleto.

## Idempotência

Atualize o relatório existente sem duplicar apontamentos.
