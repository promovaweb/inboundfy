# Modelos de atribuição calculados

Leia no passo 4 do fluxo. A forma mais rápida de entender um modelo é
aplicá-lo ao mesmo percurso e olhar para onde o crédito vai.

## Percurso de referência

Uma cliente fictícia da loja **Ervas do Cerrado**, que vende chás a granel,
fez uma compra de R$ 240 pagos por Pix. Antes disso, teve quatro pontos de
contato registrados:

| Ordem | Dia | Canal | Peça |
| --- | --- | --- | --- |
| 1 | 1 | Instagram orgânico | Reels sobre chá para dormir |
| 2 | 9 | Busca orgânica | Artigo "camomila ou melissa" |
| 3 | 15 | Email | Newsletter com cupom |
| 4 | 16 | Google Ads de marca | Anúncio "Ervas do Cerrado" |

## Crédito por modelo

| Modelo | Regra | Instagram | Busca | Email | Google Ads |
| --- | --- | ---: | ---: | ---: | ---: |
| Primeiro contato | 100% ao primeiro | R$ 240 | 0 | 0 | 0 |
| Último contato | 100% ao último | 0 | 0 | 0 | R$ 240 |
| Último não direto | 100% ao último que não é direto | 0 | 0 | 0 | R$ 240 |
| Linear | partes iguais | R$ 60 | R$ 60 | R$ 60 | R$ 60 |
| Decaimento no tempo (meia-vida de 7 dias) | mais peso a quem está perto da compra | R$ 21 | R$ 46 | R$ 82 | R$ 91 |
| Posição (40/20/40) | 40% primeiro, 40% último, 20% dividido no meio | R$ 96 | R$ 24 | R$ 24 | R$ 96 |

O cálculo do decaimento usa peso igual a 2 elevado a (menos dias até a
compra dividido por 7). O Instagram, 15 dias antes, recebe 0,23. A busca, 7
dias antes, recebe 0,50. O email, 1 dia antes, recebe 0,91. O Google Ads, no
dia da compra, recebe 1,00. A soma dá 2,64. Cada peso dividido pela soma,
multiplicado por R$ 240, gera o crédito da tabela. Em planilha, basta uma
coluna de peso e outra de peso dividido pela soma.

A diferença entre os modelos mostra o papel de cada canal. O Instagram abre
o percurso. O Google Ads de marca fecha uma venda que já estava encaminhada.
O artigo ajudou a escolher o produto. Nenhum modelo está "certo": cada um
responde uma pergunta diferente.

## Modelo baseado em dados

Ferramentas como GA4 e Google Ads oferecem atribuição baseada em dados. A
ideia vem da teoria dos jogos: o crédito de um canal é a diferença média que
ele faz quando entra ou sai das combinações de percursos observadas. Isso
exige volume. Com menos de algumas centenas de conversões por mês, o modelo
oscila e tende a repetir o último clique. Ele também só enxerga o que a
própria ferramenta registra, então o WhatsApp sem código continua invisível.

## Qual modelo usar para cada pergunta

| Pergunta | Modelo indicado | Por quê |
| --- | --- | --- |
| Quais canais trazem gente nova? | Primeiro contato | Mostra quem abre o percurso |
| Quais canais fecham a venda? | Último não direto | Mostra o empurrão final sem contar digitação direta |
| Qual peça de conteúdo merece mais pauta? | Primeiro contato e linear | Conteúdo raramente é o último toque |
| Ciclo curto, compra por impulso (e-commerce até R$ 200) | Último não direto e decaimento | Poucos toques, peso perto da compra faz sentido |
| Ciclo longo B2B (30 a 120 dias, vendedor envolvido) | Posição ou linear, mais autorrelato | Muitos toques, alguns fora do site |
| Volume alto e uma só plataforma dominante | Baseado em dados | Tem amostra para estimar |

## Como apresentar a comparação

Mostre sempre pelo menos três modelos lado a lado, com a mesma base de
percursos. Destaque o canal que mais muda de posição entre os modelos: é ali
que mora a conversa útil com quem decide o orçamento. Diga a base ("65
percursos rastreáveis de 120 vendas") para que ninguém leia o quadro como se
cobrisse todas as vendas.
