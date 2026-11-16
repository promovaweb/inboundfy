# Passes de auditoria

Leia este arquivo no passo 3 do fluxo. Os seis passes acontecem na ordem
abaixo porque cada um depende do anterior: não adianta ajustar voz num
parágrafo que ainda vai sair por causa de um veto.

## Passe 1: vetos literais

**O que procurar:** cada termo, expressão, promessa e comparação listados em
`.inboundfy/context/proibicoes.md` e cada palavra ou fórmula catalogada em
`.inboundfy/context/estruturas-proibidas.md`.

**Como fazer:**

1. Monte uma lista de busca com as entradas dos dois arquivos, incluindo
   flexões (plural, gênero, tempos verbais). "Revolucionar" também cobre
   "revolucione", "revolucionário" e "revolução" quando o sentido for o mesmo.
2. Procure no texto inteiro: corpo, assunto de email, título, meta
   description, alt text, legenda, texto de botão e texto dentro de imagem.
3. Para cada ocorrência, confira o sentido. Termo vetado dentro de citação
   literal de terceiro, nome próprio ou título de obra é exceção prevista em
   `ESCRITA.md`. Registre a exceção no relatório em vez de ignorá-la.

**Classe do achado:** `veto`.

## Passe 2: vetos semânticos e estruturais

**O que procurar:** a mesma regra do passe 1 escrita com outras palavras e as
estruturas que o catálogo descreve sem palavra fixa.

| Regra literal | Paráfrase que também viola |
| --- | --- |
| "chegou para mudar o jogo" | "veio para transformar", "muda tudo", "um novo capítulo" |
| "não é sobre X, é sobre Y" | "mais do que X, Y", "X? Na verdade, Y" |
| promessa de "garantia de resultado" | "resultado certo", "você vai conseguir", "sem chance de erro" |
| "você já parou para pensar" | "já se perguntou", "imagine se", "e se eu te dissesse" |
| comparação nominal com concorrente vetada | "diferente da ferramenta verde que todo mundo usa" |

**Estruturas sem palavra fixa:** três adjetivos em fila sem prova, sequência
de frases curtas imperativas, pergunta retórica seguida de resposta óbvia,
parágrafo que abre com tese abstrata e só depois inventa uma cena, fechamento
que repete o parágrafo com outras palavras, mesmo molde de heading repetido em
todos os H2.

**Classe do achado:** `veto` quando o catálogo descreve o padrão;
`obrigatorio` quando a regra vem só de `ESCRITA.md`.

## Passe 3: anatomia do parágrafo

**O que procurar:** parágrafos sem trabalho. Use a anatomia de `ESCRITA.md`
(objeto, função, condição, exemplo, interpretação, falha provável,
verificação) como pergunta, não como fórmula.

Para cada parágrafo, responda:

1. Qual objeto real ele nomeia?
2. O que esse objeto faz na rotina da persona?
3. Existe exemplo? Ele foi interpretado?
4. Aparece algum limite, cuidado ou falha provável?
5. O parágrafo poderia ser colado em outra empresa sem mudar nada? Se sim, é
   genérico.

Um parágrafo com menos de quatro elementos não é reprovado automaticamente. O
achado existe quando o leitor fica sem o que precisava para entender ou agir.

**Classe do achado:** `obrigatorio` ou `ajuste`.

## Passe 4: voz

**O que procurar:** desvios de `.inboundfy/context/marca-voz.md`.

- Pessoa verbal: a marca trata por `você`, por `vocês` ou fala na terceira
  pessoa? O texto mantém a escolha do início ao fim?
- Vocabulário preferido usado onde cabe. Vocabulário evitado ausente.
- Nível técnico compatível com a persona de `publico.md`.
- Humor só no canal onde a voz permite.
- Assinatura e fechamento padrão em email, quando registrados.

Compare um parágrafo do texto com um dos "Exemplos de bom texto" do arquivo
de voz. Se a diferença for de identidade (soa como outra empresa), registre
como `obrigatorio`. Se for de ritmo, registre como `ajuste`.

## Passe 5: afirmações e fatos

**O que procurar:** tudo que um leitor poderia cobrar depois.

- Números, percentuais, preços em R$, prazos, datas, quantidades de clientes.
- Nomes de clientes, depoimentos, cases, prêmios, certificações.
- Funcionalidades e integrações (confira `produtos.md` e `integracoes.md`).
- Condições comerciais: Pix, parcelamento, desconto, garantia, reembolso.

Cada item precisa de fonte em `.inboundfy/context/` ou no brief. Sem fonte, o
trecho sai do texto corrigido e vira `devolucao` para a especialista ou para
`inboundfy-copy-edicao`. A skill nunca troca um número sem fonte por outro
"mais conservador".

## Passe 6: forma do canal

**O que procurar:** o que o canal exige e a prosa ignorou.

| Canal | Conferência rápida |
| --- | --- |
| Email | Assunto com objeto concreto, pré-cabeçalho que não repete o assunto, CTA com destino nomeado. |
| LinkedIn | Primeira linha que funciona antes do "ver mais", quebras de linha sem escadinha. |
| Blog | H2 que nomeiam a tarefa ou a escolha, primeiro parágrafo que responde a busca. |
| WhatsApp | Mensagem que cabe numa tela, identificação de quem envia, opção de sair da lista. |
| Página | Título com benefício verificável, prova perto da promessa. |

A regra completa do canal vive na especialista e na validadora pareada. Aqui
a conferência serve para não devolver uma prosa limpa num formato errado.

## Releitura final

Depois das correções, repita os passes 1 e 2 sobre o texto inteiro, não só
sobre os trechos alterados. Uma correção pode criar um veto novo, como trocar
"solução robusta" por "solução completa e confiável". O relatório registra o
resultado dessa releitura separadamente.
