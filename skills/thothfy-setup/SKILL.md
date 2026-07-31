---
name: thothfy-setup
description: >
  Instala, atualiza e repara o Thothfy, mantém os arquivos de apoio e
  inventaria Markdown em maiúsculas e a pasta brand/ do projeto sem alterar
  as fontes.
---

# Thothfy Setup

Porta de entrada para instalar, atualizar ou reparar o Thothfy. É a única
skill do catálogo responsável por decidir, conduzir e conferir a manutenção
dos arquivos de apoio e seus caminhos. Ela usa o CLI `thothfy` como executor
determinístico para criar `.thothfy/`, `brainstorms/`, `content/`, instalar
skills e manter a seção delimitada em `AGENTS.md`/`CLAUDE.md`. Não escreve
copy nem gera imagem.

## Escopo

Instala e mantém a estrutura do ambiente. A responsabilidade se divide assim:

- `thothfy-setup` mantém localização, presença, versão e integridade
  estrutural dos arquivos, além da classificação das fontes Markdown locais;
- o CLI `thothfy` executa cópia, hash, manifesto, descoberta técnica,
  atualização, reparo e diagnóstico sob comando da skill;
- `thothfy-contexto-*` preenche e altera o conteúdo de negócio em
  `.thothfy/context/`;
- as demais skills apenas leem os arquivos e escrevem nos diretórios de
  saída registrados.

Se outra skill encontrar arquivo de apoio ausente, caminho divergente ou
instalação parcial, ela deve acionar `thothfy-setup`. Não deve criar uma
estrutura alternativa sozinha.

## Contexto exigido

Nenhum de antemão — esta é a skill que cria o contexto inicial. Ela lê o
estado atual de `.thothfy/` (se existir) para decidir entre instalação nova
e atualização.

## Entrada esperada

Nada além da ativação. A skill começa por executar `thothfy doctor --json` e
detecta instalação nova, atualização ou reparo. O usuário pode indicar o
diretório de skills do agente, colar uma descrição da empresa, um link de site
ou um documento institucional para adiantar o preenchimento do contexto
mínimo, ou pedir uma atualização de versão em um projeto já instalado.

## Fluxo

### Inventário e escolha do modo

1. Execute `thothfy doctor --json`. Quando o binário local não existir, use
   `npx @promovaweb/thothfy@latest doctor --json`.
2. Leia o diagnóstico e compare com a tabela de propriedade de
   `REFERENCIA.md`.
3. Classifique a execução:
   - **instalação:** `.thothfy/` ainda não existe;
   - **atualização:** a versão disponível difere de `.thothfy/VERSAO.md`;
   - **reparo:** a versão é a mesma, mas falta arquivo, diretório, skill ou
     seção de instrução, ou algum item está fora do caminho canônico.
4. Registre o inventário com os estados `presente`, `ausente`, `divergente`
   ou `legado`. Siga automaticamente para o modo encontrado.
5. Execute primeiro o modo com `--dry-run`. Revise os caminhos e então repita
   com `--yes`. Use `--force` somente quando o relatório mostrar a cópia de
   preservação que receberá cada customização.

### Descoberta de contexto do projeto

1. Execute `thothfy context scan`. O CLI percorre o projeto procurando
   arquivos `.md` cujo nome, sem a extensão, contenha ao menos uma letra e
   tenha todas as letras em maiúsculas. Números, hífens e sublinhados são
   aceitos. O inventário técnico, com headings e SHA-256, fica em
   `.thothfy/fontes-candidatas.json`.
2. Se `brand/` existir na raiz, inclua todos os Markdown do diretório,
   independentemente da capitalização. Registre também que logos, tokens,
   fontes e outros ativos dali devem ser consultados no próprio caminho
   pelas skills visuais; não copie esses ativos para `.thothfy/`.
3. Não entre em `.git/`, `.thothfy/`, `.codex/`, `.claude/`, `.agents/`,
   `node_modules/`, `vendor/`, `.venv/`, `dist/`, `build/`, `coverage/`, nos
   diretórios registrados para brainstorms e conteúdo gerado, nem em
   submódulos Git. Inclua um caminho ignorado somente quando o usuário pedir.
4. Para cada candidato, leia o título, o frontmatter e os headings. Leia o
   corpo completo apenas quando a classificação ou a tarefa exigir.
5. Classifique cada arquivo como `instrução`, `factual`, `editorial`,
   `operacional` ou `referência`. Registre os assuntos e marque o uso como
   `ativo`, `complementar`, `conflitante` ou `ignorado`.
6. Na primeira execução, complete `.thothfy/FONTES-PROJETO.md` a partir do
   template instalado. Nas próximas, preserve as classificações existentes e
   reconcilie-as com `.thothfy/fontes-candidatas.json`. Não copie, mova ou
   altere os arquivos encontrados.
7. Quando duas fontes divergirem, registre o conflito. Preserve
   `.thothfy/context/` e peça confirmação antes de substituir um fato já
   preenchido.

### Instalação nova

1. Confirme o modo `instalação`.
2. Detecte o diretório de skills que o agente do usuário já usa
   (`.claude/skills/`, `.codex/skills/` ou equivalente). Se nenhum existir,
   pergunte ao usuário qual convenção adotar antes de copiar qualquer
   skill.
3. Execute `thothfy init --dry-run` com as opções de agente e arquivo de
   instrução escolhidas; revise o plano e repita com `--yes`.
4. O CLI cria `.thothfy/` na raiz do projeto com a estrutura descrita em
   `INSTALACAO.md`: `VERSAO.md`, os arquivos de metodologia
   (`BRAINSTORM.md`, `METODOLOGIA.md`, `ESCRITA.md`, `CONTEXTO.md`,
   `ESTRUTURAS-PERSUASIVAS.md`, `LIMPEZA-MATERIAL-BRUTO.md`, `TRADUCAO.md`,
   `SKILL-AUTORIA.md`, `SKILLS.md`), `FONTES-PROJETO.md`, a documentação
   completa de `docs/` em `.thothfy/docs/`,
   a edição publicada de `ebook/` em `.thothfy/ebook/`,
   a identidade visual de `brand/` em `.thothfy/brand/`,
   `templates/brainstorm.md`, `templates/fontes-projeto.md`,
   `templates/context/` (cópia read-only dos 15 arquivos de `context/`) e
   `context/` (cópia editável dos mesmos arquivos).
5. Crie `brainstorms/` e `content/` na raiz do projeto (ou confirme
   diretórios equivalentes) e registre os caminhos em
   `.thothfy/context/canais.md`.
6. Verifique se o projeto já tem `AGENTS.md` e/ou `CLAUDE.md` na raiz.
   - Se tiver um ou os dois, insira uma seção curta (marcada com um
     comentário identificável, ex.: `<!-- thothfy:inicio -->` /
     `<!-- thothfy:fim -->`) apontando para `.thothfy/CONTEXTO.md`,
     `.thothfy/FONTES-PROJETO.md`, `.thothfy/METODOLOGIA.md` e
     `.thothfy/SKILLS.md` como fontes do framework, usando o template de
     seção de `REFERENCIA.md`.
     Nunca remova ou reescreva instrução já existente do projeto fora dessa
     seção.
   - Se não tiver nenhum dos dois, pergunte ao usuário qual arquivo criar
     antes de gerar um novo `AGENTS.md`/`CLAUDE.md` do zero.
7. Identifique o mínimo obrigatório de `.thothfy/context/` ainda faltante:
   `empresa.md`, `marca-voz.md`, um item em `produtos.md` ou `servicos.md`,
   e um canal ativo em `canais.md`.
8. Pergunte ao usuário os dados faltantes, um bloco por vez, sem inventar
   valor, seguindo o roteiro de entrevista de `REFERENCIA.md`. Use primeiro
   as fontes ativas de `.thothfy/FONTES-PROJETO.md`; extraia o que puder e
   confirme antes de gravar.
9. Grave cada resposta no arquivo correspondente em `.thothfy/context/`,
   preservando a estrutura de seções do template — nunca remova seção.
10. Ao concluir o mínimo, informe ao usuário: onde as skills foram
    instaladas, a estrutura de `.thothfy/`, `brainstorms/` e `content/`
    criada, o que foi ajustado em `AGENTS.md`/`CLAUDE.md`, e quais arquivos de
    `.thothfy/context/` ainda estão como template — com a skill de
    manutenção correspondente para preencher cada um sob demanda.
11. Depois de preencher e conferir o mínimo, execute
    `thothfy context ready --yes`.
12. Execute `thothfy doctor --strict`. Só conclua com código de saída zero.

Use o checklist completo de instalação em `REFERENCIA.md` antes de declarar
a instalação concluída.

### Atualização de versão

1. Compare a versão exibida por `thothfy --version` com a versão registrada
   no diagnóstico.
2. Execute `npx @promovaweb/thothfy@latest update --dry-run`, revise o plano e
   repita com `--yes`. O CLI atualiza skills, templates, documentação, ebook,
   identidade visual e metodologia como uma única versão.
3. Detecte os quatro nomes estratégicos sem número listados em
   `INSTALACAO.md`. Mova cada diretório encontrado para
   `.thothfy/migracoes/skills-legadas/<data>/` depois de copiar o nome novo.
   Não apague a versão antiga nem misture customizações com a skill nova.
4. Nunca sobrescreva `.thothfy/context/` — esse diretório só muda pelas
   skills de manutenção de contexto ou por edição direta do usuário.
5. Avise o usuário sobre qualquer arquivo novo em `.thothfy/templates/`
   sem equivalente ainda em `.thothfy/context/`, para preenchimento sob
   demanda.
6. Confira a versão registrada pelo CLI em `.thothfy/install.json`.
7. Reconcilie `.thothfy/FONTES-PROJETO.md` com a descoberta atual.
8. Execute `thothfy doctor --strict`.

### Reparo e reconciliação

1. Execute `thothfy repair --dry-run`, revise o plano e repita com `--yes`.
   O CLI repõe metodologia, documentação, ebook, identidade visual e templates
   ausentes a partir da versão instalada.
2. Restaure `.thothfy/FONTES-PROJETO.md` quando ausente e atualize o
   inventário pela descoberta atual, sem alterar os Markdown encontrados.
3. Para cada um dos 15 arquivos esperados em `.thothfy/context/`:
   - preserve o arquivo quando ele existir, mesmo que parcialmente
     preenchido;
   - quando ele estiver ausente, copie o template correspondente, marque o
     item como restaurado sem conteúdo de negócio e encaminhe o
     preenchimento à skill `thothfy-contexto-*` responsável;
   - nunca substitua arquivo existente pela versão de
     `.thothfy/templates/context/`.
4. Reinstale skill ausente e atualize skill gerenciada pela versão atual. Se
   houver customização local, preserve uma cópia em
   `.thothfy/migracoes/skills-customizadas/<data>/` antes da atualização.
5. Recrie `brainstorms/` e `content/` quando ausentes. Se
   `.thothfy/context/canais.md` registrar outro caminho válido, respeite-o e
   não crie um segundo destino concorrente.
6. Restaure ou atualize somente o bloco delimitado do Thothfy em
   `AGENTS.md`/`CLAUDE.md`, sem alterar instruções externas ao bloco.
7. Mova nomes legados conforme `INSTALACAO.md`.
8. Execute `thothfy doctor --strict`. Não conclua enquanto houver item
   gerenciado ausente, alterado ou fora do caminho canônico.
9. Entregue o relatório de reconciliação de `REFERENCIA.md`, separando itens
   criados, atualizados, restaurados, preservados, migrados e pendentes de
   preenchimento.

## Saída

- Skills copiadas para o diretório do agente do usuário.
- `.thothfy/` criado ou atualizado pelo CLI, com `install.json`,
  `manifest.json` e a estrutura de `INSTALACAO.md`.
- `.thothfy/docs/user/` e `.thothfy/docs/method/` sincronizados com a versão.
- `.thothfy/ebook/` sincronizado com o PDF e o EPUB do guia do usuário.
- `.thothfy/brand/` sincronizado com a identidade visual da versão.
- `.thothfy/FONTES-PROJETO.md` atualizado com os Markdown descobertos.
- `brainstorms/` e `content/` criados na raiz do projeto (instalação nova).
- Seção de referência ao Thothfy em `AGENTS.md`/`CLAUDE.md` (instalação
  nova ou quando ainda ausente).
- Relatório do CLI e relatório semântico da skill com o estado de cada grupo
  gerenciado.

## Validação

- Nenhum campo do mínimo obrigatório (passo 7) continua como placeholder ao
  final de uma instalação nova.
- Nenhum dado foi inventado: todo campo preenchido veio do usuário ou de
  material que ele forneceu explicitamente.
- `AGENTS.md`/`CLAUDE.md` do usuário preservou toda instrução prévia fora da
  seção do Thothfy.
- `.thothfy/FONTES-PROJETO.md` usa caminhos relativos, respeita as exclusões,
  classifica cada candidato e registra conflitos sem alterar a fonte.
- `brand/`, quando existe, teve todos os Markdown inventariados sem que
  nenhum arquivo ou ativo fosse copiado ou alterado.
- `.thothfy/context/` nunca foi sobrescrito numa atualização de versão.
- Nenhum nome estratégico antigo permaneceu no diretório ativo de skills;
  versões encontradas foram preservadas em `.thothfy/migracoes/`.
- Todos os arquivos de apoio estão nos caminhos canônicos de
  `INSTALACAO.md`.
- A documentação completa está presente em `.thothfy/docs/`, com os índices
  de usuário e método.
- A edição indicada por `.thothfy/ebook/VERSION` possui PDF, EPUB e
  `build.json` no mesmo diretório.
- `.thothfy/brand/logo/icon.svg` e `.thothfy/brand/logo/icon.png` estão
  presentes e registrados no manifesto.
- Arquivo ausente em `.thothfy/context/` foi restaurado como template e
  sinalizado para preenchimento, nunca completado com informação inventada.
- Nenhuma skill fora de `thothfy-setup` precisou criar ou mover arquivo de
  apoio para concluir a instalação.
- `thothfy doctor --strict` terminou com código de saída zero.

## Idempotência

Rodar `thothfy-setup` novamente sempre executa o diagnóstico e o inventário.
Quando a versão e a estrutura estiverem corretas, somente
`.thothfy/fontes-candidatas.json` e a classificação correspondente em
`.thothfy/FONTES-PROJETO.md` podem mudar para refletir fontes adicionadas,
removidas ou alteradas. Em atualização ou reparo, nunca sobrescreve
`.thothfy/context/` existente nem conteúdo externo ao bloco do Thothfy em
`AGENTS.md`/`CLAUDE.md`.
