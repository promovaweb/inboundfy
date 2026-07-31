# Artefatos e estados

## Brainstorm

Uma ideia abre `brainstorms/<data>-<slug>/brainstorm.md`. O arquivo preserva
a entrada original e acumula entrevista, pesquisa, tese, oportunidades,
restrições e validação.

## Pacote editorial

O planejamento cria a estrutura:

```text
content/<pacote>/
├── README.md
├── 00-entrada/
│   └── material-original.md
├── 01-saneamento/
│   ├── base-limpa.md
│   └── relatorio-saneamento.md
├── 02-pesquisa-e-ativos/
│   └── ativos.md
├── 03-planejamento/
│   └── plano-de-oportunidades.md
├── 04-briefs/
│   └── <canal>-<slug>.md
├── 06-auditoria/
│   ├── assets/
│   │   └── <canal>-<item>.md
│   └── auditoria-final.md
└── 97-ativos-finais/
    └── <canal>/
        └── <item>/
            ├── README.md
            └── <arquivos visuais>
```

Não existe diretório `05-producao/`: versões candidatas e o ciclo de
validação pertencem ao diretório próprio do item final e aos relatórios de
auditoria. O número `05` identifica a fase de roteamento, não um estado
obrigatório em disco.

Todo Markdown final declara o brief de origem no frontmatter. Todo item em
`97-ativos-finais/` possui relatório aprovado em `06-auditoria/assets/`.

## Artefatos estratégicos

```text
<pacote-de-campanha>/
├── 00-briefing/
│   ├── brief-cliente.md
│   └── pesquisa-mercado.md
└── 01-plano/
    └── plano-de-campanha.md

calendario/
└── <periodo>.md
```

Um pacote editorial originado por campanha referencia
`01-plano/plano-de-campanha.md` no próprio `README.md`.

## Transições

Cada fase lê o estado anterior e grava o próximo. A reprovação de um asset
retorna apenas à especialista pareada. Divergência de estratégia retorna ao
brief. Falta factual impede a afirmação ou pede informação; não reinicia
automaticamente o pacote nem autoriza invenção.

Reexecutar uma skill preserva originais e versões aprovadas conforme a seção
de idempotência. Uma nova entrada cria novo pacote; uma retomada explícita usa
o pacote informado.
