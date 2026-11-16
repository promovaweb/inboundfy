# Referência de GEO

Material de apoio de `inboundfy-geo`. O `SKILL.md` diz a ordem; este arquivo
diz como fazer cada passo, com modelos e um caso completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-geo**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 e 4 | [monitoramento em plataformas de IA](references/monitoramento-em-plataformas-de-ia.md) | Montar a carteira de perguntas, rodar o teste manual, separar citação de recomendação. |
| 5 | [blocos citáveis e autoridade](references/blocos-citaveis-e-autoridade.md) | Reescrever páginas em blocos extraíveis, com dados próprios, fontes e autoria. |
| 6 | [acesso de robôs e presença externa](references/acesso-de-robos-e-presenca-externa.md) | Conferir `robots.txt`, avaliar `llms.txt` e mapear presença em terceiros. |

## Como as respostas de IA escolhem fontes

O que se sabe com segurança e o que é hipótese de mercado:

| Afirmação | Situação |
| --- | --- |
| A visão geral de IA do Google usa o índice do Google e as mesmas regras de qualidade da busca | Orientação oficial do Google |
| Não existe marcação especial para entrar na visão geral de IA; vale o SEO comum | Orientação oficial do Google |
| ChatGPT com busca, Perplexity e Copilot consultam índices de busca na hora da pergunta e citam links | Comportamento observável nas próprias interfaces |
| Robôs de IA respeitam `robots.txt` pelo nome do agente publicado por cada empresa | Documentação das plataformas |
| Páginas com resposta direta, tabela e dado próprio são citadas com mais frequência | Hipótese apoiada em estudos de mercado, sem garantia |
| Presença em avaliações, comunidades e vídeo aumenta a chance de recomendação | Hipótese apoiada em observação de mercado |
| `llms.txt` ajuda modelos a entender o site | Hipótese sem adoção confirmada pelos grandes buscadores |

Todo artefato marca cada recomendação como **oficial**, **observável** ou
**hipótese**.

## Estrutura de resposta citável

1. Resposta curta para a pergunta principal.
2. Explicação do mecanismo ou contexto.
3. Exemplo concreto ligado à persona.
4. Limite, exceção ou condição relevante.
5. Fonte e data quando o fato puder mudar.
6. Próximo passo coerente com a oferta.

## Sinais de boa base

- uma entidade tem nome e função claros;
- cada número ou afirmação externa tem fonte;
- o texto separa fato, interpretação e recomendação;
- a resposta continua útil mesmo sem o CTA;
- links internos apontam para páginas que desenvolvem o assunto.

## Modos de trabalho

| Modo | Quando escolher | Entrega principal |
| --- | --- | --- |
| Diagnóstico de visibilidade | Ninguém sabe como a marca aparece nas IAs | Carteira de perguntas com teste datado e classificação |
| Otimização de página | Uma página deveria ser citada e não é | Revisão com blocos citáveis propostos |
| Correção de informação | A IA diz preço, função ou região errados | Lista de fontes erradas e páginas a corrigir ou criar |
| Plano de presença | Concorrentes aparecem por fontes de terceiros | Lista priorizada de diretórios, avaliações, comunidades e vídeos |

## Métricas de referência

| Métrica | Como medir | Leitura |
| --- | --- | --- |
| Taxa de citação | Perguntas com link do site entre as fontes ÷ perguntas testadas | Começa perto de zero em marca pequena; meta inicial de 10% a 20% em seis meses |
| Taxa de recomendação | Perguntas com a marca sugerida como opção ÷ perguntas testadas | Mais importante que a citação para perguntas de escolha |
| Participação nas respostas | Menções da marca ÷ menções de todas as marcas nas mesmas respostas | Compare com os três concorrentes principais |
| Exatidão | Respostas com preço, função e região corretos ÷ respostas que citam a marca | Abaixo de 100% exige correção de fonte |
| Tráfego de referência de IA | Sessões com origem chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com | Costuma ser pequeno em volume e com conversão acima da média orgânica |
| Impressões na busca | Search Console, incluindo buscas com visão geral de IA | O Google não separa esse recurso no relatório |

As respostas mudam entre execuções. Teste cada pergunta ao menos duas vezes
por rodada e compare tendências mensais, não respostas isoladas.

## Template de registro GEO

```markdown
---
id: {{id}}
skill: inboundfy-geo
tipo: {{diagnostico-geo | revisao-geo | plano-presenca}}
estado: rascunho
entrada:
  - {{acervo/<id>-<data>-<slug>/ ou URL}}
personas:
  - {{persona-xx}}
fontes:
  - {{caminho ou URL com data de consulta}}
proxima_skill: {{skill seguinte}}
---

# GEO: {{tema}}

## Carteira de perguntas

| # | Pergunta | Tipo | Página que deveria responder | Prioridade |
| --- | --- | --- | --- | --- |
| P1 | {{pergunta como a persona faria}} | {{definição, como fazer, comparação, melhor opção, preço}} | {{URL}} | {{alta/média/baixa}} |

## Teste de {{AAAA-MM-DD}}

| Pergunta | Plataforma | Marca citada? | Marca recomendada? | Quem aparece no lugar | Fontes citadas | Informação errada |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | {{ChatGPT}} | {{sim/não}} | {{sim/não}} | {{concorrente}} | {{URLs}} | {{nenhuma ou descrição}} |

## Achados

| # | Achado | Situação | Ação | Skill |
| --- | --- | --- | --- | --- |
| 1 | {{}} | {{oficial, observável ou hipótese}} | {{}} | {{}} |

## Blocos citáveis propostos

### {{URL}}

- **Pergunta:** {{}}
- **Resposta em até 3 frases:** {{}}
- **Tabela ou lista:** {{descrição}}
- **Dado próprio com fonte:** {{}}
- **Autoria e data:** {{}}

## Acesso técnico

- **robots.txt:** {{agentes permitidos e vetados}}
- **Conteúdo visível sem JavaScript:** {{sim/não}}
- **llms.txt:** {{existe, proposto como hipótese, não se aplica}}

## Presença externa

| Site | Tipo | Situação | Ação | Skill |
| --- | --- | --- | --- | --- |
| {{}} | {{diretório, avaliação, comunidade, vídeo}} | {{ausente, desatualizado, ativo}} | {{}} | {{inboundfy-growth-diretorios ou inboundfy-seo-links-externos}} |

## Plano escolhido

{{opção escolhida, opções rejeitadas e motivo}}

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho}}
```

## Exemplo completo: Agenda Viva

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A Agenda Viva é um software de agendamento on-line para salões,
barbearias e clínicas de estética, com sede em Recife. Plano a partir de
R$ 89 por mês, cobrança por Pix ou cartão, lembrete automático por WhatsApp
e sinal de reserva por Pix. A persona principal (`persona-02`, Júlio) é dono
de uma barbearia com quatro cadeiras que perde cerca de oito horários por
semana com faltas.

**Pedido.** "Quando alguém pergunta ao ChatGPT qual sistema usar para
barbearia, só aparecem os concorrentes."

**Carteira montada (trecho).**

| # | Pergunta | Tipo | Página |
| --- | --- | --- | --- |
| P1 | Qual o melhor sistema de agendamento para barbearia? | melhor opção | /barbearias/ |
| P2 | Como reduzir faltas de clientes no salão? | como fazer | /blog/reduzir-faltas/ |
| P3 | Sistema de agendamento com lembrete por WhatsApp | melhor opção | /recursos/whatsapp/ |
| P4 | Quanto custa um sistema de agenda para salão? | preço | /planos/ |
| P5 | Como cobrar sinal de reserva por Pix? | como fazer | não existe |

**Teste de 2026-11-13 (resumo).** Cinco perguntas, quatro plataformas, duas
execuções cada.

- P1 e P3: dois concorrentes recomendados em todas as plataformas. As
  fontes citadas eram uma lista de "melhores sistemas" num blog de gestão e
  perfis em site de avaliação de software. A Agenda Viva não tem perfil nesse
  site.
- P2: o Perplexity citou um artigo de concorrente com dados de faltas. O
  artigo da Agenda Viva começa com três parágrafos de contexto e não tem
  número próprio.
- P4: o Gemini disse que a Agenda Viva custa R$ 59, preço de 2024. A fonte
  era uma página antiga de comparação num blog de terceiros.
- P5: nenhuma plataforma citou fonte da Agenda Viva. Não há página sobre o
  assunto.

**Achados classificados.**

| # | Achado | Situação | Ação | Skill |
| --- | --- | --- | --- | --- |
| 1 | Ausência no site de avaliação usado como fonte | observável | Criar perfil e pedir avaliações a clientes ativos | `inboundfy-growth-diretorios` |
| 2 | Ausência nas listas de "melhores sistemas" | observável | Contatar autores com dados atualizados | `inboundfy-seo-links-externos` |
| 3 | Artigo de faltas sem resposta inicial nem dado | hipótese apoiada | Reescrever com bloco citável e dado da base de clientes | `inboundfy-especialista-blog` |
| 4 | Preço antigo repetido | observável | Pedir correção ao blog e deixar o preço visível em texto na página de planos | `inboundfy-seo-links-externos` |
| 5 | Pergunta sem página | observável | Criar guia de sinal por Pix | `inboundfy-seo` e especialista |

**Três planos apresentados.**

1. **Recomendado.** Começar pela presença externa (perfil no site de
   avaliação, pedido de avaliações, correção do preço) e, em paralelo,
   reescrever o artigo de faltas. Ataca as fontes que as IAs já usam.
2. Criar primeiro o guia de sinal por Pix e reescrever três páginas. Mais
   controle, efeito mais lento nas perguntas de escolha.
3. Só monitorar por dois meses antes de agir. Menor esforço, sem mudança
   esperada.

A equipe escolhe o plano 1.

**Bloco citável proposto para `/blog/reduzir-faltas/`.**

> Faltas em salões e barbearias caem quando o cliente confirma o horário
> perto do atendimento e paga um sinal. Nos 1.200 estabelecimentos que usam a
> Agenda Viva, a taxa de faltas caiu de 14% para 6% nos três meses depois de
> ativar lembrete por WhatsApp 24 horas antes e sinal de R$ 15 por Pix.

Fonte: relatório interno de 2026-10, registrado em
`acervo/0207-2026-11-13-faltas/pesquisa.md`. Autoria: Larissa Nunes,
gerente de sucesso do cliente (nome fictício). Data de atualização visível.

**LGPD.** O dado agregado não expõe cliente nem estabelecimento. O pedido de
avaliações vai só para clientes que autorizaram contato de marketing.

**Pendências.** Confirmar se o relatório interno pode ser publicado;
confirmar o preço vigente em `.inboundfy/context/ofertas.md`.

**Métricas para a próxima rodada (2026-12-13).** Taxa de recomendação em P1
e P3, exatidão do preço em P4, sessões com origem em plataformas de IA.

## Checklist

- [ ] O modo de trabalho foi escolhido e registrado.
- [ ] A carteira tem perguntas de definição, como fazer, comparação, melhor
  opção e preço.
- [ ] Cada teste tem plataforma, data, resposta e fontes citadas.
- [ ] Cada pergunta foi testada ao menos duas vezes na rodada.
- [ ] Citação e recomendação foram registradas separadamente.
- [ ] Informação errada sobre a marca tem fonte identificada.
- [ ] Cada recomendação está marcada como oficial, observável ou hipótese.
- [ ] Os blocos citáveis respondem nas primeiras frases e funcionam sozinhos.
- [ ] Dados próprios têm fonte interna e autorização de uso.
- [ ] O `robots.txt` foi conferido para os agentes das plataformas.
- [ ] A presença externa tem skill responsável por item.
- [ ] Três planos foram apresentados e a escolha foi registrada.
- [ ] A próxima rodada de teste tem data.

## Erros comuns

- **Prometer posição em resposta de IA.** Nenhuma plataforma garante
  citação. Trabalhe com taxa e tendência.
- **Testar uma vez e concluir.** A mesma pergunta gera respostas diferentes.
  Repita e compare por mês.
- **Escrever para robô.** Repetir a pergunta em todo heading e encher a
  página de FAQ artificial piora a leitura e não tem efeito comprovado.
- **Vetar todos os robôs de IA por padrão.** Vetar o robô de busca de
  uma plataforma tira a marca das respostas dela. Separe robô de treino de
  robô de busca antes de vetar qualquer um.
- **Tratar `llms.txt` como obrigação.** É hipótese. Pode ser criado com
  baixo esforço, sem expectativa de resultado.
- **Ignorar fontes de terceiros.** Em perguntas de "melhor opção", as IAs
  costumam citar listas, avaliações e comunidades, não o site da marca.
- **Inventar dado para parecer citável.** Número sem fonte é fabricação e
  viola as proibições do projeto.
- **Conteúdo só em JavaScript ou imagem.** Preço e descrição precisam estar
  em texto no HTML.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para GEO, os campos próprios são: pergunta monitorada, plataforma, data do
teste, situação da recomendação (oficial, observável ou hipótese) e próxima
skill.

## Roteiro de diagnóstico

No passo 2 do fluxo, leia [as perguntas de diagnóstico](references/diagnostico.md). Pergunte somente o que os insumos não responderem.
