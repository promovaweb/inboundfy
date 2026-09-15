---
name: inboundfy-copy-posicionamento
description: Mantém o contexto de produto, mercado, posicionamento, público, diferenciação, provas e mensagens que orientam todo o Inboundfy.
---

# Contexto de produto e mercado

Use para construir ou atualizar a base que todas as skills de marketing devem
consultar antes de produzir uma peça.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **copy**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e os arquivos de
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

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Preserve versões anteriores e o histórico de alterações. Não substitua um
campo preenchido por placeholder ou inferência sem confirmação.
