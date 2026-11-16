# Exemplo completo de e-mail

A empresa Fornada Clara e todas as pessoas, fontes, arquivos, quantidades e endereços desta demonstração são fictícios. Os caminhos mostram o contrato de relação; não afirmam que esses arquivos existem no projeto consumidor. O domínio `.example` não é destino para envio ou publicação real. O estado permanece `rascunho` até a validação efetiva.

O brief didático em `conteudo/fornada/04-briefs/email-fornada.md` aprova persona-01, responsável pelo balcão de uma padaria de Campinas, SP, voz direta e CTA de preencher a ficha. O caso registra 300 pães produzidos, 260 vendidos, dez consumidos pela equipe e 30 restantes. Extensão breve foi solicitada para mostrar uma peça inteira neste manual. Não há oferta paga nem resultado de cliente.

```markdown
---
id: "0042"
skill: inboundfy-especialista-email
tipo: email
criado_em: 2026-09-14
atualizado_em: 2026-09-14
entrada:
  - conteudo/fornada/04-briefs/email-fornada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
proxima_acao: revisar a candidata com inboundfy-validador-email
canal: email
persona: persona-01
estado: rascunho
assunto: Confira a sobra antes da próxima fornada
pre-header: Uma ficha separa venda, consumo da equipe e pão que ficou no balcão.
estrutura: pas
remetente: Equipe Fornada Clara
reply_to: equipe@fornadaclara.example
segmento: assinantes que pediram o guia de fechamento
cta: preencher a ficha de fechamento
brief: conteudo/fornada/04-briefs/email-fornada.md
fontes:
  - acervo/0042-2026-09-14-fornada/base-editorial.md
  - acervo/0042-2026-09-14-fornada/processado.md
---

Olá!

O pão que fica no balcão ao fim do turno precisa aparecer no fechamento. Quando venda e consumo da equipe entram na mesma coluna, a pessoa que planeja a próxima fornada perde parte da explicação sobre o destino da produção.

Na ficha didática da Fornada Clara, padaria fictícia de Campinas, 300 pães saíram do forno: 260 foram vendidos, dez foram consumidos pela equipe e 30 ficaram no balcão. Se a ficha mostrar apenas “270 saídas”, ela fecha a soma, mas esconde a diferença entre venda e consumo interno. Essa diferença ajuda a entender o turno antes de mudar a quantidade produzida.

A ficha de fechamento separa esses três destinos e reserva um campo para a quantidade produzida. Você pode preencher um turno e conferir se a soma coincide. O arquivo não calcula margem nem recomenda uma produção ideal; ele organiza as quantidades para a sua conferência.

[Preencher a ficha de fechamento](https://fornadaclara.example/ficha)

Equipe Fornada Clara

Você recebe este conteúdo porque pediu o guia de fechamento.
[Gerenciar recebimento](https://fornadaclara.example/preferencias)
```

## Conferência antes de usar no consumidor

Substitua origem, ID, persona e destino pelos dados confirmados. Leia o checklist numerado da referência. Preserve a estrutura própria do canal, sem copiar o caso fictício como experiência da marca. A validadora apresenta um relatório preenchido para uma versão defeituosa deste mesmo caso.
