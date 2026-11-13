<p align="center">
  <a href="https://github.com/promovaweb/inboundfy">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/promovaweb/inboundfy/main/brand/logo/logo-dark.png">
      <img alt="Inboundfy" src="https://raw.githubusercontent.com/promovaweb/inboundfy/main/brand/logo/logo-light.png" width="320">
    </picture>
  </a>
</p>

<h1 align="center">Inboundfy</h1>

<p align="center">
  Framework de inbound marketing com skills de IA para pesquisar, planejar, escrever, revisar e distribuir conteúdo.
</p>

<p align="center">Um projeto da <a href="https://promovaweb.com">Promovaweb</a></p>

<p align="center">
  <a href="https://github.com/promovaweb/inboundfy/releases/latest"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/promovaweb/inboundfy"></a>
  <a href="https://www.npmjs.com/package/@promovaweb/inboundfy"><img alt="npm" src="https://img.shields.io/npm/v/@promovaweb/inboundfy"></a>
  <a href="https://github.com/promovaweb/inboundfy/blob/main/LICENSE"><img alt="Licença" src="https://img.shields.io/github/license/promovaweb/inboundfy"></a>
</p>

<p align="center">
  <a href="https://promovaweb.com/discord"><img alt="Discord: obter ajuda e conversar com a Comunidade" src="https://img.shields.io/badge/Discord-Obter%20ajuda%20e%20conversar%20com%20a%20Comunidade-5865F2?style=for-the-badge&logo=discord&logoColor=white"></a>
</p>

<p align="center">
  <a href="https://promovaweb.com/docs/inboundfy/">Documentação</a> ·
  <a href="https://promovaweb.com/discord">Discord</a> ·
  <a href="https://promovaweb.com/planos?utm_source=github&utm_medium=readme&utm_campaign=inboundfy">Planos da Promovaweb</a> ·
  <a href="https://github.com/promovaweb/inboundfy/blob/main/CHANGELOG.md">Changelog</a>
</p>

## O que é

O Inboundfy organiza o trabalho de marketing e conteúdo em um projeto com
agente de IA. Ele instala 117 skills que cuidam do contexto do negócio, da
pesquisa, do planejamento, da produção por canal, da revisão e da publicação.
O CLI `inboundfy` cria e mantém a estrutura do projeto consumidor.

O escopo cobre campanha, calendário editorial, copy, SEO, distribuição,
imagens e auditoria. Cada skill produz um artefato observável. A publicação
exige leitura crítica e adequação à voz registrada no projeto.

| Modo | Como usar | Para quê |
| --- | --- | --- |
| CLI | `inboundfy <comando>` | registrar acervo, criar peças, montar calendário e conferir a instalação |
| Skills | `$inboundfy` no agente | conduzir brainstorm, campanha, pacote editorial e peça avulsa |
| Setup | `inboundfy-setup` | preencher o contexto e conferir os arquivos do projeto |

### Separação entre framework e projeto

O repositório guarda método, skills, templates, código e documentação
reutilizável. Ao instalar, o framework vai para `.inboundfy/framework/`. Os
dados da empresa e as escolhas do projeto ficam em `.inboundfy/context/`.
Estratégia, pipeline, índices e estado da instalação ficam em `.inboundfy/`.
O trabalho e as saídas ficam em `acervo/`, `canais/` e `calendario/`.

## Instalação

Na raiz do projeto consumidor, comece com uma simulação:

```bash
npx @promovaweb/inboundfy@latest install --dry-run
```

Depois instale escolhendo o agente e o arquivo de instruções:

```bash
npx @promovaweb/inboundfy@latest install \
  --agent codex \
  --instruction-file AGENTS.md \
  --yes
```

`--agent` aceita `codex`, `claude` ou `agents`. `--instruction-file` aceita
`AGENTS.md`, `CLAUDE.md` ou `none`. Use `--skills-dir` quando o projeto tiver
um diretório de skills próprio.

Requisitos: Node.js 22.14.0 ou superior, acesso ao npm e um agente que
carregue skills no formato `SKILL.md`. Não é preciso instalar servidor nem
banco de dados.

Para atualizar ou restaurar uma instalação:

```bash
npx @promovaweb/inboundfy@latest update --yes
npx @promovaweb/inboundfy@latest repair --dry-run
```

## Primeiros passos

1. Peça ao agente para executar `inboundfy-setup`. Ela conduz a entrevista de
   empresa, produtos, serviços, personas, voz, proibições, canais e calendário
   sem apagar o que já estiver preenchido.
2. Depois da entrevista, confira o projeto:

```bash
npx @promovaweb/inboundfy@latest project sync
npx @promovaweb/inboundfy@latest context ready --yes
npx @promovaweb/inboundfy@latest doctor --strict
```

O setup exige empresa, site, voz, uma persona completa, objetivo e pelo menos
um canal antes de liberar a produção. O registro `.inboundfy/fontes-projeto.md`
aponta para os arquivos que já existiam no projeto, como `README.md`,
`PRODUCT.md`, `BRAND.md` e `COPY.md`, sem movê-los.

## Uso

### Acervo e peças

```bash
# Preserva o material original e cria um item numerado
npx @promovaweb/inboundfy@latest acervo add "Título do material" --file entrada.md

# Gera a versão processada e atualiza o índice
npx @promovaweb/inboundfy@latest acervo process 0001

# Cria a pasta final do canal com README e frontmatter
npx @promovaweb/inboundfy@latest content create blog "Título da peça" \
  --persona persona-01 --acervo 0001
```

### Pipeline e calendário

```bash
npx @promovaweb/inboundfy@latest calendario add 2026-09-20 0001
npx @promovaweb/inboundfy@latest content status 0001 revisao
npx @promovaweb/inboundfy@latest content digest 0001
```

A aprovação depois da revisão exige o relatório da validadora com o ID, o
caminho do asset e o SHA-256 atual:

```bash
npx @promovaweb/inboundfy@latest content status 0001 aprovado \
  --audit-report 06-auditoria/assets/blog-0001.md
```

Para agendar e registrar a publicação:

```bash
npx @promovaweb/inboundfy@latest content status 0001 agendado
npx @promovaweb/inboundfy@latest content status 0001 publicado \
  --url https://exemplo.test/artigo --published-at 2026-09-20
```

O CLI recusa agendamento ou publicação quando o texto muda depois da
auditoria. Use `--json` antes do comando para receber a resposta estruturada:

```bash
npx @promovaweb/inboundfy@latest --json acervo list
```

### Diagnóstico

```bash
npx @promovaweb/inboundfy@latest status
npx @promovaweb/inboundfy@latest doctor --strict
npx @promovaweb/inboundfy@latest doctor --json
```

`doctor` não altera arquivos. `--strict` trata avisos como falha.

## Uso com agentes

O Inboundfy entrega skills, não um servidor MCP. Cada skill descreve
ativação, contexto exigido, entrada, fluxo, saída e validação no próprio
`SKILL.md`. O agente lê os arquivos do projeto em tempo de execução.

Instale ou atualize somente as skills:

```bash
npx @promovaweb/inboundfy@latest agent install --agent claude --yes
```

A entrada recomendada é `$inboundfy`. Descreva o pedido em linguagem natural
e a orquestradora escolhe brainstorm, campanha, acervo, canal ou capacidade.
As skills de etapa e de canal continuam disponíveis para retomadas e pedidos
específicos. `inboundfy-iniciar` é um alias que encaminha para a mesma
orquestradora.

Antes da preparação do projeto, qualquer skill fora de `inboundfy-setup`
confere `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`,
avisa que o setup precisa ser concluído ou reparado e encerra sem criar
artefatos.

## Documentação

- [Documentação do Inboundfy](https://promovaweb.com/docs/inboundfy/)
- [Guia do usuário](https://github.com/promovaweb/inboundfy/blob/main/docs/user/README.md)
- [Documentação do método](https://github.com/promovaweb/inboundfy/blob/main/docs/method/README.md)
- [Edição em PDF e EPUB](https://github.com/promovaweb/inboundfy/blob/main/ebook/README.md)
- [Catálogo de skills](https://github.com/promovaweb/inboundfy/blob/main/SKILLS.md)
- [Brainstorm](https://github.com/promovaweb/inboundfy/blob/main/BRAINSTORM.md)
- [Estratégia](https://github.com/promovaweb/inboundfy/blob/main/ESTRATEGIA.md)
- [Metodologia](https://github.com/promovaweb/inboundfy/blob/main/METODOLOGIA.md)
- [Contexto e precedência](https://github.com/promovaweb/inboundfy/blob/main/CONTEXTO.md)
- [Escrita](https://github.com/promovaweb/inboundfy/blob/main/ESCRITA.md)
- [Changelog](https://github.com/promovaweb/inboundfy/blob/main/CHANGELOG.md)

A ajuda do CLI fica em `inboundfy --help` e em `inboundfy help <comando>`.

## Feito com

| Projeto | Para quê |
| --- | --- |
| [Node.js](https://github.com/nodejs/node) | runtime do CLI e dos scripts |
| [Commander](https://github.com/tj/commander.js) | parser de comandos e opções |
| [Zod](https://github.com/colinhacks/zod) | validação de esquemas do projeto |
| [Inquirer](https://github.com/SBoudrias/Inquirer.js) | perguntas interativas da instalação |
| [Codex](https://github.com/openai/codex) | agente suportado (`--agent codex`) |
| [Claude Code](https://github.com/anthropics/claude-code) | agente suportado (`--agent claude`) |

## Comunidade e suporte

- **Discord:** [obter ajuda e conversar com a Comunidade](https://promovaweb.com/discord).
- **Bugs e pedidos:** abra uma [issue](https://github.com/promovaweb/inboundfy/issues)
  com a versão, o sistema operacional e o passo a passo para reproduzir.
- **Novidades:** acompanhe o [CHANGELOG](https://github.com/promovaweb/inboundfy/blob/main/CHANGELOG.md)
  e as [releases](https://github.com/promovaweb/inboundfy/releases).

## Contribuir

Leia o [CONTRIBUTING.md](https://github.com/promovaweb/inboundfy/blob/main/CONTRIBUTING.md)
para preparar o ambiente, entender a organização do código e rodar a
validação completa. Uma issue por mudança e um pull request por issue.

## Promovaweb

O Inboundfy é mantido pela [Promovaweb](https://promovaweb.com), comunidade de
co-working digital onde profissionais aprendem a construir, automatizar e
gerir negócios de tecnologia e IA com aulas ao vivo, Co-works e revisão de
projetos reais.

Quer usar o Inboundfy em projetos de verdade, com acompanhamento? Conheça os
[planos da Promovaweb](https://promovaweb.com/planos?utm_source=github&utm_medium=readme&utm_campaign=inboundfy).

## Licença

Distribuído sob a [GNU AGPL 3.0](https://github.com/promovaweb/inboundfy/blob/main/LICENSE).
A licença não concede o uso do nome e do logo do Inboundfy nem da marca
Promovaweb (AGPL 3.0, seção 7, item e).
