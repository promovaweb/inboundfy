---
name: thothfy-base-imagem
description: >
  Motor genérico de geração de card, slide ou thumbnail sintético para peças
  sociais (LinkedIn, Instagram, capa de carrossel, thumbnail de vídeo,
  webinar). Usa geração de imagem por IA com a identidade visual registrada
  em context/marca-voz.md. É a base que as skills de imagem por canal
  (thothfy-especialista-linkedin-imagem, thothfy-especialista-instagram-imagem, etc.) reaproveitam.
---

# Thothfy Imagem Social

Motor de geração de artefato visual sintético — não busca foto real. Skills
de canal chamam esta skill passando formato, proporção e texto a compor; ela
não decide estratégia de conteúdo nem escreve a legenda que acompanha a
imagem.

## Quando usar geração sintética vs. foto real

Esta skill cobre apenas peças de **composição gráfica**: card com texto
sobreposto, slide de carrossel, thumbnail com título, capa de webinar. Peças
que exigem uma fotografia real de contexto (capa de artigo de blog sobre um
tema do mundo real, por exemplo) usam uma skill de busca de banco de fotos —
ver `thothfy-especialista-blog-imagem` como referência desse outro padrão. Nunca use geração
sintética quando o canal ou `context/canais.md` exigir explicitamente foto
real, e nunca use busca de foto quando a peça exigir texto grande, legível e
posicionado com precisão sobre um fundo de marca.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/marca-voz.md`: para tom do texto que vai na peça.
- Um arquivo de identidade visual do usuário (paleta, tipografia, logo,
  grade) — se o projeto ainda não tiver um, esta skill não pode gerar peça
  final; sinalize ao usuário que falta essa definição antes de continuar.
  Trate esse arquivo como extensão de `context/marca-voz.md` quando o projeto
  não tiver um arquivo de marca visual separado.

## Entrada esperada

Formato de destino (proporção e dimensão em pixels), texto a compor (título,
subtítulo, dado), e o brief que originou a peça, quando existir.

## Fluxo

1. Confirme proporção e dimensão exigidas pelo canal, conforme
   `context/canais.md` e a tabela de formatos de `REFERENCIA.md` (ex.:
   `1080x1350` para carrossel, `1280x720` para thumbnail de vídeo, formato
   quadrado para webinar).
2. Leia a identidade visual do usuário: paleta, tipografia, logo e grade.
   Sem isso, não invente uma identidade visual genérica — pare e peça a
   definição.
3. Monte o brief de imagem no formato de `REFERENCIA.md` (formato, texto
   principal, texto secundário, tom visual, elemento de marca obrigatório).
4. Componha o texto sobre o fundo de marca, com hierarquia visual clara:
   um foco visual único por peça, sem poluição de elementos concorrendo por
   atenção.
5. Gere a peça pelo motor de geração de imagem disponível no ambiente do
   usuário, usando a paleta e tipografia confirmadas no passo 2.
6. Revise a peça gerada contra o checklist de composição de
   `REFERENCIA.md`: texto legível no tamanho final, contraste suficiente,
   logo presente quando o canal exigir, sem erro de grafia (confira contra
   `context/glossario.md`).
7. Salve o arquivo de imagem junto ao artefato de texto correspondente, no
   diretório do pacote (`97-ativos-finais/<canal>/<item>/`).

## Saída

Arquivo de imagem (formato definido pelo canal) salvo junto ao artefato de
texto do mesmo item, mais um `README.md` ou nota curta registrando: formato,
motor usado, e o brief de origem.

## Validação

- Proporção e dimensão batem exatamente com o exigido pelo canal.
- Grafia de qualquer texto na imagem confere com `context/glossario.md`.
- Identidade visual (paleta, tipografia, logo) confere com a definição do
  usuário, não com uma escolha genérica da skill.
- Peça tem um foco visual único, sem excesso de elementos.

## Idempotência

Não regenere uma peça já existente para o mesmo item sem pedido explícito de
refação. Gerar peça nova para o mesmo slug/item exige confirmação do usuário.
