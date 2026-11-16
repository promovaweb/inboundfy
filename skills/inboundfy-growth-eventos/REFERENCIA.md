# Referência de marketing de eventos

## Método e escolhas

Escolha primeiro o papel da empresa. Uma palestra oferece autoridade; uma oficina permite observar execução; um encontro pequeno aprofunda relações; um estande compra acesso e exige equipe para qualificar conversas. O formato só faz sentido quando serve ao resultado prioritário.

| Objetivo | Formato ou papel | Preparação determinante | Medida central |
| --- | --- | --- | --- |
| Ensinar tarefa | Oficina própria | Exercício e suporte | Pessoas que concluem tarefa |
| Abrir conversas com contas | Encontro curado | Convites e agenda prévia | Reuniões realizadas |
| Expor conhecimento | Palestra | Tese, demonstração e ensaio | Conversas qualificadas após sessão |
| Avaliar canal presencial | Participação sem estande | Lista de pessoas e reuniões | Custo por reunião |
| Acessar público já reunido | Patrocínio | Público comprovado e contrapartidas | Custo por oportunidade |

Leia [o procedimento de marketing de eventos](references/producao-e-acompanhamento.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-eventos
grupo: growth
tipo: plano-eventos
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

| Prazo | Entrega | Responsável | Dependência | Conferência | Alternativa |
| --- | --- | --- | --- | --- | --- |
| {{data/fuso}} | {{convite/ensaio/sessão/retorno}} | {{pessoa}} | {{condição}} | {{teste}} | {{plano alternativo}} |

Ficha da conversa: pessoa/empresa, tarefa relatada, interesse explícito, material pedido, próximo passo combinado, responsável e data. Não trate leitura de crachá como pedido de contato.

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Mesa de Caixa**, de Belo Horizonte, vende organização financeira para padarias. O evento `evt-031` é uma oficina online para a persona `gestora-padaria`, em 18/03, às 15h de Brasília, com 40 vagas. Fontes: `acervo/031-fechamento/processado.md`, oferta e canais. Brief: `conteudo/padarias/04-briefs/evt-031.md`. A tarefa é montar um fechamento diário em planilha.

A responsável fictícia Leda faz ensaio dois dias antes. O roteiro reserva cinco minutos para contexto, vinte para exercício, dez para perguntas e cinco para próximos passos opcionais. O apoio técnico entrega planilha por email se a transmissão cair. O convite explica tarefa, horário e gravação. WhatsApp só atende quem escolheu receber lembrete por esse canal.

Orçamento simulado: R$ 300 de ferramenta, R$ 400 de divulgação e R$ 800 de horas, total R$ 1.500. Das 60 pessoas interessadas, 40 confirmam vaga, 28 comparecem e 20 concluem o exercício. Oito pedem conversa; seis reuniões acontecem e três viram oportunidades. Comparecimento: 28/40 = 70%. Custo por reunião realizada: R$ 1.500/6 = R$ 250. Custo por oportunidade: R$ 500.

Leda envia material aos participantes e responde individualmente aos oito pedidos no dia seguinte. Os demais recebem apenas o acompanhamento previsto na inscrição. Estado do plano: `revisao`, aguardando resultado das três oportunidades em 30 dias. O handoff para `inboundfy-growth-revops` inclui contexto e próximos passos, sem atribuir receita ainda ausente.

## Métricas e leitura do resultado

- Comparecimento = presentes únicos / inscrições confirmadas. Separe lista de espera.
- Conclusão da tarefa = participantes que completam exercício / presentes elegíveis.
- Custo por reunião = custo total / reuniões qualificadas realizadas, não apenas agendadas.
- Oportunidade originada exige definição do CRM. Influência em negócio já existente deve ser reportada separadamente.
- Ponto de equilíbrio = custo total / margem de contribuição média por venda. Use horizonte explícito, sem confundir receita com margem.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Papel da empresa e resultado prioritário foram escolhidos.
- [ ] Custo inclui equipe, deslocamento e acompanhamento.
- [ ] Ensaio, acessibilidade e alternativa técnica estão previstos.
- [ ] Registro de conversa inclui próximo passo combinado.
- [ ] Pessoas sem pedido comercial recebem tratamento próprio.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Julgar evento por inscrições: acompanhe presença, tarefa e reunião realizada.
- Comprar patrocínio sem perfil do público: peça dados de edições comparáveis.
- Enviar apresentação genérica depois: retome o problema mencionado pela pessoa.
- Esquecer acompanhamento no orçamento: reserve horas antes de aprovar a produção.

## Arquitetura aplicada

A skill `inboundfy-growth-eventos` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é uma edição de evento e seu acompanhamento. Registre papel, objetivo, público, orçamento, experiência e oportunidade, sem transformar presença em autorização comercial irrestrita.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
