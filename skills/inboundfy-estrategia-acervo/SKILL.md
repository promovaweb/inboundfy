---
name: inboundfy-estrategia-acervo
description: Avalia como um item do acervo pode alimentar canais, formatos, ângulos e reaproveitamentos dentro da estratégia de inbound marketing do projeto.
---

# Estratégia do acervo

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `base-editorial.md`, `pesquisa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md` e o índice de peças.

## Entrada esperada

Um acervo processado com base editorial pronta. Considere somente canais
marcados pelo usuário.

## Fluxo

1. Liste blog, email, LinkedIn, Instagram, Substack e YouTube conforme a
   seleção do projeto.
2. Para cada canal, proponha formato, ângulo, persona, etapa da jornada,
   objetivo, CTA, frequência e relação com outras peças.
3. Permita várias oportunidades no mesmo canal quando houver ângulos distintos.
4. Indique reaproveitamento, adaptação e dependências de pesquisa ou design.
5. Registre tudo em `estrategia.md` dentro do acervo. Confira a proposta com
   `inboundfy-anti-slop` antes de entregar os ângulos e CTAs.

## Saída

Uma matriz de possibilidades com prioridade sugerida e perguntas para o usuário
escolher o próximo uso.

## Validação

Nenhuma possibilidade usa canal inativo, afirmação sem fonte ou persona ausente.

## Idempotência

Atualize a matriz do item e preserve oportunidades já escolhidas.
