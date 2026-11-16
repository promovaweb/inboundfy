# Tutorial: vendas B2B

Este tutorial cobre prospecção, cadência de email frio, kit de vendas e
operação de receita em uma venda B2B com ciclo longo. A empresa do exemplo é
fictícia.

A empresa do exemplo é a **Tailor Automação**, integradora de automação
industrial em Joinville, com 38 funcionários. O ticket médio é R$ 48.000,00 e
o ciclo de venda leva de 90 a 150 dias. O time tem dois vendedores e uma
pessoa de pré-venda.

## Passo 1: encontrar contas

```text
$inboundfy-area-vendas preciso de 120 contas de indústrias de alimentos e
bebidas em Santa Catarina com faturamento entre R$ 20 e R$ 120 milhões
```

Perguntas da área:

1. Quais condições fazem uma conta valer a abordagem? Porte, processo, linha
   de produção ou localização?
2. Existe tecnologia instalada que ajude a identificar oportunidade?
3. Quem é o contato que costuma abrir a conversa?
4. Quais contas já estão em negociação e devem ficar fora da lista?

Respostas:

```text
Porte e linha de produção. Procuramos fábrica com envase manual ou
semiautomático. Quem abre conversa é o gerente industrial. Já temos 9 contas
em negociação, mando a lista.
```

A lista é gravada no diretório da campanha:

```text
campanhas/0007-prospeccao-industrial-sc/prospeccao/lista-0007.csv
campanhas/0007-prospeccao-industrial-sc/prospeccao/resumo-pesquisa.md
```

Trecho de `resumo-pesquisa.md`:

```markdown
## Condições aplicadas

| Condição | Regra | Fonte |
| --- | --- | --- |
| Setor | alimentos e bebidas | base de CNPJ consultada em 2026-11-04 |
| Porte | faturamento estimado entre R$ 20 e R$ 120 milhões | portal de dados públicos |
| Processo | envase manual ou semiautomático identificado em vídeo ou notícia | site da empresa |
| Localização | Santa Catarina | base de CNPJ |
| Exclusão | contas em negociação enviadas pelo time | lista interna de 2026-11-03 |
```

Cada linha do CSV guarda a fonte e a data do campo. Conta sem fonte não entra
na lista.

## Passo 2: cadência de email frio

```text
$inboundfy-area-vendas monte uma cadência de três emails para o gerente
industrial das 120 contas, com uma ligação no meio
```

A skill de email frio grava a sequência:

```text
campanhas/0007-prospeccao-industrial-sc/email-frio/cadencia-0007.md
```

Trecho do arquivo:

```markdown
## Email 1, dia 1

Assunto: Linha de envase da {empresa}

Corpo:
Boa tarde, {nome}. Vi que a {empresa} engarrafa em linha semiautomática. Nós
instalamos controle de envase em três fábricas de bebidas da região e o
refugo de produto caiu entre 4% e 9% no primeiro trimestre.

Faz sentido eu te mostrar como fica o cálculo para o seu volume?

Abraço,
{remetente}

## Regra de parada

Parar a sequência em qualquer resposta, em abertura registrada no CRM ou em
pedido de descadastro. Revisar a mensagem antes de retomar.
```

O arquivo também registra os limites de envio, o responsável pelas respostas e
a tabela de métricas por coorte. A skill não envia email. O envio continua com
a ferramenta que o projeto já usa.

## Passo 3: kit de vendas

```text
$inboundfy-area-vendas preciso de um one-pager e de um roteiro de descoberta
para a primeira reunião técnica
```

Os materiais entram em pastas próprias:

```text
canais/vendas/0007-2026-11-06-one-pager-automacao-envase/
├── README.md
└── afirmacoes.md
```

Trecho de `afirmacoes.md`:

| Afirmação | Fonte | Estado |
| --- | --- | --- |
| Redução de refugo entre 4% e 9% no primeiro trimestre | relatório interno de projeto, 2026-08 | confirmada |
| Instalação em 3 fábricas de bebidas em Santa Catarina | lista de clientes autorizada | confirmada |
| Retorno do investimento em 10 meses | cálculo pendente de validação | pendente |

Nenhum material sai com afirmação pendente marcada como confirmada.

## Passo 4: operação de receita

```text
$inboundfy-area-vendas documente o processo do primeiro contato até a proposta
assinada no CRM
```

A skill de revops grava o mapa:

```text
campanhas/0007-prospeccao-industrial-sc/revops-mapa.md
```

Trecho do arquivo:

```markdown
## Etapas

| Etapa | Condição de entrada | Dono | Prazo | Próxima ação obrigatória |
| --- | --- | --- | --- | --- |
| Conta qualificada | setor, porte e processo conferidos | pré-venda | 1 dia | enviar email 1 |
| Conversa aberta | resposta do gerente industrial | vendedor | 2 dias | agendar diagnóstico |
| Diagnóstico feito | visita técnica ou reunião de 45 min | vendedor | 5 dias | registrar dor e volume |
| Proposta enviada | escopo e preço aprovados | vendedor | 3 dias | marcar follow-up |
| Negociação | objeção registrada | vendedor | 10 dias | revisar oferta |
| Ganho | contrato assinado | vendedor | 5 dias | iniciar onboarding |

## Passagem entre marketing e vendas

Lead de campanha entra com origem, campanha e interesse preenchidos. Lead sem
esses campos volta para a pré-venda antes de chegar ao vendedor.
```

## Passo 5: acompanhar

```text
$inboundfy-area-vendas como está a taxa de resposta da cadência e quais contas
avançaram de etapa nesta semana
```

O agente lê o mapa, o arquivo da cadência e o registro de tentativas e responde
com números por coorte. Quando o número estiver abaixo do combinado, ele
propõe a alteração de assunto ou de segmento e espera a sua confirmação antes
de gerar uma nova versão.

## Resultado final

```text
campanhas/0007-prospeccao-industrial-sc/
├── prospeccao/
│   ├── lista-0007.csv
│   └── resumo-pesquisa.md
├── email-frio/
│   └── cadencia-0007.md
└── revops-mapa.md

canais/vendas/0007-2026-11-06-one-pager-automacao-envase/
├── README.md
└── afirmacoes.md
```

## O que conferir

- Cada conta da lista tem fonte e data por campo relevante.
- A cadência tem regra de parada e responsável pelas respostas.
- O kit de vendas separa afirmação confirmada de afirmação pendente.
- O mapa de receita define dono, prazo e próxima ação por etapa.
- Nenhum envio de email acontece sem a sua autorização.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | instrutório |
| Escopo | prospecção B2B, email frio, kit de vendas e operação de receita |
| Autoridade | `inboundfy-growth-prospeccao`, `inboundfy-growth-email-frio`, `inboundfy-enablement-vendas`, `inboundfy-growth-revops` |
