# Domínio glossário

Referência do domínio `glossario` da skill `inboundfy-contexto-institucional`.
Ela é lida no passo 2 do fluxo, e também no passo 6 sempre que outro domínio
criar ou mudar uma grafia oficial.

## Função

`.inboundfy/context/glossario.md` fixa como cada nome se escreve. A
`inboundfy-copy-editor` e as validadoras reprovam peça com grafia fora do
glossário. O arquivo não é lista de vetos: uma grafia preferida mora aqui, um
termo proibido mora em `proibicoes.md`.

## O que entra no glossário

| Tipo de termo | Exemplo fictício | Por que registrar |
| --- | --- | --- |
| Nome da marca | Estoquely | evitar "EstoqueLy" ou "Estokely" |
| Produto ou plano | Estoquely Pro | maiúscula e espaço |
| Recurso com nome próprio | Alerta de Reposição | maiúsculas de nome próprio |
| Sigla | SKU, NF-e, Pix | Pix não é sigla e não se escreve PIX |
| Termo técnico do setor | ponto de reposição | grafia e definição curta |
| Estrangeirismo aceito | onboarding, e-commerce | hífen, itálico ou tradução |
| Cargo com grafia interna | Customer Success | maiúsculas ou tradução |

## Fluxo do domínio

1. Leia `glossario.md` e confirme se o termo já existe.
2. Confirme a grafia com quem responde pela marca quando a fonte não for
   explícita.
3. Registre grafia correta, variações a evitar e observação com origem.
4. Para sigla, registre também a forma por extenso na primeira menção quando
   a persona não conhece o termo.
5. Avise as skills de copy que o termo mudou quando houver peças em produção.

## Modelo de linha

O template usa esta tabela. Mantenha as colunas:

```markdown
| Termo | Grafia correta | Nunca escrever como | Observação |
| --- | --- | --- | --- |
| {termo} | {grafia oficial} | {variações erradas, separadas por vírgula} | {uso, primeira menção e origem} |
```

## Exemplo preenchido (fictício; "Estoquely")

```markdown
| Termo | Grafia correta | Nunca escrever como | Observação |
| --- | --- | --- | --- |
| Estoquely | Estoquely | EstoqueLy, Estokely, estoquely | Marca. Confirmado por Marina Alves em 2026-02-10. |
| Estoquely Pro | Estoquely Pro | Estoquely PRO, EstoquelyPro | Plano. Confirmado em 2026-11-15. |
| Pix | Pix | PIX, pix | Meio de pagamento; nome próprio, não sigla. |
| SKU | SKU | sku, Sku | Persona não conhece: na primeira menção, "código do produto (SKU)". |
| ponto de reposição | ponto de reposição | ponto de pedido, estoque mínimo | Termo do produto para o alerta de compra. |
```

## Checklist

- [ ] Termo novo não duplica linha existente.
- [ ] Grafia confirmada por quem responde pela marca.
- [ ] Variações erradas comuns listadas.
- [ ] Sigla desconhecida da persona tem forma de primeira menção.
- [ ] Origem e data na observação.

## Erros comuns

- Registrar veto editorial aqui. "Nunca dizer garantido" é proibição.
- Esquecer as flexões. Se a marca vira adjetivo ("lojas Estoquely"),
  registre o uso aceito.
- Uniformizar grafia de marca de terceiro sem conferir no site oficial dela.
- Escrever siglas comuns do Brasil em caixa alta por hábito, como "PIX".

## Relações

O glossário serve empresa, oferta, voz, personas, acervo e produção.
`inboundfy-copy-editor` cruza o glossário com `proibicoes.md` e
`estruturas-proibidas.md` na mesma auditoria.
