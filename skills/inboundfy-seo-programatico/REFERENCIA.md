# Referência de SEO programático

Material de apoio de `inboundfy-seo-programatico`. O `SKILL.md` diz a ordem;
este arquivo diz como validar o padrão, montar o modelo e liberar os lotes,
com modelos e um caso completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-seo-programatico**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 | [padrões e validação de demanda](references/padroes-e-validacao-de-demanda.md) | Escolher o tipo de padrão, testar demanda e intenção das variações. |
| 4, 6 e 7 | [modelo de página e dados](references/modelo-de-pagina-e-dados.md) | Especificar a base, os blocos do modelo, as condicionais e a regra de não publicação. |
| 8 e 9 | [indexação, piloto e monitoramento](references/indexacao-piloto-e-monitoramento.md) | Canônicas, sitemap, links, lote piloto, amostra e sinais de conteúdo raso. |

## Tipos de padrão

| Padrão | Exemplo de busca | Dado único que sustenta a página | Quando evitar |
| --- | --- | --- | --- |
| Local | dedetização em {{cidade}} | Unidade, equipe, prazo, preço e depoimento da cidade | A empresa não atende de fato a cidade |
| Segmento ou público | sistema de agenda para {{segmento}} | Fluxo, recurso e caso próprios do segmento | O produto é igual para todos os segmentos |
| Integração | integração {{produto}} com {{ferramenta}} | O que sincroniza, como configurar, limites | A integração não existe ou é só por planilha |
| Comparativo | {{A}} vs {{B}}, alternativa a {{X}} | Tabela de recursos e preços com data | Não há dado confiável sobre o concorrente |
| Modelo ou template | modelo de {{documento}} | O arquivo para baixar e o guia de preenchimento | O modelo é genérico e existe igual em todo lugar |
| Glossário | o que é {{termo}} | Definição, exemplo brasileiro e relação com o produto | Termos que ninguém busca |
| Diretório ou banco | {{categoria}} em {{região}}, lista de {{itens}} | Base própria, curada e atualizada | Base copiada de outro site |
| Dados e estatística | {{indicador}} em {{cidade}} | Número oficial com fonte e data | Dado não muda entre páginas |

## Métricas de referência

| Métrica | Referência | Leitura |
| --- | --- | --- |
| Tamanho do lote piloto | Entre 20 e 100 páginas | Pequeno para corrigir o modelo, grande para gerar dado |
| Páginas indexadas após 6 a 8 semanas | Acima de 60% do lote | Abaixo de 30% indica conteúdo raso ou duplicado |
| Páginas com impressão após 8 semanas | Acima de 50% das indexadas | Páginas sem impressão não respondem a busca real |
| Diferença de texto entre páginas irmãs | Mais de 40% do corpo varia | Menos que isso tende a ser lido como duplicado |
| Amostra de revisão humana | 10% do lote, no mínimo 10 páginas | Abaixo disso, erros do modelo passam |
| Relatório "Rastreada, mas não indexada" | Menos de 20% do conjunto | Acima disso, pause os lotes seguintes |

Prefira os dados do Search Console do projeto a qualquer faixa geral.

## Template de plano de SEO programático

````markdown
---
id: {{id}}
skill: inboundfy-seo-programatico
tipo: seo-programatico
estado: rascunho
entrada:
  - {{acervo/<id>-<data>-<slug>/}}
personas:
  - {{persona-xx}}
fontes:
  - {{base de dados, ferramenta e data de consulta}}
proxima_skill: {{inboundfy-arquitetura-site | inboundfy-dados-estruturados}}
---

# SEO programático: {{conjunto}}

## Padrão de busca

- **Parte fixa:** {{}}
- **Parte variável:** {{cidade, segmento, ferramenta, termo}}
- **Intenção:** {{informativa | investigativa | comparativa | transacional | local}}
- **Combinações possíveis:** {{n}}
- **Combinações com dado suficiente:** {{n}}

### Amostra de demanda

| Variação | Volume | Formato da SERP | Concorrente no topo |
| --- | --- | --- | --- |
| {{}} | {{n ou sem dado}} | {{}} | {{}} |

## Base de dados

| Campo | Tipo | Fonte | Atualização | Obrigatório para publicar |
| --- | --- | --- | --- | --- |
| {{campo}} | {{texto, número, URL, lista}} | {{}} | {{mensal, anual}} | {{sim/não}} |

## Modelo de página

- **URL:** /{{prefixo}}/{{variavel}}/
- **Title:** {{fórmula com variável}}
- **Meta description:** {{fórmula}}
- **H1:** {{fórmula}}
- **Blocos:**
  1. {{bloco}}: {{fixo | variável | condicional}}, campos {{}}
- **CTA:** {{texto}} → {{URL de links.md}}
- **Marcação:** {{tipo}} → `inboundfy-dados-estruturados`

## Regra de não publicação

- {{condição}} → {{não gerar | gerar com noindex | fundir em página regional}}

## Indexação e links

- **Hub:** /{{prefixo}}/
- **Canônica:** autorreferente em cada página
- **Sitemap:** sitemap-{{conjunto}}.xml
- **Links:** hub → páginas; página → {{n}} irmãs; página → oferta

## Lote piloto

- **Páginas:** {{n}}, escolhidas por {{regra}}
- **Amostra de revisão:** {{n}} páginas, revisor {{}}
- **Prazo de leitura:** {{semanas}}
- **Liberação do próximo lote se:** {{métricas}}

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho}}
````

## Exemplo completo: NotaPronta

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A NotaPronta é um emissor de nota fiscal de serviço (NFS-e)
para prestadores e pequenas empresas, com plano a partir de R$ 59 por mês,
pago por Pix ou cartão e suporte por WhatsApp. O sistema emite em 380
municípios. Cada prefeitura tem regras próprias: padrão do sistema, exigência
de certificado digital, alíquota de ISS, código de serviço e cadastro prévio
no portal. A persona (`persona-02`, Juliana) é psicóloga com CNPJ no Simples
Nacional que precisa emitir a primeira nota.

**Pedido.** "Queremos uma página para cada cidade onde emitimos nota."

**Diagnóstico registrado.**

1. Padrão: `como emitir nota fiscal de serviço em {{cidade}}` e `NFS-e
   {{cidade}}`.
2. As variações têm busca: capitais com milhares de buscas mensais, cidades
   médias com dezenas.
3. Dado próprio por cidade: padrão do sistema (nacional ou municipal),
   necessidade de certificado digital, link do portal da prefeitura, prazo
   médio de liberação do cadastro, faixa de ISS, telas do processo e número
   de clientes ativos na cidade.
4. Fonte: base interna do time de implantação, revisada a cada trimestre e
   portais das prefeituras com data de consulta.
5. 380 municípios; 212 com todos os campos obrigatórios preenchidos.
6. CTA: teste grátis de 7 dias e "falar no WhatsApp", URLs em `links.md`.
7. O site usa um gerador estático que lê planilha e cria URL, sitemap e
   `noindex` por campo, conforme `.inboundfy/context/integracoes.md`.

**Três recortes apresentados.**

1. **Recomendado.** Páginas por município só para os 212 com dado completo,
   piloto com 40 (as 15 capitais com clientes e 25 cidades médias), hub
   `/nfse/` com busca por cidade e estado.
2. Uma página por estado, com tabela das cidades. Menos páginas, menos
   esforço de dado, perde a busca por cidade.
3. Todas as 380 cidades de uma vez, com texto genérico onde falta dado.
   Maior cobertura e alta chance de páginas sem indexação.

A equipe escolhe o recorte 1.

**Base de dados (trecho).**

| Campo | Fonte | Obrigatório |
| --- | --- | --- |
| municipio, uf, slug | IBGE | sim |
| padrao_sistema | base de implantação | sim |
| exige_certificado | base de implantação | sim |
| url_portal_prefeitura | portal oficial, data de consulta | sim |
| prazo_cadastro_dias | base de implantação | sim |
| aliquota_iss_faixa | legislação municipal, data de consulta | não |
| clientes_ativos | sistema interno | não (exibe só acima de 10) |
| depoimento_id | `context/depoimentos.json` com consentimento | não |

**Modelo de página.**

- **URL:** `/nfse/{{uf}}/{{slug}}/`
- **Title:** "Como emitir NFS-e em {{municipio}} ({{uf}}): passo a passo"
- **H1:** "Nota fiscal de serviço em {{municipio}}"
- **Blocos:** resposta direta com padrão e certificado (variável); passo a
  passo com telas do portal (variável); prazo do cadastro e documentos
  (variável); ISS (condicional: só aparece com fonte); como a NotaPronta
  emite em {{municipio}} (fixo com variáveis); depoimento (condicional);
  perguntas frequentes da cidade (variável, extraídas do suporte); cidades
  próximas (variável).
- **Marcação:** Article, HowTo só se o passo a passo for visível,
  BreadcrumbList.

**Regra de não publicação.**

- Falta campo obrigatório → página não é gerada; a cidade aparece no hub como
  "em breve" sem link.
- Prefeitura migrou para o padrão nacional sem tela atualizada → `noindex`
  até nova captura.
- Duas cidades com conteúdo igual em mais de 60% do corpo → revisão manual
  antes de publicar.

**Indexação e links.** Hub `/nfse/` e hubs por estado; cada cidade linka para
o hub do estado e para três cidades próximas; sitemap `sitemap-nfse.xml`;
canônica autorreferente.

**Piloto e liberação.** 40 páginas; revisão humana de todas no piloto (o
modelo é novo); leitura em oito semanas. Libera o lote de 80 seguintes se
mais de 60% estiverem indexadas, mais de metade tiver impressão e a taxa de
início de teste grátis for igual ou maior que a do blog.

**Pendências.** Confirmar consentimento dos depoimentos por cidade;
confirmar com o jurídico o uso de capturas de tela dos portais.

**Handoff.** `inboundfy-arquitetura-site` para incluir `/nfse/` no menu e no
rodapé; `inboundfy-dados-estruturados` para o JSON-LD do modelo;
`inboundfy-auditoria-seo` na oitava semana.

## Checklist

- [ ] O padrão de busca tem parte fixa e parte variável escritas.
- [ ] A amostra mostra demanda e intenção para as variações.
- [ ] As sete perguntas de diagnóstico têm resposta ou pendência.
- [ ] Cada página tem ao menos um dado próprio que muda a resposta.
- [ ] Cada campo da base tem fonte, atualização e responsável.
- [ ] Três recortes foram apresentados e a escolha foi registrada.
- [ ] O modelo separa blocos fixos, variáveis e condicionais.
- [ ] A regra de não publicação cobre falta de dado e semelhança excessiva.
- [ ] URL, canônica, sitemap e hub do conjunto estão definidos.
- [ ] Nenhuma página do conjunto fica sem link de entrada.
- [ ] O piloto tem tamanho, amostra, prazo e métricas de liberação.
- [ ] Dados de concorrentes e depoimentos seguem os arquivos de contexto.

## Erros comuns

- **Trocar só o nome da cidade.** Páginas iguais com a variável trocada são
  lidas como duplicadas e raramente indexam. O dado único é o que justifica
  a página.
- **Publicar todas as combinações.** Combinação sem dado vira página vazia e
  puxa a avaliação do conjunto inteiro para baixo.
- **Prometer atendimento onde a empresa não atua.** Página local de cidade
  sem atendimento real engana a pessoa e gera reclamação.
- **Comparativo com dado velho do concorrente.** Preço e recurso mudam.
  Registre a data e revise a cada trimestre.
- **Texto gerado por IA sem revisão para preencher blocos.** Variação de
  texto sem variação de informação não resolve conteúdo raso.
- **Esquecer o hub.** Páginas sem hub e sem links entre irmãs ficam órfãs e o
  rastreador não as encontra.
- **Escalar antes do piloto.** Um erro no modelo se repete em mil páginas.
- **Depoimento sem consentimento.** Nome e cidade de cliente são dados
  pessoais. Use só os registrados com consentimento em
  `context/depoimentos.json`.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para SEO programático, os campos próprios são: padrão de busca, base de
dados, modelo, regra de não publicação e lote piloto.
