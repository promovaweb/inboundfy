---
name: inboundfy-geo
description: Prepara conteúdo para ser encontrado, compreendido e citado por mecanismos de resposta de IA, sem abandonar intenção humana, SEO e fontes verificáveis.
---

# GEO e descoberta por IA

Use para aumentar a clareza e a citabilidade de páginas, artigos, FAQs,
comparativos, páginas de produto e bases de conhecimento. GEO aqui significa
otimização para respostas generativas.

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

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, o acervo relacionado e
`pesquisa.md`. Consulte `.inboundfy/framework/` para regras de fontes, SEO,
Markdown e escrita.

## Entrada esperada

Receba pergunta, tema, URL, peça existente ou plano de conteúdo. Identifique
quem precisa da resposta, quais afirmações exigem fonte e qual página deve
receber a visita depois da resposta.

## Fluxo

1. Transforme o tema em perguntas reais e subperguntas da persona.
2. Organize respostas diretas, definições, passos, exemplos, limites e
   comparações sem esconder a tese em introduções longas.
3. Nomeie entidades, produtos, pessoas e relações usando a grafia oficial do
   dicionário.
4. Vincule cada afirmação importante ao acervo, à pesquisa ou a uma URL
   canônica do projeto.
5. Use headings descritivos, listas quando ajudam, tabelas quando comparam e
   FAQ somente quando houver perguntas autênticas.
6. Acrescente links internos e dados estruturados apenas quando o conteúdo
   realmente cumprir o formato.
7. Revise voz, persona, proibições, anti-slop e SEO antes de salvar.

## Saída

Entregue um briefing GEO, uma auditoria ou uma peça pronta para o canal, com
mapa de perguntas, respostas, fontes, entidades, links e lacunas.

## Validação

Confirme resposta extraível, contexto suficiente, autoria e fonte claras,
linguagem natural, ausência de conteúdo fabricado e caminho lógico para a
próxima ação. GEO não autoriza escrever para robôs ignorando o leitor.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o mapa existente sem duplicar perguntas ou links. Registre novas
fontes e alterações sensíveis ao tempo com data de consulta.
