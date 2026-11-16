# Estados de acesso e cobrança

## Separar convite, pagamento e permissão

Um paywall não deve decidir sozinho se a conta pagou. A tela mostra o estado
confirmado pelos sistemas responsáveis. A confirmação do pagamento e a
concessão do acesso podem chegar em momentos diferentes; o brief precisa
nomear essa diferença para orientar a mensagem e o atendimento.

| Origem | Evento | Próximo estado | Comportamento esperado |
| --- | --- | --- | --- |
| Uso gratuito | Pedido de recurso pago | Oferta exibida | Explicar limite e preservar tarefa |
| Oferta exibida | Recusa | Acesso atual | Fechar e respeitar supressão |
| Oferta exibida | Escolha de plano | Checkout | Manter preço e versão da oferta |
| Checkout | Pagamento pendente | Espera | Não dizer “plano ativo” |
| Espera | Expiração do pagamento | Não confirmado | Oferecer nova tentativa após consultar status |
| Espera | Confirmação válida | Acesso em atualização | Não gerar segunda cobrança |
| Acesso em atualização | Permissão confirmada | Plano ativo | Retomar tarefa e emitir confirmação pertinente |
| Plano ativo | Estorno ou cancelamento | Estado definido pela oferta | Informar data e consequência real |

Solicite à equipe executora comportamento idempotente no retorno de cobrança.
Evento duplicado não pode gerar compra, email ou concessão repetidos.
Segredos e tokens de integração permanecem fora dos artefatos de marketing.

## Testes de aceite da experiência

```markdown
| Caso | Estado inicial | Ação | Resultado esperado | Comprovação |
| --- | --- | --- | --- | --- |
| Recusa | Plano gratuito e rascunho preenchido | Fechar tela | Rascunho preservado | Captura e estado |
| Sem poder de compra | Usuário colaborador | Contratar | Encaminhamento ao administrador | Tela e permissão |
| Pix pendente | Código emitido | Voltar ao produto | Aviso de espera, plano anterior | Status confirmado |
| Retorno repetido | Pagamento já confirmado | Receber nova notificação | Uma compra e um acesso | Registro técnico |
| Falha de acesso | Pagamento confirmado | Abrir recurso | Mensagem de atualização e ajuda | Chamado vinculado |
| Pago | Plano ativo | Pedir recurso incluído | Acesso sem nova oferta | Estado da conta |
| Trial expirado | Prazo encerrado | Abrir recurso | Condição aprovada da oferta | Data e plano |
```

O brief descreve o comportamento desejado. A comprovação técnica fica com a
equipe responsável e a medição com `inboundfy-rastreamento-conversao`.

## Particularidades de aplicativo

Para aplicativo, registre loja, país, moeda, produto de assinatura e local de
gestão do contrato. Confira regras vigentes da loja antes de propor compra
externa, renovação ou restauração. Taxas, políticas e formatos mudam; não
use percentuais memorizados para calcular contribuição.

Inclua no brief: restauração de compra, acesso em outro dispositivo, conta
trocada, assinatura já ativa, falha de rede e retomada. Uma prévia personalizada
não equivale a funcionalidade integral. A tela precisa distinguir o resultado
demonstrado do serviço adquirido.

## Métricas com a mesma população

| Métrica | Fórmula |
| --- | --- |
| Cobertura da oferta | Contas expostas / contas elegíveis |
| Interesse | Contas com checkout iniciado / contas expostas |
| Pago por elegível | Contas com pagamento confirmado / contas elegíveis |
| Conclusão do checkout | Contas pagas / contas com checkout iniciado |
| Liberação correta | Contas pagas com acesso confirmado / contas pagas |
| Uso posterior | Contas pagas com uso real na janela / contas pagas avaliáveis |
| Reembolso | Compras reembolsadas / compras confirmadas da mesma coorte |

Segmente por gatilho, versão da oferta, plano, papel e plataforma.
Contagens únicas por conta evitam que dez exibições para a mesma equipe
pareçam dez oportunidades diferentes. O evento de exposição pode guardar
frequência, mas não muda a unidade comercial.

## Cartão de hipótese

```yaml
hipotese: "{{mudar mensagem ligada ao recurso deve melhorar pago por elegivel}}"
controle: "{{tela atual com mesmas condições comerciais}}"
variante: "{{uma alteração descrita}}"
populacao: "{{contas, gatilho e exclusoes}}"
principal: "{{pagamento confirmado por elegivel}}"
acompanhamento: ["liberacao correta", "reembolso", "uso real posterior"]
encerramento: "{{regra definida com inboundfy-experimentacao}}"
reversao: "{{condicao funcional e responsavel}}"
```

Não deduza efeito do paywall apenas de taxa pago por trial. Uma mudança pode
alterar quem entra, quanto custa atender e quantos continuam depois.
Compare o funil completo e o horizonte econômico aprovado pelo projeto.
Benchmarks quantitativos só entram com fonte primária, definição de coorte
e acompanhamento compatíveis; caso contrário, mantenha hipóteses locais.

## Referência pública de método

A documentação separa pagamentos com confirmação posterior e exige tratar notificações repetidas sem repetir a entrega. O brief deve solicitar esses aceites à equipe técnica; o conector real pode possuir outros nomes de evento. [Stripe: confirmação de pagamento e entrega](https://docs.stripe.com/checkout/fulfillment.md?ui=full-page).

Consulta: 15/11/2026. Esta fonte sustenta o comportamento descrito, sem
fornecer uma meta universal para o funil do projeto.
