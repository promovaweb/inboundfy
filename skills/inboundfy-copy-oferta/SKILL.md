---
name: inboundfy-copy-oferta
description: Estrutura, nomeia e melhora ofertas com clareza de resultado, mecanismo, prova, condições, objeções e próximo passo para cada persona.
---

# Oferta

Use para criar ou revisar a oferta de um produto, serviço, material rico,
newsletter, diagnóstico, evento ou campanha.

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
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, `contexto/ofertas.md`
quando existir e os acervos relacionados.

## Entrada esperada

Receba produto ou serviço, persona, problema, resultado, mecanismo, preço,
condições, prova, garantia, prazo, restrições e CTA.

## Fluxo

1. Descreva o resultado sem prometer o que a empresa não controla.
2. Explique o mecanismo de forma simples: o que a pessoa recebe, faz e
   consegue observar.
3. Organize entregáveis, condições, limites, investimento e próximos passos.
4. Liste objeções por persona e responda com informação, prova ou transparência.
5. Escolha a mensagem principal e variações por canal.
6. Valide termos, voz, proibições, fontes e consistência com o catálogo.

## Saída

Entregue ficha de oferta, proposta de valor, página, sequência de mensagens
ou briefing de campanha com vínculos ao projeto.

## Validação

Confirme entendimento rápido, resultado específico, mecanismo compreensível,
condições visíveis, provas reais, CTA coerente e ausência de promessa
absoluta.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Preserve a oferta vigente e registre nova versão quando preço, promessa,
entrega ou público mudar.
