# REFERENCIA.md; inboundfy-base-editor

Material de apoio para aplicar `ESCRITA.md` com precisão, parágrafo a
parágrafo. Use isto ao avaliar nota e ao reescrever trecho abaixo de 90%.

O checklist abaixo cobre os princípios de `ESCRITA.md`. Para violação
específica e catalogada; palavra, fórmula de abertura/fechamento,
estrutura de parágrafo; cruze sempre com `context/estruturas-proibidas.md`,
que impõe reprovação automática e teto de nota 69 quando violado (mesmo peso
de `context/proibicoes.md`). O teto registra a gravidade do parágrafo; não
autoriza aprovação pela média.

## Checklist objetivo por parágrafo

Marque cada item como presente ou ausente antes de atribuir nota:

- [ ] Nomeia um objeto real (uma coisa, uma ação, uma escolha) na primeira
      frase; não abre com afirmação abstrata sobre o mundo.
- [ ] Cada frase avança a ideia ou entrega um dado novo; nenhuma frase só
      repete a anterior com outras palavras.
- [ ] Se apresenta exemplo, o exemplo é interpretado (o que ele prova, onde
      falha); não fica solto como enfeite.
- [ ] Não usa fórmula de abertura genérica ("no cenário atual", "é
      fundamental destacar", "cada vez mais").
- [ ] Não fecha com frase decorativa que só resume o parágrafo.
- [ ] Se é uma frase única, ela está desenvolvida e completa uma ideia; não
      é fragmento cortado para parecer direto.
- [ ] Nenhuma palavra ou expressão de `context/proibicoes.md` aparece.
- [ ] O vocabulário confere com `context/marca-voz.md` (preferido vs.
      evitado).

Um parágrafo com todos os itens marcados fica acima de 90. Cada item ausente
derruba a nota proporcionalmente ao peso do problema (fórmula de abertura
genérica e frase decorativa pesam mais que uma frase levemente repetitiva).

## Exemplo; antes e depois

**Antes (nota ~55, fragmentação e slop):**

> No cenário atual, a automação é cada vez mais importante. Ela ajuda as
> empresas. É fundamental destacar que times pequenos também podem se
> beneficiar. Em suma, vale a pena considerar.

Problemas: abertura genérica, frases picadas sem avanço de ideia, fechamento
decorativo, nenhum objeto real nomeado.

**Depois (nota ~95):**

> Um time de três pessoas rodando cobrança manual em planilha perde o cliente
> quando alguém tira férias. Automatizar esse fluxo não é sobre
> parecer moderno; é sobre não depender de uma pessoa lembrar de enviar o
> boleto certo na hora certa. A falha mais comum nessa automação é confiar
> demais no gatilho de data e esquecer o caso de cliente que muda de plano no
> meio do ciclo.

Diferença: objeto nomeado (cobrança manual em planilha), avanço real
(motivo, não só afirmação), exemplo interpretado (falha provável apontada).

## Erros comuns na correção

- Reescrever um parágrafo curto e correto só porque ele é curto; frase de
  uma linha bem construída não precisa de recheio.
- Corrigir fragmentação transformando o parágrafo em lista; troca um
  problema (fragmentação) por outro (perda de prosa).
- Aplicar o teto de nota 69 por violação de proibição, mas esquecer de
  registrar qual regra de `context/proibicoes.md` foi violada.
- Aprovar o texto porque a média passou de 90 mesmo com uma ocorrência
  proibida.
- Buscar só a frase literal e ignorar paráfrase, variação ou estrutura
  equivalente.
- Penalizar vocabulário técnico legítimo do domínio como se fosse jargão;   confira o objeto real do texto antes de marcar um termo como problema (ver
  nota sobre vocabulário técnico válido em `ESCRITA.md`).

## Registro de nota

Ao devolver o resultado, use este formato por parágrafo:

```text
Parágrafo N; nota: XX/100
Motivo (se < 90): <item de checklist ausente>
Correção aplicada: <o que mudou, ou "nenhuma">
```
