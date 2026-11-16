---
name: inboundfy-especialista-blog-imagem
description: Busca capa e thumbnail de blog em banco de fotos reais, com licença, crédito e recortes nas dimensões do canal. Use quando o pedido citar foto para artigo, capa de blog, thumbnail fotográfica ou troca de imagem do post.
---

# Inboundfy Blog Capa

Skill de imagem para o canal blog. Busca, seleciona, corta e salva a foto de
capa a partir de um banco de fotos real.

## Escopo

Cobre apenas a imagem de capa e thumbnail do artigo. O texto é
`inboundfy-especialista-blog`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catálogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

- `context/canais.md`: dimensão de cover e thumbnail exigida pelo canal.
- `context/glossario.md`: para conferir grafia em eventual legenda/crédito.

Consulte `context/proibicoes.md`, `context/estruturas-proibidas.md`, `context/glossario.md`, `context/marca-voz.md`, `context/aprendizado.md` e `brand/` quando existir. Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md` antes de compor ou revisar texto público. Falta de apoio obrigatório retorna a `inboundfy-setup`; esta skill não repara a instalação.

## Entrada esperada

O slug ou caminho do artigo já escrito por `inboundfy-especialista-blog` e o tema
central do artigo para orientar a busca da foto.

Receba também ID, brief aprovado, versão da copy aprovada pela validadora de texto e formato do canal. Na retomada, leia o relatório de `inboundfy-validador-blog-imagem` e identifique a rodada a corrigir.

## Fluxo

Antes da composição, leia [preparação do conjunto visual](references/preparacao.md). No passo 1, consulte [formato, template e exemplo](REFERENCIA.md) para montar o brief visual.

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

Aplique os oito itens do [checklist espelhado](REFERENCIA.md#checklist-numerado-espelhado) a todos os arquivos.

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

## Responsabilidade do grupo

Produza cover.jpg, thumbnail.jpg, credito.md e README.md; frontmatter do artigo atualizado com a chave de capa já adotada pelo projeto. Mantenha o estado `revisao` até o relatório de `inboundfy-validador-blog-imagem` aprovar a versão atual. Envie à validadora ID, brief, versão do texto, README, todas as exportações e derivados, fontes, dimensões, previews e pendências. Receba o relatório por rodada e reenvie o conjunto completo após corrigir os achados.

## Idempotência

Se a capa e a thumbnail do slug já existirem, não sobrescreva por padrão.
Substitua apenas quando o usuário pedir refação ou troca de imagem daquele
slug.
