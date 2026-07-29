---
name: thothfy-contexto-ofertas
description: >
  Preenche e mantém context/ofertas.md. Fonte única de verdade para preço,
  plano e condição comercial. Ative sempre que o usuário informar ou corrigir
  preço, inclusão de plano ou condição comercial.
---

# Thothfy Contexto — Ofertas

Mantém o cadastro de planos e ofertas comerciais. Nenhuma skill de canal deve
citar preço, inclusão de plano ou condição comercial sem ler este arquivo
primeiro — é o único lugar do Thothfy onde esse dado é fonte de verdade.

## Escopo

Cobre exclusivamente `context/ofertas.md`. Não cobre descrição funcional de
produto (`thothfy-contexto-produtos`).

## Contexto exigido

`context/produtos.md` e/ou `context/servicos.md`, para vincular cada oferta a
algo que já existe no catálogo. Se a oferta se referir a um produto ou
serviço ainda não cadastrado, acione `thothfy-contexto-produtos` primeiro.

## Entrada esperada

Preço novo, correção de preço, novo plano, ou tabela comparativa fornecida
pelo usuário.

## Fluxo

1. Leia `context/ofertas.md` atual para localizar o plano a atualizar ou
   confirmar que é uma entrada nova.
2. Exija do usuário: valor, periodicidade, o que está incluso, o que não está
   incluso e público-alvo do plano. Nunca preencha preço por estimativa. Use
   o roteiro de entrevista de `REFERENCIA.md`.
3. Registre a data da confirmação do preço no campo correspondente — isso
   permite que qualquer skill de auditoria sinalize dado antigo.
4. Ao existir dois ou mais planos, atualize a tabela comparativa ao final do
   arquivo.
5. Sinalize ao usuário quando o preço novo divergir de um valor já usado em
   conteúdo publicado, para correção manual daquele conteúdo (ver precedência
   em `CONTEXTO.md`).

## Saída

Atualização de `context/ofertas.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido para cada plano.
- Todo plano tem preço, periodicidade, inclusões e data de confirmação
  preenchidos — nunca placeholder deixado por engano.
- Nenhum valor foi estimado ou herdado de suposição.
- Divergência com conteúdo publicado foi sinalizada ao usuário.

## Idempotência

Atualiza apenas o plano indicado. Planos não mencionados na execução atual
permanecem inalterados.
