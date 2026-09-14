---
name: inboundfy-anti-slop
description: Audita textos de marketing para remover generalidades, sinais sintéticos e promessas sem base, respeitando voz, persona e canal.
---

# Anti-slop editorial

Use esta skill antes de entregar qualquer texto público ou quando o usuário
pedir uma auditoria de qualidade. Ela funciona como filtro editorial, não como
estilo pronto. A direção vem da voz, da persona, da estratégia e do acervo.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` do projeto, os sete arquivos
de `.inboundfy/` e a base do acervo usada na peça. Consulte também as regras
do framework em `.inboundfy/framework/`, sobretudo proibições globais,
escrita, fontes e templates de canal.

## Entrada esperada

Receba texto bruto, rascunho, peça final, relatório de auditoria ou pedido de
reescrita. Identifique canal, persona, acervo, objetivo e estado do pipeline.
Se algum vínculo faltar, registre a lacuna antes de editar.

## Fluxo

1. Faça uma leitura literal contra `proibicoes.md` e o dicionário.
2. Faça uma leitura de sentido: promessas, números, citações, nomes e fatos
   precisam ter base em `acervo/`, fontes locais ou `pesquisa.md`.
3. Remova aberturas genéricas, transições vazias, frases de efeito,
   encerramentos grandiosos, abstrações sem exemplo, adjetivos inflados,
   perguntas retóricas repetidas e fórmulas de contraste usadas como atalho.
4. Reescreva com detalhes verificáveis, verbos ativos, ritmo variado,
   parágrafos proporcionais ao canal e vocabulário da persona.
5. Compare cada trecho com `voz.md`. Preserve a identidade central da marca e
   adapte profundidade, contexto e vocabulário à persona escolhida.
6. Se a tarefa for auditoria, liste achados numerados com trecho, regra,
   motivo e ação. Não altere o arquivo antes da autorização do usuário.
7. Se a tarefa for produção ou revisão autorizada, corrija e repita todos os
   passes antes de encaminhar ao validador do canal.

## Saída

Entregue texto revisado ou relatório de auditoria. Registre no arquivo final
os vínculos de voz, personas, proibições, dicionário, acervo e pesquisa.

## Validação

Confirme ausência de termos e estruturas vetados, presença de base para cada
afirmação verificável, aderência à voz, adequação à persona, naturalidade do
ritmo e compatibilidade com o canal. Texto sem fonte para uma afirmação
sensível não pode avançar como publicação.

## Idempotência

Uma nova auditoria preserva correções já aprovadas e só registra achados ainda
presentes. Não transforme ajuste local em regra global sem confirmação.
