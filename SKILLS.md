# SKILLS.md — Catálogo de Skills do Inboundfy

Este índice organiza as skills de `skills/` nas famílias definidas em
`SKILL-AUTORIA.md`, com wrappers, instalação, orquestrador e capacidades de
apoio. Toda skill segue o contrato de `SKILL-AUTORIA.md`. Use a tabela para
escolher a skill certa
por grupo, fase sequencial (`METODOLOGIA.md`), etapa estratégica
(`ESTRATEGIA.md`), capacidade transversal ou canal de entrega.

O catálogo contém 114 skills: 20 especialistas de canal, 20 validadoras,
25 capacidades de growth, 6 capacidades de copy, 7 skills de contexto, 4 de
acervo, 3 grupos de etapas e as capacidades de base, qualidade, entrada e
orquestração.

Para descoberta por máquina, consulte [`skills/catalogo.json`](skills/catalogo.json).
Cada diretório também possui `REFERENCIA.md`, cinco referências compartilhadas
e `agents/openai.yaml`.

## Mapa de execução canônico

```text
instalação ausente ──→ setup
ideia ──→ brainstorm [00–04] ──┐
campanha ──→ estratégia [00–03]├──→ planejamento [00–06]
material bruto ──────────────┘        ↓
                              produção 05
                                  ↓
                     especialista ⇄ validadora
                                  ↓
                              auditoria 06
```

Os números representam etapas internas obrigatórias. Cada grupo tem uma única
skill pública e referências numeradas dentro de `references/etapas/`. Base,
contexto, especialistas e validadoras são selecionadas pela responsabilidade.

## Como escolher o grupo certo

- Existe apenas uma ideia, sem tese e pesquisa → `inboundfy-brainstorm`,
  informando a etapa interna quando necessário.
- A campanha ainda não tem objetivo, KPI ou plano definido →
  `inboundfy-estrategia`, informando a etapa interna.
- Já existe material bruto (transcrição, peça-base, rascunho) ou um item do
  calendário para processar do zero → `inboundfy-planejamento`, informando a
  etapa interna quando necessário.
- É um pedido pontual e rápido, sem pacote completo, com brief mínimo já
  claro → grupo 6 (`inboundfy-especialista-<canal>`) direto.
- Falta dado de negócio (produto, preço, concorrente, campanha) → uma skill da
  família `inboundfy-contexto-*`, conforme o domínio do arquivo.
- É uma capacidade mecânica reutilizável (SEO, formatação, edição, imagem)
  → grupo 1 (`inboundfy-base-*`).
- Existe um asset candidato aguardando aprovação → grupo 7
  (`inboundfy-validador-<canal>[-imagem]`) de mesmo sufixo da produtora.

## 0. Instalação e orquestração

Fora das famílias de execução, por natureza: instalam o framework e orquestram
o resto do catálogo.

| Skill | Papel |
| --- | --- |
| [inboundfy-setup](skills/inboundfy-setup/SKILL.md) | Instala, atualiza e repara os arquivos de apoio, além de inventariar os Markdown em maiúsculas do projeto sem alterar as fontes. |
| [inboundfy-brainstorm](skills/inboundfy-brainstorm/SKILL.md) | Executa automaticamente as fases 00 a 04 do brainstorm e entrega `brainstorm.md` aprovado. |
| [inboundfy-iniciar](skills/inboundfy-iniciar/SKILL.md) | Recebe ideia ou peça-base, aciona o fluxo necessário e entrega uma ou várias peças auditadas. |
| [inboundfy-acervo](skills/inboundfy-acervo/SKILL.md) | Skill mestre: conduz entrada, processamento, pesquisa, base editorial, estratégia, produção, validação, calendário e catálogo. |
| [inboundfy-extrair-faq](skills/inboundfy-extrair-faq/SKILL.md) | Extrai perguntas, respostas, fontes e lacunas de cada item do acervo. |

## Capacidades transversais, copy e growth

Essas skills entram quando o trabalho precisa de uma especialidade transversal
e sempre carregam o contexto vivo do projeto. `inboundfy-copy-*` concentra
redação, edição, persuasão, oferta e posicionamento. `inboundfy-growth-*`
concentra aquisição, ativação, retenção, distribuição e otimização.

| Skill | Papel |
| --- | --- |
| [inboundfy-copy-posicionamento](skills/inboundfy-copy-posicionamento/SKILL.md) | Consolida produto, mercado, posicionamento, diferenciação e mensagens. |
| [inboundfy-estrategia](skills/inboundfy-estrategia/SKILL.md) | Liga objetivo, oferta, persona, canal, cadência e calendário. |
| [inboundfy-pesquisa-cliente](skills/inboundfy-pesquisa-cliente/SKILL.md) | Pesquisa linguagem, tarefas, dores, desejos e objeções. |
| [inboundfy-concorrentes](skills/inboundfy-concorrentes/SKILL.md) | Analisa alternativas, mensagens, provas e lacunas de conteúdo. |
| [inboundfy-copy-oferta](skills/inboundfy-copy-oferta/SKILL.md) | Estrutura resultado, mecanismo, prova, condições e CTA. |
| [inboundfy-copy-redacao](skills/inboundfy-copy-redacao/SKILL.md) | Redige peças orientadas por acervo, canal e persona. |
| [inboundfy-copy-edicao](skills/inboundfy-copy-edicao/SKILL.md) | Edita copy preservando intenção e melhorando clareza e ritmo. |
| [inboundfy-seo](skills/inboundfy-seo/SKILL.md) | Planeja busca, arquitetura, metadados, headings e links. |
| [inboundfy-geo](skills/inboundfy-geo/SKILL.md) | Organiza conteúdo para respostas de IA e citações verificáveis. |
| [inboundfy-growth-cro](skills/inboundfy-growth-cro/SKILL.md) | Melhora páginas, formulários, proposta, prova e CTAs. |
| [inboundfy-copy-persuasao](skills/inboundfy-copy-persuasao/SKILL.md) | Aplica persuasão transparente e trata objeções. |
| [inboundfy-growth-lead-magnet](skills/inboundfy-growth-lead-magnet/SKILL.md) | Cria materiais ricos e a sequência de relacionamento. |
| [inboundfy-growth-lancamento](skills/inboundfy-growth-lancamento/SKILL.md) | Organiza anúncio, demonstração, prova e acompanhamento. |
| [inboundfy-metricas](skills/inboundfy-metricas/SKILL.md) | Define perguntas, eventos, UTMs, métricas e leitura de desempenho. |
| [inboundfy-atribuicao](skills/inboundfy-atribuicao/SKILL.md) | Compara origens, jornadas, modelos e receita. |
| [inboundfy-experimentacao](skills/inboundfy-experimentacao/SKILL.md) | Planeja testes de mensagem, oferta, CTA e distribuição. |
| [inboundfy-anti-slop](skills/inboundfy-anti-slop/SKILL.md) | Audita linguagem, fonte, voz, persona, ritmo e canal antes da publicação. |
| [inboundfy-anti-slop-codigo](skills/inboundfy-anti-slop-codigo/SKILL.md) | Mantém o código e a documentação técnica claros. |
| [inboundfy-growth-anuncios](skills/inboundfy-growth-anuncios/SKILL.md) | Planeja mídia paga, públicos, eventos, mensagens e páginas de destino. |
| [inboundfy-growth-criativos-anuncios](skills/inboundfy-growth-criativos-anuncios/SKILL.md) | Cria ângulos e variações de criativos pagos ligados à oferta e à persona. |
| [inboundfy-aso](skills/inboundfy-aso/SKILL.md) | Melhora metadata e texto de páginas de aplicativos. |
| [inboundfy-growth-retencao](skills/inboundfy-growth-retencao/SKILL.md) | Planeja comunicação para retenção, ativação e cancelamento. |
| [inboundfy-growth-parcerias](skills/inboundfy-growth-parcerias/SKILL.md) | Estrutura parcerias de conteúdo, distribuição e co-marketing. |
| [inboundfy-growth-comunidade](skills/inboundfy-growth-comunidade/SKILL.md) | Planeja conteúdo e presença útil em comunidades. |
| [inboundfy-growth-distribuicao](skills/inboundfy-growth-distribuicao/SKILL.md) | Organiza distribuição em diretórios, bases e canais externos. |
| [inboundfy-growth-email-frio](skills/inboundfy-growth-email-frio/SKILL.md) | Cria prospecção por e-mail com personalização e saída simples. |
| [inboundfy-growth-eventos](skills/inboundfy-growth-eventos/SKILL.md) | Planeja aquisição, convite, cobertura e pós-evento. |
| [inboundfy-growth-ferramentas-gratuitas](skills/inboundfy-growth-ferramentas-gratuitas/SKILL.md) | Estrutura ferramentas gratuitas para aquisição e relacionamento. |
| [inboundfy-growth-influenciadores](skills/inboundfy-growth-influenciadores/SKILL.md) | Estrutura colaborações com criadores alinhados à audiência. |
| [inboundfy-conselho-marketing](skills/inboundfy-conselho-marketing/SKILL.md) | Organiza leitura executiva e próximos passos de marketing. |
| [inboundfy-growth-loops](skills/inboundfy-growth-loops/SKILL.md) | Desenha ciclos de aquisição, ativação, conteúdo e indicação. |
| [inboundfy-growth-onboarding](skills/inboundfy-growth-onboarding/SKILL.md) | Planeja comunicação inicial após a compra. |
| [inboundfy-growth-paywall](skills/inboundfy-growth-paywall/SKILL.md) | Estrutura mensagens e estados de acesso pago. |
| [inboundfy-growth-popups](skills/inboundfy-growth-popups/SKILL.md) | Planeja pop-ups, formulários e regras de captura. |
| [inboundfy-growth-pricing](skills/inboundfy-growth-pricing/SKILL.md) | Analisa preço, planos, embalagem e mensagens de comparação. |
| [inboundfy-seo-programatico](skills/inboundfy-seo-programatico/SKILL.md) | Planeja páginas SEO em escala com modelo e revisão. |
| [inboundfy-growth-prospeccao](skills/inboundfy-growth-prospeccao/SKILL.md) | Organiza prospecção multicanal por segmento e sinal. |
| [inboundfy-growth-relacoes-publicas](skills/inboundfy-growth-relacoes-publicas/SKILL.md) | Prepara pautas, press briefings, porta-vozes e fontes. |
| [inboundfy-growth-referencias](skills/inboundfy-growth-referencias/SKILL.md) | Estrutura programas de indicação e sua medição. |
| [inboundfy-growth-revops](skills/inboundfy-growth-revops/SKILL.md) | Conecta marketing, vendas e atendimento em um fluxo comum. |
| [inboundfy-enablement-vendas](skills/inboundfy-enablement-vendas/SKILL.md) | Cria materiais de apoio para conversas de vendas. |
| [inboundfy-dados-estruturados](skills/inboundfy-dados-estruturados/SKILL.md) | Organiza JSON-LD e dados estruturados para páginas. |
| [inboundfy-auditoria-seo](skills/inboundfy-auditoria-seo/SKILL.md) | Audita descoberta, metadata, conteúdo, links e saúde SEO. |
| [inboundfy-arquitetura-site](skills/inboundfy-arquitetura-site/SKILL.md) | Planeja hierarquia, navegação, URLs e links internos. |
| [inboundfy-growth-sms](skills/inboundfy-growth-sms/SKILL.md) | Planeja SMS de alerta, lembrete, ativação ou oferta. |
| [inboundfy-growth-signup](skills/inboundfy-growth-signup/SKILL.md) | Melhora cadastro, mensagens de erro, ativação e próximos passos. |
| [inboundfy-growth-social](skills/inboundfy-growth-social/SKILL.md) | Planeja distribuição social multicanal e reaproveitamentos. |

## 1. `inboundfy-base-*` — Fundamentos reutilizáveis

Capacidades transversais, sem canal nem fase própria. Chamadas por qualquer
skill de planejamento ou especialista.

| Skill | Capacidade |
| --- | --- |
| [inboundfy-base-seo](skills/inboundfy-base-seo/SKILL.md) | Intenção de busca, metadata, headings, linkagem interna. |
| [inboundfy-base-formatador](skills/inboundfy-base-formatador/SKILL.md) | Lint e formatação Markdown final. |
| [inboundfy-base-imagem](skills/inboundfy-base-imagem/SKILL.md) | Motor genérico de card/slide gerado por IA (capa social, thumbnail, slide de carrossel). |
| [inboundfy-base-validador](skills/inboundfy-base-validador/SKILL.md) | Contrato transversal de fontes, contextos, regras, relatório e reenvio. |

## 1A. `inboundfy-copy-*` — Redação e mensagem

| Skill | Capacidade |
| --- | --- |
| [inboundfy-copy-redacao](skills/inboundfy-copy-redacao/SKILL.md) | Redação orientada por acervo, canal, persona e voz. |
| [inboundfy-copy-edicao](skills/inboundfy-copy-edicao/SKILL.md) | Edição de copy com clareza, ritmo e preservação da intenção. |
| [inboundfy-copy-editor](skills/inboundfy-copy-editor/SKILL.md) | Auditoria de parágrafo e reescrita guiada por `ESCRITA.md`. |
| [inboundfy-copy-oferta](skills/inboundfy-copy-oferta/SKILL.md) | Estrutura de resultado, mecanismo, prova, condições e CTA. |
| [inboundfy-copy-persuasao](skills/inboundfy-copy-persuasao/SKILL.md) | Persuasão transparente e tratamento de objeções. |
| [inboundfy-copy-posicionamento](skills/inboundfy-copy-posicionamento/SKILL.md) | Produto, mercado, diferenciação e mensagens centrais. |

## 1B. `inboundfy-growth-*` — Crescimento e distribuição

Os 25 IDs desta família organizam aquisição, ativação, retenção, mídia,
distribuição, conversão e operação de crescimento. Eles aparecem também na
lista de capacidades acima e são ativados apenas quando o objetivo do trabalho
pedir a especialidade correspondente.

## 2. `inboundfy-contexto-*` — Manutenção de dados do usuário

Preenchem e mantêm os arquivos de `context/` descritos em `CONTEXTO.md`.

| Skill | Mantém |
| --- | --- |
| [inboundfy-contexto-institucional](skills/inboundfy-contexto-institucional/SKILL.md) | `context/empresa.md`, `pessoas.md`, `enderecos.md`, `links.md` e `glossario.md`. |
| [inboundfy-contexto-oferta](skills/inboundfy-contexto-oferta/SKILL.md) | `context/produtos.md`, `servicos.md` e `ofertas.md`. |
| [inboundfy-contexto-marca](skills/inboundfy-contexto-marca/SKILL.md) | `context/marca-voz.md` e `context/proibicoes.md`. |
| [inboundfy-contexto-publico](skills/inboundfy-contexto-publico/SKILL.md) | `context/publico.md`. |
| [inboundfy-contexto-concorrentes](skills/inboundfy-contexto-concorrentes/SKILL.md) | `context/concorrentes.md`. |
| [inboundfy-contexto-operacao](skills/inboundfy-contexto-operacao/SKILL.md) | `context/canais.md`, `ferramentas.md` e `campanhas.md`. |
| [inboundfy-aprendizado](skills/inboundfy-aprendizado/SKILL.md) | `.inboundfy/context/aprendizado.md`, com alcance das orientações confirmadas. |

## 3. `inboundfy-brainstorm` — Desenvolvimento sequencial de ideia

Transformam uma ideia curta em `brainstorm.md` pesquisado e validado.

| Skill | Fase |
| --- | --- |
| `references/etapas/00-triagem.md` | Preserva a ideia e abre o diretório datado. |
| `references/etapas/01-entrevista.md` | Investiga lacunas essenciais em uma conversa. |
| `references/etapas/02-pesquisa.md` | Pesquisa fontes e contrapontos. |
| `references/etapas/03-sintese.md` | Preenche tese, argumentos, ativos e oportunidades. |
| `references/etapas/04-validacao.md` | Valida fontes, escrita e proibições. |

## 4. `inboundfy-estrategia` — Planejamento estratégico de agência

Decidem o quê, por quê e quando em nível de campanha ou agenda, antes de
qualquer material bruto ou pacote existir. Ver `ESTRATEGIA.md` para a ordem
típica de uso.

| Skill | Papel |
| --- | --- |
| `references/etapas/00-briefing-cliente.md` | Kickoff: objetivo de negócio, KPI, público, orçamento e prazo. |
| `references/etapas/01-pesquisa-mercado.md` | Pesquisa ativa de mercado e concorrência. |
| `references/etapas/02-campanha.md` | Plano multicanal, temas e volume de peças. |
| `references/etapas/03-calendario.md` | Calendário editorial e cadência orgânica. |

## 5. `inboundfy-planejamento` — Fluxo/pipeline editorial sequenciado

Orquestra as fases de `METODOLOGIA.md` pelas referências internas numeradas.
Não escreve copy final.

| Skill | Fase |
| --- | --- |
| `references/etapas/00-triagem.md` | Intake. |
| `references/etapas/01-saneamento.md` | Saneamento. |
| `references/etapas/02-pesquisa.md` | Pesquisa e extração de ativos. |
| `references/etapas/03-oportunidades.md` | Planejamento de oportunidades. |
| `references/etapas/04-briefing.md` | Briefing por peça e estrutura persuasiva. |
| `references/etapas/05-producao.md` | Roteamento para especialista. |
| `references/etapas/06-auditoria.md` | Auditoria final do pacote. |

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

As 20 validadoras aplicam `inboundfy-base-validador`, leem todos os arquivos
de `.inboundfy/context/`, o inventário e as fontes locais relevantes, além do
brief e dos contratos da produtora. Uma reprovação retorna à produtora
pareada com localização, evidência, regra violada e correção verificável. O
asset só avança após nova rodada aprovada.

## Regra central

Use `inboundfy-setup` num projeto novo. Para uma ideia, use
`inboundfy-brainstorm`. Para material bruto ou peça-base, use `inboundfy-acervo`,
a skill mestre que coordena o ciclo até a saída. O `inboundfy-iniciar` continua
disponível como atalho compatível. Para campanha nova, comece por
`inboundfy-estrategia`. Skills individuais servem para
controlar ou retomar uma fase específica.
