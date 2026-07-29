---
name: thothfy-setup
description: >
  Instala o Thothfy num projeto novo: copia as skills para o diretório do
  agente do usuário, cria .thothfy/ com metodologia, templates e contexto,
  cria content/ como diretório padrão de ativos, ajusta AGENTS.md/CLAUDE.md
  do usuário e conduz o preenchimento mínimo de contexto. Não produz
  nenhuma peça de conteúdo.
---

# Thothfy Setup

Porta de entrada única quando o Thothfy é adotado em um projeto que ainda
não tem `.thothfy/`. É a única skill do catálogo com permissão para criar
arquivos fora de `.thothfy/` (a própria pasta `.thothfy/`, `content/` e a
seção de referência em `AGENTS.md`/`CLAUDE.md`). Não escreve copy nem gera
imagem.

## Escopo

Instala e mantém o ambiente. Preenchimento contínuo de um arquivo específico
de contexto depois da instalação inicial é responsabilidade da skill de
manutenção correspondente (`CONTEXTO.md`), não desta skill.

## Contexto exigido

Nenhum de antemão — esta é a skill que cria o contexto inicial. Ela lê o
estado atual de `.thothfy/` (se existir) para decidir entre instalação nova
e atualização.

## Entrada esperada

Nada além da ativação, no caso de instalação nova. O usuário pode
opcionalmente indicar o diretório de skills do seu agente (se não for
detectável), colar uma descrição da empresa, um link de site ou um
documento institucional para acelerar o preenchimento do contexto mínimo, ou
pedir uma atualização de versão em um projeto já instalado.

## Fluxo

### Instalação nova

1. Confirme que `.thothfy/` ainda não existe no projeto. Se existir, trate
   como atualização (ver seção abaixo), não como instalação nova.
2. Detecte o diretório de skills que o agente do usuário já usa
   (`.claude/skills/`, `.codex/skills/` ou equivalente). Se nenhum existir,
   pergunte ao usuário qual convenção adotar antes de copiar qualquer
   skill.
3. Copie `skills/thothfy-*/` deste repositório para o diretório detectado.
4. Crie `.thothfy/` na raiz do projeto com a estrutura descrita em
   `INSTALACAO.md`: `VERSAO.md`, os arquivos de metodologia
   (`METODOLOGIA.md`, `ESCRITA.md`, `CONTEXTO.md`,
   `ESTRUTURAS-PERSUASIVAS.md`, `LIMPEZA-MATERIAL-BRUTO.md`, `TRADUCAO.md`,
   `SKILL-AUTORIA.md`, `SKILLS.md`), `templates/context/` (cópia read-only
   dos 14 arquivos de `context/` deste repositório) e `context/` (cópia
   editável dos mesmos 14 arquivos).
5. Crie `content/` na raiz do projeto (ou confirme que já existe um
   diretório equivalente) como diretório padrão de pacotes de trabalho e
   ativos finais, e registre esse caminho em
   `.thothfy/context/canais.md`.
6. Verifique se o projeto já tem `AGENTS.md` e/ou `CLAUDE.md` na raiz.
   - Se tiver um ou os dois, insira uma seção curta (marcada com um
     comentário identificável, ex.: `<!-- thothfy:inicio -->` /
     `<!-- thothfy:fim -->`) apontando para `.thothfy/CONTEXTO.md`,
     `.thothfy/METODOLOGIA.md` e `.thothfy/SKILLS.md` como fonte de
     instrução do framework, usando o template de seção de `REFERENCIA.md`.
     Nunca remova ou reescreva instrução já existente do projeto fora dessa
     seção.
   - Se não tiver nenhum dos dois, pergunte ao usuário qual arquivo criar
     antes de gerar um novo `AGENTS.md`/`CLAUDE.md` do zero.
7. Identifique o mínimo obrigatório de `.thothfy/context/` ainda faltante:
   `empresa.md`, `marca-voz.md`, um item em `produtos.md` ou `servicos.md`,
   e um canal ativo em `canais.md`.
8. Pergunte ao usuário os dados faltantes, um bloco por vez, sem inventar
   valor, seguindo o roteiro de entrevista de `REFERENCIA.md`. Se o usuário
   fornecer material bruto (site, documento), extraia o que puder e
   confirme antes de gravar.
9. Grave cada resposta no arquivo correspondente em `.thothfy/context/`,
   preservando a estrutura de seções do template — nunca remova seção.
10. Ao concluir o mínimo, informe ao usuário: onde as skills foram
    instaladas, a estrutura de `.thothfy/` e `content/` criada, o que foi
    ajustado em `AGENTS.md`/`CLAUDE.md`, e quais arquivos de
    `.thothfy/context/` ainda estão como template — com a skill de
    manutenção correspondente para preencher cada um sob demanda.
11. Grave a versão instalada e a data em `.thothfy/VERSAO.md`, seguindo o
    template de `REFERENCIA.md`.

Use o checklist completo de instalação em `REFERENCIA.md` antes de declarar
a instalação concluída.

### Atualização de versão

1. Compare a versão registrada em `.thothfy/VERSAO.md` com a versão atual do
   Thothfy disponível como fonte.
2. Atualize `skills/thothfy-*/` no diretório de skills do agente,
   `.thothfy/templates/` e os arquivos de metodologia em `.thothfy/`.
3. Nunca sobrescreva `.thothfy/context/` — esse diretório só muda pelas
   skills de manutenção de contexto ou por edição direta do usuário.
4. Avise o usuário sobre qualquer arquivo novo em `.thothfy/templates/`
   sem equivalente ainda em `.thothfy/context/`, para preenchimento sob
   demanda.
5. Atualize `.thothfy/VERSAO.md`.

## Saída

- Skills copiadas para o diretório do agente do usuário.
- `.thothfy/` criado ou atualizado, com a estrutura de `INSTALACAO.md`.
- `content/` criado na raiz do projeto (instalação nova).
- Seção de referência ao Thothfy em `AGENTS.md`/`CLAUDE.md` (instalação
  nova ou quando ainda ausente).

## Validação

- Nenhum campo do mínimo obrigatório (passo 7) continua como placeholder ao
  final de uma instalação nova.
- Nenhum dado foi inventado: todo campo preenchido veio do usuário ou de
  material que ele forneceu explicitamente.
- `AGENTS.md`/`CLAUDE.md` do usuário preservou toda instrução prévia fora da
  seção do Thothfy.
- `.thothfy/context/` nunca foi sobrescrito numa atualização de versão.

## Idempotência

Rodar `thothfy-setup` de novo em um projeto já instalado nunca sobrescreve
`.thothfy/context/` nem a seção de `AGENTS.md`/`CLAUDE.md` já ajustada —
trata a execução como atualização de versão (ver fluxo acima) e só oferece
completar campos de contexto que ainda estejam vazios.
