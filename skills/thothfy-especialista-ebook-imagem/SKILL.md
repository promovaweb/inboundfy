---
name: thothfy-especialista-ebook-imagem
description: >
  Gera capa de ebook e imagem OpenGraph derivada, reaproveitando o motor de
  thothfy-base-imagem com a identidade visual do usuário.
---

# Thothfy Ebook Capa

Skill de imagem para capa de ebook e sua imagem OpenGraph (usada em
compartilhamento e preview de link). Reaproveita `thothfy-base-imagem`
como motor.

## Fonte da imagem: geração sintética via thothfy-base-imagem

Capa de ebook é peça de identidade visual da própria publicação — título,
subtítulo e composição de marca — não uma fotografia de contexto. Por isso
usa `thothfy-base-imagem` como motor.

## Escopo

Cobre capa e imagem OpenGraph derivada. O texto do ebook é
`thothfy-especialista-ebook`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/canais.md`: dimensão de capa e de OpenGraph exigidas.
- O que `thothfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

Título e subtítulo final do ebook, definidos por `thothfy-especialista-ebook`.

## Fluxo

1. Confirme as dimensões de capa e de OpenGraph em `context/canais.md`,
   usando a tabela de `REFERENCIA.md` como referência de mercado.
2. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `thothfy-base-imagem` com título e subtítulo do ebook, na dimensão de
   capa.
3. Gere a versão derivada de OpenGraph a partir da mesma composição visual,
   seguindo o exemplo de `REFERENCIA.md`, ajustando apenas a proporção
   quando ela diferir da capa.
4. Revise contra o checklist de `REFERENCIA.md`: título legível em
   miniatura de listagem, contraste e presença de logo quando o canal
   exigir.
5. Confira grafia do título contra `context/glossario.md`.
6. Salve capa e OpenGraph junto ao artefato de texto do ebook.

## Encaminhamento obrigatório

Antes de considerar capa e OpenGraph prontos, acione
`thothfy-validador-ebook-imagem`. Em caso de reprovação, corrija os achados
e reenvie o conjunto até a aprovação.

## Saída

Arquivo de capa e arquivo de OpenGraph, salvos em
`97-ativos-finais/ebook/<item>/`.

## Validação

- Dimensões conferem exatamente com `context/canais.md`.
- Título na capa confere com o título final do ebook e com
  `context/glossario.md`.
- Capa e OpenGraph mantêm a mesma identidade visual.
- Aprovação registrada por `thothfy-validador-ebook-imagem`.

## Idempotência

Não regenere uma capa já existente para o mesmo ebook sem pedido explícito
de refação.
