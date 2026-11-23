# TUI

A interface de terminal abre com `{{bin}}` sem argumentos ou com
`{{bin}} tui`. Ela exige stdin e stdout em um TTY; fora disso o processo
encerra com exit code 8.

## Abas

| Aba | Ícone | Conteúdo |
| --- | --- | --- |
| Overview | `overview` | Environment (binary, runtime e platform), State (settings e cofre) e Next steps com comandos de terminal, configuração MCP e ações de copiar/recarregar. |
| Settings | `settings` | Tabela com key, valor e padrão de cada setting, com painel de detalhe. |
| Credentials | `vault` | Nomes das credenciais do cofre, origem da master key e total de credenciais. Valores não aparecem. |
| Docs | `docs` | Índice dos tópicos da documentação embutida e o documento em Markdown. |
| About | `about` | Binary, project, license, credits, standards seguidos e links. |

Cada aba mostra o número e o ícone do papel: ` 1 ⌂ Overview ` e
` 2 ⚙ Settings `. No layout compacto, a aba inativa mostra só o número e o
ícone. O clique abre a aba. A roda do mouse sobre a barra de abas troca de
aba. A aba inicial vem de `tui.initialTab` em settings.json ou de `--tab`,
com os valores `overview`, `settings`, `credentials`, `docs` e `about`.

## Teclas

| Tecla | Ação |
| --- | --- |
| `←` `→` `[` `]` | aba anterior ou seguinte |
| `Tab` `Shift+Tab` | próximo painel ou painel anterior da tela |
| `1` … `9` | ir para a aba de mesmo número |
| `Ctrl+K` `:` | abrir a paleta de comandos |
| `?` | mostrar ou esconder o help |
| `Esc` | fechar o diálogo ou o help; sem modal aberto, sair |
| `q` `Ctrl+C` | sair |

Dentro de um campo de texto, letras e números vão para o campo. `Esc` sai do
campo. Fora de um campo, `Tab` e `Shift+Tab` movem o foco entre os painéis
da tela ativa, sem trocar de aba.

Cada screen declara os próprios comandos em `actions`. O shell executa a
ação pela tecla, mostra na barra inferior, mostra no help, lista na paleta
e executa no clique. As ações da tela aparecem antes das globais.

`keys` mais `onKey` continuam aceitos em telas escritas antes de `actions`.
A entrada de `keys` aparece na barra inferior como legenda e não cria
handler.

## Paleta de comandos

`Ctrl+K` ou `:` abre a paleta. Ela busca pelo nome entre as ações da aba,
as entradas `Go to <aba>`, as ações das outras abas (troca a aba e executa),
"Reload this screen", o help e a saída. A busca aceita as letras em
sequência, sem exigir a palavra inteira. `↑` `↓` e `j`/`k` movem,
`PgUp`/`PgDn` e `Home`/`End` pulam, `Enter` executa e `Esc` fecha. A linha
responde ao clique. O item `^K commands` no canto direito da barra de
status também abre a paleta.

## Barra de status e toasts

A barra inferior tem três áreas: o resumo da tela à esquerda (`ctx.status`),
as ações da tela no meio e `^K commands` à direita. No layout compacto
ficam só `? help` e `q quit` no meio. O clique num item da barra executa a
ação.

O resumo usa o espaço disponível depois de reservar `? help`, `q quit` e
`^K commands`. Ações da tela entram apenas quando cabem inteiras; o resumo
recebe `…` somente se ultrapassar esse espaço.

`ctx.notify(message, tone)` mostra um toast no canto inferior direito. No
máximo três toasts ficam visíveis; o mais antigo fecha primeiro. Cada toast
some em 4 segundos ou com um clique e não recebe teclado. O tom pode ser
`info`, `ok`, `warn` ou `error`.

## Diálogos

O shell desenha os diálogos. A tela pede o valor e recebe a resposta:

```ts
const name = await ctx.prompt({ title: "Add credential", label: "Name" });
const ok = await ctx.confirm({ title: "Remove", message: `Remove ${name}?`, danger: true });
const index = await ctx.choose({ title: "Theme", items: ["terminal", "night", "day"] });
```

| Diálogo | Campos | Interação |
| --- | --- | --- |
| `confirm` | `title`, `message`, `confirmLabel?`, `danger?` | `Enter` no botão em foco, `y` e `n`, `←` `→` e `Tab` entre botões, `Esc` cancela |
| `prompt` | `title`, `label`, `initial?`, `placeholder?`, `secret?`, `validate?` | digitação, paste, `Backspace`, `Ctrl+U` limpa, `Enter` envia por `validate`, `Esc` cancela |
| `choose` | `title`, `items`, `initial?` | `↑` `↓`, `j`/`k`, `PgUp`/`PgDn`, `Home`/`End`, `Enter`, `Esc` |

`confirm` resolve `true` ao aceitar e `false` ao cancelar. `prompt` resolve
o texto ou `undefined` no `Esc`. `choose` resolve o índice ou `undefined`.
`danger` pinta o botão com a cor de erro. `secret` mostra bolinhas e o valor
não chega ao frame. `validate` devolve uma mensagem para manter o diálogo
aberto. Um clique fora do diálogo cancela.

Use esses três diálogos em vez de montar uma tela de formulário. Um campo
novo não precisa de layout, foco nem validação próprios.

## Mouse

A TUI responde ao mouse com `tui.mouse` em `true`, o padrão. O clique numa
aba abre a aba, numa linha de tabela ou de lista seleciona e ativa o item,
num botão, num item da barra, numa linha da paleta ou do help e num botão de
diálogo executa a mesma função da tecla. A roda rola listas e troca de aba
sobre a barra de abas. O item sob o ponteiro recebe destaque e o ponteiro
vira mão sobre o que é clicável.

Com o mouse ligado, a maioria dos terminais deixa de selecionar texto por
arrastar. Use `Shift` e arraste para selecionar. Com `tui.mouse` em `false`,
o terminal volta a selecionar com o mouse e a TUI fica só com o teclado.

## Layout responsivo

`ctx.layout()` devolve três faixas, medidas em colunas: `wide` a partir de
120, `medium` a partir de 80 e `compact` abaixo de 80. O shell remonta a
tela quando a faixa muda, então `mount` precisa funcionar nas três. Em
`wide` os painéis ficam lado a lado. Em `medium` o painel secundário
continua ao lado, com menos largura. Em `compact` a tela empilha em uma
coluna e esconde o conteúdo secundário.

Abaixo de 60×16 o shell troca a tela pela mensagem "Terminal too small" até
o terminal crescer. Não repita essa mensagem na screen.

O shell, as abas e a barra alinham o conteúdo na mesma margem. A aba ativa
recebe um indicador `━` sob o rótulo. Em `medium` e `wide`, as margens
laterais têm três colunas. Os cartões têm padding de duas colunas e uma
linha. Os gaps têm quatro colunas e uma linha. Uma linha vazia separa
cabeçalho, abas, conteúdo e barra. Em `compact`, as margens e o padding
lateral têm uma coluna, sem padding vertical nem linhas de separação.
As screens acessam os tokens por `ctx.space`; componentes usam
`spacingFor(renderer.width)`. Botões usam `[c] copy MCP config`, com a
tecla em accent e dois espaços entre controles. Os cartões limitam a altura
ao conteúdo ou à área de leitura disponível; conteúdo excedente rola.
Diálogos e toasts têm padding de duas colunas e uma linha.

## Arquivos e pausa

`Screen.watch()` devolve os arquivos que a tela lê. Quando outro processo
muda um deles, o shell recarrega a tela e mostra o toast "Updated from disk".
Overview, Settings e Credentials já observam settings.json,
credentials.json e master.key.

Quando a janela do terminal perde o foco, o shell chama `onPause`; ao
recuperar, chama `onResume`. Pare timers e animações em `onPause`. O título
da janela mostra `<título> · <aba>`. O teclado Kitty é ligado quando o
terminal suporta.

A setting `tui.motion` (boolean, padrão `true`) liga as animações curtas de
diálogos e toasts. Com `false`, a interface fica estática.

## Ícones

`src/tui/icons.ts` guarda três conjuntos com os mesmos nomes de papel:
`nerd` (Nerd Font), `unicode` e `ascii`. Os papéis seguem o significado
(`overview`, `about`, `settings`, `terminal`, `copy`, `refresh`, `ok`,
`warn`, `error` e outros), não o desenho.

`tui.icons` escolhe o conjunto. `auto` (padrão) usa `nerd` no Ghostty, no
Kitty, no WezTerm e no Omarchy (`OMARCHY_PATH` ou a pasta
`~/.local/share/omarchy`), `ascii` no console Linux (`TERM=linux` ou
`dumb`) e `unicode` nos demais terminais.

A screen lê os ícones de `ctx.icons` e monta o texto com `withIcon()`.
Nenhum glifo fixo fica no código da screen.

## Tema

Três paletas em `src/tui/theme.ts`: `terminal` (padrão), `night` e `day`.
A escolha vem de `tui.theme`. As cores têm nomes de papel (`accent`,
`textDim`, `border`), não de matiz, para que uma troca de paleta não exija
alterar as screens.

### terminal

O tema `terminal` herda as cores do tema do terminal (Ghostty, Alacritty,
Kitty, Omarchy, Termius, Herdr e outros). Cada cor da TUI é uma referência à
paleta do terminal (as 16 cores ANSI) ou ao texto e fundo padrão, sem
RGB fixo. O terminal pinta com o tema dele, então trocar o tema do terminal
muda a TUI na hora. O fundo é o fundo padrão do terminal, então a
transparência e o blur do terminal continuam.

Ao abrir, a TUI pergunta a paleta ao terminal (OSC 4, 10 e 11) com espera
curta de 300 ms. Com resposta, ela escolhe qual cor da paleta ocupa cada
papel: texto apagado legível sobre o fundo (alguns temas, como o Solarized
Dark, pintam o preto brilhante igual ao fundo), sombra da seleção, acento
com contraste (troca entre a cor normal e a brilhante) e o texto da barra de
teclas. Sem resposta, usa o mapeamento padrão. A escolha do slot vale até a
próxima abertura. As cores em si acompanham o terminal com a TUI aberta.

Mapeamento padrão:

| Papel | Slot |
| --- | --- |
| `background`, `surface`, `surfaceHigh` | fundo padrão do terminal |
| `text`, `textStrong` | texto padrão do terminal |
| `textDim`, `border`, `barText` | ANSI 8 (preto brilhante) |
| `barBackground` | fundo padrão do terminal |
| `accent`, `borderActive`, `keyBackground` | ANSI 4 (azul) |
| `accentSecondary` | ANSI 5 (magenta) |
| `ok` | ANSI 2 (verde) |
| `warn` | ANSI 3 (amarelo) |
| `error` | ANSI 1 (vermelho) |
| `keyText` | texto padrão do terminal |

`night` (Tokyo Night) e `day` (Tokyo Night Day) são paletas fixas em RGB,
iguais em qualquer terminal.

O acento do binário, nesse tema, é um slot ANSI em
`DEFAULT_TERMINAL_SLOTS` (`accent: ANSI.cyan`, por exemplo). Um hex ali
deixaria a TUI fora do tema do terminal.

Um token novo precisa existir nas três paletas. No `terminal`, ele aponta
para um slot ANSI ou para o texto ou fundo padrão do terminal. Os testes
visuais conferem `terminal`, `night` e `day`. Para testar a escolha dos
slots, passe uma paleta conhecida a `terminalTheme(colors)`, como faz
`tests/tui-theme.test.ts`.

Princípios do visual, no estilo modern unix:

- cartões com bordas arredondadas e título em caixa alta acima da borda;
- rótulos apagados à esquerda e valores em cor plena à direita;
- uma cor de accent para o que está ativo, uma secundária para links e
  origens externas; verde, âmbar e vermelho só para estado;
- barra de status sem fundo cheio, com teclas em accent bold e descrição apagada;
- margens, padding e gaps definidos em `src/tui/spacing.ts`, conforme a faixa;
- nada pisca, nada rola sozinho.

## Componentes

`src/tui/components.ts` guarda os componentes compartilhados. Todos recebem
tema e, quando desenham ícone, um `TitleIcon` com `{ icons, name }`.

| Componente | Uso |
| --- | --- |
| `panel` | Cartão com título acima da borda arredondada, `active` para o painel em foco. |
| `scrollPanel` | Cartão com título acima da borda e rolagem por teclado e roda; barra discreta aparece apenas quando o conteúdo excede a altura. |
| `keyValueTable` | Rótulo apagado e valor alinhados, com cor opcional por linha. |
| `table` | Tabela com cabeçalho em caixa alta que ordena no clique, duas colunas entre células, seleção com `›`, linha clicável e teclado. |
| `listPanel` | Lista com rolagem, seleção e clique na linha. |
| `stateView` | Bloco central de `loading`, `empty` ou `error`, com botão. |
| `spinner` | Indicador animado com `start`, `stop` e `setLabel`. |
| `progressBar` | Barra de 0 a 1 com `set(value, label?)`. |
| `link` | Hyperlink OSC 8; o clique copia a URL por OSC 52. |
| `button` | `[tecla] rótulo` clicável, ligado à mesma função da ação. |
| `heading`, `dim`, `list`, `spacer` | Texto e espaçamento. `spacer` não recebe tema. |

`table(renderer, theme, { columns, rows, empty?, onSelect?, onActivate? })`
devolve `{ box, move, select, selected, sortBy, setRows }`. `columns` traz
`key`, `title`, `width?` e `align?`. O clique no cabeçalho ordena e alterna
ascendente e descendente. O primeiro clique na linha seleciona, o segundo
ativa; `Enter` também ativa. `setRows` troca as linhas e preserva o índice
quando ele ainda existe. `empty` é o texto da tabela sem linhas.

Os cartões `panel` e `scrollPanel` recebem conteúdo por `.add()` e expõem
`.body` para acesso direto à caixa interna ou ao viewport de rolagem.

`listPanel(renderer, theme, { title, items, onSelect })` devolve
`{ box, move, select, selected }`. `move(delta)` muda o destaque sem chamar
`onSelect`; `select(index)` também chama; `selected()` devolve -1 na lista
vazia. Os dois componentes respondem ao clique, ao hover e à roda.

`stateView` recebe `kind`, `title`, `message?` e uma `action` opcional com
`key`, `label` e `onPress`. Use nos três estados de uma carga: carregando,
vazio e erro.

About usa um `scrollPanel` com Binary, Project e Credits em sequência no
layout compacto. No médio, Binary e Project ficam em cartões empilhados à
esquerda, com Credits à direita. Standards aparece apenas no largo, abaixo
de Credits. Cada crédito mostra nome e URL na mesma linha, com o papel
abaixo; o largo acrescenta uma linha vazia entre créditos. Executable e
Data usam elipse central, preservando o fim do caminho. Na Overview
80×24, os botões de copiar a configuração MCP e recarregar ficam visíveis
fixos abaixo da leitura de Next steps. Em 100×30, os comandos e a configuração
MCP ficam visíveis em duas colunas; em 80×24, a leitura rola e os botões
continuam visíveis. No compacto, os comandos ficam em uma coluna e a
configuração MCP é omitida.

`clickable(renderer, node, { onClick, onHover })`, em `src/tui/pointer.ts`,
liga o clique, o hover e o ponteiro de mão a qualquer renderable. Use nos
elementos clicáveis que não vêm de `button`, `table` ou `listPanel`.

A barra de rolagem dos cartões aparece somente quando existe conteúdo
excedente e usa trilho `│` em border e polegar `┃` em textDim. A interação
de mouse e a posição continuam no scrollbar nativo; `thinScrollbar` pinta
a apresentação sobre a área da barra e encaminha seus eventos. Docs usa
blocos Markdown estruturados para manter o hanging indent das listas. O
rótulo do cartão mostra o tópico, sem repetir o heading inicial no corpo.

## Como criar uma screen

1. Copie `template/screen/example.ts` para `src/tui/screens/<id>.ts`.
2. Preencha `id`, `title`, `icon`, `description` e `mount(ctx)`. Leia
   `ctx.layout()` e componha para as três faixas. O padrão lista e detalhe
   de `references/screen-patterns.md` da skill `termfy-tui` cobre o caso
   mais comum.
3. Declare os comandos em `actions`. Cada entrada tem `keys`,
   `description`, `icon` e `run`. `hidden: true` tira a ação da barra e a
   mantém no help e na paleta.

   ```ts
   const actions: ScreenAction[] = [
     { keys: ["r"], description: "reload", icon: "refresh", run: (ctx) => { ctx.refresh(); ctx.notify("Reloaded", "ok"); } },
   ];
   ```

4. Monte `table` para a coleção e `keyValueTable` no detalhe. Ligue o
   clique à mesma função da ação, com `button` ou com a linha da tabela.
5. Use `ctx.status` para o resumo da barra e `ctx.notify` para o resultado
   de cada ação. Pergunte com `ctx.confirm`, `ctx.prompt` e `ctx.choose`.
6. Declare `watch()` para os arquivos que a tela lê. Inicie trabalho em
   `onEnter`, pare em `onLeave` e em `onPause`, retome em `onResume`.
7. Registre em `src/tui/screens/index.ts`. A ordem da lista é a ordem das
   abas. O stub exporta a factory `createExampleScreen()`: registre o
   `Screen` que ela devolve, para que seleção e renderables fiquem por
   instância.
8. Se o `id` for uma opção válida de aba inicial, acrescente-o em
   `tui.initialTab` (`src/config/settings.ts`) e em `--tab`
   (`src/cli/commands/tui.ts`).

Um esqueleto de lista e detalhe:

```ts
export function createOrdersScreen(items: Order[]): Screen {
  return {
    id: "orders",
    title: "Orders",
    icon: "list",
    description: "Shop orders",
    actions: [
      { keys: ["return", "enter"], description: "open", run: (ctx) => { void openDetail(ctx); } },
      { keys: ["d", "delete"], description: "delete", run: (ctx) => { void remove(ctx); } },
      { keys: ["r"], description: "reload", icon: "refresh", run: (ctx) => ctx.refresh() },
    ],
    mount: (ctx) => {
      const root = new BoxRenderable(ctx.renderer, { flexDirection: ctx.layout() === "compact" ? "column" : "row", flexGrow: 1 });
      const grid = table(ctx.renderer, ctx.theme, {
        columns: [{ key: "id", title: "Id" }, { key: "status", title: "Status" }],
        rows: items.map((item) => ({ id: item.id, status: item.status })),
        onActivate: () => { void openDetail(ctx); },
      });
      root.add(grid.box);
      if (ctx.layout() !== "compact") root.add(detailPanel(ctx, items[0]));
      return root;
    },
    onEnter: (ctx) => ctx.status(`${items.length} orders`),
  };
}
```

A TUI roda sobre o OpenTUI (`@opentui/core`). Use `BoxRenderable`,
`TextRenderable`, `ScrollBoxRenderable` e os demais renderables do pacote.
Toda saída devolve o terminal com `renderer.destroy()`; `mountTui()` já
cuida disso para `q`, `Esc` e `Ctrl+C`.

## Testar sem terminal

`tests/tui.test.ts` monta a interface com `createTestRenderer` de
`@opentui/core/testing`, envia teclas com `mockInput.pressKey` e confere
o frame com `captureCharFrame`. Capture um frame em 60×16, 80×24 e 120×32
para cobrir as três faixas. `setup.mockMouse` envia clique, hover e roda,
para conferir o caminho de mouse da mesma ação. `mountTui` aceita qualquer
renderer; `startTui` cria o renderer real.

Os diálogos também entram no teste. Aceite e negue um `confirm`. Envie um
valor recusado por `validate` e confira que o diálogo continua aberto.
Capture o frame de um `prompt` com `secret` para conferir a ausência do
valor.
