---
name: inboundfy-validador-webinar-imagem
description: >
  Valida thumbnail produzida por inboundfy-especialista-webinar-imagem contra
  copy, brief, todos os contextos, título, data, apresentador, identidade,
  legibilidade e dimensões antes da entrega.
---

# Inboundfy Validador Webinar Imagem

Valida a thumbnail e devolve correções à
`inboundfy-especialista-webinar-imagem`.

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

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/pessoas.md`, `context/glossario.md`, `context/marca-voz.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

## Entrada esperada

Thumbnail, copy aprovada, brief e identidade visual.

## Fluxo

1. Leia `REFERENCIA.md` e os contratos da produtora.
2. Acione `inboundfy-base-validador`.
3. Inspecione visualmente título, data, apresentador, hierarquia, miniatura,
   grafia, identidade e dimensões.
4. Reprovando, envie o relatório à
   `inboundfy-especialista-webinar-imagem` e revalide a thumbnail.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com todas as informações confirmadas e legíveis.

## Responsabilidade do grupo

Leia o asset inteiro contra brief, fontes, contexto e formato. Relate local, regra, fonte e ação; devolva à produtora sem editar o original.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** validador
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o relatório por rodada; não regenere a thumbnail.
