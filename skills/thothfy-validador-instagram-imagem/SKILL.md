---
name: thothfy-validador-instagram-imagem
description: >
  Valida post, carrossel ou visual vertical produzido por
  thothfy-especialista-instagram-imagem contra texto, brief, todos os
  contextos, identidade, sequência, zonas seguras, legibilidade e proporção.
---

# Thothfy Validador Instagram Imagem

Valida os visuais e devolve correções à
`thothfy-especialista-instagram-imagem`.

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

Imagens, texto aprovado, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `thothfy-base-validador`.
3. Inspecione visualmente capa, sequência, consistência, miniatura, zonas
   seguras, grafia, identidade e proporções.
4. Reprovando, envie o relatório à
   `thothfy-especialista-instagram-imagem` e revalide todo o conjunto.

## Saída

Relatório no caminho definido por `thothfy-base-validador`.

## Validação

Aprove apenas quando todos os arquivos do conjunto cumprem o contrato.

## Idempotência

Atualize o relatório por rodada; não regenere imagens.
