---
name: inboundfy-especialista-email
description: >
  Escreve e-mail avulso, de nutrição, convite ou follow-up a partir de um
  brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de
  context/marca-voz.md. Não decide sequência de nutrição; isso vem do brief.
---

# Inboundfy Email Redator

Skill de canal para e-mail. Recebe brief aprovado e produz o e-mail final:
assunto, pré-header e corpo.

## Escopo

Cobre e-mail avulso, de nutrição, convite e follow-up. Newsletter longa e
editorial é `inboundfy-especialista-newsletter`. Não define a estratégia da
sequência de nutrição; isso é decidido em `inboundfy-planejamento-03-oportunidades` e
registrado no brief.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/marca-voz.md`: tom e assinatura padrão de e-mail.
- `context/publico.md`: persona e etapa da jornada a que o e-mail se dirige.
- `context/proibicoes.md`: vetos que reprovam o parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md`, `context/servicos.md` e/ou `context/ofertas.md`:
  quando o e-mail mencionar produto, serviço ou condição comercial.

Se algum desses arquivos estiver incompleto para o dado exigido pelo brief,
pare e acione a skill de manutenção correspondente.

- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): sempre
  que o brief declarar uma estrutura persuasiva, é aqui que a skill confere
  o que cada bloco da estrutura precisa conter antes de escrever.

## Estrutura persuasiva por tipo de e-mail

`inboundfy-planejamento-04-briefing` já decide e registra a estrutura no brief; esta seção
orienta como aplicá-la especificamente em e-mail:

- **E-mail avulso ou convite com uma única oferta clara** (ex.: convite para
  um evento, anúncio de uma condição por tempo limitado): use **AIDA**. O
  assunto e a primeira linha do corpo já carregam a Atenção; o corpo curto
desenvolve o Interesse com um fato concreto; o parágrafo seguinte cria o
  Desejo conectando o fato ao ganho real da persona; o fechamento é a Ação;   um único CTA, nunca dois pedidos concorrentes no mesmo e-mail.
- **E-mail de nutrição** destinado à persona no início da jornada
  (`context/publico.md`): use **PAS**. Abra nomeando o problema real que essa
  etapa da jornada enfrenta, agite a consequência concreta de não resolver
  agora (sem inflar além do que é verificável) e feche apresentando a
  solução; que pode ser um conteúdo, não necessariamente uma oferta paga.
- **E-mail de lançamento ou sequência de venda direta**, quando o brief
  indicar objetivo de conversão com oferta detalhada em `context/ofertas.md`:
  use **PASTOR**. Nesse formato mais longo, a Amplificação e o Testemunho
  ganham espaço próprio; se não houver depoimento real disponível em
  `context/`, pule o bloco de testemunho em vez de inventar um, e sinalize a
  ausência ao usuário.
- Sempre que o e-mail apresentar uma funcionalidade de produto ou serviço,
  aplique **FAB** dentro do parágrafo correspondente: característica (o que
  o produto tem, de `context/produtos.md`), vantagem (o que muda no uso) e
  benefício (o ganho real para a persona); nunca pare no primeiro passo.

## Entrada esperada

Um brief com: objetivo do e-mail, etapa da jornada, público-alvo, ângulo,
ativos de apoio e CTA esperado.

## Fluxo

1. Leia o brief, `ESCRITA.md` e a estrutura persuasiva registrada no brief
   (se houver); se o brief não declarar estrutura e o e-mail tiver objetivo
   comercial, volte para `inboundfy-planejamento-04-briefing` antes de escrever.
2. Escreva o assunto e o pré-header primeiro, curtos e específicos, sem
   clickbait vazio; no AIDA, o assunto já é o bloco de Atenção. Use as
   fórmulas de assunto de `REFERENCIA.md`.
3. Escreva o corpo seguindo os blocos da estrutura escolhida (seção acima),
   em prosa direta, sem fragmentação artificial em blocos curtos só por
   convenção de e-mail marketing; aplique `ESCRITA.md` dentro de cada
   bloco, ajustando densidade ao canal, não abandonando o padrão de
   qualidade.
4. Insira menção a produto, serviço ou oferta apenas com base no `context/`
   correspondente, nunca por suposição, aplicando FAB quando for o caso.
5. Feche com um único CTA claro, usando a assinatura padrão de
   `context/marca-voz.md` quando existir.
6. Rode `inboundfy-base-editor`; ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md`; e corrija parágrafos abaixo de 90%.
7. Salve o e-mail com frontmatter incluindo, no mínimo, `assunto`,
   `pre-header`, `estrutura` (aida/pas/pastor/nenhuma) e `brief` quando fizer
   parte de um pacote, seguindo o template de `REFERENCIA.md`.
8. Encaminhe para `inboundfy-planejamento-06-auditoria`.

## Encaminhamento obrigatório

Antes de considerar o email pronto, acione `inboundfy-validador-email`. Em
caso de reprovação, aplique as correções do relatório e reenvie o arquivo
inteiro até a aprovação.

## Saída

Arquivo Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal e-mail; em pacote, dentro de
`97-ativos-finais/email/<slug>/README.md`.

## Validação

- Assunto e pré-header presentes e alinhados ao objetivo do brief.
- Nenhum parágrafo abaixo de 90% na auditoria de `inboundfy-base-editor`.
- CTA único e claro.
- Toda afirmação sobre produto, serviço ou oferta confere com `context/`.
- Quando o brief declarar estrutura persuasiva, todos os blocos dela estão
  presentes e na ordem certa; testemunho ausente foi sinalizado, não
  inventado.
- Aprovação registrada por `inboundfy-validador-email`.

## Idempotência

Editar um e-mail já existente altera apenas o que o pedido atual indicar.
