---
name: inboundfy-anti-slop
description: Audita textos de marketing para remover generalidades, sinais sintéticos e promessas sem base, respeitando voz, persona e canal.
---

# Anti-slop editorial

Use esta skill em cada marco indicado em [ETAPAS.md](ETAPAS.md), antes de
entregar texto público ou quando o usuário pedir uma auditoria de qualidade.
Ela funciona como filtro editorial, não como estilo pronto. A direção vem da
voz, da persona, da estratégia e do acervo.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. Quando a execução envolver mais de um marco, leia também
[ETAPAS.md](ETAPAS.md). O grupo desta skill é **qualidade**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` do projeto, os oito arquivos
de `.inboundfy/` e a base do acervo usada na peça. Consulte também as regras
do framework em `.inboundfy/framework/`, sobretudo proibições globais,
escrita, fontes e templates de canal. Leia `.inboundfy/context/aprendizado.md` para
reaplicar orientações confirmadas no alcance da peça.

## Entrada esperada

Receba texto bruto, rascunho, peça final, relatório de auditoria ou pedido de
reescrita. Identifique canal, persona, acervo, objetivo, estado do pipeline e
código do marco A0 a A6. Se algum vínculo faltar, registre a lacuna antes de
editar.

## Fluxo

1. Identifique o marco em [ETAPAS.md](ETAPAS.md) e leia a entrada correspondente.
2. Faça uma leitura literal contra `proibicoes.md` e o dicionário.
3. Faça uma leitura de sentido: promessas, números, citações, nomes e fatos
   precisam ter base em `acervo/`, fontes locais ou `pesquisa.md`.
4. Remova aberturas genéricas, transições vazias, frases de efeito,
   encerramentos grandiosos, abstrações sem exemplo, adjetivos inflados,
   perguntas retóricas repetidas e fórmulas de contraste usadas como atalho.
5. Reescreva com detalhes verificáveis, verbos ativos, ritmo variado,
   parágrafos proporcionais ao canal e vocabulário da persona.
6. Compare cada trecho com `voz.md`. Preserve a identidade central da marca e
   adapte profundidade, contexto e vocabulário à persona escolhida.
7. Se a tarefa for auditoria, liste achados numerados com trecho, regra,
   motivo e ação. Não altere o arquivo antes da autorização do usuário.
8. Se a tarefa for produção ou revisão autorizada, corrija, registre o ciclo
   e repita todos os passes antes de encaminhar ao próximo marco.
9. Se uma fonte, configuração ou texto mudar, marque auditorias posteriores
   como superadas e reexecute os marcos afetados.

## Saída

Entregue texto revisado ou relatório de auditoria. Registre o código do marco,
o ciclo, o estado e os vínculos de voz, personas, proibições, dicionário,
acervo e pesquisa. No fluxo completo, salve o registro no diretório indicado
em [ETAPAS.md](ETAPAS.md).

## Validação

Confirme ausência de termos e estruturas vetados, presença de base para cada
afirmação verificável, aderência à voz, adequação à persona, naturalidade do
ritmo e compatibilidade com o canal. Texto sem fonte para uma afirmação
sensível não pode avançar para o marco seguinte nem para publicação.

## Responsabilidade do grupo

Faça uma revisão específica de qualidade. Separe achado literal, semântico e estrutural e só libere após nova leitura integral.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** qualidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova auditoria preserva correções já aprovadas, registra o ciclo e só
mantém como pendência os achados ainda presentes. Não transforme ajuste local
em regra global sem confirmação. Alterações posteriores exigem nova execução
dos marcos afetados.
