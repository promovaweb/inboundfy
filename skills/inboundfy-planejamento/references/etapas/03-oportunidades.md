# Etapa 03: oportunidades

Fase 3 de `METODOLOGIA.md`. Transforma o repertório de
`02-pesquisa-e-ativos/ativos.md` numa lista priorizada de oportunidades por
canal. Escolhe as peças e a ordem. O brief de cada peça fica com a etapa 04.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/canais.md` e `.inboundfy/estrategia.md`: canais ativos, cadência e
  skills de cada canal.
- `context/publico.md`: urgência da dor de cada persona.
- `context/campanhas.md`: fase da campanha de origem, quando houver.

## Entrada esperada

`02-pesquisa-e-ativos/ativos.md` do pacote, ou `estrategia.md` do item no
modo acervo.

## Fluxo

1. Leia os ativos e os canais ativos.
2. Para cada canal ativo, avalie se o repertório justifica uma peça. Não
   force peça em canal sem ativo.
3. Liste as oportunidades com canal, ângulo, ativos de apoio, etapa do funil
   e prioridade justificada pela matriz ou pela pontuação de
   `../priorizacao-e-capacidade.md`.
4. Confira a cobertura do funil e a capacidade do mês.
5. Sinalize oportunidades que dependem de dado não confirmado em
   `context/`.
6. Salve `03-planejamento/plano-de-oportunidades.md` no modelo abaixo.
7. Execute `inboundfy-anti-slop` no marco A3 sobre ângulos, canais, CTAs e
   reaproveitamentos. Registre `06-auditoria/anti-slop-03-estrategia-brief.md`
   antes de encaminhar.
8. Em execução manual, apresente o plano para aprovação. Quando a
   pessoa tiver pedido o fluxo completo sem perguntas, marque até cinco
   oportunidades de prioridade alta ou média, registre a seleção e siga para
   a etapa 04.

## Saída

`03-planejamento/plano-de-oportunidades.md`.

## Validação

- Toda oportunidade lista os ativos de apoio.
- Nenhuma oportunidade foi criada para canal sem ativo.
- A prioridade tem justificativa.
- A seleção automática respeita canal pedido, ativos e limite de cinco.
- O A3 foi registrado antes do briefing.

## Idempotência

Rodar de novo incorpora ativos novos sem descartar oportunidades aprovadas.

## Modelo

```markdown
# Plano de oportunidades: {{slug-do-pacote}}

## Oportunidade {{n}}

- **Canal:** {{canal ativo}}
- **Ângulo:** {{recorte específico}}
- **Etapa do funil:** {{aquisição | ativação | retenção | receita | indicação}}
- **Ativos de apoio:** {{itens de ativos.md}}
- **Prioridade:** {{alta | média | baixa}}
- **Justificativa:** {{matriz ou pontuação}}
- **Pendência de contexto:** {{dado a confirmar ou "nenhuma"}}
- **Estado:** {{proposta | aprovada | descartada}}
```

## Exemplo

Caso fictício.

```markdown
# Plano de oportunidades: cancelamento-primeiro-mes-estoque

## Oportunidade 1

- **Canal:** blog
- **Ângulo:** por que a migração de estoque, e não o produto, é o motivo
  real de cancelamento no primeiro mês
- **Etapa do funil:** aquisição
- **Ativos de apoio:** tese da migração, dado de 6 em cada 10 tickets,
  objeção do estoque bagunçado
- **Prioridade:** alta
- **Justificativa:** repertório forte e dor urgente com busca real.
- **Pendência de contexto:** nenhuma
- **Estado:** aprovada

## Oportunidade 2

- **Canal:** linkedin
- **Ângulo:** opinião do gestor de produto sobre por que atendimento
  reativo não resolve cancelamento por migração
- **Etapa do funil:** aquisição
- **Ativos de apoio:** tese principal, citação do Falante B
- **Prioridade:** média
- **Justificativa:** repertório depende de uma citação.
- **Pendência de contexto:** confirmar em context/pessoas.md se o gestor
  pode assinar posts.
- **Estado:** proposta

## Oportunidade 3

- **Canal:** email
- **Ângulo:** orientar clientes novos a importar a planilha na primeira
  semana
- **Etapa do funil:** ativação
- **Ativos de apoio:** entidade importador de planilha (pendente)
- **Prioridade:** baixa
- **Justificativa:** depende de funcionalidade não confirmada.
- **Pendência de contexto:** confirmar existência e nome oficial.
- **Estado:** proposta
```

## Checklist

- [ ] Toda oportunidade lista ativos específicos.
- [ ] A prioridade segue a matriz ou a pontuação.
- [ ] Pendências estão listadas por oportunidade.
- [ ] O funil tem mais de uma etapa coberta, ou a pessoa foi avisada.
- [ ] Nenhuma oportunidade em canal sem ativo.

## Erros comuns

- Uma oportunidade por canal ativo só para preencher o plano.
- Priorizar por preferência do agente.
- Aprovar oportunidade com pendência de contexto aberta.
