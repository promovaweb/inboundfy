# REFERENCIA.md; inboundfy-especialista-infografico

Material de apoio para o texto de infográfico; título, blocos, legenda e
alt text.

## Template de bloco visual

```yaml
---
titulo: <título curto da tese central>
fonte-dos-dados: <origem rastreável de cada dado>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

Bloco 1: <dado ou característica curta>
Bloco 2: <dado ou característica curta>
Bloco 3: <dado ou característica curta>

Legenda: <texto de acompanhamento em prosa, para post que compartilha a peça>
Alt text: <descrição da imagem para leitor de tela>
```

## Exemplo completo (fictício)

Tema: custo da agenda de papel numa clínica pequena.

```markdown
Título: O custo escondido da agenda de papel

Bloco 1: 15 min perdidos por buraco de agenda não visto; fonte: levantamento interno com 12 clínicas parceiras, 2025.
Bloco 2: 2x mais chance de marcação duplicada com 2+ pessoas na mesma agenda; fonte: mesmo levantamento.
Bloco 3: 1 grade visual substitui a conferência manual de horário; fonte: comparação de fluxo operacional.

Legenda: A agenda de papel custa tempo que não aparece na planilha do mês; aparece na fila de espera e na marcação duplicada. Levantamos com clínicas
parceiras onde esse custo mais aparece.

Alt text: Infográfico comparando o tempo perdido e o possibilidade de marcação
duplicada entre agenda de papel e agenda em sistema, com três blocos de
dado.
```

## Checklist de canal

- [ ] Todo dado numérico tem fonte rastreável; nunca estatística inventada
      ou "estudos mostram" sem origem.
- [ ] Blocos são telegráficos por escolha de canal, não por preguiça; cada
      um ainda precisa ser compreensível isolado.
- [ ] Legenda de acompanhamento passa pela auditoria de prosa
      (`inboundfy-copy-editor`); os blocos curtos não passam pela mesma régua.
- [ ] Alt text descreve a imagem de forma útil, não repete o título.

## Erros comuns

- Inflar bloco com adjetivo vazio ("incrível redução de X%") em vez de
  número com fonte.
- Escrever a legenda como se fosse o texto completo do infográfico;   legenda complementa, não repete os blocos.
- Alt text genérico ("infográfico sobre agenda") que não descreve o
  conteúdo real da imagem.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-infografico**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista infografico dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-infografico
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista infografico

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
skill: inboundfy-especialista-infografico
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-infografico/processado.md
pedido: aplicar a etapa de especialista infografico e entregar o próximo registro
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
skill: inboundfy-especialista-infografico
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-infografico/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista infografico

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

- Executar **inboundfy-especialista-infografico** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-infografico** para executar esta função: Escreve a copy final de infográfico a partir de um brief aprovado (fase 5 do pipeline); título, blocos visuais, legenda e alt text, curta e factual, sem prosa longa.

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
skill: inboundfy-especialista-infografico
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-infografico/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-infografico
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-infografico/brief.md
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
