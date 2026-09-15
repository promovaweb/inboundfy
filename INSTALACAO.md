# INSTALACAO.md — Adotando o Inboundfy em um projeto

## Pré-requisito

O Inboundfy exige Node.js 22.14.0 ou superior para executar o CLI
`@promovaweb/inboundfy`. As skills usam o formato `SKILL.md` de Codex,
Claude Code e agentes compatíveis.

## Regra de separação

O pacote instalado separa o método, que é reutilizável, dos dados do negócio,
que pertencem ao projeto consumidor:

```text
<projeto>/
├── AGENTS.md ou CLAUDE.md
├── acervo/
│   └── 0001-AAAA-MM-DD-slug/
├── canais/
│   ├── README.md
│   └── <canal>/0001-AAAA-MM-DD-slug/README.md
├── calendario/
│   ├── README.md
│   └── AAAA-MM.md
└── .inboundfy/
    ├── estrategia.md
    ├── pipeline.md
    ├── install.json
    ├── manifest.json
    ├── fontes-candidatas.json
    ├── fontes-projeto.md
    ├── indices/
    ├── context/
    │   ├── empresa.md
    │   ├── marca-voz.md
    │   ├── publico.md
    │   ├── glossario.md
    │   ├── proibicoes.md
    │   ├── links.md
    │   └── aprendizado.md
    └── framework/
        ├── VERSAO.md
        ├── docs/
        ├── ebook/
        ├── brand/
        ├── templates/
        ├── context/
        └── arquivos de metodologia
```

`inboundfy/` é o repositório do framework. `.inboundfy/framework/` é a cópia
read-only do método instalado. `.inboundfy/context/` concentra os dados da
empresa e as regras globais de copy; os arquivos diretamente em `.inboundfy/`
mantêm estratégia, pipeline e estado técnico. `acervo/`, `canais/` e
`calendario/` guardam trabalho e saída.

O material de referência instalado fica em `.inboundfy/framework/docs/`,
`.inboundfy/framework/ebook/`, `.inboundfy/framework/brand/` e
`.inboundfy/framework/templates/`. Esses arquivos pertencem ao framework e
não recebem dados específicos do projeto.

## O que o setup pergunta

`inboundfy-setup` conduz uma entrevista por blocos:

1. empresa: nome, descrição, site, país, região, idioma, endereços, contatos,
   pessoas autorizadas e redes sociais;
2. oferta: produtos, serviços, público, problema, resultado, mecanismo, preço,
   condições, provas, limites e próxima ação;
3. personas: identidade, cargo ou situação, tarefa, contexto de compra,
   problema, resultado, objeções, vocabulário, canais e oferta pertinente;
4. voz: adjetivos, pessoa verbal, tempo, formalidade, ritmo, humor, aberturas,
   fechamentos, tamanho de parágrafo e exemplos aprovados e rejeitados;
5. regras: termos proibidos, promessas vetadas, estruturas a evitar, grafia
   oficial, termos preferidos e correções aprovadas;
6. estratégia: objetivo, oferta principal, horizonte, cadência, datas e canais
   entre Blog, Email, LinkedIn, Instagram, Substack e YouTube;
7. pipeline: estados, responsáveis, campos para agendamento e dados exigidos
   para marcar uma peça como publicada.

O setup exige ao menos uma persona. Uma resposta local pode valer para uma
peça, um canal ou o projeto inteiro; registre o alcance antes de alimentar o
dicionário.

## Instalação

Na raiz do projeto consumidor, simule primeiro:

```bash
npx @promovaweb/inboundfy@latest install --dry-run
```

Depois instale escolhendo o agente:

```bash
npx @promovaweb/inboundfy@latest install \
  --agent codex \
  --instruction-file AGENTS.md \
  --yes
```

O CLI instala as skills no diretório usado pelo agente, copia o método para
`.inboundfy/framework/`, cria os sete arquivos de configuração, os diretórios
de trabalho, os índices e o bloco delimitado em `AGENTS.md` ou `CLAUDE.md`.
Arquivos preenchidos pelo projeto permanecem intactos.

Ative `inboundfy-setup` para preencher os arquivos canônicos. Depois rode:

```bash
inboundfy project sync
inboundfy context ready --yes
inboundfy doctor --strict
```

## Operação diária

Registre material bruto sem edição:

```bash
inboundfy acervo add "Título do material" --file entrada.md --source "nota interna"
inboundfy acervo process 0001
```

O item recebe `bruto.md`, `processado.md`, `faq.md`, `base-editorial.md`,
`pesquisa.md` e `estrategia.md`. As skills preenchem os quatro últimos a partir
do material, do contexto, de outras bases editoriais e de pesquisa atualizada.

Crie e mova uma peça pelo pipeline:

```bash
inboundfy content create blog "Título da peça" \
  --persona persona-01 --acervo 0001
inboundfy content status 0001 revisao
inboundfy content status 0001 aprovado
inboundfy calendario add 2026-09-20 0001
inboundfy content status 0001 publicado \
  --url https://exemplo.test/artigo \
  --published-at 2026-09-20
```

Cada saída fica em uma pasta do canal com `README.md`, frontmatter, IDs,
personas, acervos, base editorial, estado e checklist. A publicação exige URL
e data confirmadas.

## Atualização e reparo

Use `inboundfy-setup` para atualizar ou reparar. O CLI preserva dados de
`.inboundfy/`, acervo, canais, calendário e customizações, registra cópias em
`.inboundfy/migracoes/` quando necessário e atualiza somente os arquivos do
framework gerenciados pelo manifesto.

```bash
npx @promovaweb/inboundfy@latest update --dry-run
npx @promovaweb/inboundfy@latest update --yes
npx @promovaweb/inboundfy@latest doctor --strict
```

Se o doctor apontar arquivo ausente ou divergente, faça a simulação de reparo,
revise o relatório e execute `repair --yes`.
