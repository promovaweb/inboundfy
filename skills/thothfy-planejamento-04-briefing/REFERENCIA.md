# REFERENCIA.md — thothfy-planejamento-04-briefing

## Template de brief completo

```markdown
---
canal: <canal>
brief: 04-briefs/<canal>-<slug>.md
---

# Brief — <canal> — <slug>

- **Formato:** <post, artigo, e-mail, roteiro, etc.>
- **Público-alvo:** <persona de context/publico.md>
- **Objetivo:** <o que a peça precisa alcançar — não confundir com tema>
- **Ângulo:** <recorte específico, herdado da oportunidade aprovada>
- **Ativos de apoio:** <lista de itens de ativos.md usados nesta peça>
- **Restrições de voz:** <de context/marca-voz.md, se houver algo específico para esta peça>
- **Vetos aplicáveis:** <de context/proibicoes.md, se relevante para o tema>
- **Estrutura persuasiva:** <AIDA | PAS | PASTOR | nenhuma — com uma frase por bloco, ver ESTRUTURAS-PERSUASIVAS.md>
- **Critério de pronto:** <o que precisa estar presente para a peça ser considerada completa>
```

## Exemplo preenchido (fictício)

```markdown
---
canal: email
brief: 04-briefs/email-nutricao-migracao-estoque.md
---

# Brief — email — nutricao-migracao-estoque

- **Formato:** e-mail de nutrição, etapa 2 de uma sequência de onboarding
- **Público-alvo:** gestor de pequeno varejo, primeiro mês de uso
- **Objetivo:** reduzir cancelamento por medo de migração de estoque
- **Ângulo:** mostrar que a importação de planilha é guiada, não manual
- **Ativos de apoio:** tese sobre migração, dado "6 em cada 10 tickets",
  objeção "estoque bagunçado" (ativos.md)
- **Restrições de voz:** tom direto, sem jargão técnico de banco de dados
- **Vetos aplicáveis:** nenhum específico além das proibições genéricas
- **Estrutura persuasiva:** PAS — Problema: medo de perder histórico de
  estoque ao migrar. Agitação: cliente que adia a migração acumula estoque
  desatualizado e erra pedido de compra. Solução: passo a passo guiado de
  importação, com suporte disponível na primeira tentativa.
- **Critério de pronto:** e-mail com assunto, pré-header, corpo seguindo PAS,
  CTA único para iniciar a importação, nenhum parágrafo abaixo de 90% em
  `thothfy-base-editor`.
```

## Checklist de qualidade

- [ ] Todo brief tem os 9 campos do template preenchidos ou explicitamente
      marcados como "não aplicável" com motivo.
- [ ] Ângulo é um recorte específico, não repete o tema genérico do pacote.
- [ ] Estrutura persuasiva está decidida e justificada por bloco, nunca
      deixada em branco quando o objetivo é comercial.
- [ ] Critério de pronto é verificável (não "escreva bem"), com referência a
      validação objetiva.

## Erros comuns

- Copiar o ângulo do plano de oportunidades sem detalhar o suficiente para
  a skill de canal não precisar improvisar estratégia.
- Marcar estrutura persuasiva como "PASTOR" sem preencher o que entra em
  cada um dos seis blocos — a escolha sem detalhamento não ajuda a skill de
  canal.
- Esquecer de registrar vetos aplicáveis quando o tema toca uma categoria
  sensível (ver `context/proibicoes.md`, seção de afirmações que exigem
  confirmação).
