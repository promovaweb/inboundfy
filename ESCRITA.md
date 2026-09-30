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

## Anatomia do parágrafo humano

Um parágrafo humano carrega pelo menos quatro destes elementos:

- **Objeto:** ferramenta, tela, campo, serviço, rotina, campanha, email,
  relatório, fila, sistema, banco, domínio ou registro.
- **Função:** o que esse objeto faz na rotina.
- **Condição:** quando funciona, que permissão exige, que entrada recebe ou
  que dependência precisa existir.
- **Exemplo:** uma situação situada no negócio ou na rotina do leitor.
- **Interpretação:** o que a pessoa deve enxergar no exemplo.
- **Falha provável:** atraso, mensagem presa, segmento errado, histórico
  ausente, permissão negada, custo de suporte ou revisão difícil.
- **Verificação:** tela, log, relatório, email de teste, fila, cadastro,
  link, resposta do CRM, status do serviço ou comparação com a promessa.

Essa anatomia não aparece como fórmula visível. Ela serve para impedir
parágrafos vazios e para obrigar o texto a mostrar trabalho acontecendo. É um
menu de elementos possíveis, não um script para reencenar na mesma ordem a
cada parágrafo. Reprove o texto que transforma cada bloco em uma nova cena de
`Eu fiz X, então Y aconteceu`: essa repetição de motor narrativo é tão
mecânica quanto a lista seca que a anatomia tenta evitar. Guia e artigo de
referência alternam explicação direta, regra, comparação e cena pontual;
reserve a sequência narrativa completa para peça que é essencialmente relato
de experiência.

## Progressão do raciocínio

O texto humano explica como um incidente acompanhado: apresenta o fato,
reconstrói o mecanismo, liga o efeito ao trabalho do leitor, responde a uma
dúvida, executa, encontra uma variação, ajusta e confere o resultado. Essa
progressão pode atravessar vários parágrafos. Não comprima o incidente inteiro
em uma sentença com ferramenta, consequência e solução. Dê espaço para o
leitor entender o que mudou entre uma etapa e outra, principalmente quando a
falha da primeira tentativa ensina mais do que o comando correto isolado.

Quando a fonte mostra um erro real, não reescreva a demonstração como caminho
perfeito. Explique o estado observado, a hipótese usada, o ajuste aplicado e o
teste que confirmou o resultado. A escrita ganha autoria quando o leitor
acompanha a leitura técnica que permitiu continuar.

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

## Cadência esperada

A cadência deve parecer aula técnica bem escrita. O texto pode ser simples,
mas não pode ser seco. A frase leva o leitor de uma peça para a próxima, com
conectivos naturais, artigos definidos quando a construção exigir, exemplo
interpretado e consequência limitada. Comandos, tabelas e listas não deixam o
raciocínio principal dentro da lista: primeiro explica-se o que está sendo
observado, depois mostra-se o exemplo e então se interpreta. Quando a ideia
for causal, a explicação fica em prosa.

## Parágrafo simples e completo

A unidade de revisão é a ideia completa, não uma contagem rígida. Um parágrafo
de uma frase funciona quando a frase está desenvolvida, nomeia o objeto e leva
a explicação adiante. Reprove o parágrafo de uma frase quando ele servir apenas
como impacto, repetir a conclusão anterior ou quebrar uma relação que deveria
continuar. Reprove também a sequência de blocos curtos que cria uma escadinha
visual. Nesses casos, integre as frases ao raciocínio vizinho.

Não acrescente uma segunda frase apenas para cumprir formato. Ela deve trazer
interpretação, consequência, limite, exemplo ou conferência. Quando não houver
novo trabalho para a segunda frase, preserve o parágrafo completo em uma frase.

O vocabulário precisa ser simples. Repita a ferramenta ou o objeto quando o
sinônimo aumentaria a distância do leitor, e prefira headings que nomeiem a
tela, o campo, a configuração, a versão, o erro ou a escolha real.

## Sinais de slop

Reprove qualquer texto que apresente estes sinais:

- Define uma ferramenta e não mostra onde ela aparece na rotina.
- Cita sistema, ferramenta, serviço ou produto como nome solto.
- Usa lista por vírgulas para parecer técnico.
- Mostra comando, campo, tabela ou métrica sem interpretar.
- Começa por conclusão e só depois inventa uma situação.
- Traz exemplo sem falha provável.
- Fecha com frase bonita sem teste de realidade.
- Escreve como manual neutro de fornecedor.
- Usa primeira pessoa sem experiência concreta.
- Faz comparação técnica em uma frase só.
- Usa chamada para a próxima ação sem lacuna imediatamente anterior.
- Marca checklist como concluído sem melhorar a leitura.
- Cria rótulo abstrato para esconder o nome real da coisa, como chamar um
  prompt vago de `entrada ampla` ou usar `regra` sem dizer se fala de aceite,
  permissão negada, teste ou comportamento esperado.
- Fragmenta o texto em listas, headings, blocos artificiais ou frases curtas
  em sequência quando a prosa explicaria melhor.
- Usa `5 dicas`, `3 passos`, framework genérico, fórmula mágica de copy, slop
  corporativo ou didatismo infantilizado como substituto de experiência real.
- Trata versão reprovada como rascunho quase pronto, em vez de contraexemplo.
- Usa formato final, nota automática ou checklist para justificar texto que
  custou tokens, tempo ou dinheiro e continuou ruim.
- Repete o mesmo molde de heading (sujeito + verbo no passado + consequência)
  em quase todos os H2/H3 do texto, mesmo nomeando objetos diferentes.
- Organiza a peça inteira como reconto cronológico, com quase todo parágrafo
  abrindo por `Eu` mais verbo no passado, quando o formato pedia explicação
  por dúvida, decisão ou consequência.
- Reconta o mesmo caso, na mesma ordem e com a mesma função argumentativa, em
  mais de uma peça do mesmo pacote, trocando apenas sinônimos entre canais.

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

## O que não reprovar

Reprovação editorial mira padrão real, não coincidência lexical. Antes de
reprovar um trecho, confirme que ele não se encaixa em um destes casos:

- Gramática correta e estilo consistente. Texto revisado por profissional
  também sai polido; polimento não é sinal de IA por si só.
- Vocabulário técnico ou formal aplicado ao tema certo. O vocabulário vetado
  em `estruturas-proibidas.md` é específico; não generalize o veto para toda
  palavra difícil.
- Frase curta isolada, única no parágrafo, usada para fechar um raciocínio já
  desenvolvido. O padrão vetado é a sequência de várias frases curtas em fila,
  não uma frase curta pontual.
- Termo tecnicamente correto usado dentro de citação, título ou nome próprio.
- Repetição de conectivo comum (`porém`, `além disso`, `portanto`) quando
  aparece uma vez. O padrão vetado é o empilhamento em sequência.

Quando restar dúvida entre reprovar um trecho competente e um trecho
problemático, procure o agrupamento de vários sinais no mesmo parágrafo antes
de reprovar. Um sinal isolado raramente justifica reescrever o trecho inteiro;
vários sinais no mesmo trecho justificam.

## Sinais de escrita humana a preservar

Ao revisar, proteja estes sinais em vez de neutralizá-los, porque eles marcam
voz autoral real e a correção mecânica os apaga sem ganho editorial:

- Detalhe específico, incomum e difícil de inventar: um valor exato, uma
  citação estranha, um nome de cliente real, uma data amarrada à experiência
  direta do autor.
- Opinião com ressalva ou tensão não resolvida, como `isso funciona na
  maioria dos casos, mas ainda me incomoda quando`, em vez de conclusão
  redonda e sem tensão.
- Variação real de tamanho de frase dentro do mesmo parágrafo, alternando
  frase curta e frase longa conforme o raciocínio precisar.
- Aparte ou autocorreção genuína do autor, como uma ressalva entre parênteses
  que reconsidera o que acabou de ser dito.
- Referência datada a uma ferramenta, versão, evento ou contexto específico do
  momento da escrita.
- Escolha editorial que o autor consegue justificar quando perguntado por que
  removeu, manteve ou escreveu de determinado jeito.

## Exemplos de reescrita

| Slop | Escrita humana esperada |
| --- | --- |
| `O sistema automatiza campanhas.` | `O sistema automatiza campanha quando o segmento, o email e a rotina de execução estão ligados. Se o agendamento não atualiza os segmentos ou a fila não processa, a regra parece certa na tela, mas a mensagem pode chegar tarde ou nem sair.` |
| `A automação melhora o atendimento.` | `A automação melhora atendimento quando preserva o que a pessoa já respondeu. Se o atendimento recebe uma conversa vinda de anúncio e a automação não registra origem, dúvida e etapa comercial, a pessoa ainda precisa refazer a triagem na mão.` |
| `O CRM centraliza informações.` | `O CRM só ajuda quando a conversa vira histórico retomável. Se a pessoa abre o cadastro e não enxerga origem, última pergunta e próxima ação, o sistema apenas mudou o lugar da confusão.` |
| `A IA ajuda no desenvolvimento.` | `A IA reduz trabalho repetitivo quando a tarefa chega pequena, com escopo claro e regra de aceite. Quando o pedido mistura tela, permissão, cobrança e refatoração, o ganho inicial vira uma revisão difícil que a pessoa precisa desfazer depois.` |
| `O email precisa ter chamada clara.` | `A chamada para a próxima ação do email precisa continuar a frase anterior. Se a mensagem explica uma dúvida de segmentação, o clique deve levar para uma leitura que aprofunde essa escolha, não para uma oferta que interrompe a conversa.` |
| `Os relatórios mostram resultados.` | `Um relatório só ajuda quando começa pela pergunta que a pessoa trouxe para a reunião. Se a apresentação mostra tráfego, abertura e seguidores, mas não explica quais oportunidades chegaram ao funil, ela afasta o público da parte que ele queria entender.` |

## Canal ajusta forma, não o padrão

Formato de LinkedIn, e-mail, ebook ou roteiro de vídeo pode pedir frases mais
curtas, parágrafos menores ou estrutura mais visual. Isso é uma decisão de
canal, documentada na skill correspondente, não uma licença para reintroduzir
os padrões mecânicos listados acima. Cada peça do mesmo pacote precisa de
ângulo de entrada, recorte ou ordem de argumento próprios; narrar o mesmo
fato, na mesma ordem, com a mesma função no argumento, trocando apenas
sinônimos entre canais é reaproveitamento mecânico.
