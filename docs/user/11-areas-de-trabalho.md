# Áreas de trabalho

O Inboundfy organiza o trabalho em sete áreas de entrada. Cada área é uma
skill curta que entende o pedido, faz as perguntas de diagnóstico que faltam e
encaminha a tarefa para a skill especializada correspondente. A área não
produz o resultado final. Ela prepara o pacote de entrada e escolhe a rota.

## Por que as áreas existem

`$inboundfy` continua sendo a entrada padrão e resolve a maior parte dos
pedidos. As áreas entram quando o trabalho é recorrente em um domínio e você
quer começar pelo diagnóstico daquele domínio, sem passar pela orquestradora
geral. O ganho aparece na repetição: a área já conhece as perguntas certas,
sabe quais integrações consultar e conhece a sequência comum daquele assunto.

As áreas também reduzem o pedido ambíguo. Um pedido como "preciso vender mais"
pode ser conteúdo, tráfego pago, página, preço ou abordagem comercial. A área
de growth faz a pergunta que separa essas opções antes de qualquer produção.

## As sete áreas

| Área | Skill | Pedidos típicos | Próximo passo |
| --- | --- | --- | --- |
| Conteúdo | `inboundfy-area-conteudo` | pauta, campanha editorial, transcrição, blog, LinkedIn, YouTube, ebook, webinar | `inboundfy-acervo`, `inboundfy-planejamento` ou `inboundfy-producao` |
| SEO | `inboundfy-area-seo` | queda de tráfego, palavra-chave, estrutura do site, schema, links externos, busca em IA | `inboundfy-auditoria-seo`, `inboundfy-seo`, `inboundfy-arquitetura-site` |
| Copy | `inboundfy-area-copy` | texto de página, oferta, posicionamento, revisão, gramática, texto com cara de IA | `inboundfy-copy-redacao`, `inboundfy-copy-editor`, `inboundfy-copy-oferta` |
| Growth | `inboundfy-area-growth` | aquisição, cadastro, ativação, retenção, lançamento, indicação, anúncios | `inboundfy-growth-anuncios`, `inboundfy-growth-lancamento`, `inboundfy-growth-cro` |
| Vendas | `inboundfy-area-vendas` | prospecção, email frio, kit comercial, CRM, preço | `inboundfy-growth-prospeccao`, `inboundfy-growth-email-frio`, `inboundfy-growth-revops` |
| Dados | `inboundfy-area-dados` | métricas, painel, eventos, UTMs, atribuição, teste A/B | `inboundfy-metricas`, `inboundfy-rastreamento-conversao`, `inboundfy-atribuicao` |
| Pesquisa | `inboundfy-area-pesquisa` | entrevista com cliente, personas, concorrentes, estudo de referência | `inboundfy-pesquisa-cliente`, `inboundfy-personas`, `inboundfy-concorrentes` |

## O que cada área pergunta

A área faz de três a cinco perguntas de diagnóstico. Ela só pergunta o que não
está no pedido nem nos arquivos do projeto.

- **Conteúdo:** o que já existe (ideia, campanha, material bruto, brief ou peça
  pronta), qual canal interessa e qual o prazo de publicação.
- **SEO:** qual página ou site, qual sintoma (queda, estagnação, página nova),
  qual termo interessa e se existe acesso ao Search Console.
- **Copy:** qual é o texto, quem lê, qual ação ele precisa provocar e o que já
  foi aprovado sobre voz e oferta.
- **Growth:** em qual etapa o número está pior, quais valores você tem hoje,
  qual orçamento e prazo e qual o tipo de negócio.
- **Vendas:** quem compra, qual o ticket, qual o ciclo de venda e qual CRM já
  está em uso.
- **Dados:** quais perguntas de negócio você quer responder, quais ferramentas
  já estão instaladas e quem pode liberar os acessos.
- **Pesquisa:** qual escolha a pesquisa precisa sustentar, com quem você
  consegue conversar e quais referências já foram estudadas.

## Tabela de rotas resumida

Cada área tem uma tabela completa em `skills/inboundfy-area-*/SKILL.md`. O
resumo abaixo serve para você saber onde o pedido vai cair.

| Situação | Área | Skill que recebe |
| --- | --- | --- |
| Ideia solta sem tese | Conteúdo | `inboundfy-brainstorm` |
| Material bruto que precisa virar peça | Conteúdo | `inboundfy-acervo` |
| Base editorial aprovada sem brief | Conteúdo | `inboundfy-planejamento` |
| Diagnóstico de tráfego orgânico | SEO | `inboundfy-auditoria-seo` |
| Página que precisa de título e headings | SEO | `inboundfy-base-seo` |
| Links externos e menções | SEO | `inboundfy-seo-links-externos` |
| Texto de landing page | Copy | `inboundfy-copy-redacao` |
| Oferta com bônus e garantia | Copy | `inboundfy-copy-oferta` |
| Campanha de mídia paga | Growth | `inboundfy-growth-anuncios` |
| Lançamento de turma ou produto | Growth | `inboundfy-growth-lancamento` |
| Cadastro em diretórios | Growth | `inboundfy-growth-diretorios` |
| Lista de contas para abordar | Vendas | `inboundfy-growth-prospeccao` |
| Cadência de email frio | Vendas | `inboundfy-growth-email-frio` |
| Quais números acompanhar | Dados | `inboundfy-metricas` |
| Eventos e pixels disparando | Dados | `inboundfy-rastreamento-conversao` |
| Estudo do marketing de um concorrente | Pesquisa | `inboundfy-engenharia-reversa` |

## Como chamar

Chame a área pelo nome da skill, com `$` na frente. Escreva o pedido em
linguagem natural:

```text
$inboundfy-area-growth quero vender mais o plano anual, hoje temos 300
assinantes e o cancelamento subiu para 8% ao mês
```

```text
$inboundfy-area-seo o blog parou de crescer em agosto e as páginas de
comparação não aparecem para o termo principal
```

```text
$inboundfy-area-vendas preciso de uma cadência de email para 200 contas de
indústrias de médio porte
```

A área responde com um diagnóstico curto, a rota escolhida, o pacote entregue
à skill da área e a próxima etapa sugerida. Se duas rotas servirem, ela
apresenta as duas com a recomendada primeiro e espera a sua escolha.

## Áreas ativas no projeto

Nem todo projeto usa as sete áreas. O setup pergunta quais áreas o trabalho vai
usar e grava a resposta em `.inboundfy/estrategia.md`. As áreas registradas ali
aparecem como porta de entrada. As demais continuam instaladas e podem ser
chamadas quando o pedido exigir.

## Relação com a orquestradora

A orquestradora `$inboundfy` continua sendo a entrada para pedidos que
atravessam mais de uma área. Um pedido como "quero lançar a turma de outubro,
com blog, anúncios e email" passa por conteúdo, growth e dados. Nele, a
orquestradora coordena o percurso e chama as áreas e as skills de etapa na
ordem necessária.

A regra prática é simples:

- um pedido dentro de um domínio, comece pela área daquele domínio;
- um pedido que atravessa domínios, comece por `$inboundfy`;
- uma peça com brief pronto, chame a especialista do canal.

## O que conferir

- A área escolhida corresponde ao domínio do pedido.
- As perguntas de diagnóstico foram respondidas ou registradas como pendência.
- A skill encaminhada recebeu um pacote com entrada, contexto e objetivo.
- A próxima etapa sugerida aparece na resposta e no arquivo criado.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | pontos de entrada por área e rotas resumidas |
| Autoridade | `skills/inboundfy-area-*/SKILL.md` e `skills/catalogo.json` |
