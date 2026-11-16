---
name: inboundfy-especialista-infografico
description: Escreve título, blocos, legenda e descrição acessível de infográfico com fontes para os dados. Use quando o pedido trouxer texto para infográfico, comparação de valores, diagrama ou visualização de um processo.
---

# Inboundfy Infografico Redator

Skill de canal para o texto de infográfico. Produz o texto que a skill de
imagem (`inboundfy-especialista-infografico-imagem`) vai compor visualmente.

## Escopo

Cobre apenas o texto: título, blocos, legenda e alt text. A composição
visual é `inboundfy-especialista-infografico-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catálogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

- `context/marca-voz.md`: tom, mesmo em formato curto.
- `context/proibicoes.md`: vetos, especialmente contra dado fabricado ou
  estatística sem fonte.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto
  com cara de IA, aplicado na legenda de acompanhamento.
- `context/produtos.md`, `context/servicos.md` ou dado de pesquisa do pacote,
  quando o infográfico apresentar dado numérico.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): apenas
  para a técnica FAB aplicada na referência por formato.

## Entrada esperada

Um brief com o dado ou tese central a visualizar, número de blocos desejado
e fonte do dado.

## Fluxo

1. Leia o brief, diagnóstico, parâmetros e checklist em [REFERENCIA.md](REFERENCIA.md). Na redação, abra [modelos e exemplo](references/modelos-e-exemplo.md) e [a aplicação das estruturas](references/estruturas-persuasivas.md). Preserve as escolhas aprovadas; estrutura comercial obrigatória ausente retorna ao planejamento.
2. Leia o brief e confirme a fonte de cada dado numérico; nunca crie dado
   ou estatística sem origem rastreável.
3. Escreva um título curto que resuma a tese central em uma linha.
4. Escreva cada bloco com texto mínimo necessário para ser lido rapidamente
   dentro da peça visual; frases curtas aqui são uma escolha de canal, não
   uma violação de `ESCRITA.md`. Use o modelo de bloco visual vinculado no passo de redação.
5. Escreva a legenda de acompanhamento (para uso em post que compartilha o
   infográfico) e o alt text descritivo da imagem.
6. Rode `inboundfy-copy-editor` na legenda (o texto de prosa contínua do
   conjunto; ele cruza `context/proibicoes.md` e
   `context/estruturas-proibidas.md`),
   não nos blocos curtos do infográfico, que são intencionalmente
   telegráficos.
7. Registre a auditoria A5 de `inboundfy-anti-slop` do conjunto. Salve com frontmatter incluindo `titulo`, `fonte-dos-dados` e `brief`
   quando fizer parte de um pacote.
8. Envie a candidata inteira, brief, fontes e registros editoriais a `inboundfy-validador-infografico`. Corrija os achados pela especialista e repita a auditoria inteira até a aprovação.
9. Com a copy aprovada, entregue o pacote de arte descrito em Responsabilidade do grupo a `inboundfy-especialista-infografico-imagem`, quando previsto no brief. Retorne a `inboundfy-planejamento` com os arquivos aprovados e relatórios correspondentes.

## Saída

Arquivo Markdown com título, blocos, legenda e alt text, salvo no caminho de
`context/canais.md` para o canal infográfico.

## Validação

- Todo dado numérico tem fonte rastreável registrada.
- Legenda passou pela auditoria de `inboundfy-copy-editor`.
- Alt text descreve a imagem de forma útil para leitor de tela.
- Aprovação registrada por `inboundfy-validador-infografico`.

## Responsabilidade do grupo

Produza título, blocos, legenda e alt text de infográfico para o formato aprovado. Use a lista numerada de `REFERENCIA.md` antes de enviar à `inboundfy-validador-infografico`. Encaminhe a copy aprovada para `inboundfy-especialista-infografico-imagem`, com IDs dos blocos, fontes e ordem de leitura. A arte não pode abreviar a fonte nem alterar a unidade.

## Idempotência

Editar a copy já existente altera apenas o bloco indicado.
