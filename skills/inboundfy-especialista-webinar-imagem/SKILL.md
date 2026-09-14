---
name: inboundfy-especialista-webinar-imagem
description: >
  Gera thumbnail quadrada de evento/webinar, reaproveitando o motor de
  inboundfy-base-imagem com a identidade visual do usuário.
---

# Inboundfy Webinar Thumbnail

Skill de imagem para thumbnail quadrada de página de evento (ex.: Lu.ma e
plataformas equivalentes). Reaproveita `inboundfy-base-imagem` como motor.

## Fonte da imagem: geração sintética via inboundfy-base-imagem

Thumbnail de evento é composição gráfica com título do evento, data e,
quando aplicável, foto do apresentador; combinação de texto e identidade
visual de marca, caso de `inboundfy-base-imagem`.

## Escopo

Cobre apenas a thumbnail. O texto da página/convite é
`inboundfy-especialista-webinar`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/canais.md`: dimensão quadrada exigida pela plataforma de evento.
- `context/pessoas.md`: quando a thumbnail incluir foto ou nome do
  apresentador.
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

Título do evento e data, definidos por `inboundfy-especialista-webinar`, e o
apresentador quando aplicável.

## Fluxo

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

## Idempotência

Não regenere uma thumbnail já existente para o mesmo evento sem pedido
explícito de refação.
