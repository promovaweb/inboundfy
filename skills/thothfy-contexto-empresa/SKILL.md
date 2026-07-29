---
name: thothfy-contexto-empresa
description: >
  Preenche e mantém context/empresa.md e context/glossario.md. Ative quando o
  usuário fornecer ou corrigir dado institucional — nome, missão, modelo de
  negócio, diferenciais, marcos, restrições — ou grafia oficial de termos.
---

# Thothfy Contexto — Empresa

Mantém a identidade institucional e o glossário de grafia oficial. Não
escreve conteúdo público; apenas registra o fato que outras skills vão
consumir.

## Escopo

Cobre `context/empresa.md` e `context/glossario.md`. Não cobre pessoas
(`thothfy-contexto-pessoas`), produtos (`thothfy-contexto-produtos`) nem
preço (`thothfy-contexto-ofertas`).

## Contexto exigido

Nenhum outro arquivo de `context/` é pré-requisito. Esta skill é uma das
bases que as demais consultam depois.

## Entrada esperada

Uma correção, um dado novo, ou um material bruto (site institucional,
apresentação, documento) que o usuário quer transformar em dado estruturado.

## Fluxo

1. Leia `context/empresa.md` e `context/glossario.md` atuais para não
   duplicar nem contradizer o que já existe sem confirmação do usuário.
2. Se a entrada for material bruto, extraia candidatos a preenchimento e
   apresente ao usuário para confirmação antes de gravar — nunca grave
   inferência não confirmada como fato. Use o roteiro de entrevista de
   `REFERENCIA.md` para conduzir perguntas quando faltar dado.
3. Atualize apenas os campos indicados, preservando a estrutura de seções do
   template.
4. Quando o novo dado divergir de algo já publicado em outro artefato do
   projeto, sinalize a divergência ao usuário (ver precedência em
   `CONTEXTO.md`); não corrija o artefato publicado por conta própria nesta
   skill.
5. Ao criar ou confirmar grafia de marca, produto, ferramenta ou sigla,
   registre a linha correspondente em `context/glossario.md`.

## Saída

Atualização de `context/empresa.md` e/ou `context/glossario.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido para os campos
  informados.
- Todo campo preenchido tem origem rastreável (resposta do usuário ou
  material fornecido), nunca suposição da skill.
- Nenhuma seção do template foi removida.
- Divergência com artefato publicado foi sinalizada, não silenciada.

## Idempotência

Atualiza apenas os campos indicados pelo usuário na execução atual. Não
reescreve o arquivo inteiro nem normaliza campos que não foram mencionados.
