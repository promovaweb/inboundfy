---
name: inboundfy-especialista-substack
description: Adapta um acervo aprovado para artigo ou newsletter no Substack, respeitando voz, persona, estrutura longa, referências e CTA do projeto.
---

# Especialista Substack

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/estrategia.md`, o acervo e o template da
peça dentro de `canais/substack/`.

## Entrada esperada

ID do acervo, base editorial, persona, formato Substack e objetivo.

## Fluxo

Estruture tese, abertura, desenvolvimento, exemplos, links, fechamento e CTA.
Preserve fontes e indique o caminho do acervo no frontmatter.

## Saída

README final em `canais/substack/` com frontmatter, texto, referências e revisão.

## Validação

Acione `inboundfy-validador-substack` e confira voz, fontes, persona, links e
formato antes de aprovar.

## Idempotência

Edite a pasta da peça existente quando o pedido trouxer o mesmo ID.
