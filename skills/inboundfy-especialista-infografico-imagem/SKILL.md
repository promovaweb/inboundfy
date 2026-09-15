---
name: inboundfy-especialista-infografico-imagem
description: >
  Gera a peça final de infográfico (formato típico 9:16) a partir da copy
  aprovada, reaproveitando o motor de inboundfy-base-imagem.
---

# Inboundfy Infografico Imagem

Skill de imagem para infográfico. Reaproveita `inboundfy-base-imagem` como
motor, com maior densidade de blocos de texto e dado do que uma peça social
comum.

## Fonte da imagem: geração sintética via inboundfy-base-imagem

Infográfico é composição gráfica de dados e blocos de texto sobre fundo de
marca; caso de `inboundfy-base-imagem`, com a particularidade de comportar
múltiplos blocos em vez de um único foco visual.

## Escopo

Cobre a peça visual final. O texto (título, blocos, legenda, alt text) é
`inboundfy-especialista-infografico`.

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

- `context/canais.md`: dimensão exigida (geralmente `9:16`).
- O que `inboundfy-base-imagem` já exige: `context/marca-voz.md` e a
  identidade visual do usuário.

## Entrada esperada

O texto final de `inboundfy-especialista-infografico`: título, blocos e alt text.

## Fluxo

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

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Não regenere uma peça já existente para o mesmo item sem pedido explícito de
refação.
