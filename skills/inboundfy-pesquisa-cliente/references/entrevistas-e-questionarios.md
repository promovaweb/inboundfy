# Entrevistas e questionários

Leia no passo 2 do fluxo quando o modo escolhido for pesquisa primária.

## Recrutamento

| Grupo | Por que conversar | Como chegar |
| --- | --- | --- |
| Clientes que compraram nos últimos 90 dias | Lembram do gatilho e da comparação | Email ou WhatsApp do atendimento, com convite curto |
| Clientes ativos que mais usam | Mostram o valor percebido | Lista de uso ou indicação do suporte |
| Quem cancelou ou desistiu no checkout | Mostram a objeção que venceu | Email de cancelamento com convite opcional |
| Quem avaliou e não comprou | Comparação com a alternativa escolhida | Base de leads do CRM |

Incentivos comuns: vale-presente de R$ 50 a R$ 150 via Pix, mês grátis,
crédito na loja. Em B2B com cargo alto, ofereça o resumo da pesquisa em vez
de dinheiro.

### Convite (modelo)

```text
Oi, {{nome}}. Aqui é {{pessoa}}, da {{empresa}}.
Você começou a usar {{produto}} em {{mês}}. Quero entender como foi
a escolha, sem venda nenhuma. São 25 minutos por vídeo, no horário
que for melhor. Como agradecimento, envio {{incentivo}} por Pix.
Posso mandar dois horários?
```

## Roteiro de entrevista de compra

Foque no que a pessoa fez, não no que ela acha que faria.

1. **Contexto.** Conte sobre sua rotina com {{tarefa}} antes de nos
   conhecer.
2. **Gatilho.** O que aconteceu que fez você procurar uma solução naquele
   momento?
3. **Busca.** Onde procurou? Quem consultou? Que opções considerou?
4. **Tentativas.** O que já tinha tentado? Por que não serviu?
5. **Escolha.** O que fez escolher esta opção? Quase desistiu em algum
   ponto?
6. **Ansiedade.** O que preocupava antes de pagar?
7. **Resultado.** O que mudou depois? Como você mede isso?
8. **Linguagem.** Como você explicaria o produto para um colega?

Técnica de aprofundamento: pergunte "por quê?" ou "como assim?" até três a
cinco vezes na mesma resposta, até chegar no motivo concreto (dinheiro,
tempo, medo de errar, imagem diante do chefe).

### Perguntas que distorcem

| Evite | Use |
| --- | --- |
| "Você usaria um recurso de X?" | "Da última vez que precisou de X, o que fez?" |
| "Quanto pagaria?" | "Quanto gasta hoje com isso, somando tempo e ferramentas?" |
| "Você gostou do site?" | "O que procurou primeiro quando entrou no site?" |
| Duas perguntas na mesma frase | Uma pergunta por vez |

## Questionário

Regras de desenho:

- No máximo 8 a 10 perguntas; uma aberta para cada duas fechadas.
- Comece pelo comportamento, termine pelos dados de perfil.
- Escalas com rótulo em todos os pontos.
- Ofereça "outro" com campo aberto.
- Teste com 3 pessoas antes de enviar.

### Pesquisa de encaixe de produto

Pergunta central: "Como você se sentiria se não pudesse mais usar
{{produto}}?" com as opções "muito desapontado", "um pouco desapontado" e
"não desapontado". Referência de mercado: 40% ou mais de "muito
desapontado" indica que o produto atende bem um grupo. Some três abertas:

1. Que tipo de pessoa mais se beneficiaria de {{produto}}?
2. Qual o principal benefício que você recebe?
3. O que poderia melhorar?

Leia as abertas só do grupo "muito desapontado" para achar a linguagem de
quem mais valoriza.

### Pós-compra (até 7 dias após o pagamento)

1. O que quase impediu você de comprar? (aberta)
2. Onde conheceu a {{empresa}}? (fechada com "outro")
3. Que outras opções considerou? (aberta)
4. Qual palavra descreve sua compra? (aberta, uma palavra)

## Registro da sessão

```yaml
id: entrevista-{{nn}}
data: {{AAAA-MM-DD}}
perfil: {{cargo, segmento, tempo como cliente}}
consentimento_gravacao: {{sim | não}}
consentimento_citacao_publica: {{sim | não | pendente}}
duracao_min: {{n}}
gatilho: {{resumo}}
alternativas_consideradas: [{{lista}}]
trechos:
  - "{{fala literal}}"
```
