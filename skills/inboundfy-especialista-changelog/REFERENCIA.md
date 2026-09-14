# REFERENCIA.md; inboundfy-especialista-changelog

Material de apoio para traduzir mudança técnica em entrada de changelog
legível.

## Template de entrada

```yaml
---
data: <data do release>
tipo: <novidade|melhoria|correcao>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## <Nome da funcionalidade ou área afetada>

<O que mudou, em uma ou duas frases diretas>

<Por que importa para quem usa>

<Ação necessária, se houver; ou "nenhuma ação necessária">
```

## Exemplo completo (fictício)

```markdown
---
data: 2026-03-10
tipo: melhoria
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Grade visual de agenda

A visualização da agenda agora mostra o dia inteiro numa grade única, com
os horários ocupados destacados, em vez da lista sequencial por paciente.

Isso facilita ver de uma vez os buracos entre consultas que antes só
apareciam ao rolar a lista item por item; útil para quem organiza o
encaixe de horário na recepção.

Nenhuma ação necessária: a grade aparece automaticamente na próxima vez que
a agenda for aberta.
```

## Checklist de canal

- [ ] Nome de produto/funcionalidade confere com `context/produtos.md` e
      `context/glossario.md`.
- [ ] Diz claramente o que mudou, para quem importa e se há ação necessária.
- [ ] Sem jargão de commit interno ("refatora módulo X", "fix de race
      condition"); traduza para o efeito visível ao usuário.
- [ ] Classificação de tipo (novidade/melhoria/correção) condiz com a
      mudança descrita.

## Erros comuns

- Copiar a mensagem de commit ou pull request como se fosse a entrada final
; o changelog é para o usuário, não para o time técnico.
- Omitir a ação necessária quando ela existe (ex.: "é preciso reconectar a
  integração X").
- Descrever a mudança em termos vagos ("melhorias de performance") sem
  dizer o que o usuário percebe na prática.
