---
name: inboundfy-catalogo
description: Reconstrói e mantém os índices de acervo, bases editoriais, peças por canal e calendário para localizar rapidamente todo material do projeto.
---

# Catálogo do projeto

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/inbound.md`, os diretórios de
`acervo/`, `canais/` e `calendario/` e os índices existentes.

## Entrada esperada

Uma alteração de arquivo, uma solicitação de atualização ou um projeto com
índices ausentes ou desatualizados.

## Fluxo

1. Localize diretórios válidos e leia IDs, frontmatter e links.
2. Atualize `.inboundfy/indices/acervo.json`, `conteudos.json` e
   `calendario.json` sem incorporar texto completo nos índices.
3. Aponte caminhos relativos, títulos, estados, canais, personas e acervos.
4. Relate arquivos sem ID, duplicados ou com caminho quebrado.

## Saída

Índices pequenos, estáveis e suficientes para lookup, navegação e linkagem.

## Validação

Cada registro aponta para um arquivo existente e nenhum ID aparece duas vezes
no mesmo índice.

## Idempotência

Reconstruir a partir dos diretórios produz a mesma relação ordenada.
