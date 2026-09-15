# REFERENCIA.md; inboundfy-especialista-email

Material de apoio para escrever e-mail avulso, de nutrição, convite ou
follow-up nos três formatos de estrutura persuasiva já definidos no
`SKILL.md` (AIDA, PAS, PASTOR).

## Template de frontmatter

```yaml
---
assunto: <curto, específico, sem clickbait>
pre-header: <complementa o assunto, nunca repete>
estrutura: <aida|pas|pastor|nenhuma>
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---
```

## Fórmulas de assunto

1. **Curiosidade específica** (não vaga): "O erro que some da agenda sem
   ninguém perceber"; nomeia um objeto real, não "você não vai acreditar".
2. **Benefício direto**: "Menos telefonema de confirmação por semana";    ganho concreto, sem adjetivo inflado.
3. **Urgência real** (só quando houver prazo verdadeiro):
   "Condição de setembro termina sexta"; nunca invente prazo falso.
4. **Pergunta genuína**: "Quantas vezes a agenda trocou de mão essa semana?"
; pergunta que a persona realmente se faz, não retórica de efeito.

## Exemplo completo; PAS (fictício)

Empresa fictícia: "Agenda Cronos". E-mail de nutrição, etapa inicial da
jornada.

```markdown
---
assunto: O erro que some da agenda sem ninguém perceber
pre-header: Duas pessoas escrevendo no mesmo caderno criam esse problema toda semana.
estrutura: pas
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

Duas pessoas mexendo na mesma agenda de papel, em turnos diferentes, vão
marcar o mesmo horário para pacientes diferentes mais cedo ou mais tarde; não porque alguém errou, mas porque o caderno não avisa quando o horário já
foi ocupado por outra pessoa.

Esse erro só aparece quando o paciente liga reclamando, e até lá ele já
custou uma vaga perdida e uma recepção pedindo desculpa ao telefone. Quanto
mais gente mexe na mesma agenda, mais vezes isso se repete por semana.

A forma de eliminar esse erro é tirar a agenda do papel e colocar num lugar
que mostra o horário ocupado assim que alguém marca; não depois, na hora
da conferência manual.
```

## Checklist de canal

- [ ] Assunto e pré-header não repetem a mesma frase.
- [ ] Um único CTA; nunca dois pedidos concorrentes no mesmo e-mail.
- [ ] Estrutura registrada no frontmatter corresponde aos blocos realmente
      presentes no corpo.
- [ ] Testemunho ausente (PASTOR) foi omitido, não inventado.

## Erros comuns

- Escrever assunto com clickbait vazio ("você não vai acreditar"); quebra
  confiança e não corresponde ao corpo.
- Usar PASTOR completo em e-mail curto de nutrição; o formato longo cansa
  quando a intenção era só reforçar um ponto.
- Colocar dois CTAs (ex.: "responda este e-mail" e "clique aqui") disputando
  atenção no mesmo fechamento.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-email**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista email dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-email
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista email

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
skill: inboundfy-especialista-email
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-email/processado.md
pedido: aplicar a etapa de especialista email e entregar o próximo registro
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
skill: inboundfy-especialista-email
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-email/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista email

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

- Executar **inboundfy-especialista-email** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-email** para executar esta função: Escreve e-mail avulso, de nutrição, convite ou follow-up a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md. Não decide sequência de nutrição; isso vem do brief.

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
skill: inboundfy-especialista-email
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-email/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-email
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-email/brief.md
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
