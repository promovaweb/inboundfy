# Síntese e posicionamento competitivo

Leia nos passos 5 e 6 do fluxo de `inboundfy-concorrentes`. Este arquivo
transforma perfis soltos em comparação utilizável: a tabela lado a lado, o mapa
de posicionamento, a matriz de mensagens, a lista de lacunas e os três caminhos
de uso apresentados ao usuário.

## Tabela lado a lado

Antes de montar a tabela, fixe o recorte e escreva-o acima dela:

```text
Recorte: salão com 3 profissionais, plano mensal, preço sem promoção,
consultado entre 2026-11-10 e 2026-11-12.
```

Organize as linhas por tarefa da persona, não pela lista de recursos de um dos
lados. Para cada linha, descreva como a alternativa resolve a tarefa em vez de
marcar só sim ou não.

| Tarefa da persona | Projeto | Rival A | Rival B | Substituta |
| --- | --- | --- | --- | --- |
| {tarefa} | {como resolve, com prova} | {como resolve, com fonte} | {...} | {...} |
| Custo mensal no recorte | R$ {valor} | R$ {valor} | R$ {valor} | {custo de tempo ou perda} |

Inclua pelo menos uma linha vencida por um rival. Uma tabela na qual o projeto
ganha em tudo perde credibilidade com a persona e com a equipe comercial.

## Mapa de posicionamento

Escolha dois eixos que a persona considera na escolha. Eixos genéricos como
"qualidade" e "preço" quase nunca separam as alternativas.

| Par de eixos | Quando usar |
| --- | --- |
| Simples de começar x completo em recursos | Mercado com ferramentas para iniciantes e para operações maiores |
| Faça você mesmo x serviço feito pela empresa | Disputa entre software e agência ou consultoria |
| Preço por uso x preço fixo | Cobrança por profissional, por mensagem ou por pedido contra mensalidade única |
| Foco em um nicho x atende qualquer setor | Ferramentas verticais contra horizontais |
| Captação de clientes novos x retenção dos atuais | Ferramentas de marketing e agenda com vitrine |

Represente o mapa em texto ou tabela simples:

```text
                 Alto controle de faltas
                          |
          Agendaí         |
                          |
Baixa captação -----------+----------- Alta captação
                          |
   Caderno e WhatsApp     |       MarcaJá
                          |
                 Baixo controle de faltas
```

Depois do mapa, escreva em uma frase qual quadrante está vazio e se o projeto
tem prova para ocupá-lo. Quadrante vazio sem prova é hipótese, não
oportunidade.

## Matriz de mensagens

Compare o que cada alternativa diz, não o que ela tem.

| Elemento | Projeto | Rival A | Rival B |
| --- | --- | --- | --- |
| Promessa principal | | | |
| Dor que abre a página | | | |
| Mecanismo explicado | | | |
| Prova mais forte | | | |
| Objeção tratada | | | |
| CTA primário | | | |

Leitura da matriz:

- duas alternativas com a mesma promessa indicam uma categoria saturada; o
  projeto precisa de outro ângulo ou de prova muito superior;
- uma dor que ninguém cita e que aparece nas avaliações é candidata a ângulo;
- uma objeção que todos evitam (fidelidade, taxa, migração) costuma render
  conteúdo de alta confiança.

## Lacunas

| Tipo de lacuna | Pergunta que revela | Exemplo |
| --- | --- | --- |
| Mensagem | Que dor a persona sente e nenhum rival nomeia? | Ninguém fala do custo da falta no fim do mês |
| Conteúdo | Que pergunta de busca não tem resposta boa? | "quanto cobrar de sinal no salão" |
| Oferta | Que condição comercial incomoda nos rivais? | Taxa sobre pagamento antecipado |
| Prova | Que alegação todos fazem e ninguém comprova? | "Reduz faltas" sem número |
| Público | Que segmento os rivais ignoram? | Salões fora das capitais |

Toda lacuna recebe a prova que o projeto tem para ocupá-la. Sem prova, ela vai
para a lista de perguntas abertas ou para `inboundfy-pesquisa-cliente`.

## Comparação forças e fraquezas

Use quando a pergunta envolver um rival específico:

| Quadro | Pergunta |
| --- | --- |
| Onde o rival é mais forte | O que ele faz melhor, para quem, com que prova? |
| Onde o projeto é mais forte | O que o projeto faz melhor, para quem, com que prova? |
| Oportunidade | Que mudança de mercado ou queixa do rival favorece o projeto? |
| Ameaça | Que movimento do rival pode tirar clientes do projeto nos próximos seis meses? |

## Três caminhos de uso

Feche a síntese com três caminhos realmente diferentes, o recomendado primeiro.
Modelos comuns:

| Caminho | Quando recomendar | Skill seguinte |
| --- | --- | --- |
| Reposicionar a promessa | A matriz mostra mensagem igual à dos rivais | `inboundfy-copy-posicionamento` |
| Abrir conjunto de páginas comparativas | Persona busca o nome do rival e o projeto tem prova | `inboundfy-arquitetura-site`, depois `inboundfy-seo` |
| Preparar argumentos de venda | Perdas comerciais concentradas em um rival | `inboundfy-enablement-vendas` |
| Desmontar funil e anúncios do rival | O rival cresce por um canal que o projeto não usa | `inboundfy-engenharia-reversa` |
| Pauta de conteúdo de lacuna | Perguntas de busca sem boa resposta | `inboundfy-estrategia` ou `inboundfy-planejamento` |
| Ajustar oferta ou preço | Condição comercial do rival incomoda a persona | `inboundfy-copy-oferta` ou `inboundfy-growth-pricing` |

## Ficha de argumentos para vendas

Quando o caminho escolhido for vendas, entregue a ficha abaixo para
`inboundfy-enablement-vendas` completar:

```markdown
## {Rival}: ficha rápida

- **Quando aparece:** {perfil do cliente que considera o rival}
- **O que o cliente gosta nele:** {ponto forte real}
- **Pergunta que muda a conversa:** {pergunta de descoberta}
- **Diferença com prova:** {diferença, prova e fonte}
- **Objeção que ele planta e resposta:** {objeção, resposta com prova}
- **Quando indicar o rival:** {perfil para quem ele é a melhor escolha}
- **Dados válidos até:** {AAAA-MM-DD}
```
