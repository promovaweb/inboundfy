# Thothfy

O Thothfy é um framework agnóstico de skills e metodologia para produzir copy,
conteúdo e artefatos visuais de marketing — texto e imagem — para qualquer
empresa, produto ou pessoa. Ele nasceu como a extração e generalização do
método editorial usado internamente pela Promovaweb e virou um sistema
portável: `thothfy-setup` instala o framework num projeto novo, criando
`.thothfy/` (metodologia, templates e dados do usuário) e `content/` (os
ativos gerados). A partir daí, `thothfy-iniciar` roda o fluxo completo — de
material bruto a artefato auditado — sem que o usuário precise acionar cada
skill manualmente.

## Como o Thothfy é organizado

- `context/`: templates de origem dos arquivos de dados do usuário —
  empresa, pessoas, produtos, serviços, ofertas, marca, público,
  concorrentes, endereços, canais, ferramentas, glossário, proibições e
  estruturas proibidas. `thothfy-setup` copia esses templates para
  `.thothfy/context/` em cada projeto instalado — é lá que o dado real de
  cada negócio vive. Veja `CONTEXTO.md`.
- `skills/`: biblioteca de skills prefixadas com `thothfy-`, organizadas em
  cinco grupos — base (apoio mecânico), contexto (dado de negócio),
  estratégia (planejamento de campanha e calendário, sem sequência numerada
  fixa), planejamento (pipeline sequenciado, fases 00-06) e especialista por
  canal (item avulso) — mais `thothfy-setup` e a skill mestra
  `thothfy-iniciar`. Veja `SKILLS.md` e `SKILL-AUTORIA.md`.
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
  grupo, sequência, frontmatter, contexto exigido e critério de validação.
- `INSTALACAO.md`: como `thothfy-setup` instala o framework num projeto novo
  — a estrutura de `.thothfy/` e `content/`, o ajuste de `AGENTS.md`/
  `CLAUDE.md` e o preenchimento do contexto inicial.
- `examples/`: pacotes de demonstração já preenchidos, com dado fictício,
  mostrando o resultado real de cada fase do pipeline — leitura de
  referência, nunca lida por skill em tempo de execução. Veja
  `examples/README.md`.

## Ordem de leitura

1. `INSTALACAO.md` na primeira adoção do framework em um projeto novo.
2. `CONTEXTO.md` para entender os arquivos de dados e a precedência entre eles.
3. `ESTRATEGIA.md` quando a tarefa envolver campanha nova, pesquisa de
   mercado, plano multicanal ou calendário editorial — antes de existir
   material bruto ou pacote.
4. `METODOLOGIA.md` para entender as fases do pipeline antes de produzir
   qualquer peça a partir de material já existente.
5. `ESCRITA.md` sempre que a tarefa envolver redação, revisão ou auditoria de
   texto, `ESTRUTURAS-PERSUASIVAS.md` quando a peça tiver objetivo
   comercial, `LIMPEZA-MATERIAL-BRUTO.md` ao processar material bruto e
   `TRADUCAO.md` ao decidir se um termo deve ser traduzido.
6. `SKILLS.md` para escolher a skill certa por grupo, fase estratégica ou do
   pipeline, ou canal.
7. `SKILL-AUTORIA.md` somente quando a tarefa for criar ou alterar uma skill.

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
  depende e o que fazer quando um deles ainda não existe ou está incompleto.

## Estado do projeto

O Thothfy concluiu o bootstrap de metodologia, contrato de skill (cinco
grupos — base, contexto, estratégia, planejamento sequenciado e
especialista —, sequência numerada onde aplicável e skill mestra), arquivos
de contexto, estruturas persuasivas, a camada de planejamento estratégico de
agência (`ESTRATEGIA.md`) e o catálogo completo de skills, incluindo
instalação via `thothfy-setup` em `.thothfy/` e `content/`. `SKILLS.md` lista
o catálogo completo. Regras de contribuição e licença open source continuam
pendentes de publicação; até lá, este repositório documenta escopo e uso,
não autorização de redistribuição.
