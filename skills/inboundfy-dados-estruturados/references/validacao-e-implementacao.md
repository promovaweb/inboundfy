# Validação e implementação

Leia nos passos 6 a 8 do fluxo de `inboundfy-dados-estruturados`.

## Ferramentas

| Ferramenta | Para quê | Limite |
| --- | --- | --- |
| Teste de pesquisa aprimorada (Google) | Diz se o tipo é elegível a resultado aprimorado e mostra erros e avisos | Só cobre tipos com resultado aprimorado |
| Validador do Schema.org (validator.schema.org) | Confere a sintaxe e todas as propriedades do vocabulário | Não diz se o Google exibe |
| Inspeção de URL (Search Console) | Mostra a marcação na página renderizada pelo Google | Precisa da página publicada |
| Relatórios de aprimoramento (Search Console) | Erros e avisos em todas as páginas de um tipo | Atualiza com o rastreamento, leva dias |
| Validador de JSON | Encontra vírgula sobrando, aspas erradas | Só sintaxe |

Rode o código ainda não publicado colando o trecho no Teste de pesquisa
aprimorada (opção de código). Depois da publicação, rode de novo pela URL.

## Erros frequentes

| Mensagem ou sintoma | Causa | Correção |
| --- | --- | --- |
| Campo obrigatório ausente | Propriedade exigida não preenchida | Preencher se o fato existe; senão, retirar o tipo |
| Valor inválido em `price` | Vírgula, símbolo "R$" ou texto | `"54.90"` |
| Data inválida | Formato brasileiro (14/11/2026) | ISO 8601 com fuso |
| `availability` inválido | Texto livre ("Em estoque") | URL do schema.org (`https://schema.org/InStock`) |
| Itens duplicados | Plugin e código manual gerando o mesmo tipo | Desligar uma das fontes |
| Marcação some no teste por URL | JSON-LD dentro de bloco que só carrega após interação | Inserir no HTML inicial ou no carregamento da página |
| Ação manual por marcação enganosa | Conteúdo marcado não aparece na página | Remover a marcação ou exibir o conteúdo |

Avisos (propriedade recomendada ausente) não impedem o item. Corrija quando
o fato existir; registre como aceito quando não existir.

## Leitura do HTML e JavaScript

Uma leitura do HTML bruto (curl, fetch, "ver código-fonte") não executa
JavaScript. Temas, plugins, gerenciadores de tag e frameworks como React e
Next.js podem injetar o JSON-LD depois do carregamento. O Google renderiza
JavaScript, mas com atraso. Outros buscadores e sistemas de IA podem não
renderizar. Por isso:

- para diagnosticar, confira na página renderizada (Inspeção de URL ou
  ferramentas do navegador);
- para implementar, prefira JSON-LD no HTML entregue pelo servidor.

## Caminhos de implementação

| Ambiente | Caminho preferido | Cuidado |
| --- | --- | --- |
| WordPress com plugin de SEO | Configurar o plugin para Organization, WebSite, Article e BreadcrumbList; completar o resto por filtro no tema filho | Não somar plugin e código manual para o mesmo tipo |
| WooCommerce, Nuvemshop, Shopify, Tray, VTEX | Usar a marcação nativa de Product e completar o que faltar (marca, frete, devolução) pela configuração ou pelo tema | Preço e estoque saem da plataforma, sempre atualizados |
| Site estático (Astro, Hugo, Eleventy) | Componente que recebe os dados da página e imprime `<script type="application/ld+json">` no `<head>` | Gerar a partir do mesmo dado que alimenta o texto visível |
| React, Next.js e similares | Renderizar o script no servidor (SSR ou geração estática) | Evitar injetar só no cliente |
| Construtor de páginas sem acesso ao código | Campo de "código no cabeçalho" por página | Atualizar à mão quando o preço mudar |
| Gerenciador de tags | Só como último recurso | Depende de JavaScript e foge do controle editorial |

O código entra assim:

```html
<script type="application/ld+json">
{ "@context": "https://schema.org", "@graph": [ ] }
</script>
```

## Roteiro entregue a quem mantém o site

```markdown
## Implementação: {{página ou modelo}}

1. Remover: {{marcação anterior ou "nada"}}.
2. Inserir o bloco JSON-LD em: {{arquivo do tema, campo do CMS, componente}}.
3. Ligar os campos dinâmicos: price ← {{campo}}, availability ← {{campo}}.
4. Publicar em homologação e rodar o Teste de pesquisa aprimorada por URL.
5. Publicar em produção e pedir indexação na Inspeção de URL.
6. Conferir o relatório de aprimoramento do Search Console após 7 dias.
```

## Conferência pós-publicação

- [ ] Inspeção de URL mostra o tipo na página renderizada.
- [ ] Teste de pesquisa aprimorada por URL sem erro.
- [ ] Relatório de aprimoramento do tipo sem erro após o rastreamento.
- [ ] Valores conferidos contra a página publicada (preço, data, endereço).
- [ ] Data da conferência registrada no `dados-estruturados.md`.

## Manutenção

- Event: atualizar a cada edição; marcar `EventCancelled` ou
  `EventPostponed` quando for o caso.
- Product: estoque e preço vindos da plataforma, nunca fixos no código.
- Organization e LocalBusiness: revisar quando `enderecos.md` ou `links.md`
  mudar.
- Article: `dateModified` acompanha a revisão real do conteúdo.
