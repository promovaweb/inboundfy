---
name: inboundfy-personas
description: Constrói e atualiza fichas de personas com tarefas, gatilhos, objeções e fontes em publico.md. Use quando o pedido falar em definir público, perfil de cliente, ICP, persona negativa, papéis na compra ou segmentação por necessidade.
---

# Personas

Transforma o que a empresa sabe sobre quem compra em perfis que mudam a peça:
outro ângulo, outra palavra, outro canal, outra objeção respondida. Uma
persona que não muda nada na produção é decoração. A skill parte de fontes
reais, separa fato de hipótese, organiza por situação e tarefa (não por idade
e gênero) e mantém cada persona com ID estável. Ajuste pontual de um campo
fica com `inboundfy-contexto-publico`. Coleta de pesquisa extensa fica com
`inboundfy-pesquisa-cliente`.

## Verificação do setup

Se a configuração estiver incompleta, acione `inboundfy-setup`. Confirme
`.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Quando um
deles faltar, apresente o alerta canônico de `SKILL-AUTORIA.md` e encerre sem
criar nem alterar artefatos. Depois consulte `.inboundfy/context/empresa.md`,
os arquivos de `.inboundfy/framework/` e os Markdown relevantes de
`.inboundfy/fontes-projeto.md`.

## Arquitetura de execução

A skill confirma as sentinelas antes de criar ou alterar qualquer artefato. O
trabalho segue o contrato compartilhado e usa a referência específica desta
pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 2, 5, 6 e 9 do fluxo. O
grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Skill certa |
| --- | --- |
| Projeto sem persona ou com personas genéricas ("mulher, 35 anos, classe B") | `inboundfy-personas` |
| Novo produto, novo mercado ou queda de conversão num segmento | `inboundfy-personas` |
| Revisão anual ou depois de uma rodada de entrevistas | `inboundfy-personas` |
| Corrigir a objeção ou o canal de uma persona existente | `inboundfy-contexto-publico` |
| Planejar e conduzir pesquisa com clientes em escala | `inboundfy-pesquisa-cliente` |
| Escolher a persona de uma peça já pedida | Passo 9 desta skill, ou o menu da skill de produção |

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/publico.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md`,
`.inboundfy/context/marca-voz.md`, `.inboundfy/context/concorrentes.md`,
`.inboundfy/context/depoimentos.json` e as bases editoriais do acervo
relacionadas ao público.

Sem oferta registrada, a persona pode ser descrita, mas o campo de oferta
fica pendente para `inboundfy-contexto-oferta`.

## Entrada esperada

Relatório de `inboundfy-pesquisa-cliente`, informações do usuário,
transcrições de entrevistas, exportação de CRM,
conversas de vendas e suporte (WhatsApp, email, chat), motivos de perda e de
cancelamento, avaliações públicas, respostas de formulário e sinais do
acervo. Dados pessoais entram anonimizados: a persona guarda padrões, nunca o
nome, telefone ou CPF de um cliente real, em respeito à LGPD.

## Perguntas de diagnóstico

1. Quem compra, quem usa e quem influencia a compra são a mesma pessoa?
2. Qual foi o acontecimento que fez os últimos cinco clientes procurarem a
   empresa?
3. O que eles usavam antes e por que deixaram de usar?
4. Que tipo de cliente dá prejuízo, cancela cedo ou não deveria ser atendido?
5. Quantas conversas, entrevistas ou registros sustentam o que se sabe hoje?

## Fluxo

1. Leia o contexto exigido e `publico.md` atual. Liste as personas já
   registradas com ID, para não duplicar.
2. Levante as fontes disponíveis e classifique cada uma com a tabela de
   [REFERENCIA.md](REFERENCIA.md): fato observado, interpretação ou
   hipótese. Peça à pessoa o que faltar.
3. Agrupe os clientes por situação e tarefa, seguindo
   [references/segmentacao-e-jtbd.md](references/segmentacao-e-jtbd.md).
   Identifique gatilho, forças de mudança, alternativas atuais e estágio de
   consciência de cada grupo.
4. Quando houver acesso a clientes, conduza ou prepare entrevistas com
   [references/roteiro-de-entrevista-de-persona.md](references/roteiro-de-entrevista-de-persona.md).
   Sem acesso, entreviste quem vende e quem atende e marque o resultado como
   hipótese.
5. Escreva a ficha de cada persona com o template de
   [REFERENCIA.md](REFERENCIA.md). Use frases literais dos clientes no campo
   de vocabulário. Cada campo aponta a fonte.
6. Descreva ao menos uma persona negativa (quem não comprar ou não atender)
   com o motivo, usando o modelo de [REFERENCIA.md](REFERENCIA.md).
7. Apresente as personas à pessoa num checkpoint: três formas de recortar
   (por exemplo, por porte, por gatilho ou por papel na compra), a
   recomendada primeiro. Aguarde a escolha e registre ajustes.
8. Grave em `.inboundfy/context/publico.md`, um bloco por persona com ID
   estável (`persona-01`, `persona-02`), mantendo os campos do template e
   acrescentando os campos da ficha. Não altere outras personas sem pedido.
9. Antes de criar uma peça, apresente todas as personas em menu, no formato
   de [../_shared/03-interacao-e-handoff.md](../_shared/03-interacao-e-handoff.md):
   número, ID, nome de referência e resumo de perfil, contexto de compra,
   problema, resultado, canais e oferta. Peça uma ou mais escolhas quando a
   solicitação não trouxer esse dado. Use
   [references/uso-das-personas-na-producao.md](references/uso-das-personas-na-producao.md)
   para indicar o que a escolha muda na peça.
10. Registre no histórico da persona a data, a fonte nova e o que mudou.
    Agende a próxima revisão.

## Saída

`.inboundfy/context/publico.md` atualizado, com uma ficha por persona e a
persona negativa, cada uma com ID, status (`hipotese` ou `validada`), fontes e
histórico. Em peças, preserve `personas` criado pelo CLI. Quando o brief
distinguir papéis, acrescente `persona_principal` e `personas_secundarias`
sem substituir a lista canônica. Junto, um registro da execução com fontes lidas,
recortes apresentados, escolha e pendências.

## Validação

- Cada persona tem ID, nome de referência, situação, tarefa, gatilho,
  problema, resultado, objeções, vocabulário, canais, oferta e fonte.
- O vocabulário traz pelo menos três expressões literais de clientes ou está
  marcado como hipótese.
- Status `validada` exige ao menos cinco fontes independentes (entrevistas,
  conversas ou registros) que repetem o padrão.
- Nenhum dado pessoal identificável de cliente real está na ficha.
- Existe ao menos uma persona negativa.
- Uma peça sem persona selecionada volta para a conversa antes da redação.

## Idempotência

Atualize a persona pelo ID e preserve o histórico de alterações relevantes.
Uma nova execução lê as fichas atuais e só altera campos com fonte nova. O ID
nunca muda nem é reaproveitado: uma persona descontinuada fica marcada como
`arquivada`, porque peças antigas apontam para ela.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade;
- **entrada:** fontes levantadas e classificadas;
- **transformação:** agrupamento por situação e tarefa, ficha com fonte por
  campo, persona negativa e checkpoint de recorte;
- **saída:** `publico.md` atualizado e registro da execução;
- **handoff:** `inboundfy-pesquisa-cliente` quando faltar fonte,
  `inboundfy-contexto-oferta` quando faltar oferta, `inboundfy-voz` para
  ajustes de voz por persona, `inboundfy-planejamento` ou a especialista que
  pediu a seleção.
