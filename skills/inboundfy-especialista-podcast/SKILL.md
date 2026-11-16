---
name: inboundfy-especialista-podcast
description: Escreve pautas de gravação e shownotes de podcast com blocos, perguntas, participantes e fontes a partir de brief aprovado. Use quando o pedido for preparar um episódio, organizar uma entrevista ou redigir notas da gravação final para revisão.
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

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

- `context/pessoas.md`: apresentador(es) e convidado(s), quando houver.
- `context/marca-voz.md`: tom do programa.
- `context/publico.md`: persona ouvinte.
- `context/proibicoes.md`: vetos.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.

## Entrada esperada

Brief aprovado ou avulso com tema, apresentadores, convidado quando houver, persona, objetivo e ativos. Informe fase, duração prevista e, para shownotes, áudio final ou transcrição correspondente à edição final.

## Fluxo

1. Leia a entrada completa, `ESCRITA.md` e os contextos exigidos. Resolva lacunas obrigatórias com o planejamento ou a manutenção de contexto indicada por `CONTEXTO.md` antes de redigir. Consulte [o diagnóstico e os parâmetros de podcast](REFERENCIA.md#diagnóstico-da-peça).
2. Confirme fase, participantes e nomes em `context/pessoas.md`. Para preparação, monte blocos com objetivo, perguntas abertas, transições e duração prevista, usando [o método e o template de pauta](REFERENCIA.md#método-de-produção). Evite roteiro fechado de fala.
3. Para shownotes, leia a gravação final ou transcrição correspondente. Use [o modelo de conferência após edição](REFERENCIA.md#modelos-por-situação). Não use a pauta como comprovação de fala nem transforme tempos previstos em capítulos observados.
4. Escreva resumo, pontos abordados e links efetivamente citados, conferidos em `context/ferramentas.md` ou `context/produtos.md` quando aplicável. Sem áudio, não invente tempos. Registre a versão final usada.
5. Execute `inboundfy-copy-editor` nos shownotes, trate os achados e releia o conjunto. A pauta interna continua sujeita a fontes e vetos, mas não recebe a mesma auditoria de prosa pública.
6. Salve no caminho definido em [Saída](#saída), com [o template da peça](REFERENCIA.md#template-da-peça), envelope compartilhado e `brief` em pacote. Na montagem, leia [o exemplo completo](references/exemplo-completo.md); preserve os parâmetros aprovados.
7. Execute A5 com `inboundfy-anti-slop` e confira os 11 itens de [conferência do par](REFERENCIA.md#checklist-numerado-do-par). Entregue a `inboundfy-validador-podcast` candidata, ID, caminho, brief ou entrada avulsa, persona, fontes, pendências e registros de revisão editorial e A5.
8. Se receber reprovação de `inboundfy-validador-podcast`, leia o relatório, corrija o alcance solicitado e repita revisão editorial, A5 e leitura integral. Reenvie à mesma validadora até aprovação da versão atual.
9. Retorne a `inboundfy-planejamento` com pauta e/ou shownotes, fase, fontes, relatório aprovado e digest atual. Áudio e edição seguem o projeto.

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

O grupo `especialista` responde pela redação e pelas correções de pautas e shownotes. Preserve o brief, o ID, a origem factual e o estado real da candidata; encaminhe somente a versão aprovada. O [guia do grupo](REFERENCIA.md#guia-específico-do-grupo) define o registro da entrega.

## Idempotência

Editar pauta ou shownotes já existentes altera apenas o campo indicado.
