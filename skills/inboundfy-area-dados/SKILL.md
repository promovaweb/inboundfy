---
name: inboundfy-area-dados
description: Recebe pedidos de medição e encaminha para métricas, rastreamento de conversões, atribuição ou experimentação. Use quando o pedido falar em GA4, Tag Manager, pixel, UTM, painel, KPI, qual canal vende, teste A/B ou números que não batem.
---

# Área de dados

Ponto de entrada para pedidos de **dados e mensuração**. Esta skill não
produz o trabalho final: ela entende o pedido, confere o setup, escolhe a skill
da área que resolve a etapa atual e entrega a ela um pacote de entrada completo.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **area**.

## Quando usar e quando não usar

Use para definir métricas, montar painel, configurar GA4, Tag Manager, pixels e UTMs, entender qual canal gera venda, testar hipóteses e ler resultados de experimento.

Não use para criar a campanha ou a página em si (use `inboundfy-area-growth` ou `inboundfy-area-copy`).

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta. Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/integracoes.md` e `.inboundfy/context/aprendizado.md`.

## Entrada esperada

Pedido em linguagem natural, com ou sem arquivos, URLs, números ou IDs do
acervo. Aceite a entrada incompleta: as perguntas de diagnóstico completam o
que falta.

## Perguntas de diagnóstico

Faça só as perguntas cuja resposta ainda não está no pedido ou no contexto:

1. A pergunta é sobre o que medir, como medir ou como ler o que já foi medido?
2. Quais ferramentas já estão instaladas (GA4, Tag Manager, pixels, CRM)?
3. O consentimento de cookies está implementado conforme a LGPD?
4. Qual número o negócio usa para dizer que o marketing funcionou?

## Fluxo

1. Execute `inboundfy doctor --strict`. Se o setup não estiver pronto, acione
   `inboundfy-setup` e pare.
2. Leia o pedido e o contexto. Anote o que já se sabe e o que falta.
3. Faça as perguntas de diagnóstico que faltarem, numa única mensagem.
4. Escolha a rota na tabela abaixo. Quando duas rotas servirem, apresente as
   duas com a recomendada primeiro e espere a escolha.
5. Monte o pacote de entrada com o modelo do [REFERENCIA.md](REFERENCIA.md).
6. Acione a skill escolhida com o pacote. Uma skill por vez.
7. Quando a skill terminar, proponha a próxima etapa da sequência comum, se
   houver, e espere a confirmação.

## Roteamento

| Situação | Skill | Resultado |
| --- | --- | --- |
| Quais números acompanhar e como montar o painel | `inboundfy-metricas` | plano de métricas e painel |
| Eventos, pixels, UTMs, API de conversões | `inboundfy-rastreamento-conversao` | plano de medição e testes de disparo |
| Qual canal gerou a venda | `inboundfy-atribuicao` | modelo de atribuição e leitura |
| Teste A/B, hipótese, amostra | `inboundfy-experimentacao` | desenho e leitura do experimento |

## Sequências comuns

- Medição do zero: `inboundfy-metricas` → `inboundfy-rastreamento-conversao` → `inboundfy-atribuicao`.
- Antes de testar: `inboundfy-rastreamento-conversao` confirma os eventos → `inboundfy-experimentacao`.

## Saída

Diagnóstico de três a cinco linhas, a skill escolhida com o motivo, o pacote de
entrada entregue a ela e a próxima etapa sugerida.

## Validação

O setup está pronto, o objetivo foi identificado, uma única skill recebeu o
pacote e todo dado ausente virou pergunta, não suposição.

## Responsabilidade do grupo

Receba o pedido da área, faça o diagnóstico mínimo e encaminhe para uma única skill da área por vez. Não execute o trabalho da skill encaminhada.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** area
- **entrada:** pedido em linguagem natural ligado à área e estado do projeto;
- **transformação:** ação principal descrita no fluxo;
- **saída:** diagnóstico curto, rota escolhida e pacote de entrada para a skill da área;
- **handoff:** skill da área indicada pela tabela de roteamento.

## Idempotência

Uma nova execução relê o pedido e o estado. Se a skill encaminhada já produziu
um resultado para o mesmo ID, retome dela em vez de abrir um item novo.
