# REFERENCIA.md; inboundfy-especialista-ebook

Material de apoio para arquitetura editorial e escrita de capítulos de
ebook.

## Template de arquitetura

```yaml
---
titulo: <título do ebook>
promessa: <o que o leitor sabe fazer ou resolve ao terminar>
publico: <persona de context/publico.md>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Sumário
1. <Capítulo 1; o que entrega>
2. <Capítulo 2; o que entrega, diferente do capítulo 1>
3. <Capítulo 3; o que entrega, diferente dos anteriores>
```

Cada capítulo deve responder: o que este capítulo entrega que o anterior
não entregou? Se a resposta for vaga, a estrutura tem sobreposição e
precisa ser refeita.

## Exemplo de arquitetura (fictício)

Tema: migrar de agenda de papel para sistema numa clínica pequena.

```markdown
Promessa: o leitor sai sabendo se deve migrar, quando migrar e como evitar
o erro mais comum da transição.

1. Por que a agenda de papel custa mais do que parece (o problema invisível)
2. Os sinais de que chegou a hora de migrar (regra de escolha)
3. O erro mais comum na transição e como evitá-lo (execução)
```

## Exemplo de capítulo (fictício, trecho)

```markdown
# Capítulo 2; Os sinais de que chegou a hora de migrar

Nem toda clínica pequena precisa trocar de sistema agora. O sinal mais
confiável não é o tamanho da clínica; é quantas pessoas diferentes mexem
na mesma agenda ao longo do dia. Quando duas ou mais pessoas escrevem no
mesmo caderno em turnos diferentes, o possibilidade de marcar o mesmo horário duas
vezes cresce toda semana, mesmo que ninguém erre por descuido.

Esse tipo de conflito só aparece quando o paciente liga reclamando; e até
lá, ele já custou uma vaga perdida.
```

## Checklist de canal

- [ ] Cada capítulo tem entrega própria, sem repetir o anterior.
- [ ] Sumário reflete progressão lógica, não lista de tópicos soltos.
- [ ] Capítulo de abertura comercial (se houver) usa PAS; capítulo de
      fechamento comercial (se houver) usa AIDA compacto; ver Estrutura
      persuasiva em `SKILL.md`.
- [ ] Nenhum capítulo vira "dica rápida" fragmentada sem pedido explícito
      do brief.

## Erros comuns

- Definir sumário com capítulos que dizem a mesma coisa com títulos
  diferentes; teste: se dois capítulos pudessem trocar de ordem sem
  perda, a estrutura está fraca.
- Encher capítulo com repetição de tese para atingir tamanho, em vez de
  desenvolver com situação, mecanismo, exemplo e limite (ver `ESCRITA.md`).
- Inserir seção de produto em capítulo que o brief não marcou como
  comercial.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-ebook**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista ebook dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-ebook
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista ebook

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
skill: inboundfy-especialista-ebook
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-ebook/processado.md
pedido: aplicar a etapa de especialista ebook e entregar o próximo registro
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
skill: inboundfy-especialista-ebook
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-ebook/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista ebook

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

- Executar **inboundfy-especialista-ebook** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-ebook** para executar esta função: Escreve arquitetura e capítulos de ebook a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md em formato de livro curto.

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
skill: inboundfy-especialista-ebook
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-ebook/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-ebook
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-ebook/brief.md
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
