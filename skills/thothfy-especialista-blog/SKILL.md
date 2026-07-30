---
name: thothfy-especialista-blog
description: >
  Escreve ou edita artigos de blog a partir de um brief aprovado (fase 5 do
  pipeline). Aplica ESCRITA.md, a voz de context/marca-voz.md e a intenção de
  busca validada por thothfy-base-seo. Não decide estratégia nem pauta — recebe o
  brief pronto.
---

# Thothfy Blog Redator

Skill de canal para artigos de blog. Recebe um brief já aprovado (de
`thothfy-planejamento-04-briefing` ou fornecido diretamente pelo usuário em peça avulsa) e
produz o artigo final. Não escolhe tema, não define estratégia de SEO
sozinha e não publica em CMS — isso é integração do projeto que adota o
Thothfy.

## Escopo

Cobre o texto do artigo. Para a imagem de capa, use `thothfy-especialista-blog-imagem`. Para
página institucional ou landing page, esta skill não se aplica — o Thothfy
trata isso como um canal próprio a ser definido em `context/canais.md` do
projeto, não como blog.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/marca-voz.md`: tom, pessoa gramatical, vocabulário, exemplos de
  bom e mau texto.
- `context/publico.md`: persona a que o artigo se dirige, para calibrar nível
  técnico e jargão.
- `context/proibicoes.md`: vetos que reprovam o parágrafo automaticamente.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md` e/ou `context/servicos.md`: quando o artigo mencionar
  algo que a empresa oferece.
- `context/ferramentas.md`: quando o artigo citar ferramenta de terceiro, para
  saber se pode linkar e para onde.

Se qualquer um desses arquivos estiver no estado de template vazio para o
dado que o artigo precisa, pare e acione a skill de manutenção correspondente
(`CONTEXTO.md`) antes de escrever.

## Estrutura persuasiva

Artigo de blog é informativo por padrão e segue `ESCRITA.md` diretamente —
não force AIDA, PAS ou PASTOR num texto que existe para responder uma
intenção de busca, não para vender. A única técnica de
`ESTRUTURAS-PERSUASIVAS.md` que se aplica aqui é **FAB**: sempre que o
artigo mencionar um produto ou serviço da empresa, traduza a característica
citada (`context/produtos.md` / `context/servicos.md`) em vantagem prática e
benefício real para o leitor antes de fechar o parágrafo, em vez de deixar a
menção solta como propaganda.

## Entrada esperada

Um brief com: canal (blog), ângulo, objetivo, público-alvo, ativos de apoio
(dados, exemplos, citações vindos de `thothfy-planejamento-02-pesquisa` quando existir
pacote), palavra-chave ou intenção de busca já validada, e restrições
específicas da peça.

## Fluxo

1. Leia o brief por completo antes de qualquer redação.
2. Leia `ESCRITA.md` e os arquivos de contexto exigidos acima.
3. Se o brief não trouxer intenção de busca validada, acione `thothfy-base-seo`
   antes de escrever título, description, slug ou outline — não escreva a
   partir de tema solto sem pergunta real de busca por trás.
4. Escreva o outline: um H1, hierarquia de H2/H3 cobrindo a dúvida real do
   público, sem heading em pergunta seguido de resposta genérica. Use as
   fórmulas de abertura por intenção de `REFERENCIA.md`.
5. Escreva o corpo em prosa contínua, seguindo `ESCRITA.md`: mostre o objeto,
   explique a função, dê exemplo real (de `context/` ou do material de
   pesquisa do pacote), interprete o exemplo, aponte limite ou falha
   provável.
6. Insira menção a produto, serviço ou ferramenta apenas quando o brief
   pedir e sempre com base no `context/` correspondente — nunca invente
   funcionalidade ou preço.
7. Feche com uma ação real, não uma frase decorativa. Use CTA definido em
   `context/marca-voz.md` quando existir um padrão.
8. Rode `thothfy-base-editor` no rascunho — ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md` — e corrija todo parágrafo abaixo de 90%.
9. Rode `thothfy-base-seo` no perfil de metadata para confirmar title, description
   e slug finais.
10. Salve o artigo com frontmatter incluindo, no mínimo: `title`,
    `description`, `slug`, e — se fizer parte de um pacote — `brief` apontando
    para o arquivo em `04-briefs/`, seguindo o template de `REFERENCIA.md`.
11. Encaminhe para `thothfy-especialista-blog-imagem` quando o canal exigir imagem, e depois
    para `thothfy-planejamento-06-auditoria`.

## Encaminhamento obrigatório

Antes de considerar o artigo pronto, acione `thothfy-validador-blog`. Em
caso de reprovação, aplique as correções do relatório e reenvie o artigo
inteiro à mesma validadora até a aprovação. Só então avance para imagem e
auditoria do pacote.

## Saída

Artigo em Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal blog — em pacote, dentro de
`97-ativos-finais/blog/<slug>/README.md`.

## Validação

- Nenhum parágrafo abaixo de 90% na auditoria de `thothfy-base-editor`.
- Título, description e slug validados por `thothfy-base-seo`.
- Toda afirmação sobre produto, serviço, preço ou ferramenta confere com
  `context/`.
- Frontmatter completo, incluindo `brief` quando aplicável.
- Aprovação registrada por `thothfy-validador-blog`.

## Idempotência

Ao editar um artigo já existente, altere apenas o que o brief ou o pedido do
usuário indicar. Não reescreva seções que não foram objeto do pedido.
