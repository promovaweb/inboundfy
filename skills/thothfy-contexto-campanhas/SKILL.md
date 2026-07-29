---
name: thothfy-contexto-campanhas
description: >
  Preenche e mantém context/campanhas.md. Ative quando uma campanha nova for
  aprovada em thothfy-estrategia-briefing-cliente ou thothfy-estrategia-campanha,
  quando o status de uma campanha mudar, ou quando o usuário corrigir KPI,
  período ou orçamento de uma campanha já registrada.
---

# Thothfy Contexto — Campanhas

Mantém o registro de campanhas — ativas e encerradas. Não decide objetivo,
KPI ou plano de canal; apenas guarda o que já foi decidido pelas skills do
grupo `thothfy-estrategia-*`.

## Escopo

Cobre exclusivamente `context/campanhas.md`. Não escreve brief de campanha
(`thothfy-estrategia-briefing-cliente`) nem plano de campanha
(`thothfy-estrategia-campanha`) — apenas registra o resultado deles.

## Contexto exigido

- `context/publico.md`, para validar que a persona prioritária citada existe.
- `context/canais.md`, para validar que os canais listados estão cadastrados.

## Entrada esperada

Uma campanha nova aprovada, uma mudança de status, ou uma correção de KPI,
orçamento ou período informada pelo usuário.

## Fluxo

1. Leia `context/campanhas.md` atual para não duplicar uma campanha já
   registrada com nome equivalente.
2. Ao registrar campanha nova, exija: objetivo de negócio, KPI com meta e
   prazo, público prioritário, canais envolvidos, período e o caminho do
   brief de origem — nunca crie entrada sem KPI mensurável.
3. Ao atualizar status, mude apenas o campo `Status` e, se houver, registre a
   data da mudança no próprio bloco — nunca apague uma campanha encerrada.
4. Confirme que a persona citada existe em `context/publico.md` e que os
   canais citados existem em `context/canais.md`; se não existirem, pare e
   aponte a skill de contexto correspondente antes de salvar.
5. Use o template de `REFERENCIA.md` para o formato do bloco.

## Saída

Atualização de `context/campanhas.md`.

## Validação

- Toda campanha registrada tem KPI com meta numérica e prazo, não só
  "aumentar engajamento".
- Persona e canais citados existem nos arquivos de `context/` correspondentes.
- Campanha encerrada permanece no arquivo com status atualizado, nunca é
  removida.

## Idempotência

Atualiza apenas a campanha indicada na execução atual; demais campanhas do
arquivo permanecem intactas.
