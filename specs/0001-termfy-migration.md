# 0001 Migração do CLI para o Termfy, MCP e stats

Status: done

## Goal

Refazer o CLI Node 0.8.3 (Commander, commands em português) sobre o starter
kit do Termfy 0.13.4, com TUI, CLI e MCP no mesmo binário Bun, commands em
inglês, servidor MCP para acervo, canais e calendário e um command `stats`
com os números do projeto. O formato dos dados do projeto não muda.

## Behavior

- `install`, `update`, `repair` e `agent install` aplicam o payload embutido
  no binário (framework, skills, contexto, templates, docs, ebook atual e
  marca) com o mesmo manifesto de hashes, backup de customizações em
  `.inboundfy/migracoes/` e trava `.inboundfy/.cli.lock`.
- `doctor` junta o diagnóstico do projeto e o do runtime; sai com 10 sem
  instalação, 11 com erros (ou avisos com `--strict`). `status` mostra o
  resumo.
- `archive` substitui `acervo` (add, process, list, show, status);
  `content` ganha `list` e `show`; `calendar` substitui `calendario`;
  `context check` mostra a prontidão do contexto.
- `stats` calcula, a partir dos índices e dos arquivos do acervo, totais,
  estados, entrada por mês, progresso das etapas e das auditorias A0 a A6,
  números por canal, publicações por mês e calendário.
- Todos os commands de projeto aceitam `--project` (`-C`) ou
  `INBOUNDFY_PROJECT`.
- O MCP expõe 17 tools de projeto, 6 resources e 3 prompts de trabalho,
  todos sobre as mesmas funções do CLI.

## Design

- Domínio em `src/core/` (types, io, project, schemas, payload, agent,
  context, installer, doctor, archive, content, pipeline, calendar, stats).
- Payload: `scripts/build-payload.ts` gera `generated/payload.gz` (ignorado
  no Git) a partir de `src/core/payload-sources.ts`; o binário compilado o
  embute por `src/core/payload-embed.ts`; `bun run` lê do repositório.
- Exit codes novos 10, 11 e 12 na tabela única.
- Options repetíveis no parser (`repeatable`), juntadas por vírgula.

## Surface

- Adiciona `install`, `update`, `repair`, `agent install`, `status`,
  `stats`, `context`, `project`, `archive`, `content` e `calendar`.
- Substitui o `doctor` do kit pelo diagnóstico combinado (`--env` mantém o
  do kit).
- Remove os nomes `acervo` e `calendario` e a option `--project` global do
  Commander (agora option recursiva da raiz).
- Adiciona as tools, resources e prompts listados no `CLISPEC.md`.

## Tasks

- [x] Esqueleto do starter kit 0.13.4 no repositório #termfy-init
- [x] Núcleo em `src/core/` portado e traduzido #termfy-cli
- [x] Payload embutido #termfy-cli
- [x] Commands de projeto #termfy-cli
- [x] Tools, resources e prompts MCP #termfy-mcp
- [x] Exit codes 10, 11 e 12 #termfy-cli

## Tests

- [x] Instalação, atualização, reparo e backup em projeto temporário #termfy-test
- [x] Acervo, conteúdo, pipeline com relatório e calendário #termfy-test
- [x] `stats` com índices de exemplo #termfy-test
- [x] Tools MCP por stdio #termfy-test

## Notes

- 2026-11-23: criada e implementada na mesma sessão.
