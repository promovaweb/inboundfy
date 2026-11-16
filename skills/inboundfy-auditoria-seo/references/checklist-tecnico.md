# Checklist técnico

Leia nos passos 3 e 4 do fluxo de `inboundfy-auditoria-seo`. Cada item traz
o que conferir, onde conferir e o que costuma dar errado.

## Rastreamento

### robots.txt

- Abra `https://dominio/robots.txt`. Ele precisa responder 200 ou 404. Um
  erro 5xx faz o Google suspender o rastreamento.
- Procure `Disallow` que impede seções com valor de busca (categorias, blog,
  páginas de serviço). Plataformas trocadas costumam trazer regras herdadas.
- Confira se CSS e JavaScript necessários para renderizar a página não estão
  impedidos.
- Confira a linha `Sitemap:` com a URL absoluta do sitemap.
- Robots impede rastreamento, não indexação. Página impedida no robots pode
  aparecer no índice sem descrição. Para tirar do índice, use `noindex` e
  deixe rastrear.

### Sitemap XML

- Responde 200, é XML válido e lista só URLs canônicas com status 200.
- Não inclui URLs com `noindex`, redirecionadas ou com parâmetros.
- `lastmod` reflete a data real da última alteração.
- Está enviado no Search Console. Compare "URLs enviadas" com "indexadas".
- Sites grandes usam índice de sitemaps, com até 50 mil URLs por arquivo.

### Códigos de status

| Status | Leitura | Ação |
| --- | --- | --- |
| 200 | Página acessível | Conferir canônica e indexação |
| 301 | Mudança definitiva | Apontar direto para o destino final, sem cadeia |
| 302 | Mudança temporária | Trocar por 301 se a mudança for definitiva |
| 404 | Não encontrada | Redirecionar se existe equivalente; manter 404 se não existe |
| 410 | Removida de vez | Uso correto para página excluída sem substituta |
| 5xx | Erro do servidor | Urgente: o Google reduz o rastreamento |
| Soft 404 | Status 200 com página vazia ou "produto indisponível" | Dar conteúdo útil ou retornar 404/410 |

### Rastreabilidade de links

- Links internos usam `<a href>` real. Links feitos só com JavaScript (botão
  com `onclick`) podem não ser seguidos.
- Paginação acessível por links rastreáveis.
- Páginas órfãs (no sitemap, sem link interno) aparecem cruzando a lista do
  rastreador com o sitemap.
- Profundidade: páginas comerciais a até três cliques da Home.

## Indexação

- **Relatório de páginas do Search Console.** Leia os motivos de exclusão:
  "Rastreada, mas não indexada" indica conteúdo fraco ou duplicado;
  "Descoberta, mas não indexada" indica pouco rastreamento ou site novo;
  "Página alternativa com tag canônica adequada" é esperado.
- **Inspeção de URL** para cada página de `links.md`: indexada, canônica
  escolhida pelo Google, data do último rastreamento.
- **noindex acidental.** Procure `<meta name="robots" content="noindex">` e o
  cabeçalho `X-Robots-Tag` em páginas que deveriam ranquear. Ambientes de
  homologação publicados com noindex são causa comum depois de lançamento.

### Canônicas

- Toda página indexável tem `rel="canonical"` absoluto apontando para si
  mesma ou para a versão principal.
- A canônica aponta para URL com status 200, sem redirecionamento.
- Versões com e sem `www`, com e sem barra final, com e sem parâmetros de
  campanha (`utm_`) convergem para uma única URL.
- Canônica no HTML e canônica no cabeçalho HTTP não podem divergir.
- O Google trata a canônica como sugestão. Se ele escolhe outra, investigue
  conteúdo duplicado ou links internos apontando para a versão errada.

### Redirecionamentos

- Em migração, cada URL antiga com tráfego ou links recebe 301 para a
  equivalente nova. Redirecionar tudo para a Home vira soft 404.
- Sem cadeias (A → B → C) e sem ciclos.
- Mapa de redirecionamentos guardado como anexo da auditoria.

## Velocidade e Core Web Vitals

- Use o relatório de Core Web Vitals do Search Console para grupos de
  páginas e o PageSpeed Insights para causas por URL.
- Causas frequentes de LCP alto: imagem principal pesada, imagem sem
  prioridade, fonte bloqueante, servidor lento.
- Causas de INP alto: JavaScript pesado de terceiros (chat, pixels,
  widgets), scripts de tag manager acumulados.
- Causas de CLS alto: imagens e anúncios sem dimensões, banner de cookies
  que empurra o conteúdo, fonte que troca de tamanho ao carregar.
- Público brasileiro acessa muito por celular em rede móvel. Teste sempre a
  versão mobile.

## Mobile

- O Google indexa a versão mobile. Conteúdo, links e marcação que existem
  só no desktop não contam.
- Meta viewport presente, texto legível sem zoom, botões com área de toque
  suficiente, sem rolagem horizontal.
- Pop-up que cobre o conteúdo logo na entrada atrapalha a leitura e o
  ranqueamento.

## HTTPS e segurança

- Certificado válido, sem aviso no navegador.
- HTTP redireciona com 301 para HTTPS em todas as URLs.
- Sem conteúdo misto (imagem ou script carregado por HTTP).
- Relatório de segurança do Search Console sem alerta de malware ou
  invasão.

## Idiomas e países

Aplique quando o site tem mais de um idioma ou atende mais de um país.

- Cada versão tem URL própria (`/pt-br/`, `/es/` ou domínio por país).
  Troca de idioma só por cookie ou JavaScript impede a indexação das versões.
- `hreflang` em todas as versões, com retorno recíproco: se a página em
  português aponta para a espanhola, a espanhola aponta de volta.
- Cada versão traz `hreflang` para si mesma e um `x-default`.
- Códigos válidos: `pt-BR`, `pt-PT`, `es`, `es-AR`, `en`.
- Canônica de cada versão aponta para ela mesma, não para a versão principal.
- Conteúdo traduzido de verdade, com moeda e exemplos locais. Página com
  só o menu traduzido conta como duplicada.

## Registro de achado técnico

```markdown
| # | Área | URL ou alcance | Achado | Comprovação | Impacto | Esforço | Prioridade | Ação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{n}} | Indexação | {{URL}} | {{o que está errado}} | {{captura da Inspeção de URL, linha do rastreador}} | {{}} | {{}} | {{}} | {{correção verificável}} |
```
