---
name: thothfy-planejamento-06-auditoria
description: >
  Fase 6 do pipeline (METODOLOGIA.md). Audita o artefato final contra o
  brief, ESCRITA.md, context/proibicoes.md, context/estruturas-proibidas.md e
  a validação própria do canal.
  Aprova, reprova com correção guiada, ou devolve para replanejamento.
---

# Thothfy Auditoria

Sétima e última skill do pipeline. Fecha o pacote ou a peça avulsa,
confirmando que o artefato final está pronto para publicação fora do
Thothfy.

## Escopo

Audita o artefato já produzido. Não corrige copy diretamente — aponta a
correção e devolve para a skill de canal quando necessário.

## Contexto exigido

- `context/proibicoes.md`: vetos duros que reprovam a peça.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, mesmo peso de `context/proibicoes.md`.
- `context/marca-voz.md`: para confirmar aderência de tom.
- `context/canais.md`: para aplicar o limite técnico e formato exigido pelo
  canal.

## Entrada esperada

O artefato final produzido por `thothfy-planejamento-05-producao` e o brief que o originou.

## Fluxo

1. Leia o brief original em `04-briefs/<canal>-<slug>.md` e o artefato final
   correspondente em `97-ativos-finais/<canal>/<item>/`.
2. Confira se o artefato responde ao objetivo, ângulo e público do brief —
   se não responder, devolva para `thothfy-planejamento-04-briefing` com a divergência
   registrada, não corrija a estratégia por conta própria.
3. Se o brief declarar estrutura persuasiva (`ESTRUTURAS-PERSUASIVAS.md`),
   confira se todos os blocos previstos estão presentes e na ordem certa, e
   se nenhum bloco de prova social ou testemunho foi preenchido sem lastro em
   `context/` — se estiver, reprove e devolva para a skill de canal.
4. Rode `thothfy-base-editor` no texto (quando houver texto) — ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md` — e confirme que
   nenhum parágrafo está abaixo de 90%.
5. Confira `context/proibicoes.md` e `context/estruturas-proibidas.md` linha a linha contra o artefato.
6. Confira a validação própria do canal (formato de imagem, contagem de
   caracteres, metadata de SEO quando aplicável).
7. Registre o resultado em `06-auditoria/auditoria-final.md`: aprovado,
   reprovado com lista de correções, ou devolvido para replanejamento,
   seguindo o template de `REFERENCIA.md`.
8. Se aprovado, confirme que o frontmatter do artefato (quando Markdown) tem
   o campo `brief` apontando para o brief de origem.

## Saída

`06-auditoria/auditoria-final.md`, dentro do diretório do pacote, com o
veredito e as pendências, se houver.

## Validação

- Todo parágrafo de texto está com nota igual ou acima de 90% em
  `thothfy-base-editor`, ou a pendência de correção está listada.
- Nenhuma violação de `context/proibicoes.md` ou `context/estruturas-proibidas.md` passou sem registro.
- O campo `brief` está presente no artefato aprovado, quando aplicável.

## Idempotência

Reauditar um artefato já aprovado não gera um segundo veredito duplicado —
atualiza `auditoria-final.md` com a nova rodada, preservando o histórico da
anterior quando relevante para o usuário.
