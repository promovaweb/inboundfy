---
name: inboundfy-contexto-concorrentes
description: Registra e corrige concorrentes em .inboundfy/context/concorrentes.md, com oferta, público, ponto forte real, diferença comprovada e permissão de citação nominal. Use quando a pessoa disser "cadastre a concorrente", "a X mudou o preço", "podemos citar a X?" ou trouxer fatos de uma pesquisa de concorrentes.
---

# Inboundfy Contexto: Concorrentes

Mantém o cadastro permanente de concorrentes do projeto. Cada entrada diz o
que o rival oferece, para quem, onde ele é forte de verdade, onde a empresa se
diferencia com prova e se o nome pode aparecer em conteúdo público. As skills
de canal, `inboundfy-copy-posicionamento`, `inboundfy-estrategia` e
`inboundfy-concorrentes` leem este arquivo antes de mencionar ou comparar um
rival.

A skill não pesquisa o mercado e não escreve comparação pública. A pesquisa
ativa de sites, preços e avaliações é de `inboundfy-concorrentes`, que entrega
os fatos estáveis do relatório como candidatos. Esta skill confirma cada um
com o usuário antes de gravar. Vetos de comparação ficam em
`.inboundfy/context/proibicoes.md` (`inboundfy-contexto-marca`) e falas de
clientes que trocaram de fornecedor ficam em
`.inboundfy/context/depoimentos.json` (`inboundfy-contexto-depoimentos`).

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando `.inboundfy/context/concorrentes.md` estiver ausente, acione
`inboundfy-setup` para restaurar o template; esta skill não cria o arquivo
por conta própria.

## Arquitetura de execução

A skill confirma as sentinelas antes de alterar o arquivo e trabalha um
concorrente por vez.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo e as referências
internas indicadas nos passos 3 e 6. O grupo desta skill é **contexto**.

## Quando usar e quando não usar

| Pedido do usuário | Esta skill? | Caminho |
| --- | --- | --- |
| "Cadastre a concorrente X" ou "a X agora cobra por profissional" | sim | entrada nova ou correção de campo |
| "Podemos citar a X nos posts?" | sim | campo de citação nominal |
| `inboundfy-concorrentes` ou `inboundfy-copy-posicionamento` entregou fatos | sim | confirmar e gravar |
| "Pesquise quem são nossos concorrentes" | não | `inboundfy-concorrentes` |
| "Escreva uma página comparando com a X" | não | `inboundfy-concorrentes`, que monta o brief |
| "Nunca fale mal de rival" | não | `inboundfy-contexto-marca`, em `proibicoes.md` |

## Contexto exigido

- `.inboundfy/context/concorrentes.md`, lido inteiro antes de qualquer
  gravação, para não duplicar entrada;
- `.inboundfy/context/proibicoes.md`, para checar veto de comparação ou de
  nome antes de liberar a citação nominal;
- `.inboundfy/context/ofertas.md`, `.inboundfy/context/produtos.md` ou
  `.inboundfy/context/servicos.md`, para descrever a diferença da empresa com
  o nome correto da oferta;
- relatório de `inboundfy-concorrentes` no acervo ou registro de
  `inboundfy-copy-posicionamento`, quando a entrada vier de um deles.

## Entrada esperada

Um concorrente novo, uma correção de dado, uma mudança de permissão de
citação, a lista de fatos estáveis do relatório de `inboundfy-concorrentes`
ou os fatos sobre concorrentes aprovados em `inboundfy-copy-posicionamento`,
com fonte e data de cada fato.

## Perguntas de diagnóstico

1. O rival já está no arquivo com outro nome, nome antigo ou abreviação?
2. O pedido é entrada nova, correção, mudança de permissão, incorporação de
   pesquisa ou saída do mercado?
3. Cada fato tem fonte e data (resposta do usuário, preço público, teste)?
4. A diferença da empresa tem prova nomeada ou é só afirmação?
5. Quem autorizou citar o nome do rival, e quando?

## Fluxo

1. Leia `concorrentes.md` inteiro. Procure o rival pelo nome, por nomes
   antigos e por abreviações.
2. Classifique o pedido com a tabela de tipos de pedido de
   [REFERENCIA.md](REFERENCIA.md) e siga o roteiro daquele tipo.
3. Entreviste o usuário com as perguntas de
   [roteiro de entrevista](references/roteiro-de-entrevista.md), uma por vez,
   só nos campos que faltam ou mudaram.
4. Registre o ponto forte do rival como o cliente dele o descreveria, sem
   minimizar.
5. Registre a diferença da empresa com a prova (teste, número, depoimento,
   preço público). Afirmação sem prova fica como pergunta aberta.
6. Pergunte se o rival pode ser citado nominalmente em conteúdo público. Sem
   resposta explícita, grave "não". Siga a tabela de
   [permissão e manutenção](references/permissao-e-manutencao.md).
7. Leia `proibicoes.md`. Veto de comparação ou de nome mantém a citação como
   "não", qualquer que seja a resposta.
8. Grave a entrada no template de [REFERENCIA.md](REFERENCIA.md), com fonte e
   data de cada fato, e mostre ao usuário o bloco gravado.

## Saída

Atualização de `.inboundfy/context/concorrentes.md`, preservando o comentário
inicial do arquivo, a ordem das entradas e os cinco campos canônicos de cada
bloco, mais o bloco gravado mostrado ao usuário.

## Validação

- O checklist de completude de [REFERENCIA.md](REFERENCIA.md) está cumprido.
- A diferença da empresa tem prova nomeada.
- A permissão de citação nominal veio do usuário nesta execução ou de
  registro anterior com data.
- `proibicoes.md` foi consultado antes de gravar "sim".
- Campo sem resposta está como `{pendente: pergunta}` e o usuário foi avisado.
- Nenhuma entrada foi duplicada e nenhuma seção foi apagada.

## Idempotência

Atualiza apenas o concorrente indicado. Uma correção troca o valor do campo e
acrescenta uma linha no histórico do bloco. Rival que saiu do mercado recebe o
estado `inativo` com data e continua no arquivo.

## Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** fato informado pelo usuário ou fato estável de pesquisa;
- **transformação:** confirmação, classificação e gravação no bloco do rival;
- **saída:** `concorrentes.md` atualizado e bloco mostrado ao usuário;
- **handoff:** `inboundfy-concorrentes` quando faltar pesquisa,
  `inboundfy-contexto-marca` quando surgir veto novo, ou a skill que pediu o
  dado.
