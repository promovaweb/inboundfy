---
name: inboundfy-growth-onboarding
description: Planeja onboarding com marcos de primeiro valor, mensagens por comportamento, ajuda e passagem ao uso recorrente. Use quando o pedido falar em boas-vindas, implantação, ativação, primeira tarefa ou clientes que não começaram a usar.
---

# Onboarding e primeiro valor

Organize a comunicação após compra ou acesso autorizado, do primeiro contato até o uso que demonstra valor. Esta skill entrega marcos, instruções e mensagens; criação de conta fica com `inboundfy-growth-signup` e uso recorrente com `inboundfy-growth-retencao`.

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

Receba produto ou serviço, promessa da compra, persona, etapa de acesso, tarefas
necessárias, dados de uso e atendimento, prazo de implantação e responsável.
Aceite o brief de cadastro de `inboundfy-growth-signup` ou a passagem pós-venda de `inboundfy-growth-revops`, com acesso, escopo, responsável e pendências. Informe quem usa, quem administra e quem comprou. Para trial, registre duração,
limites e condições já aprovadas, sem redefinir a oferta.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Defina o resultado de primeiro valor e sua confirmação observável, distinguindo uso real, demonstração e configuração.
2. Registre todos os passos entre acesso e resultado. Classifique cada um como necessário agora, adiável, preenchível com dado já confirmado ou opcional.
3. Consulte [ativação e comunicação](references/ativacao-e-comunicacao.md) para modelar caminho mínimo, segmentos, checklist e estados vazios. Separe ação da pessoa de dependência da equipe.
4. Escreva mensagens por estado: boas-vindas, primeira tarefa, ajuda contextual, retomada, marco concluído e próximo uso. Defina gatilho, espera, canal, responsável e condição de saída.
5. Coordene email, produto e atendimento para impedir duplicação de mensagens. Encaminhe a `inboundfy-especialista-email` briefs aprovados com objetivo, etapa de relacionamento, público, ângulo, ativos e CTA, seguidos da validadora pareada.
6. Peça a `inboundfy-rastreamento-conversao` a aferição dos marcos e a janela de coorte, consultando `.inboundfy/context/integracoes.md`. Peça a `inboundfy-experimentacao` o desenho de hipóteses.
7. Revise instruções com `inboundfy-copy-editor` e `inboundfy-anti-slop`. Entregue a passagem para `inboundfy-growth-retencao` após o marco declarado, com pendências operacionais.

## Saída

Salve fluxo Markdown no diretório de trabalho registrado pelo projeto com ID,
grupo growth, estado, entrada, fontes, persona, canal, oferta e próxima ação.
Inclua mapa de passos, definição de primeiro valor, matriz de mensagens,
checklist do cliente, dependências e métricas por coorte. Peças de canal mantêm
brief e validação específica. Não ative automações ou prometa integração pronta
apenas porque o fluxo foi escrito.

## Validação

- O primeiro valor depende de resultado útil, não apenas login ou conclusão de tour.
- Cada passo obrigatório possui motivo e alternativa se a pessoa não puder concluí-lo.
- Dados demonstrativos estão identificados e não contam como uso real.
- Toda mensagem tem gatilho, tempo, canal autorizado e regra de saída.
- A conclusão de um marco encerra lembretes anteriores.
- A janela de ativação está completa para todas as contas comparadas.
- Quem comprou e quem executa recebem instruções compatíveis com seus papéis.

## Responsabilidade do grupo

Transforme acesso autorizado em um fluxo até o primeiro valor e entregue à retenção o marco confirmado, a rotina seguinte e as dúvidas abertas. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Retome o mesmo ID e o último marco confirmado. Preserve mensagens aprovadas e histórico de gatilhos. Alterações na definição de ativação recebem versão e reprocessamento explícito; não compare coortes com definições diferentes nem reenvie boas-vindas ao cliente ativo.
