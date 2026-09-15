# Referências internas

## Etapa 01 pesquisa mercado

### Inboundfy Estratégia; Pesquisa de Mercado

Investiga o que já existe no mercado antes de `inboundfy-estrategia`
decidir ângulo e canal. Diferente de `inboundfy-contexto-concorrentes`, que
apenas guarda o cadastro estático de um concorrente, esta skill analisa o
que o mercado está publicando agora, onde há espaço aberto e onde o
usuário chegaria atrasado.

#### Escopo

Produz uma análise de mercado para uma campanha específica; não mantém
dado permanente de `context/` sozinha (aciona `inboundfy-contexto-concorrentes`
quando encontra concorrente novo ou informação desatualizada) e não decide
canal nem tema final (isso é `inboundfy-estrategia`).

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

- `context/concorrentes.md`, como ponto de partida do que já se sabe.
- `context/publico.md`, para pesquisar sob a ótica da persona prioritária,
  não de forma genérica.
- `context/ferramentas.md`, quando a pesquisa envolver comparação de stack.

#### Entrada esperada

`00-briefing/brief-cliente.md` da campanha em andamento, ou um tema/mercado
indicado diretamente pelo usuário para pesquisa avulsa.

#### Fluxo

1. Leia o brief da campanha e `context/concorrentes.md`.
2. Pesquise o que concorrentes diretos e indiretos estão publicando
   atualmente sobre o tema da campanha; ângulo, canal, frequência,
   engajamento aparente. Use a ficha de pesquisa de `REFERENCIA.md`.
3. Identifique lacunas: pergunta da persona que ninguém está respondendo
   bem, formato subutilizado, momento de mercado (sazonalidade, mudança de
   regra, lançamento de categoria).
4. Separe explicitamente fato observável (o que o concorrente publicou, com
   link ou referência) de interpretação (por que isso parece funcionar);    nunca apresente hipótese como dado confirmado.
5. Quando encontrar concorrente novo ou dado desatualizado em
   `context/concorrentes.md`, pare e acione `inboundfy-contexto-concorrentes`
   antes de fechar a análise.
6. Salve a análise em `<pacote-de-campanha>/00-briefing/pesquisa-mercado.md`.

#### Saída

`<pacote-de-campanha>/00-briefing/pesquisa-mercado.md`.

#### Validação

- Toda observação de concorrente cita a fonte (link, data de acesso).
- Fato e interpretação estão em seções separadas, não misturados.
- Análise aponta pelo menos uma lacuna de mercado acionável, não apenas um
  resumo do que já existe.

#### Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano ou calendário; copy final pertence à produção.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Rodar novamente sobre a mesma campanha atualiza a análise incorporando
pesquisa nova, sem descartar lacunas já identificadas e ainda válidas.

### Referência da etapa

#### REFERENCIA.md; inboundfy-estrategia

Ficha de pesquisa, exemplo completo e checklist de análise de mercado.

##### Ficha de pesquisa por concorrente/tema

```markdown
###### <Concorrente ou tema pesquisado>

- **O que estão publicando:** <resumo, com link/fonte e data de acesso>
- **Canal e formato:** <onde e como>
- **Frequência aparente:** <cadência observada>
- **Ângulo usado:** <que argumento ou promessa central>
- **Sinal de engajamento observável:** <comentários, compartilhamentos,
  ou "não observável"; nunca invente número>
- **Interpretação (hipótese, não fato):** <por que isso parece funcionar ou
  não, claramente marcado como leitura da equipe>
```

##### Exemplo preenchido (fictício)

```markdown
###### EstoqueFácil; blog

- **O que estão publicando:** série de posts comparando planilha vs sistema,
  publicados semanalmente (fonte: blog.estoquefacil.example, acesso em
  2026-07-20).
- **Canal e formato:** blog, artigos de 1200-1500 palavras.
- **Frequência aparente:** semanal, últimas 8 semanas.
- **Ângulo usado:** "você não precisa trocar de planilha, só organizá-la
  melhor"; foco em não gerar fricção de migração.
- **Sinal de engajamento observável:** não observável publicamente.
- **Interpretação (hipótese, não fato):** parecem evitar o argumento de
  substituição total da planilha porque o público-alvo já tem resistência a
  trocar de ferramenta; pode ser um ângulo que o usuário ainda não está
  usando.
```

##### Lacunas de mercado; perguntas guia

- Que dúvida da persona (`context/publico.md`) nenhum concorrente respondeu
  com profundidade?
- Que formato (vídeo curto, infográfico, ferramenta interativa) os
  concorrentes não usam, mas a persona consome em outros contextos?
- Existe uma mudança recente (regra, tecnologia, sazonalidade) que ainda não
  virou conteúdo de ninguém no nicho?

##### Checklist de completude

- [ ] Toda observação de concorrente tem fonte e data de acesso.
- [ ] Fato e interpretação estão em campos separados.
- [ ] Pelo menos uma lacuna de mercado acionável foi identificada.
- [ ] Concorrente novo ou dado desatualizado foi encaminhado para
      `inboundfy-contexto-concorrentes`.

##### Erros comuns

- Apresentar suposição ("provavelmente estão convertendo bem") como dado
  confirmado; isso engana `inboundfy-estrategia` na priorização.
- Pesquisar de forma genérica, sem ancorar na persona prioritária do brief;   gera lacuna irrelevante para o objetivo da campanha.
- Repetir cadastro que já existe em `context/concorrentes.md` em vez de
  aprofundar o que há de novo desde o último registro.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-estrategia**, do grupo
**estratégia**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de estrategia 01 pesquisa mercado dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de estrategia 01 pesquisa mercado

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
entrada: acervo/0042-2026-09-14-estrategia-01-pesquisa-mercado/processado.md
pedido: aplicar a etapa de estrategia 01 pesquisa mercado e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de estrategia 01 pesquisa mercado

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

Use **inboundfy-estrategia** para executar esta função: Segunda skill do grupo estratégico. Pesquisa ativamente mercado, tendências e conteúdo de concorrentes para embasar uma campanha, a partir do brief de inboundfy-estrategia. Não mantém cadastro de concorrentes (isso é inboundfy-contexto-concorrentes); produz análise para escolha.

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
