# REFERENCIA.md; inboundfy-especialista-infografico

Material de apoio para o texto de infográfico; título, blocos, legenda e
alt text.

## Template de bloco visual

```yaml
---
titulo: <título curto da tese central>
fonte-dos-dados: <origem rastreável de cada dado>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

Bloco 1: <dado ou característica curta>
Bloco 2: <dado ou característica curta>
Bloco 3: <dado ou característica curta>

Legenda: <texto de acompanhamento em prosa, para post que compartilha a peça>
Alt text: <descrição da imagem para leitor de tela>
```

## Exemplo completo (fictício)

Tema: custo da agenda de papel numa clínica pequena.

```markdown
Título: O custo escondido da agenda de papel

Bloco 1: 15 min perdidos por buraco de agenda não visto; fonte: levantamento interno com 12 clínicas parceiras, 2025.
Bloco 2: 2x mais chance de marcação duplicada com 2+ pessoas na mesma agenda; fonte: mesmo levantamento.
Bloco 3: 1 grade visual substitui a conferência manual de horário; fonte: comparação de fluxo operacional.

Legenda: A agenda de papel custa tempo que não aparece na planilha do mês; aparece na fila de espera e na marcação duplicada. Levantamos com clínicas
parceiras onde esse custo mais aparece.

Alt text: Infográfico comparando o tempo perdido e o possibilidade de marcação
duplicada entre agenda de papel e agenda em sistema, com três blocos de
dado.
```

## Checklist de canal

- [ ] Todo dado numérico tem fonte rastreável; nunca estatística inventada
      ou "estudos mostram" sem origem.
- [ ] Blocos são telegráficos por escolha de canal, não por preguiça; cada
      um ainda precisa ser compreensível isolado.
- [ ] Legenda de acompanhamento passa pela auditoria de prosa
      (`inboundfy-base-editor`); os blocos curtos não passam pela mesma régua.
- [ ] Alt text descreve a imagem de forma útil, não repete o título.

## Erros comuns

- Inflar bloco com adjetivo vazio ("incrível redução de X%") em vez de
  número com fonte.
- Escrever a legenda como se fosse o texto completo do infográfico;   legenda complementa, não repete os blocos.
- Alt text genérico ("infográfico sobre agenda") que não descreve o
  conteúdo real da imagem.
