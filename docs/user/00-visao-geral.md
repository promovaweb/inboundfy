# Visão geral

## Escolha pelo estado da entrada

| O que já existe | Ponto de entrada | Resultado |
| --- | --- | --- |
| Uma ideia curta | `thothfy-brainstorm` | Brainstorm validado |
| Uma campanha a definir | Estratégia `00` | Plano e calendário |
| Material bruto ou peça-base | `thothfy-iniciar` | Pacote auditado |
| Brief de uma peça | Especialista do canal | Peça avulsa validada |
| Instalação ausente ou parcial | `thothfy-setup` | Ambiente reconciliado |

## Sequências automáticas

`thothfy-brainstorm` executa `00` a `04`. `thothfy-iniciar` pode encaminhar
uma ideia ao brainstorm e, para um pacote completo, executa planejamento
`00` a `06`. Cada asset produzido passa pela validadora de mesmo sufixo antes
da auditoria final.

Não chame uma fase numerada fora de ordem, exceto para retomar um pacote no
estado registrado. Skills base, de contexto, especialistas e validadoras não
têm numeração porque são escolhidas por responsabilidade, não por cronologia.

## Saídas

- Ideias desenvolvidas: `brainstorms/<data>-<slug>/brainstorm.md`.
- Pacotes: `content/<pacote>/`.
- Ativos aprovados: `content/<pacote>/97-ativos-finais/`.

Os caminhos podem ser alterados em `.thothfy/context/canais.md`.

## O que você informa

Não é necessário conhecer o nome de todas as skills. Descreva o material que
já possui, o resultado desejado e qualquer restrição que não possa ser
decidida automaticamente.

Exemplo:

> Tenho a transcrição de uma conversa com um cliente. Quero encontrar ideias
> para blog e LinkedIn, sem publicar nada automaticamente.

`thothfy-iniciar` identifica que existe material bruto, abre o pipeline
completo e respeita os dois canais informados.

## O que o Thothfy não faz sozinho

O framework não publica em CMS ou rede social, não escolhe uma versão quando
duas fontes factuais discordam e não inventa preço, promessa, pessoa, produto
ou regra de marca. Essas situações geram uma pendência explícita.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | escolha do fluxo e pontos de entrada |
| Autoridade | wrappers, catálogo e contratos das sequências |
