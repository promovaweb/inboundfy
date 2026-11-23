# Checklist de qualidade da tela

Aplique antes de declarar uma tela pronta e de novo na revisão. Cada linha
é verificável no código ou em um frame capturado. Leia com `termfy-tui` e
com [os padrões de tela](screen-patterns.md).

## Foco e entrada

- [ ] O foco está visível no painel ativo, com `borderActive` ou equivalente
  do tema. Um frame sem indicação de foco reprova.
- [ ] `Tab` e `Shift+Tab` movem o foco entre os painéis da tela, sem trocar
  de aba.
- [ ] Cada ação está em `actions` com `keys`, `description` e `icon`. A
  mesma ação roda pela tecla, pelo clique e pela paleta de comandos
  (`Ctrl+K` ou `:`).
- [ ] O elemento clicável chama a mesma função da ação, sem cópia da
  lógica. Use `clickable` de `src/tui/pointer.ts` para herdar o ponteiro de
  mão e o retorno ao sair.
- [ ] As teclas globais (`←` `→`, `[` `]`, `1`…`9`, `?`, `q`, `Esc`)
  continuam funcionando na tela.

## Estados

- [ ] Estado vazio com texto próprio e a ação que cria o primeiro item.
- [ ] Estado de carregamento com `stateView` ou `spinner`.
- [ ] Estado de erro com a causa legível e um botão para tentar de novo.
- [ ] O estado pronto mostra a informação principal sem rolagem na faixa
  `medium`.
- [ ] Nenhuma Promise rejeitada fica sem tratamento depois de `onLeave`.

## Layout

- [ ] A tela compõe para `ctx.layout()` e não para uma medida fixa de
  coluna.
- [ ] Em 60×16 a tela cabe ou o shell mostra "terminal too small" sem
  quebrar.
- [ ] Em 80×24 e em 120×32 a hierarquia continua legível.
- [ ] Nenhum texto cai sobre a borda de um painel nem sobrepõe outro texto.
  Conteúdo maior que o painel rola num `scrollPanel`.
- [ ] Espaçamento só de `ctx.space`: margem lateral, linha vazia entre
  blocos e padding dentro do cartão.
- [ ] A barra de baixo mostra `? help`, `q quit` e `^K commands` inteiros em
  todas as larguras; o status usa o espaço que sobra.
- [ ] No layout largo os painéis dividem a largura por proporção, sem painel
  esticado e vazio.
- [ ] A troca de faixa remonta a tela e preserva a seleção que importa.
- [ ] Nada pisca, nada rola sozinho e nenhuma animação passa de
  `ctx.motion`.

## Movimento e efeito

- [ ] Ação destrutiva pede `ctx.confirm` com `danger: true` e mostra o
  objeto afetado.
- [ ] Toda ação que altera estado termina com `ctx.notify` no tom certo
  (`ok`, `warn` ou `error`).
- [ ] `ctx.status` traz um resumo curto da tela, como "12 items" ou
  "saved 12:04".
- [ ] Os toasts se empilham no canto e não cobrem a ação em andamento.

## Cor, glifo e segredo

- [ ] O contraste de `text` sobre `surface` passa em `terminal`, `night` e
  `day`.
- [ ] Nenhuma cor hex aparece fora de `src/tui/theme.ts`.
- [ ] Nenhum glifo fixo aparece fora de `src/tui/icons.ts`. A tela usa
  `ctx.icons` e `withIcon`.
- [ ] Valor com `secret` não entra no frame, no toast, no `ctx.status` nem
  no log. Confira o frame capturado do diálogo aberto.

## Tempo e arquivo

- [ ] `watch()` lista cada arquivo que a tela lê, para outra instância do
  binário atualizar a tela.
- [ ] Timers e assinaturas param em `onLeave`.
- [ ] Timers e animações param em `onPause` e voltam em `onResume`.
- [ ] A tela não reconstrói a árvore inteira para trocar um texto, nem
  acumula componentes a cada `refresh`.
