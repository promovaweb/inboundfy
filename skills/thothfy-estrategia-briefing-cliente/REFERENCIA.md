# REFERENCIA.md — thothfy-estrategia-briefing-cliente

Roteiro de entrevista, template e exemplo completo do brief de kickoff.

## Roteiro de entrevista

1. "Se essa campanha der certo, o que muda no negócio em números — vendas,
   trials, leads, retenção, redução de churn?"
2. "Qual é o valor-alvo e até quando?"
3. "Quem é a pessoa que essa campanha precisa convencer? É a persona X de
   `context/publico.md` ou é alguém novo?"
4. "Existe orçamento de mídia paga? Quanto?"
5. "Qual é o período — data de início e de fim, ou é uma campanha contínua?"
6. "Existe alguma restrição específica desta campanha que não está em
   `context/proibicoes.md`?"

## Template

```markdown
# Brief de Cliente — <nome da campanha>

- **Cliente/marca:** <nome>
- **Objetivo de negócio:** <resultado mensurável>
- **KPI e meta:** <métrica, valor-alvo, prazo>
- **Público prioritário:** <persona de context/publico.md>
- **Orçamento de mídia paga:** <valor ou "nenhum">
- **Período:** <início–fim ou "contínua">
- **Restrições específicas desta campanha:** <lista ou "nenhuma além de
  proibicoes.md">
- **Aprovado por:** <nome/data>
```

## Exemplo preenchido (fictício)

```markdown
# Brief de Cliente — Lançamento Estoquely Pro

- **Cliente/marca:** própria
- **Objetivo de negócio:** gerar 200 trials qualificados do plano Pro.
- **KPI e meta:** 200 trials qualificados até 2026-09-30.
- **Público prioritário:** dono de loja com estoque em planilha.
- **Orçamento de mídia paga:** nenhum nesta fase.
- **Período:** 2026-08-01 a 2026-09-30.
- **Restrições específicas desta campanha:** não comparar com EstoqueFácil
  nominalmente, mesmo que outras campanhas já tenham permissão para isso.
- **Aprovado por:** Luiz, 2026-07-29.
```

## Checklist de completude

- [ ] Objetivo é resultado de negócio, não atividade de conteúdo.
- [ ] KPI tem número e prazo.
- [ ] Persona existe em `context/publico.md`.
- [ ] Brief tem aprovação explícita registrada antes de seguir para
      `thothfy-estrategia-campanha`.

## Erros comuns

- Aceitar objetivo vago ("aumentar autoridade") sem forçar uma tradução em
  KPI mensurável — sem isso, `thothfy-estrategia-campanha` não consegue
  priorizar canal nem `thothfy-planejamento-06-auditoria` não tem critério
  de sucesso real ao final.
- Pular a etapa de aprovação e já criar calendário — o briefing precisa ser
  validado pelo cliente ou pelo dono do negócio antes de qualquer plano de
  canal ser desenhado.
- Misturar decisão de canal ou tema no brief — isso pertence a
  `thothfy-estrategia-campanha`, não a este documento.
