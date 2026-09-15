---
name: inboundfy-validador-substack
description: Revisa uma peça Substack contra o acervo, base editorial, voz, persona, proibições, fontes, links e o contrato do canal.
---

# Validador Substack

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **validador**.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), o README da peça, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`
e os arquivos vinculados.

## Entrada esperada

Uma pasta de peça Substack com frontmatter e conteúdo.

## Fluxo

Confirme fontes, voz, persona, links, estrutura longa, CTA e estado. Registre
cada ajuste necessário no relatório da peça e devolva à produtora.

## Saída

Relatório de revisão com estado `aprovado` ou `revisao` e ações claras.

## Validação

Reprove referência ausente, persona ausente, link quebrado, termo vetado ou
frontmatter incompleto.

## Responsabilidade do grupo

Leia o asset inteiro contra brief, fontes, contexto e formato. Relate local, regra, fonte e ação; devolva à produtora sem editar o original.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** validador
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o relatório existente sem duplicar apontamentos.
