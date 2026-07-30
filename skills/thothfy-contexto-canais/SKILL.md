---
name: thothfy-contexto-canais
description: >
  Preenche e mantém context/canais.md. Ative quando o usuário definir o
  diretórios de brainstorm e do pipeline ou configurar um canal —
  ativo/inativo, skill de redação e imagem, cadência, formato e limites.
---

# Thothfy Contexto — Canais

Mantém a configuração de onde o pipeline salva pacotes e como cada canal se
comporta neste projeto. É pré-requisito de `thothfy-planejamento-00-triagem` e de toda skill
de canal, que consultam este arquivo para saber onde salvar o artefato final.

## Escopo

Cobre exclusivamente `context/canais.md`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum outro arquivo é pré-requisito. Consulte `SKILLS.md` para saber qual
skill de redação e de imagem existe para cada canal antes de registrar a
configuração.

## Entrada esperada

Definição do diretório de trabalho do pipeline, ativação/desativação de um
canal, ou ajuste de cadência e limites técnicos de um canal já ativo.

## Fluxo

1. Leia `context/canais.md` atual.
2. Se os diretórios de brainstorm e do pipeline não estiverem definidos,
   use `brainstorms/` e `content/` como padrões ou registre caminhos
   informados pelo usuário. Eles são exigidos por `thothfy-brainstorm-00-triagem`
   e `thothfy-planejamento-00-triagem`. Use `REFERENCIA.md`.
3. Para cada canal configurado, registre: se está ativo, a skill de redação
   e de imagem correspondente (usando os nomes exatos de `SKILLS.md`),
   cadência de publicação, formato e limites técnicos (tamanho de título,
limite de caracteres, proporção de imagem) e onde o artefato final é
   publicado fora do Thothfy.
4. Não invente skill de canal inexistente — verifique em `SKILLS.md` antes de
   registrar o nome.

## Saída

Atualização de `context/canais.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Os diretórios de brainstorm e do pipeline estão definidos.
- O diretório de trabalho do pipeline está definido antes de qualquer canal
  ser marcado como ativo.
- Toda skill de redação/imagem referenciada existe em `SKILLS.md`.
- Limites técnicos de formato estão preenchidos para canais ativos.

## Idempotência

Atualiza apenas o canal indicado na execução atual, preservando a
configuração dos demais canais.
