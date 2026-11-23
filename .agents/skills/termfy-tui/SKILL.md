---
name: termfy-tui
description: Implementa telas Termfy com OpenTUI Core, layout responsivo por faixa, paleta de comandos, diálogos, foco, listas, estado assíncrono, cleanup e testes de frames.
---

# Construir interfaces de terminal com OpenTUI

Use esta skill para criar ou revisar telas, componentes, navegação por teclado,
foco, rolagem e carregamento de informações na TUI do Termfy. O agente conduz
as alterações e as verificações; o usuário descreve a interface desejada.

## Leia antes

1. Leia `AGENTS.md`, `CLISPEC.md` e `docs/tui.md` do projeto. Leia a spec
   aberta em `specs/` (status `in_progress`) e localize a screen em
   `## Surface`, o Behavior (teclas, estados, o que a tela mostra), o Design e
   os itens `#termfy-tui` de Tasks e Tests. Se faltar a descrição do
   comportamento, use `termfy-spec`.
2. Confira a versão instalada de `@opentui/core`, o lock e o runtime.
   Leia [fontes e compatibilidade](references/opentui-sources.md).
3. Abra `src/tui/index.ts`, `src/tui/screen.ts`, `src/tui/components.ts`,
   `src/tui/theme.ts`, `src/tui/icons.ts`, `src/tui/pointer.ts` e
   `src/tui/screens/index.ts`. O código do projeto define quais recursos do
   OpenTUI já estão integrados.
4. Leia [o contrato de tela](references/screen-contract.md),
   [design modern unix](references/modern-unix-design.md) e
   [testes](references/screen-tests.md). Depois selecione os temas abaixo.
5. Leia [os padrões de tela](references/screen-patterns.md) antes de
   escolher a composição. Os cinco padrões cobrem lista e detalhe, painel de
   status, formulário por diálogos, visualizador de documento e progresso.
6. Leia [a checklist de qualidade](references/quality-checklist.md) antes de
   declarar a tela pronta.

## Referências por tarefa

| Tarefa | Referência Termfy | Documentação OpenTUI copiada |
| --- | --- | --- |
| Montar e registrar uma aba | [Contrato de tela](references/screen-contract.md) | [Renderables](references/opentui/core-concepts/renderables.mdx) |
| Escolher a composição da tela | [Padrões de tela](references/screen-patterns.md) | [Layout](references/opentui/core-concepts/layout.mdx) |
| Redimensionar, alinhar e rolar | [Layout e conteúdo](references/layout-and-content.md) | [Layout](references/opentui/core-concepts/layout.mdx), [ScrollBox](references/opentui/components/scrollbox.mdx) |
| Selecionar, editar e mudar o foco | [Teclado e formulários](references/keyboard-and-forms.md) | [Keyboard](references/opentui/core-concepts/keyboard.mdx), [Input](references/opentui/components/input.mdx) |
| Consultar API e atualizar a tela | [Estado e cleanup](references/async-and-lifecycle.md) | [Lifecycle](references/opentui/core-concepts/lifecycle.mdx) |
| Criar gráficos de linhas e barras | [Bibliotecas e gráficos](references/charts.md) | [FrameBuffer](references/opentui/components/frame-buffer.mdx) |
| Diagnosticar comportamento | [Diagnóstico](references/troubleshooting.md) | [Troubleshooting](references/opentui/test-and-debug/troubleshooting.mdx) |
| Adaptar um exemplo completo | [Exemplos](references/examples/README.md) | [Testing](references/opentui/core-concepts/testing.mdx) |
| Conferir antes de entregar | [Checklist de qualidade](references/quality-checklist.md) | [Renderables](references/opentui/core-concepts/renderables.mdx) |

## Entrada e plano

Confirme a ação principal da tela, a origem das informações, o volume
esperado, os estados de carregamento e erro, as teclas e a menor faixa de
terminal atendida. Reaproveite o que o Behavior e o Design da spec já
informam. Mostre um plano curto com arquivos, comportamentos, padrão
escolhido e verificações antes de editar.

## Contratos de implementação

1. Use a API imperativa de `@opentui/core`. Não adicione React, Solid ou
   outro gerenciador de estado para construir uma aba.
2. Crie uma tela por arquivo em `src/tui/screens/`. Use uma factory quando
   houver estado mutável; cada montagem de aplicação recebe suas instâncias.
3. Reutilize `table`, `stateView`, `spinner`, `progressBar`, `link`, `panel`,
   `scrollPanel`, `keyValueTable`, `listPanel`, `button`, `heading`, `dim` e
   `spacer`. Conteúdo que pode passar da altura do painel vai num
   `scrollPanel`; nenhum texto cai sobre a borda nem sobrepõe outro. Margens,
   paddings e gaps vêm de `ctx.space` (`src/tui/spacing.ts`), no estilo de
   cartões arejados de `references/modern-unix-design.md`.
   Confira assinaturas no arquivo real, sem deduí-las pelo nome.
   `spacer(renderer, height)` não recebe tema. `button` e `listPanel` já
   respondem ao clique.
4. Use `ctx.theme` para cores e `ctx.icons` para ícones. Mantenha as três
   paletas (`terminal`, `night` e `day`) e o contrato visual existente. O
   padrão de `tui.theme` continua `terminal`, que herda as cores do tema do
   terminal. Componentes compartilhados recebem tema como parâmetro.
5. Declare cada comando da tela como uma `ScreenAction` em `actions`, com
   `keys`, `description`, `icon` e `run`. O shell roda a ação pela tecla,
   mostra na barra inferior, no help e na paleta de comandos (`Ctrl+K` ou
   `:`) e roda no clique. A aba declara `icon`. A barra mostra o número e o
   ícone do papel.
6. Ligue todo elemento clicável à mesma função de uma ação. `button({ key,
   label, icon, onPress })`, a linha de `listPanel`, a linha de `table` e o
   item de `stateView` chamam a função que a ação com aquela tecla chama.
   Teclado e mouse chegam ao mesmo efeito. Para o ponteiro de mão e o retorno
   ao sair, use `clickable` de `src/tui/pointer.ts`.
7. Leia `ctx.layout()` e componha para `wide` (a partir de 120 colunas),
   `medium` (a partir de 80) e `compact` (abaixo de 80). O shell remonta a
   tela quando a faixa muda, então `mount` precisa funcionar nas três.
   Abaixo de 60×16 o shell mostra "terminal too small"; não duplique essa
   mensagem.
8. Pergunte com `ctx.confirm`, `ctx.prompt` e `ctx.choose` em vez de montar
   uma tela de formulário improvisada. Use `danger` em `confirm` para apagar
   ou limpar, `secret` para um valor que não pode aparecer e `validate` para
   recusar entrada com mensagem.
9. Use `ctx.status` para o resumo da tela e `ctx.notify(message, tone)` para
   o resultado de cada ação. Os toasts se empilham no canto inferior direito.
10. Mantenha o foco visível no painel ativo, com `borderActive` ou o papel
    equivalente do tema. `Tab` e `Shift+Tab` movem o foco entre os painéis
    da tela, sem trocar de aba.
11. Declare `Screen.watch()` com os arquivos que a tela lê. O shell recarrega
    a tela quando outro processo muda um desses arquivos. Não crie polling
    para o mesmo fim.
12. Use `mount` para criar nós. Inicie trabalho ativo em `onEnter` e
    interrompa em `onLeave`. Pare timers em `onPause` quando a janela perde
    o foco e retome em `onResume`. Trate também `renderer` emitindo
    `destroy`.
13. Ligue animação curta a `ctx.motion`, que segue a setting `tui.motion`.
    Nada pisca, nada rola sozinho e nenhuma transição atrasa a leitura.
14. A aplicação é dona do renderer. Uma tela usa `ctx.quit()`; não chama
    `process.exit()`, não cria outro renderer e não escreve em stdout.
15. Retorne `true` de `onKey` apenas para uma tecla consumida pela tela.
    Preserve as teclas globais durante navegação. Prefira `actions` a `keys`
    mais `onKey` em telas novas.
16. Não reconstrua a árvore inteira para atualizar um texto. Preserve seleção
    e posição de leitura, limite logs em memória e cancele consultas antigas.
17. Compartilhe serviços com CLI e MCP. A tela apresenta resultados; não
    duplica autenticação, persistência ou chamadas HTTP já existentes.
18. Não apresente um exemplo como integrado sem registrar a tela, declarar
    as ações, marcar os itens da spec e conferir o comportamento no host
    Termfy.

## Procedimento

1. Confira o Git e a spec aberta. Liste o que já funciona e o que a tela
   acrescenta.
2. Escolha um padrão em `references/screen-patterns.md` e ajuste pelo
   exemplo de `references/examples/README.md`. Copie apenas o necessário.
3. Monte a árvore com limites de largura e altura. Dê texto próprio aos
   estados vazio, carregando, erro e pronto, além de ação para tentar de
   novo.
4. Registre a tela em `src/tui/screens/index.ts`. Para permitir abertura
   direta, atualize também `tui.initialTab` em `src/config/settings.ts` e
   `--tab` em `src/cli/commands/tui.ts`.
5. Integre teclas, foco e diálogos. Declare as ações com `keys`,
   `description`, `icon` e `run`. Se precisar mudar o contrato
   `Screen.onKey`, altere host, tipos, testes e documentação juntos. Não
   simule modificadores com nomes de teclas que o contrato atual não recebe.
6. Teste a lógica isolada, depois a tela com `createTestRenderer` e
   finalmente a navegação pelo `mountTui`. Inclua saída durante uma
   requisição pendente. Use `setup.mockMouse` para o clique, o hover e a
   roda, além de `mockInput.pressKey` para a tecla da mesma ação.
7. Confira `terminal`, `night` e `day` em 60×16, 80×24 e 120×32. Confira a
   paleta, cada diálogo e o frame de erro.
8. Passe a [checklist de qualidade](references/quality-checklist.md) linha a
   linha. Rode a validação do projeto e relate falhas alheias ao escopo.
9. Atualize `docs/tui.md` e os exemplos de uso. Se a tela mudou em relação
   à spec, revise a Surface e o Behavior com `termfy-spec`.

## Itens da spec

Ao começar, troque `Status:` para `in_progress` na spec e na linha dela no
índice do `CLISPEC.md`. Depois de implementar e testar, marque `[x]` no
item da spec, editando o arquivo em `specs/`. Item novo entra no fim de
Tasks ou Tests, com a tag `#termfy-tui`. Mantenha `in_progress` enquanto
houver entregas por fazer. Use `termfy-spec` se o comportamento combinado
mudar e registre a alteração em `## Notes` da spec. Não mexa na
superfície do `CLISPEC.md` enquanto a spec está aberta: a screen nova fica
só na Surface da spec. Execute `bun run validate`. Com todos os itens
marcados, feche a spec pelo ciclo de `termfy-spec`: faça a conferência
manual descrita em `references/spec-contract.md` daquela skill, aplique a
Surface às tabelas do `CLISPEC.md` e troque o status para `done`. Uma
verificação reprovada não equivale a entrega validada.

## Marcos e saída

Informe quando a tela estiver montada, quando teclado, mouse, diálogos e
cleanup estiverem conferidos e quando os testes e a documentação terminarem.
Entregue os arquivos alterados, versões verificadas, teclas, ações, estados
cobertos, faixas ensaiadas e um frame real capturado. Identifique
separadamente testes executados, exemplos apenas compilados e comportamentos
ainda não exercitados.

## Compatibilidade

Starter kit a partir da v0.13.0 (tokens de espaçamento em `ctx.space`,
paleta de comandos em `Ctrl+K` e `:`,
`ctx.layout()` com as faixas `wide`, `medium` e `compact`, diálogos
`confirm`, `prompt` e `choose`, toasts, `Screen.watch()`,
`onPause`/`onResume`, setting `tui.motion`, componentes `table`,
`stateView`, `spinner`, `progressBar`, `link` e `src/tui/pointer.ts`) e
OpenTUI Core 0.8.4, conferidos no checkout. A faixa `^0.8.4` não prova qual
versão está instalada. Não atualize dependências somente porque a
documentação online apresenta uma versão posterior. As referências
originais em `references/opentui/` permanecem com licença e marcador
`.terceiros`; os guias e exemplos Termfy ficam fora dessa pasta.
