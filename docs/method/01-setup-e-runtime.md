# Setup e runtime instalado

`thothfy-setup` é o proprietário exclusivo da instalação e da reconciliação.
O CLI `thothfy` é o executor determinístico usado por essa skill.

## Grupos reconciliados

- catálogo de skills no diretório do agente;
- metodologia em `.thothfy/*.md`;
- documentação em `.thothfy/docs/`;
- identidade visual do framework em `.thothfy/brand/`;
- templates em `.thothfy/templates/`;
- arquivos vivos em `.thothfy/context/`;
- inventário e versão;
- manifesto de integridade e configuração da instalação;
- diretórios de brainstorm e conteúdo;
- bloco delimitado em `AGENTS.md` ou `CLAUDE.md`;
- histórico em `.thothfy/migracoes/`.

## Estrutura do runtime

```text
<projeto>/
├── AGENTS.md ou CLAUDE.md
├── brainstorms/
├── content/
└── .thothfy/
    ├── VERSAO.md
    ├── install.json
    ├── manifest.json
    ├── FONTES-PROJETO.md
    ├── fontes-candidatas.json
    ├── arquivos de metodologia
    ├── docs/
    │   ├── user/
    │   └── method/
    ├── brand/
    │   └── logo/
    ├── templates/
    │   ├── brainstorm.md
    │   ├── fontes-projeto.md
    │   └── context/
    ├── context/
    └── migracoes/
```

As skills ficam no diretório ativo do agente, fora dessa árvore.
`.thothfy/templates/context/` é a referência read-only;
`.thothfy/context/` contém o dado vivo.

## Divisão de responsabilidade

- A skill seleciona modo, interpreta fontes, entrevista o usuário e confere o
  resultado.
- O CLI resolve caminhos, copia o payload, calcula hashes, escreve manifestos,
  preserva customizações, aplica lock e produz o diagnóstico.
- As skills de contexto alteram somente o dado vivo.
- As skills de produção apenas leem o runtime e escrevem saídas registradas.

Cada escrita gerenciada é atômica. Caminhos absolutos, travessia com `..` e
destinos alcançados por symlink são recusados. Uma execução concorrente é
interrompida pelo lock `.thothfy/.cli.lock`.

## Modos

Na instalação, o CLI cria ausentes e a skill entrevista o usuário. Na
atualização, o CLI substitui apenas arquivos gerenciados pela versão atual. No
reparo, restaura a estrutura. Nos três modos, preserva contexto vivo e
instruções externas ao bloco delimitado.

O manifesto registra o SHA-256 de cada arquivo gerenciado. Uma divergência é
copiada para `.thothfy/migracoes/arquivos-customizados/` antes da atualização
ou do reparo.

## Migração de estratégia

Os quatro nomes estratégicos anteriores, sem número, não podem permanecer no
diretório ativo. O setup instala os nomes `00–03` e move os diretórios legados
para `.thothfy/migracoes/skills-legadas/<data>/`.

Customizações locais de skill são preservadas antes da atualização em
`.thothfy/migracoes/skills-customizadas/<data>/`.
