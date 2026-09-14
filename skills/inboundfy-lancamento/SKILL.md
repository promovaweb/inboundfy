---
name: inboundfy-lancamento
description: Planeja comunicação de lançamento de produto, serviço, recurso, campanha ou evento com narrativa, canais, calendário, oferta e acompanhamento.
---

# Lançamento

Use para organizar uma novidade desde a preparação até a comunicação após o
lançamento, mantendo cada peça ligada à oferta e à persona.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
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
5. Produza cada peça com `inboundfy-copywriting`, especialista do canal e
   `inboundfy-anti-slop`.
6. Acompanhe perguntas, sinais de entendimento, conversões e mensagens que
   precisam de atualização.

## Saída

Entregue plano de lançamento, mapa de mensagens, calendário, briefs, peças e
relatório pós-lançamento.

## Validação

Confirme coerência da promessa, data, oferta, disponibilidade, CTA, fontes,
porta-voz, canais, personas e sequência.

## Idempotência

Atualize o lançamento pelo ID. Não replique peças publicadas ao sincronizar
datas ou adicionar um canal.
