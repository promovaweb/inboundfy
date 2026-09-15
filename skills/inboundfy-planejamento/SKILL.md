---
name: inboundfy-planejamento
description: Converte oportunidades do acervo em um calendário editorial mensal com checklist, canais, personas, caminhos das peças e estados de produção.
---

# Planejamento editorial

Esta skill concentra as etapas `00-triagem`, `01-saneamento`, `02-pesquisa`,
`03-oportunidades`, `04-briefing`, `05-producao` e `06-auditoria` em
`references/etapas/`. Use o nome da etapa para retomar uma parte específica.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/estrategia.md`,
`.inboundfy/context/publico.md`, `.inboundfy/pipeline.md`, o acervo e o índice de peças.

## Entrada esperada

Uma ou mais oportunidades escolhidas, datas disponíveis, cadência e prioridades
do projeto.

## Fluxo

1. Pergunte se o item será usado agora ou guardado para uma data futura.
2. Distribua os itens em `calendario/AAAA-MM.md`.
3. Use checklist por data com ID, canal, persona, caminho da peça e estado.
4. Ao criar peça futura, abra a pasta final e relacione o caminho no mês
   correspondente.
5. Antes de encaminhar o brief para produção, execute
   `inboundfy-anti-slop` no marco A3 e registre o resultado em
   `auditorias/anti-slop/03-estrategia-brief.md`.
6. Atualize o índice do calendário sem alterar o conteúdo do acervo.

## Saída

Calendário mensal legível no GitHub e alinhado aos arquivos dentro de `canais/`.

## Validação

Toda linha aponta para uma peça ou marca a ação ainda pendente. Datas, canal,
persona e estado devem coincidir com o frontmatter. Nenhum brief segue para
produção sem o ciclo A3 registrado.

## Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Reexecutar reconcilia a mesma linha pelo ID e não duplica tarefas.
