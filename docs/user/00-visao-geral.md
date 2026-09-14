# Visão geral

## Escolha pelo estado da entrada

| O que já existe | Ponto de entrada | Resultado |
| --- | --- | --- |
| Uma ideia curta | `inboundfy-brainstorm` | Brainstorm validado |
| Uma campanha a definir | Estratégia `00` | Plano e calendário |
| Material bruto ou peça-base | `inboundfy-acervo` | Pacote auditado e saídas por canal |
| Brief de uma peça | Especialista do canal | Peça avulsa validada |
| Instalação ausente ou parcial | `inboundfy-setup` | Ambiente reconciliado |

## Sequências automáticas

`inboundfy-brainstorm` executa `00` a `04`. `inboundfy-acervo` conduz o ciclo
completo de um material: registro, processamento, FAQ, pesquisa, base
editorial, possibilidades, escolha de canais e personas, produção, revisão,
calendário e catálogo. `inboundfy-iniciar` permanece como atalho que encaminha
esse fluxo. Cada asset produzido passa pela validadora do canal antes da
auditoria final.

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

`inboundfy-acervo` identifica o material bruto, abre o pipeline completo e
respeita os dois canais informados. Se você chamar `inboundfy-iniciar`, ele
encaminhará a mesma execução.

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
