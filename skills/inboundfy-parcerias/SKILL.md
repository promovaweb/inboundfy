---
name: inboundfy-parcerias
description: Encontra e estrutura parcerias de conteúdo, distribuição e co-marketing com proposta, audiência, troca e próximos passos claros.
---

# Parcerias de distribuição

Use esta skill como capacidade especializada do Inboundfy. Ela organiza a tarefa e devolve material pronto para a orquestradora, sem substituir o setup, a voz, a persona ou a validação do canal.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte [REFERENCIA.md](REFERENCIA.md), `.inboundfy/inbound.md`, `.inboundfy/estrategia.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`, `.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md`, `.inboundfy/pipeline.md`, o acervo relacionado e `.inboundfy/framework/`.

Leia também `.inboundfy/fontes-projeto.md`, as bases editoriais relacionadas e os documentos públicos citados. Antes de entregar copy, consulte `inboundfy-anti-slop` e `inboundfy-copy-editing`.

## Entrada esperada

Receba um objetivo, um ou mais IDs de acervo, a persona, o canal, a oferta ou o fluxo que precisa ser planejado. Separe fatos confirmados, hipótese de trabalho e pergunta aberta.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme a intenção, o público, o canal e o resultado solicitado.
2. Consulte voz, persona, proibições e dicionário antes de propor mensagem, segmento, preço, promessa ou CTA.
3. Relacione cada afirmação ao acervo, à base editorial, à página canônica ou à pesquisa salva no item.
4. Desenvolva um plano de parceria com encaixe, proposta, contrapartidas e mensagens.
5. Revise o material com `inboundfy-anti-slop`, `inboundfy-copy-editing` e a validação específica do canal quando houver copy pública.
6. Registre caminho, ID, fontes, alcance da regra e pendências; peça confirmação antes de alterar uma configuração global.

## Saída

Um plano de parceria com encaixe, proposta, contrapartidas e mensagens. O material deve manter IDs, links relativos, fontes, persona, canal, estado e próxima ação.

## Validação

- A finalidade e o público estão explícitos.
- Toda afirmação comercial possui fonte local ou marcação de confirmação.
- Voz, persona, proibições e dicionário foram aplicados.
- O formato respeita o canal, o pipeline e o template correspondente.
- Pendências ficaram registradas sem preenchimento inventado.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
