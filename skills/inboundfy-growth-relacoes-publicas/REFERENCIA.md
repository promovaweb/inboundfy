# Referência de relações públicas

## Método e escolhas

A pauta oferece ao jornalista uma história que ele consegue verificar. Dados originais, mudança que afeta um setor e caso com consequência concreta podem sustentar cobertura. Adjetivos sobre o produto não cumprem essa função. Uma resposta rápida só ajuda quando a fonte tem conhecimento direto.

| Material disponível | Abordagem | Preparação | Quando não usar |
| --- | --- | --- | --- |
| Pesquisa própria | Pauta de dados | Método, base agregada e limitações | Amostra sem origem |
| Caso autorizado | História de uso | Cliente disponível e contexto | Resultado sem comprovação |
| Especialista com experiência direta | Resposta de fonte | Resposta objetiva e credencial | Tema fora da atuação |
| Novidade com efeito setorial | Anúncio editorial | Data, impacto e demonstração | Mudança irrelevante ao leitor |
| Relato aprofundado | Participação em podcast | Episódios recentes e histórias verificáveis | Discurso comercial genérico |

Leia [o procedimento de relações públicas](references/pautas-porta-vozes-e-respostas.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-relacoes-publicas
grupo: growth
tipo: plano-relacoes-publicas
estado: rascunho
entrada: ["{{acervo ou pedido}}"]
brief: "{{caminho do brief}}"
persona: "{{id da persona}}"
canal: "{{canal ativo}}"
oferta: "{{oferta confirmada}}"
fontes: ["{{contexto}}", "{{fonte do tema}}"]
responsavel: "{{pessoa}}"
janela: "{{início e fim}}"
orcamento_reais: "{{valor aprovado}}"
proxima_skill: "{{skill e ação solicitada}}"
pendencias: ["{{pergunta ou nenhuma}}"]
```

| Campo da pauta | Preenchimento |
| --- | --- |
| Fato e data | {{o que aconteceu}} |
| Consequência para o leitor | {{mudança concreta}} |
| Fonte, método e limites | {{documento verificável}} |
| Editoria, contato e consulta | {{URL/data}} |
| Porta-voz e disponibilidade | {{pessoa/horário}} |
| Material autorizado | {{links}} |
| Condição editorial | {{aberta/exclusiva/embargo aceito}} |
| Retorno e encerramento | {{data/responsável}} |

Proposta: “Olá, {{nome}}. Sua reportagem sobre {{tema}} tratou de {{recorte}}. Temos {{fato novo}}, medido por {{método}} em {{período}}. Isso afeta {{público}} porque {{consequência}}. {{Porta-voz}} pode explicar {{pergunta}}. O método e os dados agregados estão em {{link}}.”

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Balcão de Dados**, de Ribeirão Preto, organiza registros de abastecimento de pequenas lojas. O plano `rp-032` usa `acervo/032-reposicao/processado.md`, persona `gestora-varejo` e brief `conteudo/varejo/04-briefs/rp-032.md`. Uma pesquisa fictícia reúne 80 lojas clientes que aceitaram fornecer dados agregados de reposição, durante oito semanas. Trinta lojas tiveram ao menos um atraso de fornecedor. A proporção é 37,5% da amostra, sem representar todo o varejo brasileiro.

A responsável fictícia Ema prepara método, período, definição de atraso e limitações. Seleciona seis jornalistas fictícios que cobrem varejo regional, após ler trabalhos recentes. O assunto proposto é “Atraso de reposição em 30 de 80 lojas pesquisadas”. A porta-voz fictícia Lina responde sobre operação; uma lojista autorizada relata o caso sem revelar dados de clientes.

A proposta oferece o material aberto, sem exclusividade. Há um retorno curto após três dias úteis, conforme a pauta e o prazo do contato. Na simulação de 30 dias, duas respostas levam a entrevistas e uma matéria é publicada. O custo de pesquisa editorial e preparação é R$ 2.000. O relatório registra uma cobertura com método citado e 45 sessões de referência; três pedidos comerciais declaram ter lido a matéria, sem atribuição causal automática.

Estado `revisao`: Ema confere a grafia e solicita correção factual de uma data. Uma menção sem link segue para `inboundfy-seo-links-externos`, sem exigir backlink como condição para a entrevista.

## Métricas e leitura do resultado

- Respostas úteis = respostas com interesse, pergunta ou encaminhamento / propostas entregues.
- Cobertura qualificada: publicações aderentes ao público, com mensagem e fonte representadas corretamente.
- Fidelidade factual: números, contexto e declarações conferidos após publicação.
- Tráfego de referência e origem declarada são sinais diferentes; informe os dois sem somá-los como pessoas únicas.
- Não converta cobertura em equivalência de valor publicitário nem some audiência integral de veículos como alcance real.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Fato, período, método e limitações estão disponíveis.
- [ ] O contato cobre a editoria e foi conferido recentemente.
- [ ] Porta-voz conhece limites e perguntas difíceis.
- [ ] Exclusividade ou embargo tem aceite registrado.
- [ ] Cobertura espontânea e paga aparecem separadas.
- [ ] Pedidos de correção tratam fatos verificáveis.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Enviar release a lista indiscriminada: selecione profissionais pela cobertura.
- Apresentar dado de clientes como retrato nacional: explicite a amostra.
- Exigir aprovação da matéria: ofereça conferência de fatos e fontes.
- Usar tragédia como oportunidade promocional: interrompa a abordagem comercial.

## Arquitetura aplicada

A skill `inboundfy-growth-relacoes-publicas` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é uma pauta ou resposta pública sustentada por fontes. A skill prepara relacionamento editorial e porta-voz, sem inventar notícia, declaração ou promessa de cobertura.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
