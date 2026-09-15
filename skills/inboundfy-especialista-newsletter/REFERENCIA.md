# REFERENCIA.md; inboundfy-especialista-newsletter

Material de apoio para escrever edições de newsletter editorial longa.

## Template de estrutura de edição

```yaml
---
assunto: <quando distribuída por e-mail>
titulo: <quando publicada como artigo próprio>
description: <145-155 caracteres>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

# <Título da edição>

<Abertura reconhecível; situação ou observação real do período>

<Corpo; desenvolvimento de uma ou poucas ideias centrais>

<Seção de produto/ferramenta; opcional, só quando o brief pedir, com FAB>

<Fechamento; sem enfeite, com CTA único>
```

## Estrutura de edição por tipo

- **Edição de opinião/análise**: abertura situa o tema do período, corpo
  desenvolve uma tese central com exemplo interpretado, fechamento traz a
  posição do autor sem moralizar.
- **Edição de curadoria**: abertura conecta os itens por um fio comum (não
  uma lista solta), cada item comentado com uma frase de contexto real, não
  só um link.
- **Edição de lançamento/oferta**: segue a lógica de PASTOR de
  `inboundfy-especialista-email`, mas com desenvolvimento mais longo por bloco.

## Exemplo completo (fictício, edição de opinião)

Empresa fictícia: "Agenda Cronos".

```markdown
---
assunto: Por que a fila de espera não é sobre falta de gente
titulo: Por que a fila de espera não é sobre falta de gente
description: A fila de espera de uma clínica pequena quase nunca é sobre número de profissionais; é sobre como o tempo de cada um é encaixado na agenda.
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

# Por que a fila de espera não é sobre falta de gente

Toda clínica que reclama de fila de espera pensa primeiro em contratar mais
gente. Na prática, boa parte das filas que vejo têm origem em outro lugar:
o encaixe de horário que deixa quinze minutos ociosos entre uma consulta e
outra, multiplicado por semana, sem que ninguém perceba porque o buraco é
pequeno demais para chamar atenção isolado.

Esse tipo de perda só aparece quando alguém soma o mês inteiro. Um sistema
de agendamento que mostra o dia inteiro numa grade visual facilita enxergar
o buraco antes de ele virar hábito; não porque o sistema "otimiza"
sozinho, mas porque ele torna o problema visível para quem decide o
encaixe.

Contratar mais gente sem resolver o encaixe só desloca o problema para uma
agenda maior com o mesmo buraco proporcional.
```

## Checklist de canal

- [ ] Corpo em prosa contínua, sem fragmentação artificial em blocos curtos.
- [ ] Seção de produto (se houver) fecha em benefício real (FAB), não fica
      como anúncio solto no meio do texto editorial.
- [ ] CTA único no fechamento.

## Erros comuns

- Transformar a newsletter numa lista de tópicos picados só porque o e-mail
  "pede" escaneabilidade; o valor do canal é a leitura contínua.
- Misturar duas ideias centrais sem transição, deixando a edição sem fio
  condutor.
- Inserir seção de produto em toda edição mesmo quando o brief não pediu.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-newsletter**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista newsletter dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-newsletter
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista newsletter

## Resultado

{Conteúdo específico da etapa.}

## Pendências

- {pergunta ou "nenhuma"}

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-especialista-newsletter
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-newsletter/processado.md
pedido: aplicar a etapa de especialista newsletter e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

### Saída ilustrativa

```markdown
---
id: 0042
skill: inboundfy-especialista-newsletter
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-newsletter/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista newsletter

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-especialista-newsletter** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-newsletter** para executar esta função: Escreve newsletter longa e editorial (por e-mail ou publicação própria) a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md.

O grupo **especialista** trabalha com estes campos mínimos:

- **canal:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **objetivo:** preencher com dado ligado ao pedido.
- **formato:** preencher com dado ligado ao pedido.
- **validadora:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-especialista-newsletter
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-newsletter/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-newsletter
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-newsletter/brief.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **especialista** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `ESTRUTURAS-PERSUASIVAS.md`
- `CONTEXTO.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
