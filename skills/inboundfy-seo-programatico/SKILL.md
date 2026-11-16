---
name: inboundfy-seo-programatico
description: Planeja páginas em escala com base de dados, modelo, regras de publicação e lote piloto. Use quando o pedido falar em SEO programático, uma página por cidade, páginas por segmento, combinações de busca ou modelos com dados variáveis.
---

# SEO programático

Esta skill planeja conjuntos de páginas geradas a partir de um modelo e de
uma base de dados: uma página por cidade, por integração, por comparação, por
termo de glossário ou por item de diretório. Ela entrega o padrão de busca,
a especificação da base, o modelo de página com campos fixos e variáveis, a
regra de não publicação, o plano de indexação e o lote piloto com revisão por
amostra.

Ela não escreve páginas únicas (papel de `inboundfy-seo` e das
`inboundfy-especialista-*`), não desenha a estrutura do site inteiro (papel
de `inboundfy-arquitetura-site`) e não programa o gerador. A implementação
fica com o time técnico do projeto.

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| Uma página por cidade, bairro ou região atendida | `inboundfy-seo-programatico` |
| Uma página por integração, ferramenta ou parceiro | `inboundfy-seo-programatico` |
| Páginas "A vs B" ou "alternativa a X" em série | `inboundfy-seo-programatico` |
| Glossário, diretório ou banco de modelos com dezenas de itens | `inboundfy-seo-programatico` |
| Menos de dez páginas do mesmo tipo | `inboundfy-seo`, página a página |
| Onde o conjunto entra no menu, nos hubs e nas URLs | `inboundfy-arquitetura-site` |
| JSON-LD aplicado ao modelo | `inboundfy-dados-estruturados` |
| Páginas geradas que não indexam ou perderam tráfego | `inboundfy-auditoria-seo` |
| Ferramenta gratuita interativa (calculadora, gerador) | `inboundfy-growth-ferramentas-gratuitas` |

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

- `.inboundfy/context/empresa.md`: mercado, região e site.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`: o que cada página pode oferecer.
- `.inboundfy/context/publico.md`: personas e forma real de busca.
- `.inboundfy/context/concorrentes.md`: base para páginas comparativas e o
  que pode ser citado nominalmente.
- `.inboundfy/context/integracoes.md`: integrações reais do produto e a
  plataforma que vai gerar as páginas.
- `.inboundfy/context/links.md`, `.inboundfy/context/glossario.md`,
  `.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/aprendizado.md`.
- `.inboundfy/estrategia.md` e `.inboundfy/pipeline.md`.
- O acervo relacionado, as bases editoriais e as fontes de dados citadas.

Consulte `.inboundfy/framework/` para as regras globais de escrita. Quando a
oferta ou a lista de integrações não estiver registrada, pare e acione
`inboundfy-contexto-oferta` ou `inboundfy-contexto-operacao`.

## Entrada esperada

- Padrão de busca pretendido ou tema ("uma página por cidade").
- Base de dados disponível ou fonte de onde ela pode sair (planilha, banco,
  API pública, dados internos).
- Plataforma que vai gerar as páginas e seus limites.
- Persona, oferta e ação de cada página.
- Search Console e ferramenta de palavras-chave, quando houver acesso.

Separe fatos confirmados, hipótese de trabalho e pergunta aberta.

## Perguntas de diagnóstico

1. Qual é o padrão de busca, com a parte fixa e a parte variável
   (`contabilidade para {{segmento}}`)?
2. Pessoas buscam de fato as variações, ou só o termo amplo?
3. Que dado próprio cada página terá que não existe numa página irmã?
4. De onde vem esse dado, com que frequência muda e quem atualiza?
5. Quantas combinações existem e quantas têm dado suficiente para publicar?
6. Qual ação cada página provoca e qual URL de `links.md` a recebe?
7. A plataforma gera URL limpa, sitemap, canônica e `noindex` por regra?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha o tipo de padrão pela tabela
   de padrões.
2. Responda às perguntas de diagnóstico. Pergunte à pessoa só o que muda o
   plano.
3. Valide o padrão de busca com
   [padrões e validação de demanda](references/padroes-e-validacao-de-demanda.md):
   amostra de variações, intenção, SERP e volume somado.
4. Especifique a base de dados: campos, tipo, fonte, frequência de
   atualização, responsável e campos obrigatórios para publicar.
5. Apresente três recortes do conjunto (padrão, tamanho e dado único), com o
   recomendado primeiro e aguarde a escolha.
6. Monte o modelo de página com
   [modelo de página e dados](references/modelo-de-pagina-e-dados.md): blocos
   fixos, blocos variáveis, regras condicionais, title, description, H1,
   links e marcação estruturada.
7. Escreva a regra de não publicação: quais combinações ficam fora do ar ou
   com `noindex` por falta de dado.
8. Defina indexação, canônicas, sitemap e links com
   [indexação, piloto e monitoramento](references/indexacao-piloto-e-monitoramento.md).
9. Planeje o lote piloto, a revisão por amostra e as métricas de liberação
   dos lotes seguintes.
10. Revise os textos fixos do modelo com `inboundfy-anti-slop`,
    `inboundfy-copy-edicao`, voz e dicionário. Registre pendências e entregue
    o handoff.

## Saída

Salve em `acervo/<id>-<data>-<slug>/seo-programatico.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém:

- padrão de busca validado, com amostra de variações e volumes;
- especificação da base de dados;
- modelo de página com campos fixos, variáveis e condicionais;
- regra de não publicação e regra de indexação;
- padrão de URL, canônica, sitemap e links internos do conjunto;
- plano do lote piloto, amostra de revisão e métricas de liberação;
- fontes, pendências e próxima skill.

## Validação

O plano só segue quando:

- cada página tem ao menos um dado próprio que muda a resposta, não só o
  nome trocado;
- a amostra mostra demanda real para as variações, não só para o termo amplo;
- a regra de não publicação está escrita e cobre combinações sem dado;
- o conjunto tem padrão de URL único, canônica em cada página e sitemap
  próprio;
- toda página recebe link de um hub e de páginas irmãs, sem órfãs;
- o lote piloto tem tamanho, prazo e métricas de liberação definidos;
- dados de concorrentes citados seguem `concorrentes.md` e têm data;
- os textos fixos passam por voz, dicionário e proibições.

Quando um item falha, corrija o plano. Quando depende de dado do negócio ou
da plataforma, devolva a pergunta à pessoa e mantenha o estado `revisao`.

## Idempotência

Atualize o mesmo `seo-programatico.md` quando o ID já existir. Preserve
modelo aprovado, histórico, fontes e escolhas anteriores. Um novo lote entra
como nova seção do plano, com data, sem reescrever o piloto. Não remova
páginas publicadas sem registrar no pipeline a resposta 301 ou 410. Abra uma
nova versão do modelo apenas após pedido explícito.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** padrão de busca, base de dados e ID do acervo;
- **transformação:** validação de demanda, modelo, regras e piloto;
- **saída:** `seo-programatico.md` no acervo, com modelo e plano de lotes;
- **handoff:** `inboundfy-arquitetura-site` para o hub e as URLs,
  `inboundfy-dados-estruturados` com o modelo e amostra aprovada do conteúdo
  visível para o JSON-LD,
  `inboundfy-auditoria-seo` depois do piloto.
