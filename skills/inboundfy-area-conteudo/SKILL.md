---
name: inboundfy-area-conteudo
description: Recebe pedidos de conteúdo, identifica se a entrada é ideia, campanha, material bruto, brief ou peça pronta e encaminha para a skill certa do fluxo editorial. Use quando o pedido falar em pauta, post, artigo, newsletter, vídeo, podcast, ebook, calendário ou reaproveitar material sem dizer a etapa.
---

# Área de conteúdo

Ponto de entrada para pedidos de **conteúdo e canais**. Esta skill não
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

Use para ideias de pauta, campanhas editoriais, material bruto para virar conteúdo, peças de blog, email, LinkedIn, Instagram, Substack, YouTube, podcast, ebook, webinar e revisão de peças prontas.

Não use para texto isolado de página de venda (use `inboundfy-area-copy`), tráfego pago (use `inboundfy-area-growth`) ou diagnóstico de busca (use `inboundfy-area-seo`).

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

1. O que você tem em mãos agora: uma ideia, um material, um brief aprovado ou uma peça pronta?
2. Para qual canal e para qual persona de `.inboundfy/context/publico.md` é o resultado?
3. Existe campanha ou prazo ligado a esse pedido?
4. O material tem ID no acervo ou ainda precisa ser registrado?

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
| Ideia solta, sem tese nem recorte | `inboundfy-brainstorm` | pacote de ideia com tese, recorte e perguntas |
| Campanha nova com objetivo, público e período | `inboundfy-estrategia` | plano de campanha e calendário |
| Material bruto: transcrição, notícia, artigo, anotação | `inboundfy-acervo` | bruto preservado, processado, FAQ, pesquisa e base editorial |
| Base editorial aprovada que precisa virar peças | `inboundfy-planejamento` | oportunidades e briefs por canal |
| Brief aprovado de um canal | `inboundfy-producao` | peça do canal pela especialista pareada |
| Peça pronta para revisar | `inboundfy-validador-<canal>` | relatório aprovado ou de correção |
| Situação das peças, estados e calendário | `inboundfy-pipeline` | estado atualizado e próximas ações |
| Relações entre itens, busca no catálogo | `inboundfy-catalogo` | registro de relações e índice |

## Sequências comuns

- Material novo até peça publicada: `inboundfy-acervo` → `inboundfy-planejamento` → `inboundfy-producao` → `inboundfy-validador-<canal>` → `inboundfy-pipeline`.
- Campanha com várias peças: `inboundfy-estrategia` → `inboundfy-planejamento` → uma rodada de produção e validação por peça.
- Ideia até pauta: `inboundfy-brainstorm` → `inboundfy-estrategia` ou `inboundfy-planejamento`, conforme o tamanho.

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
