---
name: inboundfy-validador-blog
description: >
  Valida artigo de blog produzido por inboundfy-especialista-blog contra brief,
  fontes, todos os contextos, escrita, proibições, SEO e contrato do canal.
  Use sempre antes de considerar um artigo pronto.
---

# Inboundfy Validador Blog

Valida o artigo e devolve correções à `inboundfy-especialista-blog`.

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
artefato. O grupo desta skill é **validador**.

## Contexto exigido

Todos os Markdown de `context/`, com atenção a `context/marca-voz.md`,
`context/publico.md`, `context/produtos.md`, `context/servicos.md`,
`context/ferramentas.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`.

## Entrada esperada

Artigo candidato, brief e materiais-fonte.

## Fluxo

1. Leia `REFERENCIA.md`, `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e o
   contrato completo de `inboundfy-especialista-blog`.
2. Acione `inboundfy-base-validador` com o artigo, o brief e a produtora.
3. Confira intenção de busca, frontmatter, H1, headings, FAB, afirmações,
   links e resultado de `inboundfy-base-seo`.
4. Se reprovado, envie o relatório à `inboundfy-especialista-blog`, solicite a
   correção e valide novamente o arquivo inteiro.
5. Repita até aprovar ou registrar impedimento factual que exija o usuário.

## Saída

Relatório de validação de blog no caminho definido por
`inboundfy-base-validador`.

## Validação

Só aprove com todos os regras de `REFERENCIA.md` atendidos e sem achado
aberto no relatório transversal.

## Responsabilidade do grupo

Leia o asset inteiro contra brief, fontes, contexto e formato. Relate local, regra, fonte e ação; devolva à produtora sem editar o original.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** validador
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o relatório existente por rodada; não altere o artigo.
