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
- Rodar o formatador antes do texto passar por `inboundfy-base-editor`;   formatação de um texto que ainda vai mudar de conteúdo é retrabalho.
