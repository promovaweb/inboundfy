---
name: inboundfy-especialista-video-imagem
description: Gera thumbnail de vídeo com frase aprovada, foco visual e legibilidade em miniatura, ligada ao roteiro final. Use quando o pedido citar capa de vídeo, thumbnail de YouTube, imagem para vídeo longo ou refação da miniatura.
---

# Inboundfy Video Thumbnail

Skill de imagem para thumbnail de vídeo longo (YouTube e equivalentes).
Reaproveita `inboundfy-base-imagem` como motor.

## Escopo

Cobre apenas a thumbnail. O roteiro é `inboundfy-especialista-video`.

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

- `context/canais.md`: dimensão exata exigida (geralmente `1280x720`).
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

Roteiro aprovado de `inboundfy-especialista-video` ou pacote aprovado de `inboundfy-especialista-youtube`, com título, tarefa mostrada e textos literais previstos para a thumbnail. Receba o trecho do roteiro que sustenta a promessa e o caminho da origem canônica.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-video-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual. Ao chamar `inboundfy-base-imagem`, informe medidas em pixels, proporção, formato, área segura, peso máximo, texto literal aprovado, ativos oficiais e destino. Receba imagem, alt e manifesto para compor o README.

1. Confirme a dimensão exigida em `context/canais.md`.
2. Extraia do roteiro ou do brief a frase ou palavra central que resume o
   vídeo em poucas palavras legíveis em miniatura, seguindo os princípios
   de CTR de `REFERENCIA.md`.
3. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `inboundfy-base-imagem` com esse texto e a dimensão confirmada, priorizando
   um único foco visual e alto contraste.
4. Revise a peça contra o checklist de CTR de `REFERENCIA.md`, simulando o
   tamanho de miniatura real (bem reduzido): o texto precisa continuar
   legível nesse tamanho.
5. Confira grafia contra `context/glossario.md`.
6. Salve no destino visual contratado e vincule a thumbnail ao roteiro ou ao README do pacote YouTube. Preserve o caminho da origem; não mova a copy para a pasta da imagem.

## Encaminhamento obrigatório

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

Antes de considerar a thumbnail pronta, acione
`inboundfy-validador-video-imagem`. Em caso de reprovação, corrija os achados
e reenvie a peça até a aprovação.

## Saída

Arquivo de imagem salvo em `97-ativos-finais/video/<item>/`, com vínculo ao
roteiro ou pacote YouTube correspondente, preservado no caminho original.

## Validação

- Dimensão confere exatamente com `context/canais.md`.
- Texto permanece legível em simulação de tamanho de miniatura.
- Grafia confere com `context/glossario.md`.
- Aprovação registrada por `inboundfy-validador-video-imagem`.

## Responsabilidade do grupo

Produza thumbnail.png e README.md com frase, título do vídeo e trecho do roteiro que sustenta a promessa. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-video-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Não regenere uma thumbnail já existente para o mesmo item sem pedido
explícito de refação.
