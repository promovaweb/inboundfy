---
name: thothfy-contexto-produtos
description: >
  Preenche e mantém context/produtos.md e context/servicos.md. Ative quando o
  usuário fornecer ou corrigir dado sobre um produto, funcionalidade ou
  serviço prestado — definição, público, funcionamento e limites reais.
---

# Thothfy Contexto — Produtos e Serviços

Mantém o catálogo de produtos e serviços que podem virar tema de conteúdo ou
ser mencionados em uma peça. Não escreve copy de venda; registra o fato que
as skills de canal vão consumir para descrever produto ou serviço com
precisão.

## Escopo

Cobre `context/produtos.md` e `context/servicos.md`. Não cobre preço nem
condição comercial — isso é `thothfy-contexto-ofertas`.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum outro arquivo é pré-requisito.

## Entrada esperada

Um produto ou serviço novo, uma correção de funcionalidade, um material bruto
(documentação, changelog, apresentação de produto) a estruturar.

## Fluxo

1. Leia `context/produtos.md` e `context/servicos.md` atuais para não
   duplicar uma entrada existente.
2. Classifique a entrada: produto (algo que o usuário final opera) ou serviço
   (algo entregue por pessoas da empresa). Na dúvida, pergunte ao usuário.
3. Se a entrada for material bruto, extraia definição, público, problema
   resolvido, mecanismo e limites reais, e confirme antes de gravar — nunca
   infira funcionalidade que o material não confirma. Use o roteiro de
   entrevista de `REFERENCIA.md`.
4. Registre explicitamente o que o produto ou serviço **não faz**, para que
   nenhuma peça futura prometa algo fora do escopo real.
5. Grave a entrada no arquivo correto, seguindo a estrutura de bloco do
   template.

## Saída

Atualização de `context/produtos.md` e/ou `context/servicos.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido para a entrada.
- Toda funcionalidade registrada tem origem rastreável (documentação,
  confirmação do usuário), nunca suposição da skill.
- O campo de limite real está preenchido sempre que o usuário indicar um.
- Nenhuma entrada existente foi removida sem pedido explícito.

## Idempotência

Atualiza apenas o produto ou serviço indicado na execução atual, preservando
as demais entradas inalteradas.
