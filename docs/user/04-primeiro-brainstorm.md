# Primeiro brainstorm

Use este fluxo quando houver apenas uma ideia, pergunta ou anotação, ainda sem
tese, evidência ou brief.

## Passo a passo

1. Ative `inboundfy-brainstorm` e forneça a ideia sem tentar estruturá-la.
2. A fase `00-triagem` preserva a entrada original e abre um diretório datado.
3. A fase `01-entrevista` identifica lacunas. Perguntas só são feitas quando
   uma resposta muda materialmente o resultado.
4. A fase `02-pesquisa` consulta fontes do projeto e fontes externas
   necessárias, separando fatos, opiniões e hipóteses.
5. A fase `03-sintese` forma tese, recorte, argumentos, ativos e oportunidades
   por canal.
6. A fase `04-validacao` aplica escrita, fontes, contexto e proibições.
7. Uma reprovação retorna somente à fase responsável.

## Resultado esperado

O arquivo
`brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md` termina com status aprovado,
ideia original intacta, fontes identificadas e suposições explícitas.

Se o pedido já mencionar uma peça, o brainstorm aprovado segue para briefing.
Se houver várias oportunidades, segue para `inboundfy-iniciar`.

O contrato de campos está em [BRAINSTORM.md](../../BRAINSTORM.md).

## O que informar

Envie a ideia original e, quando souber, diga qual público ou canal motivou a
anotação. Não transforme a ideia em um brief artificial apenas para iniciar.
A fase de triagem precisa preservar o material como ele chegou.

Exemplo:

> Quero explicar por que uma revisão de bicicleta antes do trajeto diário
> evita falhas que parecem surgir de repente.

## Como acompanhar

Abra o `brainstorm.md` depois de cada fase. A ideia original não muda. As
perguntas e respostas, as fontes, as suposições, a tese e as oportunidades
ganham seções próprias. A validação final informa o status e qualquer fase que
precise ser refeita.

## Quando interromper

Interrompa quando uma afirmação depender de dado ausente, uma fonte relevante
estiver em conflito ou a marca ainda não tiver público e canal mínimos. O
brainstorm pode preservar uma hipótese, mas não apresentá-la como fato.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | desenvolvimento sequencial de uma ideia |
| Autoridade | `BRAINSTORM.md` e skills `inboundfy-brainstorm-*` |
