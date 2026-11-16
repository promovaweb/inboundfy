---
name: inboundfy-growth-pricing
description: Entrega proposta de preço e planos com unidade de cobrança, pesquisa de valor, simulação de margem e transição de clientes. Use quando o pedido falar em precificação, mensalidade, plano anual, limites, reajuste ou migração de preço.
---

# Preço, planos e cobrança

Use para escolher unidade de cobrança, distribuir recursos e limites entre planos e estudar mudança de preço. O artefato é uma proposta comercial com pesquisa e simulação, sem alterar cobrança ou oferta canônica por conta própria. Oferta de serviço e composição da promessa seguem para `inboundfy-copy-oferta`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, apresente o alerta canônico do preflight e acione `inboundfy-setup`, sem criar artefatos.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/produtos.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/concorrentes.md`, `.inboundfy/context/integracoes.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e `.inboundfy/estrategia.md`. Consulte `.inboundfy/framework/`, custos, contratos vigentes e coortes disponíveis. Se faltar dado econômico, mantenha a conta como cenário.

## Entrada esperada

Receba oferta, preço atual, unidade cobrada, limites, custos variáveis, frequência de pagamento, descontos, impostos e taxas informados pela operação, coortes de clientes, objeções, objetivo e público da mudança. Diferencie lançamento, teste para novos compradores e migração da base existente.

## Perguntas de diagnóstico

- O que cresce junto com o valor percebido e também pode ser medido sem ambiguidade?
- Quem paga e quem usa? Cobrar por pessoa ajuda ou desencoraja colaboração?
- Quais custos aumentam com uso e qual teto o cliente precisa prever?
- A objeção foi preço absoluto, ausência de utilidade, fluxo de caixa ou comparação com alternativa?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e registre preço vigente, unidade, condição, fonte e data. Separe tabelas de novos compradores e contratos atuais.
2. Pesquise tarefas, alternativa usada e valor percebido por segmento. Leia [pesquisa e transição](references/pesquisa-e-transicao.md) para escolher entrevistas, comparação de opções ou teste de preço, sem tratar resposta declarada como compra.
3. Compare mensalidade fixa, pessoa, uso, transação, módulos ou combinação. Explique previsibilidade, relação com valor e custo de medir cada unidade.
4. Monte planos a partir de necessidades distintas. Defina recurso, limite, excedente, suporte e condição de passagem. Não exija três planos quando dois resolvem a oferta.
5. Simule receita líquida, contribuição, demanda e permanência em cenários. Confira cobrança mensal, anual, parcelamento e Pix com as condições reais do fornecedor e da operação.
6. Defina teste com coorte, exposição, métrica, prazo e proteção comercial. Para migração, registre aviso, vigência, contratos preservados, exceções e responsável. Mudança canônica segue para `inboundfy-contexto-oferta` após confirmação.
7. Revise mensagens com `ESCRITA.md` e `inboundfy-copy-editor`. Entregue a tabela confirmada a `inboundfy-growth-paywall`, com recursos, limites, cobrança, público e vigência. Para `inboundfy-growth-cro`, inclua página ou brief, persona, origem e ação principal. Envie hipóteses, métrica, taxa atual, volume e janela a `inboundfy-experimentacao`; eventos, oferta, destinos e integrações a `inboundfy-rastreamento-conversao`.

## Saída

Entregue `precos-<id>.md` no diretório da campanha ou pesquisa já registrado, com pesquisa por segmento, escolha da unidade, planos, cenário econômico, teste e transição. Preserve ID, grupo growth, público, canal, oferta, fontes, estado, pendências e próxima ação. Preço proposto permanece distinto do vigente.

## Validação

- Unidade, período, moeda, impostos e taxas estão definidos nas contas.
- Planos têm público, recursos, limites, excedente e suporte claros.
- Desconto anual compara totais do mesmo período e informa cobrança efetiva.
- Cenário de receita considera mudança de demanda e permanência, sem assumir volume fixo.
- A migração respeita as condições informadas dos contratos e tem responsável.
- Pesquisa declarada não recebe rótulo de disposição comprovada de compra.
- A proposta e a copy usam fatos e condições confirmadas ou marcadas como hipótese.

## Responsabilidade do grupo

Transforme custos, pesquisa e oferta vigente em proposta comercial; encaminhe apenas condições confirmadas ao contexto e à execução. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Atualize o estudo pelo ID e mantenha tabela vigente, proposta e histórico separados. Não sobrescreva condição contratada. Preserve coortes, data de exposição e exceções; uma repetição de simulação não inicia cobrança ou novo aviso.
