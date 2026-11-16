# Resposta humana e passagem para vendas

## Matriz de tratamento

| Tipo de resposta | Ação | Registro no CRM |
| --- | --- | --- |
| Interesse | Responder à pergunta e oferecer próximo passo | Tipo, etapa, dono e horário |
| Pedido de informação | Enviar somente o material pertinente | Recurso enviado e próxima tarefa |
| Objeção | Esclarecer uma vez com fonte | Tema e resultado da conversa |
| Não agora | Confirmar prazo indicado, sem insistência | Data autorizada para retomada |
| Indicação | Conferir nova função e pertinência | Quem indicou e pessoa a verificar |
| Pessoa errada | Encerrar ou pedir orientação uma vez | Motivo e correção da lista |
| Remoção ou reclamação | Suprimir e confirmar quando pertinente | Data, alcance e origem da recusa |
| Férias automática | Pausar; revisar a data | Tipo automático, sem contar resposta humana |

Ofereça dois horários com fuso se a pessoa aceitar reunião. Convite e mensagens externas exigem autorização de envio. Promessas, negociação e exceções comerciais seguem ao responsável humano. O agente pode preparar resposta e atualização revisável sem presumir autorização operacional.

## Métricas por contatos únicos

| Indicador | Fórmula | Interpretação |
| --- | --- | --- |
| Falha permanente | contatos com falha permanente / contatos tentados | Qualidade da lista e entrega |
| Resposta humana | pessoas que responderam / contatos aceitos pelo servidor | Excluir robôs e respostas automáticas |
| Resposta positiva | pessoas interessadas / contatos aceitos | Definir “interessada” antes da rodada |
| Agendamento | reuniões marcadas / respostas positivas | Qualidade do encaminhamento |
| Comparecimento | reuniões realizadas / reuniões marcadas | Conferir remarcações sem duplicar |
| Oportunidade | oportunidades aceitas / reuniões realizadas | Relevância comercial |
| Custo por reunião realizada | custo de pesquisa, ferramentas e operação / realizadas | Comparar coortes equivalentes |

Use um denominador documentado para toda a rodada. Aceitação pelo servidor não comprova entrega na caixa de entrada. Uma pessoa com três mensagens conta uma vez na taxa de resposta da sequência. Separe respostas geradas antes e depois da mudança de copy. Não faça referência universal a taxas “boas”: segmento, preço, fonte e reputação mudam o resultado.

## Modelo de revisão semanal

```text
Sequência/segmento: {{ID}}. Coorte: {{entrada/data}}.
Tentados/aceitos/falhas: {{números}}.
Humanas/positivas/recusas/automáticas: {{números}}.
Marcadas/realizadas/oportunidades: {{números}}.
Tempo até resposta humana da equipe: {{mediana e p90}}.
Principal motivo de recusa: {{contagem e trecho anonimizado}}.
Alteração proposta: {{lista, oferta ou texto}}.
Responsável e teto do próximo piloto: {{pessoa/limite}}.
```

Se ninguém responder, examine aceitação, pertinência do sinal e oferta antes de trocar assunto. Se houver respostas sem reunião, examine pedido e atendimento. Se reuniões ocorrerem sem oportunidades, devolva a qualificação para `inboundfy-growth-prospeccao`. Definições de etapas, donos e SLA seguem para `inboundfy-growth-revops`.
