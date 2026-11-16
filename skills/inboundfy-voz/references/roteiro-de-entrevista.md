# Roteiro de entrevista de voz

Leia este arquivo no passo 4 do fluxo. Pergunte só o que a análise de
amostras não respondeu. Faça um bloco por vez e registre a resposta com as
palavras da pessoa antes de interpretar.

## Bloco 1: identidade

| Pergunta | Alimenta |
| --- | --- |
| Se a marca fosse uma pessoa atendendo no balcão, quem seria? Idade, profissão, jeito de falar. | Atributos |
| Que três palavras um cliente satisfeito usaria para descrever como vocês falam? | Atributos |
| E um cliente insatisfeito? | "Não é" de cada atributo |
| Com quem o público confunde vocês? Como querem soar diferente? | Contraste, vocabulário evitado |

## Bloco 2: relação com o leitor

| Pergunta | Alimenta |
| --- | --- |
| Vocês tratam o cliente por "você", "vocês" ou "o senhor"? Muda por canal? | Pessoa verbal por canal |
| Falam como "nós", como a empresa ou como o fundador em primeira pessoa? | Pessoa verbal |
| O cliente sabe mais, menos ou o mesmo que vocês sobre o assunto? | Nível técnico, ajustes por persona |
| Que palavra o cliente usa que vocês insistem em não usar? | Vocabulário preferido |

## Bloco 3: situações

| Pergunta | Alimenta |
| --- | --- |
| Como vocês dão uma má notícia hoje? Mostre um exemplo. | Matriz de tons |
| Como cobram um cliente atrasado? | Matriz de tons |
| Como respondem uma reclamação pública? | Matriz de tons |
| Qual tipo de texto deixa vocês mais à vontade? E qual deixa menos? | Situações prioritárias |

## Bloco 4: limites

| Pergunta | Alimenta |
| --- | --- |
| Humor é permitido? Onde não pode de jeito nenhum? | Eixo sério a bem-humorado, matriz |
| Emoji, gíria, exclamação: sim, não, onde? | Regras de formatação, registro por canal |
| Existe palavra ou promessa que ninguém da empresa pode escrever? | Encaminhamento para `proibicoes.md` |
| Há regra legal ou do setor que limita o que se diz (saúde, finanças, LGPD)? | Pendência para contexto de oferta ou proibições |

## Bloco 5: operação

| Pergunta | Alimenta |
| --- | --- |
| Quem escreve hoje e quem aprova? | Histórico do guia, aprovação do teste |
| Algum texto vai ser escrito por agente de IA sem revisão humana? | Rigor dos exemplos e contraexemplos |

## Como registrar

```markdown
- Pergunta: {{texto}}
  Resposta literal: "{{palavras da pessoa}}"
  Interpretação: {{o que isso vira no guia}}
  Alcance: {{projeto | canal | persona}}
```

Quando a resposta for vaga ("queremos ser próximos"), peça um exemplo:
"Mostre uma mensagem que vocês acham próxima e uma que acham próxima demais."
