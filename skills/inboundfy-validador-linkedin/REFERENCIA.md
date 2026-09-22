# REFERENCIA.md; inboundfy-validador-linkedin

Use o template de `inboundfy-base-validador` com a produtora
`inboundfy-especialista-linkedin`.

## Checklist específico

- [ ] Post nativo não contém sintaxe Markdown.
- [ ] A primeira linha funciona antes do “ver mais”.
- [ ] Autor e competência conferem com `context/pessoas.md`.
- [ ] Existe CTA ou pergunta genuína, sem competição.
- [ ] A prosa foi lida por inteiro e cada achado verificável foi tratado.

## Exemplo fictício

Se o autor atribuído não pode assinar o tema, reprove, cite o contexto e
devolva à produtora sem trocar a autoria por conta própria.

## Erros comuns

Aprovar texto fluido que atribui experiência não registrada ao autor.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-validador-linkedin**, do grupo
**validador**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de validador linkedin dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-validador-linkedin
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de validador linkedin

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
skill: inboundfy-validador-linkedin
grupo: validador
entrada: acervo/0042-2026-09-14-validador-linkedin/processado.md
pedido: aplicar a etapa de validador linkedin e entregar o próximo registro
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
skill: inboundfy-validador-linkedin
estado: aprovado
entrada: acervo/0042-2026-09-14-validador-linkedin/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de validador linkedin

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

- Executar **inboundfy-validador-linkedin** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Leia o asset inteiro contra brief, fontes, contexto e formato. Relate local, regra, fonte e ação; devolva à produtora sem editar o original.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-validador-linkedin** para executar esta função: Valida post ou artigo produzido por inboundfy-especialista-linkedin contra brief, todos os contextos, escrita, proibições, autoria, formato nativo e contrato do canal antes da entrega.

O grupo **validador** trabalha com estes campos mínimos:

- **asset:** preencher com dado ligado ao pedido.
- **brief:** preencher com dado ligado ao pedido.
- **fontes:** preencher com dado ligado ao pedido.
- **achados:** preencher com dado ligado ao pedido.
- **estado:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-validador-linkedin
grupo: validador
pedido: executar a função desta skill sobre o material selecionado
entrada: canais/linkedin/0042-2026-09-14-peca/README.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-validador-linkedin
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - canais/linkedin/0042-2026-09-14-peca/README.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **validador** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `CONTEXTO.md`
- `docs/method/07-validacao-e-testes.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
