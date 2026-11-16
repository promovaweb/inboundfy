---
name: inboundfy-area-copy
description: Recebe pedidos de texto e mensagem, identifica se o trabalho é escrever, editar, posicionar, ofertar ou persuadir e encaminha para a skill de copy certa. Use quando o pedido falar em copy, texto de página, headline, oferta, posicionamento, revisar texto ou ajustar a voz.
---

# Área de copy

Ponto de entrada para pedidos de **copy e mensagem**. Esta skill não
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

Use para textos de página, landing page, anúncio, email de venda, oferta, posicionamento, revisão de texto, gramática, simplificação, ajuste de voz e limpeza de texto com cara de IA.

Não use para peça completa de canal editorial com brief aprovado (use `inboundfy-area-conteudo`) ou estrutura e conversão da página (use `inboundfy-growth-cro`).

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

1. O texto já existe ou precisa ser escrito do zero?
2. Qual ação o leitor deve tomar depois de ler?
3. Para qual persona e em qual canal o texto vai aparecer?
4. A oferta e o posicionamento já estão definidos no contexto do projeto?

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
| Texto novo de página, anúncio ou email | `inboundfy-copy-redacao` | copy completa pronta para revisão |
| Texto existente que precisa melhorar | `inboundfy-copy-edicao` | versão editada com registro das mudanças |
| Revisão final antes de publicar | `inboundfy-copy-editor` | parecer de editor e versão final |
| Erros de português, concordância, regência | `inboundfy-copy-gramatica` | texto corrigido com lista de correções |
| Texto difícil, longo ou técnico demais | `inboundfy-copy-simplificar` | versão mais clara com o mesmo conteúdo |
| Oferta, bônus, garantia, preço apresentado | `inboundfy-copy-oferta` | oferta estruturada |
| Mensagem central, diferencial, categoria | `inboundfy-copy-posicionamento` | declaração de posicionamento e mensagens |
| Estrutura persuasiva, objeções, prova | `inboundfy-copy-persuasao` | estrutura e argumentos por etapa |
| Tom e voz da marca | `inboundfy-voz` | guia de voz aplicado ao texto |
| Texto com cara de IA | `inboundfy-anti-slop` | relatório e versão revisada |

## Sequências comuns

- Página de venda nova: `inboundfy-copy-posicionamento` → `inboundfy-copy-oferta` → `inboundfy-copy-redacao` → `inboundfy-copy-editor`.
- Texto pronto com problemas: `inboundfy-copy-edicao` → `inboundfy-anti-slop` → `inboundfy-copy-gramatica`.

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
