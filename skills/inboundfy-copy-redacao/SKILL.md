---
name: inboundfy-copy-redacao
description: Escreve copy nova de páginas, emails, posts, roteiros, títulos, CTAs e microcopy a partir do acervo, da oferta, da persona e da voz, com marcos anti-slop. Use quando a pessoa pedir para escrever, criar ou redigir uma landing page, página de vendas, email ou qualquer texto que ainda não existe.
---

# Redação de copy

Escreve texto novo de marketing: landing page, página de produto, home,
página de preços, email, post, roteiro, título, subtítulo, CTA e microcopy.
A skill parte de material confirmado (acervo, oferta, persona, voz) e entrega
uma peça pronta para a validadora do canal. Ela não revisa texto existente
(`inboundfy-copy-edicao`), não define a oferta (`inboundfy-copy-oferta`) e
não decide o posicionamento (`inboundfy-copy-posicionamento`).

## Quando usar e quando não usar

| Situação | Skill certa |
| --- | --- |
| Não existe texto e a peça precisa ser escrita | `inboundfy-copy-redacao` |
| Já existe texto e o pedido é melhorar, cortar ou atualizar | `inboundfy-copy-edicao` |
| O texto existe, mas está difícil de ler | `inboundfy-copy-simplificar` |
| A oferta ainda não tem preço, entrega, garantia ou condição definidos | `inboundfy-copy-oferta` antes |
| Não está claro para quem o produto serve ou contra o que compete | `inboundfy-copy-posicionamento` antes |
| A peça pertence a um canal com especialista própria (blog, email, LinkedIn) | especialista do canal, usando esta skill como apoio de redação |
| O objetivo é teste de variações de uma página já publicada | `inboundfy-experimentacao` com variações escritas aqui |

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 4 do fluxo, ao montar a
arquitetura da peça. O grupo desta skill é **copy**.

## Contexto exigido

Sem `.inboundfy/framework/VERSAO.md` ou `.inboundfy/fontes-projeto.md`,
acione `inboundfy-setup` e pare.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/estruturas-proibidas.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/aprendizado.md` e `.inboundfy/pipeline.md`. Para preço,
condição e entrega, leia `.inboundfy/context/ofertas.md`,
`.inboundfy/context/produtos.md` ou `.inboundfy/context/servicos.md`. Para
prova social, leia `.inboundfy/context/depoimentos.json`.

Para uma peça baseada no acervo, leia `bruto.md`, `processado.md`, `faq.md`,
`base-editorial.md`, `pesquisa.md` e `estrategia.md` do item.

Quando faltar persona, preço ou condição, pare e acione a skill de contexto
correspondente (`inboundfy-contexto-publico`, `inboundfy-contexto-oferta`).
Não preencha a lacuna com suposição.

## Entrada esperada

Receba objetivo, canal, formato, uma ou mais personas, CTA, data e IDs das
fontes. Não redija uma peça final sem saber qual persona receberá a mensagem
e qual próxima ação deve orientar.

Quando existirem, use como insumo a ficha de oferta de
`inboundfy-copy-oferta`, o documento de posicionamento de
`inboundfy-copy-posicionamento` e o diagnóstico persuasivo de
`inboundfy-copy-persuasao`. Eles definem promessa, mensagem central e
princípios aplicáveis.

## Perguntas de diagnóstico

Responda antes de escrever. Se uma resposta depende do usuário, pergunte.

1. Qual ação única a peça deve provocar (cadastro, teste grátis, orçamento
   pelo WhatsApp, compra via Pix, resposta ao email)?
2. Em qual nível de consciência a persona chega: não sabe do problema, sabe
   do problema, conhece soluções, conhece o produto ou está pronta para comprar?
3. De onde vem o tráfego: busca orgânica, anúncio, email da base, indicação,
   post social? A origem define a promessa que precisa ser cumprida no topo.
4. Qual é a objeção que mais impede a ação hoje?
5. Qual prova real existe: número de clientes, depoimento com consentimento,
   caso, demonstração, selo, tempo de mercado?
6. Quais palavras a persona usa para descrever o problema (entrevistas,
   tickets, avaliações, mensagens de WhatsApp registradas no acervo)?

## Fluxo

1. Confirme a seleção da persona e o canal ativo com o menu de
   [Interação e handoff](../_shared/03-interacao-e-handoff.md).
2. Responda às perguntas de diagnóstico e extraia do acervo a tese, a
   transformação, a prova, o exemplo, a objeção e o próximo passo.
3. Escolha um ângulo compatível com a estratégia. Não empilhe todos os pontos
   do acervo numa única peça. Apresente três ângulos materialmente diferentes,
   com o recomendado primeiro, e aguarde a escolha.
   Se o objetivo incluir compartilhamento, consulte a seção STEPPS de
   `.inboundfy/framework/ESTRUTURAS-PERSUASIVAS.md` e registre no brief os
   princípios pertinentes e sua aplicação. Use um ou mais conforme o material,
   sem promessa de viralização nem exigência de aplicar todos.
4. Monte a arquitetura antes da prosa com o template de
   [REFERENCIA.md](REFERENCIA.md): abertura, desenvolvimento, prova,
   tratamento de objeção e CTA. Para páginas, escolha a sequência de seções em
   [references/estrutura-de-pagina.md](references/estrutura-de-pagina.md).
   Quando houver objetivo comercial explícito, escolha AIDA, PAS, PASTOR ou
   FAB conforme `.inboundfy/framework/ESTRUTURAS-PERSUASIVAS.md`.
5. Escreva três a cinco opções de título e de CTA com
   [references/titulos-e-ctas.md](references/titulos-e-ctas.md) e escolha uma
   com o usuário.
6. Para peça longa, execute `inboundfy-anti-slop` no marco A4 sobre o outline,
   a abertura e a primeira unidade substancial antes de expandir o texto.
7. Escreva na voz do projeto, usando termos do dicionário e linguagem da
   persona. Aplique `.inboundfy/framework/ESCRITA.md` em cada bloco. Não
   invente informação para preencher lacunas: marque como pendência.
8. Depois de escrever a peça completa, acione `inboundfy-copy-editor`, aplique
   `inboundfy-anti-slop` no marco A5 e envie à skill validadora do canal.
9. Salve a peça no diretório padronizado do canal, com frontmatter, IDs,
   anotações de seção e checklist de revisão.

## Saída

Peça pronta para revisão no formato definido pelo canal, salva em
`canais/<canal>/<id>-<AAAA-MM-DD>-<slug>/README.md` ou no caminho indicado
pela especialista do canal. O arquivo aponta para acervo, base editorial,
pesquisa, personas, voz, oferta e estratégia, e inclui:

- a copy organizada por seção;
- anotação curta por seção explicando a escolha (objeção tratada, prova usada);
- duas alternativas para título e CTA;
- title e description quando a peça for página indexável (via `inboundfy-base-seo`);
- pendências de fato, prova ou aprovação.

## Validação

A peça é reprovada quando:

- o título promete algo que a página não entrega ou que a fonte não confirma;
- há mais de uma ação principal concorrendo no mesmo bloco;
- benefício aparece sem a característica ou o mecanismo que o sustenta;
- número, depoimento, selo ou prazo não tem fonte ligada;
- a peça usa termo vetado em `.inboundfy/context/proibicoes.md` ou estrutura
  listada em `.inboundfy/context/estruturas-proibidas.md`;
- o registro não mostra A4 (peça longa) e A5 antes do handoff.

Na reprovação, corrija na própria skill e repita A5. Se faltar fato, devolva a
pergunta ao usuário e mantenha o estado `rascunho`.

## Idempotência

Ao revisar uma peça existente, preserve o ID e os vínculos. Crie nova versão
somente quando o usuário pedir outro ângulo, canal ou peça. Rodar a skill de
novo sobre o mesmo brief não troca título ou CTA já aprovados.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** brief, acervo, persona, voz e canal;
- **transformação:** redação da peça a partir da arquitetura aprovada;
- **saída:** copy pronta para revisão ou uso pela skill de canal;
- **handoff:** `inboundfy-copy-editor`, validadora do canal ou especialista do canal.
