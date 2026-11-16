---
name: inboundfy-especialista-linkedin-imagem
description: Gera imagem de post e capa de artigo de LinkedIn com texto final, identidade visual e proporção do formato. Use quando o pedido citar card para LinkedIn, arte de post, capa de artigo ou destaque visual de um dado aprovado.
---

# Inboundfy LinkedIn Imagem

Skill de imagem para LinkedIn. Reaproveita `inboundfy-base-imagem` como
motor de composição gráfica.

## Escopo

Cobre a imagem que acompanha post nativo e a capa de artigo longo de
LinkedIn. O texto é `inboundfy-especialista-linkedin`.

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

- `context/canais.md`: proporção exigida (post e capa de artigo costumam ter
  proporções diferentes; confirme cada uma).
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

O texto final já escrito por `inboundfy-especialista-linkedin` e o formato (post ou
artigo) do brief.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-linkedin-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual. Ao chamar `inboundfy-base-imagem`, informe medidas em pixels, proporção, formato, área segura, peso máximo, texto literal aprovado, ativos oficiais e destino. Receba imagem, alt e manifesto para compor o README.

1. Confirme a proporção exigida em `context/canais.md` para o formato
   indicado (post ou capa de artigo), usando a tabela de `REFERENCIA.md`
   como referência de mercado.
2. Extraia do texto final o dado ou frase central a destacar visualmente.
3. Monte o brief de imagem no formato de `REFERENCIA.md` (exemplos para
   post e para capa de artigo) e acione `inboundfy-base-imagem` com o texto
   a compor e a proporção confirmada.
4. Revise a peça contra o checklist específico de `REFERENCIA.md`:
   legibilidade do texto no feed (tamanho pequeno de visualização),
   contraste e presença de logo quando o canal exigir.
5. Salve junto ao artefato de texto do mesmo item.

## Encaminhamento obrigatório

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

Antes de considerar a imagem pronta, acione
`inboundfy-validador-linkedin-imagem`. Em caso de reprovação, corrija os
achados e reenvie a peça até a aprovação.

## Saída

Arquivo de imagem salvo em `97-ativos-finais/linkedin/<item>/`, junto ao
texto correspondente.

## Validação

- Proporção confere exatamente com `context/canais.md` para o formato usado.
- Texto da imagem é legível em miniatura de feed.
- Identidade visual confere com a definição do usuário.
- Aprovação registrada por `inboundfy-validador-linkedin-imagem`.

## Responsabilidade do grupo

Produza post.png ou capa-artigo.png e README.md ligado ao texto correspondente. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-linkedin-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Não regenere uma imagem já existente para o mesmo item sem pedido explícito
de refação.
