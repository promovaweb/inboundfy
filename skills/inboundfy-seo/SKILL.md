---
name: inboundfy-seo
description: Planeja termos, clusters e briefs SEO ou revisa páginas com intenção, metadados e links internos. Use quando o pedido falar em palavras-chave, tráfego orgânico, otimização on-page, pauta para busca ou briefing de página.
---

# SEO do Inboundfy

Esta skill transforma um tema, uma oferta ou uma página existente num plano de
busca: qual pergunta a pessoa faz ao buscador, qual página do projeto deve
responder, como essa página se organiza e como ela se liga ao resto do site.
Ela entrega pesquisa de termos, mapa de cluster, briefing SEO e revisão
on-page de uma página.

Ela não escreve a peça final (papel de `inboundfy-producao` e das
`inboundfy-especialista-*`), não define title e description de uma peça já
briefada (papel de `inboundfy-base-seo`) e não faz auditoria técnica do site
inteiro (papel de `inboundfy-auditoria-seo`).

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| Descobrir sobre o que escrever para ser encontrado | `inboundfy-seo` |
| Montar cluster, página pilar e páginas de apoio | `inboundfy-seo` |
| Briefing SEO de uma página de serviço, produto ou artigo | `inboundfy-seo` |
| Revisão on-page de uma página específica | `inboundfy-seo` |
| Title, description e slug de uma peça que já tem brief | `inboundfy-base-seo` |
| Rastreamento, indexação, velocidade e saúde do site inteiro | `inboundfy-auditoria-seo` |
| Hierarquia, menu, URLs e hubs do site | `inboundfy-arquitetura-site` |
| Centenas de páginas a partir de uma base de dados | `inboundfy-seo-programatico` |
| JSON-LD e rich results | `inboundfy-dados-estruturados` |
| Aparecer e ser citado em respostas de IA | `inboundfy-geo` |
| Backlinks, menções, diretórios e autoridade de domínio | `inboundfy-seo-links-externos` |

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

- `.inboundfy/context/empresa.md`: site, mercado e região atendida.
- `.inboundfy/context/publico.md`: personas, jargão real e nível técnico.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`: o que cada página pode prometer.
- `.inboundfy/context/links.md`: URLs oficiais e destinos de conversão.
- `.inboundfy/context/concorrentes.md`: quem disputa as mesmas buscas.
- `.inboundfy/context/glossario.md`, `.inboundfy/context/marca-voz.md`,
  `.inboundfy/context/proibicoes.md` e `.inboundfy/context/aprendizado.md`.
- `.inboundfy/estrategia.md`: canais ativos e prioridade comercial.
- O acervo relacionado, sua base editorial e o `pesquisa.md` do item.

Consulte `.inboundfy/framework/` para as regras globais de escrita e
Markdown. Quando a persona ou a oferta não estiver registrada, pare e acione
`inboundfy-personas` ou `inboundfy-contexto-oferta`.

## Entrada esperada

- Tema, oferta, URL ou caminho de uma página existente.
- Persona principal e região atendida (cidade, estado ou Brasil inteiro).
- Objetivo de negócio da página: tráfego qualificado, lead, venda, suporte.
- ID do acervo quando houver material de origem.
- Dados de Search Console, ferramenta de palavras-chave ou planilha de
  concorrentes, quando o projeto tiver acesso.

Para conteúdo novo, faça pesquisa atualizada e salve as fontes, com data de
consulta, no `pesquisa.md` do acervo.

## Perguntas de diagnóstico

Consulte o [roteiro de diagnóstico](references/diagnostico.md) no passo 2 do fluxo.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha o modo de trabalho pela
   tabela de modos: pesquisa de termos, cluster, briefing de página ou
   revisão on-page.
2. Use o [roteiro de diagnóstico](references/diagnostico.md) com o contexto
   do projeto. Pergunte à pessoa só o que muda a saída.
3. Levante termos com
   [intenção e palavras-chave](references/intencao-e-palavras-chave.md):
   termo principal, variações, perguntas, entidades e modificadores locais.
   Classifique cada termo por intenção e estágio de compra.
4. Analise a primeira página de resultados para os três termos mais
   importantes: formato dominante, profundidade, recursos da SERP (trecho em
   destaque, perguntas relacionadas, mapa, vídeo) e lacuna que o projeto pode
   ocupar.
5. Agrupe termos que pedem a mesma resposta numa única página. Termos com
   intenções diferentes viram páginas diferentes. Monte o cluster com
   [clusters e links internos](references/clusters-e-links-internos.md).
6. Apresente três recortes de página ou de cluster, com o recomendado
   primeiro e aguarde a escolha da pessoa.
7. Monte o briefing ou a revisão com
   [on-page e metadados](references/on-page-e-metadados.md): title,
   description, URL, H1, headings, abertura, blocos obrigatórios, prova, CTA,
   links internos e marcação estruturada indicada.
8. Confira cada promessa da página contra acervo, oferta e pesquisa. Afirmação
   sem fonte vira pendência, não texto.
9. Revise o artefato com `inboundfy-anti-slop` e aplique voz, persona,
   dicionário e proibições.
10. Entregue o handoff: `inboundfy-base-seo` e a especialista do canal para
    produzir. Após aprovação do conteúdo visível, entregue URL, texto e CMS
    a `inboundfy-dados-estruturados` para JSON-LD; acione
    `inboundfy-seo-links-externos` quando a página precisar de autoridade
    externa para competir.

## Saída

Salve em `acervo/<id>-<data>-<slug>/seo.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém, conforme o modo:

- quadro de intenção e lista de termos classificados;
- mapa do cluster com página pilar, páginas de apoio e links entre elas;
- briefing SEO por página, no template de [REFERENCIA.md](REFERENCIA.md);
- revisão on-page com achado, impacto, ação e prioridade;
- fontes, IDs relacionados, pendências e próxima skill.

Quando o trabalho fizer parte de um pacote, o brief do canal recebe o campo
`seo: acervo/<id>-<data>-<slug>/seo.md`.

## Validação

O artefato só segue quando:

- cada página planejada responde a uma intenção única e nomeada;
- nenhum par de páginas disputa o mesmo termo principal (canibalização);
- o title tem o termo principal perto do início e cabe em cerca de 60
  caracteres;
- a abertura entrega a resposta antes de qualquer CTA;
- todo link interno aponta para URL existente em `links.md` ou para peça
  registrada no catálogo;
- toda afirmação de preço, prazo, resultado ou dado externo tem fonte;
- o texto usa linguagem natural, sem repetição forçada de palavra-chave.

Quando algum item falha, corrija o artefato. Quando a falha depende de dado
do negócio, devolva a pergunta à pessoa e mantenha o estado `revisao`.

## Idempotência

Uma nova rodada atualiza o mesmo `seo.md` do ID e preserva ajustes manuais,
escolhas registradas e histórico. Não altere URL publicada ou estrutura de
páginas sem registrar a proposta no pipeline, com redirecionamento 301
indicado. Pesquisa nova entra com data de consulta, sem apagar a anterior.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** tema, URL ou ID do acervo ligado ao pedido;
- **transformação:** pesquisa, cluster, briefing ou revisão on-page;
- **saída:** `seo.md` no acervo, com termos, páginas e ações;
- **handoff:** especialista do canal, `inboundfy-base-seo`,
  `inboundfy-dados-estruturados` ou `inboundfy-seo-links-externos`, com
  estado e pendências.
