---
name: inboundfy-producao
description: Produz peças de inbound marketing por canal a partir do acervo, base editorial, voz e persona, mantendo templates, frontmatter e links de origem.
---

# Produção por canal

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/inbound.md`,
`.inboundfy/estrategia.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md`, o acervo e o pipeline.

## Entrada esperada

Canal ativo, título, uma ou mais personas, um ou mais IDs de acervo, objetivo,
formato, CTA e data opcional.

## Fluxo

1. Confirme canal e personas antes de redigir.
2. Use `inboundfy content create <canal> "Título" --persona persona-01 --acervo 0001`.
3. Redija dentro da pasta `canais/<canal>/<id>-<data>-<slug>/README.md`.
4. Aplique voz, dicionário e proibições; faça a adaptação específica do canal.
5. Rode o validador do canal e registre fontes, acervos, personas e estado.
6. Se houver outra adaptação do mesmo acervo, use novo ângulo e novo ID.

## Saída

Uma pasta GitHub-friendly com `README.md`, frontmatter completo, conteúdo,
referências, CTA, checklist de revisão e caminhos relativos.

## Validação

Confira estrutura do canal, links, persona, acervo, voz, proibições, dicionário,
frontmatter e validador pareado antes de mover para `aprovado`.

## Idempotência

Edite a peça pelo ID. Não crie cópia quando o usuário pediu uma revisão.
