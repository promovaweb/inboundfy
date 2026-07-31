# Instalação e preparação

Disponibilizar as skills ao agente não prepara o projeto. A primeira execução
deve ser conduzida por `thothfy-setup`, que usa o CLI para criar e conferir os
arquivos.

## Instalação rápida

Na raiz do projeto, faça primeiro uma simulação:

```bash
npx @promovaweb/thothfy@latest init --dry-run
```

Revise o plano. Depois, instale escolhendo o agente e o arquivo de instruções:

```bash
npx @promovaweb/thothfy@latest init \
  --agent codex \
  --instruction-file AGENTS.md \
  --yes
```

Troque `codex` por `claude` ou `agents` quando necessário. Para usar um
diretório próprio, acrescente `--skills-dir caminho/relativo`.

O CLI instala o catálogo, cria `.thothfy/`, `brainstorms/` e `content/`,
registra a versão, descobre fontes Markdown locais e instala esta documentação
em `.thothfy/docs/`, com seus ativos visuais em `.thothfy/brand/`. A skill de
setup interpreta o resultado, classifica as fontes e conduz o preenchimento
mínimo do contexto.

## Sinal de instalação válida

As duas sentinelas abaixo precisam existir:

```text
.thothfy/install.json
.thothfy/manifest.json
.thothfy/FONTES-PROJETO.md
```

Se uma skill operacional não encontrar uma delas, deve encerrar sem criar
artefatos e mostrar:

> O setup do Thothfy ainda não foi concluído ou precisa de reparo neste
> projeto. Peça ao agente para executar `thothfy-setup` ou rode
> `npx @promovaweb/thothfy@latest repair --yes`.

## O que preencher primeiro

Uma instalação nova só libera produção depois de registrar:

- empresa;
- voz, idioma e ao menos um exemplo de texto da marca;
- um produto ou serviço;
- ao menos um canal e seus caminhos de saída.

O restante pode ser preenchido sob demanda pelas skills `thothfy-contexto-*`.
O setup mantém a estrutura; essas skills mantêm os dados do negócio.

## Atualização e reparo

Peça novamente por `thothfy-setup` para atualizar ou reparar. Ela usa
`thothfy update` ou `thothfy repair`. O CLI restaura arquivos gerenciados,
reinstala skills e atualiza documentação e templates, mas nunca substitui
arquivos existentes em `.thothfy/context/`. Customizações são preservadas em
`.thothfy/migracoes/`.

O contrato integral está em [INSTALACAO.md](../../INSTALACAO.md).

## Passo a passo da primeira instalação

1. Abra o terminal na raiz do projeto.
2. Rode `npx @promovaweb/thothfy@latest init --dry-run`.
3. Repita com as opções escolhidas e `--yes`.
4. Peça ao agente para executar `thothfy-setup`.
5. Revise os Markdown descobertos e a classificação proposta.
6. Responda às perguntas do contexto mínimo.
7. Depois da conferência, a skill executa `thothfy context ready --yes`.
8. Execute `npx @promovaweb/thothfy@latest doctor --strict`.
9. Confira os caminhos registrados em `.thothfy/context/canais.md`.

O relatório final separa o que foi criado, atualizado, restaurado, preservado,
migrado e deixado para preenchimento posterior. Uma instalação não está
concluída quando o relatório aponta item gerenciado ausente.

## Estrutura esperada

```text
<projeto>/
├── AGENTS.md ou CLAUDE.md
├── brainstorms/
├── content/
└── .thothfy/
    ├── install.json
    ├── manifest.json
    ├── VERSAO.md
    ├── FONTES-PROJETO.md
    ├── fontes-candidatas.json
    ├── docs/
    ├── brand/
    ├── templates/
    └── context/
```

As skills ficam no diretório ativo do agente. Os templates são referências
para restauração. O conteúdo vivo do negócio fica em `.thothfy/context/`.

## Como conferir o resultado

Ative uma skill operacional somente quando `doctor --strict` terminar sem
erro. Se a skill repetir o aviso de setup, execute o reparo e confira no
relatório qual caminho ainda precisa de atenção.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | instalação inicial e sentinelas do ambiente |
| Autoridade | `thothfy-setup` e `INSTALACAO.md` |
