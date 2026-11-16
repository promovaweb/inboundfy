---
name: inboundfy-brainstorm
description: "Desenvolve uma ideia curta até brainstorm.md pesquisado e aprovado, com tese, recorte, ângulos testados e oportunidades por canal, nas etapas de triagem a validação. Use quando a pessoa trouxer uma frase, pergunta ou tema sem tese e disser que quer ideias, ângulos, pautas ou ajuda para desenvolver um assunto."
---

# Inboundfy Brainstorm

Wrapper autônoma que transforma uma ideia curta em base editorial
pesquisada. Preserva a ideia, separa fatos de hipóteses, encontra a tese e o
recorte, testa ângulos e propõe oportunidades para os canais ativos. Não
escreve a peça final: o `brainstorm.md` aprovado segue para o pipeline.

## Etapas internas

| Etapa | Arquivo | Faz | Status ao terminar |
| --- | --- | --- | --- |
| 00 | [00-triagem](references/etapas/00-triagem.md) | Preserva a ideia, cria o slug e abre o diretório datado | `em-entrevista` |
| 01 | [01-entrevista](references/etapas/01-entrevista.md) | Investiga só as lacunas que mudam tese, audiência ou veracidade | `em-pesquisa` |
| 02 | [02-pesquisa](references/etapas/02-pesquisa.md) | Busca fontes, contrapontos e dados com data de acesso | `em-sintese` |
| 03 | [03-sintese](references/etapas/03-sintese.md) | Define tese, recorte, argumentos, objeções, ativos e oportunidades | `em-validacao` |
| 04 | [04-validacao](references/etapas/04-validacao.md) | Confere fontes, escrita e proibições e aprova ou devolve | `aprovado` |

As etapas não são IDs públicos. O chamador informa a etapa quando quer
retomar só uma parte.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar
artefatos. Depois do preflight, leia o catálogo e os Markdown relevantes para
a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Entrada | Conduta |
| --- | --- |
| Frase, pergunta, nota ou tema sem tese ("quero falar de retenção em SaaS") | Use esta skill. |
| Áudio transcrito curto com uma ideia central | Use esta skill. |
| Transcrição longa, peça-base ou release com vários temas | Use `inboundfy-acervo` ou `inboundfy-planejamento`. |
| Campanha sem objetivo nem KPI | Use `inboundfy-estrategia`. |
| Pedido de peça com brief claro | Use `inboundfy-especialista-<canal>`. |
| Pedido de ideias de ação de marketing além de conteúdo | Use esta skill e encaminhe as ideias aprovadas para a skill `inboundfy-growth-*` indicada em [references/banco-de-ideias-por-objetivo.md](references/banco-de-ideias-por-objetivo.md). |

## Contexto exigido

- `context/empresa.md`, `context/marca-voz.md` e `context/publico.md`.
- `context/canais.md`, para propor formatos que o projeto realmente publica.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.
- Conforme o assunto: `context/produtos.md`, `servicos.md`, `ofertas.md`,
  `concorrentes.md`, `ferramentas.md` e `glossario.md`.

Se faltar item obrigatório para identificar marca, audiência ou canal,
acione a skill `inboundfy-contexto-*` correspondente. Se a lacuna for
opcional, registre suposição conservadora e continue.

## Entrada esperada

Uma frase, pergunta, nota, áudio transcrito ou tema que ainda não constitui
um brief. Pode vir com um canal desejado ou com o caminho de um
`brainstorm.md` existente para retomada.

## Fluxo

1. Confira os caminhos canônicos de `INSTALACAO.md`. Se faltar arquivo de
   apoio ou diretório, acione `inboundfy-setup`; não crie estrutura
   alternativa. Leia `BRAINSTORM.md`, `templates/brainstorm.md` e a matriz de
   autonomia em [REFERENCIA.md](REFERENCIA.md).
2. Execute a etapa `00-triagem` de `references/etapas/` para preservar a
   ideia e abrir `brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`.
3. Execute a etapa `01-entrevista` de `references/etapas/`. Faça no máximo
   um bloco de perguntas, somente quando uma lacuna impedir afirmação factual
   segura.
4. Execute a etapa `02-pesquisa` de `references/etapas/` com as fontes
   disponíveis.
5. Execute a etapa `03-sintese` de `references/etapas/` para preencher o
   modelo completo. Use
   [references/geracao-de-angulos.md](references/geracao-de-angulos.md) para
   testar tese e ângulos antes de fechar as oportunidades.
6. Execute a etapa `04-validacao` de `references/etapas/`. Corrija
   automaticamente e repita apenas a etapa indicada pela reprovação.
7. Se o pedido mencionar uma peça e um canal, encaminhe o arquivo aprovado
   para `inboundfy-planejamento`. Se pedir várias peças ou não indicar canal,
   encaminhe para `inboundfy-acervo`, que registra o arquivo como entrada
   do acervo.
8. Informe caminho, suposições relevantes, fontes e próximo fluxo executado,
   no modelo de resumo final de [REFERENCIA.md](REFERENCIA.md).

## Saída

`brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`, com status `aprovado`,
preenchido pelo modelo canônico `templates/brainstorm.md`.

## Validação

- As etapas 00 a 04 foram executadas na ordem.
- A ideia original permanece intacta.
- Fatos externos têm fonte e data de acesso. Suposições aparecem como
  suposições.
- A tese é contestável, tem recorte e limite.
- Cada oportunidade usa ativos do arquivo e tem ângulo próprio.
- A validação conferiu `ESCRITA.md` e os dois arquivos de proibições.
- Nenhuma aprovação intermediária foi pedida fora das exceções de
  [REFERENCIA.md](REFERENCIA.md).

## Idempotência

Uma ideia nova cria diretório novo. Caminho existente recebe sufixo `-02`,
`-03`. Um caminho de brainstorm informado pela pessoa retoma o arquivo
existente, preserva a ideia, as respostas, as fontes e o histórico de
validação.

## Responsabilidade do grupo

Transforme a ideia em direção trabalhável. Separe fatos, hipóteses, tese,
recorte, perguntas e oportunidades antes do handoff. A peça final pertence às
especialistas. Escolhas de campanha pertencem a `inboundfy-estrategia`.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** brainstorm
- **entrada:** ideia curta ou caminho de `brainstorm.md` existente;
- **transformação:** etapas 00 a 04 aplicadas na ordem;
- **saída:** `brainstorm.md` aprovado no diretório datado;
- **handoff:** `inboundfy-planejamento` para uma peça,
  `inboundfy-acervo` para várias peças ou canal não indicado, com suposições
  e pendências.
