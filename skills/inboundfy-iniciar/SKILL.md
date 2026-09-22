---
name: inboundfy-iniciar
description: Alias compatível que encaminha a solicitação recebida para $inboundfy, sem repetir a entrevista, criar artefatos ou iniciar outro fluxo.
---

# Iniciar o Inboundfy

Esta skill existe por compatibilidade com instruções e atalhos anteriores.
Encaminhe imediatamente o pedido original para `$inboundfy`, sem repetir
entrevista, criar artefatos ou iniciar um fluxo paralelo. Para novos pedidos,
`$inboundfy` é a única entrada recomendada.

## Arquitetura de execução

Esta skill só encaminha o pedido original. A orquestradora principal confere
as sentinelas e usa o contrato compartilhado.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **entrada**.

## Contexto exigido

Leia apenas [REFERENCIA.md](REFERENCIA.md) para encaminhar a solicitação. A
skill `$inboundfy` carrega o contexto e as fontes do projeto.

## Encaminhamento

Passe a solicitação recebida, sem reformular nem retirar contexto, para
`$inboundfy`. A skill principal confere o projeto e escolhe o fluxo. Não grave
arquivos nem atualize estados por meio deste alias.

## Entrada esperada

Pedido original recebido por um atalho ou uma instrução anterior.

## Fluxo

1. Passe o pedido sem alterações para `$inboundfy`.
2. Encerre esta execução sem iniciar outra skill além da orquestradora.

## Saída

Encaminhamento do pedido original para `$inboundfy`; nenhuma gravação local.

## Validação

- O pedido original foi preservado.
- Este alias não criou arquivos nem alterou estados.
- A próxima skill é `$inboundfy`.

## Responsabilidade do grupo

Mantenha o pedido original e evite uma segunda execução. Este alias não produz
conteúdo nem altera arquivos.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** entrada
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova chamada encaminha o mesmo pedido para `$inboundfy`; preserve o ID e o
estado já registrados.
