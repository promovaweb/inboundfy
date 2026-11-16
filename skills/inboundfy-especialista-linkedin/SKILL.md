---
name: inboundfy-especialista-linkedin
description: Escreve post nativo ou artigo de LinkedIn com autoria, fontes e ação final do brief aprovado. Use quando o pedido trouxer post profissional, artigo de LinkedIn, texto copiável para o feed ou publicação assinada.
---

# Inboundfy LinkedIn Redator

Skill de canal para LinkedIn; post nativo curto e artigo longo.

## Escopo

Cobre texto de post e de artigo de LinkedIn. Imagem correspondente é
`inboundfy-especialista-linkedin-imagem`.

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

- `context/marca-voz.md`: tom e pessoa gramatical.
- `context/pessoas.md`: quando o brief indicar que o post é assinado por uma
  pessoa específica; confirme que o tema está dentro dos temas que essa
  pessoa pode assinar.
- `context/publico.md`: persona a que o post se dirige.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): quando o
  brief marcar objetivo comercial.

## Entrada esperada

Um brief com: formato (post nativo ou artigo), ângulo, autor (se houver),
ativos de apoio e CTA.

## Fluxo

1. Leia o brief, diagnóstico, parâmetros e checklist em [REFERENCIA.md](REFERENCIA.md). Na redação, abra [modelos e exemplo](references/modelos-e-exemplo.md) e [a aplicação das estruturas](references/estruturas-persuasivas.md). Preserve as escolhas aprovadas; estrutura comercial obrigatória ausente retorna ao planejamento.
2. Leia o brief e confirme se há autor definido; se houver, leia a entrada
   correspondente em `context/pessoas.md` e confirme que o tema está dentro
   da competência declarada dessa pessoa.
3. Leia `ESCRITA.md` e escreva o gancho de abertura; a primeira linha
   decide se o post é expandido, então ela precisa apresentar o objeto real,
   não uma frase de efeito vazia. Siga o método de construção de [REFERENCIA.md](REFERENCIA.md).
4. Para post nativo: escreva em texto puro, sem sintaxe Markdown (sem `#`,
   `**`, links formatados); o corpo precisa ser copiável direto para o
   campo de post do LinkedIn. Ver checklist de canal em `REFERENCIA.md`.
5. Para artigo longo: pode usar estrutura com headings, mais próximo de
   `inboundfy-especialista-blog` em profundidade, mas mantendo a voz em primeira
   pessoa quando houver autor.
6. Feche com CTA claro e, quando aplicável, uma pergunta genuína ao público;    nunca pergunta retórica seguida de resposta óbvia.
7. Rode `inboundfy-copy-editor`, trate os achados e registre a auditoria A5 de `inboundfy-anti-slop`. Repita a leitura integral.
8. Salve com frontmatter incluindo `formato` (post/artigo), `autor` (se
   houver) e `brief` quando fizer parte de um pacote.
9. Envie a candidata inteira, brief, fontes e registros editoriais a `inboundfy-validador-linkedin`. Corrija os achados pela especialista e repita a auditoria inteira até a aprovação.
10. Com a copy aprovada, entregue o pacote de arte descrito em Responsabilidade do grupo a `inboundfy-especialista-linkedin-imagem`, quando previsto no brief. Retorne a `inboundfy-planejamento` com os arquivos aprovados e relatórios correspondentes.

## Saída

Arquivo Markdown (ou texto puro para post nativo) salvo no caminho definido
em `context/canais.md` para LinkedIn.

## Validação

- Post nativo está livre de sintaxe Markdown no corpo copiável.
- Autor, quando definido, está falando dentro da competência registrada em
  `context/pessoas.md`.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Aprovação registrada por `inboundfy-validador-linkedin`.

## Responsabilidade do grupo

Produza post nativo ou artigo de LinkedIn para o formato aprovado. Use a lista numerada de `REFERENCIA.md` antes de enviar à `inboundfy-validador-linkedin`. Se houver imagem no brief, encaminhe a copy aprovada para `inboundfy-especialista-linkedin-imagem`, com título, texto literal e alt text previsto.

## Idempotência

Editar um post já existente altera apenas o que o pedido atual indicar.
