---
name: inboundfy-especialista-blog
description: Escreve e revisa artigos de blog com intenção de busca, fontes, título e metadata a partir de brief aprovado. Use quando o pedido for redigir um post, atualizar um artigo ou transformar o brief de blog em texto para revisão.
---

# Inboundfy Blog Redator

Skill de canal para artigos de blog. Recebe um brief já aprovado (de
`inboundfy-planejamento` ou fornecido diretamente pelo usuário em peça avulsa) e
produz o artigo final. Não escolhe tema, não define estratégia de SEO
sozinha e não publica em CMS; isso é integração do projeto que adota o
Inboundfy.

## Escopo

Cobre o texto do artigo. Para a imagem de capa, use `inboundfy-especialista-blog-imagem`. Para
página institucional ou landing page, esta skill não se aplica; o Inboundfy
trata isso como um canal próprio a ser definido em `context/canais.md` do
projeto, não como blog.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

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

## Entrada esperada

Brief de blog aprovado por `inboundfy-planejamento` ou brief avulso do usuário, com ângulo, objetivo, persona, ativos de apoio, restrições e palavra-chave ou intenção de busca.

## Fluxo

1. Leia a entrada completa, `ESCRITA.md` e os contextos exigidos. Resolva lacunas obrigatórias com o planejamento ou a manutenção de contexto indicada por `CONTEXTO.md` antes de redigir. Consulte [o diagnóstico e os parâmetros de blog](REFERENCIA.md#diagnóstico-da-peça).
2. Confirme a intenção com `inboundfy-base-seo` antes de escrever título, description, slug ou outline. Se faltar pergunta de busca, devolva o recorte ao planejamento.
3. Monte um H1 e H2/H3 com função própria. Aplique o método e as aberturas por intenção de [REFERENCIA.md](REFERENCIA.md#método-de-produção). Execute A4 sobre outline, abertura e primeira unidade antes de expandir.
4. Redija a explicação, o exemplo interpretado e seu limite. Use apenas fontes do contexto ou da pesquisa; confirme números, funcionalidades e preços. Ao mencionar oferta autorizada, consulte [estrutura editorial](references/estrutura-editorial.md). Feche com a ação prevista no brief.
5. Execute `inboundfy-copy-editor`, trate os achados e releia o artigo inteiro. Confirme title, description e slug com `inboundfy-base-seo` no perfil de metadata.
6. Salve no caminho definido em [Saída](#saída), com [o template da peça](REFERENCIA.md#template-da-peça), envelope compartilhado e `brief` em pacote. Na montagem, leia [o exemplo completo](references/exemplo-completo.md); preserve os parâmetros aprovados.
7. Execute A5 com `inboundfy-anti-slop` e confira os 11 itens de [conferência do par](REFERENCIA.md#checklist-numerado-do-par). Entregue a `inboundfy-validador-blog` candidata, ID, caminho, brief ou entrada avulsa, persona, fontes, pendências e registros de revisão editorial e A5.
8. Se receber reprovação de `inboundfy-validador-blog`, leia o relatório, corrija o alcance solicitado e repita revisão editorial, A5 e leitura integral. Reenvie à mesma validadora até aprovação da versão atual.
9. Após aprovação textual, encaminhe à `inboundfy-especialista-blog-imagem` quando o canal exigir capa, com ID, brief, versão textual aprovada, slug, tema e formato. Retorne a `inboundfy-planejamento` com candidata, fontes, relatório aprovado e digest atual.

## Saída

Artigo em Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal blog; em pacote, dentro de
`97-ativos-finais/blog/<slug>/README.md`.

## Validação

- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Título, description e slug validados por `inboundfy-base-seo`.
- Toda afirmação sobre produto, serviço, preço ou ferramenta confere com
  `context/`.
- Frontmatter completo, incluindo `brief` quando aplicável.
- Aprovação registrada por `inboundfy-validador-blog`.

## Responsabilidade do grupo

O grupo `especialista` responde pela redação e pelas correções de artigos de blog. Preserve o brief, o ID, a origem factual e o estado real da candidata; encaminhe somente a versão aprovada. O [guia do grupo](REFERENCIA.md#guia-específico-do-grupo) define o registro da entrega.

## Idempotência

Ao editar um artigo já existente, altere apenas o que o brief ou o pedido do
usuário indicar. Não reescreva seções que não foram objeto do pedido.
