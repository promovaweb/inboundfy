# REFERENCIA.md; inboundfy-contexto-campanhas

Template, exemplo preenchido e checklist para `context/campanhas.md`.

## Roteiro de entrevista

1. "Qual é o nome da campanha e qual cliente ou marca ela atende?"
2. "Qual é o objetivo de negócio; não 'gerar conteúdo', mas o resultado que
   a campanha precisa mover (leads, vendas, retenção, reconhecimento)?"
3. "Qual KPI mede esse objetivo, com qual meta e até quando?"
4. "Qual persona de `context/publico.md` é a prioridade desta campanha?"
5. "Quais canais de `context/canais.md` estarão envolvidos?"
6. "Qual o período da campanha, ou ela é contínua?"
7. "Há orçamento de mídia paga? Se sim, qual valor?"

## Exemplo preenchido (fictício)

```markdown
## Lançamento Estoquely Pro

- **Cliente/marca:** própria
- **Status:** em execução
- **Objetivo de negócio:** gerar 200 trials qualificados do plano Pro em 60
  dias.
- **KPI(s) e meta:** 200 trials qualificados até 2026-09-30.
- **Público prioritário:** dono de loja com estoque em planilha (context/publico.md).
- **Canais envolvidos:** blog, LinkedIn, email de nutrição.
- **Período:** 2026-08-01 a 2026-09-30.
- **Orçamento de mídia paga, se houver:** sem mídia paga nesta fase.
- **Acervo relacionado:** acervo/0001-AAAA-MM-DD-lancamento-pro/
- **Calendário:** calendario/AAAA-MM.md
```

## Checklist de completude

- [ ] KPI tem meta numérica e prazo, nunca só uma direção ("aumentar").
- [ ] Persona prioritária existe em `context/publico.md`.
- [ ] Todos os canais citados existem em `context/canais.md`.
- [ ] Caminho do brief e do plano de campanha estão preenchidos, não vagos.
- [ ] Status reflete o estado real, atualizado na mesma sessão da mudança.

## Erros comuns

- Registrar objetivo vago ("fortalecer marca") sem KPI mensurável associado;   isso impede `inboundfy-estrategia-02-campanha` de priorizar canal e cadência.
- Apagar campanha encerrada em vez de mudar o status; perde-se o histórico
  que embasa a próxima campanha do mesmo cliente.
- Citar canal ou persona que ainda não existe em `context/`, criando
  referência quebrada.
