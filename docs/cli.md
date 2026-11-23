# CLI

## Convenções

- `{{bin}} <command> [subcommand] [arguments] [options]`.
- Options aceitam `--key value` e `--key=value`. Não há agrupamento de flags
  curtas (`-abc`).
- `--` encerra a leitura de options; o que vem depois é argument.
- Options globais valem em qualquer posição, antes ou depois do command.
- Sem argumentos, em terminal interativo, o binário abre a TUI. Sem TTY,
  imprime o help e sai com exit code 2.
- Toda saída de dados vai para stdout. Avisos, progresso e erros em modo
  texto vão para stderr.
- Nomes de commands, subcommands, options, arguments, keys e campos de saída
  são em inglês. Mensagens do binário também.

## Options globais

| Option | Efeito |
| --- | --- |
| `-h`, `--help` | Help do command atual. Exit code 0. |
| `-V`, `--version` | Imprime `{{bin}} <version>`. Exit code 0. |
| `--json` | Saída em JSON com envelope estável. Erros também saem em JSON, em stdout. |
| `--skill [topic]` | Documentação embutida. Topics: `cli`, `tui`, `mcp`, `config`, `exit-codes`, `reference`. |
| `--opencli` | Descrição OpenCLI 0.1 da árvore de commands em JSON. |
| `--no-color` | Desliga cores ANSI. `NO_COLOR=1` tem o mesmo efeito. |

## Saída em texto e em JSON

Texto é o padrão quando `output.format` em settings.json é `text`. Com
`--json`, ou com `output.format = json`, a saída segue este envelope:

```json
{ "ok": true, "command": "{{bin}} config get", "data": { "key": "tui.theme", "value": "terminal" } }
```

Em erro:

```json
{
  "ok": false,
  "command": "{{bin}} credentials get",
  "error": { "code": 4, "name": "CREDENTIALS", "message": "Credential \"x\" not found.", "details": { "name": "x" } }
}
```

O exit code do processo é sempre o mesmo de `error.code`. Um agente deve ler
os dois: o envelope para a mensagem, o code para a classe da falha.

## Projeto

Os commands de projeto leem e gravam a pasta atual. `--project <dir>` (ou
`-C <dir>`) aponta outra pasta; `{{BIN}}_PROJECT` faz o mesmo pelo ambiente.
IDs aceitam `7` ou `0007`.

| Command | Função |
| --- | --- |
| `install` | instala framework, skills, pastas de dados, índices e o bloco de instruções. Options: `--dry-run`, `--yes`, `--force`, `--agent <codex\|claude\|agents>`, `--skills-dir <dir>`, `--instruction-file <AGENTS.md\|CLAUDE.md\|none>` |
| `update` | aplica ao projeto a versão do framework embutida no binário (`--dry-run`, `--yes`, `--force`) |
| `repair` | restaura arquivos gerenciados ausentes ou alterados, com backup em `.inboundfy/migracoes/` |
| `agent install` | instala ou atualiza só as skills |
| `doctor` | diagnóstico do projeto e do runtime; `--strict` faz avisos falharem, `--env` confere só o runtime |
| `status` | versão instalada e resumo do diagnóstico |
| `stats` | números do acervo, dos canais e do calendário; `--months <n>`, `--section <overview\|archive\|channels\|calendar>`, `--fast` |
| `context scan\|check\|ready` | fontes locais, prontidão do contexto mínimo e fim do setup (`ready --yes`) |
| `project sync` | cria `canais/<canal>/` para os canais marcados na estratégia |
| `archive add\|process\|list\|show\|status` | acervo: registra material (`--file`, `--text` ou stdin, `--source`), processa, lista (`--status`, `--channel`), detalha e muda o estado |
| `content create\|list\|show\|status\|digest` | peças: cria (`--persona` e `--archive` repetíveis), lista (`--channel`, `--status`), detalha, move no pipeline (`--audit-report`, `--url`, `--published-at`) e calcula o SHA-256 |
| `calendar add\|list` | agenda uma peça numa data e lista o calendário ou um mês |

O pipeline aceita `rascunho → revisao|arquivado`, `revisao →
rascunho|aprovado|arquivado`, `aprovado → revisao|agendado|publicado|arquivado`,
`agendado → revisao|aprovado|publicado|arquivado` e `publicado → arquivado`.
Aprovar a partir de `revisao` exige `--audit-report` com `ID da peça`,
`Asset`, `SHA-256 da peça` (de `content digest`) e `Veredito: aprovado`;
`publicado` exige `--url` e `--published-at`.

```bash
{{bin}} install --agent claude --yes
{{bin}} archive add "Transcrição" --file notas.md --source https://exemplo.test
{{bin}} content create blog "Título" --persona persona-01 --archive 1
{{bin}} content status 1 revisao
{{bin}} calendar add 2026-12-01 1
{{bin}} stats --json
```

## Commands do esqueleto

| Command | Função |
| --- | --- |
| `tui [--tab <tab>]` | Abre a TUI. Exige TTY. |
| `about` | Version, executable, runtime, platform e credits. |
| `config list\|get\|set\|unset\|path\|schema` | Preferências em settings.json. |
| `credentials set\|get\|list\|remove\|status\|clear\|rotate-key` | Cofre cifrado em credentials.json. |
| `mcp [--list]` | Servidor MCP via stdio, ou listagem do que ele registra. |
| `skill [topic]` | Mesmo efeito de `--skill`. |
| `completion <shell>` | Gera script para `bash`, `zsh` ou `fish`. |

## Como adicionar um command

1. Copie `template/command/example.ts` para `src/cli/commands/<name>.ts`.
2. Preencha `name`, `description`, `arguments`, `options`, `examples` e
   `exitCodes`. Toda option precisa de `description`; é ela que aparece no
   `--help`, no `--skill` e no OpenCLI.
3. Implemente `run(ctx)` devolvendo `{ data, text }`. `data` é o que sai em
   `--json`; `text` é o que sai para humanos. Lance `AppError` (ou use
   `error.*`) para falhas previstas, com o exit code certo.
4. Registre o command em `src/cli/commands.ts`.
5. Rode `bun test`, `bun run opencli` e confira `docs/opencli.json`.

Segredos nunca entram por argument de linha de comando. Leia pelo stdin ou
por `readSecret()`; grave com `setCredential()`; recupere com
`getCredential()`, que encerra com exit code 4 quando o valor não existe.

## Diagnóstico e completion

`{{bin}} doctor` confere Bun 1.4.4 ou superior, TTY de stdin/stdout,
pasta de dados com 0700, leitura de settings.json, origem da master key,
decifragem do cofre, versão e plataforma. Cada linha usa ✓, ! ou ✗.
Em JSON, `data` contém `{ checks, ok }`; cada check tem `name`, `status`
e `detail`. Ausência de TTY ou de arquivos ainda não criados gera `warn`.
Uma verificação com `fail` produz exit code 3; as demais retornam 0.
O diagnóstico não cria arquivos nem mostra segredos.

`{{bin}} completion <shell>` imprime o script em stdout. O argument `shell`
aceita `bash`, `zsh` ou `fish`; subcommands, options locais e globais e valores
de enum vêm do registry. Com `--json`, `data` contém `{ shell, script }`.
O script Zsh usa `compdef` e `compadd`, sem `bashcompinit`.
Instale na sessão atual ou acrescente a linha ao arquivo de inicialização:

```bash
eval "$({{bin}} completion bash)"
eval "$({{bin}} completion zsh)"
# fish
{{bin}} completion fish | source
```

`{{bin}} --skill reference` retorna somente a referência gerada, com
commands, arguments, options e exit codes. `skill reference` tem o mesmo
resultado, sem os capítulos da documentação.
