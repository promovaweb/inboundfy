# Domínio serviços

Referência de `.inboundfy/context/servicos.md`. Lida no passo 2 do fluxo
quando a entrada explica um serviço prestado por pessoas da empresa:
consultoria, implantação, treinamento, suporte, gestão recorrente.

## Função

Serviço é trabalho humano com escopo. A copy de serviço erra quando promete
resultado do cliente como se fosse entrega da empresa, ou quando não diz o
que fica de fora. O arquivo separa entrega, formato, prazo, pré-requisito e
exclusões.

## Fluxo do domínio

1. Leia `servicos.md` e confirme o nome oficial no glossário.
2. Separe atividade entregue, formato, duração, pré-requisito do cliente,
   exclusões e resultado esperado.
3. Resultado esperado só entra como expectativa descrita pela empresa, nunca
   como garantia.
4. Registre apenas o que veio do usuário ou de documento dele (proposta,
   contrato, escopo).
5. Relacione o serviço a produto, plano e persona quando já existirem.

## Roteiro de entrevista

1. "O que exatamente é entregue? Liste as atividades."
2. "Como é entregue: presencial, remoto, assíncrono, recorrente?"
3. "Quanto tempo dura ou qual é a cadência?"
4. "Para quem é indicado e para quem não é?"
5. "O que o cliente precisa ter ou fazer antes?"
6. "O que não está incluso e costuma ser pedido?"
7. "Que resultado vocês esperam, e do que ele depende?"
8. "Quantas revisões, horas ou sessões estão incluídas?"

## Modelo de serviço por tipo

| Tipo | Campo que mais importa | Exemplo de exclusão |
| --- | --- | --- |
| Implantação | entregáveis e prazo | migração de dados de outro sistema |
| Consultoria | número de sessões e entregável final | execução das recomendações |
| Treinamento | carga horária e público | suporte depois do curso |
| Gestão recorrente | escopo mensal e limite de horas | mídia paga |
| Suporte | canais, horário e tempo de resposta | atendimento fora do horário |

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Implantação Assistida

- **O que é entregue:** duas sessões remotas de 1 hora para cadastrar os primeiros 50 produtos com a lojista e configurar os alertas de reposição.
- **Formato de entrega:** remoto, por videochamada; resumo enviado por WhatsApp após cada sessão.
- **Para quem é indicado:** lojista que nunca usou sistema de gestão.
- **O que não está incluso:** cadastro do estoque inteiro; importação de planilha de outro sistema; visita presencial.
- **Duração ou cadência típica:** duas sessões nas duas primeiras semanas de assinatura.
- **Pré-requisito do cliente, se houver:** aplicativo instalado e 50 produtos separados para foto.
```

## Checklist

- [ ] O serviço foi separado de produto e oferta.
- [ ] Atividades entregues listadas.
- [ ] Formato e duração preenchidos.
- [ ] Exclusões explícitas.
- [ ] Pré-requisito registrado quando houver.
- [ ] Resultado esperado escrito como expectativa, com dependências.
- [ ] Nome conferido no glossário.

## Erros comuns

- Prometer resultado comercial do cliente ("vai dobrar suas vendas").
- Confundir formato de entrega com benefício.
- Copiar escopo de proposta antiga sem confirmar se continua valendo.
- Esquecer limite de horas ou sessões. A copy promete "acompanhamento" sem
  fim.

## Relações

Preço e condição do serviço ficam em `ofertas.md`. Serviço que acompanha um
produto (implantação, treinamento) cita o nome do produto de `produtos.md`.
