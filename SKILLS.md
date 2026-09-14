# SKILLS.md — Catálogo de Skills do Inboundfy

Este índice organiza as skills de `skills/` nos sete grupos definidos em
`SKILL-AUTORIA.md`, mais as wrappers e a instalação. Toda skill segue
o contrato de `SKILL-AUTORIA.md`. Use a tabela para escolher a skill certa
por grupo, fase sequencial (`METODOLOGIA.md`), etapa estratégica
(`ESTRATEGIA.md`), capacidade transversal ou canal de entrega.

O catálogo contém 135 skills, incluindo 47 capacidades transversais de
estratégia, aquisição, retenção, pesquisa, copy, SEO, GEO, medição e qualidade, além das wrappers,
fases sequenciais, especialistas de canal e validadoras de asset.

## Mapa de execução canônico

```text
instalação ausente ──→ setup
ideia ──→ brainstorm 00–04 ──┐
campanha ──→ estratégia 00–03├──→ planejamento 00–04
material bruto ──────────────┘        ↓
                              produção 05
                                  ↓
                     especialista ⇄ validadora
                                  ↓
                              auditoria 06
```

Os números representam ordem obrigatória apenas em brainstorm, estratégia e
planejamento. Base, contexto, especialistas e validadoras são selecionadas
pela responsabilidade. Numerá-las criaria uma ordem que não existe.

## Como escolher o grupo certo

- Existe apenas uma ideia, sem tese e pesquisa → grupo 3
  (`inboundfy-brainstorm-<NN>-*`) ou wrapper `inboundfy-brainstorm`.
- A campanha ainda não tem objetivo, KPI ou plano definido → grupo 4
  (`inboundfy-estrategia-<NN>-*`).
- Já existe material bruto (transcrição, peça-base, rascunho) ou um item do
  calendário para processar do zero → grupo 5 (`inboundfy-planejamento-<NN>-*`,
  começando por `inboundfy-planejamento-00-triagem`).
- É um pedido pontual e rápido, sem pacote completo, com brief mínimo já
  claro → grupo 6 (`inboundfy-especialista-<canal>`) direto.
- Falta dado de negócio (produto, preço, concorrente, campanha) → grupo 2
  (`inboundfy-contexto-*`).
- É uma capacidade mecânica reutilizável (SEO, formatação, edição, imagem)
  → grupo 1 (`inboundfy-base-*`).
- Existe um asset candidato aguardando aprovação → grupo 7
  (`inboundfy-validador-<canal>[-imagem]`) de mesmo sufixo da produtora.

## 0. Instalação e orquestração

Fora dos sete grupos, por natureza: instalam o framework e orquestram o
resto do catálogo.

| Skill | Papel |
| --- | --- |
| [inboundfy-setup](skills/inboundfy-setup/SKILL.md) | Instala, atualiza e repara os arquivos de apoio, além de inventariar os Markdown em maiúsculas do projeto sem alterar as fontes. |
| [inboundfy-brainstorm](skills/inboundfy-brainstorm/SKILL.md) | Executa automaticamente as fases 00 a 04 do brainstorm e entrega `brainstorm.md` aprovado. |
| [inboundfy-iniciar](skills/inboundfy-iniciar/SKILL.md) | Recebe ideia ou peça-base, aciona o fluxo necessário e entrega uma ou várias peças auditadas. |
| [inboundfy-acervo](skills/inboundfy-acervo/SKILL.md) | Skill mestre: conduz entrada, processamento, pesquisa, base editorial, estratégia, produção, validação, calendário e catálogo. |
| [inboundfy-extrair-faq](skills/inboundfy-extrair-faq/SKILL.md) | Extrai perguntas, respostas, fontes e lacunas de cada item do acervo. |

## Capacidades estratégicas e de qualidade

Essas skills entram quando o trabalho precisa de uma especialidade transversal
e sempre carregam o contexto vivo do projeto.

| Skill | Papel |
| --- | --- |
| [inboundfy-produto-marketing](skills/inboundfy-produto-marketing/SKILL.md) | Consolida produto, mercado, posicionamento, diferenciação e mensagens. |
| [inboundfy-estrategia](skills/inboundfy-estrategia/SKILL.md) | Liga objetivo, oferta, persona, canal, cadência e calendário. |
| [inboundfy-pesquisa-cliente](skills/inboundfy-pesquisa-cliente/SKILL.md) | Pesquisa linguagem, tarefas, dores, desejos e objeções. |
| [inboundfy-concorrentes](skills/inboundfy-concorrentes/SKILL.md) | Analisa alternativas, mensagens, provas e lacunas de conteúdo. |
| [inboundfy-oferta](skills/inboundfy-oferta/SKILL.md) | Estrutura resultado, mecanismo, prova, condições e CTA. |
| [inboundfy-copywriting](skills/inboundfy-copywriting/SKILL.md) | Redige peças orientadas por acervo, canal e persona. |
| [inboundfy-copy-editing](skills/inboundfy-copy-editing/SKILL.md) | Edita copy preservando intenção e melhorando clareza e ritmo. |
| [inboundfy-seo](skills/inboundfy-seo/SKILL.md) | Planeja busca, arquitetura, metadados, headings e links. |
| [inboundfy-geo](skills/inboundfy-geo/SKILL.md) | Organiza conteúdo para respostas de IA e citações verificáveis. |
| [inboundfy-cro](skills/inboundfy-cro/SKILL.md) | Melhora páginas, formulários, proposta, prova e CTAs. |
| [inboundfy-psicologia](skills/inboundfy-psicologia/SKILL.md) | Aplica persuasão transparente e trata objeções. |
| [inboundfy-lead-magnet](skills/inboundfy-lead-magnet/SKILL.md) | Cria materiais ricos e a sequência de relacionamento. |
| [inboundfy-lancamento](skills/inboundfy-lancamento/SKILL.md) | Organiza anúncio, demonstração, prova e acompanhamento. |
| [inboundfy-metricas](skills/inboundfy-metricas/SKILL.md) | Define perguntas, eventos, UTMs, métricas e leitura de desempenho. |
| [inboundfy-atribuicao](skills/inboundfy-atribuicao/SKILL.md) | Compara origens, jornadas, modelos e receita. |
| [inboundfy-experimentacao](skills/inboundfy-experimentacao/SKILL.md) | Planeja testes de mensagem, oferta, CTA e distribuição. |
| [inboundfy-anti-slop](skills/inboundfy-anti-slop/SKILL.md) | Audita linguagem, fonte, voz, persona, ritmo e canal antes da publicação. |
| [inboundfy-anti-slop-codigo](skills/inboundfy-anti-slop-codigo/SKILL.md) | Mantém o código e a documentação técnica claros. |
| [inboundfy-anuncios](skills/inboundfy-anuncios/SKILL.md) | Planeja mídia paga, públicos, eventos, mensagens e páginas de destino. |
| [inboundfy-criativos-anuncios](skills/inboundfy-criativos-anuncios/SKILL.md) | Cria ângulos e variações de criativos pagos ligados à oferta e à persona. |
| [inboundfy-aso](skills/inboundfy-aso/SKILL.md) | Melhora metadata e texto de páginas de aplicativos. |
| [inboundfy-retencao](skills/inboundfy-retencao/SKILL.md) | Planeja comunicação para retenção, ativação e cancelamento. |
| [inboundfy-parcerias](skills/inboundfy-parcerias/SKILL.md) | Estrutura parcerias de conteúdo, distribuição e co-marketing. |
| [inboundfy-comunidade](skills/inboundfy-comunidade/SKILL.md) | Planeja conteúdo e presença útil em comunidades. |
| [inboundfy-distribuicao](skills/inboundfy-distribuicao/SKILL.md) | Organiza distribuição em diretórios, bases e canais externos. |
| [inboundfy-email-frio](skills/inboundfy-email-frio/SKILL.md) | Cria prospecção por e-mail com personalização e saída simples. |
| [inboundfy-eventos](skills/inboundfy-eventos/SKILL.md) | Planeja aquisição, convite, cobertura e pós-evento. |
| [inboundfy-ferramentas-gratuitas](skills/inboundfy-ferramentas-gratuitas/SKILL.md) | Estrutura ferramentas gratuitas para aquisição e relacionamento. |
| [inboundfy-influenciadores](skills/inboundfy-influenciadores/SKILL.md) | Estrutura colaborações com criadores alinhados à audiência. |
| [inboundfy-conselho-marketing](skills/inboundfy-conselho-marketing/SKILL.md) | Organiza leitura executiva e próximos passos de marketing. |
| [inboundfy-loops](skills/inboundfy-loops/SKILL.md) | Desenha ciclos de aquisição, ativação, conteúdo e indicação. |
| [inboundfy-onboarding](skills/inboundfy-onboarding/SKILL.md) | Planeja comunicação inicial após a compra. |
| [inboundfy-paywall](skills/inboundfy-paywall/SKILL.md) | Estrutura mensagens e estados de acesso pago. |
| [inboundfy-popups](skills/inboundfy-popups/SKILL.md) | Planeja pop-ups, formulários e regras de captura. |
| [inboundfy-pricing](skills/inboundfy-pricing/SKILL.md) | Analisa preço, planos, embalagem e mensagens de comparação. |
| [inboundfy-seo-programatico](skills/inboundfy-seo-programatico/SKILL.md) | Planeja páginas SEO em escala com modelo e revisão. |
| [inboundfy-prospeccao](skills/inboundfy-prospeccao/SKILL.md) | Organiza prospecção multicanal por segmento e sinal. |
| [inboundfy-relacoes-publicas](skills/inboundfy-relacoes-publicas/SKILL.md) | Prepara pautas, press briefings, porta-vozes e fontes. |
| [inboundfy-referencias](skills/inboundfy-referencias/SKILL.md) | Estrutura programas de indicação e sua medição. |
| [inboundfy-revops](skills/inboundfy-revops/SKILL.md) | Conecta marketing, vendas e atendimento em um fluxo comum. |
| [inboundfy-enablement-vendas](skills/inboundfy-enablement-vendas/SKILL.md) | Cria materiais de apoio para conversas de vendas. |
| [inboundfy-dados-estruturados](skills/inboundfy-dados-estruturados/SKILL.md) | Organiza JSON-LD e dados estruturados para páginas. |
| [inboundfy-auditoria-seo](skills/inboundfy-auditoria-seo/SKILL.md) | Audita descoberta, metadata, conteúdo, links e saúde SEO. |
| [inboundfy-arquitetura-site](skills/inboundfy-arquitetura-site/SKILL.md) | Planeja hierarquia, navegação, URLs e links internos. |
| [inboundfy-sms](skills/inboundfy-sms/SKILL.md) | Planeja SMS de alerta, lembrete, ativação ou oferta. |
| [inboundfy-signup](skills/inboundfy-signup/SKILL.md) | Melhora cadastro, mensagens de erro, ativação e próximos passos. |
| [inboundfy-social](skills/inboundfy-social/SKILL.md) | Planeja distribuição social multicanal e reaproveitamentos. |

## 1. `inboundfy-base-*` — Fundamentos reutilizáveis

Capacidades transversais, sem canal nem fase própria. Chamadas por qualquer
skill de planejamento ou especialista.

| Skill | Capacidade |
| --- | --- |
| [inboundfy-base-editor](skills/inboundfy-base-editor/SKILL.md) | Auditoria de parágrafo por `ESCRITA.md`, nota 0-100, reescrita guiada. |
| [inboundfy-base-seo](skills/inboundfy-base-seo/SKILL.md) | Intenção de busca, metadata, headings, linkagem interna. |
| [inboundfy-base-formatador](skills/inboundfy-base-formatador/SKILL.md) | Lint e formatação Markdown final. |
| [inboundfy-base-imagem](skills/inboundfy-base-imagem/SKILL.md) | Motor genérico de card/slide gerado por IA (capa social, thumbnail, slide de carrossel). |
| [inboundfy-base-validador](skills/inboundfy-base-validador/SKILL.md) | Contrato transversal de fontes, contextos, regras, relatório e reenvio. |

## 2. `inboundfy-contexto-*` — Manutenção de dados do usuário

Preenchem e mantêm os arquivos de `context/` descritos em `CONTEXTO.md`.

| Skill | Mantém |
| --- | --- |
| [inboundfy-contexto-empresa](skills/inboundfy-contexto-empresa/SKILL.md) | `context/empresa.md` e `context/glossario.md`. |
| [inboundfy-contexto-pessoas](skills/inboundfy-contexto-pessoas/SKILL.md) | `context/pessoas.md`. |
| [inboundfy-contexto-produtos](skills/inboundfy-contexto-produtos/SKILL.md) | `context/produtos.md` e `context/servicos.md`. |
| [inboundfy-contexto-ofertas](skills/inboundfy-contexto-ofertas/SKILL.md) | `context/ofertas.md`. |
| [inboundfy-contexto-marca](skills/inboundfy-contexto-marca/SKILL.md) | `context/marca-voz.md` e `context/proibicoes.md`. |
| [inboundfy-contexto-publico](skills/inboundfy-contexto-publico/SKILL.md) | `context/publico.md`. |
| [inboundfy-contexto-concorrentes](skills/inboundfy-contexto-concorrentes/SKILL.md) | `context/concorrentes.md`. |
| [inboundfy-contexto-enderecos](skills/inboundfy-contexto-enderecos/SKILL.md) | `context/enderecos.md`. |
| [inboundfy-contexto-canais](skills/inboundfy-contexto-canais/SKILL.md) | `context/canais.md`. |
| [inboundfy-contexto-ferramentas](skills/inboundfy-contexto-ferramentas/SKILL.md) | `context/ferramentas.md`. |
| [inboundfy-contexto-campanhas](skills/inboundfy-contexto-campanhas/SKILL.md) | `context/campanhas.md`. |

## 3. `inboundfy-brainstorm-<NN>-*` — Desenvolvimento sequencial de ideia

Transformam uma ideia curta em `brainstorm.md` pesquisado e validado.

| Skill | Fase |
| --- | --- |
| [inboundfy-brainstorm-00-triagem](skills/inboundfy-brainstorm-00-triagem/SKILL.md) | 00 — Preserva a ideia e abre o diretório datado. |
| [inboundfy-brainstorm-01-entrevista](skills/inboundfy-brainstorm-01-entrevista/SKILL.md) | 01 — Investiga lacunas essenciais em uma conversa. |
| [inboundfy-brainstorm-02-pesquisa](skills/inboundfy-brainstorm-02-pesquisa/SKILL.md) | 02 — Pesquisa fontes e contrapontos. |
| [inboundfy-brainstorm-03-sintese](skills/inboundfy-brainstorm-03-sintese/SKILL.md) | 03 — Preenche tese, argumentos, ativos e oportunidades. |
| [inboundfy-brainstorm-04-validacao](skills/inboundfy-brainstorm-04-validacao/SKILL.md) | 04 — Valida fontes, escrita e proibições. |

## 4. `inboundfy-estrategia-<NN>-*` — Planejamento estratégico de agência

Decidem o quê, por quê e quando em nível de campanha ou agenda, antes de
qualquer material bruto ou pacote existir. Ver `ESTRATEGIA.md` para a ordem
típica de uso.

| Skill | Papel |
| --- | --- |
| [inboundfy-estrategia-00-briefing-cliente](skills/inboundfy-estrategia-00-briefing-cliente/SKILL.md) | Kickoff: objetivo de negócio, KPI, público, orçamento e prazo da campanha. |
| [inboundfy-estrategia-01-pesquisa-mercado](skills/inboundfy-estrategia-01-pesquisa-mercado/SKILL.md) | Pesquisa ativa de mercado e concorrência para embasar a campanha. |
| [inboundfy-estrategia-02-campanha](skills/inboundfy-estrategia-02-campanha/SKILL.md) | Plano de campanha multicanal: fases, temas, mix de canal e volume de peças. |
| [inboundfy-estrategia-03-calendario](skills/inboundfy-estrategia-03-calendario/SKILL.md) | Calendário editorial recorrente: distribui no tempo peças de campanha e cadência orgânica. |

## 5. `inboundfy-planejamento-<NN>-*` — Fluxo/pipeline editorial sequenciado

Orquestram as fases de `METODOLOGIA.md`, na ordem exata do número no nome.
Não escrevem copy final.

| Skill | Fase |
| --- | --- |
| [inboundfy-planejamento-00-triagem](skills/inboundfy-planejamento-00-triagem/SKILL.md) | 0 — Intake. |
| [inboundfy-planejamento-01-saneamento](skills/inboundfy-planejamento-01-saneamento/SKILL.md) | 1 — Saneamento. |
| [inboundfy-planejamento-02-pesquisa](skills/inboundfy-planejamento-02-pesquisa/SKILL.md) | 2 — Pesquisa e extração de ativos. |
| [inboundfy-planejamento-03-oportunidades](skills/inboundfy-planejamento-03-oportunidades/SKILL.md) | 3 — Planejamento de oportunidades. |
| [inboundfy-planejamento-04-briefing](skills/inboundfy-planejamento-04-briefing/SKILL.md) | 4 — Briefing por peça (define estrutura persuasiva, ver `ESTRUTURAS-PERSUASIVAS.md`). |
| [inboundfy-planejamento-05-producao](skills/inboundfy-planejamento-05-producao/SKILL.md) | 5 — Roteamento para skill especialista. |
| [inboundfy-planejamento-06-auditoria](skills/inboundfy-planejamento-06-auditoria/SKILL.md) | 6 — Auditoria final do pacote. |

## 6. `inboundfy-especialista-<canal>[-imagem]` — Item avulso por canal de entrega

Recebem um brief já aprovado e produzem o artefato final.

### Texto

| Skill | Artefato |
| --- | --- |
| [inboundfy-especialista-blog](skills/inboundfy-especialista-blog/SKILL.md) | Artigo de blog. |
| [inboundfy-especialista-email](skills/inboundfy-especialista-email/SKILL.md) | E-mail avulso, nutrição, convite. |
| [inboundfy-especialista-newsletter](skills/inboundfy-especialista-newsletter/SKILL.md) | Newsletter (e-mail ou editorial longa). |
| [inboundfy-especialista-linkedin](skills/inboundfy-especialista-linkedin/SKILL.md) | Post e artigo de LinkedIn. |
| [inboundfy-especialista-instagram](skills/inboundfy-especialista-instagram/SKILL.md) | Legenda de post, carrossel e roteiro de vídeo curto. |
| [inboundfy-especialista-video](skills/inboundfy-especialista-video/SKILL.md) | Roteiro de vídeo longo e talking head. |
| [inboundfy-especialista-ebook](skills/inboundfy-especialista-ebook/SKILL.md) | Capítulo e estrutura de ebook. |
| [inboundfy-especialista-infografico](skills/inboundfy-especialista-infografico/SKILL.md) | Copy de infográfico. |
| [inboundfy-especialista-webinar](skills/inboundfy-especialista-webinar/SKILL.md) | Copy de página/convite de webinar. |
| [inboundfy-especialista-changelog](skills/inboundfy-especialista-changelog/SKILL.md) | Entrada de changelog ou release note. |
| [inboundfy-especialista-podcast](skills/inboundfy-especialista-podcast/SKILL.md) | Pauta e shownotes de episódio. |

### Imagem

| Skill | Artefato |
| --- | --- |
| [inboundfy-especialista-blog-imagem](skills/inboundfy-especialista-blog-imagem/SKILL.md) | Capa e thumbnail de post via banco de fotos real. |
| [inboundfy-especialista-linkedin-imagem](skills/inboundfy-especialista-linkedin-imagem/SKILL.md) | Imagem de post e capa de artigo de LinkedIn. |
| [inboundfy-especialista-instagram-imagem](skills/inboundfy-especialista-instagram-imagem/SKILL.md) | Imagem de feed e pacote de carrossel. |
| [inboundfy-especialista-video-imagem](skills/inboundfy-especialista-video-imagem/SKILL.md) | Thumbnail de vídeo longo (YouTube e equivalentes). |
| [inboundfy-especialista-ebook-imagem](skills/inboundfy-especialista-ebook-imagem/SKILL.md) | Capa de ebook e imagem OpenGraph. |
| [inboundfy-especialista-infografico-imagem](skills/inboundfy-especialista-infografico-imagem/SKILL.md) | Peça final de infográfico. |
| [inboundfy-especialista-webinar-imagem](skills/inboundfy-especialista-webinar-imagem/SKILL.md) | Thumbnail quadrada de evento/webinar. |

## 7. `inboundfy-validador-<canal>[-imagem]` — Aprovação por asset

Cada especialista acima possui uma validadora de mesmo sufixo:

<!-- markdownlint-disable MD013 -->

| Produtora | Validadora |
| --- | --- |
| `inboundfy-especialista-blog` | `inboundfy-validador-blog` |
| `inboundfy-especialista-blog-imagem` | `inboundfy-validador-blog-imagem` |
| `inboundfy-especialista-changelog` | `inboundfy-validador-changelog` |
| `inboundfy-especialista-ebook` | `inboundfy-validador-ebook` |
| `inboundfy-especialista-ebook-imagem` | `inboundfy-validador-ebook-imagem` |
| `inboundfy-especialista-email` | `inboundfy-validador-email` |
| `inboundfy-especialista-infografico` | `inboundfy-validador-infografico` |
| `inboundfy-especialista-infografico-imagem` | `inboundfy-validador-infografico-imagem` |
| `inboundfy-especialista-instagram` | `inboundfy-validador-instagram` |
| `inboundfy-especialista-instagram-imagem` | `inboundfy-validador-instagram-imagem` |
| `inboundfy-especialista-linkedin` | `inboundfy-validador-linkedin` |
| `inboundfy-especialista-linkedin-imagem` | `inboundfy-validador-linkedin-imagem` |
| `inboundfy-especialista-newsletter` | `inboundfy-validador-newsletter` |
| `inboundfy-especialista-podcast` | `inboundfy-validador-podcast` |
| `inboundfy-especialista-video` | `inboundfy-validador-video` |
| `inboundfy-especialista-video-imagem` | `inboundfy-validador-video-imagem` |
| `inboundfy-especialista-webinar` | `inboundfy-validador-webinar` |
| `inboundfy-especialista-webinar-imagem` | `inboundfy-validador-webinar-imagem` |

<!-- markdownlint-enable MD013 -->

As 18 validadoras aplicam `inboundfy-base-validador`, leem todos os arquivos
de `.inboundfy/context/`, o inventário e as fontes locais relevantes, além do
brief e dos contratos da produtora. Uma reprovação retorna à produtora
pareada com localização, evidência, regra violada e correção verificável. O
asset só avança após nova rodada aprovada.

## Regra central

Use `inboundfy-setup` num projeto novo. Para uma ideia, use
`inboundfy-brainstorm`. Para material bruto ou peça-base, use `inboundfy-acervo`,
a skill mestre que coordena o ciclo até a saída. O `inboundfy-iniciar` continua
disponível como atalho compatível. Para campanha nova, comece por
`inboundfy-estrategia-00-briefing-cliente`. Skills individuais servem para
controlar ou retomar uma fase específica.
