# Referência de estratégia

Material de apoio do fluxo de `inboundfy-estrategia`. Cada etapa tem arquivo
próprio em `references/etapas/`. Os métodos transversais ficam nos arquivos
de apoio abaixo.

## Arquivos de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/etapas/00-briefing-cliente.md](references/etapas/00-briefing-cliente.md) | Passo 3 | Roteiro de kickoff, tradução de objetivo vago em KPI, modelo e exemplo do brief. |
| [references/etapas/01-pesquisa-mercado.md](references/etapas/01-pesquisa-mercado.md) | Passo 4 | Fontes de pesquisa, ficha por concorrente, perguntas de lacuna e modelo da análise. |
| [references/etapas/02-campanha.md](references/etapas/02-campanha.md) | Passo 5 | Fases, mix de canais, indicadores por fase e modelo do plano. |
| [references/etapas/03-calendario.md](references/etapas/03-calendario.md) | Passo 6 | Capacidade por canal, formato canônico do calendário e reservas. |
| [references/pilares-e-mapa-de-temas.md](references/pilares-e-mapa-de-temas.md) | Passo 5 | Pilares editoriais, temas por etapa de compra, conteúdo de busca e de compartilhamento, pontuação de prioridade. |
| [references/reaproveitamento-e-distribuicao.md](references/reaproveitamento-e-distribuicao.md) | Passos 5 e 6 | Reaproveitamento do acervo, matriz de derivação entre canais e plano de distribuição. |

## Função de cada canal

| Canal | Função principal | Formatos | Etapa de compra mais forte |
| --- | --- | --- | --- |
| Blog | Descoberta por busca e aprofundamento | artigo, guia, comparativo, FAQ | descoberta e consideração |
| Email | Relacionamento e próxima ação | nutrição, newsletter, oferta | consideração e escolha |
| LinkedIn | Tese e autoridade profissional | post, artigo, documento | descoberta |
| Instagram | Alcance e demonstração rápida | post, carrossel, vídeo curto | descoberta |
| Substack | Visão e relacionamento recorrente | artigo, newsletter | consideração e retenção |
| YouTube | Explicação, demonstração e busca em vídeo | vídeo, série, shorts | descoberta e consideração |

Funções que um plano precisa cobrir: descoberta, consideração,
relacionamento, conversão e retenção. Um canal pode ter mais de uma função,
mas cada peça do plano declara uma função principal.

## Busca contra compartilhamento

| Tipo | Objetivo | Como escolher o tema | Sinal de sucesso |
| --- | --- | --- | --- |
| Conteúdo de busca | Ser encontrado por quem já procura | Palavra-chave e pergunta real da persona | Posição, tráfego orgânico, conversão por artigo |
| Conteúdo de compartilhamento | Ser repassado e lembrado | Opinião própria, dado original, história | Compartilhamentos, comentários, menções |

Todo plano declara a proporção entre os dois. Empresa com pouca autoridade
de domínio e equipe pequena costuma começar com 70% busca e 30%
compartilhamento. Marca pessoal forte em LinkedIn pode inverter.

## Template

Brief estratégico de uma peça ou pacote, usado no plano e no handoff:

```markdown
- **Objetivo:** {{resultado que a peça move}}
- **Persona:** {{persona-id de context/publico.md}}
- **Oferta:** {{oferta ou próxima ação de context/ofertas.md}}
- **Etapa de compra:** {{descoberta | consideração | escolha | retenção}}
- **Função do canal:** {{descoberta | consideração | relacionamento | conversão | retenção}}
- **Canal e formato:** {{canal ativo}} / {{formato}}
- **Pilar e tema:** {{pilar}} / {{tema}}
- **Tipo:** {{busca | compartilhamento}}
- **Acervo de origem:** {{ID ou "nenhum"}}
- **Ângulo:** {{recorte próprio desta peça}}
- **CTA:** {{próxima ação concreta}}
- **Métrica:** {{indicador e meta}}
- **Data prevista:** {{AAAA-MM-DD}}
- **Rota:** {{inboundfy-planejamento | inboundfy-especialista-<canal>}}
```

## Exemplo

Caso fictício para ilustrar a sequência completa. Não use os dados como
contexto real.

**Empresa:** Estoquely, SaaS de controle de estoque para pequenas lojas de
varejo. Plano Pro a R$ 149 por mês, teste grátis de 14 dias, pagamento por
Pix ou cartão. Equipe de marketing: uma analista e uma redatora freelancer.
Canais ativos: blog, LinkedIn e email.

**Etapa 00.** Objetivo: 200 testes qualificados do plano Pro entre
2026-08-01 e 2026-09-30. Persona: persona-01, dona de loja que controla
estoque em planilha. Sem mídia paga. Restrição: não citar o concorrente
EstoqueFácil nominalmente nesta campanha.

**Etapa 01.** Os dois concorrentes principais publicam comparativos de
planilha contra sistema. Nenhum mostra o tempo real de cadastro de produto.
Lacuna escolhida: cadastro por foto, com tempo medido.

**Etapa 02.** Pilares: "Controle sem planilha" (busca), "Rotina da loja"
(compartilhamento), "Compra certa" (busca). Fases: atração em agosto,
consideração e conversão em setembro. Proporção 70% busca e 30%
compartilhamento.

| Fase | Tema | Canais | Volume | Indicador |
| --- | --- | --- | --- | --- |
| Atração | Tempo perdido com cadastro manual | blog, LinkedIn | 3 artigos, 4 posts | 5.000 visitas nos artigos |
| Consideração | Cadastro por foto com tempo medido | email, blog | 3 emails, 1 comparativo | 300 leads na sequência |
| Conversão | Teste de 14 dias com importação guiada | email, LinkedIn | 2 emails, 2 posts | 200 testes qualificados |

**Etapa 03.** Cadência técnica: blog 1 por semana, LinkedIn 2 por semana,
email 1 por semana. A fase de atração pedia 4 posts de LinkedIn na primeira
semana. A dona do projeto escolheu 2 na semana 1 e 2 na semana 2. O
calendário de agosto registra as peças já abertas no formato canônico e as
demais na seção de reservas.

**Handoff.** O comparativo de tempo de cadastro nasce de um teste interno
gravado: segue para `inboundfy-planejamento` como pacote. Os posts de
LinkedIn seguem como peça avulsa para `inboundfy-especialista-linkedin`.

## Checklist

- [ ] Objetivo, KPI, meta e prazo estão no brief aprovado.
- [ ] A pesquisa separa fato com fonte de interpretação marcada.
- [ ] Pilares têm de três a cinco itens, cada um ligado a oferta e persona.
- [ ] Cada tema tem etapa de compra, tipo (busca ou compartilhamento) e
      prioridade.
- [ ] Cada fase tem tema, canais, volume, lacuna e indicador.
- [ ] Todo canal citado está ativo e tem cadência técnica registrada.
- [ ] Todo pacote tem rota (pipeline ou especialista direto).
- [ ] O calendário respeita a cadência e registra conflitos resolvidos.
- [ ] Reaproveitamento de acervo declara ângulo, formato e CTA próprios por
      uso.
- [ ] `context/campanhas.md` só mudou depois da aprovação, via
      `inboundfy-contexto-operacao`.

## Erros comuns

- **Objetivo de atividade.** "Publicar 12 posts" no lugar de "gerar 200
  testes". Sem resultado de negócio, não há como priorizar canal.
- **Canal sem função.** Ativar Instagram porque "todo mundo está lá", sem
  dizer que etapa de compra o canal atende.
- **Pilar genérico.** "Dicas" ou "Novidades" não orienta tema nenhum. Pilar
  bom liga um problema da persona à oferta.
- **Plano maior que a equipe.** Volume que a cadência real não sustenta vira
  calendário atrasado na segunda semana.
- **Acervo como fila automática.** Publicar o mesmo conteúdo em cinco canais
  com o mesmo texto. Cada uso precisa de ângulo próprio.
- **Só busca ou só compartilhamento.** Só busca demora meses e não cria
  marca. Só compartilhamento some do feed em dois dias.
- **Calendário recriado do zero.** Apagar o mês e refazer perde o estado das
  peças em produção.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-estrategia**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

A estratégia opera no nível de campanha e de período. Ela consome contexto e
pesquisa e entrega direção para quem produz.

| Saída da estratégia | Quem consome |
| --- | --- |
| Brief aprovado | `inboundfy-contexto-operacao` registra em `context/campanhas.md` |
| Concorrente novo ou dado desatualizado | `inboundfy-contexto-concorrentes` |
| Análise profunda de concorrente | `inboundfy-concorrentes` e `inboundfy-engenharia-reversa` |
| Tema de busca que precisa de palavra-chave | `inboundfy-seo` |
| Pacote com material bruto | `inboundfy-planejamento` |
| Item de acervo a reaproveitar | `inboundfy-acervo` |
| Peça avulsa | `inboundfy-especialista-<canal>` |
| Divergência sobre direção da campanha | `inboundfy-conselho-marketing` |
| Plano de medição dos indicadores | `inboundfy-metricas` |
| Plano de distribuição e lançamento | `inboundfy-growth-distribuicao` e `inboundfy-growth-lancamento` |
