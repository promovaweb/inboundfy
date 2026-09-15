---
name: inboundfy-growth-lead-magnet
description: Cria e melhora materiais ricos úteis para captura de contato, alinhando promessa, entrega, persona, formulário, nutrição e próxima ação.
---

# Material rico

Use para guias, checklists, planilhas, diagnósticos, modelos, aulas e outros
recursos que entregam valor antes de uma oferta comercial.

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

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os arquivos canônicos de
`.inboundfy/`, a oferta, personas, acervo, pesquisa, canais e calendário.
Consulte `.inboundfy/framework/` para SEO, GEO, copy, anti-slop e validação.

## Entrada esperada

Receba problema, persona, resultado, formato, esforço disponível, CTA,
formulário, sequência posterior e acervos de apoio.

## Fluxo

1. Escolha uma tarefa específica que a pessoa consiga iniciar com o material.
2. Defina título, promessa, escopo, conteúdo, instrução de uso e limite.
3. Monte a página de captura com mensagem compatível com a origem do tráfego.
4. Redija a sequência de entrega e relacionamento sem esconder venda ou
   condição.
5. Revise utilidade, fontes, voz, persona, dicionário, proibições e anti-slop.
6. Planeje distribuição nos canais ativos e registre todas as peças.

## Saída

Entregue briefing, material rico, landing page, email de entrega e plano de
nutrição relacionados por IDs.

## Validação

Confirme promessa honesta, entrega suficiente, CTA claro, formulário
proporcional, sequência coerente e conteúdo sem afirmações sem base.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** growth
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Preserve a versão do material e crie nova versão quando mudar a promessa,
conteúdo, persona ou ação posterior.
