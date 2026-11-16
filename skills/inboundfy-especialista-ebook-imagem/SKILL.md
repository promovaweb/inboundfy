---
name: inboundfy-especialista-ebook-imagem
description: Gera capa de ebook e imagem OpenGraph com título final, identidade visual e composição derivada. Use quando o pedido citar capa de ebook, capa de material rico, imagem de compartilhamento ou adaptação horizontal da capa.
---

# Inboundfy Ebook Capa

Skill de imagem para capa de ebook e sua imagem OpenGraph (usada em
compartilhamento e preview de link). Reaproveita `inboundfy-base-imagem`
como motor.

## Escopo

Cobre capa e imagem OpenGraph derivada. O texto do ebook é
`inboundfy-especialista-ebook`.

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

- `context/canais.md`: dimensão de capa e de OpenGraph exigidas.
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

Título e subtítulo final do ebook, definidos por `inboundfy-especialista-ebook`.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-ebook-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual. Ao chamar `inboundfy-base-imagem`, informe medidas em pixels, proporção, formato, área segura, peso máximo, texto literal aprovado, ativos oficiais e destino. Receba imagem, alt e manifesto para compor o README.

1. Confirme as dimensões de capa e de OpenGraph em `context/canais.md`,
   usando a tabela de `REFERENCIA.md` como referência de mercado.
2. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `inboundfy-base-imagem` com título e subtítulo do ebook, na dimensão de
   capa.
3. Gere a versão derivada de OpenGraph a partir da mesma composição visual,
   seguindo o exemplo de `REFERENCIA.md`, ajustando apenas a proporção
   quando ela diferir da capa.
4. Revise contra o checklist de `REFERENCIA.md`: título legível em
   miniatura de listagem, contraste e presença de logo quando o canal
   exigir.
5. Confira grafia do título contra `context/glossario.md`.
6. Salve capa e OpenGraph junto ao artefato de texto do ebook.

## Encaminhamento obrigatório

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

Antes de considerar capa e OpenGraph prontos, acione
`inboundfy-validador-ebook-imagem`. Em caso de reprovação, corrija os achados
e reenvie o conjunto até a aprovação.

## Saída

Arquivo de capa e arquivo de OpenGraph, salvos em
`97-ativos-finais/ebook/<item>/`.

## Validação

- Dimensões conferem exatamente com `context/canais.md`.
- Título na capa confere com o título final do ebook e com
  `context/glossario.md`.
- Capa e OpenGraph mantêm a mesma identidade visual.
- Aprovação registrada por `inboundfy-validador-ebook-imagem`.

## Responsabilidade do grupo

Produza capa.png, opengraph.png e README.md com título final e relação entre derivados. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-ebook-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Não regenere uma capa já existente para o mesmo ebook sem pedido explícito
de refação.
