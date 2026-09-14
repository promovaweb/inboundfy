---
name: inboundfy-especialista-video
description: >
  Escreve roteiro de vídeo longo e talking head a partir de um brief
  aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de
  context/marca-voz.md, com cenas e apoio visual mínimo.
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
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/marca-voz.md`: tom e pessoa gramatical.
- `context/pessoas.md`: quando houver um apresentador definido; confirme
  competência sobre o tema.
- `context/publico.md`: persona e nível técnico.
- `context/proibicoes.md`: vetos que reprovam trecho falado.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): quando o
  brief marcar vídeo de conversão ou demonstração de produto.

## Estrutura persuasiva

Vídeo educativo ou talking head de opinião normalmente não precisa de
estrutura persuasiva; segue `ESCRITA.md` direto, com o gancho apresentando o
objeto real do vídeo. Use estrutura quando o brief marcar objetivo comercial:

- **Vídeo curto de demonstração ou lançamento** com uma única chamada para
  ação (assistir, comprar, testar): use **AIDA** nas primeiras cenas;   Atenção no gancho, Interesse mostrando o produto em uso real, Desejo
  conectando ao ganho da persona, Ação no fechamento falado.
- **Vídeo de venda mais longo**, com o apresentador desenvolvendo um
  argumento completo: use **PAS** quando o vídeo focar em mostrar o problema
  antes da solução, ou **PASTOR** quando houver espaço para amplificar a dor
  e incluir depoimento real de cliente (nunca encenado ou inventado).
- Toda cena que demonstra uma funcionalidade aplica **FAB**: mostrar a
  característica na tela, narrar a vantagem prática e fechar a cena no
benefício real para o espectador.

## Entrada esperada

Um brief com: tema, formato (vídeo estruturado com cenas ou talking head),
apresentador (se houver), ativos de apoio e duração aproximada.

## Fluxo

1. Leia o brief e, se houver apresentador definido, confirme competência em
   `context/pessoas.md`.
2. Escreva o gancho dos primeiros segundos, apresentando o objeto real do
   vídeo, não uma promessa vaga. Use as fórmulas de gancho de
   `REFERENCIA.md`.
3. Para vídeo estruturado: divida em cenas numeradas, cada uma com o texto
   falado e uma indicação mínima de apoio visual (ex.: "mostrar tela de
   X", "cortar para exemplo Y"); sem prescrever edição fora do escopo da
   skill. Use o template de cena numerada de `REFERENCIA.md`.
4. Para talking head: escreva outline de tópicos na ordem de fala, sem
   roteiro palavra por palavra, preservando espaço para fala natural do
   apresentador.
5. Aplique `ESCRITA.md` no texto falado, com frases feitas para serem
   ouvidas, não lidas; ritmo de fala real, não prosa de artigo.
6. Feche com CTA falado.
7. Rode `inboundfy-base-editor` no texto falado; ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md`; e corrija trechos abaixo de 90%.
8. Salve com frontmatter incluindo `formato`, `apresentador` (se houver) e
   `brief` quando fizer parte de um pacote.
9. Encaminhe para `inboundfy-especialista-video-imagem` e depois para `inboundfy-planejamento-06-auditoria`.

## Encaminhamento obrigatório

Antes de considerar o roteiro pronto, acione `inboundfy-validador-video`. Em
caso de reprovação, aplique as correções do relatório e reenvie o arquivo
inteiro até a aprovação.

## Saída

Arquivo Markdown com cenas ou outline, salvo no caminho definido em
`context/canais.md` para o canal de vídeo.

## Validação

- Apresentador, quando definido, está dentro da competência registrada.
- Nenhum trecho abaixo de 90% na auditoria de `inboundfy-base-editor`.
- Cena com apoio visual indicado não prescreve edição fora do escopo.
- Aprovação registrada por `inboundfy-validador-video`.

## Idempotência

Editar um roteiro já existente altera apenas a cena ou trecho indicado.
