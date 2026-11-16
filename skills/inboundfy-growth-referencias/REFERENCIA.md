# Referência de programa de indicação

## Método e escolhas

Peça indicação depois de uma entrega concreta. Benefício deve caber na margem e ser explicado aos dois lados antes da conversão. Para afiliado, acrescente comissão, prazo de conciliação e regras de divulgação. Avaliação pública exige tratamento próprio e consulta à política atual da plataforma.

| Situação | Modelo | Evento de recompensa | Regra principal |
| --- | --- | --- | --- |
| Cliente satisfeito recomenda colega | Indicação entre clientes | Compra elegível confirmada | Benefício transparente |
| Profissional divulga continuamente | Afiliado | Venda líquida atribuída | Comissão e conciliação |
| Produto facilita convite de equipe | Convite funcional | Ativação da conta convidada | Valor real para ambas as partes |
| Empresa pede opinião pública | Avaliação | Sem condicionar nota | Conferir política da plataforma |
| Marca oferece acesso ao próprio público | Parceria | Entrega contratada | Encaminhar a parcerias |

Leia [o procedimento de programa de indicação](references/regras-atribuicao-e-conciliacao.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-referencias
grupo: growth
tipo: plano-referencias
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

| Regra | Valor preenchido |
| --- | --- |
| Quem pode indicar e quem pode receber | {{elegibilidade}} |
| Momento do convite | {{evento de valor}} |
| Benefício para cada lado | {{R$ ou condição}} |
| Conversão elegível e janela | {{evento/dias}} |
| Duas origens ou códigos | {{regra de precedência}} |
| Cancelamento e devolução | {{tratamento}} |
| Limite, conciliação e pagamento | {{teto/data/responsável}} |
| Atendimento e contestação | {{canal/prazo}} |

Convite: “Você concluiu {{tarefa}}. Se conhecer alguém com a mesma necessidade, compartilhe {{link}}. A pessoa recebe {{benefício}}. Você recebe {{benefício}} após {{condição}}, conforme {{regulamento}}.”

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Balcão Fácil**, de Campinas, vende software para papelarias por R$ 100/mês. O plano `ref-028` usa `acervo/028-primeira-venda/processado.md`, persona `dona-papelaria` e brief `conteudo/papelarias/04-briefs/ref-028.md`. A margem de contribuição fictícia antes de incentivos é 70%. O programa convida clientes que concluíram o primeiro mês de uso.

A pessoa indicada recebe R$ 20 de desconto na primeira mensalidade. Quem indica recebe R$ 30 de crédito após pagamento confirmado e encerramento da janela operacional de conferência definida pelo projeto. Atribuição: primeiro código válido registrado no cadastro, durante 30 dias. Autorreferência não é elegível. A equipe oferece contestação manual; endereço de rede compartilhado sozinho não prova uso indevido.

No piloto de 60 dias, 100 clientes recebem convite, 20 compartilham e 40 pessoas visitam. Dez contratam; duas cancelam dentro da janela e não geram recompensa. Os oito pedidos elegíveis geram R$ 240 de créditos e R$ 160 de descontos. Operação custa R$ 200. Custo por novo cliente elegível = R$ 600/8 = R$ 75. A margem mensal de R$ 70 serve para estimar recuperação do custo, sem assumir permanência futura.

A responsável fictícia Dara concilia oito IDs, registra dois encerramentos sem recompensa e mantém o plano em `revisao` até medir retenção em 90 dias. Handoff a `inboundfy-growth-loops`: 0,2 compartilhadores por cliente convidado × 2 visitas × 0,2 conversão líquida = 0,08 cliente elegível por convite neste ciclo.

## Métricas e leitura do resultado

- Participação = pessoas que compartilham / pessoas elegíveis convidadas.
- Conversão líquida = novas compras elegíveis após cancelamentos / visitas ou cadastros atribuídos, com base explícita.
- CAC de indicação = incentivos, descontos e operação / novos clientes líquidos.
- Conciliação = recompensas com pagamento ou crédito confirmado / recompensas liberadas.
- Compare retenção e margem por coorte indicada e outras origens com perfil semelhante. Não presuma superioridade da indicação.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Convite ocorre após evento concreto de valor.
- [ ] Benefício e condição aparecem para ambos os lados.
- [ ] Janela e precedência de atribuição estão escritas.
- [ ] Compra cancelada e autorreferência têm tratamento.
- [ ] Cada recompensa tem ID e confirmação única.
- [ ] Avaliações não são condicionadas a nota positiva.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Premiar cadastro sem controlar qualidade: escolha evento compatível com o objetivo.
- Pagar link e cupom da mesma compra: aplique regra única de precedência.
- Pedir acesso à agenda do cliente: ofereça link compartilhável por iniciativa dele.
- Importar comissão de outro negócio: recalcule pela margem e capacidade.

## Arquitetura aplicada

A skill `inboundfy-growth-referencias` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é uma indicação ou venda afiliada com conversão verificável. O plano conecta convite, benefício, atribuição, conciliação e permanência, sem misturar recomendação com avaliação comprada.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
