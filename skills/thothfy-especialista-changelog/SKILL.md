---
name: thothfy-especialista-changelog
description: >
  Escreve entrada de changelog ou release note a partir de um brief aprovado
  (fase 5 do pipeline) ou diretamente de um release de produto. Aplica
  ESCRITA.md e a voz de context/marca-voz.md.
---

# Thothfy Changelog Redator

Skill de canal para changelog — traduz uma mudança técnica de produto em
texto legível para o usuário final.

## Escopo

Cobre a entrada de changelog. Não decide o que entra na entrada — parte do
release ou brief fornecido.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/produtos.md`: para descrever a funcionalidade afetada com
  precisão.
- `context/marca-voz.md`: tom, geralmente mais direto e técnico neste canal.
- `context/glossario.md`: grafia oficial de produto e funcionalidade.

## Entrada esperada

Um release de produto (nota técnica, pull request, changelog bruto de
dependência) ou um brief já formalizado.

## Fluxo

1. Leia o material de entrada e identifique: o que mudou, qual público é
   afetado
   e qual ação, se alguma, o usuário precisa tomar.
2. Confirme o nome da funcionalidade ou produto contra `context/produtos.md`
   e a grafia contra `context/glossario.md`.
3. Escreva a entrada em linguagem direta: o que mudou, por que importa para
as pessoas afetadas e eventual ação necessária — sem jargão de commit
interno, sem
   prosa decorativa. Use o template de entrada de `REFERENCIA.md`.
4. Classifique o tipo de mudança quando o formato do canal pedir (novidade,
   melhoria, correção).
5. Rode `thothfy-base-editor` na entrada — ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md` — e corrija se abaixo de 90% — mesmo texto
   técnico segue `ESCRITA.md` na parte que é prosa para o leitor.
6. Salve com frontmatter incluindo `data`, `tipo` e `brief` quando fizer
   parte de um pacote.
7. Encaminhe para `thothfy-planejamento-06-auditoria`.

## Encaminhamento obrigatório

Antes de considerar a entrada pronta, acione
`thothfy-validador-changelog`. Em caso de reprovação, aplique as correções
do relatório e reenvie o arquivo inteiro até a aprovação.

## Saída

Arquivo Markdown da entrada de changelog, salvo no caminho de
`context/canais.md` para o canal changelog.

## Validação

- Nome de produto/funcionalidade confere com `context/produtos.md` e
  `context/glossario.md`.
- Entrada diz claramente o que muda para as pessoas afetadas.
- Nenhum trecho abaixo de 90% na auditoria de `thothfy-base-editor`.
- Aprovação registrada por `thothfy-validador-changelog`.

## Idempotência

Editar uma entrada já existente altera apenas o campo indicado.
