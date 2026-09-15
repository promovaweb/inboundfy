---
name: inboundfy-copy-redacao
description: Produz copy de marketing baseada no acervo, na oferta, na persona, na voz e no objetivo do canal, com revisão anti-slop integrada.
---

# Copywriting do Inboundfy

Use para criar páginas, artigos, posts, emails, roteiros, CTAs, títulos,
descrições e adaptações de uma mesma ideia para canais diferentes.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **copy**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e `.inboundfy/pipeline.md`.
Para uma peça baseada no acervo, leia `bruto.md`, `processado.md`, `faq.md`,
`base-editorial.md`, `pesquisa.md` e `estrategia.md` do item.

## Entrada esperada

Receba objetivo, canal, formato, uma ou mais personas, CTA, data e IDs das
fontes. Não redija uma peça final sem saber qual persona receberá a mensagem e qual próxima
ação deve orientar.

## Fluxo

1. Confirme a seleção da persona e o canal ativo.
2. Extraia do acervo a tese, a transformação, a prova, o exemplo, a objeção e
   o próximo passo.
3. Escolha um ângulo compatível com a estratégia. Não empilhe todos os pontos
   do acervo numa única peça.
4. Monte a arquitetura antes da prosa: abertura, desenvolvimento, prova,
   tratamento de objeção e CTA.
5. Para peça longa, execute `inboundfy-anti-slop` no marco A4 sobre o outline,
   a abertura e a primeira unidade substancial antes de expandir o texto.
6. Escreva na voz do projeto, usando termos do dicionário e linguagem da
   persona. Não invente informação para preencher lacunas.
7. Depois de escrever a peça completa, aplique `inboundfy-anti-slop` no marco
   A5 e a skill validadora do canal.
8. Salve a peça no diretório padronizado do canal, com frontmatter, IDs e
   checklist de revisão.

## Saída

Entregue uma peça pronta para revisão no formato definido pelo canal. O
arquivo precisa apontar para acervo, base editorial, pesquisa, personas,
voz e estratégia.

## Validação

Confirme tese clara, promessa confirmada, CTA específico, adaptação real à
persona, aderência à voz, termos aprovados e estrutura do canal. Registre A4
quando a peça for longa e A5 antes do handoff.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Ao revisar uma peça existente, preserve o ID e os vínculos. Crie nova versão
somente quando o usuário pedir outro ângulo, canal ou peça.
