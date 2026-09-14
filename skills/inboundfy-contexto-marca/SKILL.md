---
name: inboundfy-contexto-marca
description: >
  Preenche e mantém context/marca-voz.md, context/proibicoes.md e
  context/estruturas-proibidas.md. Ative quando o usuário definir ou
  ajustar tom, vocabulário, exemplos de voz, registrar um veto editorial, ou
  editar o catálogo de padrões de texto com cara de IA.
---

# Inboundfy Contexto; Marca e Voz

Mantém a definição de tom, voz e os vetos duros que toda skill de redação
consulta antes de escrever. É o trio que, junto com `ESCRITA.md`, define o
que é aceitável publicar: voz (o que a marca quer soar), proibições de
negócio (o que a marca nunca promete ou compara) e estruturas proibidas (o
que denuncia texto sem revisão humana, independente da marca).

## Escopo

Cobre `context/marca-voz.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`. Não cobre identidade institucional
(`inboundfy-contexto-empresa`) nem persona de público
(`inboundfy-contexto-publico`).

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum outro arquivo é pré-requisito.

## Entrada esperada

Definição ou ajuste de tom, um exemplo real de bom ou mau texto, ou um veto
editorial (termo, promessa ou comparação que nunca deve aparecer).

## Fluxo

1. Leia `context/marca-voz.md` e `context/proibicoes.md` atuais, e o roteiro
   de entrevista de `REFERENCIA.md`.
2. Para ajuste de voz: registre adjetivos de tom, pessoa gramatical, nível
   técnico e se humor é permitido, por canal quando o usuário diferenciar.
3. Para exemplo de bom/mau texto: peça o trecho real (ou o mais próximo do
   real) e registre com o motivo, quando o usuário fornecer.
4. Para veto editorial: registre em `context/proibicoes.md` o termo,
   promessa ou comparação proibida com o motivo. Se o veto for específico de
   um canal ou público, registre na seção "Canais ou públicos com regra
   própria".
5. Para ajuste do catálogo de estruturas proibidas:
   `context/estruturas-proibidas.md` já vem pré-preenchido com padrões
   genéricos. Edite apenas
   quando o usuário quiser adicionar um padrão específico observado na
   própria produção, remover um item que a voz da marca aceita de propósito
   (ex.: marca que usa emoji deliberadamente), ou ajustar por preferência
   editorial confirmada.
6. Nunca infira um veto a partir de uma preferência de estilo; veto duro
   (teto de nota 69 em `inboundfy-base-editor`) é diferente de vocabulário evitado
   por preferência, que fica em "Vocabulário evitado" de `marca-voz.md`.

## Saída

Atualização de `context/marca-voz.md`, `context/proibicoes.md` e/ou
`context/estruturas-proibidas.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Todo exemplo de voz citado é real ou explicitamente marcado como
  ilustrativo.
- Todo veto tem motivo registrado.
- A distinção entre preferência de estilo e veto duro foi respeitada.

## Idempotência

Atualiza apenas a seção indicada pelo usuário, preservando exemplos e vetos
já registrados.
