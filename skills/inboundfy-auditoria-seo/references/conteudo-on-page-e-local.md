# Conteúdo, on-page e SEO local

Leia no passo 5 do fluxo de `inboundfy-auditoria-seo`.

## On-page em escala

Use a exportação do rastreador e confira por grupo de páginas, não uma a
uma.

| Elemento | O que procurar | Ação típica |
| --- | --- | --- |
| Title | Ausente, duplicado, acima de cerca de 60 caracteres, sem termo da busca | Modelo de title por tipo de página |
| Meta description | Ausente, duplicada, genérica | Modelo por tipo; descrições próprias nas páginas de receita |
| H1 | Ausente, múltiplo, igual em várias páginas | Um H1 descritivo por página |
| Headings | Hierarquia pulada usada só para estilo | Corrigir no modelo do CMS |
| URL | Parâmetros, maiúsculas, IDs sem significado | Proposta de URL nova só com 301 registrado |
| Imagens | Sem texto alternativo, acima de 300 KB, sem dimensões | Compressão, WebP ou AVIF, alt descritivo |
| Links internos | Âncoras "clique aqui", páginas órfãs, links para 404 | Corrigir âncoras e destinos |

Revisão detalhada de uma página específica vai para `inboundfy-seo`.

## Conteúdo

### Conteúdo raso

Sinais: página com poucas linhas, categoria só com grade de produtos, página
de cidade com o mesmo texto trocando só o nome, artigo que não responde à
pergunta do title. Ações, da preferida para a última:

1. Dar conteúdo útil (explicação, tabela, FAQ real, prova).
2. Fundir com página mais completa e aplicar 301.
3. Remover e retornar 410, quando não há equivalente.

### Conteúdo duplicado

- Mesma descrição de produto copiada do fabricante em centenas de páginas.
- Versões de filtro (`?cor=preto`) indexáveis.
- Páginas de tag e categoria com o mesmo conteúdo.

Ações: canônica para a versão principal, texto próprio nas páginas de
receita, filtros fora do índice.

### Experiência, autoria e confiança

O Google pede atenção maior a temas que afetam dinheiro, saúde, segurança e
obrigações legais. Confira:

- autor nomeado, com função e experiência ligadas ao tema;
- página "Sobre" com empresa, endereço e CNPJ conforme `enderecos.md`;
- política de privacidade conforme LGPD, com canal do encarregado de dados;
- fontes citadas para números e regras;
- data de atualização visível em conteúdo que muda;
- sinais de experiência própria: fotos reais, casos, números da operação.

### Texto produzido em massa

Muitos artigos com a mesma estrutura, aberturas genéricas e nenhum dado
próprio indicam produção sem revisão. O problema não é a ferramenta usada,
é a falta de utilidade. Registre os grupos de páginas e encaminhe a
reescrita para `inboundfy-seo` e `inboundfy-anti-slop`.

## SEO local

Aplique quando a empresa atende clientes num endereço ou numa região.

### Perfil da Empresa no Google

- Perfil reivindicado e verificado para cada unidade.
- Categoria principal correta e mais específica possível ("Ótica", não
  "Loja").
- Horário, telefone, site e área atendida atualizados, incluindo feriados.
- Fotos reais da fachada, do interior e da equipe.
- Avaliações respondidas, inclusive as negativas, com prazo de resposta.
- Link para o site aponta para a página da unidade, não só para a Home.
- Produtos, serviços e postagens preenchidos quando a categoria permite.

### NAP (nome, endereço, telefone)

- Compare o NAP do site, do Perfil da Empresa, das redes sociais e de
  diretórios com `.inboundfy/context/enderecos.md`.
- Pequenas variações (abreviação de "Avenida") toleram; telefone ou número
  diferente não.
- Divergência de dado oficial vai para `inboundfy-contexto-institucional`
  confirmar antes de qualquer correção pública.
- Presença em diretórios e citações locais é trabalho de
  `inboundfy-growth-diretorios` e `inboundfy-seo-links-externos`.

### Páginas locais

- Uma página por unidade com endereço, mapa, horário, telefone, WhatsApp,
  fotos, serviços daquela unidade e como chegar.
- Páginas por cidade sem unidade física só com conteúdo real daquela
  região (clientes atendidos, prazos, particularidades). Texto trocando
  só o nome da cidade conta como conteúdo raso.
- Marcação LocalBusiness por unidade, via `inboundfy-dados-estruturados`.

## Perguntas para a parte de conteúdo

1. As páginas de receita têm texto que responde à busca, ou só grade e CTA?
2. Quem assina o conteúdo técnico e qual a experiência dessa pessoa?
3. Existem grupos de páginas quase iguais?
4. Os dados oficiais no site batem com `enderecos.md`?
5. As avaliações recebem resposta?
