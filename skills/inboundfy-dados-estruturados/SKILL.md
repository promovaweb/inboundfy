---
name: inboundfy-dados-estruturados
description: Entrega JSON-LD validado, mapa de entidades e roteiro de implementação com fatos visíveis e confirmados da página. Use quando o pedido citar Schema.org, dados estruturados, erros no Search Console, breadcrumbs ou marcação de produtos e artigos.
---

# Dados estruturados

Esta skill escolhe a marcação certa para cada tipo de página e escreve o
JSON-LD com fatos que a própria página mostra e que o contexto do projeto
confirma: organização, unidade local, artigo, produto com oferta em reais,
evento, aplicativo, vídeo, trilha de navegação e perguntas frequentes. Ela
entrega o código, o mapa de entidades do site e a lista de conferência.

Ela não decide o conteúdo da página (papel de `inboundfy-seo` e das
`inboundfy-especialista-blog` para artigos), não audita o site inteiro (papel de
`inboundfy-auditoria-seo`) e não publica nada no site: entrega o código para
quem mantém o site aplicar.

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| Criar JSON-LD para uma página ou modelo de página | `inboundfy-dados-estruturados` |
| Corrigir erro ou aviso do Search Console em dados estruturados | `inboundfy-dados-estruturados` |
| Montar o grafo de entidades do site (organização, site, unidades, pessoas) | `inboundfy-dados-estruturados` |
| Marcar produtos de loja virtual com preço e estoque | `inboundfy-dados-estruturados` |
| Descobrir se o site tem marcação e se ela está saudável no todo | `inboundfy-auditoria-seo` |
| Decidir quais perguntas a página responde | `inboundfy-seo` |
| Escrever o texto da página | especialista do canal |
| Ajustar a página para citação em respostas de IA | `inboundfy-geo` |
| Marcação em centenas de páginas geradas por base de dados | `inboundfy-seo-programatico` com esta skill para o modelo |

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O
trabalho segue o contrato compartilhado e usa a referência específica desta
pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`.
Quando um deles faltar ou a configuração estiver incompleta, apresente o
alerta canônico e acione `inboundfy-setup` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` e estes arquivos:

- `.inboundfy/context/empresa.md`: nome oficial, descrição e site.
- `.inboundfy/context/enderecos.md`: razão social, CNPJ, endereço, telefone
  e unidades. Fonte única para Organization e LocalBusiness.
- `.inboundfy/context/links.md`: URLs canônicas, logo e perfis sociais para
  `sameAs`.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`: nome, preço, moeda, disponibilidade e
  condições.
- `.inboundfy/context/pessoas.md`: autores e porta-vozes para Person.
- `.inboundfy/context/depoimentos.json`: avaliações com consentimento,
  quando a marcação de avaliação for permitida.
- `.inboundfy/context/integracoes.md`: CMS, plugin de SEO e forma de
  publicar código no site.
- `.inboundfy/context/glossario.md` e `.inboundfy/context/aprendizado.md`.
- O brief ou a peça da página e o `seo.md` do acervo, quando existirem.

Consulte `.inboundfy/framework/` para as regras globais de Markdown. Quando
um dado oficial faltar em `enderecos.md` ou `links.md`, pare e acione
`inboundfy-contexto-institucional`. Quando preço ou disponibilidade faltar,
acione `inboundfy-contexto-oferta`.

## Entrada esperada

- URL ou caminho da página, ou o tipo de modelo (todas as páginas de
  produto, todos os artigos).
- O conteúdo visível da página: texto publicado, peça aprovada ou captura.
- Erros e avisos do Search Console, quando a tarefa for correção.
- CMS ou framework do site e se já existe plugin gerando marcação.
- ID do acervo quando houver.


Aceite URL e conteúdo visível já revisado de `inboundfy-seo` ou `inboundfy-geo`. O plano de `inboundfy-arquitetura-site` fornece hierarquia para breadcrumbs; só gere marcação após receber também o conteúdo visível aprovado. Achados de `inboundfy-auditoria-seo` informam URL e erro ou aviso observado.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha o tipo de marcação pela
   tabela de tipos e resultados aprimorados.
2. Responda ao [diagnóstico](references/diagnostico.md) e liste os fatos visíveis da página
   com a fonte de cada um. Fato sem fonte fica fora do código e vira
   pendência.
3. Monte ou atualize o mapa de entidades do site com
   [grafo e @id](references/grafo-e-identificadores.md): Organization,
   WebSite, unidades e pessoas com `@id` estável, reaproveitados em todas as
   páginas.
4. Escreva o JSON-LD da página com os modelos de
   [modelos por tipo](references/modelos-por-tipo.md), em `@graph`, ligando
   a entidade da página às entidades do site por `@id`.
5. Confira cada propriedade contra o texto visível: preço, nome, data,
   autor, endereço e avaliação precisam aparecer na página com o mesmo
   valor.
6. Valide com [validação e implementação](references/validacao-e-implementacao.md):
   JSON sintaticamente válido, Teste de pesquisa aprimorada do Google e
   validador do Schema.org. Registre erros e avisos.
7. Quando houver mais de um caminho de implementação (plugin, campo manual,
   componente), apresente três opções com a recomendada primeiro e aguarde a
   escolha.
8. Entregue o código e o roteiro de implementação a quem mantém o site, com
   a lista de conferência pós-publicação.
9. Registre o handoff: `inboundfy-auditoria-seo` para conferir a marcação
   publicada na próxima rodada, `inboundfy-seo` quando faltar conteúdo
   visível para sustentar a marcação desejada.

## Saída

Salve em `acervo/<id>-<data>-<slug>/dados-estruturados.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém:

- tabela de fatos com propriedade, valor, onde aparece na página e fonte;
- o JSON-LD completo em bloco `json`, pronto para colar;
- mapa de entidades do site com `@id`, quando criado ou alterado;
- resultado das validações com data;
- roteiro de implementação escolhido e conferência pós-publicação;
- pendências e próxima skill.

## Validação

O pacote só segue quando:

- o JSON é válido e usa `https://schema.org` como `@context`;
- cada propriedade tem valor visível na página e fonte em contexto;
- preços usam `priceCurrency: "BRL"` e ponto como separador decimal;
- `@id` das entidades do site é o mesmo em todas as páginas;
- o Teste de pesquisa aprimorada não mostra erro nos tipos que buscam
  resultado aprimorado;
- não há avaliação da própria empresa sobre si mesma marcada como resultado
  aprimorado, nem FAQ com perguntas que não aparecem na página;
- marcação duplicada de plugin e de código manual foi resolvida.

Quando um fato não pode ser confirmado, remova a propriedade e registre a
pendência. Não preencha com valor provável.

## Idempotência

Uma nova rodada atualiza o mesmo `dados-estruturados.md` do ID. O mapa de
entidades do site muda só com pedido explícito, porque `@id` alterado quebra
as ligações já publicadas. Preserve a versão anterior do código no
histórico. Não publique nem altere código no site: entregue a quem mantém o
site e registre no pipeline.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** URL, modelo de página ou ID do acervo ligado ao pedido;
- **transformação:** fatos confirmados viram JSON-LD validado;
- **saída:** `dados-estruturados.md` no acervo, com código e conferência;
- **handoff:** quem mantém o site, `inboundfy-auditoria-seo` ou
  `inboundfy-seo`, com estado e pendências.
