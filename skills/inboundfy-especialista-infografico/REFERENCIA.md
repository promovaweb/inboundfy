# Manual de Infográfico

A copy deve permitir que a pessoa compreenda a relação entre os dados antes de ler a legenda. O texto entrega título, blocos, fontes, legenda e descrição acessível. A composição gráfica continua com a especialista de imagem.

## Diagnóstico antes da redação

1. O leitor precisa comparar valores, seguir um processo ou localizar partes de um conjunto?
2. Os valores usam a mesma unidade, período e população? Qual arquivo permite refazer a conta?
3. Quantos blocos cabem no tamanho aprovado sem reduzir o corpo de leitura?
4. O dado é observação do projeto, cálculo ou simulação didática? Essa natureza aparece perto do valor?
5. A legenda ficará em qual canal? Quem receberá a versão de texto quando a imagem não puder ser lida?

## Formato e orçamento de texto

| Campo | Faixa de trabalho | Conteúdo obrigatório |
| --- | --- | --- |
| Título | 6 a 12 palavras | Objeto e recorte, sem causalidade não demonstrada |
| Subtítulo | Até 25 palavras, se necessário | População, período ou condição |
| Blocos | 3 a 6; 1 ideia por bloco | Rótulo de até 6 palavras e explicação de 15 a 35 palavras |
| Número em destaque | Um por bloco, quando útil | Valor, unidade, base e fonte |
| Legenda | 80 a 180 palavras | Interpretação, limite e ação compatível |
| Alt text | Tamanho necessário para transmitir a mensagem | Ordem, relações e dados centrais; descrição longa se a peça for densa |
| Arquivo | Markdown no destino de `context/canais.md` | `titulo`, `fonte-dos-dados`, `brief`, envelope e blocos identificados |

Não comprima uma tabela extensa num alt text impraticável. Inclua uma versão longa acessível junto da imagem e indique sua localização.

As faixas são escolhas editoriais, não limites universais da plataforma nem
promessas de alcance. O brief aprovado pode ajustá-las com motivo registrado.
Confirme limites técnicos na ajuda oficial ou no campo de publicação da conta
antes do envio; registre a data. Não transforme corte de interface em tamanho do gancho.

## Método de construção

1. Monte uma tabela interna com afirmação, unidade, período, população, arquivo e seção. Refaça totais e percentuais. A diferença em pontos percentuais não equivale a uma variação percentual.
2. Escolha a leitura pelo tipo de informação:

| Material disponível | Organização | Conferência principal |
| --- | --- | --- |
| Mesma medida para grupos distintos | Comparação lado a lado | Bases e escalas iguais |
| Etapas dependentes | Fluxo numerado | Ordem e condição de avanço |
| Partes de um total | Composição | Soma e categorias sem sobreposição |
| Produto e utilidade | FAB por bloco | Característica confirmada, vantagem e benefício |

3. Escreva o título depois de escolher o recorte. Um dado de amostra não permite afirmar que todo o mercado se comporta igual.
4. Dê um ID a cada bloco. Deixe rótulo, destaque e explicação em campos distintos; a designer precisa conseguir mover o bloco sem perder sua fonte.
5. Escreva legenda com interpretação e limite. Use o CTA somente se o brief pedir. Não atribua efeito causal a uma diferença descritiva.
6. Escreva alt text pela ordem de leitura prevista, com as relações relevantes. Descreva o significado do gráfico; detalhes decorativos não substituem valores.
7. Faça o passe de prosa na legenda com `inboundfy-copy-editor`. Releia blocos para exatidão sem exigir parágrafos longos.

## Template do canal

No passo de escrita, abra [modelos prontos](references/modelos-e-exemplo.md).
Use o modelo do formato aprovado. Complete o envelope compartilhado antes
dos campos do canal. Separe corpo público, fontes e notas de produção.

## Exemplo com empresa brasileira fictícia

A Semente Clara, papelaria fictícia de Campinas, quer explicar o fechamento de um lote de cadernos. O brief pede quatro blocos de composição e uma simulação expressamente identificada, sem estatística de mercado. A soma de R$ 1.200 deve continuar verificável em texto.

A entrada e a peça completa estão em [modelos e exemplo](references/modelos-e-exemplo.md).
Os números, nomes e condições deste caso não viram contexto de outro projeto.

## Checklist numerado do canal

A numeração coincide com `inboundfy-validador-infografico`. Registre conforme, falha ou
não aplicável, com motivo e local. O passe visual avalia copy e apoio previsto.
A arte final segue para a validadora de imagem correspondente, quando houver.

1. [ ] **Literal | Envelope.** O ID, `titulo`, `fonte-dos-dados`, brief, persona, estado e destino estão preenchidos conforme o contrato compartilhado.
2. [ ] **Literal | Vocabulário.** Metadados, blocos, legenda, fontes e alt text respeitam os vetos canônicos e o dicionário.
3. [ ] **Semântica | Proveniência.** Cada valor tem fonte e natureza identificadas; simulação não aparece como levantamento ou resultado real.
4. [ ] **Semântica | Contas e comparabilidade.** Totais, percentuais, unidades, períodos e bases foram conferidos; o título não amplia a conclusão.
5. [ ] **Estrutural | Ordem dos blocos.** O arranjo escolhido permite comparação, composição ou sequência sem misturar funções.
6. [ ] **Estrutural | Densidade.** Cada bloco tem ID, rótulo e uma ideia; as faixas foram atendidas ou ajustadas no brief.
7. [ ] **Semântica | FAB aplicável.** Bloco de produto liga característica confirmada a vantagem e benefício; registre não aplicável para conteúdo sem produto.
8. [ ] **Semântica | Legenda.** A prosa interpreta o dado, declara seu limite e contém somente a ação aprovada.
9. [ ] **Visual | Hierarquia textual.** Título, destaque, unidade, explicação e fonte estão separados; nenhuma diferença depende somente de cor.
10. [ ] **Visual | Descrição acessível.** Alt text comunica ordem, relações e dados centrais; texto longo acessível existe quando necessário.
11. [ ] **Estrutural | Auditorias.** A legenda passou por `inboundfy-copy-editor`; a auditoria A5 e o retorno da validadora estão vinculados.
12. [ ] **Literal | Encaminhamento.** O pacote preserva fontes e IDs para a especialista de imagem; não declara aprovação da arte sem inspeção.

## Erros comuns do canal

- Mostrar “30%” sem informar de qual total: inclua base e unidade no bloco.
- Usar ilustrações de tamanhos diferentes para valores iguais: registre a comparação numérica, com a mesma escala pretendida.
- Transformar simulação em pesquisa: mantenha “simulação didática” no subtítulo, nas fontes e na legenda.
- Somar categorias sobrepostas: reorganize os grupos ou explique a sobreposição sem gráfico de partes de um total.
- Duplicar todos os blocos na legenda: use a prosa para explicar a leitura e seus limites.
- Escrever “imagem de infográfico” no alt text: informe os dados e a relação que o leitor perderia.

## Medição após a publicação

Acompanhe salvamentos e compartilhamentos por alcance, cliques da legenda quando rastreáveis e dúvidas sobre os dados. Se as pessoas perguntam pela unidade, revise o rótulo antes de testar outra cor. Compare peças do mesmo objetivo e janela de observação; uma taxa isolada não comprova efeito da copy.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

`inboundfy-especialista-infografico` produz título, blocos, legenda e alt text de infográfico a partir do brief aprovado.
Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md`.
Preserve o caminho definido por `context/canais.md`. Nos pacotes, mantenha
`brief` apontado para `04-briefs/` e o relatório em `06-auditoria/assets/`.

Encaminhe a copy aprovada para `inboundfy-especialista-infografico-imagem`, com IDs dos blocos, fontes e ordem de leitura. A arte não pode abreviar a fonte nem alterar a unidade.

Acione `inboundfy-copy-editor` no alcance definido pela SKILL.md e
`inboundfy-validador-infografico` antes de considerar a peça pronta. Corrija os achados e
envie o conjunto para nova leitura integral. Após a aprovação, entregue a
`inboundfy-planejamento` arquivos, fontes, pendências e próxima ação.

## Estruturas na redação

No passo de redação, consulte [a aplicação por formato](references/estruturas-persuasivas.md) para executar a estrutura já aprovada no brief.
