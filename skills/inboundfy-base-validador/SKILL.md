---
name: inboundfy-base-validador
description: >
  Aplica o contrato transversal de validação a qualquer asset produzido pelo
  Inboundfy. Use como base obrigatória das skills inboundfy-validador-* para
  confrontar brief, metodologia, todos os contextos, fontes locais, regras e
  contrato da skill produtora. Proibições e estruturas proibidas reprovam o
  asset até correção ou exceção canônica confirmada.
---

# Inboundfy Base Validador

Base de julgamento compartilhada pelas validadoras de asset. Não substitui a
validação específica do canal e não corrige o artefato diretamente.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **base**.

## Contexto exigido

- `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`,
  `.inboundfy/context/publico.md`, `.inboundfy/context/links.md`,
  `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`,
  `.inboundfy/context/aprendizado.md` e
  `.inboundfy/pipeline.md`.
- Todos os arquivos Markdown de `.inboundfy/context/`, sem limitar a leitura
  aos declarados pela produtora.
- `.inboundfy/fontes-projeto.md` e cada fonte local marcada como relevante.
- `brand/`, quando existir: todos os Markdown e os ativos de marca
  relevantes, como logos, tokens, cores, tipografia e aplicações.
- `CONTEXTO.md`, `METODOLOGIA.md`, `ESCRITA.md`,
  `ESTRUTURAS-PERSUASIVAS.md` e demais regras aplicáveis ao asset.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`, sempre.
- `skills/inboundfy-anti-slop/ETAPAS.md` ou a cópia instalada em
  `.inboundfy/framework/skills/inboundfy-anti-slop/ETAPAS.md`, para confirmar
  que a auditoria do asset está no marco A5.

Não atribua autoridade automática a uma fonte descoberta. Aplique a
precedência de `CONTEXTO.md` e registre conflitos sem inventar uma síntese.

## Entrada esperada

Asset candidato, brief de origem, materiais-fonte, nome da skill produtora e
nome da validadora específica que solicitou a auditoria.

## Fluxo

1. Leia `REFERENCIA.md` e monte o manifesto de fontes da auditoria.
2. Leia o asset inteiro, o brief, a `SKILL.md` e a `REFERENCIA.md` da
   produtora, além da referência da validadora específica.
3. Carregue todos os arquivos de `.inboundfy/context/`, o catalogo e as
   fontes locais relevantes. Registre arquivo ausente, template vazio e
   conflito factual como impedimento; não peça à validadora para reparar apoio.
   Se `brand/` existir, leia seus Markdown e inspecione os ativos aplicáveis.
4. Verifique rastreabilidade factual, aderência ao brief, voz, escrita,
   estrutura persuasiva, formato, acessibilidade, metadata, dimensões,
   licenças e demais regras aplicáveis.
5. Execute a conferência das proibições antes dos demais aspectos:
   - execute um passe literal e compare cada termo, expressão e veto de
     `context/proibicoes.md` com o asset inteiro, incluindo frontmatter,
     headings, listas, CTA, alt text e texto incorporado em imagem;
   - faça uma segunda leitura semântica, procurando paráfrase, variação
     morfológica, tradução, eufemismo e tentativa de contornar o veto;
   - confronte a arquitetura completa com cada categoria de
     `context/estruturas-proibidas.md`: abertura, fechamento, vocabulário,
     parágrafo, headings, listas, pontuação, fluidez e autoridade;
   - marque qualquer ocorrência como reprovação automática. SEO, estética ou
     aprovação parcial não anulam esse resultado.
6. Aplique exceção somente quando o próprio arquivo canônico declarar de
   forma explícita a condição permitida e o asset provar que a satisfaz.
   Registre regra, condição e prova; não crie exceção por interpretação.
7. Para texto público, acione `inboundfy-copy-editor` e registre cada achado
   com trecho, localização, regra ou fonte, diagnóstico e ação. Não use notas
   ou percentuais editoriais.
8. Acione `inboundfy-anti-slop` no marco A5 para a leitura de generalidades,
   ritmo, voz, persona, fonte e canal. Confirme o registro
   `auditorias/anti-slop/05-peca.md` ou seu equivalente no pacote.
9. Produza um relatório com comprovação localizada, regra ou fonte violada,
   correção verificável e destino de retorno. Antes de aprovar, execute
   `inboundfy content digest <id>` e inclua no relatório o ID, o caminho
   retornado, o SHA-256 completo e `Veredito: aprovado` nas linhas do formato
   canônico definido em `REFERENCIA.md`.
10. Depois da correção, descarte o resultado anterior como base de
   aprovação, releia o asset inteiro e repita os dois passes do hard gate.
11. Aprove somente quando o hard gate estiver zerado e não houver violação
   nem pendência obrigatória.
   Reprovação volta à skill produtora; divergência estratégica volta ao
   briefing; falta factual irrecuperável é apresentada ao usuário.

## Saída

Relatório conforme `REFERENCIA.md`, salvo em
`06-auditoria/assets/<canal>-<item>.md` no pacote ou junto ao asset avulso
como `<nome-do-asset>.auditoria.md`.

## Validação

- O manifesto prova que todas as classes de fonte aplicáveis foram lidas.
- O relatório contém uma matriz completa de proibições e estruturas
  proibidas, com resultado por categoria.
- Zero ocorrência literal, semântica ou estrutural permanece no asset.
- O asset respeita `brand/` quando a pasta existe; divergência de voz, logo,
  cor, tipografia ou aplicação reprova a peça.
- Cada reprovação cita localização, prova, regra e correção.
- Nenhum asset recebe aprovação condicional.
- O relatório final descreve achados verificáveis, sem notas ou percentuais.
- A skill de destino está registrada de forma inequívoca.
- O relatório identifica o marco A5 e o ciclo executado.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** base
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Reauditar atualiza o mesmo relatório e acrescenta um ciclo ao histórico.
Não cria relatórios paralelos nem altera o asset candidato.
