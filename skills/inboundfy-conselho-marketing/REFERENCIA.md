# Referência do conselho de marketing

Material de apoio do fluxo de `inboundfy-conselho-marketing`. Leia a tabela
de assentos no passo 3, as fichas das cadeiras no passo 4 e o mapa de
tensões no passo 6.

## Arquivos de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/cadeiras-do-conselho.md](references/cadeiras-do-conselho.md) | Passo 4 | Ficha de cada cadeira: lente, métodos, perguntas próprias, onde acerta, ponto cego e tom. Inclui o modelo de cadeira personalizada. |
| [references/divergencias-e-testes.md](references/divergencias-e-testes.md) | Passo 6 | Tensões recorrentes entre cadeiras, a troca de fundo e o teste ou dado que resolve cada uma. |

## Modos de sessão

| Modo | Cadeiras | Quando usar | Tamanho esperado |
| --- | --- | --- | --- |
| Consulta rápida | 1 | A pessoa pede uma lente específica sobre um título, uma oferta ou um anúncio. | Um parecer e uma conclusão. |
| Sessão padrão | 3 a 5 | Escolha real com consequência relevante e lentes que discordam. | Pareceres, mapa e síntese. |
| Conselho pleno | Todas as 12 | Reposicionamento, troca de modelo de receita, corte de canal principal, lançamento com orçamento alto. | Longo. Ofereça só quando o custo do erro justificar. |

## Tabela de assentos

Sente duas ou três cadeiras com aderência direta e pelo menos uma dissidente
natural. Pedido explícito da pessoa prevalece sobre a tabela.

| Tipo de pergunta | Cadeiras com aderência | Dissidentes naturais |
| --- | --- | --- |
| Posicionamento e mensagem | Posicionamento, Nicho, Consciência | Disponibilidade (desconfia de diferenciação) |
| Oferta e preço | Oferta, Lista, Funil | Comportamento (preço não é só lógica), Nicho (alerta de guerra de preço) |
| Marca e alcance | Disponibilidade, Comportamento, Pesquisa | Resposta direta (cadê a venda?) |
| Revisão de copy ou criativo | Consciência, Resposta direta, Conteúdo | Comportamento (teste o ilógico) |
| Funil e caminho de conversão | Funil, Oferta, Resposta direta | Nicho (permissão antes de pressão), Conteúdo (confiança gasta) |
| Estratégia de conteúdo | Conteúdo, Nicho, Atenção | Disponibilidade (alcance vence profundidade), Resposta direta (cadê a resposta?) |
| Mídia paga | Resposta direta, Disponibilidade, Atenção | Nicho (interrupção custa) |
| Crescimento e escala | Oferta, Atenção, Disponibilidade | Conteúdo (perda de qualidade), Posicionamento (escalar mensagem confusa) |
| Escolha de público ou canal | Atenção, Disponibilidade, Lista | Nicho (menor público viável contra alcance amplo) |
| Lançamento | Funil, Nicho, Lista | Disponibilidade (lançamento passa, presença acumula) |

## Regras de fundamentação

1. **Marque a simulação.** O parecer abre com a linha: "Conselho simulado.
   Cada parecer aplica um método de marketing ao caso. Nenhuma cadeira
   representa uma pessoa real."
2. **Sem citação inventada.** Cadeira não tem fala entre aspas. Descreva o
   método: "a lente de oferta mede quatro variáveis".
3. **Sem opinião atribuída a gente real.** Não cite autor, livro ou
   especialista como se tivesse avaliado o projeto.
4. **Divergência de substância.** Cada cadeira apresenta a versão mais forte
   da própria posição. Nada de espantalho para a síntese derrubar.
5. **Analogia explícita.** Quando o método da cadeira não cobre o tema (uma
   cadeira de mala direta diante de vídeo curto), diga isso e raciocine por
   analogia declarada.
6. **Dado do projeto em cada parecer.** Persona, preço, canal, número
   observado ou concorrente de `context/`. Parecer sem dado do projeto volta
   para reescrita.

## Template

```markdown
---
id: conselho-{{AAAA-MM-DD}}-{{slug}}
skill: inboundfy-conselho-marketing
tipo: parecer-conselho
estado: rascunho
modo: {{consulta rápida | sessão padrão | conselho pleno}}
entrada:
  - {{caminho do artefato, brief ou campanha em exame}}
fontes:
  - .inboundfy/context/empresa.md
  - {{demais arquivos lidos}}
cadeiras: [{{cadeira-1}}, {{cadeira-2}}, {{cadeira-3}}]
dissidente: {{cadeira}}
proxima_skill: {{skill executora ou "pendente de escolha"}}
---

> Conselho simulado. Cada parecer aplica um método de marketing ao caso.
> Nenhuma cadeira representa uma pessoa real.

# Conselho: {{pergunta em uma linha}}

## Pergunta em exame

{{Uma ou duas frases com a escolha, o prazo e o que está em jogo.}}

## Dados do projeto usados

| Dado | Valor | Fonte |
| --- | --- | --- |
| {{estágio, preço, persona, canal, número observado}} | {{valor}} | {{caminho}} |

## Cadeiras sentadas

{{Cadeiras, modo e motivo do assento. Diga qual cadeira é a dissidente e por quê.}}

### Cadeira {{nome}}: {{lente em poucas palavras}}

{{Duas a quatro frases aplicando as perguntas da lente ao caso.}}

{{Método aplicado aos dados do projeto.}}

{{Recomendação com a firmeza que a lente teria.}}

**Conclusão:** {{uma frase}}

## Onde o conselho diverge

1. **{{Tensão}}.** A cadeira {{A}} defende {{X}} pelo método {{m}}. A
   cadeira {{B}} defende {{Y}} pelo método {{n}}. Troca de fundo: {{troca}}.
   O que resolve: {{teste, dado ou prazo}}.

## Síntese da presidência

{{Recomendação ajustada ao estágio, ao orçamento e às restrições.}}

- **Fazer:** {{dois a quatro passos concretos com prazo}}
- **Sinal de alerta:** {{aviso da cadeira vencida e o número que dispara revisão}}
- **Executar com:** {{skills do Inboundfy}}

## Alternativas apresentadas

1. {{Recomendada}}
2. {{Alternativa materialmente diferente}}
3. {{Alternativa materialmente diferente}}

## Escolha registrada

- **Escolha:** {{opção ou combinação}}
- **Rejeitadas:** {{opções e motivo dado pela pessoa}}
- **Alcance:** {{peça | campanha | projeto}}

## Perguntas abertas

- {{pergunta ou "nenhuma"}}
```

## Exemplo

Caso fictício para ilustrar o formato. Não use os dados como contexto real.

**Empresa:** Lavô, lavanderia por assinatura em Belo Horizonte. Coleta e
entrega pelo WhatsApp, pagamento recorrente por Pix Automático. Plano Casal a
R$ 189 por mês (até 8 kg por semana). 420 assinantes ativos. Churn mensal de
7%. Custo de aquisição pago de R$ 96 por assinante via anúncios no Instagram.
Concorrência: lavanderias de bairro por quilo e aplicativos de diaristas.

**Pergunta:** a equipe quer criar o Plano Solo a R$ 99 para crescer mais
rápido. A inclinação da equipe é a favor.

```markdown
> Conselho simulado. Cada parecer aplica um método de marketing ao caso.
> Nenhuma cadeira representa uma pessoa real.

# Conselho: criar o Plano Solo a R$ 99?

## Pergunta em exame

Lançar um plano de R$ 99 para quem mora sozinho, em até 30 dias, sem
aumentar a frota de coleta. Errar significa canibalizar o Plano Casal e
reduzir a margem por rota.

## Dados do projeto usados

| Dado | Valor | Fonte |
| --- | --- | --- |
| Plano atual | Casal, R$ 189/mês, 8 kg/semana | context/ofertas.md |
| Base | 420 assinantes | context/empresa.md |
| Churn mensal | 7% | context/campanhas.md |
| Custo de aquisição | R$ 96 | context/campanhas.md |
| Persona | persona-02, profissional que mora sozinho, 26 a 35 anos | context/publico.md |

## Cadeiras sentadas

Oferta, Posicionamento e Funil, em sessão padrão. Nicho entra como dissidente
porque a equipe já está inclinada a criar o plano barato.

### Cadeira Oferta: valor percebido contra esforço

A lente pergunta o que faz o cliente sentir que paga pouco pelo que recebe.
Com churn de 7%, a base troca de assinatura em média a cada 14 meses. O
problema que aparece é retenção, não preço de entrada. O Plano Solo reduz a
receita por coleta sem mudar a percepção de valor. A recomendação é manter
R$ 189 e somar garantia de prazo: roupa devolvida em 48 horas ou a semana
seguinte sai grátis.

**Conclusão:** mexa na oferta antes de mexer no preço.

### Cadeira Posicionamento: alternativa real do cliente

A persona-02 compara a Lavô com a lavanderia por quilo da esquina, que cobra
cerca de R$ 18 por quilo. Para 4 kg por semana, isso dá cerca de R$ 290 por
mês. O Plano Solo a R$ 99 fica muito abaixo da alternativa e sinaliza
serviço inferior. A lente recomenda um plano de R$ 139 para 4 kg,
posicionado contra o quilo avulso, com a comparação explícita na página.

**Conclusão:** precifique contra a alternativa, não contra o próprio plano.

### Cadeira Funil: escada de valor

A lente vê um degrau ausente na escada. Hoje a primeira compra já é a
assinatura de R$ 189. Uma lavagem avulsa de teste a R$ 39, paga via Pix e
agendada no WhatsApp, reduz a barreira de entrada. Depois da lavagem, a
oferta de assinatura chega com crédito de R$ 39 no primeiro mês.

**Conclusão:** crie a porta de entrada, não um plano novo.

### Cadeira Nicho (dissidente): menor público viável

A lente pergunta para quem a Lavô quer ser indispensável. Casais com rotina
apertada já pagam R$ 189 e indicam vizinhos. Abrir um plano barato para
outro público dilui a mensagem com 420 assinantes ainda concentrados em
quatro bairros. A recomendação é ganhar densidade nesses bairros com
programa de indicação: cada indicação ativa vale uma semana grátis.

**Conclusão:** aprofunde o público atual antes de abrir outro.

## Onde o conselho diverge

1. **Novo plano contra ajuste de oferta.** Posicionamento quer um plano de
   R$ 139. Oferta e Nicho querem manter o preço atual. Troca de fundo:
   crescer a base ou crescer a receita por cliente. O que resolve: pesquisa
   com 30 leads perdidos no WhatsApp nos últimos 60 dias, perguntando o
   motivo da desistência.
2. **Porta de entrada contra densidade.** Funil quer lavagem avulsa. Nicho
   quer indicação nos bairros atuais. Troca de fundo: aquisição paga ou
   aquisição por rede. O que resolve: comparar o custo por assinante das
   duas rotas em 45 dias.

## Síntese da presidência

Para uma operação com 420 assinantes e rota limitada, o melhor caminho é
proteger a margem por coleta e atacar o churn. Lançar a garantia de 48 horas
no Plano Casal e testar a lavagem avulsa de R$ 39 por 45 dias. O plano de
R$ 139 fica condicionado à pesquisa com leads perdidos.

- **Fazer:** pesquisar 30 leads perdidos até 15/12; publicar a garantia na
  página e no WhatsApp até 20/12; testar a lavagem avulsa com R$ 1.500 de
  mídia em janeiro.
- **Sinal de alerta:** aviso da cadeira Nicho. Se mais de 30% das lavagens
  avulsas vierem de fora dos quatro bairros atendidos, pausar a mídia.
- **Executar com:** `inboundfy-pesquisa-cliente`, `inboundfy-copy-oferta`,
  `inboundfy-growth-pricing`, `inboundfy-experimentacao`.

## Alternativas apresentadas

1. Garantia de 48 horas e teste da lavagem avulsa (recomendada).
2. Plano de R$ 139 para 4 kg contra o quilo avulso.
3. Programa de indicação nos quatro bairros atuais, sem mudança de oferta.

## Escolha registrada

- **Escolha:** alternativa 1 com a indicação da alternativa 3 no e-mail de
  boas-vindas.
- **Rejeitadas:** alternativa 2, até sair a pesquisa com leads perdidos.
- **Alcance:** campanha de dezembro e janeiro.

## Perguntas abertas

- A garantia de 48 horas cabe na capacidade atual da operação? Confirmar com
  a gerente de operação antes de publicar.
```

## Checklist

- [ ] A marcação de simulação abre o parecer.
- [ ] O modo e o número de cadeiras combinam com o custo do erro.
- [ ] Há pelo menos uma cadeira dissidente contra a inclinação da equipe.
- [ ] Cada parecer usa ao menos um dado de `context/` com fonte na tabela.
- [ ] Cada parecer usa o método da própria cadeira e não sobrevive à troca
      de nome.
- [ ] O mapa tem de duas a quatro tensões, cada uma com troca de fundo e
      teste.
- [ ] A síntese tem recomendação, sinal de alerta com número e skills
      executoras reais.
- [ ] Três alternativas foram apresentadas com a recomendada primeiro.
- [ ] Escolha, rejeições e alcance foram registrados depois da resposta.
- [ ] Nenhuma citação ou opinião foi atribuída a pessoa real.

## Erros comuns

- **Conselho que concorda.** Cinco pareceres abençoando o plano da equipe. Troque
  uma cadeira por uma dissidente real.
- **Parecer genérico com rótulo.** "Foque no cliente" serve para qualquer
  cadeira. Ancore no método e no dado do projeto.
- **Colar frases de efeito.** Juntar bordões de marketing no lugar de aplicar
  o método por trás deles.
- **Conselho para execução.** O conselho escolhe a direção. Redigir a página
  fica com `inboundfy-copy-redacao`.
- **Dez cadeiras para um título.** O tamanho do conselho acompanha o custo do
  erro.
- **Síntese que empata.** "Depende" sem recomendação. A presidência escolhe e
  registra o alerta da cadeira vencida.
- **Teste sem prazo.** "Testar e ver" não resolve divergência. Diga amostra,
  prazo e número de corte.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-conselho-marketing**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O conselho é uma capacidade de orientação. Ele lê o contexto do projeto,
aplica lentes conflitantes e entrega uma escolha registrada com o próximo
dono do trabalho.

Rotas de handoff mais comuns depois da síntese:

| Direção vencedora | Skill executora |
| --- | --- |
| Posicionamento ou mensagem | `inboundfy-copy-posicionamento` |
| Oferta, garantia ou bônus | `inboundfy-copy-oferta` |
| Preço e empacotamento | `inboundfy-growth-pricing` |
| Revisão de copy | `inboundfy-copy-edicao` ou `inboundfy-copy-redacao` |
| Mídia paga e criativo | `inboundfy-growth-anuncios` e `inboundfy-growth-criativos-anuncios` |
| Conteúdo e calendário | `inboundfy-estrategia` |
| Funil e conversão | `inboundfy-growth-cro` |
| Divergência que pede teste | `inboundfy-experimentacao` |
| Divergência que pede dado do cliente | `inboundfy-pesquisa-cliente` |
| Alternativas e concorrência | `inboundfy-concorrentes` |
| Lançamento | `inboundfy-growth-lancamento` |

Pacote de handoff mínimo:

```yaml
id: conselho-2026-12-02-plano-solo
de: inboundfy-conselho-marketing
para: inboundfy-copy-oferta
estado: pronto
arquivos:
  - acervo/0057-2026-12-02-plano-solo/conselho-2026-12-02.md
escolhas:
  - pergunta: Qual direção seguir para crescer a base?
    resposta: garantia de 48 horas e teste de lavagem avulsa
    alcance: campanha
pendencias:
  - confirmar capacidade operacional da garantia
acao_solicitada: redigir a oferta da garantia de 48 horas para página e WhatsApp
```
