---
name: inboundfy-especialista-ebook-imagem
description: >
  Gera capa de ebook e imagem OpenGraph derivada, reaproveitando o motor de
  inboundfy-base-imagem com a identidade visual do usuário.
---

# Inboundfy Ebook Capa

Skill de imagem para capa de ebook e sua imagem OpenGraph (usada em
compartilhamento e preview de link). Reaproveita `inboundfy-base-imagem`
como motor.

## Fonte da imagem: geração sintética via inboundfy-base-imagem

Capa de ebook é peça de identidade visual da própria publicação; título,
subtítulo e composição de marca; não uma fotografia de contexto. Por isso
usa `inboundfy-base-imagem` como motor.

## Escopo

Cobre capa e imagem OpenGraph derivada. O texto do ebook é
`inboundfy-especialista-ebook`.

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

- `context/canais.md`: dimensão de capa e de OpenGraph exigidas.
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

Título e subtítulo final do ebook, definidos por `inboundfy-especialista-ebook`.

## Fluxo

1. Confirme as dimensões de capa e de OpenGraph em `context/canais.md`,
   usando a tabela de `REFERENCIA.md` como referência de mercado.
2. Monte o brief de imagem no formato de `REFERENCIA.md` e acione
   `inboundfy-base-imagem` com título e subtítulo do ebook, na dimensão de
   capa.
3. Gere a versão derivada de OpenGraph a partir da mesma composição visual,
   seguindo o exemplo de `REFERENCIA.md`, ajustando apenas a proporção
   quando ela diferir da capa.
4. Revise contra o checklist de `REFERENCIA.md`: título legível em
   miniatura de listagem, contraste e presença de logo quando o canal
   exigir.
5. Confira grafia do título contra `context/glossario.md`.
6. Salve capa e OpenGraph junto ao artefato de texto do ebook.

## Encaminhamento obrigatório

Antes de considerar capa e OpenGraph prontos, acione
`inboundfy-validador-ebook-imagem`. Em caso de reprovação, corrija os achados
e reenvie o conjunto até a aprovação.

## Saída

Arquivo de capa e arquivo de OpenGraph, salvos em
`97-ativos-finais/ebook/<item>/`.

## Validação

- Dimensões conferem exatamente com `context/canais.md`.
- Título na capa confere com o título final do ebook e com
  `context/glossario.md`.
- Capa e OpenGraph mantêm a mesma identidade visual.
- Aprovação registrada por `inboundfy-validador-ebook-imagem`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Não regenere uma capa já existente para o mesmo ebook sem pedido explícito
de refação.
