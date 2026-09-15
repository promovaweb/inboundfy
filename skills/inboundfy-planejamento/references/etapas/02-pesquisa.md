# Referências internas

## Etapa 02 pesquisa

### Inboundfy Pesquisa

Terceira skill do pipeline. Lê `01-saneamento/base-limpa.md` e o `context/`
disponível para produzir um repertório de ativos que `inboundfy-planejamento` e
`inboundfy-planejamento` vão usar depois.

#### Escopo

Extrai e organiza ativos reutilizáveis. Não decide quais peças produzir
(`inboundfy-planejamento`) nem escreve brief (`inboundfy-planejamento`).

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

- `context/produtos.md` e/ou `context/servicos.md`: para reconhecer menção a
  algo que a empresa oferece.
- `context/publico.md`: para conectar dor e objeção extraídas do material com
  a persona correspondente.
- `context/ferramentas.md`: para identificar ferramentas de terceiro citadas.

#### Entrada esperada

`01-saneamento/base-limpa.md` do pacote em andamento.

#### Fluxo

1. Leia `01-saneamento/base-limpa.md` por completo.
2. Extraia teses defendidas no material, com a frase ou trecho exato que as
comprova.
3. Extraia exemplos concretos, dados e números citados, sempre com a
   referência de onde apareceram no material.
4. Extraia dores e objeções mencionadas, e associe a uma persona de
   `context/publico.md` quando possível.
5. Extraia perguntas frequentes implícitas ou explícitas no material.
6. Extraia entidades citadas; produtos, serviços, pessoas, ferramentas; e
   confirme cada uma contra o `context/` correspondente; sinalize entidade
não cadastrada em vez de descrevê-la sem confirmação.
7. Identifique afirmações externas, dúvidas ou contrapontos que precisam de
   pesquisa. Use fontes atuais, prefira a origem primária e registre título,
   URL, responsável, publicação e data de acesso. Separe o que a fonte
   confirma da interpretação editorial.
8. Salve tudo em `02-pesquisa-e-ativos/ativos.md`, organizado por tipo de
   ativo (teses, exemplos, dores, objeções, FAQ, entidades), seguindo o
   template de `REFERENCIA.md`.
9. Execute `inboundfy-anti-slop` no marco A2 sobre os ativos extraídos e
   registre `06-auditoria/anti-slop-02-base-editorial.md`. O ciclo deve
   confirmar que os ativos continuam ligados às fontes e não viraram copy
   genérica.

#### Saída

`02-pesquisa-e-ativos/ativos.md`, dentro do diretório do pacote.

#### Validação

- Todo ativo extraído tem referência rastreável ao trecho de origem na base
  limpa.
- Todo ativo vindo de pesquisa externa tem fonte e data de acesso.
- Toda entidade citada foi checada contra `context/`; entidades não
  cadastradas estão sinalizadas, não inventadas.
- Nenhum ativo é uma reescrita com voz editorial; ainda é material bruto de
  repertório, não copy.
- O ciclo A2 foi registrado antes do planejamento de oportunidades.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Rodar novamente sobre o mesmo pacote atualiza `ativos.md` incorporando novos
ativos, sem descartar os já extraídos.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

##### Template de `ativos.md`

```markdown
#### Ativos editoriais; <slug-do-pacote>

##### Teses

- <tese defendida>; trecho de origem: "<citação exata>" (bloco N da base limpa)

##### Exemplos e dados

- <exemplo ou número citado>; origem: <bloco N>

##### Dores

- <dor mencionada>; persona relacionada: <persona de context/publico.md, ou "não identificada">

##### Objeções

- <objeção mencionada>; persona relacionada: <persona>

##### Perguntas frequentes (explícitas ou implícitas)

- <pergunta>

##### Entidades citadas

- <nome>; tipo: <produto | serviço | pessoa | ferramenta>; status: <confirmada em context/ | não cadastrada, sinalizar>
```

##### Exemplo preenchido (fictício)

```markdown
#### Ativos editoriais; cancelamento-primeiro-mes-estoque

##### Teses

- Cliente cancela no primeiro mês majoritariamente por não conseguir migrar
  o estoque antigo, não por insatisfação com o produto; trecho de origem:
  "a maioria liga achando que o sistema é ruim, mas quando a gente pergunta
  o motivo real é sempre a migração" (bloco 2 da base limpa).

##### Exemplos e dados

- 6 em cada 10 tickets de cancelamento no primeiro mês mencionam "migração"
  ou "importar planilha"; origem: bloco 3.

##### Dores

- Medo de perder o histórico de estoque ao trocar de sistema; persona
  relacionada: "gestor de pequeno varejo" (não confirmada em
  `context/publico.md` neste exemplo fictício).

##### Objeções

- "Meu estoque é muito bagunçado para migrar"; persona relacionada: mesma
  acima.

##### Perguntas frequentes

- Como faço para importar minha planilha de estoque atual?

##### Entidades citadas

- "Importador de planilha"; tipo: funcionalidade; status: não cadastrada
  em `context/produtos.md` neste exemplo; sinalizar para confirmação antes
  de qualquer peça final mencionar essa funcionalidade.
```

##### Checklist de qualidade

- [ ] Toda tese, exemplo, dor e objeção tem referência rastreável ao bloco
      de origem na base limpa.
- [ ] Toda entidade citada foi checada contra `context/`; entidade não
      cadastrada está sinalizada, não descrita como se fosse fato
      confirmado.
- [ ] Nenhum item do arquivo está escrito com voz editorial; ainda é
      registro de repertório, não copy.
- [ ] Dores e objeções, quando possível, estão conectadas a uma persona de
      `context/publico.md`.

##### Erros comuns

- Escrever os ativos já como parágrafo de copy pronto; o objetivo é
  repertório reutilizável, não rascunho de peça.
- Inventar dado ou estatística que soa plausível mas não está no material;   toda extração precisa de origem rastreável.
- Confirmar uma entidade citada como se já estivesse em `context/` sem
  checar de fato o arquivo correspondente.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 02 pesquisa dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 02 pesquisa

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
entrada: acervo/0042-2026-09-14-planejamento-02-pesquisa/processado.md
pedido: aplicar a etapa de planejamento 02 pesquisa e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 02 pesquisa

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

Use **inboundfy-planejamento** para executar esta função: Fase 2 do pipeline. Extrai ativos da base limpa e do context/ e pesquisa fontes externas quando houver afirmação atual, lacuna factual ou chance de enriquecimento, registrando proveniência para várias peças. Não escreve copy final.

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
