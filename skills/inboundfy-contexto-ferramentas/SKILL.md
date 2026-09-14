---
name: inboundfy-contexto-ferramentas
description: >
  Preenche e mantém context/ferramentas.md. Ative quando o usuário informar
  uma ferramenta da stack, parceiro técnico ou integração que pode (ou não)
  ser citada em conteúdo público.
---

# Inboundfy Contexto; Ferramentas

Mantém o cadastro de ferramentas mencionáveis em conteúdo. Skills de canal
consultam este arquivo antes de citar ou linkar uma ferramenta de terceiro.

## Escopo

Cobre exclusivamente `context/ferramentas.md`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum outro arquivo é pré-requisito.

## Entrada esperada

Uma ferramenta nova, correção de relação (fornecedor, parceiro, tecnologia
própria), ou definição de página própria para link na primeira menção.

## Fluxo

1. Leia `context/ferramentas.md` atual para não duplicar uma entrada.
2. Registre para que a empresa usa a ferramenta e se ela pode ser citada em
   conteúdo público; nunca assuma "sim" por padrão sem confirmação. Use o
   roteiro de entrevista de `REFERENCIA.md`.
3. Registre o link oficial da ferramenta e, se existir, a página própria do
   usuário para onde a primeira menção deve apontar.
4. Atualize a relação (fornecedor, parceiro, tecnologia própria) sempre que
   ela mudar.

## Saída

Atualização de `context/ferramentas.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Permissão de citação pública está definida explicitamente.
- Link oficial está presente e correto.
- Nenhuma entrada existente foi removida sem pedido explícito.

## Idempotência

Atualiza apenas a ferramenta indicada na execução atual.
