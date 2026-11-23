# Padrões de tela

Cinco composições cobrem quase toda aba de um binário Termfy. Cada padrão
traz quando usar, componentes, teclas, composição nas três faixas de largura
e como testar. Leia com `termfy-tui`, com o arquivo `src/tui/screen.ts` do
projeto e com [a checklist de qualidade](quality-checklist.md).

## Faixas de largura

`ctx.layout()` devolve `wide` a partir de 120 colunas, `medium` a partir de
80 e `compact` abaixo de 80. O shell remonta a tela quando a faixa muda, e
`mount` recebe o mesmo `ctx`. Abaixo de 60×16 o shell troca a tela pela
mensagem "terminal too small". Componha para a faixa, não para uma medida
exata de coluna.

## Lista e detalhe

**Quando usar:** coleção com seleção e painel de leitura, como uma família
de commands ou um recurso com campos próprios.

**Componentes:** `table` para a coleção, com cabeçalho que ordena no clique
e linha clicável; `stateView` para carregando, vazio e erro; `panel` com
`keyValueTable` para o detalhe; `link` para origens externas.

**Teclas recomendadas:** setas e `j`/`k` movem a seleção; `return` abre o
detalhe; `esc` volta à lista; `r` recarrega; `n` cria pelo `ctx.prompt`; `d`
apaga com `ctx.confirm` e `danger: true`.

**Composição:** em `wide`, tabela à esquerda com `flexGrow: 2` e detalhe à
direita com 40% da largura. Em `medium`, tabela em cima e detalhe embaixo,
com altura fixa para o detalhe. Em `compact`, uma visão por vez: a lista
ocupa a tela e o detalhe substitui a lista. Ofereça uma ação de voltar.

**Como testar:** capture frames em 60×16, 80×24 e 120×32. Envie a tecla de
mover e confira a linha destacada. Clique na linha e confira o mesmo efeito.
Abra a paleta e confirme que cada ação aparece pelo nome. Aceite e negue o
diálogo de apagar em testes separados.

## Painel de status

**Quando usar:** resumo de saúde, versão, configuração atual ou estado de
um serviço.

**Componentes:** `panel` com `keyValueTable`; `spinner` durante a
recarga; `progressBar` quando a razão é conhecida; `stateView` no erro, com
botão de tentar de novo.

**Teclas recomendadas:** `r` recarrega. Declare `watch()` para os arquivos
lidos, assim outra instância do binário atualiza o painel.

**Composição:** em `wide`, dois painéis lado a lado. Em `medium`, painéis
empilhados com rolagem. Em `compact`, um painel por seção, sem texto
secundário ao lado do valor.

**Como testar:** capture o frame inicial e confira cada rótulo. Acione `r` e
confira o toast do resultado. Confira que nenhum timer continua ativo depois
de `onLeave`.

## Formulário por diálogos

**Quando usar:** poucos campos e entrada pontual, como renomear, criar um
item ou trocar uma credencial.

**Componentes:** `ctx.prompt` com `validate` e `secret`; `ctx.choose` para
uma lista fechada; `ctx.confirm` com `danger` para o efeito destrutivo;
`ctx.notify` para o resultado.

**Teclas recomendadas:** `n` ou `a` abre o diálogo; `return` aceita; `esc`
cancela. O shell cuida do foco e da navegação interna do diálogo. Não
monte uma tela de formulário improvisada para um ou dois campos.

**Composição:** o shell desenha o diálogo. Em `wide` e `medium` ele fica
centralizado com largura limitada. Em `compact` ele usa a largura da tela
com uma coluna de margem. A tela de trás continua visível, então não mude o
conteúdo dela antes da resposta.

**Como testar:** aceite e negue o `confirm` em testes separados. Envie um
valor recusado por `validate` e confira a mensagem com o diálogo aberto.
Envie o valor válido e confira o efeito. Confira que um valor com `secret`
não aparece no frame.

## Visualizador de documento

**Quando usar:** aba Docs, changelog embutido, guia de uso com índice.

**Componentes:** `Markdown` para o corpo, `scrollbox` para a rolagem,
`listPanel` para o índice clicável e `link` para o hyperlink OSC 8.

**Teclas recomendadas:** `return` abre o item do índice; `esc` volta ao
índice; `g` e `G` vão ao início e ao fim do documento. Deixe a roda do mouse
rolar o corpo.

**Composição:** em `wide`, índice com 30 colunas à esquerda e documento à
direita. Em `medium`, índice acima do documento com altura fixa de seis
linhas. Em `compact`, o índice ocupa a tela e o documento o substitui, com
ação de voltar.

**Como testar:** clique em um item do índice e confira o título do
documento. Confira que um link do corpo sai como OSC 8. Role até o fim de
um documento longo e capture o frame.

## Tela de progresso

**Quando usar:** operação longa com etapas contáveis, como baixar, migrar
ou importar.

**Componentes:** `stateView` no estado de carregamento, `spinner` para
trabalho sem total, `progressBar` quando existe total, `ctx.notify` com
`ok` ou `error` no fim e `ctx.confirm` com `danger` para cancelar.

**Teclas recomendadas:** `esc` cancela depois da confirmação; `r` repete a
operação quando ela falha. Não execute dois trabalhos ao mesmo tempo na
mesma tela.

**Composição:** em `wide`, painel centralizado com 64 colunas. Em `medium`,
o painel usa a largura disponível com margem. Em `compact`, uma linha com
percentual e a etapa atual.

**Como testar:** confira o percentual no frame depois de cada avanço.
Negue o cancelamento e confira que o trabalho continua. Aceite o
cancelamento e confira a mensagem final. Confira que o timer para em
`onPause` e em `onLeave`.
