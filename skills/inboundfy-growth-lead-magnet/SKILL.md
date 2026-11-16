---
name: inboundfy-growth-lead-magnet
description: Planeja materiais ricos com tarefa útil, captura, entrega e relacionamento ligados à oferta. Use quando o pedido falar em lead magnet, ebook gratuito, planilha para download, checklist, isca digital ou material para captar contatos.
---

# Material rico e captura de contatos

Use para checklist, planilha, modelo, guia, aula ou pacote de conhecimento que resolva uma tarefa delimitada antes da oferta. Esta skill coordena recurso, captura, entrega e relacionamento; cálculo interativo segue para `inboundfy-growth-ferramentas-gratuitas`.

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

Receba tarefa, persona, fase de compra, oferta posterior, acervo autorizado,
formato, esforço disponível, canal de distribuição e sistema de entrega.
Informe finalidade da coleta, campos desejados e fluxo posterior já existente.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Escolha uma tarefa que o destinatário consiga realizar com o recurso, sem depender de contratar a empresa.
2. Compare formato, contexto de uso, tempo necessário e recursos de produção. Consulte [entrega, nutrição e uso](references/entrega-nutricao-e-uso.md) para definir estrutura e teste de utilidade.
3. Relacione cada unidade do material ao acervo e à fonte. Se for pacote para agente, confira permissões e acesso às fontes antes de planejar distribuição.
4. Especifique amostra pública, regra de acesso, formulário, entrega imediata, email de confirmação e alternativa quando a mensagem não chegar.
5. Desenvolva o material e os briefs de página e relacionamento. Entregue a `inboundfy-especialista-ebook` brief com tema, promessa, público, ativos e estrutura disponível. Para `inboundfy-especialista-email`, informe objetivo, etapa, público, ângulo, ativos e CTA em cada brief. Encaminhe os assets às validadoras pareadas.
6. Planeje distribuição com `inboundfy-growth-distribuicao`. Peça a `inboundfy-rastreamento-conversao` eventos e UTMs, usando `.inboundfy/context/integracoes.md`, sem tratar download como compra.
7. Confira promessa, uso real, voz e fontes com `inboundfy-copy-editor` e `inboundfy-anti-slop`. Registre versão do recurso e pacote de handoff.

## Saída

Entregue briefing, recurso ou estrutura pronta para a especialista, landing page,
email de entrega e sequência posterior relacionados por IDs. Salve nos caminhos
do acervo e dos canais já definidos pelo projeto. Informe grupo growth, estado,
persona, canal, oferta, fontes, campo `brief` das peças, pendências e próxima ação.
Diferencie asset planejado, produzido, validado e publicado.

## Validação

- O material executa a tarefa anunciada e informa pré-requisitos.
- A amostra representa o conteúdo entregue, sem depoimento inventado.
- O formulário pede apenas informação com finalidade documentada.
- A entrega funciona sem exigir inscrição promocional adicional.
- A sequência distingue entrega solicitada de relacionamento autorizado.
- O plano mede acesso, uso e qualidade posterior, com janela comercial definida.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Mantenha o ID do recurso e dos assets associados. Ao alterar promessa, conteúdo ou persona, registre versão e pedido, preserve a anterior e revalide página, entrega e sequência. Não envie novamente a sequência para quem já a concluiu.
