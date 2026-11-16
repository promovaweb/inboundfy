# Referência de parcerias com influenciadores

## Método e escolhas

Seguidores descrevem tamanho, mas a contratação depende de audiência e tarefa. Um criador com poucos compradores compatíveis pode servir melhor a uma oferta local. Conteúdo para anúncio exige bom arquivo e licença; patrocínio editorial exige audiência e entrega comprovadas. Meça essas compras separadamente.

| Necessidade | Modelo | Pagamento | Conferência |
| --- | --- | --- | --- |
| Expor oferta a público compatível | Publicação patrocinada | Cachê por entrega | Alcance real e perfil da audiência |
| Obter vídeo para anúncio | Produção com licença | Produção + uso contratado | Qualidade do arquivo e prazo de uso |
| Testar afinidade com produto | Envio sem obrigação | Custo do produto e frete | Não prometer publicação |
| Gerar vendas rastreáveis | Afiliado ou híbrido | Comissão e eventual mínimo | Venda líquida elegível |
| Construir presença recorrente | Embaixador | Pacote periódico | Continuidade e saturação |

Leia [o procedimento de parcerias com influenciadores](references/selecao-brief-e-direitos.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-influenciadores
grupo: growth
tipo: plano-influenciadores
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

| Criador | Público e fonte/data | Amostra comparável | Mediana de alcance | Entregas | Cachê/produção/licença | Janela | URL/cupom |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{perfil}} | {{compatibilidade}} | {{posts}} | {{número}} | {{formato}} | {{R$ por item}} | {{datas}} | {{identificador}} |

Brief: tarefa demonstrada, fato autorizado e fonte, limites da promessa, exemplo de uso, mensagem obrigatória de identificação comercial, liberdade de linguagem, CTA, revisões incluídas, aprovação, arquivo final e relatório.

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Grão de Rua**, de Curitiba, vende kits de café por R$ 120. O piloto `inf-014` usa `acervo/014-preparo/processado.md`, persona `cafe-em-casa` e brief `conteudo/cafe/04-briefs/inf-014.md`. A criadora fictícia Bia Luz publica receitas de café para moradores da região. A equipe confere dez vídeos recentes comparáveis e recebe dados agregados da audiência. A mediana observada é 8.000 visualizações, sem tratá-la como garantia.

O acordo prevê um vídeo de preparo e dois lembretes, por R$ 1.200. O kit e frete custam R$ 100 à empresa. A licença de republicação orgânica por 60 dias custa R$ 300. Uso em anúncio fica fora desse acordo. Há uma rodada de revisão factual e identificação comercial desde a abertura. Total: R$ 1.600.

Resultados simulados em 14 dias: 10.000 visualizações, 200 visitas e 20 pedidos por link ou cupom. Dois pedidos são cancelados. Restam 18 pedidos únicos, com receita de R$ 2.160. Custo por pedido líquido: R$ 88,89. A margem de contribuição de 45% antes da campanha gera R$ 972. Após os R$ 1.600, o saldo é negativo em R$ 628. Receita acima do cachê não tornou o piloto rentável.

A responsável fictícia Joana mantém o plano em `revisao`, pede teste com custo menor e encaminha eventual comissão a `inboundfy-growth-referencias`. O arquivo do vídeo permanece disponível apenas durante a licença contratada.

## Métricas e leitura do resultado

- CPM observado = custo da distribuição / impressões comprovadas × 1.000. Informe se a base é alcance, impressão ou visualização.
- CTR = cliques / impressões do mesmo relatório. Sessões não substituem cliques sem ressalva.
- CAC do piloto = custo total / novos compradores líquidos identificados.
- Retorno de contribuição = (margem incremental antes da campanha − custo da campanha) / custo da campanha.
- Conteúdo adquirido: acompanhe custo por arquivo aprovado e prazo de licença, além de conversão.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Amostra exclui sorteios e formatos incompatíveis.
- [ ] Público foi conferido além da contagem de seguidores.
- [ ] Direitos especificam mídia, prazo, território e edição.
- [ ] Identificação comercial está visível.
- [ ] Cancelamentos e pedidos duplicados foram descontados.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Comprar licença presumida: descreva usos por escrito.
- Exigir fala de cliente sem uso real: peça demonstração verificável.
- Avaliar criador por postagem viral isolada: use mediana de amostra comparável.
- Concluir rentabilidade pela receita: calcule margem e custo integral.

## Arquitetura aplicada

A skill `inboundfy-growth-influenciadores` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é uma contratação com entregas e direitos delimitados. O plano conecta público, formato, custo, licença e resultado, preservando a responsabilidade de cada especialista.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
