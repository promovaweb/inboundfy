---
name: inboundfy-enablement-vendas
description: Cria decks, roteiros, battlecards e respostas a objeções com fontes para o time comercial. Use quando o pedido falar em apresentação de vendas, one-pager, demonstração, follow-up no WhatsApp ou calculadora de ROI.
---

# Enablement de vendas

Produz material de apoio para quem vende: o que a pessoa vendedora mostra,
envia, fala e responde em cada etapa da negociação. O material nasce do que
a oferta comprova, das objeções que o time ouve e das alternativas que o
cliente compara. A skill não define preço nem posicionamento (isso fica com
`inboundfy-growth-pricing` e `inboundfy-copy-posicionamento`) e não monta a
operação de CRM (isso fica com `inboundfy-growth-revops`).

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Princípios

1. **Vendas usa o que vendas confia.** Ouça o time antes de escrever. Um
   material que ignora as objeções reais fica na pasta.
2. **Material por situação.** Cada peça serve a uma etapa, a uma persona e a
   um momento da conversa. Um deck único para todo comprador não serve a
   nenhum.
3. **Leitura em 30 segundos.** A pessoa vendedora consulta o material com o
   cliente na linha. Títulos que respondem, listas curtas, nada de parágrafo
   longo.
4. **Resultado de negócio.** Toda funcionalidade vira consequência em
   dinheiro, tempo ou trabalho evitado para o comprador.
5. **Afirmação defensável.** Só entra número, cliente ou comparação que o
   time consegue sustentar quando o comprador pedir a fonte.

## Quando usar e quando não usar

| Pedido | Material | Arquivo de apoio |
| --- | --- | --- |
| "Preciso apresentar para um cliente" | Deck de vendas por persona | `references/deck-e-one-pager.md` |
| "Algo para enviar depois da reunião" | One-pager ou resumo pós-reunião | `references/deck-e-one-pager.md` |
| "O cliente sempre diz que está caro" | Biblioteca de objeções | `references/objecoes-e-battlecards.md` |
| "Perdemos venda para o concorrente X" | Battlecard e análise de ganho e perda | `references/objecoes-e-battlecards.md` |
| "Como conduzir a primeira reunião" | Roteiro de descoberta | `references/roteiros-de-conversa.md` |
| "Demo para o diretor financeiro" | Roteiro de demonstração por público | `references/roteiros-de-conversa.md` |
| "Mensagens de acompanhamento no WhatsApp" | Sequência de follow-up | `references/roteiros-de-conversa.md` |
| "Mostrar quanto o cliente economiza" | Calculadora de ROI | `references/roi-e-ganho-perda.md` |
| Definir preço, plano ou desconto | Não use | `inboundfy-growth-pricing` |
| Prospecção fria em massa | Não use | `inboundfy-growth-prospeccao` ou `inboundfy-growth-email-frio` |
| Estruturar funil no CRM | Não use | `inboundfy-growth-revops` |

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se
um deles faltar, apresente o alerta canônico e acione `inboundfy-setup`. Use o
método instalado em `.inboundfy/framework/` como regra transversal.

- `.inboundfy/context/empresa.md`: o que a empresa faz, região e porte.
- `.inboundfy/context/ofertas.md`, `produtos.md` e `servicos.md`: planos,
  preço, condições, prazos de implantação e limites.
- `.inboundfy/context/publico.md`: personas de compra (quem usa, quem paga,
  quem aprova).
- `.inboundfy/context/concorrentes.md`: alternativas citáveis e o que pode ser
  dito nominalmente.
- `.inboundfy/context/depoimentos.json`: prova social com consentimento. Só
  cite depoimento com uso autorizado para material comercial.
- `.inboundfy/context/integracoes.md`: integrações existentes, quando o
  material falar de compatibilidade técnica.
- `.inboundfy/context/marca-voz.md`, `glossario.md`, `proibicoes.md` e
  `estruturas-proibidas.md`: voz, grafia e vetos.

Se faltar persona de compra, acione `inboundfy-contexto-publico`. Se faltar
dado de concorrente, acione `inboundfy-contexto-concorrentes`. Se faltar
depoimento, acione `inboundfy-contexto-depoimentos`. Não substitua prova
ausente por frase genérica.

## Entrada esperada

- Tipo de material e situação de uso (etapa, canal, formato de entrega).
- Persona de compra e papel na compra (usuário, decisor financeiro, técnico,
  campeão interno).
- Negócio específico, quando houver: segmento, porte, objeção ouvida,
  concorrente na disputa.
- Insumos do time: anotações de ligação, gravações transcritas, motivos de
  perda no CRM, perguntas frequentes.

## Perguntas de diagnóstico

Consulte o [roteiro de diagnóstico](references/diagnostico.md) no passo 3 do fluxo.

## Fluxo

1. Faça o preflight e leia os contextos listados. Registre as fontes.
2. Identifique o material pela tabela de uso. Se o pedido for de preço,
   prospecção ou CRM, encaminhe para a skill indicada e encerre.
3. Use o [roteiro de diagnóstico](references/diagnostico.md) para completar
   as perguntas sem resposta e reunir os insumos do time.
4. Leia o arquivo de apoio do material em [REFERENCIA.md](REFERENCIA.md) e o
   modelo correspondente.
5. Monte a tabela de afirmações: cada número, cliente, prazo e comparação com
   a fonte em `context/` ou no insumo do time. Afirmação sem fonte sai do
   material ou vira pergunta aberta.
6. Escreva o material no modelo, ajustado à persona e à etapa. Para peça com
   objetivo de conversão, aplique a estrutura persuasiva escolhida em
   `ESTRUTURAS-PERSUASIVAS.md`.
7. Aplique `ESCRITA.md`, a voz e o glossário. Passe a prosa por
   `inboundfy-copy-editor`, que cruza `context/proibicoes.md` com
   `context/estruturas-proibidas.md`.
8. Apresente o material e a lista de pendências. Em material com caminhos
   diferentes (abertura do deck, ângulo do battlecard), ofereça três opções
   com a recomendada primeiro e aguarde a escolha.
9. Salve o material, registre a data de revisão e indique quem deve revisá-lo
   no time comercial.

## Saída

Cada material fica em pasta própria dentro do caminho de peças de
`context/canais.md`:

```text
canais/vendas/<id>-<AAAA-MM-DD>-<slug>/
├── README.md        (material principal com frontmatter)
└── afirmacoes.md    (tabela de afirmações e fontes)
```

O frontmatter registra `tipo` (deck, one-pager, objecoes, battlecard,
roteiro-descoberta, roteiro-demo, follow-up, calculadora-roi, ganho-perda),
`persona`, `etapa`, `fontes`, `revisar_em` e `estado`. Material de vendas
não entra no calendário editorial, salvo pedido da pessoa.

## Validação

- O material atende a uma situação, uma persona e uma etapa declaradas.
- Cada afirmação factual aparece em `afirmacoes.md` com fonte ou foi
  removida.
- Depoimento citado tem consentimento de uso comercial em
  `context/depoimentos.json`.
- Concorrente citado nominalmente tem permissão em
  `context/concorrentes.md`.
- O texto respeita voz, glossário e os dois arquivos de proibições.
- O material termina com um próximo passo concreto para o comprador.
- Existe data de revisão (`revisar_em`) e responsável.

Reprovação volta ao passo do fluxo que gerou o problema. Prova ausente volta
para a pessoa como pergunta aberta, sem texto provisório no material.

## Idempotência

Uma nova rodada sobre o mesmo material atualiza a mesma pasta, preserva a
versão anterior no histórico do `README.md` e só troca as seções pedidas.
Battlecard e biblioteca de objeções crescem por acréscimo: respostas
aprovadas pelo time não são reescritas sem pedido.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes. O material de vendas
consome posicionamento, oferta e prova já estabelecidos. Quando a análise de
ganho e perda revelar problema de posicionamento ou de preço, abra handoff
para `inboundfy-copy-posicionamento` ou `inboundfy-growth-pricing`.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** tipo de material, persona de compra, etapa e insumos do time;
- **transformação:** material comercial com afirmações ligadas às fontes;
- **saída:** pasta em `canais/vendas/` com `README.md` e `afirmacoes.md`;
- **handoff:** revisão do time comercial, skill de posicionamento ou preço
  quando a análise apontar e pendências de prova.
