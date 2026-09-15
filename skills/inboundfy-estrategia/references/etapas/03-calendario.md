# Referências internas

## Etapa 03 calendario

### Inboundfy Estratégia; Calendário Editorial

Quarta etapa do grupo estratégico e a única contínua: onde
`inboundfy-estrategia` decide fase e tema de uma campanha específica,
esta skill decide a agenda real; que semana, que canal, que pacote entra em
produção, somando cadência orgânica (sem campanha) e pacotes de campanhas
ativas.

#### Escopo

Decide sequência no tempo, não estratégia de campanha nem brief de peça.
Consome o plano de `inboundfy-estrategia` como entrada, nunca o
substitui.

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
artefato. O grupo desta skill é **estratégia**.

#### Contexto exigido

- `context/canais.md`, para cadência técnica de cada canal e diretório de
  trabalho do pipeline.
- `context/campanhas.md`, para listar todas as campanhas ativas e seus
  pacotes de conteúdo pendentes.

#### Entrada esperada

Um período a planejar (semana, mês, trimestre), a lista de campanhas ativas
em `context/campanhas.md` e, quando houver, `01-plano/plano-de-campanha.md`
de cada campanha ativa.

#### Fluxo

1. Leia `context/campanhas.md` e o plano de cada campanha ativa.
2. Liste a cadência orgânica de cada canal ativo em `context/canais.md`
   (conteúdo recorrente que não pertence a nenhuma campanha específica).
3. Distribua no período pedido: pacotes de campanha ativa (respeitando a
fase atual) e cadência orgânica, sem exceder a cadência técnica
   declarada por canal.
4. Ao alocar um pacote, decida a rota: se já existe material bruto, aponte
   para `inboundfy-planejamento`; se é peça avulsa e rápida sem
   pacote completo, aponte direto para `inboundfy-especialista-<canal>`.
5. Sinalize conflito de capacidade; mais pacotes do que a cadência do canal
   suporta no período; e negocie prioridade com o usuário antes de fechar
   o calendário.
6. Salve o calendário em `calendario/<periodo>.md`, seguindo o template de
   `REFERENCIA.md`.

#### Saída

`calendario/<periodo>.md` (ex.: `calendario/2026-08.md`), no diretório de
trabalho definido em `context/canais.md`.

#### Validação

- Nenhum canal recebe mais peças no período do que sua cadência técnica
  suporta.
- Todo item do calendário aponta a rota certa (pipeline completo ou
  especialista direto) e a campanha de origem, quando houver.
- Conflito de capacidade foi resolvido com o usuário, não decidido
  silenciosamente pela skill.

#### Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Recalcular o mesmo período atualiza a distribuição incorporando novidade de
campanha ou cadência, preservando item já marcado como produzido ou em
produção.

### Referência da etapa

#### REFERENCIA.md; inboundfy-estrategia

Template, exemplo completo e checklist do calendário editorial por período.

##### Template

```markdown
#### Calendário; <período>

##### <Semana ou data>

| Canal | Tema | Campanha (ou "orgânico") | Rota | Status |
| --- | --- | --- | --- | --- |
| <canal> | <tema> | <nome da campanha ou "orgânico"> | <pipeline completo /
  especialista direto> | <planejado / em produção / publicado> |

<!-- Repita a tabela para cada semana ou data do período. -->

##### Conflitos de capacidade sinalizados

- <canal>: <descrição do conflito e escolha do usuário, ou "pendente de
  escolha">
```

##### Exemplo preenchido (fictício)

```markdown
#### Calendário; 2026-08

##### Semana 1 (03 a 09)

| Canal | Tema | Campanha (ou "orgânico") | Rota | Status |
| --- | --- | --- | --- | --- |
| blog | quanto tempo um lojista perde digitando estoque | Lançamento Estoquely Pro | especialista direto | planejado |
| LinkedIn | erro comum de controle manual #1 | Lançamento Estoquely Pro | especialista direto | planejado |
| newsletter | resumo mensal de produto | orgânico | pipeline completo | planejado |

##### Conflitos de capacidade sinalizados

- LinkedIn: campanha pediu 4 posts na semana 1, mas cadência técnica do
  canal é 2/semana; usuário decidiu distribuir 2 posts na semana 1 e 2 na
  semana 2.
```

##### Checklist de completude

- [ ] Nenhuma linha excede a cadência técnica do canal no período.
- [ ] Toda linha tem rota definida (pipeline completo ou especialista
      direto), nunca "a definir".
- [ ] Todo conflito de capacidade está registrado com a escolha tomada, não
      silenciado.
- [ ] Item já publicado mantém o status atualizado, não fica como
      "planejado" indefinidamente.

##### Erros comuns

- Alocar peça de campanha sem checar a fase da campanha no plano
  de `inboundfy-estrategia`; gera peça de conversão antes da fase de
  atração terminar.
- Ignorar cadência técnica do canal só porque a campanha "precisa" do
  volume; o conflito deve ser negociado com o usuário, não resolvido
  silenciosamente a favor da campanha.
- Recriar o calendário do zero a cada rodada em vez de atualizar o período
  existente, perdendo o status de itens já produzidos.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-estrategia**, do grupo
**estratégia**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de estrategia 03 calendario dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de estrategia 03 calendario

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
skill: inboundfy-estrategia
grupo: estratégia
entrada: acervo/0042-2026-09-14-estrategia-03-calendario/processado.md
pedido: aplicar a etapa de estrategia 03 calendario e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de estrategia 03 calendario

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

- Executar **inboundfy-estrategia** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

##### Guia específico do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

##### Especificação operacional

###### Quando usar

Use **inboundfy-estrategia** para executar esta função: Quarta skill do grupo estratégico. Mantém o calendário editorial recorrente entre campanhas; cadência orgânica por canal fora de campanha específica;   e distribui no tempo os pacotes de conteúdo de campanhas ativas. Não decide fase nem tema de campanha (inboundfy-estrategia); decide quando cada pacote entra em produção.

O grupo **estratégia** trabalha com estes campos mínimos:

- **objetivo:** preencher com dado ligado ao pedido.
- **público:** preencher com dado ligado ao pedido.
- **canal:** preencher com dado ligado ao pedido.
- **período:** preencher com dado ligado ao pedido.
- **medida:** preencher com dado ligado ao pedido.

###### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-estrategia
grupo: estratégia
pedido: executar a função desta skill sobre o material selecionado
entrada: estrategia/2026-09-campanha/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-estrategia
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - estrategia/2026-09-campanha/brief.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

###### Perguntas de conferência

1. A entrada pertence ao grupo **estratégia** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

###### Referências de execução

Leia, na ordem necessária:

- `ESTRATEGIA.md`
- `CONTEXTO.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
