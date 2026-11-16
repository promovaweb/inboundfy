---
name: inboundfy-growth-anuncios
description: Planeja campanhas e auditorias de mídia paga com públicos, orçamento, conversões e páginas de destino. Use quando o pedido falar em anúncios, tráfego pago, Google Ads, Meta Ads, CPA, CAC, ROAS ou verba de mídia.
---

# Publicidade paga

Planeje aquisição paga e audite campanhas relacionando gasto, qualidade das conversões e capacidade de atendimento. A criação dos anúncios segue para `inboundfy-growth-criativos-anuncios`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, encerre a escrita e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, `.inboundfy/pipeline.md`, o acervo relacionado e `.inboundfy/framework/`.

Leia também `.inboundfy/fontes-projeto.md`, as bases editoriais relacionadas e os documentos públicos citados. Antes de entregar copy, consulte `inboundfy-anti-slop` e `inboundfy-copy-edicao`.

## Entrada esperada

Receba campanha ou ID, oferta com fonte, persona, região, destino, teto de gasto em R$, prazo, capacidade comercial e exportação histórica quando existir. Aceite também o pacote revisado de `inboundfy-growth-criativos-anuncios`, ligado à mesma campanha, com IDs das peças, formatos, destino, fontes, direitos e plano de teste. Para auditoria, peça gasto, impressões, cliques, evento primário, clientes e receita por período, além do histórico de alterações. Marque campos ausentes como pendentes. Não estime resultados para completar a planilha.

## Fluxo

1. Identifique a campanha e o alcance do pedido: plano inicial ou auditoria. Fixe a oferta, o teto, o período e os dados disponíveis.
2. Leia [REFERENCIA.md](REFERENCIA.md). Separe objetivo comercial, conversão primária e indicadores auxiliares. Calcule limites econômicos no passo de viabilidade.
3. Consulte [plano de midia](references/plano-de-midia.md) para escolher canal, estrutura, público, exclusões e divisão de verba. Ajuste o número de testes à verba disponível.
4. Encaminhe eventos, UTMs, pixels, consentimento, deduplicação e testes de disparo para `inboundfy-rastreamento-conversao`. Não recomende expansão usando um evento sem conferência.
5. Entregue a `inboundfy-growth-criativos-anuncios` o brief com persona, oferta e fontes, consciência, destino, canal, formatos, ativos, direitos e capacidade de produção. Compare promessa, oferta e CTA com o destino; leve a `inboundfy-growth-cro` URL ou HTML, captura mobile, origem do tráfego, ação e contagens disponíveis.
6. Leia [leitura de resultados](references/leitura-de-resultados.md), fixe período, atraso de conversão, teto e regra de revisão antes de analisar o desempenho. Separe fatos observados, hipóteses e dados ausentes.
7. Revise copy com `ESCRITA.md`, `inboundfy-copy-editor`, `inboundfy-copy-edicao` e `inboundfy-anti-slop`. Entregue plano ou auditoria com responsáveis, próxima ação e pendências. Operar a conta exige autorização correspondente ao alcance solicitado.

## Saída

Plano de mídia ou auditoria no arquivo da campanha já registrado no projeto consumidor. Use o envelope compartilhado com ID, grupo growth, estado, fontes, persona, canal, oferta, orçamento por período, conversão primária, destino, hipótese, regra de pausa, leitura dos resultados e handoff. Preserve `.inboundfy/estrategia.md` e `.inboundfy/pipeline.md` como referências de relação. Publicação de copy exige brief e revisão aprovados.

## Validação

- A soma das verbas respeita o teto e inclui a janela de teste.
- CPA, CAC, ROAS e margem usam definições compatíveis com a oferta.
- O evento primário foi conferido ou a pendência impede a recomendação de expansão.
- O relatório distingue conversão de plataforma, venda no CRM e receita líquida.
- Marca, busca genérica e remarketing têm leituras separadas.
- Toda regra de pausar ou aumentar verba informa janela, volume, atraso e responsável.
- Nenhuma projeção recebe o rótulo de resultado observado. Copy sem comprovação volta ao brief.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
