# Referências internas

## Etapa 00 triagem

### Inboundfy Brainstorm 00; Triagem

Abre o registro de uma ideia. Não pesquisa, entrevista nem desenvolve a tese.

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

- `context/empresa.md`, para associar a ideia ao negócio correto.
- `context/publico.md`, para reconhecer audiência já registrada.
- `context/canais.md`, para localizar o diretório de brainstorm.

Campo opcional vazio não impede a abertura do arquivo.

#### Entrada esperada

Uma ideia em qualquer nível de detalhe.

#### Fluxo

1. Confirmar que o diretório de brainstorm registrado existe. Se estiver
   ausente, acionar `inboundfy-setup` para repará-lo. Depois, ler
   `BRAINSTORM.md`, `templates/brainstorm.md` e o exemplo em `REFERENCIA.md`.
2. Preservar a ideia exatamente como foi recebida.
3. Gerar slug curto em minúsculas, sem acentos e separado por hífens.
4. Criar `brainstorms/<AAAA-MM-DD>-<slug>/`; acrescentar sufixo numérico se
   o caminho já existir.
5. Copiar o modelo para `brainstorm.md` e preencher frontmatter, ideia
   original e leitura inicial com o que estiver confirmado.
6. Marcar o status como `em-entrevista` e encaminhar para
   `inboundfy-brainstorm`.

#### Saída

Um `brainstorm.md` iniciado no diretório datado.

#### Validação

- O input original está intacto.
- Data e slug correspondem à execução.
- Nenhuma afirmação nova foi apresentada como fato.

#### Responsabilidade do grupo

Transforme ideia em direção trabalhável. Separe fatos, hipóteses, tese, recorte, perguntas e oportunidades antes de encaminhar o pacote.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** brainstorm
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Não sobrescrever diretório existente. Retomar somente quando o usuário
informar o caminho.

### Referência da etapa

#### REFERENCIA.md; inboundfy-brainstorm

##### Exemplo ilustrativo

Input: `Quero explicar por que onboarding de SaaS falha.`

```text
brainstorms/2026-07-30-onboarding-de-saas/
└── brainstorm.md
```

O arquivo preserva o input e registra intenção `educar`. Ele não inventa
produto, segmento ou causa da falha.

##### Checklist

- [ ] A ideia foi preservada literalmente.
- [ ] O slug descreve o assunto sem incluir promessa.
- [ ] O modelo canônico foi usado.
- [ ] O status aponta a próxima fase.

##### Erros comuns

- Reescrever a ideia original para deixá-la mais comercial.
- Usar título longo como slug.
- Preencher público ou produto sem apoio no `context/`.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-brainstorm**, do grupo
**brainstorm**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de brainstorm 00 triagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de brainstorm 00 triagem

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
entrada: acervo/0042-2026-09-14-brainstorm-00-triagem/processado.md
pedido: aplicar a etapa de brainstorm 00 triagem e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de brainstorm 00 triagem

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

Use **inboundfy-brainstorm** para executar esta função: Fase 00 do brainstorm. Preserva a ideia original, identifica intenção, audiência e arquivos de context/ aplicáveis, cria um diretório datado em brainstorms/ e inicia brainstorm.md pelo modelo canônico.

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
