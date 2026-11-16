# Blocos citáveis e autoridade

Leia no passo 5 do fluxo de `inboundfy-geo`, ao revisar ou briefar uma
página que deveria ser citada.

## Bloco autocontido

Uma IA extrai trechos, não páginas inteiras. Cada bloco precisa fazer
sentido lido sozinho, sem "como vimos acima" nem pronome solto.

Teste: copie o parágrafo para um documento vazio. Ele responde à pergunta,
nomeia o assunto e traz a condição principal? Se não, reescreva.

| Antes | Depois |
| --- | --- |
| "Isso ajuda bastante a reduzir o problema." | "O lembrete por WhatsApp 24 horas antes do horário reduz faltas em salões." |
| "Nosso sistema faz isso automaticamente." | "A Agenda Viva envia o lembrete e cobra o sinal por Pix sem ação do atendente." |

## Formatos que se deixam extrair

| Formato | Quando usar | Regra |
| --- | --- | --- |
| Resposta curta | Abertura de toda página que responde a uma pergunta | Até três frases, com a resposta na primeira |
| Definição | Termos que a persona não domina | "X é Y que faz Z." numa frase |
| Passo a passo | Como fazer | Lista numerada, um verbo por passo |
| Tabela | Comparação, preço, especificação | Cabeçalho claro, unidade em cada coluna, valores em texto |
| Faixa de preço | Quanto custa | Valor mínimo, máximo e o que muda o preço |
| Pergunta e resposta | Dúvidas reais | Só perguntas que clientes fazem, respondidas em até 80 palavras |

Heading descritivo ajuda o leitor e a extração: "Quanto custa um sistema de
agenda para salão", não "Investimento".

## Autoridade verificável

| Sinal | Como aplicar | Situação |
| --- | --- | --- |
| Dado próprio | Número da base de clientes, pesquisa feita pela empresa, caso medido | Hipótese apoiada: aumenta a chance de citação por ser informação única |
| Fonte externa citada | Link para órgão oficial, pesquisa com data | Observável: respostas de IA preferem páginas com fontes |
| Autoria | Nome, cargo e experiência de quem assina | Oficial na orientação de qualidade do Google para temas sensíveis |
| Data de atualização | Visível perto do título | Observável: conteúdo recente é preferido em temas que mudam |
| Consistência | Mesmo nome, preço e descrição no site e em terceiros | Hipótese apoiada: reduz respostas contraditórias |
| Citação de especialista | Frase de profissional identificado | Hipótese |

Dado próprio exige origem registrada no `pesquisa.md` do acervo e
autorização para publicar. Dado de cliente segue a LGPD: agregado, sem
identificar pessoa ou estabelecimento sem consentimento.

## Descrição canônica da marca

Escreva uma frase que a IA deveria repetir e use-a igual na Home, na página
Sobre, nos perfis externos e nos diretórios:

```text
{{Marca}} é {{categoria}} para {{público}} que {{função principal}}, com
{{diferencial verificável}}, disponível em {{região}} a partir de {{preço}}.
```

Exemplo fictício: "A Agenda Viva é um software de agendamento on-line para
salões, barbearias e clínicas de estética que envia lembretes por WhatsApp e
cobra sinal por Pix, disponível em todo o Brasil a partir de R$ 89 por mês."

A frase vem de `.inboundfy/context/empresa.md` e `.inboundfy/context/ofertas.md`.
Quando esses arquivos divergirem, pare e acione `inboundfy-contexto-oferta`.

## Páginas que mais costumam ser citadas

- Comparativos honestos, com tabela e eixos de comparação explícitos.
- Guias de "como fazer" com passos numerados.
- Páginas de preço com valores em texto.
- Glossários e definições do nicho.
- Pesquisas e relatórios com dados próprios.

Para comparativos com concorrentes nomeados, confira em
`.inboundfy/context/concorrentes.md` se a citação nominal é permitida.

## O que não fazer

- Repetir a pergunta exata em todos os headings.
- Criar dezenas de páginas de pergunta e resposta rasas.
- Esconder conteúdo para humanos e mostrar outro para robôs.
- Publicar afirmação sem fonte para parecer especialista.
- Atribuir experiência ao autor do projeto a partir de fonte externa.
