# Tutorial: lançamento de uma turma

Este tutorial percorre o lançamento de uma turma, do plano de growth ao
rastreamento de conversão funcionando. A escola do exemplo é fictícia.

A empresa do exemplo é a **Escola Maré Alta**, escola de inglês para
profissionais em Florianópolis. A turma de conversação de verão abre 40 vagas
e custa R$ 1.890,00 à vista ou 12 parcelas de R$ 189,00. A meta é fechar 40
matrículas até 15 de dezembro.

## Passo 1: diagnosticar a etapa

```text
$inboundfy-area-growth quero lançar a turma de conversação de verão com 40
vagas. Hoje temos 600 pessoas na lista, 90 leads por mês e 12 matrículas no
último lançamento.
```

Perguntas da área:

1. De onde vêm os 90 leads por mês hoje?
2. Quanto você pode investir em mídia até 15 de dezembro?
3. Quem responde as conversas de WhatsApp durante a campanha?
4. Qual foi o motivo mais comum de não fechar no lançamento anterior?

Respostas registradas:

```text
Vêm de Instagram orgânico e indicação. Posso investir R$ 6.000,00 em mídia.
Duas pessoas respondem o WhatsApp em horário comercial. O motivo mais comum
foi preço sem comparação clara com o curso regular.
```

A área conclui que o problema não é só aquisição, o que leva a uma segunda
rota:

```text
Diagnóstico: a lista é grande e o volume de leads existe. A conversão cai na
comparação de preço e no tempo de resposta do WhatsApp.

Rota recomendada: inboundfy-growth-lancamento (plano completo)
Rota alternativa: inboundfy-copy-oferta antes do lançamento, para comparar o
preço com o curso regular.

Sigo com o plano de lançamento e incluo a oferta como primeira entrega?
```

## Passo 2: plano de lançamento

Com a confirmação, a skill de lançamento monta o plano e grava o pacote:

```text
campanhas/0003-lancamento-turma-verao/
├── README.md
├── plano-de-lancamento.md
├── mensagens.md
└── cronograma.md
```

Trecho de `plano-de-lancamento.md`:

```markdown
## Fases

| Fase | Período | Objetivo | Peça principal |
| --- | --- | --- | --- |
| Aquecimento | 18 a 24 de novembro | abrir a conversa sobre fluência | sequência de email para a lista |
| Abertura | 25 de novembro | explicar oferta e comparação de preço | landing page e post de LinkedIn |
| Prova | 26 de novembro a 8 de dezembro | mostrar resultado de alunos | depoimentos e aula aberta |
| Última chamada | 9 a 15 de dezembro | fechar vagas restantes | email e anúncio de remarketing |

## Conversão primária

Matrícula paga. Conversão secundária: aula experimental agendada.
```

## Passo 3: plano de anúncios

```text
$inboundfy-area-growth com o plano de lançamento pronto, monte a mídia paga
para Meta e Google com R$ 6.000,00
```

A skill de anúncios consulta `.inboundfy/context/ofertas.md` e
`context/integracoes.md`, confirma se a conta de anúncios e o pixel estão
registrados e grava:

```text
campanhas/0003-lancamento-turma-verao/anuncios/midia.md
```

Trecho de `midia.md`:

```markdown
## Distribuição do orçamento

| Canal | Período | Verba | Público | Conversão |
| --- | --- | --- | --- | --- |
| Meta Ads | 25/11 a 15/12 | R$ 3.600,00 | interesses de idiomas e lookalike da lista | matrícula paga |
| Google Ads | 25/11 a 15/12 | R$ 1.800,00 | busca por curso de conversação em Florianópolis | matrícula paga |
| Remarketing | 2/12 a 15/12 | R$ 600,00 | visitantes da página que não matricularam | matrícula paga |

## Regra de pausa

Pausar conjunto com custo por matrícula acima de R$ 300,00 depois de 1.000
impressões.
```

## Passo 4: criativos

```text
$inboundfy-area-growth preciso de três conceitos de criativo para o Meta,
um deles falando de comparação de preço
```

A skill de criativos usa a persona, a oferta e a restrição de voz e grava a
matriz de conceitos:

```text
campanhas/0003-lancamento-turma-verao/anuncios/criativos/
├── matriz-de-conceitos.md
├── conceito-01-textos.md
├── conceito-02-textos.md
└── conceito-03-textos.md
```

Trecho de `matriz-de-conceitos.md`:

```markdown
| Conceito | Ângulo | Formato | Persona | Hipótese |
| --- | --- | --- | --- | --- |
| 01 | custo por aula comparado ao curso regular | carrossel | persona-02 | a dúvida de preço cai quando o valor por aula aparece |
| 02 | conversa real em reunião de trabalho | vídeo curto | persona-02 | o leitor se reconhece na cena |
| 03 | depoimento de aluno que viajou a trabalho | imagem única | persona-01 | prova social pesa na escolha |
```

Cada texto candidato passa pela validadora do canal antes de virar anúncio
ativo.

## Passo 5: rastreamento de conversão

```text
$inboundfy-area-dados preciso garantir que a matrícula paga chegue no Meta e
no GA4 com o valor certo
```

A área de dados encaminha para `inboundfy-rastreamento-conversao`, que lê as
integrações registradas e grava:

```text
campanhas/0003-lancamento-turma-verao/rastreamento-0003.md
```

Trecho do arquivo:

```markdown
## Dicionário de eventos

| Evento | Momento | Destinos | Parâmetros |
| --- | --- | --- | --- |
| `lead_form` | envio do formulário da aula aberta | GA4, Meta | origem, campanha, valor 0 |
| `agendamento_aula` | confirmação da aula experimental | GA4 | origem, campanha |
| `matricula_paga` | webhook de pagamento aprovado | GA4, Meta CAPI | valor, moeda BRL, id do pedido |

## Padrão de UTMs

`utm_source=meta|google`, `utm_medium=cpc|email|social`,
`utm_campaign=turma-verao-2027`, `utm_content=<conceito>`.

## Conferência

| Evento | Como testar | Recibo |
| --- | --- | --- |
| `lead_form` | envio de teste com UTM `teste` | recebido em 2026-11-24 |
| `matricula_paga` | pedido de teste no valor de R$ 1,00 | recebido em 2026-11-24 |
```

## Passo 6: acompanhar e ajustar

Durante a campanha, a leitura volta para a área de dados:

```text
$inboundfy-area-dados como está o custo por matrícula por canal nesta semana
```

O agente lê o estado da campanha, compara com a regra de pausa registrada em
`midia.md` e responde com números e com a ação sugerida. A alteração de verba
só acontece depois da sua confirmação, porque envolve dinheiro.

## Resultado final

```text
campanhas/0003-lancamento-turma-verao/
├── README.md
├── plano-de-lancamento.md
├── mensagens.md
├── cronograma.md
├── rastreamento-0003.md
└── anuncios/
    ├── midia.md
    └── criativos/
        ├── matriz-de-conceitos.md
        ├── conceito-01-textos.md
        ├── conceito-02-textos.md
        └── conceito-03-textos.md
```

## O que conferir

- O plano de lançamento separa fases com período e peça principal.
- A verba total dos anúncios fecha com o orçamento aprovado.
- A conversão primária é a mesma no plano, no anúncio e no rastreamento.
- O arquivo de rastreamento tem recibo de teste para cada evento.
- Nenhuma alteração de verba acontece sem sua confirmação.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | instrutório |
| Escopo | lançamento de turma com growth, mídia, criativos e rastreamento |
| Autoridade | `inboundfy-growth-lancamento`, `inboundfy-growth-anuncios`, `inboundfy-rastreamento-conversao` |
