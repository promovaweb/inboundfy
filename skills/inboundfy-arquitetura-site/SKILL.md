---
name: inboundfy-arquitetura-site
description: Entrega hierarquia de páginas, mapa de URLs, navegação, links internos e plano de redirecionamentos. Use quando o pedido for planejar um site, reorganizar menus e hubs, abrir seções ou preparar uma migração.
---

# Arquitetura de site

Esta skill desenha a estrutura do site: quais páginas existem, qual nível
cada uma ocupa, como o menu e o rodapé distribuem o acesso, qual é o padrão de
URL e como os hubs ligam conteúdo e oferta. Ela entrega árvore de páginas,
mapa visual, tabela de URLs, especificação de navegação e plano de links
internos, com ordem de implementação.

Ela não pesquisa termos nem monta briefing de página (papel de
`inboundfy-seo`), não gera páginas em escala a partir de dados (papel de
`inboundfy-seo-programatico`) e não audita rastreamento e indexação (papel de
`inboundfy-auditoria-seo`).

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| Planejar o site de um projeto novo | `inboundfy-arquitetura-site` |
| Reorganizar menu, categorias e hubs de um site existente | `inboundfy-arquitetura-site` |
| Definir padrão de URL, breadcrumb e níveis de página | `inboundfy-arquitetura-site` |
| Planejar migração de domínio ou de plataforma com redirecionamentos | `inboundfy-arquitetura-site` |
| Decidir sobre o que escrever e montar o cluster de um tema | `inboundfy-seo` |
| Centenas de páginas geradas por modelo e base de dados | `inboundfy-seo-programatico` |
| Páginas fora do índice, erros de rastreamento, lentidão | `inboundfy-auditoria-seo` |
| BreadcrumbList, Organization e outros JSON-LD | `inboundfy-dados-estruturados` |
| Página com tráfego e sem conversão | `inboundfy-growth-cro` |

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

- `.inboundfy/context/empresa.md`: tipo de negócio, mercado e região.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`: o que precisa de página própria.
- `.inboundfy/context/publico.md`: personas e tarefas que trazem ao site.
- `.inboundfy/context/links.md`: URLs oficiais e destinos de conversão.
- `.inboundfy/context/glossario.md`: nomes oficiais usados em menu e URL.
- `.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/aprendizado.md`.
- `.inboundfy/estrategia.md` e `.inboundfy/pipeline.md`: prioridades e
  peças já planejadas.
- `.inboundfy/context/integracoes.md`, quando a plataforma do site (CMS,
  loja, gerador estático) limitar URLs ou menus.
- O acervo relacionado, as bases editoriais e os índices de
  `.inboundfy/indices/`.

Consulte `.inboundfy/framework/` para as regras globais de escrita. Quando a
oferta ou a persona não estiver registrada, pare e acione
`inboundfy-contexto-oferta` ou `inboundfy-personas`.

## Entrada esperada

- Objetivo: site novo, reorganização, nova seção ou migração.
- Lista de páginas atuais (sitemap, exportação do CMS ou rastreamento) quando
  o site já existe.
- Ofertas, personas e regiões que o site precisa atender.
- Dados de tráfego por página (Search Console, analytics), se houver.
- Plataforma e limites técnicos conhecidos.

Separe fatos confirmados, hipótese de trabalho e pergunta aberta.

Aceite o plano de `inboundfy-seo-programatico` com famílias de páginas, padrão de busca, amostra de dados e limites da plataforma. Receba briefs comparativos de `inboundfy-concorrentes` como páginas propostas. Achados de `inboundfy-auditoria-seo` chegam com URLs afetadas e ação estrutural solicitada.

## Perguntas de diagnóstico

1. Qual é o tipo de site: serviço local, SaaS, loja, conteúdo, institucional
   ou misto?
2. Quais três tarefas a persona mais quer cumprir no site?
3. Qual ação de negócio cada tarefa deve gerar e qual URL de `links.md` a
   recebe?
4. Quais páginas trazem tráfego ou conversão hoje e não podem perder URL?
5. Quais páginas existem sem função clara, sem tráfego e sem link?
6. A plataforma permite controlar URL, menu, breadcrumb e redirecionamento?
7. O site atende uma cidade, várias cidades ou o Brasil inteiro?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha a abordagem pela tabela de
   tipos de trabalho.
2. Responda às perguntas de diagnóstico com o contexto. Pergunte à pessoa só
   o que muda a estrutura.
3. Levante as páginas atuais e classifique cada uma em manter, fundir,
   reescrever, criar ou remover, com
   [hierarquia e URLs](references/hierarquia-e-urls.md).
4. Agrupe as páginas por tarefa e intenção. Defina hubs, níveis e o padrão
   de URL de cada tipo de página.
5. Apresente três estruturas possíveis, com a recomendada primeiro. Aguarde
   a escolha.
6. Especifique menu principal, rodapé, breadcrumbs e navegação contextual
   com [navegação e links internos](references/navegacao-e-links-internos.md).
7. Monte o plano de links internos dos hubs e das páginas comerciais.
8. Quando houver troca de URL, monte a tabela de redirecionamentos 301 com
   [migração e redirecionamentos](references/migracao-e-redirecionamentos.md).
9. Ordene a implementação por impacto e esforço e indique as peças que
   `inboundfy-seo` precisa planejar.
10. Revise nomes de menu e rótulos com `inboundfy-anti-slop`,
    `inboundfy-copy-edicao`, voz e dicionário. Registre pendências e entregue
    o handoff.

## Saída

Salve em `acervo/<id>-<data>-<slug>/arquitetura-site.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém:

- árvore de páginas em texto;
- mapa visual em Mermaid;
- tabela de URLs com tipo, nível, intenção, estado e página pai;
- especificação de menu, rodapé e breadcrumbs;
- plano de links internos;
- tabela de redirecionamentos, quando houver troca de URL;
- ordem de implementação, fontes, pendências e próxima skill.

## Validação

O artefato só segue quando:

- toda página tem função, intenção e página pai registradas;
- nenhuma página comercial fica a mais de três cliques da Home;
- não há página órfã: cada página tem ao menos um link de entrada planejado;
- o padrão de URL é o mesmo para páginas do mesmo tipo;
- breadcrumb e URL contam a mesma hierarquia;
- toda URL que muda tem destino 301 equivalente, sem cadeia nem ciclo;
- páginas sem função foram fundidas ou removidas, com motivo registrado;
- rótulos de menu usam a grafia do dicionário e a linguagem da persona.

Quando um item falha, corrija o mapa. Quando depende de dado do negócio ou da
plataforma, devolva a pergunta à pessoa e mantenha o estado `revisao`.

## Idempotência

Atualize o mesmo `arquitetura-site.md` quando o ID já existir. Preserve
estrutura aprovada, histórico, fontes e escolhas anteriores. Não altere URL
publicada sem registrar a proposta no pipeline com o redirecionamento. Abra
uma nova versão apenas após pedido explícito.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** objetivo do site, páginas atuais e ID do acervo;
- **transformação:** hierarquia, navegação, URLs e links internos;
- **saída:** `arquitetura-site.md` no acervo, com mapa e ordem de implementação;
- **handoff:** `inboundfy-seo` para as páginas novas,
  `inboundfy-dados-estruturados` para breadcrumbs e organização,
  `inboundfy-auditoria-seo` depois da migração.
