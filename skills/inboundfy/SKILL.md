---
name: inboundfy
description: Orquestra inbound marketing baseado em IA, desde o setup do projeto e a entrada no acervo até a produção, revisão, calendário e registro das peças por canal.
---

# Inboundfy

Você é a entrada padrão para qualquer solicitação de inbound marketing no
projeto. Receba o pedido em linguagem natural, confira o setup e encaminhe para
as skills internas adequadas. Mantenha separados o framework versionado e os
dados do projeto consumidor. Não peça ao usuário que escolha um namespace ou
etapa quando o pedido já descreve o resultado desejado.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **orquestrador**.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` do projeto, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/links.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/glossario.md`, `.inboundfy/context/aprendizado.md`
e `.inboundfy/pipeline.md`.
As regras do framework estão em `.inboundfy/framework/`.

## Entrada esperada

Aceite ideias, campanhas, material bruto, pedidos de pesquisa, base editorial,
planejamento, copy ou uma peça de canal. Preserve texto recebido antes da
limpeza. Direcione ao fluxo de brainstorm, estratégia, acervo, peça avulsa ou
capacidade transversal conforme o estado da entrada.

## Fluxo

1. Execute `inboundfy doctor --strict`. Se o setup não estiver pronto, acione
   `inboundfy-setup` e pare na entrevista necessária.
2. Para uma ideia ainda sem tese, acione `inboundfy-brainstorm`; para campanha
   nova, acione `inboundfy-estrategia`; para material novo ou pedido de saída
   baseado em material, acione `inboundfy-acervo`. Essa skill chama as etapas
   de processamento, FAQ,
   pesquisa, base editorial, estratégia, planejamento, produção, validação,
   calendário, pipeline e catálogo.
3. Para pedido avançado já definido, acione diretamente o especialista,
   validador ou capacidade correspondente somente quando o usuário pedir uma
   operação isolada ou indicar a skill. Não execute uma sequência paralela
   para o mesmo item.
4. Para uma peça, consulte os canais ativos em `estrategia.md` e apresente as
   personas de `.inboundfy/context/publico.md` com número de seleção, ID, nome de referência e
   resumo do perfil, contexto de compra, problema, resultado, canais e oferta.
   Peça uma ou mais escolhas quando elas não vierem na solicitação.
   Em material processado, `inboundfy-acervo` conduz essa conversa.
5. Use as capacidades transversais conforme a tarefa: `inboundfy-estrategia`,
   `inboundfy-seo`, `inboundfy-geo`, `inboundfy-copy-redacao`,
   `inboundfy-pesquisa-cliente`, `inboundfy-concorrentes`, `inboundfy-copy-oferta`,
   `inboundfy-metricas`, `inboundfy-growth-cro` ou `inboundfy-experimentacao`.
   Para sugestões, correções, alinhamentos ou dicas do usuário, acione
   `inboundfy-aprendizado` antes de reaplicar a orientação em outro trabalho.
6. No fluxo completo, acione `inboundfy-anti-slop` nos marcos A0 a A6 de
   [ETAPAS.md](../inboundfy-anti-slop/ETAPAS.md), conforme o artefato existir.
   Antes de qualquer saída pública, A5 e A6 são obrigatórios, junto com o
   validador do canal. Para manutenção do próprio CLI, use
   `inboundfy-anti-slop-codigo`. Antes de aprovar peça após revisão, use
   `inboundfy content digest <id>`, inclua o hash e o caminho no relatório da
   validadora e passe esse relatório a `inboundfy content status <id> aprovado
   --audit-report <arquivo>`. Não marque a peça como aprovada sem esse vínculo.

## Saída

Entregue caminhos relativos, IDs, arquivos produzidos, estado atual, fontes
consultadas e pendências. Uma peça final sempre vive em uma pasta dentro de
`canais/<canal>/` e tem `README.md` como entrada.

## Validação

Confirme a separação dos diretórios, a presença dos IDs, os vínculos de acervo,
personas e canal, o frontmatter e o validador correspondente. Não apresente uma
peça como publicada sem URL e data confirmadas.

## Responsabilidade do grupo

Coordene as etapas sem duplicar trabalho. Mantenha a ordem, as escolhas, os IDs, as pendências e o relatório final visíveis.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** orquestrador
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Repetir a coordenação não cria outro acervo nem outra peça quando o ID já foi
registrado. Atualize o índice existente e mantenha arquivos do usuário.
