# Contribuindo com o Inboundfy

Este guia é para quem desenvolve, revisa ou mantém o Inboundfy. Para instalar
e usar, leia o [README](README.md).

O projeto combina um CLI em [Node.js](https://github.com/nodejs/node) e
[TypeScript](https://github.com/microsoft/TypeScript) com uma biblioteca de 117
skills em Markdown. O CLI usa [Commander](https://github.com/tj/commander.js),
[Zod](https://github.com/colinhacks/zod) e
[Inquirer](https://github.com/SBoudrias/Inquirer.js). O guia do usuário é
compilado em PDF e EPUB com Pandoc e WeasyPrint.

## Antes de começar

- Converse no [Discord](https://promovaweb.com/discord) antes de mexer em algo
  grande ou de mudar o contrato de uma skill, do CLI ou dos estados do
  pipeline.
- Para um bug ou uma ideia, abra uma
  [issue](https://github.com/promovaweb/inboundfy/issues) com a versão, o
  sistema operacional e o passo a passo para reproduzir.
- Uma issue por mudança. Um pull request por issue, salvo quando a mudança
  depende de outra.

## Ambiente

Requisitos: Node.js 22.14.0 ou superior, npm e Git.

```bash
git clone https://github.com/promovaweb/inboundfy.git
cd inboundfy
npm ci
npm run dev -- --help
```

`npm run dev` executa `src/cli.ts` com `tsx`. `npm run build` compila para
`dist/` com `tsc`.

Para gerar o ebook, instale também Pandoc 3.10.2, WeasyPrint 69.0,
ImageMagick, `jq`, `xmllint`, `unzip` e `pdftotext`. A CI instala as duas
primeiras nas versões fixadas do workflow e as demais pela distribuição. Sem
essas ferramentas, a validação completa não roda.

Não há banco de dados nem serviço externo obrigatório. Trabalhe numa pasta
temporária quando quiser testar uma instalação sem tocar no seu projeto real:

```bash
mkdir -p /tmp/inboundfy-teste
cd /tmp/inboundfy-teste
npx @promovaweb/inboundfy@latest install --dry-run
```

## Organização do código

```text
bin/                launcher CommonJS do binário inboundfy
src/                CLI TypeScript, instalador, pipeline, acervo, conteúdo e calendário
skills/             117 skills, referências compartilhadas e catálogo
context/            templates dos arquivos de contexto do projeto consumidor
templates/          modelos de projeto, skills, acervo, canais e calendário
docs/               guia do usuário, documentação do método e ordem de leitura
scripts/            validação do framework, pacote npm e release
tests/              testes Vitest do CLI, publicação e ativos
ebook/              PDF e EPUB versionados do guia do usuário
.ebook/             script de geração do guia em PDF e EPUB
examples/           pacotes de demonstração com dados fictícios
brand/              manual, tokens e logos do Inboundfy
.github/workflows/  CI e release
```

O contrato entre método e dados do projeto está no
[README](README.md#separação-entre-framework-e-projeto). A arquitetura técnica
está em [docs/method/00-arquitetura.md](docs/method/00-arquitetura.md).

## Fluxo de trabalho

1. Abra ou localize a issue que descreve a mudança.
2. Crie uma branch a partir de `main`, com um nome curto como
   `fix/estado-publicado` ou `docs/guia-instalacao`.
3. Faça a alteração no menor escopo possível.
4. Rode a validação do escopo alterado. Para mudança em skill, rode
   `npm run skills:check`. Para mudança no CLI, rode `npm run typecheck` e
   `npm test`.
5. Abra o pull request com a issue relacionada e os comandos executados.

Para uma skill nova, leia [SKILL-AUTORIA.md](SKILL-AUTORIA.md) e
[SKILLS.md](SKILLS.md). A skill precisa das seções de contexto exigido,
entrada esperada, fluxo, saída, validação e idempotência, além de referência,
interface em `agents/openai.yaml` e registro em `skills/catalogo.json`.
`scripts/gerenciar-skills.mjs` confere esse contrato.

## Regras do código

- Escreva código, comentários, mensagens de erro e documentação em português
  do Brasil. Preserve termos técnicos em inglês usados pelo ecossistema.
- Use somente Node.js. Não introduza Python em scripts, geração, validação ou
  teste.
- Mantenha o TypeScript em modo estrito. O `tsconfig.json` liga `strict`,
  `noUncheckedIndexedAccess` e `exactOptionalPropertyTypes`.
- Erros esperados do CLI passam por `CliError`, com código de saída
  controlado. Falha inesperada encerra com código diferente de zero.
- Use `--json` para a saída estruturada. O resumo legível fica no padrão.
- Não edite à mão `dist/`, `.ebook/build/`, `artifacts/` nem os PDFs e EPUBs
  gerados. Esses arquivos vêm do build.
- Não edite a versão nem o `CHANGELOG.md` em uma mudança comum. O Release
  Please calcula a próxima versão e atualiza `package.json`,
  `package-lock.json`, `.release-please-manifest.json`, `CHANGELOG.md` e
  `ebook/VERSION` na Release PR.
- Não grave segredo, token ou credencial no repositório. O workflow de
  release usa OIDC e não guarda token permanente do npm.
- Ao mudar um comando, confira `--help` e a
  [referência do CLI](docs/method/10-referencia-cli.md).

## Validar

A validação completa executa as etapas na ordem do `package.json`:

```bash
npm run validar
```

Ela cobre `skills:check`, `typecheck`, geração do ebook, testes, build,
`ebook:verify` e `release:check`.

Comandos auxiliares:

```bash
npm run skills:check      # confere a biblioteca sem escrever
npm run typecheck         # tsc sem emitir arquivos
npm test                  # Vitest e validação estrutural do framework
npm run build             # compila src/ para dist/
npm run ebook             # regenera PDF e EPUB
npm run ebook:verify      # confere ordem, hashes e navegação do ebook
npm run release:check     # confere versão, changelog, ebook e workflow
```

`npm run skills:enriquecer` amplia arquivos existentes e atualiza o catálogo.
Ele escreve no repositório e preserva referências já presentes.

Para validar o pacote npm em isolamento:

```bash
mkdir -p artifacts
npm pack --pack-destination artifacts
VERSION=$(node -p "require('./package.json').version")
npm run npm:validate-package -- "artifacts/promovaweb-inboundfy-${VERSION}.tgz"
```

## Documentação

- [README](README.md): instalação e uso.
- [docs/user](docs/user/README.md): manual do usuário, compilado no ebook.
- [docs/method](docs/method/README.md): arquitetura, contratos, testes e
  evolução do framework.
- [RELEASING.md](RELEASING.md): versão, tag, GitHub Release e publicação no
  npm.
- [SKILLS.md](SKILLS.md): catálogo completo das skills.
- [CONTEXTO.md](CONTEXTO.md): arquivos de contexto e precedência entre eles.
- [METODOLOGIA.md](METODOLOGIA.md): fases do pipeline editorial.

A documentação publicada fica em
<https://promovaweb.com/docs/inboundfy/>.

Depois de mudar `docs/user/`, rode `npm run ebook` para regenerar PDF e EPUB.
O comando `npm run release:sync` repete essa geração na release.

## Commits e pull requests

O projeto usa Conventional Commits. O Release Please calcula a versão a partir
do histórico:

- `fix:` gera patch;
- `feat:` gera minor;
- `feat!:` ou `BREAKING CHANGE:` gera major;
- `docs:`, `test:`, `build:` e `ci:` entram no histórico sem aumentar a versão
  quando aparecem sozinhos.

Um pull request deve trazer:

- a issue relacionada;
- o que mudou e por quê, em texto curto;
- os comandos de validação executados e o resultado;
- um exemplo de saída quando a mudança afetar a interface do CLI.

## Releases

CLI, framework, skills, ebook e pacote npm compartilham o mesmo SemVer. A
fonte da versão é `package.json`.

1. Integre commits válidos em `main`.
2. O workflow abre ou atualiza uma Release PR.
3. A Release PR sincroniza os manifests e o changelog. `npm run release:sync`
   recompila PDF e EPUB.
4. Revise a Release PR e aguarde a CI.
5. Mescle a Release PR. O workflow cria a tag `vX.Y.Z`, a GitHub Release e
   publica o mesmo tarball no npm.

O guia completo está em [RELEASING.md](RELEASING.md). Para conferir uma tag
existente:

```bash
npm run release:check -- v0.6.0  # troque pela versão atual
```

## Licença

O Inboundfy não é open source. O [LICENSE](LICENSE) reserva todos os direitos
à Promovaweb e não concede ao público redistribuição, modificação ou uso
comercial. Ao enviar uma contribuição, você concorda que ela seja incorporada
ao projeto sob esses mesmos termos.
