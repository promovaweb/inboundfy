# Referência da base editorial

Seções mínimas: núcleo, objetivo, público, atores, fatos, frases, perguntas,
lacunas, fontes, relações e usos possíveis por canal.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-base-editorial**, do grupo
**base**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de base editorial dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-base-editorial
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de base editorial

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
skill: inboundfy-base-editorial
grupo: base
entrada: acervo/0042-2026-09-14-base-editorial/processado.md
pedido: aplicar a etapa de base editorial e entregar o próximo registro
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
skill: inboundfy-base-editorial
estado: aprovado
entrada: acervo/0042-2026-09-14-base-editorial/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de base editorial

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

- Executar **inboundfy-base-editorial** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-base-editorial** para executar esta função: Constrói a base editorial de um acervo a partir do material processado, pesquisa, FAQ e fontes relacionadas para orientar futuras peças de marketing.

O grupo **base** trabalha com estes campos mínimos:

- **entrada:** preencher com dado ligado ao pedido.
- **regra:** preencher com dado ligado ao pedido.
- **resultado:** preencher com dado ligado ao pedido.
- **fontes:** preencher com dado ligado ao pedido.
- **retorno:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-base-editorial
grupo: base
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/processado.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-base-editorial
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/processado.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **base** e tem um ID localizável?
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
