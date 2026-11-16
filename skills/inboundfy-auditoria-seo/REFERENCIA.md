# Referência de Auditoria de SEO

Material de apoio de `inboundfy-auditoria-seo`. O `SKILL.md` diz a ordem;
este arquivo diz como auditar cada área, com modelos e um caso completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-auditoria-seo**,
do grupo **capacidade**. Leia os detalhes compartilhados conforme a etapa
atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 e 4 | [checklist técnico](references/checklist-tecnico.md) | Rastreamento, indexação, canônicas, velocidade, mobile, HTTPS, idiomas. |
| 5 | [conteúdo, on-page e local](references/conteudo-on-page-e-local.md) | Titles, conteúdo raso, autoria, links internos, imagens, Perfil da Empresa no Google. |
| 7 e 8 | [priorização e relatório](references/priorizacao-e-relatorio.md) | Matriz de impacto e esforço, planos de correção, modelo de resumo executivo. |

## Tipos de auditoria

| Tipo | Quando escolher | Alcance | Duração típica |
| --- | --- | --- | --- |
| Rápida | Primeira conversa, site pequeno, sem acesso ao Search Console | Páginas de `links.md`, robots, sitemap, Core Web Vitals da Home | Uma sessão |
| Completa | Rotina anual ou antes de investir em conteúdo | Site inteiro, técnico, conteúdo e local | Vários dias, com rastreador |
| Pós-migração | Troca de domínio, CMS ou estrutura de URLs | Mapa de redirecionamentos, cobertura do índice, canônicas | Semana 1, 4 e 12 após a troca |
| Queda de tráfego | Cliques caíram de forma visível | Páginas e consultas que perderam, datas, mudanças no site | Uma a duas sessões |
| Local | Empresa atende clientes num endereço ou numa região | Perfil da Empresa no Google, NAP, páginas locais, avaliações | Uma sessão |

## Ordem de prioridade das áreas

1. **Rastreamento e indexação.** Página fora do índice não ranqueia.
2. **Fundamentos técnicos.** Velocidade, mobile, HTTPS, status.
3. **On-page.** Titles, headings, intenção.
4. **Conteúdo.** Profundidade, duplicação, autoria e experiência.
5. **Autoridade.** Links e menções externas, entregues a
   `inboundfy-seo-links-externos`.

## Métricas de referência

| Métrica | Faixa de referência | Onde medir |
| --- | --- | --- |
| LCP (carregamento do maior elemento) | Bom até 2,5 s; ruim acima de 4 s | PageSpeed Insights (dados de campo), Search Console |
| INP (resposta à interação) | Bom até 200 ms; ruim acima de 500 ms | PageSpeed Insights, Search Console |
| CLS (estabilidade visual) | Bom até 0,1; ruim acima de 0,25 | PageSpeed Insights, Search Console |
| Páginas indexadas / páginas válidas no sitemap | Acima de 90% em site saudável | Search Console, relatório de páginas |
| Erros 404 com links internos | Zero | Rastreador |
| Cadeias de redirecionamento | No máximo um salto | Rastreador |
| Titles duplicados | Zero em páginas indexáveis | Rastreador |
| Tempo de resposta do servidor (TTFB) | Até 800 ms | PageSpeed Insights, WebPageTest |

Os limites dos Core Web Vitals valem para o percentil 75 dos acessos reais.
Nota de laboratório do PageSpeed ajuda a achar causas, mas o Google usa os
dados de campo.

## Limite das ferramentas

- Uma leitura do HTML bruto (curl, fetch) não executa JavaScript. Marcação
  JSON-LD, links e textos injetados por JS podem existir no navegador e não
  aparecer na leitura. Confira com a Inspeção de URL do Search Console ou com
  o Teste de pesquisa aprimorada antes de registrar "marcação ausente".
- Ferramentas de terceiros estimam tráfego e backlinks. Registre como
  estimativa.
- Sem Search Console, a cobertura do índice vira amostra por `site:dominio`,
  que é imprecisa. Diga isso no relatório.

## Template de relatório

```markdown
---
id: {{id}}
skill: inboundfy-auditoria-seo
tipo: auditoria-seo
estado: rascunho
entrada:
  - {{domínio ou lista de URLs}}
fontes:
  - {{ferramenta ou exportação com data}}
proxima_skill: {{skill indicada pelos achados}}
---

# Auditoria de SEO: {{domínio}} ({{AAAA-MM-DD}})

## Alcance e motivo

- **Tipo:** {{rápida | completa | pós-migração | queda de tráfego | local}}
- **Motivo:** {{sintoma medido}}
- **Alcance:** {{site inteiro, seção, URLs}}
- **Acessos usados:** {{Search Console, Analytics, rastreador, nenhum}}

## Resumo executivo

1. {{correção mais importante, em uma frase com impacto}}
2. {{}}
3. {{}}
4. {{}}
5. {{}}

## Painel de saúde

| Área | Estado | Achados críticos | Observação |
| --- | --- | --- | --- |
| Rastreamento e indexação | {{bom / atenção / crítico}} | {{n}} | {{}} |
| Velocidade e mobile | {{}} | {{}} | {{}} |
| On-page | {{}} | {{}} | {{}} |
| Conteúdo | {{}} | {{}} | {{}} |
| SEO local | {{ou "não se aplica"}} | {{}} | {{}} |
| Idiomas | {{ou "não se aplica"}} | {{}} | {{}} |

## Achados

| # | Área | URL ou alcance | Achado | Comprovação | Impacto | Esforço | Prioridade | Ação | Responsável |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | {{}} | {{}} | {{}} | {{captura, linha, trecho}} | {{alto/médio/baixo}} | {{alto/médio/baixo}} | {{P0/P1/P2/P3}} | {{}} | {{dev, conteúdo, marketing}} |

## Hipóteses a confirmar

- {{achado não conferido}}: {{como confirmar}}

## Plano de correção escolhido

- **Fase 1 (até 2 semanas):** {{}}
- **Fase 2 (até 6 semanas):** {{}}
- **Fase 3 (trimestre):** {{}}

## Métricas de base

| Métrica | Valor | Ferramenta | Data |
| --- | --- | --- | --- |
| Cliques orgânicos (28 dias) | {{}} | Search Console | {{}} |
| Páginas indexadas | {{}} | Search Console | {{}} |
| LCP / INP / CLS (mobile) | {{}} | PageSpeed Insights | {{}} |

## Handoff

| Achados | Skill | Arquivo de entrada |
| --- | --- | --- |
| {{#}} | {{}} | {{}} |

## Pendências

- {{pergunta ou "nenhuma"}}

## Histórico

{{rodadas anteriores com achados corrigidos, abertos ou reabertos}}
```

## Exemplo completo: Ótica Vista Clara

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A Ótica Vista Clara tem três lojas em Recife (Boa Viagem,
Casa Forte e Centro) e uma loja virtual de armações e lentes de contato.
Aceita Pix com 5% de desconto, parcela em até 10 vezes e agenda exame de vista
pelo WhatsApp. Em agosto de 2026 trocou a plataforma da loja virtual. Desde
setembro, os cliques orgânicos caíram de 18.400 para 11.200 por mês.

**Diagnóstico registrado.**

1. Sintoma: queda de 39% nos cliques em 28 dias, comparando setembro com
   julho no Search Console.
2. Início: duas semanas depois da troca de plataforma.
3. Páginas de receita: categorias "óculos de grau", "lentes de contato",
   "óculos de sol" e as três páginas de loja.
4. Endereço físico: sim, três lojas.
5. Idiomas: só português.
6. Plataforma nova de e-commerce; a agência parceira aplica correções.
7. Search Console disponível, com acesso registrado em
   `.inboundfy/context/integracoes.md`.

**Tipo escolhido.** Pós-migração com recorte local.

**Achados principais.**

| # | Área | URL ou alcance | Achado | Impacto | Esforço | Prioridade |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Indexação | 1.240 URLs de produto antigas | Retornam 404; não houve redirecionamento 301 para as novas | Alto | Médio | P0 |
| 2 | Indexação | `/lentes-de-contato/` | Canônica aponta para `/lentes-de-contato/?pagina=1`, versão parametrizada | Alto | Baixo | P0 |
| 3 | Rastreamento | robots.txt | Regra `Disallow: /colecoes/` herdada da plataforma impede as categorias | Alto | Baixo | P0 |
| 4 | Velocidade | Categorias no mobile | LCP de 4,6 s por banner de 1,8 MB sem dimensões | Médio | Baixo | P1 |
| 5 | Local | Loja Casa Forte | Telefone no Perfil da Empresa difere do site e de `enderecos.md` | Médio | Baixo | P1 |
| 6 | On-page | 380 produtos | Title igual ao nome do modelo, sem marca nem tipo ("RX 5154") | Médio | Médio | P2 |
| 7 | Conteúdo | Categorias | Só grade de produtos, sem texto que explique escolha de lente | Médio | Médio | P2 |
| 8 | Dados estruturados | Produtos | Leitura do HTML não mostra Product; Teste de pesquisa aprimorada mostra marcação injetada por JS, com `priceCurrency` ausente | Baixo | Baixo | P2 |
| 9 | Autoridade | Domínio | Links de dois blogs de moda apontavam para URLs que agora dão 404 | Médio | Baixo | P1 |

**Três planos apresentados.**

1. **Recomendado.** Fase 1 com P0 e os P1 de baixo esforço em duas semanas
   (mapa de 301, canônica, robots, banner, telefone, links quebrados). Fase 2
   com titles e textos de categoria. Recuperação esperada do índice em quatro
   a oito semanas.
2. Só P0 agora e reavaliação em 30 dias. Menos trabalho para a agência,
   recuperação mais lenta das categorias.
3. Plano completo em uma única entrega de seis semanas. Mais trabalho
   concentrado e correções urgentes esperando as demais.

A equipe escolhe o plano 1.

**Handoff.** Achados 1 a 4 para a agência, com o mapa de redirecionamentos
anexo. Achado 5 para `inboundfy-contexto-institucional` confirmar o telefone.
Achados 6 e 7 para `inboundfy-seo`. Achado 8 para
`inboundfy-dados-estruturados`. Achado 9 para `inboundfy-seo-links-externos`
pedir a atualização dos links aos dois blogs.

**Métricas de base.** 11.200 cliques (28 dias, Search Console, 2026-10-02);
2.310 páginas indexadas de 3.900 no sitemap; LCP mobile 4,6 s nas categorias.

## Checklist

- [ ] O tipo de auditoria e o alcance estão registrados.
- [ ] As sete perguntas de diagnóstico têm resposta ou pendência.
- [ ] robots.txt, sitemap, status, canônicas e redirecionamentos foram
      conferidos.
- [ ] Todas as páginas de `links.md` foram conferidas no índice.
- [ ] Core Web Vitals usam dados de campo quando existem.
- [ ] Marcação "ausente" foi confirmada num teste que executa JavaScript.
- [ ] SEO local conferido contra `enderecos.md`, quando há endereço.
- [ ] hreflang conferido, quando há mais de um idioma ou país.
- [ ] Cada achado tem URL, comprovação, impacto, esforço, prioridade e ação.
- [ ] Hipóteses estão separadas dos achados confirmados.
- [ ] Três planos foram apresentados e a escolha foi registrada.
- [ ] Métricas de base têm ferramenta e data.
- [ ] O handoff nomeia skill e arquivo por grupo de achados.

## Erros comuns

- **Relatório com 200 itens sem ordem.** A equipe não sabe por onde começar.
  Cinco itens no resumo executivo e o resto na tabela, priorizado.
- **Tratar nota do PageSpeed como problema de ranqueamento.** A nota de
  laboratório oscila. Olhe os dados de campo e o relatório de Core Web Vitals.
- **Afirmar "sem marcação" com leitura de HTML bruto.** A marcação pode vir
  por JavaScript. Confirme no navegador ou no teste do Google.
- **Culpar atualização do Google sem olhar o próprio site.** Na maioria das
  quedas, a causa está numa mudança recente de plataforma, URL ou robots.
- **Recomendar noindex em massa para "limpar" o site.** Página rasa útil
  ganha conteúdo ou é fundida com 301. noindex fica para páginas sem valor de
  busca, como carrinho e área do cliente.
- **Ignorar o Perfil da Empresa no Google.** Para negócio local, ele traz
  mais contatos que o site em muitas buscas.
- **Copiar senha ou token para o relatório.** Cite o acesso em
  `integracoes.md`, nunca a credencial.
- **Alterar robots ou redirecionamentos direto.** A skill propõe; quem mantém
  o site aplica, com registro no pipeline.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para auditoria, os campos próprios são: alcance, achado, comprovação,
prioridade e skill de destino.

## Diagnóstico no fluxo

No passo 2, leia [perguntas de diagnóstico](references/diagnostico.md) e registre as respostas no artefato.
