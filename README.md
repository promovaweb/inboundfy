# Inboundfy

O Inboundfy é um framework de inbound marketing baseado em IA para pesquisar,
organizar, planejar, escrever, revisar e distribuir conteúdo. O pacote npm
fornece o CLI `inboundfy`, e `inboundfy-setup` conduz sua instalação num
projeto novo. As skills organizam acervo, estratégia, copy, SEO, GEO,
anti-slop, canais, calendário e pipeline sem misturar método reutilizável com
dados de um negócio.

## Separação entre framework e projeto

O repositório `inboundfy/` guarda método, skills, templates, código e
documentação reutilizável. Ao instalar, o framework vai para
`.inboundfy/framework/`. As informações da empresa e as escolhas do projeto
ficam em `.inboundfy/context/`; estratégia, pipeline, índices e estado da
instalação ficam diretamente em `.inboundfy/`. O trabalho e as saídas ficam em
`acervo/`, `canais/` e `calendario/`.

O setup conduz a entrevista de empresa, produtos, serviços, endereço físico,
dados legais, contatos, URLs oficiais, redes sociais, personas, voz,
proibições, dicionário, aprendizado, pipeline e canais. Ele
preserva preenchimentos existentes e cria somente o que estiver ausente.

## Como o Inboundfy é organizado

- `docs/user/`: manual passo a passo, da preparação do projeto à atualização,
  com percursos completos para brainstorm, campanha, pacote e peça avulsa.
- `docs/method/`: documentação técnica da arquitetura, runtime instalado,
  sequências, contratos, estados, validação, testes e evolução.
- `skills/inboundfy-anti-slop/ETAPAS.md`: cadência A0 a A6, com uma auditoria
  própria para entrada, processado, base, estratégia, rascunho, peça e pacote.
- `.inboundfy/context/aprendizado.md`: memória do projeto para sugestões, correções,
  alinhamentos e dicas, sempre com alcance confirmado.
- `ebook/`: edição versionada do guia do usuário em PDF e EPUB, compilada a
  partir de `docs/user/` na ordem declarada em `reading-order.txt`.
- `context/`: templates de origem dos arquivos de dados do usuário —
  empresa, pessoas, produtos, serviços, ofertas, marca, público,
  concorrentes, endereços, links, canais, ferramentas, glossário, proibições,
  aprendizado e estruturas proibidas. `inboundfy-setup` copia esses templates para
  `.inboundfy/context/` em cada projeto instalado — é lá que o dado real de
  cada negócio vive. Veja `CONTEXTO.md`.
- `inboundfy-setup`: responsável exclusiva por conduzir e conferir skills,
  metodologia,
  templates, arquivos de contexto e diretórios de saída nos caminhos
  canônicos. Usa o CLI como executor, repara instalações parciais sem
  sobrescrever informação preenchida pelo usuário e classifica os Markdown em
  maiúsculas encontrados no projeto. Se `brand/` existir, considera todos os
  Markdown da pasta, inclusive nomes em minúsculas, sem copiar ou alterar os
  ativos.
- `skills/`: biblioteca de 114 skills prefixadas com `inboundfy-`, com etapas
  agrupadas em referências internas, namespaces `inboundfy-copy-*` e
  `inboundfy-growth-*`, referências compartilhadas em `skills/_shared/`,
  catálogo estruturado em `skills/catalogo.json` e interface de agente em
  `agents/openai.yaml` dentro de cada skill. Veja `SKILLS.md`,
  `SKILL-AUTORIA.md` e `docs/method/09-arquitetura-das-skills.md`.
- `BRAINSTORM.md`: fluxo que recebe uma ideia, consulta os dados do negócio,
  faz perguntas somente quando necessário, pesquisa fontes e salva
  `brainstorms/<data>-<slug>/brainstorm.md`.
- `ESTRATEGIA.md`: a camada de planejamento estratégico de agência — kickoff
  de campanha, pesquisa de mercado, plano de campanha multicanal e
  calendário editorial — que antecede qualquer material bruto entrar no
  pipeline.
- `METODOLOGIA.md`: o pipeline editorial completo, da entrada de material bruto
  (ou de um item alocado pelo calendário) até o artefato final auditado.
- `ESCRITA.md`: princípios agnósticos de escrita humana e anti-slop que valem
  para qualquer canal e qualquer voz de marca.
- `ESTRUTURAS-PERSUASIVAS.md`: AIDA, PAS, PASTOR e FAB — quando usar cada
  estrutura e como cada skill de canal comercial a aplica.
- `LIMPEZA-MATERIAL-BRUTO.md`: regras de saneamento de texto colado,
  transcrição e nota solta — o que pode e não pode ser corrigido antes de
  qualquer voz editorial entrar em cena.
- `TRADUCAO.md`: quando manter um termo no idioma original e quando
  traduzir, com exemplo ilustrativo e lógica de correção canônica de termo
  mal transcrito.
- `SKILL-AUTORIA.md`: o contrato que toda skill do Inboundfy precisa seguir —
  grupo, sequência, frontmatter, contexto exigido e condições de aprovação.
- `INSTALACAO.md`: como `inboundfy-setup` instala o framework num projeto novo
  — a estrutura de `.inboundfy/`, `acervo/`, `canais/` e `calendario/`,
  o ajuste de `AGENTS.md`/
  `CLAUDE.md` e o preenchimento do contexto inicial.
- `examples/`: pacotes de demonstração já preenchidos, com dado fictício,
  mostrando o resultado real de cada fase do pipeline — leitura de
  referência, nunca lida por skill em tempo de execução. Veja
  `examples/README.md`.

As skills podem aparecer no agente antes da preparação do projeto. Nesse
estado, qualquer skill que não seja `inboundfy-setup` confere
`.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`, avisa que o
setup precisa
ser concluído ou reparado e encerra sem criar artefatos.

O registro `.inboundfy/fontes-projeto.md` referencia arquivos como
`README.md`, `PRODUCT.md`, `BRAND.md` e `COPY.md` sem tirá-los dos caminhos
originais. Cada skill lê somente as fontes classificadas como relevantes para
a tarefa e mantém a precedência definida em `CONTEXTO.md`.

## Capacidades estratégicas nativas

Além das sequências e dos especialistas de canal, o Inboundfy inclui skills de
produto e mercado, estratégia, copywriting, edição, pesquisa de cliente,
concorrência, oferta, psicologia aplicada, SEO, GEO, CRO, métricas,
atribuição, experimentação, lançamento, materiais ricos e anti-slop editorial.
Todas leem os mesmos arquivos de voz, personas, proibições, dicionário e
aprendizado aplicável.

O aprendizado começa no arquivo `.inboundfy/context/aprendizado.md`. Uma sugestão
local pode alterar apenas uma peça; uma orientação confirmada para o projeto
também atualiza `context/marca-voz.md`, `context/glossario.md` ou
`context/proibicoes.md` quando esse for o domínio correto. O histórico preserva
a mensagem original, a aplicação e o alcance confirmado.

O anti-slop não fica restrito à revisão final. A orquestração usa os marcos A0
a A6 para conferir a entrada, os derivados do acervo, a direção de conteúdo,
o início da redação, a peça completa e o conjunto de peças antes do pipeline.

```bash
inboundfy project sync
inboundfy acervo add "Título" --file entrada.md
inboundfy acervo process 0001
inboundfy content create blog "Título da peça" --persona persona-01 --acervo 0001
inboundfy content status 0001 aprovado
inboundfy calendario add 2026-09-20 0001
inboundfy doctor --strict
```

## Arquitetura das skills

Cada skill tem três camadas complementares:

1. `SKILL.md` define ativação, contexto, entrada, fluxo, saída, validação,
   idempotência e responsabilidade do grupo.
2. `REFERENCIA.md` traz o template, o exemplo preenchido, a lista binária,
   erros comuns, campos específicos e referências para leitura.
3. `agents/openai.yaml` descreve a interface que o agente pode apresentar, e
   `skills/catalogo.json` registra o grupo e o contrato de entrada, saída,
   validação e encaminhamento.

As cinco referências de `skills/_shared/` padronizam preflight, artefatos,
interação, handoff, validação, retomada e contexto editorial. O script
`scripts/gerenciar-skills.mjs` mantém esse padrão. Todos os scripts próprios e
comandos de linha do pacote usam Node.js:

```bash
npm run skills:check
npm run skills:enriquecer
```

O primeiro comando só confere a biblioteca. O segundo amplia arquivos
existentes e atualiza o catálogo; ele preserva referências já presentes e cria
somente interfaces ausentes.

## Ordem de leitura

1. `docs/user/README.md` para adotar e operar o framework desde o começo.
2. `docs/method/README.md` para implementar, auditar ou evoluir o framework.
3. `INSTALACAO.md` na primeira adoção do framework em um projeto novo.
4. `CONTEXTO.md` para entender os arquivos de dados e a precedência entre eles.
5. `BRAINSTORM.md` quando a entrada for uma ideia ainda sem brief ou material
   suficiente para produção.
6. `ESTRATEGIA.md` quando a tarefa envolver campanha nova, pesquisa de
   mercado, plano multicanal ou calendário editorial — antes de existir
   material bruto ou pacote.
7. `METODOLOGIA.md` para entender as fases do pipeline antes de produzir
   qualquer peça a partir de material já existente.
8. `ESCRITA.md` sempre que a tarefa envolver redação, revisão ou auditoria de
   texto, `ESTRUTURAS-PERSUASIVAS.md` quando a peça tiver objetivo
   comercial, `LIMPEZA-MATERIAL-BRUTO.md` ao processar material bruto e
   `TRADUCAO.md` ao decidir se um termo deve ser traduzido.
9. `SKILLS.md` para escolher a skill certa por grupo, fase estratégica ou do
   pipeline, ou canal.
10. `SKILL-AUTORIA.md` somente quando a tarefa for criar ou alterar uma skill.

## Instalação pelo npm

Na raiz do projeto consumidor:

```bash
npx @promovaweb/inboundfy@latest install --dry-run
npx @promovaweb/inboundfy@latest install \
  --agent codex \
  --instruction-file AGENTS.md \
  --yes
npx @promovaweb/inboundfy@latest doctor
```

Depois, peça ao agente para executar `inboundfy-setup` e preencher o contexto
inicial. O guia completo está em
[Instalação e preparação](docs/user/02-instalacao.md).

## Escopo

- kickoff de campanha, pesquisa de mercado e plano de campanha multicanal;
- calendário editorial recorrente, somando cadência orgânica e campanha ativa;
- pesquisa, planejamento, redação e revisão de copy;
- estratégia de conteúdo e distribuição por canal;
- SEO técnico, editorial e orientado à intenção de busca;
- definição de mensagens, ofertas e jornadas de comunicação;
- geração de artefatos visuais — capas, cards, thumbnails, carrosséis e slides;
- auditoria de qualidade, consistência e evidências;
- criação e manutenção dos próprios dados do usuário como skills de primeira
  classe, não como configuração externa ao framework.

Esse escopo cobre o trabalho fim a fim de uma agência de marketing e
conteúdo: da decisão de negócio que abre uma campanha (`ESTRATEGIA.md`) até
o artefato final auditado de cada canal (`METODOLOGIA.md`).

## Princípios

- **Agnosticismo de negócio:** nenhuma skill ou metodologia cita uma empresa,
  produto, pessoa ou marca específica. Tudo isso vive em `context/` e é lido
  em tempo de execução.
- **Aplicação verificável:** cada skill produz um artefato, uma análise ou uma
  conferência observável, nunca apenas uma resposta em texto corrido.
- **Escrita humana:** automação apoia pesquisa e execução, mas a publicação
  exige leitura crítica, responsabilidade editorial e adequação ao canal e à
  voz registrada em `context/marca-voz.md`.
- **SEO com intenção:** palavras-chave não substituem a compreensão da dúvida,
  da tarefa ou da escolha que levou alguém até o conteúdo.
- **Evidência e limite:** recomendações separam fatos confirmados no
  `context/`, hipóteses de pesquisa e decisões editoriais assumidas na hora.
- **Portabilidade:** toda skill declara os arquivos de `context/` de que
  depende, consulta as fontes locais inventariadas e sabe o que fazer quando
  um apoio ainda não existe ou está incompleto.

## Estado do projeto

O Inboundfy possui metodologia, contrato de skill, 114 skills distribuídas em
grupos de entrada, acervo, base, contexto, brainstorm, estratégia,
planejamento, especialistas, validadoras, qualidade e capacidades, além do
orquestrador. Cada skill tem referência, interface e registro no catálogo.
`SKILLS.md` lista o catálogo completo. A licença é proprietária e não concede
redistribuição ou uso comercial ao público; consulte [LICENSE](LICENSE).

## Validação

Execute na raiz do repositório:

```bash
npm run skills:check
npm run validar
```

A suíte executa os cenários do CLI, pareamento, hard gate, retorno à produtora,
segundo ciclo aprovado e descoberta de Markdown minúsculo em `brand/`. O
validador estrutural confere o contrato das skills, a arquitetura comum, as
interfaces, o catálogo, a continuidade das três sequências, as dependências de
`context/`, as referências editoriais, as chamadas das wrappers e a presença
das fixtures executáveis. A verificação do ebook confere a ordem de leitura, os
hashes das fontes e dos artefatos, a navegação interna e a edição publicada em
PDF e EPUB.

## Versões e releases

CLI e framework não possuem versões independentes. O SemVer de `package.json`
também identifica a edição do ebook, a tag `vX.Y.Z`, a GitHub Release e o
pacote público `@promovaweb/inboundfy`. Consulte [RELEASING.md](RELEASING.md).
