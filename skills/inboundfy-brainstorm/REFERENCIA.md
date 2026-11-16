# Referência do brainstorm

Material de apoio do fluxo de `inboundfy-brainstorm`. A matriz de autonomia
é lida no passo 1. Cada etapa tem arquivo próprio em `references/etapas/`.

## Arquivos de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/etapas/00-triagem.md](references/etapas/00-triagem.md) | Passo 2 | Preservação da ideia, regra de slug, classificação da intenção. |
| [references/etapas/01-entrevista.md](references/etapas/01-entrevista.md) | Passo 3 | Roteiro de investigação, lacuna essencial contra opcional. |
| [references/etapas/02-pesquisa.md](references/etapas/02-pesquisa.md) | Passo 4 | Hierarquia de fontes, ficha de fonte, busca de contraponto. |
| [references/etapas/03-sintese.md](references/etapas/03-sintese.md) | Passo 5 | Tese, recorte, argumentos, objeções, ativos e oportunidades. |
| [references/etapas/04-validacao.md](references/etapas/04-validacao.md) | Passo 6 | Rubrica de aprovação e rota de retorno. |
| [references/geracao-de-angulos.md](references/geracao-de-angulos.md) | Passo 5 | Técnicas para gerar e testar teses e ângulos, com pontuação ICE. |
| [references/banco-de-ideias-por-objetivo.md](references/banco-de-ideias-por-objetivo.md) | Passos 5 e 7 | Ideias de ação de marketing por objetivo e orçamento, com a skill que executa cada uma. |

## Matriz de autonomia

| Situação | Conduta |
| --- | --- |
| A informação existe em `context/` | Usar e citar o arquivo. |
| A lacuna muda apenas formato ou tom | Inferir pela voz e pelos canais; registrar a suposição. |
| A lacuna muda tese ou audiência | Incluir no bloco único de perguntas. |
| A lacuna envolve preço, oferta, autoria ou capacidade do produto | Perguntar; não inventar. |
| A lacuna pode gerar afirmação jurídica, médica ou financeira | Perguntar; não inventar. |
| A pesquisa encontra fontes divergentes | Registrar o conflito e usar formulação conservadora. |
| Um canal não tem material suficiente | Não criar oportunidade para esse canal. |
| A validação encontra falha reparável | Corrigir e revalidar sem pedir aprovação. |

## Intenção predominante

A triagem classifica a ideia numa intenção. A intenção orienta a tese e o
tipo de oportunidade.

| Intenção | Pergunta da peça | Oportunidades típicas |
| --- | --- | --- |
| Educar | O que a pessoa precisa entender? | Artigo explicativo, carrossel, vídeo curto |
| Posicionar | Que visão a marca defende? | Post de opinião no LinkedIn, newsletter |
| Gerar demanda | Que problema a pessoa ainda não percebeu? | Artigo de diagnóstico, webinar, material rico |
| Converter | O que falta para a pessoa escolher? | Comparativo, caso, email de oferta |
| Reter | Como o cliente tira mais da oferta? | Tutorial, email de onboarding, changelog |

## Template

Resumo final entregue ao usuário depois da aprovação:

```markdown
Brainstorm aprovado em `brainstorms/<data>-<slug>/brainstorm.md`.

- **Tese:** <tese em uma frase>
- **Fontes registradas:** <n>
- **Suposições:** <n>, das quais <n> mudam o texto se estiverem erradas
- **Oportunidades:** <lista curta com canal e ângulo>
- **Encaminhamento:** <inboundfy-acervo ou inboundfy-planejamento>
```

O modelo completo do arquivo é `templates/brainstorm.md`. Não crie seções
fora dele.

## Exemplo

Caso fictício para ilustrar o resultado. Não use os dados como contexto
real.

**Projeto:** Clínica Respira, fisioterapia respiratória em Curitiba.
Agendamento pelo WhatsApp. Canais ativos: Instagram, blog e email.
Persona-01: mãe de criança com bronquiolite recorrente.

**Ideia recebida:** `Quero falar que fisioterapia respiratória não é só para
idoso.`

Trechos do `brainstorm.md` aprovado:

```markdown
---
data: "2026-11-15"
slug: "fisioterapia-respiratoria-criancas"
status: "aprovado"
origem: "ideia-do-usuario"
---

# Brainstorm: fisioterapia respiratória em crianças

## Ideia original

Quero falar que fisioterapia respiratória não é só para idoso.

## Leitura inicial

- **Intenção predominante:** educar
- **Audiência:** persona-01, mãe de criança com bronquiolite recorrente
- **Problema reconhecível:** criança com chiado que volta a cada inverno
- **Resultado útil:** saber quando perguntar ao pediatra sobre
  fisioterapia respiratória

## Suposições de trabalho

| Suposição | Motivo | Como confirmar | Impacto se estiver errada |
| --- | --- | --- | --- |
| A clínica atende crianças a partir de 6 meses | Não consta idade mínima em servicos.md | Perguntar à responsável técnica | Muda o recorte de idade da tese |

## Tese e recorte

- **Tese:** a fisioterapia respiratória ajuda crianças com bronquiolite a
  eliminar secreção, mas complementa e não substitui o acompanhamento do
  pediatra.
- **Recorte:** crianças de 6 meses a 5 anos com quadros recorrentes.
- **Ângulo:** o que a mãe pode observar em casa para levar ao pediatra.
- **Limite:** casos agudos com desconforto respiratório grave exigem pronto
  atendimento, não agendamento.

## Oportunidades por canal

| Prioridade | Canal | Formato | Ângulo próprio | Ativos usados |
| --- | --- | --- | --- | --- |
| alta | Instagram | carrossel | quatro sinais para mostrar ao pediatra | argumento 1, objeção 2 |
| média | blog | artigo | como funciona uma sessão, passo a passo | argumento 2, fonte 3 |
| baixa | email | nutrição | preparar a criança para a primeira sessão | argumento 3 |
```

A tese evita promessa de cura, registra o limite clínico e fica dentro das
proibições de saúde do projeto. A pergunta sobre idade mínima foi feita no
bloco único da entrevista porque muda o recorte.

## Checklist

- [ ] A wrapper executou as cinco etapas na ordem.
- [ ] Houve no máximo um bloco de perguntas, com até cinco perguntas.
- [ ] Toda pergunta alterava a veracidade, a tese ou o foco.
- [ ] A intenção predominante foi registrada.
- [ ] Pelo menos três ângulos foram testados antes de escolher a tese.
- [ ] Cada oportunidade tem ângulo próprio e aponta ativos do arquivo.
- [ ] O resumo final informa caminho, tese, suposições e encaminhamento.

## Erros comuns

- Interromper a execução para escolher slug, título ou canal opcional.
- Tratar ausência de fonte como permissão para preencher um fato provável.
- Encaminhar brainstorm reprovado para produção.
- Repetir a ideia como tese, sem recorte nem limite.
- Propor a mesma peça resumida em cinco canais.
- Aceitar a primeira tese sem testar ângulos alternativos.
- Prometer resultado em tema regulado (saúde, finanças, direito) sem fonte e
  sem limite.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-brainstorm**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O brainstorm segue em modo autônomo: pergunta só nas exceções da matriz,
registra suposições e encaminha sem aprovação intermediária.

| Retorno da validação | Etapa que reabre |
| --- | --- |
| Falta foco, audiência ou limite | 01-entrevista |
| Falta prova ou fonte | 02-pesquisa |
| Falta clareza, argumento ou ângulo próprio | 03-sintese |
| Violação de escrita ou proibição | 03-sintese |

| Resultado aprovado | Próxima skill |
| --- | --- |
| Uma peça, um canal | `inboundfy-planejamento` |
| Várias peças ou canal não indicado | `inboundfy-acervo` |
| Ideia de ação fora de conteúdo | skill `inboundfy-growth-*` indicada no banco de ideias |
| Ideia que pede campanha com KPI | `inboundfy-estrategia` |
