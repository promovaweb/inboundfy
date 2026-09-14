---
name: inboundfy-metricas
description: Define medição de marketing para ligar acervo, canais, campanhas, conteúdo, leads e receita a perguntas de negócio compreensíveis.
---

# Métricas de inbound

Use para criar plano de medição, eventos, UTMs, painéis, metas e leitura de
desempenho de conteúdo ou campanha.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os arquivos de `.inboundfy/`,
o catálogo de conteúdos, o calendário, as ofertas e as ferramentas registradas
no projeto. Consulte `.inboundfy/framework/` para canais e fontes.

## Entrada esperada

Receba objetivo, oferta, canal, campanha, etapa da jornada, ferramenta,
evento, janela de tempo e dados disponíveis.

## Fluxo

1. Comece pela pergunta de negócio, não pelo painel.
2. Defina resultado principal, sinais intermediários e medidas de qualidade.
3. Nomeie evento, propriedade, origem, campanha, conteúdo, persona e janela.
4. Padronize UTMs e relacione o conteúdo ao ID de acervo e peça.
5. Separe alcance, interação, conversão, retenção e receita.
6. Registre limites de atribuição e dados ausentes.
7. Faça leitura por canal, persona e oferta sem somar números de fontes
   diferentes como se fossem a mesma medição.

## Saída

Entregue plano de medição, dicionário de eventos, relatório ou painel lógico
com definição, fonte, frequência e responsável.

## Validação

Confirme que cada métrica responde a uma pergunta, tem fonte identificada,
período claro e não confunde proxy com resultado de negócio.

## Idempotência

Preserve nomes de eventos e IDs existentes. Registre mudanças de definição e
período de transição antes de alterar um painel.
