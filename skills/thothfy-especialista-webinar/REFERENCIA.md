# REFERENCIA.md — thothfy-especialista-webinar

Material de apoio para copy de página/convite de webinar em estrutura
PASTOR completa.

## Template PASTOR completo

```yaml
---
data: <data e horário>
apresentador: <de context/pessoas.md>
formato: <ao vivo|gravado>
estrutura: pastor
brief: content/<pacote>/04-briefs/webinar-<slug>.md
---

## Problema
<dor real da persona>

## Amplificar
<custo concreto de não resolver>

## História/Solução
<o que a sessão entrega e por que o apresentador é a pessoa certa>

## Testemunho
<resultado real de edição anterior, se existir — omitir se não houver>

## Oferta
<o que a inscrição inclui, data, formato>

## Resposta
<CTA de inscrição>
```

## Exemplo completo preenchido (fictício)

```markdown
---
data: 14 de outubro, 19h
apresentador: Marina Alves, especialista em operação de clínicas
formato: ao vivo
estrutura: pastor
brief: content/pacote-cronos/04-briefs/webinar-agenda-sem-fila.md
---

## Problema

Toda semana, alguma clínica pequena perde paciente por conta de fila de
espera que ninguém planejou — ela simplesmente aconteceu, encaixe por
encaixe.

## Amplificar

Cada semana que passa sem revisar o encaixe da agenda é uma semana de
horas perdidas que não aparecem em relatório nenhum, só na sala de espera
lotada e no paciente que desiste de remarcar.

## História/Solução

Nessa sessão ao vivo, Marina Alves mostra como três clínicas pequenas
reduziram fila de espera sem contratar ninguém a mais, só reorganizando o
encaixe de horário a partir de uma grade visual da agenda inteira.

## Testemunho

Na última edição, participantes relataram identificar o próprio buraco de
agenda ainda durante a sessão, ao vivo, ao aplicar o exercício proposto.

## Oferta

Inscrição gratuita inclui acesso à sessão ao vivo, gravação por 30 dias e
uma planilha de diagnóstico de encaixe de agenda.

## Resposta

Inscreva-se e receba o link de acesso por e-mail antes do dia 14.
```

## Checklist de canal

- [ ] Os seis blocos do PASTOR estão presentes e na ordem certa (ou o bloco
      de Testemunho foi omitido por falta de dado real, nunca inventado).
- [ ] Apresentador confere com `context/pessoas.md`.
- [ ] Agenda/tópicos específicos, não genéricos o suficiente para qualquer
      webinar do mercado.
- [ ] Convite curto (quando usado) usa AIDA compacto, não o PASTOR inteiro.

## Erros comuns

- Inventar número de inscritos ou resultado de edição anterior para
  preencher o bloco de Testemunho.
- Prometer conteúdo que a sessão não vai entregar só para reforçar o bloco
  de Amplificar.
- Usar a mesma agenda de tópicos genérica em todo webinar do mesmo tema.
