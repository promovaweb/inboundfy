# Etapa 03: calendário editorial

Única etapa contínua da skill. Roda por período (semana, mês, trimestre),
não por campanha. Distribui no tempo os pacotes das campanhas ativas e a
cadência orgânica de cada canal (conteúdo recorrente sem campanha). Consome o
plano da etapa 02 e nunca o substitui.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/canais.md`: cadência técnica de cada canal e caminho do
  calendário.
- `context/campanhas.md`: campanhas ativas e seus planos.
- `.inboundfy/estrategia.md`: datas sazonais e canais que exigem aprovação
  manual.

## Entrada esperada

Período a planejar, campanhas ativas em `context/campanhas.md` e o
`01-plano/plano-de-campanha.md` de cada uma.

## Fluxo

1. Leia `context/campanhas.md`, o plano de cada campanha ativa e o
   calendário existente do período.
2. Liste a cadência orgânica de cada canal ativo.
3. Marque datas sazonais e feriados do período (Carnaval, Dia das Mães,
   Black Friday, datas do segmento) a partir de `.inboundfy/estrategia.md`.
4. Monte a tabela de capacidade: vagas por canal no período contra pacotes
   pedidos.
5. Distribua os pacotes da fase atual de cada campanha e a cadência
   orgânica, sem passar da cadência técnica.
6. Defina a rota de cada item: material bruto vai para
   `inboundfy-planejamento`, peça avulsa vai para
   `inboundfy-especialista-<canal>`.
7. Conflito de capacidade (mais pacotes do que vagas): apresente três opções
   de redistribuição com a recomendada primeiro e aguarde a escolha.
8. Grave em `calendario/AAAA-MM.md` no formato canônico. Peça já aberta em
   `canais/` entra como linha com ID. Item ainda sem pasta entra na seção de
   reservas.
9. Atualize o calendário existente sem apagar linhas em produção ou
   publicadas.

## Formato canônico de `calendario/AAAA-MM.md`

O formato é lido por `inboundfy-catalogo` e gravado pelo comando
`inboundfy calendario add <data> <peca>`. Cada data é um heading de nível 2.
Cada peça é uma linha de checklist com o ID em negrito.

```markdown
# Calendário {{AAAA-MM}}

## {{AAAA-MM-DD}}

- [ ] **{{id}}** {{título}} · {{canal}} · personas: {{persona-01}} · [peça](../canais/{{canal}}/{{id}}-{{data}}-{{slug}}/README.md) · estado: {{estado}}

## Reservas sem peça

- [ ] reserva · {{AAAA-MM-DD}} · {{canal}} · {{tema}} · campanha: {{nome ou "orgânico"}} · rota: {{inboundfy-planejamento | inboundfy-especialista-<canal>}}

## Capacidade do período

| Canal | Cadência técnica | Vagas no período | Pedidos | Situação |
| --- | --- | --- | --- | --- |
| {{canal}} | {{n por semana}} | {{n}} | {{n}} | {{ok | conflito resolvido em AAAA-MM-DD}} |

## Conflitos resolvidos

- {{canal}}: {{conflito}}. Escolha: {{opção}} ({{pessoa}}, {{data}}).
```

Quando `inboundfy-planejamento` abre a pasta da peça, a linha da reserva sai
da seção de reservas e a linha com ID entra sob a data.

## Exemplo

Caso fictício. Não use como contexto real.

```markdown
# Calendário 2026-08

## 2026-08-04

- [ ] **0041** Quanto tempo um lojista perde digitando estoque · blog · personas: persona-01 · [peça](../canais/blog/0041-2026-08-04-tempo-cadastro-estoque/README.md) · estado: rascunho

## 2026-08-05

- [ ] **0042** Erro de controle manual 1: contagem no fim do mês · linkedin · personas: persona-01 · [peça](../canais/linkedin/0042-2026-08-05-erro-contagem/README.md) · estado: rascunho

## Reservas sem peça

- [ ] reserva · 2026-08-07 · linkedin · erro de controle manual 2 · campanha: lançamento Estoquely Pro · rota: inboundfy-especialista-linkedin
- [ ] reserva · 2026-08-12 · email · newsletter mensal de produto · campanha: orgânico · rota: inboundfy-planejamento

## Capacidade do período

| Canal | Cadência técnica | Vagas no período | Pedidos | Situação |
| --- | --- | --- | --- | --- |
| blog | 1 por semana | 4 | 3 | ok |
| linkedin | 2 por semana | 8 | 10 | conflito resolvido em 2026-07-30 |
| email | 1 por semana | 4 | 4 | ok |

## Conflitos resolvidos

- linkedin: campanha pedia 4 posts na semana 1 e há 2 vagas. Escolha: 2 na
  semana 1 e 2 na semana 2, com 2 posts orgânicos adiados para setembro
  (Carla Nunes, 2026-07-30).
```

## Checklist

- [ ] Nenhum canal passa da cadência técnica no período.
- [ ] Toda linha com ID aponta para a pasta da peça e tem estado.
- [ ] Toda reserva tem data, canal, tema, campanha e rota.
- [ ] Datas sazonais do período foram consideradas.
- [ ] Todo conflito tem escolha registrada com pessoa e data.
- [ ] Itens em produção ou publicados foram preservados.

## Erros comuns

- Alocar peça de conversão antes de a fase de atração terminar.
- Resolver conflito de capacidade a favor da campanha sem perguntar.
- Usar tabela no lugar das linhas canônicas, que o catálogo não consegue
  ler.
- Recriar o mês do zero e perder o estado das peças já produzidas.
