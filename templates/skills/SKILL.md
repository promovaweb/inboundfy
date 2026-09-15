---
name: inboundfy-{{nome}}
description: >
  {{O que a skill faz, quando deve ser ativada e qual resultado entrega.}}
---

# {{Título da skill}}

{{Uma frase de escopo e uma fronteira explícita.}}

## Arquitetura de execução

Consulte os contratos compartilhados conforme a etapa:

- [preflight e fontes](../../skills/_shared/01-preflight-e-fontes.md);
- [artefato](../../skills/_shared/02-contrato-de-artefato.md);
- [interação e handoff](../../skills/_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../skills/_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../skills/_shared/05-contexto-editorial.md).

## Contexto exigido

{{Arquivos que devem ser lidos antes da execução.}}

## Entrada esperada

{{Campos, caminhos e escolhas obrigatórias.}}

## Fluxo

1. {{Preflight e leitura da referência específica.}}
2. {{Transformação principal.}}
3. {{Registro do resultado.}}
4. {{Handoff ou pergunta necessária.}}

## Saída

{{Caminho, formato, frontmatter e índice atualizado.}}

## Validação

- [ ] {{Condição binária de aprovação.}}
- [ ] {{Fonte, voz, persona e forma conferidas quando aplicáveis.}}

## Idempotência

{{O que permanece, o que pode ser atualizado e quando nasce um novo ID.}}
