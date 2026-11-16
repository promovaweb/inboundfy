# Calculadora de ROI e análise de ganho e perda

Leia no passo 4 do fluxo quando o pedido for calculadora de retorno, caso de
negócio para o decisor financeiro ou análise de por que o time ganha e perde
negócios.

## Calculadora de ROI

### Princípios

- A entrada vem do cliente. A calculadora usa os números que ele deu na
  descoberta, não médias de mercado.
- Premissa conservadora por padrão. Mostre o cenário conservador primeiro e
  o provável depois.
- Poucas entradas. De três a seis campos que o cliente sabe responder sem
  pesquisar.
- Conta visível. O decisor financeiro precisa refazer a conta numa planilha
  e chegar ao mesmo número.

### Fórmulas

| Medida | Fórmula |
| --- | --- |
| Economia mensal | (horas economizadas por mês × custo da hora) + custos eliminados |
| Ganho mensal | receita adicional atribuível × margem |
| Benefício mensal | economia mensal + ganho mensal |
| Investimento mensal | mensalidade + custos recorrentes de uso |
| Investimento inicial | implantação + treinamento + migração |
| Retorno sobre o investimento em 12 meses | (benefício anual − investimento anual − investimento inicial) ÷ (investimento anual + investimento inicial) |
| Prazo de retorno em meses | investimento inicial ÷ (benefício mensal − investimento mensal) |

Custo da hora de um colaborador CLT: salário mensal × 1,7 (encargos e
benefícios aproximados) ÷ 176 horas. Registre a premissa no material.

### Modelo

```markdown
## Entradas do cliente

| Entrada | Valor | Fonte |
| --- | --- | --- |
| {{entrada}} | {{valor}} | descoberta em {{data}} |

## Premissas

| Premissa | Conservador | Provável | Fonte |
| --- | --- | --- | --- |
| {{premissa}} | {{valor}} | {{valor}} | {{caso, teste, context/}} |

## Resultado

| Medida | Conservador | Provável |
| --- | --- | --- |
| Benefício mensal | R$ {{x}} | R$ {{y}} |
| Investimento mensal | R$ {{x}} | R$ {{y}} |
| Prazo de retorno | {{n}} meses | {{n}} meses |
```

### Exemplo trabalhado

Restaurante fictício com 25 colaboradores avaliando o PontoCerto (R$ 12 por
colaborador por mês, sem taxa de implantação).

- Gerente gasta 10 horas por mês corrigindo ponto. Salário de R$ 3.500.
  Custo da hora: 3.500 × 1,7 ÷ 176 = R$ 33,81.
- Mensalidade do relógio físico atual: R$ 150.
- Premissa conservadora: o PontoCerto elimina 50% das horas de correção.
  Fonte: teste de 14 dias em cliente parecido registrado em
  `context/produtos.md`.

| Medida | Conservador |
| --- | --- |
| Horas economizadas | 5 h × R$ 33,81 = R$ 169,05 |
| Custo eliminado | R$ 150 |
| Benefício mensal | R$ 319,05 |
| Investimento mensal | 25 × R$ 12 = R$ 300 |
| Saldo mensal | R$ 19,05 |

O saldo conservador é pequeno. A conversa honesta com a sócia é que o
PontoCerto se paga sozinho e o ganho real está no tempo do gerente e na
redução de erro de folha. Não infle a premissa para o número ficar bonito.

### Erros comuns da calculadora

- Usar média de mercado no lugar do número do cliente.
- Somar benefício que o produto não comprova (redução de processo
  trabalhista, aumento de vendas sem mecanismo).
- Esconder o investimento inicial ou o custo de troca.
- Calculadora com 20 campos que o cliente abandona.

## Análise de ganho e perda

### Para que serve

Entender por que o time ganha e perde negócios e transformar o padrão em
mudança de material, mensagem, preço ou produto.

### Fontes

1. Campo de motivo de perda no CRM (rápido, mas pouco confiável sozinho).
2. Entrevista curta com o comprador depois da escolha, ganha ou perdida.
3. Conversa com a pessoa vendedora que conduziu o negócio.
4. Gravações e anotações das reuniões.

### Roteiro de entrevista com o comprador (15 minutos)

Feita por alguém que não vendeu o negócio, de duas a seis semanas depois da
escolha. Peça permissão para gravar e anotar.

1. O que fez vocês procurarem uma solução naquele momento?
2. Que alternativas avaliaram, inclusive continuar como estava?
3. O que pesou mais na escolha final?
4. Quando ficou claro qual seria a escolha?
5. O que quase fez vocês escolherem outra opção?
6. Como foi a experiência com o nosso time comercial?
7. Se pudesse mudar uma coisa na nossa proposta, qual seria?

### Leitura dos padrões

Junte pelo menos dez entrevistas antes de tirar conclusão. Classifique cada
motivo:

| Motivo | Sinal | Destino |
| --- | --- | --- |
| Preço ou empacotamento | "Pagava por coisa que não usaria" | `inboundfy-growth-pricing` |
| Mensagem confusa | "Não entendi a diferença para o X" | `inboundfy-copy-posicionamento` |
| Prova insuficiente | "Não conhecia ninguém que usasse" | `inboundfy-contexto-depoimentos` |
| Lacuna de produto | "Faltava integração com Y" | Registro para a equipe de produto |
| Processo comercial | "Demoraram para responder" | `inboundfy-growth-revops` |
| Concorrente | "O X mostrou Z na demo" | Atualizar battlecard |

### Modelo de relatório

```markdown
# Ganho e perda: {{período}}

- **Negócios analisados:** {{n ganhos}} ganhos, {{n perdidos}} perdidos
- **Entrevistas feitas:** {{n}}

## Motivos de ganho
| Motivo | Ocorrências | Frase representativa |

## Motivos de perda
| Motivo | Ocorrências | Frase representativa |

## Mudanças propostas
| Mudança | Material ou área | Skill de destino | Prazo |
```
