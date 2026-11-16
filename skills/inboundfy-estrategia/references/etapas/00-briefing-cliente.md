# Etapa 00: briefing do cliente

Ponto de entrada de uma campanha nova. Traduz a conversa de kickoff (com
cliente externo ou com o dono do negócio) num documento formal de objetivo e
condição de sucesso. Esta etapa decide por que a campanha existe e como medir
sucesso. Canal, tema, cadência e peça ficam para as etapas 02 e 03.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/empresa.md` e, em agência com várias marcas, `context/enderecos.md`,
  para identificar a marca correta.
- `context/publico.md`, para associar a campanha a uma persona registrada ou
  sinalizar persona nova via `inboundfy-contexto-publico`.
- `context/ofertas.md`, quando o objetivo envolver produto ou plano
  específico.
- `context/campanhas.md`, para conferir se já existe campanha com o mesmo
  objetivo.

## Entrada esperada

Conversa de kickoff, brief informal recebido do cliente ou diretriz direta da
pessoa sobre uma campanha nova.

## Fluxo

1. Pergunte e registre o objetivo de negócio como resultado, não como
   atividade: "gerar 200 testes", nunca "criar conteúdo sobre o produto".
2. Defina o KPI com meta numérica e prazo. Quando o objetivo vier vago, use a
   tabela de tradução abaixo.
3. Confira a meta com o histórico disponível. Meta acima de três vezes o
   melhor resultado anterior vira pergunta explícita para a pessoa.
4. Confirme a persona prioritária em `context/publico.md`. Se não existir,
   pare e acione `inboundfy-contexto-publico`.
5. Registre orçamento de mídia paga, período e recursos de produção.
6. Liste restrições desta campanha além de `context/proibicoes.md` (por
   exemplo, não citar um concorrente nesta campanha, mesmo que outras
   permitam).
7. Salve o brief em `<pacote-de-campanha>/00-briefing/brief-cliente.md` no
   modelo abaixo.
8. Apresente para aprovação. Só depois da aprovação acione
   `inboundfy-contexto-operacao` para registrar a campanha em
   `context/campanhas.md` com status "em planejamento" e siga para a etapa
   01 ou 02.

## Roteiro de entrevista

1. Se a campanha der certo, o que muda no negócio em números: vendas, testes,
   leads, retenção, redução de cancelamento?
2. Qual é o valor-alvo e até quando?
3. Qual foi o melhor resultado parecido até hoje?
4. Quem a campanha precisa convencer? É uma persona de `context/publico.md`
   ou alguém novo?
5. Existe orçamento de mídia paga? Quanto?
6. Quem produz o conteúdo e quantas horas por semana tem para isso?
7. Qual é o período: data de início e de fim, ou campanha contínua?
8. Existe restrição desta campanha que não está em `context/proibicoes.md`?

## Tradução de objetivo vago em KPI

| Objetivo vago | Pergunta de volta | KPI possível |
| --- | --- | --- |
| "Aumentar autoridade" | Autoridade para gerar o quê? | Leads de conteúdo, convites para palestra, buscas pela marca |
| "Crescer nas redes" | Que ação depois de seguir? | Visitas à página de oferta vindas da rede, inscritos na lista |
| "Vender mais" | Qual produto, para quem, quanto? | Vendas do plano X, receita nova em R$ |
| "Lançar o produto" | O que é um lançamento bem-sucedido? | Testes ativados, pré-vendas, inscrições na lista de espera |
| "Reduzir cancelamento" | De quanto para quanto? | Churn mensal, taxa de ativação no primeiro mês |

## Modelo

```markdown
# Brief de cliente: {{nome da campanha}}

- **Cliente ou marca:** {{nome ou "própria"}}
- **Objetivo de negócio:** {{resultado mensurável}}
- **KPI e meta:** {{métrica, valor-alvo, prazo}}
- **Referência histórica:** {{melhor resultado anterior ou "sem histórico"}}
- **Público prioritário:** {{persona-id de context/publico.md}}
- **Oferta:** {{oferta de context/ofertas.md}}
- **Orçamento de mídia paga:** {{valor em R$ ou "nenhum"}}
- **Recursos de produção:** {{pessoas e horas por semana}}
- **Período:** {{início e fim ou "contínua"}}
- **Restrições desta campanha:** {{lista ou "nenhuma além de proibicoes.md"}}
- **Perguntas abertas:** {{lista ou "nenhuma"}}
- **Aprovado por:** {{nome e data}}
```

## Exemplo

Caso fictício. Não use como contexto real.

```markdown
# Brief de cliente: lançamento Estoquely Pro

- **Cliente ou marca:** própria
- **Objetivo de negócio:** gerar testes qualificados do plano Pro.
- **KPI e meta:** 200 testes qualificados (loja com mais de 100 produtos
  cadastrados no teste) até 2026-09-30.
- **Referência histórica:** 85 testes no melhor bimestre de 2026.
- **Público prioritário:** persona-01, dona de loja com estoque em planilha.
- **Oferta:** plano Pro, R$ 149 por mês, teste grátis de 14 dias.
- **Orçamento de mídia paga:** nenhum nesta fase.
- **Recursos de produção:** uma analista (20 h por semana) e uma redatora
  freelancer (8 h por semana).
- **Período:** 2026-08-01 a 2026-09-30.
- **Restrições desta campanha:** não comparar com EstoqueFácil
  nominalmente.
- **Perguntas abertas:** meta 2,3 vezes acima do histórico, confirmada pela
  dona do projeto em 2026-07-29.
- **Aprovado por:** Carla Nunes, sócia, 2026-07-29.
```

## Checklist

- [ ] Objetivo é resultado de negócio, não atividade de conteúdo.
- [ ] KPI tem número, prazo e definição do que conta como qualificado.
- [ ] Meta foi comparada com o histórico.
- [ ] Persona existe em `context/publico.md`.
- [ ] Recursos de produção estão registrados em horas.
- [ ] Brief tem aprovação explícita antes de seguir.

## Erros comuns

- Aceitar objetivo vago ("aumentar autoridade") sem traduzir em KPI. Sem
  isso, a etapa 02 não consegue priorizar canal.
- Pular a aprovação e já montar calendário.
- Misturar escolha de canal ou tema no brief. Isso pertence à etapa 02.
- Ignorar a capacidade da equipe e aprovar meta que exige o triplo de peças.
