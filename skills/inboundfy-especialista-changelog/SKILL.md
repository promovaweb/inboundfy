---
name: inboundfy-especialista-changelog
description: Escreve entradas de changelog e notas de versão com mudança, alcance, disponibilidade e ação necessária a partir de release ou brief. Use quando o pedido for anunciar uma correção, explicar uma melhoria ou redigir release notes para usuários.
---

# Inboundfy Changelog Redator

Skill de canal para changelog; traduz uma mudança técnica de produto em
texto legível para o usuário final.

## Escopo

Cobre a entrada de changelog. Não decide o que entra na entrada; parte do
release ou brief fornecido.

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

- `context/produtos.md`: para descrever a funcionalidade afetada com
  precisão.
- `context/marca-voz.md`: tom, geralmente mais direto e técnico neste canal.
- `context/glossario.md`: grafia oficial de produto e funcionalidade.

## Entrada esperada

Release de produto, nota técnica, pull request ou changelog bruto de dependência, ou brief aprovado. A entrada precisa permitir confirmar versão entregue, disponibilidade, público afetado e ação necessária.

## Fluxo

1. Leia a entrada completa, `ESCRITA.md` e os contextos exigidos. Resolva lacunas obrigatórias com o planejamento ou a manutenção de contexto indicada por `CONTEXTO.md` antes de redigir. Consulte [o diagnóstico e os parâmetros de changelog](REFERENCIA.md#diagnóstico-da-peça).
2. Extraia mudança, comportamento anterior e atual, versão, disponibilidade, público e ação. Confirme entrega na fonte técnica; PR aberto não comprova liberação. Confira nomes em `context/produtos.md` e `context/glossario.md`.
3. Classifique novidade, melhoria ou correção conforme o efeito. Siga [o método e o template](REFERENCIA.md#método-de-produção); preserve categorias e histórico adotados pelo projeto.
4. Escreva efeito visível, alcance e ação em linguagem pública. Para migração, use [o modelo com pré-requisitos, prazo e conferência](REFERENCIA.md#modelos-por-situação). Para mudança automática, declare ausência de ação necessária.
5. Execute `inboundfy-copy-editor`, trate os achados e releia a entrada inteira contra a versão entregue. Prosa técnica também segue `ESCRITA.md`.
6. Salve no caminho definido em [Saída](#saída), com [o template da peça](REFERENCIA.md#template-da-peça), envelope compartilhado e `brief` em pacote. Na montagem, leia [o exemplo completo](references/exemplo-completo.md); preserve os parâmetros aprovados.
7. Execute A5 com `inboundfy-anti-slop` e confira os 11 itens de [conferência do par](REFERENCIA.md#checklist-numerado-do-par). Entregue a `inboundfy-validador-changelog` candidata, ID, caminho, brief ou entrada avulsa, persona, fontes, pendências e registros de revisão editorial e A5.
8. Se receber reprovação de `inboundfy-validador-changelog`, leia o relatório, corrija o alcance solicitado e repita revisão editorial, A5 e leitura integral. Reenvie à mesma validadora até aprovação da versão atual.
9. Retorne a `inboundfy-planejamento` com entrada, fonte técnica e relatório aprovado. Preserve o arquivo histórico do canal.

## Saída

Arquivo Markdown da entrada de changelog, salvo no caminho de
`context/canais.md` para o canal changelog.

## Validação

- Nome de produto/funcionalidade confere com `context/produtos.md` e
  `context/glossario.md`.
- Entrada diz claramente o que muda para as pessoas afetadas.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Aprovação registrada por `inboundfy-validador-changelog`.

## Responsabilidade do grupo

O grupo `especialista` responde pela redação e pelas correções de notas de versão. Preserve o brief, o ID, a origem factual e o estado real da candidata; encaminhe somente a versão aprovada. O [guia do grupo](REFERENCIA.md#guia-específico-do-grupo) define o registro da entrega.

## Idempotência

Editar uma entrada já existente altera apenas o campo indicado.
