---
name: inboundfy-area-vendas
description: Recebe pedidos comerciais e encaminha para prospecção, email frio, kit de vendas, processo de receita, preço ou oferta. Use quando o pedido falar em vender para empresas, lista de prospects, cadência, reunião, objeções, CRM, funil comercial ou preço.
---

# Área de vendas

Ponto de entrada para pedidos de **vendas e receita**. Esta skill não
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

Use para lista de prospecção, cadência de abordagem, email frio, roteiro de ligação, apresentação comercial, casos de cliente, objeções, passagem entre marketing e vendas, CRM e definição de preço.

Não use para conteúdo de atração (use `inboundfy-area-conteudo`) ou anúncios (use `inboundfy-area-growth`).

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

1. A venda é feita por um time comercial, pelo fundador ou é autoatendimento?
2. Quem é o cliente ideal e qual o ticket médio?
3. Onde o processo trava hoje: gerar contatos, conseguir reunião, fechar ou renovar?
4. Qual CRM ou planilha registra os negócios?

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
| Encontrar e qualificar contas e contatos | `inboundfy-growth-prospeccao` | lista e regras de qualificação |
| Email frio e cadência de abordagem | `inboundfy-growth-email-frio` | sequência de mensagens |
| Apresentação, roteiro, objeções, casos | `inboundfy-enablement-vendas` | kit de apoio a vendas |
| Passagem de lead, CRM, etapas do funil | `inboundfy-growth-revops` | processo de receita documentado |
| Preço, planos e descontos | `inboundfy-growth-pricing` | estrutura de preços |
| Oferta comercial | `inboundfy-copy-oferta` | oferta estruturada |
| Depoimentos e provas | `inboundfy-contexto-depoimentos` | provas registradas e autorizadas |

## Sequências comuns

- Venda B2B do zero: `inboundfy-growth-prospeccao` → `inboundfy-growth-email-frio` → `inboundfy-enablement-vendas` → `inboundfy-growth-revops`.
- Fechamento baixo: `inboundfy-enablement-vendas` → `inboundfy-contexto-depoimentos` → `inboundfy-copy-oferta`.

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
