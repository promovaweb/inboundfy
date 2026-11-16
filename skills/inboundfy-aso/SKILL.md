---
name: inboundfy-aso
description: Entrega auditoria e pacote de metadados, roteiros visuais, respostas a avaliações e testes para páginas de aplicativos. Use quando o pedido falar em ASO, App Store, Google Play, buscas na loja, screenshots ou conversão em instalações.
---

# ASO do Inboundfy

ASO (App Store Optimization) é o trabalho de fazer a página de um aplicativo
aparecer nas buscas das lojas e convencer quem a visita a instalar. Esta
skill audita a página atual, pesquisa os termos que a persona digita na loja,
escreve o pacote de metadados de cada loja, orienta screenshots, ícone e
vídeo, organiza a resposta a avaliações e planeja testes nativos.

Ela não altera o aplicativo, não cria campanha paga de instalação (papel de
`inboundfy-growth-anuncios`) e não desenha as imagens finais (papel de
`inboundfy-base-imagem` ou do time de design). Nenhuma função entra no texto
da loja sem constar de `.inboundfy/context/produtos.md`.

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| Melhorar título, subtítulo, palavras-chave e descrição da loja | `inboundfy-aso` |
| Auditar a página do app e comparar com concorrentes | `inboundfy-aso` |
| Planejar screenshots, ícone e vídeo da loja | `inboundfy-aso` |
| Responder avaliações e subir a nota média | `inboundfy-aso` |
| Testar variações da página com os recursos nativos das lojas | `inboundfy-aso` |
| Landing page do app no site | `inboundfy-growth-cro` |
| Anúncios de instalação (Apple Search Ads, Google App Campaigns) | `inboundfy-growth-anuncios` |
| Primeira experiência depois de instalar | `inboundfy-growth-onboarding` |
| Gerar a arte dos screenshots | `inboundfy-base-imagem` |
| Medir instalações por origem | `inboundfy-metricas` |

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O
trabalho segue o contrato compartilhado e usa a referência específica desta
pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`.
Quando um deles faltar ou a configuração estiver incompleta, apresente o
alerta canônico e acione `inboundfy-setup` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` e estes arquivos:

- `.inboundfy/context/produtos.md`: funções confirmadas, planos e preços do
  app. É a única fonte do que o texto da loja pode prometer.
- `.inboundfy/context/empresa.md` e `.inboundfy/context/ofertas.md`.
- `.inboundfy/context/publico.md`: como a persona descreve o problema.
- `.inboundfy/context/concorrentes.md`: apps que disputam as mesmas buscas.
- `.inboundfy/context/links.md`: URLs das páginas nas lojas, site e suporte.
- `.inboundfy/context/depoimentos.json`: prova social com consentimento.
- `.inboundfy/context/glossario.md`, `.inboundfy/context/marca-voz.md`,
  `.inboundfy/context/proibicoes.md` e `.inboundfy/context/aprendizado.md`.
- `.inboundfy/estrategia.md`, `.inboundfy/pipeline.md`, o acervo
  relacionado e `.inboundfy/fontes-projeto.md`.

Consulte `.inboundfy/framework/` para regras de escrita e Markdown. Quando a
lista de funções estiver vazia ou desatualizada, pare e acione
`inboundfy-contexto-oferta`.

## Entrada esperada

- URL da página na App Store, no Google Play ou nas duas.
- Persona principal e país ou idioma de cada página (pt-BR por padrão).
- Objetivo: mais impressões na busca, mais conversão da página, nota melhor.
- Dados do App Store Connect e do Google Play Console, quando disponíveis.
- ID do acervo quando houver material de origem (lançamento, nova versão).

Separe fatos confirmados, hipótese de trabalho e pergunta aberta.

## Perguntas de diagnóstico

1. Que palavras a persona digita na loja quando procura um app como este?
2. Em quais buscas o app aparece hoje e com qual posição?
3. Quantas pessoas visitam a página e quantas instalam?
4. Qual a nota média e o que dizem as avaliações das últimas oito semanas?
5. Os dois primeiros screenshots mostram o benefício principal sem precisar
   ler o resto?
6. Que funções novas foram lançadas e já constam de `produtos.md`?
7. Quais três concorrentes aparecem acima nas mesmas buscas?
8. A página está traduzida e adaptada para pt-BR, com preço em reais?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha o modo: auditoria, pacote de
   metadados, ativos visuais, avaliações ou teste.
2. Responda às perguntas de diagnóstico com o contexto e os dados das
   consoles. Pergunte à pessoa só o que muda a saída.
3. Audite a página atual e até três concorrentes com a pontuação de
   [REFERENCIA.md](REFERENCIA.md).
4. Pesquise termos da loja e monte o pacote de metadados com
   [metadados das lojas](references/metadados-das-lojas.md). Confira os
   limites de caracteres na documentação vigente de cada loja e registre a
   data da consulta.
5. Confira cada função citada contra `.inboundfy/context/produtos.md`. Função
   sem registro sai do texto e vira pendência.
6. Planeje screenshots, ícone, vídeo, avaliações e testes com
   [ativos visuais, avaliações e testes](references/ativos-visuais-avaliacoes-e-testes.md).
7. Apresente três abordagens de posicionamento na loja, com a recomendada
   primeiro. Aguarde a escolha da pessoa.
8. Revise o texto com `inboundfy-anti-slop`, `inboundfy-copy-edicao`, voz,
   persona, dicionário e proibições.
9. Registre caminho, ID, fontes, alcance da regra e pendências. Peça
   confirmação antes de alterar uma configuração global.
10. Entregue o handoff: time de produto ou quem publica nas consoles,
    `inboundfy-base-imagem` para a arte, `inboundfy-experimentacao` para
    leitura do teste, `inboundfy-metricas` para acompanhar.

Antes do handoff visual, informe dimensões, proporção, formato, área segura,
texto aprovado e ativos oficiais de marca. Para leitura do teste, entregue
visitantes, instalações e período por variante a `inboundfy-experimentacao`.

## Saída

Salve em `acervo/<id>-<data>-<slug>/aso.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém, conforme o modo:

- auditoria pontuada da página e dos concorrentes;
- lista de termos da loja com prioridade;
- pacote de metadados por loja, com contagem de caracteres;
- roteiro de screenshots, ícone e vídeo;
- modelos de resposta a avaliações;
- plano de teste nativo com hipótese e métrica;
- fontes, pendências e próxima skill.

## Validação

O artefato só segue quando:

- cada campo respeita o limite de caracteres da loja, com contagem anotada;
- nenhuma palavra se repete entre título, subtítulo e campo de palavras-chave
  da Apple;
- toda função citada consta de `produtos.md`;
- preço, prazo e nota citados têm fonte e data;
- os dois primeiros screenshots comunicam o benefício principal;
- o texto não usa nome de concorrente, termo enganoso ou promessa que viole
  as diretrizes das lojas;
- voz, persona, proibições e dicionário foram aplicados.

Quando um item falha, corrija. Quando depende de dado do produto, devolva a
pergunta e mantenha o estado `revisao`.

## Idempotência

Atualize o mesmo `aso.md` do ID quando ele já existir. Preserve a versão
publicada dos metadados e o histórico de testes; cada nova versão entra com
data. Não sobrescreva texto aprovado nem resultado de teste sem pedido
explícito.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** URL da loja, persona e ID do acervo ligado ao pedido;
- **transformação:** auditoria, metadados, ativos, avaliações ou teste;
- **saída:** `aso.md` no acervo, com pacote por loja e plano de teste;
- **handoff:** publicação nas consoles, `inboundfy-base-imagem`,
  `inboundfy-experimentacao` ou `inboundfy-metricas`, com estado e
  pendências.
