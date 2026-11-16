---
name: inboundfy-especialista-instagram
description: Escreve legenda, carrossel textual e roteiro de vídeo curto com CTA e descrição acessível. Use quando o pedido trouxer post de Instagram, slides de carrossel, Reels, Shorts ou TikTok a partir de brief aprovado.
---

# Inboundfy Instagram Redator

Skill de canal para Instagram e formatos curtos equivalentes. Cobre três
formatos de saída conforme o brief: legenda de post único, texto de
carrossel (slide a slide) e roteiro falado de vídeo curto.

## Escopo

Cobre texto e roteiro. Imagem de feed e pacote de carrossel são
`inboundfy-especialista-instagram-imagem`.

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

- `context/marca-voz.md`: tom e nível de informalidade permitido.
- `context/publico.md`: persona e jargão.
- `context/proibicoes.md`: vetos que reprovam texto.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): quando o
  brief marcar objetivo comercial.

## Entrada esperada

Um brief indicando o formato (post, carrossel ou vídeo curto), ângulo,
ativos de apoio e CTA.

## Fluxo

1. Leia o brief, diagnóstico, parâmetros e checklist em [REFERENCIA.md](REFERENCIA.md). Na redação, abra [modelos e exemplo](references/modelos-e-exemplo.md) e [a aplicação das estruturas](references/estruturas-persuasivas.md). Preserve as escolhas aprovadas; estrutura comercial obrigatória ausente retorna ao planejamento.
2. Leia o brief e identifique o formato de saída esperado.
3. Para **legenda de post**: escreva gancho na primeira linha, corpo curto e
   direto, CTA e, se aplicável, indicação de hashtags relevantes ao tema;    sem lista de hashtags genéricas desconectadas do conteúdo.
4. Para **carrossel textual**: escreva slide a slide, um argumento por
   slide, com progressão lógica entre eles e fechamento com CTA no último
   slide; cada slide precisa fazer sentido isolado, mas a sequência
   completa também precisa ter coerência de raciocínio. Use o modelo de carrossel vinculado no passo de redação.
5. Para **roteiro de vídeo curto**: escreva o texto falado com gancho nos
   primeiros segundos, um único argumento central e fechamento com CTA
   falado; sem indicação de corte técnico fora do escopo desta skill.
6. Aplique `ESCRITA.md` ajustando densidade ao formato curto, sem
   reintroduzir slop ou fragmentação vazia.
7. Rode `inboundfy-copy-editor`, trate os achados e registre a auditoria A5 de `inboundfy-anti-slop`. Repita a leitura integral.
8. Salve com frontmatter incluindo `formato` (post/carrossel/video-curto) e
   `brief` quando fizer parte de um pacote.
9. Envie a candidata inteira, brief, fontes e registros editoriais a `inboundfy-validador-instagram`. Corrija os achados pela especialista e repita a auditoria inteira até a aprovação.
10. Com a copy aprovada, entregue o pacote de arte descrito em Responsabilidade do grupo a `inboundfy-especialista-instagram-imagem`, quando previsto no brief. Retorne a `inboundfy-planejamento` com os arquivos aprovados e relatórios correspondentes.

## Saída

Arquivo Markdown salvo no caminho definido em `context/canais.md` para
Instagram, com um arquivo por slide quando o formato for carrossel.

## Validação

- Formato de saída corresponde exatamente ao indicado no brief.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Carrossel tem progressão lógica entre slides, não blocos desconectados.
- Aprovação registrada por `inboundfy-validador-instagram`.

## Responsabilidade do grupo

Produza legenda, carrossel textual ou roteiro curto de Instagram para o formato aprovado. Use a lista numerada de `REFERENCIA.md` antes de enviar à `inboundfy-validador-instagram`. Quando houver arte, encaminhe a copy aprovada para `inboundfy-especialista-instagram-imagem`, com ordem de slides, alt text, proporção do brief e textos literais.

## Idempotência

Editar uma peça já existente altera apenas o slide ou trecho indicado pelo
pedido atual.
