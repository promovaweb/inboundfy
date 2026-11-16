# Leitura de custo, conversão e qualidade

Leia antes de recomendar pausa, manutenção ou expansão. Registre moeda, fuso, datas, fonte, modelo de atribuição e data de extração. Compare períodos com duração e composição compatíveis.

## Dicionário de métricas

| Métrica | Conta | Uso e cuidado |
| --- | --- | --- |
| CPM | gasto / impressões × 1.000 | Custo de exposição; não mede aquisição |
| CTR de link | cliques de link / impressões | Não misture com todos os cliques |
| CPC de link | gasto / cliques de link | Conferir se o clique chega ao destino |
| Conversão da página | leads válidos / sessões elegíveis | Sessões e cliques não são intercambiáveis |
| CPL | gasto de mídia / leads válidos | Documentar duplicados e exclusões |
| CPA | gasto / evento primário único | Nomear o evento, não apenas escrever CPA |
| CAC total | custo de aquisição / clientes novos | Incluir custos do mesmo período ou coorte |
| ROAS | receita atribuída / mídia | Informar bruto/líquido, devolução e janela |
| Recuperação do CAC | CAC / contribuição mensal | Receita recorrente não equivale a margem |

Denominador zero produz “não calculável”. Não preencha com zero nem infinito sem explicação. Não há faixa universal de CTR, CPL ou ROAS: use coortes locais comparáveis e informe a fonte de qualquer referência setorial.

## Ordem do diagnóstico

1. Confira integridade: evento duplicado, mudança de tag, atraso de importação, quebra no destino e alteração de oferta.
2. Confira entrega: gasto, alcance, CPM e região. Falta de entrega difere de baixa conversão.
3. Confira interesse: cliques, CTR e coerência entre mensagem e público.
4. Confira pós-clique: sessões, leads válidos, abandono e funcionamento em celular.
5. Confira comercial: aceite, reunião realizada, oportunidade e cliente, com atraso de cada etapa.
6. Recomende uma alteração com teto, responsável e próxima data de leitura.

| Sinal | Verificação necessária | Próxima ação |
| --- | --- | --- |
| CTR sobe, qualidade cai | Termos, mensagem e leads recusados | Trocar promessa ou público antes de expandir |
| CPA sobe, conversão estável | CPC, disputa de leilão e composição | Testar outra distribuição mantendo o teto |
| Plataforma vende, CRM não registra | IDs, janela e duplicação | Encaminhar medição; suspender conclusão de retorno |
| Frequência sobe, alcance novo cai | Público, período e deterioração de resposta | Renovar conceito ou revisar abrangência |
| Gasto cresce sem evento maduro | Atraso de venda e volume disponível | Esperar maturação dentro do teto combinado |

## Revisão preenchível

```text
Período/coorte: {{datas}}. Fonte e extração: {{arquivo/data}}.
Fato: {{numerador, denominador e valor}}.
Hipótese: {{explicação ainda não comprovada}}.
Ausente: {{campo necessário}}.
Ação: {{manter/pausar/corrigir/testar}}, por {{responsável}}.
Teto e revisão: {{R$, data e condição}}.
```

Um limite de gasto sem conversão é proteção financeira definida antes do teste, não prova de que a oferta jamais funcionará. Com amostra pequena, escreva “inconclusivo”. Para inferir causalidade, encaminhe desenho aleatório, tamanho e parada para `inboundfy-experimentacao`.
