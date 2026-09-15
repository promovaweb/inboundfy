# REFERENCIA.md; inboundfy-contexto-concorrentes

Roteiro de entrevista, exemplo preenchido e checklist para
`context/concorrentes.md`.

## Roteiro de entrevista

1. "Qual concorrente devo registrar, e o que ele oferece, resumidamente?"
2. "Que público ele atende; é o mesmo público de vocês ou um segmento
   diferente?"
3. "Onde ele é forte de verdade? (responda com honestidade; isso não vai
   virar comparação pública automaticamente)"
4. "Onde vocês se diferenciam dele, com algo verificável (não 'somos
   melhores')?"
5. "Esse concorrente pode ser citado nominalmente em conteúdo público, ou
   isso é proibido pela política comercial de vocês?"

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## EstoqueFácil

- **O que oferecem:** sistema de controle de estoque via planilha na nuvem
  com modelo pronto.
- **Público que atendem:** loja um pouco maior, com alguém que já tem
  familiaridade com planilha.
- **Onde são fortes:** preço mais baixo e curva de aprendizado menor para
  quem já sabe usar planilha.
- **Onde a empresa se diferencia:** cadastro por foto elimina a etapa de
  digitação manual que a planilha exige; prova: tempo de cadastro 5x
  menor em teste comparativo interno.
- **Pode ser citado nominalmente?** não; política comercial da empresa
  evita comparação direta por nome em conteúdo público.
```

## Checklist de completude

- [ ] Ponto forte do concorrente descrito com honestidade, sem minimização.
- [ ] Diferença da empresa do usuário é verificável (tem prova), não só
      afirmação de superioridade.
- [ ] Permissão de citação nominal definida explicitamente; nunca deixe
      como "não informado" sem perguntar.
- [ ] Consultado `context/proibicoes.md` antes de marcar permissão como
      "sim".

## Erros comuns

- Diminuir o concorrente para fazer a empresa do usuário parecer melhor;   isso quebra a utilidade do arquivo como referência honesta e pode gerar
  peça arrogante ou factualmente errada.
- Marcar "sim" para citação nominal por padrão, sem confirmação explícita;   o padrão seguro é "não" até o usuário confirmar o contrário.
- Registrar concorrente genérico ("outras empresas do setor") em vez de
  nomear o concorrente real; isso não ajuda o planejamento a decidir
  ângulo de diferenciação.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-concorrentes**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de contexto concorrentes dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-contexto-concorrentes
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de contexto concorrentes

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
skill: inboundfy-contexto-concorrentes
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-concorrentes/processado.md
pedido: aplicar a etapa de contexto concorrentes e entregar o próximo registro
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
skill: inboundfy-contexto-concorrentes
estado: aprovado
entrada: acervo/0042-2026-09-14-contexto-concorrentes/processado.md
fontes:
  - .inboundfy/context/concorrentes.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de contexto concorrentes

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

- Executar **inboundfy-contexto-concorrentes** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-concorrentes** para executar esta função: Preenche e mantém context/concorrentes.md. Ative quando o usuário informar ou corrigir dado sobre um concorrente; o que oferece, ponto forte real, diferença verificável, se pode ser citado nominalmente.

O grupo **contexto** trabalha com estes campos mínimos:

- **arquivo canônico:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **preferências:** preencher com dado ligado ao pedido.
- **fonte:** preencher com dado ligado ao pedido.
- **alteração:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-contexto-concorrentes
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/concorrentes.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-concorrentes
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/concorrentes.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **contexto** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `CONTEXTO.md`
- `docs/method/02-contexto-fontes-e-precedencia.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
