---
name: inboundfy-auditoria-seo
description: Entrega uma auditoria técnica, de conteúdo e SEO local com achados por URL e correções priorizadas por impacto e esforço. Use quando o tráfego orgânico cair, páginas não forem indexadas ou for preciso revisar uma migração ou piloto.
---

# Auditoria de SEO

Esta skill examina um site existente ou um conjunto de páginas dele. Ela
responde a três perguntas: o buscador consegue encontrar e indexar as
páginas? As páginas indexadas respondem bem à busca? O que corrigir primeiro?
Ela entrega um relatório com achados localizados, impacto, ação e prioridade.

Ela não planeja conteúdo novo nem monta cluster (papel de `inboundfy-seo`),
não escreve JSON-LD (papel de `inboundfy-dados-estruturados`), não redesenha
a hierarquia do site (papel de `inboundfy-arquitetura-site`) e não executa
campanha de links (papel de `inboundfy-seo-links-externos`).

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| "O tráfego orgânico caiu, descubra por quê" | `inboundfy-auditoria-seo` |
| Revisão técnica antes ou depois de migração de site | `inboundfy-auditoria-seo` |
| Páginas que não entram no índice do Google | `inboundfy-auditoria-seo` |
| Diagnóstico de SEO local de uma empresa com endereço | `inboundfy-auditoria-seo` |
| Revisão on-page de uma única página | `inboundfy-seo` |
| Decidir sobre quais temas escrever | `inboundfy-seo` |
| Corrigir ou criar marcação estruturada | `inboundfy-dados-estruturados` |
| Reorganizar menu, URLs e hubs | `inboundfy-arquitetura-site` |
| Perfil de backlinks fraco, falta de autoridade, menções | `inboundfy-seo-links-externos` |
| Visibilidade em respostas de IA | `inboundfy-geo` |
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

- `.inboundfy/context/empresa.md`: domínio, mercado, idiomas e região.
- `.inboundfy/context/links.md`: URLs oficiais, páginas principais e destinos
  de conversão. É a lista de páginas que a auditoria precisa achar no índice.
- `.inboundfy/context/enderecos.md`: nome, endereço e telefone oficiais para
  conferir a consistência do SEO local.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`: páginas comerciais que precisam ranquear.
- `.inboundfy/context/integracoes.md`: acesso a Search Console, Analytics,
  CMS e ferramentas, sem copiar credenciais para o relatório.
- `.inboundfy/context/concorrentes.md`, `.inboundfy/context/publico.md`,
  `.inboundfy/context/glossario.md` e `.inboundfy/context/aprendizado.md`.
- `.inboundfy/estrategia.md` e `.inboundfy/pipeline.md`.
- Auditorias anteriores no acervo, quando houver.

Consulte `.inboundfy/framework/` para as regras globais de escrita e
Markdown. Quando faltar o domínio ou a lista de páginas principais, pare e
acione `inboundfy-contexto-institucional`.

## Entrada esperada

- Domínio ou lista de URLs a auditar e o alcance (site inteiro, seção, grupo
  de páginas).
- Motivo da auditoria: queda de tráfego, migração, lançamento, rotina.
- Data de qualquer mudança recente (novo CMS, troca de domínio, redesenho).
- Acesso ou exportações de Search Console, Analytics, PageSpeed Insights e
  rastreador (Screaming Frog, Sitebulb ou similar), quando o projeto tiver.
- ID do acervo quando a auditoria fizer parte de um trabalho maior.

Aceite o piloto de `inboundfy-seo-programatico`, o mapa de migração de `inboundfy-arquitetura-site`, a marcação publicada de `inboundfy-dados-estruturados` e os links alterados de `inboundfy-seo-links-externos`. Cada pacote informa URLs, data da alteração, alcance e resultado a conferir.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha o tipo de auditoria pela
   tabela de abordagens: rápida, completa, pós-migração, queda de tráfego ou
   local.
2. Responda ao [diagnóstico](references/diagnostico.md). Pergunte à pessoa só o que muda o
   alcance.
3. Rode a parte técnica com
   [checklist técnico](references/checklist-tecnico.md): robots.txt,
   sitemap, códigos de status, canônicas, redirecionamentos, cobertura de
   índice, Core Web Vitals, mobile, HTTPS e idiomas.
4. Confira as páginas de `links.md` uma a uma: indexada, canônica correta,
   status 200, presente no sitemap.
5. Rode a parte de conteúdo com
   [conteúdo, on-page e local](references/conteudo-on-page-e-local.md):
   titles, descriptions, headings, conteúdo raso ou duplicado, sinais de
   experiência e autoria, links internos, imagens e SEO local.
6. Registre cada achado com URL, comprovação (captura, linha do relatório,
   trecho de código), impacto e ação. Marque como hipótese o que não foi
   possível conferir.
7. Priorize com a matriz de
   [priorização e relatório](references/priorizacao-e-relatorio.md):
   impacto e esforço, com o que impede indexação sempre no topo.
8. Apresente três planos de correção (por exemplo: só urgências, urgências
   mais ganhos rápidos, plano completo em fases), com o recomendado primeiro,
   e aguarde a escolha.
9. Revise o relatório com `inboundfy-anti-slop` e confira dicionário e
   proibições nos trechos que descrevem a empresa.
10. Entregue o handoff por tipo de achado: `inboundfy-seo` para páginas a
    reescrever, `inboundfy-dados-estruturados` para marcação,
    `inboundfy-arquitetura-site` para estrutura, `inboundfy-seo-links-externos`
    para autoridade e menções, `inboundfy-geo` para respostas de IA.

## Saída

Salve em `acervo/<id>-<data>-<slug>/auditoria-seo.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém:

- resumo executivo com as cinco correções mais importantes;
- painel de saúde por área (técnico, conteúdo, local, idiomas);
- tabela de achados com URL, comprovação, impacto, esforço, prioridade e
  responsável;
- plano de correção escolhido, em fases;
- métricas de base para comparar depois (cliques, impressões, páginas
  indexadas, Core Web Vitals) com data;
- fontes, ferramentas usadas com data, pendências e próximas skills.

## Validação

O relatório só segue quando:

- todo achado tem URL ou alcance, comprovação e ação verificável;
- o que não pôde ser conferido aparece como hipótese, com a forma de
  confirmar;
- todas as páginas de `links.md` foram conferidas no índice;
- a prioridade segue a matriz, com problemas de indexação primeiro;
- nenhuma ação depende de credencial copiada para o texto;
- os números de base têm ferramenta e data.

Quando faltar acesso para confirmar um achado crítico, mantenha o estado
`revisao` e peça o acesso ou a exportação à pessoa.

## Idempotência

Uma nova auditoria do mesmo alcance atualiza o `auditoria-seo.md` do ID,
move a rodada anterior para a seção de histórico e marca cada achado antigo
como corrigido, aberto ou reaberto. Não altere robots.txt, sitemap, URLs,
redirecionamentos ou canônicas do site: registre a proposta no pipeline e
entregue a correção a quem mantém o site.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** domínio, lista de URLs ou ID do acervo ligado ao pedido;
- **transformação:** auditoria técnica, de conteúdo e local, com
  priorização;
- **saída:** `auditoria-seo.md` no acervo, com achados e plano;
- **handoff:** `inboundfy-seo`, `inboundfy-dados-estruturados`,
  `inboundfy-arquitetura-site`, `inboundfy-seo-links-externos` ou
  `inboundfy-geo`, com estado e pendências.
