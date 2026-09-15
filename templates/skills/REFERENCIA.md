# Referência de {{nome}}

## Referências compartilhadas

- [Preflight e fontes](../../skills/_shared/01-preflight-e-fontes.md)
- [Contrato de artefato](../../skills/_shared/02-contrato-de-artefato.md)
- [Interação e handoff](../../skills/_shared/03-interacao-e-handoff.md)
- [Validação e retomada](../../skills/_shared/04-validacao-e-retomada.md)
- [Contexto editorial](../../skills/_shared/05-contexto-editorial.md)

## Template específico

```markdown
---
id: {{id}}
skill: inboundfy-{{nome}}
estado: rascunho
entrada: {{caminho ou ID}}
fontes:
  - {{caminho}}
---

# {{Título}}

## Resultado

{{Conteúdo específico da skill.}}

## Pendências

- {{pergunta ou “nenhuma”}}
```

## Exemplo completo ilustrativo

```markdown
---
id: 0042
skill: inboundfy-{{nome}}
estado: aprovado
entrada: acervo/0042-2026-09-14-exemplo/processado.md
fontes:
  - acervo/0042-2026-09-14-exemplo/base-editorial.md
---

# Exemplo de resultado

O resultado liga a entrada ao próximo passo e deixa claro o que foi
confirmado, o que depende de resposta e qual arquivo será atualizado.

## Pendências

- nenhuma
```

## Checklist

- [ ] O template contém ID, estado, entrada e fontes.
- [ ] O exemplo mostra um resultado completo.
- [ ] O arquivo aponta para o próximo passo.
- [ ] Voz, personas, dicionário e proibições foram considerados quando
      houver texto público.
- [ ] O caminho é relativo ao projeto consumidor.

## Erros comuns

- Descrever a saída sem mostrar seu formato.
- Usar um exemplo sem ID, fontes ou estado.
- Deixar pendência implícita no texto principal.
- Encaminhar o trabalho sem informar a ação esperada da próxima skill.
