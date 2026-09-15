---
name: inboundfy-growth-cro
description: Audita páginas, formulários e CTAs para melhorar conversão com clareza de proposta, hierarquia, prova, objeções e menor esforço de entendimento.
---

# CRO de conteúdo

Use para páginas de site, landing pages, páginas de preço, formulários,
capturas de lead e CTAs. CRO melhora a passagem para uma ação sem sacrificar
clareza, confiança ou adequação à persona.

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

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, a oferta, fontes e
dados de desempenho disponíveis.

## Entrada esperada

Receba URL ou arquivo, objetivo de conversão, origem do tráfego, persona,
oferta, taxa atual quando disponível e etapa posterior ao clique.

## Fluxo

1. Identifique tipo de página, ação principal e origem da visita.
2. Audite proposta de valor, título, mensagem de origem, CTA, hierarquia,
   prova, objeções, formulário, mobile e próximo passo.
3. Separe correções claras de hipóteses que precisam de experimento.
4. Sugira alternativas com razão, impacto esperado e fonte do diagnóstico.
5. Passe toda nova copy por voz, persona, dicionário, proibições e anti-slop.

## Saída

Entregue relatório com ajustes imediatos, mudanças estruturais, hipóteses de
teste e alternativas de copy.

## Validação

Confirme que a recomendação responde ao objetivo, mantém coerência com a
origem do tráfego e não usa prova, urgência ou promessa fabricada.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** growth
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o relatório com novos dados sem apagar hipóteses anteriores ou
atribuir melhora a uma mudança sem medição.
