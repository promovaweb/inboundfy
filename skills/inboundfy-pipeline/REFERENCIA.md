# Referência do pipeline

Estados: `rascunho`, `revisao`, `aprovado`, `agendado`, `publicado` e
`arquivado`. A aprovação após revisão exige um relatório com ID, caminho,
SHA-256 atual da peça e `Veredito: aprovado`. O CLI confere o hash e o relatório
ao avançar para `agendado` ou `publicado`.

| Estado atual | Próximos estados permitidos |
| --- | --- |
| `rascunho` | `revisao`, `arquivado` |
| `revisao` | `rascunho`, `aprovado`, `arquivado` |
| `aprovado` | `revisao`, `agendado`, `publicado`, `arquivado` |
| `agendado` | `revisao`, `aprovado`, `publicado`, `arquivado` |
| `publicado` | `arquivado` |
| `arquivado` | nenhum |

Ao retornar para `revisao` ou `rascunho`, o CLI remove a referência da
aprovação anterior. Qualquer alteração no README da peça invalida o hash
aprovado.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-pipeline**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Material de apoio por passo

| Passo do fluxo | Arquivo | Uso |
| --- | --- | --- |
| 3 | [references/portao-de-aprovacao.md](references/portao-de-aprovacao.md) | Linhas exigidas no relatório, campos fora do hash, sequência de comandos e cenários. |
| 7 | [references/diagnostico-de-erros.md](references/diagnostico-de-erros.md) | Mensagens de recusa do CLI, causa, ação e sinais de saúde do pipeline. |

## Significado operacional de cada estado

| Estado | Entra quando | Sai quando | Quem age a seguir |
| --- | --- | --- | --- |
| `rascunho` | `inboundfy content create` cria a pasta | O texto completo passou por A5 | especialista do canal |
| `revisao` | A peça está pronta para a validadora, ou voltou para ajuste | A validadora aprova ou devolve | `inboundfy-validador-<canal>` |
| `aprovado` | Relatório aprovado ligado ao hash | Data confirmada ou publicação direta | responsável do calendário |
| `agendado` | Data registrada em `calendario/AAAA-MM.md` | A peça entra no ar ou a data cai | quem publica no canal |
| `publicado` | URL e data reais registradas | Só sai para arquivo | `inboundfy-catalogo` |
| `arquivado` | Peça descartada, substituída ou fora de uso | Não sai | ninguém |

## Comandos

| Ação | Comando |
| --- | --- |
| Ver o hash atual | `inboundfy content digest <id>` |
| Mudar estado | `inboundfy content status <id> <estado>` |
| Aprovar | `inboundfy content status <id> aprovado --audit-report <arquivo>` |
| Registrar data | `inboundfy calendario add <AAAA-MM-DD> <id>` |
| Publicar | `inboundfy content status <id> publicado --url <url> --published-at <AAAA-MM-DD>` |
| Agenda do mês | `inboundfy calendario list <AAAA-MM>` |

A opção global `--json` devolve o registro atualizado em JSON, útil para
conferir os campos depois da passagem.

## Template do histórico da peça

Acrescente ao fim do `README.md` da peça, abaixo da seção `## Revisão`. O
histórico entra no hash, por isso registre a linha **antes** de pedir a
validação ou logo depois da publicação, nunca entre o relatório e a aprovação.

```markdown
## Histórico do pipeline

| Data | De | Para | Motivo | Relatório ou URL | Responsável |
| --- | --- | --- | --- | --- | --- |
| {{AAAA-MM-DD}} | {{estado}} | {{estado}} | {{motivo curto}} | {{caminho ou URL}} | {{pessoa ou papel}} |
```

## Template da resposta ao usuário

```markdown
**Peça {{id}}** ({{canal}}): {{estado anterior}} → {{estado novo}}

- **Comando:** `{{comando executado}}`
- **Relatório:** {{caminho ou "não se aplica"}}
- **SHA-256 aprovado:** {{8 primeiros caracteres ou "retirado"}}
- **Calendário:** {{data e arquivo ou "sem data"}}
- **Próxima ação:** {{verbo + objeto + responsável}}
```

## Exemplo

Exemplo fictício. A Fiscalize Contabilidade Digital, de Campinas, escreveu o
post `0007`, "Como emitir nota fiscal de MEI", para a persona-01 (MEI que
vende serviços e recebe por Pix). O campo **Quem pode aprovar** de
`.inboundfy/pipeline.md` diz `sócia responsável (Renata Ilha)`.

### Rodada 1: revisão e reprovação

1. A especialista termina o texto e registra A5. A skill executa
   `inboundfy content status 0007 revisao`.
2. A `inboundfy-validador-blog` reprova: o post afirma "emissão gratuita em
   qualquer prefeitura", sem fonte em `ofertas.md` nem na pesquisa. Veredito
   `reprovado`.
3. Pedido de aprovação recusado pela skill antes do CLI: o relatório não tem
   `**Veredito:** aprovado`. A peça continua `revisao` e volta à especialista.

### Rodada 2: aprovação

1. A especialista troca a frase por "a emissão pelo Portal do Empreendedor não
   tem custo para o MEI", com fonte registrada.
2. A validadora aprova e grava
   `canais/blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/README.auditoria.md`.
3. A skill roda `inboundfy content digest 0007`, confere que o hash do
   relatório é o mesmo e confirma com Renata que pode aprovar.
4. Comando: `inboundfy content status 0007 aprovado --audit-report canais/blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/README.auditoria.md`.

### Ajuste tardio

Na véspera do agendamento, o time pede para trocar o CTA de "fale no
WhatsApp" para "agende pelo WhatsApp". A skill explica que a mudança altera o
hash. Sequência: `revisao`, ajuste pela especialista, nova validação, novo
digest, nova aprovação. Só então a peça volta a ser agendada.

### Agendamento e publicação

```bash
inboundfy calendario add 2026-11-24 0007
inboundfy content status 0007 agendado
inboundfy content status 0007 publicado --url https://fiscalize.exemplo.com.br/blog/nota-fiscal-mei --published-at 2026-11-24
```

Resposta final ao usuário:

```markdown
**Peça 0007** (blog): agendado → publicado

- **Comando:** `inboundfy content status 0007 publicado --url https://fiscalize.exemplo.com.br/blog/nota-fiscal-mei --published-at 2026-11-24`
- **Relatório:** `canais/blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/README.auditoria.md`
- **SHA-256 aprovado:** `3be1c09a`
- **Calendário:** 2026-11-24 em `calendario/2026-11.md`
- **Próxima ação:** acionar `inboundfy-catalogo` no modo conferência e
  sugerir a peça 0007 como link interno do post 0006.
```

## Checklist

- [ ] O estado atual foi lido no índice e no frontmatter e os dois batem.
- [ ] A passagem está na tabela de estados.
- [ ] Na aprovação: relatório com as quatro linhas exatas e veredito
  `aprovado`.
- [ ] Na aprovação: digest rodado depois da última edição e igual ao
  relatório.
- [ ] A pessoa autorizada em **Quem pode aprovar** confirmou.
- [ ] No agendamento: data confirmada por pessoa e linha no calendário.
- [ ] Na publicação: URL HTTP ou HTTPS que abre a peça e data real
  `AAAA-MM-DD`.
- [ ] Frontmatter, índice e calendário mostram o mesmo estado.
- [ ] Nenhum campo foi editado à mão para contornar recusa do CLI.
- [ ] O usuário recebeu estado anterior, estado novo e próxima ação.

## Erros comuns

- **Editar o README depois do relatório "só para corrigir uma vírgula".**
  Qualquer mudança fora dos cinco campos do pipeline troca o hash. Faça a
  correção antes da validação.
- **Escrever o histórico entre o relatório e a aprovação.** O histórico faz
  parte do arquivo; registrá-lo nesse intervalo invalida o hash.
- **Mudar `estado:` no frontmatter à mão.** Índice e calendário ficam com o
  valor antigo e a peça parece aprovada sem relatório.
- **Usar a data de agendamento como data de publicação.** Se a peça saiu
  dois dias depois, registre o dia real; o tempo de ciclo depende disso.
- **Voltar peça publicada para revisão.** A tabela não permite. Arquive e abra
  nova peça com novo ID, citando a anterior.
- **Agendar sem `calendario add`.** O estado fica `agendado` sem linha no
  mês e ninguém vê a peça na agenda.
- **Aprovar porque a validadora "disse que estava bom" na conversa.** Sem
  arquivo de relatório não há aprovação.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
No pipeline, o objetivo é a passagem pedida, a entrada é o ID com os dados
exigidos pelo destino, o contexto é `.inboundfy/pipeline.md`, o resultado é o
estado sincronizado nos três lugares e a próxima ação aponta para a
validadora, a produção ou o catálogo.
