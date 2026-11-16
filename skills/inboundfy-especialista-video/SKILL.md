---
name: inboundfy-especialista-video
description: Escreve roteiro de vídeo com cenas e apoio visual mínimo ou outline de talking head a partir do brief aprovado. Use quando o pedido trouxer vídeo longo, fala de apresentador, roteiro para gravação ou sequência de cenas.
---

# Inboundfy Video Roteirista

Skill de canal para roteiro de vídeo longo (YouTube e equivalentes) e para
outline de talking head.

## Escopo

Cobre roteiro e outline de cena. Thumbnail é `inboundfy-especialista-video-imagem`.

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
- `context/pessoas.md`: quando houver um apresentador definido; confirme
  competência sobre o tema.
- `context/publico.md`: persona e nível técnico.
- `context/proibicoes.md`: vetos que reprovam trecho falado.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): quando o
  brief marcar vídeo de conversão ou demonstração de produto.

## Entrada esperada

Um brief com: tema, formato (vídeo estruturado com cenas ou talking head),
apresentador (se houver), ativos de apoio e duração aproximada.

## Fluxo

1. Leia o brief, diagnóstico, parâmetros e checklist em [REFERENCIA.md](REFERENCIA.md). Na redação, abra [modelos e exemplo](references/modelos-e-exemplo.md) e [a aplicação das estruturas](references/estruturas-persuasivas.md). Preserve as escolhas aprovadas; estrutura comercial obrigatória ausente retorna ao planejamento.
2. Leia o brief e, se houver apresentador definido, confirme competência em
   `context/pessoas.md`.
3. Escreva o gancho dos primeiros segundos, apresentando o objeto real do
   vídeo, não uma promessa vaga. Siga o método de construção de [REFERENCIA.md](REFERENCIA.md).
4. Para vídeo estruturado: divida em cenas numeradas, cada uma com o texto
   falado e uma indicação mínima de apoio visual (ex.: "mostrar tela de
   X", "cortar para exemplo Y"); sem prescrever edição fora do escopo da
   skill. Use o template de cena dos modelos vinculados no passo de redação.
5. Para talking head: escreva outline de tópicos na ordem de fala, sem
   roteiro palavra por palavra, preservando espaço para fala natural do
   apresentador.
6. Aplique `ESCRITA.md` no texto falado, com frases feitas para serem
   ouvidas, não lidas; ritmo de fala real, não prosa de artigo.
7. Feche com CTA falado.
8. Rode `inboundfy-copy-editor` no texto falado, trate os achados e registre a auditoria A5 de `inboundfy-anti-slop`. Repita a leitura integral.
9. Salve com frontmatter incluindo `formato`, `apresentador` (se houver) e
   `brief` quando fizer parte de um pacote.
10. Envie a candidata inteira, brief, fontes e registros editoriais a `inboundfy-validador-video`. Corrija os achados pela especialista e repita a auditoria inteira até a aprovação.
11. Com a copy aprovada, entregue o pacote de arte descrito em Responsabilidade do grupo a `inboundfy-especialista-video-imagem`, quando previsto no brief. Retorne a `inboundfy-planejamento` com os arquivos aprovados e relatórios correspondentes.

## Saída

Arquivo Markdown com cenas ou outline, salvo no caminho definido em
`context/canais.md` para o canal de vídeo.

## Validação

- Apresentador, quando definido, está dentro da competência registrada.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Cena com apoio visual indicado não prescreve edição fora do escopo.
- Aprovação registrada por `inboundfy-validador-video`.

## Responsabilidade do grupo

Produza roteiro com cenas ou outline de talking head para o formato aprovado. Use a lista numerada de `REFERENCIA.md` antes de enviar à `inboundfy-validador-video`. Após a copy aprovada, encaminhe título e tema a `inboundfy-especialista-video-imagem`. O roteiro indica apenas apoio mínimo; não prescreve cortes, transições ou efeitos de edição.

## Idempotência

Editar um roteiro já existente altera apenas a cena ou trecho indicado.
