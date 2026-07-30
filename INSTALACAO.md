# INSTALACAO.md — Adotando o Thothfy em um Projeto Novo

## Pré-requisito

O Thothfy é consumido como skills de agente de IA (compatível com o formato
`SKILL.md` usado por Claude Code, Codex e ferramentas equivalentes). Ele não
exige runtime próprio: precisa apenas de um agente capaz de ler `SKILL.md`,
ler arquivos Markdown de contexto e escrever arquivos no projeto.

## O que `thothfy-setup` instala

`thothfy-setup` é a única skill responsável por instalar, atualizar, mover,
restaurar e reconciliar arquivos de apoio do framework. Ela também ajusta o
bloco delimitado no arquivo de instrução do agente (`AGENTS.md` e/ou
`CLAUDE.md`). As skills de contexto preenchem informação do negócio; as
skills de produção apenas leem o ambiente e escrevem nos destinos
registrados.

```text
<projeto-do-usuário>/
├── AGENTS.md / CLAUDE.md         (ajustado por thothfy-setup, ver abaixo)
├── brainstorms/                  ideias pesquisadas e validadas
├── content/                      ativos gerados: pacotes de trabalho e
│                                  artefatos finais do pipeline (padrão —
│                                  ver METODOLOGIA.md e context/canais.md)
└── .thothfy/
    ├── VERSAO.md                 versão do framework instalada e data
    ├── FONTES-PROJETO.md         inventário dos Markdown locais em maiúsculas
    ├── BRAINSTORM.md             fluxo da ideia ao brainstorm aprovado
    ├── METODOLOGIA.md            cópia dos arquivos de metodologia
    ├── ESCRITA.md
    ├── CONTEXTO.md
    ├── ESTRUTURAS-PERSUASIVAS.md
    ├── LIMPEZA-MATERIAL-BRUTO.md
    ├── TRADUCAO.md
    ├── SKILL-AUTORIA.md
    ├── SKILLS.md
    ├── templates/                 cópia read-only dos templates originais
    │   ├── brainstorm.md
    │   ├── fontes-projeto.md
    │   └── context/                (mesmos 15 arquivos de thothfy/context/)
    └── context/                    dado ao vivo do usuário — cópia editável
        └── (os mesmos 15 arquivos, preenchidos por thothfy-setup e pelas
             skills thothfy-contexto-*)
```

`templates/` nunca é editado depois da instalação — é a referência para
comparar o que mudou ou para restaurar um arquivo de `context/` corrompido.
`.thothfy/context/` é o único diretório de configuração que muda de projeto
para projeto. `content/` fica fora de `.thothfy/` de propósito: é o
diretório de saída voltado ao usuário — pacotes de trabalho
(`00-entrada/` até `97-ativos-finais/`, ver `METODOLOGIA.md`) e o resultado
final de cada peça — não configuração do framework. `brainstorms/` guarda
ideias pesquisadas antes de elas entrarem no pipeline.
`thothfy-planejamento-00-triagem` cria pacotes dentro de `content/` por
padrão; `context/canais.md` pode apontar outro caminho já existente no
projeto quando fizer sentido.

As skills (`skills/thothfy-*/SKILL.md`) são copiadas para o diretório de
skills que o agente do usuário já usa (`.claude/skills/`, `.codex/skills/`
ou equivalente) — `thothfy-setup` detecta qual convenção o projeto já segue
e usa a mesma, sem criar uma terceira convenção.

Se qualquer skill encontrar metodologia, template, arquivo de contexto ou
diretório de saída ausente ou fora desses caminhos, ela aciona
`thothfy-setup`. Nenhuma skill cria uma segunda estrutura para contornar a
instalação incompleta.

Instalar somente as skills no diretório do agente ainda não prepara o projeto.
Toda skill operacional confere `.thothfy/VERSAO.md` e
`.thothfy/FONTES-PROJETO.md` ao começar. Enquanto um deles não existir, a
execução não cria artefatos e apresenta este aviso:

> O setup do Thothfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `thothfy-setup` para preparar os arquivos de apoio.

## Descoberta dos Markdown do projeto

Durante instalação, atualização e reparo, o setup pesquisa arquivos `.md`
cujo nome use letras maiúsculas, além de números, hífens e sublinhados.
Quando `brand/` existir, todos os Markdown internos entram no inventário,
mesmo com nomes em minúsculas. Logos, fontes, tokens e imagens permanecem na
pasta original para consulta das skills visuais.
Arquivos como `README.md`, `AGENTS.md`, `PRODUCT.md` e `COPY-GUIDE.md` entram
como candidatos. O resultado fica em `.thothfy/FONTES-PROJETO.md`.

O setup não copia nem altera essas fontes. Ele registra o caminho relativo,
classifica a finalidade, resume os assuntos e aponta divergências. A busca
ignora os diretórios do agente, dependências, builds, saídas geradas, a própria
`.thothfy/` e submódulos Git. O arquivo descoberto só complementa
`.thothfy/context/`; qualquer conflito com um fato confirmado exige revisão.

## Passos

1. Ative `thothfy-setup` dentro do projeto que vai adotar o framework, com o
   Thothfy disponível como fonte (submódulo Git, pasta versionada ou
   referência remota).
2. `thothfy-setup`:
   - detecta o diretório de skills do agente do usuário
     (`.claude/skills/`, `.codex/skills/` ou o que já existir) e copia
     `skills/thothfy-*/` para lá;
   - cria `.thothfy/` com a estrutura acima, copiando `templates/context/` a
     partir de `context/`, `templates/brainstorm.md` e os arquivos de
     metodologia;
   - pesquisa os Markdown em maiúsculas e gera
     `.thothfy/FONTES-PROJETO.md`;
   - cria `brainstorms/` para ideias pesquisadas;
   - cria `content/` na raiz do projeto (ou confirma que já existe) e
     registra os dois caminhos em `.thothfy/context/canais.md`;
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
   - instala as validadoras pareadas; cada asset reprovado volta à skill
     produtora de mesmo sufixo com o relatório de correções.
3. Preencha o restante de `.thothfy/context/` sob demanda, usando a skill de
   manutenção correspondente (`CONTEXTO.md`) — não é preciso preencher tudo
   antes de produzir a primeira peça.
4. Confirme em `.thothfy/context/canais.md` onde os pacotes de trabalho
   serão salvos no projeto. `thothfy-planejamento-00-triagem` usa esse
   caminho para criar a estrutura descrita em `METODOLOGIA.md`.
5. A partir daqui, use `thothfy-brainstorm` para desenvolver uma ideia,
   `thothfy-iniciar` para gerar uma ou várias peças, ou uma skill especialista
   com brief simples para peça avulsa.

## Reparo da instalação

Ative `thothfy-setup` também quando a versão já estiver atualizada, mas um
arquivo tiver sido removido, movido ou corrompido. A skill inventaria os
caminhos, restaura metodologia e templates a partir da fonte atual, reinstala
skills ausentes e garante os diretórios de saída.

Arquivos existentes em `.thothfy/context/` nunca são substituídos. Se um
arquivo estiver ausente, o setup copia o template correspondente e informa
qual skill `thothfy-contexto-*` deve preenchê-lo. Essa separação permite
reparar a estrutura sem apagar nem inventar informação do usuário.

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
é sobrescrito. O setup atualiza `.thothfy/templates/`, metodologia e skills,
preserva customizações em `.thothfy/migracoes/`, atualiza o inventário de
fontes e registra a versão em `.thothfy/VERSAO.md`.

### Migração dos nomes estratégicos

A sequência estratégica usa números desde esta versão:

| Nome anterior | Nome atual |
| --- | --- |
| `thothfy-estrategia-briefing-cliente` | `thothfy-estrategia-00-briefing-cliente` |
| `thothfy-estrategia-pesquisa-mercado` | `thothfy-estrategia-01-pesquisa-mercado` |
| `thothfy-estrategia-campanha` | `thothfy-estrategia-02-campanha` |
| `thothfy-estrategia-calendario` | `thothfy-estrategia-03-calendario` |

Durante uma atualização, `thothfy-setup` copia os nomes atuais e move
diretórios antigos para `.thothfy/migracoes/skills-legadas/<data>/`. O
conteúdo antigo permanece disponível para comparação, mas sai do diretório
ativo de skills para não criar dois gatilhos para a mesma fase.
