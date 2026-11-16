# Referência da área de growth

## Mapa da área

| Situação | Skill | Resultado |
| --- | --- | --- |
| Aquisição paga: Google, Meta, LinkedIn, TikTok | `inboundfy-growth-anuncios` | plano de campanhas e públicos |
| Peças de anúncio: imagens, vídeos, textos | `inboundfy-growth-criativos-anuncios` | lote de criativos e variações |
| Aquisição orgânica em redes | `inboundfy-growth-social` | plano de conteúdo social |
| Distribuir conteúdo já produzido | `inboundfy-growth-distribuicao` | plano de distribuição por canal |
| Comunidade, grupo, fórum | `inboundfy-growth-comunidade` | plano de comunidade |
| Influenciadores e criadores | `inboundfy-growth-influenciadores` | seleção e briefing de criadores |
| Imprensa e menções | `inboundfy-growth-relacoes-publicas` | pauta e plano de imprensa |
| Parcerias e co-marketing | `inboundfy-growth-parcerias` | proposta e plano de parceria |
| Eventos presenciais ou online | `inboundfy-growth-eventos` | plano do evento |
| Ferramenta gratuita como isca | `inboundfy-growth-ferramentas-gratuitas` | conceito e plano da ferramenta |
| Material rico para captar leads | `inboundfy-growth-lead-magnet` | lead magnet e fluxo de captura |
| Diretórios e marketplaces | `inboundfy-growth-diretorios` | lista priorizada de envios |
| Cadastro e formulário | `inboundfy-growth-signup` | fluxo de cadastro revisado |
| Primeiros dias do cliente | `inboundfy-growth-onboarding` | fluxo de onboarding |
| Página que não converte | `inboundfy-growth-cro` | diagnóstico e hipóteses de conversão |
| Pop-ups e barras | `inboundfy-growth-popups` | regras de exibição e textos |
| Cancelamento e churn | `inboundfy-growth-retencao` | plano de retenção |
| SMS e WhatsApp | `inboundfy-growth-sms` | fluxos de mensagem com opt-in |
| Crescimento que se alimenta | `inboundfy-growth-loops` | desenho de loop |
| Preço e planos | `inboundfy-growth-pricing` | estrutura de preços |
| Paywall e upgrade | `inboundfy-growth-paywall` | pontos e telas de upgrade |
| Lançamento de produto ou turma | `inboundfy-growth-lancamento` | plano de lançamento |
| Indicação e afiliados | `inboundfy-growth-referencias` | programa de indicação |
| Teste A/B de qualquer etapa | `inboundfy-experimentacao` | desenho do experimento |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-area-growth**, do grupo
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
area: inboundfy-area-growth
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

**Pedido:** A gente tem 8 mil visitas por mês no site da clínica e quase ninguém agenda consulta.

**Diagnóstico:** Gargalo entre visita e conversão. Volume razoável de tráfego. Faltam a taxa atual e a página de agendamento.

**Rota:** `inboundfy-growth-cro`.

**Pacote entregue:** URL da página de agendamento, origem principal das visitas, número de agendamentos no mês e persona.

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
