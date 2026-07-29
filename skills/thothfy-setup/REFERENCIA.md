# REFERENCIA.md — thothfy-setup

Checklist e roteiro de entrevista para conduzir uma instalação nova do
Thothfy do início ao fim.

## Checklist de instalação completa

- [ ] Diretório de skills do agente detectado ou definido pelo usuário.
- [ ] `skills/thothfy-*/` copiadas para esse diretório.
- [ ] `.thothfy/` criado com `VERSAO.md`, arquivos de metodologia,
      `templates/context/` e `context/`.
- [ ] `content/` criado (ou confirmado) na raiz do projeto.
- [ ] `.thothfy/context/canais.md` registra o caminho de `content/`.
- [ ] `AGENTS.md` e/ou `CLAUDE.md` ajustado com a seção do Thothfy, sem
      remover instrução prévia.
- [ ] `.thothfy/context/empresa.md` preenchido (nome, missão, modelo de
      negócio).
- [ ] `.thothfy/context/marca-voz.md` preenchido (tom, idioma, um exemplo de
      bom texto).
- [ ] Ao menos um item em `.thothfy/context/produtos.md` ou
      `.thothfy/context/servicos.md`.
- [ ] Ao menos um canal ativo em `.thothfy/context/canais.md`.
- [ ] `.thothfy/VERSAO.md` registra versão e data.
- [ ] Usuário recebeu a lista do que ainda falta preencher no restante de
      `.thothfy/context/`.

## Roteiro de entrevista (instalação nova)

Use estas perguntas, uma de cada vez, para preencher o mínimo obrigatório
sem inventar dado:

1. "Qual é o nome da empresa (ou marca pessoal) e, em uma frase, o que ela
   faz?" → `empresa.md`.
2. "Como você descreveria o tom da marca em três palavras? Formal, técnico,
   direto, bem-humorado?" → `marca-voz.md`.
3. "Cole um trecho de texto que já represente bem essa voz, se tiver um à
   mão." → `marca-voz.md` (exemplo de bom texto).
4. "Qual produto ou serviço principal eu devo conhecer primeiro?" →
   `produtos.md` ou `servicos.md`.
5. "Em qual canal você quer produzir conteúdo primeiro — blog, LinkedIn,
   e-mail, outro?" → `canais.md`.
6. "Prefere manter os pacotes de trabalho em `content/` na raiz do projeto,
   ou já existe uma pasta equivalente que devo usar?" → `canais.md`.

Perguntas de aprofundamento (podem esperar, não bloqueiam a liberação das
skills de produção): pessoas/porta-vozes, ofertas e preços, público e
personas, concorrentes, endereços oficiais, ferramentas citáveis,
proibições específicas além das genéricas já pré-preenchidas.

## Template de seção para `AGENTS.md`/`CLAUDE.md`

```markdown
<!-- thothfy:inicio -->
## Thothfy

Este projeto usa o Thothfy para copy, conteúdo e artefatos visuais de
marketing. Antes de produzir qualquer peça, leia `.thothfy/CONTEXTO.md`
(dados do usuário e precedência), `.thothfy/METODOLOGIA.md` (pipeline
editorial) e `.thothfy/SKILLS.md` (catálogo de skills). Use
`thothfy-iniciar` para o fluxo completo automático a partir de material
bruto, ou acione a skill especialista do canal diretamente com um brief.
<!-- thothfy:fim -->
```

## Template de `.thothfy/VERSAO.md`

```markdown
# Versão do Thothfy instalada

- Versão: <versão ou commit do framework fonte>
- Instalado em: <data>
- Última atualização: <data>
```

## Erros comuns

- Preencher `.thothfy/context/` com dado genérico ("empresa de tecnologia")
  só para destravar o fluxo — pare e pergunte antes de inventar.
- Sobrescrever `AGENTS.md`/`CLAUDE.md` inteiro em vez de inserir a seção
  marcada — sempre preserve o que já existia.
- Detectar `.claude/skills/` e `.codex/skills/` ao mesmo tempo e copiar para
  os dois sem perguntar — se ambos existirem, pergunte qual é o ativo.
