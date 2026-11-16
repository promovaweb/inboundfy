# Referência do alias compatível

Novos pedidos devem começar por `$inboundfy`. Este nome antigo só encaminha a
solicitação original para a skill principal e não executa outro fluxo.

## Matriz de encaminhamento

| Entrada | Encaminhamento |
| --- | --- |
| Solicitação recebida por este alias | `$inboundfy`, sem alterar o texto |
| Instalação ausente ou incompleta | `$inboundfy`, que acionará `inboundfy-setup` |

## Saída

Nenhum arquivo ou estado muda aqui. A orquestradora informa a saída depois de
executar o fluxo correspondente.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-iniciar**, do grupo
**entrada**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Este alias só existe para instruções antigas que ainda chamam
`$inboundfy-iniciar`. Ele não lê contexto, não grava e não escolhe fluxo.

## Template de encaminhamento

```markdown
Encaminhado para $inboundfy:
{pedido original, sem nenhuma alteração}
```

## Exemplo

**Entrada:** "$inboundfy-iniciar quero um post para o LinkedIn sobre o webinar de terça."

**Encaminhamento:** o texto inteiro segue para `$inboundfy`, que confere o
setup, identifica uma peça de canal e aciona `inboundfy-area-conteudo` ou a
produção, conforme o estado do material.

## Checklist

- [ ] O pedido seguiu sem cortes nem reformulação.
- [ ] Nenhum arquivo foi criado ou alterado.
- [ ] A única skill acionada foi `$inboundfy`.

## Erros comuns

- Resumir o pedido antes de encaminhar e perder detalhes.
- Rodar o setup a partir do alias, em vez de deixar a orquestradora decidir.
