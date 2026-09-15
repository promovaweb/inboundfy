---
name: inboundfy-contexto-operacao
description: >
  Mantém canais, ferramentas e campanhas nos arquivos canônicos do Inboundfy.
  Use para registrar onde a empresa publica, quais recursos utiliza e como
  cada campanha deve ser acompanhada pelas demais skills do framework.
---

# Inboundfy Contexto de Operação

Skill agrupadora dos domínios que sustentam a operação de marketing. Canais,
ferramentas e campanhas têm arquivos separados e recebem atualizações focadas.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos.

## Arquitetura de execução

Esta skill confirma as sentinelas, seleciona o domínio operacional e carrega a
referência interna correspondente antes de gravar.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): confirme canal, ferramenta ou campanha.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): confira o arquivo e o estado após a alteração.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique voz, personas e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) e depois `references/canais.md`,
`ferramentas.md` ou `campanhas.md`. O grupo desta skill é **contexto**.

## Contexto exigido

- `.inboundfy/context/empresa.md`, para identificar a operação da empresa;
- `.inboundfy/context/canais.md`, para formatos e canais ativos;
- `.inboundfy/context/ferramentas.md`, para recursos disponíveis;
- `.inboundfy/context/campanhas.md`, para status e relações de campanha;
- `.inboundfy/estrategia.md`, quando o pedido envolver calendário ou seleção.

## Entrada esperada

Uma escolha de canal, uma ferramenta nova, uma mudança de operação, uma
campanha ou uma atualização de status fornecida pelo usuário.

## Fluxo

1. Classifique a entrada como canal, ferramenta ou campanha.
2. Leia o arquivo atual e a referência interna do domínio.
3. Registre status, responsável, período, relação e fonte quando esses dados
   forem informados.
4. Atualize somente o arquivo canônico selecionado.
5. Relacione campanha a canais, personas e peças já conhecidas quando houver
   caminho ou ID confirmado.
6. Informe a alteração e o próximo passo operacional.

## Saída

Um registro atualizado em `.inboundfy/context/` com domínio, status, relações e
origem.

## Validação

- O canal está alinhado à lista ativa do projeto.
- Ferramentas foram registradas sem atribuir funções não confirmadas.
- Campanhas têm período, status ou pergunta aberta.
- Relações apontam para caminhos e IDs existentes.
- O arquivo de estratégia foi consultado quando aplicável.

## Idempotência

O mesmo status não é duplicado. Uma atualização posterior acrescenta histórico
ou altera apenas o campo indicado, sem reescrever domínios vizinhos.

## Responsabilidade do grupo

Mantenha os dados da operação prontos para setup, estratégia, calendário,
planejamento e produção. Cada domínio recebe somente seu próprio tipo de dado.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** escolha ou atualização de canal, ferramenta ou campanha;
- **transformação:** atualização do domínio operacional;
- **saída:** arquivo canônico com status e relações;
- **handoff:** estratégia, planejamento, produção ou orquestrador.
