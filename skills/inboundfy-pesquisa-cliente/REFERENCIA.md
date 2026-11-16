# Referência de pesquisa de cliente

Material de apoio da skill `inboundfy-pesquisa-cliente`. Os arquivos de
`references/` aprofundam cada etapa e são lidos no passo indicado.

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/fontes-e-coleta.md](references/fontes-e-coleta.md) | Passos 2 e 3 | Fontes internas e públicas, buscas, volume mínimo, registro de trecho, LGPD |
| [references/entrevistas-e-questionarios.md](references/entrevistas-e-questionarios.md) | Passo 2, pesquisa primária | Recrutamento, convite, roteiro de compra, questionários |
| [references/sintese-e-mapa-de-linguagem.md](references/sintese-e-mapa-de-linguagem.md) | Passos 4 a 6 | Códigos, intensidade, confiança, mapa de linguagem, comparação com persona |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-pesquisa-cliente**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Nesta skill, isso significa:

- cada achado aponta para trechos com fonte e data, nunca para impressão do
  analista;
- a persona em foco aparece no relatório e a comparação usa o texto
  registrado em `publico.md`;
- o canal de origem da fala (WhatsApp, Reclame Aqui, entrevista) fica
  registrado, porque muda o tom e o peso do trecho;
- o relatório tem `estado` (`rascunho`, `revisao`, `aprovado`) e cada
  aplicação aprovada traz seu alcance;
- a próxima ação nomeia a skill que recebe cada achado.

### Ficha de achado

```yaml
achado: {{frase curta do padrão}}
tipo: fala | dado | observação | hipótese
codigo: gatilho | tarefa | dor | tentativa | resultado | objeção | escolha | palavra
trechos: [tr-01, tr-07, tr-15]
fontes_independentes: {{n}}
ocorrencias: {{n}}
intensidade_media: {{1 a 3}}
confianca: alta | média | baixa
persona: {{id}}
aplicacao: {{persona, FAQ, oferta, posicionamento, pauta, teste}}
alcance_aprovado: {{peça | canal | projeto | pendente}}
```

## Template do relatório

```markdown
---
id: {{id do acervo}}-pesquisa-cliente-{{slug}}
skill: inboundfy-pesquisa-cliente
tipo: pesquisa-cliente
estado: rascunho
criado_em: {{AAAA-MM-DD}}
atualizado_em: {{AAAA-MM-DD}}
entrada:
  - {{arquivos ou URLs}}
personas:
  - {{persona}}
fontes:
  - {{fonte com data de consulta}}
proxima_acao: {{skill + ação}}
---

# Pesquisa de cliente: {{tema}}

## Pergunta e uso

- Pergunta: {{uma frase}}
- Escolha que ela informa: {{persona, mensagem, oferta, pauta}}
- Modo: {{material existente | escuta pública | primária}}

## Amostra

| Fonte | Quantidade | Período | Perfil |
| --- | --- | --- | --- |
| {{fonte}} | {{n}} | {{datas}} | {{perfil}} |

## Temas

| # | Tema | Código | Ocorrências | Intensidade | Confiança |
| --- | --- | --- | --- | --- | --- |
| 1 | {{tema}} | {{código}} | {{n}} | {{1-3}} | {{grau}} |

### Tema 1: {{nome}}

{{Descrição em prosa do padrão e do mecanismo.}}

- "{{trecho literal}}" ({{fonte}}, {{data}})
- "{{trecho literal}}" ({{fonte}}, {{data}})

## Mapa de linguagem

| Conceito | Cliente | Empresa hoje | Ocorrências | Sugestão |
| --- | --- | --- | --- | --- |

## Comparação com a persona

| Campo | Registrado | Pesquisa | Situação |
| --- | --- | --- | --- |

## Lacunas e limites

- {{o que a amostra não cobre}}

## Aplicações propostas

| Achado | Destino | Skill | Alcance |
| --- | --- | --- | --- |

## Próxima ação

{{quem faz o quê, em qual arquivo}}
```

## Exemplo

Dados fictícios, só para ilustrar o resultado esperado. Não vira contexto do
projeto.

**Empresa:** Agenda Pet Fácil, software de agendamento para pet shops e
clínicas veterinárias de pequeno porte, com lembrete automático pelo
WhatsApp. Plano a R$ 89 por mês, pago por Pix ou cartão, com 14 dias de
teste. Persona `persona-01`: dona de pet shop com banho e tosa, de 2 a 6
funcionários.

**Pedido:** a conversão de teste para assinatura caiu de 22% para 15% no
trimestre. O usuário quer entender o motivo antes de mexer na página.

```markdown
---
id: 0087-pesquisa-cliente-conversao-teste
skill: inboundfy-pesquisa-cliente
tipo: pesquisa-cliente
estado: aprovado
criado_em: 2026-10-06
atualizado_em: 2026-10-20
entrada:
  - acervo/0087-2026-10-06-conversao-teste/bruto.md
  - exportação de conversas do WhatsApp comercial (jul. a set. 2026, anonimizada)
personas:
  - persona-01
fontes:
  - 6 entrevistas por vídeo, 08 a 15/10/2026
  - 148 conversas do WhatsApp comercial, 01/07 a 30/09/2026
  - 71 avaliações de 2 e 3 estrelas de 4 aplicativos concorrentes na Google Play, consulta em 07/10/2026
proxima_acao: inboundfy-personas atualiza gatilho e objeção da persona-01
---

# Pesquisa de cliente: por que o teste não vira assinatura

## Pergunta e uso

- Pergunta: o que impede donos de pet shop em teste grátis de assinar?
- Escolha que ela informa: mensagem da página de preço e sequência de
  onboarding.
- Modo: material existente e pesquisa primária.

## Amostra

| Fonte | Quantidade | Período | Perfil |
| --- | --- | --- | --- |
| Entrevistas | 6 (3 assinaram, 3 desistiram) | out. 2026 | donas e donos de pet shop, SP, MG e PR |
| WhatsApp comercial | 148 conversas | jul. a set. 2026 | contas em teste |
| Avaliações de concorrentes | 71 | 2025 e 2026 | usuários de apps de agenda pet |

## Temas

| # | Tema | Código | Ocorrências | Intensidade | Confiança |
| --- | --- | --- | --- | --- | --- |
| 1 | Medo de o lembrete sair do número pessoal | objeção | 31 | 2,6 | alta |
| 2 | Cadastrar os clientes antigos dá trabalho | dor | 27 | 2,2 | alta |
| 3 | Falta de cliente, não de organização, é o gatilho | gatilho | 9 | 2,8 | média |
| 4 | Preço comparado com caderno e WhatsApp manual | escolha | 12 | 1,7 | média |

### Tema 1: medo de o lembrete sair do número pessoal

Muitos pet shops atendem pelo WhatsApp do celular da dona. No teste, a
pessoa não entende se o lembrete automático usará esse número e teme
banimento do número ou mensagem estranha para cliente antigo. O tema aparece nas três
fontes e nas três entrevistas de quem desistiu.

- "Tenho medo de o Zap ser banido e eu perder meus clientes tudo." (WhatsApp
  comercial, 14/08/2026)
- "Não sabia se ia sair do meu número ou de outro." (entrevista-04,
  10/10/2026)

### Tema 2: cadastrar os clientes antigos dá trabalho

Quem tem 300 a 800 clientes na agenda de papel desiste antes de ver o
lembrete funcionar. As três pessoas que assinaram importaram a lista do
celular no primeiro dia.

- "Vou passar 500 cachorro do caderno pra lá? Não dá." (entrevista-05,
  13/10/2026)

## Mapa de linguagem

| Conceito | Cliente | Empresa hoje | Ocorrências | Sugestão |
| --- | --- | --- | --- | --- |
| Lembrete automático | "mandar o lembrete no zap" | "notificações automatizadas" | 38 | trocar na página e no onboarding |
| Falta ao horário | "furo", "cliente que some" | "no-show" | 22 | trocar; manter "no-show" só no glossário técnico |
| Agenda | "caderno", "agenda" | "gestão de agendamentos" | 19 | testar "troque o caderno" no título |

## Comparação com a persona

| Campo | Registrado | Pesquisa | Situação |
| --- | --- | --- | --- |
| Dor principal | Desorganização da agenda | Faltas e horários vazios custam mais que a desorganização | amplia |
| Objeção | Preço | Medo de perder o número de WhatsApp vem antes do preço | contradiz |
| Gatilho | Contratar mais um tosador | Semana com muitos furos | lacuna (confiança média) |

## Lacunas e limites

- Nenhuma clínica veterinária entrevistada; achados valem para pet shop.
- Avaliações de concorrentes não mostram região; podem incluir outros
  países de língua portuguesa.

## Aplicações propostas

| Achado | Destino | Skill | Alcance |
| --- | --- | --- | --- |
| Tema 1 | FAQ e página de preço | `inboundfy-copy-oferta` | projeto (aprovado) |
| Tema 2 | Onboarding com importação no dia 1 | `inboundfy-growth-onboarding` | projeto (aprovado) |
| Objeção contradiz persona | Atualizar persona-01 | `inboundfy-personas` | projeto (aprovado) |
| "furo" em vez de "no-show" | Glossário | `inboundfy-aprendizado` | canal blog (pendente) |
| Tema 1 na página | Teste de bloco de garantia sobre o número | `inboundfy-experimentacao` | peça |

## Próxima ação

`inboundfy-personas` atualiza objeção e dor da persona-01 em
`publico.md`. `inboundfy-copy-oferta` recebe os temas 1 e 4.
```

## Checklist

- [ ] A pergunta de pesquisa e a escolha que ela informa estão escritas.
- [ ] A amostra declara quantidade, período e perfil por fonte.
- [ ] Toda citação é literal, com fonte e data.
- [ ] Nenhum nome, telefone, CPF ou email de cliente aparece no arquivo.
- [ ] Cada tema tem ocorrências, intensidade e grau de confiança.
- [ ] Temas com confiança baixa aparecem como hipótese.
- [ ] O mapa de linguagem compara cliente e empresa.
- [ ] A comparação com a persona usa o texto registrado em `publico.md`.
- [ ] Lacunas e limites da amostra estão listados.
- [ ] Cada aplicação tem skill de destino e alcance aprovado ou pendente.
- [ ] Nada foi gravado em contexto sem aprovação do usuário.

## Erros comuns

- **Corrigir a fala do cliente.** "Os cachorro" vira "os cachorros" e a
  linguagem real some. Registre como foi dita; ajuste só na copy final.
- **Contar ocorrências da mesma pessoa várias vezes.** Dez mensagens de um
  cliente no WhatsApp são uma fonte, não dez.
- **Perguntar o futuro.** "Você usaria?" gera respostas otimistas. Pergunte
  o que a pessoa fez da última vez.
- **Entrevistar só quem gosta.** Sem quem desistiu, a objeção principal não
  aparece.
- **Transformar caso isolado em padrão.** Uma reclamação forte no Reclame
  Aqui chama atenção, mas sem repetição vira hipótese.
- **Reescrever a persona com inferência.** Contradição vai ao usuário antes
  de chegar em `publico.md`.
- **Usar conversa privada como depoimento.** Sem consentimento registrado,
  a fala não entra em peça pública.
- **Ignorar a data.** Avaliação de três anos atrás descreve outro produto e
  outro mercado.
