---
name: inboundfy-planejamento-01-saneamento
description: >
  Fase 1 do pipeline (METODOLOGIA.md). Limpa e organiza o material bruto de
  00-entrada/ preservando o original intocado, gerando base limpa e relatório
  de saneamento. Não escreve copy editorial nem decide estratégia.
---

# Inboundfy Saneamento

Segunda skill do pipeline. Recebe o pacote criado por `inboundfy-planejamento-00-triagem` e
produz uma versão limpa do material, sem ainda aplicar voz editorial; apenas remove ruído e organiza estrutura.

## Escopo

Cobre a limpeza mecânica e estrutural do material. Não reescreve com a voz de
`context/marca-voz.md`; isso é papel das skills de canal na fase 5. Não
extrai ativos reutilizáveis; isso é `inboundfy-planejamento-02-pesquisa`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

Nenhum arquivo de `context/` é estritamente obrigatório para limpeza
mecânica, mas leia `context/glossario.md` para corrigir grafia de marcas e
termos técnicos durante a limpeza. Leia também `LIMPEZA-MATERIAL-BRUTO.md`
(regras completas do que pode e não pode ser alterado, por tipo de
material) e `TRADUCAO.md` (lógica de correção canônica de termo e nome
próprio mal transcrito) como requisito para alterar material bruto; essa
leitura é obrigatória, não apenas `REFERENCIA.md` desta skill.

## Entrada esperada

O pacote criado por `inboundfy-planejamento-00-triagem`, com `00-entrada/material-original.md`
preenchido.

## Fluxo

1. Leia `00-entrada/material-original.md` sem alterá-lo.
2. Identifique o tipo de material (transcrição, texto colado, nota solta) e
   aplique a seção correspondente de `LIMPEZA-MATERIAL-BRUTO.md`; o que é
   permitido corrigir muda por tipo de material.
3. Corrija grafia de marcas e termos técnicos contra `context/glossario.md`
   e a lógica de correção canônica de `TRADUCAO.md`. Termo incerto vira
   pendência registrada (`TRADUCAO.md`), nunca suposição silenciosa.
4. Organize a estrutura em blocos lógicos, preservando a sequência e o
   sentido original; não resuma, não corte conteúdo, apenas organize (ver
   lista do que nunca é permitido em `LIMPEZA-MATERIAL-BRUTO.md`).
5. Salve o resultado em `01-saneamento/base-limpa.md`, seguindo o template de
   `REFERENCIA.md`.
6. Escreva `01-saneamento/relatorio-saneamento.md` documentando o que foi
   alterado e por quê, bloco a bloco quando a alteração for relevante,
   seguindo o template de `LIMPEZA-MATERIAL-BRUTO.md` e `REFERENCIA.md`.
7. Se o material original for uma transcrição com falantes identificáveis,
   preserve a sequência e a atribuição de fala na base limpa.

## Saída

`01-saneamento/base-limpa.md` e `01-saneamento/relatorio-saneamento.md`,
dentro do diretório do pacote.

## Validação

- `00-entrada/material-original.md` permanece idêntico ao criado por
  `inboundfy-planejamento-00-triagem`.
- Nenhum conteúdo foi resumido, cortado ou reescrito com voz editorial;   apenas limpo e organizado.
- O relatório documenta toda alteração relevante.

## Idempotência

Rodar novamente sobre o mesmo pacote não duplica o trabalho; atualiza
`base-limpa.md` e o relatório existente, sem criar uma segunda versão
paralela.
