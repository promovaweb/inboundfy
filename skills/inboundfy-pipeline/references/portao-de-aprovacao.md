# Portão de aprovação

Leia no passo 3 do fluxo. A aprovação do Inboundfy prende uma versão exata do
arquivo a um relatório. Se o texto muda depois, a aprovação deixa de valer.

## O que o CLI confere

Ao executar `inboundfy content status <id> aprovado --audit-report <arquivo>`
com a peça em `revisao`, o CLI lê o relatório e procura quatro linhas, cada
uma começando exatamente assim:

```markdown
- **ID da peça:** `0007`
- **Asset:** `canais/blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/README.md`
- **SHA-256 da peça:** `9f2c...` (64 caracteres hexadecimais)
- **Veredito:** aprovado
```

| Linha | Regra |
| --- | --- |
| ID da peça | Igual ao ID do índice, com quatro dígitos. |
| Asset | Caminho relativo do `README.md` da peça, igual ao `directory` do índice mais `/README.md`. |
| SHA-256 da peça | Hash completo, minúsculo ou maiúsculo, igual ao digest do arquivo agora. |
| Veredito | Texto `aprovado`. `reprovado`, `devolvido para briefing` ou `impedido` recusam a passagem. |

Crases em volta do valor são aceitas. Linha com outro rótulo, como
`- **ID:**` ou `- **Hash:**`, não é reconhecida.

## O que entra no hash

O digest é calculado sobre o `README.md` inteiro, ignorando somente cinco
campos do frontmatter que o próprio pipeline altera:

- `estado`
- `relatorio_validacao`
- `sha256_aprovado`
- `url`
- `publicado_em`

Qualquer outra mudança muda o hash: uma vírgula no corpo, um título novo, uma
persona a mais, um campo `cta` editado. Por isso a ordem é sempre: terminar a
última correção, rodar a validadora, gerar o digest, gravar o relatório,
aprovar.

## Sequência correta

```bash
inboundfy content status 0007 revisao
# validadora lê a peça e escreve o relatório
inboundfy content digest 0007
# o hash vai para a linha "SHA-256 da peça" do relatório
inboundfy content status 0007 aprovado --audit-report canais/blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/README.auditoria.md
inboundfy calendar add 2026-11-24 0007
inboundfy content status 0007 agendado
inboundfy content status 0007 publicado --url https://exemplo.com.br/blog/nota-fiscal-mei --published-at 2026-11-24
```

O relatório fica onde `inboundfy-base-validador` define: junto ao asset avulso
como `<nome-do-asset>.auditoria.md`, ou em
`06-auditoria/assets/<canal>-<item>.md` dentro de um pacote.

## Cenários

| Situação | Resultado | O que fazer |
| --- | --- | --- |
| Aprovar sem `--audit-report` vindo de `revisao` | Recusa | Pedir o relatório à validadora. |
| Usar `--audit-report` para outro estado | Recusa | Remover a opção; ela só vale ao aprovar. |
| Relatório gerado antes da última correção | Recusa por hash | Rodar a validadora de novo sobre o arquivo atual. |
| Peça editada depois de aprovada, pedido de agendar | Recusa: o arquivo mudou | Voltar para `revisao`, validar, aprovar de novo. |
| `agendado` → `aprovado` (data cancelada) | Aceito se o hash ainda bate | Retirar a linha do calendário à mão e avisar o catálogo. |
| `aprovado` → `publicado` direto, sem agenda | Aceito | Exigir URL e data. |
| Corrigir erro em peça `publicado` | Não existe volta | Arquivar e criar nova peça, conforme `.inboundfy/pipeline.md`. |

## Quem pode aprovar

O campo **Quem pode aprovar** de `.inboundfy/pipeline.md` define a pessoa ou o
papel. O relatório da validadora prova que o texto passou nas regras; a
autorização humana prova que a empresa aceita publicar. Quando o campo estiver
como `PREENCHER`, pergunte ao usuário antes da primeira aprovação e, com a
autorização dele, grave a resposta nesse mesmo campo.
