---
name: inboundfy-growth-sms
description: Planeja fluxos de SMS e WhatsApp com permissão por canal, mensagens, frequência, saída, custo e atendimento. Use quando o pedido falar em lembrete por celular, alerta, campanha de SMS, opt-in, modelo de WhatsApp ou mensagens de ativação.
---

# SMS de relacionamento

Planeje SMS e WhatsApp no Brasil com opt-in registrado, mensagens curtas, custo por envio e atendimento preparado. A captura de permissão pode ser encaminhada a `inboundfy-growth-popups`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, encerre a escrita e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, `.inboundfy/pipeline.md`, o acervo relacionado e `.inboundfy/framework/`.

Leia também `.inboundfy/fontes-projeto.md`, as bases editoriais relacionadas e os documentos públicos citados. Antes de entregar copy, consulte `inboundfy-anti-slop` e `inboundfy-copy-edicao`.

## Entrada esperada

Receba finalidade (serviço, autenticação ou promoção), oferta, público, canal, evento de entrada, origem do opt-in, texto aceito, data, fuso, limite de frequência, provedor, capacidade de atendimento e custo vigente. Aceite o mapa motivo-intervenção de `inboundfy-growth-retencao` ou a solicitação de mensagens de `inboundfy-growth-revops`, mantendo finalidade, evento e encerramento do fluxo original. Para WhatsApp, peça status do modelo de mensagem e última mensagem recebida do usuário; para SMS, peça codificação, segmentos e canal real de descadastro.

## Fluxo

1. Classifique a finalidade da mensagem e identifique o evento de entrada, o público e os canais disponíveis.
2. Leia [REFERENCIA.md](REFERENCIA.md) e [permissoes e canais](references/permissoes-e-canais.md). Confira finalidade, permissão por canal, identidade do remetente, supressão e política de tratamento definida pelo projeto.
3. Escolha SMS, WhatsApp ou outro canal conforme urgência, conversa necessária, custo e permissão. Consulte `.inboundfy/context/integracoes.md` para localizar conectores e requisitos sem expor valores de variáveis.
4. Leia [fluxos custos e metricas](references/fluxos-custos-e-metricas.md). Defina entrada, espera, mensagem, saída, limite de frequência, horário local e responsável pelo atendimento.
5. Redija identidade, contexto, um CTA e saída simples. Para SMS, calcule segmentos com variáveis preenchidas; para WhatsApp, confira janela, categoria e aprovação atual do modelo.
6. Teste contatos inelegíveis, recusa, compra durante a espera, reenvio do evento, falha de entrega e expiração da janela. Fallback só usa outro canal com permissão própria.
7. Aplique `ESCRITA.md`, `inboundfy-copy-editor`, `inboundfy-copy-edicao` e `inboundfy-anti-slop`. Entregue o fluxo com fontes, teto de custo, estado e próxima ação. Operação externa depende de autorização correspondente ao envio.

## Saída

Plano de SMS e/ou WhatsApp e mensagens candidatas, ligados à campanha ou ao fluxo existente no projeto consumidor. Inclua ID, grupo growth, persona, canal, oferta, finalidade, registro de permissão, modelo e versão, horários, frequência, regras de saída, custos, métricas e responsável. Mensagem planejada não recebe estado de enviada; modelos não aprovados permanecem pendentes.

## Validação

- Permissão, finalidade e canal estão registrados; número informado sozinho não libera promoção.
- Cada mensagem identifica a marca e oferece saída funcional.
- A supressão é conferida novamente imediatamente antes do envio.
- Horário local, frequência entre campanhas e atendimento têm responsáveis.
- SMS tem prévia de codificação e custo com variáveis completas.
- WhatsApp tem janela conferida e modelo aprovado quando necessário.
- Compra, recusa e resposta impedem insistência automática conforme o fluxo.
- O teste distingue enviado, entregue, lido, clicado e convertido. Falha de permissão ou modelo devolve o plano antes de ativar.

## Responsabilidade do grupo

Transforme evento e permissão por canal em fluxo de mensagens com supressão, custo e responsável pelo atendimento. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
