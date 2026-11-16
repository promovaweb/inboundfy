# Modelos por tipo

Leia nos passos 4 e 5 do fluxo de `inboundfy-dados-estruturados`. Cada
modelo traz as propriedades exigidas (sem elas o Google não considera o item
válido) e as recomendadas (preencha quando o fato existe). Os valores entre
chaves vêm de `.inboundfy/context/` e do texto visível da página.

Todos os blocos abaixo entram dentro de `@graph`, junto com Organization e
WebSite descritos em [grafo e @id](grafo-e-identificadores.md).

## LocalBusiness

Use o subtipo mais específico: `Store`, `CafeOrCoffeeShop`, `Restaurant`,
`AccountingService`, `Dentist`, `AutoRepair`, `BeautySalon`,
`ProfessionalService`.

```json
{
  "@type": "{{subtipo}}",
  "@id": "{{url da unidade}}#unidade",
  "name": "{{nome da unidade}}",
  "parentOrganization": { "@id": "{{site}}/#organizacao" },
  "image": "{{foto da fachada}}",
  "url": "{{url da unidade}}",
  "telephone": "+55-{{DDD}}-{{número}}",
  "priceRange": "R$ 20 a R$ 80",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{rua e número}}",
    "addressLocality": "{{cidade}}",
    "addressRegion": "{{UF}}",
    "postalCode": "{{CEP}}",
    "addressCountry": "BR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": -21.7878, "longitude": -46.5613 },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "19:00"
    }
  ]
}
```

- Exigidas: `name`, `address`. Recomendadas: `telephone`, `geo`,
  `openingHoursSpecification`, `url`, `image`, `priceRange`.
- Endereço e telefone idênticos a `enderecos.md` e ao Perfil da Empresa no
  Google.
- Uma unidade por página. Rede com várias lojas tem uma página e um bloco
  por loja.

## BlogPosting ou Article

```json
{
  "@type": "BlogPosting",
  "@id": "{{url}}#artigo",
  "headline": "{{título visível}}",
  "description": "{{resumo}}",
  "image": ["{{imagem 16x9}}", "{{imagem 4x3}}", "{{imagem 1x1}}"],
  "datePublished": "2026-11-10T08:00:00-03:00",
  "dateModified": "2026-11-14T10:30:00-03:00",
  "author": { "@id": "{{url do autor}}#pessoa" },
  "publisher": { "@id": "{{site}}/#organizacao" },
  "mainEntityOfPage": { "@id": "{{url}}#pagina" },
  "inLanguage": "pt-BR"
}
```

```json
{
  "@type": "Person",
  "@id": "{{url do autor}}#pessoa",
  "name": "{{nome}}",
  "jobTitle": "{{função}}",
  "url": "{{url do perfil}}",
  "worksFor": { "@id": "{{site}}/#organizacao" },
  "sameAs": ["{{perfil profissional oficial}}"]
}
```

- `dateModified` muda só quando o conteúdo muda de fato.
- Autor com nome visível na página e cadastro em `pessoas.md`.
- Imagens com pelo menos 1.200 px de largura.

## Product com Offer

```json
{
  "@type": "Product",
  "@id": "{{url}}#produto",
  "name": "{{nome visível}}",
  "image": ["{{imagem}}"],
  "description": "{{descrição visível}}",
  "sku": "{{sku}}",
  "gtin13": "{{código de barras, se existir}}",
  "brand": { "@type": "Brand", "name": "{{marca}}" },
  "offers": {
    "@type": "Offer",
    "url": "{{url}}",
    "price": "{{0.00}}",
    "priceCurrency": "BRL",
    "priceValidUntil": "{{AAAA-MM-DD, se houver promoção}}",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "BR",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 7
    }
  }
}
```

- Exigidas para snippet de produto: `name` e um entre `offers`, `review` ou
  `aggregateRating`. Para listagem de comerciante: `price`,
  `priceCurrency`, `availability`.
- Valores de `availability`: `InStock`, `OutOfStock`, `PreOrder`,
  `BackOrder`, `LimitedAvailability`.
- Produto com variações (tamanho, cor) usa `ProductGroup` com
  `hasVariant`, quando a plataforma suporta.
- A janela de 7 dias de arrependimento do Código de Defesa do Consumidor
  para compras online pode ser marcada quando a política publicada no site
  for essa ou maior.
- Parcelamento e desconto no Pix ficam no texto. Marque como `price` o valor
  que a página apresenta como principal.

## Event

```json
{
  "@type": "Event",
  "@id": "{{url}}#evento",
  "name": "{{nome do evento}}",
  "description": "{{descrição}}",
  "startDate": "2026-12-05T09:00:00-03:00",
  "endDate": "2026-12-05T17:00:00-03:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": { "@id": "{{url da unidade}}#unidade" },
  "image": ["{{imagem}}"],
  "organizer": { "@id": "{{site}}/#organizacao" },
  "offers": {
    "@type": "Offer",
    "url": "{{url de inscrição}}",
    "price": "{{0.00}}",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-11-01T00:00:00-03:00"
  }
}
```

- Online: `OnlineEventAttendanceMode` e `location` do tipo
  `VirtualLocation` com `url`.
- Adiado ou cancelado: atualize `eventStatus` (`EventPostponed`,
  `EventCancelled`) em vez de apagar a página.

## SoftwareApplication

```json
{
  "@type": "SoftwareApplication",
  "@id": "{{url}}#aplicativo",
  "name": "{{nome}}",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "offers": { "@type": "Offer", "price": "{{0.00}}", "priceCurrency": "BRL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "{{4.6}}", "ratingCount": "{{n}}" }
}
```

- Exigidas: `name`, `offers.price` e uma avaliação (`aggregateRating` ou
  `review`) para o resultado com nota.
- Plano gratuito: `"price": "0"`. Planos pagos detalhados ficam na página de
  preços, cada um como Offer.

## VideoObject

```json
{
  "@type": "VideoObject",
  "@id": "{{url}}#video",
  "name": "{{título}}",
  "description": "{{descrição}}",
  "thumbnailUrl": ["{{miniatura}}"],
  "uploadDate": "2026-11-12T14:00:00-03:00",
  "duration": "PT6M30S",
  "contentUrl": "{{arquivo do vídeo}}",
  "embedUrl": "{{url do player}}"
}
```

- `duration` em ISO 8601 (`PT6M30S` = 6 min 30 s).
- Momentos-chave com `hasPart` do tipo `Clip`, quando a página exibe os
  capítulos.

## BreadcrumbList

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "{{site}}/" },
    { "@type": "ListItem", "position": 2, "name": "{{categoria}}", "item": "{{url da categoria}}" },
    { "@type": "ListItem", "position": 3, "name": "{{página atual}}" }
  ]
}
```

O último item pode ficar sem `item`. A trilha marcada precisa ser igual à
visível.

## FAQPage

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{pergunta visível}}",
      "acceptedAnswer": { "@type": "Answer", "text": "{{resposta visível completa}}" }
    }
  ]
}
```

- O Google exibe o resultado de FAQ só para sites governamentais e de saúde
  reconhecidos. Para os demais, a marcação ainda ajuda a compreensão.
- Perguntas e respostas idênticas às visíveis. Sem pergunta comercial
  disfarçada.
- Não use FAQPage em página de fórum ou de perguntas enviadas por usuários;
  nesse caso o tipo é `QAPage`.
