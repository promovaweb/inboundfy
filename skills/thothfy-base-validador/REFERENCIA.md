# REFERENCIA.md — thothfy-base-validador

## Manifesto obrigatório

Registre brief, asset, produtora, validadora, arquivos de metodologia, todos
os arquivos encontrados em `.thothfy/context/`, inventário de fontes e fontes
locais efetivamente lidas. Se `brand/` existir, registre seus Markdown e os
ativos visuais inspecionados. Marque cada item como `lido`, `não aplicável`
com justificativa ou `bloqueio`.

## Template do relatório

```markdown
# Validação de asset — <canal>/<item>

- **Asset:** <caminho>
- **Brief:** <caminho ou peça avulsa>
- **Produtora:** <thothfy-especialista-*>
- **Validadora:** <thothfy-validador-*>
- **Rodada:** <número>
- **Veredito:** <aprovado | reprovado | devolvido para briefing | bloqueado>

## Fontes carregadas

<manifesto completo>

## Achados

| Localização | Evidência | Regra ou fonte | Correção verificável |
| --- | --- | --- | --- |
| <arquivo/seção> | <problema observado> | <origem da regra> | <mudança exigida> |

## Hard gate de proibições

| Categoria | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Vetos de negócio | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Aberturas proibidas | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Fechamentos proibidos | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Vocabulário proibido | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Estruturas de parágrafo | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Headings e listas | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Pontuação e fluidez | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |
| Autoridade e dados | <aprovado/reprovado> | <aprovado/reprovado> | <locais ou nenhuma> |

## Encaminhamento

- **Destino:** <skill produtora | briefing | usuário | nenhum>
- **Instrução:** <o que precisa mudar sem reescrever o asset aqui>

## Histórico

- Rodada <número>: <veredito e síntese>
```

## Exemplo fictício

Uma afirmação de preço divergente de `context/ofertas.md` recebe veredito
`reprovado`, aponta o parágrafo, cita o valor encontrado e o valor canônico,
manda remover ou corrigir a afirmação e retorna à produtora pareada. A
validadora só aprova em nova rodada após reler o arquivo inteiro.

## Checklist

- [ ] Asset e brief foram lidos integralmente.
- [ ] Todos os contextos foram carregados.
- [ ] Fontes locais relevantes foram conferidas.
- [ ] `brand/` foi procurada e, quando presente, suas regras e seus ativos
      aplicáveis foram conferidos.
- [ ] Cada linha de `context/proibicoes.md` foi confrontada com o asset.
- [ ] Cada categoria de `context/estruturas-proibidas.md` foi confrontada
      literal e semanticamente.
- [ ] Frontmatter, headings, listas, CTA, alt text e texto visual entraram
      na varredura.
- [ ] Qualquer exceção cita a permissão canônica e prova sua condição.
- [ ] A varredura completa foi repetida depois da correção.
- [ ] O hard gate terminou com zero ocorrência.
- [ ] Todo achado tem evidência e correção testável.
- [ ] O histórico preserva as rodadas anteriores.

## Erros comuns

- Aprovar pela média quando existe uma violação individual.
- Procurar apenas expressões exatas e deixar passar paráfrase do mesmo
  padrão proibido.
- Corrigir a ocorrência apontada sem procurar o mesmo vício no restante do
  asset.
- Tratar exceção contextual como permissão geral.
- Corrigir o asset dentro da validadora.
- Ler apenas os contextos citados pela produtora.
- Inventar dado para desbloquear conflito ou template vazio.
