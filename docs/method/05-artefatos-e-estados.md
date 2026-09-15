# Artefatos e estados

## Brainstorm

Uma ideia abre `brainstorms/<data>-<slug>/brainstorm.md`. O arquivo preserva
a entrada original e acumula entrevista, pesquisa, tese, oportunidades,
restrições e validação.

## Acervo e peças

O registro principal cria a estrutura:

```text
acervo/<id>-<data>-<slug>/
├── README.md
├── bruto.md
├── processado.md
├── faq.md
├── base-editorial.md
├── pesquisa.md
├── estrategia.md
└── auditorias/
    └── anti-slop/
        ├── 00-entrada.md
        ├── 01-processado.md
        ├── 02-base-editorial.md
        ├── 03-estrategia-brief.md
        ├── 04-rascunho.md
        ├── 05-peca.md
        └── 06-pacote.md

canais/<canal>/<id>-<data>-<slug>/
└── README.md
```

O bruto permanece preservado. O processado, a FAQ, a base editorial, a
pesquisa e as possibilidades alimentam a produção. Cada peça final fica em
uma pasta de canal e relaciona acervo, persona, estado e calendário.

Todo Markdown final declara canal, persona, acervo, estado e fontes no
frontmatter. O calendário mensal aponta para o README da peça.

Os registros da cadência anti-slop ficam em `auditorias/anti-slop/`. Cada
código representa somente o marco registrado; `aprovado` em um ciclo não
aprova os ciclos seguintes.

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
