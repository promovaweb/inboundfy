# Tutorial: medição de ponta a ponta

Este tutorial monta o plano de métricas de uma loja, confere o rastreamento,
lê a atribuição e desenha um teste A/B. A loja do exemplo é fictícia.

A empresa do exemplo é a **Verde Casa**, loja online de plantas em São Paulo.
O ticket médio é R$ 180,00. A loja vende por site próprio, Instagram e
marketplace. O time tem três pessoas e ninguém acompanha número de perto.

## Passo 1: plano de métricas

```text
$inboundfy-area-dados quero saber quais números acompanhar. Hoje só olho o
faturamento no fim do mês.
```

Perguntas da área:

1. Quais perguntas de negócio precisam de resposta? Vendas por canal, custo de
   aquisição ou recompra?
2. Quais ferramentas já estão instaladas?
3. Quem pode liberar acesso ao GA4, ao gerenciador de tags e à conta de
   anúncios?
4. Com que frequência você vai olhar esse número?

Respostas:

```text
Quero saber de onde vem a venda e se o cliente volta a comprar. Temos GA4 e
Tag Manager, mas não sei se está tudo certo. Eu libero os acessos. Vou olhar
toda semana.
```

O plano é gravado em dois arquivos:

```text
.inboundfy/metricas/plano-de-medicao.md
.inboundfy/metricas/eventos.md
```

Trecho de `plano-de-medicao.md`:

```markdown
## Árvore de métricas

| Pergunta | Métrica | Fórmula | Fonte | Frequência |
| --- | --- | --- | --- | --- |
| De onde vem a venda? | receita por canal | soma de pedidos pagos por origem | GA4 + planilha de pedidos | semanal |
| A aquisição se paga? | custo de aquisição por pedido | investimento em mídia / pedidos pagos | conta de anúncios + pedidos | semanal |
| O cliente volta? | recompra em 90 dias | clientes com 2 pedidos / clientes com 1 pedido | base de pedidos | mensal |

## Limites

Pedido cancelado não entra na receita. Visita de robô é excluída pela
segmentação padrão do GA4.
```

## Passo 2: rastreamento de conversão

```text
$inboundfy-area-dados confira se a compra e o cadastro na newsletter estão
chegando no GA4 com o valor do pedido
```

A skill de rastreamento lê as integrações registradas e grava:

```text
.inboundfy/metricas/rastreamento-0019.md
```

Trecho do arquivo:

```markdown
## Dicionário de eventos

| Evento | Momento | Destino | Parâmetros |
| --- | --- | --- | --- |
| `view_item` | abertura da página de produto | GA4 | id do produto, categoria |
| `add_to_cart` | clique em comprar | GA4 | id do produto, valor |
| `purchase` | página de obrigado | GA4, Meta CAPI | valor, moeda, id do pedido |
| `newsletter_signup` | envio do formulário do rodapé | GA4 | origem |

## Achados

1. `purchase` dispara duas vezes na página de obrigado quando o navegador
   recarrega. O valor do pedido dobra no relatório.
2. O formulário do rodapé envia sem evento. O cadastro não aparece em nenhum
   relatório.
```

Cada achado vem com o caso testado e o recibo de recebimento, sem dado
pessoal.

## Passo 3: atribuição

```text
$inboundfy-area-dados metade das vendas aparece como tráfego direto. Quero
entender qual canal realmente traz receita
```

```text
.inboundfy/relatorios/atribuicao/2026-11-ecommerce.md
```

Trecho do arquivo:

```markdown
## Comparação de modelos

| Canal | Último clique | Primeiro clique | Linear |
| --- | --- | --- | --- |
| Instagram orgânico | R$ 14.200,00 | R$ 21.400,00 | R$ 17.900,00 |
| Google Search | R$ 9.800,00 | R$ 6.100,00 | R$ 8.200,00 |
| Email | R$ 6.400,00 | R$ 3.200,00 | R$ 5.100,00 |
| Direto | R$ 22.600,00 | R$ 18.400,00 | R$ 20.300,00 |

## Confiança operacional

Média. O `purchase` duplicado infla o total em cerca de 8% e o canal direto
absorve sessões sem UTM. O número serve para comparar canais entre si, não
para fechar receita contábil.
```

## Passo 4: teste A/B

```text
$inboundfy-area-dados quero testar o texto do botão de compra na página do
produto. Hoje é "Comprar" e quero comparar com "Ver preço e comprar".
```

A skill de experimentação pergunta onde salvar o teste. Como o botão não
pertence a uma peça do pipeline, você indica um item do acervo:

```text
acervo/0021-2026-11-09-teste-botao-de-compra/experimento-0004.md
```

Trecho do arquivo:

```markdown
## Desenho

| Campo | Valor |
| --- | --- |
| Hipótese | o botão com preço reduz a dúvida e aumenta a taxa de adição ao carrinho em 5% |
| Métrica primária | taxa de adição ao carrinho por sessão de página de produto |
| Métrica de guarda | taxa de devolução em 30 dias |
| Amostra | 4.200 sessões por variante |
| Janela | 21 dias |
| Regra de parada | 95% de confiança na métrica primária ou fim da janela |

## Leitura

Encerrado em 2026-11-30. Variante B: 8,4% de adição ao carrinho, contra 7,6%
da variante A, com 4.380 e 4.290 sessões. A métrica de guarda não mudou.
Resultado: adotar a variante B.
```

## Resultado final

```text
.inboundfy/metricas/plano-de-medicao.md
.inboundfy/metricas/eventos.md
.inboundfy/metricas/rastreamento-0019.md
.inboundfy/relatorios/atribuicao/2026-11-ecommerce.md
acervo/0021-2026-11-09-teste-botao-de-compra/experimento-0004.md
```

## O que conferir

- Cada métrica tem fórmula, fonte, frequência e responsável.
- O dicionário de eventos cobre os eventos usados nos relatórios.
- Cada achado de rastreamento tem caso testado e recibo.
- O relatório de atribuição informa o grau de confiança e o motivo.
- O experimento define amostra, janela e regra de parada antes de começar.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | instrutório |
| Escopo | plano de métricas, rastreamento, atribuição e teste A/B |
| Autoridade | `inboundfy-metricas`, `inboundfy-rastreamento-conversao`, `inboundfy-atribuicao`, `inboundfy-experimentacao` |
