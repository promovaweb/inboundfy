# Tutorial: do material ao post

Este tutorial acompanha uma transcrição de reunião até um post de blog
aprovado e registrado no pipeline. A empresa é fictícia. Todos os nomes,
valores e números servem para mostrar o fluxo.

A empresa do exemplo é a **Oficina Pilar**, marcenaria de móveis planejados em
Curitiba, com 14 funcionários e atendimento em três cidades da região
metropolitana.

## Ponto de partida

Você tem um arquivo `reuniao-comercial-outubro.txt` com a transcrição de uma
conversa entre a dona da Oficina Pilar e uma cliente que desistiu do projeto.
Dentro dele aparecem motivos de desistência, dúvidas sobre prazo e uma
comparação com concorrentes.

## Passo 1: registrar o material

Preserve a transcrição antes de qualquer edição:

```bash
inboundfy archive add "Reunião sobre desistência de projeto" \
  --file reuniao-comercial-outubro.txt
```

O comando cria um item numerado e mantém o original sem edição:

```text
acervo/0007-2026-10-28-reuniao-sobre-desistencia-de-projeto/
├── bruto.md
└── README.md
```

Pedido ao agente, na sequência:

```text
$inboundfy-area-conteudo registrei a transcrição 0007 sobre por que clientes
desistem no meio do projeto de móveis planejados. Quero transformar isso em
post de blog.
```

## Passo 2: processar e pesquisar

A área de conteúdo identifica material bruto e encaminha para
`inboundfy-acervo`. O agente confere o setup, faz as perguntas que faltam e
processa o texto.

Perguntas do agente neste ponto:

1. O post pode citar o nome da cliente?
2. A faixa de investimento mencionada na reunião pode aparecer no texto?
3. Qual é o prazo de publicação desejado?

Com as respostas, o processamento roda:

```bash
inboundfy archive process 0007
```

Arquivos gerados:

```text
acervo/0007-2026-10-28-reuniao-sobre-desistencia-de-projeto/
├── bruto.md
├── processado.md
├── faq.md
├── pesquisa.md
├── base-editorial.md
└── auditorias/anti-slop/
    ├── 00-entrada.md
    ├── 01-processado.md
    └── 02-base-editorial.md
```

Trecho de `processado.md`:

```markdown
## Motivos de desistência citados na conversa

1. Prazo de entrega maior do que o concorrente prometeu.
2. Falta de clareza sobre o que estava incluído no orçamento.
3. Medo de errar a medida da parede da sala.
```

Trecho de `faq.md`:

```markdown
### Quanto tempo leva um projeto de móveis planejados?

Resposta sustentada pela transcrição: a Oficina Pilar trabalha com 45 a 60
dias entre a medição e a montagem. Origem: bruto.md, linha 128.
```

## Passo 3: escolher canal e direção

A base editorial fica pronta e o agente apresenta as possibilidades:

```text
A base 0007 sustenta quatro peças:

1. Post de blog: "Por que projetos de móveis planejados atrasam" (recomendada)
2. Post de LinkedIn: bastidor sobre orçamento pouco claro
3. Carrossel de Instagram: três perguntas antes de fechar um projeto
4. Email para lista: o que conferir no orçamento

Sigo com o post de blog?
```

Você responde:

```text
Sim, blog. Quero um texto de 1.400 palavras, sem citar a cliente, com tom de
quem explica o processo por dentro.
```

Direção editorial registrada em `acervo/0007-.../estrategia.md`:

```markdown
## Peça aprovada

- canal: blog
- persona: persona-01 (casal em reforma do primeiro apartamento)
- ângulo: transparência de prazo e escopo evita desistência
- extensão: 1.400 palavras
- restrição: não citar nome de cliente nem valor de projeto
```

## Passo 4: criar a pasta do canal

```bash
inboundfy content create blog \
  "Por que projetos de móveis planejados atrasam" \
  --persona persona-01 --archive 0007
```

```text
canais/blog/0007-2026-10-30-por-que-projetos-de-moveis-planejados-atrasam/
├── README.md
├── brief.md
└── artigo.md
```

O `README.md` guarda o vínculo com o acervo:

```yaml
id: "0007"
skill: inboundfy-especialista-blog
acervo:
  - acervo/0007-2026-10-28-reuniao-sobre-desistencia-de-projeto/
base_editorial: acervo/0007-2026-10-28-reuniao-sobre-desistencia-de-projeto/base-editorial.md
persona:
  - persona-01
voz: .inboundfy/context/marca-voz.md
estado: producao
validadora: inboundfy-validador-blog
```

## Passo 5: produzir e validar

```text
$inboundfy-area-conteudo o brief do 0007 está aprovado. Produza o artigo com a
especialista de blog e mande para a validadora.
```

A especialista escreve `artigo.md`. A validadora lê o brief, o acervo, a voz e
as proibições e devolve um relatório em `auditoria.md`.

Trecho de uma reprovação:

```markdown
## Ajuste 2

- **Local:** artigo.md, seção "O que fazer antes de assinar"
- **Problema:** o texto afirma que o concorrente "esconde o prazo real".
- **Regra:** afirmação sobre terceiro sem fonte em `context/concorrentes.md`.
- **Correção:** descrever o que o leitor deve perguntar, sem atribuir intenção
  ao concorrente.
```

A especialista corrige, a validadora confere de novo e o relatório final fica
com estado aprovado.

## Passo 6: registrar o estado

```bash
inboundfy content status 0007 revisao
```

Depois da aprovação, com o relatório no caminho indicado:

```bash
inboundfy content status 0007 aprovado \
  --audit-report canais/blog/0007-2026-10-30-por-que-projetos-de-moveis-planejados-atrasam/auditoria.md
```

O CLI recusa a aprovação quando o texto muda depois da auditoria. Essa
conferência usa o SHA-256 do arquivo.

Para entrar no calendário:

```bash
inboundfy calendar add 2026-11-06 0007
```

E depois da publicação:

```bash
inboundfy content status 0007 publicado \
  --url https://oficinapilar.test/blog/prazos-moveis-planejados \
  --published-at 2026-11-06
```

## Resultado final

```text
acervo/0007-2026-10-28-reuniao-sobre-desistencia-de-projeto/
canais/blog/0007-2026-10-30-por-que-projetos-de-moveis-planejados-atrasam/
calendario/2026-11.md
```

Trecho do `calendario/2026-11.md`:

```markdown
| Data | ID | Canal | Persona | Estado | Caminho |
| --- | --- | --- | --- | --- | --- |
| 2026-11-06 | 0007 | blog | persona-01 | publicado | canais/blog/0007-2026-10-30-por-que-projetos-de-moveis-planejados-atrasam/ |
```

## O que conferir

- `bruto.md` está igual ao arquivo que você entregou.
- `base-editorial.md` separa fato da transcrição de interpretação.
- `brief.md` registra canal, persona, ângulo e extensão.
- `auditoria.md` fecha com estado aprovado e cita os ajustes feitos.
- O calendário aponta para o caminho real da peça.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | instrutório |
| Escopo | percurso de material bruto até post publicado |
| Autoridade | `inboundfy-acervo`, `inboundfy-planejamento`, especialista e validadora de blog |
