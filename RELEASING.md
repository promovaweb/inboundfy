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
3. No GitHub, permita que GitHub Actions crie pull requests na organização e
   no repositório. Uma restrição da organização impede habilitar somente o
   repositório.
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
8. O job de publicação valida o código e os ebooks já versionados, empacota,
   instala o tarball em isolamento, anexa os arquivos à release e publica o
   mesmo tarball no npm. A última etapa instala a versão pelo registry público
   com cache separado e executa `install --dry-run`.

O workflow de publicação é idempotente: se a mesma versão já existir no npm,
ele confere o registro e encerra sem publicar outra cópia.

## Validação local

Execute:

```bash
npm ci
npm run skills:check
npm run typecheck
npm test
npm run build
npm run ebook:verify
npm run release:check
mkdir -p artifacts
npm pack --pack-destination artifacts
npm run npm:validate-package -- artifacts/promovaweb-inboundfy-0.5.0.tgz
```

Substitua `0.5.0` pela versão atual. Para validar uma tag:

```bash
npm run release:check -- v0.5.0
```

## Recuperação

Uma GitHub Release pode existir sem que o pacote esteja disponível no npm.
Confira o job `Publicar npm e ativos`: uma execução verde com esse job ignorado
não publicou o pacote.

Depois de integrar o workflow de recuperação na `main`, execute:

```bash
gh workflow run release.yml --repo promovaweb/inboundfy --ref main -f tag=v0.5.0
```

O campo opcional `tag` recebe uma tag estável existente no formato `vX.Y.Z`.
Sem esse campo, a execução usa o fluxo normal do Release Please. Com a tag,
o workflow dispensa a criação de uma Release PR, confere a GitHub Release e
publica a partir do commit da tag. Tags ausentes, drafts, pré-releases e
versões divergentes são recusados antes da publicação. Os anexos existentes
são comparados com os arquivos locais e preservados quando são idênticos.
Se o mesmo nome tiver conteúdo diferente, a execução para sem sobrescrever
o anexo.

A recuperação mantém os PDFs e EPUBs do commit publicado. Para alterar o
código ou os ebooks, prepare uma nova versão. Não mova tags existentes.

Se o pacote ainda não existir no npm, faça a primeira publicação do tarball
validado com uma conta autorizada na organização `promovaweb`. Configure
depois o Trusted Publishing nas configurações desse pacote, com o repositório
`promovaweb/inboundfy` e o workflow `release.yml`. O login local não autentica
o runner do GitHub Actions. Consulte a
[documentação de Trusted Publishing do npm](https://docs.npmjs.com/trusted-publishers/).

O publicador consulta explicitamente o registry público. Somente `E404`
permite tratar uma consulta malsucedida como versão ausente. Erros de rede e
autenticação interrompem a execução. Se a confirmação falhar depois do
upload, consulte a versão antes de repetir o workflow:

```bash
npm view @promovaweb/inboundfy@0.5.0 version --registry=https://registry.npmjs.org
npx @promovaweb/inboundfy@0.5.0 install --dry-run
```

Confira também `npm view @promovaweb/inboundfy dist-tags --json` para verificar
qual versão será instalada pelo comando com `@latest`.
