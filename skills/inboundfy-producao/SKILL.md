---
name: inboundfy-producao
description: Produz peças de inbound marketing por canal a partir do acervo, base editorial, voz e persona, mantendo templates, frontmatter e links de origem.
---

# Produção por canal

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

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/links.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/aprendizado.md`, o acervo e o pipeline.

## Entrada esperada

Canal ativo, título, uma ou mais personas, um ou mais IDs de acervo, objetivo,
formato, CTA e data opcional.

## Fluxo

1. Confirme canal e personas antes de redigir.
2. Use `inboundfy content create <canal> "Título" --persona persona-01 --acervo 0001`.
3. Redija dentro da pasta `canais/<canal>/<id>-<data>-<slug>/README.md`.
4. Aplique voz, dicionário, proibições e aprendizados confirmados; faça a
   adaptação específica do canal.
5. Antes de expandir uma peça longa, execute `inboundfy-anti-slop` no marco A4
   sobre o outline, a abertura e a primeira unidade substancial. Registre a
   o ciclo no acervo ligado à peça e aguarde o checkpoint de direção quando
   necessário.
6. Depois de escrever o asset completo, execute `inboundfy-anti-slop` no marco
   A5 e registre `auditorias/anti-slop/05-peca.md`.
7. Rode o validador do canal e registre fontes, acervos, personas e estado.
8. Se houver outra adaptação do mesmo acervo, use novo ângulo e novo ID.

## Saída

Uma pasta GitHub-friendly com `README.md`, frontmatter completo, conteúdo,
referências, CTA, checklist de revisão e caminhos relativos.

## Validação

Confira estrutura do canal, links, persona, acervo, voz, proibições, dicionário,
os marcos A4 e A5, frontmatter e validador pareado antes de mover para
`aprovado`.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Edite a peça pelo ID. Não crie cópia quando o usuário pediu uma revisão.
