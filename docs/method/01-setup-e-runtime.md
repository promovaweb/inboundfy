# Setup e runtime instalado

`inboundfy-setup` é o proprietário exclusivo da instalação e da reconciliação.
O CLI `inboundfy` é o executor determinístico usado por essa skill.

## Grupos reconciliados

- catálogo de skills no diretório do agente;
- método e documentação em `.inboundfy/framework/`;
- configuração operacional em `.inboundfy/` e contexto de empresa e copy em
  `.inboundfy/context/`;
- acervo, canais e calendário fora do runtime;
- três índices JSON do projeto;
- manifesto e estado da instalação;
- bloco delimitado em `AGENTS.md` ou `CLAUDE.md`;
- histórico em `.inboundfy/migracoes/`.

## Estrutura do runtime

```text
<projeto>/
├── AGENTS.md ou CLAUDE.md
├── acervo/
├── canais/
├── calendario/
└── .inboundfy/
    ├── estrategia.md, pipeline.md
    ├── install.json
    ├── manifest.json
    ├── fontes-candidatas.json, fontes-projeto.md
    ├── indices/
    ├── context/
    │   ├── empresa.md, marca-voz.md, publico.md
    │   ├── glossario.md, proibicoes.md, links.md, aprendizado.md
    │   └── demais arquivos de contexto
    ├── migracoes/
    └── framework/
        ├── VERSAO.md
        ├── arquivos de metodologia
        ├── docs/, ebook/, brand/, templates/
        └── context/
```

As skills ficam no diretório ativo do agente, fora dessa árvore. O framework
instalado em `.inboundfy/framework/` é read-only; o dado vivo da empresa e da
copy fica em `.inboundfy/context/`, enquanto os arquivos diretamente em
`.inboundfy/` mantêm a operação do projeto.

## Divisão de responsabilidade

- A skill seleciona modo, interpreta fontes, entrevista o usuário e confere o
  resultado.
- O CLI resolve caminhos, copia o payload, calcula hashes, escreve manifestos,
  preserva customizações, aplica lock e produz o diagnóstico.
- As skills de contexto alteram somente o dado vivo.
- As skills de produção apenas leem o runtime e escrevem saídas registradas.

Cada escrita gerenciada é atômica. Caminhos absolutos, travessia com `..` e
destinos alcançados por symlink são recusados. Uma execução concorrente é
interrompida pelo lock `.inboundfy/.cli.lock`.

## Modos

Na instalação, o CLI cria ausentes e a skill entrevista o usuário. Na
atualização, o CLI substitui apenas arquivos gerenciados pela versão atual. No
reparo, restaura a estrutura. Nos três modos, preserva contexto vivo e
instruções externas ao bloco delimitado.

O manifesto registra o SHA-256 de cada arquivo gerenciado. Uma divergência é
copiada para `.inboundfy/migracoes/arquivos-customizados/` antes da atualização
ou do reparo.

## Migração de estratégia

Os quatro nomes estratégicos anteriores, sem número, não podem permanecer no
diretório ativo. O setup instala os nomes `00–03` e move os diretórios legados
para `.inboundfy/migracoes/skills-legadas/<data>/`.

Customizações locais de skill são preservadas antes da atualização em
`.inboundfy/migracoes/skills-customizadas/<data>/`.
