---
name: inboundfy-especialista-substack
description: Adapta um acervo aprovado para artigo ou newsletter no Substack, respeitando voz, persona, estrutura longa, referências e CTA do projeto.
---

# Especialista Substack

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **especialista**.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/estrategia.md`, o acervo e o template da
peça dentro de `canais/substack/`.

## Entrada esperada

ID do acervo, base editorial, persona, formato Substack e objetivo.

## Fluxo

Estruture tese, abertura, desenvolvimento, exemplos, links, fechamento e CTA.
Preserve fontes e indique o caminho do acervo no frontmatter.

## Saída

README final em `canais/substack/` com frontmatter, texto, referências e revisão.

## Validação

Acione `inboundfy-validador-substack` e confira voz, fontes, persona, links e
formato antes de aprovar.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Edite a pasta da peça existente quando o pedido trouxer o mesmo ID.
