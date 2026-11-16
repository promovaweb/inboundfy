---
name: inboundfy-copy-posicionamento
description: Define o posicionamento de produto ou serviço (alternativas, diferenças com prova, cliente ideal e categoria) e monta o mapa de mensagens por persona. Use quando falarem em posicionamento, reposicionamento, diferencial, proposta de valor ou na pergunta por que escolher a empresa e não a alternativa.
---

# Posicionamento de produto e mercado

Define para quem o produto serve, contra quais alternativas ele compete, o
que ele faz de diferente e como isso vira mensagem para cada persona. O
resultado orienta todas as skills de copy. Esta skill não grava arquivos de
`.inboundfy/context/`: ela entrega o posicionamento aprovado às skills
`inboundfy-contexto-*`, que registram os fatos.

## Quando usar e quando não usar

| Situação | Skill |
| --- | --- |
| Produto novo ou reposicionamento | `inboundfy-copy-posicionamento` |
| Copy de canais diferentes contando histórias diferentes sobre o produto | `inboundfy-copy-posicionamento` |
| A equipe não sabe responder "por que nós e não a alternativa?" | `inboundfy-copy-posicionamento` |
| Falta conhecer o cliente (dores, palavras, motivos de compra) | `inboundfy-pesquisa-cliente` antes |
| Falta mapear concorrentes e alternativas | `inboundfy-concorrentes` antes |
| Registrar persona, oferta, concorrente ou voz já definidos | `inboundfy-contexto-publico`, `inboundfy-contexto-oferta`, `inboundfy-contexto-concorrentes`, `inboundfy-contexto-marca` |
| Montar o pacote comercial | `inboundfy-copy-oferta` |
| Material para o time de vendas | `inboundfy-enablement-vendas` usando o mapa de mensagens |

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 1 do fluxo e ao montar a
saída. O grupo desta skill é **copy**.

## Contexto exigido

Sem `.inboundfy/framework/VERSAO.md` ou `.inboundfy/fontes-projeto.md`,
acione `inboundfy-setup` e pare.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/produtos.md`,
`.inboundfy/context/servicos.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/concorrentes.md`, `.inboundfy/context/depoimentos.json`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e
`.inboundfy/context/aprendizado.md`. Consulte `.inboundfy/framework/` para o
contrato. Leia também pesquisas de cliente e de concorrentes registradas no
acervo.

## Entrada esperada

Receba descrição da empresa, produtos, serviços, público, mercado,
alternativas, posicionamento atual, prova, preço, restrições, pessoas e URLs
oficiais. Quando faltar conversa real com clientes, registre a lacuna: o
posicionamento sai como hipótese até haver comprovação.

## Perguntas de diagnóstico

1. Se o produto não existisse, o que os clientes usariam no lugar (incluindo
   planilha, caderno, WhatsApp, contratar alguém ou não fazer nada)?
2. O que o produto faz que essas alternativas não fazem?
3. Qual ganho concreto cada diferença gera para o cliente?
4. Quais clientes percebem mais esse ganho e o que eles têm em comum?
5. Em qual categoria o cliente procura este tipo de solução e que palavras
   ele usa na busca?
6. Por que os clientes que saíram foram embora e por que os que ficaram
   continuam?
7. Que palavras os clientes usam para descrever o problema e o resultado?

## Fluxo

1. Separe fato confirmado, opinião da equipe, hipótese e fonte externa com a
   tabela de classificação de [REFERENCIA.md](REFERENCIA.md).
2. Liste as alternativas reais e o que cada uma faz bem, usando
   [references/componentes-de-posicionamento.md](references/componentes-de-posicionamento.md).
3. Registre atributos diferentes, valor gerado por atributo, cliente ideal e
   categoria, na ordem do mesmo arquivo. Cada atributo precisa de prova.
4. Mapeie as forças de troca do cliente (empurrão, atração, ansiedade,
   hábito) e as palavras do cliente.
5. Escreva três declarações de posicionamento materialmente diferentes, com a
   recomendada primeiro, e aguarde a escolha.
6. Monte o mapa de mensagens por persona com
   [references/mapa-de-mensagens.md](references/mapa-de-mensagens.md):
   mensagem central, pilares, provas e objeções.
7. Passe nomes, termos, promessas e exemplos pelo dicionário, pelas
   proibições e pela voz.
8. Liste os fatos aprovados que precisam ir para os arquivos de contexto e
   encaminhe cada grupo à skill de contexto correspondente, com o alcance
   confirmado pelo usuário.

## Saída

Documento de posicionamento no formato de [REFERENCIA.md](REFERENCIA.md),
salvo em `acervo/<id>-<AAAA-MM-DD>-<slug>/posicionamento.md` quando ligado a
um item do acervo, ou entregue na resposta com o pacote de handoff. O
documento traz alternativas, diferenças com prova, declaração escolhida, mapa
de mensagens por persona, palavras do cliente, hipóteses abertas e a lista de
atualizações encaminhadas às skills de contexto.

## Validação

O documento é reprovado quando:

- a alternativa principal não aparece ou é só "concorrentes em geral";
- um diferencial não tem prova ou não gera ganho para o cliente;
- o cliente ideal é descrito como "todos" ou "pequenas e médias empresas"
  sem recorte de situação;
- fato, opinião e hipótese aparecem misturados;
- nomes oficiais divergem de `.inboundfy/context/glossario.md`;
- a mensagem central promete algo que a oferta não entrega.

## Idempotência

Preserve versões anteriores e o histórico de alterações. Não substitua um
campo preenchido por placeholder ou inferência sem confirmação. Uma nova
rodada só muda a declaração escolhida quando o usuário pedir
reposicionamento.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** dados da empresa, produto, clientes, alternativas e provas;
- **transformação:** definição de posicionamento e mapa de mensagens;
- **saída:** documento de posicionamento com fatos separados de hipóteses;
- **handoff:** skills `inboundfy-contexto-*`, `inboundfy-copy-oferta` ou `inboundfy-copy-redacao`.
