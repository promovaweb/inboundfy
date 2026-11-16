# Domínio empresa

Referência do domínio `empresa` da skill `inboundfy-contexto-institucional`.
Ela é lida no passo 2 do fluxo, quando a entrada fala da empresa como
entidade: identidade, missão, modelo de negócio, diferenciais, marcos e
restrições.

## Função

`.inboundfy/context/empresa.md` responde a três perguntas que toda peça
institucional precisa: quem é a empresa, o que ela resolve e o que ela não
faz. O arquivo não descreve produto, preço nem público. Esses dados ficam em
`produtos.md`, `ofertas.md` e `publico.md`.

## Fluxo do domínio

1. Leia `empresa.md` e `glossario.md` atuais.
2. Se a entrada for material bruto (site, apresentação, pitch, contrato
   social), extraia candidatos para cada seção e marque a origem de cada um.
3. Apresente os candidatos ao usuário em lista curta e grave apenas os
   confirmados.
4. Ajuste a seção `Identidade` para conter os campos lidos pelo
   `inboundfy doctor`: `Nome da empresa`, `Descrição curta` e
   `Site principal` (ver `REFERENCIA.md`).
5. Para cada diferencial, peça a prova. Sem prova, o item vira pergunta
   aberta e não entra em `Diferenciais reais`.
6. Pergunte sempre pelas restrições. É a seção que mais evita promessa fora
   do escopo.
7. Registre no glossário a grafia da marca quando ela tiver maiúscula
   interna, acento, hífen ou sigla.

## Roteiro de entrevista

1. "Qual é a razão social e qual nome vocês usam no dia a dia?"
2. "Em uma frase, o que a empresa faz e para quem?" Vira `Descrição curta`.
3. "Qual é o site principal?"
4. "Quando a empresa começou e qual é o setor de atuação?"
5. "Se eu explicasse em duas ou três frases por que a empresa existe, o que
   eu diria?" Vira a seção de missão, sempre em prosa.
6. "Como a empresa ganha dinheiro: assinatura, venda avulsa, serviço,
   comissão, licença?"
7. "Quais são de dois a quatro diferenciais reais? O que prova cada um?"
8. "Que marcos valem um 'sobre nós': lançamento, número de clientes,
   mudança de direção, prêmio?"
9. "O que as pessoas acham que vocês fazem e vocês não fazem?"
10. "Algum nome tem grafia própria?" Alimenta o glossário.

## Diferencial e prova

| Tipo de diferencial | Prova aceita | Prova que não serve |
| --- | --- | --- |
| Velocidade de uso | medição interna com número de usuários e período | "é muito rápido" |
| Atendimento | tempo médio de primeira resposta medido no canal | "atendimento humanizado" |
| Cobertura | número de cidades, lojas ou clientes ativos com data | "presente em todo o Brasil" |
| Tecnologia própria | descrição do mecanismo e onde ele aparece no produto | "IA de ponta" |
| Experiência | anos de operação, casos documentados, certificações | "especialistas no assunto" |

Formato de gravação: diferencial, dois-pontos e a prova com número e
período.

```markdown
- Cadastro de produto por foto: prova, 40 segundos por item, média medida com 30 lojistas em março de 2026.
```

O template de origem separa diferencial e prova com um traço longo. Ao
preencher, use o formato acima e mantenha a seção.

## Modelo do bloco Identidade

```markdown
## Identidade

- **Nome da empresa:** {nome de marca usado em conteúdo}
- **Nome oficial:** {razão social}
- **Descrição curta:** {uma frase: o que faz e para quem}
- **Site principal:** {https://...}
- **Ano de fundação:** {ano}
- **Setor / mercado:** {setor}
```

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Identidade

- **Nome da empresa:** Estoquely
- **Nome oficial:** Estoquely Tecnologia Ltda.
- **Descrição curta:** Aplicativo de controle de estoque pelo celular para lojas físicas com até 10 funcionários.
- **Site principal:** https://exemplo-estoquely.com.br
- **Ano de fundação:** 2021
- **Setor / mercado:** software de gestão de estoque para varejo de pequeno porte

## Missão e o que a empresa faz

A Estoquely existe porque a dona de loja pequena controla estoque em caderno
ou planilha até vender um produto que já tinha acabado. Ela só descobre na
hora de separar o pedido. A empresa constrói um controle de estoque que roda
no celular, pensado para quem nunca usou software de gestão.

## Modelo de negócio

Assinatura mensal ou anual por loja. Os planos variam pelo número de
produtos cadastrados e de usuários. O pagamento aceita cartão, boleto e Pix
no plano anual.

## Diferenciais reais

- Cadastro de produto por foto: prova, 40 segundos por item, média medida com 30 lojistas.
- Funciona sem internet e sincroniza depois: prova, teste de 60 dias em três lojas da zona rural de Minas Gerais.

## Marcos e histórico relevante

- 2021: primeira versão testada com 12 lojas piloto.
- 2023: 4.000 lojas ativas.

## Restrições institucionais

- Não emite nota fiscal; integra com emissores parceiros.
- Não vende hardware (leitor de código de barras, impressora).
- Não atende redes com mais de uma loja na mesma conta.
```

## Checklist de completude

- [ ] `Nome da empresa`, `Descrição curta` e `Site principal` preenchidos.
- [ ] Razão social em `Nome oficial`.
- [ ] Missão em prosa, com quem a empresa atende e por quê.
- [ ] Modelo de negócio explica de onde vem a receita.
- [ ] Todo diferencial tem prova com número, fonte ou mecanismo.
- [ ] Ao menos uma restrição registrada.
- [ ] Grafia da marca conferida no glossário.

## Erros comuns

- Missão com frase de efeito ("transformar o varejo brasileiro"). Pergunte
  o problema concreto que a empresa resolve.
- Diferencial sem prova. Pergunte "o que comprova isso?" antes de gravar.
- Esquecer as restrições. Uma peça de canal pode prometer emissão de nota
  fiscal que o produto não faz.
- Descrever o produto aqui. Produto é `context/produtos.md`.
- Marco sem ano. Peça institucional precisa da data para não envelhecer mal.

## Relações

`empresa.md` é a primeira leitura de quase todas as skills. Mudanças em nome
ou site afetam `links.md`, `glossario.md` e, quando o site tiver marcação de
organização, `inboundfy-dados-estruturados`.
