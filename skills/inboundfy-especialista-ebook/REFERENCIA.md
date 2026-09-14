# REFERENCIA.md; inboundfy-especialista-ebook

Material de apoio para arquitetura editorial e escrita de capítulos de
ebook.

## Template de arquitetura

```yaml
---
titulo: <título do ebook>
promessa: <o que o leitor sabe fazer ou resolve ao terminar>
publico: <persona de context/publico.md>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Sumário
1. <Capítulo 1; o que entrega>
2. <Capítulo 2; o que entrega, diferente do capítulo 1>
3. <Capítulo 3; o que entrega, diferente dos anteriores>
```

Cada capítulo deve responder: o que este capítulo entrega que o anterior
não entregou? Se a resposta for vaga, a estrutura tem sobreposição e
precisa ser refeita.

## Exemplo de arquitetura (fictício)

Tema: migrar de agenda de papel para sistema numa clínica pequena.

```markdown
Promessa: o leitor sai sabendo se deve migrar, quando migrar e como evitar
o erro mais comum da transição.

1. Por que a agenda de papel custa mais do que parece (o problema invisível)
2. Os sinais de que chegou a hora de migrar (regra de escolha)
3. O erro mais comum na transição e como evitá-lo (execução)
```

## Exemplo de capítulo (fictício, trecho)

```markdown
# Capítulo 2; Os sinais de que chegou a hora de migrar

Nem toda clínica pequena precisa trocar de sistema agora. O sinal mais
confiável não é o tamanho da clínica; é quantas pessoas diferentes mexem
na mesma agenda ao longo do dia. Quando duas ou mais pessoas escrevem no
mesmo caderno em turnos diferentes, o possibilidade de marcar o mesmo horário duas
vezes cresce toda semana, mesmo que ninguém erre por descuido.

Esse tipo de conflito só aparece quando o paciente liga reclamando; e até
lá, ele já custou uma vaga perdida.
```

## Checklist de canal

- [ ] Cada capítulo tem entrega própria, sem repetir o anterior.
- [ ] Sumário reflete progressão lógica, não lista de tópicos soltos.
- [ ] Capítulo de abertura comercial (se houver) usa PAS; capítulo de
      fechamento comercial (se houver) usa AIDA compacto; ver Estrutura
      persuasiva em `SKILL.md`.
- [ ] Nenhum capítulo vira "dica rápida" fragmentada sem pedido explícito
      do brief.

## Erros comuns

- Definir sumário com capítulos que dizem a mesma coisa com títulos
  diferentes; teste: se dois capítulos pudessem trocar de ordem sem
  perda, a estrutura está fraca.
- Encher capítulo com repetição de tese para atingir tamanho, em vez de
  desenvolver com situação, mecanismo, exemplo e limite (ver `ESCRITA.md`).
- Inserir seção de produto em capítulo que o brief não marcou como
  comercial.
