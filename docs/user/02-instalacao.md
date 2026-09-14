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

O CLI instala as skills no diretório usado pelo agente, copia o método para
`.inboundfy/framework/`, cria a configuração viva, os diretórios de acervo,
canais e calendário, os índices e o bloco do agente.

## Arquivos canônicos do projeto

Preencha os sete arquivos diretamente em `.inboundfy/`:

```text
.inboundfy/
├── inbound.md
├── estrategia.md
├── voz.md
├── personas.md
├── proibicoes.md
├── dicionario.md
├── pipeline.md
└── indices/
```

O setup pergunta sobre empresa, produtos, serviços, endereços, pessoas,
redes sociais, oferta, personas, voz, regras, canais, calendário e estados.
Antes de liberar produção, exige empresa, site, voz, uma persona completa,
objetivo e pelo menos um canal.

Depois da entrevista, rode:

```bash
inboundfy project sync
inboundfy context ready --yes
inboundfy doctor --strict
```

## Primeiro acervo

Registre o material sem edição. O texto original nunca é substituído:

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
```

As skills completam FAQ, base editorial, pesquisa e possibilidades de uso com
o contexto do projeto, outras bases e pesquisa atualizada.

## Primeira peça

Liste as personas e escolha uma ou mais antes de escrever. Crie a pasta final:

```bash
inboundfy content create blog "Título da peça" \
  --persona persona-01 --acervo 0001
```

O caminho segue `canais/<canal>/<id>-<data>-<slug>/README.md`. O frontmatter
registra canal, persona, acervo, estado, datas e vínculos editoriais.

Use o pipeline e o calendário:

```bash
inboundfy content status 0001 revisao
inboundfy content status 0001 aprovado
inboundfy calendario add 2026-09-20 0001
```

Antes de publicar, a peça passa por voz, persona, dicionário, proibições,
anti-slop e validador do canal. A publicação exige URL e data:

```bash
inboundfy content status 0001 publicado \
  --url https://exemplo.test/artigo \
  --published-at 2026-09-20
```

## Atualização e reparo

Peça ao agente para executar `inboundfy-setup` quando a instalação precisar de
atualização ou reparo. O CLI preserva dados preenchidos e registra
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
