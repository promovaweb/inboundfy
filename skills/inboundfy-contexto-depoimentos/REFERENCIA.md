# REFERENCIA.md; inboundfy-contexto-depoimentos

## Template

```json
{
  "id": "depo-0001",
  "nome": "{{nome completo}}",
  "cargo": "{{cargo ou \"\"}}",
  "empresa": "{{empresa}}",
  "depoimento": "{{citação literal}}",
  "foto": "{{caminho ou URL ou \"\"}}",
  "fonte": "{{entrevista, review, e-mail, formulário}}",
  "data": "{{AAAA-MM-DD}}",
  "consentimento": "{{autorizado|pendente|revogado}}",
  "canaisAutorizados": ["{{website|linkedin|email|instagram|...}}"],
  "produtoMencionado": "{{nome do produto, serviço ou plano, ou \"\"}}",
  "resultadoMencionado": "{{número ou resultado citado, ou \"\"}}"
}
```

## Exemplo

Entrada fictícia ("Estoquely"): Marina Alves, cofundadora, manda um e-mail
agradecendo o suporte e cita que reduziu quase a metade do tempo de inventário
desde que adotou o Plano Pro. A skill confirma que o e-mail autoriza uso em
site e LinkedIn, grava a citação literal e aponta a foto enviada em anexo.

```json
{
  "id": "depo-0007",
  "nome": "Marina Alves",
  "cargo": "Cofundadora",
  "empresa": "Estoquely",
  "depoimento": "Desde que migramos para o Plano Pro, o tempo que a gente gastava contando estoque caiu quase pela metade.",
  "foto": "assets/depoimentos/estoquely-marina-alves.jpg",
  "fonte": "e-mail de agradecimento, 2026-10-10",
  "data": "2026-10-10",
  "consentimento": "autorizado",
  "canaisAutorizados": ["website", "linkedin"],
  "produtoMencionado": "Plano Pro",
  "resultadoMencionado": "reduziu quase pela metade o tempo de contagem de estoque"
}
```

## Checklist

- [ ] O texto do `depoimento` é citação literal, sem paráfrase ou ajuste de
      tom.
- [ ] `consentimento` e `canaisAutorizados` estão preenchidos ou marcados
      como pendentes.
- [ ] Nome e empresa identificam a pessoa sem ambiguidade com outro registro.
- [ ] `fonte` e `data` permitem rastrear a origem do depoimento.
- [ ] `id` é único e segue a sequência existente no arquivo.
- [ ] Nenhum depoimento existente foi removido, reescrito ou teve o
      consentimento alterado sem pedido explícito do usuário.

## Erros comuns

- Reescrever a fala do cliente para parecer mais "redonda"; isso destrói a
  prova social, que vale exatamente pela voz real do cliente.
- Gravar um depoimento com `consentimento: "autorizado"` sem confirmação
  explícita de quem pode autorizar uso público.
- Perder o vínculo entre o depoimento e o produto, plano ou resultado citado,
  quando esse dado existe na fala do cliente.
- Duplicar o mesmo depoimento com um novo `id` em vez de atualizar o
  registro existente.
- Publicar um depoimento com `canaisAutorizados` vazio ou `consentimento:
  "pendente"` numa peça pública.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-depoimentos**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de contexto depoimentos dentro do fluxo do Inboundfy.
- **Entrada mínima:** resposta do usuário ou arquivo canônico do domínio.
- **Saída mínima:** arquivo de contexto atualizado e registro da alteração.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Template de operação

```markdown
---
id: {{id}}
skill: inboundfy-contexto-depoimentos
estado: rascunho
entrada: {{caminho ou ID}}
fontes:
  - {{caminho}}
proxima_skill: {{nome ou "pendente de confirmação"}}
---

# Registro de contexto depoimentos

## Resultado

{{Conteúdo específico da etapa.}}

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho do arquivo seguinte}}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-contexto-depoimentos
grupo: contexto
entrada: {{caminho ou ID ligado ao pedido}}
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
skill: inboundfy-contexto-depoimentos
estado: aprovado
entrada: {{caminho ou ID ligado ao pedido}}
fontes:
  - .inboundfy/context/depoimentos.json
proxima_skill: {{skill seguinte ou "pendente de confirmação"}}
---

# Registro de contexto depoimentos

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{{verbo + objeto + caminho do arquivo seguinte}}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-contexto-depoimentos** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-depoimentos** para executar esta função: Registra depoimentos de clientes em context/depoimentos.json, com nome, cargo, empresa, texto literal, foto e consentimento de uso. Use para guardar prova social de forma rastreável antes de qualquer peça citá-la.

O grupo **contexto** trabalha com estes campos mínimos:

- **arquivo canônico:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **preferências:** preencher com dado ligado ao pedido.
- **fonte:** preencher com dado ligado ao pedido.
- **alteração:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-contexto-depoimentos
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/depoimentos.json
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-depoimentos
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/depoimentos.json
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **contexto** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `CONTEXTO.md`
- `docs/method/02-contexto-fontes-e-precedencia.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
