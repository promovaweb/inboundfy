---
name: inboundfy-validador-podcast
description: Valida pautas e shownotes de podcast contra brief, participantes, gravação final, tempos, links e proibições. Use quando houver roteiro de conversa ou notas candidatas para conferir a fase do episódio e revisar antes da entrega ao planejamento.
---

# Inboundfy Validador Podcast

Valida o asset e devolve correções à `inboundfy-especialista-podcast`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/pessoas.md`,
`context/marca-voz.md`, `context/publico.md`, `context/ferramentas.md`,
`context/produtos.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Pacote de `inboundfy-especialista-podcast`: pauta e/ou shownotes markdown conforme a fase do episódio, ID, caminho da candidata, brief ou entrada avulsa, persona, fontes lidas, pendências e registros de revisão editorial e A5. Inclua relatório anterior nas novas rodadas.

## Fluxo

1. Leia [o procedimento e as categorias](REFERENCIA.md#procedimento-para-este-canal) e o [contrato da produtora](../inboundfy-especialista-podcast/SKILL.md). Carregue a candidata inteira, entrada, brief, fontes e todos os contextos exigidos; não limite a leitura ao manifesto recebido.
2. Acione `inboundfy-base-validador` com candidata, brief ou indicação de peça avulsa, fontes e `inboundfy-especialista-podcast` como produtora. Compare fase, participantes, competência, blocos, perguntas, duração prevista, gravação final, tempos observados, shownotes e links. Use [os 11 itens espelhados](REFERENCIA.md#checklist-numerado-do-par) sem alterar sua numeração.
3. Execute passes literal, semântico, estrutural e visual sobre a versão inteira, incluindo metadata, links e CTA. Inspecione `brand/` e ativos existentes; justifique ausências. Registre revisão de `inboundfy-copy-editor` e A5 conforme a base.
4. Preencha [o relatório canônico e o quadro do canal](REFERENCIA.md#template-de-relatório); consulte [o exemplo preenchido](REFERENCIA.md#exemplo-de-relatório-preenchido). Localize trecho, regra, fonte e ação para cada achado. Não edite a candidata nem conceda aprovação parcial.
5. Devolva reprovação a `inboundfy-especialista-podcast` com relatório e ação solicitada. Aceite a versão corrigida e repita todos os passes sobre o conjunto inteiro. Divergência de finalidade volta ao planejamento; fato obrigatório ausente vai ao responsável pelo contexto.
6. Antes de aprovar, obtenha ID, caminho e SHA-256 completo por `inboundfy content digest <id>`. Vincule o relatório à versão atual e devolva o resultado a `inboundfy-especialista-podcast`; a produtora conduz o próximo encaminhamento. Mudança posterior exige nova rodada.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`.

## Validação

Aprove apenas com participantes e links confirmados e nenhum achado.

## Responsabilidade do grupo

O grupo `validador` responde pela auditoria de pautas e shownotes e pelo relatório ligado ao digest atual. A produtora altera a candidata. Consulte [o guia do grupo](REFERENCIA.md#guia-específico-do-grupo) para registrar devolução, pendência factual e retomada.

## Idempotência

Atualize o relatório por rodada; não altere a pauta.
