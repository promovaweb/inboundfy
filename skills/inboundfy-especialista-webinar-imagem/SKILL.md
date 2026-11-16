---
name: inboundfy-especialista-webinar-imagem
description: Gera thumbnail de webinar com título, data, horário e apresentador confirmados, na identidade visual do projeto. Use quando o pedido citar capa de evento, arte de webinar, thumbnail de aula ao vivo ou imagem da página de inscrição.
---

# Inboundfy Webinar Thumbnail

Skill de imagem para thumbnail quadrada de página de evento (ex.: Lu.ma e
plataformas equivalentes). Reaproveita `inboundfy-base-imagem` como motor.

## Escopo

Cobre apenas a thumbnail. O texto da página/convite é
`inboundfy-especialista-webinar`.

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

- `context/canais.md`: dimensão quadrada exigida pela plataforma de evento.
- `context/pessoas.md`: quando a thumbnail incluir foto ou nome do
  apresentador.
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

Título do evento e data definidos por `inboundfy-especialista-webinar` e o
apresentador quando aplicável.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-webinar-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual. Ao chamar `inboundfy-base-imagem`, informe medidas em pixels, proporção, formato, área segura, peso máximo, texto literal aprovado, ativos oficiais e destino. Receba imagem, alt e manifesto para compor o README.

1. Confirme a dimensão quadrada exigida em `context/canais.md`.
2. Extraia título curto do evento e data para compor a thumbnail.
3. Se o formato do canal incluir foto ou nome do apresentador, confirme a
   informação em `context/pessoas.md` antes de compor.
4. Monte o brief de imagem no formato de `REFERENCIA.md` (com ou sem
   apresentador) e acione `inboundfy-base-imagem` com título, data e, se
   aplicável, apresentador, na dimensão confirmada.
5. Revise contra o checklist de `REFERENCIA.md`: legibilidade do título e
   da data em miniatura, contraste e logo quando o canal exigir.
6. Salve junto ao artefato de texto do mesmo item.

## Encaminhamento obrigatório

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

Antes de considerar a thumbnail pronta, acione
`inboundfy-validador-webinar-imagem`. Em caso de reprovação, corrija os
achados e reenvie a peça até a aprovação.

## Saída

Arquivo de imagem salvo em `97-ativos-finais/webinar/<item>/`.

## Validação

- Dimensão confere exatamente com `context/canais.md`.
- Apresentador, quando presente na peça, confere com `context/pessoas.md`.
- Título e data legíveis em miniatura.
- Aprovação registrada por `inboundfy-validador-webinar-imagem`.

## Responsabilidade do grupo

Produza thumbnail.png e README.md com título, data, horário, fuso e dados confirmados do apresentador. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-webinar-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Não regenere uma thumbnail já existente para o mesmo evento sem pedido
explícito de refação.
