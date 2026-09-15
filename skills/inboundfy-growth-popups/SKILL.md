---
name: inboundfy-growth-popups
description: Planeja pop-ups e formulários contextuais com motivo da exibição, oferta, frequência, saída e destino dos dados.
---

# Pop-ups e captura

Use esta skill como capacidade especializada do Inboundfy. Ela organiza a tarefa e devolve material pronto para a orquestradora, sem substituir o setup, a voz, a persona ou a validação do canal.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **growth**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, `.inboundfy/pipeline.md`, o acervo relacionado e `.inboundfy/framework/`.

Leia também `.inboundfy/fontes-projeto.md`, as bases editoriais relacionadas e os documentos públicos citados. Antes de entregar copy, consulte `inboundfy-anti-slop` e `inboundfy-copy-edicao`.

## Entrada esperada

Receba um objetivo, um ou mais IDs de acervo, a persona, o canal, a oferta ou o fluxo que precisa ser planejado. Separe fatos confirmados, hipótese de trabalho e pergunta aberta.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme a intenção, o público, o canal e o resultado solicitado.
2. Consulte voz, persona, proibições e dicionário antes de propor mensagem, segmento, preço, promessa ou CTA.
3. Relacione cada afirmação ao acervo, à base editorial, à página canônica ou à pesquisa salva no item.
4. Desenvolva um brief de captura com regra de exibição, texto, campos e acompanhamento.
5. Revise o material com `inboundfy-anti-slop`, `inboundfy-copy-edicao` e a validação específica do canal quando houver copy pública.
6. Registre caminho, ID, fontes, alcance da regra e pendências; peça confirmação antes de alterar uma configuração global.

## Saída

Um brief de captura com regra de exibição, texto, campos e acompanhamento. O material deve manter IDs, links relativos, fontes, persona, canal, estado e próxima ação.

## Validação

- A finalidade e o público estão explícitos.
- Toda afirmação comercial possui fonte local ou marcação de confirmação.
- Voz, persona, proibições e dicionário foram aplicados.
- O formato respeita o canal, o pipeline e o template correspondente.
- Pendências ficaram registradas sem preenchimento inventado.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** growth
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
