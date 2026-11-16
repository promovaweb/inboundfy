# Referência de métricas

Material de trabalho do fluxo descrito em [SKILL.md](SKILL.md). O template e
o exemplo cobrem o plano inteiro. Os arquivos de `references/` aprofundam
os passos indicados.

## Leituras por passo do fluxo

| Passo | Arquivo | Para quê |
| --- | --- | --- |
| 1 e 2 | [plano-de-medicao.md](references/plano-de-medicao.md) | Transformar escolhas recorrentes em perguntas, métricas e metas, com referências de mercado. |
| 3 | [dicionario-de-eventos.md](references/dicionario-de-eventos.md) | Nomear eventos e propriedades por tipo de negócio e preparar o handoff de implementação. |
| 4 e 9 | [utm-e-leitura.md](references/utm-e-leitura.md) | Padronizar UTMs, tratar WhatsApp e assistentes de IA e ler o painel sem erro de base. |

## Árvore de métricas

Toda métrica pertence a uma camada. A camada diz se o número é resultado,
sinal intermediário ou sinal de saúde.

| Camada | Pergunta | Exemplos |
| --- | --- | --- |
| Resultado | O negócio ganhou dinheiro ou cliente? | Receita de pedidos pagos, contratos assinados, MRR, clientes ativos |
| Conversão | Quantas pessoas passaram para a etapa seguinte? | Lead qualificado, pedido iniciado, Pix gerado, demonstração agendada |
| Interação | O conteúdo e a oferta prenderam atenção? | Rolagem de 75%, clique no CTA, vídeo assistido até a metade |
| Alcance | Quantas pessoas certas viram? | Usuários novos da persona, impressões em busca, alcance orgânico |
| Qualidade | O resultado se sustenta? | Reembolso, churn em 90 dias, inadimplência de boleto, CAC por canal |

Uma métrica sem camada ou sem pergunta associada sai do plano.

## Template do plano de medição

```markdown
---
id: met-{{AAAA-MM}}-plano
skill: inboundfy-metricas
estado: rascunho
versao_plano: {{n}}
atualizado_em: {{AAAA-MM-DD}}
fontes:
  - .inboundfy/context/empresa.md
  - .inboundfy/context/ofertas.md
  - {{exportação de eventos atual}}
proxima_skill: inboundfy-rastreamento-conversao
---

# Plano de medição de {{projeto}}

## Perguntas de negócio

| # | Pergunta | Escolha que depende dela | Frequência |
| --- | --- | --- | --- |
| P1 | {{pergunta}} | {{escolha}} | {{semanal / mensal}} |

## Métricas

| Métrica | Camada | Pergunta | Fórmula | Fonte | Responsável | Meta |
| --- | --- | --- | --- | --- | --- | --- |
| {{nome}} | {{camada}} | P{{n}} | {{numerador / denominador}} | {{ferramenta}} | {{pessoa ou papel}} | {{valor e prazo}} |

## Eventos

Ver `.inboundfy/metricas/eventos.md`.

## Padrão de UTMs

{{regras de source, medium, campaign, content e term}}

## Painel lógico

| Bloco | Métricas | Corte | Ação quando cair |
| --- | --- | --- | --- |
| {{bloco}} | {{métricas}} | {{canal, persona, oferta}} | {{ação}} |

## Limites conhecidos

- {{limite e tamanho estimado}}

## Histórico de mudanças

| Data | Mudança | Motivo |
| --- | --- | --- |
```

## Exemplo completo (empresa fictícia)

**Horta Viva** é uma loja virtual fictícia de Curitiba que vende kits de
horta para apartamento. O ticket médio é R$ 189. O pagamento acontece por
Pix, com 5% de desconto, ou por cartão em até três vezes. A loja publica
artigos no blog, Reels no Instagram e uma newsletter quinzenal e responde
dúvidas pelo WhatsApp. O dono quer saber se o conteúdo vende e onde o
funil perde gente.

### Perguntas de negócio

| # | Pergunta | Escolha que depende dela | Frequência |
| --- | --- | --- | --- |
| P1 | Quanto entrou de receita paga no mês e de quais canais? | Divisão do orçamento entre anúncio e conteúdo | Mensal |
| P2 | Em qual etapa do funil a loja perde mais pedidos? | Prioridade de melhoria no site ou no checkout | Semanal |
| P3 | Quais artigos e Reels trazem visitantes que compram em até 30 dias? | Pauta do mês seguinte | Mensal |
| P4 | Quem compra uma vez volta a comprar refil de sementes? | Criação de assinatura | Mensal |

### Métricas escolhidas

| Métrica | Camada | Pergunta | Fórmula | Fonte | Meta |
| --- | --- | --- | --- | --- | --- |
| Receita paga | Resultado | P1 | soma de pedidos com status pago | Plataforma da loja | R$ 85.000/mês até março |
| Taxa de conversão da loja | Conversão | P2 | pedidos pagos / sessões | GA4 e loja | de 1,1% para 1,5% |
| Pix pago sobre Pix gerado | Conversão | P2 | `purchase` com método Pix / `pix_gerado` | Loja (webhook) | de 62% para 78% |
| Compradores em 30 dias por peça | Interação | P3 | compradores com primeira origem na peça / usuários novos da peça | GA4 com UTM e código de peça | linha de base em dezembro |
| Recompra em 90 dias | Qualidade | P4 | clientes com 2 ou mais pedidos / clientes do mês de origem | Loja | linha de base em janeiro |

### Leitura de outubro de 2026

O funil de outubro, com base em 41.200 sessões:

| Etapa | Evento | Pessoas | Passagem |
| --- | --- | ---: | ---: |
| Viu produto | `view_item` | 12.360 | 30,0% das sessões |
| Adicionou ao carrinho | `add_to_cart` | 1.854 | 15,0% de quem viu |
| Iniciou checkout | `begin_checkout` | 1.020 | 55,0% de quem adicionou |
| Gerou Pix ou informou cartão | `pix_gerado` + `add_payment_info` | 790 | 77,5% de quem iniciou |
| Pagou | `purchase` | 453 | 57,3% de quem gerou pagamento |

Receita paga: 453 pedidos × R$ 189 = R$ 85.617 de faturamento bruto, que o
relatório arredonda para R$ 85,6 mil. A maior perda está no fim: dos 610
Pix gerados, só 378 foram pagos (62%). Cartão teve 75 pagos de 180 tentativas,
o que pede conferência no gateway antes de qualquer conclusão.

A leitura recomenda duas ações. Primeiro, ativar lembrete pelo WhatsApp 30
minutos depois do Pix gerado e não pago, com o código copia e cola de novo.
Segundo, enviar a `inboundfy-rastreamento-conversao` a tarefa de conferir
se `add_payment_info` dispara uma vez por tentativa de cartão, porque a
taxa de 42% destoa do histórico de 70%.

### Peças com compra em 30 dias (P3)

| Peça | Código | Usuários novos | Compradores em 30 dias | Taxa |
| --- | --- | ---: | ---: | ---: |
| Artigo "Horta em varanda sem sol" | B12 | 3.900 | 47 | 1,2% |
| Reels "Manjericão que não morre" | R31 | 8.100 | 32 | 0,4% |
| Newsletter 14 | N14 | 1.150 | 29 | 2,5% |

O Reels traz mais gente, mas o artigo e a newsletter trazem mais compradores
por visitante. A pauta de novembro ganha mais dois artigos de problema
específico.

## Checklist

- [ ] Cada métrica responde a uma pergunta escrita e ligada a uma escolha.
- [ ] Cada métrica tem camada, fórmula, fonte, responsável e meta.
- [ ] Toda taxa mostra numerador e denominador.
- [ ] A conversão principal é conferida com o sistema que registra o dinheiro.
- [ ] Eventos seguem `objeto_acao`, em minúsculas e sem acento.
- [ ] Eventos existentes foram preservados ou têm período de transição.
- [ ] O padrão de UTMs está escrito e cobre WhatsApp, email e parcerias.
- [ ] Nenhuma propriedade de evento ou URL carrega email, telefone ou CPF.
- [ ] Os limites conhecidos estão registrados com tamanho estimado.
- [ ] O dicionário de eventos foi entregue a `inboundfy-rastreamento-conversao`.

## Erros comuns

- **Começar pelo painel.** Um painel montado antes das perguntas vira
  coleção de gráficos. Escreva as perguntas, depois escolha as métricas.
- **Taxa sem base.** "Conversão subiu 40%" pode ser de 5 para 7 pedidos.
  Mostre sempre os números absolutos ao lado da taxa.
- **Contar Pix gerado como venda.** Pix gerado é intenção. A venda é o
  pagamento confirmado pelo webhook do banco ou do gateway.
- **Confiar na taxa de abertura de email.** A proteção de privacidade dos
  clientes de email da Apple abre mensagens automaticamente. Prefira clique
  e receita por envio.
- **Comparar janelas diferentes.** Usuários de 7 dias contra compras de 30
  dias geram taxa sem sentido. Alinhe as janelas antes de dividir.
- **Criar um evento por botão.** `clique_botao_azul_home` não escala. Use um
  evento `cta_clicado` com propriedades de local e texto.
- **Renomear evento sem transição.** A série histórica quebra e o mês
  seguinte parece uma queda.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-metricas**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Em métricas, o campo **persona** entra como corte do painel quando a
ferramenta permite identificar o perfil (pela oferta escolhida, pela página
de entrada ou por campo do formulário). O campo **canal** usa os mesmos
nomes do padrão de UTMs. O campo **próxima ação** segue esta tabela:

| Resultado do trabalho | Skill que recebe |
| --- | --- |
| Dicionário de eventos novo ou alterado | `inboundfy-rastreamento-conversao` |
| Divergência de crédito entre plataformas | `inboundfy-atribuicao` |
| Etapa do funil com queda e hipótese de causa | `inboundfy-growth-cro` ou `inboundfy-experimentacao` |
| Peças com bom resultado pedindo continuidade | `inboundfy-estrategia` |
| Métrica de retenção abaixo da meta | `inboundfy-growth-retencao` |
