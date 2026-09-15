---
name: inboundfy-copy-persuasao
description: Usa princípios de comportamento e persuasão com transparência para organizar mensagens, reduzir incerteza e ajudar a persona a avançar.
---

# Psicologia aplicada à comunicação

Use para analisar motivação, atenção, confiança, prova, fricção cognitiva,
objeções e arquitetura de uma mensagem. Não use esta skill para manipular,
ocultar condição ou explorar vulnerabilidade.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **copy**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, todos os arquivos de
`.inboundfy/`, o acervo, a oferta e o brief do canal. Consulte
`.inboundfy/framework/` para anti-slop e regras de fontes.

## Entrada esperada

Receba peça, oferta, persona, estágio da jornada, comportamento desejado,
objeções e fontes disponíveis.

## Fluxo

1. Identifique o trabalho que a pessoa tenta realizar e o custo de adiar.
2. Organize a mensagem por relevância, compreensão, confiança e ação.
3. Use prova social, autoridade, especificidade, reciprocidade ou urgência
   somente quando forem reais, pertinentes e explicadas.
4. Mostre condição, limite, preço, prazo e alternativa quando isso afeta a
   escolha da pessoa.
5. Remova medo artificial, escassez inventada, culpa e pressão desnecessária.
6. Revise voz, persona, dicionário, proibições e anti-slop.

## Saída

Entregue diagnóstico, arquitetura persuasiva, alternativas de abertura, CTA
ou peça revisada, sempre com a razão da escolha.

## Validação

Confirme clareza, autonomia da pessoa, prova real, linguagem proporcional e
ausência de pressão enganosa ou afirmação sem base.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Reaplique a análise preservando escolhas já aprovadas. Só altere a tese ou o
ângulo quando o usuário aprovar a mudança.
