# Referência de enablement de vendas

Material de apoio do fluxo de `inboundfy-enablement-vendas`. Leia no passo 4
o arquivo do material pedido e use os modelos abaixo como ponto de partida.

## Arquivos de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/deck-e-one-pager.md](references/deck-e-one-pager.md) | Passo 4, para deck, one-pager e resumo pós-reunião | Arco de 11 slides, versões por persona, estrutura do one-pager e do resumo enviado por e-mail ou WhatsApp. |
| [references/objecoes-e-battlecards.md](references/objecoes-e-battlecards.md) | Passo 4, para objeções e battlecard | Categorias de objeção, método de resposta em quatro tempos, respostas de referência e modelo de battlecard. |
| [references/roteiros-de-conversa.md](references/roteiros-de-conversa.md) | Passo 4, para descoberta, demo, ligação e WhatsApp | Roteiros por cena com tempo, perguntas de descoberta, demo por público e sequência de follow-up. |
| [references/roi-e-ganho-perda.md](references/roi-e-ganho-perda.md) | Passo 4, para calculadora de ROI e análise de ganho e perda | Fórmulas, entradas conservadoras, roteiro de entrevista de ganho e perda e leitura dos padrões. |

## Mapa de material por etapa

| Etapa da negociação | Material principal | Objetivo do material |
| --- | --- | --- |
| Primeiro contato | Roteiro de ligação, mensagem de WhatsApp | Conseguir a reunião de descoberta. |
| Descoberta | Roteiro de descoberta | Entender dor, custo, prioridade e processo de compra. |
| Demonstração | Roteiro de demo por público | Mostrar os fluxos que resolvem a dor levantada. |
| Avaliação | One-pager, battlecard, calculadora de ROI | Dar argumento para o campeão interno vender por dentro. |
| Proposta e negociação | Biblioteca de objeções, resumo pós-reunião | Responder dúvida de preço, prazo e autoridade. |
| Fechamento ou perda | Análise de ganho e perda | Aprender por que ganhou ou perdeu e atualizar o material. |

## Template

Frontmatter e corpo comum a todo material. O corpo específico vem do arquivo
de apoio.

```markdown
---
id: {{id}}
skill: inboundfy-enablement-vendas
tipo: {{deck | one-pager | objecoes | battlecard | roteiro-descoberta | roteiro-demo | follow-up | calculadora-roi | ganho-perda}}
estado: rascunho
persona: {{persona-id}}
papel_na_compra: {{usuário | decisor financeiro | técnico | campeão interno}}
etapa: {{primeiro contato | descoberta | demonstração | avaliação | proposta | fechamento}}
fontes:
  - .inboundfy/context/ofertas.md
  - {{demais fontes}}
revisar_em: {{AAAA-MM-DD}}
responsavel_revisao: {{pessoa do time comercial}}
---

# {{Título do material}}

## Para que serve

{{Uma frase: quem usa, quando usa e qual próximo passo provoca.}}

## Material

{{Corpo no modelo do arquivo de apoio.}}

## Próximo passo do comprador

{{Ação concreta com data ou condição.}}

## Pendências de prova

- {{afirmação que falta comprovar ou "nenhuma"}}

## Histórico

| Data | Mudança | Pedido por |
| --- | --- | --- |
| {{AAAA-MM-DD}} | {{criação ou ajuste}} | {{pessoa}} |
```

Tabela de afirmações em `afirmacoes.md`:

```markdown
| Afirmação no material | Tipo | Fonte | Pode citar? |
| --- | --- | --- | --- |
| {{texto exato}} | {{número, cliente, prazo, comparação}} | {{caminho ou insumo}} | {{sim, não, pendente}} |
```

## Exemplo

Caso fictício para ilustrar o formato. Não use os dados como contexto real.

**Empresa:** PontoCerto, SaaS de controle de ponto por celular para
restaurantes e clínicas. Plano Equipe a R$ 12 por colaborador por mês,
pagamento por Pix ou boleto. Implantação em 3 dias úteis. Dados de horário de trabalho
armazenados no Brasil, com tratamento conforme a LGPD. Concorrente mais
frequente: RelógioMax, relógio de ponto físico com mensalidade de software.

**Pedido:** battlecard contra o RelógioMax para a etapa de avaliação,
persona-01 (sócia de restaurante, decisora financeira).

```markdown
---
id: 0031
skill: inboundfy-enablement-vendas
tipo: battlecard
estado: revisao
persona: persona-01
papel_na_compra: decisor financeiro
etapa: avaliação
fontes:
  - .inboundfy/context/ofertas.md
  - .inboundfy/context/concorrentes.md
  - .inboundfy/context/depoimentos.json
  - insumo: motivos de perda no CRM, setembro e outubro de 2026
revisar_em: 2027-02-15
responsavel_revisao: Marina Teles, coordenadora comercial
---

# Battlecard: PontoCerto contra RelógioMax

## Para que serve

A pessoa vendedora usa durante a avaliação, quando a sócia do restaurante
compara com o relógio físico. O próximo passo é o teste de 14 dias com a
equipe do salão.

## Material

### Em 30 segundos

O RelógioMax exige aparelho na parede e técnico para instalar. O PontoCerto
registra o ponto no celular do colaborador, com localização e fica pronto em
3 dias úteis. Para restaurante com turnos quebrados e equipe que chega por
portas diferentes, o celular evita fila e esquecimento.

### Onde ganhamos

| Situação do cliente | Por que ganhamos | Prova |
| --- | --- | --- |
| Mais de uma unidade | Um painel para todas as unidades, sem aparelho por loja | ofertas.md, plano Equipe |
| Turno quebrado e freelancers | Ponto no celular com localização, sem cadastro biométrico | ofertas.md |
| Fechamento de folha manual | Exportação para o contador em um clique | depoimento de Ricardo Alves, Bistrô Alecrim, uso comercial autorizado |

### Onde perdemos

| Situação | Por quê | Como responder |
| --- | --- | --- |
| Cliente exige biometria por norma interna | Não temos leitor biométrico | Seja honesto. Indique quando o PontoCerto não serve. |
| Equipe sem celular próprio | Ponto depende de aparelho | Ofereça tablet compartilhado na entrada como alternativa. |

### Perguntas que mudam a conversa

1. Quantas horas por mês alguém gasta corrigindo marcação esquecida?
2. Quanto custa o técnico quando o relógio para?
3. Como a equipe que entra pela porta dos fundos registra o ponto hoje?

### Objeções esperadas

- **"O relógio já está pago."** O aparelho está pago. A mensalidade do
  software e o tempo de correção continuam. Mostre a calculadora com as horas
  de correção da própria casa.
- **"Funcionário vai burlar pelo celular."** O registro guarda localização e
  horário do servidor. Mostre a tela de marcação fora do raio.

### Armadilhas a evitar

- Não diga que o RelógioMax é ilegal ou desatualizado. Ele cumpre a regra.
- Não prometa redução de passivo trabalhista em valor. Não temos
  comprovação.

## Próximo passo do comprador

Ativar o teste de 14 dias com a equipe do salão e marcar a revisão dos
relatórios no dia 15.

## Pendências de prova

- Tempo médio de correção de ponto antes e depois: falta caso com número
  medido.

## Histórico

| Data | Mudança | Pedido por |
| --- | --- | --- |
| 2026-11-15 | Criação | Marina Teles |
```

`afirmacoes.md` do mesmo exemplo:

```markdown
| Afirmação no material | Tipo | Fonte | Pode citar? |
| --- | --- | --- | --- |
| Pronto em 3 dias úteis | prazo | context/ofertas.md | sim |
| Exportação para o contador em um clique | funcionalidade | context/produtos.md | sim |
| Depoimento do Bistrô Alecrim | cliente | context/depoimentos.json, consentimento comercial | sim |
| RelógioMax exige técnico para instalar | comparação | context/concorrentes.md | sim, sem tom pejorativo |
| Tempo de correção cai pela metade | número | sem fonte | não, retirado do material |
```

## Checklist

- [ ] Tipo, persona, papel na compra e etapa estão no frontmatter.
- [ ] O material serve a uma situação, não ao comprador genérico.
- [ ] A pessoa vendedora acha a resposta em 30 segundos (títulos que
      respondem, listas curtas).
- [ ] Cada funcionalidade aparece com consequência para o comprador.
- [ ] `afirmacoes.md` cobre todos os números, clientes, prazos e
      comparações.
- [ ] Depoimento e concorrente citados têm permissão registrada.
- [ ] O battlecard inclui onde a empresa perde e como responder com
      honestidade.
- [ ] O material termina com próximo passo concreto.
- [ ] `revisar_em` e responsável estão preenchidos.
- [ ] A prosa passou por `inboundfy-copy-editor`.

## Erros comuns

- **Catálogo de funcionalidades.** Deck que lista telas sem ligar cada uma a
  uma dor levantada na descoberta.
- **Resposta a objeção que discute com o cliente.** A resposta valida a
  preocupação, pergunta e só depois reposiciona.
- **Battlecard que ataca o concorrente.** Falar mal da alternativa reduz a
  confiança e pode ferir regra de `context/proibicoes.md`.
- **ROI inflado.** Premissas otimistas que o diretor financeiro desmonta em
  um minuto. Use a entrada do próprio cliente e a hipótese conservadora.
- **Material eterno.** Battlecard de seis meses atrás com preço velho do
  concorrente. Toda peça tem data de revisão.
- **Escrever sem ouvir o time.** Objeção inventada pelo marketing em vez da
  frase real que o cliente disse.
- **Depoimento sem consentimento comercial.** Uma fala elogiosa no WhatsApp
  não autoriza uso em proposta.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-enablement-vendas**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O enablement consome o que outras skills estabelecem e devolve aprendizado
do campo. Use esta tabela para saber de onde vem cada insumo e para onde vai
cada descoberta.

| Insumo ou descoberta | Origem ou destino |
| --- | --- |
| Posicionamento e mensagem central | Vem de `inboundfy-copy-posicionamento` |
| Oferta, garantia e condições | Vem de `inboundfy-copy-oferta` e `context/ofertas.md` |
| Perfil de concorrente | Vem de `inboundfy-concorrentes` e `context/concorrentes.md` |
| Linguagem do cliente | Vem de `inboundfy-pesquisa-cliente` |
| Depoimento novo com consentimento | Vai para `inboundfy-contexto-depoimentos` |
| Padrão de perda por preço | Vai para `inboundfy-growth-pricing` |
| Padrão de perda por mensagem confusa | Vai para `inboundfy-copy-posicionamento` |
| Etapas e campos do CRM | Vai para `inboundfy-growth-revops` |
| Página de comparação pública | Vai para `inboundfy-concorrentes` e `inboundfy-copy-redacao` |

## Roteiro de diagnóstico

No passo 3 do fluxo, leia [as perguntas de diagnóstico](references/diagnostico.md). Pergunte somente o que os insumos não responderem.
