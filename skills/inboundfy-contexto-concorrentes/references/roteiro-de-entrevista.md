# Roteiro de entrevista por campo

Leia nos passos 3 a 5 do fluxo de `inboundfy-contexto-concorrentes`. Faça uma
pergunta por vez e só dos campos que faltam ou mudaram. Cada campo traz a
pergunta principal, sinais de resposta fraca e a reformulação que costuma
destravar a conversa.

## O que oferecem

- **Pergunta:** "Qual concorrente devo registrar e o que ele vende, em uma
  frase?"
- **Resposta fraca:** "Uma solução completa de gestão."
- **Reformulação:** "Se um cliente seu contratasse esse rival amanhã, o que ele
  passaria a usar na rotina?"
- **Como gravar:** produto ou serviço concreto, com o recurso principal.

## Público que atendem

- **Pergunta:** "Que tipo de cliente ele atende? É o mesmo público de vocês ou
  outro segmento?"
- **Resposta fraca:** "Todo mundo."
- **Reformulação:** "Nos casos e depoimentos do site dele, que porte de empresa
  aparece? De qual cidade ou setor?"
- **Como gravar:** porte, setor, região e momento de compra.

## Onde são fortes

- **Pergunta:** "Onde ele é forte de verdade? Isso não vira comparação pública
  automaticamente."
- **Resposta fraca:** "Em nada" ou "só no marketing".
- **Reformulação:** "Quando um cliente escolhe esse rival em vez de vocês, o que
  ele diz que pesou?"
- **Como gravar:** um ou dois pontos fortes reais, com o perfil para quem eles
  importam.

## Onde a empresa se diferencia

- **Pergunta:** "Onde vocês se diferenciam dele, com algo que dá para conferir?"
- **Resposta fraca:** "Somos melhores", "atendimento humanizado", "mais
  qualidade".
- **Reformulação:** "Que número, teste, preço público ou depoimento mostra essa
  diferença? Para que tipo de cliente ela vale?"
- **Como gravar:** diferença, recorte e prova. Sem prova, grave
  `{pendente: qual prova sustenta a diferença X?}`.

Provas aceitas, da mais forte para a mais fraca:

| Prova | Exemplo |
| --- | --- |
| Teste com método descrito | "Faltas caíram de 18% para 7% em 60 dias, 40 salões" |
| Preço ou condição pública dos dois lados | "R$ 89 fixo contra R$ 59 por profissional" |
| Depoimento com consentimento em `context/depoimentos.json` | Cliente que trocou do rival e autorizou citar |
| Recurso documentado que o rival não tem | Página de ajuda pública dos dois lados |
| Relato interno recorrente | "Vendas ouve isso em metade das reuniões", com data |

Relato interno serve para orientar estratégia. Ele não sustenta afirmação em
conteúdo público.

## Citação nominal

- **Pergunta:** "Esse concorrente pode ser citado pelo nome em conteúdo
  público? Quem autoriza isso na empresa?"
- **Resposta fraca:** "Acho que pode."
- **Reformulação:** "Alguém da diretoria, do jurídico ou do marketing já
  confirmou? Enquanto não houver confirmação, vou registrar como não."
- **Como gravar:** sim ou não, autor e data.

## Campos de apoio

| Campo | Pergunta |
| --- | --- |
| Tipo | "Ele vende o mesmo tipo de produto, outro tipo que resolve o mesmo problema, ou é um jeito improvisado (planilha, papel, WhatsApp manual)?" |
| Preço de referência | "Sabe o preço público e como ele cobra: por usuário, por unidade, por uso?" |
| Quando o cliente escolhe este rival | "Qual situação torna justo o cliente preferir ele?" |
| Site | "Qual é o endereço do site oficial?" |

## Incorporação de pesquisa

Quando a entrada vier de um relatório de `inboundfy-concorrentes`, apresente
cada fato candidato assim e aguarde a resposta:

```text
Fato candidato 1 de 3
Rival: MarcaJá
Campo: Onde são fortes
Proposta: "A vitrine no aplicativo traz clientes novos."
Fonte: acervo/0057-.../concorrentes.md (avaliações, 2026-11-11)
Confirma, ajusta ou descarta?
```

Grave só o que for confirmado ou ajustado. Fato descartado fica registrado no
relatório do acervo, não no contexto.
