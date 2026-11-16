# Exemplo completo de artigo ou newsletter Substack

A empresa Fornada Clara e todas as pessoas, fontes, arquivos, quantidades e endereços desta demonstração são fictícios. Os caminhos mostram o contrato de relação; não afirmam que esses arquivos existem no projeto consumidor. O domínio `.example` não é destino para envio ou publicação real. O estado permanece `rascunho` até a validação efetiva.

O brief didático em `conteudo/fornada/04-briefs/substack-fornada.md` aprova persona-01, responsável pelo balcão de uma padaria de Campinas, SP, voz direta e CTA de preencher a ficha. O caso registra 300 pães produzidos, 260 vendidos, dez consumidos pela equipe e 30 restantes. Extensão breve foi solicitada para mostrar uma peça inteira neste manual. Não há oferta paga nem resultado de cliente.

```markdown
---
id: "0042"
skill: inboundfy-especialista-substack
tipo: substack
criado_em: 2026-09-14
atualizado_em: 2026-09-14
entrada:
  - conteudo/fornada/04-briefs/substack-fornada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
proxima_acao: revisar a candidata com inboundfy-validador-substack
canal: substack
persona: persona-01
estado: rascunho
titulo: A ficha precisa explicar o destino do pão
subtitulo: A soma de um turno pode fechar sem mostrar quanto foi vendido
acervo: acervo/0042-2026-09-14-fornada/
base_editorial: acervo/0042-2026-09-14-fornada/base-editorial.md
brief: conteudo/fornada/04-briefs/substack-fornada.md
formato: ensaio
acesso: publico
revisao: canais/substack/0042-2026-09-14-fornada/README.auditoria.md
fontes:
  - acervo/0042-2026-09-14-fornada/base-editorial.md
  - acervo/0042-2026-09-14-fornada/processado.md
---

# A ficha precisa explicar o destino do pão

A soma de um turno pode fechar sem mostrar quanto foi vendido.

Na padaria fictícia Fornada Clara, de Campinas, uma ficha didática registra 300 pães produzidos, 270 saídas e 30 restantes. A conta fecha. A palavra “saídas”, porém, reúne 260 vendas e dez pães consumidos pela equipe. A ficha permite conferir a quantidade total, mas obriga quem planeja a produção seguinte a procurar a venda em outro lugar.

Esse exemplo mostra uma diferença entre registrar um movimento e explicar sua função. O fechamento reúne ambos no mesmo papel. A quantidade informa o que saiu do balcão; o destino informa o motivo da saída. Quando o nome do campo esconde essa diferença, a pessoa que recebe a ficha precisa conhecer a rotina de quem a preencheu para interpretar o número.

## Um campo carrega uma regra de leitura

Ao separar Venda e Consumo interno, a ficha mantém os mesmos 300 pães. O registro não cria informação nova sobre a produção. Ele preserva uma distinção que antes desaparecia na soma. Uma pessoa de outro turno pode consultar o total vendido sem reconstruir o dia por conversa ou memória.

Há um trabalho anterior à mudança do formulário: combinar o significado de cada campo. Se um turno registra doação como sobra e outro como saída, comparar as duas linhas continua difícil. A equipe precisa definir o momento da contagem e como registrar a destinação posterior. Acrescentar uma coluna sem esse acordo transfere a dúvida para um formulário maior.

## A conta correta tem alcance limitado

No caso da Fornada Clara, 260 + 10 + 30 = 300. A coincidência confirma a soma, mas não comprova cada anotação. Um consumo registrado como venda pode passar pela mesma conferência aritmética. Por isso, a soma deve ser acompanhada da consulta ao registro do balcão quando a dúvida envolve o destino.

Também seria precipitado usar os 30 pães restantes para reduzir automaticamente a próxima fornada. O exemplo não informa se houve falta de pão em algum horário, mudança de movimento ou encomenda excepcional. A ficha organiza uma parte da leitura. O planejamento precisa dos demais registros para interpretar o dia.

No próximo fechamento, escolha uma pergunta concreta para conferir: quanto foi vendido, quanto teve outro destino ou qual quantidade ficou sem explicação. Preencha a ficha com essa pergunta em vista e compare se outra pessoa consegue entendê-la sem pedir o relato do turno.

[Preencher a ficha de um turno](https://fornadaclara.example/ficha)

## Fontes

O caso e as quantidades pertencem ao material didático fictício `acervo/0042-2026-09-14-fornada/processado.md`. A ficha citada é um endereço demonstrativo; ele deve ser substituído pelo destino confirmado do projeto antes de qualquer publicação real.
```

## Conferência antes de usar no consumidor

Substitua origem, ID, persona e destino pelos dados confirmados. Leia o checklist numerado da referência. Preserve a estrutura própria do canal, sem copiar o caso fictício como experiência da marca. A validadora apresenta um relatório preenchido para uma versão defeituosa deste mesmo caso.
