# Referência de início rápido

## Matriz de encaminhamento

| Pedido | Encaminhamento |
| --- | --- |
| Projeto sem configuração | `inboundfy-setup` |
| Material bruto | `inboundfy-acervo` → processamento → pesquisa → base editorial |
| Ideia curta | `inboundfy-brainstorm` |
| Estratégia ou campanha | `inboundfy-estrategia` |
| SEO ou GEO | `inboundfy-seo` / `inboundfy-geo` |
| Copy nova | `inboundfy-copy-redacao` |
| Copy existente | `inboundfy-copy-edicao` |
| Peça pronta | especialista do canal → `inboundfy-anti-slop` → validador |
| Estado ou data | `inboundfy-pipeline` / calendário |

## Resumo final

```md
acervo:
arquivos_processados:
pesquisa:
base_editorial:
possibilidades:
pecas:
personas:
calendario:
estados:
pendencias:
```

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-iniciar**, do grupo
**entrada**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de iniciar dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-iniciar
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de iniciar

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
skill: inboundfy-iniciar
grupo: entrada
entrada: acervo/0042-2026-09-14-iniciar/processado.md
pedido: aplicar a etapa de iniciar e entregar o próximo registro
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
skill: inboundfy-iniciar
estado: aprovado
entrada: acervo/0042-2026-09-14-iniciar/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de iniciar

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

- Executar **inboundfy-iniciar** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Prepare ou encaminhe a execução. Preserve respostas existentes e não crie conteúdo antes de o contexto mínimo estar pronto.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-iniciar** para executar esta função: Atalho operacional do Inboundfy que recebe material ou pedido de peça e encaminha setup, acervo, pesquisa, estratégia, produção e calendário.

O grupo **entrada** trabalha com estes campos mínimos:

- **respostas:** preencher com dado ligado ao pedido.
- **arquivos existentes:** preencher com dado ligado ao pedido.
- **sentinelas:** preencher com dado ligado ao pedido.
- **contexto:** preencher com dado ligado ao pedido.
- **relatório:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-iniciar
grupo: entrada
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/fontes-projeto.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-iniciar
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/fontes-projeto.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **entrada** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `INSTALACAO.md`
- `CONTEXTO.md`
- `docs/method/01-setup-e-runtime.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
