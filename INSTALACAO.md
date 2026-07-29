# INSTALACAO.md — Adotando o Thothfy em um Projeto Novo

## Pré-requisito

O Thothfy é consumido como skills de agente de IA (compatível com o formato
`SKILL.md` usado por Claude Code, Codex e ferramentas equivalentes). Ele não
exige runtime próprio: precisa apenas de um agente capaz de ler `SKILL.md`,
ler arquivos Markdown de contexto e escrever arquivos no projeto.

## O que `thothfy-setup` instala

`thothfy-setup` é a única skill que tem permissão para tocar fora de
`.thothfy/`: ela ajusta o arquivo de instrução raiz do agente do usuário
(`AGENTS.md` e/ou `CLAUDE.md`) para apontar para o framework. Todo o resto
do framework vive dentro de `.thothfy/`, criado na raiz do projeto
consumidor:

```text
<projeto-do-usuário>/
├── AGENTS.md / CLAUDE.md         (ajustado por thothfy-setup, ver abaixo)
├── content/                      ativos gerados: pacotes de trabalho e
│                                  artefatos finais do pipeline (padrão —
│                                  ver METODOLOGIA.md e context/canais.md)
└── .thothfy/
    ├── VERSAO.md                 versão do framework instalada e data
    ├── METODOLOGIA.md            cópia dos arquivos de metodologia
    ├── ESCRITA.md
    ├── CONTEXTO.md
    ├── ESTRUTURAS-PERSUASIVAS.md
    ├── LIMPEZA-MATERIAL-BRUTO.md
    ├── TRADUCAO.md
    ├── SKILL-AUTORIA.md
    ├── SKILLS.md
    ├── templates/                 cópia read-only dos templates originais
    │   └── context/                (mesmos 14 arquivos de thothfy/context/)
    └── context/                    dado ao vivo do usuário — cópia editável
        └── (os mesmos 14 arquivos, preenchidos por thothfy-setup e pelas
             skills thothfy-contexto-*)
```

`templates/` nunca é editado depois da instalação — é a referência para
comparar o que mudou ou para restaurar um arquivo de `context/` corrompido.
`.thothfy/context/` é o único diretório de configuração que muda de projeto
para projeto. `content/` fica fora de `.thothfy/` de propósito: é o
diretório de saída voltado ao usuário — pacotes de trabalho
(`00-entrada/` até `97-ativos-finais/`, ver `METODOLOGIA.md`) e o resultado
final de cada peça — não configuração do framework.
`thothfy-planejamento-00-triagem` cria pacotes dentro de `content/` por
padrão; `context/canais.md` pode apontar outro caminho já existente no
projeto quando fizer sentido.

As skills (`skills/thothfy-*/SKILL.md`) são copiadas para o diretório de
skills que o agente do usuário já usa (`.claude/skills/`, `.codex/skills/`
ou equivalente) — `thothfy-setup` detecta qual convenção o projeto já segue
e usa a mesma, sem criar uma terceira convenção.

## Passos

1. Ative `thothfy-setup` dentro do projeto que vai adotar o framework, com o
   Thothfy disponível como fonte (submódulo Git, pasta versionada ou
   referência remota).
2. `thothfy-setup`:
   - detecta o diretório de skills do agente do usuário
     (`.claude/skills/`, `.codex/skills/` ou o que já existir) e copia
     `skills/thothfy-*/` para lá;
   - cria `.thothfy/` com a estrutura acima, copiando `templates/context/` a
     partir de `context/` deste repositório e os arquivos de metodologia
     para `.thothfy/`;
   - cria `content/` na raiz do projeto (ou confirma que já existe) como
     diretório padrão de pacotes de trabalho e ativos finais, e registra
     esse caminho em `.thothfy/context/canais.md`;
   - confere se o projeto já tem `AGENTS.md` e/ou `CLAUDE.md` na raiz; se
     tiver, insere (ou atualiza) uma seção curta apontando para
     `.thothfy/CONTEXTO.md`, `.thothfy/METODOLOGIA.md` e `.thothfy/SKILLS.md`
     como fonte de instrução do Thothfy, sem remover nenhuma instrução já
     existente do projeto; se não tiver nenhum dos dois, pergunta ao usuário
     qual criar;
   - conduz o preenchimento mínimo obrigatório em `.thothfy/context/`:
     `empresa.md`, `marca-voz.md`, um item em `produtos.md` ou
     `servicos.md`, e um canal em `canais.md`;
   - não libera nenhuma skill de produção enquanto esse mínimo não existir.
3. Preencha o restante de `.thothfy/context/` sob demanda, usando a skill de
   manutenção correspondente (`CONTEXTO.md`) — não é preciso preencher tudo
   antes de produzir a primeira peça.
4. Confirme em `.thothfy/context/canais.md` onde os pacotes de trabalho
   serão salvos no projeto. `thothfy-planejamento-00-triagem` usa esse
   caminho para criar a estrutura descrita em `METODOLOGIA.md`.
5. A partir daqui, use `thothfy-iniciar` para rodar a sequência completa a
   partir de material bruto, ou acione uma skill especialista diretamente
   com um brief simples para uma peça avulsa.

## O que o Thothfy nunca assume por padrão

- Idioma da peça final: segue o que estiver em `context/marca-voz.md`. Sem
  essa definição, a skill pergunta antes de escrever.
- Canal de publicação automática: o Thothfy produz o artefato, não publica em
  CMS, rede social ou provedor de e-mail. Integração de publicação é
  responsabilidade do projeto que adota o framework.
- Chave de API de serviço de imagem ou busca de foto: cada skill de imagem
  documenta a variável de ambiente que espera e o que fazer quando ela
  estiver ausente.
- Convenção de diretório de skills do agente do usuário: `thothfy-setup`
  detecta e reaproveita a que já existir, nunca cria uma nova convenção
  concorrente.

## Atualizando o Thothfy

Ao atualizar a versão do framework em um projeto, `.thothfy/context/` nunca
é sobrescrito — apenas `.thothfy/templates/`, os arquivos de metodologia em
`.thothfy/` e as skills em `skills/thothfy-*/` mudam com a versão do
framework. `thothfy-setup` registra a versão instalada em
`.thothfy/VERSAO.md` para permitir diff entre versões antes de atualizar.
