# REFERENCIA.md; inboundfy-contexto-empresa

Roteiro de entrevista, exemplo preenchido e checklist para `context/empresa.md`
e `context/glossario.md`.

## Roteiro de entrevista

1. "Qual é o nome oficial (razão social ou nome legal) e o nome de marca que
   vocês usam no dia a dia?"
2. "Qual foi o ano de fundação da empresa, e em qual setor ou mercado ela atua?"
3. "Se eu tivesse que explicar em duas ou três frases o que a empresa faz e
   para quem, o que eu diria?" → vira o texto de "Missão e o que a empresa
   faz", sempre em prosa, nunca bullet solto.
4. "Como a empresa ganha dinheiro; venda de produto, assinatura, serviço,
   licença?"
5. "Quais são de dois a quatro diferenciais reais? Para cada um, o que prova
   que é verdade (não uma afirmação vaga)?"
6. "Existe algum marco (ano de lançamento, marco de clientes, mudança de
   direção) que valeria citar num 'sobre nós'?"
7. "O que a empresa explicitamente não faz, não vende ou não promete, que as
   pessoas às vezes assumem que ela faz?"
8. "Existe algum termo, nome de produto ou sigla que tem grafia oficial
   específica?" → alimenta `context/glossario.md`.

## Exemplo preenchido (fictício; "Estoquely")

```markdown
# Empresa

## Identidade

- **Nome oficial:** Estoquely Tecnologia Ltda.
- **Nome de marca:** Estoquely
- **Site:** https://exemplo-estoquely.com.br
- **Ano de fundação:** 2021
- **Setor / mercado:** software de gestão de estoque para varejo de pequeno porte

## Missão e o que a empresa faz

A Estoquely existe porque dona de loja pequena controla estoque em caderno
ou planilha até vender um produto que não tinha mais; e só
descobre isso na hora da entrega. A empresa constrói um sistema simples de
controle de estoque que roda no celular, pensado para quem nunca usou
software de gestão antes.

## Modelo de negócio

Assinatura mensal por loja, com planos que variam pelo número de produtos
cadastrados e usuários simultâneos.

## Diferenciais reais

- Cadastro de produto por foto, sem digitação manual; prova: tempo
  médio de cadastro de 40 segundos por item, medido em teste com 30 lojistas.
- Funciona offline e sincroniza depois; prova: testado em loja sem
  internet estável em zona rural.

## Marcos e histórico relevante

- 2021; lançamento da primeira versão, testada com 12 lojas piloto.
- 2023; 4.000 lojas ativas na plataforma.

## Restrições institucionais

- Não faz emissão de nota fiscal (integra com sistemas que fazem isso).
- Não vende hardware (leitor de código de barras, impressora).
```

## Checklist de completude

- [ ] Nome oficial e nome de marca preenchidos.
- [ ] Missão escrita em prosa (não lista), com quem a empresa atende e por
      quê.
- [ ] Modelo de negócio claro o suficiente para uma peça institucional
      explicar como a empresa ganha dinheiro.
- [ ] Ao menos um diferencial com prova (não frase vaga tipo "qualidade
      superior").
- [ ] Ao menos uma restrição institucional registrada.
- [ ] Glossário tem entrada para o nome da marca e produtos, se a grafia não
      for óbvia.

## Erros comuns

- Preencher "Missão" com frase de efeito de marketing em vez de explicação
  concreta de o que a empresa resolve.
- Registrar diferencial sem prova ("melhor atendimento do mercado");   sempre pergunte "o que comprova isso?" antes de gravar.
- Esquecer de perguntar sobre restrições; sem isso, uma skill de canal pode
  prometer algo que a empresa não entrega.
- Confundir este arquivo com `context/produtos.md`: aqui é a empresa como
  entidade, não a descrição funcional de cada produto.
