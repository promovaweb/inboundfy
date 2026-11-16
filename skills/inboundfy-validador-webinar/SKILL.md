---
name: inboundfy-validador-webinar
description: Valida agenda, data, horário, fuso, apresentador, oferta e inscrição da peça de Webinar e entrega relatório de correções à especialista pareada. Use quando o pedido trouxer revisão de página de webinar, convite de evento ou inscrição antes da entrega.
---

# Inboundfy Validador Webinar

Valida a copy e devolve correções à `inboundfy-especialista-webinar`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catálogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/pessoas.md`, `context/publico.md`, `context/produtos.md`,
`context/servicos.md`, `context/ofertas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Pacote candidato de `inboundfy-especialista-webinar` no caminho de saída do canal, com brief aprovado, fontes, persona e registros editoriais. Inclua todos os arquivos vinculados e o histórico da rodada anterior, quando houver.

## Fluxo

1. Abra [REFERENCIA.md](REFERENCIA.md): use o checklist espelhado e o relatório preenchido na auditoria do conjunto recebido.
2. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e os
   contratos da produtora.
3. Acione `inboundfy-base-validador`.
4. Confira título, data, apresentador, agenda, oferta, CTA, PASTOR/AIDA e
   testemunhos.
5. Reprovando, envie o relatório à `inboundfy-especialista-webinar` e
   revalide a copy inteira.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com agenda verificável, oferta vigente e nenhum achado.

## Responsabilidade do grupo

Confira copy de página ou convite de webinar com os mesmos itens numerados da produtora. Classifique achados como literal, semântico, estrutural ou visual. Devolva o relatório à `inboundfy-especialista-webinar` sem editar a peça.

## Idempotência

Atualize o relatório por rodada; não altere a copy.
