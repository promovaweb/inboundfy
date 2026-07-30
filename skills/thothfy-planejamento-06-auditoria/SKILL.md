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

Consolida a auditoria do pacote a partir das aprovações individuais. Não
substitui `thothfy-validador-*` e não corrige copy diretamente.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

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
registrada, não corrija a estratégia sem devolver o item ao planejamento.
3. Se o brief declarar estrutura persuasiva (`ESTRUTURAS-PERSUASIVAS.md`),
   confira se todos os blocos previstos estão presentes e na ordem certa, e
se nenhum bloco de prova social ou testemunho foi preenchido sem evidência em
   `context/` — se estiver, reprove e devolva para a skill de canal.
4. Localize o relatório da `thothfy-validador-*` pareada em
   `06-auditoria/assets/` e confirme veredito aprovado. Se estiver ausente
   ou reprovado, devolva à produção antes de continuar.
5. Confira se o manifesto do relatório inclui todos os `context/`, as fontes
   locais relevantes, proibições e validação própria do canal.
6. Faça a leitura consolidada do pacote para detectar contradição entre
   assets que as validações individuais não poderiam perceber.
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
- Todo asset tem relatório individual aprovado da validadora pareada.

## Idempotência

Reauditar um artefato já aprovado não gera um segundo veredito duplicado —
atualiza `auditoria-final.md` com a nova avaliação, preservando o histórico da
anterior quando relevante para o usuário.
