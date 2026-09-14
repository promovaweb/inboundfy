---
name: inboundfy-validador-ebook
description: >
  Valida ebook produzido por inboundfy-especialista-ebook contra brief,
  fontes, todos os contextos, escrita, proibições, progressão dos capítulos
  e estruturas persuasivas antes da entrega.
---

# Inboundfy Validador Ebook

Valida o ebook e devolve correções à `inboundfy-especialista-ebook`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/produtos.md`, `context/servicos.md`,
`context/ofertas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Ebook candidato completo, brief, outline e materiais-fonte.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador` para o ebook inteiro.
3. Confira promessa, sumário, progressão, repetição, fontes, PAS/AIDA/FAB
   quando aplicáveis e consistência entre capítulos.
4. Reprovando, envie o relatório à `inboundfy-especialista-ebook`; depois da
   correção, releia e valide o ebook inteiro.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove somente sem capítulo repetido, afirmação sem fonte ou achado aberto.

## Idempotência

Atualize o relatório por rodada; não reescreva capítulos.
