---
name: inboundfy-conselho-marketing
description: Entrega um parecer simulado com lentes de marketing, divergências, recomendação e próximo teste ou execução. Use quando a equipe hesitar entre caminhos de estratégia, oferta, preço, posicionamento ou canais e quiser confrontar alternativas.
---

# Conselho de marketing

Convoca um conselho de cadeiras com lentes de marketing que entram em
conflito de propósito. O valor está na divergência: cada cadeira aplica seu
método ao caso real, o mapa de divergências mostra a troca que está em jogo e
a síntese da presidência recomenda um caminho com sinal de alerta e próximos
passos. A skill orienta a direção. Ela não escreve a landing page, o anúncio
nem a oferta: depois da escolha, encaminha para a skill executora.

As cadeiras são arquétipos de método (posicionamento, disponibilidade de
marca, resposta direta, oferta, comportamento e outros). Nenhuma cadeira
representa uma pessoa real. O parecer nunca atribui opinião a alguém que
existe.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Conduta |
| --- | --- |
| A pessoa hesita entre dois ou mais caminhos de marketing | Use o conselho em sessão padrão. |
| A pessoa quer a leitura de uma única lente ("como um especialista em oferta veria isso?") | Use a consulta rápida, com uma cadeira. |
| Reposicionamento, mudança de preço, lançamento ou corte de canal com custo alto de erro | Ofereça o conselho pleno. |
| O caminho já foi escolhido e falta executar | Não use. Encaminhe direto para a skill executora. |
| Falta dado básico de empresa, oferta ou persona | Pare e acione `inboundfy-contexto-oferta`, `inboundfy-contexto-publico` ou `inboundfy-contexto-institucional`, conforme o dado ausente. |
| A pergunta é sobre um número que pode ser medido | Encaminhe para `inboundfy-metricas` ou `inboundfy-experimentacao` antes de debater opinião. |

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se
um deles faltar, apresente o alerta canônico e acione `inboundfy-setup`. Leia
o método instalado em `.inboundfy/framework/` quando precisar de regra
transversal.

- `.inboundfy/context/empresa.md`: estágio, tamanho, região e modelo de
  receita. O estágio muda a recomendação da presidência.
- `.inboundfy/context/ofertas.md`, `produtos.md` ou `servicos.md`: preço,
  condições e mecanismo da oferta discutida.
- `.inboundfy/context/publico.md`: persona afetada pela escolha.
- `.inboundfy/context/concorrentes.md`: alternativas reais que o cliente
  considera.
- `.inboundfy/context/campanhas.md` e `.inboundfy/estrategia.md`: objetivo e
  canais ativos.
- `.inboundfy/context/proibicoes.md` e `.inboundfy/context/aprendizado.md`:
  limites de promessa e escolhas já confirmadas.

Dado ausente vira pergunta aberta no parecer. Nenhuma cadeira completa uma
lacuna com suposição apresentada como fato.

## Entrada esperada

- A pergunta ou o artefato em exame: estratégia, landing page, mudança de
  preço, plano de lançamento, reposicionamento, mix de canais ou peça.
- O que está em jogo: consequência de acertar e de errar, prazo e orçamento.
- O que já foi tentado e o resultado observado.
- O modo da sessão (consulta rápida, sessão padrão ou conselho pleno). Sem
  indicação, use sessão padrão.
- Cadeiras pedidas pela pessoa, quando houver.

## Perguntas de diagnóstico

Faça somente as que o contexto não responde, num bloco único:

1. Qual escolha precisa ser feita e até quando?
2. Que resultado mostraria, em 90 dias, que a escolha foi certa?
3. Que restrição não pode mudar (orçamento, equipe, preço, prazo, canal)?
4. O que já foi testado e o que aconteceu?
5. Para qual lado a equipe já está inclinada? A resposta define a cadeira
   dissidente.

## Fluxo

1. Faça o preflight, leia os contextos listados e registre as fontes.
2. Reformule a pergunta em uma ou duas frases com o que está em jogo. Se a
   pergunta pedir execução e não direção, encaminhe para a skill executora e
   encerre.
3. Escolha o modo e as cadeiras pela tabela de assentos de
   [REFERENCIA.md](REFERENCIA.md). Em sessão padrão, sente de três a cinco
   cadeiras, sempre com pelo menos uma dissidente contrária à inclinação da
   equipe.
4. Leia em [references/cadeiras-do-conselho.md](references/cadeiras-do-conselho.md)
   somente as fichas das cadeiras sentadas.
5. Escreva o parecer de cada cadeira: perguntas próprias da lente aplicadas
   ao caso, método aplicado aos dados do projeto, recomendação firme e uma
   linha de conclusão. Um parecer que sobrevive à troca do nome da cadeira é
   genérico e precisa ser refeito.
6. Monte o mapa de divergências com duas a quatro tensões reais. Para cada
   uma, nomeie a troca de fundo e o teste ou dado que resolve, com apoio em
   [references/divergencias-e-testes.md](references/divergencias-e-testes.md).
7. Redija a síntese da presidência: recomendação ajustada ao estágio e às
   restrições, sinal de alerta herdado de uma cadeira vencida, próximos
   passos com skill executora e prazo.
8. Apresente a recomendação e mais duas alternativas materialmente
   diferentes, com a recomendada primeiro. Aguarde a escolha da pessoa.
9. Registre escolha, rejeições e alcance. Se a escolha virar regra do
   projeto, acione `inboundfy-aprendizado` para confirmar o alcance antes de
   gravar.
10. Revise a prosa do parecer com `inboundfy-copy-editor` e salve o arquivo.

## Saída

Um parecer do conselho em Markdown, no modelo de [REFERENCIA.md](REFERENCIA.md),
salvo junto do trabalho que motivou a pergunta:

- campanha: `<pacote-de-campanha>/00-briefing/conselho-<AAAA-MM-DD>.md`;
- item de acervo: `acervo/<id>-<data>-<slug>/conselho-<AAAA-MM-DD>.md`;
- peça: `canais/<canal>/<id>-<data>-<slug>/conselho-<AAAA-MM-DD>.md`.

Sem campanha, acervo ou peça ligados, entregue o parecer na conversa e
pergunte onde salvar. O arquivo abre com a marcação de simulação e termina
com o pacote de handoff para a skill executora.

## Validação

- A marcação de simulação aparece no topo do parecer.
- Pelo menos uma cadeira dissidente foi sentada e defende a versão mais forte
  da própria posição.
- Cada parecer cita dado do projeto (persona, preço, canal, número observado)
  e o método da cadeira.
- O mapa de divergências tem de duas a quatro tensões, cada uma com teste ou
  dado que resolve.
- A síntese traz recomendação, sinal de alerta mensurável e próximos passos
  com skill executora existente em `skills/`.
- Nenhuma frase atribui citação ou opinião a pessoa real.
- Afirmação sobre preço, resultado ou cliente tem fonte em `context/` ou
  aparece como pergunta aberta.

Reprovação em qualquer item volta ao passo correspondente do fluxo. Lacuna de
dado volta para a pessoa como pergunta.

## Idempotência

Uma nova sessão sobre a mesma pergunta cria arquivo com nova data e aponta o
parecer anterior no campo `entrada`. A escolha registrada em parecer anterior
só muda com novo pedido da pessoa. Uma cadeira personalizada criada pela
pessoa permanece no projeto e não é reescrita sem pedido.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes. O conselho orienta a
direção e entrega o handoff. Nomeie um destino executável, como `inboundfy-copy-oferta`,
`inboundfy-growth-anuncios` ou `inboundfy-estrategia`, conforme a síntese.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** pergunta, artefato em exame, contexto e modo da sessão;
- **transformação:** pareceres por cadeira, mapa de divergências e síntese;
- **saída:** parecer do conselho salvo junto do trabalho de origem;
- **handoff:** skill executora, escolha registrada e pendências.
