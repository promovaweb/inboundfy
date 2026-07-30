---
name: thothfy-brainstorm-01-entrevista
description: >
  Fase 01 do brainstorm. Consulta context/ e investiga somente as lacunas que
  mudam tese, audiência ou veracidade, com um único bloco de até cinco
  perguntas; registra respostas e suposições sem interromper por escolhas
  opcionais.
---

# Thothfy Brainstorm 01 — Entrevista

Completa o entendimento editorial da ideia. Não pesquisa fontes externas.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/empresa.md`, `context/produtos.md` e `context/servicos.md`.
- `context/publico.md`, `context/marca-voz.md` e `context/ofertas.md`.
- `context/glossario.md`, quando a ideia contém termo técnico ou marca.

Consultar apenas os arquivos relacionados ao assunto. Acionar manutenção de
contexto somente quando a lacuna precisar virar informação permanente.

## Entrada esperada

`brainstorm.md` com status `em-entrevista`.

## Fluxo

1. Ler a ideia, os arquivos aplicáveis e o roteiro de `REFERENCIA.md`.
2. Identificar o que já pode ser respondido pelas fontes internas.
3. Separar lacunas essenciais de preferências opcionais.
4. Se houver lacuna essencial, fazer um único bloco com até cinco perguntas
   específicas. Não perguntar o que pode ser inferido com segurança.
5. Registrar respostas, origem e suposições na tabela do `brainstorm.md`.
6. Formular uma tese provisória e perguntas de pesquisa sem redigir a peça.
7. Marcar o status como `em-pesquisa` e encaminhar para
   `thothfy-brainstorm-02-pesquisa`.

## Saída

O mesmo `brainstorm.md`, com perguntas, respostas e suposições preenchidas.

## Validação

- Cada pergunta muda tese, audiência, veracidade ou escopo factual.
- Houve no máximo um bloco e cinco perguntas.
- Resposta inferida indica o arquivo de origem.
- Informação ausente não aparece como fato.

## Idempotência

Nova execução aproveita respostas registradas e pergunta somente sobre uma
lacuna essencial ainda aberta.
