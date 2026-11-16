# Acesso de robôs e presença externa

Leia no passo 6 do fluxo de `inboundfy-geo`.

## Robôs das plataformas de IA

Cada empresa publica os nomes dos seus agentes. Alguns servem para treinar
modelos; outros buscam páginas na hora da pergunta. Os nomes mudam: confira a
documentação de cada plataforma na data do trabalho e registre a data.

| Plataforma | Agentes conhecidos | Função |
| --- | --- | --- |
| OpenAI | `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` | Treino; busca do ChatGPT; visita a pedido do usuário |
| Anthropic | `ClaudeBot`, `Claude-SearchBot`, `Claude-User` | Treino; busca; visita a pedido do usuário |
| Perplexity | `PerplexityBot`, `Perplexity-User` | Índice de busca; visita a pedido do usuário |
| Google | `Googlebot`, `Google-Extended` | Busca e visão geral de IA; controle de uso em modelos Gemini |
| Microsoft | `Bingbot` | Índice do Bing, usado pelo Copilot |
| Common Crawl | `CCBot` | Base pública usada por vários modelos |

Pontos oficiais:

- Vetar `Google-Extended` não tira o site da visão geral de IA; ela usa o
  `Googlebot`.
- Vetar o agente de busca de uma plataforma tira o site das citações dela.

## Conferência do robots.txt

1. Abra `https://<dominio>/robots.txt`.
2. Liste cada agente da tabela e registre: permitido, vetado ou sem regra
   (sem regra vale a regra de `User-agent: *`).
3. Confira se páginas importantes (preços, produtos, blog) estão fora de
   `Disallow`.
4. Confira se o CDN ou firewall não barra esses agentes por padrão. Alguns
   serviços de proteção passaram a barrar robôs de IA sem aviso.
5. Registre a escolha da empresa: permitir busca e treino, permitir só busca
   ou vetar tudo. A escolha é comercial e jurídica; a skill só expõe as
   consequências.

Modelo para permitir busca e vetar treino:

```text
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Disallow: /
```

Qualquer mudança no `robots.txt` entra como proposta no pipeline, com
aprovação de quem administra o site.

## Conteúdo legível sem JavaScript

Vários robôs de IA não executam JavaScript. Teste com `curl` ou com "ver
código-fonte": preço, descrição e texto principal precisam estar no HTML
entregue. Conteúdo carregado só pelo navegador pode não existir para eles.
Problemas de renderização vão para `inboundfy-auditoria-seo`.

## llms.txt

Arquivo em Markdown na raiz do site, proposto como resumo para modelos de
linguagem, com links para as páginas principais.

- **Situação:** hipótese. Nenhum dos grandes buscadores confirmou uso.
- **Quando criar:** documentação técnica, produto com muitas páginas ou
  quando o esforço for de minutos.
- **Quando não priorizar:** antes de corrigir página citável, robots.txt ou
  presença externa.

Modelo mínimo:

```markdown
# {{Marca}}

> {{descrição canônica da marca}}

## Páginas principais

- [Planos e preços]({{URL}}): {{uma frase}}
- [Como funciona]({{URL}}): {{uma frase}}
- [Perguntas frequentes]({{URL}}): {{uma frase}}
```

## Presença em terceiros

Em perguntas de "melhor opção", as respostas costumam se apoiar em fontes
externas. Mapeie onde os concorrentes aparecem e a marca não.

| Tipo de fonte | Exemplos no Brasil | Skill |
| --- | --- | --- |
| Diretórios e listas de software | Sites de avaliação de software, marketplaces de apps, Google Perfil da Empresa | `inboundfy-growth-diretorios` |
| Avaliações | Reclame Aqui, avaliações no Google, lojas de aplicativo | `inboundfy-growth-diretorios` |
| Listas editoriais | "Melhores sistemas para...", comparativos em blogs do nicho | `inboundfy-seo-links-externos` |
| Imprensa e associações | Portais do setor, sindicatos, Sebrae regional | `inboundfy-seo-links-externos` ou `inboundfy-growth-relacoes-publicas` |
| Comunidades | Grupos e fóruns do nicho, Reddit, comunidades no LinkedIn | `inboundfy-growth-comunidade` |
| Vídeo | YouTube com título e descrição que respondem à pergunta | `inboundfy-especialista-youtube` |
| Rede profissional | Artigos e posts no LinkedIn de especialistas da empresa | `inboundfy-especialista-linkedin` |

Template de priorização:

```markdown
| Fonte | Citada pelas IAs na carteira? | Concorrentes presentes | Marca presente | Esforço | Prioridade |
| --- | --- | --- | --- | --- | --- |
| {{site}} | {{sim, em P1 e P3}} | {{nomes}} | {{não}} | {{baixo/médio/alto}} | {{alta}} |
```

Prioridade alta: fonte já citada nas respostas da carteira e com
concorrentes presentes.
