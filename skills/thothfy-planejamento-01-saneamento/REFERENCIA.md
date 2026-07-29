# REFERENCIA.md — thothfy-planejamento-01-saneamento

Este arquivo cobre o formato dos artefatos desta fase. As regras completas
do que pode e não pode ser alterado durante a limpeza vivem em
`LIMPEZA-MATERIAL-BRUTO.md` (leitura obrigatória, ver `SKILL.md`); a lógica
de correção de termo mal transcrito vive em `TRADUCAO.md`.

## Template de `base-limpa.md`

```markdown
# Base limpa — <slug-do-pacote>

<!-- Conteúdo organizado em blocos lógicos, preservando sequência e sentido
original. Sem resumo, sem corte de conteúdo, sem voz editorial ainda. -->

## Bloco 1 — <tema ou trecho identificado>

<texto organizado>

## Bloco 2 — <tema ou trecho identificado>

<texto organizado>
```

## Template de `relatorio-saneamento.md`

```markdown
# Relatório de saneamento — <slug-do-pacote>

| Bloco | O que foi alterado | Por quê |
| --- | --- | --- |
| Bloco 1 | <ex.: removida repetição de "então, tipo"> | <ruído de fala, sem valor de conteúdo> |
| Bloco 2 | <ex.: corrigida grafia de "Estoqueli" para "Estoquely"> | <conferência contra context/glossario.md> |

## Falantes identificados (se transcrição)

- <Falante A> — <papel na conversa>
- <Falante B> — <papel na conversa>
```

## Exemplo preenchido (fictício)

```markdown
# Relatório de saneamento — cancelamento-primeiro-mes-estoque

| Bloco | O que foi alterado | Por quê |
| --- | --- | --- |
| Bloco 1 | Removidas marcações de tempo (00:03:12) e falas cruzadas confusas | Ruído de transcrição sem valor de conteúdo |
| Bloco 2 | Unificadas três interrupções do mesmo raciocínio em um bloco contínuo | A ideia original ficava fragmentada por interrupções da call |
| Bloco 3 | Corrigida grafia de "estoque" (aparecia como "estoke" em um trecho) | Erro de transcrição automática |

## Falantes identificados

- Falante A — gestor de sucesso do cliente, relata os casos de cancelamento
- Falante B — gestor de produto, questiona causas e propõe hipóteses
```

## Checklist de qualidade

- [ ] `00-entrada/material-original.md` permanece idêntico ao original —
      confira com um diff mental antes de salvar.
- [ ] Nenhum trecho foi resumido ou cortado; apenas reorganizado e limpo.
- [ ] Toda correção de grafia relevante foi conferida contra
      `context/glossario.md`.
- [ ] O relatório documenta toda alteração que não seja trivial (espaço
      duplo, pontuação solta não precisa de linha no relatório; mudança de
      sentido ou remoção de trecho precisa).
- [ ] Falantes identificados (quando houver) mantêm atribuição consistente
      do início ao fim.

## Erros comuns

- Aproveitar a limpeza para já aplicar a voz de `context/marca-voz.md` —
  isso pertence à fase de produção, não ao saneamento.
- Remover um trecho "porque parecia irrelevante" sem registrar a remoção no
  relatório — toda remoção precisa de rastro.
- Corrigir grafia por achismo em vez de conferir `context/glossario.md`,
  introduzindo uma nova inconsistência.
