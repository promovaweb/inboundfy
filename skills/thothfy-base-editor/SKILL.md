---
name: thothfy-base-editor
description: >
  Skill transversal de auditoria de parágrafo por ESCRITA.md. Atribui nota de
  0 a 100 por parágrafo e aplica hard gate: qualquer violação de
  context/proibicoes.md ou context/estruturas-proibidas.md reprova o texto,
  independentemente da nota. Reescreve trechos abaixo de 90% e repete a
  varredura integral antes de liberar o resultado.
---

# Thothfy Editor

Skill de apoio usada por qualquer skill de canal antes de considerar um
rascunho pronto, e por `thothfy-planejamento-06-auditoria` na fase final do pipeline.

## Escopo

Audita e corrige texto por parágrafo. Não decide se a peça deve existir, não
substitui a auditoria de pacote completo de `thothfy-planejamento-06-auditoria`, que também
confere brief, canal e formato.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `ESCRITA.md`: padrão de escrita humana e anti-slop.
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

1. Leia `ESCRITA.md`, `context/proibicoes.md`,
   `context/estruturas-proibidas.md`, `context/marca-voz.md` e o checklist
   de `REFERENCIA.md`.
2. Divida o texto em parágrafos, excluindo frontmatter YAML e itens de lista
   que continuam um parágrafo anterior como estrutura.
3. Para cada parágrafo, avalie item a item o checklist de `REFERENCIA.md`
   (mostra o objeto, evita fragmentação artificial, evita slop corporativo,
   evita frase curta quebrada em sequência sem avanço de raciocínio) e
   confira contra as sete categorias de `context/estruturas-proibidas.md`
   (abertura, fechamento, vocabulário, estrutura de parágrafo, heading e
   lista, pontuação, autoridade fabricada).
4. Antes da nota, faça um passe literal e outro semântico/estrutural sobre o
   texto inteiro. Qualquer violação de `context/proibicoes.md` ou
   `context/estruturas-proibidas.md` reprova automaticamente o texto; a nota
   do parágrafo não pode passar de 69 e não converte reprovação em aprovação.
5. Registre todas as ocorrências do mesmo padrão, não apenas a primeira.
   Inclua frontmatter, headings, listas, CTA e alt text na varredura.
6. Para todo parágrafo abaixo de 90%, reescreva preservando a informação e o
   objeto, aplicando `ESCRITA.md`, o vocabulário de `context/marca-voz.md` e
   o exemplo antes/depois de `REFERENCIA.md` como calibração de qualidade.
7. Repita a varredura completa depois das correções. Só libere o texto
   quando nenhuma ocorrência literal, semântica ou estrutural permanecer.
8. Devolva o texto com: nota por parágrafo, motivo da nota quando abaixo de
   90%, e a versão corrigida, no formato de registro definido em
   `REFERENCIA.md`.

## Saída

Relatório de nota por parágrafo mais o texto corrigido, devolvido para a
skill que chamou `thothfy-base-editor` (skill de canal ou `thothfy-planejamento-06-auditoria`).
Não salva arquivo próprio — a skill solicitante decide onde persistir o
resultado.

## Validação

- Todo parágrafo tem nota atribuída, sem parágrafo pulado.
- Nenhuma nota acima de 69 em parágrafo que viola `context/proibicoes.md`
  ou `context/estruturas-proibidas.md`.
- Toda ocorrência de proibição causa reprovação automática do texto.
- O passe literal e o passe semântico/estrutural terminaram zerados depois
  da correção.
- Todo parágrafo abaixo de 90% foi reescrito, não apenas sinalizado.

## Idempotência

Rodar novamente sobre um texto já corrigido reavalia do zero — não herda
nota de avaliação anterior sem reler o texto atual.
