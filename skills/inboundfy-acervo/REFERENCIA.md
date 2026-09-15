# Referência do acervo

`inboundfy-acervo` é a skill mestre. Ela conduz o material desde a entrada
até a peça final e chama as skills específicas na ordem descrita abaixo.

## Ordem canônica

| Fase | Skill principal | Artefato ou ação |
| --- | --- | --- |
| 0 | `inboundfy-setup` | Configuração global, voz, personas, proibições, dicionário, canais e pipeline. |
| 1 | `inboundfy-acervo` | ID, `bruto.md`, README, índices e arquivos de trabalho. |
| 2 | `inboundfy-processar-acervo` | `processado.md` limpo pelas regras do projeto. |
| 3 | `inboundfy-extrair-faq` | `faq.md` com perguntas, respostas e lacunas. |
| 4 | `inboundfy-pesquisa-acervo` | `pesquisa.md` com pesquisa web e fontes locais. |
| 5 | `inboundfy-base-editorial` | `base-editorial.md` com metadados e relações. |
| 6 | `inboundfy-acervo` | `estrategia.md` com usos por canal. |
| 7 | `inboundfy-planejamento` | Brief, direção editorial, data e prioridade. |
| 8 | `inboundfy-producao` | Pasta final e texto do canal. |
| 9 | Especialista do canal | Copy adaptada a formato, persona e objetivo. |
| 10 | Anti-slop e validadora | Revisão de fonte, voz, dicionário, proibições e canal. |
| 11 | `inboundfy-pipeline` | Estado, URL, data e publicação. |
| 12 | `inboundfy-catalogo` | Índices de acervo, peças e calendário. |

As fases 2 a 6 podem ser retomadas individualmente. Quando a entrada for
material novo, a skill mestre deve conduzir todas elas antes de propor uma
peça. As fases 7 a 12 só seguem após o usuário escolher uso, canal, persona,
direção e data quando esses dados forem necessários.

As auditorias anti-slop atravessam essa ordem: A0 após `bruto.md`, A1 após
`processado.md`, A2 após a base editorial, A3 após estratégia e brief, A4 no
início de uma peça longa, A5 antes da validadora e A6 antes do pipeline. Leia
[ETAPAS.md](../inboundfy-anti-slop/ETAPAS.md) para o foco e o caminho de cada
registro.

## Contrato dos arquivos

| Arquivo | Regra |
| --- | --- |
| `bruto.md` | Cópia preservada do material recebido; fonte única para reprocessamento. |
| `processado.md` | Texto limpo, sem afirmações novas e alinhado à configuração do projeto. |
| `faq.md` | Perguntas por parágrafo, entidade, fato, condição, exemplo e lacuna. |
| `pesquisa.md` | Fontes web e locais, datas, URLs, relações e pontos pendentes. |
| `base-editorial.md` | Núcleo, objetivo, atores, frases, fontes, personas e usos. |
| `estrategia.md` | Possibilidades por canal ativo, formato, ângulo, CTA e reaproveitamento. |
| `README.md` | Índice navegável, checklist da execução e links relativos. |

## Pausas obrigatórias

Pare e converse com o usuário quando faltar:

- configuração inicial ou persona completa;
- canal ativo para a peça;
- persona da peça;
- título ou direção editorial;
- confirmação de fato, oferta, preço, depoimento ou número;
- data de calendário ou autorização para substituir peça revisada.

Use três opções materialmente diferentes quando a direção estiver aberta. A
primeira é a recomendada; sempre permita resposta livre e registre o alcance.

## Relatório mínimo

```md
id_acervo:
caminho_acervo:
arquivos:
fontes_pesquisa:
lacunas:
possibilidades:
pecas:
personas:
calendario:
pipeline:
pendencias:
```

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-acervo**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de acervo dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-acervo
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de acervo

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
skill: inboundfy-acervo
grupo: capacidade
entrada: acervo/0042-2026-09-14-acervo/processado.md
pedido: aplicar a etapa de acervo e entregar o próximo registro
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
skill: inboundfy-acervo
estado: aprovado
entrada: acervo/0042-2026-09-14-acervo/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de acervo

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

- Executar **inboundfy-acervo** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-acervo** para executar esta função: Orquestra o ciclo completo do Inboundfy

O grupo **acervo** trabalha com estes campos mínimos:

- **bruto:** preencher com dado ligado ao pedido.
- **processado:** preencher com dado ligado ao pedido.
- **FAQ:** preencher com dado ligado ao pedido.
- **pesquisa:** preencher com dado ligado ao pedido.
- **base editorial:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-acervo
grupo: acervo
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/bruto.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-acervo
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/bruto.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **acervo** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `METODOLOGIA.md`
- `LIMPEZA-MATERIAL-BRUTO.md`
- `TRADUCAO.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
