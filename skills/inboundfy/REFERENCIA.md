# Referência do Inboundfy

Para uso normal, inicie por `$inboundfy`. Esta tabela descreve o roteamento
interno, não uma lista de skills que o usuário precise escolher.

## Roteamento

| Pedido | Skill |
| --- | --- |
| Configurar projeto, integrações ou variáveis de ambiente | `inboundfy-setup` |
| Pedido de conteúdo e canais sem etapa clara | `inboundfy-area-conteudo` |
| Pedido de SEO, busca ou respostas de IA | `inboundfy-area-seo` |
| Pedido de copy, oferta ou revisão de texto | `inboundfy-area-copy` |
| Pedido de crescimento em qualquer etapa do funil | `inboundfy-area-growth` |
| Pedido comercial: prospecção, cadência, kit de vendas | `inboundfy-area-vendas` |
| Pedido de métricas, rastreamento ou atribuição | `inboundfy-area-dados` |
| Pedido de pesquisa de cliente ou concorrência | `inboundfy-area-pesquisa` |
| Fluxo completo de material | `inboundfy-acervo` |
| Receber material | `inboundfy-acervo` |
| Limpar material | `inboundfy-processar-acervo` |
| Extrair FAQ | `inboundfy-extrair-faq` |
| Buscar fontes | `inboundfy-pesquisa-acervo` |
| Estruturar base | `inboundfy-base-editorial` |
| Escolher usos | `inboundfy-acervo` |
| Planejar datas | `inboundfy-planejamento` |
| Redigir saída | `inboundfy-producao` |
| Atualizar estado | `inboundfy-pipeline` |
| Definir estratégia | `inboundfy-estrategia` |
| Pesquisar cliente | `inboundfy-pesquisa-cliente` |
| Analisar concorrência | `inboundfy-concorrentes` |
| Estruturar oferta | `inboundfy-copy-oferta` |
| Redigir ou reescrever copy | `inboundfy-copy-redacao` / `inboundfy-copy-edicao` |
| SEO | `inboundfy-seo` |
| GEO | `inboundfy-geo` |
| Conversão | `inboundfy-growth-cro` |
| Medir e atribuir | `inboundfy-metricas` / `inboundfy-atribuicao` |
| Eventos, pixels e UTMs | `inboundfy-rastreamento-conversao` |
| Links externos | `inboundfy-seo-links-externos` |
| Diretórios e catálogos | `inboundfy-growth-diretorios` |
| Estudar o marketing de uma referência | `inboundfy-engenharia-reversa` |
| Testar | `inboundfy-experimentacao` |
| Lançar | `inboundfy-growth-lancamento` |
| Material rico | `inboundfy-growth-lead-magnet` |
| Filtrar slop | `inboundfy-anti-slop` |
| Registrar sugestão ou correção | `inboundfy-aprendizado` |
| Gerenciar URLs oficiais e perfis sociais | `inboundfy-contexto-institucional` |
| Alias compatível | `inboundfy-iniciar` encaminha a solicitação para `$inboundfy` |

## Limite

`inboundfy/` é a fonte do framework. `.inboundfy/` é a configuração do projeto.
`acervo/`, `canais/` e `calendario/` são dados de trabalho e saída.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy**, do grupo
**orquestrador**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Coordene as etapas sem duplicar trabalho. Quando o pedido nomeia uma etapa
conhecida, vá direto à skill da tabela. Quando nomeia só uma área ("quero
crescer", "melhorar o SEO"), entregue o pedido à skill `inboundfy-area-*`
correspondente, que faz o diagnóstico e escolhe a rota.

## Template de relatório da coordenação

```markdown
# Coordenação {data}

- Pedido: {texto original}
- Setup: {pronto | pendente: etapa}
- Rota: {skill ou área escolhida e motivo}
- IDs envolvidos: {acervo, peça, campanha}
- Resultado: {caminhos produzidos}
- Pendências: {perguntas abertas}
- Próxima ação: {skill e objetivo}
```

## Exemplo

**Pedido:** "Quero vender mais o plano anual do nosso app de treino."

1. `inboundfy doctor --strict` passa.
2. O pedido não nomeia etapa: é crescimento de receita. Rota:
   `inboundfy-area-growth`.
3. A área pergunta onde o número está pior. Resposta: muita gente testa,
   pouca gente assina o anual. Rota escolhida: `inboundfy-growth-paywall`,
   com `inboundfy-growth-pricing` como próxima etapa.
4. O relatório registra a rota, o pacote entregue e a próxima etapa.

## Checklist

- [ ] O doctor rodou antes de qualquer escrita.
- [ ] O pedido original ficou registrado sem edição.
- [ ] Uma única skill recebeu o pedido por vez.
- [ ] Peças públicas passaram por anti-slop A5, A6 e validador do canal.
- [ ] O relatório lista caminhos, IDs, estado e próxima ação.

## Erros comuns

- Pedir ao usuário que escolha a skill quando o pedido já indica o resultado.
- Executar duas sequências paralelas para o mesmo item.
- Pular a área e escolher uma skill pelo nome do canal, sem diagnóstico.
- Aprovar peça sem o relatório da validadora vinculado ao hash.
