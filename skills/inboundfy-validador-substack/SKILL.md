---
name: inboundfy-validador-substack
description: Valida peças Substack contra acervo, base editorial, persona, fontes, links, acesso e proibições do projeto. Use quando houver README candidato ou edição corrigida para revisar antes de retornar ao planejamento e ao fluxo de publicação.
---

# Validador Substack

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar uma sentinela, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre a escrita até a preparação. Depois leia as fontes locais relevantes.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Leia todos os Markdown de `.inboundfy/context/`, [REFERENCIA.md](REFERENCIA.md), o README da peça, com atenção a `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`
e os arquivos vinculados.

## Entrada esperada

Pacote de `inboundfy-especialista-substack`: README da peça em `canais/substack/`, com texto, frontmatter e revisão vinculada, ID, caminho da candidata, brief ou entrada avulsa, persona, fontes lidas, pendências e registros de revisão editorial e A5. Inclua relatório anterior nas novas rodadas.

## Fluxo

1. Leia [o procedimento e as categorias](REFERENCIA.md#procedimento-para-este-canal) e o [contrato da produtora](../inboundfy-especialista-substack/SKILL.md). Carregue a candidata inteira, entrada, brief, fontes e todos os contextos exigidos; não limite a leitura ao manifesto recebido.
2. Acione `inboundfy-base-validador` com candidata, brief ou indicação de peça avulsa, fontes e `inboundfy-especialista-substack` como produtora. Compare tese derivada do acervo, autoria, base editorial, persona, fontes, links, formato longo, CTA, frontmatter e condição de acesso. Use [os 11 itens espelhados](REFERENCIA.md#checklist-numerado-do-par) sem alterar sua numeração.
3. Execute passes literal, semântico, estrutural e visual sobre a versão inteira, incluindo metadata, links e CTA. Inspecione `brand/` e ativos existentes; justifique ausências. Registre revisão de `inboundfy-copy-editor` e A5 conforme a base.
4. Preencha [o relatório canônico e o quadro do canal](REFERENCIA.md#template-de-relatório); consulte [o exemplo preenchido](REFERENCIA.md#exemplo-de-relatório-preenchido). Localize trecho, regra, fonte e ação para cada achado. Não edite a candidata nem conceda aprovação parcial.
5. Devolva reprovação a `inboundfy-especialista-substack` com relatório e ação solicitada. Aceite a versão corrigida e repita todos os passes sobre o conjunto inteiro. Divergência de finalidade volta ao planejamento; fato obrigatório ausente vai ao responsável pelo contexto.
6. Antes de aprovar, obtenha ID, caminho e SHA-256 completo por `inboundfy content digest <id>`. Vincule o relatório à versão atual e devolva o resultado a `inboundfy-especialista-substack`; a produtora conduz o próximo encaminhamento. Mudança posterior exige nova rodada.

## Saída

Use o caminho da `inboundfy-base-validador`: `06-auditoria/assets/<canal>-<item>.md` em pacote ou `<nome-do-asset>.auditoria.md` junto à peça avulsa.

Relatório com veredito canônico da base e ações claras; eventual estado da peça segue o resultado da rodada.

## Validação

Reprove referência ausente, persona ausente, link quebrado, termo vetado ou
frontmatter incompleto.

## Responsabilidade do grupo

O grupo `validador` responde pela auditoria de peças Substack e pelo relatório ligado ao digest atual. A produtora altera a candidata. Consulte [o guia do grupo](REFERENCIA.md#guia-específico-do-grupo) para registrar devolução, pendência factual e retomada.

## Idempotência

Atualize o relatório existente sem duplicar apontamentos.
