# REFERENCIA.md — thothfy-especialista-newsletter

Material de apoio para escrever edições de newsletter editorial longa.

## Template de estrutura de edição

```yaml
---
assunto: <quando distribuída por e-mail>
titulo: <quando publicada como artigo próprio>
description: <145-155 caracteres>
brief: content/<pacote>/04-briefs/newsletter-<slug>.md
---

# <Título da edição>

<Abertura reconhecível — situação ou observação real do período>

<Corpo — desenvolvimento de uma ou poucas ideias centrais>

<Seção de produto/ferramenta — opcional, só quando o brief pedir, com FAB>

<Fechamento — sem enfeite, com CTA único>
```

## Estrutura de edição por tipo

- **Edição de opinião/análise**: abertura situa o tema do período, corpo
  desenvolve uma tese central com exemplo interpretado, fechamento traz a
  posição do autor sem moralizar.
- **Edição de curadoria**: abertura conecta os itens por um fio comum (não
  uma lista solta), cada item comentado com uma frase de contexto real, não
  só um link.
- **Edição de lançamento/oferta**: segue a lógica de PASTOR de
  `thothfy-especialista-email`, mas com desenvolvimento mais longo por bloco.

## Exemplo completo (fictício, edição de opinião)

Empresa fictícia: "Agenda Cronos".

```markdown
---
assunto: Por que a fila de espera não é sobre falta de gente
titulo: Por que a fila de espera não é sobre falta de gente
description: A fila de espera de uma clínica pequena quase nunca é sobre número de profissionais — é sobre como o tempo de cada um é encaixado na agenda.
brief: content/pacote-cronos/04-briefs/newsletter-fila-espera.md
---

# Por que a fila de espera não é sobre falta de gente

Toda clínica que reclama de fila de espera pensa primeiro em contratar mais
gente. Na prática, boa parte das filas que vejo têm origem em outro lugar:
o encaixe de horário que deixa quinze minutos ociosos entre uma consulta e
outra, multiplicado por semana, sem que ninguém perceba porque o buraco é
pequeno demais para chamar atenção isolado.

Esse tipo de perda só aparece quando alguém soma o mês inteiro. Um sistema
de agendamento que mostra o dia inteiro numa grade visual facilita enxergar
o buraco antes de ele virar hábito — não porque o sistema "otimiza"
sozinho, mas porque ele torna o problema visível para quem decide o
encaixe.

Contratar mais gente sem resolver o encaixe só desloca o problema para uma
agenda maior com o mesmo buraco proporcional.
```

## Checklist de canal

- [ ] Corpo em prosa contínua, sem fragmentação artificial em blocos curtos.
- [ ] Seção de produto (se houver) fecha em benefício real (FAB), não fica
      como anúncio solto no meio do texto editorial.
- [ ] CTA único no fechamento.

## Erros comuns

- Transformar a newsletter numa lista de tópicos picados só porque o e-mail
  "pede" escaneabilidade — o valor do canal é a leitura contínua.
- Misturar duas ideias centrais sem transição, deixando a edição sem fio
  condutor.
- Inserir seção de produto em toda edição mesmo quando o brief não pediu.
