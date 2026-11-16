---
name: inboundfy-growth-loops
description: Desenha ciclos de crescimento com retorno mensurável e rotinas com gatilho, estado, limites e parada. Use quando o pedido falar em growth loop, ciclo de indicação, conteúdo gerado pelo uso, reinvestimento ou operação recorrente de crescimento.
---

# Loops de crescimento

Mapeie como uma saída alimenta nova entrada e como a equipe mantém esse ciclo. Diferencie o mecanismo de crescimento da rotina operacional que o observa.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de alterar artefatos. Na ausência de qualquer sentinela, apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/canais.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/context/estruturas-proibidas.md`. Localize a oferta e as fontes relacionadas ao pedido. Consulte `.inboundfy/framework/` para os contratos instalados. Acione `inboundfy-setup` quando a configuração precisar de reparo.

## Entrada esperada

Receba objetivo, mecanismo candidato, dados de entrada e retorno, cadência, capacidade operacional, orçamento e ações já autorizadas.

## Perguntas de diagnóstico

- Qual saída cria outra entrada sem depender de novo esforço igual?
- Quanto tempo leva um ciclo completo?
- O sinal tem volume suficiente para justificar ação?
- O que impede uma repetição indevida depois de falha?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme qual valor retorna ao ciclo, qual sinal justifica agir e quem acompanha o resultado.
2. Leia [ciclos, estado e parada](references/ciclos-estado-e-parada.md). Desenhe entrada, ação, valor, distribuição e retorno. Especifique a rotina com gatilho, cadência, estado, limites e condição de parada.
3. Escolha um mecanismo compatível com a oferta: indicação, conteúdo gerado pelo uso, aprendizagem comunitária ou reinvestimento mensurável.
4. Defina evento de retorno, janela, coeficientes, fonte de dados e perda entre etapas. Não trate sequência linear como ciclo.
5. Prepare rotina limitada para observar e manter o mecanismo. Separe consulta de execução, deduplique ações e teste retomada após falha.
6. Execute um piloto, acompanhe coortes e registre continuar, ajustar ou encerrar com motivo e próxima ação.
7. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue mapa causal do ciclo, especificação da rotina, registro de estado, plano de medição e resultado do piloto. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

O ciclo precisa apresentar retorno verificável, denominadores e tempo. A rotina precisa ter chave única, limite, tratamento de erro e parada. Falta de dados gera pendência, não ação automática.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Encaminhamentos

Use `inboundfy-growth-referencias` para indicações, `inboundfy-growth-comunidade` para ajuda entre pares, `inboundfy-growth-distribuicao` para circulação e `inboundfy-metricas` para medição. A observação de concorrentes segue para `inboundfy-engenharia-reversa`; oportunidades de backlinks seguem para `inboundfy-seo-links-externos`.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Registre chave do ciclo, última leitura, ações concluídas e intervalo mínimo entre ações. Após falha, retome somente itens sem confirmação de conclusão.
