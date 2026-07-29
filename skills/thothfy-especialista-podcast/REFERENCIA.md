# REFERENCIA.md — thothfy-especialista-podcast

Material de apoio para pauta de gravação e shownotes de episódio.

## Template de pauta (guia interno, não roteiro fechado)

```yaml
---
apresentadores: <de context/pessoas.md>
convidado: <se houver>
data: <data de gravação>
brief: content/<pacote>/04-briefs/podcast-<slug>.md
---

## Bloco 1 — <objetivo do bloco>
Perguntas-guia:
- <pergunta 1>
- <pergunta 2>

## Bloco 2 — <objetivo do bloco>
Perguntas-guia:
- <pergunta 1>
```

## Template de shownotes

```yaml
---
apresentadores: <...>
convidado: <...>
data: <...>
brief: <...>
---

# <Título do episódio>

<Resumo do episódio em 2-3 frases>

## Principais pontos
- <ponto 1>
- <ponto 2>

## Links citados
- <ferramenta/produto> — confirmado contra context/ferramentas.md ou context/produtos.md
```

## Exemplo completo (fictício)

**Pauta (trecho):**

```markdown
## Bloco 1 — Abrir o tema da fila de espera
Perguntas-guia:
- Quando você percebeu que a fila de espera não era sobre número de gente?
- Que sinal te fez desconfiar disso primeiro?

## Bloco 2 — O encaixe de horário na prática
Perguntas-guia:
- Como era o processo de encaixe antes de mudar?
- O que mudou primeiro quando vocês passaram a ver a agenda inteira?
```

**Shownotes (trecho):**

```markdown
# Por que sua fila de espera não é sobre falta de gente

Neste episódio, Marina Alves conta como identificou que o problema de fila
de espera em clínicas pequenas raramente é sobre número de profissionais —
é sobre o encaixe de horário que ninguém vê isolado.

## Principais pontos
- O buraco de 15 minutos entre consultas que se acumula ao longo da semana.
- Como uma grade visual de agenda facilita ver esse buraco.
- Por que contratar mais gente sem resolver o encaixe só desloca o problema.

## Links citados
- Agenda Cronos — sistema de agendamento citado no episódio.
```

## Checklist de canal

- [ ] Apresentador(es)/convidado conferem com `context/pessoas.md`.
- [ ] Pauta é guia de blocos com perguntas, não roteiro fechado palavra por
      palavra.
- [ ] Shownotes passam pela auditoria de `thothfy-base-editor`; a pauta,
      por ser interna, não passa pela mesma régua de prosa pública.
- [ ] Links citados conferem com `context/ferramentas.md` ou
      `context/produtos.md`.

## Erros comuns

- Escrever a pauta como roteiro fechado, o que trava a naturalidade da
  conversa gravada.
- Publicar shownotes com resumo genérico que poderia servir para qualquer
  episódio do programa.
- Citar ferramenta ou produto nos shownotes sem confirmar grafia ou
  permissão de menção em `context/`.
