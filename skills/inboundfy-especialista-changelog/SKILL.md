---
name: inboundfy-especialista-changelog
description: >
  Escreve entrada de changelog ou release note a partir de um brief aprovado
  (fase 5 do pipeline) ou diretamente de um release de produto. Aplica
  ESCRITA.md e a voz de context/marca-voz.md.
---

# Inboundfy Changelog Redator

Skill de canal para changelog; traduz uma mudança técnica de produto em
texto legível para o usuário final.

## Escopo

Cobre a entrada de changelog. Não decide o que entra na entrada; parte do
release ou brief fornecido.

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

- `context/produtos.md`: para descrever a funcionalidade afetada com
  precisão.
- `context/marca-voz.md`: tom, geralmente mais direto e técnico neste canal.
- `context/glossario.md`: grafia oficial de produto e funcionalidade.

## Entrada esperada

Um release de produto (nota técnica, pull request, changelog bruto de
dependência) ou um brief já formalizado.

## Fluxo

1. Leia o material de entrada e identifique: o que mudou, qual público é
   afetado
   e qual ação, se alguma, o usuário precisa tomar.
2. Confirme o nome da funcionalidade ou produto contra `context/produtos.md`
   e a grafia contra `context/glossario.md`.
3. Escreva a entrada em linguagem direta: o que mudou, por que importa para
as pessoas afetadas e eventual ação necessária; sem jargão de commit
interno, sem
   prosa decorativa. Use o template de entrada de `REFERENCIA.md`.
4. Classifique o tipo de mudança quando o formato do canal pedir (novidade,
   melhoria, correção).
5. Rode `inboundfy-copy-editor` na entrada; ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md`; e corrija se abaixo de 90%; mesmo texto
   técnico segue `ESCRITA.md` na parte que é prosa para o leitor.
6. Salve com frontmatter incluindo `data`, `tipo` e `brief` quando fizer
   parte de um pacote.
7. Encaminhe para `inboundfy-planejamento`.

## Encaminhamento obrigatório

Antes de considerar a entrada pronta, acione
`inboundfy-validador-changelog`. Em caso de reprovação, aplique as correções
do relatório e reenvie o arquivo inteiro até a aprovação.

## Saída

Arquivo Markdown da entrada de changelog, salvo no caminho de
`context/canais.md` para o canal changelog.

## Validação

- Nome de produto/funcionalidade confere com `context/produtos.md` e
  `context/glossario.md`.
- Entrada diz claramente o que muda para as pessoas afetadas.
- Nenhum trecho abaixo de 90% na auditoria de `inboundfy-copy-editor`.
- Aprovação registrada por `inboundfy-validador-changelog`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Editar uma entrada já existente altera apenas o campo indicado.
