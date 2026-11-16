---
name: inboundfy-especialista-webinar
description: Escreve copy de página ou convite de webinar com promessa da sessão, agenda, logística e inscrição. Use quando o pedido trouxer divulgação de evento, página de webinar, convite para sessão ao vivo ou CTA de inscrição.
---

# Inboundfy Webinar Redator

Skill de canal para copy de página de evento; título, descrição, promessa
da sessão e CTA de inscrição.

## Escopo

Cobre o texto da página/convite. Thumbnail é `inboundfy-especialista-webinar-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catálogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

- `context/marca-voz.md`: tom.
- `context/pessoas.md`: apresentador(es) do evento, quando definidos.
- `context/publico.md`: persona convidada.
- `context/produtos.md`/`context/servicos.md`/`context/ofertas.md`: quando o
  evento promover algo específico.
- `context/proibicoes.md`: vetos.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): página
  de webinar quase sempre se beneficia de estrutura persuasiva completa.

## Entrada esperada

Um brief com: tema do evento, data e formato (ao vivo, gravado), apresentador,
promessa da sessão e CTA de inscrição.

## Fluxo

1. Leia o brief, diagnóstico, parâmetros e checklist em [REFERENCIA.md](REFERENCIA.md). Na redação, abra [modelos e exemplo](references/modelos-e-exemplo.md) e [a aplicação das estruturas](references/estruturas-persuasivas.md). Preserve as escolhas aprovadas; estrutura comercial obrigatória ausente retorna ao planejamento.
2. Leia o brief, confirme apresentador(es) em `context/pessoas.md` e
   confirme a estrutura persuasiva registrada no brief (normalmente PASTOR,
   conforme a referência por formato).
3. Escreva o título do evento, curto e específico sobre o que será
   entregue, sem promessa vaga de "transformação" genérica; funciona como o
   gancho do bloco de Problema/Atenção.
4. Escreva a descrição seguindo os blocos da estrutura escolhida: qual é o público, o que a pessoa vai saber fazer depois e por que vale reservar o
   horário, sem pular bloco sem justificativa. Use os modelos do canal vinculados no passo de redação.
5. Se o evento tiver agenda ou tópicos, liste-os de forma verificável;    evite tópico genérico que qualquer webinar do mercado poderia anunciar.
6. Escreva o CTA de inscrição, claro sobre o próximo passo (bloco de
   Resposta do PASTOR).
7. Rode `inboundfy-copy-editor`, trate os achados e registre a auditoria A5 de `inboundfy-anti-slop`. Repita a leitura integral.
8. Salve com frontmatter incluindo `data`, `apresentador`, `formato`,
   `estrutura` (pastor/aida/nenhuma) e `brief` quando fizer parte de um
   pacote.
9. Envie a candidata inteira, brief, fontes e registros editoriais a `inboundfy-validador-webinar`. Corrija os achados pela especialista e repita a auditoria inteira até a aprovação.
10. Com a copy aprovada, entregue o pacote de arte descrito em Responsabilidade do grupo a `inboundfy-especialista-webinar-imagem`, quando previsto no brief. Retorne a `inboundfy-planejamento` com os arquivos aprovados e relatórios correspondentes.

## Saída

Arquivo Markdown com a copy da página/convite, salvo no caminho de
`context/canais.md` para o canal webinar.

## Validação

- Apresentador confere com `context/pessoas.md`.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Agenda ou tópicos são específicos, não genéricos.
- Aprovação registrada por `inboundfy-validador-webinar`.

## Responsabilidade do grupo

Produza copy de página ou convite de webinar para o formato aprovado. Use a lista numerada de `REFERENCIA.md` antes de enviar à `inboundfy-validador-webinar`. Encaminhe a copy aprovada a `inboundfy-especialista-webinar-imagem`, com título, data, horário, fuso, formato e apresentador literais. Alteração logística exige nova conferência da página, convite e thumbnail.

## Idempotência

Editar uma página já existente altera apenas o campo indicado pelo pedido
atual.
