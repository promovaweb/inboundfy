# Amostra e duração

Leia no passo 5 do fluxo, antes de prometer prazo ao usuário.

## Entradas do cálculo

| Entrada | Significado | Valor padrão |
| --- | --- | --- |
| Taxa base | Conversão atual da métrica principal | Dado real dos últimos 30 a 90 dias |
| Efeito mínimo detectável (MDE) | Menor melhora relativa que vale a pena | 10% a 20% relativo em páginas, 5% a 10% em email com base grande |
| Significância (alfa) | Chance aceita de falso positivo | 5% (confiança de 95%) |
| Poder | Chance de detectar o efeito se ele existir | 80% |

## Fórmula de bolso

Para comparar duas proporções com alfa 5% e poder 80%:

```text
n por variante ≈ 16 × p × (1 − p) / (p × MDE)²
```

`p` é a taxa base em decimal e `MDE` o efeito relativo em decimal. Exemplo:
taxa de 4% (0,04) e MDE de 20% (0,20) dão `16 × 0,04 × 0,96 / (0,008)²`,
cerca de 9.600 visitantes por variante. Confira com uma calculadora de
tamanho de amostra antes de publicar o plano.

## Tabela rápida (visitantes por variante, alfa 5%, poder 80%)

| Taxa base | MDE 10% | MDE 20% | MDE 30% |
| --- | --- | --- | --- |
| 1% | cerca de 160 mil | cerca de 40 mil | cerca de 18 mil |
| 3% | cerca de 52 mil | cerca de 13 mil | cerca de 6 mil |
| 5% | cerca de 30 mil | cerca de 7.600 | cerca de 3.400 |
| 10% | cerca de 14 mil | cerca de 3.600 | cerca de 1.600 |
| 20% | cerca de 6.400 | cerca de 1.600 | cerca de 700 |

Os valores são aproximações da fórmula de bolso. A leitura prática: com taxa
de 1 a 3%, só efeitos grandes aparecem em prazo razoável.

## Duração

```text
dias = (n por variante × número de variantes) / visitantes elegíveis por dia
```

Regras:

- Mínimo de 7 dias, sempre em semanas cheias, para cobrir o ciclo de dias
  úteis e fim de semana.
- Máximo de 6 a 8 semanas. Depois disso, cookies expiram, pessoas trocam de
  aparelho e a amostra se contamina.
- Evite janelas com Black Friday, 13º salário, volta às aulas ou campanha
  grande no mesmo público, a menos que o teste seja sobre essa data.
- Em email, envie as variantes no mesmo horário para listas sorteadas.

## Mais de duas variantes

Cada variante extra aumenta a amostra total. Com quatro versões, aplique a
correção de Bonferroni (alfa dividido pelo número de comparações com o
controle) ou reduza para duas versões.

## Quando a amostra não cabe

| Caminho | Como | Custo |
| --- | --- | --- |
| Aumentar o efeito testado | Testar oferta ou proposta de valor, não detalhe | Menos testes, mudanças maiores |
| Métrica mais frequente | Medir clique no CTA ou início de cadastro em vez de compra | Indicador intermediário, confirmar depois no funil |
| Teste sequencial | Regras de parada definidas antes, leituras programadas | Exige ferramenta ou cálculo próprio |
| Teste qualitativo | Cinco a oito testes de usabilidade ou entrevistas | Não mede tamanho de efeito |
| Antes e depois com controle | Comparar com período e canal semelhantes | Mais exposto a sazonalidade |

## Espiar o resultado

Olhar o painel todo dia e parar no primeiro dia com p abaixo de 0,05 eleva a
taxa de falso positivo muito acima de 5%. Defina antes do início: data da
leitura final ou, no teste sequencial, as datas e limites de cada leitura
intermediária.
