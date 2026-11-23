# Releases do Inboundfy

O Inboundfy publica binário e framework como um único produto. `package.json`
é a fonte canônica do SemVer. O mesmo número identifica:

- o binário `inboundfy` e os executáveis da GitHub Release;
- o pacote npm `@promovaweb/inboundfy` (`npm/package.json`), que baixa o
  binário da versão;
- o framework, as skills e a metodologia embutidos no binário;
- a instalação registrada em `.inboundfy/` de cada projeto;
- a tag Git `vX.Y.Z`;
- a edição PDF e EPUB do guia do usuário.

Uma release não pode misturar versões. `bun run release:check` interrompe a
entrega quando encontra qualquer divergência.

## Quem faz o quê

| Etapa | Onde roda |
| --- | --- |
| Versão, changelog, ebook, commit e tag | máquina local |
| Binários das cinco plataformas, ebook e `SHA256SUMS` na GitHub Release | workflow `.github/workflows/release.yml`, disparado pela tag |
| Publicação do invólucro no npm | somente a máquina local, logada como `contatopromovaweb` |

O workflow não roda `npm publish` e não guarda token do npm. O
`release:check` recusa um `release.yml` que publique no npm.

## Convenção de commits

- `fix:` pede patch;
- `feat:` pede minor;
- `feat!:` ou `BREAKING CHANGE:` pede major;
- `docs:`, `test:`, `build:` e `ci:` sozinhos não pedem versão nova.

## Fluxo de release

1. Confira que `main` está limpa e atualizada:

   ```bash
   git switch main && git pull --ff-only && git status --short
   ```

2. Atualize `version` no `package.json`.
3. Escreva a entrada da versão no topo do `CHANGELOG.md`, no formato
   `## [X.Y.Z](https://github.com/promovaweb/inboundfy/compare/vA.B.C...vX.Y.Z) (AAAA-MM-DD)`.
   O workflow usa essa seção como notas da GitHub Release.
4. Sincronize o invólucro, o README do npm e o ebook:

   ```bash
   bun run release:sync
   ```

   O comando grava `npm/package.json`, `ebook/VERSION` e `npm/README.md`,
   recompila PDF e EPUB e atualiza os links da edição.
5. Rode a validação completa e a conferência da release:

   ```bash
   bun run validate
   bun run release:check
   ```

6. Faça o commit da release, crie a tag e envie os dois juntos:

   ```bash
   git add -A
   git commit -m "release: vX.Y.Z — resumo"
   git tag vX.Y.Z
   git push --atomic origin HEAD:main vX.Y.Z
   ```

7. O push da tag dispara o workflow `Release`. Ele confere a versão em
   `package.json`, `npm/package.json` e `ebook/VERSION`, roda o `validate`,
   compila `inboundfy-linux-x64`, `-linux-arm64`, `-darwin-x64`,
   `-darwin-arm64` e `-windows-x64.exe`, anexa o PDF e o EPUB, gera
   `SHA256SUMS` e cria a GitHub Release com as notas do changelog:

   ```bash
   gh run watch --repo promovaweb/inboundfy
   gh release view vX.Y.Z --repo promovaweb/inboundfy
   ```

8. Publique o invólucro no npm (próxima seção).

## Publicação no npm

O pacote npm tem só o lançador e o baixador (`npm/bin`, `npm/lib`). Publique
depois que a GitHub Release tiver os binários, porque o `postinstall` baixa o
executável da release da mesma versão:

```bash
npm whoami                     # contatopromovaweb
cd npm && npm publish --access public && cd ..
npm view @promovaweb/inboundfy version license
```

Confira a instalação limpa:

```bash
INBOUNDFY_BINARY_DIR=$(mktemp -d) npx -y @promovaweb/inboundfy@X.Y.Z --version
```

Variáveis do invólucro:

| Variável | Efeito |
| --- | --- |
| `INBOUNDFY_BINARY_PATH` | usa um binário já existente e pula o download |
| `INBOUNDFY_BINARY_DIR` | pasta do cache (padrão `~/.inboundfy/bin/v<versão>/`) |
| `INBOUNDFY_RELEASE_BASE_URL` | troca a URL da release (espelhos e testes) |

## Recuperação

Se o workflow falhar depois da tag, corrija a causa numa nova versão. Tags
existentes não são movidas. Uma release que saiu sem binários não deve ter o
invólucro publicado no npm, porque o `postinstall` não encontraria o
executável.
