---
name: inboundfy-voz
description: Conduz a definição da voz da empresa, seus tons por situação e seu vocabulário, usando exemplos aprovados para orientar copy gerada por IA.
---

# Voz

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/aprendizado.md` e amostras fornecidas.

## Entrada esperada

Textos escritos pela empresa, preferências do usuário, exemplos rejeitados e
contextos de canal. Não atribua ao responsável uma frase não fornecida.

## Fluxo

1. Pergunte pessoa verbal, tempo, formalidade, ritmo, humor, densidade,
   abertura, fechamento e relação com a persona.
2. Extraia padrões de frase, vocabulário, tamanho de parágrafo e uso de
   exemplos a partir dos textos aprovados.
3. Separe identidade central de ajustes por canal e por persona.
4. Consulte o histórico de aprendizado e atualize `voz.md` ou registre grafias
   em `dicionario.md` após confirmação do alcance.

## Saída

Uma voz operacional com atributos, tons, exemplos, contraexemplos e regras de
adaptação por persona e canal.

## Validação

Teste um pequeno trecho antes de expandir uma peça. Confira voz, dicionário,
proibições e adequação à persona selecionada.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Preserve exemplos aprovados e adicione novos padrões com alcance declarado.
