# Releases do Inboundfy

O Inboundfy publica CLI e framework como um único produto. `package.json` é a
fonte canônica do SemVer. O mesmo número identifica:

- o pacote npm `@promovaweb/inboundfy`;
- o binário `inboundfy`;
- o framework, as skills e a metodologia;
- a instalação registrada em `.inboundfy/`;
- a tag Git `vX.Y.Z` e a GitHub Release;
- a edição PDF e EPUB do guia do usuário.

Uma release não pode misturar versões. `npm run release:check` interrompe a
entrega quando encontra qualquer divergência.

## Preparação única dos serviços

1. Crie o pacote público `@promovaweb/inboundfy` na organização `promovaweb` do
   npm.
2. No npm, configure Trusted Publishing para o repositório
   `promovaweb/inboundfy` e o workflow `.github/workflows/release.yml`.
3. No GitHub, permita que GitHub Actions crie pull requests.
4. Quando a proteção de branch impedir o `GITHUB_TOKEN` de atualizar a Release
   PR, configure `RELEASE_PLEASE_TOKEN` com acesso somente ao repositório.

O workflow usa OIDC. Não grave token permanente do npm no repositório.

## Convenção de commits

O Release Please calcula a próxima versão pelos Conventional Commits:

- `fix:` gera patch;
- `feat:` gera minor;
- `feat!:` ou `BREAKING CHANGE:` gera major;
- `docs:`, `test:`, `build:` e `ci:` entram no histórico sem aumentar a versão
  quando aparecem sozinhos.

## Fluxo de release

1. Integre commits válidos em `main`.
2. O workflow abre ou atualiza uma Release PR.
3. A Release PR sincroniza `package.json`, `package-lock.json`,
   `.release-please-manifest.json`, `CHANGELOG.md` e `ebook/VERSION`.
4. `npm run release:sync` recompila PDF e EPUB e atualiza os links da edição.
5. Revise a Release PR e aguarde a CI.
6. Mescle a Release PR.
7. O workflow cria a tag e a GitHub Release.
8. O job de publicação valida, empacota, instala o tarball em isolamento,
   anexa ebook e checksums à release e publica o mesmo tarball no npm.

O workflow de publicação é idempotente: se a mesma versão já existir no npm,
ele confere o registro e encerra sem publicar outra cópia.

## Validação local

Execute:

```bash
npm ci
npm run validar
mkdir -p artifacts
npm pack --pack-destination artifacts
npm run npm:validate-package -- artifacts/promovaweb-inboundfy-1.1.0.tgz
```

Substitua `1.0.0` pela versão atual. Para validar uma tag:

```bash
npm run release:check -- v1.0.0
```

## Recuperação

Se a release falhar antes da publicação, corrija a causa e execute novamente o
workflow na mesma tag. Não altere o conteúdo de uma versão já publicada. Uma
correção posterior recebe novo patch SemVer.
