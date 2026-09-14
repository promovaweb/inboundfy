---
name: inboundfy-personas
description: Entrevista, registra e mantém personas de marketing, relacionando problemas, linguagem, canais, ofertas e contexto de compra sem criar perfis genéricos.
---

# Personas

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/personas.md`,
`.inboundfy/inbound.md`, `.inboundfy/voz.md` e bases editoriais relacionadas.

## Entrada esperada

Informações fornecidas pelo usuário, entrevistas, pesquisas e sinais presentes
no acervo. Diferencie fato, interpretação e hipótese.

## Fluxo

1. Pergunte situação, contexto, cargo, problema, resultado, objeções,
   linguagem, canais, oferta, urgência e fonte.
2. Mantenha pelo menos uma persona completa com ID estável.
3. Antes de criar uma peça, mostre as personas numeradas e peça uma ou mais
   escolhas quando a solicitação não trouxer esse dado.
4. Registre ajustes aprovados sem alterar outras personas automaticamente.

## Saída

`personas.md` atualizado e vínculo explícito no frontmatter de cada peça.

## Validação

Cada persona tem fonte, problema, resultado, vocabulário e canal. Uma peça sem
persona selecionada volta para a conversa antes da redação.

## Idempotência

Atualize a persona pelo ID e preserve histórico de alterações relevantes.
