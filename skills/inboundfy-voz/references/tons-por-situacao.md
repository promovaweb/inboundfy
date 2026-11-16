# Tons por situação

Leia este arquivo no passo 6 do fluxo. A voz fica. O tom se ajusta ao estado
de quem lê. Esta referência dá os eixos para posicionar a voz e o método para
montar a matriz de situações.

## Os quatro eixos

Os eixos abaixo são usados em pesquisa de experiência do usuário para
descrever tom de voz. Posicione a voz central de 1 a 5 em cada um. A posição
é descrição, não nota.

| Eixo | 1 | 5 | Pergunta para posicionar |
| --- | --- | --- | --- |
| Formalidade | Formal | Casual | A marca escreveria "prezado" ou "oi"? |
| Humor | Sério | Bem-humorado | Uma piada no post de produto soaria natural ou estranha? |
| Respeito | Respeitoso | Irreverente | A marca brincaria com o próprio setor ou com o concorrente? |
| Entusiasmo | Factual | Entusiasmado | O lançamento leva número e data ou leva "incrível"? |

Para cada situação da matriz, indique para que lado o tom se move em relação
à posição central. Uma voz em humor 3 pode ir a 1 num alerta de falha e a 4
num post de bastidor.

## Situações mínimas

| Situação | Estado típico do leitor | Movimento comum do tom |
| --- | --- | --- |
| Conteúdo educativo | Curioso, com tempo | Mais leve, mais exemplo |
| Lançamento ou novidade | Interessado, cético | Mais factual, mostrar o que muda |
| Proposta ou página de venda | Avaliando, comparando | Mais formal, prova perto da promessa |
| Onboarding | Animado, inseguro | Mais didático, um passo por vez |
| Suporte técnico | Travado, com pressa | Mais curto, instrução exata |
| Falha ou incidente | Tenso, irritado | Mais sério, assumir, dar prazo |
| Cobrança | Constrangido ou esquecido | Neutro, sem culpa, com o caminho de pagamento |
| Reclamação pública | Irritado, observado por outros | Assumir, sem defesa, levar para canal privado com prazo |
| Cancelamento | Decidido ou frustrado | Respeitoso, facilitar, uma oferta no máximo |

Acrescente situações próprias do negócio: confirmação de agendamento em
clínica, aviso de atraso de entrega em loja, alerta de segurança em software.

## Como escrever uma célula

Cada linha da matriz precisa de um exemplo que a pessoa aprovou ou que está
marcado como ilustrativo. Sem exemplo, a linha vira intenção vaga.

```markdown
| Cobrança | Constrangido | Neutro, sem culpa | Diga valor, vencimento e o caminho do Pix | Evite "infelizmente", ameaça, caixa alta | "A mensalidade de outubro venceu dia 10. Dá para pagar pelo Pix neste link até dia 20 sem juros." |
```

## Sinais de que o tom errou

- Entusiasmo em má notícia ("Temos uma novidade sobre sua fatura!").
- Humor em reclamação.
- Formalidade de ofício no WhatsApp de uma marca casual.
- Pedido de desculpas sem fato nem prazo.
- O mesmo texto copiado para o post e para o aviso de falha.

Quando `inboundfy-copy-editor` encontrar um desses sinais, o achado aponta a
linha da matriz que foi violada.
