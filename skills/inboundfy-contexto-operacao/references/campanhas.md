# Domínio campanhas

Referência de `.inboundfy/context/campanhas.md`. Lida no passo 2 do fluxo
quando a entrada abre, atualiza ou encerra uma campanha.

## Função

O arquivo registra campanhas ativas e encerradas com objetivo, KPI,
público, canais, período e status. Ele não decide estratégia: guarda o
estado combinado. O plano tático, o brief e o calendário ficam com
`inboundfy-estrategia` e `inboundfy-planejamento`, e os caminhos deles são
citados no bloco.

## Fluxo do domínio

1. Leia `campanhas.md` para não duplicar campanha com nome equivalente.
2. Campanha nova exige objetivo de negócio, KPI com meta numérica e prazo,
   persona prioritária, canais, período e status.
3. Confira que a persona existe em `publico.md` e os canais em `canais.md`.
   Se faltar, pare e indique `inboundfy-contexto-publico` ou o domínio de
   canais.
4. Ligue a oferta da campanha a `ofertas.md` e o destino a `links.md`.
5. Defina o identificador de campanha para UTM (`utm_campaign`) em
   minúsculas, com hífen, sem acento. A montagem completa por peça é de
   `inboundfy-rastreamento-conversao`.
6. Mudança de status acrescenta linha datada em `Histórico de status`.
7. Ao encerrar, registre o resultado contra a meta e a fonte do número.
   Nunca apague a campanha.

## Roteiro de entrevista

1. "Qual é o nome da campanha e qual marca ela atende?"
2. "Que resultado de negócio ela precisa mover: leads, vendas, retenção,
   reativação, reconhecimento?"
3. "Qual KPI mede isso, com qual meta e até quando?"
4. "Qual persona é a prioridade?"
5. "Quais canais entram?"
6. "Qual oferta ou condição a campanha usa?"
7. "Qual é o período?"
8. "Há verba de mídia paga? Quanto?"
9. "Para onde o CTA leva?"
10. Ao encerrar: "Qual foi o resultado e de onde vem o número?"

## Objetivo e KPI por tipo de campanha

| Tipo | Objetivo de negócio | KPI típico |
| --- | --- | --- |
| Lançamento | adoção de produto ou recurso novo | contas que ativaram o recurso em 30 dias |
| Captação | leads qualificados para vendas | leads que atendem ao perfil, por semana |
| Data sazonal (Black Friday, Dia das Mães) | vendas no período | pedidos ou assinaturas pagas no período |
| Teste grátis | conversão de teste em pago | taxa de conversão do teste em pago |
| Reativação | clientes inativos de volta | clientes reativados em 60 dias |
| Conteúdo contínuo | tráfego orgânico qualificado | sessões orgânicas e cadastros vindos do blog |

## Status

| Status | Significa |
| --- | --- |
| em briefing | objetivo combinado, brief em criação |
| em planejamento | brief aprovado, plano e calendário em criação |
| em execução | peças sendo publicadas |
| pausada | interrompida com data de retomada ou motivo |
| encerrada | período terminou; resultado registrado |

`pausada` não existe no template de origem. Use quando o usuário pedir e
registre o motivo.

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Lançamento do alerta por WhatsApp

- **Cliente/marca:** própria
- **Status:** encerrada
- **Objetivo de negócio:** fazer clientes do plano Crescimento ativarem o alerta por WhatsApp.
- **KPI(s) e meta:** 40% das contas do Crescimento com o alerta ativo até 2026-10-31.
- **Público prioritário:** Persona 02: Gerente de loja com equipe (context/publico.md)
- **Canais envolvidos:** e-mail, blog, Instagram (context/canais.md)
- **Período:** 2026-10-01 a 2026-10-31
- **Orçamento de mídia paga, se houver:** sem mídia paga
- **UTM da campanha:** utm_campaign=alerta-whatsapp-2026
- **Brief de origem:** acervo/0031-2026-09-20-alerta-whatsapp/brief.md
- **Plano de campanha:** acervo/0031-2026-09-20-alerta-whatsapp/estrategia.md
- **Resultado:** 46% das contas com o alerta ativo em 2026-10-31 (fonte: painel do produto, exportado em 2026-11-02)
- **Histórico de status:** 2026-09-20 em briefing; 2026-09-25 em planejamento; 2026-10-01 em execução; 2026-11-02 encerrada
```

## Checklist de completude

- [ ] KPI com meta numérica e prazo.
- [ ] Persona existe em `publico.md`.
- [ ] Canais existem em `canais.md`.
- [ ] Oferta e destino ligados a `ofertas.md` e `links.md`.
- [ ] Identificador de UTM definido.
- [ ] Brief e plano com caminho ou "pendente".
- [ ] Histórico de status datado.
- [ ] Campanha encerrada tem resultado e fonte.

## Erros comuns

- Objetivo vago ("fortalecer a marca") sem KPI.
- Apagar campanha encerrada.
- Citar persona ou canal inexistente.
- Registrar resultado sem fonte do número.
- Criar `utm_campaign` diferente em cada peça da mesma campanha.

## Relações

`inboundfy-estrategia` cria brief e plano. `inboundfy-planejamento` monta o
calendário. `inboundfy-metricas` e `inboundfy-atribuicao` leem KPI, período e
identificador de UTM para medir. `inboundfy-rastreamento-conversao` monta os
parâmetros por peça e os eventos de conversão.
