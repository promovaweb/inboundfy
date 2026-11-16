# Operação de retenção por motivo e coorte

## Template de operação

Use no passo 1 para reconciliar a base e no passo 4 para registrar intervenções.

```markdown
---
id: retencao-{{oferta}}-{{periodo}}
skill: inboundfy-growth-retencao
grupo: growth
estado: rascunho
entrada: {{pedido e exportações}}
persona: {{id}}
fontes: [{{CRM}}, {{cobrança}}, {{motivos de saída}}]
proxima_skill: inboundfy-growth-revops
---
Base inicial: {{contas e receita recorrente}}
Perdas voluntárias: {{contas e receita}}
Perdas por cobrança: {{contas e receita}}
Reduções e expansão da mesma base: {{R$}}
Período e tratamento de pausas: {{definições}}

| Motivo/sinal | Fonte e atualidade | Intervenção | Condição comercial | Canal/finalidade | Saída do fluxo | Responsável |
| --- | --- | --- | --- | --- | --- | --- |
| {{motivo}} | {{registro}} | {{ajuda, pausa, plano ou saída}} | {{limite real}} | {{permissão}} | {{evento/prazo}} | {{pessoa}} |

## Cancelamento
Acesso e ação: {{caminho}}
Pesquisa opcional: {{pergunta}}
Alternativa pertinente: {{quando e para quem}}
Confirmação: {{data efetiva, cobrança final e acesso a dados}}

## Recuperação de pagamento
Motivo e política do provedor: {{fonte atual}}
Tentativas e prazo: {{regra}}
Mensagem e destino seguro: {{texto/link}}
Pagamento confirmado: {{fonte e ID}}

## Acompanhamento
Aceitação imediata: {{n/denominador}}
Permanência paga em {{prazo}}: {{n/coorte madura}}
Receita e contribuição após incentivos: {{R$}}
Pendências e próxima ação: {{pessoa, arquivo e data}}
```

## Escolha da intervenção

| Motivo ou situação | Intervenção pertinente | Evitar |
| --- | --- | --- |
| Não chegou ao primeiro resultado | Ajuda de ativação ligada à tarefa | Desconto sem resolver o uso |
| Falha técnica reproduzida | Suporte com prazo real e retorno | Prometer correção sem responsável |
| Uso sazonal e pausa disponível | Pausa com data e condição de retorno claras | Reativação surpresa |
| Plano maior que a necessidade | Plano menor com limites explicados | Ocultar perda de recursos |
| Recurso inexistente | Explicar limite e alternativa real | Vender previsão como entrega confirmada |
| Operação encerrada | Cancelamento direto e orientação de dados | Insistência comercial |
| Pagamento falhou | Fluxo seguro de atualização e conciliação | Cobranças paralelas ou ameaça de perda não prevista |

## Exemplo de base reconciliada

Caso fictício: a Roteiro de Oficina vende software a assistências técnicas de Fortaleza. A base inicial do mês tem 200 contas a R$ 100/mês, total de R$ 20.000 de receita recorrente. As fontes fictícias são exportação do CRM, cobrança e pesquisa opcional de saída em `acervo/052-retencao/`. O objetivo é reduzir perda sem tornar a saída mais difícil.

No fechamento, dez contas da base cancelaram por escolha e cinco saíram após falha de pagamento não resolvida. A perda recorrente foi R$ 1.500. Reduções de plano somaram R$ 200 e expansão da mesma base somou R$ 500. Retenção bruta de receita = (20.000 − 1.500 − 200)/20.000 = 91,5%. Retenção líquida = (20.000 − 1.500 − 200 + 500)/20.000 = 94%. Churn de contas = 15/200 = 7,5%. Novos clientes ficam em outra tabela.

Antes do fechamento, 24 pessoas iniciaram cancelamento. Seis aceitaram uma alternativa e 18 cancelaram. Destas 18, dez pertenciam à base inicial e oito haviam entrado no próprio mês; por isso, não entram no denominador das 200 contas iniciais. Os seis aceites compõem uma coorte de intervenção separada. A taxa imediata de aceite foi 6/24 = 25%, sem chamar isso de retenção comprovada. Após 60 dias, quatro dos seis continuaram pagando. A equipe acompanha também custo do incentivo e uso do produto.

A proposta de saída mostra “Cancelar assinatura” nas configurações, uma pergunta opcional e alternativa apenas quando pertinente. Para uso sazonal, oferece pausa de um mês se disponível no plano. A confirmação informa a data efetiva e o acesso restante. Recusar a pausa leva diretamente à confirmação, sem exigir atendimento.

No fluxo separado de cobrança, 12 faturas falharam. Sete foram recuperadas antes do fechamento, deixando cinco contas não recuperadas. O provedor confirma sete pagamentos únicos de R$ 100, total R$ 700. O custo adicional de cobrança e atendimento foi R$ 90; receita recuperada menos custo adicional foi R$ 610 antes do custo de servir os clientes. Pix gerado e pagamento ainda pendente não entram nos R$ 700.

A mensagem candidata diz: “Roteiro de Oficina: não conseguimos confirmar o pagamento da sua assinatura. Consulte a situação e as opções disponíveis na área de cobrança. Se precisar de ajuda, fale com o atendimento.” O texto não inventa motivo bancário nem prazo de suspensão. A data aplicável virá da regra comercial confirmada antes do envio.

Saída: `retencao-oficina-052.md`, estado `revisao`. A responsável fictícia Elisa Rocha confere a política de pausa e os sete pagamentos. `inboundfy-rastreamento-conversao` recebe os IDs e os casos de webhook repetido; `inboundfy-growth-onboarding` recebe os clientes que não concluíram a primeira ordem de serviço. A divulgação promocional usa apenas o canal autorizado. Todos os números são simulação didática.

## Métricas e coortes

Churn de contas = contas perdidas da base inicial / contas ativas no início. Retenção bruta de receita = (receita inicial − perdas − reduções) / receita inicial. Retenção líquida acrescenta expansão da mesma base ao numerador. Defina pausa e inadimplência antes de calcular, mantendo a regra entre períodos.

Recuperação de pagamento usa faturas ou contas, sem misturar unidades: faturas pagas após falha / faturas elegíveis que falharam. Valor recuperado deve ser líquido de estornos no horizonte definido. A coorte de incentivo acompanha receita, margem e permanência após o benefício acabar.

Não use uma taxa de churn universal para julgar todo negócio. Compare duração de contrato, segmento, tempo de uso, canal de entrada e política de cobrança. Sem fonte primária compatível para benchmark, use histórico local. Antes/depois da intervenção não demonstra causa isolada; um controle planejado ajuda a separar sazonalidade e mudanças do produto.

## Checklist de fechamento

- [ ] A base inicial reconcilia contas e receita.
- [ ] Perdas voluntárias e falhas de pagamento estão separadas.
- [ ] Expansão não inclui clientes novos.
- [ ] Cancelamento pode continuar sem aceitar oferta ou responder pesquisa.
- [ ] Pausa e retorno têm datas e cobrança claras.
- [ ] Pagamentos recuperados têm confirmação única.
- [ ] Incentivos são acompanhados após o prazo inicial.

## Erros comuns

- Chamar desconto aceito de cliente retido: acompanhar permanência paga após o benefício.
- Aplicar nota de uso com dado ausente como se fosse zero: mostrar cobertura e atualidade.
- Cobrar novamente após webhook repetido: usar chave idempotente e conciliação.
- Confundir conta perdida com fatura atrasada: definir estado e prazo comercial.
- Insistir após pedido de saída: respeitar o fluxo escolhido e a finalidade permitida.

## Arquitetura aplicada

[Fontes](../_shared/01-preflight-e-fontes.md) localiza cobrança e motivos. [Artefato](../_shared/02-contrato-de-artefato.md) preserva período e população. [Handoff](../_shared/03-interacao-e-handoff.md) atribui intervenção ao responsável. [Retomada](../_shared/04-validacao-e-retomada.md) conserva tentativas e respostas. [Contexto editorial](../_shared/05-contexto-editorial.md) revisa mensagens sem constranger a pessoa.

## Guia específico do grupo

Growth relaciona objetivo, público, canal, oferta e próxima ação à permanência observada. Produto recebe falhas de utilidade, atendimento recebe casos técnicos e `inboundfy-growth-pricing` recebe inadequação de plano. A skill não muda contrato, preço ou cobrança sem o alcance correspondente.

## Leitura por etapa

No passo 5, leia [coortes e cobrança](references/coortes-e-cobranca.md). Consulte `ESTRATEGIA.md`, `CONTEXTO.md` e `docs/method/05-artefatos-e-estados.md` para vincular a intervenção ao projeto.
