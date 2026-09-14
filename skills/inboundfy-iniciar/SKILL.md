---
name: inboundfy-iniciar
description: Atalho operacional do Inboundfy que recebe material ou pedido de peça e encaminha setup, acervo, pesquisa, estratégia, produção e calendário.
---

# Iniciar o Inboundfy

Use quando a pessoa quiser operar o framework sem escolher cada skill. Esta
skill encaminha para `inboundfy`, que é a orquestradora principal.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os arquivos canônicos de
`.inboundfy/`, o acervo relacionado, a estratégia, as personas, a voz, as
proibições, o dicionário e o pipeline. Consulte `.inboundfy/framework/`.

## Entrada esperada

Receba ideia, texto bruto, URL, peça-base, pedido de pesquisa, pedido de
planejamento ou solicitação de peça por canal.

## Fluxo

1. Confirme a instalação com `inboundfy doctor --strict`.
2. Se a configuração estiver incompleta, encaminhe para `inboundfy-setup`.
3. Para material novo, use `inboundfy-acervo`, que conduz o processamento
   completo até a saída ou até uma pausa necessária para confirmação.
4. Para uma ideia, use o brainstorm antes de criar conteúdo.
5. Para uma peça, liste canais ativos e personas disponíveis e peça as escolhas
   quando a solicitação não trouxer esses dados.
6. Use estratégia, SEO, GEO, copy, anti-slop e o especialista do canal por
   meio de `inboundfy-acervo`, sem duplicar fases do mesmo item.
7. Registre a pasta final, os IDs, o estado e o calendário.

## Saída

Entregue caminhos relativos, arquivos, IDs, estado, personas, acervos,
pesquisa, pendências e próximos passos.

## Validação

Confirme que a peça está em `canais/<canal>/`, tem `README.md`, frontmatter,
vínculos, validador de canal, anti-slop e estado coerente no índice.

## Idempotência

Uma revisão mantém o ID. Uma nova peça ou novo ângulo recebe novo ID e não
substitui material, peça ou data já existentes.
