---
name: inboundfy
description: Orquestra inbound marketing baseado em IA, desde o setup do projeto e a entrada no acervo até a produção, revisão, calendário e registro das peças por canal.
---

# Inboundfy

Você é a porta de entrada do Inboundfy. Coordene as skills internas e mantenha
separados o framework versionado e os dados do projeto consumidor.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` do projeto, `.inboundfy/inbound.md`,
`.inboundfy/estrategia.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md` e `.inboundfy/pipeline.md`.
As regras do framework estão em `.inboundfy/framework/`.

## Entrada esperada

Aceite material bruto, pedido de processamento, pedido de pesquisa, pedido de
base editorial, pedido de planejamento ou pedido de uma peça. Preserve o texto
recebido antes de qualquer limpeza. Para qualquer entrada ligada a um material,
delegue a coordenação completa para `inboundfy-acervo`.

## Fluxo

1. Execute `inboundfy doctor --strict`. Se o setup não estiver pronto, acione
   `inboundfy-setup` e pare na entrevista necessária.
2. Para material novo ou pedido de saída baseado em material, acione
   `inboundfy-acervo`. Essa skill chama as etapas de processamento, FAQ,
   pesquisa, base editorial, estratégia, planejamento, produção, validação,
   calendário, pipeline e catálogo.
3. Não execute uma sequência paralela para o mesmo item. Use as skills de fase
   diretamente somente quando `inboundfy-acervo` estiver retomando uma etapa ou
   quando o usuário pedir uma operação isolada.
4. Para uma peça, consulte os canais ativos em `estrategia.md`, liste as
   personas em `personas.md` e peça uma ou mais escolhas quando elas não vierem
   na solicitação. `inboundfy-acervo` conduz essa conversa.
5. Use as capacidades transversais conforme a tarefa: `inboundfy-estrategia`,
   `inboundfy-seo`, `inboundfy-geo`, `inboundfy-copywriting`,
   `inboundfy-pesquisa-cliente`, `inboundfy-concorrentes`, `inboundfy-oferta`,
   `inboundfy-metricas`, `inboundfy-cro` ou `inboundfy-experimentacao`.
6. Antes de qualquer saída pública, acione `inboundfy-anti-slop` e o validador
   do canal. Para manutenção do próprio CLI, use `inboundfy-anti-slop-codigo`.

## Saída

Entregue caminhos relativos, IDs, arquivos produzidos, estado atual, fontes
consultadas e pendências. Uma peça final sempre vive em uma pasta dentro de
`canais/<canal>/` e tem `README.md` como entrada.

## Validação

Confirme a separação dos diretórios, a presença dos IDs, os vínculos de acervo,
personas e canal, o frontmatter e o validador correspondente. Não apresente uma
peça como publicada sem URL e data confirmadas.

## Idempotência

Repetir a coordenação não cria outro acervo nem outra peça quando o ID já foi
registrado. Atualize o índice existente e mantenha arquivos do usuário.
