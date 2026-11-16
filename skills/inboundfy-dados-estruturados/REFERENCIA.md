# Referência de Dados estruturados

Material de apoio de `inboundfy-dados-estruturados`. O `SKILL.md` diz a
ordem; este arquivo diz que tipo usar, como montar e como conferir, com um
caso completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill
**inboundfy-dados-estruturados**, do grupo **capacidade**. Leia os detalhes
compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 | [grafo e @id](references/grafo-e-identificadores.md) | Mapa de entidades do site, padrão de `@id`, `sameAs`, ligação entre páginas. |
| 4 e 5 | [modelos por tipo](references/modelos-por-tipo.md) | JSON-LD pronto para Organization, LocalBusiness, Article, Product, Event, SoftwareApplication, VideoObject, BreadcrumbList e FAQPage. |
| 6 a 8 | [validação e implementação](references/validacao-e-implementacao.md) | Ferramentas, erros frequentes, implementação por CMS e site estático, conferência pós-publicação. |

## Princípios

1. **Só fato visível.** A marcação descreve o que a página mostra. Preço,
   avaliação ou data que não aparecem no texto não entram no código.
2. **Só fato confirmado.** Cada valor tem fonte em `.inboundfy/context/` ou
   na peça aprovada.
3. **JSON-LD.** Formato recomendado pelo Google, separado do HTML e fácil de
   manter. Microdata e RDFa só quando o CMS não permite outra forma.
4. **Um grafo por página.** Use `@graph` com entidades ligadas por `@id`.
5. **Marcação não garante resultado aprimorado.** O Google decide exibir ou
   não. O ganho certo é a compreensão da página por buscadores e sistemas de
   IA.

## Tipos e resultados aprimorados

| Página | Tipo principal | Tipos de apoio | Resultado aprimorado possível | Observação |
| --- | --- | --- | --- | --- |
| Home, Sobre | Organization (ou subtipo) | WebSite, WebPage | Painel de conhecimento, logo | Uma única Organization com `@id` fixo |
| Página de unidade física | LocalBusiness (ou subtipo, como `Store`, `CafeOrCoffeeShop`, `AccountingService`) | PostalAddress, OpeningHoursSpecification | Informações locais | Dados idênticos ao Perfil da Empresa no Google |
| Artigo de blog | BlogPosting ou Article | Person (autor), BreadcrumbList | Título, imagem e data em destaque | `datePublished` e `dateModified` com fuso |
| Produto de loja virtual | Product | Offer, Brand, AggregateRating | Preço, estoque, avaliações, listagem de comerciante | `price` e `availability` obrigatórios para listagem |
| Evento, curso presencial, webinar | Event | Place ou VirtualLocation, Offer | Lista de eventos | `eventAttendanceMode` e `eventStatus` |
| Aplicativo ou SaaS | SoftwareApplication | Offer, AggregateRating | Nota e preço do app | `applicationCategory` e `operatingSystem` |
| Página com vídeo principal | VideoObject | Person, Organization | Vídeo em destaque, momentos-chave | `thumbnailUrl`, `uploadDate`, `duration` |
| Qualquer página com trilha | BreadcrumbList | | Trilha no lugar da URL | Igual à trilha visível |
| Perguntas frequentes | FAQPage | Question, Answer | Exibido só para sites governamentais e de saúde reconhecidos | Ainda ajuda a compreensão; nunca use para perguntas que não estão na página |
| Passo a passo | HowTo | | Não exibido pelo Google desde 2023 | Marque só se outro buscador ou uso interno pedir |

Consulte a galeria de resultados aprimorados do Google Search Central antes
de prometer um resultado. A lista muda.

## Métricas de referência

| Indicador | Onde medir | Leitura |
| --- | --- | --- |
| Itens válidos por tipo | Search Console, relatórios de aprimoramento | Deve crescer com as páginas publicadas |
| Itens com erro | Search Console | Meta: zero; erro remove o item do resultado aprimorado |
| Itens com aviso | Search Console | Propriedade recomendada ausente; corrigir quando o dado existe |
| Impressões com resultado aprimorado | Search Console, Desempenho, filtro "Aparência na pesquisa" | Compare CTR com e sem o recurso |
| CTR de produto com preço e estoque | Search Console | Costuma superar o resultado simples; confirme com dado do projeto |

## Template do pacote

````markdown
---
id: {{id}}
skill: inboundfy-dados-estruturados
tipo: dados-estruturados
estado: rascunho
entrada:
  - {{URL ou caminho da peça}}
fontes:
  - .inboundfy/context/enderecos.md
  - {{outros arquivos de contexto}}
proxima_skill: {{quem mantém o site | inboundfy-auditoria-seo}}
---

# Dados estruturados: {{página ou modelo}}

## Tipo escolhido

- **Assunto principal:** {{}}
- **Tipo principal:** {{}}
- **Tipos de apoio:** {{}}
- **Resultado aprimorado buscado:** {{ou "só compreensão"}}

## Fatos

| Propriedade | Valor | Onde aparece na página | Fonte |
| --- | --- | --- | --- |
| name | {{}} | {{H1}} | {{arquivo}} |
| offers.price | {{}} | {{bloco de preço}} | .inboundfy/context/ofertas.md |

## JSON-LD

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {{entidades}}
  ]
}
```

## Validação

| Ferramenta | Data | Resultado | Ação |
| --- | --- | --- | --- |
| Teste de pesquisa aprimorada | {{}} | {{sem erro, n avisos}} | {{}} |
| Validador do Schema.org | {{}} | {{}} | {{}} |

## Implementação

- **Caminho escolhido:** {{plugin, campo do CMS, componente}}
- **Onde inserir:** {{}}
- **Marcação anterior a remover:** {{ou "nenhuma"}}

## Conferência pós-publicação

- [ ] Inspeção de URL mostra a marcação na página renderizada.
- [ ] Search Console sem erro no relatório do tipo após o rastreamento.

## Pendências

- {{fato sem fonte ou "nenhuma"}}
````

## Exemplo completo: Café Serra Azul

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A Café Serra Azul é uma torrefação de cafés especiais em Poços
de Caldas (MG). Tem uma cafeteria com loja na Rua Assis Figueiredo e uma loja
virtual que envia para todo o Brasil, com 5% de desconto no Pix. Oferece um
curso presencial de barista uma vez por mês. O site roda em WordPress com
WooCommerce e um plugin de SEO que já gera Organization e BreadcrumbList.

**Pedido.** "Quero que os cafés apareçam com preço e estoque no Google e que
o curso apareça nos eventos."

**Diagnóstico registrado.**

1. Assuntos: produto (páginas de café), evento (página do curso), unidade
   local (página da cafeteria).
2. Fatos confirmados: preços e pesos em `ofertas.md`; endereço, telefone,
   WhatsApp e CNPJ em `enderecos.md`; data, vagas e valor do curso em
   `ofertas.md`; avaliações coletadas na própria página de produto pelo
   WooCommerce, com 47 avaliações no Catuaí Amarelo 250 g.
3. O plugin gera Organization e BreadcrumbList; o WooCommerce gera Product
   sem `brand` e sem `shippingDetails`.
4. Resultados possíveis: listagem de comerciante com preço e estoque para
   produto; lista de eventos para o curso.
5. Estoque muda toda semana; o WooCommerce atualiza sozinho.
6. Avaliações reais nos produtos: sim.
7. Implementação: campos do plugin e um trecho no modelo do tema filho.

**Fatos da página "Café Catuaí Amarelo 250 g".**

| Propriedade | Valor | Onde aparece | Fonte |
| --- | --- | --- | --- |
| name | Café Catuaí Amarelo Torra Média 250 g | H1 | `produtos.md` |
| offers.price | 54.90 | Bloco de preço ("R$ 54,90") | `ofertas.md` |
| offers.availability | InStock | Botão "Comprar" ativo | WooCommerce |
| aggregateRating | 4,8 de 5, 47 avaliações | Abaixo do preço | WooCommerce |
| brand | Café Serra Azul | Logo e texto | `empresa.md` |
| offers.shippingDetails | Frete grátis acima de R$ 199 | Faixa no topo | `ofertas.md` |

**Três caminhos de implementação apresentados.**

1. **Recomendado.** Manter o Product do WooCommerce e completar `brand`,
   `gtin` quando existir e `shippingDetails` com um filtro no tema filho.
   Organization fica no plugin com o `@id` padronizado. Menor mudança e uma
   fonte só para preço e estoque.
2. Desligar a marcação do WooCommerce e escrever todo o Product à mão no
   modelo. Mais controle e mais manutenção quando o preço mudar.
3. Trocar de plugin de SEO para um que gera Product completo. Resolve tudo
   de uma vez e exige reconfigurar o site inteiro.

A equipe escolhe o caminho 1.

**JSON-LD resultante da página do produto (trecho do grafo).**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cafeserraazul.com.br/#organizacao",
      "name": "Café Serra Azul",
      "url": "https://cafeserraazul.com.br/",
      "logo": "https://cafeserraazul.com.br/img/logo-serra-azul.png"
    },
    {
      "@type": "Product",
      "@id": "https://cafeserraazul.com.br/loja/catuai-amarelo-250g/#produto",
      "name": "Café Catuaí Amarelo Torra Média 250 g",
      "image": "https://cafeserraazul.com.br/img/catuai-amarelo-250g.webp",
      "description": "Café especial do Sul de Minas, torra média, notas de caramelo e laranja.",
      "sku": "CSA-CAT-250",
      "brand": { "@id": "https://cafeserraazul.com.br/#organizacao" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "47"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://cafeserraazul.com.br/loja/catuai-amarelo-250g/",
        "price": "54.90",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": { "@id": "https://cafeserraazul.com.br/#organizacao" },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "BR" },
          "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "BRL" },
          "description": "Frete grátis em pedidos acima de R$ 199"
        }
      }
    }
  ]
}
```

O desconto de 5% no Pix fica fora de `price`, porque o preço exibido como
principal é R$ 54,90. Marcar R$ 52,16 criaria divergência com o texto
visível.

**Página do curso.** Event com `eventAttendanceMode` presencial, `location`
apontando para o `@id` da cafeteria, `offers` com R$ 380,00 e
`availability` ligado às vagas. Data e vagas atualizadas por quem publica o
curso a cada mês, registrado como pendência recorrente.

**Validação.** Teste de pesquisa aprimorada em 2026-11-14: Product válido
para listagem de comerciante e snippets de produto; um aviso de `gtin`
ausente (o café não tem código de barras; aviso aceito e registrado).

**Handoff.** Código e roteiro para a agência que mantém o tema;
`inboundfy-auditoria-seo` confere os relatórios de aprimoramento na próxima
rodada.

## Checklist

- [ ] O assunto principal da página foi identificado e o tipo escolhido pela
      tabela.
- [ ] Cada propriedade tem valor visível na página e fonte em contexto.
- [ ] Fato sem fonte ficou fora do código e virou pendência.
- [ ] Organization e WebSite usam o `@id` fixo do mapa de entidades.
- [ ] Preço com `priceCurrency: "BRL"` e ponto decimal.
- [ ] Datas no formato ISO 8601 com fuso (`2026-11-14T09:00:00-03:00`).
- [ ] BreadcrumbList igual à trilha visível.
- [ ] FAQPage só com perguntas e respostas visíveis na página.
- [ ] Avaliação marcada só quando coletada na própria página e sobre o
      produto, nunca da empresa sobre si mesma.
- [ ] Marcação duplicada entre plugin e código manual foi resolvida.
- [ ] Teste de pesquisa aprimorada e validador do Schema.org rodados, com
      data.
- [ ] Três caminhos de implementação apresentados quando havia escolha.
- [ ] Conferência pós-publicação registrada.

## Erros comuns

- **Marcar o que a página não mostra.** Preço, nota ou horário só no código
  é considerado marcação enganosa e pode gerar ação manual.
- **Preço com vírgula ou símbolo.** `"price": "R$ 54,90"` é inválido. Use
  `"54.90"` e a moeda em `priceCurrency`.
- **Duas Organization diferentes.** Plugin e código manual com nomes ou
  `@id` distintos confundem a entidade. Padronize o `@id`.
- **FAQ inventada para ganhar espaço.** Além de não exibir para a maioria dos
  sites, perguntas fora da página violam as diretrizes.
- **Avaliações copiadas de outro site** ou depoimentos de
  `depoimentos.json` marcados como AggregateRating. A nota precisa vir de
  avaliações coletadas e exibidas na página.
- **Event com data passada.** Atualize ou remova depois do evento.
- **Concluir "sem marcação" lendo o HTML bruto.** Plugins e frameworks podem
  injetar o JSON-LD por JavaScript. Confira na página renderizada.
- **Mudar `@id` publicado.** Quebra as ligações do grafo já lidas pelo
  buscador. Altere só com pedido explícito.
- **Dados de LocalBusiness diferentes do Perfil da Empresa no Google.** Use
  `enderecos.md` como fonte única para os dois.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para dados estruturados, os campos próprios são: tipo principal, fatos com
fonte, `@id` das entidades, resultado da validação e caminho de
implementação.

## Diagnóstico no fluxo

No passo 2, leia [perguntas de diagnóstico](references/diagnostico.md) e registre as respostas no artefato.
