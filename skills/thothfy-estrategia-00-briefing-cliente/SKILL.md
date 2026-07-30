---
name: thothfy-estrategia-00-briefing-cliente
description: >
  Primeira skill do grupo estratégico. Conduz o kickoff de uma campanha nova
  antes de existir qualquer material bruto ou pacote de conteúdo: objetivo de
  negócio, KPI, público, orçamento e prazo. Não escreve calendário nem plano
  de canal — isso é thothfy-estrategia-02-campanha.
---

# Thothfy Estratégia — Briefing de Cliente

Ponto de entrada de uma campanha nova. Traduz uma conversa de kickoff (com
cliente externo ou com o dono do negócio) em um documento formal de objetivo
e condição de sucesso, como requisito para decidir canal, calendário ou
peça.

## Escopo

Decide **por que** a campanha existe e **como medir sucesso** — não decide
canal, tema, cadência ou peça. Isso é `thothfy-estrategia-02-campanha`. Não
substitui `thothfy-planejamento-00-triagem`, que roteia material bruto já
existente de uma peça específica.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/empresa.md` e, se agência multi-cliente, `context/enderecos.md`
  para identificar a marca correta.
- `context/publico.md`, para associar a campanha a uma persona já registrada
  ou sinalizar persona nova a ser criada via `thothfy-contexto-publico`.
- `context/ofertas.md`, quando o objetivo envolver produto ou plano
  específico.

## Entrada esperada

Uma conversa de kickoff, um brief informal recebido do cliente, ou uma
diretriz direta do usuário sobre uma campanha nova.

## Fluxo

1. Pergunte e registre o objetivo de negócio em termos de resultado, não de
   atividade — "gerar 200 trials", nunca "criar conteúdo sobre o produto".
2. Defina o KPI que mede esse objetivo, com meta numérica e prazo. Use o
   roteiro de `REFERENCIA.md` quando o cliente só souber descrever o
   objetivo de forma vaga.
3. Confirme a persona prioritária em `context/publico.md`; se não existir,
   pare e acione `thothfy-contexto-publico` antes de continuar.
4. Registre orçamento de mídia paga (se houver) e período da campanha.
5. Liste restrições específicas desta campanha além de
   `context/proibicoes.md` (ex.: cliente pediu para não citar concorrente
   nomeado nesta campanha, mesmo que geralmente seja permitido).
6. Salve o brief em `<pacote-de-campanha>/00-briefing/brief-cliente.md`,
   seguindo o template de `REFERENCIA.md`.
7. Apresente o brief ao usuário para aprovação. Só depois de aprovado,
   acione `thothfy-contexto-campanhas` para registrar a campanha em
   `context/campanhas.md` com status "em planejamento", e encaminhe para
   `thothfy-estrategia-02-campanha`.

## Saída

`<pacote-de-campanha>/00-briefing/brief-cliente.md`, dentro do diretório de
campanha definido em `context/canais.md`.

## Validação

- Objetivo é um resultado de negócio, não uma atividade de conteúdo.
- KPI tem meta numérica e prazo.
- Persona prioritária existe em `context/publico.md`.
- Brief foi aprovado explicitamente pelo usuário antes de virar campanha
  registrada.

## Idempotência

Rodar novamente sobre a mesma campanha atualiza o brief existente incorporando
correções, sem criar um segundo brief para a mesma campanha.
