# REFERENCIA.md; inboundfy-especialista-changelog

Material de apoio para traduzir mudança técnica em entrada de changelog
legível.

## Template de entrada

```yaml
---
data: <data do release>
tipo: <novidade|melhoria|correcao>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## <Nome da funcionalidade ou área afetada>

<O que mudou, em uma ou duas frases diretas>

<Por que importa para quem usa>

<Ação necessária, se houver; ou "nenhuma ação necessária">
```

## Exemplo completo (fictício)

```markdown
---
data: 2026-03-10
tipo: melhoria
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Grade visual de agenda

A visualização da agenda agora mostra o dia inteiro numa grade única, com
os horários ocupados destacados, em vez da lista sequencial por paciente.

Isso facilita ver de uma vez os buracos entre consultas que antes só
apareciam ao rolar a lista item por item; útil para quem organiza o
encaixe de horário na recepção.

Nenhuma ação necessária: a grade aparece automaticamente na próxima vez que
a agenda for aberta.
```

## Checklist de canal

- [ ] Nome de produto/funcionalidade confere com `context/produtos.md` e
      `context/glossario.md`.
- [ ] Diz claramente o que mudou, para quem importa e se há ação necessária.
- [ ] Sem jargão de commit interno ("refatora módulo X", "fix de race
      condition"); traduza para o efeito visível ao usuário.
- [ ] Classificação de tipo (novidade/melhoria/correção) condiz com a
      mudança descrita.

## Erros comuns

- Copiar a mensagem de commit ou pull request como se fosse a entrada final
; o changelog é para o usuário, não para o time técnico.
- Omitir a ação necessária quando ela existe (ex.: "é preciso reconectar a
  integração X").
- Descrever a mudança em termos vagos ("melhorias de performance") sem
  dizer o que o usuário percebe na prática.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-changelog**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista changelog dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-changelog
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista changelog

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
skill: inboundfy-especialista-changelog
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-changelog/processado.md
pedido: aplicar a etapa de especialista changelog e entregar o próximo registro
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
skill: inboundfy-especialista-changelog
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-changelog/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista changelog

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

- Executar **inboundfy-especialista-changelog** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-changelog** para executar esta função: Escreve entrada de changelog ou release note a partir de um brief aprovado (fase 5 do pipeline) ou diretamente de um release de produto. Aplica ESCRITA.md e a voz de context/marca-voz.md.

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
skill: inboundfy-especialista-changelog
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-changelog/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-changelog
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-changelog/brief.md
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
