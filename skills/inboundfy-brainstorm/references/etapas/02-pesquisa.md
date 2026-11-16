# Etapa 02: pesquisa

Enriquece a ideia com prova rastreável. Não define a redação final e não
atualiza os arquivos de negócio.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/concorrentes.md`, quando o tema envolver mercado ou comparação.
- `context/ferramentas.md` e `context/glossario.md`, quando houver
  tecnologia.
- `context/produtos.md` ou `context/servicos.md`, quando houver oferta
  própria.

## Entrada esperada

`brainstorm.md` com perguntas de pesquisa e status `em-pesquisa`.

## Fluxo

1. Leia o arquivo e a ficha de fonte abaixo.
2. Pesquise afirmações que podem mudar por data, mercado, tecnologia, lei,
   preço ou comportamento. Use busca na web quando disponível.
3. Prefira documentação oficial, pesquisa original, norma, artigo acadêmico
   ou publicação do responsável pelo fato.
4. Faça ao menos uma busca dirigida a contrapontos da tese provisória.
5. Para cada fonte, registre título, URL, responsável, data de publicação
   quando disponível, data de acesso e trecho do brainstorm que ela apoia.
6. Registre divergências e limitações. Não combine opiniões diferentes como
   se formassem consenso.
7. Separe fatos confirmados, hipóteses e contrapontos nas seções próprias.
8. Marque o status como `em-sintese` e siga para a etapa 03.

## Saída

O `brainstorm.md` com pesquisa documentada e afirmações classificadas.

## Validação

- Toda afirmação externa verificável aponta uma fonte.
- Fatos sensíveis ao tempo foram pesquisados na execução atual.
- Fonte secundária não substitui fonte primária disponível.
- Pelo menos um contraponto foi procurado e registrado (ou a ausência dele).
- A pesquisa não sobrescreveu informação confirmada em `context/`.

## Idempotência

Atualize a ficha da mesma fonte quando houver nova consulta, sem duplicar a
linha. Preserve fonte antiga relevante no histórico.

## Ficha de fonte

```markdown
| [Título](URL) | Autor ou organização | AAAA-MM-DD | AAAA-MM-DD | Afirmação apoiada |
```

Quando a publicação não informar data, registre `não informada`. A data de
acesso sempre existe.

## Hierarquia de fontes

1. Norma, documentação oficial ou pesquisa original (por exemplo, órgão
   regulador, IBGE, conselho profissional, documentação do fornecedor).
2. Publicação da organização ou pessoa responsável pelo fato.
3. Veículo especializado que cite a origem.
4. Conteúdo opinativo, usado apenas como contraponto identificado.

## Temas regulados

Saúde, finanças, direito, nutrição e segurança exigem fonte do nível 1 ou 2
para qualquer afirmação factual. Sem essa fonte, a afirmação fica como
hipótese ou sai do arquivo.

## Checklist

- [ ] URLs apontam para a página consultada.
- [ ] Datas de acesso estão preenchidas.
- [ ] A síntese não depende só de resultados de busca.
- [ ] Conflitos entre fontes permanecem visíveis.
- [ ] Houve busca de contraponto.

## Erros comuns

- Citar a página de resultados de um buscador.
- Usar número sem abrir a fonte original.
- Pesquisar só material que confirma a tese provisória.
