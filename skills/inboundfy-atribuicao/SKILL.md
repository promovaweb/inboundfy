---
name: inboundfy-atribuicao
description: Organiza a leitura de origem, jornada e receita do conteúdo sem confundir fonte, modelo, proxy e contribuição real de cada canal.
---

# Atribuição de marketing

Use quando os dados de canais divergem, quando o usuário quer entender quais
ações influenciam conversão ou quando precisa ligar conteúdo a receita.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/inbound.md`,
`.inboundfy/estrategia.md`, `.inboundfy/pipeline.md`, o catálogo, o calendário,
as UTMs e o plano de métricas. Consulte `.inboundfy/framework/` para regras de
registro e fontes.

## Entrada esperada

Receba conversão, período, canais, ferramentas, contatos, oportunidades,
receita, UTMs e modelo usado por cada relatório.

## Fluxo

1. Declare qual sistema conta a conversão e por qual razão.
2. Compare primeiro contato, último contato, autorrelato e jornada completa
   quando houver dados suficientes.
3. Identifique autoindicação, tráfego direto, perda de identidade, duplicidade
   e janelas incompatíveis.
4. Ligue a jornada ao ID da peça, do acervo, da campanha e da oferta.
5. Separe leitura descritiva de recomendação de alocação.
6. Proponha teste ou melhoria de instrumentação para as lacunas mais úteis.

## Saída

Entregue relatório de atribuição com fonte de cada número, comparação de
modelos, lacunas, grau de confiança operacional e ação recomendada.

## Validação

Confirme que os números não foram somados entre ferramentas incompatíveis,
que a janela está declarada e que nenhuma origem foi tratada como causalidade
sem base suficiente.

## Idempotência

Atualize o relatório para o período solicitado e preserve leituras anteriores.
Não reclassifique conteúdo antigo sem registrar a regra usada.
