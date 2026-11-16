# Cadastro que permite medir o primeiro uso

## Template de brief

Use no passo 1 para mapear a versão existente e no passo 5 para descrever a proposta.

```markdown
---
id: cadastro-{{produto}}-{{versao}}
skill: inboundfy-growth-signup
grupo: growth
estado: rascunho
entrada: {{pedido e URLs}}
persona: {{id}}
fontes: [{{oferta}}, {{dados de etapas}}, {{autenticacao}}]
proxima_skill: inboundfy-growth-onboarding
---
Proposta de entrada: {{resultado, preço e condição}}
Primeira tarefa útil: {{ação confirmada no produto}}
Métodos de autenticação: {{métodos e responsável}}

| Etapa | Entrada | Campo/ação | Necessidade | Estado de sucesso | Erro e retomada | Evento |
| --- | --- | --- | --- | --- | --- | --- |
| {{etapa}} | {{origem}} | {{campo}} | {{finalidade}} | {{confirmação}} | {{mensagem/ação}} | {{nome}} |

## Textos e estados
Título e proposta: {{texto}}
CTA principal: {{ação}}
Cobrança/cartão: {{condição real}}
Erro de campo: {{problema e correção}}
Verificação e expiração: {{próximo passo}}
Sucesso: {{tarefa seguinte}}

## Teste e entrega
Casos de aceite: {{conta nova, existente, convite, link expirado, falha e repetição}}
Métrica principal: {{ativados / elegíveis, janela}}
Métricas auxiliares: {{conclusão, erro, tempo e suporte}}
Pendências e próxima ação: {{pessoa, arquivo, prazo e skill}}
```

## Escolha por necessidade

| Situação | Abordagem | Conferência |
| --- | --- | --- |
| Público quer experimentar antes de configurar empresa | Adiar perguntas de perfil não essenciais | Primeira tarefa continua possível |
| Convite de equipe existente | Preservar convite e contexto | Não criar nova empresa por padrão |
| Público usa provedor corporativo | Avaliar SSO e alternativa permitida | Contrato, acesso e recuperação |
| Email é usado para acesso por link | Explicar envio, validade e nova tentativa | Entrega, expiração e retorno ao fluxo |
| Cadastro exige vários dados operacionais | Separar por tarefas coerentes | Estado salvo e retomada acessível |
| Solicitação só precisa de retorno comercial | Formulário sem conta | Encaminhar a CRO, sem senha desnecessária |

Uma tela com poucos campos pode continuar difícil se a pessoa não entende a oferta. Uma tela com mais campos pode funcionar quando cada um é necessário à tarefa imediata. Redução de campos é hipótese, não regra universal.

## Exemplo de cadastro brasileiro

Caso fictício: a Agenda da Feira permite a feirantes registrar pedidos para retirada. A oferta de entrada permite criar a primeira lista sem cartão. A persona `feirante-01` usa celular. No cadastro atual, nome completo, CPF, endereço, telefone, nome da banca e senha são obrigatórios antes de criar conta.

A equipe confirma que CPF e endereço só serão usados na contratação de serviço pago futuro. O telefone é opcional para recuperação conforme o método aprovado. A proposta pede email e autenticação aprovada para criar conta; nome da banca aparece na primeira lista porque identifica a tarefa. A captura promocional permanece opcional e separada.

Título: “Crie sua primeira lista de pedidos”. Condição: “Você pode testar sem cartão”. CTA: “Criar conta”. Após envio válido, a interface informa: “Enviamos um link de acesso. Abra o email para continuar. Você pode pedir outro link se ele expirar.” A copy final depende da validade e do comportamento reais da integração, sem inventar minutos de espera.

Casos de aceite: email inválido recebe orientação perto do campo; falha de rede preserva email; duplo toque não duplica conta; convite entra na banca correta; link expirado oferece novo envio dentro da regra técnica; teclado alcança todos os controles. O ambiente usa registros sintéticos e mantém o padrão aprovado para não revelar existência de conta.

Na linha de base fictícia de 14 dias, 1.000 sessões elegíveis geraram 400 inícios, 220 contas criadas, 180 acessos verificados e 100 primeiras listas. Conclusão após início: 220/400 = 55%. Ativação por conta criada: 100/220 = 45,5%. Ativação por sessão: 100/1.000 = 10%. No exemplo, cada conta e sua primeira lista são associadas uma única vez à sessão de origem por um ID interno permitido pela política de dados. Retornos não criam outra primeira lista. Esses denominadores permanecem distintos.

A equipe propõe teste da nova sequência com mesma origem, janela e definição de lista concluída. Não estima aumento antes da execução. A métrica principal é primeira lista por sessão elegível de origem em sete dias, com a mesma regra de associação da linha de base; conta criada é auxiliar. Se essa associação não puder ser conferida, a linha de base permanece pendente. A atribuição de variante precisa manter a mesma opção nos retornos da conta, conforme o desenho experimental. O teste será planejado com `inboundfy-experimentacao`. O estado de `cadastro-feira-07.md` é `revisao`, com entrega técnica à responsável fictícia Luana Pinto e handoff a `inboundfy-growth-onboarding` após o primeiro uso. Todos os números são didáticos.

## Métricas do fluxo

Conclusão = contas únicas criadas / inícios elegíveis. Verificação = contas verificadas / contas que exigem verificação. Ativação = contas que concluem a tarefa no prazo / contas elegíveis da mesma coorte. Tempo até ativação usa mediana e percentis entre eventos definidos; pessoas ainda sem tempo suficiente não entram como falha definitiva.

Segmente por dispositivo, origem, método de autenticação e convite. Não compare percentuais de bases diferentes como variantes. Benchmarks externos só entram com amostra, fonte primária, período e mesma definição de sucesso; sem isso, use o histórico do projeto.

## Checklist da entrega

- [ ] Proposta e condição comercial aparecem antes do envio.
- [ ] Campos adiados têm etapa futura definida.
- [ ] Erro, espera, sucesso e retomada possuem mensagens próprias.
- [ ] Convite e conta existente foram testados.
- [ ] Segurança e autenticação têm responsável técnico.
- [ ] Conta criada e ativação são medidas separadamente.
- [ ] Textos passam por revisão editorial e acessibilidade operacional.

## Erros comuns

- Chamar início de formulário de conta criada: usar confirmação do backend.
- Mudar login para aumentar clique: envolver o responsável de segurança e autenticação.
- Pedir CPF apenas para enriquecer CRM: adiar dado sem função imediata.
- Perder a equipe do convite: preservar contexto por toda a autenticação.
- Aprovar aumento de cadastro com queda de ativação: acompanhar a tarefa útil na mesma coorte.

## Arquitetura aplicada

[Fontes](../_shared/01-preflight-e-fontes.md) localiza oferta e autenticação. [Artefato](../_shared/02-contrato-de-artefato.md) preserva versão das telas. [Handoff](../_shared/03-interacao-e-handoff.md) entrega os aceites à equipe técnica. [Retomada](../_shared/04-validacao-e-retomada.md) conserva resultados anteriores. [Contexto editorial](../_shared/05-contexto-editorial.md) orienta proposta e mensagens de erro.

## Guia específico do grupo

O grupo growth liga cadastro à oferta e ao primeiro resultado, mantendo objetivo, público, canal e próxima ação. Produto executa as mudanças autorizadas. `inboundfy-growth-onboarding` recebe a sequência posterior e `inboundfy-rastreamento-conversao` recebe eventos, IDs e casos negativos.

## Leitura por etapa

No passo 3, leia [estados e verificação](references/estados-e-verificacao.md). Consulte `ESTRATEGIA.md`, `CONTEXTO.md` e `docs/method/05-artefatos-e-estados.md` para manter relações do brief.
