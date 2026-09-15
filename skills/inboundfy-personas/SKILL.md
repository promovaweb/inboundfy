---
name: inboundfy-personas
description: Entrevista, registra e mantém personas de marketing, relacionando problemas, linguagem, canais, ofertas e contexto de compra sem criar perfis genéricos.
---

# Personas

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/publico.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/marca-voz.md` e bases editoriais relacionadas.

## Entrada esperada

Informações fornecidas pelo usuário, entrevistas, pesquisas e sinais presentes
no acervo. Diferencie fato, interpretação e hipótese.

## Fluxo

1. Pergunte situação, contexto, cargo, problema, resultado, objeções,
   linguagem, canais, oferta, urgência e fonte.
2. Mantenha pelo menos uma persona completa com ID estável.
3. Antes de criar uma peça, apresente todas as personas em menu. Cada item deve
   conter número, ID, nome de referência e resumo do perfil, contexto de compra,
   problema, resultado, canais e oferta. Peça uma ou mais escolhas quando a
   solicitação não trouxer esse dado.
4. Registre ajustes aprovados sem alterar outras personas automaticamente.

## Saída

`personas.md` atualizado e vínculo explícito no frontmatter de cada peça.

## Validação

Cada persona tem fonte, problema, resultado, vocabulário e canal. Uma peça sem
persona selecionada volta para a conversa antes da redação.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize a persona pelo ID e preserve histórico de alterações relevantes.
