# Referências internas

## Etapa 00 triagem

### Inboundfy Triagem

Primeira skill do pipeline editorial. Não escreve copy nem produz artefato
final; decide o caminho e prepara o terreno para `inboundfy-planejamento`,
`inboundfy-planejamento`, `inboundfy-planejamento` e `inboundfy-planejamento`.

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

- `context/canais.md`: define o diretório de trabalho onde o pacote será
  criado. Se ainda não estiver preenchido, pare e acione
  `inboundfy-contexto-operacao` antes de continuar.

#### Entrada esperada

Material bruto de qualquer natureza: transcrição de reunião ou aula, peça-base,
print ou nota de pesquisa, release de produto, briefing informal do usuário.
Uma ideia curta sem tese ou prova deve chegar por `inboundfy-brainstorm`.

#### Fluxo

1. Confirme que `context/canais.md` tem o diretório de trabalho definido e
   que o caminho existe. Se o diretório ou arquivo de apoio estiver ausente,
   acione `inboundfy-setup`; não recrie a estrutura nesta skill.
2. Avalie o material recebido e encaminhe ideia curta para
   `inboundfy-brainstorm` antes de abrir o pacote. Para as demais entradas,
   decida:
   - **Pacote completo**: quando o material é substancial o suficiente para
     gerar múltiplas peças em múltiplos canais (ex.: transcrição de aula,
     pesquisa extensa, lançamento de produto).
   - **Peça avulsa**: quando o pedido já é um brief específico de uma única
     peça em um único canal (ex.: "escreva um post de LinkedIn sobre X").
     Nesse caso, encaminhe direto para `inboundfy-planejamento` (para formalizar o
     brief) e depois `inboundfy-planejamento`, pulando as fases 1-3.
3. Para pacote completo, crie a estrutura de diretório definida em
   `METODOLOGIA.md`, dentro do caminho de `context/canais.md`:

   ```text
   <diretório-de-trabalho>/<slug-do-pacote>/
   ├── README.md
   └── 00-entrada/
       └── material-original.md
   ```

4. Salve o material bruto, sem edição, em `00-entrada/material-original.md`.
   Este arquivo nunca é reescrito depois.
5. Execute `inboundfy-anti-slop` no marco A0 em modo somente leitura. Registre
   o ciclo em `06-auditoria/anti-slop-00-entrada.md` sem alterar o material.
6. Escreva um `README.md` do pacote com: data, origem do material, escolha de
   pacote completo, e status inicial `00-entrada`, seguindo o template e o
   parâmetro objetivo de escolha de `REFERENCIA.md`.
7. Informe ao usuário o próximo passo: `inboundfy-planejamento` para pacote
   completo, ou `inboundfy-planejamento` para peça avulsa.

#### Saída

- Pacote completo: diretório novo com `README.md` e `00-entrada/`.
- Peça avulsa: nenhum arquivo novo aqui; a skill apenas encaminha para
  `inboundfy-planejamento`.

#### Validação

- O material original está preservado, sem edição, em `00-entrada/`.
- O registro A0 do anti-slop foi criado sem alterar a origem.
- A escolha entre pacote completo e peça avulsa está registrada no
  `README.md` do pacote (quando aplicável) e foi comunicada ao usuário.
- Nenhuma fase posterior foi executada por esta skill.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Se o usuário fornecer novo material para um pacote já existente, crie um novo
pacote; não anexe ao `00-entrada/` de um pacote anterior. Um pacote
corresponde a uma origem de material.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

##### Template do `README.md` do pacote

```markdown
#### Pacote: <slug-do-pacote>

- **Origem do material:** <transcrição, peça-base, release, pesquisa, etc.>
- **Data de criação:** <data>
- **escolha:** <pacote completo | peça avulsa>
- **Motivo da escolha:** <por que o material sustenta múltiplas peças, ou por que já é um brief específico>
- **Status atual:** 00-entrada
- **Canais previstos (se já visível na triagem):** <lista, opcional>
```

##### regra objetivo: pacote completo vs. peça avulsa

| Sinal no material recebido | escolha |
| --- | --- |
| Transcrição de aula, reunião ou entrevista com mais de um tema explorável | Pacote completo |
| Pesquisa ou dado extenso com múltiplos ângulos possíveis | Pacote completo |
| Lançamento de produto, feature ou mudança relevante | Pacote completo |
| Pedido já nomeia canal + tema + objetivo em uma frase ("escreva um post de LinkedIn sobre X") | Peça avulsa |
| Usuário pede explicitamente "só uma peça, não preciso do pacote todo" | Peça avulsa, mesmo que o material permitisse mais |

Regra de desempate: se o material permite pacote completo mas o usuário não
deixou claro o que quer, pergunte antes de decidir; não assuma pacote
completo por padrão só porque o material é longo.

##### Exemplo preenchido (fictício)

Material recebido: transcrição de 40 minutos de uma reunião interna sobre
"por que clientes cancelam no primeiro mês de uso de um software de gestão
de estoque fictício".

```markdown
#### Pacote: cancelamento-primeiro-mes-estoque

- **Origem do material:** transcrição de reunião interna (call gravada)
- **Data de criação:** 2026-03-02
- **escolha:** pacote completo
- **Motivo da escolha:** a reunião cobre três causas distintas de
  cancelamento, cada uma com potencial de virar peça em canal diferente
  (blog explicativo, post de LinkedIn com opinião, e-mail de retenção).
- **Status atual:** 00-entrada
- **Canais previstos:** blog, linkedin, email
```

##### Checklist de qualidade

- [ ] `00-entrada/material-original.md` contém o material bruto sem
      qualquer edição, resumo ou correção.
- [ ] escolha (pacote completo/peça avulsa) está registrada com motivo, não
      só a escolha isolada.
- [ ] Se pacote completo, a estrutura de diretório mínima
      (`README.md` + `00-entrada/`) foi criada no caminho certo de
      `context/canais.md`.
- [ ] Usuário foi informado do próximo passo antes da skill encerrar.

##### Erros comuns

- Resumir ou "limpar" o material já na triagem; isso é trabalho de
  `inboundfy-planejamento`, não desta fase.
- Decidir pacote completo automaticamente para qualquer material longo,
  mesmo quando o usuário só queria uma peça rápida.
- Criar o pacote em um caminho diferente do definido em
  `context/canais.md`, gerando dois "diretórios de trabalho" no mesmo
  projeto.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 00 triagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 00 triagem

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
entrada: acervo/0042-2026-09-14-planejamento-00-triagem/processado.md
pedido: aplicar a etapa de planejamento 00 triagem e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 00 triagem

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

Use **inboundfy-planejamento** para executar esta função: Porta de entrada da fase 0 do pipeline (METODOLOGIA.md). Recebe material bruto; transcrição, peça-base, briefing informal, dado de pesquisa; e decide entre pacote completo ou peça avulsa, criando a estrutura de diretório e preservando a origem sem edição.

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
