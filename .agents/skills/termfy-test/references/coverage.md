# Cobertura antes de concluir uma entrega

Cada item de `## Tests` da spec aberta é um teste de aceite: relacione cada
item a pelo menos um teste que confira o comando e o resultado esperado
que ele descreve, e cada tarefa aos testes que exercitam seu
comportamento. O Behavior da spec diz as saídas, erros e exit codes que as
assertions conferem. Escolha os casos aplicáveis abaixo; explique os que não se aplicam. Percentual
de linhas executadas não substitui assertions sobre a saída e os efeitos.

## Command

- Uma chamada válida em texto e outra com `--json`, com exit code conferido
  nas duas. No JSON, confira `command`, `data` e o resultado do domínio.
- Argument obrigatório ausente, option desconhecida e enum inválido, quando
  existirem. Confira `ExitCode.USAGE`, stderr no modo texto e o envelope de erro.
- Uma falha prevista de cada família introduzida pela entrega, por exemplo
  `error.network` produzindo `ExitCode.NETWORK_OR_API`, sem acessar rede real.
- Valores padrão, limites, coleção vazia e aliases alterados.
- Efeito no disco ou estado, além da mensagem de sucesso. Uma operação recusada
  não pode aplicar parcialmente a alteração.
- Help com descriptions das options e arguments; saída de progresso em stderr.
- Quando houver segredo, ausência do valor em stdout, stderr e JSON mascarado;
  revelação apenas com `--reveal`. Confira também chamadas de preparo.
- Quando houver interação, comportamento sem TTY e as alternativas declaradas
  como `--stdin` e `--yes`. Não simule uma TUI real para testar esse erro.

## Tool MCP

- Presença em `listTools` e chamada por `Client.callTool` com entrada válida.
- `content` e `structuredContent` coerentes quando a resposta for estruturada.
- Entrada inválida rejeitada pelo schema de `registerTool`; falha de domínio
  como `isError: true`. Diferencie erro de protocolo de erro retornado pela tool.
- Ausência de credenciais em todas as partes da resposta e nos diagnósticos.
- Nenhum texto alheio ao JSON-RPC em stdout. A chamada deve funcionar sem rede.
- Resources e prompts alterados também são descobertos e lidos com o Client.
- Cliente e transporte fechados no sucesso e na falha, sem processos pendurados.

## Screen

- Frame inicial com os resultados descritos no Behavior da spec, sem segredo
  e com tema esperado.
- Um frame por faixa de largura: 60×16 (`compact`), 80×24 (`medium`) e
  120×32 (`wide`). Confira que a tela cabe em 60×16 ou que a mensagem
  "terminal too small" aparece.
- Navegação até a screen, ação de tecla própria, help, paleta e encerramento.
- Para `table`, seleção por teclado, clique na linha, ordenação pelo clique
  no cabeçalho, ativação no segundo clique ou Enter e coleção vazia.
  Para `listPanel`, consulte `tests/tui-list.test.ts`.
- Cada `ScreenAction` tem tecla e clique. Envie a tecla com
  `mockInput.pressKey` e o clique com `setup.mockMouse`. Confira o mesmo
  efeito nas duas entradas. Cada ação aparece na paleta (`Ctrl+K` ou `:`)
  pelo texto de `description`, inclusive a ação com `hidden: true`.
- Diálogos: `ctx.confirm` aceito e negado; `ctx.prompt` com um valor
  recusado por `validate` e depois aceito; `ctx.choose` com índice inicial e
  cancelamento por `Esc`.
- Valor com `secret: true` não aparece no frame do diálogo aberto, no toast
  nem no texto de `ctx.status`.
- `ctx.status` mostra o resumo da tela e cada ação notifica o resultado.
- A barra de abas mostra o número e o ícone do papel. O clique na aba abre a
  tela.
- Com `tui.icons` em `unicode` e em `ascii`, o frame não traz glifo do
  conjunto `nerd`.
- Estado vazio, carregando e erro com ação de tentar de novo.
- `watch()`: escreva o arquivo listado e confira a atualização da tela.
- `onPause` para timers; `onResume` retoma. Chame os dois com o stub de tela e
  confira que nenhum timer fica ativo.
- Mudança de aba dispara a limpeza prevista; saída destrói o renderer.
- Renderização após cada interação antes de capturar o frame. Timers e
  subscriptions não permanecem ativos depois do teste.

## Configuração

- Padrões de `SETTINGS_SCHEMA`, conversão de tipo e rejeição de enum inválido.
- Persistência e nova leitura; arquivo ausente e arquivo inválido.
- `getCredential` para nome existente e ausente; cifragem sem valor em texto
  claro no arquivo; permissões esperadas e prioridade da variável de ambiente.
- Restauração do ambiente do processo e remoção apenas da pasta do teste.

## Fechamento

Rode `bun run typecheck`, `bun test` e `bun run validate`.
Associe o resultado ao estado atual dos arquivos. Se um caso essencial falhar
ou não puder rodar, não marque o item como concluído. Uma suíte sem assertions
sobre a entrega não autoriza marcar `[x]`. Marque os itens no arquivo da
spec, nunca no `CLISPEC.md`. Um item de `## Tests` sem teste correspondente
fica `[ ]`, e a spec só fecha com todos os itens marcados.
