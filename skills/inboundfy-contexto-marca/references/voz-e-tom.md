# Voz e tom

Referência de `.inboundfy/context/marca-voz.md`. Lida no passo 2 do fluxo
quando o pedido for de voz, e no passo 7 para o teste de calibração.

## Voz e tom não são a mesma coisa

A voz é estável: é a personalidade da marca em qualquer texto. O tom muda com
a situação: a mesma marca fala de um jeito no post de lançamento e de outro
no e-mail que avisa uma cobrança recusada. `marca-voz.md` registra a voz na
seção Tom e as variações por canal ou situação nos campos de humor, pessoa
verbal e vocabulário.

## As quatro escalas de tom

Use estas escalas, consagradas em pesquisa de usabilidade de texto, para
transformar adjetivos vagos em posição verificável. Peça ao usuário um ponto
de 1 a 5 em cada uma.

| Escala | 1 | 5 | Pergunta para o usuário |
| --- | --- | --- | --- |
| Formalidade | casual | formal | "Vocês escrevem 'a gente' ou 'nós'?" |
| Humor | bem-humorado | sério | "Uma piada leve num post é bem-vinda ou soa errado?" |
| Reverência | irreverente | respeitoso | "Vocês brincam com o próprio setor?" |
| Entusiasmo | entusiasmado | sóbrio | "Ponto de exclamação aparece nos textos?" |

Registre o resultado nos adjetivos, sempre com o oposto excluído:
"próximo (não íntimo)", "direto (não seco)", "técnico (não hermético)".

## Tom por situação

Quando o usuário diferenciar, registre a variação no campo de humor ou numa
linha extra da seção Tom.

| Situação | Ajuste típico | Exemplo fictício |
| --- | --- | --- |
| Lançamento ou novidade | mais entusiasmo, frases curtas | "Agora o alerta chega no WhatsApp." |
| Tutorial | segunda pessoa, passo a passo, sem humor | "Toque em Produtos e depois em Nova foto." |
| Erro ou instabilidade | sóbrio, assume a falha, diz o prazo | "O app ficou fora do ar das 14h às 15h. Nenhum dado foi perdido." |
| Cobrança | respeitoso, sem culpa, com saída clara | "O Pix do plano anual não foi identificado. Você pode pagar por este link até sexta." |
| Pedido de dado pessoal | explica uso e base, cita a LGPD quando couber | "Usamos seu e-mail só para enviar o relatório semanal." |

## Roteiro de entrevista

1. "Que três a cinco adjetivos descrevem como a marca quer soar? Para cada
   um, qual é o exagero que vocês não querem?"
2. "Qual é o idioma e a variante? Português do Brasil, de Portugal, outro?"
3. "Vocês falam com 'você', 'tu', 'o senhor'? Usam 'nós' ou 'a gente' no
   institucional?"
4. "O vocabulário é para iniciante, intermediário ou especialista?"
5. "Humor entra em quais canais e em quais situações não entra?"
6. "Que palavra a marca usa de propósito no lugar de uma mais comum?"
7. "Que palavra vocês evitam por gosto, sem ser proibida?"
8. "Cole um trecho real que representa bem a voz."
9. "Cole um trecho que representa o oposto. Pode ser de outra empresa, sem
   nome."
10. "Como vocês se despedem num e-mail? Existe CTA padrão?"

## Vocabulário preferido e evitado

O template grava preferência com o formato `termo; usar em vez de
alternativa`. Bons candidatos:

- palavra do cliente no lugar de jargão interno ("faltou mercadoria" em vez
  de "ruptura de estoque");
- verbo concreto no lugar de substantivo abstrato ("controlar" em vez de
  "gestão");
- termo regional que a persona usa, quando a marca atende uma região.

Vocabulário evitado é preferência. Se o uso reprova a peça, o item vai para
`proibicoes.md`.

## Exemplos de bom e mau texto

- Prefira trechos reais: legenda que performou bem, e-mail que recebeu
  resposta elogiando, página que o time considera a melhor.
- Cada exemplo ruim tem motivo de uma linha.
- Dois exemplos bons por canal principal bastam. Mais do que cinco vira
  ruído.
- Exemplo criado pela skill entra com a marca `(ilustrativo, aprovado em
  AAAA-MM-DD)`.

## Teste de calibração

Faça sempre que adjetivos, pessoa verbal ou nível técnico mudarem.

1. Escolha um trecho curto do próprio projeto (até três frases).
2. Reescreva aplicando a voz nova, sem mudar fatos.
3. Mostre original e reescrita lado a lado.
4. Pergunte se a reescrita soa como a marca. Ofereça três ajustes possíveis,
   com o recomendado primeiro, quando a resposta for "quase".
5. Registre a resposta no relato. Só então declare a voz atualizada.

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Tom

- **Três a cinco adjetivos:** prático (não teórico), próximo (não íntimo), direto (não seco)
- **Idioma e variante:** pt-BR
- **Pessoa verbal:** "você" em tutorial e redes; "nós" no institucional
- **Nível técnico do vocabulário:** iniciante
- **Humor é permitido?** leve no Instagram; nunca em suporte, cobrança ou erro

## Vocabulário preferido

- "estoque parado"; usar em vez de "baixo giro de catálogo"
- "acabou"; usar em vez de "ruptura"

## Vocabulário evitado

- "solução" como substantivo genérico; motivo: não diz o que o app faz

## Assinatura e fechamento padrão

- **Como a marca se despede em e-mail:** "Qualquer dúvida, responda este e-mail. Uma pessoa do time lê."
- **CTA padrão, se houver um genérico:** "Teste 14 dias sem cartão"
```

## Erros comuns

- Adjetivo sem oposto. "Moderno" serve para qualquer marca.
- Pessoa verbal diferente entre canais sem registro. A especialista de
  e-mail escreve "nós" e a de Instagram escreve "a gente" sem saber se pode.
- Placeholder esquecido em qualquer seção. O `inboundfy doctor` reprova a
  voz inteira.
- Voz definida só para o canal que o usuário estava olhando no momento.
