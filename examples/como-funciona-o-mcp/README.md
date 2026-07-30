# Exemplo — Como funciona o MCP

Pacote de demonstração do pipeline completo de `METODOLOGIA.md`, do material
bruto ao artefato final auditado, usando como tema um conteúdo técnico real:
"Como funciona o MCP (Model Context Protocol)".

**Tudo neste pacote é ilustrativo.** A empresa ("Nimbus"), o produto interno
("Nimbus Copilot") e a persona são fictícios, criados só para mostrar cada
fase em ação. Não representam nenhum cliente real do Thothfy. Ver
`examples/README.md` para o contrato deste diretório.

## Fases percorridas

| Fase | Arquivo |
| --- | --- |
| 0. Intake | `00-entrada/material-original.md` |
| 1. Saneamento | `01-saneamento/base-limpa.md`, `01-saneamento/relatorio-saneamento.md` |
| 2. Pesquisa e ativos | `02-pesquisa-e-ativos/ativos.md` |
| 3. Planejamento de oportunidades | `03-planejamento/plano-de-oportunidades.md` |
| 4. Briefing | `04-briefs/blog-como-funciona-o-mcp.md` |
| 5. Produção | `97-ativos-finais/blog/como-funciona-o-mcp/README.md` |
| 6. Auditoria | `06-auditoria/auditoria-final.md` |

## O que este exemplo mostra

- Como uma nota de reunião crua (com ruído, sem pontuação, com falas
  misturadas) vira `00-entrada/material-original.md` e é preservada intocada
  por todas as fases seguintes.
- Como `thothfy-planejamento-01-saneamento` limpa sem reescrever com voz
  editorial, e documenta cada decisão em `relatorio-saneamento.md`.
- Como uma pendência técnica identificada cedo (segurança e escopo de
  permissão do MCP, mencionada de forma incerta na reunião original) é
  registrada, herdada fase a fase e resolvida no artigo final sem virar
  afirmação inventada — em vez de ser ignorada ou silenciosamente
  "resolvida" com suposição.
- Como o brief de `thothfy-planejamento-04-briefing` traduz ângulo, público
  e restrição em critério de pronto objetivo, e como
  `thothfy-especialista-blog` produz o artigo dentro exatamente desse
  critério.
- Como `thothfy-planejamento-06-auditoria` confere o artefato final contra o
  brief e contra `ESCRITA.md` antes de aprovar.

## O que este exemplo não mostra

Por ser um pacote avulso (sem campanha associada), ele não passa pelo grupo
`thothfy-estrategia-<NN>-*` — não há
`thothfy-estrategia-00-briefing-cliente` nem
`thothfy-estrategia-02-campanha` aqui, porque este conteúdo nasceu de uma ideia
solta do time, não de uma campanha com objetivo de negócio e KPI. Ver
`ESTRATEGIA.md` para quando um pacote como este nasceria, em vez disso, de
um item alocado por `thothfy-estrategia-03-calendario`.

A Oportunidade 2 do plano (post de LinkedIn divulgando o artigo) foi
registrada, mas deliberadamente não produzida neste exemplo, para manter o
pacote de demonstração enxuto — ver a decisão em
`03-planejamento/plano-de-oportunidades.md`.
