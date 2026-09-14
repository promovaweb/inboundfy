# REFERENCIA.md; inboundfy-planejamento-03-oportunidades

## Template de `plano-de-oportunidades.md`

```markdown
# Plano de oportunidades; <slug-do-pacote>

## Oportunidade 1

- **Canal:** <canal ativo em context/canais.md>
- **Ângulo:** <recorte específico, não o tema genérico do pacote>
- **Ativos de apoio:** <quais itens de ativos.md sustentam esta peça>
- **Prioridade:** <alta | média | baixa>
- **Justificativa da prioridade:** <urgência da dor, força do repertório, pedido do usuário>
- **Pendência de contexto, se houver:** <entidade não cadastrada que precisa ser confirmada antes do brief>

<!-- Repita o bloco para cada oportunidade. -->
```

## regra de priorização (matriz simples)

| Repertório disponível | Persona com dor urgente | Prioridade |
| --- | --- | --- |
| Forte (múltiplos ativos) | Sim | Alta |
| Forte | Não identificada | Média |
| Fraco (um ativo isolado) | Sim | Média |
| Fraco | Não identificada | Baixa; considerar não produzir |

Não crie oportunidade para canal sem nenhum ativo de apoio, mesmo que o
canal esteja ativo em `context/canais.md`; canal ativo não obriga peça
neste pacote.

## Exemplo preenchido (fictício)

```markdown
# Plano de oportunidades; cancelamento-primeiro-mes-estoque

## Oportunidade 1

- **Canal:** blog
- **Ângulo:** "por que a migração de estoque, não o produto, é o motivo real
  de cancelamento no primeiro mês"
- **Ativos de apoio:** tese sobre migração, dado "6 em cada 10 tickets",
  objeção "estoque bagunçado"
- **Prioridade:** alta
- **Justificativa:** repertório forte (tese + dado + objeção) e dor com
  potencial de atingir busca real de gestores de pequeno varejo.
- **Pendência de contexto:** nenhuma.

## Oportunidade 2

- **Canal:** linkedin
- **Ângulo:** opinião do gestor de produto sobre por que "atendimento
  reativo" não resolve cancelamento por migração
- **Ativos de apoio:** tese principal, trecho de citação do Falante B
- **Prioridade:** média
- **Justificativa:** repertório existe mas depende de uma citação só; ainda
  assim relevante para autoridade de marca pessoal.
- **Pendência de contexto:** confirmar em `context/pessoas.md` se o gestor
  de produto pode assinar posts de LinkedIn.

## Oportunidade 3

- **Canal:** email
- **Ângulo:** e-mail de nutrição orientando clientes novos a importar
  planilha antes do primeiro cancelamento crítico
- **Ativos de apoio:** entidade "importador de planilha" (pendente de
  confirmação)
- **Prioridade:** baixa
- **Justificativa:** repertório depende de uma funcionalidade ainda não
  confirmada em `context/produtos.md`.
- **Pendência de contexto:** confirmar existência e nome oficial da
  funcionalidade antes de gerar brief.
```

## Checklist de qualidade

- [ ] Toda oportunidade lista ativo(s) de apoio específico(s), não uma
      referência vaga ao pacote inteiro.
- [ ] Prioridade tem justificativa alinhada à matriz acima, não é ordem
      arbitrária.
- [ ] Pendências de contexto estão listadas por oportunidade, não
      escondidas.
- [ ] Nenhuma oportunidade foi criada para canal sem ativo de apoio.

## Erros comuns

- Criar uma oportunidade por canal ativo só para "preencher" o plano, sem
  repertório real por trás.
- Priorizar por preferência pessoal do agente em vez da matriz de
  repertório × urgência da dor.
- Aprovar a produção de uma oportunidade com pendência de contexto sem
  primeiro resolver a pendência.
