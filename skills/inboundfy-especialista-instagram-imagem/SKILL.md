---
name: inboundfy-especialista-instagram-imagem
description: >
  Gera imagem de feed e pacote completo de carrossel para Instagram,
  reaproveitando o motor de inboundfy-base-imagem com a proporção exigida
  por cada formato.
---

# Inboundfy Instagram Imagem

Skill de imagem para Instagram e formatos equivalentes. Reaproveita
`inboundfy-base-imagem` como motor.

## Fonte da imagem: geração sintética via inboundfy-base-imagem

Post de feed e carrossel de Instagram normalmente exigem texto sobreposto
com hierarquia visual de marca; caso de composição gráfica. Quando o brief
pedir foto de bastidor ou produto real sem texto sobreposto, use busca de
banco de fotos em vez desta skill, seguindo o padrão de `inboundfy-especialista-blog-imagem`.

## Escopo

Cobre imagem de post único e o pacote completo de slides de carrossel. O
texto é `inboundfy-especialista-instagram`.

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

- `context/canais.md`: proporção de post (geralmente quadrada ou 4:5) e de
  carrossel.
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O texto final de `inboundfy-especialista-instagram` (legenda de post ou texto de
cada slide) e o formato indicado no brief.

## Fluxo

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
   legibilidade em miniatura de feed, contraste, e numeração de slide
   quando o canal usar esse recurso.
5. Salve o pacote completo junto ao artefato de texto do mesmo item.

## Encaminhamento obrigatório

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

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Não regenere um pacote já existente para o mesmo item sem pedido explícito
de refação.
