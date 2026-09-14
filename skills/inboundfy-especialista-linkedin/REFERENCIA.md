# REFERENCIA.md; inboundfy-especialista-linkedin

Material de apoio para post nativo e artigo longo de LinkedIn.

## Template de frontmatter

```yaml
---
formato: <post|artigo>
autor: <nome de context/pessoas.md, se houver>
estrutura: <aida|pas|nenhuma>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---
```

Corpo do post nativo: texto puro, sem nenhum símbolo de Markdown, pronto
para colar direto no campo de post.

## Fórmulas de gancho (primeira linha, antes do "ver mais")

1. **Confissão de erro real**: "Passei dois anos vendendo agenda de papel
   como 'suficiente para clínica pequena'. Eu estava errado, e o motivo não
   é o que parece."; funciona quando há autor definido com autoridade real.
2. **Dado contraintuitivo**: "A clínica que mais perde paciente por fila não
   é a menor. É a que tem mais gente mexendo na mesma agenda."; precisa de
   dado ou observação real, não estatística inventada.
3. **Cena reconhecível**: "Recepção lotada, telefone tocando, e alguém
   procurando um nome na página errada do caderno."; abre pela imagem, não
   pela tese.

## Exemplo completo; post nativo com AIDA (fictício)

```text
Passei dois anos ouvindo donos de clínica dizerem que "caderno resolve" pra
agenda pequena.

Não resolve. E o motivo não é velocidade; é que duas pessoas escrevendo no
mesmo caderno em turnos diferentes vão marcar o mesmo horário pra pacientes
diferentes, mais cedo ou mais tarde.

Esse erro só aparece quando o paciente liga reclamando. Até lá, já custou
uma vaga e uma recepção pedindo desculpa.

Se sua clínica tem mais de uma pessoa mexendo na agenda, vale conferir
quantas vezes isso já aconteceu esse mês; a resposta costuma surpreender.

Como você lida com esse tipo de conflito de horário hoje?
```

## Checklist de canal

- [ ] Post nativo sem nenhuma sintaxe Markdown (`#`, `**`, `[]()`).
- [ ] Primeira linha funciona sozinha, sem depender do "ver mais" para fazer
      sentido.
- [ ] Quando há autor, o texto está em primeira pessoa e dentro da
      competência registrada em `context/pessoas.md`.
- [ ] Fechamento com CTA claro ou pergunta genuína; nunca as duas coisas
      competindo.

## Erros comuns

- Deixar `**negrito**` ou `#heading` no corpo copiável; quebra a renderização
  no LinkedIn e expõe a sintaxe crua.
- Assinar post técnico com pessoa sem competência registrada no tema (ver
  `context/pessoas.md`).
- Fechar com pergunta retórica óbvia ("concorda?") em vez de pergunta que
  gera resposta real.
