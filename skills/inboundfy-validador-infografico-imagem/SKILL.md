---
name: inboundfy-validador-infografico-imagem
description: >
  Valida infográfico visual produzido por
  inboundfy-especialista-infografico-imagem contra copy aprovada, brief, todos
  os contextos, dados, fontes, hierarquia, acessibilidade e dimensões.
---

# Inboundfy Validador Infográfico Imagem

Valida o visual e devolve correções à
`inboundfy-especialista-infografico-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/marca-voz.md`, `context/glossario.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

## Entrada esperada

Imagem final, copy aprovada, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente números, fontes, ordem de leitura, blocos,
   legibilidade, identidade e dimensões.
4. Reprovando, envie o relatório à
   `inboundfy-especialista-infografico-imagem` e revalide a imagem completa.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas quando a imagem reproduz a copy aprovada sem divergência.

## Idempotência

Atualize o relatório por rodada; não regenere a imagem.
