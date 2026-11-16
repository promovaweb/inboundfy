---
name: inboundfy-especialista-infografico-imagem
description: Gera infográfico visual a partir da copy aprovada, preservando valores, unidades, fontes e sequência dos blocos. Use quando o pedido citar arte de infográfico, gráfico ilustrado, composição de dados ou transformar texto aprovado em imagem.
---

# Inboundfy Infografico Imagem

Skill de imagem para infográfico. Reaproveita `inboundfy-base-imagem` como
motor, com maior densidade de blocos de texto e dado do que uma peça social
comum.

## Escopo

Cobre a peça visual final. O texto (título, blocos, legenda, alt text) é
`inboundfy-especialista-infografico`.

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

- `context/canais.md`: dimensão exigida (geralmente `9:16`).
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

O texto final de `inboundfy-especialista-infografico`: título, blocos e alt text.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-infografico-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual. Ao chamar `inboundfy-base-imagem`, informe medidas em pixels, proporção, formato, área segura, peso máximo, texto literal aprovado, ativos oficiais e destino. Receba imagem, alt e manifesto para compor o README.

1. Confirme a dimensão exigida em `context/canais.md`.
2. Organize os blocos de texto na hierarquia de leitura vertical de
   `REFERENCIA.md`: título no topo, blocos em sequência de leitura lógica,
   sem poluir a peça com mais blocos do que o brief define.
3. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `inboundfy-base-imagem` com os blocos e a dimensão confirmada, adaptando a
   composição para múltiplos blocos em vez de um único foco.
4. Revise contra o checklist de `REFERENCIA.md`: todo número e dado da
   imagem confere exatamente com o texto aprovado por
   `inboundfy-especialista-infografico`; nenhum dado pode ser alterado na
   composição visual.
5. Confira grafia contra `context/glossario.md`.
6. Salve junto ao artefato de texto do mesmo item.

## Encaminhamento obrigatório

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

Antes de considerar a imagem pronta, acione
`inboundfy-validador-infografico-imagem`. Em caso de reprovação, corrija os
achados e reenvie a imagem completa até a aprovação.

## Saída

Arquivo de imagem final salvo em `97-ativos-finais/infografico/<item>/`.

## Validação

- Dimensão confere exatamente com `context/canais.md`.
- Todo dado numérico na imagem é idêntico ao texto aprovado.
- Hierarquia visual segue a sequência de leitura definida no texto.
- Aprovação registrada por `inboundfy-validador-infografico-imagem`.

## Responsabilidade do grupo

Produza infografico.png e README.md com transcrição integral, fontes e alt text. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-infografico-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Não regenere uma peça já existente para o mesmo item sem pedido explícito de
refação.
