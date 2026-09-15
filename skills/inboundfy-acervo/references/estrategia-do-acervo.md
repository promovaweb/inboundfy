# Referências internas

## Etapa acervo

### Estratégia do acervo

#### Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](../REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **estratégia**.

#### Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](../REFERENCIA.md), `base-editorial.md`, `pesquisa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e o índice de peças.

#### Entrada esperada

Um acervo processado com base editorial pronta. Considere somente canais
marcados pelo usuário.

#### Fluxo

1. Liste blog, email, LinkedIn, Instagram, Substack e YouTube conforme a
   seleção do projeto.
2. Para cada canal, proponha formato, ângulo, persona, etapa da jornada,
   objetivo, CTA, frequência e relação com outras peças.
3. Permita várias oportunidades no mesmo canal quando houver ângulos distintos.
4. Indique reaproveitamento, adaptação e dependências de pesquisa ou design.
5. Registre tudo em `estrategia.md` dentro do acervo.
6. Confira a proposta com `inboundfy-anti-slop` no marco A3 antes de entregar
   os ângulos e CTAs. Salve o ciclo em
   `auditorias/anti-slop/03-estrategia-brief.md` junto com o brief, quando ele
   já existir.

#### Saída

Uma matriz de possibilidades com prioridade sugerida e perguntas para o usuário
escolher o próximo uso.

#### Validação

Nenhuma possibilidade usa canal inativo, afirmação sem fonte ou persona ausente.
Os ângulos, CTAs e reaproveitamentos passaram pelo marco A3.

#### Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Atualize a matriz do item e preserve oportunidades já escolhidas.

### Referência da etapa

#### Referência estratégica

Use uma tabela com canal, formato, ângulo, persona, etapa, objetivo, CTA,
prioridade, data sugerida e dependências.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-acervo**, do grupo
**estratégia**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de estrategia acervo dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de estrategia acervo

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
skill: inboundfy-acervo
grupo: estratégia
entrada: acervo/0042-2026-09-14-estrategia-acervo/processado.md
pedido: aplicar a etapa de estrategia acervo e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de estrategia acervo

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

- Executar **inboundfy-acervo** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

##### Guia específico do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

##### Especificação operacional

###### Quando usar

Use **inboundfy-acervo** para executar esta função: Avalia como um item do acervo pode alimentar canais, formatos, ângulos e reaproveitamentos dentro da estratégia de inbound marketing do projeto.

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
skill: inboundfy-acervo
grupo: estratégia
pedido: executar a função desta skill sobre o material selecionado
entrada: estrategia/2026-09-campanha/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-acervo
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
