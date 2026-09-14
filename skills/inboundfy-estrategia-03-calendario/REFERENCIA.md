# REFERENCIA.md; inboundfy-estrategia-03-calendario

Template, exemplo completo e checklist do calendário editorial por período.

## Template

```markdown
# Calendário; <período>

## <Semana ou data>

| Canal | Tema | Campanha (ou "orgânico") | Rota | Status |
| --- | --- | --- | --- | --- |
| <canal> | <tema> | <nome da campanha ou "orgânico"> | <pipeline completo /
  especialista direto> | <planejado / em produção / publicado> |

<!-- Repita a tabela para cada semana ou data do período. -->

## Conflitos de capacidade sinalizados

- <canal>: <descrição do conflito e escolha do usuário, ou "pendente de
  escolha">
```

## Exemplo preenchido (fictício)

```markdown
# Calendário; 2026-08

## Semana 1 (03 a 09)

| Canal | Tema | Campanha (ou "orgânico") | Rota | Status |
| --- | --- | --- | --- | --- |
| blog | quanto tempo um lojista perde digitando estoque | Lançamento Estoquely Pro | especialista direto | planejado |
| LinkedIn | erro comum de controle manual #1 | Lançamento Estoquely Pro | especialista direto | planejado |
| newsletter | resumo mensal de produto | orgânico | pipeline completo | planejado |

## Conflitos de capacidade sinalizados

- LinkedIn: campanha pediu 4 posts na semana 1, mas cadência técnica do
  canal é 2/semana; usuário decidiu distribuir 2 posts na semana 1 e 2 na
  semana 2.
```

## Checklist de completude

- [ ] Nenhuma linha excede a cadência técnica do canal no período.
- [ ] Toda linha tem rota definida (pipeline completo ou especialista
      direto), nunca "a definir".
- [ ] Todo conflito de capacidade está registrado com a escolha tomada, não
      silenciado.
- [ ] Item já publicado mantém o status atualizado, não fica como
      "planejado" indefinidamente.

## Erros comuns

- Alocar peça de campanha sem checar a fase da campanha no plano
  de `inboundfy-estrategia-02-campanha`; gera peça de conversão antes da fase de
  atração terminar.
- Ignorar cadência técnica do canal só porque a campanha "precisa" do
  volume; o conflito deve ser negociado com o usuário, não resolvido
  silenciosamente a favor da campanha.
- Recriar o calendário do zero a cada rodada em vez de atualizar o período
  existente, perdendo o status de itens já produzidos.
