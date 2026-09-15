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

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **contexto**.

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

## Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualiza apenas o concorrente indicado na execução atual.
