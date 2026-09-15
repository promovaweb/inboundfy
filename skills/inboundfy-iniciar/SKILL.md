---
name: inboundfy-iniciar
description: Atalho operacional do Inboundfy que recebe material ou pedido de peça e encaminha setup, acervo, pesquisa, estratégia, produção e calendário.
---

# Iniciar o Inboundfy

Use quando a pessoa quiser operar o framework sem escolher cada skill. Esta
skill encaminha para `inboundfy`, que é a orquestradora principal.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **entrada**.

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
5. Para uma peça, liste os canais ativos e apresente cada persona com número de
seleção, ID, nome de referência e resumo do perfil, contexto de compra,
   problema, resultado, canais e oferta. Peça as escolhas quando a solicitação
   não trouxer esses dados.
6. Use estratégia, SEO, GEO, copy, anti-slop e o especialista do canal por
   meio de `inboundfy-acervo`, sem duplicar fases do mesmo item.
7. Registre a pasta final, os IDs, o estado e o calendário.

## Saída

Entregue caminhos relativos, arquivos, IDs, estado, personas, acervos,
pesquisa, pendências e próximos passos.

## Validação

Confirme que a peça está em `canais/<canal>/`, tem `README.md`, frontmatter,
vínculos, validador de canal, anti-slop e estado coerente no índice.

## Responsabilidade do grupo

Prepare ou encaminhe a execução. Preserve respostas existentes e não crie conteúdo antes de o contexto mínimo estar pronto.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** entrada
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma revisão mantém o ID. Uma nova peça ou novo ângulo recebe novo ID e não
substitui material, peça ou data já existentes.
