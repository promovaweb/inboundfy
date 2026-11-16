---
name: inboundfy-especialista-newsletter
description: Escreve newsletters editoriais com tese, curadoria comentada, fontes e metadata de e-mail ou web a partir de brief aprovado. Use quando o pedido for redigir uma edição longa, preparar um boletim analítico ou revisar newsletter para validação.
---

# Inboundfy Newsletter Redator

Skill de canal para newsletter longa; mais próxima de artigo editorial do
que de e-mail promocional curto.

## Escopo

Cobre newsletter editorial longa, seja distribuída por e-mail ou publicada
como artigo próprio. E-mail curto avulso ou de nutrição é
`inboundfy-especialista-email`.

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

- `context/marca-voz.md`: tom, pessoa gramatical, exemplos de voz.
- `context/publico.md`: persona e nível técnico esperado.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md`, `context/servicos.md` e `context/ferramentas.md`:
  quando a edição mencionar algo da empresa ou de terceiro.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): apenas
  para a técnica FAB, conforme a referência de estrutura editorial.

## Entrada esperada

Brief de newsletter aprovado ou avulso, com tema da edição, ângulo, persona, objetivo, ativos de apoio, distribuição e CTA.

## Fluxo

1. Leia a entrada completa, `ESCRITA.md` e os contextos exigidos. Resolva lacunas obrigatórias com o planejamento ou a manutenção de contexto indicada por `CONTEXTO.md` antes de redigir. Consulte [o diagnóstico e os parâmetros de newsletter](REFERENCIA.md#diagnóstico-da-peça).
2. Escolha o tratamento autorizado: análise, curadoria comentada ou lançamento. Siga [o método e os modelos](REFERENCIA.md#método-de-produção). Execute A4 sobre estrutura, abertura e primeira unidade antes de expandir.
3. Escreva abertura situada, desenvolvimento, exemplo interpretado, contraponto e fechamento em prosa contínua. Comente cada fonte de curadoria. Use [a estrutura editorial](references/estrutura-editorial.md) nas menções comerciais autorizadas.
4. Prepare assunto e pré-header no envio por e-mail. Preserve assinatura, fontes e rodapé nas versões previstas; mantenha CTA principal único. Consulte [o modelo de preparação do envio](REFERENCIA.md#modelos-por-situação).
5. Execute `inboundfy-copy-editor`, trate os achados e releia a edição inteira. Não altere cadência ou distribuição definidas no brief.
6. Salve no caminho definido em [Saída](#saída), com [o template da peça](REFERENCIA.md#template-da-peça), envelope compartilhado e `brief` em pacote. Na montagem, leia [o exemplo completo](references/exemplo-completo.md); preserve os parâmetros aprovados.
7. Execute A5 com `inboundfy-anti-slop` e confira os 11 itens de [conferência do par](REFERENCIA.md#checklist-numerado-do-par). Entregue a `inboundfy-validador-newsletter` candidata, ID, caminho, brief ou entrada avulsa, persona, fontes, pendências e registros de revisão editorial e A5.
8. Se receber reprovação de `inboundfy-validador-newsletter`, leia o relatório, corrija o alcance solicitado e repita revisão editorial, A5 e leitura integral. Reenvie à mesma validadora até aprovação da versão atual.
9. Retorne a `inboundfy-planejamento` com a edição, versões previstas, fontes, relatório aprovado e digest atual. O envio segue a integração do projeto.

## Saída

Arquivo Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal newsletter.

## Validação

- Corpo em prosa contínua, sem fragmentação artificial.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Toda menção institucional confere com `context/`.
- Aprovação registrada por `inboundfy-validador-newsletter`.

## Responsabilidade do grupo

O grupo `especialista` responde pela redação e pelas correções de newsletters. Preserve o brief, o ID, a origem factual e o estado real da candidata; encaminhe somente a versão aprovada. O [guia do grupo](REFERENCIA.md#guia-específico-do-grupo) define o registro da entrega.

## Idempotência

Editar uma edição já existente altera apenas o que o pedido atual indicar.
