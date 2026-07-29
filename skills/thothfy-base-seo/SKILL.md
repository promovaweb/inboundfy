---
name: thothfy-base-seo
description: >
  Skill transversal de SEO e intenção de busca. Classifica a intenção
  (informativa, comparativa, transacional, investigativa), define title
  (50-60 caracteres), description (145-155 caracteres), slug, headings e
  linkagem interna. Usada por skills de canal de texto antes de escrever.
---

# Thothfy SEO

Skill de apoio acionada por `thothfy-especialista-blog` e demais skills de canal
de texto indexável antes de qualquer título, outline ou parágrafo ser
escrito.

## Escopo

Define metadata e estrutura de SEO. Não escreve o corpo do texto — isso é
responsabilidade da skill de canal.

## Contexto exigido

- `context/publico.md`: jargão e nível técnico da persona, para alinhar
  palavra-chave à forma real de busca.
- `context/produtos.md`, `context/servicos.md` e `context/ferramentas.md`:
  para linkagem interna correta na primeira menção de cada entidade.

## Entrada esperada

Um tema ou brief de peça indexável (artigo de blog, artigo longo, página de
conteúdo).

## Fluxo

1. Classifique a intenção de busca por trás do tema usando a tabela de
   `REFERENCIA.md`: informativa, comparativa, transacional ou investigativa.
   Se nenhuma pergunta real do público sustentar o tema, sinalize que a peça
   não deve ser escrita a partir de tema solto sem validação de busca.
2. Registre a pergunta-mãe e variações da busca, usando o jargão real de
   `context/publico.md`.
3. Defina o `title` entre 50 e 60 caracteres, sem repetir o nome da marca
   como sufixo genérico, seguindo o template de `REFERENCIA.md`.
4. Defina a `description` entre 145 e 155 caracteres, com a intenção clara e
   um CTA.
5. Defina um slug curto, sem stop words.
6. Defina a hierarquia de headings (um H1, H2/H3 cobrindo a dúvida real),
   sem heading em formato de pergunta seguido de resposta genérica.
7. Identifique pontos de linkagem interna: primeira menção de produto,
   serviço ou ferramenta deve linkar para a página própria registrada em
   `context/produtos.md`, `context/servicos.md` ou `context/ferramentas.md`.
8. Devolva o pacote de metadata e estrutura para a skill de canal escrever o
   corpo.

## Saída

Pacote de metadata (intenção, title, description, slug, outline de headings,
pontos de linkagem) devolvido para a skill de canal que chamou. Não salva
arquivo final por conta própria.

## Validação

- Intenção de busca está classificada e justificada por pergunta real, não
  por tema solto.
- `title` e `description` respeitam os limites de caracteres.
- Todo ponto de linkagem interna aponta para entidade confirmada em
  `context/`.
- Checklist de metadata de `REFERENCIA.md` cumprido item a item.

## Idempotência

Reclassificar a mesma peça não altera metadata já aprovada pelo usuário sem
pedido explícito de revisão.
