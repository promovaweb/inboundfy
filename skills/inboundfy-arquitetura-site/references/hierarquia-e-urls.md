# Hierarquia e URLs

Leia nos passos 3 e 4 do fluxo de `inboundfy-arquitetura-site`.

## Levantamento das páginas atuais

Fontes, da mais completa para a mais simples:

1. Rastreamento do site com ferramenta de crawler (lista todas as URLs
   acessíveis por link).
2. Sitemap XML publicado.
3. Exportação de páginas e posts do CMS.
4. Relatório de páginas do Search Console (mostra URLs que o Google conhece
   e que o crawler pode não achar).
5. Analytics dos últimos 12 meses para tráfego e conversão por página.

Cruze as fontes. URL que aparece no Search Console e não aparece no
rastreamento é página órfã ou antiga.

## Classificação de cada página

| Ação | Quando aplicar | Consequência na URL |
| --- | --- | --- |
| Manter | Tem função, tráfego ou conversão e está no lugar certo | Nenhuma |
| Reescrever | Tem função, mas texto fraco ou desatualizado | Mantém a URL, se o padrão servir |
| Mover | Tem função e está no nível ou padrão errado | 301 para a nova URL |
| Fundir | Duas ou mais páginas respondem à mesma pergunta | 301 das que saem para a que fica |
| Dividir | Uma página mistura públicos ou ofertas diferentes | 301 para a parte que concentra o tráfego |
| Criar | Tarefa da persona sem página | URL nova no padrão |
| Remover | Sem função, sem tráfego e sem equivalente | 410 |

## Pontos de partida por tipo de site

Use como rascunho inicial, depois ajuste às tarefas da persona.

**Serviço local com uma unidade.** Home, uma página por serviço, preços ou
orçamento, sobre com equipe, contato com mapa, blog. Tudo a um clique.

**Serviço local com várias unidades.** Páginas de serviço na raiz, hub de
unidades com uma página por endereço, preços, blog. Unidade linka para os
serviços que oferece.

**SaaS.** Home, hub de recursos com uma página por recurso, hub de soluções
por segmento ou cargo, preços, integrações, blog, central de ajuda,
comparativos com alternativas. Página de preços sempre no menu.

**Loja virtual.** Home, categorias, subcategorias, produto, carrinho. Filtros
não geram URL indexável, salvo combinações com busca própria registrada.

**Site de conteúdo ou mídia.** Home, temas (quatro a oito), artigos,
autores, materiais ricos. Tema funciona como hub com texto próprio.

**Infoprodutor ou educação.** Home, página de cada curso ou mentoria, página
de captura do material gratuito, blog ou podcast, sobre o autor.

## Padrões de URL

Regras:

- minúsculas, hífen entre palavras, sem acento, sem cedilha;
- palavras que descrevem o conteúdo, sem artigo e preposição sobrando;
- um padrão por tipo de página;
- sem data, sem ID de sistema, sem parâmetro em página que deve ser
  indexada;
- barra final consistente em todo o site (com ou sem, nunca os dois).

| Tipo de página | Padrão sugerido | Exemplo fictício |
| --- | --- | --- |
| Serviço | /{{servico}}/ | /coleta-e-entrega/ |
| Serviço por cidade | /{{servico}}/{{cidade}}/ | /coleta-e-entrega/olinda/ |
| Unidade | /unidades/{{bairro}}/ | /unidades/casa-forte/ |
| Recurso de SaaS | /recursos/{{recurso}}/ | /recursos/emissao-de-nota/ |
| Segmento | /para/{{segmento}}/ | /para/clinicas/ |
| Comparativo | /comparativo/{{a}}-vs-{{b}}/ | /comparativo/planilha-vs-sistema/ |
| Artigo | /blog/{{slug}}/ | /blog/como-lavar-edredom/ |
| Categoria de loja | /{{categoria}}/{{subcategoria}}/ | /cafes/especiais/ |
| Produto | /produto/{{slug}}/ | /produto/cafe-cerrado-mineiro-250g/ |

Breadcrumb acompanha a URL. Se a URL é `/unidades/casa-forte/`, o breadcrumb
é Home > Unidades > Casa Forte. A página `/unidades/` existe e tem conteúdo.

## Hubs

Um hub precisa de:

1. texto de abertura que explica as opções e ajuda a escolher;
2. um bloco por página filha, com resumo e link descritivo;
3. comparação quando as filhas competem entre si (tabela de planos,
   unidades com horário);
4. CTA para a ação mais comum.

Hub com menos de três filhas raramente se justifica. Junte as filhas numa
página só, com seções e âncoras.

## Erros desta etapa

- Planejar a árvore antes de levantar o que o site já tem e o que traz
  tráfego.
- Criar URL por cidade sem dado próprio para cada cidade.
- Misturar padrões (`/servico-x`, `/servicos/y/`, `/z.html`) no mesmo tipo.
- Usar o nome interno do produto na URL quando a persona busca pelo nome do
  problema. Confira o jargão em `.inboundfy/context/publico.md`.
