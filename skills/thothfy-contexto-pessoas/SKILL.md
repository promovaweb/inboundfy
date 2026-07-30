---
name: thothfy-contexto-pessoas
description: >
  Preenche e mantém context/pessoas.md. Ative quando o usuário fornecer ou
  corrigir dado sobre fundadores, time, autores ou porta-vozes — papel,
  autoridade no tema, voz em primeira pessoa, biografia, temas que pode ou
  não assinar.
---

# Thothfy Contexto — Pessoas

Mantém o cadastro de pessoas que podem ser citadas, entrevistadas ou
assinar conteúdo. Não escreve conteúdo público; registra o fato que as
skills de canal (em especial `thothfy-especialista-linkedin`,
`thothfy-especialista-video` e `thothfy-especialista-podcast`) vão consumir para
calibrar voz e legitimidade dos porta-vozes.

## Escopo

Cobre exclusivamente `context/pessoas.md`. Não cobre identidade institucional
(`thothfy-contexto-empresa`) nem persona de público-alvo
(`thothfy-contexto-publico`) — este arquivo registra os porta-vozes da marca,
não o público que ela pretende atingir.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum outro arquivo é pré-requisito. `context/empresa.md` pode ser
consultado para consistência de papel com a estrutura da empresa, mas não
impede a execução desta skill.

## Entrada esperada

Um dado novo, uma correção, ou material bruto (biografia, perfil de rede
social, apresentação) que o usuário quer estruturar como entrada de pessoa.

## Fluxo

1. Leia `context/pessoas.md` atual para não duplicar uma pessoa já cadastrada.
2. Se a entrada for material bruto, extraia papel, autoridade no tema, voz e
   biografia curta, e confirme com o usuário antes de gravar — nunca infira
   autoridade ou tema de competência sem confirmação. Use o roteiro de
   entrevista de `REFERENCIA.md`.
3. Registre também, quando o usuário informar, os temas que essa pessoa
   explicitamente não deve assinar, para evitar atribuição indevida em
   briefing futuro.
4. Grave a entrada seguindo a estrutura de bloco já presente no template,
   como uma nova seção `## <Nome da pessoa>` ou atualização de uma existente.
5. Nunca remova uma pessoa cadastrada sem pedido explícito do usuário.

## Saída

Atualização de `context/pessoas.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido para cada pessoa.
- Cada pessoa tem papel, autoridade e voz preenchidos — nenhum campo
  inventado sem confirmação do usuário.
- Nenhuma seção de outra pessoa foi removida ou sobrescrita sem pedido.
- Temas fora de competência declarada estão registrados quando o usuário os
  informou.

## Idempotência

Atualiza apenas a pessoa indicada pelo usuário na execução atual. Não
reescreve o arquivo inteiro nem normaliza entradas que não foram mencionadas.
