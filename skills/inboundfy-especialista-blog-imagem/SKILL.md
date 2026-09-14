---
name: inboundfy-especialista-blog-imagem
description: >
  Busca capa e thumbnail de post via banco de fotos real, nas dimensões
  exigidas pelo canal. Capas de blog NÃO são geradas por IA; esta skill usa
  exclusivamente foto real de banco de imagens, respeitando licença e
  crédito.
---

# Inboundfy Blog Capa

Skill de imagem para o canal blog. Busca, seleciona, corta e salva a foto de
capa a partir de um banco de fotos real.

## Fonte da imagem: foto real, não geração sintética

Capa de blog representa um tema do mundo real e se beneficia de fotografia
com contexto reconhecível; geração sintética tende a produzir imagem
genérica ou com artefato visual perceptível nesse uso. Por isso esta skill
usa exclusivamente busca em banco de fotos real (ex.: Unsplash ou
equivalente configurado pelo usuário), nunca `imagegen`, Midjourney, DALL-E,
Stable Diffusion ou ferramenta de geração sintética. Peça visual composta
com texto sobreposto (card, slide, thumbnail com título) usa
`inboundfy-base-imagem` em vez desta skill.

## Escopo

Cobre apenas a imagem de capa e thumbnail do artigo. O texto é
`inboundfy-especialista-blog`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/canais.md`: dimensão de cover e thumbnail exigida pelo canal.
- `context/glossario.md`: para conferir grafia em eventual legenda/crédito.

## Entrada esperada

O slug ou caminho do artigo já escrito por `inboundfy-especialista-blog`, e o tema
central do artigo para orientar a busca da foto.

## Fluxo

1. Confirme a variável de ambiente da API do banco de fotos configurado no
   ambiente do usuário; se ausente, oriente como obter uma chave gratuita e
   pare até que ela exista.
2. Busque fotos reais relacionadas ao tema central do artigo, seguindo a
   estratégia de busca de `REFERENCIA.md` (objeto concreto, não metáfora
   abstrata) e evitando imagem genérica de banco de imagens sem relação
   com o conteúdo.
3. Selecione a foto usando o checklist de seleção de `REFERENCIA.md`, baixe
   e corte nas dimensões de cover e thumbnail definidas em
   `context/canais.md`.
4. Registre o crédito da foto (autor, link, banco de origem) em um arquivo
   de nota junto ao item, conforme exigido pela licença.
5. Atualize o frontmatter do artigo com o caminho da imagem de capa.

## Encaminhamento obrigatório

Antes de considerar o conjunto pronto, acione
`inboundfy-validador-blog-imagem`. Em caso de reprovação, corrija os achados e
reenvie cover, thumbnail e crédito até a aprovação.

## Saída

Arquivo de imagem de cover e thumbnail salvos junto ao artefato de texto, no
diretório do item (`97-ativos-finais/blog/<slug>/`), mais a nota de crédito.

## Validação

- A imagem é uma foto real de banco de fotos, nunca gerada por IA.
- Dimensões batem exatamente com o exigido em `context/canais.md`.
- Crédito da foto está registrado conforme a licença exige.
- Aprovação registrada por `inboundfy-validador-blog-imagem`.

## Idempotência

Se a capa e a thumbnail do slug já existirem, não sobrescreva por padrão.
Substitua apenas quando o usuário pedir refação ou troca de imagem daquele
slug.
