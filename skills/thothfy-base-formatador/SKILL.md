---
name: thothfy-base-formatador
description: >
  Skill transversal de lint e formatação Markdown final — heading, listas,
  links, tabelas e frontmatter. Sempre a última ação antes de considerar um
  artefato Markdown pronto. Não altera conteúdo editorial.
---

# Thothfy Formatador

Última etapa mecânica antes de um artefato Markdown ser considerado pronto
para `thothfy-planejamento-06-auditoria`.

## Escopo

Formata e valida estrutura Markdown. Não corrige conteúdo, tom ou voz — isso
é `thothfy-base-editor`.

## Contexto exigido

Nenhum arquivo de `context/` é obrigatório. Consulte `context/glossario.md`
apenas para confirmar grafia em link e texto âncora.

## Entrada esperada

Um artefato Markdown já com o corpo definido, geralmente aprovado por
`thothfy-base-editor`.

## Fluxo

1. Percorra o checklist completo de `REFERENCIA.md` item a item.
2. Confira a hierarquia de headings: um único H1, sem pular nível (H2 antes
   de H3).
3. Confira formatação de listas: use lista apenas quando o conteúdo for
   realmente uma sequência de itens paralelos, não como substituto de prosa.
4. Confira links: texto âncora descritivo, sem "clique aqui", URL válida
   dentro do que a skill pode verificar.
5. Confira tabelas: cabeçalho presente, colunas alinhadas, sem célula vazia
   sem indicação de "não informado".
6. Confira frontmatter YAML: campos obrigatórios do canal presentes (título,
   description, slug, `brief` quando aplicável), sintaxe YAML válida.
7. Para post nativo de rede social, confirme que nenhuma sintaxe Markdown
   vazou para o corpo copiável (ver diferenças por canal em
   `REFERENCIA.md`).
8. Aplique a formatação corrigida diretamente no arquivo.

## Saída

O mesmo artefato Markdown, com estrutura corrigida, salvo no mesmo caminho.

## Validação

- Um único H1 por documento.
- Nenhum link com texto âncora genérico.
- Frontmatter válido e completo para o canal.

## Idempotência

Rodar novamente sobre um artefato já formatado não introduz mudança quando a
estrutura já está correta.
