# Manual de artigo de blog

## Diagnóstico da peça

1. Qual pergunta de busca o leitor precisa resolver nesta página?
2. O brief pede procedimento, comparação ou explicação?
3. Quais fontes sustentam os exemplos, limites e menções comerciais?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Leitor quer executar uma tarefa | Procedimento com entrada, passos e conferência | Ensaio que adia a resposta |
| Leitor compara alternativas | Tabela com condições iguais e limites | Ranking sem fonte |
| Leitor quer entender um termo | Definição situada e exemplo calculado | Abertura sobre a história do setor |

## Formato e parâmetros editoriais

Markdown UTF-8 com um H1. Preserve `title`, `description`, `slug` e `brief` quando houver pacote. `title` usa até 60 caracteres como alvo editorial; `description` usa 145 a 155 caracteres. Essas faixas orientam redação, não garantem exibição em buscador. Não mude URL publicada sem pedido e plano do projeto.

O brief fixa a extensão conforme a pergunta. Na ausência de faixa, proponha 800 a 1.400 palavras para um guia com várias etapas ou 400 a 700 para uma dúvida estreita. Registre a faixa antes da expansão; nunca complete palavras por repetição. O exemplo abaixo usa o segundo formato.

Salve no caminho de `context/canais.md`; em pacote, preserve `97-ativos-finais/blog/<slug>/README.md`. A imagem tem contrato separado. Use links descritivos, tabelas com cabeçalhos e texto alternativo quando houver imagem.

## Método de produção

No passo de redação, consulte [estrutura editorial e menções comerciais](references/estrutura-editorial.md).

1. Separe pergunta principal, dúvidas secundárias e assuntos fora do recorte. Confirme a intenção com `inboundfy-base-seo` antes do outline.
2. Escreva a resposta principal em duas frases. Distribua o mecanismo, a execução, a demonstração e a exceção nos H2. H3 serve para subdividir uma tarefa real.
3. Abra pelo objeto da busca. Para procedimento, mostre entrada e resultado esperado; para comparação, explicite a diferença prática; para explicação, descreva o mecanismo.
4. Desenvolva cada seção com explicação e exemplo interpretado. No procedimento, informe pré-requisito, ação, resultado observável e como tratar uma falha.
5. Confira conta, unidade, período e fonte de cada número. Não converta um caso isolado em promessa geral. Aplique FAB somente às menções comerciais autorizadas.
6. Termine com a ação prevista no brief. Passe por `inboundfy-copy-editor`, metadata de `inboundfy-base-seo`, A5 e validadora. Imagem segue para `inboundfy-especialista-blog-imagem` depois da aprovação textual.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-blog
tipo: blog
canal: blog
estado: rascunho
persona: "{persona selecionada}"
title: "{resposta prometida em até 60 caracteres}"
description: "{resumo fiel com 145 a 155 caracteres}"
slug: "{slug existente ou aprovado}"
intencao: "{pergunta validada}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

# {Título alinhado à pergunta}

{Resposta principal e condição de uso.}

## {Mecanismo necessário para entender a tarefa}

{Explicação e exemplo com origem.}

## {Procedimento ou comparação}

{Entradas, ações e resultado que o leitor pode conferir.}

## {Limite ou falha provável}

{Quando a orientação deixa de servir e como reconhecer isso.}

{CTA previsto no brief.}
```

## Modelos por situação

### Modelo de comparação

Use somente com intenção comparativa validada. Compare as alternativas na mesma tarefa, com a mesma unidade e condições.

```markdown
# {Alternativa A ou B para a tarefa da persona}

{Diferença principal e condição que favorece cada alternativa.}

| Condição de uso | Alternativa A | Alternativa B | Fonte |
| --- | --- | --- | --- |
| {volume ou frequência} | {comportamento confirmado} | {comportamento confirmado} | {origem e data} |
| {dependência ou pré-requisito} | {condição} | {condição} | {origem e data} |

## {Aplicação do primeiro cenário}

{Exemplo com entrada igual para ambas e resultado interpretado.}

## {Limite da comparação}

{O que não foi medido e quando a orientação deixa de servir.}

{Ação prevista no brief.}
```

Para atualização de artigo publicado, registre seções a manter, fatos a atualizar, links a conferir e alcance pedido. Preserve URL e âncoras existentes quando não houver pedido de mudança. Não reescreva o artigo inteiro por uma correção de preço.

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-blog/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Campos `title`, `description`, `slug`, intenção e `brief` de pacote presentes; faixas editoriais registradas.
2. [ ] **semântica**: Title, H1 e abertura respondem à mesma pergunta validada por `inboundfy-base-seo`.
3. [ ] **estrutural**: Um H1 e H2/H3 com função própria; procedimento permite executar e conferir a tarefa.
4. [ ] **semântica**: Exemplos têm interpretação, conta correta e limite; promessa e FAB conferem com fontes.
5. [ ] **literal**: Links, grafias, unidade e período foram conferidos; URL existente foi preservada.
6. [ ] **visual**: Tabelas, links e eventual alt text permitem leitura; imagem segue para a especialista de imagem.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de blog

- Usar palavra-chave no título sem responder à pergunta na abertura. Refaça o recorte antes de acrescentar subtítulos.
- Repetir definições para cumprir contagem. Troque a repetição por demonstração ou encerre a seção.
- Atribuir à ferramenta o resultado de um caso isolado. Explique a condição observada e o limite.

## Acompanhamento da peça

Compare cliques orgânicos, consultas e ação final por URL e período. Queda de visitas pede conferir intenção, atualização factual e links antes de propor reescrita. Não prometa posição no buscador.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `blog`, persona, objetivo do brief, formato e `inboundfy-validador-blog` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
