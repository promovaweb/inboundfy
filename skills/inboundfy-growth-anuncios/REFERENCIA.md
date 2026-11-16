# Publicidade paga com orçamento e retorno verificáveis

## Arquitetura aplicada

O plano usa o grupo **growth** e os cinco contratos compartilhados de [fontes](../_shared/01-preflight-e-fontes.md), [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md), [validação](../_shared/04-validacao-e-retomada.md) e [contexto editorial](../_shared/05-contexto-editorial.md). O plano pertence à campanha do projeto consumidor. Dados da conta não viram regras permanentes do framework.

## Guia específico do grupo

Registre objetivo, público, canal, oferta e próxima ação junto de ID, fontes e estado. No passo 3 do fluxo, leia [plano de mídia](references/plano-de-midia.md). No passo 6, leia [leitura de resultados](references/leitura-de-resultados.md). Criativos seguem para `inboundfy-growth-criativos-anuncios`; eventos seguem para `inboundfy-rastreamento-conversao`; qualidade do atendimento segue para `inboundfy-growth-revops`. Atribuição entre canais pertence a `inboundfy-atribuicao`.

Antes de propor verba, pergunte: existe procura ativa? A margem sustenta o CAC? Quantas conversões o teste pode produzir? O comercial consegue responder? O pagamento via Pix tem confirmação no servidor? Registre cada resposta com fonte ou pendência.

## Template de plano de mídia

```markdown
---
id: {{campanha}}
skill: inboundfy-growth-anuncios
grupo: growth
estado: rascunho
entrada: {{brief ou campanha}}
fontes: [{{oferta}}, {{exportacao com data}}]
persona: {{id}}
proxima_skill: inboundfy-growth-criativos-anuncios
---
# Plano de aquisição paga
- Objetivo comercial e prazo: {{clientes, região e período}}
- Oferta, preço e fonte: {{dados confirmados}}
- Conversão primária: {{evento e comprovação}}
- Destino e CTA: {{URL e ação}}
- Teto de mídia e custo total de aquisição: {{R$ e composição}}
- CAC máximo e prazo de recuperação: {{conta e hipótese}}
| Canal/campanha | Público e exclusões | Verba | Evento | Hipótese |
| --- | --- | --- | --- | --- |
| {{canal}} | {{segmento}} | {{R$/dia e total}} | {{evento}} | {{hipótese}} |
- Teste: {{variável, controle, janela, teto e responsável}}
- Revisão: {{volume, atraso de conversão, regra de pausa e expansão}}
- Medição: {{UTMs, CRM, consentimento e teste}}
- Pendências: {{campo, responsável e consequência}}
- Próxima ação: {{pessoa, skill e arquivo}}
```

## Exemplo de campanha brasileira fictícia

A Oficina Clara, software fictício de gestão para oficinas de Belo Horizonte, vende assinatura de R$ 300/mês. O brief fictício `acervo/0081-2026-11-15-oficinas/estrategia.md` pede testar demonstrações para persona-02, dona de oficina com três a oito funcionários. As fontes simuladas são `.inboundfy/context/ofertas.md` e um relatório comercial do mesmo pacote. Todos os números abaixo são simulação didática.

O ID é `0081`, o estado é `rascunho` e o teto de mídia é R$ 3.000 em 30 dias. O custo adicional de vendas e produção reservado ao teste é R$ 600. A margem de contribuição mensal estimada no exercício é 80%, ou R$ 240 por cliente. Um prazo de recuperação de três meses limita o CAC total a R$ 720. Com cinco clientes, o CAC total seria R$ 3.600 / 5 = R$ 720. Esses cinco clientes são uma hipótese financeira, não uma previsão.

| Campanha | Verba total | Público | Oferta e evento |
| --- | --- | --- | --- |
| Busca por gestão de oficina | R$ 2.400 | Região atendida, termos comerciais; negativas para emprego e curso | Demonstração, solicitação válida |
| Teste social com demonstração | R$ 600 | Região atendida; excluir clientes e convertidos | Vídeo da agenda, solicitação válida |

O teto de R$ 100/dia é dividido em R$ 80 e R$ 20. O teste social avalia apenas um conceito inicial porque R$ 600 não comporta uma matriz extensa. O cenário supõe 40 solicitações válidas e cinco clientes: CPL de mídia de R$ 75, conversão de lead em cliente de 12,5% e CAC de mídia de R$ 600. Se essa conversão cair à metade, o teto econômico deixa de ser atendido.

Antes da ativação, `inboundfy-rastreamento-conversao` recebe a tarefa de testar uma solicitação única, deduplicar reenvio do formulário e ligar o lead ao CRM. `inboundfy-growth-criativos-anuncios` recebe oferta, público e demonstração da agenda. O destino `/demonstracao` repete a oferta sem prometer economia de horas não medida.

Na leitura simulada após maturação, Busca gasta R$ 2.400, gera 32 leads válidos e quatro clientes. Social gasta R$ 600, gera oito leads válidos e um cliente. Os CPLs coincidem em R$ 75, mas um cliente no social não comprova estabilidade. O plano mantém o teto, pede outra coorte e confere atendimento antes de ampliar. O histórico registra a janela de sete dias usada no exercício para amadurecer as vendas. Próxima ação: a responsável fictícia Leda Morais revisa as cinco oportunidades com `inboundfy-growth-revops`, no mesmo ID. A ativação permanece pendente de autorização e conferência dos eventos.

## Checklist de entrega

- [ ] O gasto diário e o total fecham com o teto.
- [ ] A conta econômica inclui margem, custos adicionais e atraso de receita.
- [ ] Cada canal tem hipótese própria e público atendível.
- [ ] O teste de evento e a ligação com o CRM estão documentados.
- [ ] O destino sustenta a promessa do anúncio.
- [ ] Janela, volume e limitações acompanham a leitura dos resultados.
- [ ] O plano registra responsáveis e encaminhamento.

## Erros comuns na compra de mídia

- Chamar lead barato de sucesso: compare aceitação comercial e clientes por coorte.
- Somar vendas atribuídas por duas plataformas: reconcilie por pedido ou oportunidade.
- Comparar marca com busca genérica: separe a procura já existente da aquisição adicional.
- Aumentar verba após um único cliente: mantenha o teste até a janela e o volume combinados.
- Trocar página, público e criativo simultaneamente: registre o pacote como exploração; não atribua o resultado a uma variável isolada.
- Tratar um clique no botão Pix como pagamento: confirme a transação liquidada.
