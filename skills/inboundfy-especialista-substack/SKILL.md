---
name: inboundfy-especialista-substack
description: Adapta acervo aprovado para artigos e newsletters no Substack com tese, fontes, persona e condição de acesso definida. Use quando o pedido for escrever uma edição, reconstruir um argumento do acervo ou preparar uma peça Substack para revisão.
---

# Especialista Substack

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar uma sentinela, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre a escrita até a preparação. Depois leia as fontes locais relevantes.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/estrategia.md`, o acervo e o template da
peça dentro de `canais/substack/`.

## Entrada esperada

ID do acervo aprovado, base editorial, persona, formato Substack, objetivo e brief quando houver pacote. Inclua template da peça e condição de acesso já autorizada.

## Fluxo

1. Leia a entrada completa, `ESCRITA.md` e os contextos exigidos. Resolva lacunas obrigatórias com o planejamento ou a manutenção de contexto indicada por `CONTEXTO.md` antes de redigir. Consulte [o diagnóstico e os parâmetros de substack](REFERENCIA.md#diagnóstico-da-peça).
2. Leia acervo, base editorial, estratégia e template da peça. Registre tese e fatos de apoio. Escolha ensaio, análise ou curadoria conforme brief, usando [o modelo de reconstrução do argumento](REFERENCIA.md#modelos-por-situação).
3. Monte abertura, desenvolvimento, caso, contraponto e fechamento. Execute A4 antes de expandir a peça longa. Reconstrua o argumento sem resumir a transcrição; primeira pessoa exige experiência documentada ou opinião autorizada.
4. Para acesso pago já autorizado, consulte [o modelo de entrega](REFERENCIA.md#modelos-por-situação): trecho público útil, ponto de separação do template e continuação que cumpre a promessa. Confira título, subtítulo, links e CTA único.
5. Execute `inboundfy-copy-editor`, trate os achados e releia a peça inteira. Preserve a origem do acervo no frontmatter e mantenha o relatório fora do corpo público.
6. Salve no caminho definido em [Saída](#saída), com [o template da peça](REFERENCIA.md#template-da-peça), envelope compartilhado e `brief` em pacote. Na montagem, leia [o exemplo completo](references/exemplo-completo.md); preserve os parâmetros aprovados.
7. Execute A5 com `inboundfy-anti-slop` e confira os 11 itens de [conferência do par](REFERENCIA.md#checklist-numerado-do-par). Entregue a `inboundfy-validador-substack` candidata, ID, caminho, brief ou entrada avulsa, persona, fontes, pendências e registros de revisão editorial e A5.
8. Se receber reprovação de `inboundfy-validador-substack`, leia o relatório, corrija o alcance solicitado e repita revisão editorial, A5 e leitura integral. Reenvie à mesma validadora até aprovação da versão atual.
9. Retorne a `inboundfy-planejamento` com README, fontes, relatório aprovado e digest atual. Publicação, cobrança e envio seguem a integração do projeto.

## Saída

README final em `canais/substack/` com frontmatter, texto, referências e revisão.

## Validação

Acione `inboundfy-validador-substack` e confira voz, fontes, persona, links e
formato antes de aprovar.

## Responsabilidade do grupo

O grupo `especialista` responde pela redação e pelas correções de peças Substack. Preserve o brief, o ID, a origem factual e o estado real da candidata; encaminhe somente a versão aprovada. O [guia do grupo](REFERENCIA.md#guia-específico-do-grupo) define o registro da entrega.

## Idempotência

Edite a pasta da peça existente quando o pedido trouxer o mesmo ID.
