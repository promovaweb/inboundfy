---
name: thothfy-especialista-infografico-imagem
description: >
  Gera a peça final de infográfico (formato típico 9:16) a partir da copy
  aprovada, reaproveitando o motor de thothfy-base-imagem.
---

# Thothfy Infografico Imagem

Skill de imagem para infográfico. Reaproveita `thothfy-base-imagem` como
motor, com maior densidade de blocos de texto e dado do que uma peça social
comum.

## Fonte da imagem: geração sintética via thothfy-base-imagem

Infográfico é composição gráfica de dados e blocos de texto sobre fundo de
marca — caso de `thothfy-base-imagem`, com a particularidade de comportar
múltiplos blocos em vez de um único foco visual.

## Escopo

Cobre a peça visual final. O texto (título, blocos, legenda, alt text) é
`thothfy-especialista-infografico`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/canais.md`: dimensão exigida (geralmente `9:16`).
- O que `thothfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O texto final de `thothfy-especialista-infografico`: título, blocos e alt text.

## Fluxo

1. Confirme a dimensão exigida em `context/canais.md`.
2. Organize os blocos de texto na hierarquia de leitura vertical de
   `REFERENCIA.md`: título no topo, blocos em sequência de leitura lógica,
   sem poluir a peça com mais blocos do que o brief define.
3. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `thothfy-base-imagem` com os blocos e a dimensão confirmada, adaptando a
   composição para múltiplos blocos em vez de um único foco.
4. Revise contra o checklist de `REFERENCIA.md`: todo número e dado da
   imagem confere exatamente com o texto aprovado por
   `thothfy-especialista-infografico` — nenhum dado pode ser alterado na
   composição visual.
5. Confira grafia contra `context/glossario.md`.
6. Salve junto ao artefato de texto do mesmo item.

## Encaminhamento obrigatório

Antes de considerar a imagem pronta, acione
`thothfy-validador-infografico-imagem`. Em caso de reprovação, corrija os
achados e reenvie a imagem completa até a aprovação.

## Saída

Arquivo de imagem final salvo em `97-ativos-finais/infografico/<item>/`.

## Validação

- Dimensão confere exatamente com `context/canais.md`.
- Todo dado numérico na imagem é idêntico ao texto aprovado.
- Hierarquia visual segue a sequência de leitura definida no texto.
- Aprovação registrada por `thothfy-validador-infografico-imagem`.

## Idempotência

Não regenere uma peça já existente para o mesmo item sem pedido explícito de
refação.
