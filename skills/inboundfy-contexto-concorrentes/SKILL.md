---
name: inboundfy-contexto-concorrentes
description: >
  Preenche e mantém context/concorrentes.md. Ative quando o usuário informar
  ou corrigir dado sobre um concorrente; o que oferece, ponto forte real,
  diferença verificável, se pode ser citado nominalmente.
---

# Inboundfy Contexto; Concorrentes

Mantém o cadastro de concorrentes para uso em posicionamento relativo. Não
escreve comparação pública; registra o fato que `inboundfy-especialista-blog`,
`inboundfy-especialista-linkedin` e demais skills de canal consultam antes de
mencionar ou comparar com um concorrente.

## Escopo

Cobre exclusivamente `context/concorrentes.md`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

`context/proibicoes.md`, para checar se já existe veto de comparação
registrado antes de liberar uma citação nominal.

## Entrada esperada

Um concorrente novo, uma correção de posicionamento, ou pesquisa de mercado a
estruturar.

## Fluxo

1. Leia `context/concorrentes.md` atual para não duplicar uma entrada.
2. Registre o que o concorrente oferece e onde é forte com honestidade; não
   minimize um ponto forte real só para favorecer a empresa do usuário. Use
   o roteiro de entrevista de `REFERENCIA.md`.
3. Registre a diferença verificável da empresa do usuário frente a esse
   concorrente, com prova, não afirmação vaga.
4. Confirme com o usuário se esse concorrente pode ser citado nominalmente em
   conteúdo público; na dúvida, registre "não" por padrão até confirmação
   explícita.
5. Verifique `context/proibicoes.md` para comparações já vetadas antes de
   liberar o campo de citação nominal como "sim".

## Saída

Atualização de `context/concorrentes.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Ponto forte do concorrente está descrito sem minimização.
- Diferença da empresa do usuário é verificável, não vaga.
- Permissão de citação nominal está definida explicitamente, nunca deduzida.

## Idempotência

Atualiza apenas o concorrente indicado na execução atual.
