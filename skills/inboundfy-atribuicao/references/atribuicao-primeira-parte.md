# Atribuição com dados próprios

Leia no passo 2 do fluxo, sempre que a fonte da verdade (CRM, ERP,
plataforma de pagamento) não guarda a origem da conversão. A implementação
técnica fica com `inboundfy-rastreamento-conversao`. Este arquivo define o
que precisa ser capturado e como conferir.

## A regra central

A origem precisa ser gravada no mesmo registro que guarda o dinheiro. Se o
CRM sabe que a cliente pagou R$ 389 mas não sabe de onde ela veio, nenhum
relatório de plataforma resolve. Cada conversão real (formulário enviado,
conversa no WhatsApp iniciada, pedido pago) recebe os campos de origem no
instante da conversão.

## Campos mínimos no registro da conversão

| Campo | Exemplo | Origem do dado |
| --- | --- | --- |
| `primeira_origem` | instagram / social / reels-cha-dormir | Cookie próprio gravado na primeira visita |
| `ultima_origem` | google / cpc / marca | UTM da sessão que converteu |
| `pagina_entrada` | /blog/camomila-ou-melissa | URL da primeira visita |
| `id_peca` | B07 | Mapa entre URL ou código e catálogo de peças |
| `autorrelato` | "vi no Instagram" | Campo "como nos conheceu" |
| `codigo_whatsapp` | #B07 | Mensagem pré-preenchida do botão |
| `data_primeiro_contato` | 2026-09-02 | Cookie próprio |
| `consentimento` | sim / não | Banner de cookies |

## Etapas de captura

1. **Conferir antes de construir.** Exporte 30 conversões recentes do CRM e
   conte quantas têm origem preenchida. Abaixo de 70%, a correção de captura
   vem antes de qualquer análise de modelo.
2. **Gravar a primeira origem.** Na primeira visita, um cookie próprio do
   domínio guarda UTM, referenciador e página de entrada. Ele não é
   sobrescrito nas visitas seguintes.
3. **Levar a origem para o formulário.** Campos ocultos recebem primeira e
   última origem no envio.
4. **Levar a origem para o WhatsApp.** O link `wa.me` abre com mensagem
   pré-preenchida contendo um código curto por página ou campanha. O
   atendimento, ou a automação do WhatsApp Business, grava o código no CRM.
5. **Levar a origem para o pagamento.** Checkout externo (link de pagamento,
   Pix com QR dinâmico, plataforma de curso) recebe a origem como parâmetro
   ou metadado do pedido. O webhook de pagamento aprovado copia o dado para
   o CRM.
6. **Perguntar.** "Como nos conheceu?" com opções fechadas que incluam
   indicação, grupo de WhatsApp, podcast, YouTube, evento, Google, Instagram,
   e um campo livre.

## LGPD e consentimento

- Registre a base legal usada para guardar origem ligada a uma pessoa:
  consentimento no banner para cookies de marketing, legítimo interesse
  documentado para dados do próprio formulário.
- Quem recusa cookies de marketing não recebe cookie de primeira origem.
  O relatório trata esse grupo como "origem não consentida", não como
  "direto".
- O relatório de atribuição usa dados agregados. Nome, email e telefone não
  saem do CRM.
- Defina prazo de retenção para o cookie de origem (90 a 180 dias é comum)
  e registre na política de privacidade.

## Conferência depois da correção

- [ ] Uma conversão de teste com UTM aparece no CRM com os oito campos.
- [ ] Uma conversa de teste pelo botão de WhatsApp chega com o código.
- [ ] Um pagamento de teste por Pix chega ao CRM com a origem do pedido.
- [ ] Um visitante que recusou cookies não recebe primeira origem.
- [ ] Após duas semanas, a taxa de conversões com origem passou de 70%.
