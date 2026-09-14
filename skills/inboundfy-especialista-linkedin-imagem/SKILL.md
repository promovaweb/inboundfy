---
name: inboundfy-especialista-linkedin-imagem
description: >
  Gera imagem de post e capa de artigo de LinkedIn, reaproveitando o motor
  de inboundfy-base-imagem com a proporção exigida pelo canal.
---

# Inboundfy LinkedIn Imagem

Skill de imagem para LinkedIn. Reaproveita `inboundfy-base-imagem` como
motor de composição gráfica.

## Fonte da imagem: geração sintética via inboundfy-base-imagem

Imagem de post de LinkedIn normalmente carrega texto/dado em destaque sobre
fundo de marca; um caso de composição gráfica, não de fotografia de
contexto. Por isso esta skill usa `inboundfy-base-imagem` como motor. Quando
o brief pedir explicitamente uma foto real (ex.: bastidor de evento), use
busca de banco de fotos em vez desta skill, seguindo o padrão de
`inboundfy-especialista-blog-imagem`.

## Escopo

Cobre a imagem que acompanha post nativo e a capa de artigo longo de
LinkedIn. O texto é `inboundfy-especialista-linkedin`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/canais.md`: proporção exigida (post e capa de artigo costumam ter
  proporções diferentes; confirme cada uma).
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O texto final já escrito por `inboundfy-especialista-linkedin` e o formato (post ou
artigo) do brief.

## Fluxo

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

## Idempotência

Não regenere uma imagem já existente para o mesmo item sem pedido explícito
de refação.
