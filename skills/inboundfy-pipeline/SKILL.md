---
name: inboundfy-pipeline
description: Gerencia os estados das peças de conteúdo, sincroniza frontmatter, calendário e índice e registra publicação com URL e data confirmadas.
---

# Pipeline

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/pipeline.md`, o README da peça,
`.inboundfy/indices/conteudos.json` e a linha correspondente do calendário.

## Entrada esperada

ID da peça e estado desejado: `rascunho`, `revisao`, `aprovado`, `agendado`,
`publicado` ou `arquivado`.

## Fluxo

1. Confira a passagem permitida no pipeline.
2. Atualize o frontmatter do `README.md` da peça, o índice e o calendário.
3. Ao publicar, exija URL, data e confirmação do responsável.
4. Preserve histórico no próprio README quando houver mudança relevante.

## Saída

Peça, índice e calendário com o mesmo estado e os mesmos dados de publicação.

## Validação

Recuse estado desconhecido, canal não selecionado, persona ausente e publicação
sem URL ou data.

## Idempotência

Repetir a atualização do mesmo estado não cria registro duplicado.
