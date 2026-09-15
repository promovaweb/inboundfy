---
name: inboundfy-especialista-video-imagem
description: >
  Gera thumbnail de vídeo longo (formato típico 1280x720), reaproveitando o
  motor de inboundfy-base-imagem com foco em legibilidade e taxa de clique.
---

# Inboundfy Video Thumbnail

Skill de imagem para thumbnail de vídeo longo (YouTube e equivalentes).
Reaproveita `inboundfy-base-imagem` como motor.

## Fonte da imagem: geração sintética via inboundfy-base-imagem

Thumbnail de vídeo é composição gráfica com texto grande, foco visual único
e alto contraste, otimizada para ser lida em miniatura; caso central de
`inboundfy-base-imagem`, não de fotografia de banco de imagens.

## Escopo

Cobre apenas a thumbnail. O roteiro é `inboundfy-especialista-video`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **especialista**.

## Contexto exigido

- `context/canais.md`: dimensão exata exigida (geralmente `1280x720`).
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O tema central do vídeo e, quando existir, o gancho de abertura do roteiro
de `inboundfy-especialista-video`, para orientar o texto de destaque da
thumbnail.

## Fluxo

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
6. Salve junto ao roteiro do mesmo item.

## Encaminhamento obrigatório

Antes de considerar a thumbnail pronta, acione
`inboundfy-validador-video-imagem`. Em caso de reprovação, corrija os achados
e reenvie a peça até a aprovação.

## Saída

Arquivo de imagem salvo em `97-ativos-finais/video/<item>/`, junto ao
roteiro correspondente.

## Validação

- Dimensão confere exatamente com `context/canais.md`.
- Texto permanece legível em simulação de tamanho de miniatura.
- Grafia confere com `context/glossario.md`.
- Aprovação registrada por `inboundfy-validador-video-imagem`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Não regenere uma thumbnail já existente para o mesmo item sem pedido
explícito de refação.
