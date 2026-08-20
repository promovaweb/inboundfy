# REFERENCIA.md — thothfy-setup

Checklist e roteiro de entrevista para conduzir uma instalação nova do
Thothfy do início ao fim.

## Tabela de propriedade

<!-- markdownlint-disable MD013 -->

| Grupo | Caminho | Ação do setup | Ação das demais skills |
| --- | --- | --- | --- |
| Skills | diretório de skills detectado | Escolher destino e mandar o CLI instalar, atualizar ou reparar | Ler e executar |
| Metodologia | `.thothfy/*.md` | Mandar o CLI instalar, atualizar ou restaurar | Ler |
| Documentação | `.thothfy/docs/` | Mandar o CLI instalar, atualizar ou restaurar | Consultar |
| Ebook do usuário | `.thothfy/ebook/` | Mandar o CLI instalar, atualizar ou restaurar | Consultar |
| Identidade do framework | `.thothfy/brand/` | Mandar o CLI instalar, atualizar ou restaurar | Consultar |
| Templates | `.thothfy/templates/` | Mandar o CLI instalar, atualizar ou restaurar | Ler |
| Manifestos | `.thothfy/install.json` e `.thothfy/manifest.json` | Conferir versão, escolhas e integridade registradas pelo CLI | Não alterar |
| Candidatos | `.thothfy/fontes-candidatas.json` | Mandar o CLI descobrir caminhos, headings e hashes | Não alterar |
| Fontes do projeto | `.thothfy/FONTES-PROJETO.md` | Classificar candidatos e atualizar o inventário sem perder decisões anteriores | Ler as fontes relevantes |
| Contexto do usuário | `.thothfy/context/` | Criar ausentes e preservar existentes | Preencher pela skill `thothfy-contexto-*` |
| Configuração de canais | `.thothfy/context/canais.md` | Garantir presença e caminhos de saída | Preencher pela skill de contexto |
| Brainstorms | caminho registrado, padrão `brainstorms/` | Criar ou reparar o diretório | Escrever brainstorms |
| Conteúdo | caminho registrado, padrão `content/` | Criar ou reparar o diretório | Escrever pacotes e ativos |
| Instruções | bloco delimitado em `AGENTS.md`/`CLAUDE.md` | Inserir, atualizar e reparar o bloco | Respeitar, sem reescrever |
| Versão | `.thothfy/VERSAO.md` | Criar e atualizar | Ler |
| Migrações | `.thothfy/migracoes/` | Preservar versões legadas ou customizadas | Não alterar |

<!-- markdownlint-enable MD013 -->

## Checklist de instalação completa

- [ ] Diretório de skills do agente detectado ou definido pelo usuário.
- [ ] `skills/thothfy-*/` copiadas para esse diretório.
- [ ] `.thothfy/install.json` registra a mesma versão exibida pelo CLI.
- [ ] `.thothfy/manifest.json` contém os hashes dos arquivos gerenciados.
- [ ] `.thothfy/` criado com `VERSAO.md`, arquivos de metodologia,
      `FONTES-PROJETO.md`, `templates/brainstorm.md`,
      `templates/fontes-projeto.md`, `templates/context/` e `context/`.
- [ ] `.thothfy/docs/` contém o percurso completo de `user/` e `method/`.
- [ ] `.thothfy/ebook/` contém `VERSION`, `build.json`, PDF e EPUB da edição.
- [ ] `.thothfy/brand/` contém o manifesto e os arquivos de logo da versão.
- [ ] Markdown em maiúsculas pesquisados com as exclusões definidas.
- [ ] Se `brand/` existe, todos os Markdown internos foram inventariados,
      inclusive os nomes em minúsculas.
- [ ] `.thothfy/FONTES-PROJETO.md` registra caminhos relativos, classes,
      assuntos, uso e conflitos.
- [ ] `brainstorms/` criado (ou confirmado) na raiz do projeto.
- [ ] `content/` criado (ou confirmado) na raiz do projeto.
- [ ] `.thothfy/context/canais.md` registra os dois caminhos.
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
- [ ] Nomes estratégicos antigos foram migrados para
      `.thothfy/migracoes/`, quando existiam.
- [ ] Usuário recebeu a lista do que ainda falta preencher no restante de
      `.thothfy/context/`.
- [ ] Inventário final não contém item gerenciado ausente ou divergente.
- [ ] `thothfy doctor --strict` terminou com código de saída zero.

## Comandos do executor

O CLI executa as alterações que esta skill conduz. Sempre faça a simulação
antes de uma instalação, atualização ou reparo:

```bash
thothfy install --dry-run
thothfy install --yes
thothfy update --dry-run
thothfy update --yes
thothfy repair --dry-run
thothfy repair --yes
thothfy context scan
thothfy context ready --yes
thothfy doctor --strict
```

Quando o pacote não estiver instalado localmente, use
`npx @promovaweb/thothfy@latest` antes do subcomando. Em automações, acrescente
`--json` antes do subcomando para receber saída estruturada.

`context scan` registra somente caminho relativo, título, headings e SHA-256
em `.thothfy/fontes-candidatas.json`. O comando não classifica autoridade,
não copia conteúdo e não escreve nas fontes. Além dos Markdown em maiúsculas,
inclui todo arquivo `.md` sob `brand/`. Logos, fontes, tokens e imagens não
entram no JSON, mas continuam disponíveis no próprio diretório.

## Relatório de reconciliação

```markdown
# Reconciliação do Thothfy

- **Modo:** {instalação | atualização | reparo}
- **Versão:** {versão}
- **Criados:** {caminhos ou nenhum}
- **Atualizados:** {caminhos ou nenhum}
- **Restaurados:** {caminhos ou nenhum}
- **Preservados:** {caminhos com conteúdo do usuário}
- **Migrados:** {caminhos ou nenhum}
- **Pendentes de preenchimento:** {arquivos de context/ ou nenhum}
- **Fontes Markdown descobertas:** {quantidade e caminhos ou nenhuma}
- **Conflitos entre fontes:** {assuntos ou nenhum}
- **Resultado:** {aprovado | reprovado com motivo}
```

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
6. "Há motivo para não usar `brainstorms/` e `content/` na raiz do projeto?
   Se houver, quais caminhos devo registrar?" → `canais.md`.

Perguntas de aprofundamento (podem esperar, não impedem a liberação das
skills de produção): pessoas/porta-vozes, ofertas e preços, público e
personas, concorrentes, endereços oficiais, ferramentas citáveis,
proibições específicas além das genéricas já pré-preenchidas.

## Template de seção para `AGENTS.md`/`CLAUDE.md`

```markdown
<!-- thothfy:inicio -->
## Thothfy

Este projeto usa o Thothfy para copy, conteúdo e artefatos visuais de
marketing. Antes de produzir qualquer peça, leia `.thothfy/CONTEXTO.md`
(dados do usuário e precedência), `.thothfy/BRAINSTORM.md` (ideias),
`.thothfy/FONTES-PROJETO.md` (Markdown locais relevantes),
`.thothfy/METODOLOGIA.md` (pipeline editorial) e `.thothfy/SKILLS.md`
(catálogo de skills). Comece por `.thothfy/docs/user/README.md` quando
precisar do guia passo a passo. Leia no inventário as fontes ligadas à tarefa. Use
`thothfy-iniciar` para o fluxo automático a partir de uma ideia ou peça-base,
ou acione a skill especialista diretamente com um brief.
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
- Deixar os nomes estratégicos antigos junto aos numerados — isso cria dois
  gatilhos para a mesma fase.
- Permitir que uma skill de produção crie `.thothfy/`, restaure template ou
  escolha outro caminho de apoio — ela deve acionar `thothfy-setup`.
- Confundir restauração estrutural com preenchimento: o setup repõe o
  template ausente; a skill de contexto registra a informação do negócio.
- Copiar os Markdown descobertos para `.thothfy/` ou reescrevê-los durante o
  inventário. O setup registra caminhos relativos e preserva as fontes.
- Tratar todo arquivo em maiúsculas como fato confirmado. O setup classifica
  a finalidade e registra divergências antes de propor atualização do
  `context/`.
