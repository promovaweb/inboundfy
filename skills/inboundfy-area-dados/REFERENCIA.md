# Referência da área de dados

## Mapa da área

| Situação | Skill | Resultado |
| --- | --- | --- |
| Quais números acompanhar e como montar o painel | `inboundfy-metricas` | plano de métricas e painel |
| Eventos, pixels, UTMs, API de conversões | `inboundfy-rastreamento-conversao` | plano de medição e testes de disparo |
| Qual canal gerou a venda | `inboundfy-atribuicao` | modelo de atribuição e leitura |
| Teste A/B, hipótese, amostra | `inboundfy-experimentacao` | desenho e leitura do experimento |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-area-dados**, do grupo
**area**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Uma skill de área é uma porta. Ela pergunta pouco, escolhe uma rota e sai do
caminho. Quando o pedido mistura duas áreas, atenda primeiro a etapa que
alimenta a outra (medição antes de teste, posicionamento antes de copy,
pesquisa antes de persona) e registre a segunda como próxima etapa.

## Template do pacote de entrada

```markdown
---
area: inboundfy-area-dados
skill_destino: {id da skill}
estado: encaminhado
---

# Pacote para {id da skill}

## Pedido original

{texto do pedido, sem edição}

## O que já se sabe

- Objetivo: {objetivo}
- Persona: {ID e nome em publico.md}
- Canal ou ativo: {canal, URL ou arquivo}
- Números atuais: {dados recebidos ou "não informados"}

## Arquivos e fontes

- {caminho ou URL}

## Perguntas em aberto

- {pergunta ou "nenhuma"}

## Próxima etapa sugerida

{skill seguinte da sequência comum ou "nenhuma"}
```

## Exemplo

**Pedido:** Investimos em Meta e Google mas não sabemos qual dá mais venda na loja.

**Diagnóstico:** Pergunta de atribuição. Antes dela, é preciso confirmar se as compras estão sendo registradas nos dois canais.

**Rota:** `inboundfy-rastreamento-conversao`, seguida de inboundfy-atribuicao.

**Pacote entregue:** plataforma da loja, pixels instalados, uso de UTMs, acesso ao GA4 e período de análise.

## Checklist

- [ ] O doctor confirmou o setup antes do roteamento.
- [ ] As perguntas feitas eram só as que faltavam.
- [ ] A rota escolhida está na tabela da área.
- [ ] O pacote tem o pedido original sem edição.
- [ ] Dados ausentes aparecem como pergunta.
- [ ] A próxima etapa foi proposta, não executada sem confirmação.

## Erros comuns

- Executar o trabalho da skill de destino dentro da skill de área.
- Acionar duas skills ao mesmo tempo para o mesmo pedido.
- Fazer dez perguntas quando o pedido já responde metade delas.
- Encaminhar sem o pedido original, obrigando a skill seguinte a adivinhar.
- Escolher a skill pelo nome do canal quando o problema está em outra etapa
  (por exemplo, pedir anúncio quando a página não converte).
