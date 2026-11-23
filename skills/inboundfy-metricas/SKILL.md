---
name: inboundfy-metricas
description: Define um plano de medição com métricas, eventos, UTMs e painel ligado às perguntas do negócio. Use quando o pedido falar em indicadores de marketing, metas, medir campanhas, plano de analytics ou dicionário de eventos.
---

# Métricas de inbound

Use para criar ou revisar o plano de medição de um projeto: quais perguntas
o negócio precisa responder, quais métricas respondem cada uma, quais
eventos e UTMs alimentam essas métricas e como o painel é lido. A skill
define o quê e o porquê. A instalação de tags, pixels, camada de dados,
Consent Mode e conversões de servidor fica com
`inboundfy-rastreamento-conversao`, que recebe o dicionário de eventos
pronto. A comparação de modelos de crédito entre canais fica com
`inboundfy-atribuicao`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Skill certa |
| --- | --- |
| O projeto não sabe quais números acompanhar | `inboundfy-metricas` |
| Cada pessoa da equipe nomeia eventos e UTMs de um jeito | `inboundfy-metricas` |
| O painel tem 40 gráficos e ninguém sabe o que fazer com ele | `inboundfy-metricas` |
| Uma campanha nova precisa de meta e leitura de resultado | `inboundfy-metricas` |
| O evento definido não dispara, duplica ou não chega ao GA4 | `inboundfy-rastreamento-conversao` |
| As plataformas brigam pelo crédito da mesma venda | `inboundfy-atribuicao` |
| Uma variação de página precisa de teste A/B | `inboundfy-experimentacao` |

## Perguntas de diagnóstico

1. Qual escolha a equipe faz toda semana ou todo mês e hoje faz no escuro?
2. O que conta como resultado de negócio: pedido pago, contrato assinado,
   mensalidade ativa, matrícula?
3. Onde esse resultado é registrado (loja virtual, CRM, ERP, gateway de
   pagamento, planilha)?
4. Quais ferramentas já coletam dados (GA4, Meta Ads, Google Ads, CRM,
   plataforma de email, WhatsApp Business) e quem tem acesso?
5. Quais eventos e UTMs já existem e quem os criou?
6. Quem vai olhar o painel, com que frequência e o que faz quando um número
   cai?

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/publico.md`, `.inboundfy/estrategia.md`, o catálogo de
conteúdos, o calendário e as ferramentas registradas em
`.inboundfy/context/integracoes.md`. Consulte
`.inboundfy/framework/` para canais e fontes. Sem oferta ou persona
definidas, registre a lacuna e acione a skill de contexto correspondente
antes de fixar metas.

## Entrada esperada

Receba objetivo, oferta, canal, campanha, etapa do funil, ferramentas,
eventos existentes, janela de tempo e dados disponíveis. Para revisão de um
plano existente, receba o arquivo atual e a exportação dos eventos
coletados nos últimos 30 dias.

## Fluxo

1. Comece pela pergunta de negócio, não pelo painel. Escreva de três a cinco
   perguntas, cada uma ligada a uma escolha recorrente. Use
   [plano-de-medicao.md](references/plano-de-medicao.md).
2. Defina a métrica principal, as métricas de apoio e as medidas de
   qualidade de cada pergunta, montando a árvore de métricas do
   [REFERENCIA.md](REFERENCIA.md).
3. Liste os eventos que alimentam as métricas, no padrão `objeto_acao`, com
   propriedades, gatilho e fonte. Use
   [dicionario-de-eventos.md](references/dicionario-de-eventos.md) e
   preserve os nomes que já existem.
4. Padronize as UTMs e relacione cada peça ao ID de acervo e ao código da
   peça. Use [utm-e-leitura.md](references/utm-e-leitura.md).
5. Separe alcance, interação, conversão, retenção e receita no painel
   lógico. Cada bloco responde uma das perguntas do passo 1.
6. Defina metas a partir do histórico do próprio projeto. Referências de
   mercado entram só como ordem de grandeza.
7. Registre limites conhecidos: recusa de cookies, vendas no WhatsApp sem
   origem, abertura de email inflada por proteção de privacidade, amostragem.
8. Entregue dicionário, oferta, URLs, destinos, consentimento e acessos
   disponíveis a `inboundfy-rastreamento-conversao` para implementar e conferir
   disparos. Para atribuição, junte período, conversão e exportações de receita.
9. Na leitura periódica, compare por canal, persona e oferta sem somar
   números de fontes diferentes, sempre com número absoluto e denominador.
   Os números de produção (peças por estado, publicações por mês, acervo sem
   uso) vêm de `project_stats` ou `inboundfy stats --json`; mantenha-os
   separados das métricas de audiência das plataformas.

## Saída

Salve o plano em `.inboundfy/metricas/plano-de-medicao.md` e o dicionário
de eventos em `.inboundfy/metricas/eventos.md`, ou nos caminhos definidos
em `.inboundfy/estrategia.md`. Leituras periódicas vão para
`.inboundfy/relatorios/metricas/AAAA-MM.md`. O plano traz perguntas,
árvore de métricas, definição de cada métrica (fórmula, fonte, frequência,
responsável), eventos, padrão de UTMs, metas e limites.

## Validação

Reprove o plano quando:

- uma métrica não responde a nenhuma pergunta escrita no passo 1;
- uma taxa aparece sem numerador e denominador definidos;
- a métrica principal é de vaidade (seguidores, visualizações, sessões) sem
  ligação com resultado de negócio;
- dois eventos medem a mesma ação com nomes diferentes;
- a conversão principal depende de uma única fonte sem conferência com o
  sistema que registra o dinheiro;
- dado pessoal (email, telefone, CPF) aparece em propriedade de evento ou
  URL, contrariando a LGPD.

Na reprovação, corrija o plano e repita a leitura integral antes do
handoff.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** objetivo, oferta, ferramentas e eventos existentes ligados ao pedido;
- **transformação:** perguntas viram métricas, eventos, UTMs e painel lógico;
- **saída:** plano de medição, dicionário de eventos ou leitura periódica;
- **handoff:** `inboundfy-rastreamento-conversao` para implementar eventos,
  `inboundfy-atribuicao` para comparar crédito entre canais,
  `inboundfy-experimentacao` para testar hipóteses e `inboundfy-growth-cro`
  para melhorar etapas do funil.

## Idempotência

Preserve nomes de eventos, UTMs e IDs existentes. Uma renomeação entra com
período de transição, com os dois nomes coletados ao mesmo tempo e a data
registrada no plano. Metas antigas ficam no histórico do arquivo. Leituras
periódicas nunca sobrescrevem meses anteriores.
