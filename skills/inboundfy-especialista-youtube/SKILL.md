---
name: inboundfy-especialista-youtube
description: Adapta um acervo aprovado para roteiro, título, descrição e CTA de YouTube, alinhando formato, persona, voz e publicação.
---

# Especialista YouTube

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/estrategia.md`, o acervo e o template da
peça dentro de `canais/youtube/`.

## Entrada esperada

ID do acervo, base editorial, persona, duração, formato e objetivo do vídeo.

## Fluxo

Crie promessa verificável, título, abertura, roteiro, indicações de gravação,
descrição, capítulos quando úteis, CTA e referências. Não transforme hipótese
em afirmação.

## Saída

README final em `canais/youtube/` com frontmatter, roteiro, metadados e fontes.

## Validação

Acione `inboundfy-validador-youtube` e confira voz, fontes, persona, título,
descrição, CTA e consistência do roteiro.

## Idempotência

Edite a pasta da peça existente quando o pedido trouxer o mesmo ID.
