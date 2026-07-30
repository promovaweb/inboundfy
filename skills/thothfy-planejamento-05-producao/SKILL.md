---
name: thothfy-planejamento-05-producao
description: >
  Fase 5 do pipeline (METODOLOGIA.md). Roteia um brief aprovado para a skill
  de canal correta e garante que ela leu ESCRITA.md e o context/ exigido
  antes de escrever. Não escreve copy final nem gera imagem diretamente.
---

# Thothfy Produção

Sexta skill do pipeline. É a camada de roteamento entre o brief pronto
(`thothfy-planejamento-04-briefing`) e a skill de canal que efetivamente escreve ou gera a
peça.

## Escopo

Roteia e verifica pré-condição. A escrita e geração acontecem na skill de
canal, não aqui.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

`context/canais.md`, para identificar a skill de redação e de imagem
correspondente ao canal do brief.

## Entrada esperada

Um brief de `04-briefs/<canal>-<slug>.md`, ou um brief passado diretamente em
peça avulsa.

## Fluxo

1. Leia o brief e identifique o canal.
2. Consulte `context/canais.md`, `SKILLS.md` e a tabela de roteamento de
   `REFERENCIA.md` para confirmar qual skill de redação (e, se aplicável, de
   imagem) atende esse canal.
3. Antes de acionar a skill de canal, percorra o checklist de pré-condição
   de `REFERENCIA.md` — confirme que ela vai ler `ESCRITA.md` e os arquivos
   de `context/` que declarar como exigidos; se a skill de canal sinalizar
   `context/` incompleto, pare e acione a skill de manutenção correspondente
   antes de prosseguir.
4. Se o brief declarar uma estrutura persuasiva (`ESTRUTURAS-PERSUASIVAS.md`
   — AIDA, PAS, PASTOR ou FAB pontual), confirme que ela chega intacta à
   skill de canal; se o brief tiver objetivo comercial e nenhuma estrutura
   registrada, devolva para `thothfy-planejamento-04-briefing` antes de acionar o canal.
5. Acione a skill de redação do canal com o brief completo.
6. Se o canal exigir imagem, acione a skill de imagem do canal depois do
   texto estar pronto, salvo quando o brief pedir imagem antes do texto.
7. Para cada asset produzido, acione a `thothfy-validador-*` de mesmo
   sufixo da produtora, conforme `REFERENCIA.md`. Se houver reprovação,
   devolva o relatório à produtora pareada e repita produção e validação até
   aprovar ou encontrar bloqueio factual que exija o usuário.
8. Encaminhe para `thothfy-planejamento-06-auditoria` somente assets com
   relatório individual aprovado.

## Saída

Nenhum artefato próprio — o artefato final é produzido pela skill de canal
acionada. Esta skill apenas confirma o roteamento e a pré-condição de
contexto.

## Validação

- A skill de canal acionada corresponde exatamente ao canal do brief, sem
  substituição por skill parecida de outro canal.
- Nenhuma skill de canal foi acionada com `context/` incompleto sem antes
  passar pela skill de manutenção correspondente.
- O resultado foi encaminhado para `thothfy-planejamento-06-auditoria`.
- Cada asset possui aprovação da validadora pareada.

## Idempotência

Reacionar a produção para o mesmo brief não duplica o artefato final sem
pedido explícito de refação — confirme com o usuário antes de sobrescrever
uma peça já produzida para o mesmo brief.
