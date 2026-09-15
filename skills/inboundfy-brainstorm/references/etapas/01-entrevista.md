# Referências internas

## Etapa 01 entrevista

### Inboundfy Brainstorm 01; Entrevista

Completa o entendimento editorial da ideia. Não pesquisa fontes externas.

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
artefato. O grupo desta skill é **brainstorm**.

#### Contexto exigido

- `context/empresa.md`, `context/produtos.md` e `context/servicos.md`.
- `context/publico.md`, `context/marca-voz.md` e `context/ofertas.md`.
- `context/glossario.md`, quando a ideia contém termo técnico ou marca.

Consultar apenas os arquivos relacionados ao assunto. Acionar manutenção de
contexto somente quando a lacuna precisar virar informação permanente.

#### Entrada esperada

`brainstorm.md` com status `em-entrevista`.

#### Fluxo

1. Ler a ideia, os arquivos aplicáveis e o roteiro de `REFERENCIA.md`.
2. Identificar o que já pode ser respondido pelas fontes internas.
3. Separar lacunas essenciais de preferências opcionais.
4. Se houver lacuna essencial, fazer um único bloco com até cinco perguntas
   específicas. Não perguntar o que pode ser inferido com segurança.
5. Registrar respostas, origem e suposições na tabela do `brainstorm.md`.
6. Formular uma tese provisória e perguntas de pesquisa sem redigir a peça.
7. Marcar o status como `em-pesquisa` e encaminhar para
   `inboundfy-brainstorm`.

#### Saída

O mesmo `brainstorm.md`, com perguntas, respostas e suposições preenchidas.

#### Validação

- Cada pergunta muda tese, audiência, veracidade ou escopo factual.
- Houve no máximo um bloco e cinco perguntas.
- Resposta inferida indica o arquivo de origem.
- Informação ausente não aparece como fato.

#### Responsabilidade do grupo

Transforme ideia em direção trabalhável. Separe fatos, hipóteses, tese, recorte, perguntas e oportunidades antes de encaminhar o pacote.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** brainstorm
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Nova execução aproveita respostas registradas e pergunta somente sobre uma
lacuna essencial ainda aberta.

### Referência da etapa

#### REFERENCIA.md; inboundfy-brainstorm

##### Roteiro de investigação

Escolher somente perguntas que o material ainda não responde:

1. Que situação concreta levou a esta ideia?
2. Qual pessoa precisa reconhecer essa situação?
3. O que essa pessoa deve entender ou fazer depois?
4. Que experiência, caso ou prova própria apoia a tese?
5. Que afirmação não pode ser feita?

##### Exemplo ilustrativo

Para `Quero explicar por que onboarding de SaaS falha`, não perguntar cor,
título ou rede social. Perguntar qual falha foi observada e o tipo de produto,
se esses pontos não existirem nos arquivos.

##### Checklist

- [ ] A pergunta não repete informação existente.
- [ ] Perguntas opcionais viraram suposições.
- [ ] Respostas e origens foram registradas.

##### Erros comuns

- Transformar a entrevista em formulário de briefing.
- Fazer uma pergunta por mensagem.
- Pedir ao usuário que escolha uma estrutura de copy.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-brainstorm**, do grupo
**brainstorm**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de brainstorm 01 entrevista dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de brainstorm 01 entrevista

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
skill: inboundfy-brainstorm
grupo: brainstorm
entrada: acervo/0042-2026-09-14-brainstorm-01-entrevista/processado.md
pedido: aplicar a etapa de brainstorm 01 entrevista e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de brainstorm 01 entrevista

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

- Executar **inboundfy-brainstorm** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

##### Guia específico do grupo

Transforme ideia em direção trabalhável. Separe fatos, hipóteses, tese, recorte, perguntas e oportunidades antes de encaminhar o pacote.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

##### Especificação operacional

###### Quando usar

Use **inboundfy-brainstorm** para executar esta função: Fase 01 do brainstorm. Consulta context/ e investiga somente as lacunas que mudam tese, audiência ou veracidade, com um único bloco de até cinco perguntas; registra respostas e suposições sem interromper por escolhas opcionais.

O grupo **brainstorm** trabalha com estes campos mínimos:

- **ideia:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **hipóteses:** preencher com dado ligado ao pedido.
- **tese:** preencher com dado ligado ao pedido.
- **próximo passo:** preencher com dado ligado ao pedido.

###### Exemplo específico ilustrativo

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

###### Perguntas de conferência

1. A entrada pertence ao grupo **brainstorm** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

###### Referências de execução

Leia, na ordem necessária:

- `BRAINSTORM.md`
- `ESCRITA.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
