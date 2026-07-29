# REFERENCIA.md — thothfy-base-seo

Material de apoio para decidir intenção de busca, metadata e linkagem antes
de qualquer skill de canal escrever título, description ou outline.

## Classificação de intenção de busca

Toda peça orientada a busca precisa de uma classificação antes da escrita:

| Intenção | Sinal na busca | O que a peça precisa fazer |
| --- | --- | --- |
| Informativa | "o que é", "como funciona", "por que" | Responder a dúvida direto no início, sem enrolar até o H2. |
| Comparativa | "X ou Y", "X vs Y", "melhor entre" | Trazer critério de comparação explícito, tabela quando fizer sentido, e veredito qualificado (não genérico). |
| Transacional | "contratar", "preço", "comprar", "onde encontrar" | Levar a uma ação clara, com oferta e CTA específicos — usar `ESTRUTURAS-PERSUASIVAS.md`. |
| Investigativa | "é confiável", "vale a pena", "funciona mesmo" | Trazer evidência, limite e contraponto honesto — não só argumento a favor. |

Sem essa classificação e sem a pergunta real do leitor por trás da busca, a
skill de canal não deve escrever título, slug, H1 ou outline.

## Template de metadata

```yaml
title: <50-60 caracteres, sem sufixo de marca genérico, com a intenção clara>
description: <145-155 caracteres, com palavra-chave principal e CTA>
slug: <curto, sem stop words, alinhado ao termo de busca real>
focus-keyword: <termo ou frase que resume a intenção validada>
```

## Checklist de metadata

- [ ] `title` entre 50 e 60 caracteres.
- [ ] `description` entre 145 e 155 caracteres, com CTA.
- [ ] `slug` curto, sem stop words redundantes.
- [ ] `focus-keyword` reflete a intenção classificada acima, não um tema
      genérico.
- [ ] H1 único; hierarquia H2/H3 sem pular nível.
- [ ] Nenhum heading é pergunta seguida de resposta genérica de uma linha.
- [ ] Primeira menção de produto, serviço ou ferramenta linkada para a
      página própria (`context/produtos.md`, `context/servicos.md`,
      `context/ferramentas.md`), quando existir.

## Erros comuns

- Definir o título antes de classificar a intenção — o título nasce da
  intenção, não o contrário.
- Usar `focus-keyword` genérico (nome de categoria ampla) em vez da
  pergunta real que a persona (`context/publico.md`) faz.
- Contar caracteres sem contar espaços, ou vice-versa — sempre conte a
  string completa como será exibida.
- Aprovar heading em formato pergunta-resposta em toda a peça, tornando o
  texto uma lista de perguntas frequentes disfarçada de artigo.

## Exemplo

Pergunta real: "vale a pena migrar um sistema de agendamento manual para um
software?" (intenção investigativa).

```yaml
title: Migrar do agendamento manual para software: vale a pena?
description: Comparamos custo de tempo, erro humano e escala entre agendamento manual e software, com o ponto exato em que a migração compensa.
slug: migrar-agendamento-manual-software
focus-keyword: vale a pena migrar agendamento manual para software
```
