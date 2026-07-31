# Thothfy

O Thothfy é um framework agnóstico de skills e metodologia para produzir copy,
conteúdo e artefatos visuais de marketing — texto e imagem — para qualquer
empresa, produto ou pessoa. Ele surgiu da extração e generalização do
método editorial usado internamente pela Promovaweb e virou um sistema
portável: o pacote npm fornece o CLI `thothfy`, e `thothfy-setup` conduz sua
instalação num projeto novo, criando
`.thothfy/` (metodologia, templates e dados do usuário), `brainstorms/`
(ideias pesquisadas) e `content/` (os ativos gerados). A partir daí,
`thothfy-brainstorm` desenvolve uma ideia curta e `thothfy-iniciar` roda o
fluxo completo até os artefatos auditados, sem coordenação manual das fases.

## Como o Thothfy é organizado

- `docs/user/`: manual passo a passo, da preparação do projeto à atualização,
  com percursos completos para brainstorm, campanha, pacote e peça avulsa.
- `docs/method/`: documentação técnica da arquitetura, runtime instalado,
  sequências, contratos, estados, validação, testes e evolução.
- `ebook/`: edição versionada do guia do usuário em PDF e EPUB, compilada a
  partir de `docs/user/` na ordem declarada em `reading-order.txt`.
- `context/`: templates de origem dos arquivos de dados do usuário —
  empresa, pessoas, produtos, serviços, ofertas, marca, público,
  concorrentes, endereços, canais, ferramentas, glossário, proibições e
  estruturas proibidas. `thothfy-setup` copia esses templates para
  `.thothfy/context/` em cada projeto instalado — é lá que o dado real de
  cada negócio vive. Veja `CONTEXTO.md`.
- `thothfy-setup`: responsável exclusiva por conduzir e conferir skills,
  metodologia,
  templates, arquivos de contexto e diretórios de saída nos caminhos
  canônicos. Usa o CLI como executor, repara instalações parciais sem
  sobrescrever informação preenchida pelo usuário e classifica os Markdown em
  maiúsculas encontrados no projeto. Se `brand/` existir, considera todos os
  Markdown da pasta, inclusive nomes em minúsculas, sem copiar ou alterar os
  ativos.
- `skills/`: biblioteca de skills prefixadas com `thothfy-`, organizada em
  sete grupos — base, contexto, brainstorm sequenciado, estratégia
  sequenciada, planejamento sequenciado, especialista por canal e
  validadora por asset — mais as wrappers e `thothfy-setup`. Veja
  `SKILLS.md` e `SKILL-AUTORIA.md`.
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
- `SKILL-AUTORIA.md`: o contrato que toda skill do Thothfy precisa seguir —
  grupo, sequência, frontmatter, contexto exigido e condições de aprovação.
- `INSTALACAO.md`: como `thothfy-setup` instala o framework num projeto novo
  — a estrutura de `.thothfy/` e `content/`, o ajuste de `AGENTS.md`/
  `CLAUDE.md` e o preenchimento do contexto inicial.
- `examples/`: pacotes de demonstração já preenchidos, com dado fictício,
  mostrando o resultado real de cada fase do pipeline — leitura de
  referência, nunca lida por skill em tempo de execução. Veja
  `examples/README.md`.

As skills podem aparecer no agente antes da preparação do projeto. Nesse
estado, qualquer skill que não seja `thothfy-setup` confere
`.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md`, avisa que o setup precisa
ser concluído ou reparado e encerra sem criar artefatos.

O inventário `.thothfy/FONTES-PROJETO.md` referencia arquivos como
`README.md`, `PRODUCT.md`, `BRAND.md` e `COPY.md` sem tirá-los dos caminhos
originais. Cada skill lê somente as fontes classificadas como relevantes para
a tarefa e mantém a precedência definida em `CONTEXTO.md`.

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
npx @promovaweb/thothfy@latest init --dry-run
npx @promovaweb/thothfy@latest init \
  --agent codex \
  --instruction-file AGENTS.md \
  --yes
npx @promovaweb/thothfy@latest doctor
```

Depois, peça ao agente para executar `thothfy-setup` e preencher o contexto
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

O Thothfy possui metodologia, contrato de skill, sete grupos funcionais,
sequências numeradas, wrappers autônomas, arquivos de contexto, estruturas
persuasivas e validação estrutural executável. `SKILLS.md` lista o catálogo
completo. A licença é proprietária e não concede redistribuição ou uso
comercial ao público; consulte [LICENSE](LICENSE).

## Validação

Execute na raiz do repositório:

```bash
npm run validar
```

A suíte executa os cenários do CLI, pareamento, hard gate, retorno à produtora,
segundo ciclo aprovado e descoberta de Markdown minúsculo em `brand/`. O
validador estrutural confere o contrato das skills, a continuidade das três
sequências, as dependências de `context/`, as referências editoriais, as
chamadas das wrappers e a presença das fixtures executáveis. A verificação
do ebook confere a ordem de leitura, os hashes das fontes e dos artefatos, a
navegação interna e a edição publicada em PDF e EPUB.

## Versões e releases

CLI e framework não possuem versões independentes. O SemVer de `package.json`
também identifica a edição do ebook, a tag `vX.Y.Z`, a GitHub Release e o
pacote público `@promovaweb/thothfy`. Consulte [RELEASING.md](RELEASING.md).
