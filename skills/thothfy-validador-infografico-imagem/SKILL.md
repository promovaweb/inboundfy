---
name: thothfy-validador-infografico-imagem
description: >
  Valida infográfico visual produzido por
  thothfy-especialista-infografico-imagem contra copy aprovada, brief, todos
  os contextos, dados, fontes, hierarquia, acessibilidade e dimensões.
---

# Thothfy Validador Infográfico Imagem

Valida o visual e devolve correções à
`thothfy-especialista-infografico-imagem`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/marca-voz.md`, `context/glossario.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

## Entrada esperada

Imagem final, copy aprovada, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Inspecione visualmente números, fontes, ordem de leitura, blocos,
   legibilidade, identidade e dimensões.
4. Reprovando, envie o relatório à
   `thothfy-especialista-infografico-imagem` e revalide a imagem completa.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas quando a imagem reproduz a copy aprovada sem divergência.

## Idempotência

Atualize o relatório por rodada; não regenere a imagem.
