# ESCRITA.md — Princípios de Escrita Humana do Inboundfy

Este arquivo define o padrão de escrita que toda skill de redação e auditoria
do Inboundfy aplica, em qualquer canal e qualquer voz de marca. Ele não
substitui `context/marca-voz.md`: a voz específica do usuário ajusta tom,
vocabulário e formato; este arquivo garante que o texto continue humano,
verificável e livre de padrões mecânicos de IA, seja qual for a voz.

Este arquivo define os princípios. `context/estruturas-proibidas.md` é o
catálogo operacional e detalhado — palavra por palavra, estrutura por
estrutura — dos padrões que denunciam texto gerado por IA sem revisão
humana. Toda auditoria de parágrafo aplica os dois juntos: os princípios
daqui para julgar o texto como um todo, e o catálogo de
`context/estruturas-proibidas.md` para apontar violação específica e
objetiva.

## Regra central

Texto humano bom mostra o objeto, explica para que ele serve, situa onde
aparece, apresenta um exemplo, interpreta o exemplo, aponta uma falha
provável e deixa uma forma de conferência. Texto com cara de IA faz o caminho
inverso: começa por tese abstrata, empilha substantivos, cita algo como prova
de realidade, fecha com frase elegante e evita o ponto exato que o leitor
verificaria ou corrigiria.

## O que evitar em qualquer canal

- Fragmentação artificial: listas, tópicos e headings substituindo prosa
  quando a ideia pede desenvolvimento contínuo.
- `5 dicas`, `3 passos` e framework genérico quando o conteúdo não é
  realmente um procedimento numerado.
- Frases curtas quebradas em sequência, ritmo staccato repetitivo.
- Slop corporativo: "no mundo dinâmico de hoje", "é fundamental destacar
  que", "em suma", conclusão decorativa sem informação nova.
- Repetição da mesma ideia com palavras diferentes só para alongar o texto.
- Didatismo infantilizado — explicar como se o leitor não soubesse nada do
  assunto que buscou.
- Introdução artificial que atrasa o ponto e conclusão que só resume o que já
  foi dito.
- Pergunta retórica seguida de resposta óbvia como muleta estrutural.
- Excesso de emojis e linguagem genérica de rede social.

## O que produzir

- Parágrafos orgânicos com transição natural entre ideias.
- Densidade sem enrolação: cada frase avança um raciocínio ou entrega um dado.
- Exemplos concretos, extraídos do `context/` do usuário sempre que possível,
  nunca genéricos ou inventados.
- Opinião com personalidade quando o brief pedir posicionamento, apoiada em
  `context/marca-voz.md` e em `context/publico.md`.
- Abertura reconhecível, progressão clara, explicação antes da aplicação,
  limite explícito do que a peça não cobre e fechamento sem enfeite.
- Primeira pessoa e experiência real quando o canal e a voz permitirem —
  postura de quem trabalha na área, não de quem descreve a área de fora.

## Auditoria por parágrafo

Toda peça final passa por `inboundfy-copy-editor` antes de ser considerada pronta.
A auditoria registra achados verificáveis por trecho, sempre com localização,
regra ou fonte, diagnóstico e ação aplicada ou pendente. Não atribui nota,
média ou percentual editorial. A leitura compara:

1. `context/proibicoes.md` — vetos específicos do usuário, se existirem.
2. `context/estruturas-proibidas.md` — catálogo genérico de palavra, frase e
   estrutura de parágrafo com cara de IA.
3. Este arquivo (`ESCRITA.md`).
4. `context/marca-voz.md` — voz, tom e vocabulário próprios.
5. A validação própria do canal, quando a skill de canal declarar uma.

Uma ocorrência de `context/proibicoes.md` ou
`context/estruturas-proibidas.md` reprova o texto até ser removida ou até uma
exceção explícita da fonte canônica ser confirmada. Problemas graduais de voz,
ritmo e clareza devem apontar o trecho observado e uma alteração concreta,
sem criar uma escala numérica subjetiva. Após as mudanças, repita a leitura
completa e atualize o relatório.

Um parágrafo abaixo de 11 palavras não é automaticamente reprovado — frase
curta e completa pode ser o fechamento certo de uma ideia. A reprovação exige
julgamento humano sobre o avanço real do raciocínio, não uma contagem
mecânica de palavras ou frases.

## Canal ajusta forma, não o padrão

Formato de LinkedIn, e-mail, ebook ou roteiro de vídeo pode pedir frases mais
curtas, parágrafos menores ou estrutura mais visual. Isso é uma decisão de
canal, documentada na skill correspondente, não uma licença para reintroduzir
os padrões mecânicos listados acima.
