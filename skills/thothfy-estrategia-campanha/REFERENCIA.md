# REFERENCIA.md — thothfy-estrategia-campanha

Template, exemplo completo e checklist do plano de campanha.

## Template

```markdown
# Plano de Campanha — <nome>

## Fase 1 — <nome da fase>

- **Tema central:** <tema>
- **Canais:** <lista>
- **Volume aproximado de peças:** <número por canal>
- **Lacuna de mercado explorada:** <referência a pesquisa-mercado.md>
- **Indicador intermediário:** <métrica de fase, se houver>
- **Pacotes de conteúdo:**
  - <canal> — <tema da peça> — <origem: material bruto existente ou peça
    avulsa>

<!-- Repita o bloco de fase para cada fase da campanha. -->
```

## Exemplo preenchido (fictício)

```markdown
# Plano de Campanha — Lançamento Estoquely Pro

## Fase 1 — Atração

- **Tema central:** dor de perder tempo com cadastro manual de estoque.
- **Canais:** blog, LinkedIn.
- **Volume aproximado de peças:** 3 posts de blog, 4 posts de LinkedIn.
- **Lacuna de mercado explorada:** concorrentes não falam do tempo perdido em
  digitação manual (ver pesquisa-mercado.md).
- **Indicador intermediário:** 5.000 visitas nos posts da fase.
- **Pacotes de conteúdo:**
  - blog — "quanto tempo um lojista perde digitando estoque" — peça avulsa.
  - LinkedIn — série de 4 posts sobre erros de controle manual — peça avulsa.

## Fase 2 — Consideração

- **Tema central:** cadastro por foto como diferencial verificável.
- **Canais:** email de nutrição, blog.
- **Volume aproximado de peças:** sequência de 3 emails, 1 post comparativo.
- **Lacuna de mercado explorada:** nenhum concorrente demonstra tempo de
  cadastro real.
- **Indicador intermediário:** 300 leads qualificados na sequência de email.
- **Pacotes de conteúdo:**
  - email — sequência de nutrição sobre cadastro por foto — peça avulsa.
  - blog — comparativo honesto de tempo de cadastro — material bruto: teste
    interno de tempo, a processar via thothfy-planejamento-00-triagem.
```

## Checklist de completude

- [ ] Toda fase tem tema, canal, volume e lacuna de mercado.
- [ ] KPI da campanha aparece refletido em pelo menos um indicador de fase.
- [ ] Todo pacote de conteúdo indica se nasce de material bruto (vai para o
      pipeline) ou é peça avulsa (vai direto para o especialista).
- [ ] Canais citados existem e estão ativos em `context/canais.md`.

## Erros comuns

- Listar canal sem fase, tema ou volume — isso não é plano, é lista de
  desejos, e não dá para priorizar produção.
- Prometer volume de peças maior do que a cadência real do canal em
  `context/canais.md` suporta no período da campanha.
- Pular a etapa de aprovação e já registrar a campanha como "em execução" em
  `context/campanhas.md` antes do usuário validar o plano.
