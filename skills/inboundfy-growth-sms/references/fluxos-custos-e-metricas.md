# Fluxos curtos, custo unitário e retorno

## Tabela de desenho dos fluxos

| Fluxo | Entrada | Saída | Cuidado |
| --- | --- | --- | --- |
| Boas-vindas promocionais | Opt-in confirmado | Recusa, expiração ou conclusão | Entregar apenas benefício confirmado |
| Retomada de checkout | Checkout sem pagamento e opt-in | Compra, resposta, recusa ou prazo final | Consultar pagamento antes de cada envio |
| Aviso de pedido | Evento do pedido | Entrega do aviso ou falha definitiva | Não misturar oferta adicional |
| Reativação | Coorte sem compra e permissão ativa | Compra, conversa, recusa ou fim da sequência | Não criar urgência artificial |

Cada fluxo precisa de chave única por pessoa, evento e etapa. Retentativa técnica não cria nova intenção de envio. Defina prazo máximo para evento atrasado: um aviso velho pode confundir o destinatário. Resposta humana suspende automação concorrente e entrega contexto ao atendimento.

## Custo do SMS

Como referência técnica, GSM-7 comporta até 160 unidades em mensagem de um segmento; mensagens concatenadas usam 153 por segmento. UCS-2 usa 70 no segmento único e 67 nos concatenados. Caracteres da tabela estendida e alguns símbolos consomem unidades adicionais; emoji e outros caracteres podem mudar a codificação. Conte com a ferramenta do provedor, não apenas pelo tamanho visual. Consulte a [documentação de segmentação da Twilio](https://www.twilio.com/docs/glossary/what-sms-character-limit), conferida em 15/11/2026.

Custo variável = segmentos efetivamente tarifados × tarifa do contrato, acrescido dos encargos aplicáveis. Some mensalidade e atendimento no custo total. Para WhatsApp, use categoria, país, modelo e tarifa vigente do provedor; não presuma gratuidade de resposta nem custo fixo por conversa.

## Métricas com denominadores explícitos

| Métrica | Fórmula | Uso |
| --- | --- | --- |
| Entrega | destinatários com entrega confirmada / destinatários tentados | Qualidade de base e operação |
| Clique | pessoas com clique válido / pessoas com entrega confirmada | Excluir automações identificáveis |
| Saída | pessoas que recusaram / destinatários definidos na coorte | Definir denominador e janela antes do envio |
| Receita por destinatário | receita líquida atribuída / destinatários elegíveis | Informar devoluções e janela |
| Compra incremental observada | taxa de compra no envio menos taxa no controle | Usar pessoas alocadas; não só quem clicou |
| Contribuição diferencial | receita diferencial × margem menos custo adicional | Acrescentar equipe e plataforma conforme alcance |
| Resposta humana | tempo até atendimento real, mediana e p90 | Não confundir com mensagem automática |

Leitura é métrica disponível apenas quando o canal fornece o sinal. SMS não oferece abertura confiável como padrão. Sem denominador, escreva não calculável. Percentuais de mercado sem fonte, população e janela não servem como meta.

## Plano de verificação e parada

```text
Evento/etapa: {{ID}}. Elegibilidade: {{regras}}.
Espera e validade: {{tempos}}. Horário/frequência: {{política interna}}.
Chave de envio único: {{pessoa + evento + etapa}}.
Custo/teto: {{R$}}. Controle: {{alocação e tamanho planejado}}.
Compra/recusa/resposta: {{cancelamento e encaminhamento}}.
Falha de entrega: {{tentativas limitadas e expiração}}.
Revisão: {{data, métrica e responsável}}.
```

Teste grupo pequeno antes de ampliar. Não otimize apenas cliques: monitore saída, reclamação, fila de atendimento e margem. Para comparação causal, `inboundfy-experimentacao` define distribuição aleatória, amostra e parada antes da campanha. Resultados pequenos permanecem exploratórios.
