---
name: inboundfy-contexto-campanhas
description: >
  Preenche e mantém context/campanhas.md. Ative quando uma campanha nova for
  aprovada em inboundfy-estrategia-00-briefing-cliente ou inboundfy-estrategia-02-campanha,
  quando o status de uma campanha mudar, ou quando o usuário corrigir KPI,
  período ou orçamento de uma campanha já registrada.
---

# Inboundfy Contexto; Campanhas

Mantém o registro de campanhas; ativas e encerradas. Não decide objetivo,
KPI ou plano de canal; apenas guarda o que já foi decidido pelas skills do
grupo `inboundfy-estrategia-<NN>-*`.

## Escopo

Cobre exclusivamente `context/campanhas.md`. Não escreve brief de campanha
(`inboundfy-estrategia-00-briefing-cliente`) nem plano de campanha
(`inboundfy-estrategia-02-campanha`); apenas registra o resultado deles.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

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
   brief de origem; nunca crie entrada sem KPI mensurável.
3. Ao atualizar status, mude apenas o campo `Status` e, se houver, registre a
   data da mudança no próprio bloco; nunca apague uma campanha encerrada.
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
