# Design da TUI: cartões arejados

O visual organiza a tela em cartões com respiro: margem lateral, linha vazia
entre blocos, padding dentro do cartão e rótulo da seção acima da borda. A
hierarquia vem do espaço, do peso e da cor, nessa ordem. O ritmo é o mesmo em
toda tela porque o espaçamento sai de tokens, como as cores.

## Estrutura fixa da tela

Esquema ilustrativo com rótulos traduzidos; a interface do binário usa inglês.

```text
  ▌ Título  v<version>                               linux-x64 · Bun 1.4.4

   1 ⌂ Overview    2 ⚙ Settings    3 ◈ Credentials    4 ≡ Docs    5 ℹ About
   ━━━━━━━━━━━━

   AMBIENTE                                ESTADO
   ╭──────────────────────────────╮    ╭──────────────────────────────╮
   │                              │    │                              │
   │  rótulo     valor            │    │  rótulo     ● valor          │
   │  rótulo     valor            │    │  rótulo     ✓ valor          │
   │                              │    │                              │
   ╰──────────────────────────────╯    ╰──────────────────────────────╯

   resumo da aba                 r recarregar  ? ajuda  q sair   ^K comandos
```

1. Cabeçalho de uma linha: glifo de marca em acento, título em negrito,
   versão apagada, plataforma à direita separada por `·`.
2. Linha vazia. Abas com número e ícone, separadas por `tabGap`. Um traço
   `━` em acento fica só sob a aba ativa.
3. Linha vazia. Conteúdo em cartões: rótulo em caixa alta acima da borda,
   borda arredondada em `border`, padding interno de `cardPadY` e
   `cardPadX`.
4. Linha vazia. Barra de status sem fundo cheio: resumo da aba à esquerda,
   ações com a tecla em acento e a descrição apagada, `^K commands` à
   direita. O clique no item roda a ação.

## Espaçamento

Os tokens vivem em `src/tui/spacing.ts` e chegam à tela por `ctx.space`.
Nenhuma screen escreve margem, padding ou gap com número solto.

| Token | wide e medium | compact | Uso |
| --- | --- | --- | --- |
| `pageX` | 3 | 1 | margem lateral do conteúdo, das abas e da barra |
| `pageY` | 1 | 0 | linha vazia entre cabeçalho, abas, conteúdo e barra |
| `cardPadX` | 2 | 1 | padding lateral dentro do cartão |
| `cardPadY` | 1 | 0 | padding vertical dentro do cartão |
| `gapX` | 4 | 1 | distância entre cartões lado a lado |
| `gapY` | 1 | 0 | distância entre fileiras de cartões |
| `tabGap` | 4 | 2 | distância entre abas |
| `labelGap` | 3 | 2 | distância entre rótulo e valor |

- Cartão com altura pelo conteúdo. O espaço que sobra fica livre embaixo,
  sem cartão esticado e vazio.
- No layout largo, cartões lado a lado dividem a largura por proporção.
- Conteúdo maior que o cartão rola num `scrollPanel`.

## Paleta

Três temas em `src/tui/theme.ts`: `terminal` (padrão), `night` e `day`.
Papéis:

| Papel | Uso |
| --- | --- |
| `background` | fundo geral |
| `surface` | fundo dos painéis |
| `surfaceHigh` | aba ativa, caixa de ajuda |
| `border`, `borderActive` | borda normal e do painel em foco |
| `text`, `textDim`, `textStrong` | valor, rótulo, título |
| `accent` | o que está ativo ou é ação |
| `accentSecondary` | links, origens externas |
| `ok`, `warn`, `error` | estado, nunca decoração |
| `barBackground`, `barText`, `keyBackground`, `keyText` | barra inferior |

O tema `terminal` não guarda cor: cada papel é uma referência à paleta do
terminal ou ao texto e fundo padrão. A identidade de cor da marca, nesse
tema, é a escolha do slot ANSI em `DEFAULT_TERMINAL_SLOTS`. Não coloque hex
no tema `terminal`.

O padrão de `tui.theme` é `terminal` em todo binário derivado. Um token novo
existe nas três paletas. No `terminal`, ele aponta para
`RGBA.fromIndex(slot)`, `RGBA.defaultForeground()` ou
`RGBA.defaultBackground()`. A escolha de slot conforme as cores reais fica em
`chooseTerminalSlots`, nunca numa screen.

As paletas `night` e `day` são fixas em RGB. A `night` parte do Tokyo Night;
a `day` parte do Tokyo Night Day. Mantenha contraste mínimo 4.5:1 entre
`text` e `surface`.

## Tipografia de terminal

- Rótulos à esquerda, apagados, alinhados pela maior chave; valores à
  direita, em `text`. Use `keyValueTable`.
- Rótulo do cartão acima da borda, em caixa alta, `textDim` negrito, com o
  ícone antes. Títulos de subseção dentro do cartão em `textStrong` negrito.
- Listas com `•` em acento ou `→` para comandos.
- Caixa alta só no rótulo do cartão, no cabeçalho de tabela e em siglas.
- Glifos de uma célula apenas. Evite emoji: largura varia por terminal.
- Ícones de papel vêm de `ctx.icons`, sem glifo fixo na screen.

## Movimento e estado

- Nenhuma animação contínua. Atualize só quando houver dado novo.
- Estado por cor: `ok` verde, `warn` âmbar, `error` vermelho, sempre
  acompanhado de texto, nunca só pela cor.
- Cartão em foco recebe `borderActive`.

## Texto longo

- Valores em uma linha usam `wrapMode: "none"` e recortam na borda.
- Descrições usam `wrapMode: "word"` em painéis com altura automática.
- URLs longas vão em linha própria, em `textDim`, abaixo do rótulo.

## Checklist de revisão

- [ ] Nenhuma cor literal fora de `src/tui/theme.ts`.
- [ ] Nenhum `console.log`.
- [ ] Barra inferior lista as ações da tela.
- [ ] Toda ação tem tecla e clique. O clique chama a mesma função.
- [ ] Abas com número e ícone.
- [ ] Sem glifo fixo fora de `src/tui/icons.ts`.
- [ ] Frame de teste em 80×24 e 120×32 sem texto cortado em rótulos.
- [ ] Margens, paddings e gaps vêm de `ctx.space`, sem número solto.
- [ ] Linha vazia entre abas, conteúdo e barra no layout médio e largo.
- [ ] Funciona com `tui.theme = terminal` em um tema claro e um escuro.
- [ ] Funciona com `tui.theme = day`.
