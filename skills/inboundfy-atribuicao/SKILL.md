---
name: inboundfy-atribuicao
description: Organiza a leitura de origem, jornada e receita do conteúdo sem confundir fonte, modelo, proxy e contribuição real de cada canal.
---

# Atribuição de marketing

Use quando os dados de canais divergem, quando o usuário quer entender quais
ações influenciam conversão ou quando precisa ligar conteúdo a receita.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
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

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o relatório para o período solicitado e preserve leituras anteriores.
Não reclassifique conteúdo antigo sem registrar a regra usada.
