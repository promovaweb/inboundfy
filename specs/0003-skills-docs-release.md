# 0003 Skills, documentação e release 1.0.0

Status: done

## Goal

Alinhar as skills, a documentação do usuário, o README, o CONTRIBUTING, o
ebook e o site aos commands novos do binário, melhorar as skills que
operam o acervo e os canais para usar o MCP e o `stats`, e publicar a
1.0.0 com binários, invólucro npm e gitlink do Hub.

## Behavior

- Nenhuma skill, doc ou template cita `npx @promovaweb/inboundfy`,
  `inboundfy acervo` ou `inboundfy calendario`; os exemplos usam
  `inboundfy archive`, `content`, `calendar`, `stats` e as tools MCP.
- `docs/user/` ganha uma página sobre a TUI e o MCP e a referência do CLI.
- O pacote npm instala o binário da GitHub Release.

## Design

- Atualização mecânica de commands nas skills, revisada à mão.
- Skills de acervo, setup, pipeline e métricas ganham uma seção curta de
  operação com MCP e `stats`.
- Distribuição copiada do Pagespeedfy (`npm/`, `scripts/npm-readme.ts`,
  `release.yml`).

## Surface

- Sem mudança de superfície do binário.

## Tasks

- [x] Skills alinhadas aos commands novos #termfy-docs
- [x] Docs do usuário, README, CONTRIBUTING e ebook #termfy-docs
- [x] Invólucro npm e workflow de release #termfy-release
- [x] Release 1.0.0 e gitlink do Hub #termfy-release

## Tests

- [x] `bun run validate` verde #termfy-test
- [x] Busca sem ocorrências dos commands antigos #termfy-review

## Notes

- 2026-11-23: criada junto com a 0002.
- 2026-11-23: fechada com a release 1.0.0. A pedido do Luiz ("direto até a
  release"), a documentação técnica seguiu sem os checkpoints editoriais.
