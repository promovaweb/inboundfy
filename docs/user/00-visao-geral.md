# Visão geral

## Um ponto de entrada

Use `$inboundfy` para qualquer pedido. Conte o que você tem e o que pretende
produzir; a orquestradora verifica o setup e escolhe o fluxo. Você não precisa
memorizar nomes de skills. Especialistas continuam disponíveis para tarefas
isoladas quando você pedir esse caminho diretamente.

## Roteamento interno

| O que já existe | Fluxo interno | Resultado |
| --- | --- | --- |
| Uma ideia curta | `inboundfy-brainstorm` | Brainstorm validado |
| Uma campanha a definir | Estratégia `00` | Plano e calendário |
| Material bruto ou peça-base | `inboundfy-acervo` | Pacote auditado e saídas por canal |
| Brief de uma peça | Especialista do canal | Peça avulsa validada |
| Instalação ausente ou parcial | `inboundfy-setup` | Ambiente reconciliado |

## Sequências automáticas

`inboundfy` encaminha ideias a `inboundfy-brainstorm`, campanhas a
`inboundfy-estrategia` e material bruto a `inboundfy-acervo`.
`inboundfy-brainstorm` executa `00` a `04`. `inboundfy-acervo` conduz o ciclo
completo de um material: registro, processamento, FAQ, pesquisa, base
editorial, possibilidades, escolha de canais e personas, produção, revisão,
calendário e catálogo. `inboundfy-iniciar` permanece como alias compatível.
Cada asset produzido passa pela validadora do canal antes da auditoria final.

Não chame uma fase numerada fora de ordem, exceto para retomar um pacote no
estado registrado. Skills base, de contexto, especialistas e validadoras não
têm numeração porque são escolhidas por responsabilidade, não por cronologia.

## Saídas

- Ideias desenvolvidas: `brainstorms/<data>-<slug>/brainstorm.md`.
- Itens de conhecimento: `acervo/<id>-<data>-<slug>/`.
- Peças finais: `canais/<canal>/<id>-<data>-<slug>/README.md`.
- Agenda mensal: `calendario/AAAA-MM.md`.

Os caminhos podem ser alterados em `.inboundfy/context/canais.md`.

## O que você informa

Não é necessário conhecer o nome de todas as skills. Descreva o material que
já possui, o resultado desejado e qualquer restrição que não possa ser
decidida automaticamente.

Exemplo:

> Tenho a transcrição de uma conversa com um cliente. Quero encontrar ideias
> para blog e LinkedIn, sem publicar nada automaticamente.

`$inboundfy` identifica o material bruto, inicia o acervo e respeita os canais
informados. Especialistas e etapas podem ser chamados diretamente para uma
operação isolada, mas o fluxo padrão começa na orquestradora.

## O que o Inboundfy não faz sozinho

O framework não publica em CMS ou rede social, não escolhe uma versão quando
duas fontes factuais discordam e não inventa preço, promessa, pessoa, produto
ou regra de marca. Essas situações geram uma pendência explícita.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | escolha do fluxo e pontos de entrada |
| Autoridade | wrappers, catálogo e contratos das sequências |
