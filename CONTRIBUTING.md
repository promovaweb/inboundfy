# Contribuindo com o Inboundfy

Este guia é para quem desenvolve, revisa ou mantém o Inboundfy. Para instalar
e usar, leia o [README](README.md).

O projeto combina o binário `inboundfy`, construído com o
[Termfy](https://github.com/promovaweb/termfy) sobre
[Bun](https://github.com/oven-sh/bun) e
[TypeScript](https://github.com/microsoft/TypeScript), com uma biblioteca de
128 skills em Markdown. O binário tem TUI ([OpenTUI](https://github.com/sst/opentui)),
CLI e servidor MCP ([MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk))
no mesmo executável e valida os dados com [Zod](https://github.com/colinhacks/zod).
O guia do usuário é compilado em PDF e EPUB com Pandoc e WeasyPrint.

## Antes de começar

- Converse no [Discord](https://promovaweb.com/discord) antes de mexer em algo
  grande ou de mudar o contrato de uma skill, do binário ou dos estados do
  pipeline.
- Para um bug ou uma ideia, abra uma
  [issue](https://github.com/promovaweb/inboundfy/issues) com a versão, o
  sistema operacional e o passo a passo para reproduzir.
- Uma issue por mudança. Um pull request por issue, salvo quando a mudança
  depende de outra.

## Ambiente

Requisitos: Bun 1.4.4 ou superior e Git. O Node.js só entra no invólucro npm
(`npm/`) e no `npx skills`.

```bash
git clone https://github.com/promovaweb/inboundfy.git
cd inboundfy
bun install
bun run dev -- --help        # CLI a partir do código
bun run dev                  # painel (TUI)
bun run dev -- mcp --list    # o que o servidor MCP registra
bun run dev -- -C /tmp/projeto install --yes
```

`bun run dev` lê o framework (skills, contexto, templates, docs) direto do
repositório. `bun run build` gera `generated/payload.gz` com esses arquivos e
compila `dist/inboundfy` com o payload embutido.

## Organização

```text
src/main.ts         entrada: sem argumentos abre a TUI, com argumentos roda o CLI
src/core/           domínio: instalador, payload, doctor, acervo, peças, pipeline, calendário e stats
src/cli/            registry de commands, parser, ajuda, OpenCLI e commands em commands/
src/mcp/            servidor MCP: tools, resources e prompts
src/tui/            telas (screens/), tema, componentes e leitura do projeto
src/app/, src/config/ manifesto, exit codes, erros, settings e cofre herdados do Termfy
skills/             biblioteca de skills, catálogo e referências compartilhadas
context/, templates/ modelos copiados para o projeto consumidor
docs/               documentação embutida no binário (cli.md, mcp.md, tui.md...),
                    guia do usuário (user/) e documentação do método (method/)
CLISPEC.md, specs/  visão macro do binário e specs de cada evolução
npm/                invólucro @promovaweb/inboundfy, que baixa o binário da release
scripts/            build, payload, verificações do Termfy, do framework e da release
tests/              testes Bun do núcleo, do CLI, do MCP, da TUI e do framework
ebook/, .ebook/     PDF e EPUB do guia e o gerador
brand/              manual, tokens e logos do Inboundfy
.github/workflows/  CI e release
```

O contrato entre método e dados do projeto está no
[README](README.md#separação-entre-framework-e-projeto). A arquitetura do
binário está em [docs/architecture.md](docs/architecture.md) e a do método em
[docs/method/00-arquitetura.md](docs/method/00-arquitetura.md).

## Fluxo de trabalho

1. Abra ou localize a issue que descreve a mudança.
2. Crie uma branch a partir de `main`, com um nome curto como
   `fix/estado-publicado` ou `docs/guia-instalacao`.
3. Para mudança no binário, leia o [CLISPEC.md](CLISPEC.md) e a spec aberta em
   `specs/`; sem spec que cubra o pedido, escreva uma com a skill
   `termfy-spec`. As skills do Termfy ficam em `.agents/skills/termfy-*`.
4. Faça a alteração no menor escopo possível.
5. Rode a validação do escopo alterado (veja abaixo).
6. Abra o pull request com a issue relacionada e os comandos executados.

Para uma skill nova, leia [SKILL-AUTORIA.md](SKILL-AUTORIA.md) e
[SKILLS.md](SKILLS.md). A skill precisa das seções de contexto exigido,
entrada esperada, fluxo, saída, validação e idempotência, além de referência,
interface em `agents/openai.yaml` e registro em `skills/catalogo.json`.
`bun run framework:check` confere esse contrato.

## Regras do código

- Código, identificadores, comentários, mensagens do binário, commands,
  options e campos do `--json` em inglês, como pede o Termfy. Documentação,
  skills e textos gerados no projeto consumidor em português do Brasil.
- Os valores persistidos no projeto consumidor (estados como `rascunho` e
  `publicado`, pastas `acervo/`, `canais/`, `calendario/`, campos dos
  relatórios de validação) seguem em português: skills e projetos existentes
  dependem deles.
- Regras de negócio ficam em `src/core/`. CLI, MCP e TUI só chamam essas
  funções; nenhuma tela lê arquivo do projeto direto.
- Erros esperados são `AppError` com um código de `src/app/exit-codes.ts`.
  Não invente números em commands.
- Um arquivo por command, por tela e por grupo de tools. Cores da TUI só em
  `src/tui/theme.ts`.
- Toda option, argument, tool, resource e prompt nasce documentada em
  `docs/` (o `docs:check` confere) e no registry.
- Não use Python em scripts, geração, validação ou teste.
- Não edite à mão `dist/`, `generated/`, `.ebook/build/` nem os PDFs e EPUBs
  gerados.
- Não edite a versão nem o `CHANGELOG.md` numa mudança comum; isso é do
  commit de release.
- Não grave segredo, token ou credencial no repositório. Nenhum workflow
  publica no npm.

## Validar

```bash
bun run validate
```

Encadeia `typecheck`, `bun test`, `skills:check` (skills do Termfy),
`framework:check` (skills e contrato do Inboundfy), `opencli:check`,
`docs:check` e `build`.

Comandos auxiliares:

```bash
bun test tests/workflow.test.ts   # um arquivo de teste
bun run opencli                   # regenera docs/opencli.json depois de mudar commands
bun run framework:enrich          # amplia arquivos de skills e atualiza o catálogo
bun run payload                   # regenera generated/payload.gz
bun run ebook                     # regenera PDF e EPUB depois de mudar docs/user/
bun run ebook:verify              # confere ordem, hashes e navegação do ebook
bun run release:check             # confere versão, npm, ebook e changelog
```

Para ver a TUI de um projeto de exemplo:

```bash
T=$(mktemp -d)
bun run dev -- -C "$T" install --yes
bun run dev -- -C "$T" archive add "Exemplo" --text "material"
bun run dev -- -C "$T"
```

## Documentação

- [README](README.md): instalação e uso.
- [docs/](docs/README.md): documentação embutida no binário (`inboundfy --skill`).
- [docs/user](docs/user/README.md): manual do usuário, compilado no ebook.
- [docs/method](docs/method/README.md): arquitetura, contratos, referência do
  CLI e evolução do framework.
- [RELEASING.md](RELEASING.md): versão, tag, GitHub Release e npm.
- [SKILLS.md](SKILLS.md): catálogo completo das skills.
- [CONTEXTO.md](CONTEXTO.md): arquivos de contexto e precedência entre eles.
- [METODOLOGIA.md](METODOLOGIA.md): fases do pipeline editorial.

A documentação publicada fica em <https://promovaweb.com/docs/inboundfy/>.

## Commits e pull requests

O projeto usa Conventional Commits. O tipo do commit indica o tamanho da
próxima versão:

- `fix:` pede patch;
- `feat:` pede minor;
- `feat!:` ou `BREAKING CHANGE:` pede major;
- `docs:`, `test:`, `build:` e `ci:` sozinhos não pedem versão nova.

Um pull request deve trazer:

- a issue relacionada;
- o que mudou e por quê, em texto curto;
- os comandos de validação executados e o resultado;
- um exemplo de saída ou um frame da TUI quando a mudança afetar a interface.

## Releases

Binário, framework, skills, ebook e pacote npm compartilham o mesmo SemVer. A
fonte da versão é `package.json`. O fluxo completo está em
[RELEASING.md](RELEASING.md).

## Licença

O Inboundfy é distribuído sob a [GNU AGPL 3.0](LICENSE). Ao enviar uma
contribuição, você concorda que ela entre no projeto sob a mesma licença.
