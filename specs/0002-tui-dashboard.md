# 0002 TUI com painel do acervo, dos canais e do calendário

Status: done

## Goal

Dar à TUI do Inboundfy um painel bonito e útil para quem acompanha o
projeto: números grandes, funil do pipeline, canais, entrada do acervo por
mês, calendário e prontidão do contexto, com telas de lista e detalhe do
acervo, dos canais e do calendário. A TUI só lê; gravações ficam no CLI,
no MCP e nas skills.

## Behavior

- A TUI abre na aba `dashboard` (setting `tui.initialTab`, padrão
  `dashboard`; `inboundfy tui --tab <id>`). O projeto é o de `--project`,
  `INBOUNDFY_PROJECT` ou o diretório atual.
- Sem instalação (`.inboundfy/install.json` ausente) toda tela de projeto
  mostra um estado vazio claro com o comando `inboundfy install` e a tecla
  `r` para recarregar.
- `dashboard`:
  - faixa de cartões com números grandes: Acervo (total), Peças (total),
    Publicadas, Em andamento, Agendadas, Atrasadas (em vermelho quando > 0);
  - funil do pipeline (rascunho → revisao → aprovado → agendado →
    publicado) com barras proporcionais e contagem;
  - canais: uma linha por canal com barra, total, publicadas e última
    publicação; canais não marcados na estratégia aparecem esmaecidos;
  - entrada do acervo e publicações por mês (sparkline ou gráfico de
    barras dos últimos 6 meses, com rótulos dos meses);
  - progresso das etapas do acervo e das auditorias anti-slop (barras de
    progresso com %);
  - próximas entradas do calendário (até 5) e atrasadas;
  - prontidão do contexto (4 itens com ✓/✗) e versão instalada x binário;
  - `r` recarrega. Em `compact` os blocos empilham em coluna única
    rolável; em `medium` duas colunas; em `wide` três colunas.
- `archive`: lista (id, estado, data, canais, título) com filtro `f` por
  estado (`ctx.choose`), `Enter` abre o detalhe com as etapas (✓/·), as
  auditorias A0 a A6 e a pasta; `Esc` volta.
- `channels`: lista dos 6 canais com números por estado; `Enter` mostra as
  peças do canal (id, estado, data, título) e o detalhe da peça.
- `calendar`: entradas do mês com navegação `←`/`→` entre meses (ações
  `[` e `]` se as setas forem globais), mais atrasadas e próximas.
- Todas as telas declaram `watch()` com os três índices
  (`.inboundfy/indices/*.json`) e `.inboundfy/estrategia.md`, para
  recarregar quando o agente gravar.

## Design

- Uma tela por arquivo em `src/tui/screens/`: `dashboard.ts`,
  `archive.ts`, `channels.ts`, `calendar.ts`. Registro em
  `src/tui/screens/index.ts`, nesta ordem, antes de `overview` e `about`.
- Dados: só `collectStats` (`src/core/stats.ts`), `listArchive`,
  `showArchive`, `listContent`, `showContent` e `listCalendar` de
  `src/core/`. Nada de leitura direta de arquivos nas telas.
- Projeto: função única `tuiProjectRoot()` que resolve
  `INBOUNDFY_PROJECT`/cwd, e o command `tui` repassa `--project` por
  `process.env.INBOUNDFY_PROJECT`.
- Componentes e cores do kit (`src/tui/components.ts`, `ctx.theme`,
  `ctx.icons`, `ctx.space`); barras e sparklines podem reusar
  `src/cli/charts.ts` ou o padrão de `references/charts.md` da skill.
  Nenhuma cor fora de `src/tui/theme.ts`.
- Estados: carregando (spinner), vazio, erro com `r` para tentar de novo,
  pronto.

## Surface

- Adiciona as screens `dashboard`, `archive`, `channels` e `calendar`.
- `tui.initialTab` passa a aceitar os ids novos, com padrão `dashboard`.

## Tasks

- [x] `dashboard` com cartões, funil, canais, séries, progresso, calendário e contexto #termfy-tui
- [x] `archive` com lista, filtro e detalhe #termfy-tui
- [x] `channels` com lista e peças #termfy-tui
- [x] `calendar` com navegação por mês #termfy-tui
- [x] `tui.initialTab` e `--tab` com os ids novos #termfy-config
- [x] `docs/tui.md` atualizado #termfy-docs

## Tests

- [x] Frames das quatro telas em 60×16, 80×24 e 120×32 com projeto de exemplo #termfy-test
- [x] Estado sem instalação #termfy-test
- [x] Navegação de lista e detalhe por teclado e clique #termfy-test

## Notes

- 2026-11-23: criada a pedido do Luiz ("TUI com informações gerais do
  acervo e canais, bem bonito, estatísticas, números").
- 2026-11-23: implementada por agente Codex em aba do herdr-core, com uma
  rodada de acabamento (detalhe lateral em `wide`, barras por canal e grade
  do mês) e revisão do diff no terminal de origem.
