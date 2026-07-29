---
name: thothfy-contexto-enderecos
description: >
  Preenche e mantém context/enderecos.md. Ative quando o usuário informar ou
  corrigir endereço físico, registro legal ou contato oficial. Trata dado
  sensível — confirme a fonte antes de gravar.
---

# Thothfy Contexto — Endereços e Dados Oficiais

Mantém dado institucional sensível: endereço, registro legal e contatos
oficiais, usado em rodapé, página de contato, termos legais e assinatura de
e-mail.

## Escopo

Cobre exclusivamente `context/enderecos.md`.

## Contexto exigido

Nenhum outro arquivo é pré-requisito.

## Entrada esperada

Endereço, número de registro legal, contato oficial ou perfil de rede social
oficial, fornecido diretamente pelo usuário.

## Fluxo

1. Leia `context/enderecos.md` atual.
2. Trate todo dado deste arquivo como sensível: exija que a informação venha
   diretamente do usuário responsável pelo dado, nunca de inferência ou de
   material de terceiro sem confirmação. Use o roteiro de entrevista de
   `REFERENCIA.md`.
3. Registre o tipo de endereço (sede, escritório comercial, endereço fiscal)
   quando houver mais de um endereço.
4. Ao registrar múltiplos endereços (filiais, escritórios por país), repita o
   bloco de seção, sem sobrescrever o endereço principal.
5. Sinalize ao usuário quando um dado aqui divergir de algo já publicado em
   rodapé, página de contato ou termos — a correção do artefato publicado é
   responsabilidade do usuário ou de skill de canal, não desta skill.

## Saída

Atualização de `context/enderecos.md`.

## Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Todo dado tem confirmação direta do usuário responsável.
- Tipo de endereço está identificado quando há mais de um.
- Divergência com artefato publicado foi sinalizada.

## Idempotência

Atualiza apenas o endereço ou contato indicado, preservando os demais.
