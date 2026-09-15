# Domínio campanhas

## Inboundfy Contexto; Campanhas

Mantém o registro de campanhas; ativas e encerradas. Não decide objetivo,
KPI ou plano de canal; apenas guarda o que já foi decidido pelas skills do
skill `inboundfy-estrategia`.

### Escopo

Cobre exclusivamente `context/campanhas.md`. Não escreve brief de campanha
(`inboundfy-estrategia`) nem plano de campanha
(`inboundfy-estrategia`); apenas registra o resultado deles.

### Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

### Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](../REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **contexto**.

### Contexto exigido

- `context/publico.md`, para validar que a persona prioritária citada existe.
- `context/canais.md`, para validar que os canais listados estão cadastrados.

### Entrada esperada

Uma campanha nova aprovada, uma mudança de status, ou uma correção de KPI,
orçamento ou período informada pelo usuário.

### Fluxo

1. Leia `context/campanhas.md` atual para não duplicar uma campanha já
   registrada com nome equivalente.
2. Ao registrar campanha nova, exija: objetivo de negócio, KPI com meta e
   prazo, público prioritário, canais envolvidos, período e o caminho do
   brief de origem; nunca crie entrada sem KPI mensurável.
3. Ao atualizar status, mude apenas o campo `Status` e, se houver, registre a
   data da mudança no próprio bloco; nunca apague uma campanha encerrada.
4. Confirme que a persona citada existe em `context/publico.md` e que os
   canais citados existem em `context/canais.md`; se não existirem, pare e
   aponte a skill de contexto correspondente antes de salvar.
5. Use o template de `REFERENCIA.md` para o formato do bloco.

### Saída

Atualização de `context/campanhas.md`.

### Validação

- Toda campanha registrada tem KPI com meta numérica e prazo, não só
  "aumentar engajamento".
- Persona e canais citados existem nos arquivos de `context/` correspondentes.
- Campanha encerrada permanece no arquivo com status atualizado, nunca é
  removida.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas a campanha indicada na execução atual; demais campanhas do
arquivo permanecem intactas.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-operacao

Template, exemplo preenchido e checklist para `context/campanhas.md`.

#### Roteiro de entrevista

1. "Qual é o nome da campanha e qual cliente ou marca ela atende?"
2. "Qual é o objetivo de negócio; não 'gerar conteúdo', mas o resultado que
   a campanha precisa mover (leads, vendas, retenção, reconhecimento)?"
3. "Qual KPI mede esse objetivo, com qual meta e até quando?"
4. "Qual persona de `context/publico.md` é a prioridade desta campanha?"
5. "Quais canais de `context/canais.md` estarão envolvidos?"
6. "Qual o período da campanha, ou ela é contínua?"
7. "Há orçamento de mídia paga? Se sim, qual valor?"

#### Exemplo preenchido (fictício)

```markdown
#### Lançamento Estoquely Pro

- **Cliente/marca:** própria
- **Status:** em execução
- **Objetivo de negócio:** gerar 200 trials qualificados do plano Pro em 60
  dias.
- **KPI(s) e meta:** 200 trials qualificados até 2026-09-30.
- **Público prioritário:** dono de loja com estoque em planilha (context/publico.md).
- **Canais envolvidos:** blog, LinkedIn, email de nutrição.
- **Período:** 2026-08-01 a 2026-09-30.
- **Orçamento de mídia paga, se houver:** sem mídia paga nesta fase.
- **Acervo relacionado:** acervo/0001-AAAA-MM-DD-lancamento-pro/
- **Calendário:** calendario/AAAA-MM.md
```

#### Checklist de completude

- [ ] KPI tem meta numérica e prazo, nunca só uma direção ("aumentar").
- [ ] Persona prioritária existe em `context/publico.md`.
- [ ] Todos os canais citados existem em `context/canais.md`.
- [ ] Caminho do brief e do plano de campanha estão preenchidos, não vagos.
- [ ] Status reflete o estado real, atualizado na mesma sessão da mudança.

#### Erros comuns

- Registrar objetivo vago ("fortalecer marca") sem KPI mensurável associado;   isso impede `inboundfy-estrategia` de priorizar canal e cadência.
- Apagar campanha encerrada em vez de mudar o status; perde-se o histórico
  que embasa a próxima campanha do mesmo cliente.
- Citar canal ou persona que ainda não existe em `context/`, criando
  referência quebrada.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-operacao**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto campanhas dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto campanhas

#### Resultado

{Conteúdo específico da etapa.}

#### Pendências

- {pergunta ou "nenhuma"}

#### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

#### Exemplo operacional completo

##### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-contexto-operacao
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-campanhas/processado.md
pedido: aplicar a etapa de contexto campanhas e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto campanhas

#### Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

#### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

#### Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

#### Erros comuns adicionais

- Executar **inboundfy-contexto-operacao** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

#### Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

#### Especificação operacional

##### Quando usar

Use **inboundfy-contexto-operacao** para executar esta função: Preenche e mantém context/campanhas.md. Ative quando uma campanha nova for aprovada em inboundfy-estrategia ou inboundfy-estrategia, quando o status de uma campanha mudar, ou quando o usuário corrigir KPI, período ou orçamento de uma campanha já registrada.

O grupo **contexto** trabalha com estes campos mínimos:

- **arquivo canônico:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **preferências:** preencher com dado ligado ao pedido.
- **fonte:** preencher com dado ligado ao pedido.
- **alteração:** preencher com dado ligado ao pedido.

##### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-contexto-operacao
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/campanhas.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-operacao
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/campanhas.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

##### Perguntas de conferência

1. A entrada pertence ao grupo **contexto** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

##### Referências de execução

Leia, na ordem necessária:

- `CONTEXTO.md`
- `docs/method/02-contexto-fontes-e-precedencia.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
