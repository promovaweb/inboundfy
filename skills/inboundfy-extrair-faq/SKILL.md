---
name: inboundfy-extrair-faq
description: Extrai uma FAQ ampla de um item do acervo, relacionando perguntas, respostas, fontes, lacunas e pontos que precisam de confirmação.
---

# Extrair FAQ do acervo

Esta skill transforma o bruto e o processado em uma base de perguntas para
pesquisa, planejamento, produção e atendimento. Ela não redige a peça final
nem substitui a base editorial.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Leia
[REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e as regras de
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
6. Consulte `.inboundfy/context/glossario.md` para nomes e grafias. Não transforme
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

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** acervo
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Recalcule a FAQ a partir do bruto e do processado. Preserve perguntas
confirmadas quando uma nova rodada apenas ampliar a cobertura. Ao mudar uma
resposta, mantenha a origem e registre a alteração no próprio arquivo.
