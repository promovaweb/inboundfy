---
name: inboundfy-pipeline
description: Gerencia os estados das peças de conteúdo, sincroniza frontmatter, calendário e índice e registra publicação com URL e data confirmadas.
---

# Pipeline

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

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

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Repetir a atualização do mesmo estado não cria registro duplicado.
