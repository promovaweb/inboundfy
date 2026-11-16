# Referência de atribuição

Este arquivo dá o material de trabalho do fluxo descrito em
[SKILL.md](SKILL.md). Leia primeiro o template e o exemplo. Os arquivos de
`references/` entram nos passos indicados abaixo.

## Leituras por passo do fluxo

| Passo | Arquivo | Para quê |
| --- | --- | --- |
| 2 | [atribuicao-primeira-parte.md](references/atribuicao-primeira-parte.md) | Fazer a fonte da verdade guardar origem, UTM e autorrelato, com cuidado de LGPD. |
| 4 | [modelos-de-atribuicao.md](references/modelos-de-atribuicao.md) | Calcular cada modelo sobre o mesmo percurso e ler a diferença. |
| 8 | [paradigmas-de-medicao.md](references/paradigmas-de-medicao.md) | Escolher entre atribuição por toque, modelo de mix e teste de incrementalidade. |

## O que atribuição responde e o que não responde

Atribuição distribui crédito entre pontos de contato que foram registrados.
Ela responde perguntas como "quais canais aparecem antes das vendas" e "qual
peça abre mais percursos que terminam em cliente". Ela não responde "quanto
venderíamos sem este canal", porque essa é uma pergunta de causa. Para causa,
o caminho é teste de incrementalidade (holdout, teste geográfico, pausa
controlada). O relatório sempre diz em qual das duas perguntas está.

Três fontes enxergam o mesmo cliente de jeitos diferentes:

| Fonte | O que enxerga bem | Onde falha |
| --- | --- | --- |
| Plataforma de mídia (Meta Ads, Google Ads, TikTok Ads) | Cliques e visualizações do próprio anúncio | Reivindica a venda que outra plataforma também reivindica; janela de visualização infla o crédito |
| Analytics do site (GA4 ou similar) | Sessões, UTMs, eventos no site | Perde o cliente que fecha no WhatsApp, por telefone ou em outro dispositivo; recusa de cookie apaga dado |
| CRM ou sistema de pagamento | Quem pagou, quanto e quando | Só guarda origem se o formulário ou o atendimento gravar; origem vazia vira "direto" |
| Autorrelato ("como nos conheceu") | Podcast, indicação, grupo de WhatsApp, evento, vídeo assistido sem clique | Memória falha, opções mal escritas induzem resposta |

## Template de relatório

```markdown
---
id: atr-{{AAAA-MM}}-{{recorte}}
skill: inboundfy-atribuicao
estado: rascunho
periodo: {{AAAA-MM-DD}} a {{AAAA-MM-DD}}
conversao: {{lead | oportunidade | venda | primeira mensalidade}}
fonte_da_verdade: {{CRM, ERP, gateway ou planilha}}
entrada:
  - {{exportação do CRM com data}}
  - {{relatório do analytics com data}}
  - {{relatório da plataforma de mídia com data}}
proxima_skill: {{inboundfy-rastreamento-conversao | inboundfy-metricas | inboundfy-estrategia}}
---

# Atribuição de {{conversão}} em {{período}}

## Pergunta e escolha dependente

- Pergunta: {{texto da pergunta}}
- Escolha que depende da resposta: {{corte, realocação, pauta, contratação}}

## Quadro por ferramenta

| Fonte | Modelo padrão | Janela | Conversões | Receita | Extraído em |
| --- | --- | --- | ---: | ---: | --- |
| {{fonte}} | {{modelo}} | {{janela}} | {{n}} | R$ {{valor}} | {{data}} |

Total da fonte da verdade: {{n}} conversões, R$ {{valor}}.

## Comparação de modelos (base: percursos rastreáveis = {{n}})

| Canal | Primeiro contato | Último não direto | Linear | Decaimento | Autorrelato |
| --- | ---: | ---: | ---: | ---: | ---: |
| {{canal}} | {{n}} | {{n}} | {{n}} | {{n}} | {{n}} |

## Distorções encontradas

- {{distorção}}: {{tamanho estimado e fonte}}

## Leitura descritiva

{{O que os dados mostram, sem recomendação.}}

## Recomendação

{{O que fazer; confiança operacional alta, média ou baixa; motivo.}}

## Próximo teste ou correção de captura

{{Teste, hipótese, duração, responsável e skill que executa.}}
```

## Exemplo completo (empresa fictícia)

**Contabiliza Já** é um escritório de contabilidade online fictício, em
Campinas, que atende MEI e microempresas. A mensalidade média é R$ 389,
cobrada por Pix ou boleto. Leads chegam por formulário no site e pelo botão
de WhatsApp. A sócia pergunta se pode cortar R$ 6.000 mensais de Meta Ads,
porque o GA4 mostra o Google como origem da maior parte das vendas.

### Quadro por ferramenta (setembro e outubro de 2026)

| Fonte | Modelo padrão | Janela | Conversões | Receita | Extraído em |
| --- | --- | --- | ---: | ---: | --- |
| CRM (fonte da verdade) | origem gravada no cadastro | não se aplica | 120 clientes | R$ 46.680/mês recorrente | 2026-11-03 |
| GA4 | último clique não direto | 90 dias | 89 leads de formulário | não mede | 2026-11-03 |
| Meta Ads | 7 dias clique, 1 dia visualização | 7d/1d | 74 leads | não mede | 2026-11-03 |
| Google Ads | baseado em dados | 30 dias | 61 leads | não mede | 2026-11-03 |

As plataformas somam 224 leads reivindicados para 120 clientes e cerca de
170 leads reais no CRM. Essa soma não tem significado. Cada ferramenta conta
com sua regra. Várias contam o mesmo lead.

### Distorções encontradas

- 55 dos 120 clientes (46%) fecharam no WhatsApp. O botão abria a conversa
  sem código de origem, então o CRM gravou "direto" ou deixou vazio.
- O GA4 perde a origem de 18% das sessões por recusa no banner de cookies.
- A janela de visualização de 1 dia do Meta Ads credita leads que viram o
  anúncio no feed e depois pesquisaram a marca no Google.

### Comparação de modelos (65 percursos rastreáveis no CRM com UTM)

| Canal | Primeiro contato | Último não direto | Linear | Autorrelato (120 respostas) |
| --- | ---: | ---: | ---: | ---: |
| Instagram (pago e orgânico) | 24 | 9 | 15,5 | 34 |
| Google Ads | 11 | 27 | 18,0 | 14 |
| Busca orgânica e blog | 21 | 17 | 19,5 | 23 |
| Indicação | 4 | 6 | 5,0 | 27 |
| YouTube | 5 | 6 | 7,0 | 22 |

### Leitura descritiva

O Google aparece como último toque porque a pessoa vê o anúncio no
Instagram, pesquisa "contabilidade online Campinas" dias depois e clica no
anúncio de marca. No primeiro contato e no autorrelato, o Instagram lidera.
O artigo "MEI pode ter funcionário?" abre 14 dos 21 percursos de busca
orgânica, então a peça ganha uma linha própria no catálogo.

### Recomendação

Não cortar o Meta Ads agora. Confiança operacional baixa para corte, porque
quase metade das vendas não tem origem rastreável. Reduzir 30% do orçamento
de campanha de marca no Google Ads, que capta quem já iria comprar. Medir
o efeito por quatro semanas.

### Próximo teste e correções

1. `inboundfy-rastreamento-conversao`: o botão de WhatsApp passa a abrir com
   mensagem pré-preenchida contendo um código curto por origem (ex.: "Olá,
   vim pelo artigo MEI #B07"). O atendimento grava o código no CRM.
2. Incluir "como nos conheceu" obrigatório no cadastro, com opções fechadas
   e campo livre.
3. Teste geográfico: pausar Meta Ads em Sorocaba e Jundiaí por seis semanas,
   mantendo Campinas e Piracicaba como controle. Comparar leads por mil
   habitantes no CRM.

## Checklist

- [ ] A pergunta de negócio e a escolha dependente estão escritas.
- [ ] A fonte da verdade foi declarada com motivo.
- [ ] Cada ferramenta aparece com modelo, janela e data de extração.
- [ ] Nenhuma coluna soma ferramentas diferentes.
- [ ] Todo percentual mostra número absoluto e denominador.
- [ ] O tamanho das conversões sem origem foi medido.
- [ ] A comparação usa pelo menos três modelos e o autorrelato quando existe.
- [ ] Leitura descritiva e recomendação estão em seções separadas.
- [ ] A recomendação traz confiança operacional com motivo.
- [ ] Falhas de captura foram enviadas para `inboundfy-rastreamento-conversao`.
- [ ] Nenhum dado pessoal identificável aparece no relatório.

## Erros comuns

- **Somar o que as plataformas reivindicam.** Meta Ads, Google Ads e GA4
  contam a mesma venda. Compare cada uma com a fonte da verdade, nunca entre
  si por soma.
- **Ler "direto" como canal.** Tráfego direto alto quase sempre é origem
  perdida: WhatsApp sem código, app de email, PDF, link encurtado sem UTM.
- **Cortar o canal de topo pelo último clique.** Conteúdo, vídeo e Instagram
  aparecem no começo do percurso. O último clique favorece busca de marca e
  remarketing.
- **Janela curta para venda longa.** Um ciclo de 45 dias medido com janela
  de 7 dias apaga o conteúdo que abriu o contato.
- **Ignorar o autorrelato porque é "subjetivo".** Ele é a única fonte que
  enxerga podcast, indicação e grupo de WhatsApp. Use ao lado dos dados de
  clique, não no lugar deles.
- **Mudar o modelo padrão no meio do ano sem registrar.** A série histórica
  quebra e o relatório seguinte compara números que não se comparam.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-atribuicao**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Na atribuição, isso significa três cuidados. O campo **fonte** de cada número
aponta para a exportação e a data. O campo **persona** aparece quando o CRM
permite separar o percurso por perfil, porque um contador autônomo e uma
microempresa com cinco funcionários chegam por caminhos diferentes. O campo
**próxima ação** nomeia a skill que recebe o trabalho:

| Lacuna encontrada | Skill que recebe |
| --- | --- |
| Origem não gravada, UTM perdida, pixel duplicado, WhatsApp sem código | `inboundfy-rastreamento-conversao` |
| Conversão sem definição, evento sem nome padrão, meta ausente | `inboundfy-metricas` |
| Hipótese de página ou oferta para testar | `inboundfy-experimentacao` |
| Peça ou tema com bom primeiro contato, pedindo mais pauta | `inboundfy-estrategia` |
| Pergunta sobre quem compra e por quê, além do clique | `inboundfy-pesquisa-cliente` |
