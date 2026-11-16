# Referência de experimentação

Material de apoio da skill `inboundfy-experimentacao`. Os arquivos de
`references/` aprofundam cada etapa e são lidos no passo indicado.

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/desenho-e-hipotese.md](references/desenho-e-hipotese.md) | Passos 2 a 4 | Tipo de teste, onde está o maior efeito, hipótese, métricas, ICE |
| [references/amostra-e-duracao.md](references/amostra-e-duracao.md) | Passo 5 | Fórmula, tabela de amostra, duração, pouco tráfego, espiar o painel |
| [references/leitura-de-resultado.md](references/leitura-de-resultado.md) | Passo 9 | Ordem de conferência, interpretação, fórmulas, vocabulário |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-experimentacao**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Nesta skill, isso significa:

- todo número do plano vem de dado real com período (taxa base, volume
  diário); sem dado, a skill pede ou aciona `inboundfy-metricas`;
- a persona do teste aparece no plano porque a variante fala com ela;
- o canal define a unidade de amostra (visitante em página, contato em email,
  conversa em WhatsApp);
- o campo `estado_teste` acompanha o ciclo: `planejado`, `rodando`,
  `concluido` ou `cancelado`;
- a próxima ação nomeia quem instrumenta, quem produz a variante e quem
  aprova a leitura.

### Testes por canal

| Canal | Unidade | Métrica principal típica | Cuidado próprio |
| --- | --- | --- | --- |
| Página e landing page | Visitante | Taxa de envio do formulário ou pedido | Consentimento de cookies (LGPD) reduz a amostra medida |
| Email e newsletter | Contato sorteado | Clique por envio | Abertura distorcida por proteção de privacidade dos clientes de email |
| WhatsApp (mensagem ativa) | Contato | Resposta ou pedido em 48 h | Respeitar opt-in e limites de envio da plataforma |
| Anúncio | Impressão ou usuário | Custo por lead qualificado | Algoritmo da plataforma não divide igual; use o recurso de teste nativo |
| Checkout | Sessão de compra | Pedidos pagos por visitante | Separar pedido criado de Pix pago |

## Template de plano e leitura

```markdown
---
id: exp-{{AAAA-MM-DD}}-{{slug}}
skill: inboundfy-experimentacao
tipo: experimento
estado: rascunho
estado_teste: planejado
criado_em: {{AAAA-MM-DD}}
atualizado_em: {{AAAA-MM-DD}}
entrada:
  - {{caminho da peça ou URL}}
personas:
  - {{persona}}
fontes:
  - {{relatório de analytics com período}}
proxima_acao: {{quem faz o quê}}
---

# Experimento: {{nome curto}}

## Observação de origem

{{Dado, fala ou gravação que motivou o teste, com fonte e data.}}

## Hipótese

Porque observamos {{X}}, acreditamos que {{Y}} fará {{Z}} para
{{persona}}, medido por {{métrica}} em {{janela}}.

## Desenho

| Campo | Valor |
| --- | --- |
| Tipo | {{A/B, A/B/n, URL dividida, antes e depois}} |
| Controle | {{descrição da versão atual}} |
| Variante B | {{uma mudança principal}} |
| Divisão | {{50/50}} |
| Público elegível | {{quem entra no teste}} |
| Persistência | {{cookie, ID de usuário, lista sorteada}} |
| Ferramenta | {{registrada em ferramentas.md}} |

## Métricas

| Papel | Métrica | Linha de base | Limite ou meta |
| --- | --- | --- | --- |
| Principal | {{métrica}} | {{taxa e período}} | MDE {{%}} |
| Apoio | {{métrica}} | {{valor}} | observação |
| Proteção | {{métrica}} | {{valor}} | não piorar mais que {{limite}} |

## Amostra e janela

- Taxa base: {{%}}; MDE: {{%}}; alfa 5%; poder 80%.
- Amostra por variante: {{n}}.
- Visitantes elegíveis por dia: {{v}}.
- Duração: {{semanas cheias}}, de {{data}} a {{data}}.
- Regra de parada: {{data da leitura final ou plano sequencial}}.
- Segmentos pré-registrados: {{lista}}.

## Checklist de lançamento

- [ ] Eventos da métrica principal e de proteção chegando nas duas variantes.
- [ ] Variante conferida em celular e desktop.
- [ ] Persistência testada em segunda visita.
- [ ] Equipe interna excluída do público.
- [ ] Nenhum outro teste na mesma página ou lista.

## Diário da janela

| Data | Ocorrência | Efeito possível |
| --- | --- | --- |
| {{data}} | {{campanha, queda do site, mudança de preço}} | {{leitura}} |

## Resultado

| Variante | Visitantes | Conversões | Taxa |
| --- | --- | --- | --- |
| A (controle) | {{n}} | {{c}} | {{%}} |
| B | {{n}} | {{c}} | {{%}} |

- Divisão real: {{%/%}}.
- Diferença relativa: {{%}} (IC 95%: {{faixa}}); p = {{valor}}.
- Proteção: {{valores}}.
- Segmentos: {{leitura}}.
- Impacto estimado: {{R$ ou leads por mês}}.

## Conclusão e ação

{{Implantar, descartar ou retestar, com justificativa e responsável.}}

## Aprendizado

{{O que muda na próxima hipótese; alcance confirmado ou pendente.}}
```

### Template de backlog

```markdown
| ID | Ideia | Observação de origem | I | C | F | ICE | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{id}} | {{ideia}} | {{fonte}} | {{1-10}} | {{1-10}} | {{1-10}} | {{média}} | {{fila, rodando, concluído}} |
```

## Exemplo completo

Dados fictícios, só para ilustrar o resultado esperado. Não vira contexto do
projeto.

**Empresa:** Chás Serra Verde, loja virtual de chás e ervas de Poços de
Caldas (MG). Persona `persona-01`: Marina, 38 anos, compra pelo celular
para a família e compara frete e forma de pagamento antes de fechar.

**Observação:** o atendimento pelo WhatsApp recebeu 64 perguntas em agosto
sobre "tem desconto no Pix?". O checkout mostra o desconto de 5% no Pix só
depois que a pessoa escolhe a forma de pagamento.

```markdown
---
id: exp-2026-09-02-pix-no-carrinho
skill: inboundfy-experimentacao
tipo: experimento
estado: aprovado
estado_teste: concluido
criado_em: 2026-09-02
atualizado_em: 2026-10-07
entrada:
  - loja/carrinho
personas:
  - persona-01
fontes:
  - relatório de checkout, 01/06 a 31/08/2026
  - registro de atendimento do WhatsApp, agosto de 2026
proxima_acao: equipe da loja implanta a variante B para 100% até 10/10
---

# Experimento: preço no Pix visível no carrinho

## Observação de origem

64 perguntas sobre desconto no Pix pelo WhatsApp em agosto de 2026. A taxa
de pedido pago por visitante do carrinho foi 3,5% entre junho e agosto.

## Hipótese

Porque observamos dúvidas repetidas sobre desconto no Pix, acreditamos que
mostrar o preço com 5% de desconto no Pix ao lado do total do carrinho fará
mais pessoas concluírem a compra para a persona-01, medido por pedidos pagos
por visitante do carrinho em 4 semanas.

## Desenho

| Campo | Valor |
| --- | --- |
| Tipo | A/B |
| Controle | Total do carrinho sem menção ao Pix |
| Variante B | Linha "R$ X no Pix (5% off)" abaixo do total |
| Divisão | 50/50 |
| Público elegível | Visitantes do carrinho que aceitaram cookies de análise |
| Persistência | Cookie de 30 dias |
| Ferramenta | Ferramenta de testes registrada em ferramentas.md |

## Métricas

| Papel | Métrica | Linha de base | Limite ou meta |
| --- | --- | --- | --- |
| Principal | Pedidos pagos por visitante do carrinho | 3,5% | MDE 15% |
| Apoio | Escolha de Pix como forma de pagamento | 41% dos pedidos | observação |
| Proteção | Pedidos com Pix expirado sem pagamento | 7,8% | não subir mais de 3 pontos |
| Proteção | Ticket médio | R$ 128 | não cair mais de 6% |

## Amostra e janela

- Taxa base 3,5%; MDE 15%; alfa 5%; poder 80%.
- Amostra por variante: cerca de 19.600 visitantes.
- Visitantes elegíveis por dia: cerca de 1.400.
- Duração: 4 semanas cheias, de 08/09 a 05/10/2026.
- Regra de parada: leitura única em 06/10/2026.
- Segmentos pré-registrados: celular e desktop.

## Diário da janela

| Data | Ocorrência | Efeito possível |
| --- | --- | --- |
| 19/09 | Newsletter de primavera para a base | Pico de tráfego nas duas variantes, sem viés de divisão |

## Resultado

| Variante | Visitantes | Pedidos pagos | Taxa |
| --- | --- | --- | --- |
| A (controle) | 19.880 | 696 | 3,50% |
| B | 19.750 | 810 | 4,10% |

- Divisão real: 50,2% e 49,8%, dentro do esperado.
- Diferença relativa: +17,1% (IC 95%: +6,4% a +27,9%); z = 3,12; p ≈ 0,002.
- Pix expirado: 7,8% no controle, 9,1% na variante, dentro do limite.
- Ticket médio: R$ 128 no controle, R$ 124 na variante (queda de 3,1%,
  dentro do limite; efeito esperado do desconto).
- Celular: +21%; desktop: +6% sem significância (amostra de desktop menor).
- Receita por visitante: R$ 4,48 no controle e R$ 5,09 na variante. Com
  42 mil visitantes de carrinho por mês, a estimativa é de cerca de
  R$ 25 mil a mais por mês.

## Conclusão e ação

Implantar a variante B para todos. Hipótese confirmada, proteções dentro dos
limites. O resultado no desktop fica como pergunta aberta.

## Aprendizado

Informação de pagamento antes da escolha reduz dúvida da persona-01 no
celular. Alcance proposto: páginas de produto e carrinho. Pendente de
confirmação do usuário antes de ir para `inboundfy-aprendizado`.
```

Handoff gerado: `inboundfy-rastreamento-conversao` conferiu os eventos antes
do início; `inboundfy-growth-cro` recebe a próxima hipótese (preço no Pix na
página de produto).

## Checklist

- [ ] A hipótese cita uma observação com fonte e data.
- [ ] Cada variante tem uma mudança principal descrita.
- [ ] Existe exatamente uma métrica principal.
- [ ] Existe pelo menos uma métrica de proteção com limite numérico.
- [ ] A taxa base vem de dado real com período informado.
- [ ] A amostra e a duração foram calculadas e cabem em até 8 semanas.
- [ ] A duração cobre semanas cheias.
- [ ] A regra de parada foi escrita antes do início.
- [ ] Os segmentos foram pré-registrados.
- [ ] A copy da variante passou por voz, proibições e `inboundfy-copy-editor`.
- [ ] A leitura confere a divisão real antes da conversão.
- [ ] A conclusão informa intervalo de confiança e impacto em R$ ou leads.
- [ ] O aprendizado tem alcance confirmado ou marcado como pendente.

## Erros comuns

- **Parar no primeiro dia bom.** Espiar e encerrar quando o p cai abaixo de
  0,05 produz falso vencedor. Fixe a data da leitura.
- **Testar cor de botão com 300 visitas por semana.** A amostra nunca chega.
  Em volume baixo, teste oferta ou proposta de valor.
- **Mudar várias coisas na variante e atribuir o ganho a uma delas.** Ou
  declare o teste como "pacote", ou separe em testes.
- **Medir receita do trimestre num teste de assunto de email.** A métrica
  fica longe demais da mudança. Meça clique e acompanhe o funil depois.
- **Ignorar o consentimento de cookies.** Pela LGPD, só quem aceitou entra na
  medição. Registre a proporção e não compare com totais do servidor.
- **Contar pedido criado como venda.** Em Pix, pedido criado e não pago
  infla a conversão. Use pedido pago.
- **Descobrir um segmento vencedor depois.** Com muitos cortes, algum ganha
  por acaso. Trate como nova hipótese.
- **Esconder teste perdedor.** Hipótese refutada evita repetir a ideia e
  entra no registro com o mesmo cuidado.
- **Rodar dois testes na mesma página.** As variantes se cruzam e nenhum
  resultado fica limpo.
