# Calendário mensal

Leia no modo acervo, ao registrar a data de uma peça, e na etapa 05 quando a
peça de um pacote ganhar data. O formato é o mesmo gravado pelo comando
`inboundfy calendario add <data> <peca>` e lido por `inboundfy-catalogo`.

## Formato canônico

```markdown
# Calendário {{AAAA-MM}}

## {{AAAA-MM-DD}}

- [ ] **{{id}}** {{título}} · {{canal}} · personas: {{persona-01, persona-02}} · [peça](../canais/{{canal}}/{{id}}-{{data}}-{{slug}}/README.md) · estado: {{estado}}

## Reservas sem peça

- [ ] reserva · {{AAAA-MM-DD}} · {{canal}} · {{tema}} · campanha: {{nome ou "orgânico"}} · rota: {{skill}}
```

Regras:

- Uma data por heading de nível 2, no formato `AAAA-MM-DD`, em ordem
  cronológica.
- O ID em negrito é obrigatório. Sem ele, o catálogo ignora a linha.
- O link aponta para o `README.md` da pasta da peça.
- Estados válidos: `rascunho`, `revisao`, `aprovado`, `agendado`,
  `publicado`, `arquivado`.
- A caixa `[x]` marca peça publicada. Ao publicar, atualize também a URL no
  frontmatter da peça.
- Itens planejados por `inboundfy-estrategia` sem pasta aberta ficam em
  "Reservas sem peça". Quando a pasta é aberta, a reserva sai e a linha com
  ID entra sob a data.

## Reconciliação com o frontmatter

A linha do calendário não substitui o frontmatter da peça. Antes de salvar,
confira:

| Campo | Calendário | Frontmatter da peça |
| --- | --- | --- |
| ID | `**0058**` | `id: 0058` |
| Título | texto depois do ID | `titulo: "..."` |
| Canal | `blog` | `canal: blog` |
| Personas | `personas: persona-01` | `personas: [persona-01]` |
| Estado | `estado: rascunho` | `estado: rascunho` |

Divergência entre os dois registros é corrigida no mesmo passo. Se a fonte
correta não for clara, pergunte à pessoa.

## Exemplo

```markdown
# Calendário 2026-03

## 2026-03-10

- [x] **0055** Estoque mínimo: como calcular · blog · personas: persona-01 · [peça](../canais/blog/0055-2026-03-10-estoque-minimo/README.md) · estado: publicado

## 2026-03-17

- [ ] **0058** Por que o cliente cancela no primeiro mês · blog · personas: persona-01 · [peça](../canais/blog/0058-2026-03-17-cancelamento-migracao/README.md) · estado: rascunho

## Reservas sem peça

- [ ] reserva · 2026-03-24 · email · importação guiada de planilha · campanha: orgânico · rota: inboundfy-especialista-email
```

## Erros comuns

- Escrever a data no texto da linha em vez do heading.
- Duplicar a linha ao reagendar. Mova a linha para o novo heading.
- Deixar peça publicada com estado antigo.
