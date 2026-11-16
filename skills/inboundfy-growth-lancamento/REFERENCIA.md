# Referência de lançamento

## Método e escolhas

Dimensione a comunicação pelo impacto da mudança. Uma correção pequena pode caber no changelog. Uma integração interessa a um segmento. Um produto novo exige demonstração, acesso e acompanhamento. O lançamento termina com a leitura de adoção, não com o último post.

| Mudança | Escala de comunicação | Demonstração | Acompanhamento |
| --- | --- | --- | --- |
| Correção pontual | Changelog e público afetado | Antes/depois verificável | Confirmar solução |
| Recurso para segmento | Email segmentado e página | Tarefa específica | Uso pelo segmento |
| Integração | Parceiro e usuários compatíveis | Fluxo entre ferramentas | Conexões concluídas |
| Produto novo | Campanha e acesso gradual | Tarefa completa | Ativação e permanência |
| Acesso limitado | Lista com capacidade explícita | O que já funciona | Convites e suporte |

Leia [o procedimento de lançamento](references/prontidao-e-calendario.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-lancamento
grupo: growth
tipo: plano-lancamento
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

| Etapa/data | Público | Mudança e fonte | Peça/CTA | Dependência | Responsável | Medida | Alternativa |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{etapa}} | {{persona/coorte}} | {{fato}} | {{brief/link}} | {{condição}} | {{pessoa}} | {{evento}} | {{ajuste}} |

Mensagem central: “{{público}} já pode {{tarefa}} com {{novidade}}. A demonstração mostra {{prova}}. O acesso inclui {{limite}} por {{preço confirmado}}. Comece por {{ação disponível}}.”

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Agenda do Bairro**, de Salvador, lança confirmação de agendamento por WhatsApp para salões. O plano `lan-026` liga `acervo/026-confirmacao/processado.md` ao brief `conteudo/agenda/04-briefs/lan-026.md`. A persona é `gestora-salao`. A oferta confirmada é R$ 129/mês; mensagens e limites constam da página de oferta fictícia. A comunicação não promete eliminar faltas.

Em D−14, cinco salões convidados testam confirmação e cancelamento. Em D−7, a equipe corrige instruções e grava demonstração com dados fictícios. Em D−2, testa cadastro, pagamento, ativação e atendimento. D0 abre acesso a 50 salões para caber na capacidade de suporte. A mensagem diz: “Confirme o horário e receba a resposta na agenda. Veja a demonstração e confira os limites do plano.”

A empresa usa email para clientes, demonstração no perfil social e webinar com parceiro. Cadastros em catálogos seguem para `inboundfy-growth-diretorios`. Cada canal recebe brief próprio. O orçamento de R$ 3.000 inclui peças, suporte inicial e divulgação.

Resultados simulados em 14 dias: 300 visitas, 60 cadastros e 36 salões que concluem a primeira confirmação. Ativação = 36/60 = 60%. Vinte contratam o plano, sendo 12 novos clientes e oito clientes antigos que alteram plano. Custo por novo cliente = R$ 3.000/12 = R$ 250; o relatório separa expansão. Estado `revisao`, aguardando uso no segundo mês. A responsável fictícia Cora entrega os 24 cadastros sem ativação a `inboundfy-growth-onboarding` com as dúvidas registradas.

## Métricas e leitura do resultado

- Interesse: cadastros elegíveis / visitas à página, separados de clientes existentes.
- Ativação: cadastros que concluem a tarefa central / cadastros elegíveis na mesma coorte.
- Tempo até primeiro valor: mediana entre cadastro e conclusão da tarefa.
- Adoção: contas elegíveis que usam o recurso / contas elegíveis expostas ao anúncio.
- Aquisição, expansão e renovação têm bases diferentes. Informe receita líquida e período antes de atribuir retorno.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] A tarefa prometida funciona do cadastro ao resultado.
- [ ] Preço, limite e disponibilidade coincidem nos canais.
- [ ] Suporte tem capacidade e alternativa de atendimento.
- [ ] Clientes antigos e novos públicos têm mensagens próprias.
- [ ] A leitura pós-lançamento inclui ativação e adoção.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Anunciar recurso ainda indisponível sem explicar acesso: ajuste a promessa e o CTA.
- Usar lista de espera como usuários ativos: reporte as etapas separadamente.
- Repetir anúncio amplo para melhoria pequena: dimensione o esforço.
- Ampliar alcance antes de testar atendimento: abra por coortes compatíveis com a capacidade.

## Arquitetura aplicada

A skill `inboundfy-growth-lancamento` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é uma novidade com data, público e disponibilidade definidos. O plano articula aquisição e adoção sem assumir a operação de produto nem substituir especialistas de canal.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
