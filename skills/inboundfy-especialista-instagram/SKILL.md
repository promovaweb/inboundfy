---
name: inboundfy-especialista-instagram
description: >
  Escreve legenda de post, carrossel textual e roteiro de vídeo curto
  (Reels, Shorts, TikTok) a partir de um brief aprovado (fase 5 do
  pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md.
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
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **especialista**.

## Contexto exigido

- `context/marca-voz.md`: tom e nível de informalidade permitido.
- `context/publico.md`: persona e jargão.
- `context/proibicoes.md`: vetos que reprovam texto.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): quando o
  brief marcar objetivo comercial.

## Estrutura persuasiva por formato

- **Legenda de post** com CTA de conversão: use **AIDA**; a primeira linha
  antes do "mais" é a Atenção, o corpo mantém o Interesse com um fato
  concreto, o parágrafo seguinte cria o Desejo, e o fechamento é a Ação
  (link na bio, comentário, DM).
- **Carrossel textual**: o formato de slides já espelha naturalmente o
  **PAS**; slide 1-2 nomeiam o Problema real da persona
  (`context/publico.md`), slide 3-4 agitam a consequência concreta, os
  slides finais entregam a Solução e fecham com CTA no último slide. Use
  PASTOR apenas quando o brief pedir um carrossel mais longo com prova
  social real disponível em `context/`.
- **Roteiro de vídeo curto**: gancho nos primeiros segundos como bloco de
  Atenção do AIDA funciona bem para formato de conversão rápida; para
  formato de conscientização, PAS com problema nomeado logo no início
  também funciona.
- Sempre que qualquer formato apresentar um produto, aplique **FAB** dentro
  do bloco correspondente: característica, vantagem, benefício.

## Entrada esperada

Um brief indicando o formato (post, carrossel ou vídeo curto), ângulo,
ativos de apoio e CTA.

## Fluxo

1. Leia o brief e identifique o formato de saída esperado.
2. Para **legenda de post**: escreva gancho na primeira linha, corpo curto e
   direto, CTA e, se aplicável, indicação de hashtags relevantes ao tema;    sem lista de hashtags genéricas desconectadas do conteúdo.
3. Para **carrossel textual**: escreva slide a slide, um argumento por
   slide, com progressão lógica entre eles e fechamento com CTA no último
   slide; cada slide precisa fazer sentido isolado, mas a sequência
   completa também precisa ter coerência de raciocínio. Use o template de
   carrossel e as fórmulas de gancho de `REFERENCIA.md`.
4. Para **roteiro de vídeo curto**: escreva o texto falado com gancho nos
   primeiros segundos, um único argumento central, e fechamento com CTA
   falado; sem indicação de corte técnico fora do escopo desta skill.
5. Aplique `ESCRITA.md` ajustando densidade ao formato curto, sem
   reintroduzir slop ou fragmentação vazia.
6. Rode `inboundfy-copy-editor`, trate os achados verificáveis e repita a leitura integral.
7. Salve com frontmatter incluindo `formato` (post/carrossel/video-curto) e
   `brief` quando fizer parte de um pacote.
8. Encaminhe para `inboundfy-especialista-instagram-imagem` quando o formato exigir peça
   visual, e depois para `inboundfy-planejamento`.

## Encaminhamento obrigatório

Antes de considerar o asset pronto, acione
`inboundfy-validador-instagram`. Em caso de reprovação, aplique as correções
do relatório e reenvie o conjunto inteiro até a aprovação.

## Saída

Arquivo Markdown salvo no caminho definido em `context/canais.md` para
Instagram, com um arquivo por slide quando o formato for carrossel.

## Validação

- Formato de saída corresponde exatamente ao indicado no brief.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Carrossel tem progressão lógica entre slides, não blocos desconectados.
- Aprovação registrada por `inboundfy-validador-instagram`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Editar uma peça já existente altera apenas o slide ou trecho indicado pelo
pedido atual.
