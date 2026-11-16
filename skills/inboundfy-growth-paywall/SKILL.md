---
name: inboundfy-growth-paywall
description: Planeja telas e estados de acesso pago com limites, preço, pagamento pendente e retorno à tarefa após upgrade. Use quando o pedido falar em paywall, fim de trial, recurso pago, limite atingido ou conversão dentro do produto.
---

# Paywall e passagem ao acesso pago

Use para limite de uso, recurso pago, fim de trial e troca de plano dentro do produto. Entregue brief de tela, regras de exibição e estados de acesso. Preço e embalagem pertencem a `inboundfy-growth-pricing`; página pública de planos segue para `inboundfy-growth-cro`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`.
Se faltar uma sentinela, apresente: “O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio.” Encerre sem criar artefatos até o reparo.

Leia `AGENTS.md`, `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` quando aplicável,
`.inboundfy/context/canais.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/estruturas-proibidas.md` e aprendizados confirmados.
Consulte o acervo relacionado, as fontes relevantes registradas no projeto,
`.inboundfy/pipeline.md` e os documentos do método em `.inboundfy/framework/`.
Se faltar dado comercial, encaminhe para `inboundfy-contexto-oferta` sem preenchê-lo
por suposição. Leia `ESCRITA.md` antes de redigir texto público.

## Entrada esperada

Receba plano atual, recurso solicitado, limites aprovados, situação do trial,
valor já experimentado, oferta e condições de cobrança, canal web ou aplicativo,
papéis de compra e uso, dados de conversão e dúvidas frequentes.
Aceite a tabela de `inboundfy-growth-pricing` após confirmação comercial. Hipóteses ainda não aprovadas permanecem no estudo de preço. Informe o que acontece com dados e acesso ao recusar ou expirar o prazo.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Identifique motivo comercial real, população elegível e tarefa que a pessoa tentava concluir.
2. Confronte o valor já entregue com o pedido de pagamento. Se o usuário ainda não chegou ao marco necessário, encaminhe a lacuna a `inboundfy-growth-onboarding`.
3. Consulte [estados de acesso e cobrança](references/estados-de-acesso-e-cobranca.md) para especificar aviso, limite, comparação de plano, recusa, checkout, pagamento pendente, confirmação e retorno à tarefa.
4. Escreva título, benefício pertinente, limites, preço total e período, CTA de compra e alternativa. Confirme cada afirmação em oferta ou produto.
5. Registre elegibilidade, frequência, supressão após recusa e tratamento de quem não pode contratar pela conta. Preserve trabalho já criado.
6. Peça a `inboundfy-rastreamento-conversao` eventos de exposição, pagamento confirmado e acesso liberado com versão da tela, usando `.inboundfy/context/integracoes.md`. Hipóteses seguem para `inboundfy-experimentacao`.
7. Revise copy com `inboundfy-copy-editor` e `inboundfy-anti-slop`. Entregue brief à execução e comunicação pertinente à especialista do canal.

## Saída

Salve brief Markdown no diretório de trabalho do projeto com ID, grupo growth,
estado, fontes, persona, canal, oferta e próxima ação. Inclua tabela de estados,
texto da tela, condição de exibição, alternativas, mensagens de erro, confirmação
e métricas posteriores. Peças do pacote mantêm `brief` e validação específica.
O documento planeja a experiência; não configura cobrança automaticamente.

## Validação

- O limite e o recurso pago correspondem ao plano aprovado.
- A tela explica valor, preço total, período, renovação e alternativa.
- Recusa encerra a exibição conforme a regra registrada.
- Compra confirmada e liberação de acesso possuem confirmação própria.
- Pix gerado ou checkout aberto não contam como pagamento.
- Dados, rascunho e tarefa permanecem coerentes após fechar ou voltar.
- Métricas incluem reembolso, uso posterior e cancelamento no horizonte definido.

## Responsabilidade do grupo

Transforme oferta aprovada e tarefa interrompida em brief de acesso pago para produto, cobrança e comunicação. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Mantenha ID, versão da tela e versão da oferta. Preserve a opção já escolhida e a tarefa pendente ao retomar checkout. Não repita convite após compra confirmada. Se preço ou limite mudar, registre o pedido e revalide estados, copy e aferição antes de substituir a versão aprovada.
