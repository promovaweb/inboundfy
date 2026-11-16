# REFERENCIA.md; inboundfy-contexto-oferta

Material de apoio para manter produtos, serviços e ofertas. O detalhe de cada
domínio está em `references/`. Este arquivo traz o mapa, a separação entre
fato, condição, limite e promessa, o modelo de relato, um exemplo completo e
as armadilhas.

## Arquitetura aplicada

Leia os contratos compartilhados conforme a etapa:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md), antes do passo 1;
- [artefato e relações](../_shared/02-contrato-de-artefato.md), ao gravar;
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md), ao confirmar
  o alcance e no relato;
- [validação e retomada](../_shared/04-validacao-e-retomada.md), no passo 8;
- [contexto editorial](../_shared/05-contexto-editorial.md), quando a entrada
  trouxer texto de venda.

Referências internas, lidas no passo 2 do fluxo:

| Arquivo | Leia quando |
| --- | --- |
| [references/produtos.md](references/produtos.md) | produto, funcionalidade, estágio, limite técnico |
| [references/servicos.md](references/servicos.md) | serviço, escopo, formato, duração, pré-requisito |
| [references/ofertas.md](references/ofertas.md) | plano, preço, pagamento, desconto, garantia, teste grátis, comparativo |

## Mapa dos domínios

| Domínio | Arquivo do usuário | Pergunta principal | Campo que mais evita erro |
| --- | --- | --- | --- |
| produtos | `.inboundfy/context/produtos.md` | o que existe e como funciona? | limites reais |
| servicos | `.inboundfy/context/servicos.md` | qual trabalho é prestado? | o que não está incluso |
| ofertas | `.inboundfy/context/ofertas.md` | por quanto, como e com quais condições? | data da última confirmação |

## Fato, condição, limite e promessa

| Tipo | Exemplo fictício | Onde grava |
| --- | --- | --- |
| Fato operacional | "o alerta dispara quando o item chega ao ponto de reposição" | produto, em "Como funciona" |
| Condição comercial | "R$ 79 por mês, cartão ou boleto" | oferta |
| Limite | "não controla mais de uma loja por conta" | produto ou oferta, em limites ou não incluso |
| Promessa autorizada | "lojistas do piloto reduziram contagem manual de 6 h para 2 h por mês" | produto ou empresa, com fonte; só entra com prova |
| Promessa sem fonte | "você nunca mais perde venda" | não grava; vira pergunta e checagem em `proibicoes.md` |

## Template de relato da alteração

```markdown
---
skill: inboundfy-contexto-oferta
dominio: {produtos | servicos | ofertas}
arquivo: .inboundfy/context/{arquivo}.md
estado: {gravado | pendente de confirmação}
fonte: {resposta do usuário em AAAA-MM-DD, tabela de preços, contrato}
---

# Atualização de oferta

## Registro

| Item | Campo | Antes | Depois |
| --- | --- | --- | --- |
| {produto, serviço ou plano} | {campo} | {valor ou "vazio"} | {valor} |

## Limites e condições

- {limite ou condição registrada}

## Divergências com peças publicadas

- {caminho e trecho, ou "nenhuma encontrada"}

## Perguntas abertas

- {pergunta ou "nenhuma"}

## Próxima ação

{skill que deve usar o dado e o que ela faz com ele}
```

## Exemplo completo (fictício)

Empresa ilustrativa: Estoquely, aplicativo de estoque para lojas pequenas.

**Entrada.** O sócio comercial envia: "A partir de 1º de dezembro o Essencial
vai para R$ 89 por mês. O anual sai por R$ 890 no Pix ou em até 10x no
cartão. Quem já é cliente mantém R$ 79 até junho. E o teste grátis agora é
de 14 dias, sem cartão."

**Passo 1.** Tudo é oferta. Nenhum produto ou serviço novo.

**Passo 3, separação.** Preço novo (condição, com data de início). Plano
anual com dois meios de pagamento (condição). Preço mantido para a base
atual (condição temporária com fim). Teste grátis (condição). Nenhuma
promessa.

**Passo 4, lacunas.** A skill pergunta: "O anual em 10x tem juros? O teste
grátis vale para todos os planos? Os R$ 79 da base valem até qual dia de
junho?" Resposta: sem juros, só Essencial e Crescimento, até 30 de junho
de 2027.

**Passo 5 e 6, gravação.**

```markdown
## Essencial

- **Preço:** R$ 89/mês a partir de 2026-12-01 (antes: R$ 79/mês)
- **Periodicidade:** mensal ou anual
- **Plano anual:** R$ 890 no Pix ou em até 10x sem juros no cartão
- **Formas de pagamento:** cartão de crédito, boleto, Pix (anual)
- **Teste grátis:** 14 dias, sem cartão
- **O que está incluso:** até 200 produtos, 1 usuário, alerta de estoque baixo
- **O que não está incluso:** múltiplos usuários, relatório de giro de estoque
- **Público-alvo do plano:** loja com até 3 funcionários
- **Condição de upgrade/downgrade:** upgrade a qualquer momento, cobrança proporcional
- **Condição para clientes atuais:** mantêm R$ 79/mês até 2027-06-30
- **Data da última confirmação deste preço:** 2026-11-15
```

O comparativo ao final do arquivo recebe o preço novo.

**Passo 8, divergências.** A página de preços e três posts do blog citam
R$ 79. A skill lista os caminhos e encaminha a página de preços para
`inboundfy-copy-oferta` e o aviso aos clientes atuais para
`inboundfy-especialista-email`.

## Checklist

- [ ] Domínio classificado pela regra de produto, serviço e oferta.
- [ ] Fato, condição, limite e promessa separados.
- [ ] Preço com moeda, periodicidade e data de confirmação.
- [ ] Formas de pagamento registradas quando informadas.
- [ ] Condição temporária com início e fim.
- [ ] "O que não está incluso" e "limites reais" preenchidos.
- [ ] Todo plano aponta para produto ou serviço cadastrado.
- [ ] Comparativo atualizado quando houver dois planos ou mais.
- [ ] Nomes novos enviados ao glossário.
- [ ] Divergências com peças publicadas listadas.

## Erros comuns

- Transformar recurso em resultado garantido ("o alerta acaba com a falta de
  produto").
- Estimar preço "no padrão do mercado". Sem confirmação, o campo fica "não
  informado".
- Gravar desconto de campanha como preço do plano. Desconto temporário tem
  período e vai em linha própria.
- Esquecer a base atual quando o preço sobe. A comunicação para clientes
  antigos depende desse campo.
- Escrever "a partir de" sem dizer o que o valor mínimo inclui.
- Apagar plano descontinuado. Clientes antigos continuam nele.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance. Quando
o pedido for de estratégia de preço ou de copy da oferta, registre o que já
está confirmado e encaminhe o restante.

Leituras de apoio do framework: `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md`
(para reconhecer promessa na entrada) e
`docs/method/02-contexto-fontes-e-precedencia.md`.
