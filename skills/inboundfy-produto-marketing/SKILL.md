---
name: inboundfy-produto-marketing
description: Mantém o contexto de produto, mercado, posicionamento, público, diferenciação, provas e mensagens que orientam todo o Inboundfy.
---

# Contexto de produto e mercado

Use para construir ou atualizar a base que todas as skills de marketing devem
consultar antes de produzir uma peça.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/inbound.md`,
`.inboundfy/estrategia.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md` e os arquivos de
`.inboundfy/context/`. Consulte `.inboundfy/framework/` para o contrato.

## Entrada esperada

Receba descrição da empresa, produtos, serviços, público, mercado, alternativas,
posicionamento, prova, preço, restrições, pessoas e URLs oficiais.

## Fluxo

1. Separe fato confirmado, opinião da equipe, hipótese e fonte externa.
2. Descreva para quem o produto serve, qual trabalho ajuda a realizar e qual
   resultado observável oferece.
3. Registre mecanismo, diferenciais, limites, alternativas e provas.
4. Relacione cada mensagem à persona, ao estágio da jornada e à oferta.
5. Atualize o contexto somente com alcance confirmado pelo usuário.
6. Passe nomes, termos, promessas e exemplos pelo dicionário, pelas proibições
   e pela voz.

## Saída

Entregue contexto de produto, posicionamento, mapa de mensagens ou atualização
dos arquivos canônicos do projeto.

## Validação

Confirme nomes oficiais, fontes, distinção entre fato e hipótese, diferenciação
comprovável, limites da oferta e coerência com personas e voz.

## Idempotência

Preserve versões anteriores e o histórico de alterações. Não substitua um
campo preenchido por placeholder ou inferência sem confirmação.
