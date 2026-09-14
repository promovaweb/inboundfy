# REFERENCIA.md; inboundfy-planejamento-06-auditoria

## Template de `auditoria-final.md`

```markdown
# Auditoria final; <canal>/<item>

- **Brief de origem:** 04-briefs/<canal>-<slug>.md
- **Veredito:** <aprovado | reprovado | devolvido para replanejamento>
- **Relatório individual:** 06-auditoria/assets/<canal>-<item>.md
- **Validadora pareada:** <inboundfy-validador-*>
- **Veredito individual:** <aprovado | ausente | reprovado>
- **Nota média de inboundfy-base-editor:** <nota>
- **Parágrafos abaixo de 90%:** <lista ou "nenhum">
- **Verificação de context/proibicoes.md:** <sem violação | violação encontrada em: ...>
- **Verificação de estrutura persuasiva:** <blocos presentes e na ordem certa | bloco ausente: ... | não aplicável>
- **Validação própria do canal:** <formato de imagem, contagem de caracteres, metadata de SEO; resultado>
- **Pendências:** <lista de correções, ou "nenhuma">
```

## Exemplo; peça aprovada (fictício)

```markdown
# Auditoria final; email/nutricao-migracao-estoque

- **Brief de origem:** 04-briefs/email-nutricao-migracao-estoque.md
- **Veredito:** aprovado
- **Nota média de inboundfy-base-editor:** 94
- **Parágrafos abaixo de 90%:** nenhum
- **Verificação de context/proibicoes.md:** sem violação
- **Verificação de estrutura persuasiva:** PAS; problema, agitação e
  solução presentes na ordem certa
- **Validação própria do canal:** assunto com 42 caracteres, pré-header
  presente, CTA único
- **Pendências:** nenhuma
```

## Exemplo; peça reprovada (fictício)

```markdown
# Auditoria final; linkedin/opiniao-atendimento-reativo

- **Brief de origem:** 04-briefs/linkedin-opiniao-atendimento-reativo.md
- **Veredito:** reprovado
- **Nota média de inboundfy-base-editor:** 81
- **Parágrafos abaixo de 90%:** parágrafo 2 (abertura genérica "no cenário
  atual das empresas..."), parágrafo 4 (frase decorativa de fechamento)
- **Verificação de context/proibicoes.md:** sem violação
- **Verificação de estrutura persuasiva:** PAS; bloco de agitação ausente,
  o texto pula direto do problema para a solução
- **Validação própria do canal:** corpo copiável sem Markdown; OK
- **Pendências:**
  1. Reescrever parágrafo 2 sem abertura genérica.
  2. Reescrever parágrafo 4 removendo fechamento decorativo.
  3. Adicionar bloco de agitação antes da solução, conforme PAS.
```

## Checklist de qualidade da auditoria

- [ ] Todo campo do template está preenchido, mesmo quando o valor é
      "nenhum" ou "não aplicável".
- [ ] Cada asset possui relatório individual aprovado e manifesto de fontes
      completo.
- [ ] Reprovação sempre lista pendências específicas e acionáveis, nunca só
      "revisar de novo".
- [ ] Divergência de estratégia (brief mal formulado) é devolvida para
      `inboundfy-planejamento-04-briefing`, não corrigida na auditoria.
- [ ] Peça aprovada tem o campo `brief` confirmado no frontmatter do
      artefato final.

## Erros comuns

- Aprovar uma peça com nota média acima de 90 mas com um parágrafo
  individual abaixo de 90; a média não substitui a checagem por parágrafo.
- Reprovar por escrita quando o problema real é o brief (ângulo errado,
  público errado); nesse caso o veredito certo é "devolvido para
  replanejamento", não "reprovado".
- Aprovar peça com bloco de estrutura persuasiva ausente só porque o texto
  em si está bem escrito; estrutura incompleta é motivo de reprovação
  independente da qualidade de prosa.
