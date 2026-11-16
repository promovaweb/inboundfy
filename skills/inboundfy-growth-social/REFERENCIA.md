# Referência de presença social

## Método e escolhas

Escolha o papel do canal antes do formato. Um perfil pode ensinar uma tarefa, demonstrar produto ou abrir conversa com compradores. Pilares organizam perguntas recorrentes, sem impor percentagens universais de conteúdo. A capacidade de responder faz parte do plano de publicação.

| Tarefa do público | Formato candidato | Entrega mínima | Medida |
| --- | --- | --- | --- |
| Entender uma escolha operacional | Post com exemplo | Situação, opção e consequência | Respostas qualificadas |
| Executar uma sequência | Carrossel | Passos legíveis e completos | Salvamentos e aplicação relatada |
| Ver como funciona | Vídeo demonstrativo | Ação visível e resultado verificável | Retenção e visitas úteis |
| Conferir oferta | Demonstração e página | Limites, preço e próximo passo | Pedidos elegíveis |
| Conversar sobre dificuldade | Resposta contextual | Contribuição específica sem venda forçada | Conversa que continua |

Leia [o procedimento de presença social](references/pautas-formatos-e-escuta.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-social
grupo: growth
tipo: plano-social
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

| Data | Canal/persona | Pilar e pergunta | Acervo | Formato/recorte | Brief | CTA | Responsável | Medida/janela |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{data}} | {{canal/id}} | {{tarefa}} | {{ID}} | {{forma}} | {{caminho}} | {{ação}} | {{pessoa}} | {{evento/dias}} |

Ficha de escuta: URL, data, pergunta original, aderência à persona, contribuição possível, resposta preparada, autorização, URL publicada e retorno observado.

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Vitrine do Centro**, de Porto Alegre, oferece gestão para brechós por R$ 79/mês. O plano `soc-033` usa `acervo/033-etiquetas/processado.md`, persona `gestora-brecho` e brief `conteudo/brechos/04-briefs/soc-033.md`. A equipe dispõe de seis horas semanais. Escolhe Instagram para demonstrar organização de peças e mantém apenas atualização institucional no LinkedIn.

Os pilares são identificação das peças, controle de consignação e fechamento da venda. Durante quatro semanas, publica um carrossel e um vídeo por semana, com vinte minutos de atendimento após cada publicação. O carrossel explica como separar código da peça e valor da comissão. O vídeo mostra a mesma tarefa numa ficha fictícia, sem repetir o texto. CTA: acessar o modelo de etiqueta na página da oferta.

Resultados simulados: quatro carrosséis geram 8.000 impressões e 160 salvamentos; quatro vídeos geram 10.000 reproduções e 100 visitas à página. A taxa de salvamento por impressão dos carrosséis é 2%. Das 100 sessões identificadas com a UTM dos vídeos, dez pedem demonstração. A equipe não divide visitas por reproduções para chamar o resultado de CTR, pois as bases vêm de sistemas diferentes.

Custo: 24 horas a R$ 50 = R$ 1.200. Custo por pedido de demonstração identificado: R$ 120, sem atribuir todos os efeitos do perfil a esses dez pedidos. A responsável fictícia Tainá mantém o plano em `revisao`, entrega nova série a `inboundfy-especialista-instagram` e revisa o primeiro trecho do vídeo porque a maior perda de atenção ocorre antes da demonstração.

## Métricas e leitura do resultado

- Alcance, impressões e reproduções são bases diferentes. Nomeie a base em toda taxa.
- Salvamentos por impressão = salvamentos / impressões; engajamento por alcance usa pessoas alcançadas quando disponível.
- Retenção do vídeo acompanha curva e duração assistida, com a definição fornecida pela plataforma.
- Conversa qualificada: resposta que descreve tarefa, problema ou intenção compatível, conforme regra local.
- Conversão da página = pedidos elegíveis / sessões identificadas. Combine UTM e origem declarada sem dupla contagem.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Cada canal tem função e público próprios.
- [ ] Pilares respondem perguntas sustentadas pelo acervo.
- [ ] Brief contém entrega completa e CTA compatível.
- [ ] Legenda, texto alternativo e legibilidade foram previstos.
- [ ] Calendário reserva horas para resposta.
- [ ] Métricas declaram base, formato e janela.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Copiar publicação igual entre canais: adapte contexto, abertura e formato.
- Criar gancho que promete mais que a entrega: alinhe antes de produzir.
- Aumentar frequência sem responder comentários: ajuste capacidade.
- Tratar um post viral como regra: compare mediana da série e resultado posterior.

## Arquitetura aplicada

A skill `inboundfy-growth-social` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é uma série social com função por canal e briefs por peça. A skill planeja presença e relacionamento, sem substituir produção e validação pareadas.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
