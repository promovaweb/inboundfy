# Grafo e identificadores

Leia no passo 3 do fluxo de `inboundfy-dados-estruturados`.

## Por que usar um grafo

Sem ligação, cada página descreve a empresa de um jeito e o buscador recebe
várias "empresas" quase iguais. Com `@id`, a Organization é declarada uma vez
e as demais entidades apontam para ela: o autor trabalha para ela, o produto
é da marca dela, a unidade pertence a ela.

## Padrão de `@id`

Use a URL canônica da página onde a entidade vive, mais um fragmento
descritivo. O `@id` não precisa abrir uma página; ele é um nome estável.

| Entidade | Padrão | Exemplo fictício |
| --- | --- | --- |
| Organization | `{{site}}/#organizacao` | `https://cafeserraazul.com.br/#organizacao` |
| WebSite | `{{site}}/#site` | `https://cafeserraazul.com.br/#site` |
| Unidade local | `{{url da página da unidade}}#unidade` | `https://cafeserraazul.com.br/cafeteria/#unidade` |
| Pessoa | `{{url da página do autor}}#pessoa` | `https://cafeserraazul.com.br/equipe/lia-moura/#pessoa` |
| Página | `{{url}}#pagina` | `https://cafeserraazul.com.br/blog/moagem/#pagina` |
| Entidade principal da página | `{{url}}#produto`, `#artigo`, `#evento` | `https://cafeserraazul.com.br/loja/catuai-amarelo-250g/#produto` |

Regras:

- Sempre com a mesma forma da URL canônica (protocolo, `www`, barra final).
- Nunca mude um `@id` publicado sem pedido explícito.
- Registre o mapa no `dados-estruturados.md` do primeiro trabalho e
  reaproveite nas rodadas seguintes.

## Mapa de entidades do site

```markdown
| Entidade | Tipo | @id | Fonte dos dados | Página onde vive |
| --- | --- | --- | --- | --- |
| Empresa | Organization | {{site}}/#organizacao | enderecos.md, links.md | Home e Sobre |
| Site | WebSite | {{site}}/#site | empresa.md | Home |
| {{Unidade}} | {{LocalBusiness ou subtipo}} | {{url}}#unidade | enderecos.md | {{URL da unidade}} |
| {{Autor}} | Person | {{url}}#pessoa | pessoas.md | {{URL do perfil}} |
```

## Organization completa (Home ou Sobre)

```json
{
  "@type": "Organization",
  "@id": "https://cafeserraazul.com.br/#organizacao",
  "name": "Café Serra Azul",
  "legalName": "Serra Azul Torrefação de Cafés Ltda.",
  "taxID": "00.000.000/0001-00",
  "url": "https://cafeserraazul.com.br/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://cafeserraazul.com.br/img/logo-serra-azul.png",
    "width": 512,
    "height": 512
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+55-35-90000-0000",
    "availableLanguage": "pt-BR"
  },
  "sameAs": [
    "https://www.instagram.com/cafeserraazul.exemplo",
    "https://www.linkedin.com/company/cafeserraazul-exemplo"
  ]
}
```

- `legalName` e `taxID` só quando a razão social e o CNPJ aparecem no site
  (rodapé ou página Sobre) e estão em `enderecos.md`.
- `sameAs` só com perfis oficiais registrados em `links.md`.
- Telefone no formato internacional, com DDI e DDD.

## Ligações usadas com frequência

| Ligação | Propriedade | De → para |
| --- | --- | --- |
| Site pertence à empresa | `publisher` | WebSite → Organization |
| Unidade pertence à empresa | `parentOrganization` | LocalBusiness → Organization |
| Autor trabalha na empresa | `worksFor` | Person → Organization |
| Artigo escrito por | `author` | BlogPosting → Person |
| Artigo publicado por | `publisher` | BlogPosting → Organization |
| Página descreve | `mainEntity` | WebPage → entidade principal |
| Página faz parte do site | `isPartOf` | WebPage → WebSite |
| Produto da marca | `brand` | Product → Organization ou Brand |
| Evento acontece em | `location` | Event → LocalBusiness ou Place |

## Grafo mínimo de qualquer página

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "{{site}}/#organizacao", "name": "{{nome}}", "url": "{{site}}/" },
    { "@type": "WebSite", "@id": "{{site}}/#site", "url": "{{site}}/", "name": "{{nome}}", "publisher": { "@id": "{{site}}/#organizacao" }, "inLanguage": "pt-BR" },
    { "@type": "WebPage", "@id": "{{url}}#pagina", "url": "{{url}}", "name": "{{title}}", "isPartOf": { "@id": "{{site}}/#site" }, "mainEntity": { "@id": "{{url}}#{{entidade}}" } }
  ]
}
```

Nas páginas internas, a Organization pode vir só com `@id`, `name` e `url`.
A versão completa fica na Home ou na página Sobre.
