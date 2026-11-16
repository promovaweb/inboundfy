# Campos, autenticação e estados de cadastro

## Justificar cada campo

Monte uma tabela com nome, finalidade, necessidade imediata, fonte de validação, mensagem de erro e etapa futura. Um campo sem uso operacional imediato é candidato a adiamento. Preserve o dado necessário para a tarefa; não remova endereço se o primeiro resultado for uma entrega física.

Use rótulo persistente, tipo de campo apropriado, preenchimento automático quando pertinente e orientação de formato antes do erro. Não use placeholder como único rótulo. Preserve entradas seguras na falha e mova foco de forma previsível. Validação deve aceitar grafias e formatos legítimos do público.

## Definir a máquina de estados

| Estado | Interface | Conferência |
| --- | --- | --- |
| Pronto para preencher | Campos e proposta visíveis | Teclado chega ao primeiro campo |
| Processando | Informa espera e evita repetição concorrente | Uma tentativa lógica por ação |
| Erro de campo | Explica problema e como corrigir | Foco e associação ao campo |
| Falha técnica | Permite retomar sem nova conta | Registro e entrada preservados |
| Verificação pendente | Explica onde continuar e como reenviar | Limite de envio e validade aprovados |
| Link expirado | Oferece nova tentativa segura | Convite e destino continuam associados |
| Sucesso | Mostra primeira tarefa | Evento nasce da confirmação real |

## Escolher autenticação com a equipe técnica

Senha, link por email, passkey e SSO têm dependências diferentes. Registre público, dispositivos, recuperação, convite e acesso corporativo antes da escolha. Não prescreva senha curta nem elimine proteção contra abuso como ajuste de conversão. A skill descreve a experiência e os casos de aceite; o responsável técnico define controles e implementação.

## Testar a entrega real

Verifique criação, retorno ao produto, convite, expiração e repetição em ambiente autorizado. Uma tela “email enviado” não comprova entrega; use caixa de teste acessível ou deixe a conferência nominalmente pendente. Não exponha token, senha, endereço pessoal ou link de acesso nos recibos públicos.
