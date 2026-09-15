---
name: inboundfy-especialista-youtube
description: Adapta um acervo aprovado para roteiro, título, descrição e CTA de YouTube, alinhando formato, persona, voz e publicação.
---

# Especialista YouTube

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

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/estrategia.md`, o acervo e o template da
peça dentro de `canais/youtube/`.

## Entrada esperada

ID do acervo, base editorial, persona, duração, formato e objetivo do vídeo.

## Fluxo

Crie promessa verificável, título, abertura, roteiro, indicações de gravação,
descrição, capítulos quando úteis, CTA e referências. Não transforme hipótese
em afirmação.

## Saída

README final em `canais/youtube/` com frontmatter, roteiro, metadados e fontes.

## Validação

Acione `inboundfy-validador-youtube` e confira voz, fontes, persona, título,
descrição, CTA e consistência do roteiro.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Edite a pasta da peça existente quando o pedido trouxer o mesmo ID.
