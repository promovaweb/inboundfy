# REFERENCIA.md; inboundfy-contexto-publico

Material de apoio para manter `context/publico.md`. O formato completo do
bloco e as técnicas de pesquisa estão em `references/`. Este arquivo traz o
roteiro de entrevista, os campos exigidos pelo CLI, o modelo de relato, um
exemplo completo e as armadilhas.

## Arquitetura aplicada

Leia os contratos compartilhados conforme a etapa:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md), antes do passo 1;
- [artefato e relações](../_shared/02-contrato-de-artefato.md), ao gravar;
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md), que define
  o menu de personas usado na produção;
- [validação e retomada](../_shared/04-validacao-e-retomada.md), antes de
  declarar a persona pronta;
- [contexto editorial](../_shared/05-contexto-editorial.md), para ligar
  persona, voz e jargão.

Referências internas, lidas no passo 2 do fluxo:

| Arquivo | Leia quando |
| --- | --- |
| [references/bloco-de-persona.md](references/bloco-de-persona.md) | sempre que gravar ou alterar uma persona |
| [references/fontes-e-pesquisa.md](references/fontes-e-pesquisa.md) | a entrada é material de pesquisa ou faltam dados para os campos obrigatórios |

## Campos lidos pelo `inboundfy doctor`

O CLI considera o público pronto quando existe ao menos um bloco assim, com
os quatro campos preenchidos e sem chaves `{}`:

```markdown
## Persona 01: {nome de referência}

- **Quem é:** {...}
- **Contexto de compra:** {...}
- **Problema que tenta resolver:** {...}
- **Resultado que procura:** {...}
```

Projetos instalados antes da versão 0.8.0 podem ter o cabeçalho
`## {Nome da persona ou segmento}` sem os campos de contexto, problema e
resultado. Ao gravar, use o bloco completo de
`references/bloco-de-persona.md`.

## Roteiro de entrevista

1. "Quem é essa pessoa: função, tipo de negócio, porte, maturidade no
   assunto?"
2. "Quando ela começa a procurar uma saída? O que acontece antes?"
   Vira `Contexto de compra`.
3. "Qual problema ela tenta resolver, nas palavras dela?"
4. "Que resultado ela quer ver quando o problema sumir?"
5. "Qual cena concreta mostra a dor? Onde, quando, com que consequência?"
6. "O que ela já sabe sobre o problema antes de chegar até vocês?"
7. "O que ela já tentou e por que não funcionou?"
8. "Qual objeção ela levanta antes de comprar? Como ela fala isso?"
9. "O que faz ela agir de verdade?"
10. "Onde ela consome conteúdo: busca, Instagram, YouTube, grupo de
    WhatsApp, indicação?"
11. "Que palavras ela usa para descrever o problema?"
12. "Qual produto, serviço ou plano serve melhor a ela?"
13. "De onde vem essa descrição: clientes reais, percepção do time,
    hipótese?"

## Template de relato da alteração

```markdown
---
skill: inboundfy-contexto-publico
arquivo: .inboundfy/context/publico.md
persona: persona-{NN}
estado: {gravado | pendente de confirmação}
confianca: {pesquisa com clientes | observação do time | hipótese}
fonte: {entrevistas, tickets, conversa com o usuário em AAAA-MM-DD}
---

# Atualização de público

## O que mudou

| Campo | Antes | Depois |
| --- | --- | --- |
| {campo} | {valor ou "vazio"} | {valor} |

## Pendências

- {campo sem resposta ou "nenhuma"}

## Próxima ação

{skill que deve usar a persona e para quê}
```

## Exemplo completo (fictício)

Empresa ilustrativa: Estoquely, aplicativo de estoque para lojas pequenas.

**Entrada.** O sócio comercial resume: "Nossa melhor cliente é a dona de loja
de roupas pequena, que faz tudo sozinha. Ela chega pelo Instagram ou por
indicação. Quase sempre diz que não entende de tecnologia."

**Diagnóstico.** É uma pessoa concreta. A fonte é observação do time
comercial. A skill pergunta pela cena da dor, pelo momento de compra e pela
oferta. O sócio conta que a busca começa depois de um pedido vendido no
WhatsApp que não tinha em estoque, quase sempre perto de datas como Dia das
Mães. A oferta indicada é o plano Essencial com teste grátis.

**Persona gravada.**

```markdown
## Persona 01: Dona de loja de roupas

- **ID:** persona-01
- **Quem é:** dona de loja de roupas de bairro, com até 3 funcionários ou familiares; vende no balcão e pelo WhatsApp; controla estoque em caderno ou planilha.
- **Contexto de compra:** procura uma saída depois de vender pelo WhatsApp uma peça que já tinha acabado, quase sempre na semana de uma data forte de vendas.
- **Problema que tenta resolver:** "não sei o que tenho na loja sem ir lá contar".
- **Resultado que procura:** responder a cliente do WhatsApp na hora, sabendo que a peça existe.
- **O que já sabe sobre o problema:** sabe que perde venda por falta de controle; acha que sistema é coisa de loja grande.
- **Dor principal:** separar o pedido de uma cliente fiel, não achar a peça e ter de devolver o Pix.
- **O que já tentou e não resolveu:** planilha no celular; funciona duas semanas e ela para de atualizar.
- **Objeção mais comum:** "não entendo de tecnologia, vou complicar minha vida".
- **O que faria essa pessoa agir:** ver outra lojista parecida com ela usando o app em menos de um minuto.
- **Onde essa pessoa consome conteúdo:** Instagram, grupos de WhatsApp de lojistas do bairro, indicação de fornecedor.
- **Jargão que essa pessoa usa (para espelhar na busca/título):** "faltou mercadoria", "perdi a venda", "controle de estoque simples"; nunca diz "SKU" ou "gestão de catálogo".
- **Oferta relacionada:** plano Essencial com teste grátis de 14 dias (context/ofertas.md)
- **Fonte e confiança:** observação do time comercial em 2026-11-15; validar com 5 entrevistas.
```

**Relato.** A pendência registrada é a validação com entrevistas, sugerida a
`inboundfy-pesquisa-cliente`. A próxima ação aponta para `inboundfy-base-seo`,
que usa o jargão para escolher palavras-chave como "controle de estoque
simples para loja de roupas".

## Checklist

- [ ] Cabeçalho `## Persona NN: {nome}` e `**ID:** persona-NN`.
- [ ] `Quem é`, `Contexto de compra`, `Problema que tenta resolver` e
      `Resultado que procura` preenchidos.
- [ ] Dor com cena concreta.
- [ ] Objeção na fala da persona.
- [ ] Jargão nas palavras da persona, não da empresa.
- [ ] Canais de consumo e oferta relacionada preenchidos.
- [ ] Fonte e confiança registradas.
- [ ] Nenhuma persona removida ou renumerada.

## Erros comuns

- Descrever a persona pelo que a empresa quer vender ("precisa de
  automação").
- Persona do tamanho do mercado ("empreendedor brasileiro").
- Usar o vocabulário interno no campo de jargão.
- Renumerar personas ao apagar uma. Briefs antigos passam a apontar para a
  pessoa errada.
- Gravar hipótese do time como pesquisa. A confiança orienta quanto a copy
  pode afirmar.
- Deixar `{Nome da persona}` no cabeçalho. O `inboundfy doctor` não reconhece
  a persona.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance. Quando
a entrada for um volume de dados brutos, encaminhe a análise e grave só o
resultado aprovado.

Leituras de apoio do framework: `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md`
(nível de consciência e objeções) e
`docs/method/02-contexto-fontes-e-precedencia.md`.
