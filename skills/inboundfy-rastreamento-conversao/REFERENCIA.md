# Plano de coleta e verificação

## Template de implementação

Preencha no passo 1 e complete os testes no passo 6.

```markdown
---
id: rastreamento-{{campanha}}
skill: inboundfy-rastreamento-conversao
grupo: capacidade
estado: rascunho
entrada: {{plano de campanha e métricas}}
persona: {{id}}
fontes: [{{integrações}}, {{documentação oficial com data}}]
proxima_skill: inboundfy-metricas
---
# Conversão e transporte
Resultado de negócio: {{ação confirmada}}
Fonte de confirmação: {{backend, CRM ou provedor}}
Versão atual/proposta: {{identificadores}}
Responsável e alcance autorizado: {{pessoa e ações}}

## Mapa de eventos
| Evento interno | Momento de sucesso | Emissor | Destino/evento | ID da ocorrência | Valor/moeda | Finalidade e consentimento |
| --- | --- | --- | --- | --- | --- | --- |
| {{nome}} | {{confirmação}} | {{integração}} | {{propriedade e nome}} | {{chave}} | {{regra}} | {{regra aprovada}} |

## Padrão de origem
source: {{origem estável}}
medium: {{meio padronizado}}
campaign: {{id da campanha}}
content: {{id da peça e variação}}
term: {{quando aplicável}}
Regra para origem em retorno direto: {{sem sobrescrever origem existente indiscriminadamente}}
Dados excluídos: {{email, telefone, CPF e outros dados pessoais}}

## Plano técnico
Integração escolhida: {{nativa, navegador, servidor ou combinação}}
Variáveis exigidas: {{nomes, sem valores}}
Fonte dos segredos: {{referência ao gerenciador autorizado}}
Publicação e retorno: {{versão e procedimento para restaurar}}

## Testes
| Caso | Horário/fuso | ID fictício | Esperado | Emissor observado | Destino observado | Resultado e comprovante |
| --- | --- | --- | --- | --- | --- | --- |
| {{sucesso/falha/reenvio/recarga/consentimento}} | {{data/hora}} | {{ID}} | {{n e valor}} | {{requisição}} | {{tela ou log}} | {{confirmado, falhou ou pendente}} |

## Entrega
Estado por destino: {{estado e alcance observado}}
Pendências: {{pessoa, teste exato e retorno esperado}}
Próxima ação: {{arquivo, pessoa e data}}
```

## Escolha da confirmação e do transporte

| Fluxo | Conversão principal | Abordagem inicial | Conferência que muda a escolha |
| --- | --- | --- | --- |
| Formulário próprio | Resposta de criação válida no backend | Evento após sucesso, com ID da ocorrência | Falha de validação não envia evento principal |
| Agenda externa ou iframe | Agendamento confirmado | Integração nativa, callback autorizado ou webhook | Clique no iframe não revela agendamento |
| Venda por Pix | Pagamento confirmado pelo provedor | Webhook do pagamento e reenvio idempotente | QR Code gerado continua evento intermediário |
| WhatsApp | Conversa iniciada ou etapa confirmada no CRM | Clique separado; integração para etapa posterior quando disponível | Clique no link não prova mensagem enviada |
| Venda B2B no CRM | Estágio comercial definido | Importação ou API compatível com a origem registrada | Atualização de etapa não cria venda duplicada |
| Loja com plugin ativo | Pedido pago segundo regra comercial | Conferir integração existente antes de acrescentar tags | Plugin e GTM podem emitir a mesma ocorrência |

Server-side pode melhorar observabilidade e integração com resultado confirmado. Ele exige operação, controle de dados e testes próprios. Não garante captura integral nem dispensa consentimento aplicável.

## Exemplo com Pix e contato qualificado

Caso fictício: a Caixa do Ateliê vende kits de embalagem em Minas Gerais. O projeto usa uma loja com pagamento Pix e campanhas sociais. O pedido é medir venda paga e contato comercial, preservando as escolhas de privacidade já aprovadas. A persona `atelie-01` compra kits para encomendas mensais.

A equipe encontra um plugin emitindo compra ao gerar o QR Code e uma tag do GTM emitindo compra na página de agradecimento. A loja registrou 12 pedidos e oito pagamentos confirmados na amostra de teste. O relatório não chama os quatro pendentes de vendas perdidas; eles ainda podem ser pagos no prazo.

O plano reserva `pix_emitido` como evento intermediário. A conversão principal passa a usar o pagamento confirmado no provedor. O ID do pedido é preservado no transporte para permitir reenvio sem repetir a mesma compra. No destino Meta, navegador e API usam o mesmo nome de evento e identificador da ocorrência correspondente. No GA4, a compra recebe `transaction_id`, `value` e `currency: BRL` conforme a especificação oficial. Os dois destinos têm regras próprias, sem supor que um campo genérico resolve todas as duplicatas.

| Caso fictício | Esperado | Resultado observado no teste |
| --- | --- | --- |
| Pix emitido sem pagamento | Nenhuma compra principal | Zero compras; evento intermediário separado |
| Pagamento de R$ 180 confirmado | Uma compra com moeda BRL | Uma ocorrência recebida no destino conferido |
| Webhook repetido do mesmo pedido | Nenhuma nova compra | Reenvio reconhecido pela integração |
| Recarga da página após pagar | Nenhuma nova compra | Sem novo emissor de compra |
| Escolha de marketing recusada | Nenhum envio de marketing contrário à regra aprovada | Nenhuma requisição de marketing observada no caso testado |
| Formulário com campo inválido | Nenhum contato principal | Zero contatos; erro de validação exibido |

O padrão de campanha usa `utm_source=rede-social`, `utm_medium=paid_social`, `utm_campaign=kits-01` e `utm_content=video-dobra-a`. Esses valores são convenção fictícia do projeto. Nenhum email ou telefone entra na URL. O evento de clique no WhatsApp fica separado da criação de contato no CRM.

A saída `rastreamento-kits-01.md` registra versão anterior, versão preparada, seis testes e os acessos disponíveis. No GA4, o responsável confirmou a ocorrência no DebugView com valor e moeda. O recebimento da API na conta de anúncios ficou pendente de acesso do operador. Portanto, o estado é “recebimento confirmado em GA4; recebimento pendente na mídia”, sem aprovação geral por inferência.

O próximo responsável abre a superfície de teste da conta, executa um pagamento de teste autorizado e procura o ID e horário registrados. `inboundfy-growth-anuncios` só recebe a indicação de usar a compra para otimização após a conferência correspondente. A leitura de vendas líquidas e reembolsos segue a `inboundfy-metricas`.

## Métricas de qualidade da coleta

- Cobertura de teste = casos executados / casos planejados. Não representa porcentagem de visitantes capturados.
- Duplicação observada = ocorrências adicionais indevidas / ocorrências únicas no recorte testado.
- Consistência de valor = comparar soma e moeda das ocorrências com a fonte transacional, alinhando impostos, frete e reembolsos.
- Atraso de recebimento = horário de chegada menos horário de confirmação, com fuso alinhado.
- Cobertura transacional = ocorrências conciliáveis recebidas / ocorrências elegíveis da fonte, com definição de elegibilidade documentada.

Não use uma faixa universal para declarar diferença aceitável entre GA4, CRM e mídia. Antes da comparação, alinhe ação, data de ocorrência ou clique, janela de atribuição, fuso, consentimento, filtros, deduplicação e prazo de processamento. Um evento chegar ao destino comprova transporte; não comprova crédito publicitário nem lucro.

## Checklist antes da entrega

- [ ] Emissores ativos e destinos foram identificados.
- [ ] Eventos principais dependem de sucesso confirmado.
- [ ] Há casos negativos, repetição e recarga nos testes.
- [ ] O roteiro cobre escolhas e retirada de consentimento aplicáveis.
- [ ] IDs, moeda e valor batem com a fonte de confirmação.
- [ ] O recebimento tem comprovação ou tarefa pendente nominal.
- [ ] Segredos e dados pessoais não aparecem no relatório.
- [ ] A versão anterior e o caminho de restauração foram registrados.

## Erros comuns

- Tratar tag carregada como conversão funcionando: executar uma ocorrência e procurar o recebimento.
- Disparar ao clicar em enviar: aguardar a resposta de sucesso do sistema.
- Instalar pixel extra sem ler plugin: mapear os emissores antes da mudança.
- Gerar novo ID para cada tentativa do mesmo webhook: preservar a chave por ocorrência e destino.
- Aplicar hash e chamar dados de anônimos: documentar finalidade e regras do fornecedor; hash não dispensa avaliação de proteção de dados.
- Concluir atribuição com click ID inventado: separar teste sintético de transporte de teste de atribuição real autorizado.

## Arquitetura aplicada

O [preflight](../_shared/01-preflight-e-fontes.md) localiza acessos e plano de métricas. O [artefato](../_shared/02-contrato-de-artefato.md) registra a configuração e a versão examinadas. O [handoff](../_shared/03-interacao-e-handoff.md) entrega cada teste pendente com operador e resultado esperado. A [retomada](../_shared/04-validacao-e-retomada.md) preserva testes e restauração. O [contexto editorial](../_shared/05-contexto-editorial.md) orienta avisos e formulários do fluxo.

## Guia específico do grupo

Esta capacidade comprova coleta no alcance observado. Eventos e dados seguem para métricas e atribuição com suas definições, período e limitações. Uma alteração de CRM volta a `inboundfy-growth-revops`; uma mudança no resultado otimizado volta a `inboundfy-growth-anuncios`. Não mude a estratégia de mídia só para fazer números coincidirem.

## Leitura por etapa e documentação oficial

No passo 3, leia [eventos e consentimento](references/eventos-e-consentimento.md). No passo 6, leia [roteiro de verificação](references/roteiro-de-verificacao.md).

Consulte a versão atual antes de implementar. Fontes conferidas em 15/11/2026:

- [Compra no GA4](https://developers.google.com/analytics/devguides/collection/ga4/set-up-ecommerce): propriedades do evento de compra.
- [Validação de comércio eletrônico](https://developers.google.com/analytics/devguides/collection/ga4/validate-ecommerce): DebugView e verificação da coleta.
- [Deduplicação na Meta](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events): correspondência de nome e ID entre API e Pixel.
- [Guia de cookies da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais): referência para a análise do responsável de privacidade.
