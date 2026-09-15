# Domínio ferramentas

## Inboundfy Contexto; Ferramentas

Mantém o cadastro de ferramentas mencionáveis em conteúdo. Skills de canal
consultam este arquivo antes de citar ou linkar uma ferramenta de terceiro.

### Escopo

Cobre exclusivamente `context/ferramentas.md`.

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

Nenhum outro arquivo é pré-requisito.

### Entrada esperada

Uma ferramenta nova, correção de relação (fornecedor, parceiro, tecnologia
própria), ou definição de página própria para link na primeira menção.

### Fluxo

1. Leia `context/ferramentas.md` atual para não duplicar uma entrada.
2. Registre para que a empresa usa a ferramenta e se ela pode ser citada em
   conteúdo público; nunca assuma "sim" por padrão sem confirmação. Use o
   roteiro de entrevista de `REFERENCIA.md`.
3. Registre o link oficial da ferramenta e, se existir, a página própria do
   usuário para onde a primeira menção deve apontar.
4. Atualize a relação (fornecedor, parceiro, tecnologia própria) sempre que
   ela mudar.

### Saída

Atualização de `context/ferramentas.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Permissão de citação pública está definida explicitamente.
- Link oficial está presente e correto.
- Nenhuma entrada existente foi removida sem pedido explícito.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas a ferramenta indicada na execução atual.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-operacao

Roteiro de entrevista, exemplo preenchido e checklist para
`context/ferramentas.md`.

#### Roteiro de entrevista

1. "Qual ferramenta você quer que eu registre, e para que a empresa a usa
   internamente?"
2. "Essa ferramenta pode ser citada em conteúdo público, ou é uso interno
   que não deve aparecer?"
3. "Qual é o link oficial da ferramenta?"
4. "Qual é a relação da empresa com ela; fornecedor pago, parceiro
   técnico, tecnologia própria construída internamente?"
5. "Existe uma página própria do site para onde a primeira menção dessa
   ferramenta deve linkar (ex.: página de integrações)?"

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
#### Zendesk

- **Para que a empresa usa:** atendimento de suporte ao cliente.
- **Pode ser citada em conteúdo público?** sim, em contexto de "como
  funciona nosso suporte".
- **Link oficial:** https://www.zendesk.com
- **Relação com a empresa:** fornecedor pago (ferramenta de terceiro).
- **Página própria para link:** nenhuma; linkar direto para o site oficial
  da ferramenta.

#### Motor de Reconhecimento de Produto

- **Para que a empresa usa:** identificar produto por foto no cadastro do
  aplicativo.
- **Pode ser citada em conteúdo público?** sim, como tecnologia própria.
- **Link oficial:** não aplicável (tecnologia interna).
- **Relação com a empresa:** tecnologia própria, construída internamente.
- **Página própria para link:** exemplo-estoquely.com.br/tecnologia
```

#### Checklist de completude

- [ ] Permissão de citação pública definida explicitamente (nunca
      "assumido como sim").
- [ ] Link oficial presente quando a ferramenta for de terceiro.
- [ ] Relação com a empresa classificada (fornecedor, parceiro, tecnologia
      própria).
- [ ] Página própria de destino registrada quando existir, para uso por
      `inboundfy-base-seo` na primeira menção.

#### Erros comuns

- Assumir que toda ferramenta usada internamente pode ser citada em
  conteúdo público; algumas são uso interno sensível (ex.: ferramenta de
  billing, banco de dados interno) e não devem aparecer.
- Registrar ferramenta de terceiro sem link oficial; isso impede a
  linkagem correta na primeira menção.
- Confundir tecnologia própria da empresa com ferramenta de terceiro;   tecnologia própria não tem "link oficial" externo, mas pode ter página
  própria no site do usuário.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-operacao**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto ferramentas dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto ferramentas

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
entrada: acervo/0042-2026-09-14-contexto-ferramentas/processado.md
pedido: aplicar a etapa de contexto ferramentas e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto ferramentas

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

Use **inboundfy-contexto-operacao** para executar esta função: Preenche e mantém context/ferramentas.md. Ative quando o usuário informar uma ferramenta da stack, parceiro técnico ou integração que pode (ou não) ser citada em conteúdo público.

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
entrada: .inboundfy/context/ferramentas.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-operacao
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/ferramentas.md
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
