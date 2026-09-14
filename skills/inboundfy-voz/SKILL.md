---
name: inboundfy-voz
description: Conduz a definição da voz da empresa, seus tons por situação e seu vocabulário, usando exemplos aprovados para orientar copy gerada por IA.
---

# Voz

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/voz.md`,
`.inboundfy/dicionario.md`, `.inboundfy/proibicoes.md` e amostras fornecidas.

## Entrada esperada

Textos escritos pela empresa, preferências do usuário, exemplos rejeitados e
contextos de canal. Não atribua ao responsável uma frase não fornecida.

## Fluxo

1. Pergunte pessoa verbal, tempo, formalidade, ritmo, humor, densidade,
   abertura, fechamento e relação com a persona.
2. Extraia padrões de frase, vocabulário, tamanho de parágrafo e uso de
   exemplos a partir dos textos aprovados.
3. Separe identidade central de ajustes por canal e por persona.
4. Atualize `voz.md` e registre grafias em `dicionario.md` após confirmação.

## Saída

Uma voz operacional com atributos, tons, exemplos, contraexemplos e regras de
adaptação por persona e canal.

## Validação

Teste um pequeno trecho antes de expandir uma peça. Confira voz, dicionário,
proibições e adequação à persona selecionada.

## Idempotência

Preserve exemplos aprovados e adicione novos padrões com alcance declarado.
