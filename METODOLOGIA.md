# METODOLOGIA.md — Pipeline Editorial do Inboundfy

Este arquivo descreve o pipeline que toda skill de produção do Inboundfy segue.
Ele é agnóstico de canal e de negócio: qualquer artefato de texto ou imagem
passa pelas mesmas fases, na mesma ordem, trocando apenas o material de
entrada, o `context/` consultado e a skill de canal usada na produção.
Cada fase também consulta `.inboundfy/fontes-projeto.md` e carrega os Markdown
locais classificados como relevantes para o trabalho atual.

Este pipeline processa um pacote que **já tem** material bruto ou um item
alocado no calendário. A estratégia define a finalidade da campanha, o
público, os canais e o período sem depender de material prévio. Essa camada
está descrita em `ESTRATEGIA.md`, no grupo
`inboundfy-estrategia-<NN>-*`. Um pacote pode começar com material bruto trazido
pelo usuário, sem campanha, ou com um item alocado por
`inboundfy-estrategia-03-calendario`; nos dois casos, o fluxo segue igual a
partir da fase 0.

## Regra central

Nenhum artefato final é criado por resposta direta, resumo apressado ou
reaproveitamento literal de outro material. Toda peça preserva a origem,
passa por saneamento, extrai ativos reutilizáveis, é planejada antes de
escrita, ganha um brief, é produzida pela skill do canal certo e é auditada
antes de ser tratada como pronta. Pular uma fase é aceitável apenas quando o
usuário pedir explicitamente uma peça avulsa e rápida — nesse caso, a skill
de canal ainda deve consultar `context/` e aplicar `ESCRITA.md` antes de
entregar.

Cada fase corresponde a exatamente uma skill do grupo
`inboundfy-planejamento-<NN>-<nome>` — o número no nome da skill é a própria
ordem de execução (ver `SKILL-AUTORIA.md`). `inboundfy-iniciar` é a wrapper
que aciona as sete fases automaticamente; use as skills individuais quando
quiser controlar ou retomar uma fase específica. Quando a entrada for apenas
uma ideia, `inboundfy-iniciar` chama primeiro `inboundfy-brainstorm` e usa o
`brainstorm.md` aprovado como material do pacote.

As skills deste pipeline não reparam a instalação. Quando metodologia,
template, inventário de fontes, arquivo de contexto ou diretório registrado
estiver ausente ou fora do caminho canônico, a fase interrompe a escrita e
aciona `inboundfy-setup`. Depois da reconciliação, o pipeline retoma do último
artefato preservado.

## Fases

### 0. Intake (`inboundfy-planejamento-00-triagem`)

Recebe material bruto — transcrição, peça-base, briefing informal, dado de
pesquisa, release de produto — ou um item alocado por
`inboundfy-estrategia-03-calendario`, e decide o caminho: pacote completo (todas
as fases abaixo) ou peça avulsa (produção direta a partir de um brief
mínimo). Cria o diretório de trabalho do pacote, registra a campanha de
origem quando houver (`context/campanhas.md`) e preserva o material original
sem edição.

### 1. Saneamento (`inboundfy-planejamento-01-saneamento`)

Produz uma versão limpa do material de entrada: corrige transcrição, remove
ruído, organiza estrutura, sem reescrever com voz editorial ainda. Documenta
o que foi alterado e por quê. O original da fase 0 nunca é sobrescrito. As
regras completas do que pode e não pode ser alterado vivem em
`LIMPEZA-MATERIAL-BRUTO.md`; a lógica de correção de termo técnico ou nome
próprio mal transcrito vive em `TRADUCAO.md`.

### 2. Pesquisa e extração de ativos (`inboundfy-planejamento-02-pesquisa`)

Extrai da base limpa e do `context/` os ativos reutilizáveis: teses, exemplos,
dados, dores, objeções, perguntas frequentes, citações e entidades (produtos,
pessoas, ferramentas) mencionadas. Quando o material depende de informação
externa ou sensível ao tempo, também faz pesquisa com fonte e data de acesso.
Esses ativos alimentam qualquer peça futura do mesmo pacote, mesmo em canais
diferentes.

### 3. Planejamento de oportunidades (`inboundfy-planejamento-03-oportunidades`)

Cruza os ativos extraídos com os canais disponíveis em `context/canais.md` e
decide quais peças valem a pena, além da ordem e da prioridade. O
resultado é uma lista de oportunidades, não peças prontas.

### 4. Briefing (`inboundfy-planejamento-04-briefing`)

Transforma cada oportunidade aprovada em um brief formal por peça: canal,
formato, público-alvo (`context/publico.md`), objetivo, ângulo, ativos de
apoio, restrições de marca (`context/marca-voz.md` e `context/proibicoes.md`),
estrutura persuasiva quando aplicável (`ESTRUTURAS-PERSUASIVAS.md`) e
condições de aprovação. Nenhuma peça final deve existir sem um brief que a
originou.

### 5. Produção (`inboundfy-planejamento-05-producao` + skill especialista)

`inboundfy-planejamento-05-producao` roteia o brief para a skill
`inboundfy-especialista-<canal>` correta (blog, email, LinkedIn, vídeo, ebook,
infográfico, webinar, changelog, podcast) e garante que ela leu `context/` e
`ESCRITA.md` antes de escrever. A skill especialista produz o artefato
candidato — texto, imagem ou os dois — e o encaminha para a
`inboundfy-validador-<canal>[-imagem]` de mesmo sufixo. A validadora aplica
`inboundfy-base-validador`, todos os contextos e as regras específicas. Se
reprovar, devolve o relatório à produtora e o ciclo se repete.

Proibições são hard gates: a validadora faz um passe literal e outro
semântico/estrutural sobre o asset inteiro. Uma única ocorrência reprova a
peça, mesmo que a nota média, o SEO ou os demais critérios estejam
aprovados. Depois da correção, os dois passes recomeçam do zero. Se `brand/`
existir, as diretrizes e os ativos aplicáveis da pasta também entram na
aprovação.

### 6. Auditoria (`inboundfy-planejamento-06-auditoria`)

Consolida os relatórios individuais já aprovados, verifica coerência entre
assets e audita o pacote contra o brief. Relatório ausente ou reprovado
devolve o item à produção; divergência estratégica volta ao briefing.

## Ordem entre fases

```text
0 Intake → 1 Saneamento → 2 Pesquisa/Ativos → 3 Planejamento → 4 Briefing → 5 Produção ⇄ Validação do asset → 6 Auditoria
```

Ideia curta passa primeiro pelo brainstorm:

```text
Ideia → inboundfy-brainstorm → brainstorm.md aprovado → fases 0 a 6
```

Peça avulsa (sem pacote completo) ainda percorre um caminho mínimo:

```text
Brief direto do usuário → 5 Produção ⇄ Validação do asset → 6 Auditoria
```

## Estrutura de pacote

Um pacote completo de trabalho fica em um diretório próprio do projeto que
adota o Inboundfy (por exemplo `conteudo/<pacote>/` ou equivalente definido pelo
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
│   ├── assets/
│   │   └── <canal>-<item>.md
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
- Todo asset possui relatório aprovado em `06-auditoria/assets/` antes de
  entrar na consolidação final.
- Quando uma campanha originar o pacote, o `README.md` referencia
  o nome da campanha e o caminho do plano em
  `<pacote-de-campanha>/01-plano/plano-de-campanha.md` (ver `ESTRATEGIA.md`).

## Lotes

Quando o trabalho envolver muitos pacotes ou muitas peças na mesma sessão,
feche cada item — validação incluída — antes de recarregar `context/` e
iniciar o próximo. Não reaproveite julgamento de um item para aprovar outro
sem nova leitura.
