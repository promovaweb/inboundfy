---
name: thothfy-especialista-video-imagem
description: >
  Gera thumbnail de vídeo longo (formato típico 1280x720), reaproveitando o
  motor de thothfy-base-imagem com foco em legibilidade e taxa de clique.
---

# Thothfy Video Thumbnail

Skill de imagem para thumbnail de vídeo longo (YouTube e equivalentes).
Reaproveita `thothfy-base-imagem` como motor.

## Fonte da imagem: geração sintética via thothfy-base-imagem

Thumbnail de vídeo é composição gráfica com texto grande, foco visual único
e alto contraste, otimizada para ser lida em miniatura — caso central de
`thothfy-base-imagem`, não de fotografia de banco de imagens.

## Escopo

Cobre apenas a thumbnail. O roteiro é `thothfy-especialista-video`.

## Contexto exigido

- `context/canais.md`: dimensão exata exigida (geralmente `1280x720`).
- O que `thothfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O tema central do vídeo e, quando existir, o gancho de abertura do roteiro
de `thothfy-especialista-video`, para orientar o texto de destaque da
thumbnail.

## Fluxo

1. Confirme a dimensão exigida em `context/canais.md`.
2. Extraia do roteiro ou do brief a frase ou palavra central que resume o
   vídeo em poucas palavras legíveis em miniatura, seguindo os princípios
   de CTR de `REFERENCIA.md`.
3. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `thothfy-base-imagem` com esse texto e a dimensão confirmada, priorizando
   um único foco visual e alto contraste.
4. Revise a peça contra o checklist de CTR de `REFERENCIA.md`, simulando o
   tamanho de miniatura real (bem reduzido): o texto precisa continuar
   legível nesse tamanho.
5. Confira grafia contra `context/glossario.md`.
6. Salve junto ao roteiro do mesmo item.

## Saída

Arquivo de imagem salvo em `97-ativos-finais/video/<item>/`, junto ao
roteiro correspondente.

## Validação

- Dimensão confere exatamente com `context/canais.md`.
- Texto permanece legível em simulação de tamanho de miniatura.
- Grafia confere com `context/glossario.md`.

## Idempotência

Não regenere uma thumbnail já existente para o mesmo item sem pedido
explícito de refação.
