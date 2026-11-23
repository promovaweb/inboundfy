# Contrato de tela e integração

Leia com `termfy-tui`, o arquivo `src/tui/screen.ts` do projeto e
[estado e cleanup](async-and-lifecycle.md). Valide uma tela pelo host
completo, além de testar seus componentes isoladamente.

## O que cada campo faz

| Campo | Contrato no starter kit a partir da v0.12.0 |
| --- | --- |
| `id` | Identificador estável, usado na lista de abas e na abertura direta |
| `title` | Rótulo curto mostrado no seletor de abas |
| `icon` | Nome do ícone na aba, lido de `ctx.icons`, como `overview` ou `about` |
| `description` | Linha que descreve a aba no help e na paleta |
| `actions` | Comandos da tela, cada um com `keys`, `label?`, `description`, `icon?`, `hidden?` e `run`; o shell roda pela tecla, pelo clique e pela paleta |
| `keys` | Legendas da barra inferior para telas antigas; declarar aqui não cria o handler |
| `watch()` | Arquivos que a tela lê; o shell recarrega a tela quando outro processo muda um deles |
| `mount(ctx)` | Cria e devolve a raiz visual; chamado na primeira exibição, no `refresh` e na troca de faixa |
| `onEnter(ctx)` | Executa quando a aba fica ativa, inclusive ao retornar |
| `onLeave(ctx)` | Executa na troca para outra aba e no `refresh` |
| `onPause(ctx)` | Executa quando a janela do terminal perde o foco; pare timers aqui |
| `onResume(ctx)` | Executa quando a janela recupera o foco; retome o que parou |
| `onKey(name, ctx)` | Recebe o nome da tecla; `true` interrompe o handler global do Termfy |

O objeto da tela fornece `renderer`, `theme`, `icons`, `layout()`, `motion`,
`goTo(id)`, `refresh()`, `notify(message, tone)`, `status(text)`, `confirm`,
`prompt`, `choose` e `quit()`. `refresh()` refaz `onLeave`, `mount` e
`onEnter` da aba ativa. `notify` mostra um toast no canto inferior direito e
`status` troca o resumo à esquerda da barra. `motion` segue a setting
`tui.motion`. Não há serviço HTTP, storage ou dispatcher implícito nesse
objeto. Injete serviços na factory da tela e use as funções existentes do
domínio.

## Faixas de largura

`ctx.layout()` devolve `wide` a partir de 120 colunas, `medium` a partir de
80 e `compact` abaixo de 80. O shell remonta a tela quando a faixa muda.
Abaixo de 60×16 ele troca a tela pela mensagem "terminal too small".

## Comandos, clique e paleta

Cada comando é uma `ScreenAction`. O shell mostra a ação na barra inferior,
no help e na paleta (`Ctrl+K` ou `:`), roda pela tecla de `keys` e roda no
clique. A paleta busca a ação de qualquer aba pelo nome em `description`;
`hidden: true` tira a ação da barra e a mantém no help e na paleta. Os
elementos clicáveis da tela chamam a mesma função: `button` recebe `key`,
`label`, `icon` e `onPress`. A linha de `listPanel` e a linha de `table`
selecionam e ativam o item. Teclado e mouse chegam ao mesmo efeito, então
teste os dois.

## Diálogos

Pergunte com `ctx.confirm`, `ctx.prompt` e `ctx.choose` em vez de montar uma
tela de formulário. `confirm` resolve `true` ao aceitar e `false` ao
cancelar ou com `Esc`; use `danger: true` para apagar ou limpar. `prompt`
resolve o texto ou `undefined` no `Esc`, aceita `secret` para esconder o
valor e `validate` para devolver uma mensagem e manter o diálogo aberto.
`choose` resolve o índice escolhido ou `undefined`. Os três respondem a
teclado e a mouse.

## Foco entre painéis

`Tab` e `Shift+Tab` movem o foco entre os painéis da tela ativa. O painel em
foco usa `borderActive`. Preserve o foco ao remontar e ao fechar um diálogo.

## Estado por instância

Uma variável no escopo do módulo pode vazar seleção e renderables entre duas
montagens da aplicação ou dois testes. Prefira `createFilesScreen(items)`
retornando um `Screen` novo. Registre uma instância por aplicação.

O host mantém a árvore das abas que já visitou. Não destrua a raiz em
`onLeave`: ela será reutilizada. Interrompa consultas e assinaturas, preserve
as informações necessárias e retome em `onEnter`.

## Cinco integrações frequentes

1. **Painel informativo:** receba os valores prontos, monte texto e tabelas e
   retorne `false` para teclas não tratadas. Não crie timer para texto
   estático.
2. **Lista navegável:** use `listPanel` ou `table`, encaminhe setas e Enter e
   apresente explicitamente o estado vazio com `stateView`. Mover a seleção
   não executa a ação do item.
3. **Consulta remota:** injete uma função que aceite `AbortSignal`, consulte
   em `onEnter`, mostre erro local com `stateView` e descarte respostas
   antigas.
4. **Arquivo lido:** declare o caminho em `watch()`. Não crie polling para o
   mesmo fim.
5. **Confirmação:** mostre o objeto afetado e as ações de confirmar e
   cancelar. Cancele sem executar a ação; restaure o foco ao fechar o
   diálogo.

## Registro e abertura direta

Ao registrar uma aba, confira unicidade do `id`, posição no array e título.
Só exponha o `id` como configuração inicial depois de atualizar o schema de
`src/config/settings.ts` e as opções de `src/cli/commands/tui.ts`.
Teste tanto a troca por teclado quanto a abertura inicial pelo identificador.
Uma aba adicionada apenas ao arquivo de implementação não entra na navegação.

## Retorno e encerramento

`ctx.goTo(id)` muda a aba pelo host; um id desconhecido não cria tela.
`ctx.quit()` destrói o renderer. O evento `destroy` serve para cleanup local
síncrono. Se serviços exigirem liberação assíncrona, implemente essa espera no
host e teste-a: o contrato atual de `onLeave` retorna `void`.
