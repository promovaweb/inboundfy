---
name: inboundfy-growth-popups
description: Planeja popups, barras e formulários contextuais com texto, regras de exibição, fechamento acessível e destino dos dados. Use quando o pedido falar em captura, convite na página, frequência de popup, modal ou formulário por clique.
---

# Popups e formulários contextuais

Use para convite contextual, captura, aviso, pesquisa curta e formulário acionado por clique. Entregue texto, exibição e acompanhamento. Oferta de upgrade dentro do produto segue para `inboundfy-growth-paywall`; conteúdo do recurso segue para `inboundfy-growth-lead-magnet`.

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

Receba finalidade, páginas, público, origem do tráfego, oferta ou recurso,
formato atual, canais ativos, sistema de captura, preferências de comunicação
e dados de desempenho. Aceite de `inboundfy-growth-sms` a necessidade de captura de permissão com finalidade, texto e canal separados. Informe outros overlays, banner de consentimento,
chat e trechos de tarefa que devem permanecer livres de interrupção.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Confirme se o convite precisa interromper a leitura ou se CTA no conteúdo e barra atendem ao objetivo.
2. Escolha formato, momento e público pela tarefa da página. Registre exclusões, versão da campanha e prioridade diante de outros componentes.
3. Consulte [exibição, foco e acompanhamento](references/exibicao-foco-e-acompanhamento.md) para definir elegibilidade, gatilho, frequência, supressão, fechamento, foco e alternativa mobile.
4. Escreva título, benefício concreto, formato entregue, campos, CTA, recusa e estados de envio. Confirme destino dos dados e finalidade aprovada para cada canal.
5. Teste o roteiro de abertura, teclado, fechamento, erro, repetição, retorno e captura já existente. O estado confirmado no receptor governa sucesso e supressão.
6. Peça a `inboundfy-rastreamento-conversao` eventos e comparação por população elegível, consultando `.inboundfy/context/integracoes.md`. Encaminhe a `inboundfy-experimentacao` o teste com grupo sem convite quando pertinente.
7. Revise copy com `inboundfy-copy-editor` e `inboundfy-anti-slop`. Entregue captura e follow-up para as responsáveis de operação e canal, com estado e pendências.

## Saída

Salve brief Markdown no diretório de trabalho registrado no projeto, com ID,
grupo growth, entrada, fontes, persona, canal, oferta, estado e próxima ação.
Inclua copy, matriz de exibição, regras de prioridade, requisitos de foco,
campos, envio, destino dos dados, métricas e casos de aceite.
Peças de canal mantêm `brief` e validação específica. Publicação e automação
continuam com o responsável de implementação indicado no projeto.

## Validação

- O convite corresponde ao assunto e à intenção da página.
- Existe justificativa para o formato e alternativa menos interruptiva.
- Campanhas não se sobrepõem nem reaparecem após recusa contra a regra.
- Fechar, Escape, foco e uso mobile possuem comportamento definido.
- O envio informa finalidade e separa entrega de inscrição promocional.
- Reenvio e contato já existente não geram lead novo indevido.
- A aferição inclui a conversão principal da página e reclamações.

## Responsabilidade do grupo

Transforme objetivo da página e oferta em brief de captura com regras de exibição, entrega do recurso e follow-up por canal. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Atualize o mesmo ID de campanha sem apagar histórico de recusa, captura ou versão aprovada. Mudança de recurso não autoriza limpar supressões automaticamente. Preserve preferências e deduplicação ao retomar; nova regra de exibição exige registro do pedido e conferência dos estados afetados.
