---
name: inboundfy-rastreamento-conversao
description: Entrega um plano de eventos, UTMs, pixels e APIs de conversão com testes de disparo e recebimento por destino. Use quando o pedido citar GA4, GTM, eventos duplicados, Pix pago, origem perdida ou falhas de coleta.
---

# Rastreamento de conversão

Use para definir o momento de conversão, localizar falhas de coleta, preparar implementação e comprovar recebimento por destino. `inboundfy-metricas` organiza perguntas e indicadores de negócio; esta capacidade trata o transporte e a conferência dos eventos.

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

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, encerre sem criar artefatos e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/integracoes.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/canais.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/estrategia.md`. Consulte `.inboundfy/framework/`, o plano de métricas, documentação da implementação, regras de privacidade e fontes locais. Registre nomes de variáveis de ambiente e referências ao gerenciador de segredos, nunca seus valores.

## Entrada esperada

Receba oferta, páginas e formulários, resultado de negócio, destinos, acesso disponível, eventos existentes, IDs de propriedades e contêineres, tratamento de consentimento, versão publicada e sintoma. Para comércio eletrônico, inclua regra de receita, pagamento, cancelamento e reembolso. No Brasil, diferencie Pix emitido de Pix pago.

Aceite o dicionário de eventos de `inboundfy-metricas` como definição inicial, acompanhado de objetivo, oferta e destinos. Receba também achados de origem perdida de `inboundfy-atribuicao`, com conversão, período e fonte afetada. Complete acessos, emissores e consentimento antes da configuração.

## Perguntas de diagnóstico

- Qual sistema confirma que a ação foi concluída: interface, backend, agenda, CRM ou provedor de pagamento?
- Qual evento é apenas sinal intermediário, como clique no WhatsApp?
- Quem envia para cada destino: plugin, GTM, código próprio, integração nativa ou servidor?
- O erro ocorre no disparo, transporte, recebimento, deduplicação ou atribuição?
- Quais finalidades, dados e escolhas de consentimento foram aprovados pelo responsável do projeto?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md), liste entradas do fluxo e desenhe origem → confirmação → emissor → destino. Confira integrações existentes antes de propor tags novas.
2. Defina dicionário de eventos e UTMs, propriedades necessárias, IDs de ocorrência, moeda, valor e sinal principal de otimização. Mantenha microconversões separadas de venda ou contato confirmado.
3. Leia [eventos e consentimento](references/eventos-e-consentimento.md). Documente finalidades, base aplicável informada pelo responsável, retenção e comportamento antes, após e na retirada do consentimento. Não use envio por servidor para contornar escolhas da pessoa.
4. Escolha integração nativa, navegador, webhook/CRM ou combinação conforme o momento de confirmação. Registre esforço, dono, versão, dependências, segredo exigido e como desfazer a mudança. Consulte a documentação oficial atual antes de preparar implementação específica de fornecedor.
5. Prepare a configuração no ambiente e alcance autorizados, preservando versão publicada. Use workspace separado do GTM quando disponível. Não publique uma versão só por ter passado na leitura estática.
6. Leia [roteiro de verificação](references/roteiro-de-verificacao.md). Execute casos de sucesso, falha, reenvio, recarga e consentimento. Registre ocorrência, horário, resultado esperado, emissor, requisição e recebimento no destino. Dado inacessível permanece pendente.
7. Confira deduplicação entre navegador e servidor, consistência de valor e moeda, continuidade de origem entre domínios e comparação com o sistema transacional. Compare relatórios após alinhar definição, fuso, janela e data usada.
8. Entregue estado por destino: planejado, configurado, disparo confirmado, recebimento confirmado ou pendente. Envie leitura de negócio a `inboundfy-metricas`, origem e crédito a `inboundfy-atribuicao`, estágios do CRM a `inboundfy-growth-revops` e otimização de campanha a `inboundfy-growth-anuncios`.

## Saída

Entregue `rastreamento-<id>.md` no diretório operacional da campanha já registrado, com mapa de emissores, dicionário, padrão de UTMs, especificação, política de consentimento informada, casos testados, recibos sem dados pessoais e instruções de retomada. Mantenha ID, grupo capacidade, persona, fontes com datas, versões, estado por destino, pendências e próxima ação.

## Validação

- Conversão usa confirmação de sucesso e não clique ou início de preenchimento.
- Todos os emissores conhecidos têm destino e dono registrados.
- Os testes verificam falha, recarga, reenvio e escolhas de consentimento.
- Valores, moeda e IDs correspondem à fonte transacional.
- Nenhum dado pessoal entra em UTMs, URLs, logs públicos ou parâmetros proibidos pelo destino.
- Recebimento é confirmado no destino ou fica pendente com pessoa e teste definidos.
- Um identificador de clique sintético não é apresentado como comprovação de atribuição.
- Segredos permanecem fora dos arquivos e do código do navegador.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** dicionário, destinos, emissores e confirmação transacional;
- **transformação:** especificação e testes de envio, recebimento e deduplicação;
- **saída:** plano de coleta com versão, testes e estado por destino;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Preserve nomes de eventos, IDs e versão publicada. Use ID estável por ocorrência para reenvio ao mesmo destino. Não deduplique pessoas diferentes como se fossem uma conversão. Leia emissores já ativos antes de adicionar um novo e mantenha histórico de migração e teste.
