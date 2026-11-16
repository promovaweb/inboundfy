# REFERENCIA.md; inboundfy-base-validador

## Manifesto obrigatório

Registre brief, asset, produtora, validadora, arquivos de metodologia, todos
os arquivos encontrados em `.inboundfy/context/`, catalogo de fontes e fontes
locais efetivamente lidas. Se `brand/` existir, registre seus Markdown e os
ativos visuais inspecionados. Marque cada item como `lido`, `não aplicável`
com justificativa ou `impedimento`.

## Hard gate de proibições

Execute esta conferência antes dos demais aspectos do asset.

1. Passe literal: compare cada termo, expressão e veto de
   `context/proibicoes.md` com o asset inteiro, incluindo frontmatter,
   headings, listas, CTA, alt text e texto incorporado em imagem.
2. Passe semântico: procure paráfrase, variação morfológica, tradução,
   eufemismo e tentativa de contornar o veto.
3. Passe estrutural: confronte a arquitetura completa com cada categoria de
   `context/estruturas-proibidas.md` (abertura, fechamento, vocabulário,
   parágrafo, headings, listas, pontuação, fluidez e autoridade).
4. Qualquer ocorrência reprova o asset. SEO, estética ou aprovação parcial
   não anulam esse resultado.
5. Exceção vale só quando o próprio arquivo canônico declara a condição
   permitida e o asset prova que a satisfaz. Registre regra, condição e
   prova; interpretação não cria exceção.

## Template do relatório

```markdown
# Validação de asset; <canal>/<item>

- **Asset:** `<caminho relativo da peça>`
- **Brief:** <caminho ou peça avulsa>
- **Produtora:** <inboundfy-especialista-*>
- **Validadora:** <inboundfy-validador-*>
- **Rodada:** <número>
- **ID da peça:** `<id>`
- **SHA-256 da peça:** `<hash completo obtido por inboundfy content digest>`
- **Veredito:** <aprovado | reprovado | devolvido para briefing | impedido>

## Fontes carregadas

<manifesto completo>

## Achados

| Localização | Trecho observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| <arquivo/seção> | <problema observado> | <origem da regra> | <mudança exigida> |

## Conferência de proibições

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

## Exemplo preenchido de correção

A oficina fictícia Pinhão Bicicletas anuncia R$ 80 e prazo no mesmo dia, mas a oferta informa R$ 120 e prazo após avaliação. A primeira rodada reprova preço e prazo; a segunda exige leitura integral e digest novo após corrigir ambos.

No passo de redigir o relatório, leia [o relatório completo e sua retomada](references/exemplo-de-validacao.md). Ele mostra manifesto, matriz, achados, encaminhamento e histórico preenchidos. Os marcadores de digest do exemplo nunca autorizam uma aprovação real.

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
- [ ] Todo achado tem prova e correção testável.
- [ ] O relatório aprovado contém ID, caminho, SHA-256 atual e veredito aprovado.
- [ ] O histórico preserva as rodadas anteriores.

## Erros comuns

- Aprovar o asset enquanto uma violação individual permanece.
- Procurar apenas expressões exatas e deixar passar paráfrase do mesmo
  padrão proibido.
- Corrigir a ocorrência apontada sem procurar o mesmo vício no restante do
  asset.
- Tratar exceção contextual como permissão geral.
- Corrigir o asset dentro da validadora.
- Ler apenas os contextos citados pela produtora.
- Inventar dado para desimpedir conflito ou template vazio.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-base-validador**, do grupo
**base**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Procedimento de julgamento

1. Receba ID, arquivo, brief, produtora e validadora. Confirme que todos apontam para o mesmo item.
2. Liste fontes realmente abertas. Para cada contexto, registre como afeta o asset; um template sem conteúdo não conta como fonte confirmada.
3. Execute quatro passes distintos: literal, semântico, estrutural e visual. O passe visual inclui imagem final, texto incorporado, logos e área de corte.
4. Confronte cada regra da produtora com um resultado localizado. “Aprovado” sem inspeção não conta como resultado.
5. Registre achados por local, trecho, regra, diagnóstico e ação testável. Não use média nem nota para compensar falhas.
6. Classifique o retorno pela tabela abaixo e salve no caminho canônico.
7. Releia a versão corrigida inteira e calcule o digest somente depois da última mudança.

| Situação | Veredito | Destino |
| --- | --- | --- |
| Regra violada com correção conhecida | reprovado | Produtora pareada |
| Objetivo, público ou oferta do brief contradiz a peça pedida | devolvido para briefing | Planejamento |
| Fonte obrigatória ausente ou conflitante | impedido | Responsável pelo fato ou setup |
| Todas as conferências concluídas sem achado | aprovado | Chamadora, com digest atual |

## Perguntas antes do veredito

A versão analisada é a mesma entregue? O preço pertence à oferta atual? Existe tentativa de dizer uma promessa vetada com sinônimos? O visual apresenta como fato algo ausente das fontes? O arquivo contém conteúdo de produção que vazaria para o leitor? A exceção está escrita no arquivo canônico ou foi apenas inferida?

## Guia específico do grupo

O relatório é a saída desta base; o asset continua sob responsabilidade da produtora. Mantenha as linhas canônicas de asset, ID, SHA-256 e veredito. A validadora de canal acrescenta seus testes ao contrato comum. Consulte `METODOLOGIA.md`, `CONTEXTO.md` e `ESCRITA.md` no primeiro ciclo; consulte novamente qualquer regra alterada entre rodadas.
