---
name: inboundfy-producao
description: Conduz a produção de peças por canal, entregando brief e insumos à especialista e à validadora pareada. Use quando o pedido falar em produzir conteúdo do acervo, criar uma peça, adaptar para outro canal ou retomar uma produção.
---

# Produção por canal

Prepara e conduz a produção de uma peça final: confirma canal, persona,
acervo, objetivo e CTA, cria a pasta com o CLI, entrega o pacote de insumos à
especialista do canal, aplica os marcos anti-slop A4 e A5 e leva a peça até a
validadora pareada. A redação do asset é da `inboundfy-especialista-<canal>`.
A estratégia e o brief vêm de `inboundfy-planejamento` ou de um pedido avulso.
A troca de estado é de `inboundfy-pipeline`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Ação |
| --- | --- |
| Brief aprovado e canal definido | Use esta skill. |
| Pedido avulso ("escreve um post sobre X") com acervo existente | Use esta skill pelo caminho mínimo de `METODOLOGIA.md`. |
| Nova adaptação do mesmo acervo para outro canal | Use esta skill, com novo ID e novo ângulo. |
| Ideia solta sem material | Não use. Acione `inboundfy-brainstorm`. |
| Material bruto ainda não processado | Não use. Acione `inboundfy-acervo`. |
| Escolher quais peças fazer no mês | Não use. Acione `inboundfy-planejamento`. |
| Revisar uma peça já criada | Use esta skill pelo ID existente, sem criar cópia. |

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/links.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/aprendizado.md`, o acervo e o pipeline.

Leia também `.inboundfy/context/ofertas.md` quando o CTA citar plano, preço
ou condição, `.inboundfy/context/depoimentos.json` antes de citar cliente e
`ESCRITA.md` antes de entregar o pacote à especialista. Campo vazio em
contexto é "não informado": a peça não inventa o valor.

## Entrada esperada

Canal ativo, título, uma ou mais personas, um ou mais IDs de acervo, objetivo,
formato, CTA e data opcional. Quando houver pacote, o caminho do brief em
`04-briefs/<canal>-<slug>.md`. Para retomada vinda de `inboundfy-pipeline`,
receba o ID existente, relatório de reprovação e campos a corrigir.

## Perguntas de diagnóstico

1. O canal está marcado em `.inboundfy/estrategia.md`? O CLI recusa canal não
   marcado.
2. Quais personas recebem a peça? A tese, o exemplo e o CTA servem a todas?
3. Qual é o objetivo mensurável (visita, lead, resposta no WhatsApp, inscrição,
   venda)? Qual é o CTA único?
4. O acervo está `processado` e tem `base-editorial.md` preenchida?
5. O recorte editorial já foi escolhido ou ainda está aberto?
6. Esta peça já existe com outro ID para o mesmo canal e persona?
7. Há prazo de publicação confirmado ou só desejo de data?

## Fluxo

1. Confirme canal e personas antes de redigir. Liste os canais ativos e as
   personas completas em menu numérico, conforme `inboundfy-acervo` e aceite
   uma ou mais escolhas.
2. Consulte [references/roteamento-por-canal.md](references/roteamento-por-canal.md)
   para saber se o canal é criado pelo CLI, qual especialista escreve e qual
   validadora aprova.
3. Se o recorte editorial estiver aberto, apresente três direções
   materialmente diferentes, com a recomendada primeiro e aguarde a escolha.
   Registre escolha e rejeições no README da peça.
4. Use a tool `content_create` ou
   `inboundfy content create <canal> "Título" --persona persona-01 --archive 0001`.
   Repita `--persona` e `--archive` para mais de um valor.
5. Entregue à especialista a pasta `canais/<canal>/<id>-<data>-<slug>/README.md` para redação.
   Monte o pacote de insumos com o template do [REFERENCIA.md](REFERENCIA.md):
   `processado.md`, `base-editorial.md`, `faq.md`, `pesquisa.md`, brief, CTA e
   links internos. Não use o `bruto.md` para redigir.
6. Oriente a especialista a aplicar voz, dicionário, proibições e aprendizados
   confirmados na adaptação do canal. Acione `inboundfy-copy-redacao`,
   `inboundfy-seo`, `inboundfy-base-seo` ou `inboundfy-geo` só quando o formato
   pedir.
7. Antes de expandir uma peça longa, execute `inboundfy-anti-slop` no marco A4
   sobre o outline, a abertura e a primeira unidade substancial. Registre o
   ciclo em `auditorias/anti-slop/04-rascunho.md` do acervo ligado à peça e
   aguarde o checkpoint de direção quando necessário.
8. Depois de escrever o asset completo, execute `inboundfy-anti-slop` no marco
   A5 e registre `auditorias/anti-slop/05-peca.md`.
9. Passe a peça para `revisao` com `inboundfy-pipeline` e rode a validadora do
   canal. Registre fontes, acervos, personas e estado. Reprovação volta à
   especialista; divergência de direção volta a `inboundfy-planejamento`.
10. Se houver outra adaptação do mesmo acervo, use novo ângulo e novo ID,
    seguindo [references/adaptacao-entre-canais.md](references/adaptacao-entre-canais.md).

## Saída

Uma pasta GitHub-friendly com `README.md`, frontmatter completo, conteúdo,
referências, CTA, checklist de revisão e caminhos relativos. O frontmatter
mantém os campos do CLI (`id`, `canal`, `titulo`, `estado`, `criado_em`,
`personas`, `acervo`, `bases_editoriais`) e recebe `brief` quando a peça
pertence a um pacote.

## Validação

Confira estrutura do canal, links, persona, acervo, voz, proibições, dicionário,
os marcos A4 e A5, frontmatter e validador pareado antes de mover para
`aprovado`.

Reprova a passagem para a validadora: persona `PREENCHER`, acervo `não
informado` sem justificativa, CTA diferente do brief, link interno sem destino
real, número ou depoimento sem fonte, registro A5 ausente.

## Idempotência

Edite a peça pelo ID. Não crie cópia quando o usuário pediu uma revisão. Uma
nova adaptação recebe novo ID; uma correção mantém o ID e volta a peça para
`revisao` pelo pipeline.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** brief ou pedido avulso, canal, personas e acervo;
- **transformação:** criação da pasta, pacote de insumos, A4, A5 e validação;
- **saída:** peça em `revisao` com relatório da validadora;
- **handoff:** especialista do canal para redação, validadora pareada para
  aprovação, `inboundfy-pipeline` para estado.
