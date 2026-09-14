---
name: inboundfy-brainstorm-04-validacao
description: >
  Fase 04 do brainstorm. Audita brainstorm.md contra o modelo, as fontes,
  ESCRITA.md, context/marca-voz.md, context/proibicoes.md e
  context/estruturas-proibidas.md; corrige escrita ou devolve à fase capaz
  de reparar falta factual ou de foco.
---

# Inboundfy Brainstorm 04; Validação

Fecha o brainstorm e autoriza seu uso pelo pipeline. Não produz a peça final.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `ESCRITA.md` e `context/marca-voz.md`.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.
- Todos os arquivos de `context/` citados como origem no documento.

## Entrada esperada

`brainstorm.md` com status `em-validacao`.

## Fluxo

1. Ler o arquivo inteiro e a rubrica de `REFERENCIA.md`.
2. Conferir todas as seções obrigatórias de `templates/brainstorm.md`.
3. Abrir cada fonte e confirmar que ela apoia a afirmação associada.
4. Comparar fatos internos com os arquivos de origem; reprovar divergência.
5. Acionar `inboundfy-base-editor` na prosa. Corrigir trechos abaixo de 90% e
   reavaliar.
6. Conferir linha a linha `context/proibicoes.md` e
   `context/estruturas-proibidas.md`.
7. Devolver para entrevista quando faltar foco, para pesquisa quando faltar
   prova ou para síntese quando faltar clareza. Reexecutar a validação
   depois da correção.
8. Quando aprovado, marcar `status: "aprovado"` e registrar a execução no
   histórico.

## Saída

O mesmo `brainstorm.md`, aprovado ou com retorno explícito para uma fase.

## Validação

- Nenhum fato externo ficou sem fonte.
- Hipóteses e suposições estão identificadas.
- A prosa atingiu 90% em `inboundfy-base-editor`.
- Nenhuma violação dos dois arquivos de proibições permanece.
- Todas as oportunidades apontam ativos existentes.

## Idempotência

Cada nova auditoria atualiza o status e acrescenta linha ao histórico, sem
apagar resultados anteriores.
