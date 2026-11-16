# Operação de receita com donos e encaminhamento verificável

## Arquitetura aplicada

A especificação usa o grupo **growth** e os contratos de [fontes](../_shared/01-preflight-e-fontes.md), [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md), [validação](../_shared/04-validacao-e-retomada.md) e [contexto editorial](../_shared/05-contexto-editorial.md). O ciclo comercial vive no CRM; `.inboundfy/pipeline.md` continua representando o estado dos materiais editoriais.

## Guia específico do grupo

Relacione objetivo, público, canal, oferta e próxima ação ao mapa de receita. No passo 3, leia [etapas, pontuação e métricas](references/etapas-pontuacao-e-metricas.md); no passo 5, leia [roteamento e automação](references/roteamento-e-automacao.md). Qualificação outbound segue para `inboundfy-growth-prospeccao`; mensagens para `inboundfy-growth-email-frio` ou `inboundfy-growth-sms`; plano de medição para `inboundfy-metricas`, com objetivo, oferta, canais, eventos existentes, ferramentas, janela e dados disponíveis; atribuição para `inboundfy-atribuicao`; passagem pós-venda para `inboundfy-growth-onboarding`.

Antes de desenhar automações, pergunte: qual sistema prevalece em conflito? Quem é dono da conta? O que comprova a aceitação comercial? Qual equipe cobre o horário? O que acontece quando faltam dados? Quem confere receita contratada, faturada e recebida? Um estágio preenchido sem condição observável apenas muda o nome da fila.

## Template de especificação de RevOps

```markdown
---
id: {{operacao}}
skill: inboundfy-growth-revops
grupo: growth
estado: rascunho
entrada: {{campanha ou pedido}}
fontes: [{{oferta}}, {{CRM com data}}, {{regras da equipe}}]
persona: {{id}}
proxima_skill: {{skill seguinte}}
---
- Objetivo comercial, oferta e canais: {{dados}}
- CRM canônico e entidades: {{conta, contato, oportunidade}}
- Horário/fuso/capacidade: {{equipes e filas}}
| Etapa | Entrada observável | Saída/campos | Dono | SLA e devolução |
| --- | --- | --- | --- | --- |
| {{etapa}} | {{evento}} | {{regra}} | {{papel}} | {{tempo e motivo}} |
## Pontuação
{{Dimensões, limiares, validade, exclusões e versão, ou qualificação manual.}}
## Roteamento
{{Precedência de dono, território, capacidade, fila alternativa e escalonamento.}}
## Automação
{{Gatilho, condição, ação, chave única, log, falha e reversão.}}
## Painel
{{Métrica, fórmula, origem, coorte, janela e responsável.}}
## Piloto
{{Casos de teste, alcance, comparação, monitoramento e reversão.}}
## Próxima ação
{{Responsável, arquivo, skill, estado e pendências.}}
```

## Exemplo de operação brasileira fictícia

A Viga Solar, empresa fictícia de manutenção de sistemas fotovoltaicos comerciais de Goiânia, recebe solicitações de inspeção por formulário e respostas de prospecção. A persona-01 é responsável por instalações de pequenas redes varejistas. O plano `0086` aponta para `acervo/0086-2026-11-15-inspecao/estrategia.md`, `.inboundfy/context/servicos.md` e uma exportação fictícia do CRM. O estado é `rascunho`; nenhuma automação foi ativada.

O CRM canônico registra conta por ID empresarial e unidade, contato por ID interno e e-mail conferido, oportunidade por conta, unidade e escopo. Um novo formulário gera solicitação única, não nova oportunidade automática. Receita contratada depende de contrato assinado; receita recebida depende de conciliação financeira. A oferta de inspeção começa em R$ 2.000 no exercício e não promete economia percentual.

| Etapa | Entrada e saída observáveis | Responsável fictício | Prazo interno do exercício |
| --- | --- | --- | --- |
| Solicitação recebida | Formulário válido; sai após conferência de unidade e serviço | Assistente Iara Nunes | Triar em até duas horas úteis |
| Qualificado por marketing (MQL) | Unidade atendida e pedido de inspeção; sai por aceite ou devolução | Iara | Encaminhar na mesma triagem |
| Aceito por vendas (SAL) | Vendedor aceita tarefa; sai após conversa ou devolução justificada | Consultor Caio Leal | Aceitar em quatro horas úteis |
| Qualificado por vendas (SQL) | Conversa confirma necessidade, função e prazo | Caio | Agendar inspeção ou registrar próxima data |
| Oportunidade | Escopo e valor estimado registrados | Caio | Revisão semanal de próxima ação |
| Ganho | Contrato assinado; cria passagem ao atendimento | Caio e equipe técnica | Passagem em um dia útil |

A equipe trabalha de segunda a sexta, 9h às 18h, horário de Goiânia. Solicitação recebida fora desse período ganha confirmação honesta e entra na contagem no próximo expediente. Conta com responsável existente mantém o dono. Entre contas novas da mesma região, a distribuição considera disponibilidade; ausência de consultor envia à fila da supervisora fictícia Lia Ramos. Depois de quatro horas úteis sem aceite, Lia recebe alerta. Transferência exige registro; um retorno tardio do provedor não troca o dono.

No modelo inicial fictício, adequação soma até 60 pontos: região 20, serviço 25, função 15. Intenção soma até 40: pedido de inspeção 30 e prazo informado 10. O encaminhamento MQL exige adequação mínima de 45 e intenção mínima de 30. Domínio de e-mail pessoal não exclui pequeno negócio automaticamente. Dado desconhecido segue para conferência. Recusa de contato retira elegibilidade para promoção, independentemente da pontuação.

O teste de automação usa a chave `solicitacao_id + etapa + versao_da_regra`. Dois webhooks iguais precisam gerar um contato relacionado, uma tarefa e um alerta. Se a pesquisa de empresa exceder o tempo do formulário, a solicitação continua salva e segue para fila pendente. Um retorno tardio atualiza apenas campos conferidos, sem recriar tarefa nem calendário.

Na coorte fictícia de 40 solicitações únicas, 24 viram MQL, 18 recebem aceite, 12 chegam a SQL, oito geram oportunidade e três fecham. MQL/solicitação = 60%; aceite/MQL = 75%; SQL/aceite = 66,7%; ganho/oportunidade = 37,5%, assumindo as oito oportunidades já encerradas. Três contratos de R$ 2.000 somam R$ 6.000 contratados. Apenas dois pagamentos de R$ 2.000 conciliados somam R$ 4.000 recebidos. Com custo de aquisição total simulado de R$ 1.800, CAC = R$ 600 para os três clientes novos, sem confundir recebimento com aquisição.

As seis devoluções de MQL precisam de motivo. O painel mede tempo da primeira resposta humana e tarefas sem dono. Iara propõe piloto de cinco dias úteis em uma fila. Lia valida casos duplicados, conta conhecida, ausência de consultor, dados incompletos e recusa antes de pedir ativação. A próxima ação é entregar clientes ganhos a `inboundfy-growth-onboarding` com escopo, contrato, responsável e primeira visita; sem pendência de contexto, a equipe não precisa refazer a qualificação.

## Checklist de operação

- [ ] Entidades e chaves foram definidas.
- [ ] Etapas usam entrada e saída observáveis.
- [ ] MQL, SAL e SQL possuem sentidos distintos.
- [ ] SLA usa expediente, fuso e responsável de cobertura.
- [ ] Pontuação tem versão, validade e tratamento de desconhecidos.
- [ ] Repetição, atraso e falha de integração foram simulados.
- [ ] Painel separa contrato, faturamento e recebimento.
- [ ] Piloto e reversão estão prontos antes de ativação.

## Erros comuns de RevOps

- Confundir pontuação alta com venda pronta: exija adequação e intenção.
- Punir e-mail pessoal em negócios locais: confira identidade e função.
- Recusar formulário porque enriquecimento falhou: preserve a solicitação em fila.
- Trocar responsável após retorno tardio: respeite a atribuição vigente.
- Duplicar oportunidades por novo formulário: relacione contato, unidade e escopo.
- Medir velocidade só pelo bot: registre primeira ação humana útil.
- Projetar fechamento com probabilidade arbitrária: calibre por coortes maduras e declare hipótese.
