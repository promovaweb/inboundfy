---
name: inboundfy-validador-youtube
description: Valida roteiro, título, descrição, capítulos, links e CTA da peça de YouTube e entrega relatório de correções à especialista pareada. Use quando o pedido trouxer revisão de pacote YouTube, metadados ou descrição de vídeo antes da entrega.
---

# Validador YouTube

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`
antes de criar ou alterar artefatos. Se faltar uma sentinela, informe:
"O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio."
Encerre sem alterar a peça até o reparo. Depois, leia o catálogo e as fontes
aplicáveis ao pedido.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), o README da peça, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`
e os arquivos vinculados.

## Entrada esperada

Pacote candidato de `inboundfy-especialista-youtube` no caminho de saída do canal, com brief aprovado, fontes, persona e registros editoriais. Inclua todos os arquivos vinculados e o histórico da rodada anterior, quando houver.

## Fluxo

1. Abra [REFERENCIA.md](REFERENCIA.md): use o checklist espelhado e o relatório preenchido na auditoria do conjunto recebido.
2. Leia [REFERENCIA.md](REFERENCIA.md), o contrato da produtora, o brief,
   o README e todos os arquivos vinculados. Acione `inboundfy-base-validador`.
3. Confira título, abertura, roteiro, descrição, CTA, fontes, voz, persona,
   links e estado usando os doze itens numerados e os quatro passes.
4. Localize cada falha por campo ou cena. Registre fonte, diagnóstico e
   correção verificável. Devolva à `inboundfy-especialista-youtube`, sem
   editar o asset. Mantenha a peça em `revisao` durante a correção.
5. Releia o conjunto recebido após cada ajuste. Só aprove com auditorias,
   ID, caminho e SHA-256 atual obtido por `inboundfy content digest <id>`.

## Saída

Relatório no caminho definido por `inboundfy-base-validador`, com veredito
canônico, estado `aprovado` ou `revisao` da peça e ações para a próxima rodada.

## Validação

Reprove fonte ausente, persona ausente, termo vetado, promessa sem suporte ou
frontmatter incompleto.

## Responsabilidade do grupo

Confira pacote YouTube com roteiro, título, descrição, CTA e fontes com os mesmos itens numerados da produtora. Classifique achados como literal, semântico, estrutural ou visual. Devolva o relatório à `inboundfy-especialista-youtube` sem editar a peça.

## Idempotência

Atualize o relatório existente sem duplicar apontamentos.
