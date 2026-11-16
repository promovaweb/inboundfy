---
name: inboundfy-validador-ebook-imagem
description: Valida capa de ebook e OpenGraph contra brief, texto final, fontes e identidade visual, com relatório de correções. Use quando o pedido citar revisar ou aprovar capa de ebook e OpenGraph, conferindo título, subtítulo, capa e derivado OpenGraph.
---

# Inboundfy Validador Ebook Imagem

Valida os visuais e devolve correções à
`inboundfy-especialista-ebook-imagem`.

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

Todos os Markdown de `context/`, com atenção a `context/canais.md`,
`context/glossario.md`, `context/marca-voz.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

Conjunto produzido por `inboundfy-especialista-ebook-imagem`: ID, brief aprovado, texto final e versão, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Inclua licença e crédito para fotografia e autorização de pessoas quando aplicável. Na retomada, receba o relatório anterior e o conjunto corrigido completo.

## Fluxo

1. Leia o [procedimento e modelo de relatório](REFERENCIA.md), as [perguntas do formato](references/preparacao.md) e os contratos de `inboundfy-especialista-ebook-imagem`. Confira a entrada contra o pacote recebido.
2. Acione `inboundfy-base-validador` e registre o manifesto completo de contextos e fontes. Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado).
3. Inspecione visualmente título, hierarquia, miniatura, identidade,
   consistência entre formatos e dimensões.
4. Reprovando, envie o relatório à `inboundfy-especialista-ebook-imagem` e
   revalide o conjunto.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`, com ID, caminho e SHA-256 atuais do digest, resultado dos oito itens, achados localizados e rodada. Entregue-o a `inboundfy-especialista-ebook-imagem` para correção; uma aprovação corresponde somente à versão conferida.

## Validação

Aprove apenas com capa e OpenGraph coerentes e sem achado.

## Responsabilidade do grupo

Confira todos os arquivos de ebook-imagem e registre cada achado por número da lista espelhada. Devolva correções a `inboundfy-especialista-ebook-imagem` sem editar a peça. Aplique `inboundfy-base-validador`, todos os contextos, marca e marco A5 antes do veredito.

## Idempotência

Atualize o relatório por rodada; não regenere os visuais.
