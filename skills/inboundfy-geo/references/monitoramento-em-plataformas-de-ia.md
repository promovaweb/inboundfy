# Monitoramento em plataformas de IA

Leia nos passos 3 e 4 do fluxo de `inboundfy-geo`.

## Carteira de perguntas

A carteira é a lista fixa de perguntas testadas em toda rodada. Sem lista
fixa, não há comparação entre meses.

Monte de 15 a 40 perguntas, distribuídas assim:

| Tipo | Exemplo fictício | Peso sugerido |
| --- | --- | --- |
| Melhor opção | Qual o melhor sistema de agendamento para barbearia? | 30% |
| Comparação | Agenda Viva ou concorrente X para salão pequeno? | 15% |
| Como fazer | Como reduzir faltas de clientes no salão? | 25% |
| Preço | Quanto custa um sistema de agenda para salão? | 10% |
| Definição | O que é sinal de reserva? | 10% |
| Marca | O que é a Agenda Viva? É confiável? | 10% |

Fontes das perguntas: conversas de venda e suporte, WhatsApp, perguntas
extraídas por `inboundfy-extrair-faq`, consultas do Search Console com mais
de seis palavras e "As pessoas também perguntam" do Google. Escreva como a
persona fala, não como a empresa descreve o produto.

## Plataformas da rodada

| Plataforma | Como testar | Observação |
| --- | --- | --- |
| ChatGPT | Com busca ativada, conversa nova, sem histórico | Mostra fontes ao fim ou em links inline |
| Perplexity | Modo padrão | Lista fontes numeradas; bom para ver quem é citado |
| Gemini | Conversa nova | Pode responder sem fonte; registre isso |
| Google com visão geral de IA | Busca comum, janela anônima, localização Brasil | Aparece só em parte das buscas |
| Copilot | Conversa nova | Usa o índice do Bing; confira presença no Bing Webmaster Tools |

Use janela anônima ou conta sem histórico para reduzir personalização.
Registre se a pergunta foi feita logado ou não.

## Registro de cada teste

| Campo | Como preencher |
| --- | --- |
| Data | AAAA-MM-DD |
| Plataforma e modo | ChatGPT com busca, Perplexity padrão etc. |
| Execução | 1 ou 2 |
| Marca citada | Sim quando um link do site aparece como fonte |
| Marca recomendada | Sim quando a marca é sugerida como opção, com ou sem link |
| Posição na lista | 1ª, 2ª, 3ª opção ou não aparece |
| Concorrentes | Nomes que aparecem |
| Fontes citadas | URLs |
| Exatidão | Preço, função, região e nome corretos? |

## Citação e recomendação

São resultados diferentes e pedem ações diferentes.

| Situação | O que significa | Ação provável |
| --- | --- | --- |
| Citada e recomendada | A página serve de fonte e a marca é sugerida | Manter e atualizar a página |
| Citada, não recomendada | A página explica bem, mas a IA sugere outras marcas | Reforçar presença em listas e avaliações de terceiros |
| Recomendada, não citada | A IA conhece a marca por fontes de terceiros | Conferir exatidão dessas fontes; criar página própria que responda |
| Nem citada nem recomendada | Ausência | Página citável e presença externa |
| Citada com erro | A IA repete informação desatualizada | Corrigir a fonte original e deixar o dado em texto no site |

## Cadência

- Primeira rodada completa no diagnóstico.
- Rodada mensal com a carteira inteira.
- Rodada extra 30 dias depois de uma mudança grande (página nova, perfil em
  diretório, correção de preço).

Ferramentas pagas de monitoramento automatizam a coleta. Elas ajudam em
carteiras grandes, mas o teste manual continua necessário para ler o
contexto das respostas.

## Tráfego de referência

Peça a `inboundfy-metricas` um segmento de sessões com origem em
`chatgpt.com`, `perplexity.ai`, `gemini.google.com` e
`copilot.microsoft.com`. Parte das visitas chega sem referência e aparece como
tráfego direto, então o número real é maior que o registrado.
