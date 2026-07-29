# REFERENCIA.md — thothfy-especialista-blog

Material de apoio para escrever artigos de blog que respondem intenção de
busca real, com FAB aplicado a qualquer menção de produto.

## Template de frontmatter e estrutura

```yaml
---
title: <50-60 caracteres>
description: <145-155 caracteres, com CTA>
slug: <curto, sem stop words>
focus-keyword: <intenção validada por thothfy-base-seo>
brief: content/<pacote>/04-briefs/blog-<slug>.md
---

# <H1 — mesma intenção do title>

<corpo em prosa contínua, hierarquia H2/H3>
```

## Fórmulas de abertura por intenção

1. **Informativa** — abra pelo objeto e pela confusão comum: "Confundir X
   com Y é o erro mais comum de quem começa a fazer [tarefa]. A diferença
   está em [mecanismo real]." Não abra com "o que é X" seguido de definição
   de dicionário.
2. **Comparativa** — abra pelo critério de decisão, não pelos dois lados:
   "A escolha entre X e Y quase nunca é sobre qual é melhor — é sobre qual
   erro custa mais caro no seu caso." Depois desenvolva o critério.
3. **Investigativa** — abra reconhecendo a dúvida legítima: "Vale a pena
   trocar de sistema no meio do ano? Depende do que está doendo hoje, não
   do que promete o vendedor." Depois traga evidência dos dois lados.

## Exemplo completo (fictício)

Empresa fictícia: "Agenda Cronos", software de agendamento para clínicas
pequenas. Intenção: investigativa ("vale a pena migrar de agenda de papel
para um sistema?").

```markdown
---
title: Migrar da agenda de papel para um sistema: vale a pena?
description: Comparamos o custo real de manter agenda de papel numa clínica pequena com o de migrar para um sistema, incluindo o que costuma dar errado na troca.
slug: migrar-agenda-papel-sistema-vale-a-pena
focus-keyword: vale a pena migrar agenda de papel para sistema
---

# Migrar da agenda de papel para um sistema: vale a pena?

Uma recepção que ainda usa caderno de agendamento perde hora de atendimento
todo santo dia em telefonema de confirmação e remarcação escrita a lápis. O
custo não aparece na planilha do mês, mas aparece na fila de pessoas
esperando enquanto alguém procura o nome certo na página certa.

A pergunta não é se um sistema resolve isso — resolve. A pergunta é quando
compensa trocar, porque toda migração tem um período em que a equipe erra
mais até se acostumar com o novo fluxo.

## Quando a troca compensa

Se a clínica agenda mais de trinta consultas por semana e tem mais de uma
pessoa mexendo na mesma agenda, o caderno já criou um problema que nenhum
treinamento resolve: duas pessoas escrevendo no mesmo horário sem ver a
letra uma da outra. Um sistema de agendamento resolve isso mostrando o
horário ocupado em tempo real para quem estiver com a tela aberta, o que
elimina o double-booking sem depender de conferência manual.

## O que costuma dar errado na migração

A falha mais comum não é o sistema — é a recepção continuar anotando no
caderno "por garantia" nas primeiras semanas, o que cria duas fontes de
verdade e apaga o ganho da migração. O jeito de evitar isso é definir uma
data de corte clara e desligar o caderno de vez, não aos poucos.
```

## Checklist de canal

- [ ] Um H1 só, com a mesma intenção do `title`.
- [ ] Nenhum heading em formato pergunta-resposta genérica.
- [ ] Toda menção de produto/serviço fecha em benefício real (FAB), não
      fica solta como propaganda.
- [ ] `brief` presente no frontmatter quando parte de pacote.

## Erros comuns

- Escrever o artigo inteiro antes de rodar `thothfy-base-seo` — o title e o
  slug mudam o ângulo do artigo, não só a metadata.
- Repetir a mesma estrutura de abertura em todo artigo do mesmo pacote (ver
  `ESCRITA.md` sobre reaproveitamento mecânico entre peças do mesmo pacote).
- Prometer resultado de produto sem base em `context/produtos.md` só para
  soar mais persuasivo — isso é o oposto do que FAB pede.
