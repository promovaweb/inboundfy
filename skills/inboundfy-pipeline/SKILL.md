---
name: inboundfy-pipeline
description: Atualiza estados de peças pelo CLI e confere relatórios, datas e URLs nas passagens do pipeline. Use quando o pedido falar em mover para revisão, aprovar conteúdo, agendar, registrar publicação, arquivar ou corrigir um estado.
---

# Pipeline

Move uma peça entre os seis estados do Inboundfy com o comando
`inboundfy content status`, mantendo frontmatter, `conteudos.json` e o
calendário mensal iguais. A skill é o portão entre revisão e publicação: só
libera uma peça quando existe relatório aprovado da validadora ligado ao
SHA-256 do arquivo atual. Ela não redige nem corrige a peça (isso pertence à
produção e à especialista do canal) e não valida o texto (isso pertence à
`inboundfy-validador-<canal>`).

## Arquitetura de execução

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

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/pipeline.md` (regras do
projeto, inclusive **Quem pode aprovar**), o README da peça,
`.inboundfy/indices/conteudos.json`, `.inboundfy/indices/calendario.json` e a
linha correspondente de `calendario/AAAA-MM.md`. Para aprovar, leia também o
relatório da validadora pareada.

## Estados e passagens

- `rascunho` → `revisao` ou `arquivado`
- `revisao` → `rascunho`, `aprovado` ou `arquivado`
- `aprovado` → `revisao`, `agendado`, `publicado` ou `arquivado`
- `agendado` → `revisao`, `aprovado`, `publicado` ou `arquivado`
- `publicado` → `arquivado`
- `arquivado` não avança

Ao sair de `revisao` para `aprovado`, exija relatório aprovado em
`--audit-report`. O relatório precisa conter ID, caminho da peça, SHA-256
atual e `Veredito: aprovado`. Obtenha o hash com
`inboundfy content digest <id>`. Ao voltar para `revisao` ou `rascunho`, a
aprovação anterior perde validade. Alteração no texto também impede
agendamento ou publicação até nova revisão e novo relatório.

Pedir o estado atual da peça outra vez é aceito e não cria registro novo.

## Quando usar e quando não usar

| Pedido | Ação |
| --- | --- |
| "Manda para revisão", "aprova", "agenda para dia 24", "publicou, segue o link" | Use esta skill. |
| "Arquiva essa peça" ou "não vamos mais usar" | Use esta skill com `arquivado`. |
| Corrigir texto de peça aprovada | Volte para `revisao` aqui, depois acione a produção. |
| Corrigir peça publicada | Arquive aqui e abra nova peça em `inboundfy-producao`. |
| Validar o texto | Não use. Acione a `inboundfy-validador-<canal>`. |
| Índice divergente sem mudança de estado | Não use. Acione `inboundfy-catalogo`. |

## Entrada esperada

ID da peça e estado desejado: `rascunho`, `revisao`, `aprovado`, `agendado`,
`publicado` ou `arquivado`. Conforme o destino:

- `aprovado` vindo de `revisao`: caminho do relatório da validadora;
- `agendado`: data `AAAA-MM-DD` confirmada pelo usuário;
- `publicado`: URL HTTP ou HTTPS e data `AAAA-MM-DD` da publicação.

## Perguntas de diagnóstico

1. Qual é o estado atual da peça no índice e no frontmatter? São iguais?
2. A passagem pedida está na tabela de passagens?
3. Para aprovar: o relatório existe, tem `**Veredito:** aprovado` e o SHA-256
   bate com `inboundfy content digest <id>` agora?
4. Quem pediu a aprovação está autorizado pelo campo **Quem pode aprovar** de
   `.inboundfy/pipeline.md`? Se o campo diz `PREENCHER`, pergunte ao usuário.
5. Para agendar: a data foi confirmada por uma pessoa e não sugerida pela IA?
6. Para publicar: a URL abre a peça certa e a data é a do ar, não a do
   agendamento?

## Fluxo

1. Rode o preflight. Leia o estado atual em `conteudos.json` e no
   frontmatter. Se divergirem, pare e acione `inboundfy-catalogo` para o
   relatório antes de mudar qualquer coisa.
2. Confira a passagem na tabela de estados. Passagem fora da tabela é
   recusada com a lista de estados permitidos.
3. Para aprovar após revisão, siga
   [references/portao-de-aprovacao.md](references/portao-de-aprovacao.md):
   rode `inboundfy content digest <id>`, compare com o relatório e só então
   execute `inboundfy content status <id> aprovado --audit-report <caminho>`.
4. Para agendar, registre primeiro a data com
   `inboundfy calendario add <AAAA-MM-DD> <id>` e depois execute
   `inboundfy content status <id> agendado`. O CLI sincroniza o estado na linha
   do calendário.
5. Para publicar, execute
   `inboundfy content status <id> publicado --url <url> --published-at <AAAA-MM-DD>`.
6. Ao voltar para `revisao` ou `rascunho`, informe ao usuário que relatório e
   hash foram retirados e que a peça precisa de nova validação.
7. Se o CLI recusar, consulte
   [references/diagnostico-de-erros.md](references/diagnostico-de-erros.md) e
   aplique a ação da tabela. Não edite frontmatter à mão para contornar a
   recusa.
8. Registre a mudança relevante no histórico da peça, usando o template do
   [REFERENCIA.md](REFERENCIA.md) e acione `inboundfy-catalogo` no modo
   conferência quando a passagem fechar um ciclo (publicação ou arquivamento).

## Saída

Peça, índice e calendário com o mesmo estado e os mesmos dados de publicação.
O frontmatter da peça recebe `relatorio_validacao` e `sha256_aprovado` na
aprovação, `url` e `publicado_em` na publicação. A resposta ao usuário informa
estado anterior, estado novo, comando executado e próxima ação.

## Validação

Recuse estado desconhecido, passagem não permitida, relatório ausente ou
divergente, peça alterada após aprovação, canal não selecionado, persona
ausente e publicação sem URL ou data.

Depois do comando, confira:

- `estado` do frontmatter igual ao `status` de `conteudos.json`;
- linha do calendário com o mesmo `estado:`, quando a peça estiver agendada;
- em `aprovado`, `agendado` e `publicado`: `sha256_aprovado` igual ao digest
  atual.

## Idempotência

Repetir a atualização do mesmo estado não cria registro duplicado. Repetir
`calendario add` com a mesma data e ID devolve o registro existente. A skill
nunca apaga a peça, nunca reescreve o corpo e nunca reaproveita um relatório
antigo depois de o texto mudar.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** ID da peça, estado pedido e dados exigidos pelo destino;
- **transformação:** passagem de estado conferida pelo CLI;
- **saída:** frontmatter, índice e calendário sincronizados;
- **handoff:** `inboundfy-catalogo` após publicação ou arquivamento,
  `inboundfy-producao` após volta para revisão, validadora do canal quando
  falta relatório.
