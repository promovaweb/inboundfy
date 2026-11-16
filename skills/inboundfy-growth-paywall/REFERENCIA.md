# Referência de paywall e passagem ao acesso pago

## Escolha do momento de oferta

A tela deve explicar a relação entre a ação solicitada e o plano pago.
Uma pessoa que tenta adicionar um segundo projeto precisa conhecer o limite
e a alternativa. Uma mensagem genérica sobre todas as funções do produto
pode esconder a resposta imediata.

| Motivo | Exibição útil | Informação necessária | Alternativa |
| --- | --- | --- | --- |
| Recurso exclusivo | No pedido do recurso, com prévia honesta | O que muda no plano sugerido | Voltar à tarefa disponível |
| Limite de volume | Aviso antes do limite e explicação ao atingir | Uso atual, teto e regra de reinício | Continuar dentro da capacidade atual |
| Fim de trial | Lembrete compatível com a duração e tela de expiração | Data, cobrança e acesso posterior | Plano gratuito ou saída, conforme oferta |
| Uso recorrente | Convite discreto após marco pertinente | Benefício relacionado ao uso | Dispensar e manter plano |
| Conta sem poder de compra | Solicitação ao administrador | Plano pedido e custo previsto | Continuar no acesso atual |
| Aplicativo por assinatura | Após valor inicial pertinente ao modelo aprovado | Preço local, duração e gestão da assinatura | Fechar ou voltar conforme acesso contratado |

Não imponha uma regra universal de exibir apenas depois do onboarding: certos
produtos possuem acesso pago desde o início. Nesse caso, descreva claramente
o que é demonstração e o que exige compra. Não altere o modelo comercial
para acomodar uma preferência de tela.

Leia [Estados de acesso e cobrança](references/estados-de-acesso-e-cobranca.md)
nos passos 3 a 6 para transições, aceites e aferição.

## Apresentação do preço

| Elemento | Mostrar | Evitar |
| --- | --- | --- |
| Mensal | Total cobrado por mês e renovação | Divisão diária como único preço |
| Anual | Total anual e, se útil, equivalente mensal | Destacar mensal sem dizer cobrança anual |
| Limite | Quantidade, unidade e período | “Ilimitado” com teto não informado |
| Economia | Base comparável e cálculo | Desconto sem preço de referência |
| Trial | Duração, início da cobrança e condição | “Começar grátis” omitindo pagamento posterior |
| Upgrade no ciclo | Regra aprovada de diferença ou proporcionalidade | Inventar cobrança proporcional |
| Cancelamento | Caminho e efeito no acesso | Esconder condição em texto distante |

## Template de brief de paywall

```markdown
---
id: {{id}}
skill: inboundfy-growth-paywall
grupo: growth
tipo: brief-paywall
estado: rascunho
entrada: [{{produto ou acervo}}]
fontes: [{{oferta}}, {{planos}}, {{uso}}]
persona: {{id e papel na conta}}
canal: {{web ou aplicativo}}
oferta: {{id e versao}}
proxima_acao: {{responsavel e entrega}}
---
Plano atual e motivo: {{limite/recurso/fim de trial}}
Valor anterior: {{resultado real ou demonstração identificada}}
Elegibilidade: {{quem vê, quem não vê e por quê}}
Gatilho e frequência: {{evento, limite por sessão e supressão}}
Título: {{benefício ligado à tarefa}}
Texto de apoio: {{plano, recurso e limite}}
Preço: {{total, moeda, período e renovação}}
CTA principal: {{ação e destino}}
Alternativa: {{fechar, continuar ou consultar administrador}}
| Estado | Condição | Mensagem | Ação | Confirmação |
| --- | --- | --- | --- | --- |
| {{nome}} | {{evento}} | {{texto}} | {{destino}} | {{fonte}} |
Depois da compra: {{liberação, recibo e retorno à tarefa}}
Métricas: {{população elegível, evento, janela e acompanhamento}}
Pendências: {{condição comercial ou técnica ausente}}
Handoff: {{skill, arquivo, estado e ação}}
```

## Exemplo: mais projetos para um escritório de interiores

Empresa fictícia brasileira: a Prumo de Casa, de Vitória, oferece organização de
projetos para pequenos escritórios. O plano gratuito permite um projeto ativo;
o plano Estúdio permite dez, por R$ 89/mês ou R$ 890/ano. Esses valores são
dados sintéticos da oferta em `acervo/0315-upgrade/`.

A persona `persona-06` já organizou o primeiro projeto e tenta criar o
segundo. A tela aparece no pedido, preserva nome e descrição do rascunho
e informa: “Organize até 10 projetos ativos no plano Estúdio”.
Apoio: “Você está usando 1 de 1 projeto do plano gratuito. O Estúdio permite
adicionar este projeto e manter os anteriores ativos.”

Preço mensal: “R$ 89 por mês, com renovação mensal”.
Preço anual: “R$ 890 cobrados por ano, equivalente a R$ 74,17 por mês”.
Economia anual: 12 × 89 − 890 = R$ 178 contra 12 mensalidades, cerca de
16,7%. A equivalência mensal é arredondada; o total cobrado continua R$ 890.
A tela mantém mensal como escolha inicial neste exemplo, sem afirmar que
uma periodicidade é sempre superior.

CTA: “Contratar Estúdio”. Alternativa: “Continuar no plano gratuito”.
Link de apoio: “Consultar a responsável pela conta”, para quem não pode contratar.
Regra proposta: no máximo um convite espontâneo por sessão; recusa suprime
convites espontâneos por sete dias. Um novo pedido explícito de recurso pago
ainda mostra a condição daquele recurso.

| Estado | Texto proposto | Efeito |
| --- | --- | --- |
| Limite atingido | “Seu plano permite 1 projeto ativo.” | Mostrar oferta e retorno |
| Pix gerado | “O pagamento ainda não foi confirmado. Consulte o vencimento deste código.” | Manter plano atual e rascunho |
| Pagamento não confirmado | “Ainda não recebemos a confirmação. Confira o status antes de pagar novamente.” | Consultar status, sem duplicar compra |
| Confirmado, acesso em atualização | “Pagamento confirmado. Estamos atualizando seu acesso.” | Aguardar confirmação de acesso |
| Acesso liberado | “Seu plano Estúdio está ativo. Continue o segundo projeto.” | Retomar rascunho |
| Erro de cobrança | “Não foi possível concluir. Revise a forma de pagamento ou tente novamente.” | Preservar seleção e oferecer ajuda |

A operação aceita Pix avulso para a contratação anual no cenário fictício.
O brief não presume renovação automática por Pix: a condição de renovação vem
da oferta. Cartão, autenticação e autorização de compra seguem as capacidades
confirmadas da integração.

Coorte sintética: 200 contas elegíveis; 160 viram a tela; 40 abriram checkout;
24 tiveram pagamento confirmado e 23 receberam acesso sem intervenção.
Conversão por elegível = 12%; por exposto = 15%; checkout para pago = 60%.
A conta paga sem liberação exige correção operacional antes de novo experimento.
Na janela ilustrativa de 30 dias, dois pagamentos foram reembolsados.
Não somar receita contratada e receita recebida como se fossem o mesmo valor.

Saída: `acervo/0315-upgrade/brief-paywall.md`, ID 0315, grupo growth,
estado `revisao`, oferta e dados sintéticos registrados. Pendência:
confirmar como a integração retoma rascunho após liberação atrasada.
Próxima ação: equipe executora testar compra confirmada com acesso pendente.
Handoff para `inboundfy-rastreamento-conversao`: exposição, checkout,
pagamento confirmado, acesso liberado e reembolso, com variante e ID da oferta.
`inboundfy-growth-retencao` recebe o plano de leitura do uso em 30 dias.

## Checklist

- [ ] Limite atual e capacidade do plano estão corretos.
- [ ] A tela corresponde à tarefa que motivou a exibição.
- [ ] Total cobrado, período e renovação estão legíveis.
- [ ] Alternativa de recusa funciona e preserva o trabalho.
- [ ] Frequência e condição de reapresentação estão definidas.
- [ ] Pix pendente e pagamento confirmado têm estados distintos.
- [ ] Liberação de acesso foi descrita e testada como etapa própria.
- [ ] Reembolso e uso posterior acompanham conversão.

## Erros comuns

- Prometer perda de dados que a oferta não prevê: descreva a política real de acesso e conservação.
- Exibir upgrade para quem já pagou: conferir estado antes da mensagem.
- Abrir outra oferta ao fechar a primeira: respeitar a recusa e a frequência.
- Contar geração de Pix como receita: aguardar confirmação do recebedor.
- Declarar “mais escolhido” sem dado: usar recomendação por necessidade declarada.
- Medir apenas pago por checkout e ignorar quem deixou de entrar: acompanhar toda a população elegível.
- Tratar erro de liberação como rejeição comercial: separar operação e proposta.

## Guia específico do grupo

Growth conecta valor entregue, oferta, passagem ao pagamento e continuidade.
`inboundfy-growth-pricing` define preço e embalagem;
`inboundfy-growth-cro` audita a página pública;
`inboundfy-growth-retencao` trata cancelamento e recuperação.
A equipe técnica implementa controle de acesso e cobrança conforme o brief.

Confirme: qual tarefa o usuário tentava concluir? Quem pode contratar?
Qual estado autoriza liberar acesso? Consulte `ESTRATEGIA.md`, `CONTEXTO.md`
e `docs/method/05-artefatos-e-estados.md` para documentar o encaminhamento.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-growth-paywall**, do grupo
**growth**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).
