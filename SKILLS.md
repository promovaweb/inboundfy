# SKILLS.md — Catálogo de Skills do Thothfy

Este índice organiza as skills de `skills/` nos cinco grupos definidos em
`SKILL-AUTORIA.md`, mais a skill mestra e a de instalação. Toda skill segue
o contrato de `SKILL-AUTORIA.md`. Use a tabela para escolher a skill certa
por grupo, fase sequencial (`METODOLOGIA.md`), etapa estratégica
(`ESTRATEGIA.md`) ou canal de entrega.

As 46 skills do catálogo estão prontas (SKILL.md completo, seguindo o
contrato de `SKILL-AUTORIA.md`): 2 de instalação/orquestração, 4 de base, 11
de contexto, 4 de estratégia de agência, 7 de fluxo/pipeline sequenciado e
18 de especialista de canal. Aprofundamento futuro (scripts de apoio
mecânico, exemplos adicionais) pode ser adicionado sem quebrar o contrato
atual.

## Como escolher o grupo certo

- A campanha ainda não tem objetivo, KPI ou plano definido → grupo 3
  (`thothfy-estrategia-*`).
- Já existe material bruto (transcrição, ideia, rascunho) ou um item do
  calendário para processar do zero → grupo 4 (`thothfy-planejamento-<NN>-*`,
  começando por `thothfy-planejamento-00-triagem`).
- É um pedido pontual e rápido, sem pacote completo, com brief mínimo já
  claro → grupo 5 (`thothfy-especialista-<canal>`) direto.
- Falta dado de negócio (produto, preço, concorrente, campanha) → grupo 2
  (`thothfy-contexto-*`).
- É uma capacidade mecânica reutilizável (SEO, formatação, edição, imagem)
  → grupo 1 (`thothfy-base-*`).

## 0. Instalação e orquestração

Fora dos cinco grupos, por natureza: instalam o framework e orquestram o
resto do catálogo.

| Skill | Papel |
| --- | --- |
| [thothfy-setup](skills/thothfy-setup/SKILL.md) | Instala o Thothfy no projeto: copia skills, cria `.thothfy/` e `content/`, ajusta `AGENTS.md`/`CLAUDE.md`, conduz o preenchimento mínimo de contexto. |
| [thothfy-iniciar](skills/thothfy-iniciar/SKILL.md) | Skill mestra: roda a sequência completa de `thothfy-planejamento-*` e os especialistas necessários automaticamente, a partir de material bruto. |

## 1. `thothfy-base-*` — Fundamentos reutilizáveis

Capacidades transversais, sem canal nem fase própria. Chamadas por qualquer
skill de planejamento ou especialista.

| Skill | Capacidade |
| --- | --- |
| [thothfy-base-editor](skills/thothfy-base-editor/SKILL.md) | Auditoria de parágrafo por `ESCRITA.md`, nota 0-100, reescrita guiada. |
| [thothfy-base-seo](skills/thothfy-base-seo/SKILL.md) | Intenção de busca, metadata, headings, linkagem interna. |
| [thothfy-base-formatador](skills/thothfy-base-formatador/SKILL.md) | Lint e formatação Markdown final. |
| [thothfy-base-imagem](skills/thothfy-base-imagem/SKILL.md) | Motor genérico de card/slide gerado por IA (capa social, thumbnail, slide de carrossel). |

## 2. `thothfy-contexto-*` — Manutenção de dados do usuário

Preenchem e mantêm os arquivos de `context/` descritos em `CONTEXTO.md`.

| Skill | Mantém |
| --- | --- |
| [thothfy-contexto-empresa](skills/thothfy-contexto-empresa/SKILL.md) | `context/empresa.md` e `context/glossario.md`. |
| [thothfy-contexto-pessoas](skills/thothfy-contexto-pessoas/SKILL.md) | `context/pessoas.md`. |
| [thothfy-contexto-produtos](skills/thothfy-contexto-produtos/SKILL.md) | `context/produtos.md` e `context/servicos.md`. |
| [thothfy-contexto-ofertas](skills/thothfy-contexto-ofertas/SKILL.md) | `context/ofertas.md`. |
| [thothfy-contexto-marca](skills/thothfy-contexto-marca/SKILL.md) | `context/marca-voz.md` e `context/proibicoes.md`. |
| [thothfy-contexto-publico](skills/thothfy-contexto-publico/SKILL.md) | `context/publico.md`. |
| [thothfy-contexto-concorrentes](skills/thothfy-contexto-concorrentes/SKILL.md) | `context/concorrentes.md`. |
| [thothfy-contexto-enderecos](skills/thothfy-contexto-enderecos/SKILL.md) | `context/enderecos.md`. |
| [thothfy-contexto-canais](skills/thothfy-contexto-canais/SKILL.md) | `context/canais.md`. |
| [thothfy-contexto-ferramentas](skills/thothfy-contexto-ferramentas/SKILL.md) | `context/ferramentas.md`. |
| [thothfy-contexto-campanhas](skills/thothfy-contexto-campanhas/SKILL.md) | `context/campanhas.md`. |

## 3. `thothfy-estrategia-*` — Planejamento estratégico de agência

Decidem o quê, por quê e quando em nível de campanha ou agenda, antes de
qualquer material bruto ou pacote existir. Ver `ESTRATEGIA.md` para a ordem
típica de uso.

| Skill | Papel |
| --- | --- |
| [thothfy-estrategia-briefing-cliente](skills/thothfy-estrategia-briefing-cliente/SKILL.md) | Kickoff: objetivo de negócio, KPI, público, orçamento e prazo da campanha. |
| [thothfy-estrategia-pesquisa-mercado](skills/thothfy-estrategia-pesquisa-mercado/SKILL.md) | Pesquisa ativa de mercado e concorrência para embasar a campanha. |
| [thothfy-estrategia-campanha](skills/thothfy-estrategia-campanha/SKILL.md) | Plano de campanha multicanal: fases, temas, mix de canal e volume de peças. |
| [thothfy-estrategia-calendario](skills/thothfy-estrategia-calendario/SKILL.md) | Calendário editorial recorrente: distribui no tempo peças de campanha e cadência orgânica. |

## 4. `thothfy-planejamento-<NN>-*` — Fluxo/pipeline editorial sequenciado

Orquestram as fases de `METODOLOGIA.md`, na ordem exata do número no nome.
Não escrevem copy final.

| Skill | Fase |
| --- | --- |
| [thothfy-planejamento-00-triagem](skills/thothfy-planejamento-00-triagem/SKILL.md) | 0 — Intake. |
| [thothfy-planejamento-01-saneamento](skills/thothfy-planejamento-01-saneamento/SKILL.md) | 1 — Saneamento. |
| [thothfy-planejamento-02-pesquisa](skills/thothfy-planejamento-02-pesquisa/SKILL.md) | 2 — Pesquisa e extração de ativos. |
| [thothfy-planejamento-03-oportunidades](skills/thothfy-planejamento-03-oportunidades/SKILL.md) | 3 — Planejamento de oportunidades. |
| [thothfy-planejamento-04-briefing](skills/thothfy-planejamento-04-briefing/SKILL.md) | 4 — Briefing por peça (define estrutura persuasiva, ver `ESTRUTURAS-PERSUASIVAS.md`). |
| [thothfy-planejamento-05-producao](skills/thothfy-planejamento-05-producao/SKILL.md) | 5 — Roteamento para skill especialista. |
| [thothfy-planejamento-06-auditoria](skills/thothfy-planejamento-06-auditoria/SKILL.md) | 6 — Auditoria final do pacote. |

## 5. `thothfy-especialista-<canal>[-imagem]` — Item avulso por canal de entrega

Recebem um brief já aprovado e produzem o artefato final.

### Texto

| Skill | Artefato |
| --- | --- |
| [thothfy-especialista-blog](skills/thothfy-especialista-blog/SKILL.md) | Artigo de blog. |
| [thothfy-especialista-email](skills/thothfy-especialista-email/SKILL.md) | E-mail avulso, nutrição, convite. |
| [thothfy-especialista-newsletter](skills/thothfy-especialista-newsletter/SKILL.md) | Newsletter (e-mail ou editorial longa). |
| [thothfy-especialista-linkedin](skills/thothfy-especialista-linkedin/SKILL.md) | Post e artigo de LinkedIn. |
| [thothfy-especialista-instagram](skills/thothfy-especialista-instagram/SKILL.md) | Legenda de post, carrossel e roteiro de vídeo curto. |
| [thothfy-especialista-video](skills/thothfy-especialista-video/SKILL.md) | Roteiro de vídeo longo e talking head. |
| [thothfy-especialista-ebook](skills/thothfy-especialista-ebook/SKILL.md) | Capítulo e estrutura de ebook. |
| [thothfy-especialista-infografico](skills/thothfy-especialista-infografico/SKILL.md) | Copy de infográfico. |
| [thothfy-especialista-webinar](skills/thothfy-especialista-webinar/SKILL.md) | Copy de página/convite de webinar. |
| [thothfy-especialista-changelog](skills/thothfy-especialista-changelog/SKILL.md) | Entrada de changelog ou release note. |
| [thothfy-especialista-podcast](skills/thothfy-especialista-podcast/SKILL.md) | Pauta e shownotes de episódio. |

### Imagem

| Skill | Artefato |
| --- | --- |
| [thothfy-especialista-blog-imagem](skills/thothfy-especialista-blog-imagem/SKILL.md) | Capa e thumbnail de post via banco de fotos real. |
| [thothfy-especialista-linkedin-imagem](skills/thothfy-especialista-linkedin-imagem/SKILL.md) | Imagem de post e capa de artigo de LinkedIn. |
| [thothfy-especialista-instagram-imagem](skills/thothfy-especialista-instagram-imagem/SKILL.md) | Imagem de feed e pacote de carrossel. |
| [thothfy-especialista-video-imagem](skills/thothfy-especialista-video-imagem/SKILL.md) | Thumbnail de vídeo longo (YouTube e equivalentes). |
| [thothfy-especialista-ebook-imagem](skills/thothfy-especialista-ebook-imagem/SKILL.md) | Capa de ebook e imagem OpenGraph. |
| [thothfy-especialista-infografico-imagem](skills/thothfy-especialista-infografico-imagem/SKILL.md) | Peça final de infográfico. |
| [thothfy-especialista-webinar-imagem](skills/thothfy-especialista-webinar-imagem/SKILL.md) | Thumbnail quadrada de evento/webinar. |

## Regra central

Use `thothfy-setup` antes de qualquer outra skill num projeto novo. Para
campanha nova, comece por `thothfy-estrategia-briefing-cliente` e siga a
ordem de `ESTRATEGIA.md`. Para um pacote de conteúdo com material bruto já
definido, use `thothfy-iniciar` para o fluxo completo automático, ou acione
`thothfy-contexto-*` quando faltar dado, `thothfy-planejamento-<NN>-*` na
ordem de `METODOLOGIA.md`, e a skill `thothfy-especialista-*` do canal só
depois de existir um brief aprovado — ou direto, para peça avulsa sem
pacote completo.
