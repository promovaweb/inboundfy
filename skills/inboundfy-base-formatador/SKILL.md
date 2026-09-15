---
name: inboundfy-base-formatador
description: >
  Skill transversal de lint e formatação Markdown final; heading, listas,
  links, tabelas e frontmatter. Sempre a última ação antes de considerar um
  artefato Markdown pronto. Não altera conteúdo editorial.
---

# Inboundfy Formatador

Última etapa mecânica antes de um artefato Markdown ser considerado pronto
para `inboundfy-planejamento`.

## Escopo

Formata e valida estrutura Markdown. Não corrige conteúdo, tom ou voz; isso
é `inboundfy-copy-editor`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **base**.

## Contexto exigido

Nenhum arquivo de `context/` é obrigatório. Consulte `context/glossario.md`
apenas para confirmar grafia em link e texto âncora.

## Entrada esperada

Um artefato Markdown já com o corpo definido, geralmente aprovado por
`inboundfy-copy-editor`.

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

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** base
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Rodar novamente sobre um artefato já formatado não introduz mudança quando a
estrutura já está correta.
