---
name: inboundfy-area-pesquisa
description: Recebe pedidos de pesquisa de cliente, personas, concorrentes e referências de mercado e encaminha para a skill que coleta e organiza a pesquisa. Use quando o pedido falar em entrevistas, personas, concorrência, estudar um concorrente ou debater uma estratégia.
---

# Área de pesquisa

Ponto de entrada para pedidos de **pesquisa e concorrência**. Esta skill não
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

Use para entrevistas com clientes, pesquisa de satisfação, criação ou revisão de personas, análise de concorrentes, estudo do marketing de uma referência, perfil de concorrente e debate de estratégia com vários pontos de vista.

Não use para pesquisa de apoio a uma peça específica do acervo (use `inboundfy-pesquisa-acervo` pelo fluxo de conteúdo).

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

1. A pesquisa é sobre quem compra, sobre quem concorre ou sobre uma estratégia a escolher?
2. Há entrevistas, avaliações, tickets ou respostas de formulário para analisar?
3. Quais concorrentes ou referências você já conhece?
4. Para que a pesquisa vai servir: posicionamento, oferta, conteúdo ou produto?

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
| Entrevistas, avaliações, voz do cliente | `inboundfy-pesquisa-cliente` | síntese com dores, desejos e termos do cliente |
| Criar ou revisar personas | `inboundfy-personas` | personas registradas em publico.md |
| Comparar concorrentes e páginas de comparação | `inboundfy-concorrentes` | análise comparativa e páginas alternativas |
| Perfil detalhado de um concorrente | `inboundfy-contexto-concorrentes` | ficha registrada em concorrentes.md |
| Estudar o marketing de uma referência | `inboundfy-engenharia-reversa` | mapa de canais, funil e hipóteses aplicáveis |
| Debater uma estratégia com vários olhares | `inboundfy-conselho-marketing` | parecer do conselho com recomendação |

## Sequências comuns

- Posicionamento novo: `inboundfy-pesquisa-cliente` → `inboundfy-personas` → `inboundfy-concorrentes` → `inboundfy-copy-posicionamento`.
- Entrar num mercado: `inboundfy-contexto-concorrentes` → `inboundfy-engenharia-reversa` → `inboundfy-conselho-marketing`.

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
