---
name: inboundfy-contexto-publico
description: >
  Preenche e mantém context/publico.md. Ative quando o usuário definir ou
  corrigir uma persona ou segmento; perfil, dor principal, objeção comum,
  onde consome conteúdo, jargão próprio.
---

# Inboundfy Contexto; Público

Mantém as personas e segmentos que orientam planejamento (`inboundfy-planejamento-03-oportunidades`)
e briefing (`inboundfy-planejamento-04-briefing`). Não escreve conteúdo público;
registra o público que a empresa pretende atingir para que as skills de canal
calibrem nível técnico, jargão e ângulo.

## Escopo

Cobre exclusivamente `context/publico.md`. Não cobre pessoas que falam pela
marca (`inboundfy-contexto-pessoas`).

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum outro arquivo é pré-requisito, mas `context/produtos.md` e
`context/servicos.md` ajudam a validar se a dor descrita conecta com algo que
a empresa realmente resolve.

## Entrada esperada

Uma persona ou segmento novo, uma correção de dor ou objeção, ou pesquisa de
público (entrevista, dado de suporte, comentário recorrente) a estruturar.

## Fluxo

1. Leia `context/publico.md` atual para não duplicar uma persona existente.
2. Exija do usuário ou do material fornecido, seguindo o roteiro de
entrevista de `REFERENCIA.md`: perfil, conhecimento atual sobre o problema,
   dor principal concreta (não abstrata), o que já tentou e não resolveu,
   objeção mais comum, gatilho de ação e onde consome conteúdo.
3. Registre jargão próprio da persona; isso alimenta `inboundfy-base-seo` na
   escolha de palavra-chave alinhada à forma como a pessoa realmente busca.
4. Grave a entrada seguindo a estrutura de bloco do template.

## Saída

Atualização de `context/publico.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido para a persona.
- Dor e objeção são concretas, não abstratas ou genéricas.
- Toda persona tem ao menos dor principal e canal de consumo preenchidos.
- Nenhuma persona existente foi removida sem pedido explícito.

## Idempotência

Atualiza apenas a persona indicada na execução atual.
