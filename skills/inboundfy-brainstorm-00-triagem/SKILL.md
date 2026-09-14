---
name: inboundfy-brainstorm-00-triagem
description: >
  Fase 00 do brainstorm. Preserva a ideia original, identifica intenção,
  audiência e arquivos de context/ aplicáveis, cria um diretório datado em
  brainstorms/ e inicia brainstorm.md pelo modelo canônico.
---

# Inboundfy Brainstorm 00; Triagem

Abre o registro de uma ideia. Não pesquisa, entrevista nem desenvolve a tese.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/empresa.md`, para associar a ideia ao negócio correto.
- `context/publico.md`, para reconhecer audiência já registrada.
- `context/canais.md`, para localizar o diretório de brainstorm.

Campo opcional vazio não impede a abertura do arquivo.

## Entrada esperada

Uma ideia em qualquer nível de detalhe.

## Fluxo

1. Confirmar que o diretório de brainstorm registrado existe. Se estiver
   ausente, acionar `inboundfy-setup` para repará-lo. Depois, ler
   `BRAINSTORM.md`, `templates/brainstorm.md` e o exemplo em `REFERENCIA.md`.
2. Preservar a ideia exatamente como foi recebida.
3. Gerar slug curto em minúsculas, sem acentos e separado por hífens.
4. Criar `brainstorms/<AAAA-MM-DD>-<slug>/`; acrescentar sufixo numérico se
   o caminho já existir.
5. Copiar o modelo para `brainstorm.md` e preencher frontmatter, ideia
   original e leitura inicial com o que estiver confirmado.
6. Marcar o status como `em-entrevista` e encaminhar para
   `inboundfy-brainstorm-01-entrevista`.

## Saída

Um `brainstorm.md` iniciado no diretório datado.

## Validação

- O input original está intacto.
- Data e slug correspondem à execução.
- Nenhuma afirmação nova foi apresentada como fato.

## Idempotência

Não sobrescrever diretório existente. Retomar somente quando o usuário
informar o caminho.
