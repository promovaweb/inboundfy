# Instalação e preparação

Disponibilizar skills ao agente não prepara o projeto. A primeira execução
deve ser conduzida por `inboundfy-setup`, que usa o CLI para criar e conferir
os arquivos.

## Instalação rápida

Na raiz do projeto, faça primeiro uma simulação:

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

O CLI instala as skills no diretório usado pelo agente e copia o método para
`.inboundfy/framework/`. Depois cria a configuração viva, os diretórios de
acervo, canais e calendário, os índices e o bloco do agente.

## Arquivos canônicos do projeto

Preencha os arquivos operacionais em `.inboundfy/` e as informações de empresa e copy
em `.inboundfy/context/`:

```text
.inboundfy/
├── estrategia.md
├── pipeline.md
├── context/
│   ├── empresa.md
│   ├── marca-voz.md
│   ├── publico.md
│   ├── glossario.md
│   ├── proibicoes.md
│   ├── links.md
│   └── aprendizado.md
└── indices/
```

O setup faz perguntas em três grupos:

- empresa, produtos, serviços, porta-vozes, endereço físico, URLs oficiais e
  redes sociais;
- oferta, personas, voz, vetos e aprendizados prévios;
- canais, calendário e estados.

Para liberar a produção, ele exige empresa, site, voz, uma persona completa,
objetivo e pelo menos um canal.

Depois da entrevista, rode:

```bash
inboundfy project sync
inboundfy context ready --yes
inboundfy doctor --strict
```

## Primeiro acervo

Registre o material sem edição, porque o fluxo preserva o texto original:

```bash
inboundfy acervo add "Título do material" --file entrada.md
inboundfy acervo process 0001
```

O diretório numerado contém:

```text
acervo/0001-AAAA-MM-DD-slug/
├── README.md
├── bruto.md
├── processado.md
├── faq.md
├── base-editorial.md
├── pesquisa.md
└── estrategia.md

auditorias/anti-slop/
├── 00-entrada.md
├── 01-processado.md
├── 02-base-editorial.md
├── 03-estrategia-brief.md
├── 04-rascunho.md
├── 05-peca.md
└── 06-pacote.md
```

As skills completam as perguntas frequentes, a base editorial, a pesquisa e as
possibilidades de uso a partir dos arquivos do negócio, de outras bases e de
pesquisa atualizada.

## Primeira peça

Apresente as personas com número, ID e nome, junto com a situação, o problema
e o resultado de cada uma. Escolha uma ou mais antes de escrever. Crie a pasta final:

```bash
inboundfy content create blog "Título da peça" \
  --persona persona-01 --acervo 0001
```

O caminho segue `canais/<canal>/<id>-<data>-<slug>/README.md`. O frontmatter
registra canal, persona, acervo, estado, datas e vínculos editoriais.

Use o pipeline e o calendário:

```bash
inboundfy calendario add 2026-09-20 0001
inboundfy content status 0001 revisao
inboundfy content digest 0001
```

Depois da auditoria final, acrescente ao relatório da validadora o ID, o
caminho retornado pelo comando e o SHA-256 atual, neste formato:

```markdown
- **ID da peça:** `0001`
- **Asset:** `canais/blog/0001-AAAA-MM-DD-titulo/README.md`
- **SHA-256 da peça:** `<hash de 64 caracteres retornado pelo CLI>`
- **Veredito:** aprovado
```

Use o caminho do relatório ao registrar a aprovação e o agendamento:

```bash
inboundfy content status 0001 aprovado \
  --audit-report 06-auditoria/assets/blog-0001.md
inboundfy content status 0001 agendado
```

O CLI recusa aprovação sem esse relatório, confere se ID, caminho e hash
correspondem à peça e invalida a aprovação se o conteúdo mudar. Se houver
correção posterior, retorne para `revisao`, repita a auditoria completa e
atualize o relatório.

Antes de publicar, a peça passa pela conferência de voz, persona e dicionário,
depois pelas proibições, pelo anti-slop e pelo validador do canal. A publicação
exige URL e data:

```bash
inboundfy content status 0001 publicado \
  --url https://exemplo.test/artigo \
  --published-at 2026-09-20
```

Consulte [a referência do CLI e dos estados](../method/10-referencia-cli.md)
para as passagens permitidas e as respostas completas dos comandos.

## Atualização e reparo

Mande o agente executar `inboundfy-setup` quando a instalação precisar de
atualização ou reparo. O CLI preserva as informações preenchidas e registra
customizações em `.inboundfy/migracoes/`.

```bash
npx @promovaweb/inboundfy@latest update --dry-run
npx @promovaweb/inboundfy@latest update --yes
npx @promovaweb/inboundfy@latest doctor --strict
```

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | instalação, configuração e primeira operação |
| Autoridade | `inboundfy-setup` e `INSTALACAO.md` |
