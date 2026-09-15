# REFERENCIA.md; inboundfy-especialista-webinar

Material de apoio para copy de página/convite de webinar em estrutura
PASTOR completa.

## Template PASTOR completo

```yaml
---
data: <data e horário>
apresentador: <de context/pessoas.md>
formato: <ao vivo|gravado>
estrutura: pastor
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Problema
<dor real da persona>

## Amplificar
<custo concreto de não resolver>

## História/Solução
<o que a sessão entrega e por que o apresentador é a pessoa certa>

## Testemunho
<resultado real de edição anterior, se existir; omitir se não houver>

## Oferta
<o que a inscrição inclui, data, formato>

## Resposta
<CTA de inscrição>
```

## Exemplo completo preenchido (fictício)

```markdown
---
data: 14 de outubro, 19h
apresentador: Marina Alves, especialista em operação de clínicas
formato: ao vivo
estrutura: pastor
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

## Problema

Toda semana, alguma clínica pequena perde paciente por conta de fila de
espera que ninguém planejou; ela simplesmente aconteceu, encaixe por
encaixe.

## Amplificar

Cada semana que passa sem revisar o encaixe da agenda é uma semana de
horas perdidas que não aparecem em relatório nenhum, só na sala de espera
lotada e no paciente que desiste de remarcar.

## História/Solução

Nessa sessão ao vivo, Marina Alves mostra como três clínicas pequenas
reduziram fila de espera sem contratar ninguém a mais, só reorganizando o
encaixe de horário a partir de uma grade visual da agenda inteira.

## Testemunho

Na última edição, participantes relataram identificar o próprio buraco de
agenda ainda durante a sessão, ao vivo, ao aplicar o exercício proposto.

## Oferta

Inscrição gratuita inclui acesso à sessão ao vivo, gravação por 30 dias e
uma planilha de diagnóstico de encaixe de agenda.

## Resposta

Inscreva-se e receba o link de acesso por e-mail antes do dia 14.
```

## Checklist de canal

- [ ] Os seis blocos do PASTOR estão presentes e na ordem certa (ou o bloco
      de Testemunho foi omitido por falta de dado real, nunca inventado).
- [ ] Apresentador confere com `context/pessoas.md`.
- [ ] Agenda/tópicos específicos, não genéricos o suficiente para qualquer
      webinar do mercado.
- [ ] Convite curto (quando usado) usa AIDA compacto, não o PASTOR inteiro.

## Erros comuns

- Inventar número de inscritos ou resultado de edição anterior para
  preencher o bloco de Testemunho.
- Prometer conteúdo que a sessão não vai entregar só para reforçar o bloco
  de Amplificar.
- Usar a mesma agenda de tópicos genérica em todo webinar do mesmo tema.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-webinar**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista webinar dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-webinar
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista webinar

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
skill: inboundfy-especialista-webinar
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-webinar/processado.md
pedido: aplicar a etapa de especialista webinar e entregar o próximo registro
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
skill: inboundfy-especialista-webinar
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-webinar/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista webinar

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

- Executar **inboundfy-especialista-webinar** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-webinar** para executar esta função: Escreve a copy de página ou convite de webinar/evento a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md.

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
skill: inboundfy-especialista-webinar
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-webinar/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-webinar
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-webinar/brief.md
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
