# Referência de distribuição de conteúdo

## Método e escolhas

Distribuição começa na pergunta do leitor e no lugar que aceita a contribuição. Uma publicação completa numa comunidade, um resumo numa newsletter e um artigo convidado exigem entregas diferentes. O plano escolhe poucas rotas, adapta o conteúdo e acompanha a ação após o clique.

| Situação do ativo | Rota | Adaptação necessária | Encaminhamento |
| --- | --- | --- | --- |
| Tutorial com aplicação imediata | Grupo setorial autorizado | Responder a dúvida no próprio grupo | Comunidade |
| Pesquisa com dado novo | Newsletter editorial | Resumo, método e fonte | Parcerias ou relações públicas |
| Guia durável | Artigo convidado | Recorte original para aquele leitor | Parcerias |
| Página de ferramenta | Diretório ou marketplace | Cadastro próprio da plataforma | inboundfy-growth-diretorios |
| Menção sem link | Contato editorial sobre a fonte | Contexto e URL verificável | inboundfy-seo-links-externos |

Leia [o procedimento de distribuição de conteúdo](references/rotas-e-adaptacoes.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-distribuicao
grupo: growth
tipo: plano-distribuicao
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

| Prioridade | Destino e URL | Persona | Regra/data | Versão e contribuição | CTA/UTM | Envio | Estado | Visitas úteis |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{ordem}} | {{destino}} | {{id}} | {{consulta}} | {{arquivo}} | {{link}} | {{data/pessoa}} | {{rascunho/enviado/aceito/recusado}} | {{número}} |

Proposta editorial: “Olá, {{editora}}. Seu público perguntou sobre {{tarefa}} em {{publicação}}. Temos {{material verificável}}. Posso preparar {{recorte original}}, com {{entrega concreta}}, para sua próxima edição?”

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Rota de Bairro**, de Recife, oferece organização de entregas para pequenos mercados. O ativo `dist-022`, em `acervo/022-entrega-bairro/processado.md`, contém um guia de planejamento de rotas. A persona é `dona-mercado`. A oferta confirmada custa R$ 89/mês. O brief fica em `conteudo/entregas/04-briefs/dist-022.md`.

A equipe seleciona três rotas: newsletter de uma associação fictícia de varejistas, grupo autorizado de lojistas e carrossel no perfil da empresa. Rejeita um portal generalista por falta de leitor compatível. Cada versão entrega uma tarefa: mapa por bairro, lista de horários ou sequência de preparação. A newsletter aponta para `https://example.com/guia?utm_source=associacao&utm_medium=referral&utm_campaign=rotas_022`.

Em 14 dias simulados, newsletter gera 90 sessões, grupo gera 50 e perfil gera 60. O evento útil é baixar o modelo de rota: 27, 10 e 12 pessoas, respectivamente. A rodada custa R$ 600, incluindo adaptação e negociação. Custo por download = R$ 600 / 49 = R$ 12,24. Das 49 pessoas, oito pedem demonstração no período. Sem chave que conecte sessão e pedido, a equipe reporta esses oito como total observado, sem repartir por origem.

A responsável fictícia Iara registra o plano como `revisao`, pede ajuste da medição a `inboundfy-metricas` e entrega o próximo recorte de newsletter a `inboundfy-growth-parcerias`. Um pedido para cadastrar a ferramenta numa lista segue para `inboundfy-growth-diretorios`.

## Métricas e leitura do resultado

- Aceitação editorial = propostas aceitas / propostas entregues, com data de resposta.
- Consumo útil = visitantes que completam o evento definido / sessões elegíveis por destino.
- Custo por ação útil = custo de negociação, adaptação e distribuição / ações deduplicadas.
- Conversão por origem usa eventos ligados à mesma origem e janela. Compartilhamentos privados podem perder a UTM; acrescente pergunta opcional de origem.
- Republicação aceita não equivale a backlink conquistado nem a venda.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Destinos têm regra consultada e pessoa responsável.
- [ ] Cada adaptação oferece valor dentro do destino.
- [ ] Links e UTMs foram testados no celular.
- [ ] Recusas e envios anteriores foram consultados.
- [ ] A ação útil possui evento e denominador.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Copiar a mesma abertura para todos os destinos: reescreva conforme a pergunta local.
- Somar alcance de canais como pessoas únicas: mantenha alcance separado.
- Confundir distribuição com cadastro: envie a tarefa de diretório à skill própria.
- Medir clique sem olhar destino: confira carregamento e conclusão da tarefa.

## Arquitetura aplicada

A skill `inboundfy-growth-distribuicao` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é o envio de uma versão de conteúdo para um destino aceito. O plano conserva a relação entre acervo, versão, origem, visita útil e próxima ação.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
