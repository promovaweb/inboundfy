---
name: inboundfy-growth-lancamento
description: Planeja comunicação de lançamento de produto, serviço, recurso, campanha ou evento com narrativa, canais, calendário, oferta e acompanhamento.
---

# Lançamento

Use para organizar uma novidade desde a preparação até a comunicação após o
lançamento, mantendo cada peça ligada à oferta e à persona.

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

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, todos os arquivos de
`.inboundfy/`, a oferta, o acervo, o catálogo, os canais ativos e o calendário.
Consulte `.inboundfy/framework/` para os modelos de canal e pipeline.

## Entrada esperada

Receba novidade, data, público, oferta, mensagem, prova, porta-voz, canais,
dependências, embargo e métrica.

## Fluxo

1. Defina mudança, para quem ela importa, por que agora e qual ação segue.
2. Organize preparação, anúncio, demonstração, prova, resposta a dúvidas e
   acompanhamento.
3. Selecione acervos e crie mapa de peças por canal e persona.
4. Registre datas, responsáveis, estados e caminhos no calendário.
5. Produza cada peça com `inboundfy-copy-redacao`, especialista do canal e
   `inboundfy-anti-slop`.
6. Acompanhe perguntas, sinais de entendimento, conversões e mensagens que
   precisam de atualização.

## Saída

Entregue plano de lançamento, mapa de mensagens, calendário, briefs, peças e
relatório pós-lançamento.

## Validação

Confirme coerência da promessa, data, oferta, disponibilidade, CTA, fontes,
porta-voz, canais, personas e sequência.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** growth
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o lançamento pelo ID. Não replique peças publicadas ao sincronizar
datas ou adicionar um canal.
