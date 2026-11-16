---
name: inboundfy-growth-email-frio
description: Escreve sequências B2B de prospecção com personalização verificável, cadência e tratamento das respostas. Use quando o pedido falar em email frio, cold email, primeira abordagem comercial ou acompanhamento de contatos prospectados.
---

# E-mail de prospecção

Escreva sequências B2B curtas com pertinência verificável, remetente identificável e tratamento das respostas. A pesquisa e a qualificação da lista pertencem a `inboundfy-growth-prospeccao`.

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

Receba lista qualificada com origem e data, persona e função, sinal específico, oferta com fonte, objetivo da conversa, remetente, capacidade diária e condições de envio registradas. Receba também exclusões, recusas anteriores, domínio de envio, histórico de entregabilidade e SLA de resposta. Lista sem procedência volta para `inboundfy-growth-prospeccao`.

## Fluxo

1. Identifique a campanha, a lista qualificada e o objetivo da conversa. Separe redação da sequência de operação dos envios.
2. Leia [REFERENCIA.md](REFERENCIA.md). Confira pertinência da lista, fonte, data, finalidade, base de tratamento registrada e lista de supressão. Consulte integrações disponíveis em `.inboundfy/context/integracoes.md` quando existir; nunca reproduza segredos no artefato.
3. Leia [entrega e cadencia](references/entrega-e-cadencia.md) para preparar remetente, autenticação, validação de contatos, piloto, intervalos e parada. O plano não autoriza disparos.
4. Redija abertura ligada a um sinal verificável, hipótese de problema, valor comprovável e um pedido pequeno. Prepare contatos posteriores com informação nova e encerramento claro.
5. Leia [respostas e metricas](references/respostas-e-metricas.md) para classificar respostas, suspender a cadência e definir responsável, horários e encaminhamento ao CRM.
6. Aplique `ESCRITA.md`, `inboundfy-copy-editor`, `inboundfy-copy-edicao` e `inboundfy-anti-slop`. Confira assunto, identidade, saída simples e fontes de toda promessa.
7. Entregue sequência, regras de envio e tratamento das respostas com ID e estado. Encaminhe a operação de receita para `inboundfy-growth-revops` e material comercial para `inboundfy-enablement-vendas`.

## Saída

Sequência de prospecção ligada ao ID de campanha no caminho já adotado pelo projeto consumidor, com assuntos, corpos, intervalos, sinal e fonte, segmentos, exclusões, limites de envio, regra de parada, responsável pelas respostas e tabela de métricas por coorte. Use o envelope compartilhado; não grave contatos pessoais no framework. Texto final em pacote preserva `brief` e revisão correspondente.

## Validação

- A personalização explica a pertinência da oferta e tem fonte com data.
- A lista não contém endereços inválidos, recusas ou contatos sem procedência.
- SPF, DKIM, DMARC e resposta do remetente têm conferência ou pendência explícita.
- O assunto corresponde ao corpo sem simular conversa anterior.
- Cada mensagem contém identidade, um pedido e saída simples.
- Resposta, recusa e falha permanente encerram ou suspendem a sequência conforme o tipo.
- As taxas distinguem entrega, resposta humana, resposta positiva e reunião realizada.
- Qualquer promessa sem fonte retorna à redação; envio depende do alcance autorizado.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
