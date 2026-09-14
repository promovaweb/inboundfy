---
name: inboundfy-validador-email
description: >
  Valida email produzido por inboundfy-especialista-email contra brief,
  fontes, todos os contextos, escrita, proibições, oferta, estrutura
  persuasiva e contrato do canal antes da entrega.
---

# Inboundfy Validador Email

Valida o email e devolve correções à `inboundfy-especialista-email`.

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

Email candidato, brief e fontes comerciais.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira assunto, pré-header, CTA, oferta, jornada, frontmatter e blocos
   AIDA, PAS, PASTOR ou FAB declarados.
4. Reprovando, envie o relatório à `inboundfy-especialista-email` e valide
   novamente o arquivo inteiro após a correção.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com CTA único, dados comerciais confirmados e nenhum achado.

## Idempotência

Atualize o relatório por rodada; não altere o email.
