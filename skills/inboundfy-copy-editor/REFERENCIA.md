# REFERENCIA.md; inboundfy-copy-editor

Material de apoio para aplicar `ESCRITA.md` com precisão, parágrafo a
parágrafo. Use isto ao avaliar nota e ao reescrever trecho abaixo de 90%.

O checklist abaixo cobre os princípios de `ESCRITA.md`. Para violação
específica e catalogada; palavra, fórmula de abertura/fechamento,
estrutura de parágrafo; cruze sempre com `context/estruturas-proibidas.md`,
que impõe reprovação automática e teto de nota 69 quando violado (mesmo peso
de `context/proibicoes.md`). O teto registra a gravidade do parágrafo; não
autoriza aprovação pela média.

## Checklist objetivo por parágrafo

Marque cada item como presente ou ausente antes de atribuir nota:

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

Um parágrafo com todos os itens marcados fica acima de 90. Cada item ausente
derruba a nota proporcionalmente ao peso do problema (fórmula de abertura
genérica e frase decorativa pesam mais que uma frase levemente repetitiva).

## Exemplo; antes e depois

**Antes (nota ~55, fragmentação e slop):**

> No cenário atual, a automação é cada vez mais importante. Ela ajuda as
> empresas. É fundamental destacar que times pequenos também podem se
> beneficiar. Em suma, vale a pena considerar.

Problemas: abertura genérica, frases picadas sem avanço de ideia, fechamento
decorativo, nenhum objeto real nomeado.

**Depois (nota ~95):**

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
- Aplicar o teto de nota 69 por violação de proibição, mas esquecer de
  registrar qual regra de `context/proibicoes.md` foi violada.
- Aprovar o texto porque a média passou de 90 mesmo com uma ocorrência
  proibida.
- Buscar só a frase literal e ignorar paráfrase, variação ou estrutura
  equivalente.
- Penalizar vocabulário técnico legítimo do domínio como se fosse jargão;   confira o objeto real do texto antes de marcar um termo como problema (ver
  nota sobre vocabulário técnico válido em `ESCRITA.md`).

## Registro de nota

Ao devolver o resultado, use este formato por parágrafo:

```text
Parágrafo N; nota: XX/100
Motivo (se < 90): <item de checklist ausente>
Correção aplicada: <o que mudou, ou "nenhuma">
```

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

Use **inboundfy-copy-editor** para executar esta função: Skill transversal de auditoria de parágrafo por ESCRITA.md. Atribui nota de 0 a 100 por parágrafo e aplica hard gate: qualquer violação de context/proibicoes.md ou context/estruturas-proibidas.md reprova o texto, independentemente da nota. Reescreve trechos abaixo de 90% e repete a varredura integral antes de liberar o resultado.

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
