---
name: inboundfy-brainstorm-02-pesquisa
description: >
  Fase 02 do brainstorm. Pesquisa fontes externas atuais para confirmar
  conceitos, exemplos e contrapontos da ideia, registra URL, autoria,
  publicação e acesso, e separa fato, interpretação e hipótese sem alterar
  os arquivos de context/.
---

# Inboundfy Brainstorm 02; Pesquisa

Enriquece a ideia com prova rastreável. Não define a redação final nem
atualiza os arquivos de negócio.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/concorrentes.md`, quando o tema envolver mercado ou comparação.
- `context/ferramentas.md` e `context/glossario.md`, quando houver tecnologia.
- `context/produtos.md` ou `context/servicos.md`, quando houver oferta própria.

## Entrada esperada

`brainstorm.md` com perguntas de pesquisa e status `em-pesquisa`.

## Fluxo

1. Ler o arquivo e a ficha de fonte de `REFERENCIA.md`.
2. Pesquisar afirmações que podem mudar por data, mercado, tecnologia, lei,
   preço ou comportamento. Usar busca na web quando disponível.
3. Preferir documentação oficial, pesquisa original, norma, artigo
   acadêmico ou publicação do responsável pelo fato.
4. Para cada fonte, registrar título, URL, responsável, publicação quando
   disponível, data de acesso e trecho do brainstorm que ela apoia.
5. Registrar divergências e limitações. Não combinar opiniões diferentes
   como se formassem consenso.
6. Separar fatos confirmados, hipóteses e contrapontos nas seções próprias.
7. Marcar o status como `em-sintese` e encaminhar para
   `inboundfy-brainstorm-03-sintese`.

## Saída

O `brainstorm.md` com pesquisa documentada e afirmações classificadas.

## Validação

- Toda afirmação externa verificável aponta uma fonte.
- Fatos sensíveis ao tempo foram pesquisados na execução atual.
- Fonte secundária não substitui fonte primária disponível.
- Pesquisa não sobrescreveu informação confirmada em `context/`.

## Idempotência

Atualizar a ficha da mesma fonte quando houver nova consulta; não duplicar a
linha. Preservar fonte antiga relevante no histórico.
