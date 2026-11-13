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

## Quem faz o quê

| Etapa | Onde roda |
| --- | --- |
| Versão, changelog, ebook, commit e tag | máquina local |
| GitHub Release e anexos (PDF, EPUB, tarball, `SHA256SUMS`) | workflow `.github/workflows/release.yml`, disparado pela tag |
| Publicação no npm | somente a máquina local, logada como `contatopromovaweb` |

O workflow de release não roda `npm publish` e não guarda token do npm. O
`npm run release:check` recusa um `release.yml` que publique no npm.

## Convenção de commits

Os commits seguem Conventional Commits. O tipo indica o tamanho da próxima
versão:

- `fix:` pede patch;
- `feat:` pede minor;
- `feat!:` ou `BREAKING CHANGE:` pede major;
- `docs:`, `test:`, `build:` e `ci:` sozinhos não pedem versão nova.

## Fluxo de release

1. Confira que `main` está limpa e atualizada:

   ```bash
   git switch main && git pull --ff-only && git status --short
   ```

2. Atualize a versão em `package.json` e `package-lock.json` sem criar tag:

   ```bash
   npm version 0.7.0 --no-git-tag-version
   ```

3. Escreva a entrada da versão no topo do `CHANGELOG.md`, no formato
   `## [X.Y.Z](https://github.com/promovaweb/inboundfy/compare/vA.B.C...vX.Y.Z) (AAAA-MM-DD)`.
   O workflow usa essa seção como notas da GitHub Release.
4. Sincronize o ebook e os links da edição:

   ```bash
   npm run release:sync
   ```

   O comando grava `ebook/VERSION`, recompila PDF e EPUB e atualiza
   `ebook/README.md` e `docs/user/README.md`.
5. Rode a validação completa:

   ```bash
   npm run validar
   ```

6. Faça o commit da release, crie a tag e envie os dois juntos:

   ```bash
   git add -A
   git commit -m "chore(release): v0.7.0"
   git tag v0.7.0
   git fetch origin && git status -sb   # main não pode estar atrás de origin
   git push --atomic origin HEAD:main v0.7.0
   ```

7. O push da tag dispara o workflow `Release`. Ele valida a tag, empacota,
   instala o tarball em isolamento, gera `SHA256SUMS`, atesta os arquivos,
   cria a GitHub Release com as notas do changelog e anexa PDF, EPUB,
   tarball e `SHA256SUMS`. Acompanhe e confira:

   ```bash
   gh run watch --repo promovaweb/inboundfy
   gh release view v0.7.0 --repo promovaweb/inboundfy
   ```

8. Publique no npm pela máquina local (próxima seção).

## Publicação no npm

A publicação usa o mesmo tarball anexado à GitHub Release:

```bash
npm whoami                     # contatopromovaweb
mkdir -p release-assets
gh release download v0.7.0 --repo promovaweb/inboundfy \
  --pattern 'promovaweb-inboundfy-*.tgz' --pattern SHA256SUMS \
  --dir release-assets
(cd release-assets && sha256sum --check --ignore-missing SHA256SUMS)
npm run publish:npm -- release-assets/promovaweb-inboundfy-0.7.0.tgz
npm view @promovaweb/inboundfy version license
```

`npm run publish:npm` consulta o registry público antes de publicar e não
repete uma versão que já existe. Depois do upload, ele espera a versão
aparecer no registry por até cinco minutos. Somente `E404` conta como versão
ausente. Erros de rede e autenticação interrompem o comando. O
`npm publish <tgz> --access public` direto também funciona, mas não faz essas
conferências.

A release só está completa quando `npm view` mostra a versão da tag e a
licença `AGPL-3.0-only`. Confira também qual versão o `@latest` instala:

```bash
npm view @promovaweb/inboundfy dist-tags --json
npx @promovaweb/inboundfy@0.7.0 install --dry-run
```

## Validação local do pacote

Para conferir o tarball antes da tag:

```bash
mkdir -p artifacts
npm pack --pack-destination artifacts
npm run npm:validate-package -- artifacts/promovaweb-inboundfy-0.7.0.tgz
npm run release:check -- v0.7.0
```

Troque `0.7.0` pela versão atual.

## Recuperação

Se o workflow falhar depois da tag, corrija a causa na `main` sem mover a tag
e recrie os anexos a partir dela:

```bash
gh workflow run release.yml --repo promovaweb/inboundfy --ref main -f tag=v0.7.0
```

O campo `tag` recebe uma tag estável existente no formato `vX.Y.Z`. O
workflow faz checkout da tag, cria a GitHub Release quando ela ainda não
existe e compara os anexos existentes com os arquivos gerados. Anexos
idênticos são preservados. Se o mesmo nome tiver conteúdo diferente, a
execução para sem sobrescrever o anexo.

A recuperação mantém os PDFs e EPUBs do commit publicado. Para alterar o
código ou os ebooks, prepare uma nova versão. Não mova tags existentes.
