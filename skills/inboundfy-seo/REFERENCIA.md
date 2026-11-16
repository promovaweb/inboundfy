# Referência de SEO

Material de apoio de `inboundfy-seo`. O `SKILL.md` diz a ordem; este arquivo
diz como fazer cada passo, com modelos e um caso completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-seo**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 e 4 | [intenção e palavras-chave](references/intencao-e-palavras-chave.md) | Levantar, classificar e priorizar termos; ler a SERP. |
| 5 e 6 | [clusters e links internos](references/clusters-e-links-internos.md) | Agrupar termos em páginas, montar pilar e apoio, evitar canibalização. |
| 7 | [on-page e metadados](references/on-page-e-metadados.md) | Title, description, URL, headings, abertura, imagens e revisão de página existente. |

## Modos de trabalho

| Modo | Quando escolher | Entrega principal |
| --- | --- | --- |
| Pesquisa de termos | O projeto não sabe o que a persona busca | Lista classificada por intenção, estágio e prioridade |
| Cluster | Existe um tema comercial com várias perguntas em volta | Mapa de pilar, apoio e links |
| Briefing de página | A página ainda não existe ou será reescrita | Briefing SEO pronto para a especialista |
| Revisão on-page | A página existe e não ranqueia ou não converte | Tabela de achados com impacto e ação |

Um pedido pode combinar modos. Registre a ordem no artefato.

## Métricas de referência

Use estas faixas para orientar prioridade. Elas variam por nicho e pelo
formato da SERP. Prefira sempre os dados do próprio projeto.

| Métrica | Referência de mercado | Leitura |
| --- | --- | --- |
| CTR orgânico da posição 1 | Entre 25% e 40% em SERP sem anúncios e sem trecho em destaque | Abaixo de 15% na posição 1 indica title ou description fraco |
| CTR das posições 4 a 10 | Entre 2% e 8% | Página entre 4 e 15 com muitas impressões é a melhor oportunidade de ganho rápido |
| Title | Até cerca de 60 caracteres (aprox. 580 px) | Acima disso o Google corta ou reescreve |
| Meta description | Entre 140 e 160 caracteres | O Google reescreve em boa parte das buscas; ainda assim vale escrever |
| Tempo até ranquear | Três a seis meses para página nova em domínio com histórico | Domínio novo leva mais |
| Core Web Vitals | LCP até 2,5 s, INP até 200 ms, CLS até 0,1 | Fora da faixa, encaminhe para `inboundfy-auditoria-seo` |

## Template de briefing SEO

```markdown
---
id: {{id}}
skill: inboundfy-seo
tipo: briefing-seo
estado: rascunho
entrada:
  - {{acervo/<id>-<data>-<slug>/ ou URL}}
personas:
  - {{persona-xx}}
fontes:
  - {{caminho ou URL com data de consulta}}
proxima_skill: {{inboundfy-especialista-blog | inboundfy-base-seo | outra}}
---

# Briefing SEO: {{nome da página}}

## Intenção

- **Pergunta da persona:** {{frase como ela digitaria}}
- **Intenção:** {{informativa | comparativa | transacional | investigativa | local}}
- **Estágio:** {{descoberta | consideração | escolha}}
- **Resultado esperado pela pessoa:** {{o que ela leva da página}}
- **Objetivo da empresa:** {{lead, venda, cadastro, suporte}}

## Termos

| Termo | Papel | Intenção | Volume mensal | Dificuldade | Fonte do dado |
| --- | --- | --- | --- | --- | --- |
| {{termo}} | principal | {{}} | {{n ou "sem dado"}} | {{baixa/média/alta}} | {{ferramenta e data}} |
| {{termo}} | variação | {{}} | {{}} | {{}} | {{}} |
| {{pergunta}} | pergunta | {{}} | {{}} | {{}} | {{}} |

## Leitura da SERP

- **Formato dominante:** {{guia, lista, página de serviço, comparativo, ferramenta}}
- **Recursos da SERP:** {{trecho em destaque, perguntas relacionadas, mapa, vídeo}}
- **O que o primeiro resultado entrega:** {{resumo}}
- **Lacuna que esta página ocupa:** {{dado próprio, exemplo local, preço claro}}

## Estrutura

- **URL:** /{{slug}}/
- **Title:** {{até 60 caracteres, termo principal no início}}
- **Meta description:** {{140 a 160 caracteres, benefício + prova + ação}}
- **H1:** {{pode diferir do title, mesmo assunto}}
- **Abertura:** {{resposta direta em até 3 frases}}
- **H2 e H3:**
  1. {{heading}}: {{o que responde}}
  2. {{heading}}: {{o que responde}}
- **Blocos obrigatórios:** {{tabela de preço, passo a passo, FAQ, depoimento}}
- **Prova:** {{dado, caso ou depoimento com fonte}}
- **CTA:** {{texto}} → {{URL de links.md}}

## Links internos

| De | Para | Âncora | Motivo |
| --- | --- | --- | --- |
| esta página | {{URL}} | {{âncora descritiva}} | {{}} |
| {{URL}} | esta página | {{âncora}} | {{}} |

## Marcação estruturada indicada

{{Article, Service, FAQPage, LocalBusiness ou "nenhuma"}} → `inboundfy-dados-estruturados`

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho}}
```

## Exemplo completo: Conta Leve

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A Conta Leve é um escritório de contabilidade digital de Belo
Horizonte. Atende MEI e microempresas do Simples Nacional, com plano a partir
de R$ 149 por mês, pagamento por Pix ou boleto e atendimento por WhatsApp. O
site tem Home, página de planos, blog com 30 artigos e página "Abrir empresa".
A persona principal (`persona-01`, Renata) é dona de um estúdio de
sobrancelhas que faturou R$ 92 mil no último ano como MEI.

**Pedido.** "Quero aparecer quando alguém pesquisar sobre deixar de ser MEI."

**Diagnóstico registrado.**

1. Busca provável: "estourei o limite do MEI", "como deixar de ser MEI",
   "MEI para ME".
2. Intenção mista: informativa (entender o que acontece) e transacional
   (contratar quem faça a migração).
3. Existe o artigo `/blog/limite-mei/`, de 2023, com valores antigos.
4. A SERP mostra portais de notícias e o site do Sebrae nas primeiras
   posições, com perguntas relacionadas sobre multa e prazo.
5. A Conta Leve tem 140 migrações feitas em 2025, com tempo médio de 9 dias
   úteis (fonte: planilha interna citada em `acervo/0118-2026-11-10-migracao-mei/pesquisa.md`).
6. CTA: diagnóstico gratuito por WhatsApp, URL em `links.md`.
7. Busca nacional com recorte local secundário ("contador para MEI BH").

**Termos classificados (trecho).**

| Termo | Papel | Intenção | Volume | Página |
| --- | --- | --- | --- | --- |
| como deixar de ser MEI | principal | informativa | 6.600 | pilar |
| desenquadramento MEI | variação | informativa | 2.900 | pilar |
| estourei o limite do MEI o que fazer | pergunta | informativa | 1.300 | pilar, seção |
| MEI para ME quanto custa | pergunta | investigativa | 480 | apoio 1 |
| contabilidade para microempresa BH | principal | local | 320 | página de serviço |

Volumes ilustrativos, consultados em ferramenta de palavras-chave em
2026-11-12.

**Três recortes apresentados.**

1. **Recomendado.** Reescrever `/blog/limite-mei/` como pilar "Como deixar de
   ser MEI", com duas páginas de apoio (custos da migração e Simples Nacional
   para ex-MEI) e link para a página de serviço. Aproveita a idade e os links
   da URL antiga.
2. Criar URL nova `/deixar-de-ser-mei/` e redirecionar a antiga com 301.
   Ganha slug mais limpo e perde parte do histórico por algumas semanas.
3. Página de serviço única "Migração de MEI para ME", transacional, sem pilar
   informativo. Converte melhor e disputa menos termos.

Renata (no papel de cliente fictícia) e o time escolhem o recorte 1.

**Briefing resultante (resumo).**

- **URL:** `/blog/limite-mei/` (mantida).
- **Title:** "Como deixar de ser MEI: passo a passo e custos" (47
  caracteres).
- **Meta description:** "Faturou acima de R$ 81 mil? Veja quando o
  desenquadramento é obrigatório, o que muda nos impostos e quanto custa
  migrar para ME." (138 caracteres).
- **Abertura:** "Você deixa de ser MEI quando fatura acima de R$ 81 mil no ano,
  contrata mais de um funcionário ou entra num sócio. Até 20% acima do limite,
  o desenquadramento vale a partir de janeiro. Acima disso, ele retroage ao
  início do ano."
- **H2:** quando o desenquadramento é obrigatório; o que acontece até 20%
  acima e acima de 20%; passo a passo no Portal do Simples Nacional; quanto
  custa manter uma ME no Simples; quanto tempo leva; perguntas frequentes.
- **Prova:** 140 migrações em 2025, média de 9 dias úteis, com fonte.
- **CTA:** "Fale com um contador pelo WhatsApp" → destino de `links.md`.
- **Links internos:** pilar → apoio 1 e apoio 2; apoio → pilar com âncora
  "como deixar de ser MEI"; pilar → página de planos com âncora "planos para
  microempresa".
- **Marcação:** Article e FAQPage, se as perguntas forem reais e visíveis.
- **Pendências:** confirmar o valor do limite vigente no Portal do Simples
  Nacional na data de publicação; confirmar se o atendimento por WhatsApp
  segue o horário publicado.
- **Handoff:** `inboundfy-especialista-blog` para o texto,
  `inboundfy-dados-estruturados` para o JSON-LD.

## Checklist

- [ ] O modo de trabalho foi escolhido e registrado.
- [ ] As sete perguntas de diagnóstico têm resposta ou pendência.
- [ ] Cada termo tem intenção, estágio e página de destino.
- [ ] Volumes e dificuldade têm ferramenta e data de consulta, ou "sem dado".
- [ ] A SERP dos termos principais foi lida e a lacuna está escrita.
- [ ] Nenhum termo principal aparece em duas páginas do cluster.
- [ ] Três recortes foram apresentados e a escolha foi registrada.
- [ ] Title até cerca de 60 caracteres, com o termo principal no início.
- [ ] Description entre 140 e 160 caracteres, com ação clara.
- [ ] A abertura responde à pergunta antes do CTA.
- [ ] Todo link interno aponta para URL existente ou peça registrada.
- [ ] Preço, prazo e dado externo têm fonte; o resto virou pendência.
- [ ] O handoff nomeia a próxima skill e o caminho do arquivo.

## Erros comuns

- **Escolher termo pelo volume e ignorar a intenção.** "Contabilidade" tem
  volume alto e mistura estudantes, vagas e empresas. Prefira o termo que a
  persona usa quando está perto de contratar.
- **Uma página por variação.** "Abrir MEI", "como abrir MEI" e "abrir MEI
  passo a passo" pedem a mesma resposta. Três páginas disputam entre si.
- **Copiar a estrutura do primeiro colocado.** A SERP mostra o formato
  esperado. A página precisa entregar algo que o primeiro colocado não tem.
- **Trocar URL que já ranqueia sem 301.** O histórico some e a posição cai.
- **Abertura que conta história antes de responder.** Quem busca quer a
  resposta nas primeiras linhas; o trecho em destaque também sai dali.
- **FAQ inventada para ganhar marcação.** Pergunta que ninguém faz não ajuda
  o leitor e pode perder o rich result.
- **Link interno com âncora "clique aqui".** A âncora diz ao buscador e ao
  leitor o assunto da página de destino.
- **Valor legal ou tributário sem data.** Limites, alíquotas e prazos mudam.
  Registre fonte oficial e data de consulta.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para SEO, os campos próprios são: termo principal, intenção, página de
destino, links internos e próxima skill.

## Roteiro de diagnóstico

No passo 2 do fluxo, leia [as perguntas de diagnóstico](references/diagnostico.md). Pergunte somente o que os insumos não responderem.
