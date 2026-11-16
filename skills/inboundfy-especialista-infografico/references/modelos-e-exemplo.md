# Modelos de copy para infográfico

Leia no passo de escrita e novamente antes do handoff de imagem.

## Envelope para preencher

Complete o envelope compartilhado com ID, skill, tipo, estado, datas, entrada,
contexto, fontes e próxima ação. Acrescente:

```yaml
titulo: "<objeto e recorte>"
fonte-dos-dados:
  - "<arquivo e seção>"
brief: "<brief aprovado>"
formato: "<comparacao|processo|composicao|produto>"
ordem-de-leitura: "<descrição independente de cor>"
```

## Modelo de composição ou comparação

```markdown
# <Título>
Subtítulo: <base, período e natureza dos dados>

## Bloco 01
Rótulo: <categoria>
Destaque: <valor e unidade>
Explicação: <o que o dado representa>
Base: <denominador e período>
Fonte: <arquivo e seção>

## Bloco 02
Rótulo: <categoria comparável>
Destaque: <valor na mesma unidade>
Explicação: <interpretação restrita ao dado>
Base: <mesmo denominador e período ou diferença declarada>
Fonte: <arquivo e seção>

## Legenda
<interpretação em prosa, limite e ação aprovada>

## Alt text
<ordem de leitura, relação e dados centrais>

## Notas para composição
<IDs, agrupamentos e conteúdo que não pode ser removido>
```

## Modelo de processo

```markdown
# <Tarefa que o processo resolve>
Condição inicial: <entrada necessária>

## Bloco 01
Rótulo: <verbo e objeto>
Texto: <ação e resultado observável>
Avance quando: <condição verificável>
Fonte: <procedimento do projeto>

## Bloco 02
Rótulo: <próxima ação dependente>
Texto: <ação e resultado observável>
Se não funcionar: <retorno ao passo aplicável>
Fonte: <procedimento do projeto>

## Legenda
<situação de uso, limite e ação>
## Alt text
<sequência completa e condições>
```

Para produto, substitua cada passo por característica, vantagem e benefício.
Não use esse formato para afirmar que o produto entrega um resultado sem fonte.

## Entrada do exemplo fictício

A fonte didática contém o heading `## Simulação`, cuja âncora é `#simulação`.

Empresa: Semente Clara, papelaria de Campinas.
Persona: persona-01, responsável por compras de pequenas papelarias.
Objetivo: ensinar a leitura da composição de um custo, sem vender margem garantida.
Fonte didática: acervo/0042-2026-11-15-cadernos/processado.md, seção “Simulação”.
Dados simulados: papel R$ 600, impressão R$ 360, acabamento R$ 240.
Brief: quatro blocos, incluindo total. Sem CTA comercial.
Voz: direta, com explicação de unidade. Não existe pesquisa de mercado neste caso.

## Saída completa do exemplo fictício

```markdown
---
id: "0042"
skill: inboundfy-especialista-infografico
tipo: infografico
estado: revisao
criado_em: "2026-11-15"
atualizado_em: "2026-11-15"
entrada:
  - acervo/0042-2026-11-15-cadernos/processado.md
brief: acervo/0042-2026-11-15-cadernos/04-briefs/infografico-cadernos.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - acervo/0042-2026-11-15-cadernos/base-editorial.md
  - acervo/0042-2026-11-15-cadernos/processado.md
titulo: Como ler o custo de um lote de cadernos
fonte-dos-dados:
  - acervo/0042-2026-11-15-cadernos/processado.md#simulação
formato: composicao
ordem-de-leitura: "Total no topo; papel, impressão e acabamento abaixo, nessa ordem."
proxima_acao: "Solicitar inboundfy-validador-infografico antes da composição."
---

# Como ler o custo de um lote de cadernos

Subtítulo: Simulação didática da Semente Clara. Valores de um único lote.

## Bloco 01
Rótulo: Total do lote
Destaque: R$ 1.200
Explicação: A soma reúne papel, impressão e acabamento deste exercício. O valor representa apenas os itens simulados, antes de frete e tributos.
Base: Um lote simulado.
Fonte: acervo/0042-2026-11-15-cadernos/processado.md#simulação

## Bloco 02
Rótulo: Papel
Destaque: R$ 600 (50%)
Explicação: O papel corresponde à metade do custo apresentado. A participação foi calculada dividindo R$ 600 pelo total de R$ 1.200.
Base: R$ 1.200.
Fonte: acervo/0042-2026-11-15-cadernos/processado.md#simulação

## Bloco 03
Rótulo: Impressão
Destaque: R$ 360 (30%)
Explicação: A impressão ocupa três décimos do total simulado. Essa participação descreve este exercício; outros lotes podem ter composição diferente.
Base: R$ 1.200.
Fonte: acervo/0042-2026-11-15-cadernos/processado.md#simulação

## Bloco 04
Rótulo: Acabamento
Destaque: R$ 240 (20%)
Explicação: O acabamento completa o custo deste exercício. As três parcelas somam R$ 1.200 e suas participações somam 100%.
Base: R$ 1.200.
Fonte: acervo/0042-2026-11-15-cadernos/processado.md#simulação

## Legenda

Antes de comparar propostas para um lote de cadernos, separe os itens que
formam o preço. Neste exercício da Semente Clara, papel, impressão e
acabamento somam R$ 1.200. A divisão mostra quanto cada item representa
dentro desse total.

Os valores são simulados e deixam frete e tributos fora da conta. Por isso,
a imagem serve para explicar a leitura da composição, sem funcionar como
cotação ou referência de preço do mercado. Ao comparar propostas reais,
confira se todas incluem os mesmos serviços. Se uma delas trouxer o frete
separado, some esse valor antes da comparação.

## Alt text

Infográfico de composição de um lote simulado de cadernos. No topo, total
de R$ 1.200. Abaixo, papel: R$ 600, 50%; impressão: R$ 360, 30%; acabamento:
R$ 240, 20%. As parcelas somam o total. Frete e tributos não estão incluídos.

## Notas para composição

Manter “simulação didática”, unidade em reais, base e fonte. Usar rótulos
além das cores. Não somar o bloco total novamente às três parcelas.
A copy aguarda validação. A composição seguirá depois para
inboundfy-especialista-infografico-imagem.
```

