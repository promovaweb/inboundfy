# REFERENCIA.md; inboundfy-especialista-instagram

Material de apoio para legenda de post, carrossel textual e roteiro de
vídeo curto.

## Template de carrossel (PAS, slide a slide)

```yaml
---
formato: carrossel
brief: acervo/<id>-<data>-<slug>/base-editorial.md
---

Slide 1: <gancho; problema nomeado, poucas palavras>
Slide 2: <aprofunda o problema>
Slide 3: <agita a consequência concreta>
Slide 4: <consequência, segunda camada, se precisar>
Slide 5: <solução>
Slide 6: <CTA>
```

## Fórmulas de gancho por formato

- **Legenda de post**: "Sua recepção perde X minutos por dia com isso; e
  ninguém percebe." (dado + problema nomeado).
- **Carrossel (slide 1)**: pergunta ou afirmação curta que nomeia a dor sem
  explicar ainda; "O motivo real da sua fila de espera não é falta de
  gente" (arrasta para o slide 2).
- **Vídeo curto (fala nos 3 primeiros segundos)**: "Se sua clínica ainda usa
  caderno pra marcar consulta, isso vai acontecer com você"; gancho direto,
  sem introdução.

## Exemplo completo; carrossel (fictício)

```text
Slide 1: A fila de espera da sua clínica não é sobre falta de gente.

Slide 2: É sobre o buraco de 15 minutos entre uma consulta e outra que
ninguém nota, porque é pequeno demais isolado.

Slide 3: Multiplicado por semana, esse buraco vira hora perdida; e vira
paciente esperando mais do que deveria.

Slide 4: Contratar mais gente sem resolver o encaixe só desloca o mesmo
problema pra uma agenda maior.

Slide 5: O primeiro passo é enxergar o buraco: colocar a agenda inteira
numa grade visual em vez de linha por linha no caderno.

Slide 6: Quer ver como fica sua semana numa grade assim? Comenta "AGENDA"
que a gente te manda um exemplo.
```

## Checklist de canal

- [ ] Cada slide funciona isolado, mas a sequência tem progressão lógica.
- [ ] CTA aparece só no último slide (ou no fechamento da legenda/vídeo).
- [ ] Hashtags (quando usadas) são relacionadas ao tema real, não lista
      genérica copiada de outro post.
- [ ] Roteiro de vídeo curto tem duração compatível com o formato (fala
      objetiva, sem enrolação antes do gancho).

## Erros comuns

- Colocar CTA em mais de um slide, diluindo a ação esperada.
- Repetir a mesma informação em dois slides consecutivos só para preencher
  a contagem de slides do carrossel.
- Escrever carrossel como se fosse legenda de post cortada em pedaços, sem
  pensar em cada slide como unidade visual.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-instagram**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista instagram dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-instagram
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista instagram

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
skill: inboundfy-especialista-instagram
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-instagram/processado.md
pedido: aplicar a etapa de especialista instagram e entregar o próximo registro
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
skill: inboundfy-especialista-instagram
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-instagram/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista instagram

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

- Executar **inboundfy-especialista-instagram** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-instagram** para executar esta função: Escreve legenda de post, carrossel textual e roteiro de vídeo curto (Reels, Shorts, TikTok) a partir de um brief aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md.

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
skill: inboundfy-especialista-instagram
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-instagram/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-instagram
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-instagram/brief.md
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
