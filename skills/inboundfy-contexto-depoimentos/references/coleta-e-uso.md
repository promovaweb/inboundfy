# Coleta, transcrição e uso em peças

Referência para transformar a fala de um cliente em registro e para orientar
a peça que vai citá-lo. Lida no passo 2 do fluxo quando a entrada for áudio,
vídeo ou avaliação pública, ou quando o usuário pedir orientação de coleta.

## O que conta como literal

| Ajuste | Permitido? | Exemplo |
| --- | --- | --- |
| Pontuação e maiúsculas | sim | "dia das mães" para "Dia das Mães" |
| Retirar saudação ou despedida no início ou no fim | sim | "oi gente, só passando pra agradecer," |
| Omitir trecho no meio | sim, com `[...]` | "Antes era [...] três por semana" |
| Corrigir erro evidente da transcrição automática | sim, conferindo com o áudio | "a lerta" para "alerta" |
| Trocar palavra por sinônimo | não | "salvaram" para "ajudaram muito" |
| Trocar gíria por norma culta | não | "pra" para "para" fora da pontuação |
| Juntar duas falas em uma | não | registre dois depoimentos |
| Acrescentar número ou produto que a pessoa não disse | não | |

## Transcrição de áudio e vídeo

1. Use a transcrição disponível (WhatsApp, ferramenta de vídeo, manual).
2. Peça a quem tem o arquivo que confira o texto com o áudio.
3. Aplique só os ajustes permitidos da tabela.
4. Registre em `fonte` o canal, a ferramenta de transcrição e quem conferiu.
5. O arquivo de áudio ou vídeo fica onde o usuário guarda mídia; o registro
   aponta para ele em `fonte` quando houver caminho.

## Avaliação pública

Avaliações em loja de aplicativos, Google ou redes são boas fontes. Registre
a URL e a data em `fonte`, com o nome como aparece na plataforma. O
consentimento começa como `pendente`: a avaliação é pública, mas usar a fala
numa peça da marca é outra finalidade. Peça autorização pelo canal de
resposta da própria plataforma ou pelo contato do cliente.

## Quando e como coletar

| Momento | Por que funciona | Pergunta sugerida |
| --- | --- | --- |
| Logo depois de um marco de valor (primeiro mês, primeira data forte de vendas) | a lembrança está fresca e concreta | "O que mudou na sua rotina desde que começou?" |
| Resposta de 9 ou 10 numa pesquisa de recomendação (NPS) | a pessoa já disse que recomenda | "O que você diria para uma colega que está pensando em usar?" |
| Fechamento de projeto de serviço | a entrega acabou de acontecer | "Como era antes e como ficou?" |
| Mensagem espontânea de agradecimento | já existe a fala | pedir autorização, não um novo texto |

Perguntas que geram depoimento específico:

1. "Como você resolvia isso antes?"
2. "O que te fez decidir testar?"
3. "Qual foi a primeira coisa que mudou?"
4. "Tem algum número que mostra a diferença?"
5. "Para quem você recomendaria e por quê?"

Depoimento com antes, depois e um detalhe concreto convence mais do que
elogio genérico ("ótimo atendimento").

## Regras para a peça que cita

As skills de canal seguem estas regras ao usar um registro:

- citar só registros com `consentimento: "autorizado"` e o canal da peça em
  `canaisAutorizados`;
- usar o texto do campo `depoimento`, podendo escolher um trecho e marcar
  omissão interna com `[...]`;
- identificar a pessoa como ela autorizou;
- não apresentar resultado individual como resultado esperado de todos; a
  peça qualifica ("no caso da Joana") e respeita `proibicoes.md`;
- sinalizar quando o depoimento foi incentivado.

## Erros comuns

- Escolher só depoimentos com números grandes. Peças com mistura de
  resultados soam mais críveis e evitam promessa implícita.
- Usar depoimento antigo de produto que mudou muito. Confira `data` e o
  estágio em `produtos.md`.
- Juntar trechos de clientes diferentes num texto só.
