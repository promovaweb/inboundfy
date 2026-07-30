# SKILLS.md — Catálogo de Skills do Thothfy

Este índice organiza as skills de `skills/` nos sete grupos definidos em
`SKILL-AUTORIA.md`, mais as wrappers e a instalação. Toda skill segue
o contrato de `SKILL-AUTORIA.md`. Use a tabela para escolher a skill certa
por grupo, fase sequencial (`METODOLOGIA.md`), etapa estratégica
(`ESTRATEGIA.md`) ou canal de entrega.

O catálogo contém 71 skills: 3 pontos de entrada, 5 de base, 11 de contexto,
5 fases de brainstorm, 4 fases de estratégia, 7 fases de planejamento, 18
especialistas de canal e 18 validadoras de asset.

## Como escolher o grupo certo

- Existe apenas uma ideia, sem tese e pesquisa → grupo 3
  (`thothfy-brainstorm-<NN>-*`) ou wrapper `thothfy-brainstorm`.
- A campanha ainda não tem objetivo, KPI ou plano definido → grupo 4
  (`thothfy-estrategia-<NN>-*`).
- Já existe material bruto (transcrição, peça-base, rascunho) ou um item do
  calendário para processar do zero → grupo 5 (`thothfy-planejamento-<NN>-*`,
  começando por `thothfy-planejamento-00-triagem`).
- É um pedido pontual e rápido, sem pacote completo, com brief mínimo já
  claro → grupo 6 (`thothfy-especialista-<canal>`) direto.
- Falta dado de negócio (produto, preço, concorrente, campanha) → grupo 2
  (`thothfy-contexto-*`).
- É uma capacidade mecânica reutilizável (SEO, formatação, edição, imagem)
  → grupo 1 (`thothfy-base-*`).
- Existe um asset candidato aguardando aprovação → grupo 7
  (`thothfy-validador-<canal>[-imagem]`) de mesmo sufixo da produtora.

## 0. Instalação e orquestração

Fora dos sete grupos, por natureza: instalam o framework e orquestram o
resto do catálogo.

| Skill | Papel |
| --- | --- |
| [thothfy-setup](skills/thothfy-setup/SKILL.md) | Instala, atualiza e repara os arquivos de apoio, além de inventariar os Markdown em maiúsculas do projeto sem alterar as fontes. |
| [thothfy-brainstorm](skills/thothfy-brainstorm/SKILL.md) | Executa automaticamente as fases 00 a 04 do brainstorm e entrega `brainstorm.md` aprovado. |
| [thothfy-iniciar](skills/thothfy-iniciar/SKILL.md) | Recebe ideia ou peça-base, aciona o fluxo necessário e entrega uma ou várias peças auditadas. |

## 1. `thothfy-base-*` — Fundamentos reutilizáveis

Capacidades transversais, sem canal nem fase própria. Chamadas por qualquer
skill de planejamento ou especialista.

| Skill | Capacidade |
| --- | --- |
| [thothfy-base-editor](skills/thothfy-base-editor/SKILL.md) | Auditoria de parágrafo por `ESCRITA.md`, nota 0-100, reescrita guiada. |
| [thothfy-base-seo](skills/thothfy-base-seo/SKILL.md) | Intenção de busca, metadata, headings, linkagem interna. |
| [thothfy-base-formatador](skills/thothfy-base-formatador/SKILL.md) | Lint e formatação Markdown final. |
| [thothfy-base-imagem](skills/thothfy-base-imagem/SKILL.md) | Motor genérico de card/slide gerado por IA (capa social, thumbnail, slide de carrossel). |
| [thothfy-base-validador](skills/thothfy-base-validador/SKILL.md) | Contrato transversal de fontes, contextos, regras, relatório e reenvio. |

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

## 3. `thothfy-brainstorm-<NN>-*` — Desenvolvimento sequencial de ideia

Transformam uma ideia curta em `brainstorm.md` pesquisado e validado.

| Skill | Fase |
| --- | --- |
| [thothfy-brainstorm-00-triagem](skills/thothfy-brainstorm-00-triagem/SKILL.md) | 00 — Preserva a ideia e abre o diretório datado. |
| [thothfy-brainstorm-01-entrevista](skills/thothfy-brainstorm-01-entrevista/SKILL.md) | 01 — Investiga lacunas essenciais em uma conversa. |
| [thothfy-brainstorm-02-pesquisa](skills/thothfy-brainstorm-02-pesquisa/SKILL.md) | 02 — Pesquisa fontes e contrapontos. |
| [thothfy-brainstorm-03-sintese](skills/thothfy-brainstorm-03-sintese/SKILL.md) | 03 — Preenche tese, argumentos, ativos e oportunidades. |
| [thothfy-brainstorm-04-validacao](skills/thothfy-brainstorm-04-validacao/SKILL.md) | 04 — Valida fontes, escrita e proibições. |

## 4. `thothfy-estrategia-<NN>-*` — Planejamento estratégico de agência

Decidem o quê, por quê e quando em nível de campanha ou agenda, antes de
qualquer material bruto ou pacote existir. Ver `ESTRATEGIA.md` para a ordem
típica de uso.

| Skill | Papel |
| --- | --- |
| [thothfy-estrategia-00-briefing-cliente](skills/thothfy-estrategia-00-briefing-cliente/SKILL.md) | Kickoff: objetivo de negócio, KPI, público, orçamento e prazo da campanha. |
| [thothfy-estrategia-01-pesquisa-mercado](skills/thothfy-estrategia-01-pesquisa-mercado/SKILL.md) | Pesquisa ativa de mercado e concorrência para embasar a campanha. |
| [thothfy-estrategia-02-campanha](skills/thothfy-estrategia-02-campanha/SKILL.md) | Plano de campanha multicanal: fases, temas, mix de canal e volume de peças. |
| [thothfy-estrategia-03-calendario](skills/thothfy-estrategia-03-calendario/SKILL.md) | Calendário editorial recorrente: distribui no tempo peças de campanha e cadência orgânica. |

## 5. `thothfy-planejamento-<NN>-*` — Fluxo/pipeline editorial sequenciado

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

## 6. `thothfy-especialista-<canal>[-imagem]` — Item avulso por canal de entrega

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

## 7. `thothfy-validador-<canal>[-imagem]` — Aprovação por asset

Cada especialista acima possui uma validadora de mesmo sufixo. O pareamento
é direto para blog, changelog, ebook, email, infográfico, Instagram,
LinkedIn, newsletter, podcast, vídeo e webinar, incluindo as sete
especialistas de imagem.

As 18 validadoras aplicam `thothfy-base-validador`, leem todos os arquivos
de `.thothfy/context/`, o inventário e as fontes locais relevantes, além do
brief e dos contratos da produtora. Uma reprovação retorna à produtora
pareada com localização, evidência, regra violada e correção verificável. O
asset só avança após nova rodada aprovada.

## Regra central

Use `thothfy-setup` num projeto novo. Para uma ideia, use
`thothfy-brainstorm` ou chame `thothfy-iniciar`, que escolhe esse caminho
automaticamente. Para campanha nova, comece por
`thothfy-estrategia-00-briefing-cliente`. Para peça-base ou material bruto,
use `thothfy-iniciar`. Skills individuais servem para controlar ou retomar
uma fase específica.
