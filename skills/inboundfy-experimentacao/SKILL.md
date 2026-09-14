---
name: inboundfy-experimentacao
description: Planeja testes de copy, oferta, CTA, página, email e distribuição com hipótese, métrica, variantes, janela e registro no pipeline.
---

# Experimentação de marketing

Use para comparar abordagens e aprender com dados de conteúdo, conversão ou
distribuição. Uma preferência de escrita sem teste não deve ser apresentada
como resultado.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os arquivos canônicos de
`.inboundfy/`, a peça, o acervo, o canal, o plano de métricas e os dados de
linha de base.

## Entrada esperada

Receba observação, mudança proposta, persona, canal, métrica, tráfego,
restrições técnicas, janela e formato de resultado.

## Fluxo

1. Escreva hipótese no formato: porque observamos X, acreditamos que Y
   produzirá Z para a persona P, medido por M.
2. Defina uma mudança principal por teste e registre a linha de base.
3. Escolha métrica principal, sinais de apoio e medidas de proteção.
4. Calcule amostra e duração com ferramenta apropriada quando houver dados.
5. Descreva variantes, distribuição, persistência da variante e instrumentação.
6. Registre fatores externos durante a janela e não encerre por leitura
   parcial sem declarar a limitação.
7. Analise magnitude, intervalo, segmentos e impacto de negócio. Atualize o
   dicionário ou a voz apenas quando o aprendizado tiver alcance confirmado.

## Saída

Entregue plano de teste, ficha de variante, relatório de resultado ou backlog
priorizado de experimentos.

## Validação

Confirme hipótese testável, métrica ligada ao objetivo, variante executável,
amostra adequada, rastreamento funcionando e conclusão proporcional aos dados.

## Idempotência

Preserve o ID do teste e suas versões. Um novo teste recebe novo ID, mesmo que
use a mesma peça com outro recorte.
