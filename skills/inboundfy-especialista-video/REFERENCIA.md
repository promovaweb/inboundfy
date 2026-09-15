# REFERENCIA.md; inboundfy-especialista-video

Material de apoio para roteiro de vídeo longo e outline de talking head.

## Template de cena numerada

```yaml
---
formato: <estruturado|talking-head>
apresentador: <de context/pessoas.md, se houver>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Cena 1; Gancho (0:00-0:15)
Fala: <texto falado, ritmo de fala real>
Apoio visual: <o que mostrar na tela>

## Cena 2; <nome da cena>
Fala: <texto>
Apoio visual: <indicação mínima>
```

## Fórmulas de gancho (primeiros 15 segundos)

1. **Demonstração direta**: "Isso aqui é o que acontece quando duas pessoas
   marcam consulta no mesmo horário sem saber" (mostra o problema em tela).
2. **Pergunta que a persona já se fez**: "Por que sua agenda sempre trava
   justo na segunda de manhã?"
3. **Contraste de resultado**: "Uma clínica com a mesma equipe reduziu fila
   de espera sem contratar ninguém. Foi assim."

## Exemplo; outline de talking head (fictício)

```markdown
## Tópico 1; Gancho
Fala: Toda clínica pequena acha que fila de espera é problema de gente.
Não é sempre.
Apoio visual: nenhum, fala direta para câmera.

## Tópico 2; O buraco de 15 minutos
Fala: explicar o encaixe de horário, o buraco que ninguém nota isolado, e
como ele se acumula ao longo da semana.
Apoio visual: mostrar grade de agenda com buracos destacados.

## Tópico 3; O que muda ao enxergar isso
Fala: falar sobre como visualizar a agenda inteira muda a forma de encaixar
horário, sem prometer resultado genérico.
Apoio visual: comparação antes/depois da grade de agenda.

## Tópico 4; Fechamento
Fala: convite a comentar ou acessar um material específico sobre o tema.
```

## Checklist de canal

- [ ] Gancho apresenta o objeto real do vídeo nos primeiros segundos, sem
      introdução institucional.
- [ ] Texto falado soa como fala, não como texto de artigo lido em voz alta.
- [ ] Apoio visual é indicação mínima, não roteiro de edição completo.
- [ ] Apresentador, quando definido, fala dentro da competência registrada.

## Erros comuns

- Escrever o roteiro como texto de blog e só quebrar em cenas depois; o
  ritmo de fala precisa ser pensado desde a primeira frase.
- Prescrever corte, transição ou efeito de edição; isso é fora do escopo
  desta skill.
- Deixar o gancho genérico ("hoje vamos falar sobre...") em vez de entrar
  direto no objeto.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-video**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista video dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-video
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista video

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
skill: inboundfy-especialista-video
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-video/processado.md
pedido: aplicar a etapa de especialista video e entregar o próximo registro
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
skill: inboundfy-especialista-video
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-video/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista video

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

- Executar **inboundfy-especialista-video** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-video** para executar esta função: Escreve roteiro de vídeo longo e talking head a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md, com cenas e apoio visual mínimo.

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
skill: inboundfy-especialista-video
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-video/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-video
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-video/brief.md
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
