# Referência da área de seo

## Mapa da área

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

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-area-seo**, do grupo
**area**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Uma skill de área é uma porta. Ela pergunta pouco, escolhe uma rota e sai do
caminho. Quando o pedido mistura duas áreas, atenda primeiro a etapa que
alimenta a outra (medição antes de teste, posicionamento antes de copy,
pesquisa antes de persona) e registre a segunda como próxima etapa.

## Template do pacote de entrada

```markdown
---
area: inboundfy-area-seo
skill_destino: {id da skill}
estado: encaminhado
---

# Pacote para {id da skill}

## Pedido original

{texto do pedido, sem edição}

## O que já se sabe

- Objetivo: {objetivo}
- Persona: {ID e nome em publico.md}
- Canal ou ativo: {canal, URL ou arquivo}
- Números atuais: {dados recebidos ou "não informados"}

## Arquivos e fontes

- {caminho ou URL}

## Perguntas em aberto

- {pergunta ou "nenhuma"}

## Próxima etapa sugerida

{skill seguinte da sequência comum ou "nenhuma"}
```

## Exemplo

**Pedido:** Nosso blog parou de crescer no Google desde março. O que fazer?

**Diagnóstico:** Pedido sobre o site inteiro, com recorte de tempo. Faltam dados do Search Console. Objetivo é o Google.

**Rota:** `inboundfy-auditoria-seo`.

**Pacote entregue:** URL do blog, período de comparação (antes e depois de março), pedido de exportação do Search Console e lista de mudanças feitas no período.

## Checklist

- [ ] O doctor confirmou o setup antes do roteamento.
- [ ] As perguntas feitas eram só as que faltavam.
- [ ] A rota escolhida está na tabela da área.
- [ ] O pacote tem o pedido original sem edição.
- [ ] Dados ausentes aparecem como pergunta.
- [ ] A próxima etapa foi proposta, não executada sem confirmação.

## Erros comuns

- Executar o trabalho da skill de destino dentro da skill de área.
- Acionar duas skills ao mesmo tempo para o mesmo pedido.
- Fazer dez perguntas quando o pedido já responde metade delas.
- Encaminhar sem o pedido original, obrigando a skill seguinte a adivinhar.
- Escolher a skill pelo nome do canal quando o problema está em outra etapa
  (por exemplo, pedir anúncio quando a página não converte).
