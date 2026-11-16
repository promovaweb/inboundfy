---
name: inboundfy-area-growth
description: Recebe pedidos de crescimento, localiza o gargalo do funil entre aquisição, ativação, retenção, receita e indicação e encaminha para a skill de growth certa. Use quando o pedido falar em crescer, mais leads, mais vendas, conversão, churn, lançamento, anúncios ou indicação.
---

# Área de growth

Ponto de entrada para pedidos de **growth**. Esta skill não
produz o trabalho final: ela entende o pedido, confere o setup, escolhe a skill
da área que resolve a etapa atual e entrega a ela um pacote de entrada completo.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **area**.

## Quando usar e quando não usar

Use para atrair mais leads ou usuários, melhorar cadastro e onboarding, reduzir cancelamento, aumentar receita por cliente, lançar produto, criar programa de indicação, testar canais e anúncios.

Não use para medir resultados ou montar rastreamento (use `inboundfy-area-dados`) ou abordagem comercial direta (use `inboundfy-area-vendas`).

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta. Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/integracoes.md` e `.inboundfy/context/aprendizado.md`.

## Entrada esperada

Pedido em linguagem natural, com ou sem arquivos, URLs, números ou IDs do
acervo. Aceite a entrada incompleta: as perguntas de diagnóstico completam o
que falta.

## Perguntas de diagnóstico

Faça só as perguntas cuja resposta ainda não está no pedido ou no contexto:

1. Em qual etapa o número está pior: gente chegando, gente se cadastrando, gente usando, gente pagando ou gente indicando?
2. Quais números atuais você tem para essa etapa?
3. Qual o orçamento e o prazo disponíveis?
4. O produto é serviço, infoproduto, SaaS, loja ou negócio local?

## Fluxo

1. Execute `inboundfy doctor --strict`. Se o setup não estiver pronto, acione
   `inboundfy-setup` e pare.
2. Leia o pedido e o contexto. Anote o que já se sabe e o que falta.
3. Faça as perguntas de diagnóstico que faltarem, numa única mensagem.
4. Escolha a rota na tabela abaixo. Quando duas rotas servirem, apresente as
   duas com a recomendada primeiro e espere a escolha.
5. Monte o pacote de entrada com o modelo do [REFERENCIA.md](REFERENCIA.md).
6. Acione a skill escolhida com o pacote. Uma skill por vez.
7. Quando a skill terminar, proponha a próxima etapa da sequência comum, se
   houver, e espere a confirmação.

## Roteamento

| Situação | Skill | Resultado |
| --- | --- | --- |
| Aquisição paga: Google, Meta, LinkedIn, TikTok | `inboundfy-growth-anuncios` | plano de campanhas e públicos |
| Peças de anúncio: imagens, vídeos, textos | `inboundfy-growth-criativos-anuncios` | lote de criativos e variações |
| Aquisição orgânica em redes | `inboundfy-growth-social` | plano de conteúdo social |
| Distribuir conteúdo já produzido | `inboundfy-growth-distribuicao` | plano de distribuição por canal |
| Comunidade, grupo, fórum | `inboundfy-growth-comunidade` | plano de comunidade |
| Influenciadores e criadores | `inboundfy-growth-influenciadores` | seleção e briefing de criadores |
| Imprensa e menções | `inboundfy-growth-relacoes-publicas` | pauta e plano de imprensa |
| Parcerias e co-marketing | `inboundfy-growth-parcerias` | proposta e plano de parceria |
| Eventos presenciais ou online | `inboundfy-growth-eventos` | plano do evento |
| Ferramenta gratuita como isca | `inboundfy-growth-ferramentas-gratuitas` | conceito e plano da ferramenta |
| Material rico para captar leads | `inboundfy-growth-lead-magnet` | lead magnet e fluxo de captura |
| Diretórios e marketplaces | `inboundfy-growth-diretorios` | lista priorizada de envios |
| Cadastro e formulário | `inboundfy-growth-signup` | fluxo de cadastro revisado |
| Primeiros dias do cliente | `inboundfy-growth-onboarding` | fluxo de onboarding |
| Página que não converte | `inboundfy-growth-cro` | diagnóstico e hipóteses de conversão |
| Pop-ups e barras | `inboundfy-growth-popups` | regras de exibição e textos |
| Cancelamento e churn | `inboundfy-growth-retencao` | plano de retenção |
| SMS e WhatsApp | `inboundfy-growth-sms` | fluxos de mensagem com opt-in |
| Crescimento que se alimenta | `inboundfy-growth-loops` | desenho de loop |
| Preço e planos | `inboundfy-growth-pricing` | estrutura de preços |
| Paywall e upgrade | `inboundfy-growth-paywall` | pontos e telas de upgrade |
| Lançamento de produto ou turma | `inboundfy-growth-lancamento` | plano de lançamento |
| Indicação e afiliados | `inboundfy-growth-referencias` | programa de indicação |
| Teste A/B de qualquer etapa | `inboundfy-experimentacao` | desenho do experimento |

## Sequências comuns

- Muita visita e pouco lead: `inboundfy-growth-cro` → `inboundfy-growth-lead-magnet` → `inboundfy-experimentacao`.
- Lançamento: `inboundfy-growth-lancamento` → `inboundfy-growth-anuncios` → `inboundfy-growth-criativos-anuncios` → `inboundfy-rastreamento-conversao`.
- Base parada: `inboundfy-growth-retencao` → `inboundfy-growth-referencias` → `inboundfy-growth-loops`.

## Saída

Diagnóstico de três a cinco linhas, a skill escolhida com o motivo, o pacote de
entrada entregue a ela e a próxima etapa sugerida.

## Validação

O setup está pronto, o objetivo foi identificado, uma única skill recebeu o
pacote e todo dado ausente virou pergunta, não suposição.

## Responsabilidade do grupo

Receba o pedido da área, faça o diagnóstico mínimo e encaminhe para uma única skill da área por vez. Não execute o trabalho da skill encaminhada.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** area
- **entrada:** pedido em linguagem natural ligado à área e estado do projeto;
- **transformação:** ação principal descrita no fluxo;
- **saída:** diagnóstico curto, rota escolhida e pacote de entrada para a skill da área;
- **handoff:** skill da área indicada pela tabela de roteamento.

## Idempotência

Uma nova execução relê o pedido e o estado. Se a skill encaminhada já produziu
um resultado para o mesmo ID, retome dela em vez de abrir um item novo.
