---
name: inboundfy-growth-retencao
description: Planeja retenção, cancelamento e recuperação de pagamento com diagnóstico por coorte, mensagens e acompanhamento da permanência paga. Use quando o pedido falar em churn, perda de clientes, pausa, reativação, inadimplência ou cobrança falha.
---

# Retenção, saída e recuperação de pagamento

Use para estudar perda de clientes, oferecer ajuda pertinente, desenhar cancelamento claro e recuperar pagamentos falhos. Retenção é continuidade útil e paga, não dificuldade para sair. Ativação inicial segue para `inboundfy-growth-onboarding`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Na ausência de sentinela, apresente o alerta canônico do preflight e acione `inboundfy-setup` antes de criar artefatos.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/produtos.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/integracoes.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/estrategia.md`. Consulte `.inboundfy/framework/`, contratos, regras de cobrança e exportações por coorte. Permissões e finalidades das mensagens seguem a política informada do projeto.

## Entrada esperada

Receba base inicial de contas e receita recorrente, perdas e reduções, expansão da mesma base, falhas de pagamento, motivos de saída, tempo de uso, planos, recursos disponíveis, regras de pausa e cancelamento. Aceite marcos, rotina seguinte e dúvidas de `inboundfy-growth-onboarding` ou o plano de uso posterior de `inboundfy-growth-paywall`. Se ainda faltar acompanhamento, registre a coleta necessária antes de concluir sobre retenção. Peça fonte, período e definição de cada número antes de calcular churn.

## Perguntas de diagnóstico

- A conta saiu por escolha, falta de uso, problema do produto ou falha de cobrança?
- Os clientes ainda não ativados recebem a mesma intervenção que os recorrentes?
- Pausa e redução de plano existem de fato no sistema e no contrato?
- A aceitação de oferta resulta em pagamento e uso posterior ou apenas adia a saída?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md), reconcilie contas e receita da base inicial e separe cancelamento voluntário, falha de pagamento, redução de plano e expansão.
2. Analise coortes por entrada, plano, segmento e tempo de uso. Separe relato de motivo, comportamento observado e hipótese; dado ausente não vira conta saudável.
3. Escolha intervenção conforme a causa: ajuda de uso, resolução técnica, revisão de plano, pausa disponível ou saída direta. Não ofereça desconto como resposta automática a toda solicitação.
4. Desenhe cancelamento com acesso claro, motivo opcional, alternativa pertinente e confirmação de vigência, cobrança e acesso a dados. A pessoa pode seguir sem aceitar oferta ou responder pesquisa.
5. Leia [coortes e cobrança](references/coortes-e-cobranca.md). Para pagamento falho, confira motivo, tentativas já realizadas pelo provedor, prazo, avisos e atualização de meio de pagamento. Não duplique cobrança nem registre Pix emitido como recuperado.
6. Defina mensagens por evento, finalidade, canal autorizado, espera, limite, expiração e saída da automação. Leia `ESCRITA.md` e aplique `inboundfy-copy-editor`; Para `inboundfy-growth-sms`, inclua evento, origem e texto do opt-in, canal, fuso, frequência, custo, provedor e atendimento; no WhatsApp, modelo e última mensagem recebida. Campos ausentes permanecem pendentes.
7. Prepare testes de pausa, retorno, cancelamento, reenvio, pagamento confirmado e recusa. Envie eventos e conciliação a `inboundfy-rastreamento-conversao` e condições comerciais novas a `inboundfy-growth-pricing`.
8. Acompanhe permanência paga, contribuição e reclamações após a intervenção. Entregue achados de produto ao responsável e teste causal a `inboundfy-experimentacao`. Uma oferta aceita sem acompanhamento não conta como retenção consolidada.

## Saída

Entregue `retencao-<id>.md` no diretório operacional já registrado, com diagnóstico por coorte, mapa motivo-intervenção, fluxo de saída, recuperação de pagamento, mensagens, testes e leitura posterior. Mantenha ID, grupo growth, público, canal, oferta, fontes, estado, pendências e próxima ação.

## Validação

- Base inicial, perdas, redução e expansão usam a mesma população e período.
- Cliente novo não entra como receita retida da base inicial.
- Pausa, desconto e redução só aparecem se a operação puder cumprir.
- Cancelamento continua acessível sem pesquisa obrigatória ou conversa forçada.
- Pagamento recuperado exige confirmação do provedor e conciliação.
- Automação termina após pagamento, recusa, cancelamento ou prazo definido.
- O resultado acompanha permanência e margem além da aceitação imediata.

## Responsabilidade do grupo

Transforme perdas por coorte em intervenções por causa e fluxo de saída; entregue mensagens e aferição aos responsáveis de canal e cobrança. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Use conta + assinatura + evento + etapa para localizar a intervenção. Preserve motivo, oferta mostrada, resposta e versão. Reenvio técnico não cria nova cobrança ou incentivo. Uma conta cancelada só volta à recorrência após confirmação própria de reativação.
