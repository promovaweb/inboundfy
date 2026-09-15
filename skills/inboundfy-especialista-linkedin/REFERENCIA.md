# REFERENCIA.md; inboundfy-especialista-linkedin

Material de apoio para post nativo e artigo longo de LinkedIn.

## Template de frontmatter

```yaml
---
formato: <post|artigo>
autor: <nome de context/pessoas.md, se houver>
estrutura: <aida|pas|nenhuma>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---
```

Corpo do post nativo: texto puro, sem nenhum símbolo de Markdown, pronto
para colar direto no campo de post.

## Fórmulas de gancho (primeira linha, antes do "ver mais")

1. **Confissão de erro real**: "Passei dois anos vendendo agenda de papel
   como 'suficiente para clínica pequena'. Eu estava errado, e o motivo não
   é o que parece."; funciona quando há autor definido com autoridade real.
2. **Dado contraintuitivo**: "A clínica que mais perde paciente por fila não
   é a menor. É a que tem mais gente mexendo na mesma agenda."; precisa de
   dado ou observação real, não estatística inventada.
3. **Cena reconhecível**: "Recepção lotada, telefone tocando, e alguém
   procurando um nome na página errada do caderno."; abre pela imagem, não
   pela tese.

## Exemplo completo; post nativo com AIDA (fictício)

```text
Passei dois anos ouvindo donos de clínica dizerem que "caderno resolve" pra
agenda pequena.

Não resolve. E o motivo não é velocidade; é que duas pessoas escrevendo no
mesmo caderno em turnos diferentes vão marcar o mesmo horário pra pacientes
diferentes, mais cedo ou mais tarde.

Esse erro só aparece quando o paciente liga reclamando. Até lá, já custou
uma vaga e uma recepção pedindo desculpa.

Se sua clínica tem mais de uma pessoa mexendo na agenda, vale conferir
quantas vezes isso já aconteceu esse mês; a resposta costuma surpreender.

Como você lida com esse tipo de conflito de horário hoje?
```

## Checklist de canal

- [ ] Post nativo sem nenhuma sintaxe Markdown (`#`, `**`, `[]()`).
- [ ] Primeira linha funciona sozinha, sem depender do "ver mais" para fazer
      sentido.
- [ ] Quando há autor, o texto está em primeira pessoa e dentro da
      competência registrada em `context/pessoas.md`.
- [ ] Fechamento com CTA claro ou pergunta genuína; nunca as duas coisas
      competindo.

## Erros comuns

- Deixar `**negrito**` ou `#heading` no corpo copiável; quebra a renderização
  no LinkedIn e expõe a sintaxe crua.
- Assinar post técnico com pessoa sem competência registrada no tema (ver
  `context/pessoas.md`).
- Fechar com pergunta retórica óbvia ("concorda?") em vez de pergunta que
  gera resposta real.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-linkedin**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista linkedin dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-linkedin
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista linkedin

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
skill: inboundfy-especialista-linkedin
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-linkedin/processado.md
pedido: aplicar a etapa de especialista linkedin e entregar o próximo registro
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
skill: inboundfy-especialista-linkedin
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-linkedin/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista linkedin

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

- Executar **inboundfy-especialista-linkedin** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-linkedin** para executar esta função: Escreve post nativo ou artigo longo de LinkedIn a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md, sempre em primeira pessoa quando o brief indicar autor, e sem Markdown no corpo copiável do post.

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
skill: inboundfy-especialista-linkedin
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-linkedin/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-linkedin
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-linkedin/brief.md
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
