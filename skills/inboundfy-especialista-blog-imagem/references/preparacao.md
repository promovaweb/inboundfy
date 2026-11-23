# Preparação do conjunto visual

## Fonte da imagem: foto real, não geração sintética

Capa de blog representa um tema do mundo real e se beneficia de fotografia
com contexto reconhecível; geração sintética tende a produzir imagem
genérica ou com artefato visual perceptível nesse uso. Por isso esta skill
usa exclusivamente busca em banco de fotos real (ex.: Unsplash ou
equivalente configurado pelo usuário), nunca `imagegen`, Midjourney, DALL-E,
Stable Diffusion ou ferramenta de geração sintética. Peça visual composta
com texto sobreposto (card, slide, thumbnail com título) usa
`inboundfy-base-imagem` em vez desta skill.

## Perguntas antes da composição

1. Qual objeto ou atividade o artigo realmente descreve?
2. Qual API de banco fotográfico e variável estão configuradas?
3. Os dois recortes preservam o assunto sem marcas de terceiros?
