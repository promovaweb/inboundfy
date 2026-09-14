---
name: inboundfy-especialista-webinar
description: >
  Escreve a copy de página ou convite de webinar/evento a partir de um brief
  aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de
  context/marca-voz.md.
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
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

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

## Estrutura persuasiva

Página de convite de evento é o formato que mais se encaixa em **PASTOR**
inteiro, porque tem espaço para os seis blocos:

1. **Problema:** a dor real que levou a pessoa a considerar o tema do
   evento, de `context/publico.md`.
2. **Amplificar:** o custo concreto de continuar sem essa solução; tempo
   perdido, escolha adiada, oportunidade não aproveitada.
3. **História/Solução:** o que a sessão vai efetivamente entregar e por que
   o apresentador (`context/pessoas.md`) é a pessoa certa para entregar isso.
4. **Testemunho:** resultado ou repercussão real de uma edição anterior do
   evento, se existir em `context/`. Sem esse dado, pule o bloco; não
   invente número de participante ou depoimento.
5. **Oferta:** o que a inscrição inclui, gratuita ou paga
   (`context/ofertas.md`), com data e formato.
6. **Resposta:** o CTA de inscrição, único e claro.

Para convite mais curto (ex.: post anunciando o mesmo evento), use apenas
título + promessa + CTA no formato **AIDA**, sem forçar os seis blocos de
PASTOR num espaço que não comporta.

## Entrada esperada

Um brief com: tema do evento, data e formato (ao vivo, gravado), apresentador,
promessa da sessão e CTA de inscrição.

## Fluxo

1. Leia o brief, confirme apresentador(es) em `context/pessoas.md` e
   confirme a estrutura persuasiva registrada no brief (normalmente PASTOR,
   ver seção acima).
2. Escreva o título do evento, curto e específico sobre o que será
   entregue, sem promessa vaga de "transformação" genérica; funciona como o
   gancho do bloco de Problema/Atenção.
3. Escreva a descrição seguindo os blocos da estrutura escolhida: público
   é, o que a pessoa vai saber fazer depois, e por que vale reservar o
   horário, sem pular bloco sem justificativa. Use o template PASTOR
   completo de `REFERENCIA.md`.
4. Se o evento tiver agenda ou tópicos, liste-os de forma verificável;    evite tópico genérico que qualquer webinar do mercado poderia anunciar.
5. Escreva o CTA de inscrição, claro sobre o próximo passo (bloco de
   Resposta do PASTOR).
6. Rode `inboundfy-base-editor`; ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md`; e corrija parágrafos abaixo de 90%.
7. Salve com frontmatter incluindo `data`, `apresentador`, `formato`,
   `estrutura` (pastor/aida/nenhuma) e `brief` quando fizer parte de um
   pacote.
8. Encaminhe para `inboundfy-especialista-webinar-imagem` e depois para
   `inboundfy-planejamento-06-auditoria`.

## Encaminhamento obrigatório

Antes de considerar a copy pronta, acione `inboundfy-validador-webinar`. Em
caso de reprovação, aplique as correções do relatório e reenvie o arquivo
inteiro até a aprovação.

## Saída

Arquivo Markdown com a copy da página/convite, salvo no caminho de
`context/canais.md` para o canal webinar.

## Validação

- Apresentador confere com `context/pessoas.md`.
- Nenhum parágrafo abaixo de 90% na auditoria de `inboundfy-base-editor`.
- Agenda ou tópicos são específicos, não genéricos.
- Aprovação registrada por `inboundfy-validador-webinar`.

## Idempotência

Editar uma página já existente altera apenas o campo indicado pelo pedido
atual.
