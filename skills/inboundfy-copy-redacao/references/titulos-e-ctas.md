# Títulos e CTAs

Leia no passo 5 do fluxo. Ajuda a gerar de três a cinco opções de título e
de CTA para o usuário escolher. Fórmula é ponto de partida: a versão final
precisa de objeto real, fonte e voz do projeto.

## Fórmulas de título por foco

| Foco | Molde | Exemplo ilustrativo |
| --- | --- | --- |
| Resultado | {Resultado} sem {esforço que a persona odeia} | Feche o caixa da loja sem abrir planilha |
| Resultado com prazo | {Resultado} em {prazo confirmado} | Sua marca pronta em 21 dias úteis |
| Problema | Pare de {problema concreto} | Pare de perder agendamento no WhatsApp |
| Público | {Produto} para {público específico} que {situação} | Controle de obra para construtoras que tocam até 10 obras |
| Diferença | {Categoria} que {diferença verificável} | Emissor de nota que confere os dados antes de enviar |
| Prova | {Número com data} {público} já {resultado} | 3.200 MEIs já emitem nota pelo celular |
| Pergunta da busca | {Pergunta que a persona digita} | Como emitir nota fiscal de MEI pelo celular? |
| Mecanismo | {Resultado} com {mecanismo nomeado} | Menos falta na clínica com lembrete automático pelo WhatsApp |

### Como escolher entre as opções

1. Repete a promessa da origem do tráfego? Se o anúncio falou de preço, o
   título fala de preço.
2. Uma pessoa que não conhece a empresa entende sem contexto?
3. Tem objeto concreto (tela, prazo, número, situação)?
4. A fonte confirma tudo que está escrito?
5. Combina com a voz em `.inboundfy/context/marca-voz.md`?

Título que passa nas cinco perguntas vai para o usuário. Os outros ficam
como alternativa para teste com `inboundfy-experimentacao`.

## Subtítulo

O subtítulo responde "como?" ou "para quem?". Ele carrega o mecanismo que o
título não coube. Uma ou duas frases, sem repetir as palavras do título.

## Regras de CTA

| Regra | Fraco | Melhor |
| --- | --- | --- |
| Verbo que descreve a ação | Enviar | Receber o orçamento |
| Diz o que acontece depois | Saiba mais | Ver os planos e preços |
| Primeira pessoa quando cabe na voz | Comece agora | Quero testar grátis |
| Canal explícito quando a conversa sai do site | Fale conosco | Chamar no WhatsApp |
| Compromisso proporcional ao momento | Comprar agora (em artigo de topo) | Baixar o checklist |

Use um CTA principal por bloco. Um secundário pode existir como link de texto
para quem ainda não está pronto ("ver como funciona").

## Microcopy ao redor do CTA

A frase pequena junto ao botão responde ao receio do último segundo. Use só
condições que existem em `.inboundfy/context/ofertas.md`.

| Receio | Microcopy ilustrativa |
| --- | --- |
| Cobrança surpresa | Sem cartão de crédito no teste. |
| Dificuldade de sair | Cancele pelo app, sem multa. |
| Demora | Resposta pelo WhatsApp em até 2 horas úteis. |
| Uso dos dados | Seu contato só será usado para enviar a proposta. |
| Forma de pagamento | Pix com 5% de desconto ou até 6x no cartão. |
| Arrependimento na compra online | 7 dias para desistir e receber o valor de volta. |

O prazo de 7 dias de arrependimento vale para compras feitas fora do
estabelecimento comercial, como pela internet, conforme o Código de Defesa do
Consumidor (art. 49). Use a frase quando a venda for online e a empresa
cumprir a regra.

## Formulário

- Peça só os campos que a próxima etapa usa. Cada campo extra precisa de
  justificativa no brief.
- Nomeie o campo pelo que a pessoa sabe responder ("WhatsApp com DDD").
- Mensagem de erro diz como corrigir ("Digite o CNPJ com 14 números").
- Mensagem de sucesso diz o próximo passo e o prazo ("Enviamos o acesso para
  seu email. Confira também a caixa de promoções.").

## Falhas prováveis

- Título com superlativo sem fonte ("o melhor", "o mais rápido").
- CTA em inglês sem necessidade numa marca que fala português.
- Microcopy prometendo condição que o financeiro não confirmou.
- Botões com cores e pesos iguais para ações diferentes.
