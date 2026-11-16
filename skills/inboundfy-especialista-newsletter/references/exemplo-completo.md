# Exemplo completo de edição de newsletter

A empresa Fornada Clara e todas as pessoas, fontes, arquivos, quantidades e endereços desta demonstração são fictícios. Os caminhos mostram o contrato de relação; não afirmam que esses arquivos existem no projeto consumidor. O domínio `.example` não é destino para envio ou publicação real. O estado permanece `rascunho` até a validação efetiva.

O brief didático em `conteudo/fornada/04-briefs/newsletter-fornada.md` aprova persona-01, responsável pelo balcão de uma padaria de Campinas, SP, voz direta e CTA de preencher a ficha. O caso registra 300 pães produzidos, 260 vendidos, dez consumidos pela equipe e 30 restantes. Extensão breve foi solicitada para mostrar uma peça inteira neste manual. Não há oferta paga nem resultado de cliente.

```markdown
---
id: "0042"
skill: inboundfy-especialista-newsletter
tipo: newsletter
criado_em: 2026-09-14
atualizado_em: 2026-09-14
entrada:
  - conteudo/fornada/04-briefs/newsletter-fornada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
proxima_acao: revisar a candidata com inboundfy-validador-newsletter
canal: newsletter
persona: persona-01
estado: rascunho
assunto: A soma fecha, mas a venda fica escondida
pre-header: Separar consumo interno ajuda a ler o fechamento do balcão.
titulo: A soma fecha, mas a venda fica escondida
description: "Uma ficha com saídas agrupadas pode fechar a conta e esconder o destino do pão. Veja como separar venda, consumo interno e sobra na conferência do balcão."
edicao: "12"
distribuicao: ambos
tese: Conferir a soma não substitui separar os destinos da produção
brief: conteudo/fornada/04-briefs/newsletter-fornada.md
fontes:
  - acervo/0042-2026-09-14-fornada/base-editorial.md
  - acervo/0042-2026-09-14-fornada/processado.md
---

# A soma fecha, mas a venda fica escondida

A ficha de um turno pode somar exatamente a produção e ainda explicar pouco sobre o balcão. Isso acontece quando a coluna “saídas” reúne tudo que deixou a cesta: pão vendido, consumo da equipe e outras destinações. A soma confirma quantidades. A separação dos destinos ajuda a entender o uso de cada uma.

No caso didático da Fornada Clara, padaria fictícia de Campinas, o turno produziu 300 pães. Foram vendidos 260, dez ficaram para a equipe e 30 restaram no balcão. A ficha abreviada mostrava 270 saídas e 30 de sobra. A conta fechava, mas quem olhava apenas para ela poderia ler 270 como venda. O campo misturava dois destinos com efeitos comerciais diferentes.

Separar as colunas preserva a soma e acrescenta uma informação útil. A pessoa responsável pela próxima fornada consegue consultar venda sem reconstruir o consumo interno por memória. Se a equipe mudar entre um turno e outro, o registro continua compreensível. O ganho vem da definição dos campos, não da quantidade de detalhes adicionados à ficha.

Também existe um limite. Criar dez colunas novas sem explicar quando preenchê-las pode deixar o fechamento incompleto. Para a tarefa deste exemplo, produção, venda, consumo interno e sobra bastam. Uma destinação diferente precisa de registro próprio quando ocorrer; não precisa virar coluna vazia em toda ficha apenas para tornar o formulário maior.

Antes de mudar a ficha, pergunte qual dúvida do fechamento ficou sem resposta. Se o total não fecha, a equipe precisa localizar uma quantidade. Se o total fecha, mas ninguém sabe o que foi vendido, a separação dos destinos é o primeiro ajuste a testar. As duas situações pedem consultas diferentes.

No próximo turno, registre os destinos separadamente e compare o que a nova ficha permite explicar. Não reduza a produção com base apenas nessa mudança de registro: o exemplo não mede demanda, falta de produto nem resultado financeiro.

[Preencher a ficha do próximo turno](https://fornadaclara.example/ficha)

Equipe Fornada Clara

Você pediu as edições sobre fechamento do balcão.
[Gerenciar recebimento](https://fornadaclara.example/preferencias)
```

## Conferência antes de usar no consumidor

Substitua origem, ID, persona e destino pelos dados confirmados. Leia o checklist numerado da referência. Preserve a estrutura própria do canal, sem copiar o caso fictício como experiência da marca. A validadora apresenta um relatório preenchido para uma versão defeituosa deste mesmo caso.
