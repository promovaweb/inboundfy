# Referência do planejamento editorial

Material de apoio do fluxo de `inboundfy-planejamento`. Cada etapa do
pipeline tem arquivo próprio em `references/etapas/`. Os métodos usados em
mais de uma etapa ficam nos arquivos de apoio.

## Arquivos de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/etapas/00-triagem.md](references/etapas/00-triagem.md) | Passo 3 | Pacote completo ou peça avulsa, `README.md` do pacote, marco A0. |
| [references/etapas/01-saneamento.md](references/etapas/01-saneamento.md) | Passo 3 | Base limpa, relatório de saneamento, marco A1. |
| [references/etapas/02-pesquisa.md](references/etapas/02-pesquisa.md) | Passo 3 | Extração de ativos, pesquisa externa, marco A2. |
| [references/etapas/03-oportunidades.md](references/etapas/03-oportunidades.md) | Passos 3 e 4 | Plano de oportunidades, matriz de prioridade, marco A3. |
| [references/etapas/04-briefing.md](references/etapas/04-briefing.md) | Passos 3, 4 e 5 | Brief completo, escolha de estrutura persuasiva, marco A3. |
| [references/etapas/05-producao.md](references/etapas/05-producao.md) | Passos 3 e 5 | Roteamento canal para especialista e validadora, marcos A4 e A5. |
| [references/etapas/06-auditoria.md](references/etapas/06-auditoria.md) | Passos 3 e 5 | Auditoria final do pacote, marco A6. |
| [references/priorizacao-e-capacidade.md](references/priorizacao-e-capacidade.md) | Passo 4 | Pontuação de oportunidades, cobertura do funil e capacidade por canal. |
| [references/calendario-mensal.md](references/calendario-mensal.md) | Passo 4 | Formato canônico de `calendario/AAAA-MM.md` e reconciliação com o frontmatter. |
| [references/medicao-por-peca.md](references/medicao-por-peca.md) | Passo 6 | Métrica principal por objetivo, UTM e janela de leitura. |

## Ordem do pipeline

```text
00 Triagem → A0 → 01 Saneamento → A1 → 02 Pesquisa → A2 → 03 Oportunidades → A3
→ 04 Briefing → A3 → 05 Produção → A4 → A5 → Validadora → A6 → 06 Auditoria
```

Peça avulsa: `04 Briefing → 05 Produção ⇄ Validadora → 06 Auditoria`.

## Template

Estrutura do pacote completo, criada aos poucos pelas etapas:

```text
<diretório-de-trabalho>/<slug-do-pacote>/
├── README.md
├── 00-entrada/material-original.md
├── 01-saneamento/base-limpa.md
├── 01-saneamento/relatorio-saneamento.md
├── 02-pesquisa-e-ativos/ativos.md
├── 03-planejamento/plano-de-oportunidades.md
├── 04-briefs/<canal>-<slug>.md
├── 06-auditoria/anti-slop-0N-*.md
├── 06-auditoria/assets/<canal>-<item>.md
├── 06-auditoria/auditoria-final.md
└── 97-ativos-finais/<canal>/<item>/README.md
```

`README.md` do pacote ao longo das etapas:

```markdown
# Pacote: {{slug}}

- **Origem do material:** {{transcrição, peça-base, release, pesquisa}}
- **Campanha de origem:** {{nome e caminho do plano, ou "nenhuma"}}
- **Data de criação:** {{AAAA-MM-DD}}
- **Escolha:** {{pacote completo | peça avulsa}}
- **Motivo da escolha:** {{por quê}}
- **Status atual:** {{00-entrada | 01-saneamento | 02-ativos | 03-oportunidades | 04-briefs | 05-producao | 06-auditoria | concluido}}
- **Canais previstos:** {{lista}}

## Marcos
| Marco | Arquivo | Resultado | Data |
```

## Exemplo

Caso fictício para ilustrar o pipeline completo. Não use os dados como
contexto real.

**Empresa:** Estoquely, SaaS de controle de estoque para pequenas lojas.
**Material:** transcrição de 40 minutos de reunião interna sobre por que
clientes cancelam no primeiro mês.

| Etapa | Resultado |
| --- | --- |
| 00 | Pacote `cancelamento-primeiro-mes-estoque` aberto como pacote completo: a reunião cobre três causas distintas. A0 registrado sem alterar a transcrição. |
| 01 | Base limpa em 4 blocos, marcações de tempo removidas, "Estoqueli" corrigido para "Estoquely" pelo glossário. A1 aprovado. |
| 02 | Tese principal: o cancelamento vem da migração, não do produto. Dado: 6 em cada 10 tickets de cancelamento citam importar planilha. Entidade "importador de planilha" sinalizada como não cadastrada. A2 aprovado. |
| 03 | Três oportunidades: blog (alta), LinkedIn (média, depende de autorização do gestor de produto), email (baixa, depende da funcionalidade confirmada). A3 aprovado. |
| 04 | Brief do email de nutrição com PAS e métrica de cliques no botão "Importar planilha". A3 do brief aprovado depois de confirmar a funcionalidade em `context/produtos.md`. |
| 05 | Roteado para `inboundfy-especialista-email` e `inboundfy-validador-email`. A5 e validação aprovados na segunda rodada. |
| 06 | Auditoria final aprovada. Campo `brief` presente no frontmatter. |

Linha registrada no calendário do modo acervo para o artigo:

```markdown
## 2026-03-17

- [ ] **0058** Por que o cliente cancela no primeiro mês · blog · personas: persona-01 · [peça](../canais/blog/0058-2026-03-17-cancelamento-migracao/README.md) · estado: rascunho
```

## Checklist

- [ ] O modo (pacote, acervo ou peça avulsa) foi identificado e registrado.
- [ ] O material original permanece intacto.
- [ ] Cada etapa executada tem o marco anti-slop registrado.
- [ ] Cada oportunidade tem ativos de apoio, prioridade e justificativa.
- [ ] Cada brief tem os campos do modelo, métrica e regra de pronto.
- [ ] Todo brief comercial declara estrutura persuasiva bloco a bloco.
- [ ] Cada asset tem relatório aprovado da validadora pareada.
- [ ] Toda linha do calendário bate com o frontmatter da peça.
- [ ] O artefato final tem o campo `brief`.

## Erros comuns

- **Pular do material para o brief.** Sem saneamento e ativos, o brief usa
  memória do agente no lugar do material.
- **Oportunidade por canal ativo.** Canal ativo não obriga peça. Sem ativo,
  sem oportunidade.
- **Brief que repete o tema.** O ângulo do brief precisa ser mais específico
  que o tema do pacote.
- **Estrutura persuasiva só nomeada.** "PAS" sem o que entra em cada bloco
  deixa a especialista decidindo estratégia.
- **Auditoria que reescreve.** A auditoria aponta e devolve. Quem corrige é
  a produtora.
- **Calendário sem ID.** Linha sem `**<id>**` não é lida pelo catálogo.
- **Lote sem fechamento.** Abrir a próxima peça antes de validar a anterior
  mistura julgamentos.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O planejamento converte material aprovado em oportunidades, briefs, handoffs
e auditoria. A tabela mostra para onde cada problema volta.

| Problema encontrado | Volta para |
| --- | --- |
| Material é só uma ideia sem tese | `inboundfy-brainstorm` |
| Campanha sem objetivo ou plano | `inboundfy-estrategia` |
| Diretório, template ou contexto ausente | `inboundfy-setup` |
| Entidade não cadastrada em `context/` | skill `inboundfy-contexto-*` do arquivo |
| Persona inexistente para o brief | `inboundfy-contexto-publico` |
| Asset reprovado pela validadora | especialista de mesmo sufixo |
| Brief com ângulo ou persona errados | etapa 04 deste pipeline |
| Peça aprovada pronta para publicar | `inboundfy-pipeline` |
| Índices desatualizados | `inboundfy-catalogo` |
