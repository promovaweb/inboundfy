# Instruções do projeto

Este repositório é o Inboundfy: o binário `inboundfy` (Bun, construído com o
[Termfy](https://github.com/promovaweb/termfy)) e a biblioteca de skills de
inbound marketing que ele instala nos projetos. Sem argumentos o binário
abre a TUI; com argumentos roda como CLI (`--json` para máquinas);
`inboundfy mcp` vira servidor MCP stdio.

## Idioma

- Código em inglês: arquivos, identificadores, comentários, mensagens do
  binário, commands, options, keys e campos do `--json`.
- Documentação, skills, templates e textos gravados no projeto consumidor em
  português do Brasil, com os termos técnicos em inglês preservados.
- Valores persistidos no projeto consumidor (estados `recebido`, `rascunho`,
  `publicado` etc., pastas `acervo/`, `canais/`, `calendario/`, campos dos
  relatórios de validação) não mudam de idioma: skills e projetos dependem
  deles.

## Ordem de leitura

1. Este arquivo.
2. `CLISPEC.md` e a spec aberta em `specs/` antes de mexer no binário. Sem
   spec que cubra o pedido, escreva uma com a skill `termfy-spec`.
3. `docs/architecture.md` (camadas do binário) e
   `docs/method/00-arquitetura.md` (método).
4. Para skills do framework: `SKILL-AUTORIA.md`, `SKILLS.md` e `CONTEXTO.md`.
5. A skill do Termfy compatível, em `.agents/skills/termfy-*` (`termfy-cli`,
   `termfy-mcp`, `termfy-tui`, `termfy-test`, `termfy-docs`,
   `termfy-release` e as demais). Não edite essas skills aqui; elas vêm do
   framework pela manutenção da `termfy-init`.

## Regras para toda mudança no binário

- Regra de negócio e leitura do projeto ficam em `src/core/`. CLI, MCP e TUI
  só chamam essas funções.
- Exit codes vêm de `src/app/exit-codes.ts`; erros esperados são `AppError`.
- Toda option, argument, subcommand, tool, resource, prompt e tela nasce
  documentada no registry e em `docs/` (o `docs:check` confere). Depois de
  mudar commands, rode `bun run opencli` e revise `docs/opencli.json`.
- Um arquivo por command, por tela e por grupo de tools. Cores da TUI só em
  `src/tui/theme.ts`.
- Stdout recebe dados; stderr recebe progresso e avisos. Em `mcp`, stdout é
  do JSON-RPC.
- Segredos nunca passam por argument, log, `--json`, tool MCP ou frame da TUI.
- Node e npm não entram no binário. O Node só existe no invólucro `npm/` e no
  `npx skills`. Não use Python.
- Documente código novo com cabeçalho de propósito e JSDoc nas funções
  exportadas, em inglês.

## Validação antes de concluir

```bash
bun run validate
```

Encadeia `typecheck`, `bun test`, `skills:check`, `framework:check`,
`opencli:check`, `docs:check` e `build`. Confira `git status --short` ao final
e preserve mudanças que já existiam.

## Publicação

Toda alteração publicada sai com versão em `package.json`, entrada no
`CHANGELOG.md`, `bun run release:sync`, tag `vX.Y.Z`, GitHub Release com os
binários e o invólucro npm publicado. O fluxo está em `RELEASING.md`. Tags
não são movidas.

## Status das tarefas no ClickUp

Após cada commit bem-sucedido, marque como `pronto` a tarefa ou subtarefa vinculada à entrega. Após o push bem-sucedido desse commit, marque-a como `publicado`. Registre repositório, SHA e destino do push na tarefa e confirme o status pelo ClickUpfy.

| Status | Quando usar |
| --- | --- |
| `nao iniciado` | Demanda registrada que ainda não foi priorizada. |
| `triagem` | Esclareça o pedido, confira duplicidades e identifique o responsável. |
| `proxima etapa` | Trabalho priorizado que já tem próxima ação e condição de aceite. |
| `em andamento` | Há alguém executando a tarefa, com plano e cronômetro. |
| `refazer` | A revisão pediu ajustes. Registre o que corrigir e retome em `em andamento` ao começar. |
| `revisar` | A entrega está disponível e validada para revisão. Registre como conferi-la. |
| `pronto` | O commit da entrega foi criado. Registre o repositório e o SHA. |
| `publicado` | O push do commit foi confirmado. Registre remoto, branch e versão ou release quando aplicável. |
| `concluido` | Encerramento por orientação do usuário após conferir a entrega em produção ou o aceite da entrega interna. |
