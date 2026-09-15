# Domínio pessoas

## Inboundfy Contexto; Pessoas

Mantém o cadastro de pessoas que podem ser citadas, entrevistadas ou
assinar conteúdo. Não escreve conteúdo público; registra o fato que as
skills de canal (em especial `inboundfy-especialista-linkedin`,
`inboundfy-especialista-video` e `inboundfy-especialista-podcast`) vão consumir para
calibrar voz e legitimidade dos porta-vozes.

### Escopo

Cobre exclusivamente `context/pessoas.md`. Não cobre identidade institucional
(`inboundfy-contexto-institucional`) nem persona de público-alvo
(`inboundfy-contexto-publico`); este arquivo registra os porta-vozes da marca,
não o público que ela pretende atingir.

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

Nenhum outro arquivo é pré-requisito. `context/empresa.md` pode ser
consultado para consistência de papel com a estrutura da empresa, mas não
impede a execução desta skill.

### Entrada esperada

Um dado novo, uma correção, ou material bruto (biografia, perfil de rede
social, apresentação) que o usuário quer estruturar como entrada de pessoa.

### Fluxo

1. Leia `context/pessoas.md` atual para não duplicar uma pessoa já cadastrada.
2. Se a entrada for material bruto, extraia papel, autoridade no tema, voz e
   biografia curta, e confirme com o usuário antes de gravar; nunca infira
   autoridade ou tema de competência sem confirmação. Use o roteiro de
   entrevista de `REFERENCIA.md`.
3. Registre também, quando o usuário informar, os temas que essa pessoa
   explicitamente não deve assinar, para evitar atribuição indevida em
   briefing futuro.
4. Grave a entrada seguindo a estrutura de bloco já presente no template,
   como uma nova seção `## <Nome da pessoa>` ou atualização de uma existente.
5. Nunca remova uma pessoa cadastrada sem pedido explícito do usuário.

### Saída

Atualização de `context/pessoas.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido para cada pessoa.
- Cada pessoa tem papel, autoridade e voz preenchidos; nenhum campo
  inventado sem confirmação do usuário.
- Nenhuma seção de outra pessoa foi removida ou sobrescrita sem pedido.
- Temas fora de competência declarada estão registrados quando o usuário os
  informou.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas a pessoa indicada pelo usuário na execução atual. Não
reescreve o arquivo inteiro nem normaliza entradas que não foram mencionadas.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-institucional

Roteiro de entrevista, exemplo preenchido e checklist para `context/pessoas.md`.

#### Roteiro de entrevista

1. "Quem são as pessoas que podem assinar conteúdo, dar entrevista ou
   aparecer como voz da marca?"
2. "Qual é o papel real dessa pessoa; não o cargo de cartão de visita, mas
   o que ela efetivamente faz?"
3. "Por que a opinião dessa pessoa vale como fonte nesse assunto? Que
   experiência ou escolha sustenta isso?"
4. "Quando essa pessoa fala em primeira pessoa, o tom é mais formal, direto,
   técnico ou opinativo?"
5. "Se eu precisasse escrever uma biografia curta de rodapé para essa
   pessoa, o que não pode faltar?"
6. "Quais são os perfis oficiais (LinkedIn, site, redes) dessa pessoa?"
7. "Em quais temas essa pessoa pode assinar com autoridade? E em quais temas
   ela definitivamente não deveria ser citada como fonte?"

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
### Pessoas

#### Marina Alves

- **Papel:** cofundadora e responsável técnica pelo produto
- **Autoridade no tema:** passou seis anos em lojas de varejo antes de
  fundar a empresa; decide prioridade técnica do produto
- **Voz quando fala em primeira pessoa:** direta, técnica, sem jargão de
  vendas
- **Biografia curta:** Marina cofundou a Estoquely depois de ver de perto
  o custo de controlar estoque em planilha numa loja de roupas da família.
  Hoje lidera o time de produto.
- **Redes e perfis oficiais:** linkedin.com/in/exemplo-marina-alves
- **Temas que pode assinar:** gestão de estoque, operação de varejo
  pequeno, escolhas de produto da Estoquely
- **Temas que não deve assinar:** tributário, jurídico, marketing de
  performance
```

#### Checklist de completude

- [ ] Papel descrito com função real, não rótulo genérico ("liderança").
- [ ] Autoridade no tema justificada por experiência ou escolha concreta,
      não por afirmação vaga ("é especialista").
- [ ] Ao menos um tema de competência e um de não-competência registrados;       isso evita atribuição indevida em briefing.
- [ ] Biografia curta pronta para uso direto em rodapé, sem precisar de
      edição.

#### Erros comuns

- Registrar cargo de organograma ("Head de X") sem explicar o papel real;   uma skill de canal precisa saber o que a pessoa efetivamente faz, não só
  o título.
- Inferir autoridade sem confirmação ("deve entender de marketing porque é
  fundador"); sempre pergunte antes de assumir competência.
- Misturar pessoa que fala pela marca com persona de público-alvo; isso é
  `context/publico.md`, arquivo diferente.
- Remover uma pessoa cadastrada porque ela não é mencionada na tarefa atual
; só remova com pedido explícito do usuário.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-institucional**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto pessoas dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto pessoas

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
skill: inboundfy-contexto-institucional
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-pessoas/processado.md
pedido: aplicar a etapa de contexto pessoas e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto pessoas

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

- Executar **inboundfy-contexto-institucional** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

#### Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

#### Especificação operacional

##### Quando usar

Use **inboundfy-contexto-institucional** para executar esta função: Preenche e mantém context/pessoas.md. Ative quando o usuário fornecer ou corrigir dado sobre fundadores, time, autores ou porta-vozes; papel, autoridade no tema, voz em primeira pessoa, biografia, temas que pode ou não assinar.

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
skill: inboundfy-contexto-institucional
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/pessoas.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-institucional
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/pessoas.md
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
