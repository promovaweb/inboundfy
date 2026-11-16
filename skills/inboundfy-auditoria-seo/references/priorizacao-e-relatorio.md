# Priorização e relatório

Leia nos passos 7 e 8 do fluxo de `inboundfy-auditoria-seo`.

## Escala de impacto

| Impacto | Quando marcar |
| --- | --- |
| Alto | Impede indexação ou rastreamento de páginas de receita; derruba muitas páginas; afeta o site inteiro (HTTPS, robots, servidor) |
| Médio | Reduz CTR, posição ou conversão de um grupo de páginas; prejudica SEO local |
| Baixo | Acabamento; afeta poucas páginas sem receita |

## Escala de esforço

| Esforço | Quando marcar |
| --- | --- |
| Baixo | Ajuste de configuração, uma linha no robots, troca de canônica, correção no Perfil da Empresa |
| Médio | Mudança no modelo do CMS, mapa de redirecionamentos, reescrita de grupo pequeno de páginas |
| Alto | Troca de plataforma, reescrita de centenas de páginas, mudança de estrutura de URLs |

## Matriz de prioridade

| | Esforço baixo | Esforço médio | Esforço alto |
| --- | --- | --- | --- |
| **Impacto alto** | P0 | P0 | P1 |
| **Impacto médio** | P1 | P2 | P3 |
| **Impacto baixo** | P2 | P3 | Não fazer agora |

Regra fixa: qualquer achado que tire páginas de receita do índice é P0,
mesmo com esforço alto.

## Planos de correção

Monte três planos materialmente diferentes e recomende o primeiro.

| Plano | Composição | Quando recomendar |
| --- | --- | --- |
| Urgências mais ganhos rápidos | P0 e P1 de esforço baixo na fase 1; P2 depois | Padrão para a maioria dos casos |
| Só urgências | P0 agora, nova auditoria em 30 dias | Equipe técnica com pouca disponibilidade |
| Completo em fases | Tudo, em três fases com datas | Projeto com orçamento e equipe dedicados |

## Resumo executivo

O resumo é lido por quem aprova verba e prazo. Use até cinco itens, cada um
com problema, consequência e ação.

```markdown
## Resumo executivo

1. **1.240 páginas de produto antigas retornam 404.** Elas concentravam 41%
   dos cliques de julho. Ação: redirecionar com 301 para os produtos novos,
   conforme o mapa anexo.
2. **{{problema}}.** {{consequência medida}}. Ação: {{correção}}.
```

## Acompanhamento

- Registre as métricas de base com data antes de qualquer correção.
- Reconfira os P0 uma semana depois da correção com a Inspeção de URL.
- Compare cliques e páginas indexadas em 4 e 12 semanas.
- Na próxima rodada, marque cada achado como corrigido, aberto ou reaberto,
  e preserve a rodada anterior no histórico.

## Modelo de handoff por achado

```yaml
id: {{id}}
de: inboundfy-auditoria-seo
para: {{skill}}
estado: pronto
arquivos:
  - acervo/{{id}}-{{data}}-{{slug}}/auditoria-seo.md
achados: [{{números}}]
acao_solicitada: {{verbo + objeto}}
pendencias:
  - {{pergunta ou "nenhuma"}}
```

| Tipo de achado | Skill |
| --- | --- |
| Página a reescrever, title, intenção | `inboundfy-seo` |
| Marcação ausente ou com erro | `inboundfy-dados-estruturados` |
| Estrutura, menu, profundidade | `inboundfy-arquitetura-site` |
| Autoridade, links perdidos, menções | `inboundfy-seo-links-externos` |
| Diretórios e citações locais | `inboundfy-growth-diretorios` |
| Dado oficial divergente | `inboundfy-contexto-institucional` |
| Ausência em respostas de IA | `inboundfy-geo` |
| Medição quebrada (tags, conversões) | `inboundfy-rastreamento-conversao` |
