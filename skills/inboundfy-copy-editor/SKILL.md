---
name: inboundfy-copy-editor
description: >
  Skill transversal de auditoria de parágrafo por ESCRITA.md. Atribui nota de
  0 a 100 por parágrafo e aplica hard gate: qualquer violação de
  context/proibicoes.md ou context/estruturas-proibidas.md reprova o texto,
  independentemente da nota. Reescreve trechos abaixo de 90% e repete a
  varredura integral antes de liberar o resultado.
---

# Inboundfy Editor

Skill de apoio usada por qualquer skill de canal antes de considerar um
rascunho pronto, e por `inboundfy-planejamento` na fase final do pipeline.

Consulte `.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes da
auditoria, além de `inboundfy-setup` para confirmar a preparação do projeto.

## Escopo

Audita e corrige texto por parágrafo. Não decide se a peça deve existir, não
substitui a auditoria de pacote completo de `inboundfy-planejamento`, que também
confere brief, canal e formato.

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
artefato. O grupo desta skill é **copy**.

## Contexto exigido

- `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/glossario.md` são a configuração canônica do projeto.
- `inboundfy-anti-slop` para o passe geral de naturalidade e especificidade.
- `ESCRITA.md`: padrão de escrita humana e anti-slop.
- `context/proibicoes.md`: vetos de negócio que impõem teto de nota.
- `context/estruturas-proibidas.md`: catálogo genérico de palavra, frase e
  estrutura de parágrafo com cara de IA; também impõe teto de nota quando
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
skill que chamou `inboundfy-copy-editor` (skill de canal ou `inboundfy-planejamento`).
Não salva arquivo próprio; a skill solicitante decide onde persistir o
resultado.

## Validação

- Todo parágrafo tem nota atribuída, sem parágrafo pulado.
- Nenhuma nota acima de 69 em parágrafo que viola `context/proibicoes.md`
  ou `context/estruturas-proibidas.md`.
- Toda ocorrência de proibição causa reprovação automática do texto.
- O passe literal e o passe semântico/estrutural terminaram zerados depois
  da correção.
- Todo parágrafo abaixo de 90% foi reescrito, não apenas sinalizado.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Rodar novamente sobre um texto já corrigido reavalia do zero; não herda
nota de avaliação anterior sem reler o texto atual.
