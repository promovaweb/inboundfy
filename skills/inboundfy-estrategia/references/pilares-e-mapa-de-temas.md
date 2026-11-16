# Pilares e mapa de temas

Leia no passo 5 do fluxo, antes de dividir a campanha em fases. Os pilares
dizem sobre o que a marca fala. O mapa de temas diz quais assuntos entram em
cada etapa de compra e na ordem certa.

## Pilares editoriais

Um pilar é um território de assunto que liga um problema recorrente da
persona à oferta da empresa. O projeto trabalha com três a cinco pilares.

### Como definir

1. Liste os problemas que a persona resolve com a oferta
   (`context/publico.md` e `context/ofertas.md`).
2. Agrupe problemas parecidos. Cada grupo é um candidato a pilar.
3. Teste cada candidato com quatro perguntas:
   - A persona procura esse assunto ou conversa sobre ele?
   - A empresa tem autoridade ou experiência real nele?
   - O assunto leva naturalmente à oferta?
   - Rende pelo menos 15 temas diferentes?
4. Fique com os candidatos que passam nas quatro.
5. Nomeie cada pilar pelo problema, não pela empresa ("Controle sem
   planilha", não "Recursos do Estoquely").

### Modelo

```markdown
### Pilar: {{nome}}

- **Problema da persona:** {{situação concreta}}
- **Ligação com a oferta:** {{como a oferta resolve}}
- **Autoridade da empresa:** {{experiência, dado próprio, clientes}}
- **Tipo predominante:** {{busca | compartilhamento | misto}}
- **Subtemas:** {{cinco a dez subtemas}}
- **Peso no calendário:** {{percentual}}
```

## Temas por etapa de compra

| Etapa | O que a persona pensa | Formato de tema | Exemplos de modificador de busca |
| --- | --- | --- | --- |
| Descoberta | "Tenho um problema e não sei o nome dele" | Explicação, diagnóstico, lista de sinais | o que é, por que, como saber se |
| Consideração | "Conheço as soluções e estou comparando" | Comparativo, guia de escolha, prós e contras | melhor, comparativo, alternativa a, vale a pena |
| Escolha | "Estou quase escolhendo, preciso de segurança" | Caso, preço, demonstração, implantação | preço, quanto custa, avaliação, teste grátis |
| Retenção | "Já comprei, quero tirar mais proveito" | Tutorial, boas práticas, novidades | como fazer, passo a passo, atalho |

Distribuição de partida para uma campanha de geração de demanda: 50%
descoberta, 30% consideração, 15% escolha, 5% retenção. Campanha de
retenção ou expansão inverte a pirâmide.

## Fontes de temas

| Fonte | O que extrair | Onde fica |
| --- | --- | --- |
| Perguntas do time de vendas e suporte | Dúvidas reais com as palavras do cliente | conversas de WhatsApp, tickets, CRM |
| Acervo processado | Teses, FAQ e objeções já extraídas | `acervo/*/faq.md` e `base-editorial.md` |
| Pesquisa de palavras-chave | Volume e intenção de busca | `inboundfy-seo` |
| Pesquisa de mercado da etapa 01 | Lacunas não cobertas | `00-briefing/pesquisa-mercado.md` |
| Comunidades e avaliações | Reclamações e comparações espontâneas | grupos, fóruns, avaliações de apps |
| Dados próprios | Números que só a empresa tem | relatórios internos com autorização de uso |

## Agrupamento em clusters

Para temas de busca, agrupe por cluster: uma página principal ampla
(pilar) e páginas de apoio específicas que linkam para ela.

```text
Página principal: Controle de estoque para loja pequena
├── Planilha de estoque: quando ela para de funcionar
├── Como fazer contagem mensal de estoque em 2 horas
├── Estoque mínimo: como calcular
└── Comparativo: planilha, sistema ou ERP
```

A arquitetura de páginas e links internos segue para
`inboundfy-arquitetura-site`.

## Pontuação de prioridade

Pontue cada tema de 1 a 5 em quatro dimensões. Multiplique pelos pesos e
some.

| Dimensão | Peso | Pergunta |
| --- | --- | --- |
| Impacto no objetivo | 35% | Quanto o tema ajuda o KPI da campanha? |
| Encaixe com a oferta | 25% | O tema leva naturalmente à oferta? |
| Potencial de busca ou compartilhamento | 25% | Há volume de busca ou chance real de ser repassado? |
| Esforço (invertido) | 15% | A equipe produz com o que já tem? 5 = pouco esforço. |

Temas acima de 4,0 entram na fase atual. Entre 3,0 e 4,0 vão para reserva.
Abaixo de 3,0 saem do plano.

### Exemplo de pontuação

| Tema | Impacto | Oferta | Potencial | Esforço | Total |
| --- | --- | --- | --- | --- | --- |
| Quanto tempo um lojista perde cadastrando produto | 5 | 5 | 4 | 4 | 4,6 |
| Estoque mínimo: como calcular | 4 | 4 | 5 | 5 | 4,4 |
| Tendências do varejo em 2027 | 2 | 1 | 3 | 2 | 2,0 |

## Erros comuns

- Pilar com nome de produto.
- Mapa só com temas de descoberta, sem nada que leve à escolha.
- Pontuação feita depois de escolher os temas, só para justificar.
- Tema de busca sem conferir a intenção real da consulta.
