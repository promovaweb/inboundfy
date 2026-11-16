# Verificar uma ocorrência de ponta a ponta

## Preparar o teste

Escolha ambiente e conta autorizados. Use registros sintéticos identificáveis, sem dados pessoais reais. Anote hora e fuso, ID da ocorrência, origem, versão da configuração e destino. Combine quem confirma a chegada quando o agente não tiver acesso à conta.

Uma inspeção estática mostra configuração aparente. Uma requisição no navegador mostra tentativa de envio. A resposta do destino e sua superfície de teste mostram recebimento. Relatórios de atribuição são outra etapa e podem ter processamento diferente. Registre separadamente cada alcance observado.

## Executar casos positivos e negativos

| Caso | Ação | Resultado esperado |
| --- | --- | --- |
| Sucesso | Completar ação confirmada | Uma ocorrência com valor e moeda previstos |
| Validação falha | Enviar formulário inválido | Nenhuma conversão principal |
| Cancelamento | Interromper antes de confirmar | Nenhuma conversão principal |
| Recarga | Reabrir confirmação | Sem nova ocorrência de negócio |
| Reenvio | Repetir webhook com mesmo ID | Sem nova compra no destino |
| Segunda compra real | Confirmar outro pedido | Nova ocorrência com ID diferente |
| Recusa | Repetir fluxo com escolha recusada | Comportamento conforme finalidade aprovada |
| Retirada | Retirar escolha após aceite | Envios seguintes respeitam a nova escolha |
| Reembolso | Estornar pedido de teste quando suportado | Ajuste conforme mecanismo oficial do destino |

## Investigar pelo ponto de falha

Se o sistema não confirmar sucesso, corrija o fluxo antes de depurar tags. Se confirmar mas não emitir, confira listener, callback, integração e consentimento. Se emitir sem receber, examine destino, permissões, resposta da API e erros de formato sem revelar segredos. Se receber duas vezes, localize todos os emissores e a correspondência de IDs.

Para Pixel e API Meta correspondentes, confira mesmo nome e ID do evento nos campos específicos de cada transporte. Para GA4, use a identificação transacional recomendada para compra e confirme o comportamento atual na documentação. Não estenda a regra de um fornecedor a todos os outros.

## Fechar com tarefa verificável

Quando faltar acesso, escreva: “Operador da conta deve executar {{caso}}, abrir {{superfície de teste}} e localizar {{nome, ID e horário}}. Esperado: {{quantidade, valor e moeda}}. Anexar recibo sem dados pessoais em {{arquivo}}”. Isso permite retomar sem declarar sucesso presumido.

Remova registros sintéticos dos fluxos comerciais conforme o processo autorizado. Preserve os recibos técnicos sem informação pessoal. Registre publicação, versão restaurável e responsável por repetir os testes após mudança de formulário, plugin, checkout ou consentimento.
