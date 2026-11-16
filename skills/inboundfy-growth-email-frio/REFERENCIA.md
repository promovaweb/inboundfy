# E-mail frio com contexto e continuidade comercial

## Arquitetura aplicada

Use os contratos de [fontes](../_shared/01-preflight-e-fontes.md), [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md), [validação](../_shared/04-validacao-e-retomada.md) e [contexto editorial](../_shared/05-contexto-editorial.md). Cada sequência pertence ao grupo **growth** e mantém ID, persona, canal, oferta, fontes e estado.

## Guia específico do grupo

Qualifique lista com `inboundfy-growth-prospeccao`. No passo 3, leia [entrega e cadência](references/entrega-e-cadencia.md). No passo 5, leia [respostas e métricas](references/respostas-e-metricas.md). Encaminhe reunião aceita e retorno comercial para `inboundfy-growth-revops`. Nutrição consentida e newsletter são outra finalidade; use `inboundfy-especialista-email` com brief próprio.

Pergunte: por que esta conta, por que esta função e por que agora? Qual observação permite falar do problema sem presumir uma dor pessoal? Quem responde quando houver interesse? Se a pesquisa só preencher nome e empresa, falta fundamento para a abertura.

## Template de sequência

```markdown
---
id: {{sequencia}}
skill: inboundfy-growth-email-frio
grupo: growth
estado: rascunho
entrada: {{lista qualificada e brief}}
fontes: [{{oferta}}, {{sinal com data}}]
persona: {{id}}
proxima_skill: inboundfy-growth-revops
---
- Segmento, função e exclusões: {{dados}}
- Finalidade e tratamento de dados: {{registro e responsável}}
- Remetente e assinatura: {{identidade verificável}}
- Meta comercial: {{respostas positivas ou reuniões realizadas}}
| Etapa | Dia útil relativo | Informação nova | Condição de envio |
| --- | --- | --- | --- |
| 1 | 0 | {{observação + hipótese + pedido}} | {{contato validado e elegível}} |
| 2 | {{intervalo}} | {{recurso ou demonstração}} | {{sem resposta nem recusa}} |
| 3 | {{intervalo}} | {{encerramento útil}} | {{sem resposta nem recusa}} |
## Mensagem 1
Assunto: {{objeto concreto}}
{{Sinal verificável. Hipótese proporcional. Oferta útil. Um pedido.}}
{{Assinatura, empresa e contato institucional}}
{{Saída simples}}
## Operação
- Limite por remetente e piloto: {{capacidade}}
- Parada e supressão: {{eventos}}
- Responsável, horário e SLA de resposta: {{dados}}
- Métricas, coorte e revisão: {{definições}}
- Pendências e próxima ação: {{pessoa, skill, arquivo}}
```

## Exemplo de sequência brasileira fictícia

A Lume Estoque, consultoria fictícia de Campinas, ajuda distribuidores a organizar reposição. A empresa fictícia Armazém Cedro anunciou nova unidade no seu site. A pesquisa simulada identificou a gerente de operações fictícia Bia Monteiro. Também localizou um e-mail profissional publicado no contato institucional. A sequência `0083`, estado `rascunho`, aponta para `acervo/0083-2026-11-15-reposicao/brief.md`, a lista qualificada do pacote e `.inboundfy/context/servicos.md`. Não há alegação de economia percentual.

Mensagem do dia útil 0, assunto “reposição da nova unidade”:

> Olá, Bia. O site da Armazém Cedro anunciou a unidade de Campinas. A abertura pode exigir uma revisão dos pontos de reposição entre as lojas. A Lume Estoque organiza esse cadastro com a equipe de operações. Posso enviar uma planilha de conferência com cinco campos para vocês avaliarem?
>
> Dora Reis | Lume Estoque | contato institucional da empresa
>
> Se preferir não receber novos contatos, responda “remover”.

Mensagem do dia útil 4, na mesma conversa real:

> Olá, Bia. A planilha separa saldo, prazo do fornecedor e consumo por unidade. Ela ajuda a enxergar quais campos ainda precisam ser preenchidos antes de definir a reposição. Posso encaminhar o modelo?
>
> Dora Reis | Lume Estoque | contato institucional da empresa
>
> Para encerrar os contatos, responda “remover”.

Mensagem do dia útil 10:

> Olá, Bia. Vou encerrar os contatos sobre a abertura da unidade. Se a revisão do cadastro entrar na pauta, posso enviar a planilha para a equipe de operações.
>
> Dora Reis | Lume Estoque | contato institucional da empresa
>
> Para não receber novos contatos comerciais, responda “remover”.

O envio planejado usa lista de 60 contatos do mesmo segmento, validados antes do piloto. A fonte de tratamento consta do registro interno e precisa ser confirmada pela responsável de privacidade. Não existe opt-in de WhatsApp; a sequência não migra para esse canal. O domínio e a caixa têm autenticação a conferir. Por isso, nenhuma mensagem recebe estado de enviada.

No exercício de leitura, 60 contatos únicos seriam tentados, dois retornariam falha permanente e 58 seriam aceitos pelo servidor de destino. Oito pessoas responderiam: quatro positivas, duas recusas, uma indicação e uma resposta “não agora”. A taxa de resposta humana seria 8/58 = 13,8%; a positiva seria 4/58 = 6,9%. Três reuniões agendadas e duas realizadas representariam 66,7% de comparecimento. Esses números são fictícios, não referências de mercado. Aceitação pelo servidor não comprova caixa de entrada.

A responsável fictícia Dora suspende toda cadência ao receber resposta. Recusas entram na supressão. A indicação exige conferir a nova pessoa antes de enviar. A taxa de falha permanente de 2/60 = 3,3% aciona revisão do piloto segundo a regra interna do exercício. Próxima ação: corrigir lista e autenticação; depois, entregar respostas positivas a `inboundfy-growth-revops` com o mesmo ID, assunto e contexto.

## Checklist antes da entrega

- [ ] Sinal e relação com a oferta estão registrados.
- [ ] A sequência oferece algo que a empresa consegue entregar.
- [ ] Assuntos, identidade e assinatura são verdadeiros.
- [ ] Cada contato posterior acrescenta informação.
- [ ] Recusa impede novo contato comercial conforme o alcance registrado.
- [ ] Remetente e lista têm conferência técnica.
- [ ] Existe uma pessoa para tratar respostas.
- [ ] O plano distingue rascunho, envio e resultado observado.

## Erros comuns na prospecção por e-mail

- Elogio genérico seguido de oferta: conecte a observação à tarefa da pessoa.
- “Re:” inventado: use assunto honesto e preserve apenas conversas reais.
- Mandar material não solicitado com anexos pesados: peça permissão para encaminhar recurso útil.
- Insistir após recusa: sincronize supressão entre remetentes.
- Medir abertura como interesse: use resposta humana, qualificação e reunião realizada.
- Atribuir problema financeiro à empresa sem fonte: formule hipótese sobre processo, sem alegação pessoal.
