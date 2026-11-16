# REFERENCIA.md; inboundfy-copy-editor

Material de apoio para auditar prosa com as regras do projeto, parágrafo a
parágrafo. O resultado é uma lista de achados localizáveis e um texto
corrigido. Nenhuma parte desta referência autoriza nota, média, percentual ou
aprovação por contagem.

## Mapa de leitura

| Arquivo | Passo do fluxo | Para que serve |
| --- | --- | --- |
| [references/passes-de-auditoria.md](references/passes-de-auditoria.md) | Passo 3 | O que procurar em cada um dos seis passes, como achar paráfrase e como tratar exceção registrada. |
| [references/padroes-e-reescritas.md](references/padroes-e-reescritas.md) | Passo 5 | Catálogo de padrões recorrentes com versão antes e depois, para corrigir sem trocar uma muleta por outra. |
| Esta página, seções de template e exemplo | Passos 4 e 8 | Formato do relatório e caso completo de ponta a ponta. |

## Classes de achado

Cada achado recebe uma classe. A classe define o que a skill chamadora pode
fazer com ele.

| Classe | Origem | Efeito |
| --- | --- | --- |
| `veto` | Ocorrência literal, semântica ou estrutural de `proibicoes.md` ou `estruturas-proibidas.md` | Reprova o texto até a remoção ou até exceção confirmada na fonte canônica. |
| `obrigatorio` | Princípio de `ESCRITA.md`, grafia de `glossario.md` ou regra explícita de `marca-voz.md` | Corrigido antes da entrega. Não reprova sozinho quando já corrigido. |
| `ajuste` | Ritmo, escolha de palavra ou ordem de ideias sem regra explícita | Sugestão com trecho e proposta concreta. A chamadora aceita ou recusa. |
| `devolucao` | Afirmação sem fonte, promessa nova, tese fraca, estrutura errada para o canal | Não é corrigido aqui. Vai para a skill dona do problema. |

Um item só vira achado quando existe trecho específico e regra aplicável.
Preferência pessoal do revisor não vira `obrigatorio`.

## Template de relatório de auditoria

```markdown
---
id: {{id da peça}}
skill: inboundfy-copy-editor
chamadora: {{skill que pediu a auditoria}}
estado: {{aprovado | revisao | devolvido}}
alcance: {{auditar | auditar-e-corrigir}}
entrada: {{caminho da versão analisada}}
persona: {{persona-xx}}
canal: {{canal e formato}}
fontes:
  - ESCRITA.md
  - .inboundfy/context/proibicoes.md
  - .inboundfy/context/estruturas-proibidas.md
  - .inboundfy/context/marca-voz.md
  - .inboundfy/context/glossario.md
---

# Auditoria de prosa: {{título da peça}}

## Propósito da peça

{{Uma frase: o que a persona deve entender ou fazer depois de ler.}}

## Achados

| # | Local | Trecho | Regra ou fonte | Classe | Diagnóstico | Ação |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | {{seção, parágrafo}} | "{{citação curta}}" | {{arquivo e item}} | {{classe}} | {{efeito na leitura}} | {{correção aplicada ou pendente}} |

## Passes

- Vetos literais: {{sem ocorrência | n ocorrências, todas tratadas}}
- Vetos semânticos e estruturais: {{resultado}}
- Anatomia do parágrafo: {{resultado}}
- Voz: {{resultado}}
- Afirmações e fatos: {{resultado}}
- Forma do canal: {{resultado}}
- Releitura integral após correção: {{feita, com resultado}}

## Texto corrigido

{{versão completa, quando o alcance for auditar-e-corrigir}}

## Devoluções e pendências

- {{skill de destino}}: {{o que precisa ser resolvido e por quê}}

## Próxima ação

{{skill chamadora}} {{verbo + objeto}} em `{{caminho}}`.
```

Quando não houver achados, escreva `Nenhum achado nesta leitura.` na tabela e
mantenha a lista de passes preenchida. A lista mostra que a leitura aconteceu.

## Exemplo completo (ilustrativo)

Empresa fictícia: **Matrícula Certa**, SaaS de Curitiba que cobra mensalidades
de escolas de idiomas por Pix e boleto e envia o lembrete pelo WhatsApp.
Persona `persona-02`: dona de escola com 80 a 300 alunos, cuida do financeiro
junto com uma secretária. Os dados abaixo são inventados para mostrar o
formato.

Contexto fictício lido:

- `proibicoes.md`: "Não prometer redução percentual de inadimplência sem caso
  registrado em `depoimentos.json`." e "Não usar `revolucionar`."
- `marca-voz.md`: direta, prática e próxima. Trata por `você`. Evita
  `solução`, prefere nomear a tarefa.
- `glossario.md`: `Matrícula Certa`, sem hífen, e `Pix Automático`, com
  maiúsculas.

### Rascunho recebido da especialista de email

> **Assunto:** Revolucione a cobrança da sua escola!
>
> No cenário atual, a inadimplência é cada vez mais um desafio para as
> escolas. A Matrícula-Certa chegou para mudar esse jogo. Com nossa solução
> inovadora, robusta e completa, você reduz a inadimplência em até 90%.
>
> Não é sobre cobrar, é sobre cuidar do relacionamento. Automatize lembretes.
> Receba via pix. Durma tranquilo.
>
> Você já parou para pensar quanto tempo perde com planilhas? Clique aqui e
> comece agora!

### Achados

| # | Local | Trecho | Regra ou fonte | Classe | Diagnóstico | Ação |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Assunto | "Revolucione" | `proibicoes.md`, termo vetado | veto | Termo listado. | Assunto reescrito pela tarefa concreta. |
| 2 | P1 | "No cenário atual... cada vez mais" | `estruturas-proibidas.md`, aberturas | veto | Abertura de contexto amplo sem cena. | Abertura troca para o dia seguinte ao vencimento. |
| 3 | P1 | "Matrícula-Certa" | `glossario.md` | obrigatorio | Grafia divergente. | Corrigido para "Matrícula Certa". |
| 4 | P1 | "chegou para mudar esse jogo" | `estruturas-proibidas.md`, dramatização | veto | Frase de efeito sem objeto. | Removida. |
| 5 | P1 | "solução inovadora, robusta e completa" | `marca-voz.md`, vocabulário evitado, e ESCRITA.md, adjetivo sem prova | obrigatorio | Três adjetivos que nada mostram. | Trocado pelo que o sistema faz no vencimento. |
| 6 | P1 | "reduz a inadimplência em até 90%" | `proibicoes.md`, promessa percentual | veto | Não há caso registrado. | Removido. Pendência devolvida. |
| 7 | P2 | "Não é sobre cobrar, é sobre..." | `estruturas-proibidas.md`, falsa dicotomia | veto | Fórmula de contraste vazia. | Removida. |
| 8 | P2 | "Automatize lembretes. Receba via pix. Durma tranquilo." | ESCRITA.md, staccato, e `glossario.md` | obrigatorio | Três fragmentos imperativos em fila e grafia de Pix. | Integrado em prosa com mecanismo. |
| 9 | P3 | "Você já parou para pensar" | `estruturas-proibidas.md`, pergunta retórica | veto | Pergunta que finge conversa. | Removida. |
| 10 | P3 | "Clique aqui e comece agora!" | ESCRITA.md, CTA sem lacuna anterior | obrigatorio | CTA genérico sem destino nomeado. | CTA passa a nomear o que a pessoa vê. |
| 11 | P1 a P3 | Texto inteiro | ESCRITA.md, falha provável | ajuste | Nenhum limite ou cuidado aparece. | Incluído o caso de desconto de irmão. |

### Texto corrigido

> **Assunto:** Mensalidade em atraso lembrada no WhatsApp, sem planilha
>
> Quando a mensalidade vence no dia 10, a secretaria costuma passar a manhã
> do dia 11 conferindo o extrato e mandando mensagem para cada responsável. A
> Matrícula Certa faz esse lembrete sozinha. No vencimento, o responsável
> recebe no WhatsApp o link para pagar por Pix ou boleto. A baixa aparece no
> painel quando o banco confirma o pagamento.
>
> A primeira semana pede um cuidado: aluno com desconto de irmão precisa
> estar cadastrado com o valor certo, senão o lembrete sai com a mensalidade
> cheia. Por isso a configuração começa conferindo a lista de alunos com a
> sua secretária.
>
> [Ver como o lembrete chega no WhatsApp do responsável]

### Devoluções e pendências

- `inboundfy-especialista-email`: o dado de 90% saiu do texto. Para voltar,
  precisa de caso registrado em `context/depoimentos.json`.
- `inboundfy-contexto-oferta`: confirmar se o envio pelo WhatsApp depende de
  consentimento registrado do responsável (LGPD). Se depender, o texto deve
  dizer isso antes de prometer o envio automático.

Estado devolvido: `revisao`. A especialista confirma as pendências e a peça
volta para nova leitura integral.

## Checklist por parágrafo

- [ ] A primeira frase nomeia um objeto real: tela, tarefa, valor, pessoa ou
      situação.
- [ ] Cada frase avança a ideia ou entrega um dado novo.
- [ ] Exemplo presente é interpretado: o que ele mostra e onde falha.
- [ ] Nenhuma abertura genérica de contexto amplo.
- [ ] Nenhum fechamento que só repete o parágrafo.
- [ ] Nenhuma ocorrência literal ou parafraseada de `proibicoes.md`.
- [ ] Nenhuma estrutura de `estruturas-proibidas.md` funcionando como muleta.
- [ ] Vocabulário confere com o preferido e o evitado de `marca-voz.md`.
- [ ] Marcas, produtos e siglas seguem `glossario.md`.
- [ ] Siglas, ferramentas e objetos técnicos levam artigo quando são sujeito
      ou objeto em prosa corrida.
- [ ] Nenhuma enumeração por vírgulas finge densidade sem desenvolver itens.
- [ ] Nenhuma pergunta retórica dentro do parágrafo fora de seção própria.
- [ ] Nenhum ponto e vírgula nem travessão de prosa corrida.
- [ ] Nenhuma sequência de frases curtas em fila criando escadinha.
- [ ] Número, preço, prazo e promessa têm fonte ou viram devolução.
- [ ] O CTA continua a frase anterior e nomeia o destino.

## Erros comuns na auditoria

- Reescrever parágrafo curto e correto só porque é curto.
- Corrigir fragmentação transformando o parágrafo em lista.
- Marcar ocorrência sem citar o arquivo e o item que sustentam o achado.
- Buscar só a frase literal e deixar passar a paráfrase ("está aqui para
  transformar" no lugar de "chegou para mudar").
- Trocar termo vetado por sinônimo sem reescrever a frase que dependia dele.
- Tratar vocabulário técnico do domínio como jargão vazio. Confira o objeto
  real antes de marcar.
- Corrigir a primeira ocorrência e deixar o mesmo vício três parágrafos
  abaixo.
- Uniformizar o ritmo e apagar humor, franqueza, ressalva ou detalhe incomum.
- Resolver promessa sem fonte inventando outra promessa mais branda. Promessa
  sem fonte sai do texto e vira devolução.
- Aprovar porque o texto "parece fluido" sem conferir persona e glossário.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-editor**, do
grupo **copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O grupo **copy** trabalha sobre texto. Esta skill recebe um texto pronto e
devolve dois artefatos: o relatório e a versão corrigida. Os campos mínimos do
registro são estes:

- **texto:** caminho da versão analisada, nunca uma cópia sem origem;
- **persona:** ID usado para julgar jargão e nível técnico;
- **canal:** forma que limita tamanho, quebra e CTA;
- **achados:** tabela com classe e ação;
- **retorno:** estado e skill de destino de cada devolução.

A chamadora decide onde salvar. Quando a peça pertence a um pacote, o
relatório usa o mesmo ID e fica ao lado da peça, por exemplo
`{{diretório do pacote}}/blog/revisao-copy-editor.md`.
