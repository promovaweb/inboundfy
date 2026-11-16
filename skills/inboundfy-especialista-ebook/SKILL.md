---
name: inboundfy-especialista-ebook
description: Escreve arquitetura e capítulos de ebook com promessa, progressão, exemplos e fontes a partir de brief aprovado. Use quando o pedido for montar um livro curto, desenvolver capítulos ou revisar um ebook antes da capa e diagramação.
---

# Inboundfy Ebook Redator

Skill de canal para ebook; cobre tanto a arquitetura editorial (promessa,
público, capítulos) quanto a escrita do corpo dos capítulos.

## Escopo

Cobre texto de ebook. Capa e imagem OpenGraph são `inboundfy-especialista-ebook-imagem`.

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

- `context/marca-voz.md`: tom e voz de formato longo.
- `context/publico.md`: persona a que o ebook se dirige.
- `context/produtos.md` e/ou `context/servicos.md`: quando o ebook mencionar
  oferta da empresa.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): para o
  capítulo de abertura de ebook com função comercial e para trechos que
  apresentam produto.

## Entrada esperada

Brief de ebook aprovado ou avulso, com tema, promessa central, persona, objetivo, ativos de apoio e estrutura de capítulos quando já definida.

## Fluxo

1. Leia a entrada completa, `ESCRITA.md` e os contextos exigidos. Resolva lacunas obrigatórias com o planejamento ou a manutenção de contexto indicada por `CONTEXTO.md` antes de redigir. Consulte [o diagnóstico e os parâmetros de ebook](REFERENCIA.md#diagnóstico-da-peça).
2. Defina a arquitetura se ainda faltar: promessa, entrada e entrega de cada capítulo. Use [o modelo de arquitetura](REFERENCIA.md#modelos-por-situação). Execute A4 sobre sumário, abertura e primeira unidade antes de expandir.
3. Escreva por dependência entre capítulos, em prosa contínua com demonstração e limite. Evite repetir entregas ou fragmentar em dicas, salvo formato pedido no brief. Aplique [a estrutura editorial](references/estrutura-editorial.md) somente nas partes comerciais autorizadas.
4. Confira nomes, números, remissões e transições no conjunto. Termine o livro com CTA único. Preserve títulos, tabelas e legendas para diagramação; não atribua páginas antes da paginação.
5. Execute `inboundfy-copy-editor` por capítulo, trate os achados e releia o livro inteiro. Confira também [o modelo de entrega à diagramação](REFERENCIA.md#modelos-por-situação).
6. Salve no caminho definido em [Saída](#saída), com [o template da peça](REFERENCIA.md#template-da-peça), envelope compartilhado e `brief` em pacote. Na montagem, leia [o exemplo completo](references/exemplo-completo.md); preserve os parâmetros aprovados.
7. Execute A5 com `inboundfy-anti-slop` e confira os 11 itens de [conferência do par](REFERENCIA.md#checklist-numerado-do-par). Entregue a `inboundfy-validador-ebook` candidata, ID, caminho, brief ou entrada avulsa, persona, fontes, pendências e registros de revisão editorial e A5.
8. Se receber reprovação de `inboundfy-validador-ebook`, leia o relatório, corrija o alcance solicitado e repita revisão editorial, A5 e leitura integral. Reenvie à mesma validadora até aprovação da versão atual.
9. Após aprovação textual, encaminhe à `inboundfy-especialista-ebook-imagem` para capa e OpenGraph, com ID, brief, versão textual aprovada, título, subtítulo e formato. Retorne a `inboundfy-planejamento` com livro, relação dos capítulos, fontes, relatório aprovado e digest atual.

## Saída

Arquivo Markdown do ebook (um arquivo por capítulo ou um único arquivo com
seções, conforme `context/canais.md` definir), salvo no caminho do canal
ebook.

## Validação

- Progressão de capítulos é lógica, sem repetição de conteúdo entre eles.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Menção institucional confere com `context/`.
- Aprovação registrada por `inboundfy-validador-ebook`.

## Responsabilidade do grupo

O grupo `especialista` responde pela redação e pelas correções de ebooks. Preserve o brief, o ID, a origem factual e o estado real da candidata; encaminhe somente a versão aprovada. O [guia do grupo](REFERENCIA.md#guia-específico-do-grupo) define o registro da entrega.

## Idempotência

Editar um capítulo já existente altera apenas o capítulo indicado, sem
reescrever os demais.
