---
name: inboundfy-copy-persuasao
description: Diagnostica por que uma mensagem convence ou não, mapeia as forças da persona e escolhe princípios de persuasão com prova real, dentro do CDC e da LGPD. Use quando o pedido falar em persuasão, gatilhos mentais, objeções, prova social, urgência, compartilhamento ou peça que não convence.
---

# Psicologia aplicada à comunicação

Use para analisar motivação, atenção, confiança, prova, esforço cognitivo,
objeções e arquitetura de uma mensagem. A skill entrega um diagnóstico com
os princípios pertinentes, onde aplicá-los e o que remover. Não use esta
skill para manipular, ocultar condição ou explorar vulnerabilidade.

## Quando usar e quando não usar

| Situação | Skill |
| --- | --- |
| A peça existe e não convence; é preciso entender por quê | `inboundfy-copy-persuasao` |
| A peça vai ser escrita e o brief precisa da arquitetura persuasiva | `inboundfy-copy-persuasao` antes de `inboundfy-copy-redacao` |
| O objetivo inclui compartilhamento (STEPPS) | `inboundfy-copy-persuasao` |
| A oferta em si é fraca (preço, entrega, garantia) | `inboundfy-copy-oferta` |
| O problema é de clareza ou de estilo, não de motivação | `inboundfy-copy-edicao` |
| Fluxo de cadastro, checkout ou página com taxa baixa medida | `inboundfy-growth-cro` com este diagnóstico como apoio |
| Teste de qual princípio funciona melhor | `inboundfy-experimentacao` |

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 1 e 2 do fluxo e ao montar
a saída. O grupo desta skill é **copy**.

## Contexto exigido

Sem `.inboundfy/framework/VERSAO.md` ou `.inboundfy/fontes-projeto.md`,
acione `inboundfy-setup` e pare. Depois leia `.inboundfy/context/empresa.md`.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/ofertas.md`, `.inboundfy/context/depoimentos.json`,
`.inboundfy/context/concorrentes.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/estruturas-proibidas.md`,
`.inboundfy/context/glossario.md` e `.inboundfy/context/aprendizado.md`, além
do acervo, da oferta e do brief do canal. Consulte `.inboundfy/framework/`
para anti-slop, `ESTRUTURAS-PERSUASIVAS.md` e regras de fontes.

Prova social só entra se estiver em `depoimentos.json` com consentimento ou
em fonte registrada. Sem prova, o princípio correspondente fica de fora.

## Entrada esperada

Receba peça (ou brief), oferta, persona, estágio de consciência, comportamento
desejado, objeções conhecidas e fontes disponíveis. Se o comportamento
desejado não vier explícito, pergunte antes de analisar.

## Perguntas de diagnóstico

1. Qual comportamento exato a peça pede (clicar, comprar, responder, indicar,
   compartilhar) e quanto ele custa à pessoa em dinheiro, tempo e exposição?
2. Qual trabalho a persona tenta realizar e o que acontece se adiar?
3. O que a mantém na situação atual: hábito, medo de errar, custo de troca,
   desconfiança?
4. O que a puxa para a mudança: dor atual, ganho desejado, pressão externa?
5. Quais provas existem de fato e quais seriam desejáveis mas não existem?
6. Existe prazo, limite de vagas ou condição especial real e documentada?

## Fluxo

1. Responda às perguntas de diagnóstico. Mapeie as forças de mudança
   (empurrão, atração, ansiedade, hábito) com o modelo de
   [REFERENCIA.md](REFERENCIA.md).
2. Organize a mensagem por estágio: atenção, compreensão, confiança e ação.
   Quando o objetivo incluir compartilhamento, leia a seção STEPPS de
   `.inboundfy/framework/ESTRUTURAS-PERSUASIVAS.md` e consulte
   [REFERENCIA.md](REFERENCIA.md) para registrar a aplicação no diagnóstico.
3. Escolha de dois a quatro princípios em
   [references/catalogo-de-principios.md](references/catalogo-de-principios.md)
   que respondam às forças mapeadas. Use prova social, autoridade,
   especificidade, reciprocidade ou urgência somente quando forem reais,
   pertinentes e explicadas.
4. Mostre condição, limite, preço, prazo e alternativa quando isso afeta a
   escolha da pessoa.
5. Passe cada aplicação pelo teste de
   [references/limites-eticos-e-legais.md](references/limites-eticos-e-legais.md).
   Remova medo artificial, escassez inventada, culpa e pressão desnecessária.
6. Apresente três caminhos de abertura ou CTA, com o recomendado primeiro, e
   aguarde a escolha quando a peça ainda não estiver escrita.
7. Revise voz, persona, dicionário, proibições e anti-slop. Quando a skill
   alterar texto, acione `inboundfy-copy-editor` antes do handoff.

## Saída

Diagnóstico persuasivo no formato de [REFERENCIA.md](REFERENCIA.md),
registrado no brief ou no diagnóstico existente do item do acervo
(`acervo/<id>/...`) antes de encaminhar à redação. Quando o pedido for revisar
uma peça, entregue também a peça revisada no mesmo caminho. Cada aplicação traz
o trecho, o princípio, a fonte que a sustenta e a razão da escolha.

## Validação

O diagnóstico é reprovado quando:

- um princípio é aplicado sem fonte real (depoimento, número, prazo);
- a urgência ou a escassez não têm data, quantidade ou motivo verificável;
- uma condição que muda a escolha (preço total, fidelidade, renovação
  automática) fica escondida ou depois do CTA;
- o texto usa culpa, medo desproporcional ou vergonha como motor;
- a aplicação falha no teste de limites éticos e legais.

## Idempotência

Reaplique a análise preservando escolhas já aprovadas. Só altere a tese ou o
ângulo quando o usuário aprovar a mudança. Princípios rejeitados pelo usuário
ficam registrados e não voltam em rodadas seguintes.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** peça ou brief, oferta, persona e comportamento desejado;
- **transformação:** diagnóstico de forças e escolha de princípios com fonte;
- **saída:** diagnóstico persuasivo e, quando pedido, peça revisada;
- **handoff:** `inboundfy-copy-redacao`, `inboundfy-copy-edicao` ou especialista do canal.
