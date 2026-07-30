---
name: thothfy-setup
description: >
  Instala, atualiza e repara o Thothfy, mantém os arquivos de apoio e
  inventaria Markdown em maiúsculas e a pasta brand/ do projeto sem alterar
  as fontes.
---

# Thothfy Setup

Porta de entrada para instalar, atualizar ou reparar o Thothfy. É a única
skill do catálogo responsável por criar, mover, restaurar e reconciliar os
arquivos de apoio e seus caminhos. Ela pode criar `.thothfy/`,
`brainstorms/`, `content/`, instalar skills e manter a seção delimitada em
`AGENTS.md`/`CLAUDE.md`. Não escreve copy nem gera imagem.

## Escopo

Instala e mantém a estrutura do ambiente. A responsabilidade se divide assim:

- `thothfy-setup` mantém localização, presença, versão e integridade
  estrutural dos arquivos, além do inventário das fontes Markdown locais;
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

Nada além da ativação. A skill detecta automaticamente instalação nova,
atualização ou reparo. O usuário pode
opcionalmente indicar o diretório de skills do seu agente (se não for
detectável), colar uma descrição da empresa, um link de site ou um
documento institucional para adiantar o preenchimento do contexto mínimo, ou
pedir uma atualização de versão em um projeto já instalado.

## Fluxo

### Inventário e escolha do modo

1. Leia a estrutura atual e compare com a tabela de propriedade de
   `REFERENCIA.md`.
2. Pesquise os Markdown em maiúsculas do projeto conforme a seção
   **Descoberta de contexto do projeto** e prepare
   `.thothfy/FONTES-PROJETO.md`.
3. Classifique a execução:
   - **instalação:** `.thothfy/` ainda não existe;
   - **atualização:** a versão disponível difere de `.thothfy/VERSAO.md`;
   - **reparo:** a versão é a mesma, mas falta arquivo, diretório, skill ou
     seção de instrução, ou algum item está fora do caminho canônico.
4. Registre o inventário com os estados `presente`, `ausente`, `divergente`
   ou `legado`. Siga automaticamente para o modo encontrado.

### Descoberta de contexto do projeto

1. Percorra o projeto procurando arquivos `.md` cujo nome, sem a extensão,
   contenha ao menos uma letra e tenha todas as letras em maiúsculas. Aceite
   números, hífens e sublinhados no restante do nome.
   Use `scripts/inventariar-fontes-projeto.py` desta skill para obter a lista,
   os headings e o hash de cada candidato. Passe os caminhos configurados de
   brainstorms e conteúdo gerado com `--excluir`.
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
6. Gere ou atualize `.thothfy/FONTES-PROJETO.md` a partir de
   `templates/fontes-projeto.md`, usando caminhos relativos à raiz. Não copie,
   mova ou altere os arquivos encontrados.
7. Quando duas fontes divergirem, registre o conflito. Preserve
   `.thothfy/context/` e peça confirmação antes de substituir um fato já
   preenchido.

### Instalação nova

1. Confirme o modo `instalação`.
2. Detecte o diretório de skills que o agente do usuário já usa
   (`.claude/skills/`, `.codex/skills/` ou equivalente). Se nenhum existir,
   pergunte ao usuário qual convenção adotar antes de copiar qualquer
   skill.
3. Copie `skills/thothfy-*/` deste repositório para o diretório detectado.
4. Crie `.thothfy/` na raiz do projeto com a estrutura descrita em
   `INSTALACAO.md`: `VERSAO.md`, os arquivos de metodologia
   (`BRAINSTORM.md`, `METODOLOGIA.md`, `ESCRITA.md`, `CONTEXTO.md`,
   `ESTRUTURAS-PERSUASIVAS.md`, `LIMPEZA-MATERIAL-BRUTO.md`, `TRADUCAO.md`,
   `SKILL-AUTORIA.md`, `SKILLS.md`), `FONTES-PROJETO.md`,
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
11. Grave a versão instalada e a data em `.thothfy/VERSAO.md`, seguindo o
    template de `REFERENCIA.md`.
12. Execute a reconciliação final descrita abaixo.

Use o checklist completo de instalação em `REFERENCIA.md` antes de declarar
a instalação concluída.

### Atualização de versão

1. Compare a versão registrada em `.thothfy/VERSAO.md` com a versão atual do
   Thothfy disponível como fonte.
2. Atualize `skills/thothfy-*/` no diretório de skills do agente,
   `.thothfy/templates/` e os arquivos de metodologia em `.thothfy/`.
3. Detecte os quatro nomes estratégicos sem número listados em
   `INSTALACAO.md`. Mova cada diretório encontrado para
   `.thothfy/migracoes/skills-legadas/<data>/` depois de copiar o nome novo.
   Não apague a versão antiga nem misture customizações com a skill nova.
4. Nunca sobrescreva `.thothfy/context/` — esse diretório só muda pelas
   skills de manutenção de contexto ou por edição direta do usuário.
5. Avise o usuário sobre qualquer arquivo novo em `.thothfy/templates/`
   sem equivalente ainda em `.thothfy/context/`, para preenchimento sob
   demanda.
6. Atualize `.thothfy/VERSAO.md`.
7. Atualize `.thothfy/FONTES-PROJETO.md` com a descoberta atual.
8. Execute a reconciliação final descrita abaixo.

### Reparo e reconciliação

1. Reponha arquivos de metodologia e templates ausentes a partir da fonte
   atual do Thothfy.
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
8. Compare novamente o inventário. Não conclua enquanto houver item
   gerenciado ausente ou fora do caminho canônico.
9. Entregue o relatório de reconciliação de `REFERENCIA.md`, separando itens
   criados, atualizados, restaurados, preservados, migrados e pendentes de
   preenchimento.

## Saída

- Skills copiadas para o diretório do agente do usuário.
- `.thothfy/` criado ou atualizado, com a estrutura de `INSTALACAO.md`.
- `.thothfy/FONTES-PROJETO.md` atualizado com os Markdown descobertos.
- `brainstorms/` e `content/` criados na raiz do projeto (instalação nova).
- Seção de referência ao Thothfy em `AGENTS.md`/`CLAUDE.md` (instalação
  nova ou quando ainda ausente).
- Relatório de reconciliação com o estado de cada grupo gerenciado.

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
- Arquivo ausente em `.thothfy/context/` foi restaurado como template e
  sinalizado para preenchimento, nunca completado com informação inventada.
- Nenhuma skill fora de `thothfy-setup` precisou criar ou mover arquivo de
  apoio para concluir a instalação.

## Idempotência

Rodar `thothfy-setup` novamente sempre executa o inventário. Quando a versão
e a estrutura estiverem corretas, somente
`.thothfy/FONTES-PROJETO.md` pode mudar para refletir fontes adicionadas,
removidas ou alteradas. Em atualização ou reparo, nunca sobrescreve
`.thothfy/context/` existente nem conteúdo externo ao bloco do Thothfy em
`AGENTS.md`/`CLAUDE.md`.
