# Validação e retomada

Validação comprova se o artefato atende à sua função. Ela não se resume a
nota, média ou passagem de um script.

## Passes

1. Compare o resultado com a entrada, o brief e as fontes.
2. Confira voz, persona, dicionário e proibições.
3. Confira a forma do canal, o frontmatter, os links e o caminho.
4. Registre cada achado com localização, regra, fonte e correção.
5. Corrija na skill produtora e repita a leitura integral.
6. Só altere o estado após a rodada final sem pendência aberta.

Uma validadora relata o problema e devolve o asset à produtora. Ela não edita
o texto recebido. Uma skill de contexto atualiza dados confirmados, sem
restaurar a estrutura administrada pelo setup.

## Registro de revisão

```markdown
## Rodada {{número}}

- **Estado:** {{aprovado | revisao | pendente}}
- **Arquivo analisado:** `{{caminho}}`
- **Local:** {{heading, parágrafo ou campo}}
- **Regra:** {{regra aplicável}}
- **Fonte:** `{{caminho}}`
- **Ação:** {{correção, pergunta ou devolução}}
```

## Retomada segura

- Use o mesmo ID para revisar um item existente.
- Leia o último artefato válido antes de continuar.
- Preserve o bruto, versões aprovadas e histórico de revisão.
- Recalcule derivados quando a origem mudar.
- Crie novo ID quando o pedido trouxer novo material ou novo recorte.

## Exemplo ilustrativo

Um validador encontra CTA sem fonte em `README.md`, linha 34. Registra o
campo, consulta `context/ofertas.md`, devolve a peça à produtora e mantém o
estado `revisao`. Após a fonte ser confirmada, executa todos os passes de novo.

## Checklist

- [ ] A origem foi comparada com o resultado.
- [ ] Todos os contextos aplicáveis foram conferidos.
- [ ] Cada achado tem localização e ação.
- [ ] A rodada final foi repetida sobre o arquivo inteiro.
- [ ] O ID e o histórico foram preservados.

## Erros comuns

- Aprovar porque o texto parece fluido, sem conferir fonte e persona.
- Corrigir só a primeira ocorrência e não reler o asset inteiro.
- Editar o original bruto para fazer a revisão caber no pacote.
- Reabrir um ID antigo para material novo e perder a proveniência.
