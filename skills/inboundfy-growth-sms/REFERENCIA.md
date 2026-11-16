# SMS e WhatsApp com permissão e custo controlado

## Arquitetura aplicada

Use os contratos de [fontes](../_shared/01-preflight-e-fontes.md), [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md), [validação](../_shared/04-validacao-e-retomada.md) e [contexto editorial](../_shared/05-contexto-editorial.md). O grupo é **growth**. O fluxo preserva relação com oferta, campanha, persona, canal e próxima ação.

## Guia específico do grupo

Leia [permissões e canais](references/permissoes-e-canais.md) no passo 2 e [fluxos, custos e métricas](references/fluxos-custos-e-metricas.md) no passo 4. Captura de contato segue para `inboundfy-growth-popups`; reativação segue para `inboundfy-growth-retencao`; acompanhamento comercial segue para `inboundfy-growth-revops`; conteúdo longo segue para `inboundfy-especialista-email`. Medição adicional usa `inboundfy-metricas`.

Pergunte: a pessoa pediu esta comunicação? Qual canal ela aceitou? O assunto precisa chegar agora? Existe equipe para responder? O sistema sabe que a compra já foi paga? A mensagem ainda seria útil depois da espera? Essas respostas definem a elegibilidade e o tempo do fluxo.

## Template de fluxo de mensagem

```markdown
---
id: {{fluxo}}
skill: inboundfy-growth-sms
grupo: growth
estado: rascunho
entrada: {{campanha ou evento}}
fontes: [{{oferta}}, {{permissao}}, {{tabela de custos}}]
persona: {{id}}
proxima_skill: {{skill responsavel pela proxima acao}}
---
- Objetivo, oferta, finalidade e canal: {{dados}}
- Permissão: {{origem, texto/versão, data, canal e finalidade}}
- Entrada, espera e expiração: {{eventos e tempos}}
- Elegibilidade antes do envio: {{permissão ativa, sem compra e sem supressão}}
- Horário local e frequência acumulada: {{regra do projeto}}
- Modelo/versão/categoria/janela: {{WhatsApp, se aplicável}}
- Texto final com variáveis: {{mensagem}}
- CTA, link e descadastro real: {{ações}}
- Codificação e segmentos: {{SMS, se aplicável}}
- Custo por envio e teto total: {{R$, data e fonte}}
- Resposta humana e fallback: {{responsável e condições}}
- Saídas: {{compra, resposta, recusa, expiração e falha}}
- Métricas e comparação: {{definições, controle e janela}}
- Testes, pendências e próxima ação: {{registros}}
```

## Exemplo de operação brasileira fictícia

A Cesto do Sul, loja fictícia de utilidades de Porto Alegre, recebe pedidos com Pix e oferece atendimento por WhatsApp. A campanha `0085` quer ajudar pessoas que iniciaram checkout e aceitaram lembretes promocionais. As fontes simuladas são `.inboundfy/context/ofertas.md`, `.inboundfy/context/canais.md`, o registro de opt-in e o brief `acervo/0085-2026-11-15-checkout/brief.md`. A persona-03 é compradora recorrente. O estado é `rascunho` porque aprovação do modelo e preço do provedor ainda precisam de conferência.

A captura fictícia apresenta opção desmarcada: “Quero receber pelo WhatsApp lembretes de checkout e ofertas da Cesto do Sul, até duas vezes por mês. Posso sair a qualquer momento.” Outra opção independente permite SMS. O registro guarda texto, versão, número, finalidade, canal e data. Uma compra sem marcação não entra na campanha.

O fluxo espera duas horas após a saída do checkout. Antes do envio, confere pedido pago, permissão ativa, frequência acumulada e fuso. A política interna fictícia permite promoção apenas entre 9h e 18h em dias úteis no horário do destinatário, até duas por mês entre todas as campanhas. Não é uma regra legal universal. Sem mensagem anterior do usuário, usa modelo promocional submetido à aprovação.

Texto candidato de WhatsApp:

> Cesto do Sul: você pode retomar seu checkout pelo botão abaixo. Se precisar de ajuda com o pedido ou o Pix, responda aqui. Para parar os lembretes e ofertas, toque em Sair.

Botões planejados: “Retomar checkout”, “Preciso de ajuda” e “Sair”. Link usa domínio próprio fictício e token sem dados pessoais na URL. O fluxo não afirma reserva de estoque nem validade de desconto inexistente. Pagamento confirmado encerra o lembrete. Resposta leva ao atendimento e suspende os contatos automáticos. Recusa remove a pessoa das promoções. Webhook duplicado não cria segundo envio.

O SMS alternativo, exclusivo para quem aceitou SMS, é: “Cesto do Sul: retome seu pedido em cesto.example/p/abc. Ajuda: cesto.example/ajuda. Sair: cesto.example/sair”. A prévia deve conferir a codificação após substituir o token. O domínio `.example` identifica endereço fictício; nenhum link serve para envio real. Não há fallback automático de WhatsApp para SMS sem opt-in específico.

Na simulação, 500 pessoas elegíveis são sorteadas: 250 recebem o lembrete e 250 ficam no controle. No grupo de envio, 240 mensagens são entregues, 36 pessoas clicam, 24 compram e seis saem das promoções. O controle gera 15 compras na mesma janela de sete dias. Compra por pessoa alocada: 24/250 = 9,6% contra 15/250 = 6,0%, diferença observada de 3,6 pontos percentuais. A amostra é pequena e não sustenta promessa de repetição.

Com custo hipotético de R$ 0,30 por mensagem entregue, a despesa variável seria R$ 72. Receita atribuída bruta a 24 pedidos de R$ 180 seria R$ 4.320; isso não equivale a incremento. As nove compras adicionais observadas produziriam R$ 1.620 de receita bruta diferencial. A margem hipotética de 35% gera R$ 567 antes da mensageria, ou R$ 495 após os R$ 72, ainda sem deduzir equipe e plataforma. A análise conserva incerteza da amostra e devoluções pendentes.

Próxima ação: a responsável fictícia Mara Fontes confere modelo, preço, saída e teste de pagamento antes de pedir ativação. `inboundfy-growth-revops` recebe a regra de encaminhar “Preciso de ajuda” com pedido e contexto mínimo, sem exigir nova triagem.

## Checklist de prontidão

- [ ] O registro de opt-in cobre a finalidade e o canal.
- [ ] Recusa funciona na prática e propaga para a fila.
- [ ] Marca, CTA e ajuda são identificáveis.
- [ ] Frequência soma as campanhas concorrentes.
- [ ] Variáveis foram testadas com seus maiores valores esperados.
- [ ] Janela e modelo do WhatsApp foram conferidos na data.
- [ ] Compra e repetição de evento foram simuladas.
- [ ] Custos, controle e limitações da medição estão explícitos.

## Erros comuns em SMS e WhatsApp

- Usar base de telefone como permissão: confira finalidade e canal aceitos.
- Acrescentar promoção a aviso de pedido e tratá-lo como serviço: reclassifique e confira o modelo.
- Contar texto sem substituir variáveis: teste nome, link e caracteres reais.
- Prometer suporte imediato fora do horário: informe prazo atendível.
- Enviar chave Pix ou dado sensível em massa: conduza ao ambiente autenticado do pedido.
- Somar receita atribuída como receita adicional: compare grupo de controle e margem.
