---
name: inboundfy-planejamento
description: Converte oportunidades do acervo em um calendário editorial mensal com checklist, canais, personas, caminhos das peças e estados de produção.
---

# Planejamento editorial

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/estrategia.md`,
`.inboundfy/personas.md`, `.inboundfy/pipeline.md`, o acervo e o índice de peças.

## Entrada esperada

Uma ou mais oportunidades escolhidas, datas disponíveis, cadência e prioridades
do projeto.

## Fluxo

1. Pergunte se o item será usado agora ou guardado para uma data futura.
2. Distribua os itens em `calendario/AAAA-MM.md`.
3. Use checklist por data com ID, canal, persona, caminho da peça e estado.
4. Ao criar peça futura, abra a pasta final e relacione o caminho no mês
   correspondente.
5. Atualize o índice do calendário sem alterar o conteúdo do acervo.

## Saída

Calendário mensal legível no GitHub e alinhado aos arquivos dentro de `canais/`.

## Validação

Toda linha aponta para uma peça ou marca a ação ainda pendente. Datas, canal,
persona e estado devem coincidir com o frontmatter.

## Idempotência

Reexecutar reconcilia a mesma linha pelo ID e não duplica tarefas.
