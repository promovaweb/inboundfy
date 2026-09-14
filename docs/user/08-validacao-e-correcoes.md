# Validação e correções

Toda especialista possui uma validadora de mesmo sufixo:

```text
inboundfy-especialista-linkedin
              ↓
inboundfy-validador-linkedin
```

A validadora lê o brief, o contexto completo, as fontes relevantes, as
proibições e `brand/` quando existir. Ela não corrige o asset. Em caso de
reprovação, registra:

- localização do problema;
- evidência observada;
- regra violada;
- correção verificável;
- skill produtora à qual o trabalho deve voltar.

A produtora cria nova versão e a validadora repete todos os passes. Só uma
ciclo aprovado permite que o asset entre em `97-ativos-finais/`. Em pacotes,
`inboundfy-planejamento-06-auditoria` consolida as aprovações e verifica a
coerência do conjunto.

Os casos em
[examples/validacao-assets](../../examples/validacao-assets/README.md)
demonstram reprovação literal, problema semântico, divergência factual e
violação de marca visual.

## Como ler um relatório

Um relatório reprovado precisa responder:

| Campo | Pergunta respondida |
| --- | --- |
| Localização | Onde o problema aparece? |
| Evidência | O que foi encontrado no asset? |
| Regra | Qual contrato foi violado? |
| Correção | O que precisa mudar para ser verificável? |
| Retorno | Qual especialista recebe o trabalho? |

Uma nota média não compensa um hard gate. A ocorrência de uma proibição, um
fato incorreto ou uma divergência material de marca mantém o status reprovado.

## Exemplo do ciclo

```text
especialista produz v1
        ↓
validadora reprova com evidência
        ↓
especialista produz v2
        ↓
validadora repete todos os passes
        ↓
relatório aprovado
```

Não corrija apenas a frase citada e presuma que o restante continua aprovado.
Depois de uma alteração, a validadora relê o asset inteiro.

## Falta de confirmação factual

Quando a correção depende de preço, URL, data, permissão ou decisão que não
está disponível, o relatório registra a pendência e pede informação. O asset
não avança com um placeholder apresentado como definitivo.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | aprovação individual, reprovação e retorno à produtora |
| Autoridade | `inboundfy-base-validador` e validadoras de asset |
