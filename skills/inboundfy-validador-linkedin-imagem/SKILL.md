---
name: inboundfy-validador-linkedin-imagem
description: Valida imagem de post ou capa de LinkedIn contra brief, texto final, fontes e identidade visual, com relatório de correções. Use quando o pedido citar revisar ou aprovar imagem de post ou capa de LinkedIn, conferindo texto, identidade, miniatura e formato de post ou artigo.
---

# Inboundfy Validador LinkedIn Imagem

Valida o visual e devolve correções à
`inboundfy-especialista-linkedin-imagem`.

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
`context/marca-voz.md`, `context/glossario.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

Conjunto produzido por `inboundfy-especialista-linkedin-imagem`: ID, brief aprovado, texto final e versão, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Inclua licença e crédito para fotografia e autorização de pessoas quando aplicável. Na retomada, receba o relatório anterior e o conjunto corrigido completo.

## Fluxo

1. Leia o [procedimento e modelo de relatório](REFERENCIA.md), as [perguntas do formato](references/preparacao.md) e os contratos de `inboundfy-especialista-linkedin-imagem`. Confira a entrada contra o pacote recebido.
2. Acione `inboundfy-base-validador` e registre o manifesto completo de contextos e fontes. Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado).
3. Inspecione visualmente coerência com o texto, legibilidade em feed,
   quantidade de texto, grafia, identidade e proporção.
4. Reprovando, envie o relatório à
   `inboundfy-especialista-linkedin-imagem` e revalide a peça.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`, com ID, caminho e SHA-256 atuais do digest, resultado dos oito itens, achados localizados e rodada. Entregue-o a `inboundfy-especialista-linkedin-imagem` para correção; uma aprovação corresponde somente à versão conferida.

## Validação

Aprove apenas com formato correto e nenhum achado visual ou factual.

## Responsabilidade do grupo

Confira todos os arquivos de linkedin-imagem e registre cada achado por número da lista espelhada. Devolva correções a `inboundfy-especialista-linkedin-imagem` sem editar a peça. Aplique `inboundfy-base-validador`, todos os contextos, marca e marco A5 antes do veredito.

## Idempotência

Atualize o relatório por rodada; não regenere a imagem.
