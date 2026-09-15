# REFERENCIA.md; inboundfy-brainstorm

## Matriz de autonomia

| Situação | Conduta |
| --- | --- |
| A informação existe em `context/` | Usar e citar o arquivo. |
| A lacuna muda apenas formato ou tom | Inferir pela voz e pelos canais; registrar a suposição. |
| A lacuna muda tese ou audiência | Incluir no bloco único de perguntas. |
| A lacuna envolve preço, oferta, autoria ou capacidade do produto | Perguntar; não inventar. |
| A pesquisa encontra fontes divergentes | Registrar o conflito e usar formulação conservadora. |
| Um canal não tem material suficiente | Não criar oportunidade para esse canal. |
| A validação encontra falha reparável | Corrigir e revalidar sem pedir aprovação. |

## Resumo final

```markdown
Brainstorm aprovado em `brainstorms/<data>-<slug>/brainstorm.md`.

Foram registradas <n> fontes e <n> suposições. O arquivo seguiu para
<inboundfy-iniciar ou inboundfy-planejamento>.
```

## Checklist

- [ ] A wrapper executou as cinco fases.
- [ ] Houve no máximo um bloco de perguntas.
- [ ] Toda pergunta alterava a qualidade factual ou o foco.
- [ ] O resumo informa caminho e encaminhamento.

## Erros comuns

- Interromper a execução para escolher slug, título ou canal opcional.
- Tratar ausência de fonte como permissão para preencher um fato provável.
- Encaminhar brainstorm reprovado para produção.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-brainstorm**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de brainstorm dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-brainstorm
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de brainstorm

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
skill: inboundfy-brainstorm
grupo: brainstorm
entrada: acervo/0042-2026-09-14-brainstorm/processado.md
pedido: aplicar a etapa de brainstorm e entregar o próximo registro
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
skill: inboundfy-brainstorm
estado: aprovado
entrada: acervo/0042-2026-09-14-brainstorm/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de brainstorm

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

- Executar **inboundfy-brainstorm** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-brainstorm** para executar esta função: Orquestra uma ideia até brainstorm.md pesquisado e aprovado, executando as etapas 00 a 04, consultando context/, ESCRITA.md e os dois arquivos de proibições. Use quando o usuário trouxer uma ideia curta e quiser desenvolvê-la sem coordenar skills manualmente.

O grupo **brainstorm** trabalha com estes campos mínimos:

- **ideia:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **hipóteses:** preencher com dado ligado ao pedido.
- **tese:** preencher com dado ligado ao pedido.
- **próximo passo:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-brainstorm
grupo: brainstorm
pedido: executar a função desta skill sobre o material selecionado
entrada: brainstorms/2026-09-14-ideia/ideia.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-brainstorm
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - brainstorms/2026-09-14-ideia/ideia.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **brainstorm** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `BRAINSTORM.md`
- `ESCRITA.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
