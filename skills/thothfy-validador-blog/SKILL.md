---
name: thothfy-validador-blog
description: >
  Valida artigo de blog produzido por thothfy-especialista-blog contra brief,
  fontes, todos os contextos, escrita, proibições, SEO e contrato do canal.
  Use sempre antes de considerar um artigo pronto.
---

# Thothfy Validador Blog

Valida o artigo e devolve correções à `thothfy-especialista-blog`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/produtos.md`, `context/servicos.md`,
`context/ferramentas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Artigo candidato, brief e materiais-fonte.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e o
   contrato completo de `thothfy-especialista-blog`.
2. Acione `thothfy-base-validador` com o artigo, o brief e a produtora.
3. Confira intenção de busca, frontmatter, H1, headings, FAB, afirmações,
   links e resultado de `thothfy-base-seo`.
4. Se reprovado, envie o relatório à `thothfy-especialista-blog`, solicite a
   correção e valide novamente o arquivo inteiro.
5. Repita até aprovar ou registrar bloqueio factual que exija o usuário.

## Saída

Relatório de validação de blog no caminho definido por
`thothfy-base-validador`.

## Validação

Só aprove com todos os critérios de `REFERENCIA.md` atendidos e sem achado
aberto no relatório transversal.

## Idempotência

Atualize o relatório existente por rodada; não altere o artigo.
