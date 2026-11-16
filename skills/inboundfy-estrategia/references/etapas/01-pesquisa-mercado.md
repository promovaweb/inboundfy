# Etapa 01: pesquisa de mercado

Investiga o que o mercado já publica sobre o tema da campanha, onde há espaço
aberto e onde a empresa chegaria atrasada. Produz análise viva para uma
campanha específica. O cadastro permanente de concorrentes fica com
`inboundfy-contexto-concorrentes`. A escolha final de canal e tema fica com a
etapa 02.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/concorrentes.md`, como ponto de partida do que já se sabe.
- `context/publico.md`, para pesquisar sob a ótica da persona prioritária.
- `context/ferramentas.md`, quando a pesquisa envolver comparação de
  ferramentas.

## Entrada esperada

`00-briefing/brief-cliente.md` da campanha em andamento, ou tema e mercado
indicados pela pessoa para pesquisa avulsa.

## Fluxo

1. Leia o brief e `context/concorrentes.md`.
2. Liste concorrentes diretos (mesma solução), indiretos (outra solução para
   o mesmo problema) e alternativas como planilha ou "não fazer nada".
3. Pesquise o que cada um publica agora sobre o tema: ângulo, canal,
   formato, frequência e sinal de engajamento observável. Use a ficha abaixo.
4. Pesquise o que a persona pergunta: buscas relacionadas, comunidades,
   avaliações e perguntas registradas pelo time de vendas.
5. Identifique lacunas com as perguntas guia.
6. Separe fato observável (com link e data de acesso) de interpretação. Não
   apresente hipótese como dado.
7. Concorrente novo ou dado desatualizado: acione
   `inboundfy-contexto-concorrentes` antes de fechar a análise. Análise
   detalhada de página ou funil de um concorrente: acione
   `inboundfy-engenharia-reversa`.
8. Salve em `<pacote-de-campanha>/00-briefing/pesquisa-mercado.md`.

## Fontes de pesquisa

| Fonte | O que observar | Cuidado |
| --- | --- | --- |
| Blog e site do concorrente | Temas, frequência, formato, CTA | Data de publicação, não só de atualização |
| Perfis em redes sociais | Formato, ritmo, comentários | Curtida não mostra venda |
| Resultados de busca do tema | Quem aparece, tipo de página, perguntas relacionadas | Resultado personalizado. Use navegação anônima |
| Bibliotecas públicas de anúncios das plataformas | Criativos ativos e há quanto tempo rodam | Anúncio ativo há meses sugere retorno, não comprova |
| Avaliações e comunidades | Reclamações e elogios espontâneos | Amostra enviesada para extremos |
| Time de vendas e suporte | Perguntas e comparações que o cliente traz | Registrar a frase exata |

## Ficha por concorrente ou tema

```markdown
### {{Concorrente ou tema}}

- **O que publica:** {{resumo, com link e data de acesso}}
- **Canal e formato:** {{onde e como}}
- **Frequência aparente:** {{cadência observada e período}}
- **Ângulo usado:** {{argumento ou promessa central}}
- **Sinal de engajamento observável:** {{comentários, compartilhamentos ou "não observável"}}
- **Interpretação (hipótese):** {{leitura da equipe, marcada como hipótese}}
```

## Perguntas guia de lacuna

- Que dúvida da persona nenhum concorrente respondeu com profundidade?
- Que formato a persona consome em outros contextos e os concorrentes não
  usam?
- Que mudança recente (regra, tecnologia, sazonalidade, preço) ainda não
  virou conteúdo no nicho?
- Que dado próprio a empresa tem e ninguém mais pode publicar?
- Onde todos os concorrentes dizem a mesma coisa? Ali uma posição contrária
  bem fundamentada se destaca.

## Modelo da análise

```markdown
# Pesquisa de mercado: {{campanha}}

## Escopo
{{Tema, persona, período pesquisado e data de acesso.}}

## Concorrentes e alternativas
| Nome | Tipo | Observado em |

## Fichas
{{Uma ficha por concorrente ou tema.}}

## Perguntas da persona
| Pergunta | Fonte | Coberta por concorrente? |

## Lacunas
| Lacuna | Fato que sustenta | Interpretação | Prioridade |

## Pendências para context/
- {{concorrente novo ou dado a atualizar}}
```

## Exemplo

Caso fictício. Não use como contexto real.

```markdown
### EstoqueFácil: blog

- **O que publica:** série semanal de artigos comparando planilha e sistema
  (blog.estoquefacil.example, acesso em 2026-07-20).
- **Canal e formato:** blog, artigos de 1.200 a 1.500 palavras.
- **Frequência aparente:** semanal nas últimas 8 semanas.
- **Ângulo usado:** "você não precisa trocar de planilha, só organizá-la
  melhor".
- **Sinal de engajamento observável:** não observável publicamente.
- **Interpretação (hipótese):** evitam o argumento de troca total porque o
  público resiste a mudar de ferramenta. O tempo de cadastro de produto não
  aparece em nenhum artigo.
```

Lacuna registrada: nenhum concorrente mostra o tempo real de cadastro de
produto. Fato: oito artigos lidos, nenhum com medição. Interpretação: a
persona pode estar sem resposta para "quanto tempo vou gastar para começar".

## Checklist

- [ ] Toda observação tem fonte e data de acesso.
- [ ] Fato e interpretação estão em campos separados.
- [ ] Alternativas indiretas e "não fazer nada" foram consideradas.
- [ ] Pelo menos uma lacuna acionável foi identificada.
- [ ] Concorrente novo ou dado desatualizado foi encaminhado.

## Erros comuns

- Apresentar suposição ("provavelmente convertem bem") como dado.
- Pesquisar de forma genérica, sem a persona do brief.
- Repetir o cadastro de `context/concorrentes.md` em vez de aprofundar o que
  mudou desde o último registro.
- Contar curtidas como prova de resultado comercial.
