---
name: thothfy-base-editor
description: >
  Skill transversal de auditoria de parágrafo por ESCRITA.md. Atribui nota de
  0 a 100 por parágrafo, com teto de 69 quando houver violação de
  context/proibicoes.md ou context/estruturas-proibidas.md, e reescreve
  parágrafos abaixo de 90%. Não decide estratégia nem substitui a auditoria
  final de thothfy-planejamento-06-auditoria.
---

# Thothfy Editor

Skill de apoio usada por qualquer skill de canal antes de considerar um
rascunho pronto, e por `thothfy-planejamento-06-auditoria` na fase final do pipeline.

## Escopo

Audita e corrige texto por parágrafo. Não decide se a peça deve existir, não
substitui a auditoria de pacote completo de `thothfy-planejamento-06-auditoria`, que também
confere brief, canal e formato.

## Contexto exigido

- `ESCRITA.md`: critério de escrita humana e anti-slop.
- `context/proibicoes.md`: vetos de negócio que impõem teto de nota.
- `context/estruturas-proibidas.md`: catálogo genérico de palavra, frase e
  estrutura de parágrafo com cara de IA — também impõe teto de nota quando
  violado.
- `context/marca-voz.md`: para confirmar aderência de tom e vocabulário
  preferido/evitado.

## Entrada esperada

Um texto em Markdown ou texto puro, geralmente um rascunho produzido por
skill de canal.

## Fluxo

1. Leia `ESCRITA.md`, `context/proibicoes.md`, `context/estruturas-
   proibidas.md`, `context/marca-voz.md` e o checklist de `REFERENCIA.md`.
2. Divida o texto em parágrafos, excluindo frontmatter YAML e itens de lista
   que continuam um parágrafo anterior como estrutura.
3. Para cada parágrafo, avalie item a item o checklist de `REFERENCIA.md`
   (mostra o objeto, evita fragmentação artificial, evita slop corporativo,
   evita frase curta quebrada em sequência sem avanço de raciocínio) e
   confira contra as sete categorias de `context/estruturas-proibidas.md`
   (abertura, fechamento, vocabulário, estrutura de parágrafo, heading e
   lista, pontuação, autoridade fabricada).
4. Atribua nota de 0 a 100 por parágrafo. Se o parágrafo violar
   `context/proibicoes.md` ou `context/estruturas-proibidas.md`, a nota não
   pode passar de 69, independentemente da qualidade da escrita.
5. Para todo parágrafo abaixo de 90%, reescreva preservando a informação e o
   objeto, aplicando `ESCRITA.md`, o vocabulário de `context/marca-voz.md` e
   o exemplo antes/depois de `REFERENCIA.md` como calibração de qualidade.
6. Devolva o texto com: nota por parágrafo, motivo da nota quando abaixo de
   90%, e a versão corrigida, no formato de registro definido em
   `REFERENCIA.md`.

## Saída

Relatório de nota por parágrafo mais o texto corrigido, devolvido para a
skill que chamou `thothfy-base-editor` (skill de canal ou `thothfy-planejamento-06-auditoria`).
Não salva arquivo próprio — quem chamou decide onde persistir o resultado.

## Validação

- Todo parágrafo tem nota atribuída, sem parágrafo pulado.
- Nenhuma nota acima de 69 em parágrafo que viola `context/proibicoes.md`
  ou `context/estruturas-proibidas.md`.
- Todo parágrafo abaixo de 90% foi reescrito, não apenas sinalizado.

## Idempotência

Rodar novamente sobre um texto já corrigido reavalia do zero — não herda
nota de rodada anterior sem reler o texto atual.
