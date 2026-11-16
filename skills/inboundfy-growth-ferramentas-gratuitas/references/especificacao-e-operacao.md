# Especificação e operação de uma ferramenta de aquisição

## Do cálculo à interpretação

Escreva primeiro um caso manual verificável. Declare entrada, unidade e
resultado esperado; depois trate arredondamento, valores ausentes e limites.
A interface não pode esconder a regra que transforma a informação.

| Estado | Resposta definida no brief |
| --- | --- |
| Entrada vazia | Explicar o dado necessário sem atribuir zero automaticamente |
| Decimal com vírgula | Normalizar sem trocar centavos por centenas |
| Zero no divisor | Pedir correção, sem calcular infinito |
| Valor fora da faixa | Informar faixa e permitir correção |
| Serviço externo fora do ar | Preservar entradas e oferecer nova tentativa |
| Nenhum achado | Dizer o que foi verificado, sem afirmar perfeição |
| Resultado exportado | Incluir data, versão da regra e limites |
| Reprocessamento | Evitar cobrança ou lead duplicado |

Para geradores, acrescente formato editável, instruções de revisão e exemplo
de saída aceitável. Para analisadores, inclua falsos positivos esperados e
forma de contestar achado. Não produza documento jurídico personalizado sem
revisão responsável; delimite o recurso como estrutura de trabalho.

## Estimativa econômica por cenário

Defina baixo, base e alto com premissas do projeto. Não use taxas públicas
de outra categoria como previsão automática.

```text
resultados = usuarios elegiveis × proporcao de conclusao
leads aderentes = resultados × captura × aderencia
clientes = leads aderentes × conversao comercial no horizonte escolhido
contribuicao = clientes × contribuicao por cliente no horizonte observado
saldo = contribuicao − operacao − distribuicao − suporte incremental
```

A construção entra como desembolso inicial. Não chame receita de contribuição:
desconte custos variáveis que a operação realmente incorre. Se não houver
histórico de permanência, limite o horizonte e apresente a sensibilidade.

| Alteração | Efeito a examinar |
| --- | --- |
| Dobrar o uso sem aumentar clientes | API e suporte crescem sem retorno equivalente |
| Abrir resultado antes do email | Mais utilidade e menos contatos diretos |
| Adicionar recurso pago adjacente | Possível melhora na continuidade, a testar |
| Atrair outra persona | Tráfego sobe sem necessariamente gerar demanda útil |

## Eventos e aceites de operação

Solicite a `inboundfy-rastreamento-conversao` um plano que diferencie
`ferramenta_iniciada`, `resultado_gerado`, `captura_confirmada` e
`cliente_confirmado`. Inclua versão, origem e estado do cálculo. Valores
pessoais, arquivos e texto livre não entram por padrão no payload analítico.
A configuração usa `.inboundfy/context/integracoes.md`, sem copiar segredos.

Métricas úteis: conclusão por usuário elegível, erro por tentativa, retorno
em nova semana, lead aderente por resultado, cliente por coorte e custo por
resultado válido. Declare a definição de usuário e a janela comercial.

## Plano de manutenção para preencher

```yaml
proprietario: "{{equipe ou papel}}"
fonte_da_regra: "{{arquivo e versao}}"
revisao_programada: "{{data}}"
gatilhos: ["mudanca na regra", "erro de calculo", "aumento do custo por uso"]
rotina: "{{reexecutar casos e conferir amostra de resultados}}"
indisponibilidade: "{{mensagem, canal de ajuda e responsável}}"
retirada: "{{condicao para suspender e destino da pagina}}"
```

Uma referência de mercado só ajuda se documentar população e tarefa semelhantes.
Casos de ferramentas populares mostram formato e distribuição; não demonstram
qual seria a conversão do projeto. Use pesquisa local e piloto observado para
trocar premissas por contagens reais.

## Referência pública de método

A orientação para casas decimais recomenda teclado compatível com separador decimal. Use-a para especificar entrada mobile; a interpretação da vírgula brasileira e a fórmula continuam exigindo aceites próprios. [GOV.UK Design System: entradas numéricas](https://design-system.service.gov.uk/components/text-input/).

Consulta: 15/11/2026. Esta fonte sustenta o comportamento descrito, sem
fornecer uma meta universal para o funil do projeto.
