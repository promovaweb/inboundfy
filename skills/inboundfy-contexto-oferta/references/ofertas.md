# Domínio ofertas

Referência de `.inboundfy/context/ofertas.md`. Lida no passo 2 do fluxo
quando a entrada trata de plano, preço, pagamento, desconto, garantia, teste
grátis ou comparativo.

## Função

`ofertas.md` é a fonte única de preço e condição comercial. Nenhuma skill de
canal inventa valor. Cada plano tem data de confirmação para que auditorias
encontrem preço envelhecido.

## Fluxo do domínio

1. Leia `ofertas.md` e localize o plano ou confirme que é novo.
2. Confirme o produto ou serviço ligado ao plano. Se não existir, cadastre-o
   antes em `produtos.md` ou `servicos.md`.
3. Exija preço, moeda, periodicidade, inclusões, exclusões e público-alvo.
   Preço não informado fica "sob consulta" ou "não informado".
4. Pergunte formas de pagamento, teste grátis, garantia, fidelidade e
   reajuste.
5. Registre condição temporária em linha própria com início e fim.
6. Grave a data da última confirmação em cada plano tocado.
7. Atualize o comparativo quando houver dois planos ou mais.
8. Liste peças publicadas com valor antigo.

## Roteiro de entrevista

1. "Que produto ou serviço o plano representa?"
2. "Qual é o preço exato, a moeda e a periodicidade? O preço é público?"
3. "Quais formas de pagamento: cartão, parcelamento, boleto, Pix, débito
   automático? Há diferença de preço entre elas?"
4. "O que está incluso, em números (produtos, usuários, horas)?"
5. "O que não está incluso ou é cobrado à parte?"
6. "Para qual perfil o plano é pensado?"
7. "Existe teste grátis? Quantos dias, pede cartão?"
8. "Existe garantia ou política de cancelamento e reembolso?"
9. "Há fidelidade, multa ou reajuste anual? Por qual índice?"
10. "Como funciona upgrade e downgrade?"
11. "Há condição temporária: desconto, cupom, preço de lançamento? Qual o
    período?"
12. "Quando esse preço foi confirmado?"

## Condições comerciais comuns no Brasil

| Condição | O que registrar | Cuidado na copy |
| --- | --- | --- |
| Pix | preço no Pix e se há desconto | desconto no Pix é condição, não preço do plano |
| Parcelamento | número de parcelas e juros | "10x sem juros" exige confirmar que é sem juros |
| Boleto | prazo de compensação | acesso pode depender da compensação |
| Teste grátis | dias, plano, exigência de cartão | "grátis" sem prazo é promessa incompleta |
| Garantia ou reembolso | prazo e condição | compra on-line tem direito de arrependimento de 7 dias pelo CDC; a garantia da empresa é outra coisa e precisa de prazo próprio |
| Fidelidade e multa | prazo mínimo e valor | omitir multa pode configurar publicidade enganosa |
| Reajuste | periodicidade e índice (IPCA, IGP-M) | "preço congelado" só com prazo |
| "A partir de" | o que o valor mínimo inclui | sem isso, a copy engana por omissão |
| Preço com ou sem impostos | se há acréscimo na nota | importante em venda para empresas |

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Crescimento

- **Preço:** R$ 159/mês
- **Periodicidade:** mensal ou anual (R$ 1.590 no Pix ou em até 10x sem juros no cartão)
- **Formas de pagamento:** cartão de crédito, boleto, Pix no anual
- **Teste grátis:** 14 dias, sem cartão
- **O que está incluso:** produtos ilimitados, até 3 usuários, relatório de giro de estoque, alerta por WhatsApp (beta), suporte prioritário por WhatsApp em horário comercial
- **O que não está incluso:** integração com emissor de nota fiscal (parceiro externo, cobrado à parte); Implantação Assistida (R$ 290, serviço avulso)
- **Público-alvo do plano:** loja com mais de 3 funcionários ou mais de uma frente de venda
- **Condição de upgrade/downgrade:** downgrade só na renovação do ciclo
- **Cancelamento:** mensal sem multa; anual com reembolso proporcional nos primeiros 30 dias
- **Reajuste:** anual pelo IPCA, com aviso de 30 dias
- **Data da última confirmação deste preço:** 2026-11-15

## Condições temporárias

| Condição | Planos | Período | Regra |
| --- | --- | --- | --- |
| Black Friday: 30% no primeiro ano do anual | Essencial e Crescimento | 2026-11-20 a 2026-11-30 | só cliente novo; não acumula com outro cupom |

## Comparativo rápido

| Plano | Preço | Público | Diferencial principal |
| --- | --- | --- | --- |
| Essencial | R$ 89/mês | loja pequena, 1 usuário | alerta de reposição no app |
| Crescimento | R$ 159/mês | loja com várias frentes | relatório de giro e alerta por WhatsApp |
```

A seção `Condições temporárias` não existe no template de origem. Crie-a ao
final do arquivo, antes do comparativo, na primeira condição temporária.

## Checklist de completude

- [ ] Preço com moeda e periodicidade, ou "sob consulta".
- [ ] Formas de pagamento e diferença de preço entre elas.
- [ ] Inclusões em números.
- [ ] Exclusões e cobranças à parte.
- [ ] Teste grátis, garantia, cancelamento e reajuste quando existirem.
- [ ] Condição temporária com período e regra.
- [ ] Data da última confirmação em cada plano.
- [ ] Plano ligado a produto ou serviço cadastrado.
- [ ] Comparativo atualizado.

## Erros comuns

- Estimar preço.
- Esquecer a data de confirmação.
- Misturar desconto de campanha com preço cheio.
- Escrever "sem juros" sem confirmar.
- Confundir direito de arrependimento com garantia da empresa.
- Apagar plano encerrado. Marque situação e mantenha o bloco.

## Relações

`inboundfy-copy-oferta`, `inboundfy-growth-pricing`, `inboundfy-growth-paywall`
e as especialistas de canal leem este arquivo. Peças com preço passam pela
validadora do canal, que confere o valor contra a data de confirmação.
