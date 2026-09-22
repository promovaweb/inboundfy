---
name: inboundfy-especialista-newsletter
description: >
  Escreve newsletter longa e editorial (por e-mail ou publicação própria) a
  partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz
  de context/marca-voz.md.
---

# Inboundfy Newsletter Redator

Skill de canal para newsletter longa; mais próxima de artigo editorial do
que de e-mail promocional curto.

## Escopo

Cobre newsletter editorial longa, seja distribuída por e-mail ou publicada
como artigo próprio. E-mail curto avulso ou de nutrição é
`inboundfy-especialista-email`.

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

- `context/marca-voz.md`: tom, pessoa gramatical, exemplos de voz.
- `context/publico.md`: persona e nível técnico esperado.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md`, `context/servicos.md` e `context/ferramentas.md`:
  quando a edição mencionar algo da empresa ou de terceiro.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): apenas
  para o técnica FAB, ver seção abaixo.

## Estrutura persuasiva

Newsletter editorial normalmente não segue AIDA, PAS ou PASTOR inteiros; o
valor do canal é a leitura contínua, não a conversão imediata. A exceção é
quando o brief marcar uma edição de lançamento ou oferta especial: nesse
caso, trate a edição como `inboundfy-especialista-email` trataria um PASTOR, mas
preservando o tom editorial e o tamanho maior do canal.

Sempre que a edição apresentar um produto, serviço ou ferramenta dentro do
texto corrido, aplique **FAB**: nomeie a característica (do `context/`
correspondente), explique a vantagem prática e feche no benefício real para
o leitor; nunca liste a característica e siga em frente sem completar a
tradução.

## Entrada esperada

Um brief com: tema da edição, ângulo, ativos de apoio (de
`inboundfy-planejamento` quando existir pacote), objetivo e CTA.

## Fluxo

1. Leia o brief, `ESCRITA.md` e os arquivos de contexto exigidos.
2. Escreva assunto e pré-header quando a distribuição for por e-mail.
3. Escreva o corpo em prosa longa e contínua, com abertura reconhecível,
   desenvolvimento de uma ou poucas ideias centrais, exemplo interpretado e
   fechamento sem enfeite; seguindo `ESCRITA.md` integralmente, já que este
   canal tem menos restrição de tamanho que e-mail curto ou rede social. Use
   a estrutura de edição por tipo de `REFERENCIA.md`.
4. Insira menção a produto, serviço ou ferramenta apenas com base no
   `context/` correspondente.
5. Feche com CTA único.
6. Rode `inboundfy-copy-editor`, trate os achados verificáveis e repita a leitura integral.
7. Salve com frontmatter incluindo `assunto` (quando por e-mail), `titulo`,
   `description` e `brief` quando fizer parte de um pacote.
8. Encaminhe para `inboundfy-planejamento`.

## Encaminhamento obrigatório

Antes de considerar a edição pronta, acione
`inboundfy-validador-newsletter`. Em caso de reprovação, aplique as correções
do relatório e reenvie o arquivo inteiro até a aprovação.

## Saída

Arquivo Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal newsletter.

## Validação

- Corpo em prosa contínua, sem fragmentação artificial.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Toda menção institucional confere com `context/`.
- Aprovação registrada por `inboundfy-validador-newsletter`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Editar uma edição já existente altera apenas o que o pedido atual indicar.
