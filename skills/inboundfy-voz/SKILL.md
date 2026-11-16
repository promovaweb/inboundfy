---
name: inboundfy-voz
description: Define o guia de voz da empresa em marca-voz.md com atributos, tons e exemplos testados. Use quando o pedido falar em voz da marca, tom por canal, jeito de escrever, analisar textos aprovados ou padronizar a comunicação.
---

# Voz

Transforma a forma como a empresa já fala (ou quer falar) num guia que outra
pessoa, ou um agente, consegue aplicar sem adivinhar. A voz é a identidade
estável. O tom é a variação dessa voz por situação: a mesma marca fala de um
jeito no post de lançamento e de outro no aviso de cobrança atrasada. Esta
skill conduz a definição completa. Ajuste pontual de um campo já definido fica
com `inboundfy-contexto-marca`.

## Verificação do setup

Se a configuração estiver incompleta, acione `inboundfy-setup`. Confirme
`.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Quando um
deles faltar, apresente o alerta canônico de `SKILL-AUTORIA.md` e encerre sem
criar nem alterar artefatos. Depois consulte `.inboundfy/context/empresa.md`,
os arquivos de `.inboundfy/framework/` e os Markdown relevantes de
`.inboundfy/fontes-projeto.md`.

## Arquitetura de execução

A skill confirma as sentinelas antes de criar ou alterar qualquer artefato. O
trabalho segue o contrato compartilhado e usa a referência específica desta
pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 3, 5, 6 e 9 do fluxo. O
grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Skill certa |
| --- | --- |
| Projeto novo, `marca-voz.md` vazio ou só com três adjetivos | `inboundfy-voz` |
| Textos da marca soam diferentes entre canais ou entre autores | `inboundfy-voz` |
| Reposicionamento, novo público ou fusão de marcas | `inboundfy-voz` |
| Trocar um termo do vocabulário preferido ou incluir um exemplo | `inboundfy-contexto-marca` |
| Registrar um veto de termo ou promessa | `inboundfy-contexto-marca`, em `proibicoes.md` |
| Registrar a grafia de um produto | `inboundfy-contexto-institucional`, em `glossario.md` |
| Conferir se uma peça respeita a voz | `inboundfy-copy-editor` |

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/aprendizado.md` e as amostras fornecidas. Quando `brand/`
existir, leia os Markdown de voz e manual de marca. Divergência entre `brand/`
e `marca-voz.md` vira pergunta para a pessoa, nunca escolha silenciosa.

Sem persona registrada em `publico.md`, a voz pode ser definida, mas os
ajustes por persona ficam pendentes para `inboundfy-personas`.

## Entrada esperada

- Textos escritos pela empresa que a pessoa aprova (de três a dez, de canais
  diferentes quando possível).
- Textos que a pessoa rejeita, próprios ou de terceiros, com o motivo.
- Preferências declaradas, canais ativos e personas, incluindo as fichas de
  `inboundfy-personas` para ajustar o tom por público.
- Opcional: textos de concorrentes ou marcas admiradas, só como contraste.

Não atribua à empresa ou ao responsável uma frase que ninguém forneceu.

## Perguntas de diagnóstico

1. Se a marca fosse uma pessoa atendendo um cliente no balcão, quem seria e
   como falaria?
2. Que texto da própria empresa a pessoa mais gosta? E qual a envergonha?
3. Com quem o público confunde a marca e como ela quer soar diferente?
4. Em qual situação a comunicação mais erra hoje: venda, suporte, cobrança,
   má notícia?
5. Quem escreve hoje (sócio, agência, equipe, agente) e quem aprova?

## Fluxo

1. Leia o contexto exigido e o `marca-voz.md` atual. Registre o que já está
   definido para não perguntar de novo.
2. Colete as amostras. Peça os textos aprovados e rejeitados que faltarem.
   Sem nenhuma amostra, siga só com entrevista e marque a voz como
   `hipotese` até existir um texto aprovado.
3. Analise as amostras com
   [references/analise-de-amostras.md](references/analise-de-amostras.md):
   pessoa verbal, tamanho de frase, abertura, fechamento, vocabulário
   recorrente, uso de humor, emoji, número e exemplo.
4. Conduza a entrevista de
   [references/roteiro-de-entrevista.md](references/roteiro-de-entrevista.md).
   Pergunte só o que a análise não respondeu.
5. Proponha três atributos de voz no formato "é, não é, na prática" da
   [REFERENCIA.md](REFERENCIA.md). Apresente três conjuntos realmente
   diferentes, com o recomendado primeiro e aguarde a escolha.
6. Posicione a voz nos quatro eixos de tom e monte a matriz de tons por
   situação com
   [references/tons-por-situacao.md](references/tons-por-situacao.md).
7. Defina pessoa verbal, registro (culto ou coloquial por canal), ritmo,
   vocabulário preferido e evitado, regras de formatação (emoji, caixa alta,
   exclamação) e assinatura.
8. Separe a identidade central dos ajustes por canal e por persona. O ajuste
   muda foco, vocabulário e tamanho. Ele não troca a identidade.
9. Teste: reescreva um trecho real da empresa em duas situações da matriz
   (por exemplo, lançamento e cobrança atrasada) seguindo o guia. Mostre à
   pessoa, registre o que ela corrigiu e ajuste o guia.
10. Grave o guia aprovado em `.inboundfy/context/marca-voz.md`, preenchendo as
    seções fixas do template e acrescentando as seções complementares do
    modelo de [REFERENCIA.md](REFERENCIA.md), sem remover seção existente.
    Encaminhe vetos para `inboundfy-contexto-marca`, grafias para
    `inboundfy-contexto-institucional` e registre as escolhas com alcance em
    `.inboundfy/context/aprendizado.md`.

## Saída

`.inboundfy/context/marca-voz.md` atualizado com atributos, eixos de tom,
matriz de tons por situação, pessoa verbal, registro por canal, vocabulário,
exemplos aprovados com motivo, contraexemplos com motivo e ajustes por canal e
persona. Junto, um registro da execução com amostras analisadas, escolhas,
trecho de teste e pendências.

## Validação

- Cada atributo tem "é", "não é" e "na prática" com um exemplo de frase.
- Pelo menos um exemplo aprovado é texto real da empresa ou está marcado como
  ilustrativo.
- A matriz cobre ao menos venda, suporte, má notícia e conteúdo educativo.
- Pessoa verbal e registro estão definidos por canal ativo.
- Vocabulário evitado é preferência. Vetos foram para `proibicoes.md`.
- O trecho de teste foi aprovado pela pessoa ou as correções dela entraram no
  guia.
- Nenhuma seção fixa do template foi removida.

## Idempotência

Preserve exemplos aprovados e escolhas registradas. Uma nova execução lê o
guia atual, pergunta só o que mudou e acrescenta padrões com alcance
declarado. Mudança de atributo central exige confirmação explícita, porque
afeta todas as peças futuras. A versão anterior do guia fica registrada no
histórico de `aprendizado.md`.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade;
- **entrada:** amostras, entrevista e contexto lidos;
- **transformação:** análise de amostras, escolha de atributos, matriz de
  tons e teste em trecho real;
- **saída:** `marca-voz.md` atualizado e registro da execução;
- **handoff:** `inboundfy-contexto-marca` para vetos,
  `inboundfy-contexto-institucional` para grafias, `inboundfy-personas` para
  ajustes por persona pendentes.
