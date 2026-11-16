# Leitura de resultado

Leia no passo 9 do fluxo, com os números brutos por variante em mãos.

## Ordem de conferência

1. **Integridade da divisão.** Compare a proporção real de visitantes por
   variante com a planejada. Em 50/50, uma divisão de 52/48 com dezenas de
   milhares de visitas indica falha de sorteio (desequilíbrio de amostra).
   Pare e investigue antes de ler conversão.
2. **Amostra atingida.** A leitura antes da amostra planejada vira
   "resultado preliminar" e não autoriza implantação.
3. **Diferença relativa.** `(taxa da variante − taxa do controle) / taxa do
   controle`.
4. **Intervalo de confiança.** Informe a faixa provável do efeito, não só o
   ponto. "Entre +4% e +31%" diz mais que "+17%".
5. **Significância.** p abaixo de 0,05 no teste planejado. Sem isso, o
   resultado é inconclusivo, não "empate técnico favorável".
6. **Métricas de proteção.** Uma vitória que eleva reembolso acima do limite
   não é vitória.
7. **Segmentos.** Leia apenas os segmentos pré-registrados (celular e
   desktop, origem orgânica e paga, cliente novo e recorrente). Segmento
   descoberto depois vira hipótese de novo teste.
8. **Impacto em R$.** Converta a diferença em receita ou leads por mês com o
   volume real.

## Tabela de interpretação

| Situação | Leitura | Ação |
| --- | --- | --- |
| Significativo, proteção estável | Hipótese confirmada | Implantar e registrar aprendizado |
| Significativo, proteção piorou | Ganho com custo | Discutir com o usuário, provavelmente não implantar |
| Não significativo, intervalo estreito em torno de zero | Mudança sem efeito relevante | Manter o controle e testar algo maior |
| Não significativo, intervalo largo | Amostra insuficiente | Estender se cabe na janela máxima, senão registrar como inconclusivo |
| Variante pior com significância | Hipótese refutada | Registrar, é aprendizado útil |
| Segmentos com sinais opostos | Possível efeito por público | Novo teste segmentado |

## Fórmulas

```text
taxa = conversões / visitantes
erro padrão da diferença = raiz( pA(1−pA)/nA + pB(1−pB)/nB )
z = (pB − pA) / erro padrão
intervalo 95% da diferença absoluta = (pB − pA) ± 1,96 × erro padrão
```

Use calculadora estatística para conferir. Mostre as contas no relatório
para que outra pessoa refaça a leitura.

## Vocabulário da conclusão

| Use | Evite |
| --- | --- |
| "A variante B aumentou a taxa de cadastro em 18% (IC 95%: +6% a +30%)." | "B foi muito melhor." |
| "Inconclusivo com 6.200 visitantes por variante." | "Empate, mas B parece melhor." |
| "Efeito observado no celular; desktop não foi pré-registrado." | "Funciona melhor no desktop." |

## Novidade e repetição

Uma variante nova pode ganhar só por ser diferente para quem já visitou a
página antes. Em públicos recorrentes (clientes, lista de email antiga),
confira se o efeito diminui da primeira para a segunda semana. Quando a
lição é grande (troca de oferta), retestar meses depois confirma se ela se
mantém.
