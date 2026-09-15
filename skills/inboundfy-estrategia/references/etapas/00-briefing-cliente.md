# Referências internas

## Etapa 00 briefing cliente

### Inboundfy Estratégia; Briefing de Cliente

Ponto de entrada de uma campanha nova. Traduz uma conversa de kickoff (com
cliente externo ou com o dono do negócio) em um documento formal de objetivo
e condição de sucesso, como requisito para decidir canal, calendário ou
peça.

#### Escopo

Decide **por que** a campanha existe e **como medir sucesso**; não decide
canal, tema, cadência ou peça. Isso é `inboundfy-estrategia`. Não
substitui `inboundfy-planejamento`, que roteia material bruto já
existente de uma peça específica.

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

- `context/empresa.md` e, se agência multi-cliente, `context/enderecos.md`
  para identificar a marca correta.
- `context/publico.md`, para associar a campanha a uma persona já registrada
  ou sinalizar persona nova a ser criada via `inboundfy-contexto-publico`.
- `context/ofertas.md`, quando o objetivo envolver produto ou plano
  específico.

#### Entrada esperada

Uma conversa de kickoff, um brief informal recebido do cliente, ou uma
diretriz direta do usuário sobre uma campanha nova.

#### Fluxo

1. Pergunte e registre o objetivo de negócio em termos de resultado, não de
   atividade; "gerar 200 trials", nunca "criar conteúdo sobre o produto".
2. Defina o KPI que mede esse objetivo, com meta numérica e prazo. Use o
   roteiro de `REFERENCIA.md` quando o cliente só souber descrever o
   objetivo de forma vaga.
3. Confirme a persona prioritária em `context/publico.md`; se não existir,
   pare e acione `inboundfy-contexto-publico` antes de continuar.
4. Registre orçamento de mídia paga (se houver) e período da campanha.
5. Liste restrições específicas desta campanha além de
   `context/proibicoes.md` (ex.: cliente pediu para não citar concorrente
   nomeado nesta campanha, mesmo que geralmente seja permitido).
6. Salve o brief em `<pacote-de-campanha>/00-briefing/brief-cliente.md`,
   seguindo o template de `REFERENCIA.md`.
7. Apresente o brief ao usuário para aprovação. Só depois de aprovado,
   acione `inboundfy-contexto-operacao` para registrar a campanha em
   `context/campanhas.md` com status "em planejamento", e encaminhe para
   `inboundfy-estrategia`.

#### Saída

`<pacote-de-campanha>/00-briefing/brief-cliente.md`, dentro do diretório de
campanha definido em `context/canais.md`.

#### Validação

- Objetivo é um resultado de negócio, não uma atividade de conteúdo.
- KPI tem meta numérica e prazo.
- Persona prioritária existe em `context/publico.md`.
- Brief foi aprovado explicitamente pelo usuário antes de virar campanha
  registrada.

#### Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Rodar novamente sobre a mesma campanha atualiza o brief existente incorporando
correções, sem criar um segundo brief para a mesma campanha.

### Referência da etapa

#### REFERENCIA.md; inboundfy-estrategia

Roteiro de entrevista, template e exemplo completo do brief de kickoff.

##### Roteiro de entrevista

1. "Se essa campanha der certo, o que muda no negócio em números; vendas,
   trials, leads, retenção, redução de churn?"
2. "Qual é o valor-alvo e até quando?"
3. "Quem é a pessoa que essa campanha precisa convencer? É a persona X de
   `context/publico.md` ou é alguém novo?"
4. "Existe orçamento de mídia paga? Quanto?"
5. "Qual é o período; data de início e de fim, ou é uma campanha contínua?"
6. "Existe alguma restrição específica desta campanha que não está em
   `context/proibicoes.md`?"

##### Template

```markdown
#### Brief de Cliente; <nome da campanha>

- **Cliente/marca:** <nome>
- **Objetivo de negócio:** <resultado mensurável>
- **KPI e meta:** <métrica, valor-alvo, prazo>
- **Público prioritário:** <persona de context/publico.md>
- **Orçamento de mídia paga:** <valor ou "nenhum">
- **Período:** <início–fim ou "contínua">
- **Restrições específicas desta campanha:** <lista ou "nenhuma além de
  proibicoes.md">
- **Aprovado por:** <nome/data>
```

##### Exemplo preenchido (fictício)

```markdown
#### Brief de Cliente; Lançamento Estoquely Pro

- **Cliente/marca:** própria
- **Objetivo de negócio:** gerar 200 trials qualificados do plano Pro.
- **KPI e meta:** 200 trials qualificados até 2026-09-30.
- **Público prioritário:** dono de loja com estoque em planilha.
- **Orçamento de mídia paga:** nenhum nesta fase.
- **Período:** 2026-08-01 a 2026-09-30.
- **Restrições específicas desta campanha:** não comparar com EstoqueFácil
  nominalmente, mesmo que outras campanhas já tenham permissão para isso.
- **Aprovado por:** Luiz, 2026-07-29.
```

##### Checklist de completude

- [ ] Objetivo é resultado de negócio, não atividade de conteúdo.
- [ ] KPI tem número e prazo.
- [ ] Persona existe em `context/publico.md`.
- [ ] Brief tem aprovação explícita registrada antes de seguir para
      `inboundfy-estrategia`.

##### Erros comuns

- Aceitar objetivo vago ("aumentar autoridade") sem forçar uma tradução em
  KPI mensurável; sem isso, `inboundfy-estrategia` não consegue
  priorizar canal nem `inboundfy-planejamento` não tem regra
  de sucesso real ao final.
- Pular a etapa de aprovação e já criar calendário; o briefing precisa ser
  validado pelo cliente ou pelo dono do negócio antes de qualquer plano de
  canal ser desenhado.
- Misturar escolha de canal ou tema no brief; isso pertence a
  `inboundfy-estrategia`, não a este documento.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-estrategia**, do grupo
**estratégia**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de estrategia 00 briefing cliente dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de estrategia 00 briefing cliente

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
entrada: acervo/0042-2026-09-14-estrategia-00-briefing-cliente/processado.md
pedido: aplicar a etapa de estrategia 00 briefing cliente e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de estrategia 00 briefing cliente

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

Use **inboundfy-estrategia** para executar esta função: Primeira skill do grupo estratégico. Conduz o kickoff de uma campanha nova antes de existir qualquer material bruto ou pacote de conteúdo: objetivo de negócio, KPI, público, orçamento e prazo. Não escreve calendário nem plano de canal; isso é inboundfy-estrategia.

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
