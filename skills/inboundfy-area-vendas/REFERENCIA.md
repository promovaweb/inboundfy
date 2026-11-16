# Referência da área de vendas

## Mapa da área

| Situação | Skill | Resultado |
| --- | --- | --- |
| Encontrar e qualificar contas e contatos | `inboundfy-growth-prospeccao` | lista e regras de qualificação |
| Email frio e cadência de abordagem | `inboundfy-growth-email-frio` | sequência de mensagens |
| Apresentação, roteiro, objeções, casos | `inboundfy-enablement-vendas` | kit de apoio a vendas |
| Passagem de lead, CRM, etapas do funil | `inboundfy-growth-revops` | processo de receita documentado |
| Preço, planos e descontos | `inboundfy-growth-pricing` | estrutura de preços |
| Oferta comercial | `inboundfy-copy-oferta` | oferta estruturada |
| Depoimentos e provas | `inboundfy-contexto-depoimentos` | provas registradas e autorizadas |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-area-vendas**, do grupo
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
area: inboundfy-area-vendas
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

**Pedido:** Quero começar a vender nosso software de gestão para escritórios de contabilidade do interior de SP.

**Diagnóstico:** Venda B2B ativa, sem lista. Falta o ticket médio e quem faz a abordagem.

**Rota:** `inboundfy-growth-prospeccao`.

**Pacote entregue:** perfil do escritório ideal, região, porte, cargo do decisor, ticket médio e capacidade de abordagens por semana.

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
