# REFERENCIA.md; inboundfy-base-validador

## Manifesto obrigatório

Registre brief, asset, produtora, validadora, arquivos de metodologia, todos
os arquivos encontrados em `.inboundfy/context/`, catalogo de fontes e fontes
locais efetivamente lidas. Se `brand/` existir, registre seus Markdown e os
ativos visuais inspecionados. Marque cada item como `lido`, `não aplicável`
com justificativa ou `impedimento`.

## Template do relatório

```markdown
# Validação de asset; <canal>/<item>

- **Asset:** `<caminho relativo da peça>`
- **Brief:** <caminho ou peça avulsa>
- **Produtora:** <inboundfy-especialista-*>
- **Validadora:** <inboundfy-validador-*>
- **Rodada:** <número>
- **ID da peça:** `<id>`
- **SHA-256 da peça:** `<hash completo obtido por inboundfy content digest>`
- **Veredito:** <aprovado | reprovado | devolvido para briefing | impedido>

## Fontes carregadas

<manifesto completo>

## Achados

| Localização | Trecho observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| <arquivo/seção> | <problema observado> | <origem da regra> | <mudança exigida> |

## Conferência de proibições

| Categoria | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Vetos de negócio | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Aberturas proibidas | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Fechamentos proibidos | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Vocabulário proibido | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Estruturas de parágrafo | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Headings e listas | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Pontuação e fluidez | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Autoridade e dados | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |

## Encaminhamento

- **Destino:** <skill produtora | briefing | usuário | nenhum>
- **Instrução:** <o que precisa mudar sem reescrever o asset aqui>

## Histórico

- Rodada <número>: <veredito e síntese>
```

## Exemplo fictício

Uma afirmação de preço divergente de `context/ofertas.md` recebe veredito
`reprovado`, aponta o parágrafo, cita o valor encontrado e o valor canônico,
manda remover ou corrigir a afirmação e retorna à produtora pareada. A
validadora só aprova em nova rodada após reler o arquivo inteiro.

## Checklist

- [ ] Asset e brief foram lidos integralmente.
- [ ] Todos os contextos foram carregados.
- [ ] Fontes locais relevantes foram conferidas.
- [ ] `brand/` foi procurada e, quando presente, suas regras e seus ativos
      aplicáveis foram conferidos.
- [ ] Cada linha de `context/proibicoes.md` foi confrontada com o asset.
- [ ] Cada categoria de `context/estruturas-proibidas.md` foi confrontada
      literal e semanticamente.
- [ ] Frontmatter, headings, listas, CTA, alt text e texto visual entraram
      na varredura.
- [ ] Qualquer exceção cita a permissão canônica e prova sua condição.
- [ ] A varredura completa foi repetida depois da correção.
- [ ] O hard gate terminou com zero ocorrência.
- [ ] Todo achado tem prova e correção testável.
- [ ] O relatório aprovado contém ID, caminho, SHA-256 atual e veredito aprovado.
- [ ] O histórico preserva as rodadas anteriores.

## Erros comuns

- Aprovar o asset enquanto uma violação individual permanece.
- Procurar apenas expressões exatas e deixar passar paráfrase do mesmo
  padrão proibido.
- Corrigir a ocorrência apontada sem procurar o mesmo vício no restante do
  asset.
- Tratar exceção contextual como permissão geral.
- Corrigir o asset dentro da validadora.
- Ler apenas os contextos citados pela produtora.
- Inventar dado para desimpedir conflito ou template vazio.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-base-validador**, do grupo
**base**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de base validador dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-base-validador
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de base validador

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
skill: inboundfy-base-validador
grupo: base
entrada: acervo/0042-2026-09-14-base-validador/processado.md
pedido: aplicar a etapa de base validador e entregar o próximo registro
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
skill: inboundfy-base-validador
estado: aprovado
entrada: acervo/0042-2026-09-14-base-validador/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de base validador

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

- Executar **inboundfy-base-validador** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-base-validador** para executar esta função: Aplica o contrato transversal de validação a qualquer asset produzido pelo Inboundfy. Use como base obrigatória das skills inboundfy-validador-* para confrontar brief, metodologia, todos os contextos, fontes locais, regras e contrato da skill produtora. Proibições e estruturas proibidas reprovam o asset até correção ou exceção canônica confirmada.

O grupo **base** trabalha com estes campos mínimos:

- **entrada:** preencher com dado ligado ao pedido.
- **regra:** preencher com dado ligado ao pedido.
- **resultado:** preencher com dado ligado ao pedido.
- **fontes:** preencher com dado ligado ao pedido.
- **retorno:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-base-validador
grupo: base
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/processado.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-base-validador
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/processado.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **base** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `CONTEXTO.md`
- `SKILL-AUTORIA.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
