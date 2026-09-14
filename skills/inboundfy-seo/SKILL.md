---
name: inboundfy-seo
description: Planeja e audita SEO de conteúdo e páginas usando intenção de busca, arquitetura, termos do projeto, links e dados confirmados do acervo.
---

# SEO do Inboundfy

Use para pesquisa e planejamento de busca, briefing SEO, auditoria on-page,
títulos, descrições, headings, links internos, páginas de serviço e clusters.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os sete arquivos de
`.inboundfy/`, a configuração do site em `inbound.md`, o acervo relacionado e
as páginas locais apontadas pelo catálogo. Consulte `.inboundfy/framework/`
para as regras globais de escrita e Markdown.

## Entrada esperada

Receba URL ou caminho da página, tema, intenção, persona, região, oferta,
acervo e objetivo de negócio. Para conteúdo novo, use pesquisa atualizada e
salve as fontes no `pesquisa.md` do acervo.

## Fluxo

1. Defina a pergunta da pessoa, o estágio da jornada e o resultado esperado.
2. Mapeie termo principal, variações naturais, entidades, dúvidas, objeções e
   páginas concorrentes sem forçar repetição de palavra-chave.
3. Confira se a promessa da página é sustentada pelo acervo e pela pesquisa.
4. Planeje título, descrição, URL, headings, abertura, links internos, CTA e
   marcação necessária para o formato.
5. Relacione a página a outras peças e bases editoriais do catálogo.
6. Revise com `inboundfy-anti-slop`, voz, persona, proibições e dicionário.

## Saída

Entregue auditoria, briefing ou peça SEO com mapa de intenção, estrutura,
termos, links, fontes, CTA e IDs relacionados.

## Validação

Confirme que a página responde à intenção, apresenta informação útil antes do
CTA, usa linguagem natural, tem hierarquia semântica, links pertinentes,
metadados coerentes e nenhuma afirmação sem fonte.

## Idempotência

Uma nova auditoria atualiza o relatório existente e preserva ajustes manuais.
Não altere URL ou estrutura de páginas sem registrar a proposta no pipeline.
