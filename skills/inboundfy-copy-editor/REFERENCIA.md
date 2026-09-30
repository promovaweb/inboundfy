# REFERENCIA.md; inboundfy-copy-editor

Material de apoio para aplicar `ESCRITA.md` com precisão, parágrafo a
parágrafo. Registre achados localizáveis e ações verificáveis, sem dar nota.

O checklist abaixo cobre os princípios de `ESCRITA.md`. Cruze cada padrão
catalogado com `context/estruturas-proibidas.md` e cada veto de negócio com
`context/proibicoes.md`. Uma ocorrência mantém o texto reprovado até ser
removida ou até uma exceção válida ser confirmada na fonte canônica. A
qualidade do restante do texto não anula esse resultado.

## Checklist objetivo por parágrafo

Marque cada item como presente ou ausente e registre apenas os achados
observáveis:

- [ ] Nomeia um objeto real (uma coisa, uma ação, uma escolha) na primeira
      frase; não abre com afirmação abstrata sobre o mundo.
- [ ] Cada frase avança a ideia ou entrega um dado novo; nenhuma frase só
      repete a anterior com outras palavras.
- [ ] Se apresenta exemplo, o exemplo é interpretado (o que ele prova, onde
      falha); não fica solto como enfeite.
- [ ] Não usa fórmula de abertura genérica ("no cenário atual", "é
      fundamental destacar", "cada vez mais").
- [ ] Não fecha com frase decorativa que só resume o parágrafo.
- [ ] Se é uma frase única, ela está desenvolvida e completa uma ideia; não
      é fragmento cortado para parecer direto.
- [ ] Nenhuma palavra ou expressão de `context/proibicoes.md` aparece.
- [ ] O vocabulário confere com `context/marca-voz.md` (preferido vs.
      evitado).
- [ ] Sigla, ferramenta, área ou objeto técnico usa artigo definido quando
      funciona como sujeito ou objeto em parágrafo corrido.
- [ ] Nenhuma enumeração serial em prosa (sequência de itens por vírgulas)
      simula densidade sem desenvolver os itens.
- [ ] Nenhuma pergunta retórica nem pergunta solta aparece dentro do
      parágrafo fora de seção própria do formato.
- [ ] Nenhum ponto e vírgula nem travessão de prosa corrida substitui
      vírgula, dois-pontos, parênteses ou ponto final.
- [ ] A frase não economiza palavras necessárias para causa, dependência,
      responsabilidade, custo, limite ou consequência.
- [ ] O parágrafo carrega uma ideia completa; não há segunda frase criada
      apenas para cumprir contagem.

Um item ausente só vira achado quando houver um trecho específico e uma regra
aplicável. Descreva a consequência editorial e indique uma ação concreta; não
transforme preferências graduais em veto automático.

## Regras de ajuste de texto

Ao corrigir, preserve a estrutura boa da origem e mire o padrão repetido, não
apenas o trecho apontado:

- Corrija o padrão repetido no arquivo inteiro, não apenas a ocorrência
  apontada. Se o mesmo vício aparecer em outro ponto, corrija antes da
  entrega.
- Substitua lista seca por raciocínio quando ela esconder a tese, e frases
  comprimidas, parágrafos secos, headings genéricos e exemplos vagos por
  desenvolvimento.
- Diferencie parágrafo completo de frase curta usada como martelo. Integre
  frases que dependem uma da outra ao mesmo período, com conectivos
  (`porque`, `por isso`, `portanto`).
- Interprete comandos, campos, métricas, tabelas e exemplos. Nada de item
  bruto solto no texto sem leitura.
- Não resolva proibições por substituição lexical em massa, regex ampla ou
  troca automática sem ler a frase e o parágrafo. Se a frase depende de termo
  proibido, reescreva o trecho inteiro com ator, mecanismo, regra,
  consequência e limite.
- Uma correção anti-slop não deve uniformizar o ritmo nem trocar uma passagem
  específica por prosa genérica e polida. Preserve vocabulário, humor,
  franqueza, incerteza real, digressão útil, ritmo falado e linhas autorais
  fortes.
- Depois da correção principal, faça uma releitura tripla do arquivo inteiro:
  a primeira encontra o vício evidente, a segunda procura o mesmo defeito em
  outras partes e a terceira ajusta detalhe de voz, fluidez, Português do
  Brasil e proibições.

## Exemplo; antes e depois

**Antes (abertura genérica e fragmentação):**

> No cenário atual, a automação é cada vez mais importante. Ela ajuda as
> empresas. É fundamental destacar que times pequenos também podem se
> beneficiar. Em suma, vale a pena considerar.

Problemas: abertura genérica, frases picadas sem avanço de ideia, fechamento
decorativo, nenhum objeto real nomeado.

**Depois (objeto concreto e desenvolvimento):**

> Um time de três pessoas rodando cobrança manual em planilha perde o cliente
> quando alguém tira férias. Automatizar esse fluxo não é sobre
> parecer moderno; é sobre não depender de uma pessoa lembrar de enviar o
> boleto certo na hora certa. A falha mais comum nessa automação é confiar
> demais no gatilho de data e esquecer o caso de cliente que muda de plano no
> meio do ciclo.

Diferença: objeto nomeado (cobrança manual em planilha), avanço real
(motivo, não só afirmação), exemplo interpretado (falha provável apontada).

## Erros comuns na correção

- Reescrever um parágrafo curto e correto só porque ele é curto; frase de
  uma linha bem construída não precisa de recheio.
- Corrigir fragmentação transformando o parágrafo em lista; troca um
  problema (fragmentação) por outro (perda de prosa).
- Marcar uma ocorrência sem apontar a regra de `context/proibicoes.md` que
  sustenta o achado.
- Tratar preferência de estilo como veto sem localizar uma regra do projeto.
- Buscar só a frase literal e ignorar paráfrase, variação ou estrutura
  equivalente.
- Penalizar vocabulário técnico legítimo do domínio como se fosse jargão;   confira o objeto real do texto antes de marcar um termo como problema (ver
  nota sobre vocabulário técnico válido em `ESCRITA.md`).
- Corrigir só o trecho apontado e deixar o restante do arquivo com falhas
  equivalentes; a revisão editorial deve ser integral.
- Trocar termo proibido por sinônimo sem reescrever a frase; se a frase
  depende do termo, reconstrua o trecho inteiro.
- Uniformizar parágrafos bons ou comprimir a personalidade do texto; a
  correção deve ser proporcional ao problema encontrado.
- Transformar cada frase longa em duas frases curtas; advérbios, fragmentos,
  voz passiva e listas de três itens não recebem veto automático.
- Tratar uma frase curta pontual como reprovação; o padrão vetado é a
  sequência em cadeia, não o uso isolado.

## Registro de achados

Ao devolver o resultado, use este formato por parágrafo:

```text
| Localização | Trecho observado | Regra ou fonte | Diagnóstico | Ação aplicada ou pendente |
| --- | --- | --- | --- | --- |
| <seção/parágrafo> | <citação curta> | <arquivo e item> | <efeito no texto> | <mudança ou pendência> |
```

Se não houver achados, declare: `Nenhum achado nesta leitura.` Registre o
resultado dos passes literal e semântico/estrutural separadamente. Para cada
correção, repita os passes no texto completo e informe se a ocorrência foi
removida.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-editor**, do grupo
**copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de copy editor dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-copy-editor
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de copy editor

## Resultado

{Conteúdo específico da etapa.}

## Pendências

- {pergunta ou "nenhuma"}

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-copy-editor
grupo: copy
entrada: acervo/0042-2026-09-14-copy-editor/processado.md
pedido: aplicar a etapa de copy editor e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

### Saída ilustrativa

```markdown
---
id: 0042
skill: inboundfy-copy-editor
estado: aprovado
entrada: acervo/0042-2026-09-14-copy-editor/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de copy editor

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-copy-editor** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-copy-editor** para executar esta função: Audita e corrige prosa por achados verificáveis, com referência aos contextos e às regras editoriais do Inboundfy. Registra trecho, origem, diagnóstico e ação, e repete a leitura integral após as correções.

O grupo **copy** trabalha com estes campos mínimos:

- **objetivo:** preencher com dado ligado ao pedido.
- **mensagem:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **canal:** preencher com dado ligado ao pedido.
- **revisão:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-copy-editor
grupo: copy
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/base-editorial.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-copy-editor
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/base-editorial.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **copy** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `CONTEXTO.md`
- `SKILL-AUTORIA.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
