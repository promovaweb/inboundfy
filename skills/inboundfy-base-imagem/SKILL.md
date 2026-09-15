---
name: inboundfy-base-imagem
description: >
  Motor genérico de geração de card, slide ou thumbnail sintético para peças
  sociais (LinkedIn, Instagram, capa de carrossel, thumbnail de vídeo,
  webinar). Usa geração de imagem por IA com a identidade visual registrada
  em context/marca-voz.md. É a base que as skills de imagem por canal
  (inboundfy-especialista-linkedin-imagem, inboundfy-especialista-instagram-imagem, etc.) reaproveitam.
---

# Inboundfy Imagem Social

Motor de geração de artefato visual sintético; não busca foto real. Skills
de canal chamam esta skill passando formato, proporção e texto a compor; ela
não decide estratégia de conteúdo nem escreve a legenda que acompanha a
imagem.

## Quando usar geração sintética vs. foto real

Esta skill cobre apenas peças de **composição gráfica**: card com texto
sobreposto, slide de carrossel, thumbnail com título, capa de webinar. Peças
que exigem uma fotografia real de contexto (capa de artigo de blog sobre um
tema do mundo real, por exemplo) usam uma skill de busca de banco de fotos; ver `inboundfy-especialista-blog-imagem` como referência desse outro padrão. Nunca use geração
sintética quando o canal ou `context/canais.md` exigir explicitamente foto
real, e nunca use busca de foto quando a peça exigir texto grande, legível e
posicionado com precisão sobre um fundo de marca.

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
artefato. O grupo desta skill é **base**.

## Contexto exigido

- `context/marca-voz.md`: para tom do texto que vai na peça.
- Um arquivo de identidade visual do usuário (paleta, tipografia, logo,
  grade); se o projeto ainda não tiver um, esta skill não pode gerar peça
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
   Sem isso, não invente uma identidade visual genérica; pare e peça a
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

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** base
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Não regenere uma peça já existente para o mesmo item sem pedido explícito de
refação. Gerar peça nova para o mesmo slug/item exige confirmação do usuário.
