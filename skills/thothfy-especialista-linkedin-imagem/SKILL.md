---
name: thothfy-especialista-linkedin-imagem
description: >
  Gera imagem de post e capa de artigo de LinkedIn, reaproveitando o motor
  de thothfy-base-imagem com a proporção exigida pelo canal.
---

# Thothfy LinkedIn Imagem

Skill de imagem para LinkedIn. Reaproveita `thothfy-base-imagem` como
motor de composição gráfica.

## Fonte da imagem: geração sintética via thothfy-base-imagem

Imagem de post de LinkedIn normalmente carrega texto/dado em destaque sobre
fundo de marca — um caso de composição gráfica, não de fotografia de
contexto. Por isso esta skill usa `thothfy-base-imagem` como motor. Quando
o brief pedir explicitamente uma foto real (ex.: bastidor de evento), use
busca de banco de fotos em vez desta skill, seguindo o padrão de
`thothfy-especialista-blog-imagem`.

## Escopo

Cobre a imagem que acompanha post nativo e a capa de artigo longo de
LinkedIn. O texto é `thothfy-especialista-linkedin`.

## Contexto exigido

- `context/canais.md`: proporção exigida (post e capa de artigo costumam ter
  proporções diferentes — confirme cada uma).
- O que `thothfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O texto final já escrito por `thothfy-especialista-linkedin` e o formato (post ou
artigo) do brief.

## Fluxo

1. Confirme a proporção exigida em `context/canais.md` para o formato
   indicado (post ou capa de artigo), usando a tabela de `REFERENCIA.md`
   como referência de mercado.
2. Extraia do texto final o dado ou frase central a destacar visualmente.
3. Monte o brief de imagem no formato de `REFERENCIA.md` (exemplos para
   post e para capa de artigo) e acione `thothfy-base-imagem` com o texto
   a compor e a proporção confirmada.
4. Revise a peça contra o checklist específico de `REFERENCIA.md`:
   legibilidade do texto no feed (tamanho pequeno de visualização),
   contraste e presença de logo quando o canal exigir.
5. Salve junto ao artefato de texto do mesmo item.

## Saída

Arquivo de imagem salvo em `97-ativos-finais/linkedin/<item>/`, junto ao
texto correspondente.

## Validação

- Proporção confere exatamente com `context/canais.md` para o formato usado.
- Texto da imagem é legível em miniatura de feed.
- Identidade visual confere com a definição do usuário.

## Idempotência

Não regenere uma imagem já existente para o mesmo item sem pedido explícito
de refação.
