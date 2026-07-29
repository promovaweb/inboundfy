# REFERENCIA.md — thothfy-contexto-ofertas

Roteiro de entrevista, exemplo preenchido e checklist para `context/ofertas.md`.

## Roteiro de entrevista

1. "Qual produto ou serviço (já cadastrado em `context/produtos.md` ou
   `context/servicos.md`) esse plano representa?"
2. "Qual é o preço exato e a periodicidade (mensal, anual, único)? Se não
   houver preço público, registro como 'sob consulta'?"
3. "O que está incluso nesse plano, especificamente?"
4. "O que não está incluso — o que alguém nesse plano precisaria pagar a
   mais ou não teria acesso?"
5. "Para qual perfil de cliente esse plano é pensado?"
6. "Existe condição de upgrade ou downgrade entre planos?"
7. "Quando foi a última vez que esse preço foi confirmado? (data exata,
   para permitir auditoria de dado desatualizado)"

## Exemplo preenchido (fictício — "Estoquely")

```markdown
# Ofertas

## Essencial

- **Preço:** R$ 79/mês
- **Periodicidade:** mensal
- **O que está incluso:** até 200 produtos cadastrados, 1 usuário, alerta de
  estoque baixo.
- **O que não está incluso:** múltiplos usuários, relatório de giro de
  estoque.
- **Público-alvo do plano:** loja com até 3 funcionários e estoque pequeno.
- **Condição de upgrade/downgrade:** upgrade a qualquer momento, com
  cobrança proporcional aos dias restantes do ciclo.
- **Data da última confirmação:** 2026-03-01.

## Crescimento

- **Preço:** R$ 159/mês
- **Periodicidade:** mensal
- **O que está incluso:** produtos ilimitados, até 3 usuários, relatório de
  giro de estoque, suporte prioritário.
- **O que não está incluso:** integração com emissor de nota fiscal (via
  parceiro externo, cobrado à parte).
- **Público-alvo do plano:** loja com mais de 3 funcionários ou mais de uma
  frente de venda.
- **Condição de upgrade/downgrade:** downgrade só na renovação do ciclo
  seguinte.
- **Data da última confirmação:** 2026-03-01.

## Comparativo rápido

| Plano | Preço | Público | Diferencial principal |
| --- | --- | --- | --- |
| Essencial | R$ 79/mês | loja pequena, 1 usuário | alerta de estoque baixo |
| Crescimento | R$ 159/mês | loja com múltiplas frentes | relatório de giro + suporte prioritário |
```

## Checklist de completude

- [ ] Todo plano tem preço (ou "sob consulta" explícito) e periodicidade.
- [ ] "O que não está incluso" preenchido — evita promessa fora do plano.
- [ ] Data de última confirmação presente em cada plano.
- [ ] Comparativo preenchido quando existirem 2 ou mais planos.
- [ ] Cada plano referencia um produto/serviço que existe em
      `context/produtos.md` ou `context/servicos.md`.

## Erros comuns

- Estimar preço "no mesmo padrão do mercado" quando o usuário não informou
  — nunca preencha preço sem confirmação direta.
- Deixar a data de confirmação em branco — sem ela, uma auditoria não
  consegue saber se o preço está desatualizado.
- Registrar plano sem vínculo a um produto ou serviço cadastrado — se o
  produto ainda não existe em `context/produtos.md`, cadastre-o primeiro.
- Ignorar divergência com preço já usado em página publicada — sempre
  sinalize ao usuário quando o valor novo for diferente do que já está em
  circulação.
