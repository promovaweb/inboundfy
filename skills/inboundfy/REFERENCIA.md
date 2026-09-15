# Referência do Inboundfy

## Roteamento

| Pedido | Skill |
| --- | --- |
| Configurar projeto | `inboundfy-setup` |
| Fluxo completo de material | `inboundfy-acervo` |
| Receber material | `inboundfy-acervo` |
| Limpar material | `inboundfy-processar-acervo` |
| Extrair FAQ | `inboundfy-extrair-faq` |
| Buscar fontes | `inboundfy-pesquisa-acervo` |
| Estruturar base | `inboundfy-base-editorial` |
| Escolher usos | `inboundfy-acervo` |
| Planejar datas | `inboundfy-planejamento` |
| Redigir saída | `inboundfy-producao` |
| Atualizar estado | `inboundfy-pipeline` |
| Definir estratégia | `inboundfy-estrategia` |
| Pesquisar cliente | `inboundfy-pesquisa-cliente` |
| Analisar concorrência | `inboundfy-concorrentes` |
| Estruturar oferta | `inboundfy-copy-oferta` |
| Redigir ou reescrever copy | `inboundfy-copy-redacao` / `inboundfy-copy-edicao` |
| SEO | `inboundfy-seo` |
| GEO | `inboundfy-geo` |
| Conversão | `inboundfy-growth-cro` |
| Medir e atribuir | `inboundfy-metricas` / `inboundfy-atribuicao` |
| Testar | `inboundfy-experimentacao` |
| Lançar | `inboundfy-growth-lancamento` |
| Material rico | `inboundfy-growth-lead-magnet` |
| Filtrar slop | `inboundfy-anti-slop` |
| Registrar sugestão ou correção | `inboundfy-aprendizado` |
| Gerenciar URLs oficiais e perfis sociais | `inboundfy-contexto-institucional` |

## Limite

`inboundfy/` é a fonte do framework. `.inboundfy/` é a configuração do projeto.
`acervo/`, `canais/` e `calendario/` são dados de trabalho e saída.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy**, do grupo
**orquestrador**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de inboundfy dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de inboundfy

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
skill: inboundfy
grupo: orquestrador
entrada: acervo/0042-2026-09-14-inboundfy/processado.md
pedido: aplicar a etapa de inboundfy e entregar o próximo registro
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
skill: inboundfy
estado: aprovado
entrada: acervo/0042-2026-09-14-inboundfy/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de inboundfy

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
- [ ] Um novo ciclo preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Coordene as etapas sem duplicar trabalho. Mantenha a ordem, as escolhas, os IDs, as pendências e o relatório final visíveis.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy** para executar esta função: Orquestra inbound marketing baseado em IA, desde o setup do projeto e a entrada no acervo até a produção, revisão, calendário e registro das peças por canal.

O grupo **orquestrador** trabalha com estes campos mínimos:

- **pedido:** preencher com dado ligado ao pedido.
- **estado do projeto:** preencher com dado ligado ao pedido.
- **IDs:** preencher com dado ligado ao pedido.
- **etapas:** preencher com dado ligado ao pedido.
- **próxima skill:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy
grupo: orquestrador
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/fontes-projeto.md
```

Saída:

```yaml
id: 0042
skill: inboundfy
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/fontes-projeto.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **orquestrador** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `README.md`
- `METODOLOGIA.md`
- `ESTRATEGIA.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
