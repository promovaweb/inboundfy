# Pesquisa e proposta de preço

## Template de proposta

Preencha no passo 1. O documento preserva a oferta vigente até a confirmação da mudança.

```markdown
---
id: preco-{{oferta}}-{{rodada}}
skill: inboundfy-growth-pricing
grupo: growth
estado: rascunho
entrada: {{pedido e oferta atual}}
persona: {{id}}
fontes: [{{custos}}, {{pesquisa}}, {{contratos}}]
proxima_skill: inboundfy-contexto-oferta
---
Objetivo: {{margem, adesão, previsibilidade ou expansão}}
Preço vigente: {{R$, período, unidade e fonte}}
Segmento e alternativa: {{tarefa e substituto}}
Unidade proposta: {{unidade e relação com valor}}

| Plano | Público/tarefa | Recursos | Limite | Excedente | Suporte | Mensal | Anual total/cobrança |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{nome}} | {{perfil}} | {{inclui}} | {{quantidade}} | {{regra}} | {{canal/prazo}} | {{R$}} | {{R$ e forma}} |

## Cenários
| Cenário | Clientes | Receita líquida | Custo variável | Contribuição | Premissas |
| --- | --- | --- | --- | --- | --- |
| {{conservador/base/alto}} | {{n}} | {{R$}} | {{R$}} | {{R$}} | {{fontes e hipóteses}} |

Teste: {{coorte, exposição, preço, métrica, prazo e responsável}}
Migração: {{aviso, vigência, exceções e contratos preservados}}
Pendências: {{dados faltantes}}
Próxima ação: {{pessoa, arquivo, skill e data}}
```

## Escolha da unidade de cobrança

| Unidade | Adequada quando | Conferir | Falha provável |
| --- | --- | --- | --- |
| Mensalidade fixa | Uso e valor são relativamente estáveis | Margem por faixa de consumo | Poucos clientes intensivos absorvem a contribuição |
| Pessoa ou equipe | Acesso individual acompanha valor | Contas compartilhadas e funções gratuitas | Preço desencoraja adoção por mais colegas |
| Uso medido | Volume varia junto com valor | Medição, atraso e previsão de fatura | Conta imprevisível e contestação |
| Transação | A operação gera valor por operação | Base, devolução e estorno | Cobrança sobre evento não concluído |
| Módulo | Necessidades podem ser contratadas separadamente | Dependências entre módulos | Comparação confusa e recurso essencial ausente |
| Fixo mais excedente | Há custo de disponibilidade e consumo variável | Franquia, teto e aviso | Surpresa no excedente ou medição tardia |

O preço do concorrente ajuda a entender alternativas, mas não revela sua margem ou subsídios. Custos definem viabilidade; entrevistas e compras ajudam a entender valor e aceitação. Nenhuma dessas fontes, isolada, entrega um preço final universal.

## Exemplo de mudança brasileira

Caso fictício: a Balcão Organizado oferece gestão de encomendas a lojas de alimentação em Goiânia. O plano vigente custa R$ 120/mês, com até 200 pedidos. A pesquisa de `acervo/041-preco/` reúne oito entrevistas fictícias e coortes de consumo. A persona `cozinha-01` quer prever o gasto antes de aceitar encomendas de fim de semana.

A equipe rejeita cobrança por usuário porque cozinheiras e atendimento compartilham a mesma operação. Propõe dois planos por faixa de pedidos: Essencial, R$ 149 até 200 pedidos; Equipe, R$ 249 até 600, com relatórios adicionais. Não há excedente automático no teste: o cliente recebe aviso e escolhe mudar de plano antes de ultrapassar o limite.

Para 100 clientes Essencial, o cenário supõe R$ 14.900 de receita bruta. Impostos e taxas agregados são hipótese interna de 10%, resultando em R$ 13.410 líquidos. Custo variável de R$ 35 por cliente soma R$ 3.500. A contribuição seria R$ 9.910 antes dos custos fixos. Com 80 clientes, receita líquida seria R$ 10.728 e contribuição R$ 7.928. O cálculo mostra como perda de volume pode consumir parte do aumento nominal.

A cobrança anual proposta é R$ 1.490 à vista, equivalente a dez mensalidades de R$ 149. Comparada a R$ 1.788 em doze mensalidades, representa desconto de R$ 298, ou 16,7%. O preço equivalente mensal de R$ 124,17 aparece acompanhado de “R$ 1.490 cobrados à vista”. Parcelamento e Pix permanecem pendentes de validação comercial; nenhum benefício é anunciado antes dessa confirmação.

O teste inclui apenas novos compradores de uma coorte definida, com condições divulgadas de forma consistente. A equipe observa contratação paga, contribuição por comprador elegível, suporte e permanência em 60 dias. As entrevistas sugerem aceitação, mas não preveem a taxa de compra. O grupo de 100 clientes atuais mantém a condição contratada até existir um plano de transição aprovado.

A saída `precos-cozinha-041.md` fica em `revisao`. O responsável fictício Tiago Vale confirma custos, forma anual e regra de limite. `inboundfy-contexto-oferta` recebe a proposta após confirmação; `inboundfy-growth-paywall` recebe somente a tabela aprovada. Os números são didáticos e não representam média de mercado.

## Métricas e leitura

- Receita média por conta = receita recorrente / contas pagantes, no mesmo período.
- Contribuição = receita líquida menos custo variável de atender a coorte.
- Conversão paga = novas contas pagantes / compradores elegíveis expostos ao teste.
- Receita por comprador elegível = receita da coorte / expostos elegíveis, com janela explícita.
- Retenção líquida de receita usa a mesma base inicial, perdas, reduções e expansão, sem somar novos clientes à base retida.

Não escolha pelo preço que gera mais cliques no botão. Confirme compra, margem e continuidade. Referências setoriais exigem fonte primária, amostra, segmento e definição compatível; na ausência, use linha de base local e cenários.

## Checklist da proposta

- [ ] A unidade cresce de modo compreensível com o uso ou valor.
- [ ] Recursos, suporte, limites e excedente estão completos.
- [ ] Preço mensal e anual comparam o mesmo período.
- [ ] A simulação separa receita bruta, líquida, contribuição e fixos.
- [ ] Mudança de volume aparece nos cenários.
- [ ] Clientes atuais têm tratamento definido separadamente.
- [ ] O teste mede compra e permanência, com prazo e responsável.

## Erros comuns

- Copiar o plano do concorrente sem conhecer o custo: simular margem própria.
- Chamar interseção de pesquisa de preço ideal comprovado: tratá-la como candidato a teste.
- Mostrar equivalente mensal sem total anual: exibir valor efetivamente cobrado.
- Oferecer desconto permanente para objeção de utilidade: pesquisar a necessidade antes do incentivo.
- Alterar plano sem revisar limite técnico: conferir cobrança, interface e atendimento.

## Arquitetura aplicada

Use [fontes](../_shared/01-preflight-e-fontes.md) para separar custos confirmados de hipóteses, [artefato](../_shared/02-contrato-de-artefato.md) para versionar tabela, [handoff](../_shared/03-interacao-e-handoff.md) para registrar a confirmação comercial, [retomada](../_shared/04-validacao-e-retomada.md) para preservar contratos e [contexto editorial](../_shared/05-contexto-editorial.md) para revisar condições públicas.

## Guia específico do grupo

Growth liga objetivo, público, canal, oferta e próxima ação. Esta skill propõe condições e teste; `inboundfy-contexto-oferta` mantém o dado canônico confirmado. `inboundfy-growth-paywall` aplica a oferta dentro do produto e `inboundfy-growth-retencao` acompanha permanência e redução de plano.

## Leitura por etapa

No passo 2, leia [pesquisa e transição](references/pesquisa-e-transicao.md) para preparar entrevistas e mudança de condições. Consulte `ESTRATEGIA.md`, `CONTEXTO.md` e `docs/method/05-artefatos-e-estados.md` ao preparar o handoff.
