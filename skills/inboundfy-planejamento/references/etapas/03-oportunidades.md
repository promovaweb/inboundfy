# Referências internas

## Etapa 03 oportunidades

### Inboundfy Planejamento

Quarta skill do pipeline. Transforma o repertório de `02-pesquisa-e-ativos/ativos.md`
em uma lista de oportunidades de conteúdo por canal, priorizadas.

#### Escopo

Decide as peças e a ordem, não a execução; o brief formal por peça é
`inboundfy-planejamento`.

#### Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

#### Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../../../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../../../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](../../REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **planejamento**.

#### Contexto exigido

- `context/canais.md`: canais ativos e suas skills de redação/imagem.
- `context/publico.md`: para priorizar oportunidades que atendem persona com
  dor mais urgente ou objeção mais recorrente.

#### Entrada esperada

`02-pesquisa-e-ativos/ativos.md` do pacote em andamento.

#### Fluxo

1. Leia `02-pesquisa-e-ativos/ativos.md` e `context/canais.md`.
2. Para cada canal ativo, avalie se o repertório de ativos justifica uma peça
   nesse canal; não force peça em canal sem ativo suficiente.
3. Liste as oportunidades identificadas, cada uma com: canal, ângulo,
   ativo(s) de apoio usados, e uma prioridade (alta, média, baixa) justificada
   pela matriz de priorização de `REFERENCIA.md`.
4. Sinalize oportunidades que dependem de dado ainda não confirmado em
   `context/` (ex.: menção a produto sem entrada em `context/produtos.md`).
5. Salve o plano em `03-planejamento/plano-de-oportunidades.md`, seguindo o
   template de `REFERENCIA.md`.
6. Execute `inboundfy-anti-slop` no marco A3 sobre os ângulos, canais, CTAs e
   reaproveitamentos. Registre `06-auditoria/anti-slop-03-estrategia-brief.md`
   antes de encaminhar qualquer oportunidade.
7. Em execução manual, apresente o plano para aprovação. Quando
   `inboundfy-iniciar` tiver sido chamado, marque automaticamente até cinco
   oportunidades de prioridade alta ou média como selecionadas, seguindo a
   política da wrapper, e encaminhe-as para
   `inboundfy-planejamento`.

#### Saída

`03-planejamento/plano-de-oportunidades.md`, dentro do diretório do pacote.

#### Validação

- Toda oportunidade lista o(s) ativo(s) de apoio usados.
- Nenhuma oportunidade foi criada para canal sem ativo suficiente.
- Prioridade tem justificativa, não é apenas uma ordem arbitrária.
- Seleção automática respeita canal pedido, ativos disponíveis e limite de
  cinco peças.
- O marco A3 foi executado sobre o plano antes do briefing.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Rodar novamente sobre o mesmo pacote atualiza o plano incorporando novos
ativos, sem descartar oportunidades já aprovadas pelo usuário.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

##### Template de `plano-de-oportunidades.md`

```markdown
#### Plano de oportunidades; <slug-do-pacote>

##### Oportunidade 1

- **Canal:** <canal ativo em context/canais.md>
- **Ângulo:** <recorte específico, não o tema genérico do pacote>
- **Ativos de apoio:** <quais itens de ativos.md sustentam esta peça>
- **Prioridade:** <alta | média | baixa>
- **Justificativa da prioridade:** <urgência da dor, força do repertório, pedido do usuário>
- **Pendência de contexto, se houver:** <entidade não cadastrada que precisa ser confirmada antes do brief>

<!-- Repita o bloco para cada oportunidade. -->
```

##### regra de priorização (matriz simples)

| Repertório disponível | Persona com dor urgente | Prioridade |
| --- | --- | --- |
| Forte (múltiplos ativos) | Sim | Alta |
| Forte | Não identificada | Média |
| Fraco (um ativo isolado) | Sim | Média |
| Fraco | Não identificada | Baixa; considerar não produzir |

Não crie oportunidade para canal sem nenhum ativo de apoio, mesmo que o
canal esteja ativo em `context/canais.md`; canal ativo não obriga peça
neste pacote.

##### Exemplo preenchido (fictício)

```markdown
#### Plano de oportunidades; cancelamento-primeiro-mes-estoque

##### Oportunidade 1

- **Canal:** blog
- **Ângulo:** "por que a migração de estoque, não o produto, é o motivo real
  de cancelamento no primeiro mês"
- **Ativos de apoio:** tese sobre migração, dado "6 em cada 10 tickets",
  objeção "estoque bagunçado"
- **Prioridade:** alta
- **Justificativa:** repertório forte (tese + dado + objeção) e dor com
  potencial de atingir busca real de gestores de pequeno varejo.
- **Pendência de contexto:** nenhuma.

##### Oportunidade 2

- **Canal:** linkedin
- **Ângulo:** opinião do gestor de produto sobre por que "atendimento
  reativo" não resolve cancelamento por migração
- **Ativos de apoio:** tese principal, trecho de citação do Falante B
- **Prioridade:** média
- **Justificativa:** repertório existe mas depende de uma citação só; ainda
  assim relevante para autoridade de marca pessoal.
- **Pendência de contexto:** confirmar em `context/pessoas.md` se o gestor
  de produto pode assinar posts de LinkedIn.

##### Oportunidade 3

- **Canal:** email
- **Ângulo:** e-mail de nutrição orientando clientes novos a importar
  planilha antes do primeiro cancelamento crítico
- **Ativos de apoio:** entidade "importador de planilha" (pendente de
  confirmação)
- **Prioridade:** baixa
- **Justificativa:** repertório depende de uma funcionalidade ainda não
  confirmada em `context/produtos.md`.
- **Pendência de contexto:** confirmar existência e nome oficial da
  funcionalidade antes de gerar brief.
```

##### Checklist de qualidade

- [ ] Toda oportunidade lista ativo(s) de apoio específico(s), não uma
      referência vaga ao pacote inteiro.
- [ ] Prioridade tem justificativa alinhada à matriz acima, não é ordem
      arbitrária.
- [ ] Pendências de contexto estão listadas por oportunidade, não
      escondidas.
- [ ] Nenhuma oportunidade foi criada para canal sem ativo de apoio.

##### Erros comuns

- Criar uma oportunidade por canal ativo só para "preencher" o plano, sem
  repertório real por trás.
- Priorizar por preferência pessoal do agente em vez da matriz de
  repertório × urgência da dor.
- Aprovar a produção de uma oportunidade com pendência de contexto sem
  primeiro resolver a pendência.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 03 oportunidades dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 03 oportunidades

##### Resultado

{Conteúdo específico da etapa.}

##### Pendências

- {pergunta ou "nenhuma"}

##### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

##### Exemplo operacional completo

###### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-planejamento
grupo: planejamento
entrada: acervo/0042-2026-09-14-planejamento-03-oportunidades/processado.md
pedido: aplicar a etapa de planejamento 03 oportunidades e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 03 oportunidades

##### Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

##### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

##### Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

##### Erros comuns adicionais

- Executar **inboundfy-planejamento** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

##### Guia específico do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

##### Especificação operacional

###### Quando usar

Use **inboundfy-planejamento** para executar esta função: Fase 3 do pipeline (METODOLOGIA.md). Cruza os ativos extraídos com os canais ativos em context/canais.md e decide quais peças valem a pena, onde ordem e com qual prioridade. Não escreve brief nem copy final.

O grupo **planejamento** trabalha com estes campos mínimos:

- **ID:** preencher com dado ligado ao pedido.
- **pacote:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **brief:** preencher com dado ligado ao pedido.
- **roteamento:** preencher com dado ligado ao pedido.

###### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-planejamento
grupo: planejamento
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/base-editorial.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-planejamento
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/base-editorial.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

###### Perguntas de conferência

1. A entrada pertence ao grupo **planejamento** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

###### Referências de execução

Leia, na ordem necessária:

- `METODOLOGIA.md`
- `ESTRUTURAS-PERSUASIVAS.md`
- `docs/method/06-contrato-de-skill.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
