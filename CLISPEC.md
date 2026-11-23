# Inboundfy

`inboundfy`: Inbound marketing framework with AI skills: CLI, TUI and MCP stdio server to install the framework and manage the archive, channels and editorial calendar.

## Purpose

Quem produz conteúdo de inbound com agentes de IA precisa de um projeto
organizado: o contexto do negócio preenchido, o material bruto guardado e
numerado, cada peça ligada ao material de onde saiu, um pipeline com
revisão e aprovação vinculadas à versão revisada e um calendário mensal.
As skills do Inboundfy fazem o trabalho editorial; o binário `inboundfy`
instala o framework no projeto, mantém os índices JSON de acervo, canais e
calendário e mostra os números desse trabalho. Até a 0.8.3 ele era um CLI
Node com commands em português. A 1.0 refaz o binário sobre o Termfy, com
TUI de painel, servidor MCP para o acervo e os canais e commands em inglês;
o formato dos dados do projeto continua o mesmo.

## Audiences

| Público | Modo | Necessidade |
| --- | --- | --- |
| pessoa de marketing ou fundadora | TUI | ver de relance o acervo, os canais, o funil do pipeline e o calendário, e abrir o detalhe de um item |
| pessoa de marketing ou fundadora | CLI texto | instalar, atualizar e conferir o framework, registrar material e mover peças no pipeline |
| agentes (Claude Code, Codex, OpenCode) | MCP e skills `inboundfy-*` | ler e gravar acervo, peças e calendário com as tools `archive_*`, `content_*`, `calendar_*` e `project_stats` |
| scripts e CI | CLI `--json` | conferir a integridade com `doctor --strict` e extrair números com `stats --json` |

## Out of scope

- Escrever, revisar ou publicar o texto das peças: isso é das skills e do
  agente.
- Publicar nos canais (blog, LinkedIn, e-mail) ou ler métricas de
  audiência das plataformas.
- Banco de dados: os índices JSON e as pastas do projeto são a única fonte.
- Editar o contexto do negócio pela TUI.

## Surface

### Commands

| Command | Função | Options | `data` no `--json` | Exit codes | Credenciais |
| --- | --- | --- | --- | --- | --- |
| `install` | Install the framework, the skills and the project data folders. | `--dry-run`, `--yes`, `--force`, `--agent`, `--skills-dir`, `--instruction-file` | `{ mode, version, dryRun, actions[], state }` | 7, 10, 12 | |
| `update` | Apply the framework version shipped by this binary. | `--dry-run`, `--yes`, `--force` | igual a `install` | 7, 10, 12 | |
| `repair` | Restore managed files that are missing or changed. | `--dry-run`, `--yes`, `--force` | igual a `install` | 7, 10, 12 | |
| `agent install` | Install or update only the skills. | igual a `install` | igual a `install` | 7, 10, 12 | |
| `doctor` | Diagnose the project installation and the runtime. | `--strict`, `--env` | `{ healthy, project, environment }` | 3, 10, 11 | |
| `status` | Installed version and health summary. | | `{ healthy, installedVersion, cliVersion, summary }` | 10 | |
| `stats` | Statistics of the archive, the channels and the calendar. | `--months`, `--section`, `--fast` | `ProjectStats` | | |
| `context scan\|check\|ready` | Discover local sources and track the initial setup. | `ready --yes` | `{ sources }`, `{ ready, missing[], items[] }`, `{ setupStatus }` | 10, 11, 12 | |
| `project sync` | Create `canais/<channel>/` for the checked channels. | | `{ channels[], directories[] }` | | |
| `archive add\|process\|list\|show\|status` | Raw materials in `acervo/`. | `--file`, `--text`, `--source`, `--status`, `--channel` | registro, lista ou detalhe com progresso | 6 | |
| `content create\|list\|show\|status\|digest` | Channel pieces and their pipeline. | `--persona`, `--archive`, `--channel`, `--status`, `--audit-report`, `--url`, `--published-at` | registro, lista ou digest | 6, 12 | |
| `calendar add\|list` | Monthly editorial calendar. | `[month]` | registro ou lista | 6 | |
| `tui` | Open the terminal interface. Requires a TTY. | `--tab` | | 8 | |
| `mcp` | Start the MCP server (stdio). | `--list` | veja `docs/cli.md` | 9 | |
| `about`, `config`, `credentials`, `skill`, `completion` | Herdados do starter kit. | veja `docs/cli.md` | veja `docs/cli.md` | 3, 4, 7 | |

Todos os commands de projeto aceitam `--project <dir>` (`-C`), com
`INBOUNDFY_PROJECT` como alternativa.

### Screens

| Screen | Função | Teclas |
| --- | --- | --- |
| `dashboard` | painel do projeto: totais, funil do pipeline, canais, entrada do acervo por mês, calendário e prontidão do contexto | `r`, `←` `→`, `1`-`9`, `?`, `q` |
| `archive` | lista do acervo com filtro por estado e detalhe com etapas e auditorias anti-slop | `↑` `↓`, `Enter`, `Esc`, `f`, `r` |
| `channels` | canais com números por estado e lista de peças do canal selecionado | `↑` `↓`, `Enter`, `Esc`, `r` |
| `calendar` | próximas entradas, atrasadas e mês corrente | `↑` `↓`, `←` `→` no mês, `r` |
| `overview`, `about` | herdadas do starter kit | `←` `→`, `1`-`9`, `?`, `q` |

### MCP

| Tipo | Nome | Função | Efeito |
| --- | --- | --- | --- |
| tool | `project_stats` | números do acervo, dos canais e do calendário | `read` |
| tool | `project_doctor` | diagnóstico do projeto | `read` |
| tool | `context_check` | prontidão do contexto mínimo | `read` |
| tool | `context_scan` | atualiza `fontes-candidatas.json` | `write` |
| tool | `archive_list`, `archive_show` | lista e detalhe do acervo | `read` |
| tool | `archive_add`, `archive_process`, `archive_set_status` | registra, processa e muda o estado de itens | `write` |
| tool | `content_list`, `content_show`, `content_digest` | lista, detalhe e digest das peças | `read` |
| tool | `content_create`, `content_set_status` | cria peças e move no pipeline | `write` |
| tool | `calendar_list` | entradas do calendário | `read` |
| tool | `calendar_add` | agenda uma peça | `write` |
| tool | `about`, `exit_codes`, `skill`, `config_list`, `config_get`, `credentials_status`, `doctor` | herdadas do starter kit | `read` |
| resource | `inboundfy://stats`, `inboundfy://archive`, `inboundfy://archive/{id}`, `inboundfy://channels`, `inboundfy://channels/{channel}`, `inboundfy://calendar` | leituras JSON do projeto | `read` |
| resource | `inboundfy://about`, `inboundfy://exit-codes`, `inboundfy://skill`, `inboundfy://skill/{topic}` | herdados do starter kit | `read` |
| prompt | `operate`, `ingest_material`, `produce_piece`, `editorial_review` | roteiros de trabalho | |

### Configuration

| Key ou credencial | Tipo | Padrão | Função |
| --- | --- | --- | --- |
| `INBOUNDFY_PROJECT` | variável | diretório atual | raiz do projeto dos commands, da TUI e do MCP |
| `tui.initialTab` | enum | `dashboard` | aba aberta pela TUI |
| demais keys | | | herdadas do starter kit, veja `docs/configuration.md` |

### Exit codes

| Código | Nome | Quando |
| --- | --- | --- |
| 10 | `NOT_INSTALLED` | o Inboundfy não está instalado no projeto ou o estado é inválido |
| 11 | `INTEGRITY` | `doctor` ou `context check` encontrou erros |
| 12 | `CONFLICT` | trava ativa, arquivo sem dono, transição inválida ou aprovação divergente |
| 0 a 9, 130 | | herdados do starter kit, veja `docs/exit-codes.md` |

## Specs

| Spec | Título | Status |
| --- | --- | --- |
| [0001](specs/0001-termfy-migration.md) | Migração do CLI para o Termfy, MCP e stats | done |
| [0002](specs/0002-tui-dashboard.md) | TUI com painel do acervo, dos canais e do calendário | done |
| [0003](specs/0003-skills-docs-release.md) | Skills, documentação e release 1.0.0 | done |

## Notes

- 2026-11-23: os valores persistidos (estados `recebido`, `rascunho`,
  `publicado` etc., pastas `acervo/`, `canais/`, `calendario/`, campos dos
  relatórios de validação) seguem em português porque as skills e os
  projetos existentes leem esses valores. A superfície do binário é inglês.
- 2026-11-23: o pacote npm `@promovaweb/inboundfy` vira invólucro do
  binário; o `packageName` do `install.json` continua o mesmo para os
  projetos instalados pela 0.x.
