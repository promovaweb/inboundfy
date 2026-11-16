---
name: inboundfy-especialista-email
description: Escreve e-mails com assunto, pré-header, corpo, assinatura e CTA a partir de um brief aprovado. Use quando o pedido trouxer e-mail avulso, nutrição, convite, follow-up ou oferta para uma lista.
---

# Inboundfy Email Redator

Skill de canal para e-mail. Recebe brief aprovado e produz o e-mail final:
assunto, pré-header e corpo.

## Escopo

Cobre e-mail avulso, de nutrição, convite e follow-up. Newsletter longa e
editorial é `inboundfy-especialista-newsletter`. Não define a estratégia da
sequência de nutrição; isso é decidido em `inboundfy-planejamento` e
registrado no brief.

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

- `context/marca-voz.md`: tom e assinatura padrão de e-mail.
- `context/publico.md`: persona e etapa de relacionamento a que o e-mail se dirige.
- `context/proibicoes.md`: vetos que reprovam o parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md`, `context/servicos.md` e/ou `context/ofertas.md`:
  quando o e-mail mencionar produto, serviço ou condição comercial.

Se algum desses arquivos estiver incompleto para o dado exigido pelo brief,
pare e acione a skill de manutenção correspondente.

- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): sempre
  que o brief declarar uma estrutura persuasiva, é aqui que a skill confere
  o que cada bloco da estrutura precisa conter antes de escrever.

## Entrada esperada

Um brief com: objetivo do e-mail, etapa de relacionamento, público-alvo, ângulo,
ativos de apoio e CTA esperado.

## Fluxo

1. Leia o brief e consulte [REFERENCIA.md](REFERENCIA.md): aplique o diagnóstico, o método, o template e os itens 1 a 11 do checklist de `email`. Leia [o exemplo completo](references/exemplo-completo.md) na montagem da peça. Preserve os parâmetros já aprovados no brief.
2. Leia `ESCRITA.md` e [a aplicação da estrutura](references/estruturas-persuasivas.md) registrada no brief
   (se houver); se o brief não declarar estrutura e o e-mail tiver objetivo
   comercial, volte para `inboundfy-planejamento` antes de escrever.
3. Escreva o assunto e o pré-header primeiro, curtos e específicos, sem
   clickbait vazio; no AIDA, o assunto já é o bloco de Atenção. Siga o método de produção de [REFERENCIA.md](REFERENCIA.md).
4. Escreva o corpo seguindo os blocos da estrutura escolhida conforme a referência por formato,
   em prosa direta, sem fragmentação artificial em blocos curtos só por
   convenção de e-mail marketing; aplique `ESCRITA.md` dentro de cada
   bloco, ajustando densidade ao canal, não abandonando o padrão de
   qualidade.
5. Insira menção a produto, serviço ou oferta apenas com base no `context/`
   correspondente, nunca por suposição, aplicando FAB quando for o caso.
6. Feche com um único CTA claro, usando a assinatura padrão de
   `context/marca-voz.md` quando existir.
7. Rode `inboundfy-copy-editor`, trate os achados e registre a auditoria A5 de `inboundfy-anti-slop`. Repita a leitura integral.
8. Salve o e-mail com frontmatter incluindo, no mínimo, `assunto`,
   `pre-header`, `estrutura` (aida/pas/pastor/nenhuma) e `brief` quando fizer
   parte de um pacote, seguindo o template de `REFERENCIA.md`.
9. Envie a candidata inteira, brief, fontes e registros editoriais a `inboundfy-validador-email`. Corrija os achados pela especialista e repita a auditoria inteira até a aprovação.
10. Após a aprovação, entregue arquivo e relatório a `inboundfy-planejamento`.

## Saída

Arquivo Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal e-mail; em pacote, dentro de
`97-ativos-finais/email/<slug>/README.md`.

## Validação

- Assunto e pré-header presentes e alinhados ao objetivo do brief.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- CTA único e claro.
- Toda afirmação sobre produto, serviço ou oferta confere com `context/`.
- Quando o brief declarar estrutura persuasiva, todos os blocos dela estão
  presentes e na ordem certa; testemunho ausente foi sinalizado, não
  inventado.
- Aprovação registrada por `inboundfy-validador-email`.

## Responsabilidade do grupo

O grupo `especialista` entrega assunto, pré-header, corpo, assinatura, rodapé e ação principal. A responsabilidade desta skill é conferir personalização e apresentação de envio sem disparar mensagens. Registre ID, objetivo recebido, persona, arquivos de origem e pendências no handoff para `inboundfy-validador-email`. Corrija os achados da rodada sem alterar o brief aprovado. Entregue ao planejamento somente após aprovação da candidata inteira.

## Idempotência

Editar um e-mail já existente altera apenas o que o pedido atual indicar.
