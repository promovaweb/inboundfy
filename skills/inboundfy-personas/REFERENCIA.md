# REFERENCIA.md; inboundfy-personas

Referência para construir personas que mudam a produção. A ficha abaixo
organiza a persona pela situação que a faz procurar uma solução, pela tarefa
que ela quer resolver e pelas palavras que ela usa. Idade, gênero e renda só
entram quando alteram canal, oferta ou linguagem.

## Mapa de leitura

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| Esta página, classificação de fontes | Passo 2 | Como separar fato, interpretação e hipótese. |
| [references/segmentacao-e-jtbd.md](references/segmentacao-e-jtbd.md) | Passo 3 | Agrupamento por tarefa, forças de mudança, estágio de consciência e papéis na compra. |
| [references/roteiro-de-entrevista-de-persona.md](references/roteiro-de-entrevista-de-persona.md) | Passo 4 | Como recrutar, o que perguntar e como registrar entrevistas. |
| Esta página, template e exemplo | Passos 5 e 6 | Ficha da persona, persona negativa e caso completo. |
| [references/uso-das-personas-na-producao.md](references/uso-das-personas-na-producao.md) | Passo 9 | Menu de seleção e o que cada campo muda na peça. |

## Classificação de fontes

| Tipo | Exemplo | Peso |
| --- | --- | --- |
| Fato observado | Transcrição de entrevista, conversa de WhatsApp, motivo de cancelamento registrado no CRM, avaliação pública | Sustenta campo da ficha |
| Interpretação | Resumo do vendedor ("eles sempre reclamam de preço"), relatório de atendimento | Sustenta com ressalva. Pede confirmação em fato |
| Hipótese | Opinião do sócio sem registro, persona de outro projeto, suposição de mercado | Entra marcada como `hipotese` |

Uma persona `validada` tem ao menos cinco fatos observados independentes que
repetem o padrão. Abaixo disso, o status é `hipotese` e a peça que a usa
registra a limitação.

## Template da ficha

Um bloco por persona em `.inboundfy/context/publico.md`. Os oito campos do
template original (quem é, o que já sabe, dor principal, o que já tentou,
objeção mais comum, o que faria agir, onde consome conteúdo, jargão)
continuam presentes. Os demais complementam.

```markdown
## {{persona-xx}} | {{Nome de referência}}

- **Status:** {{hipotese | validada | arquivada}}
- **Quem é:** {{papel, contexto do negócio ou da vida, porte}}
- **Situação:** {{quando e onde o problema aparece}}
- **Tarefa a resolver:** "Quando {{situação}}, quero {{motivação}}, para {{resultado}}."
- **Gatilho:** {{acontecimento que faz procurar agora}}
- **O que já sabe sobre o problema:** {{estágio de consciência}}
- **Dor principal:** {{dor concreta, com número quando houver}}
- **O que já tentou e não resolveu:** {{alternativas atuais, inclusive planilha e "não fazer nada"}}
- **Forças de mudança:**
  - Empurra: {{o que incomoda na situação atual}}
  - Atrai: {{o que a nova solução promete}}
  - Ansiedade: {{medo de trocar}}
  - Hábito: {{o que prende ao jeito atual}}
- **Objeção mais comum:** {{objeção com as palavras do cliente}}
- **O que pesa na escolha:** {{preço, prazo, suporte, integração, indicação}}
- **O que faria essa pessoa agir:** {{gatilho de conversão}}
- **Papel na compra:** {{decide, usa, influencia, paga}}
- **Onde consome conteúdo:** {{canais e formatos}}
- **Jargão e frases literais:**
  - "{{frase do cliente}}" ({{fonte}})
- **Oferta pertinente:** {{produto, plano ou serviço de ofertas.md}}
- **Resultado procurado:** {{mudança que a pessoa quer ver}}
- **Sinais de qualificação:** {{o que indica que um lead é esta persona}}
- **Fontes:** {{lista de caminhos ou descrições}}
- **Histórico:** {{AAAA-MM-DD}}: {{mudança e fonte}}
- **Próxima revisão:** {{AAAA-MM}}
```

## Modelo de persona negativa

```markdown
## {{persona-neg-xx}} | {{Nome de referência}}

- **Quem é:** {{perfil}}
- **Por que não atender:** {{custo de atendimento, cancelamento cedo, necessidade fora da oferta}}
- **Como reconhecer:** {{sinais no formulário, na conversa ou no CRM}}
- **O que a comunicação evita:** {{promessa, canal ou palavra que atrai este perfil}}
- **Fontes:** {{caminhos}}
```

## Exemplo completo (ilustrativo)

Empresa fictícia: **Banca Digital**, de Fortaleza (CE). Vende sistema de
caixa, comanda e pedido por WhatsApp para hamburguerias e lanchonetes com
balcão e delivery. Plano Essencial a R$ 149 por mês, pago por Pix ou cartão.
Os números e frases abaixo são inventados.

### Fontes levantadas

| Fonte | Tipo | Volume |
| --- | --- | --- |
| Entrevistas com clientes ativos | Fato | 9 |
| Conversas de WhatsApp com leads (últimos 90 dias) | Fato | 340 |
| Motivos de cancelamento no CRM | Fato | 47 registros |
| Resumo da equipe de vendas | Interpretação | 1 documento |
| Opinião do sócio sobre "o cliente ideal" | Hipótese | 1 conversa |

As conversas foram lidas sem nome nem telefone. Só os padrões foram
anotados.

### Agrupamento

O sócio achava que o público era "dono de restaurante". As fontes mostraram
três situações diferentes: a hamburgueria que começou a receber pedido pelo
WhatsApp e perde pedido no pico. O gerente fecha o caixa e o valor não bate
com o extrato. O contador que precisa do relatório de vendas para o Simples.

Recortes apresentados: (1) por situação de compra, recomendado, (2) por
porte (até 3 funcionários ou acima de 3) e (3) por papel na compra. A pessoa
escolheu o recorte por situação, com o papel na compra dentro de cada ficha.

### Ficha resumida da persona principal

```markdown
## persona-01 | Dono de hamburgueria no pico do delivery

- **Status:** validada (9 entrevistas, 212 conversas com o mesmo padrão)
- **Quem é:** dono que trabalha na chapa, de 2 a 8 funcionários, delivery
  próprio pelo WhatsApp e um aplicativo de entrega.
- **Situação:** sexta e sábado à noite, os pedidos do WhatsApp chegam mais
  rápido do que alguém consegue anotar.
- **Tarefa a resolver:** "Quando o WhatsApp lota no sábado, quero que o
  pedido vá direto para a cozinha, para não errar lanche nem esquecer
  cliente."
- **Gatilho:** uma noite com pedido esquecido e cliente reclamando no
  Instagram.
- **O que já sabe sobre o problema:** sabe que perde pedido. Não sabe que
  existe sistema que lê o pedido do WhatsApp.
- **Dor principal:** de 5 a 10 pedidos errados ou esquecidos por fim de
  semana, segundo os entrevistados.
- **O que já tentou e não resolveu:** caderno, segundo celular, um parente
  só para responder WhatsApp.
- **Forças de mudança:**
  - Empurra: cliente reclamando em público.
  - Atrai: pedido saindo impresso na cozinha.
  - Ansiedade: "e se o sistema cair no sábado?"
  - Hábito: a equipe já sabe usar o caderno.
- **Objeção mais comum:** "Não tenho tempo de aprender sistema."
- **O que pesa na escolha:** funcionar no sábado, mensalidade abaixo de
  R$ 200, alguém para chamar no WhatsApp quando travar.
- **Papel na compra:** decide e paga.
- **Onde consome conteúdo:** Instagram e grupos de WhatsApp de donos de
  lanchonete, vídeos curtos no celular depois do expediente.
- **Jargão e frases literais:**
  - "o zap lota" (entrevista 3)
  - "pedido furado" (conversas, 41 ocorrências)
  - "comanda no papel" (entrevistas 1, 4 e 7)
- **Oferta pertinente:** plano Essencial.
- **Resultado procurado:** fim de semana sem pedido esquecido.
- **Sinais de qualificação:** cita WhatsApp lotado, tem delivery próprio,
  menciona sexta ou sábado.
- **Fontes:** acervo/0007-entrevistas/, export do CRM de 2026-10.
- **Próxima revisão:** 2027-05
```

### Personas complementares e negativa

- `persona-02 | Gerente que fecha o caixa`: usa o sistema todo dia,
  influencia a compra, procura relatório que bata com o extrato do Pix.
- `persona-03 | Contador do restaurante`: influencia, pede relatório mensal
  para o Simples Nacional. Status `hipotese` (só duas entrevistas).
- `persona-neg-01 | Food truck de evento único`: compra para um evento,
  cancela no mês seguinte. Responde por 19 dos 47 cancelamentos. Sinal:
  "é só para o festival". A comunicação evita oferta de "primeiro mês grátis
  sem fidelidade" em anúncios para eventos.

### O que mudou na produção

O anúncio antigo dizia "Gestão completa para seu restaurante". O briefing
novo para `persona-01` pede um vídeo curto gravado numa noite de sábado, com
a frase "o zap lota" na primeira tela, respondendo à ansiedade "e se cair no
sábado?" com o suporte pelo WhatsApp.

## Checklist

- [ ] As personas existentes foram listadas antes de criar novas.
- [ ] Cada fonte foi classificada como fato, interpretação ou hipótese.
- [ ] O agrupamento parte da situação e da tarefa, não da demografia.
- [ ] Cada ficha tem ID estável e nome de referência.
- [ ] A tarefa está escrita no formato "Quando, quero, para".
- [ ] As quatro forças de mudança estão preenchidas.
- [ ] O vocabulário tem frases literais com fonte ou está marcado como
      hipótese.
- [ ] A oferta pertinente existe em `ofertas.md`, `produtos.md` ou
      `servicos.md`.
- [ ] O status respeita a regra de cinco fatos para `validada`.
- [ ] Existe ao menos uma persona negativa com sinais de reconhecimento.
- [ ] Nenhum dado pessoal identificável de cliente real está na ficha.
- [ ] O recorte foi escolhido pela pessoa entre três opções.
- [ ] Os campos originais do template de `publico.md` continuam presentes.
- [ ] O histórico e a próxima revisão foram registrados.

## Erros comuns

- Começar pela demografia ("Ana, 34 anos, gosta de café") e nunca chegar na
  situação de compra.
- Criar persona a partir da opinião do sócio e marcá-la como validada.
- Escrever o vocabulário com palavras da empresa em vez das palavras do
  cliente.
- Fazer uma persona por cargo quando o que muda a compra é a situação.
- Juntar decisor e usuário numa ficha só quando eles querem coisas
  diferentes.
- Esquecer a alternativa "não fazer nada" no campo do que já tentou.
- Ter seis personas para uma empresa pequena. Duas ou três que mudam a peça
  valem mais.
- Copiar nome, telefone ou frase identificável de cliente real para a ficha.
- Reaproveitar o ID de uma persona arquivada para uma persona nova.
- Usar a persona só no frontmatter e escrever a peça para "todo mundo".

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-personas**, do
grupo **capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O grupo **capacidade** aplica um método e entrega um resultado que outras
skills consomem. Aqui o resultado é o conjunto de fichas em `publico.md`,
lido por planejamento, especialistas, SEO e copy. Os campos mínimos do
registro da execução são estes:

- **objetivo:** criar, revisar ou selecionar personas;
- **entrada:** fontes levantadas com classificação;
- **contexto:** arquivos lidos e ofertas ligadas;
- **resultado:** fichas gravadas, status de cada uma e persona negativa;
- **próxima ação:** pesquisa que falta, oferta que falta ou peça que espera
  a seleção.
