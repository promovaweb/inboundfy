---
name: inboundfy-base-imagem
description: Gera card, slide, thumbnail ou capa sintética com as medidas, o texto aprovado e a identidade visual confirmada, confere o arquivo exportado e devolve imagem, texto alternativo e manifesto. Use quando uma especialista de imagem por canal pedir a arte ou a pessoa pedir card, capa de carrossel, thumbnail de vídeo ou arte de webinar com texto.
---

# Composição de imagem

Motor de composição gráfica sintética. As especialistas de imagem por canal
chamam esta skill com formato, medidas e texto. Ela não escolhe estratégia,
canal ou campanha e não escreve a legenda que acompanha a imagem.

## Quando usar e quando não usar

| Pedido | Caminho |
| --- | --- |
| Card com texto sobreposto, slide de carrossel, thumbnail com título, capa de webinar | Esta skill |
| Texto grande, legível e posicionado com precisão sobre fundo de marca | Esta skill |
| Fotografia real de contexto (capa de artigo sobre tema do mundo real) | Banco de fotos, no padrão de `inboundfy-especialista-blog-imagem` |
| Canal ou `.inboundfy/context/canais.md` exige foto real | Nunca gere imagem sintética |
| Tela real de produto ou logo | Arquivo recebido; ver a tabela de diagnóstico de [REFERENCIA.md](REFERENCIA.md) |

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

- `.inboundfy/context/marca-voz.md`, para o tom do texto da peça.
- Identidade visual oficial (paleta, tipografia, logo, grade) em `brand/` ou
  na seção visual de `.inboundfy/context/marca-voz.md`. Sem ela, a skill não
  gera peça final: liste os arquivos faltantes e devolva o pedido.
- `.inboundfy/context/glossario.md`, para a grafia do texto na imagem.
- `.inboundfy/context/integracoes.md`, para o motor de geração configurado.

## Entrada esperada

Pedido visual da especialista chamadora com proporção, dimensão em pixels,
formato de arquivo, área segura, peso máximo, texto aprovado (título, frase
central da legenda ou texto de cada slide), arquivos oficiais de marca e
caminho de destino. Receba também o brief quando existir. Carrossel chega como
um pedido por slide.

## Fluxo

1. Registre medidas, formato, área segura, peso máximo e destino recebidos.
   Não deduza valores pelo nome do canal.
2. Abra paleta, tipografia e logo oficiais. Sem eles, registre a definição
   ausente e encerre.
3. Monte o pedido com o template de [REFERENCIA.md](REFERENCIA.md): texto
   literal, cena, composição e exclusões.
4. Gere pela integração configurada e registre o motor usado, sem credenciais.
5. Abra o arquivo e confira palavra por palavra o texto, o logo contra o
   arquivo oficial, o recorte e a leitura no destino e em miniatura, conforme
   o procedimento de [REFERENCIA.md](REFERENCIA.md).
6. Corrija só a instrução responsável pela falha, preserve a versão anterior e
   repita a conferência integral.
7. Entregue imagem, texto alternativo e manifesto no caminho da chamadora.

## Saída

Imagem no caminho recebido, texto alternativo e manifesto com formato,
medidas, motor, origem visual, fontes de marca e brief quando existir. A
aprovação fica com a validadora pareada da chamadora.

## Validação

- Proporção e dimensão batem exatamente com o pedido recebido.
- O texto na imagem confere com o texto aprovado e com o glossário.
- Paleta, tipografia e logo vêm da identidade oficial, não de escolha da skill.
- A peça tem um foco visual único.
- O checklist de [REFERENCIA.md](REFERENCIA.md) foi cumprido item a item.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

## Idempotência

Não regenere uma peça existente para o mesmo item sem pedido explícito de
refação. Peça nova para o mesmo slug ou item exige confirmação do usuário.
