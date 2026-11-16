---
name: inboundfy-anti-slop
description: Audita e corrige texto de marketing em cada marco A0 a A6, removendo generalidades, sinais de texto sintético, fórmulas prontas e promessas sem fonte, preservando voz, persona e canal. Use quando a pessoa disser que o texto está genérico, com cara de IA, raso ou repetitivo, ou quando outra skill chegar a um marco de auditoria.
---

# Anti-slop editorial

Filtro editorial, não estilo pronto. A direção vem da voz, da persona, da
estratégia e do acervo. Os marcos, entradas e caminhos de registro estão em
[ETAPAS.md](ETAPAS.md).

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar um deles, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre sem escrever. Após a confirmação, leia as fontes locais relevantes e `.inboundfy/context/empresa.md`.

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

- `AGENTS.md` do projeto e `.inboundfy/context/marca-voz.md`,
  `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`,
  `.inboundfy/context/estruturas-proibidas.md` e
  `.inboundfy/context/glossario.md`.
- `.inboundfy/context/aprendizado.md`, para reaplicar orientações confirmadas
  no alcance da peça.
- A base do acervo usada na peça (`acervo/`, fontes locais, `pesquisa.md`).
- Regras do framework em `.inboundfy/framework/`: proibições globais, escrita,
  fontes e templates de canal. Sem essa pasta, acione `inboundfy-setup`.

## Entrada esperada

Texto bruto, rascunho, peça final, relatório de auditoria ou pedido de
reescrita, enviado pela pessoa ou pela skill do marco (por exemplo
`inboundfy-base-editorial` em A2 e `inboundfy-base-validador` em A5).
Identifique canal, persona, acervo, objetivo, estado do pipeline, código do
marco A0 a A6 e modo (auditoria ou revisão autorizada). Vínculo ausente vira
lacuna registrada antes de editar.

## Fluxo

1. Identifique o marco em [ETAPAS.md](ETAPAS.md) e leia a entrada indicada.
2. Leia o diagnóstico e os passes de [REFERENCIA.md](REFERENCIA.md).
3. Passe literal contra `proibicoes.md`, estruturas proibidas e glossário,
   incluindo frontmatter, títulos, CTA e texto visual.
4. Passe semântico: promessas, números, citações, nomes e fatos precisam de
   base em `acervo/`, fontes locais ou `pesquisa.md`.
5. Passe estrutural: aberturas genéricas, transições vazias, frases de efeito,
   encerramentos grandiosos, abstrações sem exemplo, adjetivos inflados,
   perguntas retóricas repetidas e contrastes usados como atalho. Padrão de
   estilo exige dois ou mais locais demonstrados no trecho.
6. Compare cada trecho com a voz e a persona: preserve a identidade da marca e
   adapte profundidade, contexto e vocabulário à persona. Preserve detalhe
   autoral e não use contagem de palavras como substituto da leitura.
7. Modo auditoria: liste achados numerados no template de
   [REFERENCIA.md](REFERENCIA.md), com trecho, regra, motivo e ação. Não altere
   o arquivo sem autorização do usuário.
8. Modo revisão autorizada: reescreva com detalhes verificáveis, verbos ativos,
   ritmo variado e parágrafos proporcionais ao canal. Acione
   `inboundfy-copy-editor` com alcance `auditar-e-corrigir`, repita todos os passes no arquivo inteiro e
   registre o ciclo.
9. Se fonte, configuração ou texto mudar, marque as auditorias posteriores
   como superadas e reexecute os marcos afetados, conforme
   [ETAPAS.md](ETAPAS.md).

## Saída

Texto revisado ou relatório de auditoria com código do marco, ciclo, estado e
vínculos de voz, persona, proibições, glossário, acervo e pesquisa. No fluxo
completo, o registro fica no diretório indicado em [ETAPAS.md](ETAPAS.md).

## Validação

- Nenhum termo ou estrutura vetada permanece.
- Toda afirmação verificável tem base localizada.
- Afirmação sensível sem fonte impede o avanço ao marco seguinte e à
  publicação.
- O registro do ciclo existe no caminho do marco.

## Responsabilidade do grupo

Faça uma revisão específica de qualidade. Separe achado literal, semântico e estrutural e só libere após nova leitura integral.

## Idempotência

Uma nova auditoria preserva correções já aprovadas, registra o ciclo e só
mantém como pendência os achados ainda presentes. Ajuste local não vira regra
global sem confirmação.
