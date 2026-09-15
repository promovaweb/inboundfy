---
name: inboundfy-validador-newsletter
description: >
  Valida newsletter produzida por inboundfy-especialista-newsletter contra
  brief, fontes, todos os contextos, escrita, proibições, fluidez editorial,
  menções institucionais e contrato do canal.
---

# Inboundfy Validador Newsletter

Valida a edição e devolve correções à `inboundfy-especialista-newsletter`.

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
artefato. O grupo desta skill é **validador**.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/produtos.md`, `context/servicos.md`,
`context/ferramentas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Newsletter candidata, brief e fontes.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Confira prosa contínua, progressão editorial, menções, FAB, CTA e
   frontmatter.
4. Reprovando, envie o relatório à `inboundfy-especialista-newsletter` e
   revalide a edição inteira.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas sem fragmentação artificial, afirmação sem fonte ou achado.

## Responsabilidade do grupo

Leia o asset inteiro contra brief, fontes, contexto e formato. Relate local, regra, fonte e ação; devolva à produtora sem editar o original.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** validador
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o relatório por rodada; não altere a edição.
