---
name: inboundfy-especialista-instagram-imagem
description: Gera post, carrossel e peças verticais de Instagram com textos aprovados, grade de marca e proporção do destino. Use quando o pedido citar arte de feed, slides de carrossel, Story, capa de Reels ou pacote visual para Instagram.
---

# Inboundfy Instagram Imagem

Skill de imagem para Instagram e formatos equivalentes. Reaproveita
`inboundfy-base-imagem` como motor.

## Escopo

Cobre imagem de post único e o pacote completo de slides de carrossel. O
texto é `inboundfy-especialista-instagram`.

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

- `context/canais.md`: proporção de post (geralmente quadrada ou 4:5) e de
  carrossel.
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

O texto final de `inboundfy-especialista-instagram` (legenda de post ou texto de
cada slide) e o formato indicado no brief.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-instagram-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual. Ao chamar `inboundfy-base-imagem`, informe medidas em pixels, proporção, formato, área segura, peso máximo, texto literal aprovado, ativos oficiais e destino. Receba imagem, alt e manifesto para compor o README.

1. Confirme a proporção exigida em `context/canais.md` para o formato,
   usando a tabela de `REFERENCIA.md` como referência de mercado.
2. Para post único: monte o brief de imagem no formato de `REFERENCIA.md` e
   acione `inboundfy-base-imagem` com o texto central da legenda a destacar.
3. Para carrossel: monte um brief por slide seguindo o exemplo de
   `REFERENCIA.md` e acione `inboundfy-base-imagem` uma vez por slide,
   mantendo consistência visual (mesma paleta, tipografia e grade) entre
   todos os slides do pacote, para que a sequência seja reconhecível como
   uma peça única ao deslizar.
4. Revise a peça contra o checklist específico de `REFERENCIA.md`:
   legibilidade em miniatura de feed, contraste e numeração de slide
   quando o canal usar esse recurso.
5. Salve o pacote completo junto ao artefato de texto do mesmo item.

## Encaminhamento obrigatório

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

Antes de considerar o conjunto pronto, acione
`inboundfy-validador-instagram-imagem`. Em caso de reprovação, corrija os
achados e reenvie todos os arquivos até a aprovação.

## Saída

Um arquivo de imagem por slide (ou um único arquivo para post simples),
salvo em `97-ativos-finais/instagram/<item>/`.

## Validação

- Proporção confere exatamente com `context/canais.md`.
- Todos os slides de um mesmo carrossel mantêm consistência visual entre si.
- Identidade visual confere com a definição do usuário.
- Aprovação registrada por `inboundfy-validador-instagram-imagem`.

## Responsabilidade do grupo

Produza post.png ou slide-01.png até slide-NN.png; README.md com ordem, textos e alt de cada arquivo. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-instagram-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Não regenere um pacote já existente para o mesmo item sem pedido explícito
de refação.
