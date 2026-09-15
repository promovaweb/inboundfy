# Referência de Dados estruturados

## Template

```markdown
# Dados estruturados

- **ID:** {{id}}
- **Objetivo:** {{objetivo}}
- **Persona:** {{persona}}
- **Canal:** {{canal}}
- **Acervo:** {{acervo}}
- **Fonte principal:** {{fonte}}
- **Próxima ação:** {{cta}}

## Plano

{{plano}}

## Pendências

{{pendencias}}
```

## Guia específico

Escolha o tipo de schema pelo conteúdo real da página. Preencha somente propriedades confirmadas, teste JSON válido, confira URL canônica e alinhe marca, autor, data e oferta.

## Exemplo ilustrativo

Uma empresa de software pode usar este modelo para organizar uma ação de teste com uma persona específica, ligar cada mensagem a um acervo e registrar a página de destino sem afirmar resultados ainda não medidos.

## Checklist

- [ ] ID e objetivo estão presentes.
- [ ] Persona, canal e acervo estão vinculados.
- [ ] Fontes e pendências estão localizadas.
- [ ] Voz, proibições e dicionário foram conferidos.
- [ ] Próxima ação e estado do pipeline estão claros.

## Erros comuns

- Começar pelo formato antes de confirmar objetivo, público e fonte.
- Usar promessa, preço, número ou nome sem registro local.
- Aplicar a mesma mensagem a personas com contextos diferentes.
- Salvar o resultado sem caminho, ID ou alcance da escolha.

## Relação com inboundfy-dados-estruturados

Use este modelo como roteiro mínimo e acrescente apenas campos pedidos pelo projeto. O arquivo final deve ficar ligado ao acervo, à peça e ao calendário quando houver data.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-dados-estruturados**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de dados estruturados dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-dados-estruturados
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de dados estruturados

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
skill: inboundfy-dados-estruturados
grupo: capacidade
entrada: acervo/0042-2026-09-14-dados-estruturados/processado.md
pedido: aplicar a etapa de dados estruturados e entregar o próximo registro
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
skill: inboundfy-dados-estruturados
estado: aprovado
entrada: acervo/0042-2026-09-14-dados-estruturados/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de dados estruturados

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

- Executar **inboundfy-dados-estruturados** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-dados-estruturados** para executar esta função: Organiza dados estruturados e JSON-LD a partir de fatos confirmados do site, produto, organização, artigo ou evento.

O grupo **capacidade** trabalha com estes campos mínimos:

- **objetivo:** preencher com dado ligado ao pedido.
- **entrada:** preencher com dado ligado ao pedido.
- **contexto:** preencher com dado ligado ao pedido.
- **resultado:** preencher com dado ligado ao pedido.
- **próxima ação:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-dados-estruturados
grupo: capacidade
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/empresa.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-dados-estruturados
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **capacidade** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `README.md`
- `CONTEXTO.md`
- `SKILL-AUTORIA.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
