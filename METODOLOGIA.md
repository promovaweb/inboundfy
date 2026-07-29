# METODOLOGIA.md — Pipeline Editorial do Thothfy

Este arquivo descreve o pipeline que toda skill de produção do Thothfy segue.
Ele é agnóstico de canal e de negócio: qualquer artefato de texto ou imagem
passa pelas mesmas fases, na mesma ordem, trocando apenas o material de
entrada, o `context/` consultado e a skill de canal usada na produção.

Este pipeline processa um pacote que **já tem** material bruto ou um item
alocado no calendário. A decisão de por que uma campanha existe, para quem,
em que canais e quando — antes de qualquer material existir — é a camada
descrita em `ESTRATEGIA.md`, do grupo `thothfy-estrategia-*`. Um pacote pode
nascer direto de material bruto trazido pelo usuário (sem campanha) ou de um
item alocado por `thothfy-estrategia-calendario`; nos dois casos, a partir da
fase 0 abaixo o fluxo é o mesmo.

## Regra central

Nenhum artefato final nasce de resposta direta, resumo apressado ou
reaproveitamento literal de outro material. Toda peça preserva a origem,
passa por saneamento, extrai ativos reutilizáveis, é planejada antes de
escrita, ganha um brief, é produzida pela skill do canal certo e é auditada
antes de ser tratada como pronta. Pular uma fase é aceitável apenas quando o
usuário pedir explicitamente uma peça avulsa e rápida — nesse caso, a skill
de canal ainda deve consultar `context/` e aplicar `ESCRITA.md` antes de
entregar.

Cada fase corresponde a exatamente uma skill do grupo
`thothfy-planejamento-<NN>-<nome>` — o número no nome da skill é a própria
ordem de execução (ver `SKILL-AUTORIA.md`). `thothfy-iniciar` é a skill
mestra que aciona as sete fases em sequência automaticamente; use as skills
individuais quando quiser controlar ou retomar uma fase específica.

## Fases

### 0. Intake (`thothfy-planejamento-00-triagem`)

Recebe material bruto — transcrição, ideia solta, briefing informal, dado de
pesquisa, release de produto — ou um item alocado por
`thothfy-estrategia-calendario`, e decide o caminho: pacote completo (todas
as fases abaixo) ou peça avulsa (produção direta a partir de um brief
mínimo). Cria o diretório de trabalho do pacote, registra a campanha de
origem quando houver (`context/campanhas.md`) e preserva o material original
sem edição.

### 1. Saneamento (`thothfy-planejamento-01-saneamento`)

Produz uma versão limpa do material de entrada: corrige transcrição, remove
ruído, organiza estrutura, sem reescrever com voz editorial ainda. Documenta
o que foi alterado e por quê. O original da fase 0 nunca é sobrescrito. As
regras completas do que pode e não pode ser alterado vivem em
`LIMPEZA-MATERIAL-BRUTO.md`; a lógica de correção de termo técnico ou nome
próprio mal transcrito vive em `TRADUCAO.md`.

### 2. Pesquisa e extração de ativos (`thothfy-planejamento-02-pesquisa`)

Extrai da base limpa e do `context/` os ativos reutilizáveis: teses, exemplos,
dados, dores, objeções, perguntas frequentes, citações e entidades (produtos,
pessoas, ferramentas) mencionadas. Esses ativos alimentam qualquer peça futura
do mesmo pacote, mesmo em canais diferentes.

### 3. Planejamento de oportunidades (`thothfy-planejamento-03-oportunidades`)

Cruza os ativos extraídos com os canais disponíveis em `context/canais.md` e
decide quais peças valem a pena, em que ordem e com qual prioridade. O
resultado é uma lista de oportunidades, não peças prontas.

### 4. Briefing (`thothfy-planejamento-04-briefing`)

Transforma cada oportunidade aprovada em um brief formal por peça: canal,
formato, público-alvo (`context/publico.md`), objetivo, ângulo, ativos de
apoio, restrições de marca (`context/marca-voz.md` e `context/proibicoes.md`),
estrutura persuasiva quando aplicável (`ESTRUTURAS-PERSUASIVAS.md`) e critério
de pronto. Nenhuma peça final deve existir sem um brief que a originou.

### 5. Produção (`thothfy-planejamento-05-producao` + skill especialista)

`thothfy-planejamento-05-producao` roteia o brief para a skill
`thothfy-especialista-<canal>` correta (blog, email, LinkedIn, vídeo, ebook,
infográfico, webinar, changelog, podcast) e garante que ela leu `context/` e
`ESCRITA.md` antes de escrever. A skill especialista produz o artefato final
— texto, imagem ou os dois.

### 6. Auditoria (`thothfy-planejamento-06-auditoria`)

Audita o artefato final contra o brief, `ESCRITA.md`, `context/proibicoes.md`
e a validação própria do canal (SEO, formato de imagem, tamanho de legenda).
Aprova, reprova com correção guiada ou devolve para replanejamento quando o
brief estava errado.

## Ordem entre fases

```text
0 Intake → 1 Saneamento → 2 Pesquisa/Ativos → 3 Planejamento → 4 Briefing → 5 Produção → 6 Auditoria
```

Peça avulsa (sem pacote completo) ainda percorre um caminho mínimo:

```text
Brief direto do usuário → 5 Produção → 6 Auditoria
```

## Estrutura de pacote

Um pacote completo de trabalho fica em um diretório próprio do projeto que
adota o Thothfy (por exemplo `conteudo/<pacote>/` ou equivalente definido pelo
usuário em `context/canais.md`):

```text
<pacote>/
├── README.md
├── 00-entrada/
│   └── material-original.md
├── 01-saneamento/
│   ├── base-limpa.md
│   └── relatorio-saneamento.md
├── 02-pesquisa-e-ativos/
│   └── ativos.md
├── 03-planejamento/
│   └── plano-de-oportunidades.md
├── 04-briefs/
│   └── <canal>-<slug>.md
├── 06-auditoria/
│   └── auditoria-final.md
└── 97-ativos-finais/
    └── <canal>/
        └── <item>/
            ├── README.md
            └── <arquivos de imagem, se houver>
```

Regras:

- `00-entrada/` preserva a origem e nunca é editado.
- `97-ativos-finais/` só contém peças prontas ou quase prontas, cada uma em
  diretório próprio — nunca um `.md` solto direto na pasta do canal.
- Todo artefato final em Markdown carrega no frontmatter o campo `brief`,
  apontando para o brief que o originou em `04-briefs/`.
- Quando o pacote nascer de uma campanha, o `README.md` do pacote referencia
  o nome da campanha e o caminho do plano em
  `<pacote-de-campanha>/01-plano/plano-de-campanha.md` (ver `ESTRATEGIA.md`).

## Lotes

Quando o trabalho envolver muitos pacotes ou muitas peças na mesma sessão,
feche cada item — validação incluída — antes de recarregar `context/` e
iniciar o próximo. Não reaproveite julgamento de um item para aprovar outro
sem nova leitura.
