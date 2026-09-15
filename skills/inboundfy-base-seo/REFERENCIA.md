# REFERENCIA.md; inboundfy-base-seo

Material de apoio para decidir intenção de busca, metadata e linkagem antes
de qualquer skill de canal escrever título, description ou outline.

## Classificação de intenção de busca

Toda peça orientada a busca precisa de uma classificação antes da escrita:

| Intenção | Sinal na busca | O que a peça precisa fazer |
| --- | --- | --- |
| Informativa | "o que é", "como funciona", "por que" | Responder a dúvida direto no início, sem enrolar até o H2. |
| Comparativa | "X ou Y", "X vs Y", "melhor entre" | Trazer regra de comparação explícito, tabela quando fizer sentido, e veredito qualificado (não genérico). |
| Transacional | "contratar", "preço", "comprar", "onde encontrar" | Levar a uma ação clara, com oferta e CTA específicos; usar `ESTRUTURAS-PERSUASIVAS.md`. |
| Investigativa | "é confiável", "vale a pena", "funciona mesmo" | Trazer prova, limite e contraponto honesto; não só argumento a favor. |

Sem essa classificação e sem a pergunta real do leitor por trás da busca, a
skill de canal não deve escrever título, slug, H1 ou outline.

## Template de metadata

```yaml
title: <50-60 caracteres, sem sufixo de marca genérico, com a intenção clara>
description: <145-155 caracteres, com palavra-chave principal e CTA>
slug: <curto, sem stop words, alinhado ao termo de busca real>
focus-keyword: <termo ou frase que resume a intenção validada>
```

## Checklist de metadata

- [ ] `title` entre 50 e 60 caracteres.
- [ ] `description` entre 145 e 155 caracteres, com CTA.
- [ ] `slug` curto, sem stop words redundantes.
- [ ] `focus-keyword` reflete a intenção classificada acima, não um tema
      genérico.
- [ ] H1 único; hierarquia H2/H3 sem pular nível.
- [ ] Nenhum heading é pergunta seguida de resposta genérica de uma linha.
- [ ] Primeira menção de produto, serviço ou ferramenta linkada para a
      página própria (`context/produtos.md`, `context/servicos.md`,
      `context/ferramentas.md`), quando existir.

## Erros comuns

- Definir o título antes de classificar a intenção; o título nasce da
  intenção, não o contrário.
- Usar `focus-keyword` genérico (nome de categoria ampla) em vez da
  pergunta real que a persona (`context/publico.md`) faz.
- Contar caracteres sem contar espaços, ou vice-versa; sempre conte a
  string completa como será exibida.
- Aprovar heading em formato pergunta-resposta em toda a peça, tornando o
  texto uma lista de perguntas frequentes disfarçada de artigo.

## Exemplo

Pergunta real: "vale a pena migrar um sistema de agendamento manual para um
software?" (intenção investigativa).

```yaml
title: Migrar do agendamento manual para software: vale a pena?
description: Comparamos custo de tempo, erro humano e escala entre agendamento manual e software, com o ponto exato no qual a migração compensa.
slug: migrar-agendamento-manual-software
focus-keyword: vale a pena migrar agendamento manual para software
```

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-base-seo**, do grupo
**base**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de base seo dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-base-seo
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de base seo

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
skill: inboundfy-base-seo
grupo: base
entrada: acervo/0042-2026-09-14-base-seo/processado.md
pedido: aplicar a etapa de base seo e entregar o próximo registro
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
skill: inboundfy-base-seo
estado: aprovado
entrada: acervo/0042-2026-09-14-base-seo/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de base seo

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

- Executar **inboundfy-base-seo** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-base-seo** para executar esta função: Skill transversal de SEO e intenção de busca. Classifica a intenção (informativa, comparativa, transacional, investigativa), define title (50-60 caracteres), description (145-155 caracteres), slug, headings e linkagem interna. Usada por skills de canal de texto antes de escrever.

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
skill: inboundfy-base-seo
grupo: base
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/processado.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-base-seo
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
