# REFERENCIA.md; inboundfy-especialista-blog

Material de apoio para escrever artigos de blog que respondem intenção de
busca real, com FAB aplicado a qualquer menção de produto.

## Template de frontmatter e estrutura

```yaml
---
title: <50-60 caracteres>
description: <145-155 caracteres, com CTA>
slug: <curto, sem stop words>
focus-keyword: <intenção validada por inboundfy-base-seo>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

# <H1; mesma intenção do title>

<corpo em prosa contínua, hierarquia H2/H3>
```

## Fórmulas de abertura por intenção

1. **Informativa**; abra pelo objeto e pela confusão comum: "Confundir X
   com Y é o erro mais comum de quem começa a fazer [tarefa]. A diferença
   está em [mecanismo real]." Não abra com "o que é X" seguido de definição
   de dicionário.
2. **Comparativa**; abra pelo regra de escolha, não pelos dois lados:
   "A escolha entre X e Y quase nunca é sobre qual é melhor; é sobre qual
   erro custa mais caro no seu caso." Depois desenvolva o regra.
3. **Investigativa**; abra reconhecendo a dúvida legítima: "Vale a pena
   trocar de sistema no meio do ano? Depende do que está doendo hoje, não
   do que promete o vendedor." Depois traga prova dos dois lados.

## Exemplo completo (fictício)

Empresa fictícia: "Agenda Cronos", software de agendamento para clínicas
pequenas. Intenção: investigativa ("vale a pena migrar de agenda de papel
para um sistema?").

```markdown
---
title: Migrar da agenda de papel para um sistema: vale a pena?
description: Comparamos o custo real de manter agenda de papel numa clínica pequena com o de migrar para um sistema, incluindo o que costuma dar errado na troca.
slug: migrar-agenda-papel-sistema-vale-a-pena
focus-keyword: vale a pena migrar agenda de papel para sistema
---

# Migrar da agenda de papel para um sistema: vale a pena?

Uma recepção que ainda usa caderno de agendamento perde hora de atendimento
todo santo dia em telefonema de confirmação e remarcação escrita a lápis. O
custo não aparece na planilha do mês, mas aparece na fila de pessoas
esperando enquanto alguém procura o nome certo na página certa.

A pergunta não é se um sistema resolve isso; resolve. A pergunta é quando
compensa trocar, porque toda migração tem um período no qual a equipe erra
mais até se acostumar com o novo fluxo.

## Quando a troca compensa

Se a clínica agenda mais de trinta consultas por semana e tem mais de uma
pessoa mexendo na mesma agenda, o caderno já criou um problema que nenhum
treinamento resolve: duas pessoas escrevendo no mesmo horário sem ver a
letra uma da outra. Um sistema de agendamento resolve isso mostrando o
horário ocupado em tempo real para quem estiver com a tela aberta, o que
elimina o double-booking sem depender de conferência manual.

## O que costuma dar errado na migração

A falha mais comum não é o sistema; é a recepção continuar anotando no
caderno "por garantia" nas primeiras semanas, o que cria duas fontes de
verdade e apaga o ganho da migração. O jeito de evitar isso é definir uma
data de corte clara e desligar o caderno de vez, não aos poucos.
```

## Checklist de canal

- [ ] Um H1 só, com a mesma intenção do `title`.
- [ ] Nenhum heading em formato pergunta-resposta genérica.
- [ ] Toda menção de produto/serviço fecha em benefício real (FAB), não
      fica solta como propaganda.
- [ ] `brief` presente no frontmatter quando parte de pacote.

## Erros comuns

- Escrever o artigo inteiro antes de rodar `inboundfy-base-seo`; o title e o
  slug mudam o ângulo do artigo, não só a metadata.
- Repetir a mesma estrutura de abertura em todo artigo do mesmo pacote (ver
  `ESCRITA.md` sobre reaproveitamento mecânico entre peças do mesmo pacote).
- Prometer resultado de produto sem base em `context/produtos.md` só para
  soar mais persuasivo; isso é o oposto do que FAB pede.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-blog**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista blog dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-blog
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista blog

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
skill: inboundfy-especialista-blog
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-blog/processado.md
pedido: aplicar a etapa de especialista blog e entregar o próximo registro
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
skill: inboundfy-especialista-blog
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-blog/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista blog

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

- Executar **inboundfy-especialista-blog** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-blog** para executar esta função: Escreve ou edita artigos de blog a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md, a voz de context/marca-voz.md e a intenção de busca validada por inboundfy-base-seo. Não decide estratégia nem pauta; recebe o brief pronto.

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
skill: inboundfy-especialista-blog
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-blog/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-blog
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-blog/brief.md
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
