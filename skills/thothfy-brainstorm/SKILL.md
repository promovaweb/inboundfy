---
name: thothfy-brainstorm
description: >
  Orquestra uma ideia até brainstorm.md pesquisado e aprovado, executando as
  fases 00 a 04, consultando context/, ESCRITA.md e os dois arquivos de
  proibições. Use quando o usuário trouxer uma ideia curta e quiser
  desenvolvê-la sem coordenar skills manualmente.
---

# Thothfy Brainstorm

Wrapper autônoma para transformar uma ideia em base editorial. Ela aciona as
cinco skills `thothfy-brainstorm-<NN>-*`; não escreve a peça final.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/empresa.md`, `context/marca-voz.md` e `context/publico.md`.
- `context/canais.md`, para propor formatos que o usuário realmente publica.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.

Se faltar um item obrigatório para identificar marca, audiência ou canal,
acionar a skill `thothfy-contexto-*` correspondente. Se a lacuna for
opcional, registrar suposição conservadora e continuar.

## Entrada esperada

Uma frase, pergunta, nota, áudio transcrito ou tema que ainda não constitui
um brief.

## Fluxo

1. Conferir os caminhos canônicos de `INSTALACAO.md`. Se faltar arquivo de
   apoio ou diretório, acionar `thothfy-setup`; não criar uma estrutura
   alternativa. Depois, ler `BRAINSTORM.md` e a matriz de autonomia em
   `REFERENCIA.md`.
2. Acionar `thothfy-brainstorm-00-triagem` para preservar a ideia e abrir
   `brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`.
3. Acionar `thothfy-brainstorm-01-entrevista`. Fazer no máximo um bloco de
   perguntas, somente quando uma lacuna impedir afirmação factual segura.
4. Acionar `thothfy-brainstorm-02-pesquisa` com acesso às fontes disponíveis.
5. Acionar `thothfy-brainstorm-03-sintese` para preencher o modelo completo.
6. Acionar `thothfy-brainstorm-04-validacao`. Corrigir automaticamente e
   repetir apenas a fase indicada pela reprovação.
7. Se o pedido mencionar uma peça, encaminhar o arquivo aprovado para
   `thothfy-planejamento-04-briefing`. Se pedir várias peças ou não indicar
   canal, encaminhar para `thothfy-iniciar`.
8. Informar caminho, suposições relevantes, fontes e próximo fluxo executado.

## Saída

`brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`, com status `aprovado`.

## Validação

- As fases 00 a 04 foram executadas na ordem.
- Fatos externos têm fonte; suposições aparecem como suposições.
- A validação conferiu `ESCRITA.md` e os dois arquivos de proibições.
- Nenhuma aprovação intermediária foi solicitada fora das exceções de
  `REFERENCIA.md`.

## Idempotência

Uma ideia nova cria diretório novo. Um caminho de brainstorm informado pelo
usuário retoma o arquivo existente e preserva o histórico.
