---
name: inboundfy-extrair-faq
description: Extrai uma FAQ ampla de um item do acervo, relacionando perguntas, respostas, fontes, lacunas e pontos que precisam de confirmação.
---

# Extrair FAQ do acervo

Esta skill transforma o bruto e o processado em uma base de perguntas para
pesquisa, planejamento, produção e atendimento. Ela não redige a peça final
nem substitui a base editorial.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Leia
[REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`,
`.inboundfy/inbound.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md` e as regras de
`.inboundfy/framework/`.

## Entrada esperada

Receba um ID do acervo com `bruto.md` e `processado.md` disponíveis. Aceite
retomada de um `faq.md` já existente, mantendo perguntas confirmadas e
ampliando somente os trechos ainda não cobertos.

## Fluxo

1. Leia cada parágrafo do bruto e do processado sem usar memória externa como
   resposta.
2. Extraia perguntas sobre fato, pessoa, empresa, produto, serviço, lugar,
   definição, causa, mecanismo, condição, consequência, exemplo, comparação,
   intenção, público, objeção, oferta, CTA, data, número, fonte e lacuna.
3. Para cada pergunta, registre resposta, origem, estado e observação.
4. Use os estados `respondida`, `parcial`, `conflitante` e `pendente`.
5. Preserve perguntas repetidas quando elas cobrem ângulos diferentes; una
   apenas duplicações exatas.
6. Consulte `.inboundfy/dicionario.md` para nomes e grafias. Não transforme
   uma pergunta em fato sem origem no material ou na pesquisa registrada.
7. Escreva `faq.md` com uma seção por tema e uma seção final de lacunas.

## Saída

Grave `faq.md` no diretório do item. Cada registro deve seguir este formato:

```md
### Pergunta

**Resposta:** <resposta localizada ou "não informado">
**Origem:** `bruto.md#trecho` ou `processado.md#trecho`
**Estado:** respondida | parcial | conflitante | pendente
**Observação:** <limite, fonte necessária ou pergunta para o usuário>
```

A saída deve cobrir o maior número possível de perguntas úteis sem repetir
frases vazias. O README do acervo deve continuar apontando para `faq.md`.

## Validação

Confirme cobertura por parágrafo, entidades, fatos, números, condições,
exemplos, objeções e lacunas. Confira todas as grafias contra o dicionário e
separe respostas localizadas de perguntas sem resposta. Não crie números,
fontes, depoimentos ou intenções ausentes.

## Idempotência

Recalcule a FAQ a partir do bruto e do processado. Preserve perguntas
confirmadas quando uma nova rodada apenas ampliar a cobertura. Ao mudar uma
resposta, mantenha a origem e registre a alteração no próprio arquivo.
