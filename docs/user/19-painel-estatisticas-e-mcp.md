# Painel, estatísticas e MCP

O binário `inboundfy` mostra o estado do projeto em três lugares: o painel da
TUI, o command `stats` e o servidor MCP. Os três leem os mesmos índices de
`.inboundfy/indices/` e os arquivos do acervo, por isso mostram os mesmos
números. Nenhum deles guarda cache: o que o agente grava aparece na próxima
leitura.

## O painel da TUI

Na raiz do projeto, rode `inboundfy` sem argumentos. A TUI abre na aba
`dashboard`, que reúne:

- números grandes de acervo, peças, publicadas, em andamento, agendadas e
  atrasadas;
- o funil do pipeline, de `rascunho` a `publicado`;
- uma linha por canal, com total, publicadas e a data da última publicação;
- a entrada de material no acervo e as publicações dos últimos meses;
- o progresso das etapas do acervo e das auditorias anti-slop A0 a A6;
- as próximas entradas do calendário e as atrasadas;
- a prontidão do contexto mínimo (empresa, voz, personas e estratégia).

As abas `archive`, `channels` e `calendar` abrem a lista e o detalhe de cada
área. `1` a `9` e as setas trocam de aba, `r` recarrega, `?` mostra as
teclas e `Ctrl+K` abre a paleta de comandos. Quando o agente grava um índice,
a tela recarrega sozinha.

Para abrir outro projeto, use `inboundfy tui --project <pasta>` ou defina
`INBOUNDFY_PROJECT`. A TUI só lê; registrar material e mover peças continua
com o agente, as tools MCP ou o CLI.

## Os números no terminal

`inboundfy stats` imprime o mesmo resumo em texto, com barras e sparklines:

```bash
inboundfy stats
inboundfy stats --section channels
inboundfy stats --months 12 --json
```

| Option | Efeito |
| --- | --- |
| `--months <n>` | meses de cada série, de 1 a 24 (padrão 6) |
| `--section <nome>` | só `overview`, `archive`, `channels` ou `calendar` no texto |
| `--fast` | não lê os arquivos do acervo; o progresso das etapas fica em 0 |
| `--json` | o retrato completo, para scripts e planilhas |

Leitura dos números principais:

| Número | O que conta |
| --- | --- |
| Acervo usado por canal | itens com pelo menos uma peça ou canal vinculado |
| Reaproveitado em 2+ canais | itens que já viraram peças em canais diferentes |
| Peças por item | média de vínculos entre peças e itens do acervo |
| Etapas do acervo | arquivos `processado.md`, `faq.md`, `base-editorial.md`, `pesquisa.md` e `estrategia.md` que saíram do estado pendente |
| Anti-slop | registros A0 a A6 que não estão mais com `estado: pendente` |
| Atrasadas | entradas do calendário com data passada que não estão em `publicado` nem `arquivado` |

## O agente pelo MCP

`inboundfy mcp` abre um servidor MCP por stdio. Configure no agente o comando
`inboundfy` com o argumento `mcp`. No Claude Code:

```bash
claude mcp add inboundfy -- inboundfy mcp
```

No Codex, em `~/.codex/config.toml`:

```toml
[mcp_servers.inboundfy]
command = "inboundfy"
args = ["mcp"]
```

O servidor usa a pasta onde o agente roda. Para fixar outro projeto, passe
`INBOUNDFY_PROJECT` no ambiente do servidor ou o parâmetro `project` em cada
tool.

| Tool | Efeito |
| --- | --- |
| `project_stats` | os números do painel |
| `project_doctor`, `context_check` | diagnóstico da instalação e do contexto |
| `archive_list`, `archive_show` | lista e detalhe do acervo, com etapas e auditorias |
| `archive_add`, `archive_process`, `archive_set_status` | registra, processa e muda o estado de itens |
| `content_list`, `content_show`, `content_digest` | lista, detalhe e SHA-256 das peças |
| `content_create`, `content_set_status` | cria peças e move no pipeline |
| `calendar_list`, `calendar_add` | lê e agenda o calendário |
| `context_scan` | atualiza a lista de fontes locais |

As tools de escrita seguem as mesmas regras do CLI: trava do projeto,
gravação atômica, canal marcado na estratégia e aprovação vinculada ao
SHA-256 da versão revisada. Uma falha volta com `isError` e o nome do código,
como `NOT_FOUND` ou `CONFLICT`.

Os resources `inboundfy://stats`, `inboundfy://archive`,
`inboundfy://channels/<canal>` e `inboundfy://calendar` entregam as mesmas
leituras em JSON. Os prompts `ingest_material`, `produce_piece` e
`editorial_review` montam os roteiros do ciclo mestre: registrar material,
produzir uma peça e revisar o andamento do projeto.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | referência |
| Escopo | painel da TUI, command `stats` e servidor MCP |
| Autoridade | `docs/tui.md`, `docs/mcp.md` e o registry do binário |
