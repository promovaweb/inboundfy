---
name: inboundfy-copywriting
description: Produz copy de marketing baseada no acervo, na oferta, na persona, na voz e no objetivo do canal, com revisão anti-slop integrada.
---

# Copywriting do Inboundfy

Use para criar páginas, artigos, posts, emails, roteiros, CTAs, títulos,
descrições e adaptações de uma mesma ideia para canais diferentes.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/inbound.md`,
`.inboundfy/estrategia.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md` e `.inboundfy/pipeline.md`.
Para uma peça baseada no acervo, leia `bruto.md`, `processado.md`, `faq.md`,
`base-editorial.md`, `pesquisa.md` e `estrategia.md` do item.

## Entrada esperada

Receba objetivo, canal, formato, uma ou mais personas, CTA, data e IDs das
fontes. Não redija uma peça final sem saber para quem ela fala e qual próxima
ação deve orientar.

## Fluxo

1. Confirme a seleção da persona e o canal ativo.
2. Extraia do acervo a tese, a transformação, a prova, o exemplo, a objeção e
   o próximo passo.
3. Escolha um ângulo compatível com a estratégia. Não empilhe todos os pontos
   do acervo numa única peça.
4. Monte a arquitetura antes da prosa: abertura, desenvolvimento, prova,
   tratamento de objeção e CTA.
5. Escreva na voz do projeto, usando termos do dicionário e linguagem da
   persona. Não invente informação para preencher lacunas.
6. Aplique `inboundfy-anti-slop` e a skill validadora do canal.
7. Salve a peça no diretório padronizado do canal, com frontmatter, IDs e
   checklist de revisão.

## Saída

Entregue uma peça pronta para revisão no formato definido pelo canal. O
arquivo precisa apontar para acervo, base editorial, pesquisa, personas,
voz e estratégia.

## Validação

Confirme tese clara, promessa sustentada, CTA específico, adaptação real à
persona, aderência à voz, termos aprovados e estrutura do canal. Faça uma
segunda leitura depois da revisão anti-slop.

## Idempotência

Ao revisar uma peça existente, preserve o ID e os vínculos. Crie nova versão
somente quando o usuário pedir outro ângulo, canal ou peça.
