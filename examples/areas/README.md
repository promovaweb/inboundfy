# Exemplos — Conversas com as skills de área

Esta pasta mostra como uma skill de área conversa antes de encaminhar o
trabalho. Cada exemplo reproduz um pedido completo, as perguntas de diagnóstico, a
rota escolhida e o pacote entregue à skill da área.

Toda empresa, pessoa e valor é fictício e serve só para demonstrar o formato.
Nenhuma skill lê esta pasta em tempo de execução.

## Como uma conversa se organiza

Uma conversa com skill de área tem cinco partes:

1. pedido em linguagem natural;
2. perguntas de diagnóstico que faltavam;
3. diagnóstico curto;
4. rota escolhida, com a alternativa quando existe;
5. pacote de entrada entregue à skill da área.

A área nunca produz o resultado final. Ela para quando a skill escolhida
recebe o pacote.

## Exemplo 1: área de growth em um problema de retenção

**Empresa fictícia:** Café da Vila, assinatura mensal de café especial, 1.100
assinantes, R$ 89,00 por mês.

**Pedido:**

```text
$inboundfy-area-growth o cancelamento subiu de 3% para 6,5% nos últimos dois
meses e não sei por quê
```

**Perguntas de diagnóstico:**

```text
1. Em qual etapa o número está pior: gente chegando, gente se cadastrando,
   gente usando, gente pagando ou gente indicando?
2. Quais números atuais você tem para essa etapa?
3. Qual o orçamento e o prazo disponíveis?
4. O produto é serviço, infoproduto, SaaS, loja ou negócio local?
```

**Respostas:**

```text
Está pior em gente pagando: o cancelamento subiu. Tenho 6,5% de churn em
outubro contra 3% em agosto. Orçamento de R$ 2.000,00 e prazo de um mês.
Assinatura recorrente.
```

**Diagnóstico entregue:**

```text
O churn dobrou em dois meses, com base de 1.100 assinantes, o que significa
cerca de 71 cancelamentos por mês. Não há dado de motivo de cancelamento
registrado.

Rota recomendada: inboundfy-growth-retencao
Rota alternativa: inboundfy-pesquisa-cliente, para levantar o motivo real
antes de montar a comunicação.

Sigo com o plano de retenção e incluo a coleta de motivo como primeira ação?
```

**Pacote entregue à skill:**

```markdown
## Pacote de entrada

- area: growth
- etapa_do_funil: retencao
- metrica_atual: 6,5% de churn em outubro, 3% em agosto
- base: 1.100 assinantes
- ticket: R$ 89,00
- orcamento: R$ 2.000,00
- prazo: 30 dias
- tipo_de_negocio: assinatura recorrente
- dado_ausente: motivo de cancelamento
- proxima_skill: inboundfy-growth-retencao
```

**Resultado na skill seguinte:** `retencao-0004.md`, no diretório operacional
já registrado pelo projeto, com plano por motivo de cancelamento, mensagens de
retenção e coleta de motivo no fluxo de cancelamento.

## Exemplo 2: área de SEO em uma página de comparação

**Empresa fictícia:** Fiscal Fácil, software de emissão de nota fiscal para
pequenos comércios, 4.200 clientes.

**Pedido:**

```text
$inboundfy-area-seo a página "melhor emissor de nota fiscal" recebe 900
visitas por mês e não converte ninguém
```

**Perguntas de diagnóstico:**

```text
1. Qual sintoma você observou: queda de tráfego, estagnação ou página nova?
2. Qual termo interessa e qual página deveria responder por ele?
3. Existe acesso ao Search Console no projeto?
4. A página tem chamada para ação e formulário funcionando?
```

**Respostas:**

```text
Estagnação. O termo é "melhor emissor de nota fiscal" e a página é a de
comparação. Search Console está ativo. Tem botão de teste grátis e o
formulário funciona.
```

**Diagnóstico entregue:**

```text
A página tem intenção comparativa e recebe visita, então o problema não é
apenas descoberta. O texto precisa comparar pontos verificáveis e o clique
precisa levar ao teste grátis com expectativa clara.

Rota recomendada: inboundfy-growth-cro, porque a falha está na conversão.
Rota alternativa: inboundfy-base-seo, se você quiser revisar title, headings e
linkagem antes de mexer no layout.

Qual das duas seguimos?
```

**Pacote entregue à skill:**

```markdown
## Pacote de entrada

- area: seo
- pagina: /comparativos/melhor-emissor-nota-fiscal/
- termo: melhor emissor de nota fiscal
- sintoma: estagnação com 900 visitas e zero cadastro
- acesso: Search Console ativo, conferido em 2026-11-05
- conversao_esperada: teste grátis de 14 dias
- restricao: sem promessa de preço menor que a do concorrente
- proxima_skill: inboundfy-growth-cro
```

**Resultado na skill seguinte:** `acervo/0021-2026-11-05-comparativo-emissor/`
com diagnóstico por seção, hipóteses de teste e ordem de implementação.

## Exemplo 3: área de dados em uma dúvida de atribuição

**Empresa fictícia:** Studio Bela Forma, estúdio de pilates com três unidades
em Campinas, mensalidade de R$ 320,00.

**Pedido:**

```text
$inboundfy-area-dados o relatório do Meta diz 84 conversões e o GA4 diz 31 no
mesmo período
```

**Perguntas de diagnóstico:**

```text
1. Quais perguntas de negócio você quer responder com esse número?
2. Quais ferramentas já estão instaladas e com acesso liberado?
3. Quem pode liberar os acessos que faltam?
4. Qual período e qual evento você está comparando?
```

**Respostas:**

```text
Quero saber quantas matrículas o Meta realmente trouxe. Temos GA4, Tag Manager
e conta do Meta. Eu libero os acessos. Período de 1 a 31 de outubro, evento de
matrícula paga.
```

**Diagnóstico entregue:**

```text
A diferença entre 84 e 31 costuma vir de modelo de atribuição, janela de
conversão e evento contado em momentos diferentes. Antes de comparar canal, é
preciso conferir se o evento de matrícula paga chega igual nos dois destinos.

Rota recomendada: inboundfy-rastreamento-conversao
Próxima depois dela: inboundfy-atribuicao

Começo pela conferência do evento e sigo para o relatório de atribuição?
```

**Pacote entregue à skill:**

```markdown
## Pacote de entrada

- area: dados
- pergunta: quantas matrículas o Meta trouxe em outubro
- evento: matricula_paga
- periodo: 2026-10-01 a 2026-10-31
- meta: 84 conversões
- ga4: 31 conversões
- integracoes: GA4, Tag Manager e Meta Ads com acesso liberado
- proxima_skill: inboundfy-rastreamento-conversao
- handoff_seguinte: inboundfy-atribuicao
```

**Resultado na skill seguinte:** `.inboundfy/metricas/rastreamento-0009.md`
com o dicionário de eventos, os casos testados, o recibo de recebimento por
destino e a explicação da diferença entre as duas contagens.

## O que conferir

- O pedido original aparece antes das perguntas.
- Cada pergunta tem justificativa no diagnóstico.
- A rota escolhida cita o motivo e a alternativa quando existe.
- O pacote de entrada traz objetivo, dado disponível e dado ausente.
- A conversa termina no encaminhamento, sem produzir o resultado final.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | demonstrativo |
| Escopo | conversas com as skills de área antes do encaminhamento |
| Autoridade | `skills/inboundfy-area-*/SKILL.md` |
