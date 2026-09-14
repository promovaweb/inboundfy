---
name: inboundfy-contexto-canais
description: >
  Mantém detalhes técnicos de canais ativos, formatos, cadência, limites e
  destinos, em apoio a estrategia.md e ao catálogo de canais do projeto.
---

# Inboundfy Contexto; Canais

Mantém detalhes técnicos de canais ativos e apoia `inboundfy-planejamento` e
as skills de canal. A seleção principal vive em `.inboundfy/estrategia.md`.

## Escopo

Cobre `.inboundfy/estrategia.md` e a extensão `.inboundfy/context/canais.md`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Leia `.inboundfy/estrategia.md`, `.inboundfy/inbound.md`,
`.inboundfy/personas.md` e `SKILLS.md` para confirmar a seleção e os nomes
disponíveis.

## Entrada esperada

Definição do diretório de trabalho do pipeline, ativação/desativação de um
canal, ou ajuste de cadência e limites técnicos de um canal já ativo.

## Fluxo

1. Leia `.inboundfy/estrategia.md` e `context/canais.md` atual.
2. Confirme os canais Blog, Email, LinkedIn, Instagram, Substack e YouTube.
3. Para cada canal ativo, registre formato, cadência, limites técnicos,
   destino externo e especialista disponível em `SKILLS.md`.
4. Salve a escolha principal em `.inboundfy/estrategia.md` e os detalhes
   técnicos em `.inboundfy/context/canais.md`.

## Saída

Atualização de `context/canais.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Os diretórios de brainstorm e do pipeline estão definidos.
- Acervo, canais e calendário estão definidos antes de qualquer canal ser
  marcado como ativo.
- Toda skill de redação/imagem referenciada existe em `SKILLS.md`.
- Limites técnicos de formato estão preenchidos para canais ativos.

## Idempotência

Atualiza apenas o canal indicado na execução atual, preservando a
configuração dos demais canais.
