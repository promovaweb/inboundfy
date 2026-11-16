---
name: inboundfy-contexto-publico
description: Registra e corrige personas em .inboundfy/context/publico.md no bloco canônico, com contexto de compra, dor, objeção, canais, jargão, fonte e nível de confiança. Use quando a pessoa descrever a cliente ideal, disser que a objeção mudou, pedir para separar segmentos ou trouxer um achado de pesquisa já aprovado.
---

# Inboundfy Contexto: Público

Mantém as personas que orientam estratégia, planejamento e briefing. Cada
persona descreve uma pessoa que a empresa quer atingir, com a linguagem que
essa pessoa usa. A skill não escreve conteúdo público. Ela grava o público
para que as skills de canal calibrem nível técnico, ângulo, jargão e CTA.

A descoberta de personas por entrevista é de `inboundfy-personas`, que grava
as fichas completas em `publico.md`. A análise de tickets, avaliações e
questionários é de `inboundfy-pesquisa-cliente`. Esta skill registra
correções pontuais e achados aprovados no bloco canônico. Quem fala
pela marca é assunto de `inboundfy-contexto-institucional`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando `.inboundfy/context/publico.md` estiver ausente, acione
`inboundfy-setup` para restaurar o template; esta skill não cria o arquivo
por conta própria.
Depois do preflight, leia os Markdown de `.inboundfy/fontes-projeto.md`
marcados como pesquisa de público.

## Arquitetura de execução

A skill confirma as sentinelas antes de alterar qualquer arquivo e trabalha
uma persona por vez.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo. O grupo desta
skill é **contexto**.

## Quando usar e quando não usar

| Pedido | Esta skill? | Caminho |
| --- | --- | --- |
| "Nossa cliente é dona de loja pequena que controla estoque no caderno" | sim | nova persona |
| "A objeção mais comum mudou: agora é preço" | sim | atualizar campo da persona |
| "Separe as personas do varejo e do atacado" | sim | duas personas, com confirmação |
| "Analise estes 200 tickets e descubra as personas" | não | `inboundfy-pesquisa-cliente`, depois volte aqui |
| "Faça uma entrevista de persona comigo" | não | `inboundfy-personas`, depois volte aqui |
| "Quem assina o blog?" | não | `inboundfy-contexto-institucional` |
| "Registre a fala de uma cliente satisfeita" | não | `inboundfy-contexto-depoimentos` |

## Contexto exigido

- `.inboundfy/context/publico.md`, para não duplicar persona;
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`, para conferir se a dor conecta com algo
  que a empresa resolve e qual oferta serve à persona;
- `.inboundfy/context/canais.md`, para comparar onde a persona consome
  conteúdo com os canais ativos;
- `.inboundfy/context/depoimentos.json`, quando houver, para buscar a
  linguagem real de clientes.

## Entrada esperada

Uma persona ou segmento novo, uma correção de campo, ou um resumo de pesquisa
(entrevista, tickets de suporte, conversas de WhatsApp, avaliações,
questionário) já analisado, como o achado aprovado de um relatório de
`inboundfy-pesquisa-cliente` ou o ajuste encaminhado por `inboundfy-personas`.

## Perguntas de diagnóstico

1. A descrição é de uma pessoa concreta ou de um mercado inteiro? Mercado
   inteiro não orienta conteúdo; peça o recorte.
2. De onde vem cada afirmação: dado de cliente real, opinião do time ou
   hipótese? Registre na linha de fonte.
3. A persona já existe com outro nome?
4. A dor tem uma cena (lugar, momento, consequência)?
5. A empresa tem produto ou serviço para essa dor?

## Fluxo

1. Leia `publico.md` e os arquivos de oferta.
2. Leia o [REFERENCIA.md](REFERENCIA.md) e, conforme a entrada,
   [bloco de persona](references/bloco-de-persona.md) (formato e campos) e
   [fontes e pesquisa](references/fontes-e-pesquisa.md) (quando a entrada for material de
   pesquisa ou quando faltar dado).
3. Use o roteiro de entrevista para cobrir os campos obrigatórios: quem é,
   contexto de compra, problema que tenta resolver, resultado que procura,
   dor principal, objeção e canais.
4. Grave o jargão nas palavras da persona. Ele alimenta `inboundfy-base-seo`.
5. Grave a persona no bloco canônico, com cabeçalho `## Persona NN: {nome}` e
   ID estável `persona-NN`. O `inboundfy doctor` exige ao menos uma persona
   nesse formato com os campos `Quem é`, `Contexto de compra`,
   `Problema que tenta resolver` e `Resultado que procura`.
6. Registre a fonte de cada persona e o nível de confiança (pesquisa,
   observação do time, hipótese).
7. Relate a persona criada ou alterada, as pendências e as skills que devem
   usá-la.

## Saída

Atualização de `.inboundfy/context/publico.md` e relato no formato do
template de `REFERENCIA.md`.

## Validação

- A persona segue o bloco canônico, com ID e cabeçalho numerado.
- Os quatro campos do `inboundfy doctor` estão preenchidos sem chaves `{}`.
- Dor e objeção são concretas e estão na linguagem da persona.
- Canal de consumo e oferta relacionada estão preenchidos.
- A fonte e o nível de confiança estão registrados.
- Nenhuma persona existente foi removida ou renumerada.

## Idempotência

Atualiza apenas a persona indicada. O ID `persona-NN` nunca muda, porque peças
e briefs apontam para ele. Persona aposentada recebe
`**Situação:** inativa desde AAAA-MM-DD` e continua no arquivo.

## Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** persona, correção ou resumo de pesquisa;
- **transformação:** bloco canônico de persona com fonte;
- **saída:** `publico.md` atualizado;
- **handoff:** `inboundfy-estrategia`, `inboundfy-planejamento`,
  `inboundfy-base-seo` (jargão) e `inboundfy-copy-posicionamento` (dor e
  objeção).
