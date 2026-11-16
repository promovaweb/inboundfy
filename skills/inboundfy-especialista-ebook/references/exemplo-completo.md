# Exemplo completo de ebook

A empresa Fornada Clara e todas as pessoas, fontes, arquivos, quantidades e endereços desta demonstração são fictícios. Os caminhos mostram o contrato de relação; não afirmam que esses arquivos existem no projeto consumidor. O domínio `.example` não é destino para envio ou publicação real. O estado permanece `rascunho` até a validação efetiva.

O brief didático em `conteudo/fornada/04-briefs/ebook-fornada.md` aprova persona-01, responsável pelo balcão de uma padaria de Campinas, SP, voz direta e CTA de preencher a ficha. O caso registra 300 pães produzidos, 260 vendidos, dez consumidos pela equipe e 30 restantes. Extensão breve foi solicitada para mostrar uma peça inteira neste manual. Não há oferta paga nem resultado de cliente.

```markdown
---
id: "0042"
skill: inboundfy-especialista-ebook
tipo: ebook
criado_em: 2026-09-14
atualizado_em: 2026-09-14
entrada:
  - conteudo/fornada/04-briefs/ebook-fornada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
proxima_acao: revisar a candidata com inboundfy-validador-ebook
canal: ebook
persona: persona-01
estado: rascunho
titulo: Fechamento de uma fornada
promessa: Registrar produção e destinos do pão e conferir a soma do turno
publico: persona-01
capitulos: [Preparar a ficha, Registrar os destinos, Conferir o fechamento]
modo_entrega: unico
extensao: microebook de três capítulos conforme brief
brief: conteudo/fornada/04-briefs/ebook-fornada.md
fontes:
  - acervo/0042-2026-09-14-fornada/base-editorial.md
  - acervo/0042-2026-09-14-fornada/processado.md
---

# Fechamento de uma fornada

O pão que fica no balcão precisa aparecer no fechamento junto com o que foi vendido e destinado à equipe. Este guia usa a padaria fictícia Fornada Clara, de Campinas, para mostrar uma ficha simples de um turno. Ao final, você terá um registro cuja soma pode ser conferida antes de planejar a produção seguinte.

O material trata de quantidade física. Ele não calcula margem, tributos ou prazo de consumo. Se a padaria trabalha por peso, todas as quantidades da ficha devem usar quilos. Misturar peso e unidades faz a soma perder o sentido.

## Sumário

1. Preparar a ficha: definir turno e unidade.
2. Registrar os destinos: separar venda, consumo e sobra.
3. Conferir o fechamento: localizar diferenças e registrar o resultado.

## 1. Preparar a ficha

A ficha precisa identificar data, turno, produto e unidade de contagem. Na Fornada Clara, a responsável pelo balcão prepara uma linha para o pão francês da manhã. Ela registra 14 de setembro, turno da manhã e unidade “pão”. Essa identificação permite comparar o fechamento com a folha de produção sem misturar a fornada da tarde.

O campo Produção recebe somente o que ficou pronto nesse turno. O exemplo parte de 300 pães. Massa ainda no forno não entra nessa linha. Se uma nova fornada terminar depois do corte do turno, ela deve aparecer no período seguinte conforme a rotina da padaria. A equipe precisa combinar esse horário antes de contar, pois dois horários diferentes produzem duas versões do mesmo fechamento.

Prepare agora uma linha com identificação e quantidade produzida. Deixe os destinos vazios até consultar os registros do balcão. Essa linha será a base do próximo capítulo.

## 2. Registrar os destinos

O balcão registra 260 pães vendidos e dez consumidos pela equipe. Restam 30 pães antes da destinação final. A venda e o consumo aparecem em colunas separadas porque respondem a perguntas diferentes: uma mostra saída comercial; a outra explica parte da quantidade que deixou de estar disponível.

| Destino no corte do turno | Quantidade |
| --- | ---: |
| Venda | 260 |
| Consumo da equipe | 10 |
| Sobra antes da destinação | 30 |

A sobra continua identificada quando depois recebe outro destino. Se os 30 pães forem doados, atualize o registro de destino sem somar outras 30 unidades à produção. A mesma unidade física não pode ser contada duas vezes. O exemplo não estabelece regra sanitária para doação; a padaria deve seguir seu procedimento próprio.

Preencha os destinos da sua linha com os registros disponíveis. Se uma quantidade estiver desconhecida, escreva “a conferir” no registro interno. Não substitua o campo por zero para terminar mais rápido. No próximo capítulo, a soma mostrará se falta localizar alguma saída.

## 3. Conferir o fechamento

A conferência da Fornada Clara soma 260 + 10 + 30 = 300. O total coincide com a produção. Isso confirma a consistência aritmética do registro, mas não prova que cada destino foi anotado corretamente. A pessoa responsável ainda precisa confrontar as vendas com o registro do balcão.

Se a ficha somar 295, a diferença será de cinco pães. Primeiro confira a unidade usada. Depois compare o horário de corte e procure uma saída registrada no turno errado. Mantenha a diferença visível enquanto a equipe procura sua origem. Alterar a sobra para chegar a 300 apagaria a informação que a conferência deveria revelar.

Quando a conta fechar, registre quem conferiu e a data. Se ela não fechar, registre a diferença e a pessoa responsável por consultá-la. Compare turnos apenas depois de entender essas diferenças. Um registro incompleto não deve orientar sozinho uma redução da produção.

No próximo turno, preencha uma ficha com produção e destinos; confira a soma antes de encerrar o balcão.

## Fontes

Caso didático fictício registrado em `acervo/0042-2026-09-14-fornada/processado.md`. As quantidades servem para demonstrar a conta, sem representar resultado de cliente.
```

## Conferência antes de usar no consumidor

Substitua origem, ID, persona e destino pelos dados confirmados. Leia o checklist numerado da referência. Preserve a estrutura própria do canal, sem copiar o caso fictício como experiência da marca. A validadora apresenta um relatório preenchido para uma versão defeituosa deste mesmo caso.
