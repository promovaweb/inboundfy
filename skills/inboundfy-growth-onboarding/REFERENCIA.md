# Referência de onboarding e primeiro valor

## Definição de primeiro valor

O primeiro valor é um resultado que a pessoa reconhece como útil. Criar perfil,
conectar conta ou assistir a uma apresentação podem ser pré-requisitos, mas não
substituem o resultado. Comece pela promessa de compra e pergunte qual objeto
ficará pronto para uso na rotina.

| Negócio | Marco útil possível | Sinal insuficiente | Dependência |
| --- | --- | --- | --- |
| Gestão de encomendas | Primeira semana de produção organizada | Abrir painel vazio | Pedidos ou exemplo identificado |
| Serviço de automação | Primeiro fluxo real conferido pelo cliente | Reunião inicial realizada | Acesso e validação técnica |
| Agendamento | Primeiro horário disponível publicado | Perfil com foto | Agenda e regra de disponibilidade |
| Conteúdo por assinatura | Primeira atividade aplicada | Vídeo iniciado | Material e tempo de prática |
| Produto de equipe | Responsável executa tarefa compartilhada | Convite enviado | Colega aceita e participa |

O marco começa como hipótese de ativação. Compare retenção posterior de quem
o alcançou e de quem não o alcançou, dentro de coortes observáveis. Associação
não prova que forçar a ação causará retenção. Se não houver dados, descreva
o marco como proposto e planeje observação.

## Escolha do caminho de ajuda

| Situação | Caminho | Cuidado operacional |
| --- | --- | --- |
| Tarefa simples e reversível | Estado vazio com ação direta | Não abrir tour antes da tarefa |
| Configuração necessária em várias etapas | Checklist curto com progresso real | Não marcar item fictício como concluído |
| Resultado depende de base de dados | Importação guiada e exemplo separado | Exemplo não conta como ativação |
| Implantação exige outro papel | Convite contextual e passagem de responsabilidade | Não cobrar ação de quem não possui acesso |
| Serviço com execução pela equipe | Cronograma, insumos e ponto de validação | Não chamar espera da equipe de abandono do cliente |
| Pessoa parou após erro | Ajuda vinculada ao erro e retomada | Preservar trabalho já realizado |

Leia [Ativação e comunicação por estado](references/ativacao-e-comunicacao.md)
nos passos 2 a 6 antes de especificar automações ou comparar coortes.

## Template do fluxo

```markdown
---
id: {{id}}
skill: inboundfy-growth-onboarding
grupo: growth
tipo: fluxo-onboarding
estado: rascunho
entrada: [{{compra, brief ou acervo}}]
fontes: [{{produto}}, {{oferta}}, {{dados de uso}}]
persona: {{id e papel}}
canal: {{produto, email ou atendimento}}
oferta: {{id}}
proxima_acao: {{responsavel e entrega}}
---
Promessa da compra: {{resultado confirmado}}
Primeiro valor: {{objeto útil e ação que o confirma}}
Evento e janela: {{evento, início do relógio e prazo}}
População: {{contas elegíveis e exclusões}}
| Passo | Ação | Necessário agora? | Responsável | Falha/alternativa |
| --- | --- | --- | --- | --- |
| {{etapa}} | {{verbo}} | {{razão}} | {{papel}} | {{retomada}} |
| Estado/gatilho | Espera | Canal | Mensagem/CTA | Saída e responsável |
| --- | --- | --- | --- | --- |
| {{condição}} | {{tempo}} | {{canal}} | {{texto}} | {{evento de saída}} |
Checklist visível: {{ações com progresso verdadeiro}}
Ajuda: {{acesso, erro e dependência humana}}
Métricas: {{ativação, tempo, retorno e atendimento}}
Teste: {{hipótese, controle, variante e encerramento}}
Pendências: {{perguntas abertas}}
Handoff: {{arquivos, skill, estado e ação}}
```

## Exemplo: primeira escala de uma clínica de banho e tosa

Caso brasileiro fictício. A Agenda de Pêlo, de Ribeirão Preto, vende agenda
para pequenos pet shops por R$ 129/mês. A persona `persona-05`, recepcionista,
precisa organizar a próxima semana; a dona da loja comprou o plano.
Entrada: `acervo/0314-primeira-semana/`, manual do produto, oferta e
contagens sintéticas. O exemplo não descreve uma empresa real.

Primeiro valor proposto: publicar a disponibilidade da semana com pelo menos
um serviço e confirmar um agendamento real. Janela: sete dias após acesso
liberado à conta da loja. Convite enviado e teste com dados de demonstração
não satisfazem o marco.

O fluxo anterior pedia logotipo, descrição da loja, convite de toda a equipe,
integração de pagamento e cadastro de serviços antes de abrir a agenda.
O novo plano conserva serviço, duração e horário; adia logotipo e descrição;
oferece convite apenas ao atribuir atendimento; deixa pagamento para o uso
que realmente o exige.

| Estado | Mensagem proposta | Canal e tempo | Saída |
| --- | --- | --- | --- |
| Acesso liberado | “Sua agenda está pronta para configurar. Comece pelo serviço mais frequente.” CTA: “Adicionar serviço” | Produto e email de boas-vindas | Serviço criado |
| Agenda vazia | “Defina os horários da próxima semana. Você pode ajustar cada dia antes de publicar.” | Produto após serviço criado | Disponibilidade publicada |
| Sem disponibilidade | “Falta escolher os horários para receber o primeiro agendamento. Retome de onde parou.” | Email após 24 h, se ainda pendente | Publicação ou pedido de ajuda |
| Espera de autorização | “A responsável pela loja precisa confirmar os horários. Envie a solicitação por este link.” | Produto no estado pertinente | Aprovação da responsável |
| Primeiro agendamento real | “O primeiro horário está confirmado. Confira agora a lista da semana.” | Produto após confirmação | Passagem ao uso semanal |
| Erro de importação | “Não foi possível ler esta coluna. Ajuste a duração em minutos e tente novamente.” | Ajuda junto ao arquivo | Importação válida |

Ajuda humana: se houver duas falhas seguidas de importação, oferecer atendimento.
Após o marco, retirar lembretes de configuração. WhatsApp só entra se esse canal
estiver ativo e autorizado no contexto; a existência do telefone da loja não
basta para enviar campanhas.

Piloto sintético: 100 contas com sete dias completos de observação; 80 criaram
serviço, 60 publicaram horários e 40 confirmaram agendamento real. Ativação =
40/100 = 40%. As 20 contas recém-abertas ficam fora desta leitura até completar
a janela. Entre as 40 ativadas, tempo p50 = dois dias e p90 = seis dias.
Também relatar 60 contas sem marco para não esconder as que ficaram pendentes.

Hipótese: adiar logotipo deve aumentar ativação em sete dias. A meta interna
ilustrativa é 48%, sem promessa. `inboundfy-experimentacao` define amostra e
encerramento; a métrica de acompanhamento é retorno com uso real na quarta
semana, além de pedidos de ajuda por conta. Um fluxo mais curto pode reduzir
tempo sem melhorar uso recorrente.

Saída: `acervo/0314-primeira-semana/fluxo-onboarding.md`, ID 0314,
grupo growth, estado `revisao`, fontes, persona e oferta ligadas.
Pendência: validar se primeiro agendamento prevê retorno na quarta semana.
Próxima ação: responsável de produto conferir os estados do fluxo.
Handoff para `inboundfy-especialista-email`: briefs de boas-vindas e retomada;
para `inboundfy-rastreamento-conversao`: `servico_criado`,
`disponibilidade_publicada`, `agendamento_real_confirmado`, ID da conta
pseudonimizado e versão do marco. Para `inboundfy-growth-retencao`: contas
com marco confirmado, rotina semanal e dúvidas ainda abertas.

## Checklist

- [ ] O resultado de primeiro valor está ligado à promessa de compra.
- [ ] Janela, unidade e evento do marco estão definidos.
- [ ] Configuração e demonstração não se confundem com uso real.
- [ ] Cada passo obrigatório possui motivo.
- [ ] Cada lembrete tem condição de saída.
- [ ] A pessoa retoma sem refazer o trabalho.
- [ ] Dependências da equipe aparecem com responsável.
- [ ] Retenção posterior e volume de ajuda acompanham ativação.

## Erros comuns

- Disparar sequência inteira por calendário fixo: avaliar o estado antes de cada envio.
- Tratar clique no email como ativação: confirmar o resultado útil no produto.
- Exigir todos os recursos na primeira sessão: conservar apenas o necessário ao primeiro uso.
- Cobrar implantação do usuário enquanto a equipe deve liberar acesso: separar os responsáveis.
- Melhorar tempo apenas entre quem concluiu e omitir abandonos: mostrar toda a coorte.
- Misturar uso demonstrativo e real: identificar o tipo de dado no evento.
- Mostrar progresso inventado: contar apenas tarefas efetivamente concluídas.

## Guia específico do grupo

Growth organiza o caminho ao primeiro valor, seus canais e a continuidade
operacional. A skill não redefine condições de trial, preço ou produto.
`inboundfy-growth-signup` recebe problemas anteriores à conta;
`inboundfy-growth-paywall` recebe passagem ao acesso pago;
`inboundfy-growth-retencao` recebe uso recorrente.

Confirme antes de entregar: o cliente consegue executar a próxima tarefa?
Quem resolve cada dependência? Qual evento encerra os lembretes?
Consulte `ESTRATEGIA.md`, `CONTEXTO.md` e
`docs/method/05-artefatos-e-estados.md` para salvar o fluxo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-growth-onboarding**, do grupo
**growth**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).
