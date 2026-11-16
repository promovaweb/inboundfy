---
name: inboundfy-growth-revops
description: Entrega mapa de operação de receita com etapas, campos, pontuação, responsáveis, SLA e automações de CRM. Use quando o pedido falar em RevOps, qualificação de leads, roteamento comercial, passagem para vendas ou conciliação de dados do funil.
---

# Operação de receita

Organize a operação entre marketing, vendas e atendimento com etapas observáveis, donos, SLA e dados reconciliáveis. A execução fica no CRM autorizado do projeto consumidor.

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

Receba modelo comercial, oferta e ticket, ciclo de venda, CRM canônico, etapas atuais, equipes e horários, volume por origem, campos disponíveis, políticas de dados, integrações e problema operacional. Para revisão de pontuação, receba histórico com datas de qualificação, atributos disponíveis naquele momento e resultados comerciais maduros. Aceite listas de `inboundfy-growth-prospeccao` com IDs, fonte, sinal, contato e elegibilidade, ou regras de atendimento de `inboundfy-growth-sms` com pedido, mensagem e contexto mínimo. Complete CRM, equipe, horários e política de dados antes de especificar a importação ou automação. Lacunas viram fila de conferência, nunca exclusão automática.

## Fluxo

1. Delimite o problema operacional, equipes afetadas e alcance do piloto no CRM informado.
2. Leia [REFERENCIA.md](REFERENCIA.md). Identifique CRM canônico, entidades, origens e diferença entre ciclo comercial e pipeline editorial de `.inboundfy/pipeline.md`.
3. Leia [etapas pontuacao e metricas](references/etapas-pontuacao-e-metricas.md). Defina entrada e saída das etapas, campos obrigatórios, responsáveis e motivos de devolução. Separe ciclo inbound e outbound sem somar contatos duplicados.
4. Especifique pontuação por adequação e intenção, ou adote qualificação manual se faltar histórico. Valide usando coortes e atributos disponíveis no momento da qualificação, sem informações futuras.
5. Leia [roteamento e automacao](references/roteamento-e-automacao.md). Defina prioridade de dono, capacidade, horários, SLA, fila alternativa, escalonamento e comportamento com dados incompletos. Consulte `.inboundfy/context/integracoes.md` quando existir, sem copiar segredos.
6. Descreva automações como gatilho, condições, ação, chave única, registro, falha e reversão. Teste repetição, atraso, retorno fora de ordem, indisponibilidade e mudança de dono em simulação antes de ativar.
7. Entregue mapa, dicionário, regras de encaminhamento, painel e plano de piloto. Relacione fontes, ID, estado e próxima ação. Mudanças no CRM exigem autorização do alcance correspondente. Texto público passa por `ESCRITA.md`, `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Mapa de operação de receita no arquivo já adotado pela campanha ou operação do projeto consumidor: entidades, etapas, campos, pontuação, donos, SLA, roteamento, automações, testes, métricas e piloto com reversão. Use ID, grupo growth, fontes, persona, canal, oferta, estado e próxima ação. O mapa não altera o pipeline editorial nem cria integrações ausentes.

## Validação

- Toda etapa comercial tem regra observável de entrada, saída e responsável.
- Contato, conta e oportunidade possuem identidades distintas e ligação entre si.
- A pontuação não usa atributos posteriores à qualificação nem transforma recusa em simples perda de pontos.
- Dono existente, fila alternativa e SLA fora do expediente estão definidos.
- Repetição e atraso de eventos não duplicam contatos, tarefas ou reuniões.
- Dados ausentes e falha de enriquecimento mantêm a solicitação válida em fila.
- O painel informa coorte, moeda, fuso, denominador e maturação.
- Piloto tem responsável, limite, comparação e reversão. Falha de regra retorna à especificação antes de ativação.

## Responsabilidade do grupo

Transforme etapas comerciais e dados disponíveis em mapa de receita para o CRM, preservando a separação do pipeline editorial. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
