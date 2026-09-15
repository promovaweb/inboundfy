# Domínio canais

## Inboundfy Contexto; Canais

Mantém detalhes técnicos de canais ativos e apoia `inboundfy-planejamento` e
as skills de canal. A seleção principal vive em `.inboundfy/estrategia.md`.

### Escopo

Cobre `.inboundfy/estrategia.md` e a extensão `.inboundfy/context/canais.md`.

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

Leia `.inboundfy/estrategia.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/publico.md` e `SKILLS.md` para confirmar a seleção e os nomes
disponíveis.

### Entrada esperada

Definição do diretório de trabalho do pipeline, ativação/desativação de um
canal, ou ajuste de cadência e limites técnicos de um canal já ativo.

### Fluxo

1. Leia `.inboundfy/estrategia.md` e `context/canais.md` atual.
2. Confirme os canais Blog, Email, LinkedIn, Instagram, Substack e YouTube.
3. Para cada canal ativo, registre formato, cadência, limites técnicos,
   destino externo e especialista disponível em `SKILLS.md`.
4. Salve a escolha principal em `.inboundfy/estrategia.md` e os detalhes
   técnicos em `.inboundfy/context/canais.md`.

### Saída

Atualização de `context/canais.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Os diretórios de brainstorm e do pipeline estão definidos.
- Acervo, canais e calendário estão definidos antes de qualquer canal ser
  marcado como ativo.
- Toda skill de redação/imagem referenciada existe em `SKILLS.md`.
- Limites técnicos de formato estão preenchidos para canais ativos.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas o canal indicado na execução atual, preservando a
configuração dos demais canais.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-operacao

Roteiro de entrevista, exemplo preenchido e checklist para `context/canais.md`.

#### Roteiro de entrevista

1. "Quais canais estão ativos agora: Blog, Email, LinkedIn, Instagram,
   Substack ou YouTube?"
2. "Qual formato e limite técnico vale para cada canal ativo?"
3. Para cada canal ativo: "Qual é a cadência de publicação esperada?"
4. "Existe limite técnico de formato: tamanho de título, contagem de
   caracteres, proporção de imagem?"
5. "Onde o artefato final é publicado depois de pronto; CMS, planilha de
   handoff, pasta compartilhada?"

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
#### Diretórios de trabalho

- **Caminho do acervo:** acervo/
- **Caminho das peças:** canais/
- **Caminho do calendário:** calendario/

#### Blog

- **Ativo?** sim
- **Skill de redação:** inboundfy-especialista-blog
- **Skill de imagem:** inboundfy-especialista-blog-imagem
- **Cadência de publicação:** 1 post por semana
- **Formato e limites técnicos:** title 50-60 caracteres, capa 1200x800
- **Onde é publicado:** CMS próprio em exemplo-estoquely.com.br/blog

#### Instagram

- **Ativo?** sim
- **Skill de redação:** inboundfy-especialista-instagram
- **Skill de imagem:** inboundfy-especialista-instagram-imagem
- **Cadência de publicação:** 3 posts por semana, 1 carrossel por semana
- **Formato e limites técnicos:** legenda até 2.200 caracteres, imagem 1080x1350
- **Onde é publicado:** agendado manualmente pelo time de marketing

#### E-mail

- **Ativo?** não; planejado para o próximo trimestre
```

#### Checklist de completude

- [ ] Acervo, canais e calendário definidos.
- [ ] Cada canal ativo tem skill de redação (e de imagem, se aplicável)
      referenciando um nome real de `SKILLS.md`.
- [ ] Cadência e limites técnicos preenchidos para canais ativos; canal
      inativo pode ficar só com "Ativo? não".
- [ ] Destino de publicação registrado, mesmo que seja "handoff manual".

#### Erros comuns

- Ativar um canal sem preencher a skill de redação correspondente; isso
  impede `inboundfy-planejamento`, que depende desse
  mapeamento para rotear o brief.
- Inventar nome de skill que não existe em `SKILLS.md`; sempre confira o
  catálogo antes de registrar.
- Ativar canal sem definir formato, cadência e destino externo.
- Marcar cadência otimista demais sem confirmação real da capacidade do
  time; isso vira uma expectativa que o planejamento vai assumir como
  verdadeira.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-operacao**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto canais dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto canais

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
entrada: acervo/0042-2026-09-14-contexto-canais/processado.md
pedido: aplicar a etapa de contexto canais e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto canais

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

Use **inboundfy-contexto-operacao** para executar esta função: Mantém detalhes técnicos de canais ativos, formatos, cadência, limites e destinos, em apoio a estrategia.md e ao catálogo de canais do projeto.

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
entrada: .inboundfy/context/canais.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-operacao
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/canais.md
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
