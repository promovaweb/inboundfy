# REFERENCIA.md — thothfy-planejamento-02-pesquisa

## Template de `ativos.md`

```markdown
# Ativos editoriais — <slug-do-pacote>

## Teses

- <tese defendida> — trecho de origem: "<citação exata>" (bloco N da base limpa)

## Exemplos e dados

- <exemplo ou número citado> — origem: <bloco N>

## Dores

- <dor mencionada> — persona relacionada: <persona de context/publico.md, ou "não identificada">

## Objeções

- <objeção mencionada> — persona relacionada: <persona>

## Perguntas frequentes (explícitas ou implícitas)

- <pergunta>

## Entidades citadas

- <nome> — tipo: <produto | serviço | pessoa | ferramenta> — status: <confirmada em context/ | não cadastrada, sinalizar>
```

## Exemplo preenchido (fictício)

```markdown
# Ativos editoriais — cancelamento-primeiro-mes-estoque

## Teses

- Cliente cancela no primeiro mês majoritariamente por não conseguir migrar
  o estoque antigo, não por insatisfação com o produto — trecho de origem:
  "a maioria liga achando que o sistema é ruim, mas quando a gente pergunta
  o motivo real é sempre a migração" (bloco 2 da base limpa).

## Exemplos e dados

- 6 em cada 10 tickets de cancelamento no primeiro mês mencionam "migração"
  ou "importar planilha" — origem: bloco 3.

## Dores

- Medo de perder o histórico de estoque ao trocar de sistema — persona
  relacionada: "gestor de pequeno varejo" (não confirmada em
  `context/publico.md` neste exemplo fictício).

## Objeções

- "Meu estoque é muito bagunçado para migrar" — persona relacionada: mesma
  acima.

## Perguntas frequentes

- Como faço para importar minha planilha de estoque atual?

## Entidades citadas

- "Importador de planilha" — tipo: funcionalidade — status: não cadastrada
  em `context/produtos.md` neste exemplo; sinalizar para confirmação antes
  de qualquer peça final mencionar essa funcionalidade.
```

## Checklist de qualidade

- [ ] Toda tese, exemplo, dor e objeção tem referência rastreável ao bloco
      de origem na base limpa.
- [ ] Toda entidade citada foi checada contra `context/`; entidade não
      cadastrada está sinalizada, não descrita como se fosse fato
      confirmado.
- [ ] Nenhum item do arquivo está escrito com voz editorial — ainda é
      registro de repertório, não copy.
- [ ] Dores e objeções, quando possível, estão conectadas a uma persona de
      `context/publico.md`.

## Erros comuns

- Escrever os ativos já como parágrafo de copy pronto — o objetivo é
  repertório reutilizável, não rascunho de peça.
- Inventar dado ou estatística que soa plausível mas não está no material —
  toda extração precisa de origem rastreável.
- Confirmar uma entidade citada como se já estivesse em `context/` sem
  checar de fato o arquivo correspondente.
