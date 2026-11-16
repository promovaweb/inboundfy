# Coortes, sinais de uso e cobrança

## Interpretar sinais antes de contatar

Queda de uso pode refletir férias, sazonalidade, tarefa concluída ou falha da integração. Compare a conta com seu próprio padrão e registre atualidade de cada sinal. Uso diário não é necessário para todo produto. Evite mensagens que insinuam vigilância ou concluem desinteresse sem confirmação.

Se houver pontuação de saúde, defina cada componente na mesma escala, pesos, validade e cobertura mínima. Não some contagens de login com percentuais e notas sem normalização. Dado ausente permanece ausente. Quando houver regra para cálculo parcial, informe cobertura e não transforme a nota parcial em estado saudável automaticamente. Valide pesos contra resultados posteriores antes de usar em campanha.

## Preparar recuperação de pagamento

Leia o motivo retornado pelo provedor e a política atual da integração registrada em `.inboundfy/context/integracoes.md`. Alguns erros permitem nova tentativa; outros exigem autenticação ou atualização do meio de pagamento. Não imponha uma sequência universal de dias ou tentativas. Confira o que o provedor já executa para evitar duas rotinas concorrentes.

| Situação | Ação | Conferência antes da próxima etapa |
| --- | --- | --- |
| Erro temporário confirmado | Retentativa conforme política aprovada | ID da cobrança e pagamento já recebido |
| Meio de pagamento requer atualização | Link seguro para área de cobrança | Token e acesso sem exposição de dados |
| Pix pendente | Consultar status e prazo do provedor | Não emitir cobrança paralela desnecessária |
| Pagamento confirmado | Encerrar avisos e conciliar | Uma ocorrência por fatura |
| Prazo comercial encerrado | Aplicar estado previsto no contrato | Aviso, acesso e suporte informados |

Nunca peça cartão completo ou segredo por mensagem. Nome da variável e integração podem aparecer no plano; o valor da credencial permanece no gerenciador autorizado. Mensagem de cobrança não incorpora oferta promocional sem finalidade e permissão próprias.

## Conferir o fluxo de saída

Teste saída sem pesquisa, recusa de incentivo, aceitação de pausa, retorno, redução de plano, cancelamento imediato ou no fim do período conforme a regra aplicável. Confira recibo, data, cobrança restante e acesso a dados. Uma tela de sucesso precisa corresponder ao estado real da assinatura.

A intervenção tem chave conta + assinatura + evento + etapa. Repetição de webhook não repete aviso nem cobrança. Resposta ao atendimento suspende a sequência concorrente quando a regra do fluxo exigir. Preserve tentativas, custos e motivo de encerramento para leitura posterior.
