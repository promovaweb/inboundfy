<p align="center">
  <a href="https://promovaweb.com/inboundfy/">
    <picture>
      <source type="image/svg+xml" srcset="https://raw.githubusercontent.com/promovaweb/inboundfy/main/brand/logo/icon.svg">
      <img alt="Inboundfy" src="https://raw.githubusercontent.com/promovaweb/inboundfy/main/brand/logo/icon.png" width="112" height="112">
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
  <a href="https://promovaweb.com/inboundfy/">Site do Inboundfy</a> ·
  <a href="https://promovaweb.com/docs/inboundfy/">Documentação</a> ·
  <a href="https://promovaweb.com/harness/">Harness</a> ·
  <a href="https://promovaweb.com/ferramentas/">Ferramentas</a> ·
  <a href="https://promovaweb.com/discord">Discord</a> ·
  <a href="https://promovaweb.com/planos?utm_source=github&utm_medium=readme&utm_campaign=inboundfy">Planos da Promovaweb</a> ·
  <a href="https://github.com/promovaweb/inboundfy/blob/main/CHANGELOG.md">Changelog</a>
</p>

## O que é

O Inboundfy organiza o trabalho de marketing e conteúdo em um projeto com
agente de IA. Ele instala 128 skills, sendo 127 diretórios com o prefixo
`inboundfy-` mais a orquestradora. Elas cuidam do contexto do negócio, da
pesquisa, do planejamento, da produção por canal, da revisão e da publicação.

O binário `inboundfy` instala o framework, mantém o acervo, as peças e o
calendário do projeto e mostra os números desse trabalho. É um executável só,
com três modos:

| Modo | Como abrir | Para quê |
| --- | --- | --- |
| Painel (TUI) | `inboundfy` | ver acervo, canais, funil do pipeline, calendário e contexto num painel no terminal |
| CLI | `inboundfy <command>` | instalar, conferir, registrar material, criar e mover peças, agendar e extrair números com `--json` |
| MCP | `inboundfy mcp` | dar ao agente tools para ler e gravar acervo, peças e calendário |
| Skills | `$inboundfy` no agente | conduzir brainstorm, campanha, pacote editorial e peça avulsa |

O escopo cobre campanha, calendário editorial, copy, SEO, distribuição,
imagens e auditoria. Cada skill produz um artefato observável. A publicação
exige leitura crítica e adequação à voz registrada no projeto.

### Separação entre framework e projeto

O binário leva dentro dele o método, as skills, os templates e a
documentação da versão. Ao instalar, o framework vai para
`.inboundfy/framework/`. Os dados da empresa e as escolhas do projeto ficam
em `.inboundfy/context/`. Estratégia, pipeline, índices e estado da
instalação ficam em `.inboundfy/`. O trabalho e as saídas ficam em `acervo/`,
`canais/` e `calendario/`.

## Instalação

Instale o binário por uma destas formas:

```bash
# npm: baixa e confere o binário da versão na primeira execução
npm install -g @promovaweb/inboundfy

# uso pontual, sem instalação global
npx @promovaweb/inboundfy@latest --version
```

Sem Node.js, baixe o executável da sua plataforma na
[página de releases](https://github.com/promovaweb/inboundfy/releases)
(linux-x64, linux-arm64, darwin-x64, darwin-arm64, windows-x64) e confira o
`SHA256SUMS`.

Na raiz do projeto consumidor, comece com uma simulação e depois instale
escolhendo o agente e o arquivo de instruções:

```bash
inboundfy install --dry-run
inboundfy install --agent codex --instruction-file AGENTS.md --yes
```

`--agent` aceita `codex`, `claude` ou `agents`. `--instruction-file` aceita
`AGENTS.md`, `CLAUDE.md` ou `none`. Use `--skills-dir` quando o projeto tiver
um diretório de skills próprio. Não é preciso instalar servidor nem banco de
dados.

Para atualizar ou restaurar uma instalação:

```bash
inboundfy update --yes
inboundfy repair --dry-run
```

Projetos instalados pela 0.x continuam válidos: rode `inboundfy update` com o
binário novo.

## Primeiros passos

1. Peça ao agente para executar `inboundfy-setup`. Ela conduz a entrevista de
   empresa, produtos, serviços, personas, voz, proibições, canais, calendário,
   integrações por área e áreas de trabalho, sem apagar o que já estiver
   preenchido.
2. Durante a entrevista, `inboundfy context check` mostra o que ainda falta.
   Depois, confira o projeto:

```bash
inboundfy project sync
inboundfy context ready --yes
inboundfy doctor --strict
```

O setup exige empresa, site, voz, uma persona completa, objetivo e pelo menos
um canal antes de liberar a produção. O registro `.inboundfy/fontes-projeto.md`
aponta para os arquivos que já existiam no projeto, como `README.md`,
`PRODUCT.md`, `BRAND.md` e `COPY.md`, sem movê-los.

## Uso

### O painel

Rode `inboundfy` na raiz do projeto. O painel abre com números grandes de
acervo, peças, publicadas, em andamento, agendadas e atrasadas, o funil do
pipeline, uma linha por canal, a entrada de material e as publicações dos
últimos meses, o progresso das etapas e das auditorias anti-slop, o
calendário e a prontidão do contexto. As abas Archive, Channels e Calendar
abrem lista e detalhe. A tela recarrega quando o agente grava.

### Números no terminal

```bash
inboundfy stats
inboundfy stats --section channels
inboundfy stats --months 12 --json
```

### Acervo e peças

```bash
# Preserva o material original e cria um item numerado
inboundfy archive add "Título do material" --file entrada.md

# Mostra o andamento das etapas e das auditorias A0 a A6
inboundfy archive show 1

# Cria a pasta final do canal com README e frontmatter
inboundfy content create blog "Título da peça" --persona persona-01 --archive 1
```

### Pipeline e calendário

```bash
inboundfy calendar add 2026-09-20 1
inboundfy content status 1 revisao
inboundfy content digest 1
```

A aprovação depois da revisão exige o relatório da validadora com o ID, o
caminho do asset e o SHA-256 atual:

```bash
inboundfy content status 1 aprovado --audit-report auditoria/blog-0001.md
inboundfy content status 1 agendado
inboundfy content status 1 publicado --url https://exemplo.test/artigo --published-at 2026-09-20
```

O binário recusa agendamento ou publicação quando o texto muda depois da
auditoria. Com `--json`, toda resposta sai no envelope
`{ ok, command, data }` e todo erro em `{ ok: false, error: { code, name,
message } }`, com códigos de saída fixos.

### Diagnóstico

```bash
inboundfy status
inboundfy doctor --strict
inboundfy doctor --json
```

`doctor` não altera arquivos. `--strict` trata avisos como falha.

## Uso com agentes

As skills descrevem ativação, contexto exigido, entrada, fluxo, saída e
validação no próprio `SKILL.md`. Com o servidor MCP ligado, elas leem e gravam
o projeto pelas tools do binário:

```bash
claude mcp add inboundfy -- inboundfy mcp
```

No Codex, adicione `[mcp_servers.inboundfy]` com `command = "inboundfy"` e
`args = ["mcp"]` em `~/.codex/config.toml`. As tools `project_stats`,
`archive_*`, `content_*` e `calendar_*` seguem as mesmas regras do CLI, e os
prompts `ingest_material`, `produce_piece` e `editorial_review` montam os
roteiros do ciclo mestre. `inboundfy mcp --list` mostra tudo o que o servidor
registra.

Instale ou atualize somente as skills:

```bash
inboundfy agent install --agent claude --yes
```

A entrada recomendada é `$inboundfy`. Descreva o pedido em linguagem natural
e a orquestradora escolhe brainstorm, campanha, acervo, canal ou capacidade.
As skills de etapa e de canal continuam disponíveis para retomadas e pedidos
específicos. `inboundfy-iniciar` é um alias que encaminha para a mesma
orquestradora.

Para trabalho recorrente dentro de um domínio existem sete skills de área:
`inboundfy-area-conteudo`, `inboundfy-area-seo`, `inboundfy-area-copy`,
`inboundfy-area-growth`, `inboundfy-area-vendas`, `inboundfy-area-dados` e
`inboundfy-area-pesquisa`. Cada uma faz de três a cinco perguntas de
diagnóstico, escolhe a skill da área e entrega a ela um pacote de entrada. A
área não produz o resultado final.

```text
$inboundfy-area-growth o cancelamento subiu para 8% ao mês e quero reter
$inboundfy-area-dados como está o custo por matrícula em cada canal
```

O setup também concentra as integrações. A etapa de configurações registra
agente, fuso, moeda e idioma em `.inboundfy/context/integracoes.md`, pergunta
quais ferramentas cada área usa e escreve apenas os nomes das variáveis no
`.env.example`. Os valores ficam no `.env`, fora do Git.

Antes da preparação do projeto, qualquer skill fora de `inboundfy-setup`
confere `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`,
avisa que o setup precisa ser concluído ou reparado e encerra sem criar
artefatos.

## Documentação

- [Documentação do Inboundfy](https://promovaweb.com/docs/inboundfy/)
- [Guia do usuário](https://github.com/promovaweb/inboundfy/blob/main/docs/user/README.md)
- [Áreas de trabalho](https://github.com/promovaweb/inboundfy/blob/main/docs/user/11-areas-de-trabalho.md)
- [Configurações e integrações](https://github.com/promovaweb/inboundfy/blob/main/docs/user/12-configuracoes-e-integracoes.md)
- [Exemplos de pedidos](https://github.com/promovaweb/inboundfy/blob/main/docs/user/18-exemplos-de-pedidos.md)
- [Painel, estatísticas e MCP](https://github.com/promovaweb/inboundfy/blob/main/docs/user/19-painel-estatisticas-e-mcp.md)
- [Referência do CLI](https://github.com/promovaweb/inboundfy/blob/main/docs/method/10-referencia-cli.md)
- [Exemplos executáveis](https://github.com/promovaweb/inboundfy/blob/main/examples/README.md)
- [Documentação do método](https://github.com/promovaweb/inboundfy/blob/main/docs/method/README.md)
- [Edição em PDF e EPUB](https://github.com/promovaweb/inboundfy/blob/main/ebook/README.md)
- [Catálogo de skills](https://github.com/promovaweb/inboundfy/blob/main/SKILLS.md)
- [Brainstorm](https://github.com/promovaweb/inboundfy/blob/main/BRAINSTORM.md)
- [Estratégia](https://github.com/promovaweb/inboundfy/blob/main/ESTRATEGIA.md)
- [Metodologia](https://github.com/promovaweb/inboundfy/blob/main/METODOLOGIA.md)
- [Contexto e precedência](https://github.com/promovaweb/inboundfy/blob/main/CONTEXTO.md)
- [Escrita](https://github.com/promovaweb/inboundfy/blob/main/ESCRITA.md)
- [Changelog](https://github.com/promovaweb/inboundfy/blob/main/CHANGELOG.md)

A ajuda fica em `inboundfy --help` e em `inboundfy <command> --help`. O
`inboundfy --skill` imprime a documentação completa do binário para agentes.

## Feito com

| Projeto | Para quê |
| --- | --- |
| [Termfy](https://github.com/promovaweb/termfy) | framework do binário: TUI, CLI e MCP no mesmo executável |
| [Bun](https://github.com/oven-sh/bun) | runtime, testes e compilação do binário |
| [OpenTUI](https://github.com/sst/opentui) | interface de terminal do painel |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | servidor MCP stdio |
| [Zod](https://github.com/colinhacks/zod) | validação de esquemas do projeto |
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
