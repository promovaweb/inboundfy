---
name: inboundfy-especialista-podcast
description: >
  Escreve pauta e shownotes de episódio de podcast a partir de um brief
  aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de
  context/marca-voz.md.
---

# Inboundfy Podcast Redator

Skill de canal para podcast; pauta de gravação e shownotes de publicação.

## Escopo

Cobre pauta e shownotes. Não produz áudio nem edição.

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

- `context/pessoas.md`: apresentador(es) e convidado(s), quando houver.
- `context/marca-voz.md`: tom do programa.
- `context/publico.md`: persona ouvinte.
- `context/proibicoes.md`: vetos.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.

## Entrada esperada

Um brief com: tema do episódio, apresentador(es), convidado (se houver),
ativos de apoio e objetivo do episódio.

## Fluxo

1. Leia o brief e confirme apresentador(es)/convidado em `context/pessoas.md`.
2. Escreva a pauta: blocos de conversa em ordem lógica, com o objetivo de
   cada bloco e perguntas-guia; não um roteiro fechado palavra por palavra,
   já que o formato pressupõe fala natural. Use o template de pauta de
   `REFERENCIA.md`.
3. Após a gravação (quando o brief indicar que já existe áudio/transcrição),
   escreva os shownotes: resumo do episódio, principais pontos abordados,
   e links citados durante a conversa, cada um confirmado contra
   `context/ferramentas.md` ou `context/produtos.md` quando aplicável.
4. Rode `inboundfy-copy-editor` nos shownotes (texto de prosa); ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md`; e corrija trechos
   os achados verificáveis e repita a leitura integral. A pauta, por ser guia
   interno de blocos, não passa pela mesma auditoria de prosa pública.
5. Salve com frontmatter incluindo `apresentadores`, `convidado` (se
   houver), `data` e `brief` quando fizer parte de um pacote.
6. Encaminhe para `inboundfy-planejamento`.

## Encaminhamento obrigatório

Antes de considerar pauta e shownotes prontos, acione
`inboundfy-validador-podcast`. Em caso de reprovação, aplique as correções do
relatório e reenvie o conjunto inteiro até a aprovação.

## Saída

Arquivo Markdown de pauta e, separadamente ou na mesma peça, os shownotes,
salvos no caminho de `context/canais.md` para o canal podcast.

## Validação

- Apresentador(es)/convidado conferem com `context/pessoas.md`.
- Links citados nos shownotes conferem com `context/ferramentas.md` ou
  `context/produtos.md`.
- Os achados dos shownotes foram tratados e a leitura integral foi repetida.
- Aprovação registrada por `inboundfy-validador-podcast`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Editar pauta ou shownotes já existentes altera apenas o campo indicado.
