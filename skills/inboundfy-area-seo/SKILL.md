---
name: inboundfy-area-seo
description: Recebe pedidos de busca orgânica, faz o diagnóstico mínimo e encaminha para auditoria, palavra-chave, arquitetura, schema, links, GEO ou ASO. Use quando o pedido falar em SEO, Google, tráfego orgânico, ranqueamento, Search Console, ChatGPT ou AI Overviews sem dizer a etapa.
---

# Área de SEO

Ponto de entrada para pedidos de **seo e busca**. Esta skill não
produz o trabalho final: ela entende o pedido, confere o setup, escolhe a skill
da área que resolve a etapa atual e entrega a ela um pacote de entrada completo.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **area**.

## Quando usar e quando não usar

Use para queda ou estagnação de tráfego orgânico, palavra-chave, otimização de página, estrutura de URLs e menus, dados estruturados, páginas em escala, presença em respostas de assistentes de IA, links externos, diretórios e lojas de aplicativos.

Não use para redação de peça de blog com brief pronto (use `inboundfy-area-conteudo`) ou conversão da página (use `inboundfy-growth-cro`).

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta. Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/integracoes.md` e `.inboundfy/context/aprendizado.md`.

## Entrada esperada

Pedido em linguagem natural, com ou sem arquivos, URLs, números ou IDs do
acervo. Aceite a entrada incompleta: as perguntas de diagnóstico completam o
que falta.

## Perguntas de diagnóstico

Faça só as perguntas cuja resposta ainda não está no pedido ou no contexto:

1. O pedido é sobre o site inteiro, uma seção ou uma página específica?
2. Há dados do Search Console, do GA4 ou de uma ferramenta de SEO para anexar?
3. O objetivo é aparecer no Google, em assistentes de IA, em lojas de apps ou em todos?
4. Existe uma mudança recente (migração, redesign, novo domínio) que explique o momento?

## Fluxo

1. Execute `inboundfy doctor --strict`. Se o setup não estiver pronto, acione
   `inboundfy-setup` e pare.
2. Leia o pedido e o contexto. Anote o que já se sabe e o que falta.
3. Faça as perguntas de diagnóstico que faltarem, numa única mensagem.
4. Escolha a rota na tabela abaixo. Quando duas rotas servirem, apresente as
   duas com a recomendada primeiro e espere a escolha.
5. Monte o pacote de entrada com o modelo do [REFERENCIA.md](REFERENCIA.md).
6. Acione a skill escolhida com o pacote. Uma skill por vez.
7. Quando a skill terminar, proponha a próxima etapa da sequência comum, se
   houver, e espere a confirmação.

## Roteamento

| Situação | Skill | Resultado |
| --- | --- | --- |
| Diagnóstico geral, queda de tráfego, site novo | `inboundfy-auditoria-seo` | relatório técnico, de conteúdo e de links com prioridades |
| Palavra-chave, intenção de busca, briefing de SEO | `inboundfy-seo` | mapa de termos e briefing de otimização |
| Texto existente que precisa ser otimizado | `inboundfy-base-seo` | título, descrição, headings e links ajustados |
| Menus, hierarquia, URLs, links internos | `inboundfy-arquitetura-site` | mapa do site e plano de links internos |
| Schema, JSON-LD, resultados enriquecidos | `inboundfy-dados-estruturados` | marcação por tipo de página |
| Muitas páginas a partir de um modelo e uma base de dados | `inboundfy-seo-programatico` | modelo de página, base e regras de qualidade |
| Citações em ChatGPT, Gemini, Perplexity e AI Overviews | `inboundfy-geo` | plano de presença em respostas de IA |
| Conquista de links e menções | `inboundfy-seo-links-externos` | plano de links externos |
| Cadastro em diretórios e catálogos | `inboundfy-growth-diretorios` | lista priorizada e controle de envios |
| App na App Store ou Google Play | `inboundfy-aso` | otimização da ficha do app |

## Sequências comuns

- Site com tráfego parado: `inboundfy-auditoria-seo` → `inboundfy-arquitetura-site` → `inboundfy-base-seo` nas páginas prioritárias.
- Nova seção de conteúdo: `inboundfy-seo` → `inboundfy-area-conteudo` para produzir → `inboundfy-dados-estruturados`.
- Autoridade baixa: `inboundfy-seo-links-externos` → `inboundfy-growth-diretorios` → `inboundfy-geo`.

## Saída

Diagnóstico de três a cinco linhas, a skill escolhida com o motivo, o pacote de
entrada entregue a ela e a próxima etapa sugerida.

## Validação

O setup está pronto, o objetivo foi identificado, uma única skill recebeu o
pacote e todo dado ausente virou pergunta, não suposição.

## Responsabilidade do grupo

Receba o pedido da área, faça o diagnóstico mínimo e encaminhe para uma única skill da área por vez. Não execute o trabalho da skill encaminhada.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** area
- **entrada:** pedido em linguagem natural ligado à área e estado do projeto;
- **transformação:** ação principal descrita no fluxo;
- **saída:** diagnóstico curto, rota escolhida e pacote de entrada para a skill da área;
- **handoff:** skill da área indicada pela tabela de roteamento.

## Idempotência

Uma nova execução relê o pedido e o estado. Se a skill encaminhada já produziu
um resultado para o mesmo ID, retome dela em vez de abrir um item novo.
