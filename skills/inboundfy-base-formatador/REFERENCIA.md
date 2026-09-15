# REFERENCIA.md; inboundfy-base-formatador

Checklist de lint e formatação Markdown aplicado como última ação antes de
considerar qualquer artefato de texto pronto.

## Checklist de formatação

- [ ] Um único H1 por arquivo (quando o canal usar heading); hierarquia
      H2/H3/H4 sem pular nível.
- [ ] Frontmatter YAML válido, com aspas apenas onde o valor exigir (dois
      pontos, caractere especial), sem chave duplicada.
- [ ] Listas usam o mesmo marcador (`-`) do início ao fim do documento.
- [ ] Links Markdown no formato `[texto âncora descritivo](caminho)`, nunca
      `[clique aqui](caminho)` ou URL nua no meio de frase.
- [ ] Nenhuma linha em branco dupla ou tripla entre parágrafos além do
      padrão de uma linha.
- [ ] Blocos de código com a linguagem declarada (` ```yaml `, ` ```text `)
      quando o conteúdo for exemplo técnico.
- [ ] Tabelas com cabeçalho, linha separadora e colunas alinhadas por `|`.
- [ ] Sem ponto e vírgula (`;`) usado como conector de prosa (ver
      `ESCRITA.md` e `context/proibicoes.md`).
- [ ] Nenhum trecho de HTML solto quando o canal só aceitar Markdown puro.
- [ ] Arquivo termina com uma única quebra de linha final, sem espaço em
      branco à direita nas linhas.

## Diferenças por canal

- **Post nativo de rede social** (LinkedIn, Instagram): o corpo copiável não
  usa sintaxe Markdown nenhuma; sem `#`, `**`, `[]()`. O formatador aqui
  verifica que nenhuma marcação vazou para o texto que será colado na
  plataforma.
- **E-mail HTML**: formatação Markdown não se aplica ao corpo renderizado;
  esta skill valida apenas o Markdown de origem antes da conversão, se
  houver.
- **Artigo/blog/ebook**: aplica o checklist completo acima.

## Erros comuns

- Corrigir formatação e, no processo, alterar o conteúdo do texto; o
  formatador ajusta forma, nunca reescreve frase.
- Aprovar frontmatter com campo obrigatório do canal ausente (ex.: `brief`)
  achando que isso é responsabilidade de outra skill; sinalize a ausência
  mesmo que a correção não seja desta skill.
- Rodar o formatador antes do texto passar por `inboundfy-copy-editor`;   formatação de um texto que ainda vai mudar de conteúdo é retrabalho.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-base-formatador**, do grupo
**base**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de base formatador dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-base-formatador
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de base formatador

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
skill: inboundfy-base-formatador
grupo: base
entrada: acervo/0042-2026-09-14-base-formatador/processado.md
pedido: aplicar a etapa de base formatador e entregar o próximo registro
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
skill: inboundfy-base-formatador
estado: aprovado
entrada: acervo/0042-2026-09-14-base-formatador/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de base formatador

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

- Executar **inboundfy-base-formatador** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-base-formatador** para executar esta função: Skill transversal de lint e formatação Markdown final; heading, listas, links, tabelas e frontmatter. Sempre a última ação antes de considerar um artefato Markdown pronto. Não altera conteúdo editorial.

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
skill: inboundfy-base-formatador
grupo: base
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/processado.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-base-formatador
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
