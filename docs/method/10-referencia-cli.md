# Referência do CLI

O binário `inboundfy` instala o framework, mantém os índices do projeto e
registra os estados das peças. Esta página cobre os commands de projeto; os
commands herdados do Termfy (`about`, `config`, `credentials`, `skill`,
`completion`, `tui`, `mcp`) estão em `inboundfy --skill cli`.

Regras que valem para todos:

- Execute na raiz do projeto consumidor. `--project <dir>` (ou `-C <dir>`)
  aponta outra pasta, relativa à atual ou absoluta; `INBOUNDFY_PROJECT` faz o
  mesmo pelo ambiente.
- `--json` imprime o envelope `{ "ok": true, "command": "...", "data": ... }`.
  Erros também saem em JSON: `{ "ok": false, "error": { "code", "name",
  "message", "details" } }`.
- IDs numéricos aceitam zeros à esquerda ou não: `1` e `0001` são o mesmo
  item.
- Toda escrita usa a trava `.inboundfy/.cli.lock` nas operações de
  instalação, grava de forma atômica e recusa caminhos fora do projeto ou por
  link simbólico.
- Os códigos de saída são fixos: `0` sucesso, `2` uso inválido, `6` não
  encontrado, `7` permissão, `10` não instalado, `11` integridade, `12`
  conflito. A tabela completa está em `inboundfy --skill exit-codes`.

## Instalação e diagnóstico

| Command | Função | Options |
| --- | --- | --- |
| `inboundfy install` | instala framework, skills, pastas de dados, índices e o bloco de instruções | `--dry-run`, `--yes`, `--force`, `--agent <codex\|claude\|agents>`, `--skills-dir <dir>`, `--instruction-file <AGENTS.md\|CLAUDE.md\|none>` |
| `inboundfy update` | aplica a versão do framework embutida no binário | `--dry-run`, `--yes`, `--force` |
| `inboundfy repair` | restaura arquivos gerenciados ausentes ou alterados, com backup | `--dry-run`, `--yes`, `--force` |
| `inboundfy agent install` | instala ou atualiza só as skills | as mesmas de `install` |
| `inboundfy doctor` | diagnóstico do projeto e do runtime, sem escrever | `--strict` (avisos falham), `--env` (só runtime) |
| `inboundfy status` | versão instalada e resumo do diagnóstico | |
| `inboundfy stats` | números do acervo, dos canais e do calendário | `--months <n>`, `--section <overview\|archive\|channels\|calendar>`, `--fast` |

```bash
inboundfy install --dry-run
inboundfy install --agent claude --instruction-file CLAUDE.md --yes
inboundfy update --yes
inboundfy doctor --strict --json
inboundfy stats --section channels
```

Arquivos gerenciados alterados à mão vão para
`.inboundfy/migracoes/arquivos-customizados/<data>/` antes de serem
substituídos. Arquivos que saíram do framework numa atualização vão para
`.inboundfy/migracoes/arquivos-legados/<data>/`. O contexto, a estratégia,
os índices e as pastas de dados nunca são sobrescritos.

## Contexto e estrutura

| Command | Função |
| --- | --- |
| `inboundfy context scan` | regrava `.inboundfy/fontes-candidatas.json` com os Markdown em maiúsculas e os de `brand/` |
| `inboundfy context check` | mostra quais campos mínimos de empresa, voz, personas e estratégia faltam; sai com `11` enquanto faltar algum |
| `inboundfy context ready --yes` | marca a entrevista do `inboundfy-setup` como concluída; recusa com `12` se o mínimo estiver incompleto |
| `inboundfy project sync` | cria `canais/<canal>/` para os canais marcados em `.inboundfy/estrategia.md` |

## Acervo

| Command | Função |
| --- | --- |
| `inboundfy archive add <title>` | cria `acervo/NNNN-AAAA-MM-DD-slug/` com `bruto.md` intocado, os arquivos de etapa pendentes e as auditorias A0 a A6 |
| `inboundfy archive process <id>` | grava `processado.md` com o bruto normalizado e marca o item `processado` |
| `inboundfy archive list` | lista os itens; `--status <estado>` e `--channel <canal>` filtram |
| `inboundfy archive show <id>` | mostra o item com o andamento de cada etapa e auditoria |
| `inboundfy archive status <id> <estado>` | troca o estado (`recebido`, `processando`, `processado`, `arquivado`) |

`archive add` lê o material de `--file <path>`, de `--text <text>` ou da
entrada padrão, nessa ordem. `--source <source>` registra a origem.

```bash
inboundfy archive add "Transcrição do webinar" --file notas/webinar.md --source https://exemplo.test
pbpaste | inboundfy archive add "Ideia do dia"
inboundfy archive show 7
```

## Peças e pipeline

| Command | Função |
| --- | --- |
| `inboundfy content create <channel> <title>` | cria `canais/<canal>/NNNN-AAAA-MM-DD-slug/README.md` em `rascunho` |
| `inboundfy content list` | lista as peças; `--channel <canal>` e `--status <estado>` filtram |
| `inboundfy content show <id>` | mostra uma peça com personas, acervo e publicação |
| `inboundfy content status <id> <status>` | move a peça no pipeline |
| `inboundfy content digest <id>` | calcula o SHA-256 que o relatório de validação precisa citar |

`content create` exige o canal marcado na estratégia (senão `12`) e ao menos
uma `--persona <id>`. `--archive <id>` liga itens do acervo. As duas options
podem ser repetidas ou receber valores separados por vírgula:

```bash
inboundfy content create blog "Por que inbound vence anúncio" --persona persona-01 --archive 7 --archive 9
inboundfy content create linkedin "Nota de produto" --persona persona-01,persona-02
```

### Estados e passagens

| De | Para |
| --- | --- |
| `rascunho` | `revisao`, `arquivado` |
| `revisao` | `rascunho`, `aprovado`, `arquivado` |
| `aprovado` | `revisao`, `agendado`, `publicado`, `arquivado` |
| `agendado` | `revisao`, `aprovado`, `publicado`, `arquivado` |
| `publicado` | `arquivado` |
| `arquivado` | nenhum |

Uma passagem fora da tabela sai com `12`. O comando atualiza o frontmatter do
README, o índice de conteúdos e o calendário mensal.

### Aprovação vinculada à versão revisada

Aprovar a partir de `revisao` exige `--audit-report <path>`, um relatório
dentro do projeto com estas linhas exatas:

```markdown
- **ID da peça:** `0001`
- **Asset:** `canais/blog/0001-2026-09-20-titulo/README.md`
- **SHA-256 da peça:** `<64 caracteres hexadecimais>`
- **Veredito:** aprovado
```

O SHA-256 vem de `inboundfy content digest <id>`, rodado depois da última
alteração. O cálculo ignora só os campos mutáveis do pipeline (`estado`,
`relatorio_validacao`, `sha256_aprovado`, `url`, `publicado_em`); qualquer
mudança no texto invalida a aprovação. `agendado` e `publicado` voltam a
conferir o relatório e o hash. Voltar para `revisao` ou `rascunho` apaga a
aprovação anterior.

`publicado` exige `--url <url>` (HTTP ou HTTPS, normalizada antes de salvar) e
`--published-at <date>` (`AAAA-MM-DD`, data existente).

```bash
inboundfy content status 1 revisao
inboundfy content digest 1
inboundfy content status 1 aprovado --audit-report auditoria/blog-0001.md
inboundfy content status 1 agendado
inboundfy content status 1 publicado --url https://exemplo.test/artigo --published-at 2026-09-20
```

Com `--json`, `content status` devolve o registro atualizado: `id`,
`channel`, `title`, `slug`, `directory`, `createdAt`, `status`, `personas`,
`acervo`, `baseEditorial` e, quando existirem, `auditReport`,
`approvedAssetSha256`, `publishedAt` e `url`. `content digest` devolve `id`,
`asset` e `sha256`.

## Calendário

| Command | Função |
| --- | --- |
| `inboundfy calendar add <date> <id>` | agenda a peça em `calendario/AAAA-MM.md`, sob o título da data; repetir a mesma data e peça devolve o registro existente |
| `inboundfy calendar list [month]` | lista o calendário inteiro ou um mês `AAAA-MM`, em ordem de data |

```bash
inboundfy calendar add 2026-12-01 12
inboundfy calendar list 2026-12 --json
```

## Mudanças em relação à 0.x

| 0.x (Node) | 1.x (binário) |
| --- | --- |
| `npx @promovaweb/inboundfy@latest <cmd>` | `inboundfy <cmd>` (o `npx` continua funcionando) |
| `inboundfy acervo add\|process\|list` | `inboundfy archive add\|process\|list` |
| `inboundfy calendario add\|list` | `inboundfy calendar add\|list` |
| `content create --acervo <id>` | `content create --archive <id>` |
| saída `1` em qualquer erro | códigos fixos `2`, `6`, `7`, `10`, `11`, `12` |
| sem estatísticas | `inboundfy stats`, painel da TUI e tool `project_stats` |

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | referência |
| Escopo | commands de projeto do binário `inboundfy` |
| Autoridade | registry em `src/cli/commands.ts` e `inboundfy --skill reference` |
