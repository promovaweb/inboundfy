# Exemplo completo de artigo de blog

A empresa Fornada Clara e todas as pessoas, fontes, arquivos, quantidades e endereços desta demonstração são fictícios. Os caminhos mostram o contrato de relação; não afirmam que esses arquivos existem no projeto consumidor. O domínio `.example` não é destino para envio ou publicação real. O estado permanece `rascunho` até a validação efetiva.

O brief didático em `conteudo/fornada/04-briefs/blog-fornada.md` aprova persona-01, responsável pelo balcão de uma padaria de Campinas, SP, voz direta e CTA de preencher a ficha. O caso registra 300 pães produzidos, 260 vendidos, dez consumidos pela equipe e 30 restantes. Extensão breve foi solicitada para mostrar uma peça inteira neste manual. Não há oferta paga nem resultado de cliente.

```markdown
---
id: "0042"
skill: inboundfy-especialista-blog
tipo: blog
criado_em: 2026-09-14
atualizado_em: 2026-09-14
entrada:
  - conteudo/fornada/04-briefs/blog-fornada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
proxima_acao: revisar a candidata com inboundfy-validador-blog
canal: blog
persona: persona-01
estado: rascunho
title: "Como calcular a sobra de pão no fechamento"
description: "Aprenda a separar produção, venda e sobra no fechamento da padaria, calcular o percentual do dia e comparar turnos sem misturar perdas de causas distintas."
slug: calcular-sobra-pao
intencao: como calcular sobra de pão
brief: conteudo/fornada/04-briefs/blog-fornada.md
fontes:
  - acervo/0042-2026-09-14-fornada/base-editorial.md
  - acervo/0042-2026-09-14-fornada/processado.md
---

# Como calcular a sobra de pão no fechamento

Para calcular a sobra de pão, divida as unidades que ficaram sem venda pelas unidades produzidas no mesmo período. Multiplique o resultado por 100. Na padaria fictícia Fornada Clara, de Campinas, 30 pães restantes numa produção de 300 representam uma sobra de 10%. A conta só descreve esse dia: ela não determina a quantidade ideal para a próxima fornada.

Quem fecha o balcão precisa primeiro separar os destinos do pão. Venda, consumo da equipe, doação e descarte são registros diferentes. Misturar tudo na coluna de venda faz o percentual parecer menor e esconde o que aconteceu com a produção. O registro precisa caber na rotina da pessoa que encerra o turno, com nomes de campos que ela reconheça.

## Use a mesma unidade na contagem

Conte em unidades quando a produção também foi registrada em unidades. Se a padaria controla pão por peso, use quilos nos dois lados da divisão. A ficha da Fornada Clara registra 300 unidades produzidas, 260 vendidas, dez consumidas pela equipe e 30 restantes antes da destinação final.

As quatro quantidades fecham a conta: 260 + 10 + 30 = 300. Se o total não fechar, confira o horário do registro e se uma fornada entrou duas vezes. Não ajuste a sobra apenas para fazer a soma coincidir. Uma diferença sem explicação deve continuar visível para a pessoa responsável pelo turno seguinte.

## Calcule antes de comparar dias

Na ficha desse exemplo, a conta é 30 ÷ 300 × 100 = 10%. O denominador é a produção. Dividir por 260, o total vendido, responderia outra pergunta e produziria um percentual diferente. Anote a fórmula ao lado do resultado para a equipe usar a mesma base no dia seguinte.

Um dia com 15 pães restantes parece melhor que outro com 30. Se o primeiro produziu 100 unidades, sua sobra foi de 15%. A comparação por percentual mostra uma proporção maior, apesar da quantidade absoluta menor. Guarde os dois números: a quantidade ajuda a organizar o destino do pão; o percentual ajuda a comparar produções de tamanhos diferentes.

## Separe sobra de outras perdas

A ficha considera sobra o pão pronto que permaneceu sem venda. Massa perdida antes de assar pertence a outro registro. Juntar as duas quantidades impede descobrir se a mudança precisa acontecer na produção ou no planejamento do balcão.

Antes de reduzir uma fornada, acompanhe dias comparáveis e registre também horários com falta de produto. Uma sobra menor pode vir acompanhada de vendas perdidas se o pão acabar cedo. O percentual isolado não mede esse efeito. No próximo fechamento, preencha produção, destinos e sobra na mesma ficha; confira a soma antes de usar o resultado para ajustar o dia seguinte.
```

## Conferência antes de usar no consumidor

Substitua origem, ID, persona e destino pelos dados confirmados. Leia o checklist numerado da referência. Preserve a estrutura própria do canal, sem copiar o caso fictício como experiência da marca. A validadora apresenta um relatório preenchido para uma versão defeituosa deste mesmo caso.
