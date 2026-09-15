# Referências internas

## Etapa 02 campanha

### Inboundfy Estratégia; Plano de Campanha

Terceira etapa do grupo estratégico. Cruza objetivo, KPI, público e lacunas
de mercado em um plano de campanha: fases, temas por fase, mix de canal e
volume aproximado de peças; a ponte entre "por que a campanha existe" e
"que pacotes de conteúdo o pipeline vai produzir".

#### Escopo

Decide fase, tema e mix de canal da campanha. Não decide o calendário
recorrente entre campanhas (`inboundfy-estrategia`) nem o brief
individual de cada peça (`inboundfy-planejamento`, que roda dentro
do pipeline depois que o material da peça existir).

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

- `context/canais.md`, para verificar quais canais estão ativos e sua
  cadência técnica.
- `context/publico.md`, para alinhar tema por fase à jornada da persona
  prioritária.
- `context/ofertas.md`, quando a campanha girar em torno de um produto ou
  plano específico.

#### Entrada esperada

`00-briefing/brief-cliente.md` e `00-briefing/pesquisa-mercado.md` da mesma
campanha.

#### Fluxo

1. Leia o brief e a pesquisa de mercado da campanha.
2. Divida a campanha em fases (ex.: atração, consideração, conversão, ou
   fases próprias de um lançamento); nunca proponha canal solto sem fase.
3. Para cada fase, defina: tema central, canais envolvidos, volume
   aproximado de peças e a lacuna de mercado que a fase explora (referência
   à pesquisa).
4. Distribua o KPI da campanha em indicadores intermediários por fase
   quando fizer sentido (ex.: tráfego na fase de atração, leads na fase de
   consideração), sem inventar métrica que o cliente não acompanha.
5. Liste os pacotes de conteúdo que a campanha exige, cada um com fase,
   canal e tema; cada pacote listado aqui é o gatilho para abrir um
   diretório de pipeline em `inboundfy-planejamento` quando houver
   material bruto, ou para acionar `inboundfy-especialista-<canal>`
   diretamente quando for peça avulsa e rápida dentro da campanha.
6. Salve o plano em `<pacote-de-campanha>/01-plano/plano-de-campanha.md`,
   seguindo o template de `REFERENCIA.md`.
7. Apresente o plano para aprovação do usuário. Só depois de aprovado,
   acione `inboundfy-contexto-operacao` para atualizar
   `context/campanhas.md` com status "em execução" e o caminho do plano.

#### Saída

`<pacote-de-campanha>/01-plano/plano-de-campanha.md`.

#### Validação

- Toda fase tem tema, canal, volume aproximado e lacuna de mercado citada.
- KPI de campanha está refletido em indicador de pelo menos uma fase.
- Todo pacote de conteúdo listado aponta canal ativo em `context/canais.md`.
- Plano foi aprovado antes de campanha mudar status para "em execução".

#### Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Rodar novamente sobre a mesma campanha atualiza o plano incorporando fases
novas ou ajuste de KPI, preservando pacotes já em produção sem reordenar o
que já foi aprovado.

### Referência da etapa

#### REFERENCIA.md; inboundfy-estrategia

Template, exemplo completo e checklist do plano de campanha.

##### Template

```markdown
#### Plano de Campanha; <nome>

##### Fase 1; <nome da fase>

- **Tema central:** <tema>
- **Canais:** <lista>
- **Volume aproximado de peças:** <número por canal>
- **Lacuna de mercado explorada:** <referência a pesquisa-mercado.md>
- **Indicador intermediário:** <métrica de fase, se houver>
- **Pacotes de conteúdo:**
  - <canal>; <tema da peça>; <origem: material bruto existente ou peça
    avulsa>

<!-- Repita o bloco de fase para cada fase da campanha. -->
```

##### Exemplo preenchido (fictício)

```markdown
#### Plano de Campanha; Lançamento Estoquely Pro

##### Fase 1; Atração

- **Tema central:** dor de perder tempo com cadastro manual de estoque.
- **Canais:** blog, LinkedIn.
- **Volume aproximado de peças:** 3 posts de blog, 4 posts de LinkedIn.
- **Lacuna de mercado explorada:** concorrentes não falam do tempo perdido em
  digitação manual (ver pesquisa-mercado.md).
- **Indicador intermediário:** 5.000 visitas nos posts da fase.
- **Pacotes de conteúdo:**
  - blog; "quanto tempo um lojista perde digitando estoque"; peça avulsa.
  - LinkedIn; série de 4 posts sobre erros de controle manual; peça avulsa.

##### Fase 2; Consideração

- **Tema central:** cadastro por foto como diferencial verificável.
- **Canais:** email de nutrição, blog.
- **Volume aproximado de peças:** sequência de 3 emails, 1 post comparativo.
- **Lacuna de mercado explorada:** nenhum concorrente demonstra tempo de
  cadastro real.
- **Indicador intermediário:** 300 leads qualificados na sequência de email.
- **Pacotes de conteúdo:**
  - email; sequência de nutrição sobre cadastro por foto; peça avulsa.
  - blog; comparativo honesto de tempo de cadastro; material bruto: teste
    interno de tempo, a processar via inboundfy-planejamento.
```

##### Checklist de completude

- [ ] Toda fase tem tema, canal, volume e lacuna de mercado.
- [ ] KPI da campanha aparece refletido em pelo menos um indicador de fase.
- [ ] Todo pacote de conteúdo indica se nasce de material bruto (vai para o
      pipeline) ou é peça avulsa (vai direto para o especialista).
- [ ] Canais citados existem e estão ativos em `context/canais.md`.

##### Erros comuns

- Listar canal sem fase, tema ou volume; isso não é plano, é lista de
  desejos, e não dá para priorizar produção.
- Prometer volume de peças maior do que a cadência real do canal em
  `context/canais.md` suporta no período da campanha.
- Pular a etapa de aprovação e já registrar a campanha como "em execução" em
  `context/campanhas.md` antes do usuário validar o plano.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-estrategia**, do grupo
**estratégia**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de estrategia 02 campanha dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de estrategia 02 campanha

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
entrada: acervo/0042-2026-09-14-estrategia-02-campanha/processado.md
pedido: aplicar a etapa de estrategia 02 campanha e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de estrategia 02 campanha

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

Use **inboundfy-estrategia** para executar esta função: Terceira skill do grupo estratégico. Transforma brief de cliente e pesquisa de mercado em um plano de campanha multicanal; fases, temas, mix de canal e cadência de KPI. Não escreve peça nem calendário de execução recorrente (isso é inboundfy-estrategia); decide o quê e quando em nível de campanha, não o brief por peça (inboundfy-planejamento).

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
