# Padrão de UTMs e leitura do painel

Leia no passo 4 do fluxo para padronizar UTMs e no passo 9 para fazer a
leitura periódica.

## Padrão de UTMs

| Parâmetro | Regra | Exemplos |
| --- | --- | --- |
| `utm_source` | Nome da origem, minúsculas | instagram, google, newsletter, parceiro-agrohub |
| `utm_medium` | Tipo de tráfego, lista fechada | cpc, social, email, organico-social, parceria, whatsapp, qr |
| `utm_campaign` | Campanha ou tema, com data quando recorrente | kit-varanda-2026-11, black-friday-2026 |
| `utm_content` | Código da peça ou variação | B12, R31, N14, criativo-a |
| `utm_term` | Palavra-chave ou público, só em mídia paga | horta-apartamento |

Regras gerais:

- minúsculas sempre, porque `Instagram` e `instagram` viram duas linhas;
- hífen entre palavras, sem espaço nem acento;
- lista fechada de `utm_medium`, registrada no plano, para que o
  agrupamento de canais funcione;
- `utm_content` carrega o código da peça do catálogo, o que liga o clique
  ao acervo;
- nunca use UTM em link interno do próprio site, porque isso reinicia a
  sessão e apaga a origem real.

## Casos que pedem cuidado

| Caso | O que fazer |
| --- | --- |
| Link na bio do Instagram | Uma UTM fixa para a bio (`utm_medium=organico-social`, `utm_content=bio`) |
| Botão de WhatsApp | O clique vira evento `whatsapp_clicado`. A origem da conversa vai em código na mensagem pré-preenchida, implementado por `inboundfy-rastreamento-conversao` |
| Link enviado em grupo de WhatsApp | `utm_medium=whatsapp`, `utm_source` com o nome do grupo ou da lista de transmissão |
| QR code em material impresso | `utm_medium=qr`, `utm_source` com o local (feira, embalagem, cartaz) |
| Tráfego de assistentes de IA | Crie um agrupamento de canal para referenciadores como chatgpt.com, perplexity.ai, gemini.google.com e copilot.microsoft.com. Esse tráfego cresce e se mistura com referência comum |
| Parceiros e afiliados | `utm_medium=parceria`, `utm_source` com o nome do parceiro, `utm_campaign` com o acordo |

## Cadência de leitura

| Frequência | O que olhar | Quem |
| --- | --- | --- |
| Semanal | Funil da semana contra a média de quatro semanas, campanhas ativas | Marketing |
| Mensal | Perguntas do plano, metas, peças com resultado, limites que mudaram | Marketing e direção |
| Trimestral | Revisão do plano: perguntas que perderam sentido, eventos sem uso | Direção |

## Regras de leitura

1. Diga a fonte e o período de cada número.
2. Mostre o número absoluto ao lado de cada taxa.
3. Compare com a variação normal do período anterior antes de chamar algo
   de queda ou alta.
4. Alinhe as janelas: quem entrou em outubro e comprou em até 30 dias, não
   quem entrou em outubro contra quem comprou em outubro.
5. Corte por canal, persona e oferta só quando cada grupo tiver volume para
   leitura (uma regra prática é ao menos 30 conversões no grupo).
6. Termine cada bloco com a ação proposta e a skill responsável.

## Modelo de leitura mensal

```markdown
## {{Mês}}: {{pergunta}}

- Número: {{valor absoluto}} ({{taxa}} de {{denominador}})
- Mês anterior: {{valor}} | variação normal: {{faixa}}
- Fonte: {{ferramenta}}, extraído em {{data}}
- Leitura: {{o que mudou e a explicação mais provável}}
- Ação: {{o que fazer}} | skill: {{skill}}
```
