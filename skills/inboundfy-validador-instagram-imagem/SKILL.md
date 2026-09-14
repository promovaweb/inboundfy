---
name: inboundfy-validador-instagram-imagem
description: >
  Valida post, carrossel ou visual vertical produzido por
  inboundfy-especialista-instagram-imagem contra texto, brief, todos os
  contextos, identidade, sequência, zonas seguras, legibilidade e proporção.
---

# Inboundfy Validador Instagram Imagem

Valida os visuais e devolve correções à
`inboundfy-especialista-instagram-imagem`.

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

Imagens, texto aprovado, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente capa, sequência, consistência, miniatura, zonas
   seguras, grafia, identidade e proporções.
4. Reprovando, envie o relatório à
   `inboundfy-especialista-instagram-imagem` e revalide todo o conjunto.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas quando todos os arquivos do conjunto cumprem o contrato.

## Idempotência

Atualize o relatório por rodada; não regenere imagens.
