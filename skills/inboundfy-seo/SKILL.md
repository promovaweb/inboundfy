---
name: inboundfy-seo
description: Planeja e audita SEO de conteúdo e páginas usando intenção de busca, arquitetura, termos do projeto, links e dados confirmados do acervo.
---

# SEO do Inboundfy

Use para pesquisa e planejamento de busca, briefing SEO, auditoria on-page,
títulos, descrições, headings, links internos, páginas de serviço e clusters.

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

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os oito arquivos de
`.inboundfy/`, a configuração do site em `context/empresa.md`, o acervo relacionado e
as páginas locais apontadas pelo catálogo. Consulte `.inboundfy/framework/`
para as regras globais de escrita e Markdown, além de
`.inboundfy/context/aprendizado.md` para reaplicar orientações confirmadas.

## Entrada esperada

Receba URL ou caminho da página, tema, intenção, persona, região, oferta,
acervo e objetivo de negócio. Para conteúdo novo, use pesquisa atualizada e
salve as fontes no `pesquisa.md` do acervo.

## Fluxo

1. Defina a pergunta da pessoa, o estágio da jornada e o resultado esperado.
2. Mapeie termo principal, variações naturais, entidades, dúvidas, objeções e
   páginas concorrentes sem forçar repetição de palavra-chave.
3. Confira se a promessa da página é comprovada pelo acervo e pela pesquisa.
4. Planeje título, descrição, URL, headings, abertura, links internos, CTA e
   marcação necessária para o formato.
5. Relacione a página a outras peças e bases editoriais do catálogo.
6. Revise com `inboundfy-anti-slop`, voz, persona, proibições e dicionário.

## Saída

Entregue auditoria, briefing ou peça SEO com quadro de intenção, estrutura,
termos, links, fontes, CTA e IDs relacionados.

## Validação

Confirme que a página responde à intenção, apresenta informação útil antes do
CTA, usa linguagem natural, tem hierarquia semântica, links pertinentes,
metadados coerentes e nenhuma afirmação sem fonte.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova auditoria atualiza o relatório existente e preserva ajustes manuais.
Não altere URL ou estrutura de páginas sem registrar a proposta no pipeline.
