# Arquitetura

```text
src/
  main.ts                 entry point: decide TUI, CLI ou help
  app/
    manifest.ts           identidade do binário (name, version, author, links)
    exit-codes.ts         tabela de exit codes
    errors.ts             AppError e atalhos error.*
  cli/
    index.ts              runCli(argv): parse, options globais, envelope JSON
    registry.ts           tipos Command, OptionDefinition, Context, Result
    parser.ts             argv → command, arguments e options
    help.ts               renderização do --help a partir do registry
    opencli.ts            descrição OpenCLI a partir do registry
    format.ts             cores, tabelas e seções da saída de texto
    input.ts              leitura de segredos e confirmações
    commands.ts           raiz da árvore de commands
    commands/             um arquivo por command
  core/                   domínio do Inboundfy, compartilhado por CLI, MCP e TUI
    types.ts, schemas.ts  registros dos índices e do estado da instalação
    io.ts                 escrita atômica, trava, caminhos portáveis, sem symlink
    project.ts            layout do projeto, canais e leitura dos índices
    payload*.ts           framework embutido (generated/payload.gz) ou lido do repositório
    installer.ts          install, update, repair e agent install
    doctor.ts             diagnóstico do projeto
    context.ts            fontes locais e contexto mínimo
    archive.ts            acervo: registro, processamento e andamento das etapas
    content.ts            peças por canal
    pipeline.ts           estados, transições e aprovação vinculada ao SHA-256
    calendar.ts           calendário mensal
    stats.ts              números do acervo, dos canais e do calendário
  config/
    paths.ts              ~/.<bin>/ e variáveis de ambiente
    settings.ts           settings.json e SETTINGS_SCHEMA
    crypto.ts             AES-256-GCM e master key
    credentials.ts        cofre cifrado
  mcp/
    server.ts             McpServer, stdio e catalog para `mcp --list`
    tools/                uma função de registro por grupo de tools
    resources/            resources e templates
    prompts.ts            prompts
  tui/
    index.ts              shell: aba ativa, foco, paleta, status bar, watch, pausa
    overlays.ts           diálogos, paleta de comandos, help e toasts
    pointer.ts            clickable: clique, hover e ponteiro de mão
    spacing.ts            tokens de margem, padding e gaps por faixa
    theme.ts              temas terminal, night e day
    icons.ts              conjuntos de ícones nerd, unicode e ascii
    screen.ts             contrato Screen e ScreenContext
    components.ts         panel, table, listPanel, stateView, spinner, link
    project.ts            projeto aberto, carga assíncrona e observação dos índices
    screens/              uma aba por arquivo: dashboard, archive, channels,
                          calendar, overview, settings, credentials, docs e about
  skill/
    index.ts              docs/ embutida + referência gerada do registry
docs/                     documentação do binário (entra no --skill), guia do usuário e método
generated/                payload.gz gerado no build (fora do Git)
npm/                      invólucro @promovaweb/inboundfy que baixa o binário da release
skills/, context/, templates/, brand/, ebook/  framework distribuído no payload
template/                 stubs de command, screen, tool e banco SQLite opcional
.agents/skills/           skills do framework Termfy, instaladas via npx skills
scripts/                  build, init e checks
tests/                    bun test
```

## Fluxo de execução

1. `main.ts` lê `argv`. Sem argumentos e com TTY, chama `runCli(["tui"])`.
   Sem TTY, imprime o help e sai com 2. Com argumentos, passa adiante.
2. `parser.ts` caminha pela árvore do registry, separa options e arguments e
   valida contra as definições. Falhas viram `AppError(2)`.
3. `index.ts` trata `--version`, `--opencli`, `--skill` e `--help`. Depois
   chama `run(ctx)` do command.
4. O command devolve `{ data, text }`. `index.ts` imprime texto ou o
   envelope JSON e devolve o exit code.
5. `main.ts` encerra o processo com esse code.

`mcp` e `tui` são commands como os demais; eles só não devolvem antes de o
transporte ou o renderer fechar.

## Regras de dependência

- `app/` não importa de nenhuma outra camada.
- `config/` importa só de `app/`.
- `core/` importa só de `app/`. `cli/`, `mcp/` e `tui/` chamam `core/` para
  toda regra de negócio e toda leitura do projeto.
- `cli/`, `mcp/` e `tui/` importam de `app/` e `config/`. `mcp/` e `tui/`
  podem reutilizar funções de `cli/commands/*` que coletam dados (como
  `aboutData`). Fora do command `tui`, `cli/` não importa de `tui/`.
- `skill/` importa de `cli/registry.ts` para gerar a referência.

## Idioma do código

Todo o código é em inglês: nomes de arquivos, identificadores, comentários,
mensagens do binário, commands, options, keys e campos do `--json`. A
documentação em `docs/`, o `README.md`, o `AGENTS.md` e as skills são em
português do Brasil com os termos técnicos em inglês.

## Build

`bun run build` compila `src/main.ts` em `dist/<bin>` para a plataforma atual
com `bun build --compile`. `bun run build:all` gera linux-x64, linux-arm64,
darwin-x64, darwin-arm64 e windows-x64. O OpenTUI embute a biblioteca nativa
no executável; o `docs/` entra como texto; o `package.json` entra como JSON.
