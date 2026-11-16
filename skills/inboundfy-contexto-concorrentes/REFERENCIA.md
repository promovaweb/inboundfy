# REFERENCIA.md: inboundfy-contexto-concorrentes

Formato da entrada, roteiros por tipo de pedido, exemplo preenchido e checklist
para manter `context/concorrentes.md`.

## Leituras por passo do fluxo

| Passo | Arquivo | Para quê |
| --- | --- | --- |
| 3 a 5 | [references/roteiro-de-entrevista.md](references/roteiro-de-entrevista.md) | Perguntas por campo, respostas fracas e como reformular. |
| 6 e 7 | [references/permissao-e-manutencao.md](references/permissao-e-manutencao.md) | Permissão de citação nominal, estados do rival, validade dos fatos e histórico. |

## Tipos de pedido

| Tipo | Sinal na conversa | O que fazer |
| --- | --- | --- |
| Entrada nova | Rival ainda não aparece no arquivo | Entrevista completa dos cinco campos e dos campos de apoio |
| Correção de campo | "Isso mudou", "não é mais assim" | Pergunta só do campo, troca do valor e linha no histórico |
| Mudança de permissão | "Agora pode citar", "não cite mais" | Confirma quem autorizou, consulta proibições, grava com data |
| Incorporação de pesquisa | Fatos estáveis do relatório de `inboundfy-concorrentes` ou fatos aprovados em `inboundfy-copy-posicionamento` | Mostra cada fato ao usuário, grava só os confirmados |
| Rival saiu do mercado | Encerrou, foi comprado, mudou de categoria | Marca `inativo` com data e motivo, sem apagar o bloco |

## Template de entrada

Os cinco primeiros campos vêm do template de `context/concorrentes.md` e são
obrigatórios. Os campos de apoio ficam abaixo deles, no mesmo bloco, e podem
ser omitidos quando não houver dado.

```markdown
## {Nome do concorrente}

- **O que oferecem:** {produto ou serviço, em uma ou duas frases}
- **Público que atendem:** {porte, setor, região, momento de compra}
- **Onde são fortes:** {ponto forte real, sem minimizar}
- **Onde a empresa se diferencia:** {diferença verificável}; prova: {teste, número, preço público, depoimento}
- **Pode ser citado nominalmente em conteúdo público?** {sim | não}; autorizado por {pessoa ou área} em {AAAA-MM-DD}

<!-- Campos de apoio -->
- **Tipo:** {direta | indireta | substituta}
- **Site:** {URL}
- **Preço de referência:** R$ {valor} {unidade de cobrança}, consultado em {AAAA-MM-DD}
- **Quando o cliente escolhe este rival:** {perfil ou situação}
- **Estado:** {ativo | inativo desde AAAA-MM-DD, motivo}
- **Fontes:** {URL ou relatório do acervo, com data}
- **Histórico:**
  - {AAAA-MM-DD}: {campo} mudou de "{antes}" para "{depois}" ({fonte})
```

## Exemplo (ilustrativo, empresas fictícias)

Projeto fictício: Agendaí, agenda online para salões de beleza pequenos, com
lembrete por WhatsApp e sinal de reserva por Pix, plano único de R$ 89 por mês.

**Pedido do usuário:** "A MarcaJá aparece em quase toda venda que perdemos.
Cadastra ela. Ah, e o jurídico liberou citar o nome."

**Conversa resumida:**

1. A skill lê `context/concorrentes.md` e não encontra MarcaJá nem "Marca Já".
2. Pergunta o que a MarcaJá oferece. Resposta: agenda online com aplicativo
   para o cliente final e vitrine de salões por cidade.
3. Pergunta onde ela é forte. Resposta inicial: "em nada, é só marketing". A
   skill reformula: "Quando um salão escolhe a MarcaJá, o que ele diz que
   pesou?" Nova resposta: "a vitrine traz cliente novo".
4. Pergunta a diferença com prova. Resposta: "somos mais baratos". A skill
   pede o recorte e o cálculo. O usuário confirma o preço público da MarcaJá de
   R$ 59 por profissional e o teste interno de faltas com 40 salões.
5. Pergunta quem liberou a citação. Resposta: área jurídica, por email de
   2026-11-08. A skill consulta `context/proibicoes.md`: há só o veto "não usar
   adjetivos sobre concorrentes", que não impede citar o nome.

**Bloco gravado:**

```markdown
## MarcaJá

- **O que oferecem:** agenda online para salões com aplicativo para o cliente final e vitrine de salões por cidade.
- **Público que atendem:** salões e barbearias de até dez profissionais, com foco em capitais.
- **Onde são fortes:** a vitrine no aplicativo traz clientes novos, recurso que a Agendaí não tem.
- **Onde a empresa se diferencia:** para salões com três ou mais profissionais, a mensalidade única da Agendaí custa menos que a cobrança por profissional; prova: preço público de R$ 59 por profissional (consultado em 2026-11-10) contra R$ 89 do plano único. O sinal por Pix reduziu faltas de 18% para 7% em 60 dias; prova: teste interno com 40 salões, relatório de 2026-09.
- **Pode ser citado nominalmente em conteúdo público?** sim; autorizado pela área jurídica em 2026-11-08, sem adjetivos sobre o rival (ver proibicoes.md).

<!-- Campos de apoio -->
- **Tipo:** direta
- **Site:** https://marcaja.exemplo
- **Preço de referência:** R$ 59 por profissional ao mês, consultado em 2026-11-10
- **Quando o cliente escolhe este rival:** salão que precisa de clientela nova
- **Estado:** ativo
- **Fontes:** acervo/0057-2026-11-12-concorrentes-saloes-pequenos/concorrentes.md
- **Histórico:**
  - 2026-11-12: entrada criada
```

**Pendência registrada:** o usuário não soube dizer se a taxa de 3,9% sobre o
sinal vale para todos os planos da MarcaJá. O dado ficou fora do bloco e foi
devolvido a `inboundfy-concorrentes` como pergunta aberta.

## Checklist de completude

- [ ] O arquivo foi lido inteiro e não há entrada duplicada (nome atual, nome antigo, abreviação).
- [ ] Os cinco campos canônicos estão preenchidos ou marcados como `{pendente: pergunta}`.
- [ ] O ponto forte do rival está descrito com honestidade, sem minimização.
- [ ] A diferença da empresa traz a palavra "prova" seguida da fonte.
- [ ] A permissão de citação nominal tem resposta explícita, autor e data.
- [ ] `context/proibicoes.md` foi consultado antes de gravar "sim".
- [ ] Preço e recursos citados têm data de consulta.
- [ ] Toda correção gerou uma linha no histórico do bloco.
- [ ] O comentário inicial do arquivo e as demais entradas continuam intactos.
- [ ] O bloco gravado foi mostrado ao usuário.

## Erros comuns

- **Diminuir o rival.** Escrever "interface confusa" quando a avaliação real é
  boa quebra a utilidade do arquivo como referência e gera peça arrogante ou
  factualmente errada. Pergunte o que o cliente valoriza no rival.
- **Marcar "sim" por padrão.** Sem confirmação explícita, a citação nominal
  fica "não". Uma resposta antiga sem data não vale para conteúdo novo.
- **Cadastrar "outras empresas do setor".** Entrada genérica não ajuda o
  planejamento a escolher ângulo. Cada bloco nomeia um rival ou uma
  substituta concreta ("planilha e WhatsApp manual").
- **Gravar a diferença sem recorte.** "Somos mais baratos" pode ser falso para
  outro porte de cliente. Escreva para quem a diferença vale.
- **Copiar o relatório de pesquisa inteiro.** O arquivo de contexto guarda
  fatos estáveis. Perfis completos, avaliações e tabelas ficam no acervo.
- **Apagar o rival que fechou.** O histórico explica comparações antigas
  publicadas. Marque `inativo` com data e motivo.
- **Esquecer o nome antigo.** Rival que mudou de marca aparece duplicado. Grave
  o nome anterior no histórico.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill
**inboundfy-contexto-concorrentes**, do grupo **contexto**. Leia os detalhes
compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Skills de contexto guardam o que já foi estabelecido. Elas não pesquisam, não
opinam sobre estratégia e não escrevem peça. Aqui, isso significa:

- gravar só fato que o usuário confirmou nesta execução ou que tem fonte
  pública com data;
- perguntar um campo por vez e aceitar "não sei" como resposta válida, que
  vira `{pendente: pergunta}`;
- manter a estrutura definida em `CONTEXTO.md` e no template do arquivo: os
  cinco campos canônicos ficam sempre no topo do bloco;
- devolver para `inboundfy-concorrentes` tudo o que exigir pesquisa nova, e
  para `inboundfy-contexto-marca` qualquer veto de comparação que surgir na
  conversa.
