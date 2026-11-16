# Dicionário de eventos e tratamento de dados

## Nomear o resultado, não o botão

Um nome interno deve representar um fato estável: `contato_criado`, `agenda_confirmada`, `pagamento_confirmado`. Mantenha um mapa para nomes recomendados por cada destino, sem renomear o evento de negócio a cada fornecedor. Uma conversão principal corresponde à ação comercial que a campanha pretende gerar. Clique, início de formulário e visualização continuam disponíveis como diagnóstico, separados da otimização principal.

| Campo | Regra de preenchimento |
| --- | --- |
| Nome e versão | Nome estável e alteração documentada |
| Momento | Resposta ou estado que confirma sucesso |
| Fonte | Sistema responsável pela confirmação |
| Ocorrência | ID estável sem dado pessoal embutido |
| Valor e moeda | Definição comercial, sem misturar centavos e reais |
| Emissor e destino | Integração específica e propriedade da conta |
| Reenvio | Como repetir transporte sem criar ocorrência adicional |
| Finalidade | Uso analítico, marketing ou operação, conforme registro aprovado |
| Dados permitidos | Lista mínima compatível com a finalidade e fornecedor |
| Retenção | Prazo e responsável pela revisão |

## Padronizar origem

Defina source, medium, campaign e content no projeto antes de gerar links. Use IDs estáveis de campanha e peça. Mantenha convenção de caixa e grafia. Não aplique UTM em links internos: isso pode alterar a leitura de aquisição. Em fluxo entre domínios, confira preservação dos identificadores permitidos e configuração correspondente do fornecedor.

Não inclua email, CPF, telefone ou texto livre de formulário em URL. A URL pode ir para histórico, logs, ferramentas e cabeçalho de referência. Se a atribuição exigir identificadores, documente captura, finalidade, acesso e retenção nos mecanismos próprios autorizados.

## Especificar consentimento por finalidade

O responsável do projeto informa o tratamento aplicável à LGPD e aos públicos atendidos. Registre quais coletores são necessários à operação e quais dependem da escolha da pessoa. O comportamento técnico deve implementar a regra aprovada, inclusive antes da escolha, após recusa e após retirada.

Use a orientação atual da ANPD e documentação oficial da plataforma para revisar a implementação. Um banner visível não comprova que tags respeitam a escolha. Uma API no servidor também precisa aplicar a regra correspondente; trocar o local de envio não altera a finalidade do dado.

Não envie dado pessoal ao GA4. Em plataformas que aceitam dados de correspondência sob condições específicas, confira requisitos atuais de normalização, hash, consentimento e finalidade. Não ponha segredo de API ou credencial de acesso em dataLayer, frontend ou arquivo versionado. Registre apenas o nome da variável em `.inboundfy/context/integracoes.md` conforme o fluxo de manutenção autorizado.
